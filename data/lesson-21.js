/**
 * English Block Assembling - LESSON DATA: Topic 21
 * Topic: Transportation and Directions
 * Level: Upper A2 ~ Lower B1
 */

window.initLesson({
    // --- METADATA ---
    lessonId: "lesson-21",
    block: "3",
    topicTitle: "Transportation and Directions",

    steps:[
        // ======================================================
        // STEP 0: INTRO & CAN-DO
        // ======================================================
        {
            title: "Intro & Can-Do",
            objectives: "• Confidently ask for [directions](tooltip:directions) to landmarks and public places.<br>• Give specific instructions using [street features](tooltip:street) and prepositions of place.<br>• Navigate public transport by asking which [bus](tooltip:bus) or train to take.<br>• Verify and [confirm](tooltip:confirm) instructions so you never get lost.",
            welcome: "Welcome to Lesson 21! Navigating a new city can be a thrilling adventure, but it is easy to get lost. In this lesson, you will learn the essential vocabulary for city locations, street features, and giving directions. You will practice how to ask locals for help, understand their instructions, and confidently use public transportation. Let's explore the city!",
            audio: {
                objectives: "TTS: In this lesson, you will learn to: Confidently ask for directions to landmarks and public places. Give specific instructions using street features and prepositions of place. Navigate public transport by asking which bus or train to take. Verify and confirm instructions so you never get lost.",
                welcome: "TTS: Welcome to Lesson 21! Navigating a new city can be a thrilling adventure, but it is easy to get lost. In this lesson, you will learn the essential vocabulary for city locations, street features, and giving directions. You will practice how to ask locals for help, understand their instructions, and confidently use public transportation. Let's explore the city!"
            }
        },

        // ======================================================
        // STEP 1: CONTEXT DIALOGUE
        // ======================================================
        {
            title: "Context Dialogue",
            context: "A tourist stops a local resident on the street to ask for directions to the City Art Museum.",
            contextAudio: "TTS: Tourist: Excuse me, I'm a little lost. Can you help me? I'm looking for the City Art Museum. Local: Oh, it's not far. You're walking in the right direction. Tourist: Great! What's the best way to get to it? Local: Go straight on for about two blocks. Keep going until you see a big church on your left. Tourist: Let me see if I've got this right. I go straight past the church? Local: Exactly. Go past the church, and then take the first turning on your right. Tourist: Okay, first right after the church. Local: Yes. The museum is on the corner of Maple Avenue. You can't miss it. Tourist: Thank you so much for your help! Local: You're welcome! Enjoy the gallery.",
            dialogue:[
                { speaker: "Tourist", text: "[Excuse me, I'm a little lost](tooltip:im-a-little-lost). [Can you help me? I'm looking for](tooltip:im-looking-for) the City Art [Museum](tooltip:museum)." },
                { speaker: "Local", text: "Oh, it's not far. You're walking in the right direction." },
                { speaker: "Tourist", text: "Great! [What's the best way to get to](tooltip:best-way-to-get-to) it?" },
                { speaker: "Local", text: "[Go straight on](tooltip:go-straight-on) for about two [blocks](tooltip:block). [Keep going until you see](tooltip:keep-going-until) a big [church](tooltip:church) [on the left](tooltip:on-the-left)." },
                { speaker: "Tourist", text: "[Let me see if I've got this right](tooltip:let-me-see-right). I go straight [past](tooltip:go-past) the church?" },
                { speaker: "Local", text: "Exactly. [Go past](tooltip:go-past) the church, and then[take the first turning on your right](tooltip:take-first-turning)." },
                { speaker: "Tourist", text: "Okay, first right after the church." },
                { speaker: "Local", text: "Yes. The museum is[on the corner of](tooltip:on-the-corner) Maple [Avenue](tooltip:avenue). [You can't miss it](tooltip:cant-miss-it)." },
                { speaker: "Tourist", text: "Thank you so much for your help!" },
                { speaker: "Local", text: "You're welcome! Enjoy the gallery." }
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
                    title: "Locations in a City",
                    audio: "TTS: Restaurant. Park. Museum. Library. Pharmacy. Supermarket. Hotel. Hospital. Church. University. Bank. Theater.",
                    items:[
                        { term: "Restaurant", trans: "Restaurante" },
                        { term: "Park", trans: "Parque" },
                        { term: "Museum", trans: "Museu" },
                        { term: "Library", trans: "Biblioteca" },
                        { term: "Pharmacy", trans: "Farmácia" },
                        { term: "Supermarket", trans: "Supermercado" },
                        { term: "Hotel", trans: "Hotel" },
                        { term: "Hospital", trans: "Hospital" },
                        { term: "Church", trans: "Igreja" },
                        { term: "University", trans: "Universidade" },
                        { term: "Bank", trans: "Banco" },
                        { term: "Theater", trans: "Teatro" }
                    ]
                },
                {
                    title: "Street Features",
                    audio: "TTS: Street. Avenue. Corner. Intersection. Traffic lights. Crosswalk. Bridge. Tunnel. Roundabout. Sign. Landmark. Block.",
                    items:[
                        { term: "Street", trans: "Rua" },
                        { term: "Avenue", trans: "Avenida" },
                        { term: "Corner", trans: "Esquina" },
                        { term: "Intersection", trans: "Cruzamento" },
                        { term: "Traffic lights", trans: "Semáforo / Farol" },
                        { term: "Crosswalk", trans: "Faixa de pedestres" },
                        { term: "Bridge", trans: "Ponte" },
                        { term: "Tunnel", trans: "Túnel" },
                        { term: "Roundabout", trans: "Rotatória" },
                        { term: "Sign", trans: "Placa (de sinalização)" },
                        { term: "Landmark", trans: "Ponto de referência / Marco" },
                        { term: "Block", trans: "Quarteirão / Quadra" }
                    ]
                },
                {
                    title: "Verbs & Prepositions",
                    audio: "TTS: To walk. To follow. To turn. To cross. To go past. To change. Next to. Opposite. Between. Straight ahead. On the left. On the corner.",
                    items:[
                        { term: "To walk", trans: "Caminhar / Andar" },
                        { term: "To follow", trans: "Seguir" },
                        { term: "To turn", trans: "Virar" },
                        { term: "To cross", trans: "Atravessar" },
                        { term: "To go past", trans: "Passar por" },
                        { term: "To change", trans: "Mudar / Trocar (de ônibus, trem)" },
                        { term: "Next to", trans: "Ao lado de" },
                        { term: "Opposite", trans: "Em frente a (do lado oposto)" },
                        { term: "Between", trans: "Entre (duas coisas)" },
                        { term: "Straight ahead", trans: "Em frente / Direto" },
                        { term: "On the left", trans: "À esquerda" },
                        { term: "On the corner", trans: "Na esquina" }
                    ]
                }
            ],

            // --- 2B: EXAMPLES ---
            exampleGroups:[
                {
                    title: "Locations in a City",
                    audio: "TTS: We ate pasta at an Italian restaurant. The kids are playing in the park. The art museum is closed on Mondays. Students borrow books from the library. I bought medicine at the pharmacy. We buy our groceries at the supermarket. They booked a room in a nice hotel. The ambulance rushed to the hospital. The old church has a beautiful bell tower. She studies medicine at the university. I need to withdraw money from the bank. We saw a great play at the theater.",
                    items:[
                        { term: "Restaurant", sent: "We ate pasta at an Italian restaurant.", trans: "Comemos macarrão em um restaurante italiano." },
                        { term: "Park", sent: "The kids are playing in the park.", trans: "As crianças estão brincando no parque." },
                        { term: "Museum", sent: "The art museum is closed on Mondays.", trans: "O museu de arte está fechado às segundas-feiras." },
                        { term: "Library", sent: "Students borrow books from the library.", trans: "Os alunos pegam livros emprestados da biblioteca." },
                        { term: "Pharmacy", sent: "I bought medicine at the pharmacy.", trans: "Comprei remédio na farmácia." },
                        { term: "Supermarket", sent: "We buy our groceries at the supermarket.", trans: "Nós compramos nossos mantimentos no supermercado." },
                        { term: "Hotel", sent: "They booked a room in a nice hotel.", trans: "Eles reservaram um quarto em um bom hotel." },
                        { term: "Hospital", sent: "The ambulance rushed to the hospital.", trans: "A ambulância correu para o hospital." },
                        { term: "Church", sent: "The old church has a beautiful bell tower.", trans: "A igreja antiga tem uma bela torre sineira." },
                        { term: "University", sent: "She studies medicine at the university.", trans: "Ela estuda medicina na universidade." },
                        { term: "Bank", sent: "I need to withdraw money from the bank.", trans: "Preciso sacar dinheiro no banco." },
                        { term: "Theater", sent: "We saw a great play at the theater.", trans: "Vimos uma ótima peça no teatro." }
                    ]
                },
                {
                    title: "Street Features",
                    audio: "TTS: My house is on a very quiet street. Fifth Avenue is famous for its shops. The café is right on the corner. Turn right at the next intersection. Stop when the traffic lights are red. Always use the crosswalk to cross the road. The bridge goes over the river. The train goes through a dark tunnel. Take the second exit at the roundabout. Follow the blue sign to the airport. The Eiffel Tower is a famous landmark. The post office is one block away.",
                    items:[
                        { term: "Street", sent: "My house is on a very quiet street.", trans: "Minha casa fica em uma rua muito quieta." },
                        { term: "Avenue", sent: "Fifth Avenue is famous for its shops.", trans: "A Quinta Avenida é famosa por suas lojas." },
                        { term: "Corner", sent: "The café is right on the corner.", trans: "O café fica bem na esquina." },
                        { term: "Intersection", sent: "Turn right at the next intersection.", trans: "Vire à direita no próximo cruzamento." },
                        { term: "Traffic lights", sent: "Stop when the traffic lights are red.", trans: "Pare quando o semáforo estiver vermelho." },
                        { term: "Crosswalk", sent: "Always use the crosswalk to cross the road.", trans: "Sempre use a faixa de pedestres para atravessar a rua." },
                        { term: "Bridge", sent: "The bridge goes over the river.", trans: "A ponte passa sobre o rio." },
                        { term: "Tunnel", sent: "The train goes through a dark tunnel.", trans: "O trem passa por um túnel escuro." },
                        { term: "Roundabout", sent: "Take the second exit at the roundabout.", trans: "Pegue a segunda saída na rotatória." },
                        { term: "Sign", sent: "Follow the blue sign to the airport.", trans: "Siga a placa azul para o aeroporto." },
                        { term: "Landmark", sent: "The Eiffel Tower is a famous landmark.", trans: "A Torre Eiffel é um famoso ponto de referência." },
                        { term: "Block", sent: "The post office is one block away.", trans: "O correio fica a um quarteirão de distância." }
                    ]
                },
                {
                    title: "Verbs & Prepositions",
                    audio: "TTS: We decided to walk instead of taking a taxi. Follow this road until you reach the station. Turn left at the traffic lights. Cross the street at the pedestrian crossing. Go past the bank, and you will see it. You have to change trains at the next stop. The pharmacy is next to the supermarket. The park is opposite the school. The library is between the bank and the hotel. Just keep going straight ahead. The entrance is on the left side of the street. Let's meet on the corner of Main Street.",
                    items:[
                        { term: "To walk", sent: "We decided to walk instead of taking a taxi.", trans: "Decidimos caminhar em vez de pegar um táxi." },
                        { term: "To follow", sent: "Follow this road until you reach the station.", trans: "Siga esta rua até chegar à estação." },
                        { term: "To turn", sent: "Turn left at the traffic lights.", trans: "Vire à esquerda no semáforo." },
                        { term: "To cross", sent: "Cross the street at the pedestrian crossing.", trans: "Atravesse a rua na faixa de pedestres." },
                        { term: "To go past", sent: "Go past the bank, and you will see it.", trans: "Passe pelo banco, e você o verá." },
                        { term: "To change", sent: "You have to change trains at the next stop.", trans: "Você tem que trocar de trem na próxima parada." },
                        { term: "Next to", sent: "The pharmacy is next to the supermarket.", trans: "A farmácia é ao lado do supermercado." },
                        { term: "Opposite", sent: "The park is opposite the school.", trans: "O parque fica em frente à (do lado oposto da) escola." },
                        { term: "Between", sent: "The library is between the bank and the hotel.", trans: "A biblioteca fica entre o banco e o hotel." },
                        { term: "Straight ahead", sent: "Just keep going straight ahead.", trans: "Apenas continue indo em frente." },
                        { term: "On the left", sent: "The entrance is on the left side of the street.", trans: "A entrada fica do lado esquerdo da rua." },
                        { term: "On the corner", sent: "Let's meet on the corner of Main Street.", trans: "Vamos nos encontrar na esquina da Rua Principal." }
                    ]
                }
            ],

            // --- 2C: PRACTICE ---
            drillGroups:[
                {
                    title: "Locations in a City",
                    drills:[
                        { q: "A place where you can sit and eat a prepared meal is a ________.", options:[{t: "Library", c: false}, {t: "Restaurant", c: true}, {t: "Bank", c: false}, {t: "Church", c: false}], type: "mcq" },
                        { q: "A large public green area in a town is a ________.", options:[{t: "Park", c: true}, {t: "Supermarket", c: false}, {t: "Hospital", c: false}, {t: "Hotel", c: false}], type: "mcq" },
                        { q: "A building where historical, scientific, or artistic items are exhibited is a ________.", options:[{t: "Museum", c: true}, {t: "Pharmacy", c: false}, {t: "Theater", c: false}, {t: "Bank", c: false}], type: "mcq" },
                        { q: "A building or room containing collections of books for people to read or borrow is a ________.", options:[{t: "Library", c: true}, {t: "Restaurant", c: false}, {t: "Supermarket", c: false}, {t: "Church", c: false}], type: "mcq" },
                        { q: "A shop where medicinal drugs are prepared or sold is a ________.", options:[{t: "Pharmacy", c: true}, {t: "Hotel", c: false}, {t: "Park", c: false}, {t: "Theater", c: false}], type: "mcq" },
                        { q: "A large self-service store selling foods and household goods is a ________.", options:[{t: "Supermarket", c: true}, {t: "Museum", c: false}, {t: "University", c: false}, {t: "Bank", c: false}], type: "mcq" },
                        { q: "An establishment providing accommodation, meals, and other services for travelers is a ________.", options:[{t: "Hospital", c: false}, {t: "Hotel", c: true}, {t: "Church", c: false}, {t: "Library", c: false}], type: "mcq" },
                        { q: "An institution providing medical and surgical treatment for sick or injured people is a ________.", options:[{t: "Hospital", c: true}, {t: "University", c: false}, {t: "Pharmacy", c: false}, {t: "Museum", c: false}], type: "mcq" },
                        { q: "A building used for public Christian worship is a ________.", options:[{t: "Church", c: true}, {t: "Bank", c: false}, {t: "Theater", c: false}, {t: "Hotel", c: false}], type: "mcq" },
                        { q: "A high-level educational institution in which students study for degrees is a ________.", options:[{t: "University", c: true}, {t: "Park", c: false}, {t: "Supermarket", c: false}, {t: "Restaurant", c: false}], type: "mcq" },
                        { q: "A financial establishment that accepts deposits and makes loans is a ________.", options:[{t: "Bank", c: true}, {t: "Hospital", c: false}, {t: "Library", c: false}, {t: "Museum", c: false}], type: "mcq" },
                        { q: "A building or outdoor area in which plays and other dramatic performances are given is a ________.", options:[{t: "Theater", c: true}, {t: "Church", c: false}, {t: "Pharmacy", c: false}, {t: "Supermarket", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Street Features",
                    drills:[
                        { q: "A public road in a city or town, typically with houses on one or both sides, is a ________.", options:[{t: "Street", c: true}, {t: "Bridge", c: false}, {t: "Sign", c: false}, {t: "Block", c: false}], type: "mcq" },
                        { q: "A broad road in a town or city, often lined with trees, is an ________.", options:[{t: "Tunnel", c: false}, {t: "Avenue", c: true}, {t: "Crosswalk", c: false}, {t: "Roundabout", c: false}], type: "mcq" },
                        { q: "The place where two streets meet forming an angle is a ________.", options:[{t: "Corner", c: true}, {t: "Bridge", c: false}, {t: "Landmark", c: false}, {t: "Sign", c: false}], type: "mcq" },
                        { q: "A point at which two or more things intersect, like roads, is an ________.", options:[{t: "Intersection", c: true}, {t: "Block", c: false}, {t: "Tunnel", c: false}, {t: "Traffic lights", c: false}], type: "mcq" },
                        { q: "A set of automatically operated colored lights for controlling traffic are ________.", options:[{t: "Traffic lights", c: true}, {t: "Crosswalk", c: false}, {t: "Avenue", c: false}, {t: "Corner", c: false}], type: "mcq" },
                        { q: "A marked part of a road where pedestrians have right of way to cross is a ________.", options:[{t: "Crosswalk", c: true}, {t: "Roundabout", c: false}, {t: "Landmark", c: false}, {t: "Bridge", c: false}], type: "mcq" },
                        { q: "A structure carrying a road, path, or railway across a river or road is a ________.", options:[{t: "Bridge", c: true}, {t: "Tunnel", c: false}, {t: "Intersection", c: false}, {t: "Block", c: false}], type: "mcq" },
                        { q: "An artificial underground passage built through a hill or under a building is a ________.", options:[{t: "Sign", c: false}, {t: "Tunnel", c: true}, {t: "Traffic lights", c: false}, {t: "Street", c: false}], type: "mcq" },
                        { q: "A circular intersection where drivers travel counterclockwise around a center island is a ________.", options:[{t: "Roundabout", c: true}, {t: "Crosswalk", c: false}, {t: "Corner", c: false}, {t: "Landmark", c: false}], type: "mcq" },
                        { q: "A notice on public display that gives information or instructions is a ________.", options:[{t: "Sign", c: true}, {t: "Bridge", c: false}, {t: "Block", c: false}, {t: "Avenue", c: false}], type: "mcq" },
                        { q: "An object or feature of a landscape or town that is easily seen and recognized is a ________.", options:[{t: "Landmark", c: true}, {t: "Tunnel", c: false}, {t: "Intersection", c: false}, {t: "Traffic lights", c: false}], type: "mcq" },
                        { q: "The area bounded by four streets in a city is a ________.", options:[{t: "Block", c: true}, {t: "Crosswalk", c: false}, {t: "Roundabout", c: false}, {t: "Corner", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Verbs & Prepositions",
                    drills:[
                        { q: "To move at a regular pace by lifting and setting down each foot is ________.", options:[{t: "To follow", c: false}, {t: "To walk", c: true}, {t: "To cross", c: false}, {t: "To change", c: false}], type: "mcq" },
                        { q: "To move or travel behind someone or along a path is ________.", options:[{t: "To follow", c: true}, {t: "To go past", c: false}, {t: "To turn", c: false}, {t: "To walk", c: false}], type: "mcq" },
                        { q: "To change direction when moving is ________.", options:[{t: "To turn", c: true}, {t: "To cross", c: false}, {t: "To change", c: false}, {t: "To follow", c: false}], type: "mcq" },
                        { q: "To go from one side of a street or river to the other is ________.", options:[{t: "To cross", c: true}, {t: "To go past", c: false}, {t: "To turn", c: false}, {t: "To walk", c: false}], type: "mcq" },
                        { q: "To walk ahead of a building without stopping is ________.", options:[{t: "To follow", c: false}, {t: "To go past", c: true}, {t: "To cross", c: false}, {t: "To change", c: false}], type: "mcq" },
                        { q: "To move from one bus or train to another is ________.", options:[{t: "To change", c: true}, {t: "To turn", c: false}, {t: "To walk", c: false}, {t: "To cross", c: false}], type: "mcq" },
                        { q: "When a building is directly beside another, it is ________ it.", options:[{t: "Next to", c: true}, {t: "Opposite", c: false}, {t: "Between", c: false}, {t: "On the left", c: false}], type: "mcq" },
                        { q: "When a building is across the street facing you, it is ________.", options:[{t: "Between", c: false}, {t: "Opposite", c: true}, {t: "On the corner", c: false}, {t: "Next to", c: false}], type: "mcq" },
                        { q: "When a building is in the middle of two other buildings, it is ________ them.", options:[{t: "Between", c: true}, {t: "Straight ahead", c: false}, {t: "On the left", c: false}, {t: "Opposite", c: false}], type: "mcq" },
                        { q: "To continue in the same direction without turning is to go ________.", options:[{t: "Straight ahead", c: true}, {t: "Next to", c: false}, {t: "On the corner", c: false}, {t: "Between", c: false}], type: "mcq" },
                        { q: "The opposite of 'on the right' is ________.", options:[{t: "On the left", c: true}, {t: "Straight ahead", c: false}, {t: "Opposite", c: false}, {t: "Between", c: false}], type: "mcq" },
                        { q: "When a building is where two streets intersect, it is ________.", options:[{t: "On the corner", c: true}, {t: "Next to", c: false}, {t: "Straight ahead", c: false}, {t: "On the left", c: false}], type: "mcq" }
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
                    title: "Asking for Directions",
                    audio: "TTS: Excuse me, I'm a little lost. Can you help me? I'm looking for... Am I going the right way for... What's the best way to get to... Which bus should I take? Is it far from here?",
                    explanation: "Polite ways to stop someone on the street and ask how to reach your destination.<br><span style='color:var(--primary-blue); font-style:italic;'>(Maneiras educadas de parar alguém na rua e perguntar como chegar ao seu destino.)</span>",
                    samples:[
                        { en: "<b>Excuse me, I'm a little lost.</b>", pt: "<span style='color:var(--primary-blue)'>(Com licença, estou um pouco perdido(a).)</span>" },
                        { en: "<b>Can you help me? I'm looking for</b> the museum.", pt: "<span style='color:var(--primary-blue)'>(Você pode me ajudar? Estou procurando pelo museu.)</span>" },
                        { en: "<b>Am I going the right way for</b> the train station?", pt: "<span style='color:var(--primary-blue)'>(Estou indo no caminho certo para a estação de trem?)</span>" },
                        { en: "<b>What's the best way to get to</b> the main square?", pt: "<span style='color:var(--primary-blue)'>(Qual é a melhor maneira de chegar à praça principal?)</span>" },
                        { en: "<b>Which bus should I take</b> to go downtown?", pt: "<span style='color:var(--primary-blue)'>(Qual ônibus devo pegar para ir ao centro?)</span>" },
                        { en: "<b>Is it far from here?</b>", pt: "<span style='color:var(--primary-blue)'>(Fica longe daqui?)</span>" }
                    ]
                },
                {
                    title: "Giving Directions",
                    audio: "TTS: Go straight on. Keep going until you see. Take the first turning on your right. Go past. Get off at the next stop. You have to change trains.",
                    explanation: "Clear instructions on how to move through the streets or use public transport.<br><span style='color:var(--primary-blue); font-style:italic;'>(Instruções claras sobre como se mover pelas ruas ou usar o transporte público.)</span>",
                    samples:[
                        { en: "<b>Go straight on</b> for about two blocks.", pt: "<span style='color:var(--primary-blue)'>(Siga em frente por cerca de dois quarteirões.)</span>" },
                        { en: "<b>Keep going until you see</b> a big church.", pt: "<span style='color:var(--primary-blue)'>(Continue indo até ver uma grande igreja.)</span>" },
                        { en: "<b>Take the first turning on your right.</b>", pt: "<span style='color:var(--primary-blue)'>(Pegue a primeira curva à sua direita.)</span>" },
                        { en: "<b>Go past</b> the supermarket.", pt: "<span style='color:var(--primary-blue)'>(Passe pelo supermercado.)</span>" },
                        { en: "<b>Get off at the next stop.</b>", pt: "<span style='color:var(--primary-blue)'>(Desça na próxima parada.)</span>" },
                        { en: "<b>You have to change trains</b> at Central Station.", pt: "<span style='color:var(--primary-blue)'>(Você tem que trocar de trem na Estação Central.)</span>" }
                    ]
                },
                {
                    title: "Confirming",
                    audio: "TTS: Let me see if I've got this right. So, I go straight and then turn left? You can't miss it. Just around the corner.",
                    explanation: "Phrases used to repeat instructions to make sure you understood, and phrases reassuring someone that a place is easy to find.<br><span style='color:var(--primary-blue); font-style:italic;'>(Frases usadas para repetir instruções para garantir o entendimento, e frases tranquilizando que um lugar é fácil de achar.)</span>",
                    samples:[
                        { en: "<b>Let me see if I've got this right.</b>", pt: "<span style='color:var(--primary-blue)'>(Deixe-me ver se entendi direito.)</span>" },
                        { en: "<b>So, I go straight and then turn left?</b>", pt: "<span style='color:var(--primary-blue)'>(Então, eu sigo em frente e depois viro à esquerda?)</span>" },
                        { en: "It's a huge building, <b>you can't miss it.</b>", pt: "<span style='color:var(--primary-blue)'>(É um prédio enorme, não tem como errar / você não tem como perder.)</span>" },
                        { en: "The entrance is <b>just around the corner.</b>", pt: "<span style='color:var(--primary-blue)'>(A entrada fica logo virando a esquina.)</span>" }
                    ]
                }
            ],

            // --- 3B: DIALOGUES ---
            dialogueGroups:[
                {
                    title: "Dialogue 1: Walking Directions",
                    audio: "TTS: Excuse me, I'm a little lost. What's the best way to get to the museum? Go straight on for about two blocks. Then take the first turning on your right. So, I go straight and then turn right? Yes. You can't miss it.",
                    lines:[
                        { speaker: "Tourist", text: "Excuse me, I'm a little lost. What's the best way to get to the museum?", pt: "(Com licença, estou um pouco perdido. Qual é a melhor maneira de chegar ao museu?)" },
                        { speaker: "Local", text: "Go straight on for about two blocks. Then take the first turning on your right. So, I go straight and then turn right? Yes. You can't miss it.", pt: "(Siga em frente por cerca de dois quarteirões. Então pegue a primeira curva à sua direita. Então, sigo em frente e viro à direita? Sim. Não tem como errar.)" } // Wait, speaker mix-up in prompt.
                    ]
                },
                {
                    title: "Dialogue 1: Walking Directions", // Fixed
                    audio: "TTS: Excuse me, I'm a little lost. What's the best way to get to the museum? Go straight on for about two blocks, then turn right. So, I go straight and then turn right? Yes. You can't miss it.",
                    lines:[
                        { speaker: "Tourist", text: "Excuse me, I'm a little lost. What's the best way to get to the museum?", pt: "(Com licença, estou um pouco perdido. Qual é a melhor maneira de chegar ao museu?)" },
                        { speaker: "Local", text: "Go straight on for about two blocks, then turn right.", pt: "(Siga em frente por cerca de dois quarteirões, depois vire à direita.)" },
                        { speaker: "Tourist", text: "So, I go straight and then turn right?", pt: "(Então, eu sigo em frente e depois viro à direita?)" },
                        { speaker: "Local", text: "Yes. You can't miss it.", pt: "(Sim. Não tem como errar.)" }
                    ]
                },
                {
                    title: "Dialogue 2: Finding a Landmark",
                    audio: "TTS: Can you help me? I'm looking for the city hall. Is it far from here? Not really. Keep going until you see the big park. It is just around the corner.",
                    lines:[
                        { speaker: "Visitor", text: "Can you help me? I'm looking for the city hall. Is it far from here?", pt: "(Você pode me ajudar? Estou procurando a prefeitura. Fica longe daqui?)" },
                        { speaker: "Resident", text: "Not really. Keep going until you see the big park. It is just around the corner.", pt: "(Na verdade não. Continue indo até ver o grande parque. Fica logo virando a esquina.)" }
                    ]
                },
                {
                    title: "Dialogue 3: Checking the Route",
                    audio: "TTS: Excuse me, am I going the right way for the hospital? Yes, just go past the supermarket and it is on the left. Let me see if I've got this right. I go past the supermarket? Exactly.",
                    lines:[
                        { speaker: "Driver", text: "Excuse me, am I going the right way for the hospital?", pt: "(Com licença, estou indo no caminho certo para o hospital?)" },
                        { speaker: "Pedestrian", text: "Yes, just go past the supermarket and it is on the left.", pt: "(Sim, basta passar pelo supermercado e fica à esquerda.)" },
                        { speaker: "Driver", text: "Let me see if I've got this right. I go past the supermarket?", pt: "(Deixe-me ver se entendi direito. Eu passo pelo supermercado?)" },
                        { speaker: "Pedestrian", text: "Exactly.", pt: "(Exatamente.)" }
                    ]
                },
                {
                    title: "Dialogue 4: Taking the Bus",
                    audio: "TTS: Which bus should I take to get to the airport? Take the number 10 bus. Where do I get off for the main terminal? You need to get off at the next stop.",
                    lines:[
                        { speaker: "Traveler", text: "Which bus should I take to get to the airport?", pt: "(Qual ônibus devo pegar para chegar ao aeroporto?)" },
                        { speaker: "Attendant", text: "Take the number 10 bus.", pt: "(Pegue o ônibus número 10.)" },
                        { speaker: "Traveler", text: "Where do I get off for the main terminal?", pt: "(Onde eu desço para o terminal principal?)" },
                        { speaker: "Attendant", text: "You need to get off at the next stop.", pt: "(Você precisa descer na próxima parada.)" }
                    ]
                },
                {
                    title: "Dialogue 5: Using the Subway",
                    audio: "TTS: Excuse me, am I going the right way for the university? No, you are on the wrong line. You have to change trains at Central Station. Let me see if I've got this right. I change trains at Central? Yes, and then take the blue line.",
                    lines:[
                        { speaker: "Student", text: "Excuse me, am I going the right way for the university?", pt: "(Com licença, estou indo no caminho certo para a universidade?)" },
                        { speaker: "Guard", text: "No, you are on the wrong line. You have to change trains at Central Station.", pt: "(Não, você está na linha errada. Você tem que trocar de trem na Estação Central.)" },
                        { speaker: "Student", text: "Let me see if I've got this right. I change trains at Central?", pt: "(Deixe-me ver se entendi direito. Eu troco de trem na Central?)" },
                        { speaker: "Guard", text: "Yes, and then take the blue line.", pt: "(Sim, e depois pegue a linha azul.)" }
                    ]
                },
                {
                    title: "Dialogue 6: Close to the Destination",
                    audio: "TTS: Can you help me? I'm looking for the theater. Take the first turning on your right. You can't miss it. It is just around the corner.",
                    lines:[
                        { speaker: "Tourist", text: "Can you help me? I'm looking for the theater.", pt: "(Você pode me ajudar? Estou procurando o teatro.)" },
                        { speaker: "Local", text: "Take the first turning on your right. You can't miss it. It is just around the corner.", pt: "(Pegue a primeira curva à sua direita. Não tem como errar. Fica logo virando a esquina.)" }
                    ]
                }
            ],

            // --- 3C: PRACTICE ---
            grammarDrillGroups:[
                {
                    title: "Asking for Directions",
                    drills:[
                        { q: "Excuse me, I'm a little ________.", options:[{t: "lost", c: true}, {t: "missing", c: false}, {t: "found", c: false}, {t: "away", c: false}], type: "mcq" },
                        { q: "Can you help me? I'm ________ for the museum.", options:[{t: "finding", c: false}, {t: "looking", c: true}, {t: "seeing", c: false}, {t: "watching", c: false}], type: "mcq" },
                        { q: "Am I going the right ________ for the train station?", options:[{t: "street", c: false}, {t: "road", c: false}, {t: "way", c: true}, {t: "block", c: false}], type: "mcq" },
                        { q: "What's the ________ way to get to the main square?", options:[{t: "best", c: true}, {t: "good", c: false}, {t: "well", c: false}, {t: "better", c: false}], type: "mcq" },
                        { q: "________ bus should I take?", options:[{t: "What", c: false}, {t: "Where", c: false}, {t: "Which", c: true}, {t: "How", c: false}], type: "mcq" },
                        { q: "Is the library ________ from here?", options:[{t: "near", c: false}, {t: "far", c: true}, {t: "next", c: false}, {t: "away", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Giving Directions",
                    drills:[
                        { q: "Go ________ on for about two blocks.", options:[{t: "straight", c: true}, {t: "right", c: false}, {t: "ahead", c: false}, {t: "left", c: false}], type: "mcq" },
                        { q: "Keep ________ until you see a big church.", options:[{t: "walking", c: false}, {t: "going", c: true}, {t: "moving", c: false}, {t: "passing", c: false}], type: "mcq" },
                        { q: "Take the first ________ on your right.", options:[{t: "turn", c: false}, {t: "turning", c: true}, {t: "block", c: false}, {t: "street", c: false}], type: "mcq" },
                        { q: "Go ________ the supermarket.", options:[{t: "past", c: true}, {t: "passed", c: false}, {t: "front", c: false}, {t: "next", c: false}], type: "mcq" },
                        { q: "Where do I get ________ for the mall?", options:[{t: "on", c: false}, {t: "in", c: false}, {t: "off", c: true}, {t: "out", c: false}], type: "mcq" },
                        { q: "You have to ________ trains at the next station.", options:[{t: "switch", c: false}, {t: "change", c: true}, {t: "swap", c: false}, {t: "move", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Confirming",
                    drills:[
                        { q: "Let me see if I've ________ this right.", options:[{t: "get", c: false}, {t: "got", c: true}, {t: "had", c: false}, {t: "made", c: false}], type: "mcq" },
                        { q: "________, I go straight and then turn left?", options:[{t: "So", c: true}, {t: "Then", c: false}, {t: "Because", c: false}, {t: "And", c: false}], type: "mcq" },
                        { q: "It's a big red building, you can't ________ it.", options:[{t: "lose", c: false}, {t: "see", c: false}, {t: "miss", c: true}, {t: "find", c: false}], type: "mcq" },
                        { q: "The entrance is just ________ the corner.", options:[{t: "around", c: true}, {t: "at", c: false}, {t: "on", c: false}, {t: "in", c: false}], type: "mcq" }
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
                { text: "Excuse me, I'm a little lost. ↘", audio: "TTS: Excuse me, I'm a little lost." },
                { text: "What's the best way to get to the museum? ↘", audio: "TTS: What's the best way to get to the museum?" },
                { text: "Am I going the right way for the train station? ↗", audio: "TTS: Am I going the right way for the train station?" },
                { text: "Go straight on for about two blocks. ↘", audio: "TTS: Go straight on for about two blocks." },
                { text: "Take the first turning on your right. ↘", audio: "TTS: Take the first turning on your right." },
                { text: "Keep going until you see a big church. ↘", audio: "TTS: Keep going until you see a big church." },
                { text: "Which bus should I take? ↘", audio: "TTS: Which bus should I take?" },
                { text: "Let me see if I've got this right. ↘", audio: "TTS: Let me see if I've got this right." },
                { text: "You have to change trains at the next stop. ↘", audio: "TTS: You have to change trains at the next stop." },
                { text: "It is just around the corner, you can't miss it. ↘", audio: "TTS: It is just around the corner, you can't miss it." }
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
                    audio: "TTS: Tourist: Excuse me, can you help me? I am looking for the hospital. Local: Sure. Go straight on and cross the bridge. It is on the left. Tourist: Thank you very much!",
                    text: "Tourist: Excuse me, can you [help] me? I am [looking] for the hospital.<br>Local: Sure. Go [straight] on and cross the [bridge]. It is on the left.<br>Tourist: Thank you very much!"
                },
                {
                    type: "dropdown",
                    instruction: "Listen to the dialogue about taking public transport.",
                    audio: "TTS: Visitor: Which bus should I take to the museum? Guide: Take the blue bus and get off at the third stop. Visitor: Is it far from here? Guide: No, it's just a ten-minute ride.",
                    questions:[
                        { q: "Visitor: Which [bus* | train | taxi] should I take to the museum?", a: "bus" },
                        { q: "Guide: Take the blue bus and get [off* | on | in] at the third stop.", a: "off" },
                        { q: "Visitor: Is it[far* | near | close] from here?", a: "far" },
                        { q: "Guide: No, it's just a ten-minute [ride* | walk | flight].", a: "ride" }
                    ]
                },
                {
                    type: "audio-choice",
                    instruction: "Listen to the speaker giving directions. Where is the pharmacy?",
                    audio: "TTS: To find the pharmacy, go past the supermarket and turn right at the traffic lights. You will see a big bank on the corner. The pharmacy is right next to the bank.",
                    options:[
                        { t: "It is opposite the supermarket.", c: false },
                        { t: "It is next to the bank on the corner.", c: true },
                        { t: "It is straight ahead, past the bridge.", c: false },
                        { t: "It is between the hospital and the church.", c: false }
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
                    title: "Dialogue - Finding the Hotel",
                    audio: "TTS: Tourist: Excuse me, I'm a little lost. Can you help me? I'm looking for the Grand Hotel. Local: The Grand Hotel? Let me think. What's the best way to get to it from here... Ah, yes. Go straight on for three blocks. Tourist: Okay, straight for three blocks. Local: Then, take the first turning on your left. Go past the old theater. Tourist: Let me see if I've got this right. I go straight, turn left, and go past the theater? Local: Exactly. The hotel is opposite the park. You can't miss it.",
                    body: "<b>Tourist:</b> [Excuse me, I'm a little lost](tooltip:im-a-little-lost). [Can you help me](tooltip:can-you-help)? [I'm looking for](tooltip:im-looking-for) the Grand [Hotel](tooltip:hotel).<br><b>Local:</b> The Grand Hotel? Let me think.[What's the best way to get to](tooltip:best-way-to-get-to) it from here... Ah, yes. [Go straight on](tooltip:go-straight-on) for three [blocks](tooltip:block).<br><b>Tourist:</b> Okay, straight for three blocks.<br><b>Local:</b> Then, [take the first turning on](tooltip:take-first-turning) your left. [Go past](tooltip:go-past) the old [theater](tooltip:theater).<br><b>Tourist:</b>[Let me see if I've got this right](tooltip:let-me-see-right). I go straight,[turn](tooltip:turn) left, and go past the theater?<br><b>Local:</b> Exactly. The hotel is [opposite](tooltip:opposite) the [park](tooltip:park). [You can't miss it](tooltip:cant-miss-it).",
                    questions:[
                        { q: "What is the tourist looking for?", options:[{t: "The old theater.", c: false}, {t: "The Grand Hotel.", c: true}, {t: "A public park.", c: false}], type: "mcq" },
                        { q: "How many blocks does the tourist need to go straight?", options:[{t: "One block.", c: false}, {t: "Two blocks.", c: false}, {t: "Three blocks.", c: true}], type: "mcq" },
                        { q: "Where is the hotel located exactly?", options:[{t: "Opposite the park.", c: true}, {t: "Next to the theater.", c: false}, {t: "Inside the museum.", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Dialogue - Public Transport",
                    audio: "TTS: Commuter: Excuse me, am I going the right way for the university? Staff: No, this platform is for trains going to the suburbs. Commuter: Oh no! Which train should I take? Staff: You need to cross the bridge to the other platform. Then, get off at the fifth stop. Commuter: So, I cross the bridge and ride for five stops? Staff: Yes, but you have to change trains at Central Station. Commuter: I understand. Thanks for the help!",
                    body: "<b>Commuter:</b> Excuse me, [am I going the right way for](tooltip:going-right-way) the[university](tooltip:university)?<br><b>Staff:</b> No, this platform is for trains going to the suburbs.<br><b>Commuter:</b> Oh no! Which train should I take?<br><b>Staff:</b> You need to [cross](tooltip:cross) the [bridge](tooltip:bridge) to the other platform. Then,[get off at the](tooltip:get-off-at) fifth stop.<br><b>Commuter:</b> [So, I](tooltip:so-i) cross the bridge and ride for five stops?<br><b>Staff:</b> Yes, but [you have to change trains](tooltip:change-trains) at Central Station.<br><b>Commuter:</b> I understand. Thanks for the help!",
                    questions:[
                        { q: "Where is the commuter trying to go?", options:[{t: "To the suburbs.", c: false}, {t: "To the university.", c: true}, {t: "To Central Station.", c: false}], type: "mcq" },
                        { q: "What does the staff member tell the commuter to do first?", options:[{t: "Change trains immediately.", c: false}, {t: "Cross the bridge to the other platform.", c: true}, {t: "Get off at the fifth stop.", c: false}], type: "mcq" },
                        { q: "Does the commuter have a direct train ride?", options:[{t: "Yes, it is a direct train.", c: false}, {t: "No, they have to change trains.", c: true}, {t: "No, they have to take a bus instead.", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Email - Meeting Downtown",
                    audio: "TTS: Subject: Directions to the restaurant. Hi David, We are meeting at the Italian restaurant tonight. In case you forgot, here are the directions. When you get off the bus, keep going until you see a big supermarket. Walk past it, and turn right at the traffic lights. The restaurant is between the bank and the pharmacy. It is just around the corner from the bus stop, so it is a very short walk. Let me know if you get lost! Best, Anna.",
                    body: "<b>From: Anna</b><br><b>To: David</b><br>Subject: [Directions](tooltip:directions) to the [restaurant](tooltip:restaurant).<br><br>Hi David,<br>We are meeting at the Italian restaurant tonight. In case you forgot, here are the directions. When you [get off](tooltip:get-off) the bus, [keep going until you see](tooltip:keep-going-until) a big [supermarket](tooltip:supermarket). Walk [past](tooltip:go-past) it, and [turn](tooltip:turn) right at the [traffic lights](tooltip:traffic-lights). The restaurant is [between](tooltip:between) the [bank](tooltip:bank) and the [pharmacy](tooltip:pharmacy). It is [just around the corner](tooltip:just-around-corner) from the bus stop, so it is a very short [walk](tooltip:walk). Let me know if you get lost!<br><br>Best, Anna.",
                    questions:[
                        { q: "What should David look for after getting off the bus?", options:[{t: "A big hospital.", c: false}, {t: "A big supermarket.", c: true}, {t: "A traffic light.", c: false}], type: "mcq" },
                        { q: "Where exactly is the restaurant located?", options:[{t: "Between the bank and the pharmacy.", c: true}, {t: "Opposite the supermarket.", c: false}, {t: "Next to the traffic lights.", c: false}], type: "mcq" },
                        { q: "Is the restaurant far from the bus stop?", options:[{t: "Yes, it's a very long walk.", c: false}, {t: "No, it's just around the corner.", c: true}, {t: "Anna doesn't know.", c: false}], type: "mcq" }
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
                { type: "matching", instruction: "Match the locations to their descriptions.", pairs:[
                    { left: "Pharmacy", right: "Sells medicine", val: "1" },
                    { left: "Museum", right: "Exhibits art and history", val: "2" },
                    { left: "Library", right: "Lends books to people", val: "3" },
                    { left: "Supermarket", right: "Sells food and groceries", val: "4" }
                ]},
                { type: "matching", instruction: "Match the street features.", pairs:[
                    { left: "Crosswalk", right: "Safe place for pedestrians", val: "1" },
                    { left: "Traffic lights", right: "Red, yellow, and green signals", val: "2" },
                    { left: "Bridge", right: "Road going over a river", val: "3" },
                    { left: "Tunnel", right: "Road going under a hill", val: "4" }
                ]},
                { type: "matching", instruction: "Match the verbs to the actions.", pairs:[
                    { left: "To turn", right: "Change direction left or right", val: "1" },
                    { left: "To cross", right: "Go to the other side of a street", val: "2" },
                    { left: "To change", right: "Move from one train to another", val: "3" },
                    { left: "To go past", right: "Walk ahead without stopping", val: "4" }
                ]},
                { type: "matching", instruction: "Match the phrase halves.", pairs:[
                    { left: "What's the best", right: "way to get to...?", val: "1" },
                    { left: "Keep going", right: "until you see...", val: "2" },
                    { left: "Let me see if I've", right: "got this right.", val: "3" },
                    { left: "It is just", right: "around the corner.", val: "4" }
                ]},

                // --- WORD ORDER (5-14) ---
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "me / little / a / I'm / lost / Excuse / .", correct: "Excuse me I'm a little lost ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "for / museum / looking / I'm / the / .", correct: "I'm looking for the museum ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "way / right / the / going / I / Am / ?", correct: "Am I going the right way ?" },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "to / get / way / best / What's / the / ?", correct: "What's the best way to get ?" },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "take / bus / should / I / Which / ?", correct: "Which bus should I take ?" },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "here / far / it / from / Is / ?", correct: "Is it far from here ?" },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "on / straight / Go / blocks / two / for / .", correct: "Go straight on for two blocks ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "your / right / turning / Take / first / the / on / .", correct: "Take the first turning on your right ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "trains / change / to / have / You / .", correct: "You have to change trains ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "it / You / miss / can't / .", correct: "You can't miss it ." },

                // --- CLICKABLE ERROR (15-24) ---
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "I'm a little [lose](error:lost)." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "Am I going the right [street](error:way) for the bank?" },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "What's the best [road](error:way) to get to the museum?" },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "Is it [distant](error:far) from here?" },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "Go straight [in](error:on) for two blocks." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "Take the first [turn](error:turning) on your right." }, // both turn and turning are used, but 'turning' is the specific chunk target. Let's make it clearer.
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "Take the first [roundabout](error:turning) on your right." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "Go [passed](error:past) the supermarket." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "Get [out](error:off) at the next stop." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "You have to [exchange](error:change) trains." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "Let me see if I've [had](error:got) this right." },

                // --- ODD ONE OUT (25-30) ---
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Locations)", options:[{t: "Hospital", c: false}, {t: "University", c: false}, {t: "Theater", c: false}, {t: "Crosswalk", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Street Features)", options:[{t: "Corner", c: false}, {t: "Intersection", c: false}, {t: "Block", c: false}, {t: "Restaurant", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Prepositions of Place)", options:[{t: "Between", c: false}, {t: "Opposite", c: false}, {t: "Next to", c: false}, {t: "Bridge", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Verbs of Motion)", options:[{t: "To walk", c: false}, {t: "To cross", c: false}, {t: "To follow", c: false}, {t: "To change", c: true}] }, // Change is not direct physical foot motion in the same way, though debatable. Better:
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Verbs of Motion)", options:[{t: "To walk", c: false}, {t: "To turn", c: false}, {t: "To go past", c: false}, {t: "Landmark", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Directions)", options:[{t: "Straight ahead", c: false}, {t: "On the left", c: false}, {t: "On the right", c: false}, {t: "Tunnel", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Transportation)", options:[{t: "Bus", c: false}, {t: "Train", c: false}, {t: "Stop", c: false}, {t: "Sign", c: true}] },

                // --- TRUE / FALSE (31-35) ---
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "A 'crosswalk' is a place where cars can drive fast.", correct: "false"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "If a building is 'opposite' the park, it means it is across the street facing the park.", correct: "true"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "To 'go past' the bank means you stop and go inside.", correct: "false"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "You can say 'You can't miss it' to tell someone a place is very easy to find.", correct: "true"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "A 'roundabout' is a straight, long road with no turns.", correct: "false"}] },

                // --- MCQ (36-39) ---
                { type: "mcq", instruction: "Choose the correct phrase.<br>If you don't know where you are, you can ask a stranger: 'Excuse me, I'm a little ________.'", options:[{t: "missing", c: false}, {t: "found", c: false}, {t: "lost", c: true}, {t: "late", c: false}] },
                { type: "mcq", instruction: "Choose the correct verb.<br>When you are walking and reach a corner, you need to ________ left or right.", options:[{t: "turn", c: true}, {t: "cross", c: false}, {t: "follow", c: false}, {t: "change", c: false}] },
                { type: "mcq", instruction: "Choose the correct preposition.<br>The pharmacy is located ________ the bank and the supermarket.", options:[{t: "next to", c: false}, {t: "opposite", c: false}, {t: "between", c: true}, {t: "on the left", c: false}] },
                { type: "mcq", instruction: "Choose the correct phrase.<br>When you ride public transport, you have to ________ at your destination stop.", options:[{t: "get on", c: false}, {t: "get off", c: true}, {t: "change", c: false}, {t: "go past", c: false}] },

                // --- CATEGORIZE (40) ---
                { type: "categorize", instruction: "Sort the words into Street Features and Locations.", 
                    categories:[{id: "feat", name: "Street Features"}, {id: "loc", name: "Locations"}],
                    items:[
                        {text: "Traffic lights", catId: "feat"}, 
                        {text: "Roundabout", catId: "feat"}, 
                        {text: "Crosswalk", catId: "feat"}, 
                        {text: "Pharmacy", catId: "loc"}, 
                        {text: "Church", catId: "loc"}, 
                        {text: "Library", catId: "loc"}
                    ] 
                }
            ]
        },

        // ======================================================
        // STEP 8: WRITING PRACTICE
        // ======================================================
        {
            title: "Writing Practice",
            instruction: "Write a short email (5-7 sentences) to a friend giving them directions from the train station to your favorite restaurant. Use street features, prepositions of place, and clear instructions.",
            example: "Hi Mark! I'm so excited for dinner tonight. To get to the restaurant from the train station, go straight on for two blocks. Then, turn left at the traffic lights onto Main Street. Keep going until you see a big bank on the corner. Go past the bank, and the restaurant will be on your right. It is between a library and a pharmacy. You can't miss it! See you soon, Anna.",
            prompts:[
                "Give clear instructions using verbs (go straight, turn, go past).",
                "Use street features to guide them (blocks, traffic lights, corner).",
                "Use prepositions of place to describe the final location (next to, between, opposite).",
                "Reassure them that it is easy to find."
            ]
        },

        // ======================================================
        // STEP 9: FLASHCARDS
        // ======================================================
        {
            title: "Flashcards",
            items:[
                // 2A Items (36 items)
                { term: "Restaurant", definition: "A place where people pay to sit and eat meals.", defTrans: "Restaurante", example: "We ate pasta at an Italian restaurant.", audioFront: "TTS: Restaurant", audioBack: "TTS: We ate pasta at an Italian restaurant." },
                { term: "Park", definition: "A large public green area in a town.", defTrans: "Parque", example: "The kids are playing in the park.", audioFront: "TTS: Park", audioBack: "TTS: The kids are playing in the park." },
                { term: "Museum", definition: "A building where objects of historical or scientific interest are stored and exhibited.", defTrans: "Museu", example: "The art museum is closed on Mondays.", audioFront: "TTS: Museum", audioBack: "TTS: The art museum is closed on Mondays." },
                { term: "Library", definition: "A building or room containing collections of books for reading or borrowing.", defTrans: "Biblioteca", example: "Students borrow books from the library.", audioFront: "TTS: Library", audioBack: "TTS: Students borrow books from the library." },
                { term: "Pharmacy", definition: "A shop where medicinal drugs are prepared or sold.", defTrans: "Farmácia", example: "I bought medicine at the pharmacy.", audioFront: "TTS: Pharmacy", audioBack: "TTS: I bought medicine at the pharmacy." },
                { term: "Supermarket", definition: "A large self-service store selling foods and household goods.", defTrans: "Supermercado", example: "We buy our groceries at the supermarket.", audioFront: "TTS: Supermarket", audioBack: "TTS: We buy our groceries at the supermarket." },
                { term: "Hotel", definition: "An establishment providing accommodation, meals, and other services for travelers.", defTrans: "Hotel", example: "They booked a room in a nice hotel.", audioFront: "TTS: Hotel", audioBack: "TTS: They booked a room in a nice hotel." },
                { term: "Hospital", definition: "An institution providing medical treatment for sick or injured people.", defTrans: "Hospital", example: "The ambulance rushed to the hospital.", audioFront: "TTS: Hospital", audioBack: "TTS: The ambulance rushed to the hospital." },
                { term: "Church", definition: "A building used for public Christian worship.", defTrans: "Igreja", example: "The old church has a beautiful bell tower.", audioFront: "TTS: Church", audioBack: "TTS: The old church has a beautiful bell tower." },
                { term: "University", definition: "A high-level educational institution where students study for degrees.", defTrans: "Universidade", example: "She studies medicine at the university.", audioFront: "TTS: University", audioBack: "TTS: She studies medicine at the university." },
                { term: "Bank", definition: "A financial establishment that invests money deposited by customers.", defTrans: "Banco", example: "I need to withdraw money from the bank.", audioFront: "TTS: Bank", audioBack: "TTS: I need to withdraw money from the bank." },
                { term: "Theater", definition: "A building or outdoor area in which plays and other dramatic performances are given.", defTrans: "Teatro", example: "We saw a great play at the theater.", audioFront: "TTS: Theater", audioBack: "TTS: We saw a great play at the theater." },

                { term: "Street", definition: "A public road in a city or town.", defTrans: "Rua", example: "My house is on a very quiet street.", audioFront: "TTS: Street", audioBack: "TTS: My house is on a very quiet street." },
                { term: "Avenue", definition: "A broad road in a town or city.", defTrans: "Avenida", example: "Fifth Avenue is famous for its shops.", audioFront: "TTS: Avenue", audioBack: "TTS: Fifth Avenue is famous for its shops." },
                { term: "Corner", definition: "A place or angle where two or more sides or edges meet.", defTrans: "Esquina", example: "The café is right on the corner.", audioFront: "TTS: Corner", audioBack: "TTS: The café is right on the corner." },
                { term: "Intersection", definition: "A point or line common to lines or surfaces that intersect.", defTrans: "Cruzamento", example: "Turn right at the next intersection.", audioFront: "TTS: Intersection", audioBack: "TTS: Turn right at the next intersection." },
                { term: "Traffic lights", definition: "A set of automatically operated colored lights for controlling traffic.", defTrans: "Semáforo / Farol", example: "Stop when the traffic lights are red.", audioFront: "TTS: Traffic lights", audioBack: "TTS: Stop when the traffic lights are red." },
                { term: "Crosswalk", definition: "A marked part of a road where pedestrians have right of way.", defTrans: "Faixa de pedestres", example: "Always use the crosswalk to cross the road.", audioFront: "TTS: Crosswalk", audioBack: "TTS: Always use the crosswalk to cross the road." },
                { term: "Bridge", definition: "A structure carrying a road or path across an obstacle.", defTrans: "Ponte", example: "The bridge goes over the river.", audioFront: "TTS: Bridge", audioBack: "TTS: The bridge goes over the river." },
                { term: "Tunnel", definition: "An artificial underground passage.", defTrans: "Túnel", example: "The train goes through a dark tunnel.", audioFront: "TTS: Tunnel", audioBack: "TTS: The train goes through a dark tunnel." },
                { term: "Roundabout", definition: "A circular intersection or junction.", defTrans: "Rotatória", example: "Take the second exit at the roundabout.", audioFront: "TTS: Roundabout", audioBack: "TTS: Take the second exit at the roundabout." },
                { term: "Sign", definition: "An object bearing a warning or direction.", defTrans: "Placa (sinalização)", example: "Follow the blue sign to the airport.", audioFront: "TTS: Sign", audioBack: "TTS: Follow the blue sign to the airport." },
                { term: "Landmark", definition: "An object or feature of a landscape or town that is easily seen.", defTrans: "Marco / Ponto de referência", example: "The Eiffel Tower is a famous landmark.", audioFront: "TTS: Landmark", audioBack: "TTS: The Eiffel Tower is a famous landmark." },
                { term: "Block", definition: "The area bounded by four streets in a city.", defTrans: "Quarteirão", example: "The post office is one block away.", audioFront: "TTS: Block", audioBack: "TTS: The post office is one block away." },

                { term: "To walk", definition: "To move at a regular pace by lifting and setting down each foot.", defTrans: "Caminhar", example: "We decided to walk instead of taking a taxi.", audioFront: "TTS: To walk", audioBack: "TTS: We decided to walk instead of taking a taxi." },
                { term: "To follow", definition: "To move or travel behind someone or along a path.", defTrans: "Seguir", example: "Follow this road until you reach the station.", audioFront: "TTS: To follow", audioBack: "TTS: Follow this road until you reach the station." },
                { term: "To turn", definition: "To change direction when moving.", defTrans: "Virar", example: "Turn left at the traffic lights.", audioFront: "TTS: To turn", audioBack: "TTS: Turn left at the traffic lights." },
                { term: "To cross", definition: "To go from one side of a street to the other.", defTrans: "Atravessar", example: "Cross the street at the pedestrian crossing.", audioFront: "TTS: To cross", audioBack: "TTS: Cross the street at the pedestrian crossing." },
                { term: "To go past", definition: "To walk ahead of something without stopping.", defTrans: "Passar por", example: "Go past the bank, and you will see it.", audioFront: "TTS: To go past", audioBack: "TTS: Go past the bank, and you will see it." },
                { term: "To change", definition: "To move from one bus or train to another.", defTrans: "Mudar / Trocar", example: "You have to change trains at the next stop.", audioFront: "TTS: To change", audioBack: "TTS: You have to change trains at the next stop." },
                { term: "Next to", definition: "In or into a position immediately to one side of.", defTrans: "Ao lado de", example: "The pharmacy is next to the supermarket.", audioFront: "TTS: Next to", audioBack: "TTS: The pharmacy is next to the supermarket." },
                { term: "Opposite", definition: "In a position on the other side of a specific area.", defTrans: "Em frente a", example: "The park is opposite the school.", audioFront: "TTS: Opposite", audioBack: "TTS: The park is opposite the school." },
                { term: "Between", definition: "At, into, or across the space separating two objects.", defTrans: "Entre", example: "The library is between the bank and the hotel.", audioFront: "TTS: Between", audioBack: "TTS: The library is between the bank and the hotel." },
                { term: "Straight ahead", definition: "Moving or continuing in the same direction.", defTrans: "Em frente / Direto", example: "Just keep going straight ahead.", audioFront: "TTS: Straight ahead", audioBack: "TTS: Just keep going straight ahead." },
                { term: "On the left", definition: "Positioned on the side corresponding to the heart.", defTrans: "À esquerda", example: "The entrance is on the left side of the street.", audioFront: "TTS: On the left", audioBack: "TTS: The entrance is on the left side of the street." },
                { term: "On the corner", definition: "Positioned where two streets meet.", defTrans: "Na esquina", example: "Let's meet on the corner of Main Street.", audioFront: "TTS: On the corner", audioBack: "TTS: Let's meet on the corner of Main Street." },

                // 3A Items (16 items)
                { term: "Excuse me, I'm a little lost.", definition: "Polite way to tell someone you don't know where you are.", defTrans: "Com licença, estou um pouco perdido(a).", example: "Excuse me, I'm a little lost. Can you help?", audioFront: "TTS: Excuse me, I'm a little lost.", audioBack: "TTS: Excuse me, I'm a little lost. Can you help?" },
                { term: "Can you help me? I'm looking for...", definition: "Asking a stranger for assistance to find a place.", defTrans: "Você pode me ajudar? Estou procurando por...", example: "Can you help me? I'm looking for the museum.", audioFront: "TTS: Can you help me? I'm looking for", audioBack: "TTS: Can you help me? I'm looking for the museum." },
                { term: "Am I going the right way for...", definition: "Checking if your current walking direction is correct.", defTrans: "Estou indo na direção certa para...", example: "Am I going the right way for the train station?", audioFront: "TTS: Am I going the right way for", audioBack: "TTS: Am I going the right way for the train station?" },
                { term: "What's the best way to get to...", definition: "Asking for the most efficient route to a place.", defTrans: "Qual é a melhor maneira de chegar a...", example: "What's the best way to get to the square?", audioFront: "TTS: What's the best way to get to", audioBack: "TTS: What's the best way to get to the square?" },
                { term: "Which bus should I take?", definition: "Asking for public transport advice.", defTrans: "Qual ônibus devo pegar?", example: "Which bus should I take to go downtown?", audioFront: "TTS: Which bus should I take?", audioBack: "TTS: Which bus should I take to go downtown?" },
                { term: "Is it far from here?", definition: "Asking about the distance to a destination.", defTrans: "Fica longe daqui?", example: "Is it far from here, or can I walk?", audioFront: "TTS: Is it far from here?", audioBack: "TTS: Is it far from here, or can I walk?" },
                
                { term: "Go straight on", definition: "Instruction to continue walking without turning.", defTrans: "Siga em frente", example: "Go straight on for about two blocks.", audioFront: "TTS: Go straight on", audioBack: "TTS: Go straight on for about two blocks." },
                { term: "Keep going until you see", definition: "Instruction to not stop until a specific landmark appears.", defTrans: "Continue indo até ver", example: "Keep going until you see a big church.", audioFront: "TTS: Keep going until you see", audioBack: "TTS: Keep going until you see a big church." },
                { term: "Take the first turning on your right.", definition: "Instruction to turn into the next available street on the right side.", defTrans: "Pegue a primeira curva à direita.", example: "Take the first turning on your right.", audioFront: "TTS: Take the first turning on your right.", audioBack: "TTS: Take the first turning on your right." },
                { term: "Go past", definition: "Instruction to walk ahead of a building without entering it.", defTrans: "Passe por", example: "Go past the supermarket.", audioFront: "TTS: Go past", audioBack: "TTS: Go past the supermarket." },
                { term: "Get off at the next stop.", definition: "Instruction to exit public transport at the next station.", defTrans: "Desça na próxima parada.", example: "Get off at the next stop to reach the park.", audioFront: "TTS: Get off at the next stop.", audioBack: "TTS: Get off at the next stop to reach the park." },
                { term: "You have to change trains", definition: "Instruction to transfer from one train line to another.", defTrans: "Você tem que trocar de trem", example: "You have to change trains at Central Station.", audioFront: "TTS: You have to change trains", audioBack: "TTS: You have to change trains at Central Station." },
                
                { term: "Let me see if I've got this right.", definition: "A phrase used before repeating instructions to confirm understanding.", defTrans: "Deixe-me ver se entendi direito.", example: "Let me see if I've got this right. I turn left?", audioFront: "TTS: Let me see if I've got this right.", audioBack: "TTS: Let me see if I've got this right. I turn left?" },
                { term: "So, I go straight and then turn left?", definition: "A phrase used to summarize the directions given to you.", defTrans: "Então, sigo em frente e viro à esquerda?", example: "So, I go straight and then turn left?", audioFront: "TTS: So, I go straight and then turn left?", audioBack: "TTS: So, I go straight and then turn left?" },
                { term: "You can't miss it.", definition: "An expression meaning a place is very obvious or easy to find.", defTrans: "Não tem como errar (Você não tem como perder).", example: "It's a huge building, you can't miss it.", audioFront: "TTS: You can't miss it.", audioBack: "TTS: It's a huge building, you can't miss it." },
                { term: "Just around the corner.", definition: "An expression meaning very close, just past the intersection.", defTrans: "Logo virando a esquina.", example: "The entrance is just around the corner.", audioFront: "TTS: Just around the corner.", audioBack: "TTS: The entrance is just around the corner." }
            ]
        }
    ],

    // ======================================================
    // GLOSSARY (All 52 items + Context words)
    // ======================================================
    glossary:[
        // 2A: Locations
        { topic: "Locations", term: "restaurant", definition: "A place where people pay to sit and eat meals.", translation: "Restaurante" },
        { topic: "Locations", term: "park", definition: "A large public green area in a town.", translation: "Parque" },
        { topic: "Locations", term: "museum", definition: "A building where artifacts are exhibited.", translation: "Museu" },
        { topic: "Locations", term: "library", definition: "A building containing collections of books.", translation: "Biblioteca" },
        { topic: "Locations", term: "pharmacy", definition: "A shop where medicinal drugs are sold.", translation: "Farmácia" },
        { topic: "Locations", term: "supermarket", definition: "A large store selling food and goods.", translation: "Supermercado" },
        { topic: "Locations", term: "hotel", definition: "An establishment providing accommodation for travelers.", translation: "Hotel" },
        { topic: "Locations", term: "hospital", definition: "An institution providing medical treatment.", translation: "Hospital" },
        { topic: "Locations", term: "church", definition: "A building used for public Christian worship.", translation: "Igreja" },
        { topic: "Locations", term: "university", definition: "A high-level educational institution.", translation: "Universidade" },
        { topic: "Locations", term: "bank", definition: "A financial establishment.", translation: "Banco" },
        { topic: "Locations", term: "theater", definition: "A building where plays are performed.", translation: "Teatro" },

        // 2A: Street Features
        { topic: "Features", term: "street", definition: "A public road in a city.", translation: "Rua" },
        { topic: "Features", term: "avenue", definition: "A broad road in a town or city.", translation: "Avenida" },
        { topic: "Features", term: "corner", definition: "A place where two streets meet.", translation: "Esquina" },
        { topic: "Features", term: "intersection", definition: "A point where two roads cross.", translation: "Cruzamento" },
        { topic: "Features", term: "traffic-lights", definition: "Colored lights controlling traffic.", translation: "Semáforo" },
        { topic: "Features", term: "crosswalk", definition: "A marked part of a road for pedestrians.", translation: "Faixa de pedestres" },
        { topic: "Features", term: "bridge", definition: "A structure carrying a road across water.", translation: "Ponte" },
        { topic: "Features", term: "tunnel", definition: "An underground passage for roads.", translation: "Túnel" },
        { topic: "Features", term: "roundabout", definition: "A circular intersection.", translation: "Rotatória" },
        { topic: "Features", term: "sign", definition: "A notice giving information or directions.", translation: "Placa (de sinalização)" },
        { topic: "Features", term: "landmark", definition: "An object easily seen and recognized.", translation: "Ponto de referência" },
        { topic: "Features", term: "block", definition: "The area bounded by four streets.", translation: "Quarteirão" },

        // 2A: Verbs & Prepositions
        { topic: "Verbs", term: "to-walk", definition: "To move on foot.", translation: "Caminhar" },
        { topic: "Verbs", term: "to-follow", definition: "To move behind or along a path.", translation: "Seguir" },
        { topic: "Verbs", term: "to-turn", definition: "To change direction.", translation: "Virar" },
        { topic: "Verbs", term: "to-cross", definition: "To go from one side to the other.", translation: "Atravessar" },
        { topic: "Verbs", term: "to-go-past", definition: "To walk ahead of a building without stopping.", translation: "Passar por" },
        { topic: "Verbs", term: "to-change", definition: "To move from one train/bus to another.", translation: "Trocar" },
        { topic: "Prepositions", term: "next-to", definition: "In a position immediately to one side of.", translation: "Ao lado de" },
        { topic: "Prepositions", term: "opposite", definition: "In a position on the other side.", translation: "Em frente a" },
        { topic: "Prepositions", term: "between", definition: "In the space separating two objects.", translation: "Entre" },
        { topic: "Prepositions", term: "straight-ahead", definition: "Moving in the same direction.", translation: "Em frente" },
        { topic: "Prepositions", term: "on-the-left", definition: "Positioned on the left side.", translation: "À esquerda" },
        { topic: "Prepositions", term: "on-the-corner", definition: "Positioned where two streets meet.", translation: "Na esquina" },

        // 3A: Expressions
        { topic: "Expressions", term: "im-a-little-lost", definition: "Polite way to tell someone you are lost.", translation: "Estou um pouco perdido(a)." },
        { topic: "Expressions", term: "can-you-help", definition: "Asking a stranger for assistance.", translation: "Você pode me ajudar?" },
        { topic: "Expressions", term: "im-looking-for", definition: "Stating the place you want to find.", translation: "Estou procurando por..." },
        { topic: "Expressions", term: "going-right-way", definition: "Checking if your direction is correct.", translation: "Estou indo na direção certa para..." },
        { topic: "Expressions", term: "best-way-to-get-to", definition: "Asking for the best route.", translation: "Qual é a melhor maneira de chegar a..." },
        { topic: "Expressions", term: "which-bus-take", definition: "Asking for public transport advice.", translation: "Qual ônibus devo pegar?" },
        { topic: "Expressions", term: "is-it-far", definition: "Asking about distance.", translation: "Fica longe daqui?" },
        
        { topic: "Expressions", term: "go-straight-on", definition: "Instruction to continue without turning.", translation: "Siga em frente" },
        { topic: "Expressions", term: "keep-going-until", definition: "Instruction to not stop until a landmark appears.", translation: "Continue indo até ver" },
        { topic: "Expressions", term: "take-first-turning", definition: "Instruction to turn into the next street.", translation: "Pegue a primeira curva." },
        { topic: "Expressions", term: "go-past", definition: "Instruction to walk ahead of a building.", translation: "Passe por" },
        { topic: "Expressions", term: "get-off-at", definition: "Instruction to exit public transport.", translation: "Desça na parada." },
        { topic: "Expressions", term: "change-trains", definition: "Instruction to transfer train lines.", translation: "Você tem que trocar de trem" },
        
        { topic: "Expressions", term: "let-me-see-right", definition: "Phrase to confirm understanding.", translation: "Deixe-me ver se entendi direito." },
        { topic: "Expressions", term: "so-i", definition: "Used to summarize directions.", translation: "Então, eu..." },
        { topic: "Expressions", term: "cant-miss-it", definition: "Meaning a place is very easy to find.", translation: "Não tem como errar." },
        { topic: "Expressions", term: "just-around-corner", definition: "Meaning very close.", translation: "Logo virando a esquina." },

        // Additional Context Words
        { topic: "Context", term: "directions", definition: "Instructions on how to reach a destination.", translation: "Direções / Instruções" },
        { topic: "Context", term: "bus", definition: "A large motor vehicle carrying passengers.", translation: "Ônibus" },
        { topic: "Context", term: "confirm", definition: "To establish the truth or correctness of something.", translation: "Confirmar" },
        { topic: "Context", term: "walk", definition: "A journey on foot.", translation: "Caminhada" }
    ]
});