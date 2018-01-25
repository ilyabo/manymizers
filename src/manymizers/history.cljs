(ns manymizers.history
  (:require [goog.crypt.base64 :as b64]
            [reagent.core :as r]
            [cljs.reader :as reader]
            [manymizers.store-data :as data]
            [goog.events :as events]
            [goog.history.EventType :as EventType]
            [historian.core :as hist])
  (:import goog.History))


(defonce state
  (r/atom {}))

(enable-console-print!)

(defn- state->url [app-state]
  (let [state  @app-state]
    (if-not (= state data/empty-state)
      (-> state pr-str (b64/encodeString true))
      "")))


(defn- url->state [app-state token]
  (if-let
    [state (if (-> token count pos?)

             (try
               (reader/read-string (b64/decodeString token true))
               (catch :default e
                 (.error js/console "Couldn't initialize state from url hash" e)))

             data/empty-state)]

    (reset! app-state state)))


(defn- update-state! []
  (reset! state
          { :can-undo (hist/can-undo?)
            :can-redo (hist/can-redo?) }))

(defn redo []
  (hist/redo!)
  (update-state!))

(defn undo []
  (hist/undo!)
  (update-state!))

(defn- on-app-state-change [app-state history]
  (-> history (.setToken (state->url app-state)))
  (update-state!))


(defn init [app-state]
  (let [history (History.)]
    (add-watch app-state
               :watch-change #(on-app-state-change app-state history))
    (doto history
      (events/listen EventType/NAVIGATE #(url->state app-state (.-token %)))
      (.setEnabled true)))
  (hist/record! app-state :app-state))

