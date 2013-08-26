(ns clojure-ls
  (:use [jayq.core :only [$ ajax on html is]]
        [jayq.util :only [log]]))


(defn lecture [video-name video-data]
  (log video-name)
  (log video-data)

  (let [my-player ($ "video")]
    (on ($ "#pauseVideoTickbox") "click"
        (fn [] (when (and (pos? (count ($ "#quiz > p")))
                         (not (is ($ "#pauseVideoTickbox") ":checked")))
                (.play (first my-player)))))))



($ (fn []
     (on ($ "#quiz") "mousemove" (fn [e]
                                      (this-as this
                                               (let [x (- (.-pageX e) (.-offsetLeft this))
                                                     y (- (.-pageY e) (.-offsetTop this))]
                                                 (log (str x ", " y))
                                                 (html ($ "#videoMouseLocation") (str "(" x "," y ")"))))))))
