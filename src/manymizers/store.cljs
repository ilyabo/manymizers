(ns manymizers.store
 (:require [reagent.core :as reagent :refer [atom]]
           [clojure.string :as str]
           [manymizers.store-data :as data]))

(enable-console-print!)

(defonce app-state
  (reagent/atom data/empty-state))

(defn in-default-state? []
  (= @app-state data/empty-state))

(defn factor-names []
  (->> @app-state :factors (map :name)))

(defn factor-weights []
  (->> @app-state :factors (map :weight)))

(defn option-factors-weights [option]
  (->> (factor-names)
       (map #(get-in option [:factors-weights %] 0.5))))

(defn score [option]
  (->>
    (map * (factor-weights) (option-factors-weights option))
    (reduce +)
    (#(/ % (reduce + (factor-weights))))))


(defn score->str [score]
  (if (js/isNaN score) ""
    (-> score (* 100) Math/round (str "%"))))

(defn find-factor [name]
  (first (filter #(= name (:name %)) (:factors @app-state))))

(defn find-option [name]
  (first (filter #(= name (:name %)) (:options @app-state))))

(defn update-problem-statement! [text]
  (swap! app-state assoc :problem-statement text))

(defn reset-state! [] (reset! app-state data/empty-state))

(defn set-sample-state! [index] (reset! app-state (get data/sample-states index)))

(defn remove-factor! [name]
  (swap! app-state update :factors #(remove #{(find-factor name)} %)))

(defn remove-option! [name]
  (swap! app-state update :options #(remove #{(find-option name)} %)))

(defn valid-factor-name-change? [old-name new-name]
  (and (not (clojure.string/blank? new-name))
       (or (= old-name new-name) (not (find-factor new-name)))))


(defn update-factor-name! [old-name new-name]
  (let [old-factor (find-factor old-name)
        state  @app-state]

    (swap! app-state assoc

           :factors
           (->> (state :factors)
                (replace {old-factor (assoc old-factor :name new-name)}))

           :options
           (->> (state :options)
                (map (fn [option] (update option :factors-weights
                                          #(clojure.set/rename-keys % {old-name new-name}))))))))



(defn valid-option-name-change? [old-name new-name]
  (and (not (clojure.string/blank? new-name))
       (or (= old-name new-name) (not (find-option new-name)))))


(defn update-option-name! [option-name name]
  (let [option (find-option option-name)]
    (swap! app-state
           update :options #(replace {option (assoc option :name name)} %))))


(defn update-factor-weight! [factor-name weight]
  (let [factor (find-factor factor-name)]
    (swap! app-state
           update :factors
           #(replace {factor (assoc factor :weight weight)} %))))

(defn update-option-factor-weight! [option-name factor-name weight]
  (let [option (find-option option-name)]
    (swap! app-state
           update :options
           #(replace {option (assoc-in option [:factors-weights factor-name] weight)} %))))


(defn add-factor! [name]
  (let [factors (:factors @app-state)]
    (if-not (find-factor name)
      (swap! app-state
             assoc :factors
             (concat factors [{:name name :weight 0.5}])))))

(defn add-option! [name]
  (let [options (:options @app-state)]
    (if-not (find-option name)
      (swap! app-state
             assoc :options
             (concat (:options @app-state) [{:name name  :factors-weights {}}])))))

