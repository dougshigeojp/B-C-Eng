/**
 * English Block Assembling - LESSON DATA: Topic 26
 * Topic: Community and Neighborhood
 * Level: Upper A2 ~ Lower B1
 */

window.initLesson({
    // --- METADATA ---
    lessonId: "lesson-26",
    block: "4",
    topicTitle: "Community and Neighborhood",

    steps:[
        // ======================================================
        // STEP 0: INTRO & CAN-DO
        // ======================================================
        {
            title: "Intro & Can-Do",
            objectives: "• Describe the area where you live and its [atmosphere](tooltip:atmosphere).<br>• Talk about local places, [amenities](tooltip:amenities), and public transport.<br>• Engage in simple [small talk](tooltip:small-talk) with your [neighbors](tooltip:neighbor).<br>• Discuss community events like [festivals](tooltip:festival) and markets.",
            welcome: "Welcome to Lesson 26! The area we live in shapes our daily routines. In this lesson, you will learn the vocabulary to describe your neighborhood, from the bustling city center to the quiet suburbs. You will also learn practical phrases for interacting with your neighbors, talking about local facilities, and describing community life. Let's explore your neighborhood!",
            audio: {
                objectives: "TTS: In this lesson, you will learn to: Describe the area where you live and its atmosphere. Talk about local places, amenities, and public transport. Engage in simple small talk with your neighbors. Discuss community events like festivals and markets.",
                welcome: "TTS: Welcome to Lesson 26! The area we live in shapes our daily routines. In this lesson, you will learn the vocabulary to describe your neighborhood, from the bustling city center to the quiet suburbs. You will also learn practical phrases for interacting with your neighbors, talking about local facilities, and describing community life. Let's explore your neighborhood!"
            }
        },

        // ======================================================
        // STEP 1: CONTEXT DIALOGUE
        // ======================================================
        {
            title: "Context Dialogue",
            context: "Sarah and Tom run into each other at the local farmer's market on a Saturday morning.",
            contextAudio: "TTS: Tom: Good morning, Sarah! Lovely day, isn't it? Sarah: Hi, Tom! Yes, it's beautiful. I'm just on my way to the farmer's market. Are you going? Tom: I went earlier this morning. The strawberries are really good today. Sarah: Oh, thanks for the tip! I'll be sure to get some. I love our neighborhood. It has a strong sense of community. Tom: Me too. By the way, did you hear about the community picnic next Sunday? Sarah: I did! We're planning to go. It's always a nice event. Tom: Great! Well, I'll see you there then. Have a good weekend! Sarah: You too!",
            dialogue:[
                { speaker: "Tom", text: "Good morning, Sarah! Lovely day, isn't it?" },
                { speaker: "Sarah", text: "Hi, Tom! Yes, it's beautiful. I'm just on my way to the[farmer's market](tooltip:farmers-market). Are you going?" },
                { speaker: "Tom", text: "I went earlier this morning. The strawberries are really good today." },
                { speaker: "Sarah", text: "Oh, thanks for the tip! I'll be sure to get some. I love our [neighborhood](tooltip:neighborhood).[It has a strong sense of community](tooltip:strong-sense-community)." },
                { speaker: "Tom", text: "Me too. By the way, did you hear about the community picnic next Sunday?" },
                { speaker: "Sarah", text: "I did! We're planning to go. It's always a nice event." },
                { speaker: "Tom", text: "Great! Well, I'll see you there then. Have a good weekend!" },
                { speaker: "Sarah", text: "You too!" }
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
                    title: "Places & Features",
                    audio: "TTS: Neighborhood. District. Suburb. Playground. Community garden. Cafe. Pub. Community center. Amenities. Facilities. Public transport. Crime rate.",
                    items:[
                        { term: "Neighborhood", trans: "Bairro / Vizinhança" },
                        { term: "District", trans: "Distrito / Região" },
                        { term: "Suburb", trans: "Subúrbio (área residencial afastada do centro)" },
                        { term: "Playground", trans: "Parquinho (infantil)" },
                        { term: "Community garden", trans: "Horta comunitária" },
                        { term: "Café", trans: "Cafeteria / Café" },
                        { term: "Pub", trans: "Bar / Pub" },
                        { term: "Community center", trans: "Centro comunitário" },
                        { term: "Amenities", trans: "Comodidades (lojas, parques, etc.)" },
                        { term: "Facilities", trans: "Instalações / Infraestrutura" },
                        { term: "Public transport", trans: "Transporte público" },
                        { term: "Crime rate", trans: "Taxa de criminalidade" }
                    ]
                },
                {
                    title: "People & Events",
                    audio: "TTS: Neighbor. Resident. Local. Association. Farmer's market. Festival. Fair. Gathering. Event. Meeting. Small talk. Neighborhood watch.",
                    items:[
                        { term: "Neighbor", trans: "Vizinho(a)" },
                        { term: "Resident", trans: "Residente / Morador" },
                        { term: "Local", trans: "Pessoa local / Morador da região" },
                        { term: "Association", trans: "Associação" },
                        { term: "Farmer's market", trans: "Feira de produtores (hortifrúti)" },
                        { term: "Festival", trans: "Festival" },
                        { term: "Fair", trans: "Feira (de diversões ou exposições)" },
                        { term: "Gathering", trans: "Reunião (social) / Encontro" },
                        { term: "Event", trans: "Evento" },
                        { term: "Meeting", trans: "Reunião (formal)" },
                        { term: "Small talk", trans: "Conversa fiada / Bate-papo rápido" },
                        { term: "Neighborhood watch", trans: "Vigilância solidária (entre vizinhos)" }
                    ]
                },
                {
                    title: "Verbs & Adjectives",
                    audio: "TTS: To socialize. To volunteer. To commute. Quiet. Lively. Vibrant. Welcoming. Convenient. Remote. Urban. Residential. Safe.",
                    items:[
                        { term: "To socialize", trans: "Socializar" },
                        { term: "To volunteer", trans: "Trabalhar como voluntário" },
                        { term: "To commute", trans: "Deslocar-se (ir e voltar do trabalho/escola)" },
                        { term: "Quiet", trans: "Silencioso(a) / Calmo(a)" },
                        { term: "Lively", trans: "Animado(a) / Cheio de vida" },
                        { term: "Vibrant", trans: "Vibrante" },
                        { term: "Welcoming", trans: "Acolhedor(a)" },
                        { term: "Convenient", trans: "Conveniente / Prático" },
                        { term: "Remote", trans: "Remoto(a) / Afastado(a)" },
                        { term: "Urban", trans: "Urbano(a)" },
                        { term: "Residential", trans: "Residencial" },
                        { term: "Safe", trans: "Seguro(a)" }
                    ]
                }
            ],

            // --- 2B: EXAMPLES ---
            exampleGroups:[
                {
                    title: "Places & Features",
                    audio: "TTS: I live in a very friendly neighborhood. The financial district is full of tall buildings. We bought a house in a quiet suburb. The kids are playing in the playground. We grow tomatoes in the community garden. I drink espresso at the local cafe. They watch football at the pub. The community center offers yoga classes. This area has excellent local amenities. The sports facilities are brand new. Good public transport makes commuting easy. This city has a very low crime rate.",
                    items:[
                        { term: "Neighborhood", sent: "I live in a very friendly neighborhood.", trans: "Eu moro em um bairro muito amigável." },
                        { term: "District", sent: "The financial district is full of tall buildings.", trans: "O distrito financeiro está cheio de prédios altos." },
                        { term: "Suburb", sent: "We bought a house in a quiet suburb.", trans: "Nós compramos uma casa em um subúrbio tranquilo." },
                        { term: "Playground", sent: "The kids are playing in the playground.", trans: "As crianças estão brincando no parquinho." },
                        { term: "Community garden", sent: "We grow tomatoes in the community garden.", trans: "Nós cultivamos tomates na horta comunitária." },
                        { term: "Café", sent: "I drink espresso at the local cafe.", trans: "Eu bebo expresso na cafeteria local." },
                        { term: "Pub", sent: "They watch football at the pub.", trans: "Eles assistem futebol no pub (bar)." },
                        { term: "Community center", sent: "The community center offers yoga classes.", trans: "O centro comunitário oferece aulas de ioga." },
                        { term: "Amenities", sent: "This area has excellent local amenities.", trans: "Esta área tem excelentes comodidades locais." },
                        { term: "Facilities", sent: "The sports facilities are brand new.", trans: "As instalações esportivas são novinhas em folha." },
                        { term: "Public transport", sent: "Good public transport makes commuting easy.", trans: "Um bom transporte público facilita o deslocamento." },
                        { term: "Crime rate", sent: "This city has a very low crime rate.", trans: "Esta cidade tem uma taxa de criminalidade muito baixa." }
                    ]
                },
                {
                    title: "People & Events",
                    audio: "TTS: My neighbor helped me fix my car. Every resident must pay a maintenance fee. The local showed me the best restaurant. The neighborhood association meets on Tuesdays. I buy fresh vegetables at the farmer's market. We danced at the summer street festival. We played games and ate cotton candy at the fair. It was a small family gathering. The charity concert is a big local event. The town hall meeting starts at 7 PM. I made small talk with the cashier. The neighborhood watch program keeps us safe.",
                    items:[
                        { term: "Neighbor", sent: "My neighbor helped me fix my car.", trans: "Meu vizinho me ajudou a consertar meu carro." },
                        { term: "Resident", sent: "Every resident must pay a maintenance fee.", trans: "Todo residente deve pagar uma taxa de manutenção." },
                        { term: "Local", sent: "The local showed me the best restaurant.", trans: "O morador local me mostrou o melhor restaurante." },
                        { term: "Association", sent: "The neighborhood association meets on Tuesdays.", trans: "A associação de moradores se reúne às terças-feiras." },
                        { term: "Farmer's market", sent: "I buy fresh vegetables at the farmer's market.", trans: "Eu compro vegetais frescos na feira de produtores." },
                        { term: "Festival", sent: "We danced at the summer street festival.", trans: "Nós dançamos no festival de rua de verão." },
                        { term: "Fair", sent: "We played games and ate cotton candy at the fair.", trans: "Jogamos e comemos algodão-doce na feira." },
                        { term: "Gathering", sent: "It was a small family gathering.", trans: "Foi uma pequena reunião de família." },
                        { term: "Event", sent: "The charity concert is a big local event.", trans: "O show beneficente é um grande evento local." },
                        { term: "Meeting", sent: "The town hall meeting starts at 7 PM.", trans: "A reunião na prefeitura começa às 19h." },
                        { term: "Small talk", sent: "I made small talk with the cashier.", trans: "Eu fiz uma conversa fiada com o caixa." },
                        { term: "Neighborhood watch", sent: "The neighborhood watch program keeps us safe.", trans: "O programa de vigilância solidária nos mantém seguros." }
                    ]
                },
                {
                    title: "Verbs & Adjectives",
                    audio: "TTS: I like to socialize with my coworkers. She decided to volunteer at the local library. I commute to the city center every day. The streets are very quiet at night. The city center is always lively and loud. It is a vibrant community with many artists. The people here are very welcoming. Having a supermarket nearby is very convenient. My grandparents live in a remote village. Traffic is a big problem in urban areas. This is a residential street, so please drive slowly. It is a safe neighborhood for children to play.",
                    items:[
                        { term: "To socialize", sent: "I like to socialize with my coworkers.", trans: "Gosto de socializar com meus colegas de trabalho." },
                        { term: "To volunteer", sent: "She decided to volunteer at the local library.", trans: "Ela decidiu ser voluntária na biblioteca local." },
                        { term: "To commute", sent: "I commute to the city center every day.", trans: "Eu me desloco para o centro da cidade todos os dias." },
                        { term: "Quiet", sent: "The streets are very quiet at night.", trans: "As ruas são muito silenciosas à noite." },
                        { term: "Lively", sent: "The city center is always lively and loud.", trans: "O centro da cidade é sempre animado e barulhento." },
                        { term: "Vibrant", sent: "It is a vibrant community with many artists.", trans: "É uma comunidade vibrante com muitos artistas." },
                        { term: "Welcoming", sent: "The people here are very welcoming.", trans: "As pessoas aqui são muito acolhedoras." },
                        { term: "Convenient", sent: "Having a supermarket nearby is very convenient.", trans: "Ter um supermercado por perto é muito conveniente." },
                        { term: "Remote", sent: "My grandparents live in a remote village.", trans: "Meus avós moram em uma vila remota." },
                        { term: "Urban", sent: "Traffic is a big problem in urban areas.", trans: "O trânsito é um grande problema em áreas urbanas." },
                        { term: "Residential", sent: "This is a residential street, so please drive slowly.", trans: "Esta é uma rua residencial, então por favor dirija devagar." },
                        { term: "Safe", sent: "It is a safe neighborhood for children to play.", trans: "É um bairro seguro para as crianças brincarem." }
                    ]
                }
            ],

            // --- 2C: PRACTICE ---
            drillGroups:[
                {
                    title: "Places & Features",
                    drills:[
                        { q: "A district or community within a town or city is a ________.", options:[{t: "Café", c: false}, {t: "Neighborhood", c: true}, {t: "Playground", c: false}, {t: "Pub", c: false}], type: "mcq" },
                        { q: "An area of a country or city, especially one characterized by a specific feature (like finance or shopping) is a ________.", options:[{t: "Suburb", c: false}, {t: "District", c: true}, {t: "Garden", c: false}, {t: "Amenities", c: false}], type: "mcq" },
                        { q: "An outlying residential district of a city is a ________.", options:[{t: "Suburb", c: true}, {t: "Center", c: false}, {t: "Pub", c: false}, {t: "Crime rate", c: false}], type: "mcq" },
                        { q: "An outdoor area provided for children to play in is a ________.", options:[{t: "Pub", c: false}, {t: "Community center", c: false}, {t: "Playground", c: true}, {t: "District", c: false}], type: "mcq" },
                        { q: "A single piece of land gardened collectively by a group of people is a ________.", options:[{t: "Community garden", c: true}, {t: "Café", c: false}, {t: "Playground", c: false}, {t: "Public transport", c: false}], type: "mcq" },
                        { q: "A small restaurant selling light meals and drinks is a ________.", options:[{t: "Café", c: true}, {t: "District", c: false}, {t: "Crime rate", c: false}, {t: "Garden", c: false}], type: "mcq" },
                        { q: "An establishment for the sale of beer and other drinks, and sometimes food, is a ________.", options:[{t: "Pub", c: true}, {t: "Suburb", c: false}, {t: "Center", c: false}, {t: "Playground", c: false}], type: "mcq" },
                        { q: "A place where people from a particular area can meet for social, educational, or recreational activities is a ________.", options:[{t: "Community center", c: true}, {t: "Café", c: false}, {t: "Pub", c: false}, {t: "District", c: false}], type: "mcq" },
                        { q: "A desirable or useful feature or facility of a building or place (like a pool or gym) is ________.", options:[{t: "Crime rate", c: false}, {t: "Amenities", c: true}, {t: "Suburbs", c: false}, {t: "Playgrounds", c: false}], type: "mcq" },
                        { q: "Places, amenities, or pieces of equipment provided for a particular purpose are ________.", options:[{t: "Cafés", c: false}, {t: "Facilities", c: true}, {t: "Districts", c: false}, {t: "Rates", c: false}], type: "mcq" },
                        { q: "Buses, trains, and other forms of transport that are available to everyone is ________.", options:[{t: "Public transport", c: true}, {t: "Neighborhood", c: false}, {t: "Amenities", c: false}, {t: "Community garden", c: false}], type: "mcq" },
                        { q: "The ratio of crimes in an area to the population of that area is the ________.", options:[{t: "Crime rate", c: true}, {t: "Public transport", c: false}, {t: "Suburb", c: false}, {t: "Pub", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "People & Events",
                    drills:[
                        { q: "A person living next door to or very near to you is your ________.", options:[{t: "Neighbor", c: true}, {t: "Event", c: false}, {t: "Meeting", c: false}, {t: "Festival", c: false}], type: "mcq" },
                        { q: "A person who lives somewhere permanently or on a long-term basis is a ________.", options:[{t: "Resident", c: true}, {t: "Fair", c: false}, {t: "Event", c: false}, {t: "Small talk", c: false}], type: "mcq" },
                        { q: "An inhabitant of a particular area or neighborhood is a ________.", options:[{t: "Local", c: true}, {t: "Gathering", c: false}, {t: "Market", c: false}, {t: "Meeting", c: false}], type: "mcq" },
                        { q: "A group of people organized for a joint purpose is an ________.", options:[{t: "Association", c: true}, {t: "Neighbor", c: false}, {t: "Fair", c: false}, {t: "Local", c: false}], type: "mcq" },
                        { q: "A physical retail market featuring foods sold directly by farmers to consumers is a ________.", options:[{t: "Farmer's market", c: true}, {t: "Meeting", c: false}, {t: "Association", c: false}, {t: "Small talk", c: false}], type: "mcq" },
                        { q: "A day or period of celebration, typically a religious commemoration or musical event, is a ________.", options:[{t: "Festival", c: true}, {t: "Resident", c: false}, {t: "Neighbor", c: false}, {t: "Local", c: false}], type: "mcq" },
                        { q: "A gathering of stalls and amusements for public entertainment is a ________.", options:[{t: "Fair", c: true}, {t: "Meeting", c: false}, {t: "Association", c: false}, {t: "Resident", c: false}], type: "mcq" },
                        { q: "An assembly or meeting, especially a social or festive one or one held for a specific purpose, is a ________.", options:[{t: "Gathering", c: true}, {t: "Neighbor", c: false}, {t: "Local", c: false}, {t: "Small talk", c: false}], type: "mcq" },
                        { q: "A thing that happens, especially one of importance, is an ________.", options:[{t: "Event", c: true}, {t: "Association", c: false}, {t: "Resident", c: false}, {t: "Market", c: false}], type: "mcq" },
                        { q: "An assembly of people for a particular purpose, especially for formal discussion, is a ________.", options:[{t: "Meeting", c: true}, {t: "Neighbor", c: false}, {t: "Small talk", c: false}, {t: "Festival", c: false}], type: "mcq" },
                        { q: "Polite conversation about unimportant or uncontroversial matters is ________.", options:[{t: "Small talk", c: true}, {t: "Event", c: false}, {t: "Meeting", c: false}, {t: "Fair", c: false}], type: "mcq" },
                        { q: "A group of citizens devoted to crime and vandalism prevention within a neighborhood is a ________.", options:[{t: "Neighborhood watch", c: true}, {t: "Festival", c: false}, {t: "Gathering", c: false}, {t: "Farmer's market", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Verbs & Adjectives",
                    drills:[
                        { q: "To participate in social activities; to mix socially with others is ________.", options:[{t: "To commute", c: false}, {t: "To socialize", c: true}, {t: "To volunteer", c: false}, {t: "Quiet", c: false}], type: "mcq" },
                        { q: "To freely offer to do something, usually without being paid, is ________.", options:[{t: "To socialize", c: false}, {t: "To commute", c: false}, {t: "To volunteer", c: true}, {t: "Lively", c: false}], type: "mcq" },
                        { q: "To travel some distance between one's home and place of work on a regular basis is ________.", options:[{t: "To commute", c: true}, {t: "To volunteer", c: false}, {t: "To socialize", c: false}, {t: "Safe", c: false}], type: "mcq" },
                        { q: "Making little or no noise is ________.", options:[{t: "Quiet", c: true}, {t: "Lively", c: false}, {t: "Urban", c: false}, {t: "Vibrant", c: false}], type: "mcq" },
                        { q: "Full of life and energy; active and outgoing is ________.", options:[{t: "Lively", c: true}, {t: "Quiet", c: false}, {t: "Remote", c: false}, {t: "Residential", c: false}], type: "mcq" },
                        { q: "Full of energy and enthusiasm; bright and striking is ________.", options:[{t: "Vibrant", c: true}, {t: "Remote", c: false}, {t: "Quiet", c: false}, {t: "Safe", c: false}], type: "mcq" },
                        { q: "Friendly or making one feel welcome or gladly received is ________.", options:[{t: "Welcoming", c: true}, {t: "Urban", c: false}, {t: "Remote", c: false}, {t: "Residential", c: false}], type: "mcq" },
                        { q: "Fitting in well with a person's needs, activities, and plans; practical is ________.", options:[{t: "Convenient", c: true}, {t: "Remote", c: false}, {t: "Quiet", c: false}, {t: "Lively", c: false}], type: "mcq" },
                        { q: "Situated far from the main centers of population; distant is ________.", options:[{t: "Remote", c: true}, {t: "Urban", c: false}, {t: "Convenient", c: false}, {t: "Vibrant", c: false}], type: "mcq" },
                        { q: "In, relating to, or characteristic of a city or town is ________.", options:[{t: "Urban", c: true}, {t: "Remote", c: false}, {t: "Quiet", c: false}, {t: "Residential", c: false}], type: "mcq" },
                        { q: "Designed for people to live in, rather than for commercial or industrial use, is ________.", options:[{t: "Residential", c: true}, {t: "Urban", c: false}, {t: "Lively", c: false}, {t: "Vibrant", c: false}], type: "mcq" },
                        { q: "Protected from or not exposed to danger or risk is ________.", options:[{t: "Safe", c: true}, {t: "Remote", c: false}, {t: "Urban", c: false}, {t: "Residential", c: false}], type: "mcq" }
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
                    title: "Describing the Area",
                    audio: "TTS: I live in a quiet neighborhood. It's a residential area. On the outskirts of the city. A strong sense of community. A great place to live. In the city center.",
                    explanation: "Phrases used to explain where your home is located and the general feeling of the area.<br><span style='color:var(--primary-blue); font-style:italic;'>(Frases usadas para explicar onde fica sua casa e a sensação geral da área.)</span>",
                    samples:[
                        { en: "<b>I live in a quiet neighborhood</b> near the park.", pt: "<span style='color:var(--primary-blue)'>(Moro em um bairro tranquilo perto do parque.)</span>" },
                        { en: "There are no factories here; <b>it's a residential area</b>.", pt: "<span style='color:var(--primary-blue)'>(Não há fábricas aqui; é uma área residencial.)</span>" },
                        { en: "My house is <b>on the outskirts of the city</b>.", pt: "<span style='color:var(--primary-blue)'>(Minha casa fica na periferia / nos arredores da cidade.)</span>" },
                        { en: "People help each other here, there is <b>a strong sense of community</b>.", pt: "<span style='color:var(--primary-blue)'>(As pessoas se ajudam aqui, há um forte senso de comunidade.)</span>" },
                        { en: "With all these parks, it is <b>a great place to live</b>.", pt: "<span style='color:var(--primary-blue)'>(Com todos esses parques, é um ótimo lugar para morar.)</span>" },
                        { en: "I like being busy, so I live <b>in the city center</b>.", pt: "<span style='color:var(--primary-blue)'>(Gosto de estar ocupado, então moro no centro da cidade.)</span>" }
                    ]
                },
                {
                    title: "Local Amenities",
                    audio: "TTS: Within walking distance. Just around the corner. Good public transport links. The best thing about living here is. Local shops. Downtown.",
                    explanation: "Phrases used to describe how close things are and the benefits of your location.<br><span style='color:var(--primary-blue); font-style:italic;'>(Frases usadas para descrever a proximidade das coisas e os benefícios de sua localização.)</span>",
                    samples:[
                        { en: "The supermarket is <b>within walking distance</b>.", pt: "<span style='color:var(--primary-blue)'>(O supermercado fica a uma curta distância a pé.)</span>" },
                        { en: "There is a great cafe <b>just around the corner</b>.", pt: "<span style='color:var(--primary-blue)'>(Há um ótimo café bem na esquina.)</span>" },
                        { en: "I don't need a car because there are <b>good public transport links</b>.", pt: "<span style='color:var(--primary-blue)'>(Não preciso de carro porque há boas conexões de transporte público.)</span>" },
                        { en: "<b>The best thing about living here is</b> the safety.", pt: "<span style='color:var(--primary-blue)'>(A melhor coisa de morar aqui é a segurança.)</span>" },
                        { en: "I prefer to buy my vegetables at the <b>local shops</b>.", pt: "<span style='color:var(--primary-blue)'>(Prefiro comprar meus vegetais nas lojas locais.)</span>" },
                        { en: "I take the subway to go <b>downtown</b> for work.", pt: "<span style='color:var(--primary-blue)'>(Eu pego o metrô para ir ao centro da cidade para trabalhar.)</span>" }
                    ]
                },
                {
                    title: "Interacting with Neighbors",
                    audio: "TTS: Make small talk. Borrow a cup of sugar. What's your neighborhood like? Is it a safe area? Look out for one another. Get along well with my neighbors.",
                    explanation: "Phrases for chatting with people who live near you and asking others about their area.<br><span style='color:var(--primary-blue); font-style:italic;'>(Frases para conversar com pessoas que moram perto de você e perguntar aos outros sobre a área deles.)</span>",
                    samples:[
                        { en: "I always <b>make small talk</b> with the baker.", pt: "<span style='color:var(--primary-blue)'>(Eu sempre jogo conversa fiada com o padeiro.)</span>" },
                        { en: "I ran out of sugar, so I went to <b>borrow a cup of sugar</b> from Mary.", pt: "<span style='color:var(--primary-blue)'>(Fiquei sem açúcar, então fui pegar uma xícara de açúcar emprestada com a Mary.)</span>" },
                        { en: "I'm moving soon. <b>What's your neighborhood like?</b>", pt: "<span style='color:var(--primary-blue)'>(Vou me mudar em breve. Como é o seu bairro?)</span>" },
                        { en: "<b>Is it a safe area?</b>", pt: "<span style='color:var(--primary-blue)'>(É uma área segura?)</span>" },
                        { en: "In this building, we all <b>look out for one another</b>.", pt: "<span style='color:var(--primary-blue)'>(Neste prédio, todos nós cuidamos uns dos outros.)</span>" },
                        { en: "I'm lucky that I <b>get along well with my neighbors</b>.", pt: "<span style='color:var(--primary-blue)'>(Tenho sorte de me dar bem com meus vizinhos.)</span>" }
                    ]
                }
            ],

            // --- 3B: DIALOGUES ---
            dialogueGroups:[
                {
                    title: "Dialogue 1: Describing the Area",
                    audio: "TTS: What's your neighborhood like? I live in a quiet neighborhood. It's a residential area. That sounds very peaceful.",
                    lines:[
                        { speaker: "John", text: "What's your neighborhood like?", pt: "(Como é o seu bairro?)" },
                        { speaker: "Lisa", text: "I live in a quiet neighborhood. It's a residential area. That sounds very peaceful.", pt: "(Eu moro em um bairro tranquilo. É uma área residencial. Isso parece muito pacífico.)" } // Flow fix
                    ]
                },
                {
                    title: "Dialogue 1: Describing the Area", // Fix flow
                    audio: "TTS: What's your neighborhood like? I live in a quiet neighborhood. It's a residential area. That sounds very peaceful.",
                    lines:[
                        { speaker: "John", text: "What's your neighborhood like?", pt: "(Como é o seu bairro?)" },
                        { speaker: "Lisa", text: "I live in a quiet neighborhood. It's a residential area.", pt: "(Eu moro em um bairro tranquilo. É uma área residencial.)" },
                        { speaker: "John", text: "That sounds very peaceful.", pt: "(Isso parece muito pacífico.)" } // Better for 2 chars
                    ]
                },
                {
                    title: "Dialogue 2: Location",
                    audio: "TTS: Do you live in the city center? No, my house is on the outskirts of the city. But everything is within walking distance. And there are good public transport links, too.",
                    lines:[
                        { speaker: "Mark", text: "Do you live in the city center?", pt: "(Você mora no centro da cidade?)" },
                        { speaker: "Emma", text: "No, my house is on the outskirts of the city. But everything is within walking distance. And there are good public transport links, too.", pt: "(Não, minha casa fica nos arredores da cidade. Mas tudo fica a uma curta distância a pé. E há boas conexões de transporte público também.)" }
                    ]
                },
                {
                    title: "Dialogue 3: Neighbors",
                    audio: "TTS: Is it a safe area? Yes, we always look out for one another here. That is nice. I get along well with my neighbors, too.",
                    lines:[
                        { speaker: "David", text: "Is it a safe area?", pt: "(É uma área segura?)" },
                        { speaker: "Chloe", text: "Yes, we always look out for one another here. That is nice. I get along well with my neighbors, too.", pt: "(Sim, sempre cuidamos uns dos outros aqui. Isso é legal. Eu me dou bem com meus vizinhos também.)" } // Flow fix
                    ]
                },
                {
                    title: "Dialogue 3: Neighbors", // Fix
                    audio: "TTS: Is it a safe area? Yes, we always look out for one another here. That is nice. I get along well with my neighbors, too.",
                    lines:[
                        { speaker: "David", text: "Is it a safe area?", pt: "(É uma área segura?)" },
                        { speaker: "Chloe", text: "Yes, we always look out for one another here.", pt: "(Sim, sempre cuidamos uns dos outros aqui.)" },
                        { speaker: "David", text: "That is nice. I get along well with my neighbors, too.", pt: "(Isso é legal. Eu me dou bem com meus vizinhos também.)" }
                    ]
                },
                {
                    title: "Dialogue 4: Community Vibe",
                    audio: "TTS: I think this is a great place to live. I agree. There is a strong sense of community. Yes, people always stop to make small talk.",
                    lines:[
                        { speaker: "Tom", text: "I think this is a great place to live.", pt: "(Eu acho que este é um ótimo lugar para se viver.)" },
                        { speaker: "Anna", text: "I agree. There is a strong sense of community. Yes, people always stop to make small talk.", pt: "(Eu concordo. Há um forte senso de comunidade. Sim, as pessoas sempre param para bater papo.)" } // Flow fix
                    ]
                },
                {
                    title: "Dialogue 4: Community Vibe", // Fix
                    audio: "TTS: I think this is a great place to live. I agree. There is a strong sense of community. Yes, people always stop to make small talk.",
                    lines:[
                        { speaker: "Tom", text: "I think this is a great place to live.", pt: "(Eu acho que este é um ótimo lugar para se viver.)" },
                        { speaker: "Anna", text: "I agree. There is a strong sense of community.", pt: "(Eu concordo. Há um forte senso de comunidade.)" },
                        { speaker: "Tom", text: "Yes, people always stop to make small talk.", pt: "(Sim, as pessoas sempre param para bater papo.)" }
                    ]
                },
                {
                    title: "Dialogue 5: Everyday Life",
                    audio: "TTS: I love having a bakery just around the corner. Me too. I prefer to buy things at the local shops. Me too. And if you forget something, you can always borrow a cup of sugar from me!",
                    lines:[
                        { speaker: "Luke", text: "I love having a bakery just around the corner.", pt: "(Eu amo ter uma padaria bem na esquina.)" },
                        { speaker: "Sophie", text: "Me too. I prefer to buy things at the local shops. Me too. And if you forget something, you can always borrow a cup of sugar from me!", pt: "(Eu também. Prefiro comprar coisas nas lojas locais. Eu também. E se você esquecer algo, pode sempre pegar uma xícara de açúcar emprestada comigo!)" } // Flow fix
                    ]
                },
                {
                    title: "Dialogue 5: Everyday Life", // Fix
                    audio: "TTS: I love having a bakery just around the corner. Me too. I prefer to buy things at the local shops. Me too. And if you forget something, you can always borrow a cup of sugar from me!",
                    lines:[
                        { speaker: "Luke", text: "I love having a bakery just around the corner.", pt: "(Eu amo ter uma padaria bem na esquina.)" },
                        { speaker: "Sophie", text: "Me too. I prefer to buy things at the local shops.", pt: "(Eu também. Prefiro comprar coisas nas lojas locais.)" },
                        { speaker: "Luke", text: "And if you forget something, you can always borrow a cup of sugar from me!", pt: "(E se você esquecer algo, pode sempre pegar uma xícara de açúcar emprestada comigo!)" }
                    ]
                },
                {
                    title: "Dialogue 6: City vs Suburb",
                    audio: "TTS: Do you like working downtown? Yes, but I wouldn't live there. The best thing about living here is the peace and quiet.",
                    lines:[
                        { speaker: "Mia", text: "Do you like working downtown?", pt: "(Você gosta de trabalhar no centro?)" },
                        { speaker: "Leo", text: "Yes, but I wouldn't live there. The best thing about living here is the peace and quiet.", pt: "(Sim, mas eu não moraria lá. A melhor coisa de morar aqui é a paz e o silêncio.)" }
                    ]
                }
            ],

            // --- 3C: PRACTICE ---
            grammarDrillGroups:[
                {
                    title: "Describing the Area",
                    drills:[
                        { q: "I live in a ________ neighborhood.", options:[{t: "quiet", c: true}, {t: "quietly", c: false}, {t: "silence", c: false}, {t: "calmly", c: false}], type: "mcq" },
                        { q: "It's a ________ area.", options:[{t: "reside", c: false}, {t: "residence", c: false}, {t: "residential", c: true}, {t: "resident", c: false}], type: "mcq" },
                        { q: "My house is on the ________ of the city.", options:[{t: "outskirts", c: true}, {t: "outdoors", c: false}, {t: "outside", c: false}, {t: "outward", c: false}], type: "mcq" },
                        { q: "There is a strong ________ of community here.", options:[{t: "sense", c: true}, {t: "feeling", c: false}, {t: "idea", c: false}, {t: "thought", c: false}], type: "mcq" },
                        { q: "It's a great place to ________.", options:[{t: "live", c: true}, {t: "life", c: false}, {t: "leave", c: false}, {t: "leaf", c: false}], type: "mcq" },
                        { q: "I work in the city ________.", options:[{t: "middle", c: false}, {t: "center", c: true}, {t: "core", c: false}, {t: "heart", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Local Amenities",
                    drills:[
                        { q: "The park is within ________ distance.", options:[{t: "walk", c: false}, {t: "walking", c: true}, {t: "walked", c: false}, {t: "walks", c: false}], type: "mcq" },
                        { q: "The café is just ________ the corner.", options:[{t: "on", c: false}, {t: "at", c: false}, {t: "in", c: false}, {t: "around", c: true}], type: "mcq" },
                        { q: "There are good public transport ________.", options:[{t: "connects", c: false}, {t: "joins", c: false}, {t: "links", c: true}, {t: "ties", c: false}], type: "mcq" },
                        { q: "The best thing ________ living here is the safety.", options:[{t: "of", c: false}, {t: "for", c: false}, {t: "about", c: true}, {t: "on", c: false}], type: "mcq" },
                        { q: "I buy my vegetables at the ________ shops.", options:[{t: "local", c: true}, {t: "locate", c: false}, {t: "location", c: false}, {t: "locally", c: false}], type: "mcq" },
                        { q: "I take the bus to go ________ for work.", options:[{t: "downcity", c: false}, {t: "downtown", c: true}, {t: "downplace", c: false}, {t: "downroad", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Interacting with Neighbors",
                    drills:[
                        { q: "I always make ________ talk with the baker.", options:[{t: "little", c: false}, {t: "tiny", c: false}, {t: "small", c: true}, {t: "mini", c: false}], type: "mcq" },
                        { q: "Can I ________ a cup of sugar?", options:[{t: "lend", c: false}, {t: "borrow", c: true}, {t: "take", c: false}, {t: "have", c: false}], type: "mcq" },
                        { q: "What's your neighborhood ________?", options:[{t: "look", c: false}, {t: "love", c: false}, {t: "as", c: false}, {t: "like", c: true}], type: "mcq" },
                        { q: "Is it a ________ area?", options:[{t: "safe", c: true}, {t: "save", c: false}, {t: "safety", c: false}, {t: "safely", c: false}], type: "mcq" },
                        { q: "We all look ________ for one another.", options:[{t: "in", c: false}, {t: "at", c: false}, {t: "out", c: true}, {t: "up", c: false}], type: "mcq" },
                        { q: "I get ________ well with my neighbors.", options:[{t: "along", c: true}, {t: "about", c: false}, {t: "around", c: false}, {t: "away", c: false}], type: "mcq" }
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
                { text: "What's your neighborhood like? ↘", audio: "TTS: What's your neighborhood like?" },
                { text: "I live in a quiet neighborhood on the outskirts of the city. ↘", audio: "TTS: I live in a quiet neighborhood on the outskirts of the city." },
                { text: "There is a strong sense of community here. ↘", audio: "TTS: There is a strong sense of community here." },
                { text: "Are there good public transport links? ↗", audio: "TTS: Are there good public transport links?" },
                { text: "Everything you need is within walking distance. ↘", audio: "TTS: Everything you need is within walking distance." },
                { text: "I usually make small talk with the locals at the café. ↘", audio: "TTS: I usually make small talk with the locals at the café." },
                { text: "The best thing about living here is the low crime rate. ↘", audio: "TTS: The best thing about living here is the low crime rate." },
                { text: "Do you get along well with your neighbors? ↗", audio: "TTS: Do you get along well with your neighbors?" },
                { text: "We all look out for one another in this suburb. ↘", audio: "TTS: We all look out for one another in this suburb." },
                { text: "I commute downtown for work every morning. ↘", audio: "TTS: I commute downtown for work every morning." }
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
                    audio: "TTS: Mark: Did you move to a new district? Anna: Yes, I bought a house in a quiet suburb. Mark: Are there good amenities? Anna: Yes, the supermarket is just around the corner.",
                    text: "Mark: Did you move to a new [district]?<br>Anna: Yes, I bought a house in a quiet [suburb].<br>Mark: Are there good [amenities]?<br>Anna: Yes, the supermarket is just [around] the corner."
                },
                {
                    type: "dropdown",
                    instruction: "Listen to the dialogue about community events.",
                    audio: "TTS: Leo: Are you going to the farmer's market this weekend? Emma: Yes, I love to buy fresh vegetables there. Leo: Me too. It is a very lively event. Emma: I agree. It's a great place to socialize with the neighbors.",
                    questions:[
                        { q: "Leo: Are you going to the [farmer's* | festival | resident] market this weekend?", a: "farmer's" },
                        { q: "Emma: Yes, I love to buy fresh[vegetables* | amenities | local] there.", a: "vegetables" },
                        { q: "Leo: Me too. It is a very [lively* | remote | quiet] event.", a: "lively" },
                        { q: "Emma: I agree. It's a great place to [socialize* | volunteer | commute] with the neighbors.", a: "socialize" }
                    ]
                },
                {
                    type: "audio-choice",
                    instruction: "Listen to the speaker. Why does he like his neighborhood?",
                    audio: "TTS: The best thing about living here is that it is a very safe residential area. The crime rate is extremely low, and we have a neighborhood watch program. We all look out for one another.",
                    options:[
                        { t: "He likes it because it is vibrant and urban.", c: false },
                        { t: "He likes it because the public transport is convenient.", c: false },
                        { t: "He likes it because it is safe and the neighbors care for each other.", c: true },
                        { t: "He likes it because he can borrow a cup of sugar.", c: false }
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
                    title: "Dialogue - The New Neighbor",
                    audio: "TTS: Sarah: Hello! You must be the new resident. I'm Sarah, I live next door. Tom: Hi Sarah, nice to meet you. I'm Tom. What's your neighborhood like? Sarah: It's a great place to live. It's a very safe, residential area. Tom: That's good to hear. Are there any local shops within walking distance? Sarah: Yes, there is a cafe and a bakery just around the corner. Tom: Perfect. I commute downtown for work, so I also need public transport. Sarah: The train station is very convenient. You will love it here!",
                    body: "<b>Sarah:</b> Hello! You must be the new [resident](tooltip:resident). I'm Sarah, I live next door.<br><b>Tom:</b> Hi Sarah, nice to meet you. I'm Tom.[What's your neighborhood like](tooltip:whats-neighborhood-like)?<br><b>Sarah:</b> It's[a great place to live](tooltip:great-place-live). It's a very [safe](tooltip:safe), [residential](tooltip:residential) area.<br><b>Tom:</b> That's good to hear. Are there any[local shops](tooltip:local-shops) [within walking distance](tooltip:within-walking-distance)?<br><b>Sarah:</b> Yes, there is a [cafe](tooltip:cafe) and a bakery [just around the corner](tooltip:just-around-corner).<br><b>Tom:</b> Perfect. I [commute](tooltip:commute) [downtown](tooltip:downtown) for work, so I also need [public transport](tooltip:public-transport).<br><b>Sarah:</b> The train station is very [convenient](tooltip:convenient). You will love it here!",
                    questions:[
                        { q: "What kind of area does Tom now live in?", options:[{t: "A loud and vibrant urban district.", c: false}, {t: "A safe, residential area.", c: true}, {t: "A remote village.", c: false}], type: "mcq" },
                        { q: "What is just around the corner?", options:[{t: "A cafe and a bakery.", c: true}, {t: "The train station.", c: false}, {t: "A community center.", c: false}], type: "mcq" },
                        { q: "Why does Tom need public transport?", options:[{t: "To go to the farmer's market.", c: false}, {t: "Because he commutes downtown for work.", c: true}, {t: "Because his car is broken.", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Dialogue - Community Meeting",
                    audio: "TTS: David: Are you going to the meeting at the community center tonight? Chloe: Yes, the neighborhood association is discussing the new playground. David: We really need better facilities for the kids. Chloe: I agree. I also want to talk about the neighborhood watch program. David: That's important. We must look out for one another. Chloe: Exactly. The crime rate is low, but we should keep it that way. David: True. It's a very welcoming and friendly neighborhood.",
                    body: "<b>David:</b> Are you going to the [meeting](tooltip:meeting) at the [community center](tooltip:community-center) tonight?<br><b>Chloe:</b> Yes, the neighborhood [association](tooltip:association) is discussing the new [playground](tooltip:playground).<br><b>David:</b> We really need better [facilities](tooltip:facilities) for the kids.<br><b>Chloe:</b> I agree. I also want to talk about the [neighborhood watch](tooltip:neighborhood-watch) program.<br><b>David:</b> That's important. We must [look out for one another](tooltip:look-out-another).<br><b>Chloe:</b> Exactly. The [crime rate](tooltip:crime-rate) is low, but we should keep it that way.<br><b>David:</b> True. It's a very [welcoming](tooltip:welcoming) and friendly[neighborhood](tooltip:neighborhood).",
                    questions:[
                        { q: "Where is the meeting taking place?", options:[{t: "At the town hall.", c: false}, {t: "At the pub.", c: false}, {t: "At the community center.", c: true}], type: "mcq" },
                        { q: "What is the neighborhood association discussing?", options:[{t: "A new farmer's market.", c: false}, {t: "A new playground for the kids.", c: true}, {t: "The public transport links.", c: false}], type: "mcq" },
                        { q: "Why does Chloe want to talk about the neighborhood watch?", options:[{t: "To start a book club.", c: false}, {t: "Because the crime rate is very high.", c: false}, {t: "To keep the neighborhood safe.", c: true}], type: "mcq" }
                    ]
                },
                {
                    title: "Email - Life in the Suburbs",
                    audio: "TTS: Subject: Loving the quiet life! Hi Mark, I hope you are well. I wanted to tell you about my new house on the outskirts of the city. I decided to move because the city center was too noisy. This suburb is very quiet and peaceful. The best thing about living here is the strong sense of community. Yesterday, I went to borrow a cup of sugar from my neighbor, and we ended up talking for an hour! We get along well with everyone. You should come visit me soon. Best, Lucas.",
                    body: "<b>From: Lucas</b><br><b>To: Mark</b><br>Subject: Loving the [quiet](tooltip:quiet) life!<br><br>Hi Mark,<br>I hope you are well. I wanted to tell you about my new house [on the outskirts of the city](tooltip:on-outskirts). I decided to move because [the city center](tooltip:in-city-center) was too noisy. This [suburb](tooltip:suburb) is very quiet and peaceful. [The best thing about living here is](tooltip:best-thing-about) the [strong sense of community](tooltip:sense-of-community). Yesterday, I went to[borrow a cup of sugar](tooltip:borrow-cup-sugar) from my [neighbor](tooltip:neighbor), and we ended up talking for an hour! We[get along well with my neighbors](tooltip:get-along-neighbors) and everyone else. You should come visit me soon.<br><br>Best, Lucas.",
                    questions:[
                        { q: "Where does Lucas live now?", options:[{t: "In the city center.", c: false}, {t: "On the outskirts of the city in a suburb.", c: true}, {t: "In a remote, isolated village.", c: false}], type: "mcq" },
                        { q: "What is the best thing about living there, according to Lucas?", options:[{t: "The strong sense of community.", c: true}, {t: "The public transport.", c: false}, {t: "The local pubs.", c: false}], type: "mcq" },
                        { q: "What did Lucas do yesterday?", options:[{t: "He volunteered at the community garden.", c: false}, {t: "He borrowed a cup of sugar and talked with his neighbor.", c: true}, {t: "He made small talk with the cashier.", c: false}], type: "mcq" }
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
                { type: "matching", instruction: "Match the places to their definitions.", pairs:[
                    { left: "Suburb", right: "Residential area outside the city", val: "1" },
                    { left: "Playground", right: "Area for kids to play", val: "2" },
                    { left: "Pub", right: "A bar that serves drinks and food", val: "3" },
                    { left: "Community garden", right: "Shared space for growing plants", val: "4" }
                ]},
                { type: "matching", instruction: "Match the people and events.", pairs:[
                    { left: "Neighbor", right: "Lives next door to you", val: "1" },
                    { left: "Local", right: "Person from the area", val: "2" },
                    { left: "Festival", right: "A period of celebration", val: "3" },
                    { left: "Small talk", right: "Casual, polite conversation", val: "4" }
                ]},
                { type: "matching", instruction: "Match the adjectives.", pairs:[
                    { left: "Lively", right: "Full of energy", val: "1" },
                    { left: "Convenient", right: "Practical and easy to reach", val: "2" },
                    { left: "Remote", right: "Far away from cities", val: "3" },
                    { left: "Urban", right: "Relating to a city", val: "4" }
                ]},
                { type: "matching", instruction: "Match the phrases.", pairs:[
                    { left: "Within", right: "walking distance", val: "1" },
                    { left: "Sense of", right: "community", val: "2" },
                    { left: "Public transport", right: "links", val: "3" },
                    { left: "Borrow a", right: "cup of sugar", val: "4" }
                ]},

                // --- WORD ORDER (5-14) ---
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "neighborhood / live / a / quiet / in / I / .", correct: "I live in a quiet neighborhood ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "area / a / It's / residential / .", correct: "It's a residential area ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "the / on / the / outskirts / of / city / .", correct: "On the outskirts of the city ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "strong / community / A / sense / of / .", correct: "A strong sense of community ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "to / place / great / A / live / .", correct: "A great place to live ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "distance / within / walking / Everything / is / .", correct: "Everything is within walking distance ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "just / corner / the / around / It's / .", correct: "It's just around the corner ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "make / small / I / talk / locals / with / .", correct: "I make small talk with locals ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "area / safe / a / Is / it / ?", correct: "Is it a safe area ?" },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "out / one / another / for / Look / .", correct: "Look out for one another ." },

                // --- CLICKABLE ERROR (15-24) ---
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "I live in the city [middle](error:center)." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "The shop is within walking [street](error:distance)." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "It's just around the [block](error:corner)." }, // "around the block" exists, but "around the corner" is the target phrase here
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "There are good public transport [lines](error:links)." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "The best [stuff](error:thing) about living here is the park." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "I go to the [regional](error:local) shops." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "I commute [downcity](error:downtown) for work." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "I make [tiny](error:small) talk with my neighbors." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "Can I [lend](error:borrow) a cup of sugar?" },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "We look [up](error:out) for one another." },

                // --- ODD ONE OUT (25-30) ---
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Places)", options:[{t: "Neighborhood", c: false}, {t: "Suburb", c: false}, {t: "District", c: false}, {t: "Resident", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Facilities)", options:[{t: "Playground", c: false}, {t: "Café", c: false}, {t: "Community center", c: false}, {t: "Crime rate", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Events)", options:[{t: "Festival", c: false}, {t: "Gathering", c: false}, {t: "Meeting", c: false}, {t: "Amenities", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Verbs)", options:[{t: "To socialize", c: false}, {t: "To volunteer", c: false}, {t: "To commute", c: false}, {t: "Remote", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Adjectives for a busy city)", options:[{t: "Lively", c: false}, {t: "Vibrant", c: false}, {t: "Urban", c: false}, {t: "Quiet", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Phrases)", options:[{t: "Small talk", c: false}, {t: "Look out for one another", c: false}, {t: "Borrow a cup of sugar", c: false}, {t: "Public transport", c: true}] },

                // --- TRUE / FALSE (31-35) ---
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "A 'suburb' is usually a very loud area right in the middle of a big city.", correct: "false"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "If a place is 'within walking distance', you don't need a car to get there.", correct: "true"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "To 'commute' means to travel regularly between work and home.", correct: "true"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "A high 'crime rate' means the neighborhood is very safe.", correct: "false"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "'Small talk' refers to a very long, serious conversation about politics.", correct: "false"}] },

                // --- MCQ (36-39) ---
                { type: "mcq", instruction: "Choose the correct phrase.<br>When neighbors protect each other and keep the area safe, they ________.", options:[{t: "borrow a cup of sugar", c: false}, {t: "look out for one another", c: true}, {t: "commute downtown", c: false}, {t: "volunteer", c: false}] },
                { type: "mcq", instruction: "Choose the correct word.<br>A village that is far away from big cities and hard to reach is ________.", options:[{t: "urban", c: false}, {t: "convenient", c: false}, {t: "remote", c: true}, {t: "vibrant", c: false}] },
                { type: "mcq", instruction: "Choose the correct noun.<br>Things that make a place comfortable to live in, like parks and pools, are called ________.", options:[{t: "districts", c: false}, {t: "amenities", c: true}, {t: "associations", c: false}, {t: "fairs", c: false}] },
                { type: "mcq", instruction: "Choose the correct phrase.<br>If you want to know about the area someone lives in, you ask: 'What's your ________ like?'", options:[{t: "crime rate", c: false}, {t: "neighborhood", c: true}, {t: "resident", c: false}, {t: "gathering", c: false}] },

                // --- CATEGORIZE (40) ---
                { type: "categorize", instruction: "Sort the adjectives into City Life and Quiet Suburbs.", 
                    categories:[{id: "city", name: "City Life"}, {id: "suburb", name: "Quiet Suburbs"}],
                    items:[
                        {text: "Urban", catId: "city"}, 
                        {text: "Vibrant", catId: "city"}, 
                        {text: "Lively", catId: "city"}, 
                        {text: "Residential", catId: "suburb"}, 
                        {text: "Safe", catId: "suburb"}, 
                        {text: "Remote", catId: "suburb"}
                    ] 
                }
            ]
        },

        // ======================================================
        // STEP 8: WRITING PRACTICE
        // ======================================================
        {
            title: "Writing Practice",
            instruction: "Write an email to a friend (5-7 sentences) describing your current neighborhood. Mention if it is urban or residential, what local amenities or places are nearby, and how well you get along with your neighbors.",
            example: "Hi John, I am really enjoying my new house! I live in a quiet neighborhood on the outskirts of the city. It is a very safe residential area. The best thing about living here is that the local shops are within walking distance. I also have a great cafe just around the corner. I get along well with my neighbors, and we always make small talk when we see each other. You should visit me soon! Best, Sarah.",
            prompts:[
                "State where you live (e.g., city center, outskirts, quiet neighborhood).",
                "Describe the area using adjectives (vibrant, residential, convenient).",
                "Mention at least two amenities (shops, pub, public transport links).",
                "Use a phrase about neighbors (make small talk, look out for one another)."
            ]
        },

        // ======================================================
        // STEP 9: FLASHCARDS
        // ======================================================
        {
            title: "Flashcards",
            items:[
                // 2A Items (36 items)
                { term: "Neighborhood", definition: "A district or community within a town or city.", defTrans: "Bairro / Vizinhança", example: "I live in a very friendly neighborhood.", audioFront: "TTS: Neighborhood", audioBack: "TTS: I live in a very friendly neighborhood." },
                { term: "District", definition: "An area of a country or city, especially one characterized by a specific feature.", defTrans: "Distrito / Região", example: "The financial district is full of tall buildings.", audioFront: "TTS: District", audioBack: "TTS: The financial district is full of tall buildings." },
                { term: "Suburb", definition: "An outlying residential district of a city.", defTrans: "Subúrbio", example: "We bought a house in a quiet suburb.", audioFront: "TTS: Suburb", audioBack: "TTS: We bought a house in a quiet suburb." },
                { term: "Playground", definition: "An outdoor area provided for children to play in.", defTrans: "Parquinho", example: "The kids are playing in the playground.", audioFront: "TTS: Playground", audioBack: "TTS: The kids are playing in the playground." },
                { term: "Community garden", definition: "A single piece of land gardened collectively by a group of people.", defTrans: "Horta comunitária", example: "We grow tomatoes in the community garden.", audioFront: "TTS: Community garden", audioBack: "TTS: We grow tomatoes in the community garden." },
                { term: "Café", definition: "A small restaurant selling light meals and drinks.", defTrans: "Cafeteria", example: "I drink espresso at the local cafe.", audioFront: "TTS: Café", audioBack: "TTS: I drink espresso at the local cafe." },
                { term: "Pub", definition: "An establishment for the sale of beer and other drinks.", defTrans: "Bar / Pub", example: "They watch football at the pub.", audioFront: "TTS: Pub", audioBack: "TTS: They watch football at the pub." },
                { term: "Community center", definition: "A place where people from a particular area can meet for activities.", defTrans: "Centro comunitário", example: "The community center offers yoga classes.", audioFront: "TTS: Community center", audioBack: "TTS: The community center offers yoga classes." },
                { term: "Amenities", definition: "Desirable or useful features or facilities of a building or place.", defTrans: "Comodidades", example: "This area has excellent local amenities.", audioFront: "TTS: Amenities", audioBack: "TTS: This area has excellent local amenities." },
                { term: "Facilities", definition: "Places, amenities, or pieces of equipment provided for a particular purpose.", defTrans: "Instalações", example: "The sports facilities are brand new.", audioFront: "TTS: Facilities", audioBack: "TTS: The sports facilities are brand new." },
                { term: "Public transport", definition: "Buses, trains, etc. that are available to the public.", defTrans: "Transporte público", example: "Good public transport makes commuting easy.", audioFront: "TTS: Public transport", audioBack: "TTS: Good public transport makes commuting easy." },
                { term: "Crime rate", definition: "The ratio of crimes in an area to the population of that area.", defTrans: "Taxa de criminalidade", example: "This city has a very low crime rate.", audioFront: "TTS: Crime rate", audioBack: "TTS: This city has a very low crime rate." },

                { term: "Neighbor", definition: "A person living next door to or very near to the speaker.", defTrans: "Vizinho(a)", example: "My neighbor helped me fix my car.", audioFront: "TTS: Neighbor", audioBack: "TTS: My neighbor helped me fix my car." },
                { term: "Resident", definition: "A person who lives somewhere permanently.", defTrans: "Residente", example: "Every resident must pay a maintenance fee.", audioFront: "TTS: Resident", audioBack: "TTS: Every resident must pay a maintenance fee." },
                { term: "Local", definition: "An inhabitant of a particular area.", defTrans: "Pessoa local / Morador", example: "The local showed me the best restaurant.", audioFront: "TTS: Local", audioBack: "TTS: The local showed me the best restaurant." },
                { term: "Association", definition: "A group of people organized for a joint purpose.", defTrans: "Associação", example: "The neighborhood association meets on Tuesdays.", audioFront: "TTS: Association", audioBack: "TTS: The neighborhood association meets on Tuesdays." },
                { term: "Farmer's market", definition: "A market featuring foods sold directly by farmers.", defTrans: "Feira de produtores", example: "I buy fresh vegetables at the farmer's market.", audioFront: "TTS: Farmer's market", audioBack: "TTS: I buy fresh vegetables at the farmer's market." },
                { term: "Festival", definition: "A period of celebration, typically for a specific reason.", defTrans: "Festival", example: "We danced at the summer street festival.", audioFront: "TTS: Festival", audioBack: "TTS: We danced at the summer street festival." },
                { term: "Fair", definition: "A gathering of stalls and amusements for public entertainment.", defTrans: "Feira (diversões)", example: "We played games and ate cotton candy at the fair.", audioFront: "TTS: Fair", audioBack: "TTS: We played games and ate cotton candy at the fair." },
                { term: "Gathering", definition: "An assembly or meeting, especially a social one.", defTrans: "Reunião (social)", example: "It was a small family gathering.", audioFront: "TTS: Gathering", audioBack: "TTS: It was a small family gathering." },
                { term: "Event", definition: "A thing that happens, especially one of importance.", defTrans: "Evento", example: "The charity concert is a big local event.", audioFront: "TTS: Event", audioBack: "TTS: The charity concert is a big local event." },
                { term: "Meeting", definition: "An assembly of people, especially for formal discussion.", defTrans: "Reunião (formal)", example: "The town hall meeting starts at 7 PM.", audioFront: "TTS: Meeting", audioBack: "TTS: The town hall meeting starts at 7 PM." },
                { term: "Small talk", definition: "Polite conversation about unimportant matters.", defTrans: "Conversa fiada", example: "I made small talk with the cashier.", audioFront: "TTS: Small talk", audioBack: "TTS: I made small talk with the cashier." },
                { term: "Neighborhood watch", definition: "A group of citizens devoted to crime prevention in their area.", defTrans: "Vigilância solidária", example: "The neighborhood watch program keeps us safe.", audioFront: "TTS: Neighborhood watch", audioBack: "TTS: The neighborhood watch program keeps us safe." },

                { term: "To socialize", definition: "To mix socially with others.", defTrans: "Socializar", example: "I like to socialize with my coworkers.", audioFront: "TTS: To socialize", audioBack: "TTS: I like to socialize with my coworkers." },
                { term: "To volunteer", definition: "To freely offer to do something, usually without pay.", defTrans: "Trabalhar como voluntário", example: "She decided to volunteer at the local library.", audioFront: "TTS: To volunteer", audioBack: "TTS: She decided to volunteer at the local library." },
                { term: "To commute", definition: "To travel some distance between home and work on a regular basis.", defTrans: "Deslocar-se (ida e volta ao trabalho)", example: "I commute to the city center every day.", audioFront: "TTS: To commute", audioBack: "TTS: I commute to the city center every day." },
                { term: "Quiet", definition: "Making little or no noise.", defTrans: "Silencioso(a)", example: "The streets are very quiet at night.", audioFront: "TTS: Quiet", audioBack: "TTS: The streets are very quiet at night." },
                { term: "Lively", definition: "Full of life and energy.", defTrans: "Animado(a)", example: "The city center is always lively and loud.", audioFront: "TTS: Lively", audioBack: "TTS: The city center is always lively and loud." },
                { term: "Vibrant", definition: "Full of energy and enthusiasm.", defTrans: "Vibrante", example: "It is a vibrant community with many artists.", audioFront: "TTS: Vibrant", audioBack: "TTS: It is a vibrant community with many artists." },
                { term: "Welcoming", definition: "Friendly or making one feel welcome.", defTrans: "Acolhedor(a)", example: "The people here are very welcoming.", audioFront: "TTS: Welcoming", audioBack: "TTS: The people here are very welcoming." },
                { term: "Convenient", definition: "Fitting in well with a person's needs; practical.", defTrans: "Conveniente", example: "Having a supermarket nearby is very convenient.", audioFront: "TTS: Convenient", audioBack: "TTS: Having a supermarket nearby is very convenient." },
                { term: "Remote", definition: "Situated far from the main centers of population.", defTrans: "Remoto(a)", example: "My grandparents live in a remote village.", audioFront: "TTS: Remote", audioBack: "TTS: My grandparents live in a remote village." },
                { term: "Urban", definition: "In, relating to, or characteristic of a city.", defTrans: "Urbano(a)", example: "Traffic is a big problem in urban areas.", audioFront: "TTS: Urban", audioBack: "TTS: Traffic is a big problem in urban areas." },
                { term: "Residential", definition: "Designed for people to live in.", defTrans: "Residencial", example: "This is a residential street, so please drive slowly.", audioFront: "TTS: Residential", audioBack: "TTS: This is a residential street, so please drive slowly." },
                { term: "Safe", definition: "Protected from or not exposed to danger.", defTrans: "Seguro(a)", example: "It is a safe neighborhood for children to play.", audioFront: "TTS: Safe", audioBack: "TTS: It is a safe neighborhood for children to play." },

                // 3A Items (18 items)
                { term: "I live in a quiet neighborhood", definition: "Describing a peaceful area where you reside.", defTrans: "Moro em um bairro tranquilo", example: "I live in a quiet neighborhood near the park.", audioFront: "TTS: I live in a quiet neighborhood", audioBack: "TTS: I live in a quiet neighborhood near the park." },
                { term: "It's a residential area", definition: "Stating that the place is mostly for housing.", defTrans: "É uma área residencial", example: "There are no factories here; it's a residential area.", audioFront: "TTS: It's a residential area", audioBack: "TTS: There are no factories here; it's a residential area." },
                { term: "On the outskirts of the city", definition: "Located on the outer edge of a town or city.", defTrans: "Na periferia / nos arredores da cidade", example: "My house is on the outskirts of the city.", audioFront: "TTS: On the outskirts of the city", audioBack: "TTS: My house is on the outskirts of the city." },
                { term: "A strong sense of community", definition: "A feeling of belonging and mutual support among residents.", defTrans: "Um forte senso de comunidade", example: "People help each other here, there is a strong sense of community.", audioFront: "TTS: A strong sense of community", audioBack: "TTS: People help each other here, there is a strong sense of community." },
                { term: "A great place to live", definition: "A positive endorsement of a residential location.", defTrans: "Um ótimo lugar para morar", example: "With all these parks, it is a great place to live.", audioFront: "TTS: A great place to live", audioBack: "TTS: With all these parks, it is a great place to live." },
                { term: "In the city center", definition: "Located in the bustling heart of an urban area.", defTrans: "No centro da cidade", example: "I like being busy, so I live in the city center.", audioFront: "TTS: In the city center", audioBack: "TTS: I like being busy, so I live in the city center." },
                
                { term: "Within walking distance", definition: "Close enough to reach on foot easily.", defTrans: "A uma curta distância a pé", example: "The supermarket is within walking distance.", audioFront: "TTS: Within walking distance", audioBack: "TTS: The supermarket is within walking distance." },
                { term: "Just around the corner", definition: "Very close; located just past the nearest intersection.", defTrans: "Logo virando a esquina", example: "There is a great cafe just around the corner.", audioFront: "TTS: Just around the corner", audioBack: "TTS: There is a great cafe just around the corner." },
                { term: "Good public transport links", definition: "Having efficient buses, trains, or subways nearby.", defTrans: "Boas conexões de transporte público", example: "I don't need a car because there are good public transport links.", audioFront: "TTS: Good public transport links", audioBack: "TTS: I don't need a car because there are good public transport links." },
                { term: "The best thing about living here is", definition: "Highlighting the top benefit of your location.", defTrans: "A melhor coisa de morar aqui é", example: "The best thing about living here is the safety.", audioFront: "TTS: The best thing about living here is", audioBack: "TTS: The best thing about living here is the safety." },
                { term: "Local shops", definition: "Small businesses located in a neighborhood.", defTrans: "Lojas locais", example: "I prefer to buy my vegetables at the local shops.", audioFront: "TTS: Local shops", audioBack: "TTS: I prefer to buy my vegetables at the local shops." },
                { term: "Downtown", definition: "In, to, or toward the central area of a city.", defTrans: "Centro da cidade (EUA)", example: "I take the subway to go downtown for work.", audioFront: "TTS: Downtown", audioBack: "TTS: I take the subway to go downtown for work." },
                
                { term: "Make small talk", definition: "To engage in polite conversation about unimportant things.", defTrans: "Jogar conversa fiada", example: "I always make small talk with the baker.", audioFront: "TTS: Make small talk", audioBack: "TTS: I always make small talk with the baker." },
                { term: "Borrow a cup of sugar", definition: "A classic idiom for asking a neighbor for a small favor.", defTrans: "Pegar uma xícara de açúcar emprestada", example: "I went to borrow a cup of sugar from Mary.", audioFront: "TTS: Borrow a cup of sugar", audioBack: "TTS: I went to borrow a cup of sugar from Mary." },
                { term: "What's your neighborhood like?", definition: "Asking someone to describe the area they live in.", defTrans: "Como é o seu bairro?", example: "I'm moving soon. What's your neighborhood like?", audioFront: "TTS: What's your neighborhood like?", audioBack: "TTS: I'm moving soon. What's your neighborhood like?" },
                { term: "Is it a safe area?", definition: "Asking about the crime levels in a location.", defTrans: "É uma área segura?", example: "Is it a safe area?", audioFront: "TTS: Is it a safe area?", audioBack: "TTS: Is it a safe area?" },
                { term: "Look out for one another", definition: "To care for and protect each other.", defTrans: "Cuidar uns dos outros", example: "In this building, we all look out for one another.", audioFront: "TTS: Look out for one another", audioBack: "TTS: In this building, we all look out for one another." },
                { term: "Get along well with my neighbors", definition: "To have a friendly relationship with the people living near you.", defTrans: "Me dar bem com meus vizinhos", example: "I'm lucky that I get along well with my neighbors.", audioFront: "TTS: Get along well with my neighbors", audioBack: "TTS: I'm lucky that I get along well with my neighbors." }
            ]
        }
    ],

    // ======================================================
    // GLOSSARY (All 54 items + Context words)
    // ======================================================
    glossary:[
        // 2A: Places & Features
        { topic: "Places", term: "neighborhood", definition: "A district or community within a town or city.", translation: "Bairro / Vizinhança" },
        { topic: "Places", term: "district", definition: "An area of a country or city.", translation: "Distrito / Região" },
        { topic: "Places", term: "suburb", definition: "An outlying residential district of a city.", translation: "Subúrbio" },
        { topic: "Places", term: "playground", definition: "An outdoor area provided for children to play in.", translation: "Parquinho" },
        { topic: "Places", term: "community-garden", definition: "A piece of land gardened collectively.", translation: "Horta comunitária" },
        { topic: "Places", term: "cafe", definition: "A small restaurant selling light meals and drinks.", translation: "Cafeteria" },
        { topic: "Places", term: "pub", definition: "An establishment for the sale of beer and other drinks.", translation: "Bar / Pub" },
        { topic: "Places", term: "community-center", definition: "A place where people can meet for activities.", translation: "Centro comunitário" },
        { topic: "Features", term: "amenities", definition: "Useful features or facilities of a place.", translation: "Comodidades" },
        { topic: "Features", term: "facilities", definition: "Places or equipment provided for a particular purpose.", translation: "Instalações" },
        { topic: "Features", term: "public-transport", definition: "Buses, trains, etc. available to the public.", translation: "Transporte público" },
        { topic: "Features", term: "crime-rate", definition: "The ratio of crimes in an area.", translation: "Taxa de criminalidade" },

        // 2A: People & Events
        { topic: "People", term: "neighbor", definition: "A person living next door.", translation: "Vizinho(a)" },
        { topic: "People", term: "resident", definition: "A person who lives somewhere permanently.", translation: "Residente / Morador" },
        { topic: "People", term: "local", definition: "An inhabitant of a particular area.", translation: "Pessoa local" },
        { topic: "People", term: "association", definition: "A group of people organized for a joint purpose.", translation: "Associação" },
        { topic: "Events", term: "farmers-market", definition: "A market featuring foods sold by farmers.", translation: "Feira de produtores" },
        { topic: "Events", term: "festival", definition: "A period of celebration.", translation: "Festival" },
        { topic: "Events", term: "fair", definition: "A gathering of stalls and amusements.", translation: "Feira" },
        { topic: "Events", term: "gathering", definition: "An assembly or meeting.", translation: "Reunião / Encontro" },
        { topic: "Events", term: "event", definition: "A thing that happens, especially one of importance.", translation: "Evento" },
        { topic: "Events", term: "meeting", definition: "An assembly of people for discussion.", translation: "Reunião" },
        { topic: "Interactions", term: "small-talk", definition: "Polite conversation about unimportant matters.", translation: "Conversa fiada" },
        { topic: "Interactions", term: "neighborhood-watch", definition: "Citizens devoted to crime prevention in their area.", translation: "Vigilância solidária" },

        // 2A: Verbs & Adjectives
        { topic: "Verbs", term: "to-socialize", definition: "To mix socially with others.", translation: "Socializar" },
        { topic: "Verbs", term: "to-volunteer", definition: "To freely offer to do something.", translation: "Ser voluntário" },
        { topic: "Verbs", term: "to-commute", definition: "To travel regularly between home and work.", translation: "Deslocar-se (ir ao trabalho)" },
        { topic: "Adjectives", term: "quiet", definition: "Making little or no noise.", translation: "Silencioso(a)" },
        { topic: "Adjectives", term: "lively", definition: "Full of life and energy.", translation: "Animado(a)" },
        { topic: "Adjectives", term: "vibrant", definition: "Full of energy and enthusiasm.", translation: "Vibrante" },
        { topic: "Adjectives", term: "welcoming", definition: "Friendly or making one feel welcome.", translation: "Acolhedor(a)" },
        { topic: "Adjectives", term: "convenient", definition: "Fitting in well with a person's needs.", translation: "Conveniente" },
        { topic: "Adjectives", term: "remote", definition: "Situated far from main centers.", translation: "Remoto(a)" },
        { topic: "Adjectives", term: "urban", definition: "Relating to a city.", translation: "Urbano(a)" },
        { topic: "Adjectives", term: "residential", definition: "Designed for people to live in.", translation: "Residencial" },
        { topic: "Adjectives", term: "safe", definition: "Protected from danger.", translation: "Seguro(a)" },

        // 3A: Expressions
        { topic: "Expressions", term: "quiet-neighborhood", definition: "Describing a peaceful area where you reside.", translation: "Moro em um bairro tranquilo" },
        { topic: "Expressions", term: "residential-area", definition: "Stating that the place is mostly for housing.", translation: "É uma área residencial" },
        { topic: "Expressions", term: "on-outskirts", definition: "Located on the outer edge of a city.", translation: "Nos arredores da cidade" },
        { topic: "Expressions", term: "sense-of-community", definition: "A feeling of mutual support among residents.", translation: "Forte senso de comunidade" },
        { topic: "Expressions", term: "great-place-live", definition: "A positive endorsement of a location.", translation: "Ótimo lugar para morar" },
        { topic: "Expressions", term: "in-city-center", definition: "Located in the heart of an urban area.", translation: "No centro da cidade" },
        
        { topic: "Expressions", term: "within-walking-distance", definition: "Close enough to reach on foot easily.", translation: "A uma curta distância a pé" },
        { topic: "Expressions", term: "just-around-corner", definition: "Very close; past the nearest intersection.", translation: "Logo virando a esquina" },
        { topic: "Expressions", term: "public-transport-links", definition: "Having efficient transport nearby.", translation: "Boas conexões de transporte público" },
        { topic: "Expressions", term: "best-thing-about", definition: "Highlighting the top benefit of your location.", translation: "A melhor coisa de morar aqui é" },
        { topic: "Expressions", term: "local-shops", definition: "Small businesses located in a neighborhood.", translation: "Lojas locais" },
        { topic: "Expressions", term: "downtown", definition: "In or toward the central area of a city.", translation: "Centro da cidade" },
        
        { topic: "Expressions", term: "make-small-talk", definition: "To engage in polite conversation.", translation: "Jogar conversa fiada" },
        { topic: "Expressions", term: "borrow-cup-sugar", definition: "Idiom for asking a neighbor for a favor.", translation: "Pegar xícara de açúcar emprestada" },
        { topic: "Expressions", term: "whats-neighborhood-like", definition: "Asking to describe the area.", translation: "Como é o seu bairro?" },
        { topic: "Expressions", term: "safe-area", definition: "Asking about crime levels.", translation: "É uma área segura?" },
        { topic: "Expressions", term: "look-out-another", definition: "To care for and protect each other.", translation: "Cuidar uns dos outros" },
        { topic: "Expressions", term: "get-along-neighbors", definition: "To have a friendly relationship with neighbors.", translation: "Me dar bem com meus vizinhos" },

        // Additional Context Words
        { topic: "Context", term: "atmosphere", definition: "The pervading tone or mood of a place.", translation: "Atmosfera / Clima (de um lugar)" },
        { topic: "Context", term: "community", definition: "A group of people living in the same place or having a particular characteristic in common.", translation: "Comunidade" },
        { topic: "Context", term: "tip", definition: "A small but useful piece of practical advice.", translation: "Dica" }
    ]
});