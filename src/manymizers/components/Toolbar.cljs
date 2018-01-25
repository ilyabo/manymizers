(ns manymizers.components.Toolbar
  (:require [manymizers.history :as history]
            [manymizers.store :as store])
  (:use [manymizers.components.Button :only [Button]]
        [manymizers.components.DropdownMenu :only [DropdownMenu]]))


(defn UndoControls []
  (let [hist-state @history/state]
    [:div.UndoControls
      [Button
         {:disabled (not (:can-undo hist-state))
          :on-click #(history/undo)}
       "← undo"]

      [Button
         {:disabled (not (:can-redo hist-state))
          :on-click #(history/redo)}
       "redo →"]]))

(defn Toolbar []
  [:div.Toolbar

    ;[:div.Toolbar-main
    ; [Button {:on-click #(store/reset-state!)
    ;          :disabled (store/in-default-state?)} "New"]]


    [:div.Toolbar-undo [UndoControls]]


    [:div.Toolbar-menu
     [DropdownMenu {:key "toolbar-menu"
                    :items
                      [{
                        :key "edit"
                        :icon ""
                        :label (str "New")
                        :action #(store/reset-state!) }

                       {
                        :key "example1"
                        :icon ""
                        :action #(store/set-sample-state! 0)
                        :label (str "Example 1")
                        }

                       {
                        :key "example2"
                        :icon ""
                        :action #(store/set-sample-state! 1)
                        :label (str "Example 2")
                        }

                       ]}]]])

