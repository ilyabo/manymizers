(ns manymizers.components.Slider
  (:require [reagent.core :as r]
            [cljsjs.d3]))



(defn Slider [props]

  (let [state (r/atom {:dragging false
                       :value (props :value)})]
    (r/create-class
     {
      :component-function
      (fn [{:keys [name
                   width
                   height
                   value
                   axis-labels
                   on-change]}]
        [:div.Slider

         [:svg.slider-svg {:width width :height height}
          [:g
           [:rect.Slider-fill-rect {:x 0 :y 0 :width (* width (@state :value)) :height height}]
           [:rect.Slider-rect {:x 0 :y 0 :width width :height height}]
           (let [text-y (inc (/ height 2))]
             (if (@state :dragging)
              [:g
                 [:text.Slider-text {:x (/ width 2) :y text-y}
                  (-> (@state :value) (* 100) Math/round (str "%"))]
                 [:text.Slider-axis-label.left  {:x 4 :y text-y} (first axis-labels)]
                 [:text.Slider-axis-label.right {:x (- width 4) :y text-y} (second axis-labels)]]

              [:text.Slider-text {:x (/ width 2) :y text-y} name]))]]])

      :component-will-receive-props
      (fn [this [_ new-props]] (swap! state assoc :value (new-props :value)))

      :component-did-mount
      (fn [this]
        (let [node (r/dom-node this)
              props (r/props this)
              on-change  (props :on-change)
              width (:width props)
              pos->value  #(-> js/d3 (.mouse node) first (/ width) (min 1) (max 0))
              drag (-> js/d3
                        .-behavior
                       (.drag)
                       (.on "dragstart" #(swap! state assoc :value (pos->value)))
                       (.on "drag" #(swap! state assoc :dragging true :value (pos->value)))
                       (.on "dragend" #(do
                                        (swap! state assoc :dragging false)
                                        (on-change (pos->value)))))]
          (-> js/d3
              (.select node)
              (.selectAll ".slider-svg")
              (.on "click" #(on-change (pos->value)))
              (.call drag))))})))

