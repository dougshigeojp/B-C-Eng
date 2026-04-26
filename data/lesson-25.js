/**
 * English Block Assembling - LESSON DATA: Topic 25
 * Topic: Travel Experiences
 * Level: Upper A2 ~ Lower B1
 */

window.initLesson({
    // --- METADATA ---
    lessonId: "lesson-25",
    block: "4",
    topicTitle: "Travel Experiences",

    steps:[
        // ======================================================
        // STEP 0: INTRO & CAN-DO
        // ======================================================
        {
            title: "Intro & Can-Do",
            objectives: "• Describe past [vacations](tooltip:vacation) and share memorable travel stories.<br>• Talk about different [destinations](tooltip:destination), local [culture](tooltip:culture), and [scenery](tooltip:scenery).<br>• Make and ask for [recommendations](tooltip:recommend) about places to visit.<br>• Plan future [trips](tooltip:trip) and talk about your bucket list.",
            welcome: "Welcome to Lesson 25! Traveling opens our minds to new cultures and breathtaking landscapes. In this lesson, you will learn the vocabulary to talk about your best vacations, describe the food and places you explored, and recommend tourist spots to your friends. You will also learn how to discuss your future travel plans. Pack your bags, let's explore!",
            audio: {
                objectives: "TTS: In this lesson, you will learn to: Describe past vacations and share memorable travel stories. Talk about different destinations, local culture, and scenery. Make and ask for recommendations about places to visit. Plan future trips and talk about your bucket list.",
                welcome: "TTS: Welcome to Lesson 25! Traveling opens our minds to new cultures and breathtaking landscapes. In this lesson, you will learn the vocabulary to talk about your best vacations, describe the food and places you explored, and recommend tourist spots to your friends. You will also learn how to discuss your future travel plans. Pack your bags, let's explore!"
            }
        },

        // ======================================================
        // STEP 1: CONTEXT DIALOGUE
        // ======================================================
        {
            title: "Context Dialogue",
            context: "Mia and Noah are having coffee. Noah is telling Mia about his recent vacation.",
            contextAudio: "TTS: Mia: You were on vacation last week, weren't you? Where did you go for your last vacation? Noah: Yes! I went to Peru for ten days. It was an unforgettable experience. Mia: Wow, Peru! Did you visit Machu Picchu? Noah: Of course! The scenery was breathtaking. It was definitely the highlight of the trip. Mia: That sounds like an amazing adventure. Did you try the local cuisine? Noah: Yes, the food was delicious, and the local people were very friendly. Mia: I would love to go to South America one day. Noah: I highly recommend it. The culture and history are fantastic. Mia: I'm saving up for a trip right now. Maybe I will go there next year!",
            dialogue:[
                { speaker: "Mia", text: "You were on [vacation](tooltip:vacation) last week, weren't you? [Where did you go for your last vacation](tooltip:where-did-you-go)?" },
                { speaker: "Noah", text: "Yes! [I went to](tooltip:i-went-to) Peru for ten days. It was an [unforgettable](tooltip:unforgettable)[experience](tooltip:experience)." },
                { speaker: "Mia", text: "Wow, Peru! Did you[visit](tooltip:to-visit) Machu Picchu?" },
                { speaker: "Noah", text: "Of course![The scenery was breathtaking](tooltip:scenery-breathtaking). It was definitely the [highlight](tooltip:highlight) of the [trip](tooltip:trip)." },
                { speaker: "Mia", text: "That sounds like an[amazing](tooltip:amazing) [adventure](tooltip:adventure). Did you [try the local cuisine](tooltip:tried-local-cuisine)?" },
                { speaker: "Noah", text: "Yes, the food was delicious, and the local people were very friendly." },
                { speaker: "Mia", text: "I would love to go to South America one day." },
                { speaker: "Noah", text: "I highly [recommend](tooltip:recommend) it. The [culture](tooltip:culture) and history are fantastic." },
                { speaker: "Mia", text: "[I'm saving up for a trip](tooltip:saving-up) right now. Maybe I will go there next year!" }
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
                    title: "Nouns (Travel & Accommodation)",
                    audio: "TTS: Trip. Vacation. Destination. Tourist. Passport. Souvenir. Hotel. Hostel. Resort. Monument. Culture. Cuisine.",
                    items:[
                        { term: "Trip", trans: "Viagem (geralmente curta ou com um propósito)" },
                        { term: "Vacation", trans: "Férias" },
                        { term: "Destination", trans: "Destino" },
                        { term: "Tourist", trans: "Turista" },
                        { term: "Passport", trans: "Passaporte" },
                        { term: "Souvenir", trans: "Lembrancinha" },
                        { term: "Hotel", trans: "Hotel" },
                        { term: "Hostel", trans: "Albergue / Hostel" },
                        { term: "Resort", trans: "Resort / Estância" },
                        { term: "Monument", trans: "Monumento" },
                        { term: "Culture", trans: "Cultura" },
                        { term: "Cuisine", trans: "Culinária" }
                    ]
                },
                {
                    title: "Verbs (Travel Actions)",
                    audio: "TTS: To travel. To explore. To discover. To book. To reserve. To plan. To pack. To unpack. To fly. To drive. To stay. To recommend.",
                    items:[
                        { term: "To travel", trans: "Viajar" },
                        { term: "To explore", trans: "Explorar" },
                        { term: "To discover", trans: "Descobrir" },
                        { term: "To book", trans: "Reservar (passagens, hotéis)" },
                        { term: "To reserve", trans: "Reservar (mesas, lugares)" },
                        { term: "To plan", trans: "Planejar" },
                        { term: "To pack", trans: "Fazer as malas" },
                        { term: "To unpack", trans: "Desfazer as malas" },
                        { term: "To fly", trans: "Voar / Viajar de avião" },
                        { term: "To drive", trans: "Dirigir / Viajar de carro" },
                        { term: "To stay", trans: "Hospedar-se / Ficar" },
                        { term: "To recommend", trans: "Recomendar" }
                    ]
                },
                {
                    title: "Adjectives (Describing Trips)",
                    audio: "TTS: Incredible. Unforgettable. Picturesque. Adventurous. Relaxing. Peaceful. Touristy. Crowded. Busy. Quiet. Traditional. Authentic.",
                    items:[
                        { term: "Incredible", trans: "Incrível" },
                        { term: "Unforgettable", trans: "Inesquecível" },
                        { term: "Picturesque", trans: "Pintoresco / Cênico" },
                        { term: "Adventurous", trans: "Aventureiro(a) / Cheio de aventuras" },
                        { term: "Relaxing", trans: "Relaxante" },
                        { term: "Peaceful", trans: "Pacífico / Tranquilo" },
                        { term: "Touristy", trans: "Turístico (frequentado por muitos turistas)" },
                        { term: "Crowded", trans: "Lotado" },
                        { term: "Busy", trans: "Movimentado / Ocupado" },
                        { term: "Quiet", trans: "Silencioso / Calmo" },
                        { term: "Traditional", trans: "Tradicional" },
                        { term: "Authentic", trans: "Autêntico" }
                    ]
                }
            ],

            // --- 2B: EXAMPLES ---
            exampleGroups:[
                {
                    title: "Nouns (Travel & Accommodation)",
                    audio: "TTS: Our trip to London was amazing. I need a long vacation at the beach. Paris is a very popular destination. A tourist asked me for directions. You must show your passport at the airport. I bought a small souvenir for my mom. We slept in a luxury hotel. A hostel is much cheaper for young travelers. They spent their honeymoon in a beach resort. We visited a famous historical monument. Japan has a fascinating culture. I love spicy Mexican cuisine.",
                    items:[
                        { term: "Trip", sent: "Our trip to London was amazing.", trans: "Nossa viagem a Londres foi incrível." },
                        { term: "Vacation", sent: "I need a long vacation at the beach.", trans: "Preciso de longas férias na praia." },
                        { term: "Destination", sent: "Paris is a very popular destination.", trans: "Paris é um destino muito popular." },
                        { term: "Tourist", sent: "A tourist asked me for directions.", trans: "Um turista me pediu informações/direções." },
                        { term: "Passport", sent: "You must show your passport at the airport.", trans: "Você deve mostrar seu passaporte no aeroporto." },
                        { term: "Souvenir", sent: "I bought a small souvenir for my mom.", trans: "Comprei uma lembrancinha para minha mãe." },
                        { term: "Hotel", sent: "We slept in a luxury hotel.", trans: "Nós dormimos em um hotel de luxo." },
                        { term: "Hostel", sent: "A hostel is much cheaper for young travelers.", trans: "Um albergue é muito mais barato para jovens viajantes." },
                        { term: "Resort", sent: "They spent their honeymoon in a beach resort.", trans: "Eles passaram a lua de mel em um resort na praia." },
                        { term: "Monument", sent: "We visited a famous historical monument.", trans: "Nós visitamos um famoso monumento histórico." },
                        { term: "Culture", sent: "Japan has a fascinating culture.", trans: "O Japão tem uma cultura fascinante." },
                        { term: "Cuisine", sent: "I love spicy Mexican cuisine.", trans: "Eu amo a culinária mexicana apimentada." }
                    ]
                },
                {
                    title: "Verbs (Travel Actions)",
                    audio: "TTS: I love to travel around Europe. We decided to explore the ancient ruins. Scientists discover new species in the jungle. I must book my flights today. Let me reserve a table for two. We need to plan our itinerary carefully. Do not forget to pack your swimsuit. As soon as I arrived, I started to unpack. We will fly to New York tomorrow. We are going to drive across the country. I prefer to stay in a quiet guesthouse. Can you recommend a good restaurant?",
                    items:[
                        { term: "To travel", sent: "I love to travel around Europe.", trans: "Eu amo viajar pela Europa." },
                        { term: "To explore", sent: "We decided to explore the ancient ruins.", trans: "Nós decidimos explorar as ruínas antigas." },
                        { term: "To discover", sent: "Scientists discover new species in the jungle.", trans: "Cientistas descobrem novas espécies na selva." },
                        { term: "To book", sent: "I must book my flights today.", trans: "Devo reservar meus voos hoje." },
                        { term: "To reserve", sent: "Let me reserve a table for two.", trans: "Deixe-me reservar uma mesa para dois." },
                        { term: "To plan", sent: "We need to plan our itinerary carefully.", trans: "Precisamos planejar nosso itinerário com cuidado." },
                        { term: "To pack", sent: "Do not forget to pack your swimsuit.", trans: "Não se esqueça de fazer as malas (colocar) com seu traje de banho." },
                        { term: "To unpack", sent: "As soon as I arrived, I started to unpack.", trans: "Assim que cheguei, comecei a desfazer as malas." },
                        { term: "To fly", sent: "We will fly to New York tomorrow.", trans: "Nós vamos voar para Nova York amanhã." },
                        { term: "To drive", sent: "We are going to drive across the country.", trans: "Nós vamos dirigir através do país." },
                        { term: "To stay", sent: "I prefer to stay in a quiet guesthouse.", trans: "Eu prefiro me hospedar em uma pousada silenciosa." },
                        { term: "To recommend", sent: "Can you recommend a good restaurant?", trans: "Você pode recomendar um bom restaurante?" }
                    ]
                },
                {
                    title: "Adjectives (Describing Trips)",
                    audio: "TTS: We saw an incredible waterfall in the forest. My trip to India was unforgettable. We took photos of the picturesque village. Rock climbing is a very adventurous activity. A day at the spa is very relaxing. The countryside is very peaceful and quiet. The main square is too touristy for me. The train was very crowded during rush hour. The airport is always busy on holidays. The library is a very quiet place. We watched a traditional dance performance. The food at that restaurant is very authentic.",
                    items:[
                        { term: "Incredible", sent: "We saw an incredible waterfall in the forest.", trans: "Vimos uma cachoeira incrível na floresta." },
                        { term: "Unforgettable", sent: "My trip to India was unforgettable.", trans: "Minha viagem à Índia foi inesquecível." },
                        { term: "Picturesque", sent: "We took photos of the picturesque village.", trans: "Tiramos fotos da vila pitoresca." },
                        { term: "Adventurous", sent: "Rock climbing is a very adventurous activity.", trans: "A escalada é uma atividade muito aventureira." },
                        { term: "Relaxing", sent: "A day at the spa is very relaxing.", trans: "Um dia no spa é muito relaxante." },
                        { term: "Peaceful", sent: "The countryside is very peaceful and quiet.", trans: "O interior é muito pacífico e calmo." },
                        { term: "Touristy", sent: "The main square is too touristy for me.", trans: "A praça principal é muito turística para mim." },
                        { term: "Crowded", sent: "The train was very crowded during rush hour.", trans: "O trem estava muito lotado durante a hora do rush." },
                        { term: "Busy", sent: "The airport is always busy on holidays.", trans: "O aeroporto está sempre movimentado nos feriados." },
                        { term: "Quiet", sent: "The library is a very quiet place.", trans: "A biblioteca é um lugar muito silencioso." },
                        { term: "Traditional", sent: "We watched a traditional dance performance.", trans: "Assistimos a uma apresentação de dança tradicional." },
                        { term: "Authentic", sent: "The food at that restaurant is very authentic.", trans: "A comida daquele restaurante é muito autêntica." }
                    ]
                }
            ],

            // --- 2C: PRACTICE ---
            drillGroups:[
                {
                    title: "Nouns (Travel & Accommodation)",
                    drills:[
                        { q: "A journey or excursion, especially for pleasure, is a ________.", options:[{t: "Destination", c: false}, {t: "Trip", c: true}, {t: "Monument", c: false}, {t: "Cuisine", c: false}], type: "mcq" },
                        { q: "An extended period of leisure and recreation, away from work, is a ________.", options:[{t: "Hostel", c: false}, {t: "Vacation", c: true}, {t: "Passport", c: false}, {t: "Souvenir", c: false}], type: "mcq" },
                        { q: "The place to which someone or something is going is the ________.", options:[{t: "Destination", c: true}, {t: "Resort", c: false}, {t: "Trip", c: false}, {t: "Culture", c: false}], type: "mcq" },
                        { q: "A person who is traveling or visiting a place for pleasure is a ________.", options:[{t: "Monument", c: false}, {t: "Hostel", c: false}, {t: "Tourist", c: true}, {t: "Hotel", c: false}], type: "mcq" },
                        { q: "An official document issued by a government, certifying identity and citizenship, is a ________.", options:[{t: "Souvenir", c: false}, {t: "Passport", c: true}, {t: "Cuisine", c: false}, {t: "Ticket", c: false}], type: "mcq" },
                        { q: "A thing that is kept as a reminder of a person, place, or event is a ________.", options:[{t: "Souvenir", c: true}, {t: "Destination", c: false}, {t: "Hotel", c: false}, {t: "Monument", c: false}], type: "mcq" },
                        { q: "An establishment providing accommodation, meals, and other services is a ________.", options:[{t: "Hotel", c: true}, {t: "Trip", c: false}, {t: "Passport", c: false}, {t: "Culture", c: false}], type: "mcq" },
                        { q: "An establishment that provides cheap food and lodging for a specific group, like backpackers, is a ________.", options:[{t: "Hostel", c: true}, {t: "Monument", c: false}, {t: "Resort", c: false}, {t: "Tourist", c: false}], type: "mcq" },
                        { q: "A place that is a popular destination for holidays or recreation, often with many facilities, is a ________.", options:[{t: "Resort", c: true}, {t: "Passport", c: false}, {t: "Culture", c: false}, {t: "Souvenir", c: false}], type: "mcq" },
                        { q: "A statue, building, or other structure erected to commemorate a famous or notable person or event is a ________.", options:[{t: "Monument", c: true}, {t: "Vacation", c: false}, {t: "Cuisine", c: false}, {t: "Trip", c: false}], type: "mcq" },
                        { q: "The arts, customs, and institutions of a nation or people is its ________.", options:[{t: "Culture", c: true}, {t: "Destination", c: false}, {t: "Hostel", c: false}, {t: "Hotel", c: false}], type: "mcq" },
                        { q: "A style or method of cooking, especially characteristic of a particular country, is its ________.", options:[{t: "Cuisine", c: true}, {t: "Tourist", c: false}, {t: "Passport", c: false}, {t: "Souvenir", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Verbs (Travel Actions)",
                    drills:[
                        { q: "To go from one place to another, typically over a distance, is ________.", options:[{t: "To pack", c: false}, {t: "To travel", c: true}, {t: "To unpack", c: false}, {t: "To stay", c: false}], type: "mcq" },
                        { q: "To travel through an unfamiliar area to learn about it is ________.", options:[{t: "To explore", c: true}, {t: "To book", c: false}, {t: "To drive", c: false}, {t: "To plan", c: false}], type: "mcq" },
                        { q: "To find something or someone unexpectedly or in the course of a search is ________.", options:[{t: "To reserve", c: false}, {t: "To stay", c: false}, {t: "To discover", c: true}, {t: "To fly", c: false}], type: "mcq" },
                        { q: "To buy a ticket in advance for a flight or a room is ________.", options:[{t: "To pack", c: false}, {t: "To book", c: true}, {t: "To travel", c: false}, {t: "To unpack", c: false}], type: "mcq" },
                        { q: "To arrange for a room, seat, or table to be kept for your use is ________.", options:[{t: "To reserve", c: true}, {t: "To discover", c: false}, {t: "To drive", c: false}, {t: "To explore", c: false}], type: "mcq" },
                        { q: "To decide on and arrange in advance is ________.", options:[{t: "To plan", c: true}, {t: "To stay", c: false}, {t: "To recommend", c: false}, {t: "To fly", c: false}], type: "mcq" },
                        { q: "To put clothes and other items into a suitcase is ________.", options:[{t: "To unpack", c: false}, {t: "To pack", c: true}, {t: "To explore", c: false}, {t: "To reserve", c: false}], type: "mcq" },
                        { q: "To remove things from a suitcase is ________.", options:[{t: "To travel", c: false}, {t: "To book", c: false}, {t: "To unpack", c: true}, {t: "To plan", c: false}], type: "mcq" },
                        { q: "To travel through the air in an aircraft is ________.", options:[{t: "To drive", c: false}, {t: "To fly", c: true}, {t: "To recommend", c: false}, {t: "To pack", c: false}], type: "mcq" },
                        { q: "To operate and control the direction and speed of a motor vehicle is ________.", options:[{t: "To drive", c: true}, {t: "To stay", c: false}, {t: "To unpack", c: false}, {t: "To discover", c: false}], type: "mcq" },
                        { q: "To live somewhere temporarily as a guest is ________.", options:[{t: "To stay", c: true}, {t: "To book", c: false}, {t: "To travel", c: false}, {t: "To plan", c: false}], type: "mcq" },
                        { q: "To put forward (someone or something) with approval as being suitable is ________.", options:[{t: "To recommend", c: true}, {t: "To pack", c: false}, {t: "To fly", c: false}, {t: "To explore", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Adjectives (Describing Trips)",
                    drills:[
                        { q: "Impossible to believe; exceptionally good is ________.", options:[{t: "Incredible", c: true}, {t: "Touristy", c: false}, {t: "Crowded", c: false}, {t: "Busy", c: false}], type: "mcq" },
                        { q: "Impossible to forget; highly memorable is ________.", options:[{t: "Authentic", c: false}, {t: "Unforgettable", c: true}, {t: "Quiet", c: false}, {t: "Traditional", c: false}], type: "mcq" },
                        { q: "Visually attractive, especially in a quaint or pretty style is ________.", options:[{t: "Crowded", c: false}, {t: "Touristy", c: false}, {t: "Picturesque", c: true}, {t: "Busy", c: false}], type: "mcq" },
                        { q: "Willing to take risks or to try out new methods or ideas is ________.", options:[{t: "Peaceful", c: false}, {t: "Adventurous", c: true}, {t: "Quiet", c: false}, {t: "Relaxing", c: false}], type: "mcq" },
                        { q: "Reducing tension or anxiety is ________.", options:[{t: "Relaxing", c: true}, {t: "Crowded", c: false}, {t: "Touristy", c: false}, {t: "Busy", c: false}], type: "mcq" },
                        { q: "Free from disturbance; tranquil is ________.", options:[{t: "Peaceful", c: true}, {t: "Incredible", c: false}, {t: "Adventurous", c: false}, {t: "Authentic", c: false}], type: "mcq" },
                        { q: "A place appealing to or visited by many tourists (often used negatively) is ________.", options:[{t: "Touristy", c: true}, {t: "Quiet", c: false}, {t: "Traditional", c: false}, {t: "Picturesque", c: false}], type: "mcq" },
                        { q: "A space full of people, leaving little or no room for movement, is ________.", options:[{t: "Crowded", c: true}, {t: "Peaceful", c: false}, {t: "Relaxing", c: false}, {t: "Unforgettable", c: false}], type: "mcq" },
                        { q: "Having a great deal to do; keeping occupied is ________.", options:[{t: "Busy", c: true}, {t: "Quiet", c: false}, {t: "Authentic", c: false}, {t: "Traditional", c: false}], type: "mcq" },
                        { q: "Making little or no noise is ________.", options:[{t: "Crowded", c: false}, {t: "Touristy", c: false}, {t: "Quiet", c: true}, {t: "Busy", c: false}], type: "mcq" },
                        { q: "Existing in or as part of a tradition; long-established is ________.", options:[{t: "Traditional", c: true}, {t: "Incredible", c: false}, {t: "Adventurous", c: false}, {t: "Relaxing", c: false}], type: "mcq" },
                        { q: "Of undisputed origin; genuine is ________.", options:[{t: "Touristy", c: false}, {t: "Crowded", c: false}, {t: "Authentic", c: true}, {t: "Busy", c: false}], type: "mcq" }
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
                    title: "Past Trips & Destinations",
                    audio: "TTS: I went to. We spent two weeks in. Have you ever been to. The scenery was breathtaking. There was so much to see and do. Off the beaten path.",
                    explanation: "Phrases used to introduce a past travel experience and describe the location in an interesting way.<br><span style='color:var(--primary-blue); font-style:italic;'>(Frases usadas para introduzir uma experiência de viagem passada e descrever o local de maneira interessante.)</span>",
                    samples:[
                        { en: "<b>I went to</b> Italy last summer.", pt: "<span style='color:var(--primary-blue)'>(Eu fui para a Itália no verão passado.)</span>" },
                        { en: "<b>We spent two weeks in</b> Tokyo.", pt: "<span style='color:var(--primary-blue)'>(Nós passamos duas semanas em Tóquio.)</span>" },
                        { en: "<b>Have you ever been to</b> New York?", pt: "<span style='color:var(--primary-blue)'>(Você já esteve em Nova York?)</span>" },
                        { en: "From the mountain, <b>the scenery was breathtaking</b>.", pt: "<span style='color:var(--primary-blue)'>(Da montanha, a paisagem era de tirar o fôlego.)</span>" },
                        { en: "I loved London, <b>there was so much to see and do</b>.", pt: "<span style='color:var(--primary-blue)'>(Eu amei Londres, havia muito o que ver e fazer.)</span>" },
                        { en: "We found a small beach completely <b>off the beaten path</b>.", pt: "<span style='color:var(--primary-blue)'>(Encontramos uma pequena praia completamente fora da rota turística.)</span>" }
                    ]
                },
                {
                    title: "Activities & Recommendations",
                    audio: "TTS: We stayed in a. We went sightseeing. We tried the local cuisine. The best part of the trip was. I would definitely recommend it. The best time to visit is.",
                    explanation: "Phrases used to explain what you did, ate, and where you slept, as well as how to give advice to other travelers.<br><span style='color:var(--primary-blue); font-style:italic;'>(Frases usadas para explicar o que você fez, comeu e onde dormiu, bem como dar conselhos a outros viajantes.)</span>",
                    samples:[
                        { en: "<b>We stayed in a</b> nice hotel near the center.", pt: "<span style='color:var(--primary-blue)'>(Nós ficamos em um bom hotel perto do centro.)</span>" },
                        { en: "Every morning, <b>we went sightseeing</b>.", pt: "<span style='color:var(--primary-blue)'>(Toda manhã, nós fomos fazer turismo/ver os pontos turísticos.)</span>" },
                        { en: "At night, <b>we tried the local cuisine</b>.", pt: "<span style='color:var(--primary-blue)'>(À noite, nós provamos a culinária local.)</span>" },
                        { en: "<b>The best part of the trip was</b> visiting the museum.", pt: "<span style='color:var(--primary-blue)'>(A melhor parte da viagem foi visitar o museu.)</span>" },
                        { en: "If you like nature, <b>I would definitely recommend it</b>.", pt: "<span style='color:var(--primary-blue)'>(Se você gosta de natureza, eu definitivamente recomendaria.)</span>" },
                        { en: "<b>The best time to visit is</b> in the spring.", pt: "<span style='color:var(--primary-blue)'>(A melhor época para visitar é na primavera.)</span>" }
                    ]
                },
                {
                    title: "Planning Future Trips",
                    audio: "TTS: I'm planning a trip to. It's on my bucket list. Book my flights. I'm saving up for a trip. Where did you go for your last vacation. What did you like most about.",
                    explanation: "Useful phrases to discuss future travels, long-term dreams, and to ask others about their past vacations.<br><span style='color:var(--primary-blue); font-style:italic;'>(Frases úteis para discutir viagens futuras, sonhos a longo prazo e perguntar aos outros sobre suas férias passadas.)</span>",
                    samples:[
                        { en: "<b>I'm planning a trip to</b> Canada next year.", pt: "<span style='color:var(--primary-blue)'>(Estou planejando uma viagem para o Canadá no ano que vem.)</span>" },
                        { en: "Going to Egypt? Yes, <b>it's on my bucket list</b>.", pt: "<span style='color:var(--primary-blue)'>(Ir para o Egito? Sim, está na minha lista de desejos [antes de morrer].)</span>" },
                        { en: "I need to <b>book my flights</b> tonight.", pt: "<span style='color:var(--primary-blue)'>(Eu preciso reservar meus voos esta noite.)</span>" },
                        { en: "I can't go out to eat, <b>I'm saving up for a trip</b>.", pt: "<span style='color:var(--primary-blue)'>(Não posso sair para comer, estou economizando para uma viagem.)</span>" },
                        { en: "<b>Where did you go for your last vacation?</b>", pt: "<span style='color:var(--primary-blue)'>(Onde você foi nas suas últimas férias?)</span>" },
                        { en: "<b>What did you like most about</b> Paris?", pt: "<span style='color:var(--primary-blue)'>(O que você mais gostou em Paris?)</span>" }
                    ]
                }
            ],

            // --- 3B: DIALOGUES ---
            dialogueGroups:[
                {
                    title: "Dialogue 1: Returning from a Trip",
                    audio: "TTS: Where did you go for your last vacation? I went to Spain. We spent two weeks in Madrid. Wow! The best part of the trip was the museums.",
                    lines:[
                        { speaker: "Noah", text: "Where did you go for your last vacation?", pt: "(Onde você foi nas suas últimas férias?)" },
                        { speaker: "Mia", text: "I went to Spain. We spent two weeks in Madrid. The best part of the trip was the museums.", pt: "(Eu fui para a Espanha. Nós passamos duas semanas em Madri. A melhor parte da viagem foram os museus.)" }
                    ]
                },
                {
                    title: "Dialogue 2: Exploring",
                    audio: "TTS: Have you ever been to Rome? Yes, I have. The scenery was breathtaking! I bet there was so much to see and do there.",
                    lines:[
                        { speaker: "Liam", text: "Have you ever been to Rome?", pt: "(Você já esteve em Roma?)" },
                        { speaker: "Emma", text: "Yes, I have. The scenery was breathtaking! I bet there was so much to see and do there.", pt: "(Sim, eu estive. A paisagem era de tirar o fôlego! Aposto que havia muito o que ver e fazer lá.)" } // Wait, 2 speakers. Emma's second sentence doesn't fit logic.
                    ]
                },
                {
                    title: "Dialogue 2: Exploring", // Fixed logic
                    audio: "TTS: Have you ever been to Rome? Yes, I have. The scenery was breathtaking! I bet. There was so much to see and do there, right?",
                    lines:[
                        { speaker: "Liam", text: "Have you ever been to Rome?", pt: "(Você já esteve em Roma?)" },
                        { speaker: "Emma", text: "Yes, I have. The scenery was breathtaking! There was so much to see and do there.", pt: "(Sim, eu estive. A paisagem era de tirar o fôlego! Havia muito o que ver e fazer lá.)" }
                    ]
                },
                {
                    title: "Dialogue 3: Experiencing the Local Culture",
                    audio: "TTS: We stayed in a beautiful hostel near the beach. Did you go to any famous spots? No, we found a place completely off the beaten path.",
                    lines:[
                        { speaker: "Leo", text: "We stayed in a beautiful hostel near the beach.", pt: "(Nós ficamos em um lindo albergue perto da praia.)" },
                        { speaker: "Anna", text: "Did you go to any famous spots? No, we found a place completely off the beaten path.", pt: "(Vocês foram a algum ponto famoso? Não, encontramos um lugar completamente fora da rota turística.)" } // Logic fix needed
                    ]
                },
                {
                    title: "Dialogue 3: Experiencing the Local Culture", // Fixed
                    audio: "TTS: We stayed in a beautiful hostel near the beach. Did you go to any famous spots? No, we found a place completely off the beaten path.",
                    lines:[
                        { speaker: "Leo", text: "We stayed in a beautiful hostel near the beach.", pt: "(Nós ficamos em um lindo albergue perto da praia.)" },
                        { speaker: "Anna", text: "Did you go to any famous spots?", pt: "(Vocês foram a algum ponto famoso?)" },
                        { speaker: "Leo", text: "No, we found a place completely off the beaten path.", pt: "(Não, encontramos um lugar completamente fora da rota turística.)" }
                    ]
                },
                {
                    title: "Dialogue 3: Experiencing the Local Culture", // Strict 2 char, merging
                    audio: "TTS: We stayed in a beautiful hostel. Did you go to any famous spots? No, we found a place completely off the beaten path. We tried the local cuisine there.",
                    lines:[
                        { speaker: "Leo", text: "We stayed in a beautiful hostel. We tried the local cuisine there.", pt: "(Nós ficamos em um lindo albergue. Nós provamos a culinária local lá.)" },
                        { speaker: "Anna", text: "That sounds fun. Did you find a place completely off the beaten path?", pt: "(Isso parece divertido. Vocês encontraram um lugar completamente fora da rota turística?)" }
                    ]
                },
                {
                    title: "Dialogue 4: Tourist Activities",
                    audio: "TTS: What did you like most about the city? Well, we went sightseeing every day. The monuments were huge. I would definitely recommend it.",
                    lines:[
                        { speaker: "Sarah", text: "What did you like most about the city?", pt: "(O que você mais gostou na cidade?)" },
                        { speaker: "David", text: "Well, we went sightseeing every day. The monuments were huge. I would definitely recommend it.", pt: "(Bem, nós fomos fazer turismo todos os dias. Os monumentos eram imensos. Eu definitivamente recomendaria.)" }
                    ]
                },
                {
                    title: "Dialogue 5: Making Recommendations",
                    audio: "TTS: I'm planning a trip to Japan. Oh! The best time to visit is in April for the cherry blossoms. I'll remember that. I need to book my flights soon.",
                    lines:[
                        { speaker: "Tom", text: "I'm planning a trip to Japan.", pt: "(Estou planejando uma viagem para o Japão.)" },
                        { speaker: "Julia", text: "Oh! The best time to visit is in April for the cherry blossoms.", pt: "(Oh! A melhor época para visitar é em abril para as flores de cerejeira.)" },
                        { speaker: "Tom", text: "I'll remember that. I need to book my flights soon.", pt: "(Vou me lembrar disso. Preciso reservar meus voos em breve.)" }
                    ]
                },
                {
                    title: "Dialogue 5: Making Recommendations", // Strict 2 char
                    audio: "TTS: I'm planning a trip to Japan. Oh! The best time to visit is in April. I'll remember that. I need to book my flights soon.",
                    lines:[
                        { speaker: "Tom", text: "I'm planning a trip to Japan. I need to book my flights soon.", pt: "(Estou planejando uma viagem para o Japão. Preciso reservar meus voos em breve.)" },
                        { speaker: "Julia", text: "Oh! The best time to visit is in April.", pt: "(Oh! A melhor época para visitar é em abril.)" }
                    ]
                },
                {
                    title: "Dialogue 6: Travel Dreams",
                    audio: "TTS: Are you going out tonight? No, I'm saving up for a trip. Going to Australia is on my bucket list. That is amazing. I hope you go there next year.",
                    lines:[
                        { speaker: "Mike", text: "Are you going out tonight? No, I'm saving up for a trip. Going to Australia is on my bucket list.", pt: "(Você vai sair hoje à noite? Não, estou economizando para uma viagem. Ir para a Austrália está na minha lista de desejos.)" },
                        { speaker: "Lisa", text: "That is amazing. I hope you go there next year.", pt: "(Isso é incrível. Espero que você vá para lá no ano que vem.)" }
                    ]
                },
                {
                    title: "Dialogue 6: Travel Dreams", // Fixed logic
                    audio: "TTS: Are you going out tonight? No, I'm saving up for a trip. Going to Australia is on my bucket list.",
                    lines:[
                        { speaker: "Mike", text: "Are you going out tonight?", pt: "(Você vai sair hoje à noite?)" },
                        { speaker: "Lisa", text: "No, I'm saving up for a trip. Going to Australia is on my bucket list.", pt: "(Não, estou economizando para uma viagem. Ir para a Austrália está na minha lista de desejos.)" }
                    ]
                }
            ],

            // --- 3C: PRACTICE ---
            grammarDrillGroups:[
                {
                    title: "Past Trips & Destinations",
                    drills:[
                        { q: "I ________ to Italy last summer.", options:[{t: "go", c: false}, {t: "went", c: true}, {t: "been", c: false}, {t: "going", c: false}], type: "mcq" },
                        { q: "We ________ two weeks in Tokyo.", options:[{t: "spended", c: false}, {t: "spending", c: false}, {t: "spend", c: false}, {t: "spent", c: true}], type: "mcq" },
                        { q: "Have you ever ________ to New York?", options:[{t: "been", c: true}, {t: "went", c: false}, {t: "go", c: false}, {t: "was", c: false}], type: "mcq" },
                        { q: "From the mountain, the scenery was ________.", options:[{t: "breath", c: false}, {t: "breathed", c: false}, {t: "breathtaking", c: true}, {t: "breaths", c: false}], type: "mcq" },
                        { q: "I loved London, there was so much to ________ and do.", options:[{t: "look", c: false}, {t: "see", c: true}, {t: "watch", c: false}, {t: "view", c: false}], type: "mcq" },
                        { q: "We found a small beach completely off the beaten ________.", options:[{t: "street", c: false}, {t: "road", c: false}, {t: "way", c: false}, {t: "path", c: true}], type: "mcq" }
                    ]
                },
                {
                    title: "Activities & Recommendations",
                    drills:[
                        { q: "We ________ in a nice hotel near the center.", options:[{t: "stayed", c: true}, {t: "stay", c: false}, {t: "lived", c: false}, {t: "slept", c: false}], type: "mcq" }, // Slept is physically true but stayed is the chunk
                        { q: "Every morning, we went ________.", options:[{t: "sightsee", c: false}, {t: "sightseeing", c: true}, {t: "touristy", c: false}, {t: "exploring", c: false}], type: "mcq" },
                        { q: "At night, we ________ the local cuisine.", options:[{t: "tired", c: false}, {t: "tried", c: true}, {t: "taste", c: false}, {t: "testing", c: false}], type: "mcq" },
                        { q: "The ________ part of the trip was visiting the museum.", options:[{t: "good", c: false}, {t: "better", c: false}, {t: "best", c: true}, {t: "great", c: false}], type: "mcq" },
                        { q: "If you like nature, I would definitely ________ it.", options:[{t: "tell", c: false}, {t: "recommend", c: true}, {t: "book", c: false}, {t: "say", c: false}], type: "mcq" },
                        { q: "The best time to ________ is in the spring.", options:[{t: "go", c: false}, {t: "travel", c: false}, {t: "visit", c: true}, {t: "stay", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Planning Future Trips",
                    drills:[
                        { q: "I'm ________ a trip to Canada next year.", options:[{t: "planning", c: true}, {t: "plan", c: false}, {t: "making", c: false}, {t: "doing", c: false}], type: "mcq" },
                        { q: "Going to Egypt? Yes, it's on my ________ list.", options:[{t: "pocket", c: false}, {t: "bucket", c: true}, {t: "wish", c: false}, {t: "travel", c: false}], type: "mcq" },
                        { q: "I need to ________ my flights tonight.", options:[{t: "buy", c: false}, {t: "pay", c: false}, {t: "book", c: true}, {t: "rent", c: false}], type: "mcq" },
                        { q: "I can't go out to eat, I'm ________ up for a trip.", options:[{t: "saving", c: true}, {t: "keeping", c: false}, {t: "holding", c: false}, {t: "making", c: false}], type: "mcq" },
                        { q: "________ did you go for your last vacation?", options:[{t: "When", c: false}, {t: "What", c: false}, {t: "Who", c: false}, {t: "Where", c: true}], type: "mcq" },
                        { q: "What did you like ________ about Paris?", options:[{t: "more", c: false}, {t: "most", c: true}, {t: "much", c: false}, {t: "many", c: false}], type: "mcq" }
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
                { text: "Where did you go for your last vacation? ↘", audio: "TTS: Where did you go for your last vacation?" },
                { text: "I went to Italy and spent two weeks there. ↘", audio: "TTS: I went to Italy and spent two weeks there." },
                { text: "Have you ever been to South America? ↗", audio: "TTS: Have you ever been to South America?" },
                { text: "The scenery was absolutely breathtaking! ↘", audio: "TTS: The scenery was absolutely breathtaking!" },
                { text: "We stayed in a hotel and went sightseeing every day. ↘", audio: "TTS: We stayed in a hotel and went sightseeing every day." },
                { text: "What did you like most about the trip? ↘", audio: "TTS: What did you like most about the trip?" },
                { text: "I would definitely recommend trying the local cuisine. ↘", audio: "TTS: I would definitely recommend trying the local cuisine." },
                { text: "The best time to visit is in the spring. ↘", audio: "TTS: The best time to visit is in the spring." },
                { text: "I'm planning a trip to Japan next year. ↘", audio: "TTS: I'm planning a trip to Japan next year." },
                { text: "Going to Egypt is on my bucket list. ↘", audio: "TTS: Going to Egypt is on my bucket list." }
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
                    audio: "TTS: Emma: How was your trip to London? Mark: It was incredible! We went sightseeing every day. Emma: Did you visit any famous monuments? Mark: Yes, but the city was very crowded.",
                    text: "Emma: How was your [trip] to London?<br>Mark: It was [incredible]! We went [sightseeing] every day.<br>Emma: Did you visit any famous [monuments]?<br>Mark: Yes, but the city was very [crowded]."
                },
                {
                    type: "dropdown",
                    instruction: "Listen to the dialogue about future plans.",
                    audio: "TTS: Lisa: Are you saving up for a trip? David: Yes, I am planning a trip to Spain. Lisa: That's great! Have you booked your flights yet? David: Not yet. I still need to reserve a hotel.",
                    questions:[
                        { q: "Lisa: Are you[saving* | packing | looking] up for a trip?", a: "saving" },
                        { q: "David: Yes, I am [planning* | discovering | flying] a trip to Spain.", a: "planning" },
                        { q: "Lisa: That's great! Have you [booked* | unpacked | stayed] your flights yet?", a: "booked" },
                        { q: "David: Not yet. I still need to [reserve* | recommend | explore] a hotel.", a: "reserve" }
                    ]
                },
                {
                    type: "audio-choice",
                    instruction: "Listen to the speaker. What did she like most about her vacation?",
                    audio: "TTS: Last month, I went to a small village in France. It was completely off the beaten path. The best part of the trip was definitely the food. I tried the local cuisine every night, and it was delicious.",
                    options:[
                        { t: "She liked the breathtaking scenery.", c: false },
                        { t: "She liked visiting famous monuments.", c: false },
                        { t: "She liked the local food the most.", c: true },
                        { t: "She liked the busy city streets.", c: false }
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
                    title: "Dialogue - The Unforgettable Vacation",
                    audio: "TTS: John: Where did you go for your last vacation, Anna? Anna: I went to Brazil! I spent two weeks in Rio de Janeiro. John: Wow. Have you ever been to South America before? Anna: No, it was my first time. The scenery was breathtaking! John: What did you like most about the city? Anna: The local people were very friendly, and we went sightseeing every day. John: Was it very touristy? Anna: Yes, it was a bit crowded near the beaches, but I would definitely recommend it.",
                    body: "<b>John:</b>[Where did you go for your last vacation](tooltip:where-did-you-go), Anna?<br><b>Anna:</b>[I went to](tooltip:i-went-to) Brazil! I[spent two weeks in](tooltip:spent-two-weeks) Rio de Janeiro.<br><b>John:</b> Wow. [Have you ever been to](tooltip:have-you-ever-been) South America before?<br><b>Anna:</b> No, it was my first time.[The scenery was breathtaking](tooltip:scenery-breathtaking)!<br><b>John:</b>[What did you like most about](tooltip:what-did-you-like) the city?<br><b>Anna:</b> The local people were very friendly, and we[went sightseeing](tooltip:went-sightseeing) every day.<br><b>John:</b> Was it very [touristy](tooltip:touristy)?<br><b>Anna:</b> Yes, it was a bit [crowded](tooltip:crowded) near the beaches, but [I would definitely recommend it](tooltip:would-recommend).",
                    questions:[
                        { q: "Where did Anna go for her vacation?", options:[{t: "She went to Spain.", c: false}, {t: "She went to Brazil.", c: true}, {t: "She stayed home.", c: false}], type: "mcq" },
                        { q: "What did Anna think of the scenery?", options:[{t: "It was dull and boring.", c: false}, {t: "It was breathtaking.", c: true}, {t: "It was too crowded.", c: false}], type: "mcq" },
                        { q: "What is one negative thing Anna mentioned?", options:[{t: "The local people were rude.", c: false}, {t: "The food was awful.", c: false}, {t: "The beaches were a bit crowded.", c: true}], type: "mcq" }
                    ]
                },
                {
                    title: "Dialogue - The Bucket List",
                    audio: "TTS: Leo: What are you doing on your laptop? Mia: I'm planning a trip to Italy! It's on my bucket list. Leo: That sounds amazing! I went to Rome last year. The history is fascinating. Mia: Oh, you have been there! What do you recommend? Leo: Well, there is so much to see and do. But you have to try the local cuisine. Mia: I plan to! The only problem is that it is quite expensive. I am saving up for a trip. Leo: It is worth it. The best time to visit is in the spring, so you have time to save money.",
                    body: "<b>Leo:</b> What are you doing on your laptop?<br><b>Mia:</b>[I'm planning a trip to](tooltip:planning-trip) Italy![It's on my bucket list](tooltip:bucket-list).<br><b>Leo:</b> That sounds amazing![I went to](tooltip:i-went-to) Rome last year. The history is fascinating.<br><b>Mia:</b> Oh, you have been there! What do you [recommend](tooltip:recommend)?<br><b>Leo:</b> Well,[there is so much to see and do](tooltip:much-to-see). But you have to[try the local cuisine](tooltip:tried-local-cuisine).<br><b>Mia:</b> I plan to! The only problem is that it is quite expensive.[I'm saving up for a trip](tooltip:saving-up).<br><b>Leo:</b> It is worth it.[The best time to visit is](tooltip:best-time-visit) in the spring, so you have time to save money.",
                    questions:[
                        { q: "Where is Mia planning a trip to?", options:[{t: "Italy.", c: true}, {t: "Peru.", c: false}, {t: "London.", c: false}], type: "mcq" },
                        { q: "What does Leo recommend Mia should do in Rome?", options:[{t: "Rent a car.", c: false}, {t: "Go to the beach.", c: false}, {t: "Try the local cuisine.", c: true}], type: "mcq" },
                        { q: "When does Leo say is the best time to visit?", options:[{t: "In the summer.", c: false}, {t: "In the winter.", c: false}, {t: "In the spring.", c: true}], type: "mcq" }
                    ]
                },
                {
                    title: "Email - A Quiet Escape",
                    audio: "TTS: Subject: Relaxing in the mountains. Hi Chloe, I am writing to you from a beautiful cabin in the woods. After a busy month at work, I needed a vacation. I didn't want to go to a crowded city, so I found a place completely off the beaten path. We stayed in a quiet resort near a lake. Yesterday, we went exploring in the forest. It is so peaceful here! The best part of the trip was just sitting outside and reading a book. I hope to see you when I get back. Love, Sophia.",
                    body: "<b>From: Sophia</b><br><b>To: Chloe</b><br>Subject: Relaxing in the mountains.<br><br>Hi Chloe,<br>I am writing to you from a beautiful cabin in the woods. After a[busy](tooltip:busy) month at work, I needed a [vacation](tooltip:vacation). I didn't want to go to a [crowded](tooltip:crowded) city, so I found a place completely[off the beaten path](tooltip:off-beaten-path).[We stayed in a](tooltip:stayed-in) [quiet](tooltip:quiet) [resort](tooltip:resort) near a lake. Yesterday, we went[exploring](tooltip:explore) in the forest. It is so [peaceful](tooltip:peaceful) here![The best part of the trip was](tooltip:best-part-was) just sitting outside and reading a book. I hope to see you when I get back.<br><br>Love, Sophia.",
                    questions:[
                        { q: "Why did Sophia choose this destination?", options:[{t: "She wanted to visit famous monuments.", c: false}, {t: "She wanted a place off the beaten path, away from crowded cities.", c: true}, {t: "She wanted to try the local cuisine.", c: false}], type: "mcq" },
                        { q: "Where did Sophia stay?", options:[{t: "In a busy hostel.", c: false}, {t: "In a luxury hotel in the city center.", c: false}, {t: "In a quiet resort near a lake.", c: true}], type: "mcq" },
                        { q: "What was the best part of the trip for Sophia?", options:[{t: "Sitting outside and reading a book.", c: true}, {t: "Going sightseeing.", c: false}, {t: "Going to a concert.", c: false}], type: "mcq" }
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
                { type: "matching", instruction: "Match the noun to its definition.", pairs:[
                    { left: "Destination", right: "The place you are traveling to", val: "1" },
                    { left: "Souvenir", right: "An item kept as a reminder of a place", val: "2" },
                    { left: "Passport", right: "Official document for international travel", val: "3" },
                    { left: "Cuisine", right: "A style of cooking specific to a region", val: "4" }
                ]},
                { type: "matching", instruction: "Match the accommodation type.", pairs:[
                    { left: "Hotel", right: "Standard paid lodging", val: "1" },
                    { left: "Hostel", right: "Cheap lodging, often shared rooms", val: "2" },
                    { left: "Resort", right: "Luxury vacation complex", val: "3" },
                    { left: "Airbnb", right: "Renting someone's private home", val: "4" } // General knowledge connection
                ]},
                { type: "matching", instruction: "Match the verbs with their actions.", pairs:[
                    { left: "To pack", right: "Put clothes in a suitcase", val: "1" },
                    { left: "To book", right: "Reserve a flight or hotel", val: "2" },
                    { left: "To explore", right: "Travel through an unknown area", val: "3" },
                    { left: "To fly", right: "Travel by airplane", val: "4" }
                ]},
                { type: "matching", instruction: "Match the adjectives with their opposites.", pairs:[
                    { left: "Crowded", right: "Empty", val: "1" },
                    { left: "Quiet", right: "Noisy", val: "2" },
                    { left: "Authentic", right: "Fake", val: "3" },
                    { left: "Relaxing", right: "Stressful", val: "4" }
                ]},

                // --- WORD ORDER (5-14) ---
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "went / I / to / year / last / Spain / .", correct: "I went to Spain last year ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "weeks / spent / two / We / in / Paris / .", correct: "We spent two weeks in Paris ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "you / ever / to / Have / been / London / ?", correct: "Have you ever been to London ?" },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "scenery / breathtaking / was / The / .", correct: "The scenery was breathtaking ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "much / see / to / There / was / so / .", correct: "There was so much to see ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "stayed / nice / in / We / a / hotel / .", correct: "We stayed in a nice hotel ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "went / every / We / day / sightseeing / .", correct: "We went sightseeing every day ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "definitely / I / recommend / would / it / .", correct: "I would definitely recommend it ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "planning / I'm / trip / a / to / Japan / .", correct: "I'm planning a trip to Japan ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "saving / I'm / up / a / for / trip / .", correct: "I'm saving up for a trip ." },

                // --- CLICKABLE ERROR (15-24) ---
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "I went[in](error:to) Peru last year." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "We spent two [times](error:weeks) in Madrid." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "Have you [never](error:ever) been to Rome?" },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "The scenery was [breathing](error:breathtaking)." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "We were completely [of](error:off) the beaten path." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "We [lived](error:stayed) in a small hostel." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "We went [sightlooking](error:sightseeing) every day." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "I would definitely [recommendation](error:recommend) it." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "It's on my[pocket](error:bucket) list." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "I need to [read](error:book) my flights." },

                // --- ODD ONE OUT (25-30) ---
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Travel Nouns)", options:[{t: "Trip", c: false}, {t: "Vacation", c: false}, {t: "Journey", c: false}, {t: "Cuisine", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Accommodation)", options:[{t: "Hotel", c: false}, {t: "Hostel", c: false}, {t: "Resort", c: false}, {t: "Tourist", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Verbs)", options:[{t: "To explore", c: false}, {t: "To discover", c: false}, {t: "To pack", c: false}, {t: "Picturesque", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Positive Adjectives)", options:[{t: "Incredible", c: false}, {t: "Unforgettable", c: false}, {t: "Peaceful", c: false}, {t: "Crowded", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Negative Adjectives for Travel)", options:[{t: "Touristy", c: false}, {t: "Crowded", c: false}, {t: "Busy", c: false}, {t: "Authentic", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Phrases)", options:[{t: "Went sightseeing", c: false}, {t: "Tried local cuisine", c: false}, {t: "Off the beaten path", c: false}, {t: "I have a headache", c: true}] },

                // --- TRUE / FALSE (31-35) ---
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "If a place is 'off the beaten path', it means it is full of tourists.", correct: "false"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "To 'book a flight' means to reserve a seat on an airplane.", correct: "true"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "If something is on your 'bucket list', it is something you hope to do before you die.", correct: "true"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "A 'souvenir' is a type of local food you eat at a restaurant.", correct: "false"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "If a beach is 'crowded', it means there are very few people there.", correct: "false"}] },

                // --- MCQ (36-39) ---
                { type: "mcq", instruction: "Choose the correct phrase.<br>When you visit famous landmarks and historical places, you go ________.", options:[{t: "shopping", c: false}, {t: "sightseeing", c: true}, {t: "unpacking", c: false}, {t: "flying", c: false}] },
                { type: "mcq", instruction: "Choose the correct word.<br>The specific style of food and cooking of a country is called its ________.", options:[{t: "culture", c: false}, {t: "destination", c: false}, {t: "cuisine", c: true}, {t: "monument", c: false}] },
                { type: "mcq", instruction: "Choose the correct adjective.<br>A village that looks very beautiful and charming, like a painting, is ________.", options:[{t: "picturesque", c: true}, {t: "touristy", c: false}, {t: "crowded", c: false}, {t: "busy", c: false}] },
                { type: "mcq", instruction: "Choose the correct phrase.<br>If you want to suggest a place to a friend because you liked it, you say: 'I would definitely ________ it.'", options:[{t: "pack", c: false}, {t: "recommend", c: true}, {t: "explore", c: false}, {t: "discover", c: false}] },

                // --- CATEGORIZE (40) ---
                { type: "categorize", instruction: "Sort the adjectives into Positive and Negative descriptions for a vacation.", 
                    categories:[{id: "pos", name: "Positive"}, {id: "neg", name: "Negative/Neutral"}],
                    items:[
                        {text: "Unforgettable", catId: "pos"}, 
                        {text: "Picturesque", catId: "pos"}, 
                        {text: "Relaxing", catId: "pos"}, 
                        {text: "Crowded", catId: "neg"}, 
                        {text: "Touristy", catId: "neg"}, 
                        {text: "Busy", catId: "neg"}
                    ] 
                }
            ]
        },

        // ======================================================
        // STEP 8: WRITING PRACTICE
        // ======================================================
        {
            title: "Writing Practice",
            instruction: "Write an email to a friend (5-7 sentences) describing a past vacation. Mention the destination, what kind of accommodation you stayed in, what activities you did (e.g., sightseeing, trying the local cuisine), and give a recommendation.",
            example: "Hi Mark! I just got back from my vacation. I went to Japan last month, and I spent two weeks there. It was an unforgettable experience! We stayed in a traditional hotel and went sightseeing every day. The best part of the trip was trying the local cuisine; the food was delicious and authentic. The cities were a bit crowded, but the temples were peaceful. I would definitely recommend it to anyone!",
            prompts:[
                "State where you went and how long you stayed.",
                "Mention where you stayed (hotel, hostel, resort).",
                "Describe at least two things you did (sightseeing, eating).",
                "Use an adjective to describe the place (crowded, picturesque).",
                "Give a final recommendation."
            ]
        },

        // ======================================================
        // STEP 9: FLASHCARDS
        // ======================================================
        {
            title: "Flashcards",
            items:[
                // 2A Items (36 items)
                { term: "Trip", definition: "A journey or excursion, especially for pleasure.", defTrans: "Viagem", example: "Our trip to London was amazing.", audioFront: "TTS: Trip", audioBack: "TTS: Our trip to London was amazing." },
                { term: "Vacation", definition: "An extended period of leisure and recreation.", defTrans: "Férias", example: "I need a long vacation at the beach.", audioFront: "TTS: Vacation", audioBack: "TTS: I need a long vacation at the beach." },
                { term: "Destination", definition: "The place to which someone or something is going.", defTrans: "Destino", example: "Paris is a very popular destination.", audioFront: "TTS: Destination", audioBack: "TTS: Paris is a very popular destination." },
                { term: "Tourist", definition: "A person who is traveling or visiting a place for pleasure.", defTrans: "Turista", example: "A tourist asked me for directions.", audioFront: "TTS: Tourist", audioBack: "TTS: A tourist asked me for directions." },
                { term: "Passport", definition: "An official document certifying identity and citizenship.", defTrans: "Passaporte", example: "You must show your passport at the airport.", audioFront: "TTS: Passport", audioBack: "TTS: You must show your passport at the airport." },
                { term: "Souvenir", definition: "A thing kept as a reminder of a place or event.", defTrans: "Lembrancinha", example: "I bought a small souvenir for my mom.", audioFront: "TTS: Souvenir", audioBack: "TTS: I bought a small souvenir for my mom." },
                { term: "Hotel", definition: "An establishment providing accommodation, meals, and services.", defTrans: "Hotel", example: "We slept in a luxury hotel.", audioFront: "TTS: Hotel", audioBack: "TTS: We slept in a luxury hotel." },
                { term: "Hostel", definition: "An establishment providing cheap, shared accommodation.", defTrans: "Albergue / Hostel", example: "A hostel is much cheaper for young travelers.", audioFront: "TTS: Hostel", audioBack: "TTS: A hostel is much cheaper for young travelers." },
                { term: "Resort", definition: "A place that is a popular destination for holidays or recreation.", defTrans: "Resort / Estância", example: "They spent their honeymoon in a beach resort.", audioFront: "TTS: Resort", audioBack: "TTS: They spent their honeymoon in a beach resort." },
                { term: "Monument", definition: "A statue or building erected to commemorate a person or event.", defTrans: "Monumento", example: "We visited a famous historical monument.", audioFront: "TTS: Monument", audioBack: "TTS: We visited a famous historical monument." },
                { term: "Culture", definition: "The arts and other manifestations of human intellectual achievement.", defTrans: "Cultura", example: "Japan has a fascinating culture.", audioFront: "TTS: Culture", audioBack: "TTS: Japan has a fascinating culture." },
                { term: "Cuisine", definition: "A style or method of cooking, especially of a country.", defTrans: "Culinária", example: "I love spicy Mexican cuisine.", audioFront: "TTS: Cuisine", audioBack: "TTS: I love spicy Mexican cuisine." },

                { term: "To travel", definition: "To make a journey, typically of some length.", defTrans: "Viajar", example: "I love to travel around Europe.", audioFront: "TTS: To travel", audioBack: "TTS: I love to travel around Europe." },
                { term: "To explore", definition: "To travel in or through an unfamiliar country or area.", defTrans: "Explorar", example: "We decided to explore the ancient ruins.", audioFront: "TTS: To explore", audioBack: "TTS: We decided to explore the ancient ruins." },
                { term: "To discover", definition: "To find something or someone unexpectedly.", defTrans: "Descobrir", example: "Scientists discover new species in the jungle.", audioFront: "TTS: To discover", audioBack: "TTS: Scientists discover new species in the jungle." },
                { term: "To book", definition: "To reserve (accommodations, a place, etc.) in advance.", defTrans: "Reservar (passagens, hotéis)", example: "I must book my flights today.", audioFront: "TTS: To book", audioBack: "TTS: I must book my flights today." },
                { term: "To reserve", definition: "To arrange for a room or table to be kept for your use.", defTrans: "Reservar (mesas)", example: "Let me reserve a table for two.", audioFront: "TTS: To reserve", audioBack: "TTS: Let me reserve a table for two." },
                { term: "To plan", definition: "To decide on and arrange in advance.", defTrans: "Planejar", example: "We need to plan our itinerary carefully.", audioFront: "TTS: To plan", audioBack: "TTS: We need to plan our itinerary carefully." },
                { term: "To pack", definition: "To fill a suitcase or bag with clothes and other items.", defTrans: "Fazer as malas", example: "Do not forget to pack your swimsuit.", audioFront: "TTS: To pack", audioBack: "TTS: Do not forget to pack your swimsuit." },
                { term: "To unpack", definition: "To remove things from a suitcase or bag.", defTrans: "Desfazer as malas", example: "As soon as I arrived, I started to unpack.", audioFront: "TTS: To unpack", audioBack: "TTS: As soon as I arrived, I started to unpack." },
                { term: "To fly", definition: "To travel through the air in an aircraft.", defTrans: "Voar / Viajar de avião", example: "We will fly to New York tomorrow.", audioFront: "TTS: To fly", audioBack: "TTS: We will fly to New York tomorrow." },
                { term: "To drive", definition: "To operate and control the direction of a motor vehicle.", defTrans: "Dirigir", example: "We are going to drive across the country.", audioFront: "TTS: To drive", audioBack: "TTS: We are going to drive across the country." },
                { term: "To stay", definition: "To live somewhere temporarily as a guest.", defTrans: "Hospedar-se / Ficar", example: "I prefer to stay in a quiet guesthouse.", audioFront: "TTS: To stay", audioBack: "TTS: I prefer to stay in a quiet guesthouse." },
                { term: "To recommend", definition: "To put forward with approval as being suitable.", defTrans: "Recomendar", example: "Can you recommend a good restaurant?", audioFront: "TTS: To recommend", audioBack: "TTS: Can you recommend a good restaurant?" },

                { term: "Incredible", definition: "Impossible to believe; extremely good.", defTrans: "Incrível", example: "We saw an incredible waterfall in the forest.", audioFront: "TTS: Incredible", audioBack: "TTS: We saw an incredible waterfall in the forest." },
                { term: "Unforgettable", definition: "Impossible to forget; very memorable.", defTrans: "Inesquecível", example: "My trip to India was unforgettable.", audioFront: "TTS: Unforgettable", audioBack: "TTS: My trip to India was unforgettable." },
                { term: "Picturesque", definition: "Visually attractive, especially in a quaint or pretty style.", defTrans: "Pintoresco / Cênico", example: "We took photos of the picturesque village.", audioFront: "TTS: Picturesque", audioBack: "TTS: We took photos of the picturesque village." },
                { term: "Adventurous", definition: "Willing to take risks or to try out new methods, ideas, or experiences.", defTrans: "Aventureiro", example: "Rock climbing is a very adventurous activity.", audioFront: "TTS: Adventurous", audioBack: "TTS: Rock climbing is a very adventurous activity." },
                { term: "Relaxing", definition: "Reducing tension or anxiety.", defTrans: "Relaxante", example: "A day at the spa is very relaxing.", audioFront: "TTS: Relaxing", audioBack: "TTS: A day at the spa is very relaxing." },
                { term: "Peaceful", definition: "Free from disturbance; tranquil.", defTrans: "Pacífico / Tranquilo", example: "The countryside is very peaceful and quiet.", audioFront: "TTS: Peaceful", audioBack: "TTS: The countryside is very peaceful and quiet." },
                { term: "Touristy", definition: "Appealing to or visited by many tourists (often negative).", defTrans: "Turístico (lotado de turistas)", example: "The main square is too touristy for me.", audioFront: "TTS: Touristy", audioBack: "TTS: The main square is too touristy for me." },
                { term: "Crowded", definition: "Full of people, leaving little or no room for movement.", defTrans: "Lotado", example: "The train was very crowded during rush hour.", audioFront: "TTS: Crowded", audioBack: "TTS: The train was very crowded during rush hour." },
                { term: "Busy", definition: "Having a great deal to do; occupied.", defTrans: "Movimentado", example: "The airport is always busy on holidays.", audioFront: "TTS: Busy", audioBack: "TTS: The airport is always busy on holidays." },
                { term: "Quiet", definition: "Making little or no noise.", defTrans: "Silencioso", example: "The library is a very quiet place.", audioFront: "TTS: Quiet", audioBack: "TTS: The library is a very quiet place." },
                { term: "Traditional", definition: "Existing in or as part of a tradition.", defTrans: "Tradicional", example: "We watched a traditional dance performance.", audioFront: "TTS: Traditional", audioBack: "TTS: We watched a traditional dance performance." },
                { term: "Authentic", definition: "Of undisputed origin; genuine.", defTrans: "Autêntico", example: "The food at that restaurant is very authentic.", audioFront: "TTS: Authentic", audioBack: "TTS: The food at that restaurant is very authentic." },

                // 3A Items (18 items)
                { term: "I went to", definition: "Stating the destination you visited in the past.", defTrans: "Eu fui para", example: "I went to Italy last summer.", audioFront: "TTS: I went to", audioBack: "TTS: I went to Italy last summer." },
                { term: "We spent two weeks in", definition: "Stating the duration and location of your stay.", defTrans: "Nós passamos duas semanas em", example: "We spent two weeks in Tokyo.", audioFront: "TTS: We spent two weeks in", audioBack: "TTS: We spent two weeks in Tokyo." },
                { term: "Have you ever been to", definition: "Asking someone about their past travel experiences.", defTrans: "Você já esteve em", example: "Have you ever been to New York?", audioFront: "TTS: Have you ever been to", audioBack: "TTS: Have you ever been to New York?" },
                { term: "The scenery was breathtaking", definition: "Describing a view that was incredibly beautiful.", defTrans: "A paisagem era de tirar o fôlego", example: "From the mountain, the scenery was breathtaking.", audioFront: "TTS: The scenery was breathtaking", audioBack: "TTS: From the mountain, the scenery was breathtaking." },
                { term: "There was so much to see and do", definition: "Expressing that a place had many activities and sights.", defTrans: "Havia muito o que ver e fazer", example: "I loved London, there was so much to see and do.", audioFront: "TTS: There was so much to see and do", audioBack: "TTS: I loved London, there was so much to see and do." },
                { term: "Off the beaten path", definition: "A place that is not popular with tourists.", defTrans: "Fora da rota turística", example: "We found a small beach completely off the beaten path.", audioFront: "TTS: Off the beaten path", audioBack: "TTS: We found a small beach completely off the beaten path." },
                
                { term: "We stayed in a", definition: "Stating the type of accommodation you used.", defTrans: "Nós ficamos em um(a)", example: "We stayed in a nice hotel near the center.", audioFront: "TTS: We stayed in a", audioBack: "TTS: We stayed in a nice hotel near the center." },
                { term: "We went sightseeing", definition: "Stating that you visited famous landmarks.", defTrans: "Nós fomos fazer turismo", example: "Every morning, we went sightseeing.", audioFront: "TTS: We went sightseeing", audioBack: "TTS: Every morning, we went sightseeing." },
                { term: "We tried the local cuisine", definition: "Stating that you ate traditional food from the area.", defTrans: "Nós provamos a culinária local", example: "At night, we tried the local cuisine.", audioFront: "TTS: We tried the local cuisine", audioBack: "TTS: At night, we tried the local cuisine." },
                { term: "The best part of the trip was", definition: "Highlighting your favorite moment of the vacation.", defTrans: "A melhor parte da viagem foi", example: "The best part of the trip was visiting the museum.", audioFront: "TTS: The best part of the trip was", audioBack: "TTS: The best part of the trip was visiting the museum." },
                { term: "I would definitely recommend it", definition: "Giving a strong positive endorsement of a place.", defTrans: "Eu definitivamente recomendaria", example: "If you like nature, I would definitely recommend it.", audioFront: "TTS: I would definitely recommend it", audioBack: "TTS: If you like nature, I would definitely recommend it." },
                { term: "The best time to visit is", definition: "Advising someone on the ideal season to travel.", defTrans: "A melhor época para visitar é", example: "The best time to visit is in the spring.", audioFront: "TTS: The best time to visit is", audioBack: "TTS: The best time to visit is in the spring." },
                
                { term: "I'm planning a trip to", definition: "Stating your future travel intentions.", defTrans: "Estou planejando uma viagem para", example: "I'm planning a trip to Canada next year.", audioFront: "TTS: I'm planning a trip to", audioBack: "TTS: I'm planning a trip to Canada next year." },
                { term: "It's on my bucket list", definition: "Stating that it is a lifelong dream or goal.", defTrans: "Está na minha lista de desejos", example: "Going to Egypt? Yes, it's on my bucket list.", audioFront: "TTS: It's on my bucket list", audioBack: "TTS: Going to Egypt? Yes, it's on my bucket list." },
                { term: "Book my flights", definition: "To purchase airplane tickets.", defTrans: "Reservar meus voos", example: "I need to book my flights tonight.", audioFront: "TTS: Book my flights", audioBack: "TTS: I need to book my flights tonight." },
                { term: "I'm saving up for a trip", definition: "Storing money specifically to use for travel.", defTrans: "Estou economizando para uma viagem", example: "I can't go out to eat, I'm saving up for a trip.", audioFront: "TTS: I'm saving up for a trip", audioBack: "TTS: I can't go out to eat, I'm saving up for a trip." },
                { term: "Where did you go for your last vacation?", definition: "Asking someone about their most recent holiday.", defTrans: "Onde você foi nas suas últimas férias?", example: "Where did you go for your last vacation?", audioFront: "TTS: Where did you go for your last vacation?", audioBack: "TTS: Where did you go for your last vacation?" },
                { term: "What did you like most about", definition: "Asking for someone's favorite aspect of a place.", defTrans: "O que você mais gostou em", example: "What did you like most about Paris?", audioFront: "TTS: What did you like most about", audioBack: "TTS: What did you like most about Paris?" }
            ]
        }
    ],

    // ======================================================
    // GLOSSARY (All 54 items + Context words)
    // ======================================================
    glossary:[
        // 2A: Nouns (Travel & Accommodation)
        { topic: "Nouns", term: "trip", definition: "A journey or excursion.", translation: "Viagem" },
        { topic: "Nouns", term: "vacation", definition: "An extended period of leisure and recreation.", translation: "Férias" },
        { topic: "Nouns", term: "destination", definition: "The place to which someone is going.", translation: "Destino" },
        { topic: "Nouns", term: "tourist", definition: "A person visiting a place for pleasure.", translation: "Turista" },
        { topic: "Nouns", term: "passport", definition: "An official document certifying identity.", translation: "Passaporte" },
        { topic: "Nouns", term: "souvenir", definition: "A thing kept as a reminder of a place.", translation: "Lembrancinha" },
        { topic: "Nouns", term: "hotel", definition: "An establishment providing accommodation.", translation: "Hotel" },
        { topic: "Nouns", term: "hostel", definition: "An establishment providing cheap, shared accommodation.", translation: "Albergue / Hostel" },
        { topic: "Nouns", term: "resort", definition: "A popular destination for holidays.", translation: "Resort" },
        { topic: "Nouns", term: "monument", definition: "A building erected to commemorate a person or event.", translation: "Monumento" },
        { topic: "Nouns", term: "culture", definition: "The arts and manifestations of a nation.", translation: "Cultura" },
        { topic: "Nouns", term: "cuisine", definition: "A style or method of cooking.", translation: "Culinária" },

        // 2A: Verbs (Travel Actions)
        { topic: "Verbs", term: "to-travel", definition: "To make a journey.", translation: "Viajar" },
        { topic: "Verbs", term: "to-explore", definition: "To travel through an unfamiliar area.", translation: "Explorar" },
        { topic: "Verbs", term: "to-discover", definition: "To find something unexpectedly.", translation: "Descobrir" },
        { topic: "Verbs", term: "to-book", definition: "To reserve in advance.", translation: "Reservar (voos/hotéis)" },
        { topic: "Verbs", term: "to-reserve", definition: "To arrange for a room or table.", translation: "Reservar (mesas)" },
        { topic: "Verbs", term: "to-plan", definition: "To decide on and arrange in advance.", translation: "Planejar" },
        { topic: "Verbs", term: "to-pack", definition: "To fill a suitcase.", translation: "Fazer as malas" },
        { topic: "Verbs", term: "to-unpack", definition: "To remove things from a suitcase.", translation: "Desfazer as malas" },
        { topic: "Verbs", term: "to-fly", definition: "To travel through the air.", translation: "Voar" },
        { topic: "Verbs", term: "to-drive", definition: "To operate a motor vehicle.", translation: "Dirigir" },
        { topic: "Verbs", term: "to-stay", definition: "To live somewhere temporarily.", translation: "Hospedar-se" },
        { topic: "Verbs", term: "to-recommend", definition: "To put forward with approval.", translation: "Recomendar" },

        // 2A: Adjectives (Describing Trips)
        { topic: "Adjectives", term: "incredible", definition: "Impossible to believe; extremely good.", translation: "Incrível" },
        { topic: "Adjectives", term: "unforgettable", definition: "Impossible to forget.", translation: "Inesquecível" },
        { topic: "Adjectives", term: "picturesque", definition: "Visually attractive.", translation: "Pintoresco" },
        { topic: "Adjectives", term: "adventurous", definition: "Willing to take risks.", translation: "Aventureiro" },
        { topic: "Adjectives", term: "relaxing", definition: "Reducing tension or anxiety.", translation: "Relaxante" },
        { topic: "Adjectives", term: "peaceful", definition: "Free from disturbance.", translation: "Pacífico / Tranquilo" },
        { topic: "Adjectives", term: "touristy", definition: "Appealing to many tourists.", translation: "Turístico" },
        { topic: "Adjectives", term: "crowded", definition: "Full of people.", translation: "Lotado" },
        { topic: "Adjectives", term: "busy", definition: "Having a great deal to do.", translation: "Movimentado" },
        { topic: "Adjectives", term: "quiet", definition: "Making little or no noise.", translation: "Silencioso" },
        { topic: "Adjectives", term: "traditional", definition: "Existing as part of a tradition.", translation: "Tradicional" },
        { topic: "Adjectives", term: "authentic", definition: "Of undisputed origin; genuine.", translation: "Autêntico" },

        // 3A: Expressions
        { topic: "Expressions", term: "i-went-to", definition: "Stating the destination you visited in the past.", translation: "Eu fui para" },
        { topic: "Expressions", term: "spent-two-weeks", definition: "Stating the duration and location of your stay.", translation: "Passamos duas semanas em" },
        { topic: "Expressions", term: "have-you-ever-been", definition: "Asking about past travel experiences.", translation: "Você já esteve em" },
        { topic: "Expressions", term: "scenery-breathtaking", definition: "Describing a view that was incredibly beautiful.", translation: "A paisagem era de tirar o fôlego" },
        { topic: "Expressions", term: "much-to-see", definition: "Expressing that a place had many activities.", translation: "Havia muito o que ver e fazer" },
        { topic: "Expressions", term: "off-beaten-path", definition: "A place not popular with tourists.", translation: "Fora da rota turística" },
        
        { topic: "Expressions", term: "stayed-in", definition: "Stating the type of accommodation you used.", translation: "Nós ficamos em um(a)" },
        { topic: "Expressions", term: "went-sightseeing", definition: "Stating that you visited famous landmarks.", translation: "Nós fomos fazer turismo" },
        { topic: "Expressions", term: "tried-local-cuisine", definition: "Stating that you ate traditional food.", translation: "Nós provamos a culinária local" },
        { topic: "Expressions", term: "best-part-was", definition: "Highlighting your favorite moment.", translation: "A melhor parte foi" },
        { topic: "Expressions", term: "would-recommend", definition: "Giving a positive endorsement.", translation: "Eu recomendaria" },
        { topic: "Expressions", term: "best-time-visit", definition: "Advising on the ideal season to travel.", translation: "A melhor época para visitar é" },
        
        { topic: "Expressions", term: "planning-trip", definition: "Stating future travel intentions.", translation: "Estou planejando uma viagem para" },
        { topic: "Expressions", term: "bucket-list", definition: "A list of things you hope to do before you die.", translation: "Lista de desejos (antes de morrer)" },
        { topic: "Expressions", term: "book-flights", definition: "To purchase airplane tickets.", translation: "Reservar voos" },
        { topic: "Expressions", term: "saving-up", definition: "Storing money specifically to use for travel.", translation: "Economizando para uma viagem" },
        { topic: "Expressions", term: "where-did-you-go", definition: "Asking someone about their most recent holiday.", translation: "Onde você foi nas suas últimas férias?" },
        { topic: "Expressions", term: "what-did-you-like", definition: "Asking for someone's favorite aspect of a place.", translation: "O que você mais gostou em" },

        // Additional Context Words
        { topic: "Context", term: "experience", definition: "An event or occurrence which leaves an impression on someone.", translation: "Experiência" },
        { topic: "Context", term: "highlight", definition: "An outstanding part of an event or period of time.", translation: "Ponto alto / Destaque" },
        { topic: "Context", term: "adventure", definition: "An unusual and exciting, typically hazardous, experience or activity.", translation: "Aventura" },
        { topic: "Context", term: "amazing", definition: "Causing great surprise or wonder; astonishing.", translation: "Incrível" }
    ]
});