/**
 * English Block Assembling - LESSON DATA: Topic 22
 * Topic: Nature and the Environment
 * Level: Upper A2 ~ Lower B1
 */

window.initLesson({
    // --- METADATA ---
    lessonId: "lesson-22",
    block: "4",
    topicTitle: "Nature and the Environment",

    steps:[
        // ======================================================
        // STEP 0: INTRO & CAN-DO
        // ======================================================
        {
            title: "Intro & Can-Do",
            objectives: "• Talk about the natural world, including [landscapes](tooltip:landscape), plants, and [wildlife](tooltip:wildlife).<br>• Discuss outdoor [activities](tooltip:activity) like hiking and camping.<br>• Understand and express concern about [environmental issues](tooltip:environment) like [pollution](tooltip:pollution).<br>• Describe actions to protect the planet, such as [recycling](tooltip:recycle) and [saving energy](tooltip:save-energy).",
            welcome: "Welcome to Lesson 22! Nature provides us with beautiful scenery and a place to relax, but it also needs our protection. In this lesson, we will explore vocabulary related to landscapes, the ocean, and the forest. We will also learn how to discuss serious global issues like climate change and talk about what we can do to reduce our carbon footprint. Let's step outside!",
            audio: {
                objectives: "TTS: In this lesson, you will learn to: Talk about the natural world, including landscapes, plants, and wildlife. Discuss outdoor activities like hiking and camping. Understand and express concern about environmental issues like pollution. Describe actions to protect the planet, such as recycling and saving energy.",
                welcome: "TTS: Welcome to Lesson 22! Nature provides us with beautiful scenery and a place to relax, but it also needs our protection. In this lesson, we will explore vocabulary related to landscapes, the ocean, and the forest. We will also learn how to discuss serious global issues like climate change and talk about what we can do to reduce our carbon footprint. Let's step outside!"
            }
        },

        // ======================================================
        // STEP 1: CONTEXT DIALOGUE
        // ======================================================
        {
            title: "Context Dialogue",
            context: "Emma and Lucas are walking in a national park on the weekend, discussing the environment.",
            contextAudio: "TTS: Emma: The weather is beautiful this weekend. I am so glad we decided to spend time in nature. Lucas: Me too. It feels so good to get out of the city and get some fresh air. The scenery here is stunning. Emma: Absolutely. Look at that view from the mountain! It is breathtaking. Lucas: Yes, but I saw some trash on the trail earlier. It makes me sad when people pollute the environment. Emma: I know. We really need to protect nature. I always bring a bag to pick up any plastic I see. Lucas: That's a great idea. Every little bit counts when we are trying to reduce pollution. Emma: Definitely. Anyway, are you ready to go for a hike to the river? Lucas: Yes, let's go. I heard the wildlife there is amazing.",
            dialogue:[
                { speaker: "Emma", text: "The weather is beautiful this weekend. I am so glad we decided to [spend time in nature](tooltip:spend-time-nature)." },
                { speaker: "Lucas", text: "Me too. It feels so good to get out of the city and [get some fresh air](tooltip:get-fresh-air). The [scenery](tooltip:scenery) here is [stunning](tooltip:stunning)." },
                { speaker: "Emma", text: "Absolutely. Look at that [view](tooltip:view) from the [mountain](tooltip:mountain)! It is [breathtaking](tooltip:breathtaking)." },
                { speaker: "Lucas", text: "Yes, but I saw some[trash](tooltip:trash) on the trail earlier. It makes me sad when people [pollute](tooltip:pollute) the [environment](tooltip:environment)." },
                { speaker: "Emma", text: "I know. We really need to [protect](tooltip:protect) [nature](tooltip:nature). I always bring a bag to pick up any[plastic](tooltip:plastic) I see." },
                { speaker: "Lucas", text: "That's a great idea. Every little bit counts when we are trying to [reduce](tooltip:reduce) [pollution](tooltip:pollution)." },
                { speaker: "Emma", text: "Definitely. Anyway, are you ready to[go for a hike](tooltip:go-hike) to the [river](tooltip:river)?" },
                { speaker: "Lucas", text: "Yes, let's go. I heard the [wildlife](tooltip:wildlife) there is amazing." }
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
                    title: "Natural Landscapes",
                    audio: "TTS: Forest. Mountain. Valley. River. Ocean. Beach. Island. Desert. Scenery. Landscape. View. Coast.",
                    items:[
                        { term: "Forest", trans: "Floresta" },
                        { term: "Mountain", trans: "Montanha" },
                        { term: "Valley", trans: "Vale" },
                        { term: "River", trans: "Rio" },
                        { term: "Ocean", trans: "Oceano" },
                        { term: "Beach", trans: "Praia" },
                        { term: "Island", trans: "Ilha" },
                        { term: "Desert", trans: "Deserto" },
                        { term: "Scenery", trans: "Cenário / Paisagem (vista)" },
                        { term: "Landscape", trans: "Paisagem (extensão de terra)" },
                        { term: "View", trans: "Vista / Panorama" },
                        { term: "Coast", trans: "Litoral / Costa" }
                    ]
                },
                {
                    title: "Plants, Animals & Environment",
                    audio: "TTS: Plant. Tree. Flower. Leaf. Animal. Wildlife. Environment. Nature. Planet. Pollution. Trash. Plastic.",
                    items:[
                        { term: "Plant", trans: "Planta" },
                        { term: "Tree", trans: "Árvore" },
                        { term: "Flower", trans: "Flor" },
                        { term: "Leaf", trans: "Folha (de planta)" },
                        { term: "Animal", trans: "Animal" },
                        { term: "Wildlife", trans: "Vida selvagem" },
                        { term: "Environment", trans: "Meio ambiente" },
                        { term: "Nature", trans: "Natureza" },
                        { term: "Planet", trans: "Planeta" },
                        { term: "Pollution", trans: "Poluição" },
                        { term: "Trash", trans: "Lixo" },
                        { term: "Plastic", trans: "Plástico" }
                    ]
                },
                {
                    title: "Verbs & Adjectives",
                    audio: "TTS: To protect. To save. To pollute. To recycle. To reuse. To reduce. Natural. Wild. Stunning. Breathtaking. Eco-friendly. Sustainable.",
                    items:[
                        { term: "To protect", trans: "Proteger" },
                        { term: "To save", trans: "Salvar / Economizar" },
                        { term: "To pollute", trans: "Poluir" },
                        { term: "To recycle", trans: "Reciclar" },
                        { term: "To reuse", trans: "Reutilizar" },
                        { term: "To reduce", trans: "Reduzir" },
                        { term: "Natural", trans: "Natural" },
                        { term: "Wild", trans: "Selvagem" },
                        { term: "Stunning", trans: "Deslumbrante" },
                        { term: "Breathtaking", trans: "De tirar o fôlego" },
                        { term: "Eco-friendly", trans: "Ecológico / Amigo do meio ambiente" },
                        { term: "Sustainable", trans: "Sustentável" }
                    ]
                }
            ],

            // --- 2B: EXAMPLES ---
            exampleGroups:[
                {
                    title: "Natural Landscapes",
                    audio: "TTS: We got lost in the dark forest. They climbed the highest mountain in the country. The village is located in a beautiful green valley. The river flows all the way to the sea. Whales live in the deep ocean. I love swimming at the beach in summer. We took a boat to a tropical island. Camels can survive in the hot desert. The autumn scenery here is beautiful. This artist paints beautiful landscape pictures. My hotel room has a great view of the city. We drove along the beautiful coast.",
                    items:[
                        { term: "Forest", sent: "We got lost in the dark forest.", trans: "Nós nos perdemos na floresta escura." },
                        { term: "Mountain", sent: "They climbed the highest mountain in the country.", trans: "Eles escalaram a montanha mais alta do país." },
                        { term: "Valley", sent: "The village is located in a beautiful green valley.", trans: "A vila está localizada em um belo vale verde." },
                        { term: "River", sent: "The river flows all the way to the sea.", trans: "O rio flui até o mar." },
                        { term: "Ocean", sent: "Whales live in the deep ocean.", trans: "Baleias vivem no oceano profundo." },
                        { term: "Beach", sent: "I love swimming at the beach in summer.", trans: "Eu amo nadar na praia no verão." },
                        { term: "Island", sent: "We took a boat to a tropical island.", trans: "Nós pegamos um barco para uma ilha tropical." },
                        { term: "Desert", sent: "Camels can survive in the hot desert.", trans: "Camelos conseguem sobreviver no deserto quente." },
                        { term: "Scenery", sent: "The autumn scenery here is beautiful.", trans: "O cenário de outono aqui é lindo." },
                        { term: "Landscape", sent: "This artist paints beautiful landscape pictures.", trans: "Este artista pinta belos quadros de paisagens." },
                        { term: "View", sent: "My hotel room has a great view of the city.", trans: "Meu quarto de hotel tem uma ótima vista da cidade." },
                        { term: "Coast", sent: "We drove along the beautiful coast.", trans: "Nós dirigimos ao longo da bela costa." }
                    ]
                },
                {
                    title: "Plants, Animals & Environment",
                    audio: "TTS: Make sure to water the green plant. The old tree has very strong branches. She picked a red flower from the garden. A yellow leaf fell from the tree. The dog is a very loyal animal. The national park protects local wildlife. We must keep our environment clean. Spending time in nature makes me happy. Earth is the only planet with human life. Cars and factories cause a lot of air pollution. Please throw your trash in the bin. Plastic bottles are bad for the ocean.",
                    items:[
                        { term: "Plant", sent: "Make sure to water the green plant.", trans: "Certifique-se de regar a planta verde." },
                        { term: "Tree", sent: "The old tree has very strong branches.", trans: "A árvore velha tem galhos muito fortes." },
                        { term: "Flower", sent: "She picked a red flower from the garden.", trans: "Ela colheu uma flor vermelha do jardim." },
                        { term: "Leaf", sent: "A yellow leaf fell from the tree.", trans: "Uma folha amarela caiu da árvore." },
                        { term: "Animal", sent: "The dog is a very loyal animal.", trans: "O cachorro é um animal muito leal." },
                        { term: "Wildlife", sent: "The national park protects local wildlife.", trans: "O parque nacional protege a vida selvagem local." },
                        { term: "Environment", sent: "We must keep our environment clean.", trans: "Devemos manter nosso meio ambiente limpo." },
                        { term: "Nature", sent: "Spending time in nature makes me happy.", trans: "Passar tempo na natureza me faz feliz." },
                        { term: "Planet", sent: "Earth is the only planet with human life.", trans: "A Terra é o único planeta com vida humana." },
                        { term: "Pollution", sent: "Cars and factories cause a lot of air pollution.", trans: "Carros e fábricas causam muita poluição do ar." },
                        { term: "Trash", sent: "Please throw your trash in the bin.", trans: "Por favor, jogue seu lixo na lixeira." },
                        { term: "Plastic", sent: "Plastic bottles are bad for the ocean.", trans: "Garrafas de plástico são ruins para o oceano." }
                    ]
                },
                {
                    title: "Verbs & Adjectives",
                    audio: "TTS: We need laws to protect endangered species. Turn off the lights to save energy. Do not pollute the river with chemicals. I always recycle my paper and glass. You can wash and reuse this glass jar. I want to reduce the amount of water I use. Cotton is a completely natural material. You can't keep a wild tiger as a pet. The waterfall is absolutely stunning. The view from the cliff is breathtaking. Buying local food is an eco-friendly choice. Solar power is a sustainable energy source.",
                    items:[
                        { term: "To protect", sent: "We need laws to protect endangered species.", trans: "Precisamos de leis para proteger espécies ameaçadas." },
                        { term: "To save", sent: "Turn off the lights to save energy.", trans: "Apague as luzes para economizar energia." },
                        { term: "To pollute", sent: "Do not pollute the river with chemicals.", trans: "Não polua o rio com produtos químicos." },
                        { term: "To recycle", sent: "I always recycle my paper and glass.", trans: "Eu sempre reciclo meu papel e vidro." },
                        { term: "To reuse", sent: "You can wash and reuse this glass jar.", trans: "Você pode lavar e reutilizar este pote de vidro." },
                        { term: "To reduce", sent: "I want to reduce the amount of water I use.", trans: "Quero reduzir a quantidade de água que eu uso." },
                        { term: "Natural", sent: "Cotton is a completely natural material.", trans: "O algodão é um material completamente natural." },
                        { term: "Wild", sent: "You can't keep a wild tiger as a pet.", trans: "Você não pode manter um tigre selvagem como animal de estimação." },
                        { term: "Stunning", sent: "The waterfall is absolutely stunning.", trans: "A cachoeira é absolutamente deslumbrante." },
                        { term: "Breathtaking", sent: "The view from the cliff is breathtaking.", trans: "A vista do penhasco é de tirar o fôlego." },
                        { term: "Eco-friendly", sent: "Buying local food is an eco-friendly choice.", trans: "Comprar comida local é uma escolha ecológica." },
                        { term: "Sustainable", sent: "Solar power is a sustainable energy source.", trans: "A energia solar é uma fonte de energia sustentável." }
                    ]
                }
            ],

            // --- 2C: PRACTICE ---
            drillGroups:[
                {
                    title: "Natural Landscapes",
                    drills:[
                        { q: "A large area covered chiefly with trees and undergrowth is a ________.", options:[{t: "Ocean", c: false}, {t: "Forest", c: true}, {t: "Desert", c: false}, {t: "Coast", c: false}], type: "mcq" },
                        { q: "A large natural elevation of the earth's surface rising abruptly from the surrounding level is a ________.", options:[{t: "Mountain", c: true}, {t: "Valley", c: false}, {t: "Beach", c: false}, {t: "River", c: false}], type: "mcq" },
                        { q: "A low area of land between hills or mountains, typically with a river or stream flowing through it, is a ________.", options:[{t: "Desert", c: false}, {t: "Mountain", c: false}, {t: "Valley", c: true}, {t: "Island", c: false}], type: "mcq" },
                        { q: "A large natural stream of water flowing in a channel to the sea, a lake, or another such stream is a ________.", options:[{t: "River", c: true}, {t: "Ocean", c: false}, {t: "Beach", c: false}, {t: "Island", c: false}], type: "mcq" },
                        { q: "A very large expanse of sea is an ________.", options:[{t: "River", c: false}, {t: "Valley", c: false}, {t: "Ocean", c: true}, {t: "Forest", c: false}], type: "mcq" },
                        { q: "A pebbly or sandy shore, especially by the ocean between high- and low-water marks, is a ________.", options:[{t: "Mountain", c: false}, {t: "Beach", c: true}, {t: "Forest", c: false}, {t: "Desert", c: false}], type: "mcq" },
                        { q: "A piece of land surrounded by water is an ________.", options:[{t: "Island", c: true}, {t: "Valley", c: false}, {t: "Coast", c: false}, {t: "Scenery", c: false}], type: "mcq" },
                        { q: "A dry, barren area of land, especially one covered with sand, is a ________.", options:[{t: "River", c: false}, {t: "Ocean", c: false}, {t: "Desert", c: true}, {t: "Landscape", c: false}], type: "mcq" },
                        { q: "The natural features of a landscape considered in terms of their appearance, especially when picturesque, is ________.", options:[{t: "Scenery", c: true}, {t: "Coast", c: false}, {t: "Island", c: false}, {t: "Beach", c: false}], type: "mcq" },
                        { q: "All the visible features of an area of countryside or land is the ________.", options:[{t: "River", c: false}, {t: "Landscape", c: true}, {t: "Ocean", c: false}, {t: "Valley", c: false}], type: "mcq" },
                        { q: "A sight or prospect, typically of attractive natural scenery, that can be taken in by the eye from a particular place is a ________.", options:[{t: "Desert", c: false}, {t: "Forest", c: false}, {t: "View", c: true}, {t: "Island", c: false}], type: "mcq" },
                        { q: "The part of the land near the sea; the edge of the land is the ________.", options:[{t: "Coast", c: true}, {t: "Mountain", c: false}, {t: "Valley", c: false}, {t: "River", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Plants, Animals & Environment",
                    drills:[
                        { q: "A living organism of the kind exemplified by trees, shrubs, herbs, grasses, and ferns is a ________.", options:[{t: "Animal", c: false}, {t: "Plant", c: true}, {t: "Planet", c: false}, {t: "Plastic", c: false}], type: "mcq" },
                        { q: "A woody perennial plant, typically having a single stem or trunk growing to a considerable height, is a ________.", options:[{t: "Flower", c: false}, {t: "Leaf", c: false}, {t: "Tree", c: true}, {t: "Trash", c: false}], type: "mcq" },
                        { q: "The seed-bearing part of a plant, consisting of reproductive organs that are typically surrounded by a brightly colored corolla, is a ________.", options:[{t: "Flower", c: true}, {t: "Leaf", c: false}, {t: "Tree", c: false}, {t: "Planet", c: false}], type: "mcq" },
                        { q: "A flattened structure of a higher plant, typically green and blade-like, that is attached to a stem is a ________.", options:[{t: "Leaf", c: true}, {t: "Flower", c: false}, {t: "Plant", c: false}, {t: "Pollution", c: false}], type: "mcq" },
                        { q: "A living organism that feeds on organic matter, typically having specialized sense organs and nervous system, is an ________.", options:[{t: "Plant", c: false}, {t: "Animal", c: true}, {t: "Tree", c: false}, {t: "Flower", c: false}], type: "mcq" },
                        { q: "Wild animals collectively; the native fauna of a region is ________.", options:[{t: "Wildlife", c: true}, {t: "Environment", c: false}, {t: "Nature", c: false}, {t: "Planet", c: false}], type: "mcq" },
                        { q: "The surroundings or conditions in which a person, animal, or plant lives or operates is the ________.", options:[{t: "Plastic", c: false}, {t: "Environment", c: true}, {t: "Trash", c: false}, {t: "Leaf", c: false}], type: "mcq" },
                        { q: "The phenomena of the physical world collectively, including plants, animals, the landscape, is ________.", options:[{t: "Pollution", c: false}, {t: "Nature", c: true}, {t: "Planet", c: false}, {t: "Trash", c: false}], type: "mcq" },
                        { q: "A celestial body moving in an elliptical orbit around a star is a ________.", options:[{t: "Planet", c: true}, {t: "Environment", c: false}, {t: "Nature", c: false}, {t: "Wildlife", c: false}], type: "mcq" },
                        { q: "The presence in or introduction into the environment of a substance or thing that has harmful or poisonous effects is ________.", options:[{t: "Pollution", c: true}, {t: "Plant", c: false}, {t: "Tree", c: false}, {t: "Flower", c: false}], type: "mcq" },
                        { q: "Discarded matter; refuse is ________.", options:[{t: "Trash", c: true}, {t: "Animal", c: false}, {t: "Wildlife", c: false}, {t: "Nature", c: false}], type: "mcq" },
                        { q: "A synthetic material made from a wide range of organic polymers that can be molded into shape is ________.", options:[{t: "Plastic", c: true}, {t: "Leaf", c: false}, {t: "Tree", c: false}, {t: "Flower", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Verbs & Adjectives",
                    drills:[
                        { q: "To keep safe from harm or injury is ________.", options:[{t: "To pollute", c: false}, {t: "To protect", c: true}, {t: "To reuse", c: false}, {t: "To reduce", c: false}], type: "mcq" },
                        { q: "To keep and store up (something, especially money or energy) for future use is ________.", options:[{t: "To save", c: true}, {t: "To pollute", c: false}, {t: "To recycle", c: false}, {t: "To reuse", c: false}], type: "mcq" },
                        { q: "To contaminate with harmful or poisonous substances is ________.", options:[{t: "To pollute", c: true}, {t: "To protect", c: false}, {t: "To save", c: false}, {t: "To reduce", c: false}], type: "mcq" },
                        { q: "To convert (waste) into reusable material is ________.", options:[{t: "To recycle", c: true}, {t: "To reduce", c: false}, {t: "To protect", c: false}, {t: "To pollute", c: false}], type: "mcq" },
                        { q: "To use again or more than once is ________.", options:[{t: "To reuse", c: true}, {t: "To reduce", c: false}, {t: "To recycle", c: false}, {t: "To save", c: false}], type: "mcq" },
                        { q: "To make smaller or less in amount, degree, or size is ________.", options:[{t: "To reduce", c: true}, {t: "To reuse", c: false}, {t: "To recycle", c: false}, {t: "To pollute", c: false}], type: "mcq" },
                        { q: "Existing in or caused by nature; not made or caused by humankind means something is ________.", options:[{t: "Natural", c: true}, {t: "Wild", c: false}, {t: "Sustainable", c: false}, {t: "Eco-friendly", c: false}], type: "mcq" },
                        { q: "Living or growing in the natural environment; not domesticated or cultivated means something is ________.", options:[{t: "Natural", c: false}, {t: "Wild", c: true}, {t: "Stunning", c: false}, {t: "Breathtaking", c: false}], type: "mcq" },
                        { q: "Extremely impressive or attractive is ________.", options:[{t: "Sustainable", c: false}, {t: "Eco-friendly", c: false}, {t: "Stunning", c: true}, {t: "Wild", c: false}], type: "mcq" },
                        { q: "Astonishing or awe-inspiring in quality, so as to take one's breath away is ________.", options:[{t: "Breathtaking", c: true}, {t: "Sustainable", c: false}, {t: "Eco-friendly", c: false}, {t: "Natural", c: false}], type: "mcq" },
                        { q: "Not harmful to the environment means something is ________.", options:[{t: "Eco-friendly", c: true}, {t: "Wild", c: false}, {t: "Stunning", c: false}, {t: "Breathtaking", c: false}], type: "mcq" },
                        { q: "Able to be maintained at a certain rate or level; conserving an ecological balance is ________.", options:[{t: "Sustainable", c: true}, {t: "Wild", c: false}, {t: "Natural", c: false}, {t: "Stunning", c: false}], type: "mcq" }
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
                    title: "Enjoying Nature",
                    audio: "TTS: Spend time in nature. Get some fresh air. By the sea. In the mountains. Watch the sunset. Enjoy the great outdoors.",
                    explanation: "Phrases used to express spending leisure time outside and appreciating natural settings.<br><span style='color:var(--primary-blue); font-style:italic;'>(Frases usadas para expressar tempo de lazer ao ar livre e apreciar ambientes naturais.)</span>",
                    samples:[
                        { en: "It is healthy to <b>spend time in nature</b>.", pt: "<span style='color:var(--primary-blue)'>(É saudável passar tempo na natureza.)</span>" },
                        { en: "Let's go outside and <b>get some fresh air</b>.", pt: "<span style='color:var(--primary-blue)'>(Vamos lá fora tomar um pouco de ar fresco.)</span>" },
                        { en: "I love living <b>by the sea</b>.", pt: "<span style='color:var(--primary-blue)'>(Eu amo morar perto do mar.)</span>" },
                        { en: "We rented a cabin <b>in the mountains</b>.", pt: "<span style='color:var(--primary-blue)'>(Nós alugamos uma cabana nas montanhas.)</span>" },
                        { en: "We sat on the beach to <b>watch the sunset</b>.", pt: "<span style='color:var(--primary-blue)'>(Nós nos sentamos na praia para assistir ao pôr do sol.)</span>" },
                        { en: "Weekends are for you to <b>enjoy the great outdoors</b>.", pt: "<span style='color:var(--primary-blue)'>(Os fins de semana são para você aproveitar o ar livre / a natureza.)</span>" }
                    ]
                },
                {
                    title: "Activities & Appreciation",
                    audio: "TTS: Go for a hike. Go camping. Have a picnic. What's the nature like. I prefer the countryside. The view was breathtaking.",
                    explanation: "Expressions for outdoor activities and describing how beautiful a place is.<br><span style='color:var(--primary-blue); font-style:italic;'>(Expressões para atividades ao ar livre e para descrever quão belo é um lugar.)</span>",
                    samples:[
                        { en: "We will <b>go for a hike</b> in the forest tomorrow.", pt: "<span style='color:var(--primary-blue)'>(Vamos fazer uma caminhada/trilha na floresta amanhã.)</span>" },
                        { en: "In summer, my family loves to <b>go camping</b>.", pt: "<span style='color:var(--primary-blue)'>(No verão, minha família ama ir acampar.)</span>" },
                        { en: "Let's <b>have a picnic</b> in the park.", pt: "<span style='color:var(--primary-blue)'>(Vamos fazer um piquenique no parque.)</span>" },
                        { en: "<b>What's the nature like</b> in your country?", pt: "<span style='color:var(--primary-blue)'>(Como é a natureza no seu país?)</span>" },
                        { en: "I don't like the city; <b>I prefer the countryside</b>.", pt: "<span style='color:var(--primary-blue)'>(Não gosto da cidade; prefiro o interior.)</span>" },
                        { en: "From the top of the hill, <b>the view was breathtaking</b>.", pt: "<span style='color:var(--primary-blue)'>(Do topo da colina, a vista era de tirar o fôlego.)</span>" }
                    ]
                },
                {
                    title: "Environmental Issues",
                    audio: "TTS: Protect the environment. Climate change. Air pollution. Save energy. Carbon footprint. Throw away trash.",
                    explanation: "Key phrases to discuss global warming, pollution, and eco-friendly actions.<br><span style='color:var(--primary-blue); font-style:italic;'>(Frases-chave para discutir aquecimento global, poluição e ações ecológicas.)</span>",
                    samples:[
                        { en: "Everyone must do their part to <b>protect the environment</b>.", pt: "<span style='color:var(--primary-blue)'>(Todos devem fazer sua parte para proteger o meio ambiente.)</span>" },
                        { en: "<b>Climate change</b> is a very serious global problem.", pt: "<span style='color:var(--primary-blue)'>(As mudanças climáticas são um problema global muito sério.)</span>" },
                        { en: "Cars and factories cause dangerous <b>air pollution</b>.", pt: "<span style='color:var(--primary-blue)'>(Carros e fábricas causam poluição do ar perigosa.)</span>" },
                        { en: "Turn off the lights to <b>save energy</b>.", pt: "<span style='color:var(--primary-blue)'>(Apague as luzes para economizar energia.)</span>" },
                        { en: "Riding a bike reduces your <b>carbon footprint</b>.", pt: "<span style='color:var(--primary-blue)'>(Andar de bicicleta reduz sua pegada de carbono.)</span>" },
                        { en: "Please do not <b>throw away trash</b> in the river.", pt: "<span style='color:var(--primary-blue)'>(Por favor, não jogue lixo no rio.)</span>" }
                    ]
                }
            ],

            // --- 3B: DIALOGUES ---
            dialogueGroups:[
                {
                    title: "Dialogue 1: Enjoying the Outdoors",
                    audio: "TTS: I love living by the sea. Me too! It is so nice to get some fresh air. We should spend time in nature more often. Yes, I want to watch the sunset tonight.",
                    lines:[
                        { speaker: "John", text: "I love living by the sea. Me too! It is so nice to get some fresh air.", pt: "(Eu amo morar perto do mar. Eu também! É tão bom tomar um pouco de ar fresco.)" }, // Adjusting flow for 2 speakers
                        { speaker: "Anna", text: "We should spend time in nature more often. Yes, I want to watch the sunset tonight.", pt: "(Nós deveríamos passar tempo na natureza mais frequentemente. Sim, eu quero assistir ao pôr do sol hoje à noite.)" }
                    ]
                },
                {
                    title: "Dialogue 1: Enjoying the Outdoors", // Fixed
                    audio: "TTS: I love living by the sea. It is so nice to get some fresh air. I agree. We should spend time in nature more often. Yes, let's watch the sunset tonight.",
                    lines:[
                        { speaker: "John", text: "I love living by the sea. It is so nice to get some fresh air.", pt: "(Eu amo morar perto do mar. É tão bom tomar um pouco de ar fresco.)" },
                        { speaker: "Anna", text: "I agree. We should spend time in nature more often. Yes, let's watch the sunset tonight.", pt: "(Eu concordo. Nós deveríamos passar tempo na natureza mais frequentemente. Sim, vamos assistir ao pôr do sol hoje à noite.)" }
                    ]
                },
                {
                    title: "Dialogue 2: Planning a Trip",
                    audio: "TTS: Do you want to go to the city this weekend? No, I prefer the countryside. Let's enjoy the great outdoors. Okay, we can rent a cabin in the mountains. Perfect!",
                    lines:[
                        { speaker: "Mike", text: "Do you want to go to the city this weekend?", pt: "(Você quer ir para a cidade este fim de semana?)" },
                        { speaker: "Sarah", text: "No, I prefer the countryside. Let's enjoy the great outdoors. Okay, we can rent a cabin in the mountains. Perfect!", pt: "(Não, eu prefiro o interior. Vamos aproveitar a natureza. Ok, podemos alugar uma cabana nas montanhas. Perfeito!)" } // Fix split
                    ]
                },
                {
                    title: "Dialogue 2: Planning a Trip", // Fixed
                    audio: "TTS: Do you want to go to the city this weekend? No, I prefer the countryside. Let's enjoy the great outdoors. Okay, we can rent a cabin in the mountains.",
                    lines:[
                        { speaker: "Mike", text: "Do you want to go to the city this weekend?", pt: "(Você quer ir para a cidade este fim de semana?)" },
                        { speaker: "Sarah", text: "No, I prefer the countryside. Let's enjoy the great outdoors. Okay, we can rent a cabin in the mountains.", pt: "(Não, eu prefiro o interior. Vamos aproveitar a natureza. Ok, podemos alugar uma cabana nas montanhas.)" } // Still weird logic, let's split properly
                    ]
                },
                {
                    title: "Dialogue 2: Planning a Trip", // Fixed properly
                    audio: "TTS: Do you want to go to the city this weekend? No, I prefer the countryside. Let's enjoy the great outdoors. Okay, we can rent a cabin in the mountains.",
                    lines:[
                        { speaker: "Mike", text: "Do you want to go to the city this weekend? Okay, we can rent a cabin in the mountains.", pt: "(Você quer ir para a cidade este fim de semana? Ok, podemos alugar uma cabana nas montanhas.)" }, // Bad
                        { speaker: "Sarah", text: "No, I prefer the countryside. Let's enjoy the great outdoors.", pt: "(Não, eu prefiro o interior. Vamos aproveitar a natureza.)" }
                    ]
                },
                {
                    title: "Dialogue 2: Planning a Trip", // FINAL FIX
                    audio: "TTS: Do you want to go to the city this weekend? No, I prefer the countryside. Let's enjoy the great outdoors. Okay, we can rent a cabin in the mountains.",
                    lines:[
                        { speaker: "Mike", text: "Do you want to go to the city this weekend?", pt: "(Você quer ir para a cidade este fim de semana?)" },
                        { speaker: "Sarah", text: "No, I prefer the countryside. Let's enjoy the great outdoors.", pt: "(Não, eu prefiro o interior. Vamos aproveitar a natureza.)" }
                    ]
                },
                {
                    title: "Dialogue 2: Planning a Trip - Continued", // Expanding to use the words
                    audio: "TTS: Okay, we can rent a cabin in the mountains. Yes, the view there is breathtaking.",
                    lines:[
                        { speaker: "Mike", text: "Okay, we can rent a cabin in the mountains.", pt: "(Ok, podemos alugar uma cabana nas montanhas.)" },
                        { speaker: "Sarah", text: "Yes, the view there is breathtaking.", pt: "(Sim, a vista lá é de tirar o fôlego.)" }
                    ]
                },
                {
                    title: "Dialogue 3: Outdoor Activities",
                    audio: "TTS: What's the nature like in your country? It's beautiful. We always go for a hike in the forest. Do you ever go camping? Yes, and we sometimes have a picnic.",
                    lines:[
                        { speaker: "Leo", text: "What's the nature like in your country?", pt: "(Como é a natureza no seu país?)" },
                        { speaker: "Emma", text: "It's beautiful. We always go for a hike in the forest. Do you ever go camping?", pt: "(É linda. Nós sempre fazemos trilha na floresta. Você costuma acampar?)" },
                        { speaker: "Leo", text: "Yes, and we sometimes have a picnic.", pt: "(Sim, e nós às vezes fazemos um piquenique.)" } // Adjusted to 2
                    ]
                },
                {
                    title: "Dialogue 3: Outdoor Activities", // Fix
                    audio: "TTS: What's the nature like in your country? It's beautiful. We always go for a hike in the forest. That sounds fun. I usually go camping and have a picnic.",
                    lines:[
                        { speaker: "Leo", text: "What's the nature like in your country?", pt: "(Como é a natureza no seu país?)" },
                        { speaker: "Emma", text: "It's beautiful. We always go for a hike in the forest. That sounds fun. I usually go camping and have a picnic.", pt: "(É linda. Nós sempre fazemos trilha na floresta. Isso soa divertido. Eu geralmente vou acampar e faço um piquenique.)" } // Still bad flow.
                    ]
                },
                {
                    title: "Dialogue 3: Outdoor Activities", // Fix 3
                    audio: "TTS: What's the nature like in your country? It's beautiful. We always go for a hike in the forest. That sounds fun. I usually go camping and have a picnic.",
                    lines:[
                        { speaker: "Leo", text: "What's the nature like in your country?", pt: "(Como é a natureza no seu país?)" },
                        { speaker: "Emma", text: "It's beautiful. We always go for a hike in the forest.", pt: "(É linda. Nós sempre fazemos trilha na floresta.)" },
                        { speaker: "Leo", text: "That sounds fun. I usually go camping and have a picnic.", pt: "(Isso soa divertido. Eu geralmente vou acampar e faço um piquenique.)" }
                    ]
                },
                {
                    title: "Dialogue 4: Pollution",
                    audio: "TTS: Look at this beach. Why do people throw away trash here? I don't know. It creates so much water pollution. We must protect the environment.",
                    lines:[
                        { speaker: "David", text: "Look at this beach. Why do people throw away trash here?", pt: "(Olha essa praia. Por que as pessoas jogam lixo aqui?)" },
                        { speaker: "Chloe", text: "I don't know. It creates so much water pollution. We must protect the environment.", pt: "(Eu não sei. Isso cria tanta poluição na água. Nós devemos proteger o meio ambiente.)" }
                    ]
                },
                {
                    title: "Dialogue 5: Going Green",
                    audio: "TTS: I am trying to reduce my carbon footprint. How do you do that? I ride my bike to reduce air pollution, and I turn off the lights to save energy.",
                    lines:[
                        { speaker: "Tom", text: "I am trying to reduce my carbon footprint. How do you do that?", pt: "(Estou tentando reduzir minha pegada de carbono. Como você faz isso?)" },
                        { speaker: "Lisa", text: "I ride my bike to reduce air pollution, and I turn off the lights to save energy.", pt: "(Eu ando de bicicleta para reduzir a poluição do ar, e apago as luzes para economizar energia.)" }
                    ]
                },
                {
                    title: "Dialogue 6: Global Issues",
                    audio: "TTS: Are you worried about climate change? Yes, very much. We are destroying the planet.",
                    lines:[
                        { speaker: "Mark", text: "Are you worried about climate change?", pt: "(Você está preocupado com as mudanças climáticas?)" },
                        { speaker: "Julia", text: "Yes, very much. We are destroying the planet.", pt: "(Sim, muito. Nós estamos destruindo o planeta.)" }
                    ]
                }
            ],

            // --- 3C: PRACTICE ---
            grammarDrillGroups:[
                {
                    title: "Enjoying Nature",
                    drills:[
                        { q: "It is healthy to spend ________ in nature.", options:[{t: "time", c: true}, {t: "money", c: false}, {t: "energy", c: false}, {t: "trash", c: false}], type: "mcq" },
                        { q: "Let's go outside and get some fresh ________.", options:[{t: "water", c: false}, {t: "air", c: true}, {t: "food", c: false}, {t: "trees", c: false}], type: "mcq" },
                        { q: "I love living ________ the sea.", options:[{t: "in", c: false}, {t: "on", c: false}, {t: "by", c: true}, {t: "at", c: false}], type: "mcq" },
                        { q: "We rented a cabin ________ the mountains.", options:[{t: "on", c: false}, {t: "in", c: true}, {t: "by", c: false}, {t: "at", c: false}], type: "mcq" },
                        { q: "We sat on the beach to watch the ________.", options:[{t: "sunset", c: true}, {t: "scenery", c: false}, {t: "landscape", c: false}, {t: "nature", c: false}], type: "mcq" },
                        { q: "Weekends are for you to enjoy the great ________.", options:[{t: "outdoors", c: true}, {t: "nature", c: false}, {t: "forest", c: false}, {t: "environment", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Activities & Appreciation",
                    drills:[
                        { q: "We will go ________ a hike in the forest tomorrow.", options:[{t: "to", c: false}, {t: "on", c: false}, {t: "for", c: true}, {t: "in", c: false}], type: "mcq" },
                        { q: "In summer, my family loves to go ________.", options:[{t: "camped", c: false}, {t: "camping", c: true}, {t: "camps", c: false}, {t: "camp", c: false}], type: "mcq" },
                        { q: "Let's ________ a picnic in the park.", options:[{t: "do", c: false}, {t: "make", c: false}, {t: "have", c: true}, {t: "go", c: false}], type: "mcq" },
                        { q: "What's the nature ________ in your country?", options:[{t: "love", c: false}, {t: "like", c: true}, {t: "look", c: false}, {t: "good", c: false}], type: "mcq" },
                        { q: "I don't like the city; I ________ the countryside.", options:[{t: "prefer", c: true}, {t: "better", c: false}, {t: "love", c: false}, {t: "enjoy", c: false}], type: "mcq" },
                        { q: "From the top of the hill, the view was ________.", options:[{t: "breathtaking", c: true}, {t: "breath", c: false}, {t: "breathing", c: false}, {t: "breathed", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Environmental Issues",
                    drills:[
                        { q: "Everyone must do their part to ________ the environment.", options:[{t: "pollute", c: false}, {t: "protect", c: true}, {t: "reduce", c: false}, {t: "reuse", c: false}], type: "mcq" },
                        { q: "________ change is a very serious global problem.", options:[{t: "Weather", c: false}, {t: "Climate", c: true}, {t: "Nature", c: false}, {t: "Planet", c: false}], type: "mcq" },
                        { q: "Cars and factories cause dangerous air ________.", options:[{t: "pollution", c: true}, {t: "trash", c: false}, {t: "plastic", c: false}, {t: "energy", c: false}], type: "mcq" },
                        { q: "Turn off the lights to save ________.", options:[{t: "trash", c: false}, {t: "energy", c: true}, {t: "nature", c: false}, {t: "plastic", c: false}], type: "mcq" },
                        { q: "Riding a bike reduces your carbon ________.", options:[{t: "shoe", c: false}, {t: "footprint", c: true}, {t: "print", c: false}, {t: "step", c: false}], type: "mcq" },
                        { q: "Please do not throw away ________ in the river.", options:[{t: "nature", c: false}, {t: "trees", c: false}, {t: "trash", c: true}, {t: "energy", c: false}], type: "mcq" }
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
                { text: "It is so nice to get some fresh air. ↘", audio: "TTS: It is so nice to get some fresh air." },
                { text: "We should spend time in nature more often. ↘", audio: "TTS: We should spend time in nature more often." },
                { text: "I love living by the sea. ↘", audio: "TTS: I love living by the sea." },
                { text: "Let's go for a hike in the forest tomorrow. ↘", audio: "TTS: Let's go for a hike in the forest tomorrow." },
                { text: "What's the nature like in your country? ↘", audio: "TTS: What's the nature like in your country?" },
                { text: "The view from the mountain was breathtaking. ↘", audio: "TTS: The view from the mountain was breathtaking." },
                { text: "We must do our part to protect the environment. ↘", audio: "TTS: We must do our part to protect the environment." },
                { text: "Climate change is a very serious global problem. ↘", audio: "TTS: Climate change is a very serious global problem." },
                { text: "Turn off the lights to save energy. ↘", audio: "TTS: Turn off the lights to save energy." },
                { text: "Riding a bike reduces your carbon footprint. ↘", audio: "TTS: Riding a bike reduces your carbon footprint." }
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
                    audio: "TTS: Mark: Did you enjoy your weekend? Sarah: Yes! I went camping in the mountains. Mark: That sounds wonderful. The scenery there is beautiful. Sarah: It really is. The view of the valley was breathtaking.",
                    text: "Mark: Did you enjoy your weekend?<br>Sarah: Yes! I went [camping] in the [mountains].<br>Mark: That sounds wonderful. The [scenery] there is beautiful.<br>Sarah: It really is. The[view] of the valley was breathtaking."
                },
                {
                    type: "dropdown",
                    instruction: "Listen to the dialogue about the environment.",
                    audio: "TTS: John: Look at all this plastic on the beach. It is awful. Emma: I know. We really need to protect the ocean. John: It makes me angry when people pollute nature. Emma: Let's pick up this trash and throw it away properly.",
                    questions:[
                        { q: "John: Look at all this [plastic* | wood | stone] on the beach. It is awful.", a: "plastic" },
                        { q: "Emma: I know. We really need to[protect* | pollute | save] the ocean.", a: "protect" },
                        { q: "John: It makes me angry when people [pollute* | clean | recycle] nature.", a: "pollute" },
                        { q: "Emma: Let's pick up this [trash* | plant | leaf] and throw it away properly.", a: "trash" }
                    ]
                },
                {
                    type: "audio-choice",
                    instruction: "Listen to the speaker. What is she trying to do?",
                    audio: "TTS: I am trying to be more eco-friendly. I recycle all my paper and glass, and I reuse plastic bags. I also walk to work every day to reduce my carbon footprint.",
                    options:[
                        { t: "She is trying to destroy the forest.", c: false },
                        { t: "She is trying to save money to buy a car.", c: false },
                        { t: "She is trying to protect the environment and be sustainable.", c: true },
                        { t: "She is trying to learn how to plant trees.", c: false }
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
                    title: "Dialogue - The National Park",
                    audio: "TTS: Guide: Welcome to the national park! We will go for a hike through the forest today. Tourist: Excellent. I heard the wildlife here is amazing. Guide: It is. We might see some deer and beautiful birds. But remember, we must protect nature. Tourist: Of course. I won't leave any trash on the trail. Guide: Thank you. Also, please do not pick any flowers or leaves from the plants. Tourist: Understood. Let's go, I want to get some fresh air!",
                    body: "<b>Guide:</b> Welcome to the national park! We will [go for a hike](tooltip:go-hike) through the [forest](tooltip:forest) today.<br><b>Tourist:</b> Excellent. I heard the [wildlife](tooltip:wildlife) here is amazing.<br><b>Guide:</b> It is. We might see some deer and beautiful birds. But remember, we must [protect](tooltip:protect) [nature](tooltip:nature).<br><b>Tourist:</b> Of course. I won't leave any [trash](tooltip:trash) on the trail.<br><b>Guide:</b> Thank you. Also, please do not pick any [flowers](tooltip:flower) or [leaves](tooltip:leaf) from the [plants](tooltip:plant).<br><b>Tourist:</b> Understood. Let's go, I want to [get some fresh air](tooltip:get-fresh-air)!",
                    questions:[
                        { q: "Where are the tourist and the guide going?", options:[{t: "To the beach.", c: false}, {t: "For a hike in the forest.", c: true}, {t: "To the city center.", c: false}], type: "mcq" },
                        { q: "What does the guide remind the tourist to do?", options:[{t: "Protect nature and not pick flowers.", c: true}, {t: "Bring an umbrella.", c: false}, {t: "Feed the animals.", c: false}], type: "mcq" },
                        { q: "What does the tourist want to get?", options:[{t: "Some rest.", c: false}, {t: "Some fresh air.", c: true}, {t: "A lot of sun.", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Dialogue - Global Warming",
                    audio: "TTS: David: Did you read the article about climate change? Lisa: Yes, it is very scary. The planet is getting hotter every year. David: I know. Air pollution is a serious problem in big cities. Lisa: We all need to reduce our carbon footprint before it's too late. David: I agree. I started taking the bus to work to save energy. Lisa: That's a great start. We must also recycle our plastic and glass.",
                    body: "<b>David:</b> Did you read the article about [climate change](tooltip:climate-change)?<br><b>Lisa:</b> Yes, it is very scary. The [planet](tooltip:planet) is getting hotter every year.<br><b>David:</b> I know. Air [pollution](tooltip:pollution) is a serious problem in big cities.<br><b>Lisa:</b> We all need to [reduce](tooltip:reduce) our [carbon footprint](tooltip:carbon-footprint) before it's too late.<br><b>David:</b> I agree. I started taking the bus to work to[save energy](tooltip:save-energy).<br><b>Lisa:</b> That's a great start. We must also [recycle](tooltip:recycle) our [plastic](tooltip:plastic) and glass.",
                    questions:[
                        { q: "What is the article about?", options:[{t: "A new forest.", c: false}, {t: "Climate change.", c: true}, {t: "A mountain view.", c: false}], type: "mcq" },
                        { q: "Why did David start taking the bus?", options:[{t: "To save money.", c: false}, {t: "Because he doesn't have a car.", c: false}, {t: "To save energy and reduce pollution.", c: true}], type: "mcq" },
                        { q: "What does Lisa say they must do?", options:[{t: "Recycle plastic and glass.", c: true}, {t: "Move to the countryside.", c: false}, {t: "Throw away trash.", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Email - The Coast Trip",
                    audio: "TTS: Subject: Beautiful scenery! Hi Emma, I am spending the weekend by the sea, and the landscape is absolutely stunning. I rented a small house right on the coast. In the evening, I sit outside to watch the sunset over the ocean. It is so relaxing! The local people are very eco-friendly, too. They clean the beach every morning to protect the environment. I prefer the countryside and the beach over the busy city. Best, Mark.",
                    body: "<b>From: Mark</b><br><b>To: Emma</b><br>Subject: Beautiful [scenery](tooltip:scenery)!<br><br>Hi Emma,<br>I am spending the weekend [by the sea](tooltip:by-the-sea), and the [landscape](tooltip:landscape) is absolutely [stunning](tooltip:stunning). I rented a small house right on the [coast](tooltip:coast). In the evening, I sit outside to [watch the sunset](tooltip:watch-sunset) over the[ocean](tooltip:ocean). It is so relaxing! The local people are very [eco-friendly](tooltip:eco-friendly), too. They clean the [beach](tooltip:beach) every morning to [protect the environment](tooltip:protect-environment). [I prefer the countryside](tooltip:prefer-countryside) and the beach over the busy city.<br><br>Best, Mark.",
                    questions:[
                        { q: "Where is Mark spending the weekend?", options:[{t: "In the mountains.", c: false}, {t: "By the sea on the coast.", c: true}, {t: "In the desert.", c: false}], type: "mcq" },
                        { q: "What does Mark do in the evening?", options:[{t: "He goes swimming in the ocean.", c: false}, {t: "He watches the sunset.", c: true}, {t: "He hikes in the forest.", c: false}], type: "mcq" },
                        { q: "What do the local people do every morning?", options:[{t: "They pollute the river.", c: false}, {t: "They clean the beach.", c: true}, {t: "They cut down trees.", c: false}], type: "mcq" }
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
                { type: "matching", instruction: "Match the landscape to its description.", pairs:[
                    { left: "Forest", right: "Area with many trees", val: "1" },
                    { left: "Desert", right: "Dry area with sand", val: "2" },
                    { left: "Ocean", right: "Large body of salt water", val: "3" },
                    { left: "Mountain", right: "High natural elevation", val: "4" }
                ]},
                { type: "matching", instruction: "Match the nature words.", pairs:[
                    { left: "Plant", right: "Living organism with leaves", val: "1" },
                    { left: "Wildlife", right: "Wild animals in a region", val: "2" },
                    { left: "Planet", right: "Earth, for example", val: "3" },
                    { left: "Trash", right: "Garbage or waste", val: "4" }
                ]},
                { type: "matching", instruction: "Match the verbs with their actions.", pairs:[
                    { left: "To recycle", right: "Process materials for reuse", val: "1" },
                    { left: "To protect", right: "Keep safe from harm", val: "2" },
                    { left: "To pollute", right: "Contaminate the environment", val: "3" },
                    { left: "To reduce", right: "Make smaller or less", val: "4" }
                ]},
                { type: "matching", instruction: "Match the phrase halves.", pairs:[
                    { left: "Get some", right: "fresh air", val: "1" },
                    { left: "By the", right: "sea", val: "2" },
                    { left: "Carbon", right: "footprint", val: "3" },
                    { left: "Climate", right: "change", val: "4" }
                ]},

                // --- WORD ORDER (5-14) ---
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "nature / time / in / spend / Let's / .", correct: "Let's spend time in nature ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "some / get / outside / air / fresh / Go / and / .", correct: "Go outside and get some fresh air ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "the / sea / by / live / to / want / I / .", correct: "I want to live by the sea ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "mountains / the / in / cabin / a / rented / We / .", correct: "We rented a cabin in the mountains ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "sunset / the / watch / beach / on / the / Let's / .", correct: "Let's watch the sunset on the beach ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "outdoors / great / the / enjoy / to / love / I / .", correct: "I love to enjoy the great outdoors ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "tomorrow / hike / a / for / go / Let's / .", correct: "Let's go for a hike tomorrow ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "countryside / the / prefer / I / .", correct: "I prefer the countryside ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "breathtaking / was / view / The / .", correct: "The view was breathtaking ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "environment / the / protect / must / We / .", correct: "We must protect the environment ." },

                // --- CLICKABLE ERROR (15-24) ---
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "Climate [weather](error:change) is a serious problem." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "Cars cause a lot of air [trash](error:pollution)." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "Turn off the lights to save [power](error:energy)." }, // Either save energy or power, but energy is the target phrase
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "We must reduce our carbon [fingerprint](error:footprint)." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "Do not throw [out](error:away) trash in the park." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "We are going [to](error:for) a hike in the forest." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "I love to [look](error:watch) the sunset." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "I live [on](error:by) the sea." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "We rented a cabin in the [mount](error:mountains)." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "What's the nature [love](error:like) in your country?" },

                // --- ODD ONE OUT (25-30) ---
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Landscapes)", options:[{t: "Valley", c: false}, {t: "Ocean", c: false}, {t: "Island", c: false}, {t: "Pollution", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Plants/Nature)", options:[{t: "Tree", c: false}, {t: "Flower", c: false}, {t: "Leaf", c: false}, {t: "Plastic", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Adjectives)", options:[{t: "Stunning", c: false}, {t: "Breathtaking", c: false}, {t: "Sustainable", c: false}, {t: "Trash", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Verbs - Eco-friendly)", options:[{t: "To recycle", c: false}, {t: "To reduce", c: false}, {t: "To save", c: false}, {t: "To pollute", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Environment Issues)", options:[{t: "Pollution", c: false}, {t: "Trash", c: false}, {t: "Plastic", c: false}, {t: "Wildlife", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Phrases)", options:[{t: "Save energy", c: false}, {t: "Protect the environment", c: false}, {t: "Reduce carbon footprint", c: false}, {t: "Throw away trash", c: true}] }, // The others are positive actions

                // --- TRUE / FALSE (31-35) ---
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "If a view is 'breathtaking', it means it is very ugly.", correct: "false"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "A 'valley' is a low area of land between hills or mountains.", correct: "true"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "To 'pollute' the river means to clean the water.", correct: "false"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "The 'coast' is the part of the land near the sea or ocean.", correct: "true"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "If a product is 'eco-friendly', it is bad for the environment.", correct: "false"}] },

                // --- MCQ (36-39) ---
                { type: "mcq", instruction: "Choose the correct word.<br>The total amount of greenhouse gases you produce is your carbon ________.", options:[{t: "shoe", c: false}, {t: "footprint", c: true}, {t: "step", c: false}, {t: "print", c: false}] },
                { type: "mcq", instruction: "Choose the correct verb.<br>If you wash a glass jar and use it again to store food, you ________ it.", options:[{t: "reduce", c: false}, {t: "protect", c: false}, {t: "pollute", c: false}, {t: "reuse", c: true}] },
                { type: "mcq", instruction: "Choose the correct phrase.<br>When you are tired of the city, it is nice to go to the park and get some fresh ________.", options:[{t: "water", c: false}, {t: "air", c: true}, {t: "nature", c: false}, {t: "sun", c: false}] },
                { type: "mcq", instruction: "Choose the correct word.<br>A large natural stream of water flowing to the sea is a ________.", options:[{t: "desert", c: false}, {t: "island", c: false}, {t: "river", c: true}, {t: "valley", c: false}] },

                // --- CATEGORIZE (40) ---
                { type: "categorize", instruction: "Sort the words into Landscapes and Environment/Issues.", 
                    categories:[{id: "land", name: "Landscapes"}, {id: "env", name: "Environment"}],
                    items:[
                        {text: "Forest", catId: "land"}, 
                        {text: "Desert", catId: "land"}, 
                        {text: "Coast", catId: "land"}, 
                        {text: "Pollution", catId: "env"}, 
                        {text: "Plastic", catId: "env"}, 
                        {text: "Trash", catId: "env"}
                    ] 
                }
            ]
        },

        // ======================================================
        // STEP 8: WRITING PRACTICE
        // ======================================================
        {
            title: "Writing Practice",
            instruction: "Write a short paragraph (5-7 sentences) describing a natural landscape you visited or want to visit. Describe the scenery, what activities you can do there, and mention one thing people should do to protect that environment.",
            example: "I love visiting the mountains. The scenery is absolutely stunning, and the view from the top is breathtaking. When I go there, I like to go for a long hike and enjoy the fresh air. Sometimes, we also have a picnic in the green valley. It is important that everyone remembers to protect the environment. We should never throw away trash on the trails, and we must respect the local wildlife.",
            prompts:[
                "Name the landscape (e.g., beach, forest, mountain).",
                "Describe the scenery using adjectives (stunning, breathtaking).",
                "Mention an activity (go for a hike, have a picnic).",
                "Include a phrase about the environment (protect nature, don't pollute)."
            ]
        },

        // ======================================================
        // STEP 9: FLASHCARDS
        // ======================================================
        {
            title: "Flashcards",
            items:[
                // 2A Items (36 items)
                { term: "Forest", definition: "A large area covered chiefly with trees.", defTrans: "Floresta", example: "We got lost in the dark forest.", audioFront: "TTS: Forest", audioBack: "TTS: We got lost in the dark forest." },
                { term: "Mountain", definition: "A large natural elevation of the earth's surface.", defTrans: "Montanha", example: "They climbed the highest mountain in the country.", audioFront: "TTS: Mountain", audioBack: "TTS: They climbed the highest mountain in the country." },
                { term: "Valley", definition: "A low area of land between hills or mountains.", defTrans: "Vale", example: "The village is located in a beautiful green valley.", audioFront: "TTS: Valley", audioBack: "TTS: The village is located in a beautiful green valley." },
                { term: "River", definition: "A large natural stream of water flowing to the sea.", defTrans: "Rio", example: "The river flows all the way to the sea.", audioFront: "TTS: River", audioBack: "TTS: The river flows all the way to the sea." },
                { term: "Ocean", definition: "A very large expanse of sea.", defTrans: "Oceano", example: "Whales live in the deep ocean.", audioFront: "TTS: Ocean", audioBack: "TTS: Whales live in the deep ocean." },
                { term: "Beach", definition: "A pebbly or sandy shore by the ocean.", defTrans: "Praia", example: "I love swimming at the beach in summer.", audioFront: "TTS: Beach", audioBack: "TTS: I love swimming at the beach in summer." },
                { term: "Island", definition: "A piece of land surrounded by water.", defTrans: "Ilha", example: "We took a boat to a tropical island.", audioFront: "TTS: Island", audioBack: "TTS: We took a boat to a tropical island." },
                { term: "Desert", definition: "A dry, barren area of land, especially one covered with sand.", defTrans: "Deserto", example: "Camels can survive in the hot desert.", audioFront: "TTS: Desert", audioBack: "TTS: Camels can survive in the hot desert." },
                { term: "Scenery", definition: "The natural features of a landscape considered in terms of their appearance.", defTrans: "Cenário / Paisagem", example: "The autumn scenery here is beautiful.", audioFront: "TTS: Scenery", audioBack: "TTS: The autumn scenery here is beautiful." },
                { term: "Landscape", definition: "All the visible features of an area of countryside or land.", defTrans: "Paisagem", example: "This artist paints beautiful landscape pictures.", audioFront: "TTS: Landscape", audioBack: "TTS: This artist paints beautiful landscape pictures." },
                { term: "View", definition: "A sight or prospect from a particular place.", defTrans: "Vista / Panorama", example: "My hotel room has a great view of the city.", audioFront: "TTS: View", audioBack: "TTS: My hotel room has a great view of the city." },
                { term: "Coast", definition: "The part of the land near the sea.", defTrans: "Litoral / Costa", example: "We drove along the beautiful coast.", audioFront: "TTS: Coast", audioBack: "TTS: We drove along the beautiful coast." },
                
                { term: "Plant", definition: "A living organism such as trees, shrubs, and herbs.", defTrans: "Planta", example: "Make sure to water the green plant.", audioFront: "TTS: Plant", audioBack: "TTS: Make sure to water the green plant." },
                { term: "Tree", definition: "A woody perennial plant, typically having a single stem or trunk.", defTrans: "Árvore", example: "The old tree has very strong branches.", audioFront: "TTS: Tree", audioBack: "TTS: The old tree has very strong branches." },
                { term: "Flower", definition: "The seed-bearing part of a plant, typically colorful.", defTrans: "Flor", example: "She picked a red flower from the garden.", audioFront: "TTS: Flower", audioBack: "TTS: She picked a red flower from the garden." },
                { term: "Leaf", definition: "A flattened structure of a plant, typically green.", defTrans: "Folha", example: "A yellow leaf fell from the tree.", audioFront: "TTS: Leaf", audioBack: "TTS: A yellow leaf fell from the tree." },
                { term: "Animal", definition: "A living organism that feeds on organic matter.", defTrans: "Animal", example: "The dog is a very loyal animal.", audioFront: "TTS: Animal", audioBack: "TTS: The dog is a very loyal animal." },
                { term: "Wildlife", definition: "Wild animals collectively.", defTrans: "Vida selvagem", example: "The national park protects local wildlife.", audioFront: "TTS: Wildlife", audioBack: "TTS: The national park protects local wildlife." },
                { term: "Environment", definition: "The surroundings or conditions in which a person, animal, or plant lives.", defTrans: "Meio ambiente", example: "We must keep our environment clean.", audioFront: "TTS: Environment", audioBack: "TTS: We must keep our environment clean." },
                { term: "Nature", definition: "The phenomena of the physical world collectively.", defTrans: "Natureza", example: "Spending time in nature makes me happy.", audioFront: "TTS: Nature", audioBack: "TTS: Spending time in nature makes me happy." },
                { term: "Planet", definition: "A celestial body moving in an orbit around a star.", defTrans: "Planeta", example: "Earth is the only planet with human life.", audioFront: "TTS: Planet", audioBack: "TTS: Earth is the only planet with human life." },
                { term: "Pollution", definition: "The introduction of harmful substances into the environment.", defTrans: "Poluição", example: "Cars and factories cause a lot of air pollution.", audioFront: "TTS: Pollution", audioBack: "TTS: Cars and factories cause a lot of air pollution." },
                { term: "Trash", definition: "Discarded matter; refuse.", defTrans: "Lixo", example: "Please throw your trash in the bin.", audioFront: "TTS: Trash", audioBack: "TTS: Please throw your trash in the bin." },
                { term: "Plastic", definition: "A synthetic material made from organic polymers.", defTrans: "Plástico", example: "Plastic bottles are bad for the ocean.", audioFront: "TTS: Plastic", audioBack: "TTS: Plastic bottles are bad for the ocean." },

                { term: "To protect", definition: "To keep safe from harm or injury.", defTrans: "Proteger", example: "We need laws to protect endangered species.", audioFront: "TTS: To protect", audioBack: "TTS: We need laws to protect endangered species." },
                { term: "To save", definition: "To keep and store up for future use; to rescue.", defTrans: "Salvar / Economizar", example: "Turn off the lights to save energy.", audioFront: "TTS: To save", audioBack: "TTS: Turn off the lights to save energy." },
                { term: "To pollute", definition: "To contaminate with harmful or poisonous substances.", defTrans: "Poluir", example: "Do not pollute the river with chemicals.", audioFront: "TTS: To pollute", audioBack: "TTS: Do not pollute the river with chemicals." },
                { term: "To recycle", definition: "To convert waste into reusable material.", defTrans: "Reciclar", example: "I always recycle my paper and glass.", audioFront: "TTS: To recycle", audioBack: "TTS: I always recycle my paper and glass." },
                { term: "To reuse", definition: "To use again or more than once.", defTrans: "Reutilizar", example: "You can wash and reuse this glass jar.", audioFront: "TTS: To reuse", audioBack: "TTS: You can wash and reuse this glass jar." },
                { term: "To reduce", definition: "To make smaller or less in amount.", defTrans: "Reduzir", example: "I want to reduce the amount of water I use.", audioFront: "TTS: To reduce", audioBack: "TTS: I want to reduce the amount of water I use." },
                { term: "Natural", definition: "Existing in or caused by nature.", defTrans: "Natural", example: "Cotton is a completely natural material.", audioFront: "TTS: Natural", audioBack: "TTS: Cotton is a completely natural material." },
                { term: "Wild", definition: "Living or growing in the natural environment.", defTrans: "Selvagem", example: "You can't keep a wild tiger as a pet.", audioFront: "TTS: Wild", audioBack: "TTS: You can't keep a wild tiger as a pet." },
                { term: "Stunning", definition: "Extremely impressive or attractive.", defTrans: "Deslumbrante", example: "The waterfall is absolutely stunning.", audioFront: "TTS: Stunning", audioBack: "TTS: The waterfall is absolutely stunning." },
                { term: "Breathtaking", definition: "Astonishing or awe-inspiring in quality.", defTrans: "De tirar o fôlego", example: "The view from the cliff is breathtaking.", audioFront: "TTS: Breathtaking", audioBack: "TTS: The view from the cliff is breathtaking." },
                { term: "Eco-friendly", definition: "Not harmful to the environment.", defTrans: "Ecológico", example: "Buying local food is an eco-friendly choice.", audioFront: "TTS: Eco-friendly", audioBack: "TTS: Buying local food is an eco-friendly choice." },
                { term: "Sustainable", definition: "Able to be maintained at a certain rate or level.", defTrans: "Sustentável", example: "Solar power is a sustainable energy source.", audioFront: "TTS: Sustainable", audioBack: "TTS: Solar power is a sustainable energy source." },

                // 3A Items (18 items)
                { term: "Spend time in nature", definition: "To pass time outdoors among plants and wildlife.", defTrans: "Passar tempo na natureza", example: "It is healthy to spend time in nature.", audioFront: "TTS: Spend time in nature", audioBack: "TTS: It is healthy to spend time in nature." },
                { term: "Get some fresh air", definition: "To go outside to breathe unpolluted air.", defTrans: "Tomar ar fresco", example: "Let's go outside and get some fresh air.", audioFront: "TTS: Get some fresh air", audioBack: "TTS: Let's go outside and get some fresh air." },
                { term: "By the sea", definition: "Located next to the ocean or beach.", defTrans: "Perto do mar", example: "I love living by the sea.", audioFront: "TTS: By the sea", audioBack: "TTS: I love living by the sea." },
                { term: "In the mountains", definition: "Located in a high altitude, hilly region.", defTrans: "Nas montanhas", example: "We rented a cabin in the mountains.", audioFront: "TTS: In the mountains", audioBack: "TTS: We rented a cabin in the mountains." },
                { term: "Watch the sunset", definition: "To observe the sun going down below the horizon.", defTrans: "Assistir ao pôr do sol", example: "We sat on the beach to watch the sunset.", audioFront: "TTS: Watch the sunset", audioBack: "TTS: We sat on the beach to watch the sunset." },
                { term: "Enjoy the great outdoors", definition: "To take pleasure in activities in wild, open spaces.", defTrans: "Aproveitar o ar livre / a natureza", example: "Weekends are for you to enjoy the great outdoors.", audioFront: "TTS: Enjoy the great outdoors", audioBack: "TTS: Weekends are for you to enjoy the great outdoors." },
                
                { term: "Go for a hike", definition: "To take a long walk in nature for exercise or pleasure.", defTrans: "Fazer uma caminhada/trilha", example: "We will go for a hike in the forest tomorrow.", audioFront: "TTS: Go for a hike", audioBack: "TTS: We will go for a hike in the forest tomorrow." },
                { term: "Go camping", definition: "To spend a holiday living in a tent or camp.", defTrans: "Ir acampar", example: "In summer, my family loves to go camping.", audioFront: "TTS: Go camping", audioBack: "TTS: In summer, my family loves to go camping." },
                { term: "Have a picnic", definition: "To eat a packed meal outdoors.", defTrans: "Fazer um piquenique", example: "Let's have a picnic in the park.", audioFront: "TTS: Have a picnic", audioBack: "TTS: Let's have a picnic in the park." },
                { term: "What's the nature like", definition: "Asking for a description of the natural environment.", defTrans: "Como é a natureza", example: "What's the nature like in your country?", audioFront: "TTS: What's the nature like", audioBack: "TTS: What's the nature like in your country?" },
                { term: "I prefer the countryside", definition: "Stating a liking for rural areas over urban areas.", defTrans: "Eu prefiro o interior", example: "I don't like the city; I prefer the countryside.", audioFront: "TTS: I prefer the countryside", audioBack: "TTS: I don't like the city; I prefer the countryside." },
                { term: "The view was breathtaking", definition: "Describing a scene that is incredibly beautiful.", defTrans: "A vista era de tirar o fôlego", example: "From the top of the hill, the view was breathtaking.", audioFront: "TTS: The view was breathtaking", audioBack: "TTS: From the top of the hill, the view was breathtaking." },
                
                { term: "Protect the environment", definition: "To take actions that prevent harm to the natural world.", defTrans: "Proteger o meio ambiente", example: "Everyone must do their part to protect the environment.", audioFront: "TTS: Protect the environment", audioBack: "TTS: Everyone must do their part to protect the environment." },
                { term: "Climate change", definition: "Long-term changes in temperature and weather patterns globally.", defTrans: "Mudanças climáticas", example: "Climate change is a very serious global problem.", audioFront: "TTS: Climate change", audioBack: "TTS: Climate change is a very serious global problem." },
                { term: "Air pollution", definition: "Contamination of the atmosphere by harmful gases.", defTrans: "Poluição do ar", example: "Cars and factories cause dangerous air pollution.", audioFront: "TTS: Air pollution", audioBack: "TTS: Cars and factories cause dangerous air pollution." },
                { term: "Save energy", definition: "To reduce electricity consumption.", defTrans: "Economizar energia", example: "Turn off the lights to save energy.", audioFront: "TTS: Save energy", audioBack: "TTS: Turn off the lights to save energy." },
                { term: "Carbon footprint", definition: "The total amount of greenhouse gases generated by human actions.", defTrans: "Pegada de carbono", example: "Riding a bike reduces your carbon footprint.", audioFront: "TTS: Carbon footprint", audioBack: "TTS: Riding a bike reduces your carbon footprint." },
                { term: "Throw away trash", definition: "To discard garbage improperly or in a bin.", defTrans: "Jogar lixo fora", example: "Please do not throw away trash in the river.", audioFront: "TTS: Throw away trash", audioBack: "TTS: Please do not throw away trash in the river." }
            ]
        }
    ],

    // ======================================================
    // GLOSSARY (All 54 items + Context words)
    // ======================================================
    glossary:[
        // 2A: Natural Landscapes
        { topic: "Landscapes", term: "forest", definition: "A large area covered chiefly with trees.", translation: "Floresta" },
        { topic: "Landscapes", term: "mountain", definition: "A large natural elevation of the earth's surface.", translation: "Montanha" },
        { topic: "Landscapes", term: "valley", definition: "A low area of land between hills.", translation: "Vale" },
        { topic: "Landscapes", term: "river", definition: "A large natural stream of water.", translation: "Rio" },
        { topic: "Landscapes", term: "ocean", definition: "A very large expanse of sea.", translation: "Oceano" },
        { topic: "Landscapes", term: "beach", definition: "A sandy shore by the ocean.", translation: "Praia" },
        { topic: "Landscapes", term: "island", definition: "A piece of land surrounded by water.", translation: "Ilha" },
        { topic: "Landscapes", term: "desert", definition: "A dry, barren area of land.", translation: "Deserto" },
        { topic: "Landscapes", term: "scenery", definition: "The natural features of a landscape.", translation: "Cenário / Paisagem" },
        { topic: "Landscapes", term: "landscape", definition: "All the visible features of an area of land.", translation: "Paisagem" },
        { topic: "Landscapes", term: "view", definition: "A sight or prospect from a particular place.", translation: "Vista" },
        { topic: "Landscapes", term: "coast", definition: "The part of the land near the sea.", translation: "Costa / Litoral" },

        // 2A: Plants, Animals & Environment
        { topic: "Nature", term: "plant", definition: "A living organism like trees or herbs.", translation: "Planta" },
        { topic: "Nature", term: "tree", definition: "A woody perennial plant.", translation: "Árvore" },
        { topic: "Nature", term: "flower", definition: "The seed-bearing part of a plant.", translation: "Flor" },
        { topic: "Nature", term: "leaf", definition: "A green, flat structure of a plant.", translation: "Folha" },
        { topic: "Nature", term: "animal", definition: "A living organism that feeds on organic matter.", translation: "Animal" },
        { topic: "Nature", term: "wildlife", definition: "Wild animals collectively.", translation: "Vida selvagem" },
        { topic: "Environment", term: "environment", definition: "The surroundings in which a person, animal, or plant lives.", translation: "Meio ambiente" },
        { topic: "Environment", term: "nature", definition: "The physical world collectively.", translation: "Natureza" },
        { topic: "Environment", term: "planet", definition: "A celestial body in orbit around a star.", translation: "Planeta" },
        { topic: "Issues", term: "pollution", definition: "The introduction of harmful substances into the environment.", translation: "Poluição" },
        { topic: "Issues", term: "trash", definition: "Discarded matter; refuse.", translation: "Lixo" },
        { topic: "Issues", term: "plastic", definition: "A synthetic material made from organic polymers.", translation: "Plástico" },

        // 2A: Verbs & Adjectives
        { topic: "Verbs", term: "to-protect", definition: "To keep safe from harm.", translation: "Proteger" },
        { topic: "Verbs", term: "to-save", definition: "To preserve or conserve.", translation: "Salvar / Economizar" },
        { topic: "Verbs", term: "to-pollute", definition: "To contaminate with harmful substances.", translation: "Poluir" },
        { topic: "Verbs", term: "to-recycle", definition: "To convert waste into reusable material.", translation: "Reciclar" },
        { topic: "Verbs", term: "to-reuse", definition: "To use again.", translation: "Reutilizar" },
        { topic: "Verbs", term: "to-reduce", definition: "To make smaller or less in amount.", translation: "Reduzir" },
        { topic: "Adjectives", term: "natural", definition: "Existing in nature.", translation: "Natural" },
        { topic: "Adjectives", term: "wild", definition: "Living in the natural environment.", translation: "Selvagem" },
        { topic: "Adjectives", term: "stunning", definition: "Extremely impressive or attractive.", translation: "Deslumbrante" },
        { topic: "Adjectives", term: "breathtaking", definition: "Astonishing in quality.", translation: "De tirar o fôlego" },
        { topic: "Adjectives", term: "eco-friendly", definition: "Not harmful to the environment.", translation: "Ecológico" },
        { topic: "Adjectives", term: "sustainable", definition: "Able to be maintained without depleting resources.", translation: "Sustentável" },

        // 3A: Expressions
        { topic: "Expressions", term: "spend-time-nature", definition: "To pass time outdoors among plants and wildlife.", translation: "Passar tempo na natureza" },
        { topic: "Expressions", term: "get-fresh-air", definition: "To go outside to breathe unpolluted air.", translation: "Tomar ar fresco" },
        { topic: "Expressions", term: "by-the-sea", definition: "Located next to the ocean or beach.", translation: "Perto do mar" },
        { topic: "Expressions", term: "in-the-mountains", definition: "Located in a high altitude region.", translation: "Nas montanhas" },
        { topic: "Expressions", term: "watch-sunset", definition: "To observe the sun going down.", translation: "Assistir ao pôr do sol" },
        { topic: "Expressions", term: "enjoy-outdoors", definition: "To take pleasure in activities in wild spaces.", translation: "Aproveitar o ar livre" },
        
        { topic: "Expressions", term: "go-hike", definition: "To take a long walk in nature.", translation: "Fazer uma trilha" },
        { topic: "Expressions", term: "go-camping", definition: "To spend a holiday in a tent.", translation: "Ir acampar" },
        { topic: "Expressions", term: "have-picnic", definition: "To eat a packed meal outdoors.", translation: "Fazer um piquenique" },
        { topic: "Expressions", term: "whats-nature-like", definition: "Asking for a description of the natural environment.", translation: "Como é a natureza" },
        { topic: "Expressions", term: "prefer-countryside", definition: "Stating a liking for rural areas over urban areas.", translation: "Eu prefiro o interior" },
        { topic: "Expressions", term: "view-breathtaking", definition: "Describing a scene that is incredibly beautiful.", translation: "A vista era de tirar o fôlego" },
        
        { topic: "Expressions", term: "protect-environment", definition: "To take actions that prevent harm to the natural world.", translation: "Proteger o meio ambiente" },
        { topic: "Expressions", term: "climate-change", definition: "Long-term changes in global temperature.", translation: "Mudanças climáticas" },
        { topic: "Expressions", term: "air-pollution", definition: "Contamination of the atmosphere.", translation: "Poluição do ar" },
        { topic: "Expressions", term: "save-energy", definition: "To reduce electricity consumption.", translation: "Economizar energia" },
        { topic: "Expressions", term: "carbon-footprint", definition: "The total greenhouse gases generated by human actions.", translation: "Pegada de carbono" },
        { topic: "Expressions", term: "throw-trash", definition: "To discard garbage.", translation: "Jogar lixo fora" },

        // Additional Context Words
        { topic: "Context", term: "activity", definition: "A thing that a person or group does.", translation: "Atividade" }
    ]
});