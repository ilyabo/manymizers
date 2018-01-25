(ns manymizers.core
  (:require [reagent.core :as r]
            [manymizers.history :as history]
            [manymizers.store :as store]
            [manymizers.components.DropdownMenu :as DropdownMenu])
  (:use [manymizers.components.Toolbar :only [Toolbar]]
        [manymizers.components.Panes :only [ProblemStatement FactorsPane OptionsPane OutcomePane]]))


(defn App []
  [:div.App
   [:div.App-content
     [Toolbar]
     [ProblemStatement]
     [:div.Panes
      [FactorsPane]
      [OptionsPane]
      [OutcomePane]]]])


(defn mount-root []
  (r/render [App] (.getElementById js/document "app")))


(defn init! []
  (history/init store/app-state)
  (DropdownMenu/init)
  (mount-root))

