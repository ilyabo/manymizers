(ns ^:figwheel-no-load manymizers.dev
  (:require
    [manymizers.core :as core]
    [devtools.core :as devtools]))


(enable-console-print!)

(devtools/install!)

(core/init!)
