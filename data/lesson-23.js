/**
 * English Block Assembling - LESSON DATA: Topic 23
 * Topic: Health and Fitness
 * Level: Upper A2 ~ Lower B1
 */

window.initLesson({
    // --- METADATA ---
    lessonId: "lesson-23",
    block: "4",
    topicTitle: "Health and Fitness",

    steps:[
        // ======================================================
        // STEP 0: INTRO & CAN-DO
        // ======================================================
        {
            title: "Intro & Can-Do",
            objectives: "• Discuss different [exercise](tooltip:exercise) routines and ways to stay active.<br>• Talk about [gym](tooltip:gym) equipment, [workouts](tooltip:workout), and fitness goals.<br>• Understand the principles of [healthy eating](tooltip:healthy-eating) and [nutrition](tooltip:nutrition).<br>• Describe actions like [losing weight](tooltip:lose-weight), [building muscle](tooltip:build-muscle), and [avoiding](tooltip:avoid) junk food.",
            welcome: "Welcome to Lesson 23! Taking care of your body is essential for a good life. In this lesson, you will learn the vocabulary needed to talk about your exercise routine, whether you prefer lifting weights or running in the park. We will also explore the language of nutrition, so you can discuss a balanced diet and healthy lifestyle choices. Let's get moving!",
            audio: {
                objectives: "TTS: In this lesson, you will learn to: Discuss different exercise routines and ways to stay active. Talk about gym equipment, workouts, and fitness goals. Understand the principles of healthy eating and nutrition. Describe actions like losing weight, building muscle, and avoiding junk food.",
                welcome: "TTS: Welcome to Lesson 23! Taking care of your body is essential for a good life. In this lesson, you will learn the vocabulary needed to talk about your exercise routine, whether you prefer lifting weights or running in the park. We will also explore the language of nutrition, so you can discuss a balanced diet and healthy lifestyle choices. Let's get moving!"
            }
        },

        // ======================================================
        // STEP 1: CONTEXT DIALOGUE
        // ======================================================
        {
            title: "Context Dialogue",
            context: "Emma and Liam are talking at the office about their exercise routines and eating habits.",
            contextAudio: "TTS: Emma: I am so tired. I just came from the gym. Liam: Oh, nice! What did you do today? Emma: I lifted weights. My goal is to build muscle. How do you stay in shape? Liam: I am not a big fan of the gym. I prefer doing cardio. I go for a run in the park. Emma: That is great. I find it hard to stay motivated on my own. Liam: I also focus a lot on my diet. I am trying to cut down on sugar and avoid junk food. Emma: Me too. I feel so much better when I eat a balanced diet and stay hydrated.",
            dialogue:[
                { speaker: "Emma", text: "I am so tired. I just came from the [gym](tooltip:gym)." },
                { speaker: "Liam", text: "Oh, nice! What did you do today?" },
                { speaker: "Emma", text: "I [lifted weights](tooltip:lift-weights). My goal is to[build muscle](tooltip:build-muscle). How do you [stay in shape](tooltip:stay-in-shape)?" },
                { speaker: "Liam", text: "I am not a big fan of the gym. I prefer doing [cardio](tooltip:cardio). I [go for a run](tooltip:go-for-run) in the park." },
                { speaker: "Emma", text: "That is great. I find it hard to stay motivated on my own." },
                { speaker: "Liam", text: "I also focus a lot on my [diet](tooltip:diet). I am trying to [cut down on](tooltip:cut-down-on) sugar and avoid [junk food](tooltip:junk-food)." },
                { speaker: "Emma", text: "Me too. I feel so much better when I [eat a balanced diet](tooltip:balanced-diet) and [stay hydrated](tooltip:stay-hydrated)." }
            ]
        },

        // ======================================================
        // STEP 2: TOPIC VOCABULARY
        // ======================================================
        {
            title: "Topic Vocabulary",
            subPages:[
                { id: "step2a", label: "2A: New Words" },
                { id: "step2b", label: "2B: Examples" },
                { id: "step2c", label: "2C: Practice" }
            ],
            // --- 2A: NEW WORDS ---
            areas:[
                {
                    title: "Concepts & Nutrition",
                    audio: "TTS: Exercise. Fitness. Workout. Diet. Nutrition. Cardio. Weightlifting. Stamina. Strength. Calories. Protein. Junk food.",
                    items:[
                        { term: "Exercise", trans: "Exercício" },
                        { term: "Fitness", trans: "Aptidão física / Fitness" },
                        { term: "Workout", trans: "Treino" },
                        { term: "Diet", trans: "Dieta / Alimentação" },
                        { term: "Nutrition", trans: "Nutrição" },
                        { term: "Cardio", trans: "Cardio (exercício cardiovascular)" },
                        { term: "Weightlifting", trans: "Levantamento de peso" },
                        { term: "Stamina", trans: "Vigor / Resistência física" },
                        { term: "Strength", trans: "Força" },
                        { term: "Calories", trans: "Calorias" },
                        { term: "Protein", trans: "Proteína" },
                        { term: "Junk food", trans: "Comida não saudável / Porcaria" }
                    ]
                },
                {
                    title: "Places, People & Equipment",
                    audio: "TTS: Gym. Fitness center. Personal trainer. Instructor. Athlete. Weights. Dumbbells. Barbell. Treadmill. Exercise bike. Fruits. Vegetables.",
                    items:[
                        { term: "Gym", trans: "Academia" },
                        { term: "Fitness center", trans: "Centro de fitness / Academia" },
                        { term: "Personal trainer", trans: "Personal trainer / Treinador pessoal" },
                        { term: "Instructor", trans: "Instrutor(a)" },
                        { term: "Athlete", trans: "Atleta" },
                        { term: "Weights", trans: "Pesos" },
                        { term: "Dumbbells", trans: "Halteres" },
                        { term: "Barbell", trans: "Barra (de musculação)" },
                        { term: "Treadmill", trans: "Esteira (de corrida)" },
                        { term: "Exercise bike", trans: "Bicicleta ergométrica" },
                        { term: "Fruits", trans: "Frutas" },
                        { term: "Vegetables", trans: "Vegetais / Legumes" }
                    ]
                },
                {
                    title: "Verbs & Adjectives",
                    audio: "TTS: To work out. To train. To stretch. To join. To lose. To gain. To avoid. Fit. Unfit. Active. Inactive. Strong.",
                    items:[
                        { term: "To work out", trans: "Treinar / Malhar" },
                        { term: "To train", trans: "Treinar / Capacitar-se" },
                        { term: "To stretch", trans: "Alongar-se" },
                        { term: "To join", trans: "Juntar-se / Matricular-se" },
                        { term: "To lose", trans: "Perder" },
                        { term: "To gain", trans: "Ganhar (peso, músculo)" },
                        { term: "To avoid", trans: "Evitar" },
                        { term: "Fit", trans: "Em forma" },
                        { term: "Unfit", trans: "Fora de forma" },
                        { term: "Active", trans: "Ativo(a)" },
                        { term: "Inactive", trans: "Inativo(a) / Sedentário(a)" },
                        { term: "Strong", trans: "Forte" }
                    ]
                }
            ],

            // --- 2B: EXAMPLES ---
            exampleGroups:[
                {
                    title: "Concepts & Nutrition",
                    audio: "TTS: Regular exercise is important for your heart. Her overall fitness has improved a lot. I had a great workout this morning. A healthy diet consists of natural foods. Good nutrition is key to a long life. I do cardio to keep my heart healthy. Weightlifting helps you build bigger muscles. Running every day increases your stamina. You need core strength to lift that box. He burns a lot of calories at the gym. Chicken is a great source of protein. Eating junk food every day is bad for you.",
                    items:[
                        { term: "Exercise", sent: "Regular exercise is important for your heart.", trans: "O exercício regular é importante para o seu coração." },
                        { term: "Fitness", sent: "Her overall fitness has improved a lot.", trans: "A aptidão física geral dela melhorou muito." },
                        { term: "Workout", sent: "I had a great workout this morning.", trans: "Eu tive um ótimo treino esta manhã." },
                        { term: "Diet", sent: "A healthy diet consists of natural foods.", trans: "Uma dieta saudável consiste em alimentos naturais." },
                        { term: "Nutrition", sent: "Good nutrition is key to a long life.", trans: "Uma boa nutrição é a chave para uma vida longa." },
                        { term: "Cardio", sent: "I do cardio to keep my heart healthy.", trans: "Eu faço cardio para manter meu coração saudável." },
                        { term: "Weightlifting", sent: "Weightlifting helps you build bigger muscles.", trans: "O levantamento de peso ajuda você a construir músculos maiores." },
                        { term: "Stamina", sent: "Running every day increases your stamina.", trans: "Correr todos os dias aumenta o seu vigor." },
                        { term: "Strength", sent: "You need core strength to lift that box.", trans: "Você precisa de força no core para levantar aquela caixa." },
                        { term: "Calories", sent: "He burns a lot of calories at the gym.", trans: "Ele queima muitas calorias na academia." },
                        { term: "Protein", sent: "Chicken is a great source of protein.", trans: "Frango é uma ótima fonte de proteína." },
                        { term: "Junk food", sent: "Eating junk food every day is bad for you.", trans: "Comer porcaria todos os dias faz mal para você." }
                    ]
                },
                {
                    title: "Places, People & Equipment",
                    audio: "TTS: I go to the gym three times a week. The new fitness center has a huge pool. My personal trainer helps me stay motivated. The yoga instructor corrected my posture. The professional athlete trains every day. He lifts heavy weights to get stronger. I bought two dumbbells for my home gym. Put more plates on the barbell for the squat. She runs on the treadmill when it rains. I cycle on the exercise bike for thirty minutes. Oranges and apples are delicious fruits. You should eat more green vegetables.",
                    items:[
                        { term: "Gym", sent: "I go to the gym three times a week.", trans: "Eu vou à academia três vezes por semana." },
                        { term: "Fitness center", sent: "The new fitness center has a huge pool.", trans: "O novo centro de fitness tem uma piscina enorme." },
                        { term: "Personal trainer", sent: "My personal trainer helps me stay motivated.", trans: "Meu personal trainer me ajuda a me manter motivado." },
                        { term: "Instructor", sent: "The yoga instructor corrected my posture.", trans: "A instrutora de ioga corrigiu minha postura." },
                        { term: "Athlete", sent: "The professional athlete trains every day.", trans: "O atleta profissional treina todos os dias." },
                        { term: "Weights", sent: "He lifts heavy weights to get stronger.", trans: "Ele levanta pesos pesados para ficar mais forte." },
                        { term: "Dumbbells", sent: "I bought two dumbbells for my home gym.", trans: "Comprei dois halteres para a minha academia em casa." },
                        { term: "Barbell", sent: "Put more plates on the barbell for the squat.", trans: "Coloque mais anilhas na barra para o agachamento." },
                        { term: "Treadmill", sent: "She runs on the treadmill when it rains.", trans: "Ela corre na esteira quando chove." },
                        { term: "Exercise bike", sent: "I cycle on the exercise bike for thirty minutes.", trans: "Eu pedalo na bicicleta ergométrica por trinta minutos." },
                        { term: "Fruits", sent: "Oranges and apples are delicious fruits.", trans: "Laranjas e maçãs são frutas deliciosas." },
                        { term: "Vegetables", sent: "You should eat more green vegetables.", trans: "Você deveria comer mais vegetais verdes." }
                    ]
                },
                {
                    title: "Verbs & Adjectives",
                    audio: "TTS: What time do you usually work out? I train for the marathon on weekends. You must stretch before and after running. I decided to join a local gym. I want to lose weight before summer. He is eating a lot to gain muscle. You should avoid eating too much sugar. She is very fit and runs fast. I feel unfit because I haven't exercised in months. He is an active person who loves hiking. Sitting all day makes you inactive. He is strong enough to carry that heavy box.",
                    items:[
                        { term: "To work out", sent: "What time do you usually work out?", trans: "A que horas você costuma treinar?" },
                        { term: "To train", sent: "I train for the marathon on weekends.", trans: "Eu treino para a maratona nos fins de semana." },
                        { term: "To stretch", sent: "You must stretch before and after running.", trans: "Você deve se alongar antes e depois de correr." },
                        { term: "To join", sent: "I decided to join a local gym.", trans: "Decidi me matricular em uma academia local." },
                        { term: "To lose", sent: "I want to lose weight before summer.", trans: "Eu quero perder peso antes do verão." },
                        { term: "To gain", sent: "He is eating a lot to gain muscle.", trans: "Ele está comendo muito para ganhar músculo." },
                        { term: "To avoid", sent: "You should avoid eating too much sugar.", trans: "Você deve evitar comer muito açúcar." },
                        { term: "Fit", sent: "She is very fit and runs fast.", trans: "Ela está muito em forma e corre rápido." },
                        { term: "Unfit", sent: "I feel unfit because I haven't exercised in months.", trans: "Eu me sinto fora de forma porque não me exercito há meses." },
                        { term: "Active", sent: "He is an active person who loves hiking.", trans: "Ele é uma pessoa ativa que ama fazer trilha." },
                        { term: "Inactive", sent: "Sitting all day makes you inactive.", trans: "Ficar sentado o dia todo te torna inativo." },
                        { term: "Strong", sent: "He is strong enough to carry that heavy box.", trans: "Ele é forte o suficiente para carregar aquela caixa pesada." }
                    ]
                }
            ],

            // --- 2C: PRACTICE ---
            drillGroups:[
                {
                    title: "Concepts & Nutrition",
                    drills:[
                        { q: "Physical activity done to maintain health is ________.", options:[{t: "Calories", c: false}, {t: "Exercise", c: true}, {t: "Protein", c: false}, {t: "Junk food", c: false}], type: "mcq" },
                        { q: "The condition of being physically fit and healthy is ________.", options:[{t: "Fitness", c: true}, {t: "Weightlifting", c: false}, {t: "Diet", c: false}, {t: "Nutrition", c: false}], type: "mcq" },
                        { q: "A session of vigorous physical exercise or training is a ________.", options:[{t: "Workout", c: true}, {t: "Calorie", c: false}, {t: "Diet", c: false}, {t: "Stamina", c: false}], type: "mcq" },
                        { q: "The kinds of food that a person habitually eats is their ________.", options:[{t: "Diet", c: true}, {t: "Workout", c: false}, {t: "Cardio", c: false}, {t: "Strength", c: false}], type: "mcq" },
                        { q: "The process of providing or obtaining the food necessary for health and growth is ________.", options:[{t: "Cardio", c: false}, {t: "Nutrition", c: true}, {t: "Exercise", c: false}, {t: "Stamina", c: false}], type: "mcq" },
                        { q: "Exercises that increase your heart rate, like running or cycling, are called ________.", options:[{t: "Weightlifting", c: false}, {t: "Cardio", c: true}, {t: "Protein", c: false}, {t: "Diet", c: false}], type: "mcq" },
                        { q: "The activity of lifting heavy weights to build muscle is ________.", options:[{t: "Weightlifting", c: true}, {t: "Cardio", c: false}, {t: "Stamina", c: false}, {t: "Junk food", c: false}], type: "mcq" },
                        { q: "The ability to sustain prolonged physical or mental effort is ________.", options:[{t: "Stamina", c: true}, {t: "Diet", c: false}, {t: "Calorie", c: false}, {t: "Workout", c: false}], type: "mcq" },
                        { q: "The quality or state of being physically strong is ________.", options:[{t: "Strength", c: true}, {t: "Nutrition", c: false}, {t: "Cardio", c: false}, {t: "Junk food", c: false}], type: "mcq" },
                        { q: "Units of energy obtained from food and drinks are ________.", options:[{t: "Calories", c: true}, {t: "Stamina", c: false}, {t: "Strength", c: false}, {t: "Exercise", c: false}], type: "mcq" },
                        { q: "A nutrient found in meat and eggs that is essential for building muscle is ________.", options:[{t: "Protein", c: true}, {t: "Cardio", c: false}, {t: "Calorie", c: false}, {t: "Workout", c: false}], type: "mcq" },
                        { q: "Food that has low nutritional value and is typically high in fat or sugar is ________.", options:[{t: "Junk food", c: true}, {t: "Nutrition", c: false}, {t: "Diet", c: false}, {t: "Protein", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Places, People & Equipment",
                    drills:[
                        { q: "A room or building equipped for gymnastics and other physical exercise is a ________.", options:[{t: "Gym", c: true}, {t: "Treadmill", c: false}, {t: "Dumbbell", c: false}, {t: "Barbell", c: false}], type: "mcq" },
                        { q: "Another, often larger, term for a gym is a ________.", options:[{t: "Fitness center", c: true}, {t: "Instructor", c: false}, {t: "Athlete", c: false}, {t: "Vegetables", c: false}], type: "mcq" },
                        { q: "A professional who helps you create a workout plan is a ________.", options:[{t: "Personal trainer", c: true}, {t: "Athlete", c: false}, {t: "Treadmill", c: false}, {t: "Gym", c: false}], type: "mcq" },
                        { q: "A person who teaches a skill, like a yoga class, is an ________.", options:[{t: "Instructor", c: true}, {t: "Dumbbell", c: false}, {t: "Vegetable", c: false}, {t: "Barbell", c: false}], type: "mcq" },
                        { q: "A person who is proficient in sports and physical exercise is an ________.", options:[{t: "Athlete", c: true}, {t: "Instructor", c: false}, {t: "Weights", c: false}, {t: "Fitness center", c: false}], type: "mcq" },
                        { q: "Heavy objects lifted for exercise are called ________.", options:[{t: "Weights", c: true}, {t: "Fruits", c: false}, {t: "Vegetables", c: false}, {t: "Instructors", c: false}], type: "mcq" },
                        { q: "A short bar with a weight at each end, used typically in pairs for exercise, is a ________.", options:[{t: "Dumbbell", c: true}, {t: "Treadmill", c: false}, {t: "Exercise bike", c: false}, {t: "Athlete", c: false}], type: "mcq" },
                        { q: "A long metal bar to which disks of varying weights are attached at each end is a ________.", options:[{t: "Barbell", c: true}, {t: "Dumbbell", c: false}, {t: "Treadmill", c: false}, {t: "Gym", c: false}], type: "mcq" },
                        { q: "An exercise machine with a continuous belt that allows you to walk or run in place is a ________.", options:[{t: "Treadmill", c: true}, {t: "Barbell", c: false}, {t: "Exercise bike", c: false}, {t: "Weights", c: false}], type: "mcq" },
                        { q: "A stationary bicycle used for indoor cycling workouts is an ________.", options:[{t: "Exercise bike", c: true}, {t: "Treadmill", c: false}, {t: "Barbell", c: false}, {t: "Dumbbell", c: false}], type: "mcq" },
                        { q: "Apples, bananas, and oranges are examples of ________.", options:[{t: "Fruits", c: true}, {t: "Vegetables", c: false}, {t: "Weights", c: false}, {t: "Athletes", c: false}], type: "mcq" },
                        { q: "Broccoli, carrots, and spinach are examples of ________.", options:[{t: "Vegetables", c: true}, {t: "Fruits", c: false}, {t: "Dumbbells", c: false}, {t: "Treadmills", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Verbs & Adjectives",
                    drills:[
                        { q: "A phrasal verb meaning to exercise in order to improve fitness is ________.", options:[{t: "To stretch", c: false}, {t: "To work out", c: true}, {t: "To lose", c: false}, {t: "To avoid", c: false}], type: "mcq" },
                        { q: "To teach or learn a particular skill or type of behavior through practice is ________.", options:[{t: "To train", c: true}, {t: "To avoid", c: false}, {t: "To lose", c: false}, {t: "To stretch", c: false}], type: "mcq" },
                        { q: "To straighten your body or limbs to full length is ________.", options:[{t: "To stretch", c: true}, {t: "To gain", c: false}, {t: "To join", c: false}, {t: "To avoid", c: false}], type: "mcq" },
                        { q: "To become a member of a gym or a club is ________.", options:[{t: "To join", c: true}, {t: "To lose", c: false}, {t: "To stretch", c: false}, {t: "To train", c: false}], type: "mcq" },
                        { q: "To have less of something (like weight) is ________.", options:[{t: "To gain", c: false}, {t: "To lose", c: true}, {t: "To stretch", c: false}, {t: "To avoid", c: false}], type: "mcq" },
                        { q: "To have more of something (like muscle or weight) is ________.", options:[{t: "To gain", c: true}, {t: "To lose", c: false}, {t: "To join", c: false}, {t: "To train", c: false}], type: "mcq" },
                        { q: "To stay away from someone or something (like bad food) is ________.", options:[{t: "To avoid", c: true}, {t: "To stretch", c: false}, {t: "To gain", c: false}, {t: "To join", c: false}], type: "mcq" },
                        { q: "In good health, especially because of regular physical exercise means you are ________.", options:[{t: "Fit", c: true}, {t: "Unfit", c: false}, {t: "Inactive", c: false}, {t: "Weak", c: false}], type: "mcq" },
                        { q: "Not in good physical condition means you are ________.", options:[{t: "Unfit", c: true}, {t: "Fit", c: false}, {t: "Active", c: false}, {t: "Strong", c: false}], type: "mcq" },
                        { q: "Engaging in action or movement means you are ________.", options:[{t: "Active", c: true}, {t: "Inactive", c: false}, {t: "Unfit", c: false}, {t: "Weak", c: false}], type: "mcq" },
                        { q: "Showing no physical activity; sedentary means you are ________.", options:[{t: "Inactive", c: true}, {t: "Active", c: false}, {t: "Strong", c: false}, {t: "Fit", c: false}], type: "mcq" },
                        { q: "Having the power to move heavy weights or perform physically demanding tasks means you are ________.", options:[{t: "Strong", c: true}, {t: "Weak", c: false}, {t: "Unfit", c: false}, {t: "Inactive", c: false}], type: "mcq" }
                    ]
                }
            ]
        },

        // ======================================================
        // STEP 3: EXPRESSIONS & PHRASES
        // ======================================================
        {
            title: "Expressions & Phrases",
            subPages:[
                { id: "step3a", label: "3A: Key Expressions" },
                { id: "step3b", label: "3B: Dialogues" },
                { id: "step3c", label: "3C: Practice" }
            ],
            // --- 3A: KEY EXPRESSIONS ---
            patterns:[
                {
                    title: "Exercise Routines",
                    audio: "TTS: Stay in shape. Get in shape. Work out at the gym. Go for a run. Lift weights. Do cardio.",
                    explanation: "Phrases used to describe your exercise habits and how you maintain your fitness.<br><span style='color:var(--primary-blue); font-style:italic;'>(Frases usadas para descrever seus hábitos de exercício e como você mantém sua forma física.)</span>",
                    samples:[
                        { en: "I exercise regularly to <b>stay in shape</b>.", pt: "<span style='color:var(--primary-blue)'>(Eu me exercito regularmente para manter a forma.)</span>" },
                        { en: "I need to <b>get in shape</b> before the marathon.", pt: "<span style='color:var(--primary-blue)'>(Eu preciso entrar em forma antes da maratona.)</span>" },
                        { en: "I usually <b>work out at the gym</b> after work.", pt: "<span style='color:var(--primary-blue)'>(Eu geralmente malho na academia depois do trabalho.)</span>" },
                        { en: "Let's <b>go for a run</b> in the park.", pt: "<span style='color:var(--primary-blue)'>(Vamos dar uma corrida no parque.)</span>" },
                        { en: "I <b>lift weights</b> to get stronger.", pt: "<span style='color:var(--primary-blue)'>(Eu levanto pesos para ficar mais forte.)</span>" },
                        { en: "You should <b>do cardio</b> to improve your heart.", pt: "<span style='color:var(--primary-blue)'>(Você deve fazer cardio para melhorar seu coração.)</span>" }
                    ]
                },
                {
                    title: "Goals & Gym",
                    audio: "TTS: A gym membership. Work with a personal trainer. Take a fitness class. Set a fitness goal. Lose weight. Build muscle.",
                    explanation: "Vocabulary for signing up for gym services, setting targets, and physical changes.<br><span style='color:var(--primary-blue); font-style:italic;'>(Vocabulário para se inscrever em serviços de academia, definir metas e mudanças físicas.)</span>",
                    samples:[
                        { en: "I finally bought <b>a gym membership</b>.", pt: "<span style='color:var(--primary-blue)'>(Eu finalmente comprei uma matrícula de academia.)</span>" },
                        { en: "It is helpful to <b>work with a personal trainer</b>.", pt: "<span style='color:var(--primary-blue)'>(É útil trabalhar com um personal trainer.)</span>" },
                        { en: "I like to <b>take a fitness class</b> like yoga.", pt: "<span style='color:var(--primary-blue)'>(Eu gosto de fazer uma aula de fitness como ioga.)</span>" },
                        { en: "You need to <b>set a fitness goal</b> to stay motivated.", pt: "<span style='color:var(--primary-blue)'>(Você precisa definir uma meta de fitness para se manter motivado.)</span>" },
                        { en: "She is on a diet to <b>lose weight</b>.", pt: "<span style='color:var(--primary-blue)'>(Ela está de dieta para perder peso.)</span>" },
                        { en: "He lifts heavy barbells to <b>build muscle</b>.", pt: "<span style='color:var(--primary-blue)'>(Ele levanta barras pesadas para construir músculos.)</span>" }
                    ]
                },
                {
                    title: "Healthy Eating",
                    audio: "TTS: Eat a balanced diet. A healthy lifestyle. Cut down on sugar. Stay hydrated. Avoid junk food. Good source of protein.",
                    explanation: "Phrases for discussing nutrition, making better food choices, and staying healthy.<br><span style='color:var(--primary-blue); font-style:italic;'>(Frases para discutir nutrição, fazer melhores escolhas alimentares e manter-se saudável.)</span>",
                    samples:[
                        { en: "It is important to <b>eat a balanced diet</b>.", pt: "<span style='color:var(--primary-blue)'>(É importante comer uma dieta balanceada.)</span>" },
                        { en: "Walking and sleeping well are part of <b>a healthy lifestyle</b>.", pt: "<span style='color:var(--primary-blue)'>(Caminhar e dormir bem fazem parte de um estilo de vida saudável.)</span>" },
                        { en: "I am trying to <b>cut down on sugar</b>.", pt: "<span style='color:var(--primary-blue)'>(Estou tentando reduzir o açúcar.)</span>" },
                        { en: "Drink plenty of water to <b>stay hydrated</b>.", pt: "<span style='color:var(--primary-blue)'>(Beba muita água para manter-se hidratado.)</span>" },
                        { en: "You should <b>avoid junk food</b> if you want to be fit.", pt: "<span style='color:var(--primary-blue)'>(Você deve evitar comida não saudável se quiser estar em forma.)</span>" },
                        { en: "Chicken is a <b>good source of protein</b>.", pt: "<span style='color:var(--primary-blue)'>(Frango é uma boa fonte de proteína.)</span>" }
                    ]
                }
            ],

            // --- 3B: DIALOGUES ---
            dialogueGroups:[
                {
                    title: "Dialogue 1: Morning Exercise",
                    audio: "TTS: How do you stay in shape? I work out at the gym every morning. I want to get in shape, but I don't like gyms.",
                    lines:[
                        { speaker: "Mark", text: "How do you stay in shape? I work out at the gym every morning.", pt: "(Como você mantém a forma? Eu malho na academia toda manhã.)" },
                        { speaker: "Sarah", text: "I want to get in shape, but I don't like gyms.", pt: "(Eu quero entrar em forma, mas não gosto de academias.)" }
                    ]
                },
                {
                    title: "Dialogue 2: Cardio vs Weights",
                    audio: "TTS: Do you want to go for a run later? No, I prefer to lift weights. I need to do cardio today for my heart.",
                    lines:[
                        { speaker: "John", text: "Do you want to go for a run later?", pt: "(Você quer dar uma corrida mais tarde?)" },
                        { speaker: "Lisa", text: "No, I prefer to lift weights. I need to do cardio today for my heart.", pt: "(Não, prefiro levantar pesos. Preciso fazer cardio hoje para o meu coração.)" } // Adjusted to 2 speakers
                    ]
                },
                {
                    title: "Dialogue 3: Getting Professional Help",
                    audio: "TTS: I just bought a gym membership! That's great. You should work with a personal trainer. I think I will take a fitness class instead.",
                    lines:[
                        { speaker: "Emma", text: "I just bought a gym membership!", pt: "(Acabei de comprar uma matrícula de academia!)" },
                        { speaker: "Tom", text: "That's great. You should work with a personal trainer. I think I will take a fitness class instead.", pt: "(Isso é ótimo. Você deveria trabalhar com um personal trainer. Acho que vou fazer uma aula de fitness em vez disso.)" } // Flow fix
                    ]
                },
                {
                    title: "Dialogue 3: Getting Professional Help", // Flow fix
                    audio: "TTS: I just bought a gym membership! You should work with a personal trainer. I think I will take a fitness class instead.",
                    lines:[
                        { speaker: "Emma", text: "I just bought a gym membership!", pt: "(Acabei de comprar uma matrícula de academia!)" },
                        { speaker: "Tom", text: "You should work with a personal trainer.", pt: "(Você deveria trabalhar com um personal trainer.)" },
                        { speaker: "Emma", text: "I think I will take a fitness class instead.", pt: "(Acho que vou fazer uma aula de fitness em vez disso.)" }
                    ]
                },
                {
                    title: "Dialogue 4: Body Goals",
                    audio: "TTS: You need to set a fitness goal. What is yours? I want to lose weight before my vacation. My goal is different. I want to build muscle.",
                    lines:[
                        { speaker: "David", text: "You need to set a fitness goal. What is yours?", pt: "(Você precisa definir uma meta de fitness. Qual é a sua?)" },
                        { speaker: "Chloe", text: "I want to lose weight before my vacation. My goal is different. I want to build muscle.", pt: "(Eu quero perder peso antes das minhas férias. Minha meta é diferente. Eu quero construir músculos.)" } // Flow fix
                    ]
                },
                {
                    title: "Dialogue 4: Body Goals", // Flow fix
                    audio: "TTS: You need to set a fitness goal. What is yours? I want to lose weight before my vacation. What about you? My goal is different. I want to build muscle.",
                    lines:[
                        { speaker: "David", text: "You need to set a fitness goal. What is yours?", pt: "(Você precisa definir uma meta de fitness. Qual é a sua?)" },
                        { speaker: "Chloe", text: "I want to lose weight before my vacation. What about you?", pt: "(Eu quero perder peso antes das minhas férias. E você?)" },
                        { speaker: "David", text: "My goal is different. I want to build muscle.", pt: "(Minha meta é diferente. Eu quero construir músculos.)" }
                    ]
                },
                {
                    title: "Dialogue 5: Daily Diet",
                    audio: "TTS: It is important to eat a balanced diet. Yes, it is a big part of a healthy lifestyle. I am trying to cut down on sugar in my coffee.",
                    lines:[
                        { speaker: "Mia", text: "It is important to eat a balanced diet.", pt: "(É importante comer uma dieta balanceada.)" },
                        { speaker: "Noah", text: "Yes, it is a big part of a healthy lifestyle. I am trying to cut down on sugar in my coffee.", pt: "(Sim, é uma grande parte de um estilo de vida saudável. Estou tentando reduzir o açúcar no meu café.)" }
                    ]
                },
                {
                    title: "Dialogue 6: Staying Healthy",
                    audio: "TTS: During a workout, you must stay hydrated. I always drink a lot of water. You should also avoid junk food. Yes, I eat eggs because they are a good source of protein.",
                    lines:[
                        { speaker: "Trainer", text: "During a workout, you must stay hydrated. You should also avoid junk food.", pt: "(Durante o treino, você deve se manter hidratado. Você também deve evitar comida porcaria.)" },
                        { speaker: "Client", text: "I always drink a lot of water. Yes, I eat eggs because they are a good source of protein.", pt: "(Eu sempre bebo muita água. Sim, eu como ovos porque são uma boa fonte de proteína.)" }
                    ]
                }
            ],

            // --- 3C: PRACTICE ---
            grammarDrillGroups:[
                {
                    title: "Exercise Routines",
                    drills:[
                        { q: "I exercise regularly to ________ in shape.", options:[{t: "stay", c: true}, {t: "make", c: false}, {t: "do", c: false}, {t: "have", c: false}], type: "mcq" },
                        { q: "I need to ________ in shape before the marathon.", options:[{t: "take", c: false}, {t: "do", c: false}, {t: "get", c: true}, {t: "build", c: false}], type: "mcq" },
                        { q: "I usually work ________ at the gym.", options:[{t: "in", c: false}, {t: "out", c: true}, {t: "up", c: false}, {t: "on", c: false}], type: "mcq" },
                        { q: "Let's go ________ a run in the park.", options:[{t: "to", c: false}, {t: "at", c: false}, {t: "for", c: true}, {t: "in", c: false}], type: "mcq" },
                        { q: "I want to get stronger, so I ________ weights.", options:[{t: "push", c: false}, {t: "lift", c: true}, {t: "do", c: false}, {t: "make", c: false}], type: "mcq" },
                        { q: "You should ________ cardio to improve your heart.", options:[{t: "make", c: false}, {t: "have", c: false}, {t: "do", c: true}, {t: "take", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Goals & Gym",
                    drills:[
                        { q: "I finally bought a gym ________.", options:[{t: "membership", c: true}, {t: "class", c: false}, {t: "trainer", c: false}, {t: "goal", c: false}], type: "mcq" },
                        { q: "It is helpful to work with a personal ________.", options:[{t: "athlete", c: false}, {t: "trainer", c: true}, {t: "class", c: false}, {t: "member", c: false}], type: "mcq" },
                        { q: "I like to ________ a fitness class like yoga.", options:[{t: "make", c: false}, {t: "take", c: true}, {t: "do", c: false}, {t: "get", c: false}], type: "mcq" },
                        { q: "You need to ________ a fitness goal to stay motivated.", options:[{t: "set", c: true}, {t: "take", c: false}, {t: "do", c: false}, {t: "make", c: false}], type: "mcq" },
                        { q: "She is on a diet to ________ weight.", options:[{t: "gain", c: false}, {t: "lose", c: true}, {t: "build", c: false}, {t: "cut", c: false}], type: "mcq" },
                        { q: "He lifts heavy barbells to ________ muscle.", options:[{t: "lose", c: false}, {t: "make", c: false}, {t: "build", c: true}, {t: "get", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Healthy Eating",
                    drills:[
                        { q: "It is important to eat a ________ diet.", options:[{t: "balanced", c: true}, {t: "junk", c: false}, {t: "heavy", c: false}, {t: "sugar", c: false}], type: "mcq" },
                        { q: "Walking and sleeping well are part of a healthy ________.", options:[{t: "lifestyle", c: true}, {t: "diet", c: false}, {t: "nutrition", c: false}, {t: "workout", c: false}], type: "mcq" },
                        { q: "I am trying to cut ________ on sugar.", options:[{t: "out", c: false}, {t: "off", c: false}, {t: "down", c: true}, {t: "up", c: false}], type: "mcq" },
                        { q: "Drink plenty of water to stay ________.", options:[{t: "hydrated", c: true}, {t: "balanced", c: false}, {t: "fit", c: false}, {t: "active", c: false}], type: "mcq" },
                        { q: "You should ________ junk food if you want to be fit.", options:[{t: "avoid", c: true}, {t: "eat", c: false}, {t: "cut", c: false}, {t: "lose", c: false}], type: "mcq" },
                        { q: "Chicken is a good ________ of protein.", options:[{t: "piece", c: false}, {t: "source", c: true}, {t: "plate", c: false}, {t: "diet", c: false}], type: "mcq" }
                    ]
                }
            ]
        },


// ======================================================
        // STEP 4: SPEAKING PRACTICE
        // ======================================================
        {
            title: "Speaking Practice",
            sentences:[
                { text: "I try to exercise regularly to stay in shape. ↘", audio: "TTS: I try to exercise regularly to stay in shape." },
                { text: "Do you want to go for a run later? ↗", audio: "TTS: Do you want to go for a run later?" },
                { text: "I usually work out at the gym in the evening. ↘", audio: "TTS: I usually work out at the gym in the evening." },
                { text: "He is lifting weights to build muscle. ↘", audio: "TTS: He is lifting weights to build muscle." },
                { text: "I just bought a new gym membership. ↘", audio: "TTS: I just bought a new gym membership." },
                { text: "It is important to set a fitness goal. ↘", audio: "TTS: It is important to set a fitness goal." },
                { text: "She is taking a fitness class to get in shape. ↘", audio: "TTS: She is taking a fitness class to get in shape." },
                { text: "I eat a balanced diet and avoid junk food. ↘", audio: "TTS: I eat a balanced diet and avoid junk food." },
                { text: "You should cut down on sugar and drink more water. ↘", audio: "TTS: You should cut down on sugar and drink more water." },
                { text: "Eggs and chicken are a good source of protein. ↘", audio: "TTS: Eggs and chicken are a good source of protein." }
            ]
        },

        // ======================================================
        // STEP 5: LISTENING PRACTICE
        // ======================================================
        {
            title: "Listening Practice",
            drills:[
                {
                    type: "typing",
                    instruction: "Listen to the conversation and type the missing words.",
                    audio: "TTS: Emma: I want to lose weight before my trip. Mark: You should set a fitness goal. Emma: Yes, I plan to do cardio and eat a balanced diet. Mark: That is a very healthy lifestyle.",
                    text: "Emma: I want to lose [weight] before my trip.<br>Mark: You should set a [fitness] goal.<br>Emma: Yes, I plan to do [cardio] and eat a balanced [diet].<br>Mark: That is a very [healthy] lifestyle."
                },
                {
                    type: "dropdown",
                    instruction: "Listen to the dialogue at the gym.",
                    audio: "TTS: Trainer: Okay, let's start the workout. First, we need to stretch. Client: Do I have to lift weights today? Trainer: Yes, we are using dumbbells to build muscle. Client: Okay, but I feel very weak right now.",
                    questions:[
                        { q: "Trainer: Okay, let's start the [workout* | diet | protein]. First, we need to[stretch* | run | avoid].", a: "workout" },
                        { q: "Client: Do I have to lift[weights* | junk | cardio] today?", a: "weights" },
                        { q: "Trainer: Yes, we are using[dumbbells* | treadmills | bikes] to build muscle.", a: "dumbbells" },
                        { q: "Client: Okay, but I feel very [weak* | strong | fit] right now.", a: "weak" }
                    ]
                },
                {
                    type: "audio-choice",
                    instruction: "Listen to the speaker. What is his advice?",
                    audio: "TTS: If you want to have more stamina, you shouldn't just lift weights. You need to do cardio. I recommend running on the treadmill or using the exercise bike.",
                    options:[
                        { t: "He tells people to eat more junk food.", c: false },
                        { t: "He tells people to only lift weights.", c: false },
                        { t: "He advises people to do cardio to improve stamina.", c: true },
                        { t: "He suggests sleeping more to gain muscle.", c: false }
                    ]
                }
            ]
        },

        // ======================================================
        // STEP 6: READING PRACTICE
        // ======================================================
        {
            title: "Reading Practice",
            texts:[
                {
                    title: "Dialogue - The New Gym Routine",
                    audio: "TTS: John: Hey Sarah! You look great. Are you still going to the fitness center? Sarah: Yes, I bought a gym membership last month. I am trying to get in shape. John: That's awesome. Do you work out alone? Sarah: No, I work with a personal trainer. We do a lot of weightlifting. John: Really? I thought you preferred cardio. Sarah: I do, but I wanted to build muscle and get strong. Now I lift barbells twice a week.",
                    body: "<b>John:</b> Hey Sarah! You look great. Are you still going to the[fitness center](tooltip:fitness-center)?<br><b>Sarah:</b> Yes, I bought [a gym membership](tooltip:gym-membership) last month. I am trying to [get in shape](tooltip:get-in-shape).<br><b>John:</b> That's awesome. Do you [work out](tooltip:work-out) alone?<br><b>Sarah:</b> No, I [work with a personal trainer](tooltip:work-with-trainer). We do a lot of [weightlifting](tooltip:weightlifting).<br><b>John:</b> Really? I thought you preferred [cardio](tooltip:cardio).<br><b>Sarah:</b> I do, but I wanted to [build muscle](tooltip:build-muscle) and get [strong](tooltip:strong). Now I lift [barbells](tooltip:barbell) twice a week.",
                    questions:[
                        { q: "What did Sarah buy last month?", options:[{t: "A new barbell.", c: false}, {t: "A gym membership.", c: true}, {t: "Some junk food.", c: false}], type: "mcq" },
                        { q: "Who does Sarah work out with?", options:[{t: "With John.", c: false}, {t: "By herself.", c: false}, {t: "With a personal trainer.", c: true}], type: "mcq" },
                        { q: "Why is Sarah doing weightlifting?", options:[{t: "To build muscle and get strong.", c: true}, {t: "To lose stamina.", c: false}, {t: "Because she hates cardio.", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Dialogue - Changing the Diet",
                    audio: "TTS: David: I feel so unfit recently. I need to lose weight. Lisa: Have you tried to cut down on sugar? David: Yes, but it is hard. I eat a lot of junk food when I am stressed. Lisa: You should eat a balanced diet. Fruits and vegetables are very important. David: I know. I need to focus on my nutrition. Lisa: Exactly. Make sure you get a good source of protein, too, and stay hydrated.",
                    body: "<b>David:</b> I feel so [unfit](tooltip:unfit) recently. I need to[lose weight](tooltip:lose-weight).<br><b>Lisa:</b> Have you tried to[cut down on sugar](tooltip:cut-down-sugar)?<br><b>David:</b> Yes, but it is hard. I eat a lot of [junk food](tooltip:junk-food) when I am stressed.<br><b>Lisa:</b> You should [eat a balanced diet](tooltip:eat-balanced-diet). [Fruits](tooltip:fruits) and[vegetables](tooltip:vegetables) are very important.<br><b>David:</b> I know. I need to focus on my [nutrition](tooltip:nutrition).<br><b>Lisa:</b> Exactly. Make sure you get a[good source of protein](tooltip:source-of-protein), too, and [stay hydrated](tooltip:stay-hydrated).",
                    questions:[
                        { q: "Why does David want to lose weight?", options:[{t: "Because he feels unfit.", c: true}, {t: "Because he wants to be an athlete.", c: false}, {t: "Because he bought a gym membership.", c: false}], type: "mcq" },
                        { q: "What does David eat when he is stressed?", options:[{t: "Fruits and vegetables.", c: false}, {t: "Junk food.", c: true}, {t: "Lots of protein.", c: false}], type: "mcq" },
                        { q: "What advice does Lisa give him?", options:[{t: "To drink less water.", c: false}, {t: "To eat a balanced diet and cut down on sugar.", c: true}, {t: "To stop eating protein.", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Email - Weekend Fitness Plans",
                    audio: "TTS: Subject: Let's exercise! Hi Mark, I hope you are having a good week. I decided to set a fitness goal for myself this month. I want to improve my stamina, so I am going to go for a run in the park this Saturday. Do you want to join me? We can run for thirty minutes and then take a fitness class at the community center. Being active is a big part of a healthy lifestyle. Let me know if you are free! Best, Tom.",
                    body: "<b>From: Tom</b><br><b>To: Mark</b><br>Subject: Let's [exercise](tooltip:exercise)!<br><br>Hi Mark,<br>I hope you are having a good week. I decided to [set a fitness goal](tooltip:set-fitness-goal) for myself this month. I want to improve my [stamina](tooltip:stamina), so I am going to [go for a run](tooltip:go-for-run) in the park this Saturday. Do you want to [join](tooltip:join) me? We can run for thirty minutes and then[take a fitness class](tooltip:take-fitness-class) at the community center. Being [active](tooltip:active) is a big part of a [healthy lifestyle](tooltip:healthy-lifestyle). Let me know if you are free!<br><br>Best, Tom.",
                    questions:[
                        { q: "What did Tom set for himself this month?", options:[{t: "A fitness goal.", c: true}, {t: "A new diet.", c: false}, {t: "A personal trainer.", c: false}], type: "mcq" },
                        { q: "What is Tom going to do on Saturday to improve his stamina?", options:[{t: "Lift weights.", c: false}, {t: "Go for a run.", c: true}, {t: "Eat junk food.", c: false}], type: "mcq" },
                        { q: "What else does Tom want to do after running?", options:[{t: "Take a nap.", c: false}, {t: "Take a fitness class.", c: true}, {t: "Go to the supermarket.", c: false}], type: "mcq" }
                    ]
                }
            ]
        },

        // ======================================================
        // STEP 7: MIXED EXERCISES (40 Drills)
        // ======================================================
        {
            title: "Mixed Exercises",
            drills:[
                // --- MATCHING (1-4) ---
                { type: "matching", instruction: "Match the concept to its meaning.", pairs:[
                    { left: "Diet", right: "The food you eat", val: "1" },
                    { left: "Workout", right: "An exercise session", val: "2" },
                    { left: "Stamina", right: "Endurance", val: "3" },
                    { left: "Calories", right: "Energy from food", val: "4" }
                ]},
                { type: "matching", instruction: "Match the gym equipment.", pairs:[
                    { left: "Treadmill", right: "For running in place", val: "1" },
                    { left: "Dumbbells", right: "Small hand weights", val: "2" },
                    { left: "Exercise bike", right: "For stationary cycling", val: "3" },
                    { left: "Barbell", right: "Long bar for lifting", val: "4" }
                ]},
                { type: "matching", instruction: "Match the opposites.", pairs:[
                    { left: "Active", right: "Inactive", val: "1" },
                    { left: "Fit", right: "Unfit", val: "2" },
                    { left: "Lose", right: "Gain", val: "3" },
                    { left: "Avoid", right: "Consume/Seek", val: "4" }
                ]},
                { type: "matching", instruction: "Match the phrase halves.", pairs:[
                    { left: "Cut down", right: "on sugar", val: "1" },
                    { left: "Go for", right: "a run", val: "2" },
                    { left: "Set a", right: "fitness goal", val: "3" },
                    { left: "Build", right: "muscle", val: "4" }
                ]},

                // --- WORD ORDER (5-14) ---
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "shape / stay / I / exercise / to / in / .", correct: "I exercise to stay in shape ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "before / shape / get / I / in / summer / must / .", correct: "I must get in shape before summer ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "out / gym / the / at / We / work / .", correct: "We work out at the gym ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "run / a / for / go / Let's / .", correct: "Let's go for a run ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "weights / strong / to / lift / They / get / .", correct: "They lift weights to get strong ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "membership / bought / a / I / gym / .", correct: "I bought a gym membership ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "class / take / a / fitness / She / will / .", correct: "She will take a fitness class ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "goal / set / a / to / need / You / fitness / .", correct: "You need to set a fitness goal ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "sugar / down / cut / on / I / must / .", correct: "I must cut down on sugar ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "water / drinking / by / hydrated / Stay / .", correct: "Stay hydrated by drinking water ." },

                // --- CLICKABLE ERROR (15-24) ---
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "I want to [make](error:build) muscle at the gym." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "You should [loose](error:lose) some weight." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "He likes to [go](error:do) cardio every morning." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "I try to [staying](error:stay) in shape." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "Let's go [to](error:for) a run." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "You should [avoiding](error:avoid) junk food." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "Eat a [balancy](error:balanced) diet." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "Chicken is a good [piece](error:source) of protein." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "I need to [put](error:set) a fitness goal." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "We must cut [off](error:down) on sugar." },

                // --- ODD ONE OUT (25-30) ---
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Equipment)", options:[{t: "Treadmill", c: false}, {t: "Barbell", c: false}, {t: "Dumbbells", c: false}, {t: "Stamina", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Food)", options:[{t: "Protein", c: false}, {t: "Junk food", c: false}, {t: "Fruits", c: false}, {t: "Athlete", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (People)", options:[{t: "Personal trainer", c: false}, {t: "Instructor", c: false}, {t: "Athlete", c: false}, {t: "Diet", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Verbs)", options:[{t: "To stretch", c: false}, {t: "To lose", c: false}, {t: "To avoid", c: false}, {t: "Unfit", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Adjectives)", options:[{t: "Strong", c: false}, {t: "Active", c: false}, {t: "Fit", c: false}, {t: "Cardio", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Phrases)", options:[{t: "Build muscle", c: false}, {t: "Lose weight", c: false}, {t: "Stay hydrated", c: false}, {t: "Exercise bike", c: true}] },

                // --- TRUE / FALSE (31-35) ---
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "If you 'avoid' junk food, it means you eat it every day.", correct: "false"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "A 'treadmill' is a machine used for running inside the gym.", correct: "true"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "If you 'cut down on sugar', you are trying to consume less of it.", correct: "true"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "'Stamina' is a type of vegetable.", correct: "false"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "To 'gain weight' means to become heavier.", correct: "true"}] },

                // --- MCQ (36-39) ---
                { type: "mcq", instruction: "Choose the correct phrase.<br>When you go to the gym, you usually ________.", options:[{t: "work out", c: true}, {t: "cut down", c: false}, {t: "go past", c: false}, {t: "avoid", c: false}] },
                { type: "mcq", instruction: "Choose the correct word.<br>You need to drink water to stay ________.", options:[{t: "unfit", c: false}, {t: "hydrated", c: true}, {t: "active", c: false}, {t: "strong", c: false}] },
                { type: "mcq", instruction: "Choose the correct phrase.<br>To improve your health, you should eat a ________ diet.", options:[{t: "strong", c: false}, {t: "junk", c: false}, {t: "balanced", c: true}, {t: "free", c: false}] },
                { type: "mcq", instruction: "Choose the correct verb.<br>Before lifting heavy weights, it is important to ________ your muscles.", options:[{t: "join", c: false}, {t: "avoid", c: false}, {t: "lose", c: false}, {t: "stretch", c: true}] },

                // --- CATEGORIZE (40) ---
                { type: "categorize", instruction: "Sort the words into Exercise and Nutrition.", 
                    categories:[{id: "exer", name: "Exercise"}, {id: "nutr", name: "Nutrition"}],
                    items:[
                        {text: "Cardio", catId: "exer"}, 
                        {text: "Weightlifting", catId: "exer"}, 
                        {text: "Treadmill", catId: "exer"}, 
                        {text: "Calories", catId: "nutr"}, 
                        {text: "Protein", catId: "nutr"}, 
                        {text: "Junk food", catId: "nutr"}
                    ] 
                }
            ]
        },

        // ======================================================
        // STEP 8: WRITING PRACTICE
        // ======================================================
        {
            title: "Writing Practice",
            instruction: "Write a short paragraph (5-7 sentences) describing your fitness goals and eating habits. Mention if you go to a gym, what exercises you prefer (like cardio or lifting weights), and what you do to maintain a healthy diet.",
            example: "My goal this year is to get in shape and build some muscle. I bought a gym membership, and I work out three times a week. I usually start with cardio on the treadmill, and then I lift weights. I am also trying to improve my nutrition. I avoid eating junk food, and I am cutting down on sugar. I make sure to eat a balanced diet with lots of protein and stay hydrated.",
            prompts:[
                "State your fitness goal (e.g., lose weight, build muscle, stay in shape).",
                "Describe your workout routine (e.g., I go for a run, I lift weights).",
                "Mention your dietary habits (e.g., cut down on sugar, avoid junk food).",
                "Use vocabulary like 'balanced diet' or 'source of protein'."
            ]
        },

        // ======================================================
        // STEP 9: FLASHCARDS
        // ======================================================
        {
            title: "Flashcards",
            items:[
                // 2A Items (36 items)
                { term: "Exercise", definition: "Activity requiring physical effort to sustain health.", defTrans: "Exercício", example: "Regular exercise is important for your heart.", audioFront: "TTS: Exercise", audioBack: "TTS: Regular exercise is important for your heart." },
                { term: "Fitness", definition: "The condition of being physically fit and healthy.", defTrans: "Aptidão física / Fitness", example: "Her overall fitness has improved a lot.", audioFront: "TTS: Fitness", audioBack: "TTS: Her overall fitness has improved a lot." },
                { term: "Workout", definition: "A session of vigorous physical exercise or training.", defTrans: "Treino", example: "I had a great workout this morning.", audioFront: "TTS: Workout", audioBack: "TTS: I had a great workout this morning." },
                { term: "Diet", definition: "The kinds of food that a person habitually eats.", defTrans: "Dieta / Alimentação", example: "A healthy diet consists of natural foods.", audioFront: "TTS: Diet", audioBack: "TTS: A healthy diet consists of natural foods." },
                { term: "Nutrition", definition: "The process of providing or obtaining the food necessary for health.", defTrans: "Nutrição", example: "Good nutrition is key to a long life.", audioFront: "TTS: Nutrition", audioBack: "TTS: Good nutrition is key to a long life." },
                { term: "Cardio", definition: "Cardiovascular exercise.", defTrans: "Cardio", example: "I do cardio to keep my heart healthy.", audioFront: "TTS: Cardio", audioBack: "TTS: I do cardio to keep my heart healthy." },
                { term: "Weightlifting", definition: "The sport or activity of lifting barbells or other heavy weights.", defTrans: "Levantamento de peso", example: "Weightlifting helps you build bigger muscles.", audioFront: "TTS: Weightlifting", audioBack: "TTS: Weightlifting helps you build bigger muscles." },
                { term: "Stamina", definition: "The ability to sustain prolonged physical or mental effort.", defTrans: "Vigor / Resistência", example: "Running every day increases your stamina.", audioFront: "TTS: Stamina", audioBack: "TTS: Running every day increases your stamina." },
                { term: "Strength", definition: "The quality or state of being physically strong.", defTrans: "Força", example: "You need core strength to lift that box.", audioFront: "TTS: Strength", audioBack: "TTS: You need core strength to lift that box." },
                { term: "Calories", definition: "Units of energy.", defTrans: "Calorias", example: "He burns a lot of calories at the gym.", audioFront: "TTS: Calories", audioBack: "TTS: He burns a lot of calories at the gym." },
                { term: "Protein", definition: "A substance found in food (like meat) necessary for the body.", defTrans: "Proteína", example: "Chicken is a great source of protein.", audioFront: "TTS: Protein", audioBack: "TTS: Chicken is a great source of protein." },
                { term: "Junk food", definition: "Food that has low nutritional value.", defTrans: "Comida porcaria", example: "Eating junk food every day is bad for you.", audioFront: "TTS: Junk food", audioBack: "TTS: Eating junk food every day is bad for you." },
                
                { term: "Gym", definition: "A room or building equipped for gymnastics and other physical exercise.", defTrans: "Academia", example: "I go to the gym three times a week.", audioFront: "TTS: Gym", audioBack: "TTS: I go to the gym three times a week." },
                { term: "Fitness center", definition: "A health club or large gym.", defTrans: "Centro de fitness", example: "The new fitness center has a huge pool.", audioFront: "TTS: Fitness center", audioBack: "TTS: The new fitness center has a huge pool." },
                { term: "Personal trainer", definition: "A fitness professional involved in exercise prescription.", defTrans: "Personal trainer", example: "My personal trainer helps me stay motivated.", audioFront: "TTS: Personal trainer", audioBack: "TTS: My personal trainer helps me stay motivated." },
                { term: "Instructor", definition: "A person who teaches a skill.", defTrans: "Instrutor(a)", example: "The yoga instructor corrected my posture.", audioFront: "TTS: Instructor", audioBack: "TTS: The yoga instructor corrected my posture." },
                { term: "Athlete", definition: "A person who is proficient in sports.", defTrans: "Atleta", example: "The professional athlete trains every day.", audioFront: "TTS: Athlete", audioBack: "TTS: The professional athlete trains every day." },
                { term: "Weights", definition: "Heavy objects lifted for exercise.", defTrans: "Pesos", example: "He lifts heavy weights to get stronger.", audioFront: "TTS: Weights", audioBack: "TTS: He lifts heavy weights to get stronger." },
                { term: "Dumbbells", definition: "A short bar with a weight at each end.", defTrans: "Halteres", example: "I bought two dumbbells for my home gym.", audioFront: "TTS: Dumbbells", audioBack: "TTS: I bought two dumbbells for my home gym." },
                { term: "Barbell", definition: "A long metal bar to which disks of varying weights are attached.", defTrans: "Barra (musculação)", example: "Put more plates on the barbell for the squat.", audioFront: "TTS: Barbell", audioBack: "TTS: Put more plates on the barbell for the squat." },
                { term: "Treadmill", definition: "An exercise machine with a continuous belt.", defTrans: "Esteira", example: "She runs on the treadmill when it rains.", audioFront: "TTS: Treadmill", audioBack: "TTS: She runs on the treadmill when it rains." },
                { term: "Exercise bike", definition: "A stationary bicycle.", defTrans: "Bicicleta ergométrica", example: "I cycle on the exercise bike for thirty minutes.", audioFront: "TTS: Exercise bike", audioBack: "TTS: I cycle on the exercise bike for thirty minutes." },
                { term: "Fruits", definition: "The sweet and fleshy product of a tree.", defTrans: "Frutas", example: "Oranges and apples are delicious fruits.", audioFront: "TTS: Fruits", audioBack: "TTS: Oranges and apples are delicious fruits." },
                { term: "Vegetables", definition: "A plant or part of a plant used as food.", defTrans: "Vegetais", example: "You should eat more green vegetables.", audioFront: "TTS: Vegetables", audioBack: "TTS: You should eat more green vegetables." },

                { term: "To work out", definition: "To engage in a session of vigorous physical exercise.", defTrans: "Treinar / Malhar", example: "What time do you usually work out?", audioFront: "TTS: To work out", audioBack: "TTS: What time do you usually work out?" },
                { term: "To train", definition: "To teach or develop a skill through practice.", defTrans: "Treinar", example: "I train for the marathon on weekends.", audioFront: "TTS: To train", audioBack: "TTS: I train for the marathon on weekends." },
                { term: "To stretch", definition: "To straighten or extend one's body or a part of one's body.", defTrans: "Alongar-se", example: "You must stretch before and after running.", audioFront: "TTS: To stretch", audioBack: "TTS: You must stretch before and after running." },
                { term: "To join", definition: "To become a member or employee of.", defTrans: "Juntar-se / Matricular-se", example: "I decided to join a local gym.", audioFront: "TTS: To join", audioBack: "TTS: I decided to join a local gym." },
                { term: "To lose", definition: "To be deprived of or cease to have or retain.", defTrans: "Perder", example: "I want to lose weight before summer.", audioFront: "TTS: To lose", audioBack: "TTS: I want to lose weight before summer." },
                { term: "To gain", definition: "To obtain or secure.", defTrans: "Ganhar", example: "He is eating a lot to gain muscle.", audioFront: "TTS: To gain", audioBack: "TTS: He is eating a lot to gain muscle." },
                { term: "To avoid", definition: "To keep away from or stop oneself from doing.", defTrans: "Evitar", example: "You should avoid eating too much sugar.", audioFront: "TTS: To avoid", audioBack: "TTS: You should avoid eating too much sugar." },
                { term: "Fit", definition: "In good health, especially because of regular physical exercise.", defTrans: "Em forma", example: "She is very fit and runs fast.", audioFront: "TTS: Fit", audioBack: "TTS: She is very fit and runs fast." },
                { term: "Unfit", definition: "Not in good physical condition.", defTrans: "Fora de forma", example: "I feel unfit because I haven't exercised in months.", audioFront: "TTS: Unfit", audioBack: "TTS: I feel unfit because I haven't exercised in months." },
                { term: "Active", definition: "Engaging or ready to engage in physically energetic pursuits.", defTrans: "Ativo(a)", example: "He is an active person who loves hiking.", audioFront: "TTS: Active", audioBack: "TTS: He is an active person who loves hiking." },
                { term: "Inactive", definition: "Not engaging in or involving any or much physical activity.", defTrans: "Inativo / Sedentário", example: "Sitting all day makes you inactive.", audioFront: "TTS: Inactive", audioBack: "TTS: Sitting all day makes you inactive." },
                { term: "Strong", definition: "Having the power to move heavy weights.", defTrans: "Forte", example: "He is strong enough to carry that heavy box.", audioFront: "TTS: Strong", audioBack: "TTS: He is strong enough to carry that heavy box." },

                // 3A Items (18 items)
                { term: "Stay in shape", definition: "To maintain your physical fitness.", defTrans: "Manter a forma", example: "I exercise regularly to stay in shape.", audioFront: "TTS: Stay in shape", audioBack: "TTS: I exercise regularly to stay in shape." },
                { term: "Get in shape", definition: "To improve your physical fitness.", defTrans: "Entrar em forma", example: "I need to get in shape before the marathon.", audioFront: "TTS: Get in shape", audioBack: "TTS: I need to get in shape before the marathon." },
                { term: "Work out at the gym", definition: "To exercise inside a fitness facility.", defTrans: "Malhar na academia", example: "I usually work out at the gym after work.", audioFront: "TTS: Work out at the gym", audioBack: "TTS: I usually work out at the gym after work." },
                { term: "Go for a run", definition: "To jog outside for exercise.", defTrans: "Dar uma corrida", example: "Let's go for a run in the park.", audioFront: "TTS: Go for a run", audioBack: "TTS: Let's go for a run in the park." },
                { term: "Lift weights", definition: "To perform strength training exercises with heavy objects.", defTrans: "Levantar pesos", example: "I lift weights to get stronger.", audioFront: "TTS: Lift weights", audioBack: "TTS: I lift weights to get stronger." },
                { term: "Do cardio", definition: "To perform exercises that increase your heart rate.", defTrans: "Fazer cardio", example: "You should do cardio to improve your heart.", audioFront: "TTS: Do cardio", audioBack: "TTS: You should do cardio to improve your heart." },
                
                { term: "A gym membership", definition: "A subscription that allows you to use a fitness center.", defTrans: "Uma matrícula de academia", example: "I finally bought a gym membership.", audioFront: "TTS: A gym membership", audioBack: "TTS: I finally bought a gym membership." },
                { term: "Work with a personal trainer", definition: "To exercise under the guidance of a professional.", defTrans: "Trabalhar com um personal trainer", example: "It is helpful to work with a personal trainer.", audioFront: "TTS: Work with a personal trainer", audioBack: "TTS: It is helpful to work with a personal trainer." },
                { term: "Take a fitness class", definition: "To participate in a group exercise session led by an instructor.", defTrans: "Fazer uma aula de fitness", example: "I like to take a fitness class like yoga.", audioFront: "TTS: Take a fitness class", audioBack: "TTS: I like to take a fitness class like yoga." },
                { term: "Set a fitness goal", definition: "To decide on a specific target for your physical health.", defTrans: "Definir uma meta de fitness", example: "You need to set a fitness goal to stay motivated.", audioFront: "TTS: Set a fitness goal", audioBack: "TTS: You need to set a fitness goal to stay motivated." },
                { term: "Lose weight", definition: "To reduce your body mass.", defTrans: "Perder peso", example: "She is on a diet to lose weight.", audioFront: "TTS: Lose weight", audioBack: "TTS: She is on a diet to lose weight." },
                { term: "Build muscle", definition: "To increase the size and strength of your muscles.", defTrans: "Construir músculo", example: "He lifts heavy barbells to build muscle.", audioFront: "TTS: Build muscle", audioBack: "TTS: He lifts heavy barbells to build muscle." },
                
                { term: "Eat a balanced diet", definition: "To consume a healthy variety of foods.", defTrans: "Comer uma dieta balanceada", example: "It is important to eat a balanced diet.", audioFront: "TTS: Eat a balanced diet", audioBack: "TTS: It is important to eat a balanced diet." },
                { term: "A healthy lifestyle", definition: "A way of living that lowers the risk of being seriously ill.", defTrans: "Um estilo de vida saudável", example: "Walking and sleeping well are part of a healthy lifestyle.", audioFront: "TTS: A healthy lifestyle", audioBack: "TTS: Walking and sleeping well are part of a healthy lifestyle." },
                { term: "Cut down on sugar", definition: "To consume less sweet food and drinks.", defTrans: "Reduzir o açúcar", example: "I am trying to cut down on sugar.", audioFront: "TTS: Cut down on sugar", audioBack: "TTS: I am trying to cut down on sugar." },
                { term: "Stay hydrated", definition: "To drink enough water to keep the body healthy.", defTrans: "Manter-se hidratado", example: "Drink plenty of water to stay hydrated.", audioFront: "TTS: Stay hydrated", audioBack: "TTS: Drink plenty of water to stay hydrated." },
                { term: "Avoid junk food", definition: "To actively choose not to eat unhealthy snacks and meals.", defTrans: "Evitar comida não saudável", example: "You should avoid junk food if you want to be fit.", audioFront: "TTS: Avoid junk food", audioBack: "TTS: You should avoid junk food if you want to be fit." },
                { term: "Good source of protein", definition: "A food that provides a high amount of necessary nutrients for muscle growth.", defTrans: "Boa fonte de proteína", example: "Chicken is a good source of protein.", audioFront: "TTS: Good source of protein", audioBack: "TTS: Chicken is a good source of protein." }
            ]
        }
    ],

    // ======================================================
    // GLOSSARY (All 54 items + Context words)
    // ======================================================
    glossary:[
        // 2A: Concepts & Nutrition
        { topic: "Concepts", term: "exercise", definition: "Activity requiring physical effort.", translation: "Exercício" },
        { topic: "Concepts", term: "fitness", definition: "Condition of being physically fit.", translation: "Aptidão física" },
        { topic: "Concepts", term: "workout", definition: "A session of physical training.", translation: "Treino" },
        { topic: "Nutrition", term: "diet", definition: "The kinds of food a person habitually eats.", translation: "Dieta" },
        { topic: "Nutrition", term: "nutrition", definition: "The process of providing food for health.", translation: "Nutrição" },
        { topic: "Concepts", term: "cardio", definition: "Cardiovascular exercise.", translation: "Cardio" },
        { topic: "Concepts", term: "weightlifting", definition: "The activity of lifting heavy weights.", translation: "Levantamento de peso" },
        { topic: "Concepts", term: "stamina", definition: "The ability to sustain prolonged effort.", translation: "Vigor / Resistência" },
        { topic: "Concepts", term: "strength", definition: "The quality of being physically strong.", translation: "Força" },
        { topic: "Nutrition", term: "calories", definition: "Units of energy in food.", translation: "Calorias" },
        { topic: "Nutrition", term: "protein", definition: "Nutrient essential for building muscle.", translation: "Proteína" },
        { topic: "Nutrition", term: "junk-food", definition: "Food with low nutritional value.", translation: "Comida não saudável" },

        // 2A: Places, People & Equipment
        { topic: "Places", term: "gym", definition: "A room equipped for physical exercise.", translation: "Academia" },
        { topic: "Places", term: "fitness-center", definition: "A health club or gym.", translation: "Centro de fitness" },
        { topic: "People", term: "personal-trainer", definition: "A fitness professional.", translation: "Personal trainer" },
        { topic: "People", term: "instructor", definition: "A person who teaches a skill.", translation: "Instrutor(a)" },
        { topic: "People", term: "athlete", definition: "A person proficient in sports.", translation: "Atleta" },
        { topic: "Equipment", term: "weights", definition: "Heavy objects lifted for exercise.", translation: "Pesos" },
        { topic: "Equipment", term: "dumbbells", definition: "A short bar with a weight at each end.", translation: "Halteres" },
        { topic: "Equipment", term: "barbell", definition: "A long metal bar with disks of weights.", translation: "Barra (musculação)" },
        { topic: "Equipment", term: "treadmill", definition: "An exercise machine with a continuous belt.", translation: "Esteira" },
        { topic: "Equipment", term: "exercise-bike", definition: "A stationary bicycle.", translation: "Bicicleta ergométrica" },
        { topic: "Nutrition", term: "fruits", definition: "Sweet and fleshy product of a tree.", translation: "Frutas" },
        { topic: "Nutrition", term: "vegetables", definition: "A plant used as food.", translation: "Vegetais" },

        // 2A: Verbs & Adjectives
        { topic: "Verbs", term: "to-work-out", definition: "To engage in a session of physical exercise.", translation: "Treinar / Malhar" },
        { topic: "Verbs", term: "to-train", definition: "To develop a skill through practice.", translation: "Treinar" },
        { topic: "Verbs", term: "to-stretch", definition: "To extend one's body.", translation: "Alongar-se" },
        { topic: "Verbs", term: "to-join", definition: "To become a member of.", translation: "Juntar-se / Matricular-se" },
        { topic: "Verbs", term: "to-lose", definition: "To be deprived of.", translation: "Perder" },
        { topic: "Verbs", term: "to-gain", definition: "To obtain or secure.", translation: "Ganhar" },
        { topic: "Verbs", term: "to-avoid", definition: "To keep away from.", translation: "Evitar" },
        { topic: "Adjectives", term: "fit", definition: "In good health.", translation: "Em forma" },
        { topic: "Adjectives", term: "unfit", definition: "Not in good physical condition.", translation: "Fora de forma" },
        { topic: "Adjectives", term: "active", definition: "Engaging in energetic pursuits.", translation: "Ativo(a)" },
        { topic: "Adjectives", term: "inactive", definition: "Not engaging in physical activity.", translation: "Inativo(a)" },
        { topic: "Adjectives", term: "strong", definition: "Having power to move heavy weights.", translation: "Forte" },

        // 3A: Expressions
        { topic: "Expressions", term: "stay-in-shape", definition: "To maintain your physical fitness.", translation: "Manter a forma" },
        { topic: "Expressions", term: "get-in-shape", definition: "To improve your physical fitness.", translation: "Entrar em forma" },
        { topic: "Expressions", term: "work-out", definition: "To exercise inside a fitness facility.", translation: "Malhar na academia" },
        { topic: "Expressions", term: "go-for-run", definition: "To jog outside for exercise.", translation: "Dar uma corrida" },
        { topic: "Expressions", term: "lift-weights", definition: "To perform strength training exercises.", translation: "Levantar pesos" },
        { topic: "Expressions", term: "do-cardio", definition: "To perform exercises that increase your heart rate.", translation: "Fazer cardio" },
        
        { topic: "Expressions", term: "gym-membership", definition: "A subscription to use a fitness center.", translation: "Matrícula de academia" },
        { topic: "Expressions", term: "work-with-trainer", definition: "To exercise under professional guidance.", translation: "Trabalhar com um personal trainer" },
        { topic: "Expressions", term: "take-fitness-class", definition: "To participate in a group exercise session.", translation: "Fazer uma aula de fitness" },
        { topic: "Expressions", term: "set-fitness-goal", definition: "To decide on a specific target for health.", translation: "Definir uma meta de fitness" },
        { topic: "Expressions", term: "lose-weight", definition: "To reduce your body mass.", translation: "Perder peso" },
        { topic: "Expressions", term: "build-muscle", definition: "To increase muscle size and strength.", translation: "Construir músculo" },
        
        { topic: "Expressions", term: "balanced-diet", definition: "To consume a healthy variety of foods.", translation: "Dieta balanceada" },
        { topic: "Expressions", term: "healthy-lifestyle", definition: "A way of living that lowers illness risk.", translation: "Estilo de vida saudável" },
        { topic: "Expressions", term: "cut-down-sugar", definition: "To consume less sweet food and drinks.", translation: "Reduzir o açúcar" },
        { topic: "Expressions", term: "stay-hydrated", definition: "To drink enough water.", translation: "Manter-se hidratado" },
        { topic: "Expressions", term: "avoid-junk-food", definition: "To choose not to eat unhealthy snacks.", translation: "Evitar comida não saudável" },
        { topic: "Expressions", term: "source-of-protein", definition: "Food providing nutrients for muscle growth.", translation: "Fonte de proteína" },

        // Additional Context Words
        { topic: "Context", term: "cut-down-on", definition: "To consume less of something.", translation: "Reduzir" },
        { topic: "Context", term: "eat-balanced-diet", definition: "The act of eating a mix of healthy foods.", translation: "Comer uma dieta balanceada" },
        { topic: "Context", term: "set-fitness-goal", definition: "To establish a target for your physical health.", translation: "Definir uma meta" }
    ]
});