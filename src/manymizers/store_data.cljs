(ns manymizers.store-data)

(def empty-state {
       :problem-statement  ""
       :factors []
       :options []
    })


(def sample-states
  [

   {:problem-statement "Which profession to study?"

    :factors [
              {:name "Interests me"
               :weight 0.8}

              {:name "Employment perspectives"
               :weight 0.7}

              {:name "Pay"
               :weight 0.8}

              {:name "Cost of study"
               :weight 0.385}

              {:name "Duration of study"
               :weight 0.64}

              {:name "Impact on my family"
               :weight 0.9}

              {:name "Impact on the world"
               :weight 0.6}

              ]

    :options [
              {:name "Doctor" }
              {:name "Computer Scientist" }
              {:name "Journalist" }]

   }



   {:problem-statement "Where to go for vacation?"

    :factors [{:name "Sunny"
               :weight 0.925}

              {:name "Easy to get to"
               :weight 0.385}

              {:name "Low price"
               :weight 0.64}]

    :options [
              {:name "Finland house on island"
              :factors-weights {"Low price" 0.285 "Sunny" 0.25}}

             {:name "Estonia house on a beach"
              :factors-weights {"Low price" 0.405 "Sunny" 0.375}}

             {:name "Africa house on a beach"
              :factors-weights {"Easy to get to" 0.26 "Sunny" 1}}

             {:name "Sweden house with a kayak"
              :factors-weights {"Low price" 0.28 "Sunny" 0.26}}
             ]}


   ])
