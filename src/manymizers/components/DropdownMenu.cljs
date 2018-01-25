(ns manymizers.components.DropdownMenu
  (:require [reagent.core :as r]
            [schema.core :as s :include-macros true]
            [manymizers.component :as c]))

; To ensure only one dropdown menu is visible at a time
(def active-key
  (r/atom nil))

(defn- toggle-active! [key]
  (swap! active-key #(if (= key %) nil key)))

(defn- clear-active! []
   (reset! active-key nil))


(defn init []
  (clear-active!)
  (doto (.-body js/document)
      (.addEventListener "click" clear-active!)
      (.addEventListener "keyup" #(if (-> % .-keyCode (= 27)) (clear-active!)))))


(let [DropdownMenu:prop-types
  {:key   s/Any
   :items [{:key   s/Any
            :label  s/Str
            :icon   s/Str
            :action (s/make-fn-schema s/Any [[s/Any]])}]}]

(defn DropdownMenu [{:keys [classed key items] :as props}]
   (c/validate-props "DropdownMenu" DropdownMenu:prop-types props)

  (let [active (= key @active-key)]
    [:i.DropdownMenu {:className classed}

      [:i.DropdownMenu-button.icon-list {:on-click #(toggle-active! key)}]

      (if active

        [:div.DropdownMenu-body

         (for [{:keys [key label icon action]} items]

           [:div.DropdownMenu-item
            {:key key :on-click #(do (clear-active!) (action))}
            (if icon [:i {:className (str "icon-" icon)}])
            label])])])))

