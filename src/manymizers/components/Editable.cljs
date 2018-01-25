(ns manymizers.components.Editable
  (:require [reagent.core :as r])
  (:use [manymizers.components.Button :only [Button]]
        [manymizers.components.DropdownMenu :only [DropdownMenu]]
        [manymizers.components.TextField :only [TextField]]))


(defn Editable []
  (let [editing       (r/atom nil)
        start-editing  #(reset! editing true)
        stop-editing   #(reset! editing false)]

    (fn [{:keys [id type
                 on-remove
                 on-change
                 value
                 value-valid?
                 max-length]
          :or { value-valid? #(constantly true)}} children]
      [:div.Editable
        [DropdownMenu {:key [type id]
                       :items
                       [{
                         :key "edit"
                         :icon "pencil"
                         :label (str "Edit " type)
                         :action start-editing }

                        {
                         :key "delete"
                         :icon "cross"
                         :action on-remove
                         :label (str "Delete " type)
                         }
                       ]}]


       (if @editing
         [TextField {:text value
                     :placeholder ""
                     :submit-button "OK"
                     :on-submit on-change
                     :max-length max-length
                     :value-valid?  value-valid?
                     :on-blur #(js/setTimeout stop-editing 0)    ; setTimeout is to avoid element being removed
                                                                ; before on-click event is sent
                     :focus true}]

         [:div.Editable-children children])])))
