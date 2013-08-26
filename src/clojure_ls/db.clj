(ns clojure-ls.db
  (:use [korma.db]
        [korma.core]))

(defdb db (postgres {:db "lectures"
                     :user "lectures"
                     :password "lectures"}))

(declare activity course)

(defentity course
  (has-many activity {:fk "idcourse"}))

(defentity activity
  (belongs-to course {:fk "idcourse"}))

(defn course-from-activity [activity]
  (first (select course (where (= :id (:idcourse activity))))))

(defn get-courses-for-year [year]
  (select course (where (= :urlversion year))))

(defn get-course [urltitle year]
  (first (select course (with activity) (where (and (= :urltitle urltitle)
                                                    (= :urlversion year))))))

(defn get-activity [urltitle]
  (first (select activity (where (= :urltitle urltitle)))))
