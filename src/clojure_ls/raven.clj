(ns clojure-ls.raven
  (:require [hiccup.util]
            [clojure.string :as string]
            [cemerick.friend :as friend]
            [cemerick.friend.util :as friend.util]
            [ring.util.response :as response])
  (:import [java.security.spec X509EncodedKeySpec]
           [java.security Signature]
           [java.security.cert CertificateFactory ]
           [sun.misc BASE64Decoder]))

;; Useful pages: https://raven.cam.ac.uk/project/
;;               https://raven.cam.ac.uk/project/waa2wls-protocol.txt
;;               https://raven.cam.ac.uk/project/keys/

(def raven-response-keys [:ver :status :msg :issue :id :url :principal :ptags :auth :sso :life :params :kid :sig])

(defn raven-principal-from-callback [request]
  (let [wls-response-str  (:WLS-Response (:params request))
        wls-response-vals (string/split wls-response-str #"!") ; Split the response string by "!"
        wls-response      (zipmap raven-response-keys wls-response-vals)] ; Create map based on known response keys

    (if (not= "200" (:status wls-response))
      nil     ; The response from raven was something other than 200. It failed.
      (let
          [;; Load raven certificate
           cert-in      (java.io.FileInputStream. (.getFile (clojure.java.io/resource "pubkey2.crt")))
           cert-factory (CertificateFactory/getInstance "X.509")
           cert         (.generateCertificate cert-factory cert-in)

           ;; Create signature object based on certificate public key
           sig          (doto (Signature/getInstance "SHA1withRSA")
                          (.initVerify (.getPublicKey cert)))

           ;; Recreate the string that was signed by raven
           signed-str   (first (string/split wls-response-str (re-pattern (str "!2!" (:sig wls-response)))))

           ;; Recreate the signature that raven has sent us
           response-sig (.decodeBuffer (BASE64Decoder.) (-> (:sig wls-response)
                                                            (string/replace "-" "+")
                                                            (string/replace "." "/")
                                                            (string/replace "_" "=")))

           ;; Verify the signature
           _            (.update sig (.getBytes signed-str "ASCII"))
           verified     (.verify sig response-sig)]

        ;; Return bool: verified or not.
        (when verified
          (:principal wls-response))))))


(defn raven-auth-url [app-description callback-url]
  (str (hiccup.util/url
        "https://raven.cam.ac.uk/auth/authenticate.html"
        {:ver 3
         :url callback-url
         :desc (hiccup.util/url-encode app-description)
         :fail "no"})))

(defn workflow [req]
  {:body (str "URI: " (:context req))}
  (cond
   (= (:uri req) "/auth/raven")
   (response/redirect (raven-auth-url "Friend Workflow" (str (friend.util/original-url req) "/callback")))
   (= (:uri req) "/auth/raven/callback")
   (if-let [principal (raven-principal-from-callback req)]
     (with-meta
       {:identity principal :roles #{:user} :email (str principal "@cam.ac.uk")}
       {:type ::friend/auth ::friend/redirect-on-auth? "/auth/raven/success"})
     (response/redirect "/auth/raven/error"))))
