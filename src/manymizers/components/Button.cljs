(ns manymizers.components.Button)


(defn Button [{:keys [classed disabled on-click]} text]
  [:div.Button
     {:className (clojure.string/join " " [classed (if disabled "disabled")])
      :on-click  #(if-not disabled (on-click %))} text])
