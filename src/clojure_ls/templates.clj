(ns clojure-ls.templates
  (:use [hiccup.core]
        [hiccup.page]
        [clojure-ls.db])
  (:require [cemerick.friend :as friend]))


(defn choose-openid-provider [post-url]
  (html5
   [:head [:title "Hi"]]
   [:body
    [:form {:action post-url :method :post}
     [:input {:name "identifier" :type :hidden :value "https://www.google.com/accounts/o8/id"}]
     [:button {:type :submit} "Login with Google"]]]))

(defn layout [request title breadcrumbs content & javascript]
  (html5
   [:head
    [:title title]
    (include-css "/css/video-js.css")
    (include-css "/css/normalize.css")
    (include-css "/css/lecture.css")
    (include-js "/js/video.js")]
   [:body
    [:div.top
     [:a {:href (str (:context request) "/1213/prolog")} "Prolog Home"]

     (for [{:keys [title uri]} breadcrumbs]
       (html " > "
             [:a {:href (str (:context request) uri)} title]))
     [:span {:style "float:right"} (:current (friend/identity request))]]
    content
    (include-js "/js/jquery-1.7.2.min.js")
    (include-js "/js/quiz.js")
    (include-js "/js/lecture.js")
    (include-js "/js/data.js")
    (include-js "/js/ajax.js")
    [:script "eventUrl = 'http://localhost:3000/'"]
    (when javascript
      [:script javascript])
    ]))

(defn home-page [request]
  (layout request
          "Computer Laboratory Interactive Lecture Server"
          []
          [:h1 "Computer Laboratory Interactive Lecture Server"]
          ))

(defn course-list [request courses]
  (layout request
          (str "List of courses for " (:fullversion (first courses)))
          [{:title (:fullversion (first courses)) :uri (str "/" (:urlversion (first courses)))}]
          (html
           (for [c courses]
             [:li [:a {:href (str (:context request) "/" (:urlversion c) "/" (:urltitle c))} (:fulltitle c)]]))))

(defn course-page [request course]
  (layout request
          (:fulltitle course)
          [{:title (:fullversion course) :uri (str "/" (:urlversion course))}
           {:title (:fulltitle course) :uri (str "/" (:urlversion course) "/" (:urltitle course))}]
          (html
           [:h1 (:fulltitle course)]
           [:p "Welcome to the Prolog course! We hope you enjoy the material. Please get in contact with us via email if you experience any technical issues using this site. Additional course material:"]
           [:ul (for [a (sort-by :index (:activity course))]
                  [:li [:a {:href (str (:context request) "/" (:urlversion course) "/" (:urltitle course) "/" (:urltype a) "/" (:urltitle a)) } (:fulltitle a)]])])))

(defn activity-page [request activity]
  (let [course (course-from-activity activity)
        video-url (str "http://svr-acr31-electure.cl.cam.ac.uk/video/" (:urltitle activity))]
    (layout request
            (:fulltitle activity)
            [{:title (:fullversion course) :uri (str "/" (:urlversion course))}
             {:title (:fulltitle course) :uri (str "/" (:urlversion course) "/" (:urltitle course))}
             {:title (:fulltitle activity) :uri (str "/" (:urlversion course) "/" (:urltitle course) "/" (:urltype activity) "/" (:urltitle activity))}]
            (html [:h1 (:fulltitle activity)]
                  [:p [:video#video.video-js.vjs-default-skin {:controls true :preload "auto" :width 640 :height 480}
                       [:source {:src (str video-url ".mp4")}]
                       [:source {:src (str video-url ".ogv")}]]]

                  [:p.questionControls
                   [:input#pauseVideoTickbox {:type :checkbox :checked true}]
                   " Pause video for interactive questions"
                   [:span.download [:b " Download: "]
                    [:a {:href (str video-url ".mp4")} "MP4"] " | "
                    [:a {:href (str video-url ".ogv")} "OGV"] " | "
                    [:a {:href (str video-url ".pdf")} "PDF"]]
                   [:br]
                   [:span#absolutePositionText
                    [:input#absolutePosition {:type :checkbox :checked true}]
                    " Overlay questions on slides"]]

                  [:p.videoIndexes
                   "Slide: " [:span#slideIndex]
                   "(" [:a#slidePrev {:href ""} "prev"] " | "
                   [:a#slideRepeat {:href ""} "replay"] " | "
                   [:a#slideNext {:href ""} "next"] " | "
                   [:a#slideMinus5 {:href ""} "-5s"] " | "
                   [:a#slidePlus5 {:href ""} "+5s"] ")"]

                  [:p.videoIndexes
                   "Question: " [:span#questionIndex]
                   "(" [:a#questionPrev {:href ""} "prev"] " | "
                   [:a#questionRepeat {:href ""} "replay"] " | "
                   [:a#questionNext {:href ""} "next"] ")"]

                  [:div#quiz {:style "display:none;"}]

                  [:p [:span.debugData
                       [:span#videoMouseLocation "(x,y)"]
                       " | "
                       [:span#timeInSecs "-"]]])
            (str "lecture('" (:urltitle activity) "',data['" (:urltitle activity)"']);"))))
