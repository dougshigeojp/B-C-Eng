/**
 * English Block Assembling - LESSON DATA: Topic 10
 * Topic: Travel and Transportation
 */

window.initLesson({
    // --- METADATA ---
    lessonId: "lesson-10",
    block: "2",
    topicTitle: "Travel and Transportation",

    steps: [
        // ======================================================
        // STEP 0: INTRO & CAN-DO
        // ======================================================
        {
            title: "Intro & Can-Do",
            objectives: "• Ask for [directions](tooltip:directions) to specific locations.<br>• Talk about past and future [trips](tooltip:trip).<br>• Identify common modes of [transportation](tooltip:transportation) like bus, train, and car.<br>• Use phrasal verbs like [get in](tooltip:get-in), [get off](tooltip:get-off), and [get to](tooltip:get-to).",
            welcome: "Welcome to the Travel and Transportation unit. In this lesson, you will learn essential language for navigating new cities and planning journeys. We will practice how to ask for directions, discuss travel plans, and use specific vocabulary for different types of transport. Whether you are taking a train or exploring the countryside by car, this lesson will help you get where you need to go.",
            audio: {
                objectives: "TTS: In this lesson, you will learn to: Ask for directions to specific locations. Talk about past and future trips. Identify common modes of transportation like bus, train, and car. Use phrasal verbs like get in, get off, and get to.",
                welcome: "TTS: Welcome to the Travel and Transportation unit. In this lesson, you will learn essential language for navigating new cities and planning journeys. We will practice how to ask for directions, discuss travel plans, and use specific vocabulary for different types of transport. Whether you are taking a train or exploring the countryside by car, this lesson will help you get where you need to go."
            }
        },

        // ======================================================
        // STEP 1: CONTEXT DIALOGUE
        // ======================================================
        {
            title: "Context Dialogue",
            context: "Liam tells Sarah about his experience finding the museum earlier, and then they discuss transportation plans for the next part of their trip.",
            contextAudio: "TTS: Sarah: Liam, did you manage to find the museum earlier? Liam: Yes, but I had to ask for directions. Someone told me to take the second left and go straight. Sarah: At least you made it! So, about tomorrow... how are we getting to the countryside? Liam: We can take the train. The train station is just a few blocks away. Sarah: Good idea. I like traveling by train. Liam: Me too. And when we arrive, we can rent a car to explore the area. Sarah: Perfect! I’ll check the bus schedules just in case we need them later.",
            dialogue: [
                { speaker: "Sarah", text: "Liam, did you manage to find the [museum](tooltip:museum) earlier?" },
                { speaker: "Liam", text: "Yes, but I had to [ask for directions](tooltip:ask-directions). Someone told me to [take the second left](tooltip:take-left) and [go straight](tooltip:go-straight)." },
                { speaker: "Sarah", text: "At least you made it! So, about tomorrow... how are we [getting there](tooltip:get-there)?" },
                { speaker: "Liam", text: "We can take the [train](tooltip:train). The [train station](tooltip:train-station) is just a few blocks away." },
                { speaker: "Sarah", text: "Good idea. I like [traveling](tooltip:travel) by train." },
                { speaker: "Liam", text: "Me too. And when we [arrive](tooltip:arrive), we can [rent a car](tooltip:rent-car) to explore the area." },
                { speaker: "Sarah", text: "Perfect! I’ll check the [bus](tooltip:bus) [schedules](tooltip:schedule) just in case we need them later." }
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
                    title: "Transport & Hubs",
                    audio: "TTS: Train. Train station. Bus. Bus stop. Car. Parking lot. Airport. Flight. Subway. Platform. Driver. Conductor. Pilot. Sailor. Ticket. Schedule.",
                    items:[
                        { term: "Train / Train station", trans: "trem / estação de trem" },
                        { term: "Bus / Bus stop", trans: "ônibus / ponto de ônibus" },
                        { term: "Car / Parking lot", trans: "carro / estacionamento" },
                        { term: "Airport / Flight", trans: "aeroporto / voo" },
                        { term: "Subway / Platform", trans: "metrô / plataforma" },
                        { term: "Driver / Conductor", trans: "motorista / cobrador (condutor)" },
                        { term: "Pilot / Sailor", trans: "piloto / marinheiro" },
                        { term: "Ticket / Schedule", trans: "passagem / horário (cronograma)" }
                    ]
                },
                {
                    title: "Directions & Navigation",
                    audio: "TTS: Get to. Destination. Route. Go straight. Turn left. Turn right. Block. Intersection. Nearest. Far.",
                    items:[
                        { term: "Get to", trans: "chegar a (um lugar)" },
                        { term: "Destination", trans: "destino" },
                        { term: "Route", trans: "rota / caminho" },
                        { term: "Go straight", trans: "seguir em frente" },
                        { term: "Turn left / Turn right", trans: "virar à esquerda / virar à direita" },
                        { term: "Block / Intersection", trans: "quarteirão / cruzamento" },
                        { term: "Nearest / Far", trans: "mais próximo / longe" }
                    ]
                },
                {
                    title: "Travel Actions & Phrasal Verbs",
                    audio: "TTS: Trip. Journey. Travel. Rent a car. Get in. Get out. Get on. Get off. Take a break. Get away. Get lost.",
                    items:[
                        { term: "Trip / Journey", trans: "viagem / jornada" },
                        { term: "Travel", trans: "viajar" },
                        { term: "Rent a car", trans: "alugar um carro" },
                        { term: "Get in / Get out", trans: "entrar / sair (carro, táxi)" },
                        { term: "Get on / Get off", trans: "subir / descer (ônibus, trem, avião)" },
                        { term: "Take a break", trans: "fazer uma pausa" },
                        { term: "Get away", trans: "escapar / sair de férias" },
                        { term: "Get lost", trans: "perder-se" }
                    ]
                }
            ],

            // --- 2B: EXAMPLES ---
            exampleGroups:[
                {
                    title: "Transport & Hubs",
                    audio: "TTS: We need to go to the train station to catch our train. Wait at the bus stop until the bus arrives. I left my car in the parking lot. We arrived at the airport two hours before our flight. Stand behind the yellow line on the subway platform. The driver stopped the bus, and the conductor checked our tickets. The pilot flew the plane safely, while the sailor navigated the ship. Check the schedule before you buy your ticket.",
                    items:[
                        { term: "Train / Train station", sent: "We need to go to the train station to catch our train.", trans: "Precisamos ir à estação de trem para pegar nosso trem." },
                        { term: "Bus / Bus stop", sent: "Wait at the bus stop until the bus arrives.", trans: "Espere no ponto de ônibus até o ônibus chegar." },
                        { term: "Car / Parking lot", sent: "I left my car in the parking lot.", trans: "Deixei meu carro no estacionamento." },
                        { term: "Airport / Flight", sent: "We arrived at the airport two hours before our flight.", trans: "Chegamos ao aeroporto duas horas antes do nosso voo." },
                        { term: "Subway / Platform", sent: "Stand behind the yellow line on the subway platform.", trans: "Fique atrás da linha amarela na plataforma do metrô." },
                        { term: "Driver / Conductor", sent: "The driver stopped the bus, and the conductor checked our tickets.", trans: "O motorista parou o ônibus, e o cobrador checou nossas passagens." },
                        { term: "Pilot / Sailor", sent: "The pilot flew the plane safely, while the sailor navigated the ship.", trans: "O piloto pilotou o avião com segurança, enquanto o marinheiro navegou o navio." },
                        { term: "Ticket / Schedule", sent: "Check the schedule before you buy your ticket.", trans: "Verifique o horário antes de comprar sua passagem." }
                    ]
                },
                {
                    title: "Directions & Navigation",
                    audio: "TTS: How do I get to the museum from here? Our final destination is the beach. We followed a scenic route along the coast. Go straight for two blocks and you will see it. Turn left at the bank, then turn right. Walk one block and stop at the intersection. Where is the nearest pharmacy? Is it far?",
                    items:[
                        { term: "Get to", sent: "How do I get to the museum from here?", trans: "Como eu chego ao museu daqui?" },
                        { term: "Destination", sent: "Our final destination is the beach.", trans: "Nosso destino final é a praia." },
                        { term: "Route", sent: "We followed a scenic route along the coast.", trans: "Seguimos uma rota panorâmica ao longo da costa." },
                        { term: "Go straight", sent: "Go straight for two blocks and you will see it.", trans: "Siga em frente por dois quarteirões e você o verá." },
                        { term: "Turn left / Turn right", sent: "Turn left at the bank, then turn right.", trans: "Vire à esquerda no banco, depois vire à direita." },
                        { term: "Block / Intersection", sent: "Walk one block and stop at the intersection.", trans: "Ande um quarteirão e pare no cruzamento." },
                        { term: "Nearest / Far", sent: "Where is the nearest pharmacy? Is it far?", trans: "Onde fica a farmácia mais próxima? É longe?" }
                    ]
                },
                {
                    title: "Travel Actions & Phrasal Verbs",
                    audio: "TTS: We took a short trip, but it was a long journey. I love to travel and explore new countries. When we arrive, we will rent a car to drive around. Get in the car quickly, and get out when we stop. We get on the bus here and get off at the next stop. Let's take a break and have some coffee. We need to get away for the weekend and relax. Use a map so you don't get lost in the city center.",
                    items:[
                        { term: "Trip / Journey", sent: "We took a short trip, but it was a long journey.", trans: "Fizemos uma viagem curta, mas foi uma longa jornada." },
                        { term: "Travel", sent: "I love to travel and explore new countries.", trans: "Eu amo viajar e explorar novos países." },
                        { term: "Rent a car", sent: "When we arrive, we will rent a car to drive around.", trans: "Quando chegarmos, vamos alugar um carro para dirigir por aí." },
                        { term: "Get in / Get out", sent: "Get in the car quickly, and get out when we stop.", trans: "Entre no carro rapidamente e saia quando pararmos." },
                        { term: "Get on / Get off", sent: "We get on the bus here and get off at the next stop.", trans: "Nós subimos no ônibus aqui e descemos no próximo ponto." },
                        { term: "Take a break", sent: "Let's take a break and have some coffee.", trans: "Vamos fazer uma pausa e tomar um café." },
                        { term: "Get away", sent: "We need to get away for the weekend and relax.", trans: "Precisamos escapar no fim de semana e relaxar." },
                        { term: "Get lost", sent: "Use a map so you don't get lost in the city center.", trans: "Use um mapa para não se perder no centro da cidade." }
                    ]
                }
            ],

            // --- 2C: PRACTICE ---
            drillGroups:[
                {
                    title: "Transport & Hubs",
                    drills:[
                        { q: "Where do you board a train?", options:[{t: "Airport", c: false}, {t: "Bus stop", c: false}, {t: "Train station", c: true}, {t: "Parking lot", c: false}], type: "mcq" },
                        { q: "What is the place where you catch a flight?", options:[{t: "Subway", c: false}, {t: "Airport", c: true}, {t: "Platform", c: false}, {t: "Intersection", c: false}], type: "mcq" },
                        { q: "Where should you leave your car when you are not driving it?", options:[{t: "Parking lot", c: true}, {t: "Platform", c: false}, {t: "Bus stop", c: false}, {t: "Route", c: false}], type: "mcq" },
                        { q: "Where do you stand to wait for a subway train?", options:[{t: "Intersection", c: false}, {t: "Schedule", c: false}, {t: "Platform", c: true}, {t: "Destination", c: false}], type: "mcq" },
                        { q: "Which word refers to the person who flies an airplane?", options:[{t: "Driver", c: false}, {t: "Conductor", c: false}, {t: "Sailor", c: false}, {t: "Pilot", c: true}], type: "mcq" },
                        { q: "Who is the person that checks tickets on a train?", options:[{t: "Pilot", c: false}, {t: "Conductor", c: true}, {t: "Driver", c: false}, {t: "Sailor", c: false}], type: "mcq" },
                        { q: "Which word refers to the person who drives a bus?", options:[{t: "Pilot", c: false}, {t: "Conductor", c: false}, {t: "Driver", c: true}, {t: "Sailor", c: false}], type: "mcq" },
                        { q: "Who navigates a ship across the sea?", options:[{t: "Sailor", c: true}, {t: "Conductor", c: false}, {t: "Pilot", c: false}, {t: "Driver", c: false}], type: "mcq" },
                        { q: "What document do you need to board a flight or a train?", options:[{t: "Schedule", c: false}, {t: "Ticket", c: true}, {t: "Route", c: false}, {t: "Map", c: false}], type: "mcq" },
                        { q: "Where do you check the departure times for buses or trains?", options:[{t: "Ticket", c: false}, {t: "Destination", c: false}, {t: "Schedule", c: true}, {t: "Platform", c: false}], type: "mcq" },
                        { q: "An underground train system is usually called a...", options:[{t: "Subway", c: true}, {t: "Flight", c: false}, {t: "Bus", c: false}, {t: "Car", c: false}], type: "mcq" },
                        { q: "A journey made by an airplane is a...", options:[{t: "Drive", c: false}, {t: "Flight", c: true}, {t: "Ride", c: false}, {t: "Sail", c: false}], type: "mcq" },
                        { q: "Wait at the _______ until the bus arrives.", options:[{t: "Airport", c: false}, {t: "Train station", c: false}, {t: "Parking lot", c: false}, {t: "Bus stop", c: true}], type: "mcq" },
                        { q: "We missed our _______ to London and had to wait for the next plane.", options:[{t: "Flight", c: true}, {t: "Subway", c: false}, {t: "Car", c: false}, {t: "Train", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Directions & Navigation",
                    drills:[
                        { q: "Which phrase means 'to find your way to a place'?", options:[{t: "Get lost", c: false}, {t: "Get to", c: true}, {t: "Get away", c: false}, {t: "Take a break", c: false}], type: "mcq" },
                        { q: "The final place you are traveling to is your...", options:[{t: "Route", c: false}, {t: "Block", c: false}, {t: "Destination", c: true}, {t: "Intersection", c: false}], type: "mcq" },
                        { q: "The path or way you follow to go somewhere is a...", options:[{t: "Destination", c: false}, {t: "Route", c: true}, {t: "Schedule", c: false}, {t: "Ticket", c: false}], type: "mcq" },
                        { q: "If you shouldn't turn, what do you do?", options:[{t: "Go straight", c: true}, {t: "Turn left", c: false}, {t: "Turn right", c: false}, {t: "Get lost", c: false}], type: "mcq" },
                        { q: "What is the opposite of 'Turn left'?", options:[{t: "Go straight", c: false}, {t: "Turn right", c: true}, {t: "Get lost", c: false}, {t: "Get to", c: false}], type: "mcq" },
                        { q: "A section of a street between two corners is a...", options:[{t: "Destination", c: false}, {t: "Route", c: false}, {t: "Intersection", c: false}, {t: "Block", c: true}], type: "mcq" },
                        { q: "The place where two streets cross each other is an...", options:[{t: "Intersection", c: true}, {t: "Platform", c: false}, {t: "Block", c: false}, {t: "Airport", c: false}], type: "mcq" },
                        { q: "Which word do you use to ask for the closest location (e.g., bank)?", options:[{t: "Far", c: false}, {t: "Nearest", c: true}, {t: "Straight", c: false}, {t: "Route", c: false}], type: "mcq" },
                        { q: "What is the opposite of 'near'?", options:[{t: "Nearest", c: false}, {t: "Straight", c: false}, {t: "Far", c: true}, {t: "Left", c: false}], type: "mcq" },
                        { q: "Excuse me, how do I _______ the museum?", options:[{t: "get off", c: false}, {t: "get lost", c: false}, {t: "get in", c: false}, {t: "get to", c: true}], type: "mcq" },
                        { q: "Walk past the bank, and take the next _______.", options:[{t: "turn left", c: true}, {t: "go straight", c: false}, {t: "far", c: false}, {t: "destination", c: false}], type: "mcq" },
                        { q: "Go straight for two _______ and then stop.", options:[{t: "destinations", c: false}, {t: "blocks", c: true}, {t: "routes", c: false}, {t: "schedules", c: false}], type: "mcq" },
                        { q: "Is the train station _______ from here, or can I walk?", options:[{t: "nearest", c: false}, {t: "far", c: true}, {t: "straight", c: false}, {t: "left", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Travel Actions & Phrasal Verbs",
                    drills:[
                        { q: "Which noun refers to a journey to a place and back?", options:[{t: "Destination", c: false}, {t: "Schedule", c: false}, {t: "Trip", c: true}, {t: "Route", c: false}], type: "mcq" },
                        { q: "A long trip from one place to another is called a...", options:[{t: "Block", c: false}, {t: "Journey", c: true}, {t: "Intersection", c: false}, {t: "Platform", c: false}], type: "mcq" },
                        { q: "What verb means 'to go to different places'?", options:[{t: "Rent", c: false}, {t: "Travel", c: true}, {t: "Take", c: false}, {t: "Check", c: false}], type: "mcq" },
                        { q: "To pay to use a vehicle for a short time is to...", options:[{t: "Get off", c: false}, {t: "Get in", c: false}, {t: "Rent a car", c: true}, {t: "Take a break", c: false}], type: "mcq" },
                        { q: "Which phrasal verb means 'to enter a vehicle' like a car or taxi?", options:[{t: "Get off", c: false}, {t: "Get out", c: false}, {t: "Get on", c: false}, {t: "Get in", c: true}], type: "mcq" },
                        { q: "Which phrasal verb means 'to leave a vehicle' like a car or taxi?", options:[{t: "Get out", c: true}, {t: "Get in", c: false}, {t: "Get on", c: false}, {t: "Get away", c: false}], type: "mcq" },
                        { q: "Which phrasal verb means 'to board a large vehicle' like a bus, train, or plane?", options:[{t: "Get in", c: false}, {t: "Get out", c: false}, {t: "Get on", c: true}, {t: "Get off", c: false}], type: "mcq" },
                        { q: "Which phrasal verb means 'to leave a large vehicle' like a bus, train, or plane?", options:[{t: "Get off", c: true}, {t: "Get on", c: false}, {t: "Get in", c: false}, {t: "Get lost", c: false}], type: "mcq" },
                        { q: "What phrase means 'to stop for rest'?", options:[{t: "Get away", c: false}, {t: "Take a break", c: true}, {t: "Get lost", c: false}, {t: "Rent a car", c: false}], type: "mcq" },
                        { q: "What phrase means 'to escape or go on vacation'?", options:[{t: "Get away", c: true}, {t: "Get lost", c: false}, {t: "Get in", c: false}, {t: "Take a break", c: false}], type: "mcq" },
                        { q: "What phrase means 'to not know where you are'?", options:[{t: "Get out", c: false}, {t: "Get to", c: false}, {t: "Get lost", c: true}, {t: "Get away", c: false}], type: "mcq" },
                        { q: "Hurry up! We need to _______ the train before it leaves.", options:[{t: "get out", c: false}, {t: "get on", c: true}, {t: "get off", c: false}, {t: "get in", c: false}], type: "mcq" },
                        { q: "I didn't have a map, so I _______ in the city center.", options:[{t: "got lost", c: true}, {t: "got away", c: false}, {t: "got out", c: false}, {t: "took a break", c: false}], type: "mcq" }
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
    { id: "step3a", label: "3A: Key Expressions" }, // CORRECT
    { id: "step3b", label: "3B: Dialogues" },       // CORRECT
    { id: "step3c", label: "3C: Practice" }         // CORRECT
],
            // --- 3A: KEY EXPRESSIONS ---
            patterns:[
                {
                    title: "Key Expression 1: Asking for & Giving Directions",
                    audio: "TTS: Use these phrases when you are lost or helping someone find their way. Excuse me, how do I get to the museum? Where is the nearest pharmacy? You need to take the second left. Go straight for two blocks. It is on the corner.",
                    explanation: "Use these phrases when you are lost or helping someone find their way.<br><span style='color:var(--primary-blue); font-style:italic;'>(Use estas frases quando estiver perdido ou ajudando alguém a encontrar o caminho.)</span>",
                    samples:[
                        { en: "<b>Excuse me, how do I get to</b> the museum?", pt: "<span style='color:var(--primary-blue)'>(Com licença, como eu chego ao museu?)</span>" },
                        { en: "<b>Where is the nearest</b> pharmacy?", pt: "<span style='color:var(--primary-blue)'>(Onde fica a farmácia mais próxima?)</span>" },
                        { en: "You need to <b>take the second left</b>.", pt: "<span style='color:var(--primary-blue)'>(Você precisa pegar a segunda à esquerda.)</span>" },
                        { en: "<b>Go straight</b> for two blocks.", pt: "<span style='color:var(--primary-blue)'>(Siga em frente por dois quarteirões.)</span>" },
                        { en: "It is <b>on the corner</b> of Main Street.", pt: "<span style='color:var(--primary-blue)'>(Fica na esquina da Rua Principal.)</span>" }
                    ]
                },
                {
                    title: "Key Expression 2: Talking About Trips",
                    audio: "TTS: Use the past tense for completed trips, and the present continuous for future plans. Are you enjoying your trip? I went to Paris last year. I am planning a trip to Japan next spring. Where are you going for your vacation?",
                    explanation: "Use the past tense for completed trips, and the present continuous for future plans.<br><span style='color:var(--primary-blue); font-style:italic;'>(Use o tempo passado para viagens concluídas e o presente contínuo para planos futuros.)</span>",
                    samples:[
                        { en: "<b>Are you enjoying</b> your trip?", pt: "<span style='color:var(--primary-blue)'>(Você está aproveitando sua viagem?)</span>" },
                        { en: "I <b>went to</b> Paris last year.", pt: "<span style='color:var(--primary-blue)'>(Eu fui a Paris no ano passado.)</span>" },
                        { en: "I <b>am planning a trip</b> to Japan next spring.", pt: "<span style='color:var(--primary-blue)'>(Estou planejando uma viagem ao Japão na próxima primavera.)</span>" },
                        { en: "<b>Where are you going</b> for your vacation?", pt: "<span style='color:var(--primary-blue)'>(Para onde você vai nas suas férias?)</span>" }
                    ]
                },
                {
                    title: "Key Expression 3: Transportation & Logistics",
                    audio: "TTS: Phrases for choosing how to travel, asking about time, and checking prices. How are we getting there? We can take the train. How much does it cost to get to the city center? What time is it? I need to catch my flight. I'll check the bus schedules.",
                    explanation: "Phrases for choosing how to travel, asking about time, and checking prices.<br><span style='color:var(--primary-blue); font-style:italic;'>(Frases para escolher como viajar, perguntar sobre o tempo e verificar preços.)</span>",
                    samples:[
                        { en: "<b>How are we getting there?</b> We can take the train.", pt: "<span style='color:var(--primary-blue)'>(Como vamos chegar lá? Podemos pegar o trem.)</span>" },
                        { en: "<b>How much does it cost</b> to get to the city center?", pt: "<span style='color:var(--primary-blue)'>(Quanto custa para chegar ao centro da cidade?)</span>" },
                        { en: "<b>What time is it?</b> I need to catch my flight.", pt: "<span style='color:var(--primary-blue)'>(Que horas são? Preciso pegar meu voo.)</span>" },
                        { en: "I’ll <b>check the bus schedules</b>.", pt: "<span style='color:var(--primary-blue)'>(Vou verificar os horários dos ônibus.)</span>" }
                    ]
                },
                {
                    title: "Key Expression 4: Linking Words for Travel Stories",
                    audio: "TTS: Use these words to tell a story or describe a sequence of events. First, he asked a tourist for directions. Afterwards, he found the museum. Subsequently, they planned a trip to the countryside. Therefore, they decided to explore all options.",
                    explanation: "Use these words to tell a story or describe a sequence of events.<br><span style='color:var(--primary-blue); font-style:italic;'>(Use estas palavras para contar uma história ou descrever uma sequência de eventos.)</span>",
                    samples:[
                        { en: "<b>First</b>, he asked a tourist for directions.", pt: "<span style='color:var(--primary-blue)'>(Primeiro, ele pediu informações a um turista.)</span>" },
                        { en: "<b>Afterwards</b>, he found the museum.", pt: "<span style='color:var(--primary-blue)'>(Depois, ele encontrou o museu.)</span>" },
                        { en: "<b>Subsequently</b>, they planned a trip to the countryside.", pt: "<span style='color:var(--primary-blue)'>(Subsequentemente/Logo após, eles planejaram uma viagem para o interior.)</span>" },
                        { en: "<b>Therefore</b>, they decided to explore all options.", pt: "<span style='color:var(--primary-blue)'>(Portanto, eles decidiram explorar todas as opções.)</span>" }
                    ]
                }
            ],

            // --- 3B: DIALOGUES ---
            dialogueGroups:[
                {
                    title: "Dialogue 1: On the Street",
                    audio: "TTS: Excuse me, how do I get to the train station? Go straight for two blocks. It is on the corner.",
                    lines:[
                        { speaker: "Tourist", text: "Excuse me, how do I get to the train station?", pt: "(Com licença, como chego à estação de trem?)" },
                        { speaker: "Local", text: "Go straight for two blocks. It is on the corner.", pt: "(Siga em frente por dois quarteirões. Fica na esquina.)" }
                    ]
                },
                {
                    title: "Dialogue 2: Finding a Pharmacy",
                    audio: "TTS: Excuse me, where is the nearest pharmacy? You need to take the second left. You can't miss it!",
                    lines:[
                        { speaker: "Liam", text: "Excuse me, where is the nearest pharmacy?", pt: "(Com licença, onde fica a farmácia mais próxima?)" },
                        { speaker: "Guide", text: "You need to take the second left. You can't miss it!", pt: "(Você precisa pegar a segunda à esquerda. Não tem como errar!)" }
                    ]
                },
                {
                    title: "Dialogue 3: Vacation Plans",
                    audio: "TTS: Where are you going for your vacation? I am planning a trip to Japan next spring.",
                    lines:[
                        { speaker: "Sarah", text: "Where are you going for your vacation?", pt: "(Para onde você vai nas suas férias?)" },
                        { speaker: "Mark", text: "I am planning a trip to Japan next spring.", pt: "(Estou planejando uma viagem para o Japão na próxima primavera.)" }
                    ]
                },
                {
                    title: "Dialogue 4: Past Journeys",
                    audio: "TTS: Are you enjoying your trip? Yes! I went to Paris last year, but this city is amazing too.",
                    lines:[
                        { speaker: "Host", text: "Are you enjoying your trip?", pt: "(Você está aproveitando sua viagem?)" },
                        { speaker: "Liam", text: "Yes! I went to Paris last year, but this city is amazing too.", pt: "(Sim! Eu fui a Paris ano passado, mas esta cidade também é incrível.)" }
                    ]
                },
                {
                    title: "Dialogue 5: Logistics & Transport",
                    audio: "TTS: How are we getting there? We can take the train. I'll check the bus schedules just in case.",
                    lines:[
                        { speaker: "Sarah", text: "How are we getting there?", pt: "(Como nós vamos chegar lá?)" },
                        { speaker: "Liam", text: "We can take the train. I'll check the bus schedules just in case.", pt: "(Podemos pegar o trem. Vou checar os horários de ônibus, só por precaução.)" }
                    ]
                },
                {
                    title: "Dialogue 6: Telling a Travel Story",
                    audio: "TTS: What did you do yesterday? First, I asked a tourist for directions. Afterwards, I found the museum. Subsequently, we rented a car!",
                    lines:[
                        { speaker: "Friend", text: "What did you do yesterday?", pt: "(O que você fez ontem?)" },
                        { speaker: "Liam", text: "First, I asked a tourist for directions. Afterwards, I found the museum. Subsequently, we rented a car!", pt: "(Primeiro, pedi informações a um turista. Depois, encontrei o museu. Posteriormente, alugamos um carro!)" }
                    ]
                }
            ],
            // --- 3C: PRACTICE ---
            grammarDrillGroups:[
                {
                    title: "Asking for & Giving Directions",
                    drills:[
                        { q: "_____ me, how do I get to the museum?", options:[{t: "Excuse", c: true}, {t: "Pardon", c: false}, {t: "Sorry", c: false}, {t: "Hello", c: false}], type: "mcq" },
                        { q: "_____ do I get to the train station?", options:[{t: "Who", c: false}, {t: "What", c: false}, {t: "How", c: true}, {t: "Which", c: false}], type: "mcq" },
                        { q: "Where is the _____ pharmacy?", options:[{t: "near", c: false}, {t: "nearest", c: true}, {t: "far", c: false}, {t: "straight", c: false}], type: "mcq" },
                        { q: "You need to _____ the second left.", options:[{t: "make", c: false}, {t: "take", c: true}, {t: "do", c: false}, {t: "get", c: false}], type: "mcq" },
                        { q: "Go _____ for two blocks.", options:[{t: "straight", c: true}, {t: "right", c: false}, {t: "corner", c: false}, {t: "nearest", c: false}], type: "mcq" },
                        { q: "It is on the _____ of Main Street.", options:[{t: "block", c: false}, {t: "straight", c: false}, {t: "corner", c: true}, {t: "intersection", c: false}], type: "mcq" },
                        { q: "Walk past the bank, and take the next _____.", options:[{t: "straight", c: false}, {t: "turn", c: true}, {t: "go", c: false}, {t: "corner", c: false}], type: "mcq" },
                        { q: "_____ is the nearest subway station?", options:[{t: "How", c: false}, {t: "What", c: false}, {t: "Where", c: true}, {t: "When", c: false}], type: "mcq" },
                        { q: "You can't _____ it! It's the big red building.", options:[{t: "see", c: false}, {t: "miss", c: true}, {t: "find", c: false}, {t: "get", c: false}], type: "mcq" },
                        { q: "Go straight _____ about five minutes.", options:[{t: "for", c: true}, {t: "to", c: false}, {t: "at", c: false}, {t: "on", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Talking About Trips",
                    drills:[
                        { q: "Are you _____ your trip?", options:[{t: "enjoying", c: true}, {t: "enjoy", c: false}, {t: "enjoyed", c: false}, {t: "enjoys", c: false}], type: "mcq" },
                        { q: "I _____ to Paris last year.", options:[{t: "go", c: false}, {t: "went", c: true}, {t: "gone", c: false}, {t: "going", c: false}], type: "mcq" },
                        { q: "I am _____ a trip to Japan next spring.", options:[{t: "plan", c: false}, {t: "planning", c: true}, {t: "planned", c: false}, {t: "plans", c: false}], type: "mcq" },
                        { q: "Where are you _____ for your vacation?", options:[{t: "go", c: false}, {t: "went", c: false}, {t: "going", c: true}, {t: "gone", c: false}], type: "mcq" },
                        { q: "Did you _____ to Italy last summer?", options:[{t: "went", c: false}, {t: "going", c: false}, {t: "gone", c: false}, {t: "go", c: true}], type: "mcq" },
                        { q: "We went to the beach last _____.", options:[{t: "tomorrow", c: false}, {t: "summer", c: true}, {t: "now", c: false}, {t: "next", c: false}], type: "mcq" },
                        { q: "Where _____ you going to stay?", options:[{t: "is", c: false}, {t: "are", c: true}, {t: "am", c: false}, {t: "do", c: false}], type: "mcq" },
                        { q: "I _____ a great time in London last week.", options:[{t: "have", c: false}, {t: "having", c: false}, {t: "had", c: true}, {t: "has", c: false}], type: "mcq" },
                        { q: "Are they _____ to Europe next month?", options:[{t: "travels", c: false}, {t: "traveling", c: true}, {t: "traveled", c: false}, {t: "travel", c: false}], type: "mcq" },
                        { q: "Where are you going _____ your vacation?", options:[{t: "for", c: true}, {t: "to", c: false}, {t: "at", c: false}, {t: "in", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Transportation & Logistics",
                    drills:[
                        { q: "How are we _____ there?", options:[{t: "getting", c: true}, {t: "get", c: false}, {t: "got", c: false}, {t: "gets", c: false}], type: "mcq" },
                        { q: "We can _____ the train.", options:[{t: "taking", c: false}, {t: "take", c: true}, {t: "took", c: false}, {t: "taken", c: false}], type: "mcq" },
                        { q: "How much does it _____ to get to the city center?", options:[{t: "price", c: false}, {t: "pay", c: false}, {t: "cost", c: true}, {t: "buy", c: false}], type: "mcq" },
                        { q: "What _____ is it?", options:[{t: "clock", c: false}, {t: "hour", c: false}, {t: "time", c: true}, {t: "schedule", c: false}], type: "mcq" },
                        { q: "I need to _____ my flight.", options:[{t: "catch", c: true}, {t: "get", c: false}, {t: "take", c: false}, {t: "board", c: false}], type: "mcq" },
                        { q: "I’ll _____ the bus schedules.", options:[{t: "read", c: false}, {t: "look", c: false}, {t: "check", c: true}, {t: "watch", c: false}], type: "mcq" },
                        { q: "How much _____ a round-trip ticket cost?", options:[{t: "do", c: false}, {t: "does", c: true}, {t: "is", c: false}, {t: "are", c: false}], type: "mcq" },
                        { q: "We can _____ a car when we arrive.", options:[{t: "rent", c: true}, {t: "buy", c: false}, {t: "borrow", c: false}, {t: "take", c: false}], type: "mcq" },
                        { q: "What time _____ the train leave?", options:[{t: "do", c: false}, {t: "is", c: false}, {t: "does", c: true}, {t: "are", c: false}], type: "mcq" },
                        { q: "Is the train _____ time?", options:[{t: "in", c: false}, {t: "at", c: false}, {t: "on", c: true}, {t: "by", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Linking Words for Travel Stories",
                    drills:[
                        { q: "_____, he asked a tourist for directions.", options:[{t: "First", c: true}, {t: "Afterwards", c: false}, {t: "Therefore", c: false}, {t: "However", c: false}], type: "mcq" },
                        { q: "_____, he found the museum.", options:[{t: "First", c: false}, {t: "Afterwards", c: true}, {t: "Although", c: false}, {t: "Nevertheless", c: false}], type: "mcq" },
                        { q: "_____, they planned a trip to the countryside.", options:[{t: "First", c: false}, {t: "However", c: false}, {t: "Subsequently", c: true}, {t: "Although", c: false}], type: "mcq" },
                        { q: "_____, they decided to explore all options.", options:[{t: "First", c: false}, {t: "Therefore", c: true}, {t: "Although", c: false}, {t: "However", c: false}], type: "mcq" },
                        { q: "Which linking word indicates a sequence of events?", options:[{t: "However", c: false}, {t: "Although", c: false}, {t: "Nevertheless", c: false}, {t: "Subsequently", c: true}], type: "mcq" },
                        { q: "Which word means 'as a result'?", options:[{t: "Therefore", c: true}, {t: "First", c: false}, {t: "Although", c: false}, {t: "However", c: false}], type: "mcq" },
                        { q: "Which word means 'later' or 'after that'?", options:[{t: "First", c: false}, {t: "Afterwards", c: true}, {t: "Therefore", c: false}, {t: "Although", c: false}], type: "mcq" },
                        { q: "First, we checked in. _____, we went to our room.", options:[{t: "However", c: false}, {t: "Although", c: false}, {t: "Subsequently", c: true}, {t: "Nevertheless", c: false}], type: "mcq" },
                        { q: "He didn't know the way. _____, he asked for directions.", options:[{t: "First", c: false}, {t: "Therefore", c: true}, {t: "Although", c: false}, {t: "However", c: false}], type: "mcq" },
                        { q: "We visited the Eiffel Tower. _____, we had lunch.", options:[{t: "Afterwards", c: true}, {t: "First", c: false}, {t: "Although", c: false}, {t: "However", c: false}], type: "mcq" }
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
                { text: "Excuse me, how do I get to the museum? ↗", audio: "TTS: Excuse me, how do I get to the museum?" },
                { text: "Where is the nearest train station? ↘", audio: "TTS: Where is the nearest train station?" },
                { text: "You need to take the second left. ↘", audio: "TTS: You need to take the second left." },
                { text: "Go straight for two blocks. ↘", audio: "TTS: Go straight for two blocks." },
                { text: "I went to Paris last year. ↘", audio: "TTS: I went to Paris last year." },
                { text: "I am planning a trip to Japan next spring. ↘", audio: "TTS: I am planning a trip to Japan next spring." },
                { text: "How much does it cost to get to the city center? ↘", audio: "TTS: How much does it cost to get to the city center?" },
                { text: "What time is it? I need to catch my train. ↘", audio: "TTS: What time is it? I need to catch my train." },
                { text: "I'll check the bus schedules. ↘", audio: "TTS: I'll check the bus schedules." },
                { text: "We can rent a car to explore the countryside. ↘", audio: "TTS: We can rent a car to explore the countryside." }
            ]
        },

        // ======================================================
        // STEP 5: LISTENING PRACTICE (REWRITTEN)
        // ======================================================
        {
            title: "Listening Practice",
            drills:[
                // Drill 1: Typing - A Travel Vlog Update
                {
                    type: "typing",
                    instruction: "Listen to the travel vlog update and type the missing words.",
                    audio: "TTS: Hi everyone! I am currently driving along the coast. We rented a car yesterday. The route is beautiful. We stopped at a small village to take a break. Next, we are going to the mountains.",
                    text: "Hi everyone! I am currently [driving] along the coast. We [rented] a car yesterday. The [route] is beautiful. We stopped at a small village to [take a break]. Next, we are going to the [mountains]."
                },
                // Drill 2: Dropdown - At the Ticket Counter
                {
                    type: "dropdown",
                    instruction: "Listen to the conversation at the train station.",
                    audio: "TTS: Agent: Next please. Traveler: I need a ticket to Oxford. Agent: One way or round trip? Traveler: Round trip. How much is it? Agent: It's 20 pounds. The train leaves from Platform 4.",
                    questions:[
                        { q: "Traveler: I need a [ticket* | map | schedule] to Oxford.", a: "ticket" },
                        { q: "Agent: One way or [round trip* | long trip | short trip]?", a: "round trip" },
                        { q: "Traveler: How much [is* | does | are] it?", a: "is" },
                        { q: "Agent: The train leaves from [Platform* | Gate | Bus Stop] 4.", a: "Platform" }
                    ]
                },
                // Drill 3: Audio Choice - A Missed Connection
                {
                    type: "audio-choice",
                    instruction: "Listen to the situation. Why is the speaker waiting?",
                    audio: "TTS: I arrived at the bus stop at 9:00 AM, but I didn't see the bus. I checked the schedule and realized it left five minutes ago. Now I have to wait for the next one.",
                    options:[
                        { t: "He arrived too early.", c: false },
                        { t: "He missed the bus.", c: true },
                        { t: "The bus broke down.", c: false },
                        { t: "He is waiting for a taxi.", c: false }
                    ]
                }
            ]
        },

        // ======================================================
        // STEP 6: READING PRACTICE (ADDED 3rd TEXT)
        // ======================================================
        {
            title: "Reading Practice",
            texts:[
                {
                    title: "Narration - Exploring a New City",
                    audio: "TTS: Liam, while exploring a new city, found himself lost. First, he asked a tourist, 'How do I get to the museum?' Afterwards, he received directions. Subsequently, he and Sarah planned a trip. Liam suggested, 'We can take the train,' and then added, 'We can rent a car.' In contrast, Sarah said, 'I’ll check the bus schedules.' Therefore, they decided to explore all transportation options. Before they finalized their plans, they confirmed the train station location.",
                    body: "Liam, while exploring a new city, found himself [lost](tooltip:get-lost). <b>[First](tooltip:first)</b>, he asked a tourist, 'How do I [get to](tooltip:get-to) the [museum](tooltip:museum)?' <b>[Afterwards](tooltip:afterwards)</b>, he received [directions](tooltip:directions). <b>[Subsequently](tooltip:subsequently)</b>, he and Sarah planned a [trip](tooltip:trip). Liam suggested, 'We can take the [train](tooltip:train),' and then added, 'We can [rent a car](tooltip:rent-car).' In contrast, Sarah said, 'I’ll check the [bus](tooltip:bus) [schedules](tooltip:schedule).' <b>[Therefore](tooltip:therefore)</b>, they decided to explore all [transportation](tooltip:transportation) options. Before they finalized their plans, they confirmed the [train station](tooltip:train-station) location.",
                    questions:[
                        { q: "What happened to Liam while he was exploring the city?", options:[{t: "He bought a car.", c: false}, {t: "He got lost.", c: true}, {t: "He found the train station.", c: false}], type: "mcq" },
                        { q: "What did Sarah decide to check?", options:[{t: "The bus schedules.", c: true}, {t: "The museum tickets.", c: false}, {t: "The rental car prices.", c: false}], type: "mcq" },
                        { q: "Which linking word from the text indicates a sequence of events (meaning 'after that')?", options:[{t: "Therefore", c: false}, {t: "First", c: false}, {t: "Subsequently", c: true}], type: "mcq" }
                    ]
                },
                {
                    title: "Dialogue - The Countryside Getaway",
                    audio: "TTS: Sarah: So, how are we getting there? Liam: We can take the train. The train station is just a few blocks away. Sarah: Good idea. I like traveling by train. Liam: Me too. And when we arrive, we can rent a car to explore the countryside. Sarah: Perfect! I’ll check the bus schedules in case we need to use it in the city. Liam: Great, let’s get this planned.",
                    body: "<b>Sarah:</b> So, how are we [getting there](tooltip:get-there)?<br><b>Liam:</b> We can take the [train](tooltip:train). The [train station](tooltip:train-station) is just a few [blocks](tooltip:block) away.<br><b>Sarah:</b> Good idea. I like [traveling](tooltip:travel) by train.<br><b>Liam:</b> Me too. And when we [arrive](tooltip:arrive), we can [rent a car](tooltip:rent-car) to explore the [countryside](tooltip:countryside).<br><b>Sarah:</b> Perfect! I’ll check the bus [schedules](tooltip:schedule) in case we need to use it in the city.<br><b>Liam:</b> Great, let’s get this planned.",
                    questions:[
                        { q: "How do Liam and Sarah plan to start their journey?", options:[{t: "By taking the train.", c: true}, {t: "By renting a car immediately.", c: false}, {t: "By taking a bus.", c: false}], type: "mcq" },
                        { q: "Why do they want to rent a car?", options:[{t: "To find the museum.", c: false}, {t: "To explore the countryside.", c: true}, {t: "Because the train is broken.", c: false}], type: "mcq" },
                        { q: "Where is the train station located?", options:[{t: "In the countryside.", c: false}, {t: "Right next to the museum.", c: false}, {t: "Just a few blocks away.", c: true}], type: "mcq" }
                    ]
                },
                // --- NEW TEXT ADDED HERE ---
                {
                    title: "Email - A Weekend in the Mountains",
                    audio: "TTS: Subject: Safe arrival! Hi Mom, We just arrived at the cabin. The journey was long but beautiful. We decided to get away for the weekend to relax. To get here, we drove on a scenic route through the forest. It was very far from the city! Tomorrow, we plan to take a break from driving and just walk to the nearest lake. I will send photos soon. Love, Emma.",
                    body: "<b>Subject:</b> Safe arrival!<br><br>Hi Mom,<br>We just arrived at the cabin. The [journey](tooltip:journey) was long but beautiful. We decided to [get away](tooltip:get-away) for the weekend to relax.<br><br>To [get to](tooltip:get-to) here, we drove on a scenic [route](tooltip:route) through the forest. It was very [far](tooltip:far) from the city! Tomorrow, we plan to [take a break](tooltip:take-break) from driving and just walk to the [nearest](tooltip:nearest) lake.<br><br>I will send photos soon.<br>Love, Emma.",
                    questions:[
                        { q: "Why did Emma and her group travel to the cabin?", options:[{t: "To work.", c: false}, {t: "To get away and relax.", c: true}, {t: "To fix their car.", c: false}], type: "mcq" },
                        { q: "How was the journey described?", options:[{t: "Short and boring.", c: false}, {t: "Fast and ugly.", c: false}, {t: "Long but beautiful.", c: true}], type: "mcq" },
                        { q: "What do they plan to do tomorrow?", options:[{t: "Drive back home.", c: false}, {t: "Take a break and walk.", c: true}, {t: "Buy a new map.", c: false}], type: "mcq" }
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
                { type: "matching", instruction: "Match the phrasal verb with its meaning.", pairs:[
                    { left: "Get in", right: "To enter a car or taxi", val: "1" },
                    { left: "Get out", right: "To leave a car or taxi", val: "2" },
                    { left: "Get on", right: "To board a bus, train, or plane", val: "3" },
                    { left: "Get off", right: "To leave a bus, train, or plane", val: "4" }
                ]},
                { type: "matching", instruction: "Match the place with its description.", pairs:[
                    { left: "Airport", right: "Where you catch a flight", val: "1" },
                    { left: "Train station", right: "Where you board a train", val: "2" },
                    { left: "Bus stop", right: "Where you wait for a bus", val: "3" },
                    { left: "Parking lot", right: "Where you leave your car", val: "4" }
                ]},
                { type: "matching", instruction: "Match the transportation roles.", pairs:[
                    { left: "Pilot", right: "Flies an airplane", val: "1" },
                    { left: "Sailor", right: "Navigates a ship", val: "2" },
                    { left: "Driver", right: "Operates a bus or car", val: "3" },
                    { left: "Conductor", right: "Checks tickets on a train", val: "4" }
                ]},
                { type: "matching", instruction: "Match the sequence linking words.", pairs:[
                    { left: "First", right: "At the beginning", val: "1" },
                    { left: "Afterwards", right: "Later or after that", val: "2" },
                    { left: "Subsequently", right: "Following in time/order", val: "3" },
                    { left: "Therefore", right: "As a result", val: "4" }
                ]},

                // --- WORD ORDER (5-14) ---
                { type: "word-order", instruction: "Put the words in order to make a sentence.", sentence: "me / how / do / get / Excuse / I / to / the / museum / ?", correct: "Excuse me how do I get to the museum ?" },
                { type: "word-order", instruction: "Put the words in order to make a sentence.", sentence: "nearest / train / is / Where / the / station / ?", correct: "Where is the nearest train station ?" },
                { type: "word-order", instruction: "Put the words in order to make a sentence.", sentence: "to / take / need / the / You / second / left / .", correct: "You need to take the second left ." },
                { type: "word-order", instruction: "Put the words in order to make a sentence.", sentence: "two / straight / Go / blocks / for / .", correct: "Go straight for two blocks ." },
                { type: "word-order", instruction: "Put the words in order to make a sentence.", sentence: "went / Paris / year / We / to / last / .", correct: "We went to Paris last year ." },
                { type: "word-order", instruction: "Put the words in order to make a sentence.", sentence: "trip / planning / a / am / I / to / Japan / .", correct: "I am planning a trip to Japan ." },
                { type: "word-order", instruction: "Put the words in order to make a sentence.", sentence: "getting / How / we / are / there / ?", correct: "How are we getting there ?" },
                { type: "word-order", instruction: "Put the words in order to make a sentence.", sentence: "does / cost / How / it / much / ?", correct: "How much does it cost ?" },
                { type: "word-order", instruction: "Put the words in order to make a sentence.", sentence: "tourist / First / asked / a / he / for / directions / .", correct: "First he asked a tourist for directions ." },
                { type: "word-order", instruction: "Put the words in order to make a sentence.", sentence: "to / decided / rent / They / a / car / .", correct: "They decided to rent a car ." },

                // --- CLICKABLE ERROR (15-24) ---
                { type: "clickable-error", instruction: "Click the incorrect word and fix it.", sentence: "How much [do](error:does) it cost to get to the city?" },
                { type: "clickable-error", instruction: "Click the incorrect word and fix it.", sentence: "Excuse me, how do I get [at](error:to) the museum?" },
                { type: "clickable-error", instruction: "Click the incorrect word and fix it.", sentence: "I am [plan](error:planning) a trip to Japan next spring." },
                { type: "clickable-error", instruction: "Click the incorrect word and fix it.", sentence: "We [go](error:went) to Paris last year." },
                { type: "clickable-error", instruction: "Click the incorrect word and fix it.", sentence: "Where is the [near](error:nearest) pharmacy?" },
                { type: "clickable-error", instruction: "Click the incorrect word and fix it.", sentence: "You need to [make](error:take) the second left." },
                { type: "clickable-error", instruction: "Click the incorrect word and fix it.", sentence: "Get [on](error:in) the car, we are leaving!" },
                { type: "clickable-error", instruction: "Click the incorrect word and fix it.", sentence: "The pilot[drives](error:flies) the airplane." },
                { type: "clickable-error", instruction: "Click the incorrect word and fix it.", sentence: "Go [straightly](error:straight) for two blocks." },
                { type: "clickable-error", instruction: "Click the incorrect word and fix it.", sentence: "Subsequently, they [plan](error:planned) a trip to the countryside yesterday." },

                // --- ODD ONE OUT (25-30) ---
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Transport)", options:[{t: "Bus", c: false}, {t: "Train", c: false}, {t: "Subway", c: false}, {t: "Ticket", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Roles)", options:[{t: "Pilot", c: false}, {t: "Conductor", c: false}, {t: "Driver", c: false}, {t: "Schedule", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Linking Words)", options:[{t: "Therefore", c: false}, {t: "Afterwards", c: false}, {t: "Subsequently", c: false}, {t: "Intersection", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Phrasal Verbs)", options:[{t: "Get on", c: false}, {t: "Get off", c: false}, {t: "Get in", c: false}, {t: "Get straight", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Places)", options:[{t: "Airport", c: false}, {t: "Train station", c: false}, {t: "Bus stop", c: false}, {t: "Sailor", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Directions)", options:[{t: "Straight", c: false}, {t: "Left", c: false}, {t: "Right", c: false}, {t: "Journey", c: true}] },

                // --- TRUE / FALSE (31-35) ---
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "A pilot flies an airplane.", correct: "true"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions: [{text: "You board a train at a parking lot.", correct: "false"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "The phrasal verb 'Get out' means to leave a car.", correct: "true"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "The word 'Subsequently' indicates a sequence of events.", correct: "true"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions: [{text: "Your 'destination' is the place you leave from.", correct: "false"}] },

                // --- MCQ (36-39) ---
                { type: "mcq", instruction: "Choose the best answer.<br>What do you need to board a flight?", options:[{t: "A map", c: false}, {t: "A ticket", c: true}, {t: "A schedule", c: false}, {t: "A block", c: false}] },
                { type: "mcq", instruction: "Choose the best answer.<br>Which phrase means 'to find your way to a place'?", options:[{t: "Get lost", c: false}, {t: "Get to", c: true}, {t: "Get away", c: false}, {t: "Get in", c: false}] },
                { type: "mcq", instruction: "Choose the best answer.<br>What is the opposite of 'near'?", options:[{t: "Straight", c: false}, {t: "Nearest", c: false}, {t: "Far", c: true}, {t: "Right", c: false}] },
                { type: "mcq", instruction: "Choose the best answer.<br>Where do you check the departure times for buses or trains?", options:[{t: "Platform", c: false}, {t: "Ticket", c: false}, {t: "Intersection", c: false}, {t: "Schedule", c: true}] },

                // --- CATEGORIZE (40) ---
                { type: "categorize", instruction: "Sort the words into the correct categories.", 
                    categories:[{id: "transport", name: "Modes of Transport"}, {id: "people", name: "People/Roles"}],
                    items:[
                        {text: "Bus", catId: "transport"}, 
                        {text: "Subway", catId: "transport"}, 
                        {text: "Airplane", catId: "transport"}, 
                        {text: "Pilot", catId: "people"}, 
                        {text: "Driver", catId: "people"}, 
                        {text: "Conductor", catId: "people"}
                    ] 
                }
            ]
        },

        // ======================================================
        // STEP 8: WRITING PRACTICE
        // ======================================================
        {
            title: "Writing Practice",
            instruction: "Write a short paragraph (5-7 sentences) about a memorable trip you took or a trip you are planning. Describe how you got there, the transportation you used, and any directions you had to follow or ask for. Use linking words to sequence your story.",
            example: "Last year, I took a <b>trip</b> to London. <b>First</b>, I went to the <b>airport</b> and caught my <b>flight</b>. <b>Afterwards</b>, I had to figure out how to <b>get to</b> my hotel. I asked a local, 'Excuse me, where is the <b>nearest</b> <b>subway</b> station?' He told me to <b>go straight</b> for two <b>blocks</b>. <b>Subsequently</b>, I bought a <b>ticket</b> and <b>got on</b> the train. <b>Therefore</b>, I didn't <b>get lost</b> on my first day!",
            prompts:[
                "Use at least three transport vocabulary words (e.g., flight, train, ticket).",
                "Include at least two linking words (First, Afterwards, Subsequently, Therefore).",
                "Include one phrase asking for or giving directions."
            ]
        },

        // ======================================================
        // STEP 9: FLASHCARDS
        // ======================================================
        {
            title: "Flashcards",
            items:[
                // --- Transport & Hubs ---
                { term: "Train", definition: "A connected series of vehicles moving on a railway.", defTrans: "Trem", example: "We need to go to the train station to catch our train.", exTrans: "(Precisamos ir à estação de trem para pegar nosso trem.)", audioFront: "TTS: Train", audioBack: "TTS: We need to go to the train station to catch our train." },
                { term: "Train station", definition: "The place where trains stop.", defTrans: "Estação de trem", example: "We need to go to the train station to catch our train.", exTrans: "(Precisamos ir à estação de trem para pegar nosso trem.)", audioFront: "TTS: Train station", audioBack: "TTS: We need to go to the train station to catch our train." },
                { term: "Bus", definition: "A large motor vehicle carrying passengers.", defTrans: "Ônibus", example: "I take the bus to work every day.", exTrans: "(Eu pego o ônibus para trabalhar todos os dias.)", audioFront: "TTS: Bus", audioBack: "TTS: I take the bus to work every day." },
                { term: "Bus stop", definition: "A designated place where buses stop.", defTrans: "Ponto de ônibus", example: "Wait at the bus stop until the bus arrives.", exTrans: "(Espere no ponto de ônibus até o ônibus chegar.)", audioFront: "TTS: Bus stop", audioBack: "TTS: Wait at the bus stop until the bus arrives." },
                { term: "Car", definition: "A four-wheeled road vehicle.", defTrans: "Carro", example: "I drive my car to work every day.", exTrans: "(Eu dirijo meu carro para trabalhar todos os dias.)", audioFront: "TTS: Car", audioBack: "TTS: I drive my car to work every day." },
                { term: "Parking lot", definition: "An area where cars are parked.", defTrans: "Estacionamento", example: "I left my car in the parking lot.", exTrans: "(Deixei meu carro no estacionamento.)", audioFront: "TTS: Parking lot", audioBack: "TTS: I left my car in the parking lot." },
                { term: "Airport", definition: "A complex of runways and buildings for air transport.", defTrans: "Aeroporto", example: "We arrived at the airport two hours before our flight.", exTrans: "(Chegamos ao aeroporto duas horas antes do nosso voo.)", audioFront: "TTS: Airport", audioBack: "TTS: We arrived at the airport two hours before our flight." },
                { term: "Flight", definition: "A journey made by air.", defTrans: "Voo", example: "We arrived at the airport two hours before our flight.", exTrans: "(Chegamos ao aeroporto duas horas antes do nosso voo.)", audioFront: "TTS: Flight", audioBack: "TTS: We arrived at the airport two hours before our flight." },
                { term: "Subway", definition: "An underground electric railroad.", defTrans: "Metrô", example: "I take the subway to get around the city.", exTrans: "(Eu pego o metrô para me locomover pela cidade.)", audioFront: "TTS: Subway", audioBack: "TTS: I take the subway to get around the city." },
                { term: "Platform", definition: "The raised area beside the tracks at a train station.", defTrans: "Plataforma", example: "Stand behind the yellow line on the subway platform.", exTrans: "(Fique atrás da linha amarela na plataforma do metrô.)", audioFront: "TTS: Platform", audioBack: "TTS: Stand behind the yellow line on the subway platform." },
                { term: "Ticket", definition: "A piece of paper or card that allows you to travel.", defTrans: "Passagem", example: "I bought a ticket for the train to New York.", exTrans: "(Comprei uma passagem para o trem para Nova York.)", audioFront: "TTS: Ticket", audioBack: "TTS: I bought a ticket for the train to New York." },
                { term: "Schedule", definition: "A plan of times for departures and arrivals.", defTrans: "Horário", example: "Check the schedule to see when the next bus arrives.", exTrans: "(Verifique o horário para ver quando o próximo ônibus chega.)", audioFront: "TTS: Schedule", audioBack: "TTS: Check the schedule to see when the next bus arrives." },
                { term: "Driver" , definition: "A person who drives a vehicle.", defTrans: "Motorista", example: "The driver stopped the bus to let passengers off.", exTrans: "(O motorista parou o ônibus para deixar os passageiros descerem.)", audioFront: "TTS: Driver", audioBack: "TTS: The driver stopped the bus to let passengers off." },
                { term: "Pilot", definition: "A person who operates the flying controls of an aircraft.", defTrans: "Piloto", example: "The pilot flew the plane safely.", exTrans: "(O piloto pilotou o avião com segurança.)", audioFront: "TTS: Pilot", audioBack: "TTS: The pilot flew the plane safely." },
                { term: "Sailor", definition: "A person who works as a member of the crew of a ship.", defTrans: "Marinheiro", example: "The sailor helped navigate the ship through the storm.", exTrans: "(O marinheiro ajudou a navegar o navio através da tempestade.)", audioFront: "TTS: Sailor", audioBack: "TTS: The sailor helped navigate the ship through the storm." },                
                // --- Directions & Navigation ---
                { term: "Get to", definition: "To arrive at a destination.", defTrans: "Chegar a (um lugar)", example: "How do I get to the museum from here?", exTrans: "(Como eu chego ao museu daqui?)", audioFront: "TTS: Get to", audioBack: "TTS: How do I get to the museum from here?" },
                { term: "Destination", definition: "The place to which someone or something is going.", defTrans: "Destino", example: "Our final destination is the beach.", exTrans: "(Nosso destino final é a praia.)", audioFront: "TTS: Destination", audioBack: "TTS: Our final destination is the beach." },
                { term: "Route", definition: "A way or course taken in getting from a starting point to a destination.", defTrans: "Rota / Caminho", example: "We followed a scenic route along the coast.", exTrans: "(Seguimos uma rota panorâmica ao longo da costa.)", audioFront: "TTS: Route", audioBack: "TTS: We followed a scenic route along the coast." },
                { term: "Go straight", definition: "To move forward without turning.", defTrans: "Seguir em frente", example: "Go straight for two blocks.", exTrans: "(Siga em frente por dois quarteirões.)", audioFront: "TTS: Go straight", audioBack: "TTS: Go straight for two blocks." },
                { term: "Turn left / Turn right", definition: "To change direction to the left or to the right.", defTrans: "Virar à esquerda / Virar à direita", example: "Turn left at the bank, then turn right.", exTrans: "(Vire à esquerda no banco, depois vire à direita.)", audioFront: "TTS: Turn left, Turn right", audioBack: "TTS: Turn left at the bank, then turn right." },
                { term: "Block", definition: "The area bounded by four streets.", defTrans: "Quarteirão", example: "Walk one block and stop at the intersection.", exTrans: "(Ande um quarteirão e pare no cruzamento.)", audioFront: "TTS: Block", audioBack: "TTS: Walk one block and stop at the intersection." },
                { term: "Intersection", definition: "A point where two or more roads cross.", defTrans: "Cruzamento", example: "Walk one block and stop at the intersection.", exTrans: "(Ande um quarteirão e pare no cruzamento.)", audioFront: "TTS: Intersection", audioBack: "TTS: Walk one block and stop at the intersection." },
                { term: "The Nearest", definition: "The closest in distance.", defTrans: "O mais próximo", example: "Where is the nearest pharmacy?", exTrans: "(Onde fica a farmácia mais próxima?)", audioFront: "TTS: The nearest", audioBack: "TTS: Where is the nearest pharmacy?" }, 
                { term: "Far", definition: "Situated at a great distance.", defTrans: "Longe", example: "The beach is far from the city center.", exTrans: "(A praia fica longe do centro da cidade.)", audioFront: "TTS: Far", audioBack: "TTS: The beach is far from the city center." },

                // --- Travel Actions & Phrasal Verbs ---
                { term: "Trip / Journey", definition: "A journey or excursion, especially for pleasure / An act of traveling from one place to another.", defTrans: "Viagem / Jornada", example: "We took a short trip, but it was a long journey.", exTrans: "(Fizemos uma viagem curta, mas foi uma longa jornada.)", audioFront: "TTS: Trip, Journey", audioBack: "TTS: We took a short trip, but it was a long journey." },
                { term: "Travel", definition: "To go from one place to another.", defTrans: "Viajar", example: "I love to travel and explore new countries.", exTrans: "(Eu amo viajar e explorar novos países.)", audioFront: "TTS: Travel", audioBack: "TTS: I love to travel and explore new countries." },
                { term: "Rent a car", definition: "To pay someone for the use of a car for a short time.", defTrans: "Alugar um carro", example: "When we arrive, we will rent a car.", exTrans: "(Quando chegarmos, vamos alugar um carro.)", audioFront: "TTS: Rent a car", audioBack: "TTS: When we arrive, we will rent a car." },
                { term: "Get in / Get out", definition: "To enter / to leave a small enclosed vehicle (like a car).", defTrans: "Entrar / Sair (carro, táxi)", example: "Get in the car quickly, and get out when we stop.", exTrans: "(Entre no carro rapidamente e saia quando pararmos.)", audioFront: "TTS: Get in, Get out", audioBack: "TTS: Get in the car quickly, and get out when we stop." },
                { term: "Get on / Get off", definition: "To enter / to leave a large vehicle (bus, train, plane).", defTrans: "Subir / Descer (ônibus, trem, avião)", example: "We get on the bus here and get off at the next stop.", exTrans: "(Nós subimos no ônibus aqui e descemos no próximo ponto.)", audioFront: "TTS: Get on, Get off", audioBack: "TTS: We get on the bus here and get off at the next stop." },
                { term: "Take a break", definition: "To stop working or traveling for a short time to rest.", defTrans: "Fazer uma pausa", example: "Let's take a break and have some coffee.", exTrans: "(Vamos fazer uma pausa e tomar um café.)", audioFront: "TTS: Take a break", audioBack: "TTS: Let's take a break and have some coffee." },
                { term: "Get away", definition: "To escape or go on a vacation.", defTrans: "Escapar / Sair de férias", example: "We need to get away for the weekend.", exTrans: "(Precisamos escapar no fim de semana.)", audioFront: "TTS: Get away", audioBack: "TTS: We need to get away for the weekend." },
                { term: "Get lost", definition: "To lose one's way.", defTrans: "Perder-se", example: "Use a map so you don't get lost.", exTrans: "(Use um mapa para não se perder.)", audioFront: "TTS: Get lost", audioBack: "TTS: Use a map so you don't get lost." },


                // --- Key Expressions & Linking Words ---
                { term: "Excuse me, how do I get to...?", definition: "A polite way to ask for directions to a place.", defTrans: "Com licença, como chego ao...?", example: "Excuse me, how do I get to the museum?", exTrans: "(Com licença, como chego ao museu?)", audioFront: "TTS: Excuse me, how do I get to", audioBack: "TTS: Excuse me, how do I get to the museum?" },
                { term: "Where is the nearest...?", definition: "Asking for the closest location of a specific place.", defTrans: "Onde fica o(a) ... mais próximo(a)?", example: "Where is the nearest pharmacy?", exTrans: "(Onde fica a farmácia mais próxima?)", audioFront: "TTS: Where is the nearest", audioBack: "TTS: Where is the nearest pharmacy?" },
                { term: "Go straight...", definition: "Giving directions to continue moving forward.", defTrans: "Siga em frente", example: "Go straight for two blocks.", exTrans: "(Siga em frente por dois quarteirões.)", audioFront: "TTS: Go straight", audioBack: "TTS: Go straight for two blocks." },
                { term: "Turn left / right at...", definition: "Giving directions to change direction at a specific landmark.", defTrans: "Vire à esquerda / direita no(a)...", example: "Turn left at the bank, then turn right.", exTrans: "(Vire à esquerda no banco, depois vire à direita.)", audioFront: "TTS: Turn left, Turn right", audioBack: "TTS: Turn left at the bank, then turn right." },
                { term: "How much does it cost?", definition: "Asking for the price of something, such as a ticket or fare.", defTrans: "Quanto custa?", example: "How much does it cost to get to the city?", exTrans: "(Quanto custa para chegar à cidade?)", audioFront: "TTS: How much does it cost?", audioBack: "TTS: How much does it cost to get to the city?" },
                { term: "take the ... left / right", definition: "Giving directions to turn at a specific point.", defTrans: "Vire à esquerda / direita", example: "You need to take the second left.", exTrans: "(Você precisa virar na segunda à esquerda.)", audioFront: "TTS: take the left, take the right", audioBack: "TTS: You need to take the second left." },
                { term: "on the corner of...", definition: "Indicating a location at the intersection of two streets.", defTrans: "Na esquina de...", example: "The café is on the corner of Main Street and 5th Avenue.", exTrans: "(O café fica na esquina da Main Street com a 5th Avenue.)", audioFront: "TTS: on the corner of", audioBack: "TTS: The café is on the corner of Main Street and 5th Avenue." },
                { term: "What time is it?", definition: "Asking for the current time or the time of an event.", defTrans: "Que horas são?", example: "What time is it? I need to catch the bus.", exTrans: "(Que horas são? Eu preciso pegar o ônibus.)", audioFront: "TTS: What time is it?", audioBack: "TTS: What time is it? I need to catch the bus." },
                { term: "What time does the ... leave?", definition: "Asking for the departure time of a bus, train, or flight.", defTrans: "Que horas sai o...?", example: "What time does the next train leave?", exTrans: "(Que horas sai o próximo trem?)", audioFront: "TTS: What time does the leave?", audioBack: "TTS: What time does the next train leave?" },
                { term: "Are you enjoying your trip?", definition: "Asking someone if they are having a good time traveling.", defTrans: "Você está aproveitando sua viagem?", example: "Are you enjoying your trip to Paris?", exTrans: "(Você está aproveitando sua viagem a Paris?)", audioFront: "TTS: Are you enjoying your trip?", audioBack: "TTS: Are you enjoying your trip to Paris?" },
                { term: "Where are you going for your vacation?", definition: "Asking about someone's future travel destination.", defTrans: "Para onde você vai nas suas férias?", example: "Where are you going for your vacation this year?", exTrans: "(Para onde você vai nas suas férias este ano?)", audioFront: "TTS: Where are you going for your vacation?", audioBack: "TTS: Where are you going for your vacation this year?" },
                { term: "How are we getting there?", definition: "Asking about the mode of transportation to be used.", defTrans: "Como vamos chegar lá?", example: "How are we getting there? By bus or by train?", exTrans: "(Como vamos chegar lá? De ônibus ou de trem?)", audioFront: "TTS: How are we getting there?", audioBack: "TTS: How are we getting there? By bus or by train?" },
                { term: "first", definition: "Indicates the beginning of a sequence of events.", defTrans: "Primeiro", example: "First, we arrived at the airport.", exTrans: "(Primeiro, chegamos ao aeroporto.)", audioFront: "TTS: First", audioBack: "TTS: First, we arrived at the airport." },
                { term: "Afterwards", definition: "Indicates what happens after the first event.", defTrans: "Depois", example: "We arrived at the airport. Afterwards, we took a taxi to the hotel.", exTrans: "(Nós chegamos ao aeroporto. Depois, nós pegamos um táxi para o hotel.)", audioFront: "TTS: Afterwards", audioBack: "TTS: We arrived at the airport. Afterwards, we took a taxi to the hotel." },
                { term: "Therefore", definition: "A linking word to show a result or consequence.", defTrans: "Portanto", example: "It was raining; therefore, we stayed inside.", exTrans: "(Estava chovendo; portanto, ficamos dentro de casa.)", audioFront: "TTS: Therefore", audioBack: "TTS: It was raining; therefore, we stayed inside." },
                { term: "Subsequently", definition: "A linking word to show that something happened after another event.", defTrans: "Subsequentemente", example: "We missed the bus. Subsequently, we had to walk.", exTrans: "(Perdemos o ônibus. Subsequentemente, tivemos que caminhar.)", audioFront: "TTS: Subsequently", audioBack: "TTS: We missed the bus. Subsequently, we had to walk." }
                
            ]
        }
    ],

    // ======================================================
    // GLOSSARY
    // ======================================================
    glossary:[
        // Topic Vocabulary
        { topic: "Transport & Hubs", term: "train", definition: "A series of connected railway carriages.", translation: "Trem" },
        { topic: "Transport & Hubs", term: "train-station", definition: "The place where trains stop.", translation: "Estação de trem" },
        { topic: "Transport & Hubs", term: "bus", definition: "A large motor vehicle carrying passengers.", translation: "Ônibus" },
        { topic: "Transport & Hubs", term: "bus stop", definition: "A designated place where buses stop.", translation: "Ponto de ônibus" },
        { topic: "Transport & Hubs", term: "car", definition: "A four-wheeled road vehicle.", translation: "Carro" },
        { topic: "Transport & Hubs", term: "parking lot", definition: "An area where cars are parked.", translation: "Estacionamento" },
        { topic: "Transport & Hubs", term: "airport", definition: "A complex of runways and buildings for air transport.", translation: "Aeroporto" },
        { topic: "Transport & Hubs", term: "flight", definition: "A journey made by air.", translation: "Voo" },
        { topic: "Transport & Hubs", term: "subway", definition: "An underground electric railroad.", translation: "Metrô" },
        { topic: "Transport & Hubs", term: "platform", definition: "The raised area beside the tracks at a train station.", translation: "Plataforma" },
        { topic: "Transport & Hubs", term: "driver", definition: "A person who drives a vehicle.", translation: "Motorista" },
        { topic: "Transport & Hubs", term: "conductor", definition: "A person who collects fares on public transport.", translation: "Cobrador (condutor)" },
        { topic: "Transport & Hubs", term: "pilot", definition: "A person who operates the flying controls of an aircraft.", translation: "Piloto" },
        { topic: "Transport & Hubs", term: "sailor", definition: "A person who works as a member of the crew of a ship.", translation: "Marinheiro" },
        { topic: "Transport & Hubs", term: "ticket", definition: "A piece of paper allowing access or travel.", translation: "Passagem / Bilhete" },
        { topic: "Transport & Hubs", term: "schedule", definition: "A plan of times when trains or buses depart.", translation: "Horário / Cronograma" },

        // Directions & Navigation
        { topic: "Directions", term: "get-to", definition: "To arrive at a destination.", translation: "Chegar a" },
        { topic: "Directions", term: "destination", definition: "The place to which someone or something is going.", translation: "Destino" },
        { topic: "Directions", term: "route", definition: "A way or course taken in getting to a destination.", translation: "Rota / Caminho" },
        { topic: "Directions", term: "go-straight", definition: "To move forward without turning.", translation: "Seguir em frente" },
        { topic: "Directions", term: "take-left", definition: "To change direction to the left.", translation: "Virar/pegar à esquerda" },
        { topic: "Directions", term: "turn right", definition: "To change direction to the right.", translation: "Virar à direita" },
        { topic: "Directions", term: "block", definition: "The area bounded by four streets.", translation: "Quarteirão" },
        { topic: "Directions", term: "intersection", definition: "A point where two or more roads cross.", translation: "Cruzamento" },
        { topic: "Directions", term: "nearest", definition: "Located a short distance away.", translation: "Mais próximo" },
        { topic: "Directions", term: "far", definition: "Situated at a great distance.", translation: "Longe" },
        { topic: "Directions", term: "directions", definition: "Instructions on how to reach a destination.", translation: "Direções / Instruções" },

        // Travel Actions
        { topic: "Travel Actions", term: "trip", definition: "A journey or excursion, especially for pleasure.", translation: "Viagem" },
        { topic: "Travel Actions", term: "journey", definition: "An act of traveling from one place to another.", translation: "Jornada" },
        { topic: "Travel Actions", term: "travel", definition: "To go from one place to another.", translation: "Viajar" },
        { topic: "Travel Actions", term: "rent-car", definition: "To pay someone for the use of a car for a short time.", translation: "Alugar um carro" },
        { topic: "Travel Actions", term: "get-in", definition: "To enter a small vehicle like a car.", translation: "Entrar" },
        { topic: "Travel Actions", term: "get-out", definition: "To leave a small vehicle like a car.", translation: "Sair" },
        { topic: "Travel Actions", term: "get-on", definition: "To board a large vehicle like a bus or train.", translation: "Subir / Embarcar" },
        { topic: "Travel Actions", term: "get-off", definition: "To leave a large vehicle like a bus or train.", translation: "Descer / Desembarcar" },
        { topic: "Travel Actions", term: "take-break", definition: "To stop traveling for a short time to rest.", translation: "Fazer uma pausa" },
        { topic: "Travel Actions", term: "get-away", definition: "To escape or go on a vacation.", translation: "Escapar / Viajar de férias" },
        { topic: "Travel Actions", term: "get-there", definition: "To arrive at a destination.", translation: "Chegar lá" },
        { topic: "Travel Actions", term: "get-lost", definition: "To lose one's way.", translation: "Perder-se" },
        
        { topic: "Linking Words", term: "first", definition: "At the beginning of a sequence.", translation: "Primeiro" },
        { topic: "Linking Words", term: "afterwards", definition: "Later or after that.", translation: "Depois" },
        { topic: "Linking Words", term: "subsequently", definition: "Following in time or order.", translation: "Subsequentemente" },
        { topic: "Linking Words", term: "therefore", definition: "As a result or consequence.", translation: "Portanto" },
        // General Context Tooltips
        { topic: "Context", term: "transportation", definition: "The action of transporting someone or something.", translation: "Transporte" },
        { topic: "Context", term: "museum", definition: "A building in which objects of historical or scientific interest are stored.", translation: "Museu" },
        { topic: "Context", term: "ask-directions", definition: "To request guidance to find a location.", translation: "Pedir informações/direções" },
        { topic: "Context", term: "arrive", definition: "To reach a place at the end of a journey.", translation: "Chegar" },
        { topic: "Context", term: "countryside", definition: "The land and scenery of a rural area.", translation: "Interior / Campo" },
        { topic: "Context", term: "went", definition: "Past tense of 'go'.", translation: "Fui / Foi" }
    ]
});