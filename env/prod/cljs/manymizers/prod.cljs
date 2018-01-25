(ns manymizers.prod
  (:require
    [manymizers.core :as core]))

;;ignore println statements in prod
(set! *print-fn* (fn [& _]))

(core/init!)
