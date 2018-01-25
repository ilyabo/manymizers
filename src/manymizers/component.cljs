(ns manymizers.component
  (:require [schema.core :as s :include-macros true]))


(defn validate-props [comp-name types props]
  (try
    (s/validate types props)
    (catch js/Object e (.warn js/console (str comp-name ":") (.-message e)))))
