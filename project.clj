(defproject clojure-ls "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :dependencies [[org.clojure/clojure "1.5.1"]
				 [com.cemerick/friend "0.1.5"]
                 [compojure "1.1.5"]
				 [korma "0.3.0-RC5"]
				 [org.postgresql/postgresql "9.2-1002-jdbc4"]
				 [hiccup "1.0.4"]
				 [jayq "2.4.0"]]
  :plugins [[lein-ring "0.8.6"]
            [lein-cljsbuild "0.3.2"]]
  :ring {:handler clojure-ls.handler/app}
  :profiles
  {:dev {:dependencies [[ring-mock "0.1.5"]]}}
  :cljsbuild
	{:builds
	 [{:source-paths ["src-cljs"],
	   :builds nil,
	   :compiler
	   {:pretty-print true,
		:output-to "resources/public/cljs/clojure-ls.js",
		:source-map "resources/public/cljs/clojure-ls.js.map",
		:optimizations :simple}}]})

