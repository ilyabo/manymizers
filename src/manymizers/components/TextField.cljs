(ns manymizers.components.TextField
  (:require [reagent.core :as r]
            [clojure.string :as str]
            [clojure.set :as set])
  (:use [manymizers.components.Button :only [Button]]))

(def key-codes
  (set/map-invert
    {:enter 13
     :esc   27}))


(defn- get-input-node [node]
  (.querySelector node ".TextField-input"))

(defn TextField [props]

  (let [txt      (r/atom (or (props :text) ""))
        clear    #(reset! txt "")
        set-text #(reset! txt %)]

    (r/create-class

      {:component-function
       (fn [{:keys [text placeholder
                    focus                              ; whether to focus on mount
                    max-length
                    clear-on-submit                    ; should the value be cleared on submit
                    blur-on-submit
                    submit-button                      ; the text of the submit button (or no button if nil)
                    value-valid?                       ; predicate for checking values before submission
                    on-submit
                    on-blur
                    ]
             :or { value-valid? #(constantly true) }
             }]
         (let [reset  #(reset! txt text)
               submit (fn [target]
                        (if (value-valid? @txt)
                          (if (on-submit @txt)
                            (do (if clear-on-submit (clear))
                               (if (and blur-on-submit target) (.blur target))))))
               val    #(-> % .-target .-value)]


           [:div.TextField

            [:div.TextField-input-cell
             [:input.TextField-input
              {:placeholder placeholder
               :max-length  (or max-length 128)
               :value       @txt
               :on-blur     #(if on-blur (on-blur (val %)))
               :on-change   #(set-text (val %))
               :on-key-up   (fn [evt] (case (-> evt .-keyCode key-codes)
                                        :enter (submit (.-target evt))
                                        :esc (do (-> evt .-target .blur)
                                                 (reset)
                                                 (if on-blur (on-blur (val %))))
                                        nil))}]]

            (if submit-button
              [:div.TextField-button-cell
                 [Button {:classed  "TextField-button"
                          :disabled (not (value-valid? @txt))
                          :on-click #(submit (-> % .-target .-parentNode .-parentNode get-input-node))
                          }
                  submit-button]])]))


       :component-did-mount
       (fn [this]
         (let [node  (r/dom-node this)
               props (r/props this)]
           (if (props :focus)
             (doto (get-input-node node)
               (.focus)
               (#(.setSelectionRange % 0 (-> % .-value .-length)))))))})))
