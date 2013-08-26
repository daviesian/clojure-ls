(ns clojure-ls.handler
  (:use [compojure.core]
        [clojure.pprint])
  (:require [clojure-ls.raven :as raven]
            [clojure-ls.db :as db]
            [clojure-ls.templates :as templates]
            [cemerick.friend.openid :as openid]
            [compojure.handler :as handler]
            [compojure.route :as route]
            [cemerick.friend :as friend]
            [ring.util.response :as response]))


(defroutes auth-routes
  (GET "/raven/error" [] "Raven authentication error")
  (GET "/raven/success" req (str "Raven authentication succeeded: " (:current (friend/identity req))))
  (GET "/" req (templates/choose-openid-provider (str (:context req) "/openid")))
  (route/not-found "Auth route not found"))


(defroutes teaching-routes
  (GET "/" req
       (templates/home-page req))
  (GET "/:year" [year :as req]
       (templates/course-list req (db/get-courses-for-year year)))
  (GET "/:year/:course-urltitle" [year course-urltitle :as req]
       (templates/course-page req (db/get-course course-urltitle year)))
  (GET "/:year/:course/:type" [year course type :as req]
       (response/redirect (str "/" year "/" course)))
  (GET "/:year/:course/:type/:activity-urltitle" [year course type activity-urltitle :as req]
       (templates/activity-page req (db/get-activity activity-urltitle))))


(defroutes app-routes
  (context "/auth" [] auth-routes)
  (context "/teaching" [] teaching-routes)
  (GET "/" req {:body (with-out-str (pprint req) (println) (pprint db/db))
                :content-type "text/plain"})
  (GET "/protected" req (friend/authorize #{:user}) "Protected page. You are a user.")
  (friend/logout (ANY "/logout" req "Logout"))
  (route/resources "/")
  (route/not-found "Not Found"))

(def app
  (handler/site (-> app-routes
                    (friend/authenticate {:default-landing-uri "/"
                                          :allow-anon? true
                                          :unauthenticated-handler (fn [req] {:body "Unauthenticated" :status 401 :content-type "text/plain"})
                                          :workflows [raven/workflow
                                                      (openid/workflow :openid-uri "/auth/openid"
                                                                       :credential-fn #(assoc % :roles #{:user})
                                                                       :login-failure-handler #(println %))]}))))
