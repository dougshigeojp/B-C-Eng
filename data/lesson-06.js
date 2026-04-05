/**
 * English Block Assembling - LESSON DATA: Topic 2
/**
 * English Block Assembling - LESSON DATA: Topic 6
 * Topic: Weather and Seasons
 * Level: Upper A2 ~ Lower B1
 */

window.initLesson({
    // --- METADATA ---
    lessonId: "lesson-6",
    block: "1",
    topicTitle: "Weather and Seasons",

    steps:[
        // ======================================================
        // STEP 0: INTRO & CAN-DO
        // ======================================================
        {
            title: "Intro & Can-Do",
            objectives: "• Describe good and bad [weather](tooltip:weather) conditions.<br>• Ask about the [temperature](tooltip:temperature) and the [forecast](tooltip:forecast).<br>• Talk about the four [seasons](tooltip:season) and related activities.<br>• Identify appropriate[clothing](tooltip:clothing) for different climates.",
            welcome: "Welcome to Lesson 6! The weather is a classic topic for small talk everywhere in the world. In this lesson, you will learn the essential vocabulary to describe if it is sunny, raining, or freezing outside. We will also talk about the four seasons, checking the forecast, and deciding what clothes to wear. Let's get started!",
            audio: {
                objectives: "TTS: In this lesson, you will learn to: Describe good and bad weather conditions. Ask about the temperature and the forecast. Talk about the four seasons and related activities. Identify appropriate clothing for different climates.",
                welcome: "TTS: Welcome to Lesson 6! The weather is a classic topic for small talk everywhere in the world. In this lesson, you will learn the essential vocabulary to describe if it is sunny, raining, or freezing outside. We will also talk about the four seasons, checking the forecast, and deciding what clothes to wear. Let's get started!"
            }
        },

        // ======================================================
        // STEP 1: CONTEXT DIALOGUE
        // ======================================================
        {
            title: "Context Dialogue",
            context: "Emma and Liam are looking out the window and discussing what to do today.",
            contextAudio: "TTS: Emma: What's the weather like outside? I have to leave soon. Liam: It is cloudy and quite windy. Emma: Oh, really? Is it going to rain today? Liam: The forecast said it might rain later this afternoon. It looks like rain right now. Emma: Should I take my umbrella? Liam: Definitely. You should also wear a jacket because the temperature is dropping. Emma: It's a shame. Yesterday was a beautiful day, and the sun was shining. Liam: I know. My favorite season is summer because we don't have to worry about storms. Emma: I agree. Over the winter, it gets freezing cold. Thanks for the heads-up!",
            dialogue:[
                { speaker: "Emma", text: "[What's the weather like](tooltip:whats-weather-like) outside? I have to leave soon." },
                { speaker: "Liam", text: "It is [cloudy](tooltip:cloudy) and quite [windy](tooltip:windy)." },
                { speaker: "Emma", text: "Oh, really? [Is it going to rain today](tooltip:is-it-going-to-rain)?" },
                { speaker: "Liam", text: "The [forecast](tooltip:forecast) said it might rain later this afternoon. [It looks like rain](tooltip:looks-like-rain) right now." },
                { speaker: "Emma", text: "Should I take my [umbrella](tooltip:umbrella)?" },
                { speaker: "Liam", text: "Definitely. You should also wear a [jacket](tooltip:jacket) because the[temperature](tooltip:temperature) is dropping." },
                { speaker: "Emma", text: "It's a shame. Yesterday was a [beautiful day](tooltip:beautiful-day), and [the sun was shining](tooltip:sun-is-shining)." },
                { speaker: "Liam", text: "I know.[My favorite season is](tooltip:favorite-season) [summer](tooltip:summer) because we don't have to worry about[storms](tooltip:storm)." },
                { speaker: "Emma", text: "I agree.[Over the winter](tooltip:over-winter), it gets freezing [cold](tooltip:cold). Thanks for the heads-up!" }
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
                    title: "Weather Nouns & Seasons",
                    audio: "TTS: Sun. Rain. Snow. Wind. Cloud. Fog. Storm. Thunderstorm. Spring. Summer. Autumn. Winter.",
                    items:[
                        { term: "Sun", trans: "Sol" },
                        { term: "Rain", trans: "Chuva" },
                        { term: "Snow", trans: "Neve" },
                        { term: "Wind", trans: "Vento" },
                        { term: "Cloud", trans: "Nuvem" },
                        { term: "Fog", trans: "Névoa / Neblina" },
                        { term: "Storm", trans: "Tempestade" },
                        { term: "Thunderstorm", trans: "Tempestade de raios e trovões" },
                        { term: "Spring", trans: "Primavera" },
                        { term: "Summer", trans: "Verão" },
                        { term: "Autumn (Fall)", trans: "Outono" },
                        { term: "Winter", trans: "Inverno" }
                    ]
                },
                {
                    title: "Terms & Verbs",
                    audio: "TTS: Weather. Forecast. Temperature. Degree. Climate. To rain. To snow. To shine. To freeze. To pour. Hot. Cold.",
                    items:[
                        { term: "Weather", trans: "Clima / Tempo (condições atuais)" },
                        { term: "Forecast", trans: "Previsão do tempo" },
                        { term: "Temperature", trans: "Temperatura" },
                        { term: "Degree", trans: "Grau (Celsius ou Fahrenheit)" },
                        { term: "Climate", trans: "Clima (condições a longo prazo)" },
                        { term: "To rain", trans: "Chover" },
                        { term: "To snow", trans: "Nevar" },
                        { term: "To shine", trans: "Brilhar" },
                        { term: "To freeze", trans: "Congelar" },
                        { term: "To pour", trans: "Chover forte / Despejar" },
                        { term: "Hot", trans: "Quente / Calor" },
                        { term: "Cold", trans: "Frio" }
                    ]
                },
                {
                    title: "Adjectives & Clothing",
                    audio: "TTS: Sunny. Rainy. Windy. Cloudy. Humid. Jacket. Coat. Sweater. Boots. Umbrella. Sunglasses. Shorts.",
                    items:[
                        { term: "Sunny", trans: "Ensolarado" },
                        { term: "Rainy", trans: "Chuvoso" },
                        { term: "Windy", trans: "Ventoso / Com vento" },
                        { term: "Cloudy", trans: "Nublado" },
                        { term: "Humid", trans: "Úmido" },
                        { term: "Jacket", trans: "Jaqueta" },
                        { term: "Coat", trans: "Casaco" },
                        { term: "Sweater", trans: "Suéter" },
                        { term: "Boots", trans: "Botas" },
                        { term: "Umbrella", trans: "Guarda-chuva" },
                        { term: "Sunglasses", trans: "Óculos de sol" },
                        { term: "Shorts", trans: "Bermuda / Shorts" }
                    ]
                }
            ],

            // --- 2B: EXAMPLES ---
            exampleGroups:[
                {
                    title: "Weather Nouns & Seasons",
                    audio: "TTS: The sun is very bright today. We need some rain for the plants. The kids are playing in the snow. The strong wind blew my hat away. Look at that dark cloud in the sky. The fog makes it hard to see the road. A big storm is coming tonight. The thunderstorm scared my dog. Flowers bloom in the spring. We go to the beach in the summer. The leaves turn orange in the autumn. It gets very dark early in the winter.",
                    items:[
                        { term: "Sun", sent: "The sun is very bright today.", trans: "O sol está muito brilhante hoje." },
                        { term: "Rain", sent: "We need some rain for the plants.", trans: "Precisamos de chuva para as plantas." },
                        { term: "Snow", sent: "The kids are playing in the snow.", trans: "As crianças estão brincando na neve." },
                        { term: "Wind", sent: "The strong wind blew my hat away.", trans: "O vento forte levou meu chapéu." },
                        { term: "Cloud", sent: "Look at that dark cloud in the sky.", trans: "Olhe aquela nuvem escura no céu." },
                        { term: "Fog", sent: "The fog makes it hard to see the road.", trans: "A neblina torna difícil ver a estrada." },
                        { term: "Storm", sent: "A big storm is coming tonight.", trans: "Uma grande tempestade está chegando esta noite." },
                        { term: "Thunderstorm", sent: "The thunderstorm scared my dog.", trans: "A tempestade de trovões assustou meu cachorro." },
                        { term: "Spring", sent: "Flowers bloom in the spring.", trans: "As flores desabrocham na primavera." },
                        { term: "Summer", sent: "We go to the beach in the summer.", trans: "Nós vamos à praia no verão." },
                        { term: "Autumn (Fall)", sent: "The leaves turn orange in the autumn.", trans: "As folhas ficam laranjas no outono." },
                        { term: "Winter", sent: "It gets very dark early in the winter.", trans: "Fica escuro muito cedo no inverno." }
                    ]
                },
                {
                    title: "Terms & Verbs",
                    audio: "TTS: The weather is perfect for a walk. I checked the forecast on my phone. The temperature dropped overnight. It is twenty degrees outside. The climate here is usually dry. It is going to rain this afternoon. It rarely snows in my city. The sun will shine all day tomorrow. Water will freeze if it gets too cold. We can't go out because it is going to pour. The coffee is too hot to drink right now. I forgot my gloves and my hands are cold.",
                    items:[
                        { term: "Weather", sent: "The weather is perfect for a walk.", trans: "O tempo está perfeito para uma caminhada." },
                        { term: "Forecast", sent: "I checked the forecast on my phone.", trans: "Eu verifiquei a previsão (do tempo) no meu celular." },
                        { term: "Temperature", sent: "The temperature dropped overnight.", trans: "A temperatura caiu durante a noite." },
                        { term: "Degree", sent: "It is twenty degrees outside.", trans: "Está vinte graus lá fora." },
                        { term: "Climate", sent: "The climate here is usually dry.", trans: "O clima aqui geralmente é seco." },
                        { term: "To rain", sent: "It is going to rain this afternoon.", trans: "Vai chover esta tarde." },
                        { term: "To snow", sent: "It rarely snows in my city.", trans: "Raramente neva na minha cidade." },
                        { term: "To shine", sent: "The sun will shine all day tomorrow.", trans: "O sol vai brilhar o dia todo amanhã." },
                        { term: "To freeze", sent: "Water will freeze if it gets too cold.", trans: "A água vai congelar se ficar muito frio." },
                        { term: "To pour", sent: "We can't go out because it is going to pour.", trans: "Não podemos sair porque vai chover forte." },
                        { term: "Hot", sent: "The coffee is too hot to drink right now.", trans: "O café está muito quente para beber agora." },
                        { term: "Cold", sent: "I forgot my gloves and my hands are cold.", trans: "Eu esqueci minhas luvas e minhas mãos estão frias." }
                    ]
                },
                {
                    title: "Adjectives & Clothing",
                    audio: "TTS: It is a sunny day, perfect for the beach. I don't like driving in rainy weather. The windy weather messed up my hair. It is a cloudy day, but it's not raining. The air feels very humid today. You need a light jacket for the evening. Put on your heavy coat before going out. My grandmother knitted this warm sweater. She wore her rain boots in the mud. Don't forget your umbrella, it might rain. I wear sunglasses to protect my eyes. He wore shorts because it was a hot day.",
                    items:[
                        { term: "Sunny", sent: "It is a sunny day, perfect for the beach.", trans: "É um dia ensolarado, perfeito para a praia." },
                        { term: "Rainy", sent: "I don't like driving in rainy weather.", trans: "Eu não gosto de dirigir em tempo chuvoso." },
                        { term: "Windy", sent: "The windy weather messed up my hair.", trans: "O tempo ventoso bagunçou meu cabelo." },
                        { term: "Cloudy", sent: "It is a cloudy day, but it's not raining.", trans: "É um dia nublado, mas não está chovendo." },
                        { term: "Humid", sent: "The air feels very humid today.", trans: "O ar está muito úmido hoje." },
                        { term: "Jacket", sent: "You need a light jacket for the evening.", trans: "Você precisa de uma jaqueta leve para a noite." },
                        { term: "Coat", sent: "Put on your heavy coat before going out.", trans: "Coloque seu casaco pesado antes de sair." },
                        { term: "Sweater", sent: "My grandmother knitted this warm sweater.", trans: "Minha avó tricotou este suéter quente." },
                        { term: "Boots", sent: "She wore her rain boots in the mud.", trans: "Ela usou suas botas de chuva na lama." },
                        { term: "Umbrella", sent: "Don't forget your umbrella, it might rain.", trans: "Não esqueça seu guarda-chuva, pode chover." },
                        { term: "Sunglasses", sent: "I wear sunglasses to protect my eyes.", trans: "Eu uso óculos de sol para proteger meus olhos." },
                        { term: "Shorts", sent: "He wore shorts because it was a hot day.", trans: "Ele usou bermuda porque estava um dia quente." }
                    ]
                }
            ],

            // --- 2C: PRACTICE ---
            drillGroups:[
                {
                    title: "Weather Nouns & Seasons",
                    drills:[
                        { q: "The star around which the earth orbits is the ________.", options:[{t: "Moon", c: false}, {t: "Sun", c: true}, {t: "Cloud", c: false}, {t: "Fog", c: false}], type: "mcq" },
                        { q: "Water falling in drops from clouds is called ________.", options:[{t: "Snow", c: false}, {t: "Wind", c: false}, {t: "Rain", c: true}, {t: "Summer", c: false}], type: "mcq" },
                        { q: "Frozen water vapor falling as white flakes is ________.", options:[{t: "Rain", c: false}, {t: "Snow", c: true}, {t: "Cloud", c: false}, {t: "Storm", c: false}], type: "mcq" },
                        { q: "The natural movement of the air is ________.", options:[{t: "Fog", c: false}, {t: "Sun", c: false}, {t: "Wind", c: true}, {t: "Spring", c: false}], type: "mcq" },
                        { q: "A visible mass of condensed water vapor floating in the sky is a ________.", options:[{t: "Cloud", c: true}, {t: "Sun", c: false}, {t: "Wind", c: false}, {t: "Autumn", c: false}], type: "mcq" },
                        { q: "A thick cloud of tiny water droplets close to the ground is ________.", options:[{t: "Storm", c: false}, {t: "Fog", c: true}, {t: "Snow", c: false}, {t: "Winter", c: false}], type: "mcq" },
                        { q: "Violent weather with strong winds and rain is a ________.", options:[{t: "Storm", c: true}, {t: "Sun", c: false}, {t: "Fog", c: false}, {t: "Spring", c: false}], type: "mcq" },
                        { q: "A storm with thunder and lightning is a ________.", options:[{t: "Thunderstorm", c: true}, {t: "Fog", c: false}, {t: "Cloud", c: false}, {t: "Wind", c: false}], type: "mcq" },
                        { q: "The season after winter, when plants begin to grow, is ________.", options:[{t: "Summer", c: false}, {t: "Autumn", c: false}, {t: "Spring", c: true}, {t: "Winter", c: false}], type: "mcq" },
                        { q: "The warmest season of the year is ________.", options:[{t: "Winter", c: false}, {t: "Spring", c: false}, {t: "Autumn", c: false}, {t: "Summer", c: true}], type: "mcq" },
                        { q: "The season when leaves fall from the trees is ________.", options:[{t: "Summer", c: false}, {t: "Winter", c: false}, {t: "Autumn (Fall)", c: true}, {t: "Spring", c: false}], type: "mcq" },
                        { q: "The coldest season of the year is ________.", options:[{t: "Spring", c: false}, {t: "Autumn", c: false}, {t: "Winter", c: true}, {t: "Summer", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Terms & Verbs",
                    drills:[
                        { q: "The state of the atmosphere at a place and time is the ________.", options:[{t: "Forecast", c: false}, {t: "Weather", c: true}, {t: "Degree", c: false}, {t: "Cold", c: false}], type: "mcq" },
                        { q: "A prediction of future weather is a ________.", options:[{t: "Forecast", c: true}, {t: "Temperature", c: false}, {t: "Degree", c: false}, {t: "Climate", c: false}], type: "mcq" },
                        { q: "The degree of heat or cold is the ________.", options:[{t: "Weather", c: false}, {t: "Temperature", c: true}, {t: "Forecast", c: false}, {t: "To pour", c: false}], type: "mcq" },
                        { q: "A unit of measurement for temperature is a ________.", options:[{t: "Forecast", c: false}, {t: "Climate", c: false}, {t: "Degree", c: true}, {t: "Hot", c: false}], type: "mcq" },
                        { q: "The general weather conditions of an area over a long period is its ________.", options:[{t: "Degree", c: false}, {t: "Forecast", c: false}, {t: "Climate", c: true}, {t: "To freeze", c: false}], type: "mcq" },
                        { q: "When water falls from the clouds, it is said ________.", options:[{t: "To rain", c: true}, {t: "To snow", c: false}, {t: "To shine", c: false}, {t: "To freeze", c: false}], type: "mcq" },
                        { q: "When frozen water flakes fall from the sky, it is said ________.", options:[{t: "To pour", c: false}, {t: "To shine", c: false}, {t: "To snow", c: true}, {t: "To rain", c: false}], type: "mcq" },
                        { q: "When the sun gives off bright light, it is said ________.", options:[{t: "To snow", c: false}, {t: "To shine", c: true}, {t: "To pour", c: false}, {t: "To freeze", c: false}], type: "mcq" },
                        { q: "When liquid turns into solid ice because of cold, it is said ________.", options:[{t: "To pour", c: false}, {t: "To shine", c: false}, {t: "To freeze", c: true}, {t: "To rain", c: false}], type: "mcq" },
                        { q: "When it rains very heavily, it is said ________.", options:[{t: "To shine", c: false}, {t: "To snow", c: false}, {t: "To freeze", c: false}, {t: "To pour", c: true}], type: "mcq" },
                        { q: "Having a high temperature means it is ________.", options:[{t: "Cold", c: false}, {t: "Degree", c: false}, {t: "Hot", c: true}, {t: "Climate", c: false}], type: "mcq" },
                        { q: "Having a low temperature means it is ________.", options:[{t: "Hot", c: false}, {t: "Cold", c: true}, {t: "To pour", c: false}, {t: "Weather", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Adjectives & Clothing",
                    drills:[
                        { q: "A day with bright sunlight is ________.", options:[{t: "Rainy", c: false}, {t: "Sunny", c: true}, {t: "Cloudy", c: false}, {t: "Umbrella", c: false}], type: "mcq" },
                        { q: "A day with a lot of rain is ________.", options:[{t: "Windy", c: false}, {t: "Sunny", c: false}, {t: "Rainy", c: true}, {t: "Shorts", c: false}], type: "mcq" },
                        { q: "When there is a lot of wind, it is ________.", options:[{t: "Humid", c: false}, {t: "Windy", c: true}, {t: "Rainy", c: false}, {t: "Boots", c: false}], type: "mcq" },
                        { q: "When the sky is covered with clouds, it is ________.", options:[{t: "Sunny", c: false}, {t: "Cloudy", c: true}, {t: "Humid", c: false}, {t: "Coat", c: false}], type: "mcq" },
                        { q: "When there is a lot of moisture in the air, it feels ________.", options:[{t: "Humid", c: true}, {t: "Windy", c: false}, {t: "Sunny", c: false}, {t: "Jacket", c: false}], type: "mcq" },
                        { q: "A piece of clothing for the upper body, usually lighter than a coat, is a ________.", options:[{t: "Boots", c: false}, {t: "Jacket", c: true}, {t: "Shorts", c: false}, {t: "Umbrella", c: false}], type: "mcq" },
                        { q: "A heavy piece of clothing worn outdoors to keep warm is a ________.", options:[{t: "Coat", c: true}, {t: "Sweater", c: false}, {t: "Sunglasses", c: false}, {t: "Shorts", c: false}], type: "mcq" },
                        { q: "A knitted garment worn on the upper body is a ________.", options:[{t: "Boots", c: false}, {t: "Jacket", c: false}, {t: "Sweater", c: true}, {t: "Umbrella", c: false}], type: "mcq" },
                        { q: "Footwear that covers the foot and part of the leg are ________.", options:[{t: "Sunglasses", c: false}, {t: "Shorts", c: false}, {t: "Coat", c: false}, {t: "Boots", c: true}], type: "mcq" },
                        { q: "A device used to protect against rain is an ________.", options:[{t: "Umbrella", c: true}, {t: "Jacket", c: false}, {t: "Sweater", c: false}, {t: "Boots", c: false}], type: "mcq" },
                        { q: "Dark glasses used to protect the eyes from the sun are ________.", options:[{t: "Shorts", c: false}, {t: "Sunglasses", c: true}, {t: "Umbrella", c: false}, {t: "Coat", c: false}], type: "mcq" },
                        { q: "Short pants that reach only to the knees or thighs are ________.", options:[{t: "Jacket", c: false}, {t: "Boots", c: false}, {t: "Shorts", c: true}, {t: "Sweater", c: false}], type: "mcq" }
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
                    title: "Good & Bad Weather",
                    audio: "TTS: It's a beautiful day. The sun is shining. There's not a cloud in the sky. It's pouring. It looks like rain. I'm soaked.",
                    explanation: "Phrases used to describe excellent sunny days and heavy rain conditions.<br><span style='color:var(--primary-blue); font-style:italic;'>(Frases usadas para descrever excelentes dias ensolarados e condições de chuva forte.)</span>",
                    samples:[
                        { en: "Let's go outside, <b>it's a beautiful day.</b>", pt: "<span style='color:var(--primary-blue)'>(Vamos lá fora, é um dia lindo.)</span>" },
                        { en: "<b>The sun is shining</b> brightly today.", pt: "<span style='color:var(--primary-blue)'>(O sol está brilhando forte hoje.)</span>" },
                        { en: "<b>There's not a cloud in the sky.</b>", pt: "<span style='color:var(--primary-blue)'>(Não há uma nuvem no céu.)</span>" },
                        { en: "We can't go to the park, <b>it's pouring.</b>", pt: "<span style='color:var(--primary-blue)'>(Não podemos ir ao parque, está chovendo muito.)</span>" },
                        { en: "Bring your umbrella, <b>it looks like rain.</b>", pt: "<span style='color:var(--primary-blue)'>(Traga seu guarda-chuva, parece que vai chover.)</span>" },
                        { en: "I didn't bring my umbrella and now <b>I'm soaked.</b>", pt: "<span style='color:var(--primary-blue)'>(Eu não trouxe meu guarda-chuva e agora estou encharcado.)</span>" }
                    ]
                },
                {
                    title: "Asking About Weather",
                    audio: "TTS: What's the weather like? What's the temperature? What's the forecast for tomorrow? Is it going to rain today?",
                    explanation: "Common questions to find out current conditions, temperatures, and future predictions.<br><span style='color:var(--primary-blue); font-style:italic;'>(Perguntas comuns para descobrir condições atuais, temperaturas e previsões futuras.)</span>",
                    samples:[
                        { en: "<b>What's the weather like</b> in your city?", pt: "<span style='color:var(--primary-blue)'>(Como está o tempo na sua cidade?)</span>" },
                        { en: "<b>What's the temperature?</b> Is it freezing?", pt: "<span style='color:var(--primary-blue)'>(Qual é a temperatura? Está congelando?)</span>" },
                        { en: "<b>What's the forecast for tomorrow?</b>", pt: "<span style='color:var(--primary-blue)'>(Qual é a previsão para amanhã?)</span>" },
                        { en: "<b>Is it going to rain today?</b>", pt: "<span style='color:var(--primary-blue)'>(Vai chover hoje?)</span>" }
                    ]
                },
                {
                    title: "Seasons & Habits",
                    audio: "TTS: In the spring. During the summer. In the autumn. Over the winter. My favorite season is.",
                    explanation: "Prepositional phrases to describe when activities happen during the year.<br><span style='color:var(--primary-blue); font-style:italic;'>(Frases preposicionais para descrever quando as atividades acontecem durante o ano.)</span>",
                    samples:[
                        { en: "The flowers bloom <b>in the spring</b>.", pt: "<span style='color:var(--primary-blue)'>(As flores desabrocham na primavera.)</span>" },
                        { en: "We always go swimming <b>during the summer</b>.", pt: "<span style='color:var(--primary-blue)'>(Nós sempre vamos nadar durante o verão.)</span>" },
                        { en: "The leaves fall <b>in the autumn</b>.", pt: "<span style='color:var(--primary-blue)'>(As folhas caem no outono.)</span>" },
                        { en: "We often go skiing <b>over the winter</b>.", pt: "<span style='color:var(--primary-blue)'>(Nós frequentemente vamos esquiar durante o inverno.)</span>" },
                        { en: "<b>My favorite season is</b> spring.", pt: "<span style='color:var(--primary-blue)'>(Minha estação favorita é a primavera.)</span>" }
                    ]
                }
            ],

            // --- 3B: DIALOGUES ---
            dialogueGroups:[
                {
                    title: "Dialogue 1: A Beautiful Morning",
                    audio: "TTS: What's the weather like? It's a beautiful day. The sun is shining.",
                    lines:[
                        { speaker: "John", text: "What's the weather like?", pt: "(Como está o tempo?)" },
                        { speaker: "Anna", text: "It's a beautiful day. The sun is shining.", pt: "(É um dia lindo. O sol está brilhando.)" }
                    ]
                },
                {
                    title: "Dialogue 2: Impending Rain",
                    audio: "TTS: Is it going to rain today? It looks like rain. What's the forecast for tomorrow?",
                    lines:[
                        { speaker: "Mike", text: "Is it going to rain today?", pt: "(Vai chover hoje?)" },
                        { speaker: "Sarah", text: "It looks like rain. What's the forecast for tomorrow?", pt: "(Parece que vai chover. Qual é a previsão para amanhã?)" }
                    ]
                },
                {
                    title: "Dialogue 3: Caught in a Storm",
                    audio: "TTS: I forgot my umbrella and it's pouring. I'm soaked! Come inside! What's the temperature? It feels freezing.",
                    lines:[
                        { speaker: "Leo", text: "I forgot my umbrella and it's pouring. I'm soaked!", pt: "(Esqueci meu guarda-chuva e está chovendo muito. Estou encharcado!)" },
                        { speaker: "Emma", text: "Come inside! What's the temperature? It feels freezing.", pt: "(Entre! Qual é a temperatura? Parece que está congelando.)" }
                    ]
                },
                {
                    title: "Dialogue 4: Perfect Summer",
                    audio: "TTS: Let's go to the beach. There's not a cloud in the sky. I agree. We always go to the beach during the summer.",
                    lines:[
                        { speaker: "Tom", text: "Let's go to the beach. There's not a cloud in the sky.", pt: "(Vamos à praia. Não há uma nuvem no céu.)" },
                        { speaker: "Lisa", text: "I agree. We always go to the beach during the summer.", pt: "(Concordo. Nós sempre vamos à praia durante o verão.)" }
                    ]
                },
                {
                    title: "Dialogue 5: Spring Preferences",
                    audio: "TTS: My favorite season is spring. Why do you like it? Because in the spring, the weather is warm and flowers bloom.",
                    lines:[
                        { speaker: "Chris", text: "My favorite season is spring.", pt: "(Minha estação favorita é a primavera.)" },
                        { speaker: "Julia", text: "Why do you like it? Because in the spring, the weather is warm and flowers bloom.", pt: "(Por que você gosta dela? Porque na primavera, o tempo é quente e as flores desabrocham.)" }
                    ]
                },
                {
                    title: "Dialogue 6: The Cold Seasons",
                    audio: "TTS: What do you like to do in the autumn? I like walking in the park. Over the winter, I just stay inside.",
                    lines:[
                        { speaker: "David", text: "What do you like to do in the autumn?", pt: "(O que você gosta de fazer no outono?)" },
                        { speaker: "Mary", text: "I like walking in the park. Over the winter, I just stay inside.", pt: "(Gosto de caminhar no parque. Durante o inverno, eu só fico em casa.)" }
                    ]
                }
            ],

            // --- 3C: PRACTICE ---
            grammarDrillGroups:[
                {
                    title: "Good & Bad Weather",
                    drills:[
                        { q: "It's a ________ day.", options:[{t: "beautiful", c: true}, {t: "shining", c: false}, {t: "soaked", c: false}, {t: "pouring", c: false}], type: "mcq" },
                        { q: "The sun is ________.", options:[{t: "raining", c: false}, {t: "shining", c: true}, {t: "soaked", c: false}, {t: "pouring", c: false}], type: "mcq" },
                        { q: "There's not a ________ in the sky.", options:[{t: "cloud", c: true}, {t: "sun", c: false}, {t: "rain", c: false}, {t: "soaked", c: false}], type: "mcq" },
                        { q: "We can't go out, it's ________.", options:[{t: "pouring", c: true}, {t: "shining", c: false}, {t: "beautiful", c: false}, {t: "cloud", c: false}], type: "mcq" },
                        { q: "Take an umbrella, it ________ like rain.", options:[{t: "looks", c: true}, {t: "feels", c: false}, {t: "seems", c: false}, {t: "shining", c: false}], type: "mcq" },
                        { q: "I fell in the water and now I'm ________.", options:[{t: "soaked", c: true}, {t: "pouring", c: false}, {t: "shining", c: false}, {t: "beautiful", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Asking About Weather",
                    drills:[
                        { q: "What's the weather ________?", options:[{t: "like", c: true}, {t: "look", c: false}, {t: "love", c: false}, {t: "as", c: false}], type: "mcq" },
                        { q: "What's the ________? It feels hot.", options:[{t: "temperature", c: true}, {t: "forecast", c: false}, {t: "weather", c: false}, {t: "season", c: false}], type: "mcq" },
                        { q: "What's the ________ for tomorrow?", options:[{t: "forecast", c: true}, {t: "temperature", c: false}, {t: "degree", c: false}, {t: "cloud", c: false}], type: "mcq" },
                        { q: "________ it going to rain today?", options:[{t: "Is", c: true}, {t: "Are", c: false}, {t: "Do", c: false}, {t: "Does", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Seasons & Habits",
                    drills:[
                        { q: "________ the spring, flowers bloom.", options:[{t: "In", c: true}, {t: "On", c: false}, {t: "At", c: false}, {t: "During", c: false}], type: "mcq" },
                        { q: "We go swimming ________ the summer.", options:[{t: "during", c: true}, {t: "at", c: false}, {t: "on", c: false}, {t: "over", c: false}], type: "mcq" },
                        { q: "Leaves fall ________ the autumn.", options:[{t: "in", c: true}, {t: "on", c: false}, {t: "at", c: false}, {t: "over", c: false}], type: "mcq" },
                        { q: "We stay inside ________ the winter.", options:[{t: "over", c: true}, {t: "at", c: false}, {t: "on", c: false}, {t: "in", c: false}], type: "mcq" },
                        { q: "My ________ season is spring.", options:[{t: "favorite", c: true}, {t: "best", c: false}, {t: "beautiful", c: false}, {t: "temperature", c: false}], type: "mcq" }
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
                { text: "What's the weather like in your city today? ↘", audio: "TTS: What's the weather like in your city today?" },
                { text: "It's a beautiful day and the sun is shining. ↘", audio: "TTS: It's a beautiful day and the sun is shining." },
                { text: "Is it going to rain today? ↗", audio: "TTS: Is it going to rain today?" },
                { text: "The forecast said it might pour this afternoon. ↘", audio: "TTS: The forecast said it might pour this afternoon." },
                { text: "Don't forget your umbrella, it looks like rain. ↘", audio: "TTS: Don't forget your umbrella, it looks like rain." },
                { text: "What's the temperature outside? ↘", audio: "TTS: What's the temperature outside?" },
                { text: "It feels freezing cold, so wear a heavy coat. ↘", audio: "TTS: It feels freezing cold, so wear a heavy coat." },
                { text: "My favorite season is summer because I love the beach. ↘", audio: "TTS: My favorite season is summer because I love the beach." },
                { text: "We always go skiing over the winter. ↘", audio: "TTS: We always go skiing over the winter." },
                { text: "The leaves fall from the trees in the autumn. ↘", audio: "TTS: The leaves fall from the trees in the autumn." }
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
                    audio: "TTS: Anna: What's the forecast for tomorrow? John: It is going to be cloudy and windy in the morning. Anna: Will we need a jacket? John: Yes, the temperature will drop to ten degrees.",
                    text: "Anna: What's the [forecast] for tomorrow?<br>John: It is going to be [cloudy] and [windy] in the morning.<br>Anna: Will we need a [jacket]?<br>John: Yes, the [temperature] will drop to ten degrees."
                },
                {
                    type: "dropdown",
                    instruction: "Listen to the dialogue about the seasons.",
                    audio: "TTS: Emma: My favorite season is spring because the weather is nice. Lucas: I prefer summer because I love hot weather. Emma: Summer is too humid for me. Lucas: I like to wear shorts and sunglasses.",
                    questions:[
                        { q: "Emma: My favorite season is [spring* | winter | autumn] because the weather is nice.", a: "spring" },
                        { q: "Lucas: I prefer summer because I love [hot* | cold | rainy] weather.", a: "hot" },
                        { q: "Emma: Summer is too [humid* | dry | freezing] for me.", a: "humid" },
                        { q: "Lucas: I like to wear [shorts* | boots | coats] and sunglasses.", a: "shorts" }
                    ]
                },
                {
                    type: "audio-choice",
                    instruction: "Listen to the speaker. Why is he wet?",
                    audio: "TTS: I walked to the store, but I didn't check the weather. Suddenly, a huge thunderstorm started. I didn't have my umbrella, and now I'm soaked!",
                    options:[
                        { t: "He jumped into a swimming pool.", c: false },
                        { t: "He was caught in a thunderstorm without an umbrella.", c: true },
                        { t: "He wore a heavy coat in the summer.", c: false },
                        { t: "He walked in the snow without boots.", c: false }
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
                    title: "Dialogue - Preparing to Go Out",
                    audio: "TTS: Sarah: Hey Mark, is it going to rain today? Mark: Let me check the forecast. Yes, it says it will pour this afternoon. Sarah: Oh no. I'm wearing shorts and sunglasses. Mark: You should definitely change. It looks like rain right now, and the wind is strong. Sarah: I will put on a sweater and take my umbrella. Mark: Good idea. The temperature is only fifteen degrees.",
                    body: "<b>Sarah:</b> Hey Mark, [is it going to rain today](tooltip:is-it-going-to-rain)?<br><b>Mark:</b> Let me check the [forecast](tooltip:forecast). Yes, it says it will [pour](tooltip:pour) this afternoon.<br><b>Sarah:</b> Oh no. I'm wearing [shorts](tooltip:shorts) and [sunglasses](tooltip:sunglasses).<br><b>Mark:</b> You should definitely change.[It looks like rain](tooltip:looks-like-rain) right now, and the [wind](tooltip:wind) is strong.<br><b>Sarah:</b> I will put on a [sweater](tooltip:sweater) and take my [umbrella](tooltip:umbrella).<br><b>Mark:</b> Good idea. The [temperature](tooltip:temperature) is only fifteen [degrees](tooltip:degree).",
                    questions:[
                        { q: "What did the forecast say?", options:[{t: "It will be sunny.", c: false}, {t: "It will snow.", c: false}, {t: "It will pour.", c: true}], type: "mcq" },
                        { q: "What was Sarah wearing at first?", options:[{t: "Shorts and sunglasses.", c: true}, {t: "A coat and boots.", c: false}, {t: "A sweater and a jacket.", c: false}], type: "mcq" },
                        { q: "What is the temperature?", options:[{t: "Twenty degrees.", c: false}, {t: "Fifteen degrees.", c: true}, {t: "Thirty degrees.", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Dialogue - Favorite Seasons",
                    audio: "TTS: Leo: What's your favorite season, Emma? Emma: My favorite season is autumn. I love when the leaves change color. What about you? Leo: I love winter. I enjoy skiing in the snow. Emma: I don't like winter. It gets freezing cold, and there is too much fog. Leo: But over the winter, we can wear cozy coats and boots! Emma: True, but I prefer when the sun is shining.",
                    body: "<b>Leo:</b> What's your favorite [season](tooltip:season), Emma?<br><b>Emma:</b>[My favorite season is](tooltip:favorite-season) [autumn](tooltip:autumn). I love when the leaves change color. What about you?<br><b>Leo:</b> I love [winter](tooltip:winter). I enjoy skiing in the [snow](tooltip:snow).<br><b>Emma:</b> I don't like winter. It gets freezing [cold](tooltip:cold), and there is too much [fog](tooltip:fog).<br><b>Leo:</b> But[over the winter](tooltip:over-winter), we can wear cozy [coats](tooltip:coat) and [boots](tooltip:boots)!<br><b>Emma:</b> True, but I prefer when [the sun is shining](tooltip:sun-is-shining).",
                    questions:[
                        { q: "Why does Emma like autumn?", options:[{t: "Because of the fog.", c: false}, {t: "Because she can go skiing.", c: false}, {t: "Because the leaves change color.", c: true}], type: "mcq" },
                        { q: "What does Leo like to do in the winter?", options:[{t: "He likes swimming.", c: false}, {t: "He enjoys skiing in the snow.", c: true}, {t: "He likes wearing shorts.", c: false}], type: "mcq" },
                        { q: "Why doesn't Emma like winter?", options:[{t: "It is too hot.", c: false}, {t: "It gets freezing cold and foggy.", c: true}, {t: "It rains too much.", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Email - Weather Changes",
                    audio: "TTS: Subject: Crazy weather! Hi Anna, How are you doing? The weather here has been crazy. Yesterday, it was a beautiful day. There was not a cloud in the sky, and it was hot. Today, a huge storm arrived. I was walking to the market, and suddenly it started to pour. I didn't have a jacket, so I am completely soaked! I hope the climate is better where you are. Best, David.",
                    body: "<b>From: David</b><br><b>To: Anna</b><br>Subject: Crazy [weather](tooltip:weather)!<br><br>Hi Anna,<br>How are you doing? The weather here has been crazy. Yesterday, [it was a beautiful day](tooltip:beautiful-day).[There's not a cloud in the sky](tooltip:not-a-cloud), and it was [hot](tooltip:hot). Today, a huge [storm](tooltip:storm) arrived. I was walking to the market, and suddenly it started to [pour](tooltip:pour). I didn't have a [jacket](tooltip:jacket), so [I'm soaked](tooltip:soaked)! I hope the [climate](tooltip:climate) is better where you are.<br><br>Best, David.",
                    questions:[
                        { q: "How was the weather yesterday?", options:[{t: "It was a beautiful, hot day with no clouds.", c: true}, {t: "It was pouring rain.", c: false}, {t: "It was freezing cold.", c: false}], type: "mcq" },
                        { q: "What happened today?", options:[{t: "It started to snow.", c: false}, {t: "A huge storm arrived and it started to pour.", c: true}, {t: "The sun was shining.", c: false}], type: "mcq" },
                        { q: "Why is David soaked?", options:[{t: "He went swimming.", c: false}, {t: "He fell into a river.", c: false}, {t: "He was walking in the rain without a jacket.", c: true}], type: "mcq" }
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
                { type: "matching", instruction: "Match the weather noun to its meaning.", pairs:[
                    { left: "Rain", right: "Water falling from clouds", val: "1" },
                    { left: "Snow", right: "Frozen white flakes", val: "2" },
                    { left: "Wind", right: "Moving air", val: "3" },
                    { left: "Fog", right: "Thick cloud near the ground", val: "4" }
                ]},
                { type: "matching", instruction: "Match the season to the common activity.", pairs:[
                    { left: "Spring", right: "Flowers start to bloom", val: "1" },
                    { left: "Summer", right: "Going to the beach", val: "2" },
                    { left: "Autumn", right: "Leaves change color", val: "3" },
                    { left: "Winter", right: "Skiing in the snow", val: "4" }
                ]},
                { type: "matching", instruction: "Match the clothing to the weather.", pairs:[
                    { left: "Shorts", right: "Hot and sunny", val: "1" },
                    { left: "Umbrella", right: "Rainy and pouring", val: "2" },
                    { left: "Coat", right: "Freezing and snowy", val: "3" },
                    { left: "Sunglasses", right: "Bright and sunny", val: "4" }
                ]},
                { type: "matching", instruction: "Match the phrase halves.", pairs:[
                    { left: "What's the weather", right: "like today?", val: "1" },
                    { left: "The sun", right: "is shining.", val: "2" },
                    { left: "There's not a", right: "cloud in the sky.", val: "3" },
                    { left: "It looks", right: "like rain.", val: "4" }
                ]},

                // --- WORD ORDER (5-14) ---
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "weather / What's / the / like / ?", correct: "What's the weather like ?" },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "temperature / What's / the / outside / ?", correct: "What's the temperature outside ?" },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "forecast / What's / tomorrow / the / for / ?", correct: "What's the forecast for tomorrow ?" },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "going / Is / rain / it / to / today / ?", correct: "Is it going to rain today ?" },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "beautiful / It's / today / a / day / .", correct: "It's a beautiful day today ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "sun / The / shining / brightly / is / .", correct: "The sun is shining brightly ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "looks / rain / It / later / like / .", correct: "It looks like rain later ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "favorite / summer / My / is / season / .", correct: "My favorite season is summer ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "in / We / swimming / go / summer / the / .", correct: "We go swimming in the summer ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "over / skiing / I / winter / go / the / .", correct: "I go skiing over the winter ." },

                // --- CLICKABLE ERROR (15-24) ---
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "What's the weather[love](error:like) today?" },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "The sun is [shines](error:shining)." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "There's not a [fog](error:cloud) in the sky." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "It looks [how](error:like) rain." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "I am [soaks](error:soaked) from the rain." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "What's the [climat](error:forecast) for tomorrow?" },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "It is freezing [hot](error:cold) outside." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "[On](error:In) the spring, flowers bloom." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "My favorite [seasoning](error:season) is autumn." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "[Above](error:Over) the winter, it snows a lot." },

                // --- ODD ONE OUT (25-30) ---
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Weather nouns)", options:[{t: "Rain", c: false}, {t: "Snow", c: false}, {t: "Fog", c: false}, {t: "Boots", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Seasons)", options:[{t: "Spring", c: false}, {t: "Summer", c: false}, {t: "Climate", c: true}, {t: "Winter", c: false}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Clothing)", options:[{t: "Jacket", c: false}, {t: "Sweater", c: false}, {t: "Storm", c: true}, {t: "Coat", c: false}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Adjectives)", options:[{t: "Sunny", c: false}, {t: "Cloudy", c: false}, {t: "Windy", c: false}, {t: "Degree", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Verbs)", options:[{t: "To pour", c: false}, {t: "To shine", c: false}, {t: "To freeze", c: false}, {t: "Umbrella", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Phrases)", options:[{t: "It's pouring", c: false}, {t: "I'm soaked", c: false}, {t: "It looks like rain", c: false}, {t: "In the spring", c: true}] },

                // --- TRUE / FALSE (31-35) ---
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "You use an umbrella when it is sunny and there is no cloud in the sky.", correct: "false"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "If you check the 'forecast', you want to know what the weather will be like.", correct: "true"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "When it is 'pouring', it means there is a very light wind.", correct: "false"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "You wear shorts when it is freezing cold.", correct: "false"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "Autumn is the season when leaves usually fall from the trees.", correct: "true"}] },

                // --- MCQ (36-39) ---
                { type: "mcq", instruction: "Choose the correct phrase.<br>When you are completely wet from the rain, you say: 'I'm ________!'", options:[{t: "shining", c: false}, {t: "soaked", c: true}, {t: "pouring", c: false}, {t: "freezing", c: false}] },
                { type: "mcq", instruction: "Choose the correct word.<br>The loud noise you hear during a bad storm is from a ________.", options:[{t: "fog", c: false}, {t: "thunderstorm", c: true}, {t: "sun", c: false}, {t: "degree", c: false}] },
                { type: "mcq", instruction: "Choose the correct preposition.<br>We love to go swimming ________ the summer.", options:[{t: "during", c: true}, {t: "at", c: false}, {t: "over", c: false}, {t: "on", c: false}] },
                { type: "mcq", instruction: "Choose the correct phrase.<br>If the sky is completely clear and blue, you say: 'There's not a ________ in the sky.'", options:[{t: "sun", c: false}, {t: "cloud", c: true}, {t: "bird", c: false}, {t: "rain", c: false}] },

                // --- CATEGORIZE (40) ---
                { type: "categorize", instruction: "Sort the words into Seasons and Clothing.", 
                    categories:[{id: "seas", name: "Seasons"}, {id: "cloth", name: "Clothing"}],
                    items:[
                        {text: "Winter", catId: "seas"}, 
                        {text: "Spring", catId: "seas"}, 
                        {text: "Autumn", catId: "seas"}, 
                        {text: "Jacket", catId: "cloth"}, 
                        {text: "Sweater", catId: "cloth"}, 
                        {text: "Boots", catId: "cloth"}
                    ] 
                }
            ]
        },

        // ======================================================
        // STEP 8: WRITING PRACTICE
        // ======================================================
        {
            title: "Writing Practice",
            instruction: "Write a short paragraph (5-7 sentences) about the current weather in your city and your favorite season. Mention the temperature, what you are wearing today, and what you usually do in your favorite season.",
            example: "The weather in my city today is cloudy and windy. The temperature is around fifteen degrees, so I am wearing a light jacket and boots. However, my favorite season is summer. During the summer, it is always hot and sunny. There is not a cloud in the sky, and I love going to the beach with my friends.",
            prompts:[
                "Describe the current weather (e.g., it is sunny, pouring, freezing).",
                "Mention the temperature or how it feels.",
                "Say what clothes you need to wear today.",
                "Explain what your favorite season is and why."
            ]
        },

        // ======================================================
        // STEP 9: FLASHCARDS
        // ======================================================
        {
            title: "Flashcards",
            items:[
                // 2A Items (36 items)
                { term: "Sun", definition: "The star around which the earth orbits.", defTrans: "Sol", example: "The sun is very bright today.", audioFront: "TTS: Sun", audioBack: "TTS: The sun is very bright today." },
                { term: "Rain", definition: "Water falling in drops from clouds.", defTrans: "Chuva", example: "We need some rain for the plants.", audioFront: "TTS: Rain", audioBack: "TTS: We need some rain for the plants." },
                { term: "Snow", definition: "Frozen water vapor falling as white flakes.", defTrans: "Neve", example: "The kids are playing in the snow.", audioFront: "TTS: Snow", audioBack: "TTS: The kids are playing in the snow." },
                { term: "Wind", definition: "The perceptible natural movement of the air.", defTrans: "Vento", example: "The strong wind blew my hat away.", audioFront: "TTS: Wind", audioBack: "TTS: The strong wind blew my hat away." },
                { term: "Cloud", definition: "A visible mass of condensed water vapor in the sky.", defTrans: "Nuvem", example: "Look at that dark cloud in the sky.", audioFront: "TTS: Cloud", audioBack: "TTS: Look at that dark cloud in the sky." },
                { term: "Fog", definition: "A thick cloud of tiny water droplets suspended at or near the earth's surface.", defTrans: "Névoa / Neblina", example: "The fog makes it hard to see the road.", audioFront: "TTS: Fog", audioBack: "TTS: The fog makes it hard to see the road." },
                { term: "Storm", definition: "A violent disturbance of the atmosphere with strong winds and rain.", defTrans: "Tempestade", example: "A big storm is coming tonight.", audioFront: "TTS: Storm", audioBack: "TTS: A big storm is coming tonight." },
                { term: "Thunderstorm", definition: "A storm with thunder and lightning.", defTrans: "Tempestade de raios e trovões", example: "The thunderstorm scared my dog.", audioFront: "TTS: Thunderstorm", audioBack: "TTS: The thunderstorm scared my dog." },
                { term: "Spring", definition: "The season after winter, when vegetation begins to appear.", defTrans: "Primavera", example: "Flowers bloom in the spring.", audioFront: "TTS: Spring", audioBack: "TTS: Flowers bloom in the spring." },
                { term: "Summer", definition: "The warmest season of the year.", defTrans: "Verão", example: "We go to the beach in the summer.", audioFront: "TTS: Summer", audioBack: "TTS: We go to the beach in the summer." },
                { term: "Autumn (Fall)", definition: "The season after summer, when leaves fall from trees.", defTrans: "Outono", example: "The leaves turn orange in the autumn.", audioFront: "TTS: Autumn", audioBack: "TTS: The leaves turn orange in the autumn." },
                { term: "Winter", definition: "The coldest season of the year.", defTrans: "Inverno", example: "It gets very dark early in the winter.", audioFront: "TTS: Winter", audioBack: "TTS: It gets very dark early in the winter." },
                
                { term: "Weather", definition: "The state of the atmosphere at a place and time.", defTrans: "Clima / Tempo", example: "The weather is perfect for a walk.", audioFront: "TTS: Weather", audioBack: "TTS: The weather is perfect for a walk." },
                { term: "Forecast", definition: "A prediction or estimate of future weather.", defTrans: "Previsão do tempo", example: "I checked the forecast on my phone.", audioFront: "TTS: Forecast", audioBack: "TTS: I checked the forecast on my phone." },
                { term: "Temperature", definition: "The degree or intensity of heat present in a substance or object.", defTrans: "Temperatura", example: "The temperature dropped overnight.", audioFront: "TTS: Temperature", audioBack: "TTS: The temperature dropped overnight." },
                { term: "Degree", definition: "A unit of measurement for temperature.", defTrans: "Grau", example: "It is twenty degrees outside.", audioFront: "TTS: Degree", audioBack: "TTS: It is twenty degrees outside." },
                { term: "Climate", definition: "The weather conditions prevailing in an area in general.", defTrans: "Clima", example: "The climate here is usually dry.", audioFront: "TTS: Climate", audioBack: "TTS: The climate here is usually dry." },
                { term: "To rain", definition: "Water falling from the clouds.", defTrans: "Chover", example: "It is going to rain this afternoon.", audioFront: "TTS: To rain", audioBack: "TTS: It is going to rain this afternoon." },
                { term: "To snow", definition: "Frozen water flakes falling from the sky.", defTrans: "Nevar", example: "It rarely snows in my city.", audioFront: "TTS: To snow", audioBack: "TTS: It rarely snows in my city." },
                { term: "To shine", definition: "To give out a bright light.", defTrans: "Brilhar", example: "The sun will shine all day tomorrow.", audioFront: "TTS: To shine", audioBack: "TTS: The sun will shine all day tomorrow." },
                { term: "To freeze", definition: "To be turned into ice or another solid as a result of extreme cold.", defTrans: "Congelar", example: "Water will freeze if it gets too cold.", audioFront: "TTS: To freeze", audioBack: "TTS: Water will freeze if it gets too cold." },
                { term: "To pour", definition: "To rain heavily.", defTrans: "Chover forte / Despejar", example: "We can't go out because it is going to pour.", audioFront: "TTS: To pour", audioBack: "TTS: We can't go out because it is going to pour." },
                { term: "Hot", definition: "Having a high degree of heat.", defTrans: "Quente / Calor", example: "The coffee is too hot to drink right now.", audioFront: "TTS: Hot", audioBack: "TTS: The coffee is too hot to drink right now." },
                { term: "Cold", definition: "Of or at a low or relatively low temperature.", defTrans: "Frio", example: "I forgot my gloves and my hands are cold.", audioFront: "TTS: Cold", audioBack: "TTS: I forgot my gloves and my hands are cold." },

                { term: "Sunny", definition: "Bright with sunlight.", defTrans: "Ensolarado", example: "It is a sunny day, perfect for the beach.", audioFront: "TTS: Sunny", audioBack: "TTS: It is a sunny day, perfect for the beach." },
                { term: "Rainy", definition: "Having a great deal of rainfall.", defTrans: "Chuvoso", example: "I don't like driving in rainy weather.", audioFront: "TTS: Rainy", audioBack: "TTS: I don't like driving in rainy weather." },
                { term: "Windy", definition: "Characterized by or exposed to strong winds.", defTrans: "Ventoso / Com vento", example: "The windy weather messed up my hair.", audioFront: "TTS: Windy", audioBack: "TTS: The windy weather messed up my hair." },
                { term: "Cloudy", definition: "Covered with or characterized by clouds.", defTrans: "Nublado", example: "It is a cloudy day, but it's not raining.", audioFront: "TTS: Cloudy", audioBack: "TTS: It is a cloudy day, but it's not raining." },
                { term: "Humid", definition: "Marked by a relatively high level of water vapor in the atmosphere.", defTrans: "Úmido", example: "The air feels very humid today.", audioFront: "TTS: Humid", audioBack: "TTS: The air feels very humid today." },
                { term: "Jacket", definition: "An outer garment extending either to the waist or the hips.", defTrans: "Jaqueta", example: "You need a light jacket for the evening.", audioFront: "TTS: Jacket", audioBack: "TTS: You need a light jacket for the evening." },
                { term: "Coat", definition: "An outer garment worn outdoors, having sleeves and typically extending below the hips.", defTrans: "Casaco", example: "Put on your heavy coat before going out.", audioFront: "TTS: Coat", audioBack: "TTS: Put on your heavy coat before going out." },
                { term: "Sweater", definition: "A knitted garment typically with long sleeves, worn over the upper body.", defTrans: "Suéter", example: "My grandmother knitted this warm sweater.", audioFront: "TTS: Sweater", audioBack: "TTS: My grandmother knitted this warm sweater." },
                { term: "Boots", definition: "A sturdy item of footwear covering the foot, ankle, and sometimes the leg.", defTrans: "Botas", example: "She wore her rain boots in the mud.", audioFront: "TTS: Boots", audioBack: "TTS: She wore her rain boots in the mud." },
                { term: "Umbrella", definition: "A device consisting of a circular canopy of cloth on a folding metal frame.", defTrans: "Guarda-chuva", example: "Don't forget your umbrella, it might rain.", audioFront: "TTS: Umbrella", audioBack: "TTS: Don't forget your umbrella, it might rain." },
                { term: "Sunglasses", definition: "Glasses tinted to protect the eyes from sunlight or glare.", defTrans: "Óculos de sol", example: "I wear sunglasses to protect my eyes.", audioFront: "TTS: Sunglasses", audioBack: "TTS: I wear sunglasses to protect my eyes." },
                { term: "Shorts", definition: "Short trousers that reach only to the knees or thighs.", defTrans: "Bermuda / Shorts", example: "He wore shorts because it was a hot day.", audioFront: "TTS: Shorts", audioBack: "TTS: He wore shorts because it was a hot day." },

                // 3A Items (15 items)
                { term: "It's a beautiful day", definition: "Describing pleasant and nice weather.", defTrans: "É um dia lindo", example: "Let's go outside, it's a beautiful day.", audioFront: "TTS: It's a beautiful day", audioBack: "TTS: Let's go outside, it's a beautiful day." },
                { term: "The sun is shining", definition: "Stating that sunlight is visible and bright.", defTrans: "O sol está brilhando", example: "The sun is shining brightly today.", audioFront: "TTS: The sun is shining", audioBack: "TTS: The sun is shining brightly today." },
                { term: "There's not a cloud in the sky", definition: "Describing a completely clear sky.", defTrans: "Não há uma nuvem no céu", example: "There's not a cloud in the sky.", audioFront: "TTS: There's not a cloud in the sky", audioBack: "TTS: There's not a cloud in the sky." },
                { term: "It's pouring", definition: "Stating that it is raining very heavily.", defTrans: "Está chovendo muito (torrencialmente)", example: "We can't go to the park, it's pouring.", audioFront: "TTS: It's pouring", audioBack: "TTS: We can't go to the park, it's pouring." },
                { term: "It looks like rain", definition: "Observing dark clouds and predicting rain.", defTrans: "Parece que vai chover", example: "Bring your umbrella, it looks like rain.", audioFront: "TTS: It looks like rain", audioBack: "TTS: Bring your umbrella, it looks like rain." },
                { term: "I'm soaked", definition: "Stating that you are completely wet from the rain.", defTrans: "Estou encharcado(a)", example: "I didn't bring my umbrella and now I'm soaked.", audioFront: "TTS: I'm soaked", audioBack: "TTS: I didn't bring my umbrella and now I'm soaked." },
                { term: "What's the weather like?", definition: "Asking for a general description of the current weather.", defTrans: "Como está o tempo?", example: "What's the weather like in your city?", audioFront: "TTS: What's the weather like?", audioBack: "TTS: What's the weather like in your city?" },
                { term: "What's the temperature?", definition: "Asking for the specific measurement of heat or cold.", defTrans: "Qual é a temperatura?", example: "What's the temperature? Is it freezing?", audioFront: "TTS: What's the temperature?", audioBack: "TTS: What's the temperature? Is it freezing?" },
                { term: "What's the forecast for tomorrow?", definition: "Asking what the weather will be like in the future.", defTrans: "Qual é a previsão para amanhã?", example: "What's the forecast for tomorrow?", audioFront: "TTS: What's the forecast for tomorrow?", audioBack: "TTS: What's the forecast for tomorrow?" },
                { term: "Is it going to rain today?", definition: "Asking if rain is expected later.", defTrans: "Vai chover hoje?", example: "Is it going to rain today?", audioFront: "TTS: Is it going to rain today?", audioBack: "TTS: Is it going to rain today?" },
                { term: "In the spring", definition: "Indicating something happens during the spring season.", defTrans: "Na primavera", example: "The flowers bloom in the spring.", audioFront: "TTS: In the spring", audioBack: "TTS: The flowers bloom in the spring." },
                { term: "During the summer", definition: "Indicating something happens over the summer period.", defTrans: "Durante o verão", example: "We always go swimming during the summer.", audioFront: "TTS: During the summer", audioBack: "TTS: We always go swimming during the summer." },
                { term: "In the autumn", definition: "Indicating something happens during the autumn season.", defTrans: "No outono", example: "The leaves fall in the autumn.", audioFront: "TTS: In the autumn", audioBack: "TTS: The leaves fall in the autumn." },
                { term: "Over the winter", definition: "Indicating something happens spanning the winter season.", defTrans: "Durante o inverno", example: "We often go skiing over the winter.", audioFront: "TTS: Over the winter", audioBack: "TTS: We often go skiing over the winter." },
                { term: "My favorite season is", definition: "Stating the time of year you like the most.", defTrans: "Minha estação favorita é", example: "My favorite season is spring.", audioFront: "TTS: My favorite season is", audioBack: "TTS: My favorite season is spring." }
            ]
        }
    ],

    // ======================================================
    // GLOSSARY (All 51 items + Context words)
    // ======================================================
    glossary:[
        // 2A: Weather Nouns & Seasons
        { topic: "Weather Nouns", term: "sun", definition: "The star around which the earth orbits.", translation: "Sol" },
        { topic: "Weather Nouns", term: "rain", definition: "Water falling in drops from clouds.", translation: "Chuva" },
        { topic: "Weather Nouns", term: "snow", definition: "Frozen water vapor falling as white flakes.", translation: "Neve" },
        { topic: "Weather Nouns", term: "wind", definition: "The natural movement of the air.", translation: "Vento" },
        { topic: "Weather Nouns", term: "cloud", definition: "A visible mass of condensed water vapor.", translation: "Nuvem" },
        { topic: "Weather Nouns", term: "fog", definition: "A thick cloud of tiny water droplets near the ground.", translation: "Névoa / Neblina" },
        { topic: "Weather Nouns", term: "storm", definition: "A violent disturbance of the atmosphere.", translation: "Tempestade" },
        { topic: "Weather Nouns", term: "thunderstorm", definition: "A storm with thunder and lightning.", translation: "Tempestade de raios" },
        { topic: "Seasons", term: "spring", definition: "The season after winter.", translation: "Primavera" },
        { topic: "Seasons", term: "summer", definition: "The warmest season of the year.", translation: "Verão" },
        { topic: "Seasons", term: "autumn", definition: "The season when leaves fall from trees.", translation: "Outono" },
        { topic: "Seasons", term: "winter", definition: "The coldest season of the year.", translation: "Inverno" },

        // 2A: Terms & Verbs
        { topic: "Terms", term: "weather", definition: "The state of the atmosphere.", translation: "Clima / Tempo" },
        { topic: "Terms", term: "forecast", definition: "A prediction of future weather.", translation: "Previsão do tempo" },
        { topic: "Terms", term: "temperature", definition: "The degree of heat or cold.", translation: "Temperatura" },
        { topic: "Terms", term: "degree", definition: "A unit of measurement for temperature.", translation: "Grau" },
        { topic: "Terms", term: "climate", definition: "The weather conditions prevailing in an area.", translation: "Clima" },
        { topic: "Verbs", term: "to-rain", definition: "Water falling from the clouds.", translation: "Chover" },
        { topic: "Verbs", term: "to-snow", definition: "Frozen water flakes falling from the sky.", translation: "Nevar" },
        { topic: "Verbs", term: "to-shine", definition: "To give out a bright light.", translation: "Brilhar" },
        { topic: "Verbs", term: "to-freeze", definition: "To be turned into ice.", translation: "Congelar" },
        { topic: "Verbs", term: "to-pour", definition: "To rain heavily.", translation: "Chover forte" },
        { topic: "Terms", term: "hot", definition: "Having a high degree of heat.", translation: "Quente" },
        { topic: "Terms", term: "cold", definition: "Having a low temperature.", translation: "Frio" },

        // 2A: Adjectives & Clothing
        { topic: "Adjectives", term: "sunny", definition: "Bright with sunlight.", translation: "Ensolarado" },
        { topic: "Adjectives", term: "rainy", definition: "Having a great deal of rainfall.", translation: "Chuvoso" },
        { topic: "Adjectives", term: "windy", definition: "Characterized by strong winds.", translation: "Ventoso" },
        { topic: "Adjectives", term: "cloudy", definition: "Covered with clouds.", translation: "Nublado" },
        { topic: "Adjectives", term: "humid", definition: "Marked by a high level of water vapor.", translation: "Úmido" },
        { topic: "Clothing", term: "jacket", definition: "An outer garment extending to the waist.", translation: "Jaqueta" },
        { topic: "Clothing", term: "coat", definition: "An outer garment worn outdoors to keep warm.", translation: "Casaco" },
        { topic: "Clothing", term: "sweater", definition: "A knitted garment worn on the upper body.", translation: "Suéter" },
        { topic: "Clothing", term: "boots", definition: "Sturdy footwear covering the foot and ankle.", translation: "Botas" },
        { topic: "Clothing", term: "umbrella", definition: "A device used to protect against rain.", translation: "Guarda-chuva" },
        { topic: "Clothing", term: "sunglasses", definition: "Glasses tinted to protect the eyes from sunlight.", translation: "Óculos de sol" },
        { topic: "Clothing", term: "shorts", definition: "Short trousers reaching to the knees.", translation: "Bermuda" },

        // 3A: Expressions
        { topic: "Expressions", term: "beautiful-day", definition: "Describing pleasant and nice weather.", translation: "É um dia lindo" },
        { topic: "Expressions", term: "sun-is-shining", definition: "Stating that sunlight is visible and bright.", translation: "O sol está brilhando" },
        { topic: "Expressions", term: "not-a-cloud", definition: "Describing a completely clear sky.", translation: "Não há uma nuvem no céu" },
        { topic: "Expressions", term: "pour", definition: "Stating that it is raining very heavily.", translation: "Está chovendo muito (torrencialmente)" },
        { topic: "Expressions", term: "looks-like-rain", definition: "Observing dark clouds and predicting rain.", translation: "Parece que vai chover" },
        { topic: "Expressions", term: "soaked", definition: "Stating that you are completely wet from the rain.", translation: "Estou encharcado(a)" },
        { topic: "Expressions", term: "whats-weather-like", definition: "Asking for a general description of the current weather.", translation: "Como está o tempo?" },
        { topic: "Expressions", term: "whats-temperature", definition: "Asking for the specific measurement of heat or cold.", translation: "Qual é a temperatura?" },
        { topic: "Expressions", term: "whats-forecast", definition: "Asking what the weather will be like in the future.", translation: "Qual é a previsão?" },
        { topic: "Expressions", term: "is-it-going-to-rain", definition: "Asking if rain is expected later.", translation: "Vai chover hoje?" },
        { topic: "Expressions", term: "in-spring", definition: "Indicating something happens during the spring season.", translation: "Na primavera" },
        { topic: "Expressions", term: "during-summer", definition: "Indicating something happens over the summer period.", translation: "Durante o verão" },
        { topic: "Expressions", term: "in-autumn", definition: "Indicating something happens during the autumn season.", translation: "No outono" },
        { topic: "Expressions", term: "over-winter", definition: "Indicating something happens spanning the winter season.", translation: "Durante o inverno" },
        { topic: "Expressions", term: "favorite-season", definition: "Stating the time of year you like the most.", translation: "Minha estação favorita é" },

        // Additional Context Words
        { topic: "Context", term: "clothing", definition: "Items worn to cover the body.", translation: "Roupas" },
        { topic: "Context", term: "season", definition: "Each of the four divisions of the year.", translation: "Estação" }
    ]
});