(ns manymizers.components.Panes
  (:require [manymizers.store :as store])
  (:use [manymizers.components.Slider :only [Slider]]
        [manymizers.components.Editable :only [Editable]]
        [manymizers.components.TextField :only [TextField]]))


(def config {:slider {:width 200
                      :height 30 }

             :max-length {:factor 32
                          :option 32
                          :problem-statement 64 }})


(defn ProblemStatement []
  (let [statement (:problem-statement @store/app-state)]
    [:div.ProblemStatement
     ^{:key statement}             ; ensure a rerender when statement changes
     [TextField {:text statement
                 :placeholder "Type the decision to make"
                 :on-submit store/update-problem-statement!
                 :on-blur store/update-problem-statement!
                 :submit-button nil
                 :blur-on-submit true
                 :max-length  (get-in config [:max-length :problem-statement])}]]))



(defn Factor [factor]
  [:div.Factor
   [Editable
      { :id (:name factor)
        :type "factor"
        :on-change #(store/update-factor-name! (:name factor) %)
        :on-remove #(store/remove-factor! (:name factor))
        :value (:name factor)
        :value-valid? #(store/valid-factor-name-change? (:name factor) %)
        :max-length (get-in config [:max-length :factor])
       }
      [Slider { :name (:name factor)
                :value (:weight factor)
                :width (get-in config [:slider :width])
                :height (get-in config [:slider :height])
                :axis-labels ["Not important"  "Very important"]
                :on-change #(store/update-factor-weight! (:name factor) %) }]]])


(defn Pane [{:keys [name title comment]} children]
  [:div.Pane {:className name}
   [:div.Pane-title title]
   [:div.Pane-comment comment]
   children])


(defn FactorsPane []
  (let [factors (:factors @store/app-state)]
     [Pane
      {:name "factors" :title "Factors"
       :comment
        "List the factors which are important for making your decision.
         Rate the importance of each factor by adjusting the sliders."}

      [:div.FactorsPane
       [:div.FactorsPane-items
        (for [factor factors]
          ^{:key (:name factor)}
          [Factor factor])]

        [TextField {:placeholder "New factor"
                    :on-submit store/add-factor!
                    :clear-on-submit true
                    :value-valid? #(store/valid-factor-name-change? nil %)
                    :max-length (get-in config [:max-length :factor])
                    :submit-button "Add"}]]]))

(defn Option [option]
  (let [factors (:factors @store/app-state)]

    [:div.Option
     [Editable
      {:id (:name option)
       :type "option"
       :value (:name option)
       :value-valid? #(store/valid-option-name-change? (:name option) %)
       :on-change #(store/update-option-name! (:name option) %)
       :on-remove #(store/remove-option! (:name option))
       :max-length (get-in config [:max-length :option])}
      [:div.Option-name (:name option)]]

     [:div.Option-factors
       (for [factor factors]
         ^{:key (:name factor)}
         [:div.Option-factor
          [Slider {:name (:name factor)
                   :value (get-in option [:factors-weights (:name factor)] 0.5)
                   :width (get-in config [:slider :width])
                   :height (get-in config [:slider :height])
                   :axis-labels ["Not satisfied"  "Well satisfied"]
                   :on-change #(store/update-option-factor-weight! (:name option) (:name factor) %) }]])]]))


(defn OptionsPane []
  (let [options (:options @store/app-state)]
    [Pane
          {:name "options" :title "Options"
           :comment
             "List the available options for your decision.
             Using the sliders rate how well each of the factors is
             likely to be satisfied by the options."}

      [:div.OptionsPane
       (doall (for [option options]
        ^{:key (:name option)}
         [Option option]))

        [TextField {:placeholder "New option"
                    :on-submit store/add-option!
                    :clear-on-submit true
                    :value-valid? #(store/valid-option-name-change? nil %)
                    :max-length (get-in config [:max-length :option])
                    :submit-button "Add"}]]]))



(defn OutcomePane []
  (let [options  (->> @store/app-state :options (sort-by store/score) reverse)
        best-score    (-> options first store/score)]
    [Pane {:name "outcome" :title "Decision outcome"
           :comment
           "See the options ranked by
            their relative strengths measured against the weighted combination of the factors."
           }
     [:div.OutcomePane
      (doall (for [option options]

       (let [score      (store/score option)]
         ^{:key (:name option)}
         [:div.Option
           [:div.Option-name (:name option)]
           [:div {:className
                        (str "Option-score"
                             (if (= score best-score) " is-optimal" ""))}
                 (->
                   score
                   store/score->str)]])))]]))

