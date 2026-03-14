/**
 * English Block Assembling - LESSON DATA: Topic 11
 * Topic: Home and Living
 * Level: Upper A2 ~ Lower B1
 */

window.initLesson({
    // --- METADATA ---
    lessonId: "lesson-11",
    block: "2",
    topicTitle: "Home and Living",

    steps:[
        // ======================================================
        // STEP 0: INTRO & CAN-DO
        // ======================================================
        {
            title: "Intro & Can-Do",
            objectives: "• Describe different types of [homes](tooltip:house) and living situations.<br>• Identify [rooms](tooltip:room), [furniture](tooltip:furniture), and [kitchen appliances](tooltip:kitchen-appliances).<br>• Talk about daily [household chores](tooltip:chores).<br>• Understand how to [rent](tooltip:rent) an apartment and discuss [utilities](tooltip:utilities).",
            welcome: "Welcome to the Home and Living unit! In this lesson, we will explore the vocabulary you need to describe where you live, the furniture inside your home, and the daily chores you do. You will also learn practical phrases for renting an apartment, talking to a landlord, and organizing tasks with your roommates. Let's get started!",
            audio: {
                objectives: "TTS: In this lesson, you will learn to: Describe different types of homes and living situations. Identify rooms, furniture, and kitchen appliances. Talk about daily household chores. Understand how to rent an apartment and discuss utilities.",
                welcome: "TTS: Welcome to the Home and Living unit! In this lesson, we will explore the vocabulary you need to describe where you live, the furniture inside your home, and the daily chores you do. You will also learn practical phrases for renting an apartment, talking to a landlord, and organizing tasks with your roommates. Let's get started!"
            }
        },

        // ======================================================
        // STEP 1: CONTEXT DIALOGUE
        // ======================================================
        {
            title: "Context Dialogue",
            context: "Alex is looking for a new place to live and has a meeting with a landlord to view an apartment.",
            contextAudio: "TTS: Alex: Hello, I'm looking for an apartment to rent. Landlord: Hello! I have a nice one-bedroom apartment available on the second floor. Alex: Is it furnished? Landlord: Yes, it has a big bed, a comfortable sofa, and kitchen appliances. Alex: Great. How much is the rent per month? Landlord: It's nine hundred dollars, and that includes utilities like water and gas. Alex: Do I have to pay for electricity separately? Landlord: Yes. When would you like to move in? Alex: Hopefully by next weekend!",
            dialogue:[
                { speaker: "Alex", text: "Hello, I'm looking for an [apartment](tooltip:apartment) to [rent](tooltip:rent)." },
                { speaker: "Landlord", text: "Hello! I have a nice one-[bedroom](tooltip:bedroom) apartment available on the second floor." },
                { speaker: "Alex", text: "Is it [furnished](tooltip:furnished)?" },
                { speaker: "Landlord", text: "Yes, it has a big [bed](tooltip:bed), a comfortable [sofa](tooltip:sofa), and kitchen [appliances](tooltip:appliances)." },
                { speaker: "Alex", text: "Great. How much is the rent per month?" },
                { speaker: "Landlord", text: "It's $900, and that includes [utilities](tooltip:utilities) like water and gas." },
                { speaker: "Alex", text: "Do I have to pay for electricity separately?" },
                { speaker: "Landlord", text: "Yes. When would you like to [move in](tooltip:move-in)?" },
                { speaker: "Alex", text: "Hopefully by next weekend!" }
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
                    title: "Places & Rooms",
                    audio: "TTS: House. Apartment. Suburbs. Countryside. Living room. Bedroom. Kitchen. Dining room. Bathroom. Hallway. Garage. Basement. Balcony. Yard.",
                    items:[
                        { term: "House", trans: "Casa" },
                        { term: "Apartment (flat)", trans: "Apartamento" },
                        { term: "Suburbs", trans: "Subúrbios / Bairros residenciais" },
                        { term: "Countryside", trans: "Interior / Campo" },
                        { term: "Living room", trans: "Sala de estar" },
                        { term: "Bedroom", trans: "Quarto" },
                        { term: "Kitchen", trans: "Cozinha" },
                        { term: "Dining room", trans: "Sala de jantar" },
                        { term: "Bathroom", trans: "Banheiro" },
                        { term: "Hallway", trans: "Corredor" },
                        { term: "Garage", trans: "Garagem" },
                        { term: "Basement", trans: "Porão" },
                        { term: "Balcony", trans: "Varanda / Sacada" },
                        { term: "Yard", trans: "Quintal" }
                    ]
                },
                {
                    title: "Furniture & Appliances",
                    audio: "TTS: Sofa. Armchair. Coffee table. Bookshelf. Bed. Wardrobe. Nightstand. Counter. Sink. Refrigerator. Microwave. Oven. Washing machine. Vacuum cleaner.",
                    items:[
                        { term: "Sofa (couch)", trans: "Sofá" },
                        { term: "Armchair", trans: "Poltrona" },
                        { term: "Coffee table", trans: "Mesa de centro" },
                        { term: "Bookshelf", trans: "Estante de livros" },
                        { term: "Bed", trans: "Cama" },
                        { term: "Wardrobe (closet)", trans: "Guarda-roupa" },
                        { term: "Nightstand", trans: "Criado-mudo / Mesa de cabeceira" },
                        { term: "Counter", trans: "Balcão / Bancada" },
                        { term: "Sink", trans: "Pia" },
                        { term: "Refrigerator (fridge)", trans: "Geladeira" },
                        { term: "Microwave", trans: "Micro-ondas" },
                        { term: "Oven", trans: "Forno" },
                        { term: "Washing machine", trans: "Máquina de lavar roupas" },
                        { term: "Vacuum cleaner", trans: "Aspirador de pó" }
                    ]
                },
                {
                    title: "Chores & Renting",
                    audio: "TTS: Do the laundry. Wash the dishes. Take out the trash. Make the bed. Tidy up. Go grocery shopping. Landlord. Tenant. Roommate. Rent. Bills. Utilities. Furnished. Move in. Move out.",
                    items:[
                        { term: "Do the laundry", trans: "Lavar as roupas" },
                        { term: "Wash the dishes", trans: "Lavar as louças" },
                        { term: "Take out the trash (garbage)", trans: "Levar o lixo para fora" },
                        { term: "Make the bed", trans: "Arrumar a cama" },
                        { term: "Tidy up", trans: "Organizar / Arrumar" },
                        { term: "Go grocery shopping", trans: "Fazer compras de mercado" },
                        { term: "Landlord", trans: "Proprietário / Senhorio" },
                        { term: "Tenant", trans: "Inquilino" },
                        { term: "Roommate", trans: "Colega de quarto" },
                        { term: "Rent", trans: "Aluguel / Alugar" },
                        { term: "Bills", trans: "Contas (boletos)" },
                        { term: "Utilities", trans: "Contas de consumo (água, luz, gás)" },
                        { term: "Furnished", trans: "Mobiliado" },
                        { term: "Move in", trans: "Mudar-se para dentro" },
                        { term: "Move out", trans: "Mudar-se (sair)" }
                    ]
                }
            ],

            // --- 2B: EXAMPLES ---
            exampleGroups:[
                {
                    title: "Places & Rooms",
                    audio: "TTS: My parents bought a large house. I rent an apartment in the city center. We live in the suburbs where it is quiet. My grandfather has a farm in the countryside. We sit in the living room to watch TV. I need to paint the walls in my bedroom. She is cooking soup in the kitchen. We eat all our meals in the dining room. Please wash your hands in the bathroom. Don't leave your shoes in the hallway. Park your car inside the garage. We store old boxes down in the basement. I like to drink coffee on the balcony. The dog is running around in the yard.",
                    items:[
                        { term: "House", sent: "My parents bought a large house.", trans: "Meus pais compraram uma casa grande." },
                        { term: "Apartment (flat)", sent: "I rent an apartment in the city center.", trans: "Eu alugo um apartamento no centro da cidade." },
                        { term: "Suburbs", sent: "We live in the suburbs where it is quiet.", trans: "Moramos nos subúrbios onde é silencioso." },
                        { term: "Countryside", sent: "My grandfather has a farm in the countryside.", trans: "Meu avô tem uma fazenda no interior." },
                        { term: "Living room", sent: "We sit in the living room to watch TV.", trans: "Nós sentamos na sala de estar para assistir TV." },
                        { term: "Bedroom", sent: "I need to paint the walls in my bedroom.", trans: "Eu preciso pintar as paredes do meu quarto." },
                        { term: "Kitchen", sent: "She is cooking soup in the kitchen.", trans: "Ela está cozinhando sopa na cozinha." },
                        { term: "Dining room", sent: "We eat all our meals in the dining room.", trans: "Nós comemos todas as nossas refeições na sala de jantar." },
                        { term: "Bathroom", sent: "Please wash your hands in the bathroom.", trans: "Por favor, lave as mãos no banheiro." },
                        { term: "Hallway", sent: "Don't leave your shoes in the hallway.", trans: "Não deixe seus sapatos no corredor." },
                        { term: "Garage", sent: "Park your car inside the garage.", trans: "Estacione seu carro dentro da garagem." },
                        { term: "Basement", sent: "We store old boxes down in the basement.", trans: "Nós guardamos caixas velhas lá embaixo no porão." },
                        { term: "Balcony", sent: "I like to drink coffee on the balcony.", trans: "Eu gosto de tomar café na varanda." },
                        { term: "Yard", sent: "The dog is running around in the yard.", trans: "O cachorro está correndo pelo quintal." }
                    ]
                },
                {
                    title: "Furniture & Appliances",
                    audio: "TTS: Three people can sit on this sofa. He fell asleep in the comfortable armchair. Put your cup on the coffee table. She has hundreds of novels on her bookshelf. I bought a new mattress for my bed. Hang your shirts in the wardrobe. My lamp is on the nightstand. Chop the vegetables on the kitchen counter. Leave the dirty plates in the sink. Keep the milk cold in the refrigerator. You can heat up the pizza in the microwave. We are roasting a chicken in the oven. Load your dirty clothes into the washing machine. Use the vacuum cleaner to clean the carpet.",
                    items:[
                        { term: "Sofa (couch)", sent: "Three people can sit on this sofa.", trans: "Três pessoas podem sentar neste sofá." },
                        { term: "Armchair", sent: "He fell asleep in the comfortable armchair.", trans: "Ele adormeceu na poltrona confortável." },
                        { term: "Coffee table", sent: "Put your cup on the coffee table.", trans: "Coloque sua xícara na mesa de centro." },
                        { term: "Bookshelf", sent: "She has hundreds of novels on her bookshelf.", trans: "Ela tem centenas de romances na estante dela." },
                        { term: "Bed", sent: "I bought a new mattress for my bed.", trans: "Comprei um colchão novo para a minha cama." },
                        { term: "Wardrobe (closet)", sent: "Hang your shirts in the wardrobe.", trans: "Pendure suas camisas no guarda-roupa." },
                        { term: "Nightstand", sent: "My lamp is on the nightstand.", trans: "Meu abajur está no criado-mudo." },
                        { term: "Counter", sent: "Chop the vegetables on the kitchen counter.", trans: "Pique os vegetais na bancada da cozinha." },
                        { term: "Sink", sent: "Leave the dirty plates in the sink.", trans: "Deixe os pratos sujos na pia." },
                        { term: "Refrigerator (fridge)", sent: "Keep the milk cold in the refrigerator.", trans: "Mantenha o leite gelado na geladeira." },
                        { term: "Microwave", sent: "You can heat up the pizza in the microwave.", trans: "Você pode esquentar a pizza no micro-ondas." },
                        { term: "Oven", sent: "We are roasting a chicken in the oven.", trans: "Estamos assando um frango no forno." },
                        { term: "Washing machine", sent: "Load your dirty clothes into the washing machine.", trans: "Coloque suas roupas sujas na máquina de lavar." },
                        { term: "Vacuum cleaner", sent: "Use the vacuum cleaner to clean the carpet.", trans: "Use o aspirador de pó para limpar o carpete." }
                    ]
                },
                {
                    title: "Chores & Renting",
                    audio: "TTS: I need to do the laundry because I have no clean shirts. After dinner, it is my turn to wash the dishes. The garbage smells, please take out the trash. Get up and make the bed immediately. Your room is messy, please tidy up. We have no food, so I must go grocery shopping. The landlord expects us to pay on time. The new tenant signed the contract yesterday. My roommate and I divide the chores. The monthly rent for this place is very high. I check my emails to pay the internet bills. Electricity and water are necessary utilities. The apartment is furnished, so you don't need a bed. Here are your keys, you can move in today. I found a better place, so I will move out next week.",
                    items:[
                        { term: "Do the laundry", sent: "I need to do the laundry because I have no clean shirts.", trans: "Eu preciso lavar as roupas porque não tenho camisas limpas." },
                        { term: "Wash the dishes", sent: "After dinner, it is my turn to wash the dishes.", trans: "Depois do jantar, é minha vez de lavar as louças." },
                        { term: "Take out the trash (garbage)", sent: "The garbage smells, please take out the trash.", trans: "O lixo está fedendo, por favor, leve o lixo para fora." },
                        { term: "Make the bed", sent: "Get up and make the bed immediately.", trans: "Levante-se e arrume a cama imediatamente." },
                        { term: "Tidy up", sent: "Your room is messy, please tidy up.", trans: "Seu quarto está bagunçado, por favor, arrume." },
                        { term: "Go grocery shopping", sent: "We have no food, so I must go grocery shopping.", trans: "Não temos comida, então eu devo fazer as compras de mercado." },
                        { term: "Landlord", sent: "The landlord expects us to pay on time.", trans: "O proprietário espera que paguemos em dia." },
                        { term: "Tenant", sent: "The new tenant signed the contract yesterday.", trans: "O novo inquilino assinou o contrato ontem." },
                        { term: "Roommate", sent: "My roommate and I divide the chores.", trans: "Meu colega de quarto e eu dividimos as tarefas." },
                        { term: "Rent", sent: "The monthly rent for this place is very high.", trans: "O aluguel mensal deste lugar é muito alto." },
                        { term: "Bills", sent: "I check my emails to pay the internet bills.", trans: "Eu checo meus e-mails para pagar as contas de internet." },
                        { term: "Utilities", sent: "Electricity and water are necessary utilities.", trans: "Eletricidade e água são contas de consumo necessárias." },
                        { term: "Furnished", sent: "The apartment is furnished, so you don't need a bed.", trans: "O apartamento é mobiliado, então você não precisa de uma cama." },
                        { term: "Move in", sent: "Here are your keys, you can move in today.", trans: "Aqui estão suas chaves, você pode se mudar (para dentro) hoje." },
                        { term: "Move out", sent: "I found a better place, so I will move out next week.", trans: "Eu encontrei um lugar melhor, então vou me mudar (sair) na próxima semana." }
                    ]
                }
            ],

            // --- 2C: PRACTICE ---
            drillGroups:[
                {
                    title: "Places & Rooms",
                    drills:[
                        { q: "A building for human habitation, usually a detached structure, is a ________.", options:[{t: "Suburbs", c: false}, {t: "House", c: true}, {t: "Balcony", c: false}, {t: "Basement", c: false}], type: "mcq" },
                        { q: "A flat in British English is called an ________ in American English.", options:[{t: "Apartment", c: true}, {t: "Attic", c: false}, {t: "Garage", c: false}, {t: "Yard", c: false}], type: "mcq" },
                        { q: "Residential areas just outside the city center are called the ________.", options:[{t: "Countryside", c: false}, {t: "Hallway", c: false}, {t: "Suburbs", c: true}, {t: "Balcony", c: false}], type: "mcq" },
                        { q: "A rural area with farms and nature is the ________.", options:[{t: "Countryside", c: true}, {t: "Basement", c: false}, {t: "Apartment", c: false}, {t: "Suburbs", c: false}], type: "mcq" },
                        { q: "The room where you sit, relax, and watch TV is the ________.", options:[{t: "Kitchen", c: false}, {t: "Living room", c: true}, {t: "Garage", c: false}, {t: "Bathroom", c: false}], type: "mcq" },
                        { q: "The room where you sleep is the ________.", options:[{t: "Bedroom", c: true}, {t: "Dining room", c: false}, {t: "Kitchen", c: false}, {t: "Hallway", c: false}], type: "mcq" },
                        { q: "The room where you cook food is the ________.", options:[{t: "Bathroom", c: false}, {t: "Bedroom", c: false}, {t: "Kitchen", c: true}, {t: "Balcony", c: false}], type: "mcq" },
                        { q: "The room specifically used for eating meals is the ________.", options:[{t: "Hallway", c: false}, {t: "Dining room", c: true}, {t: "Garage", c: false}, {t: "Basement", c: false}], type: "mcq" },
                        { q: "The room where you take a shower and wash your hands is the ________.", options:[{t: "Bathroom", c: true}, {t: "Attic", c: false}, {t: "Yard", c: false}, {t: "Living room", c: false}], type: "mcq" },
                        { q: "A long passage inside a house with doors to other rooms is the ________.", options:[{t: "Hallway", c: true}, {t: "Balcony", c: false}, {t: "Basement", c: false}, {t: "Suburbs", c: false}], type: "mcq" },
                        { q: "The place where you park your car is the ________.", options:[{t: "Attic", c: false}, {t: "Garage", c: true}, {t: "Living room", c: false}, {t: "Yard", c: false}], type: "mcq" },
                        { q: "The room below ground level in a house is the ________.", options:[{t: "Basement", c: true}, {t: "Attic", c: false}, {t: "Balcony", c: false}, {t: "Roof", c: false}], type: "mcq" },
                        { q: "An outdoor platform attached to an upper floor of a building is a ________.", options:[{t: "Basement", c: false}, {t: "Balcony", c: true}, {t: "Garage", c: false}, {t: "Hallway", c: false}], type: "mcq" },
                        { q: "The outdoor green area behind or in front of a house is the ________.", options:[{t: "Yard", c: true}, {t: "Bathroom", c: false}, {t: "Attic", c: false}, {t: "Kitchen", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Furniture & Appliances",
                    drills:[
                        { q: "A long upholstered piece of furniture for several people to sit on is a ________.", options:[{t: "Sofa (couch)", c: true}, {t: "Counter", c: false}, {t: "Oven", c: false}, {t: "Sink", c: false}], type: "mcq" },
                        { q: "A comfortable chair with side supports for your arms is an ________.", options:[{t: "Armchair", c: true}, {t: "Nightstand", c: false}, {t: "Microwave", c: false}, {t: "Bookshelf", c: false}], type: "mcq" },
                        { q: "A small, low table usually placed in front of a sofa is a ________.", options:[{t: "Coffee table", c: true}, {t: "Wardrobe", c: false}, {t: "Washing machine", c: false}, {t: "Sink", c: false}], type: "mcq" },
                        { q: "A piece of furniture used to store literature is a ________.", options:[{t: "Counter", c: false}, {t: "Refrigerator", c: false}, {t: "Bookshelf", c: true}, {t: "Oven", c: false}], type: "mcq" },
                        { q: "The piece of furniture you sleep on is a ________.", options:[{t: "Bed", c: true}, {t: "Counter", c: false}, {t: "Microwave", c: false}, {t: "Armchair", c: false}], type: "mcq" },
                        { q: "A tall piece of furniture where you hang your clothes is a ________.", options:[{t: "Sink", c: false}, {t: "Coffee table", c: false}, {t: "Wardrobe (closet)", c: true}, {t: "Oven", c: false}], type: "mcq" },
                        { q: "A small table placed right next to your bed is a ________.", options:[{t: "Counter", c: false}, {t: "Nightstand", c: true}, {t: "Refrigerator", c: false}, {t: "Vacuum cleaner", c: false}], type: "mcq" },
                        { q: "A flat surface in a kitchen used for preparing food is the ________.", options:[{t: "Counter", c: true}, {t: "Bathtub", c: false}, {t: "Wardrobe", c: false}, {t: "Bed", c: false}], type: "mcq" },
                        { q: "A basin with a tap used for washing hands or dishes is the ________.", options:[{t: "Oven", c: false}, {t: "Sink", c: true}, {t: "Bookshelf", c: false}, {t: "Sofa", c: false}], type: "mcq" },
                        { q: "An appliance used to keep food and drinks cold is the ________.", options:[{t: "Microwave", c: false}, {t: "Washing machine", c: false}, {t: "Refrigerator (fridge)", c: true}, {t: "Oven", c: false}], type: "mcq" },
                        { q: "A small appliance used to quickly heat up food is the ________.", options:[{t: "Microwave", c: true}, {t: "Vacuum cleaner", c: false}, {t: "Sink", c: false}, {t: "Wardrobe", c: false}], type: "mcq" },
                        { q: "An enclosed compartment used for baking or roasting food is the ________.", options:[{t: "Counter", c: false}, {t: "Oven", c: true}, {t: "Armchair", c: false}, {t: "Nightstand", c: false}], type: "mcq" },
                        { q: "A machine used to wash dirty clothes is the ________.", options:[{t: "Vacuum cleaner", c: false}, {t: "Washing machine", c: true}, {t: "Microwave", c: false}, {t: "Coffee table", c: false}], type: "mcq" },
                        { q: "A device that sucks up dust and dirt from floors is a ________.", options:[{t: "Washing machine", c: false}, {t: "Oven", c: false}, {t: "Vacuum cleaner", c: true}, {t: "Refrigerator", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Chores & Renting",
                    drills:[
                        { q: "When you wash your dirty clothes, you ________.", options:[{t: "Take out the trash", c: false}, {t: "Do the laundry", c: true}, {t: "Make the bed", c: false}, {t: "Move in", c: false}], type: "mcq" },
                        { q: "When you clean the plates after a meal, you ________.", options:[{t: "Tidy up", c: false}, {t: "Go grocery shopping", c: false}, {t: "Wash the dishes", c: true}, {t: "Move out", c: false}], type: "mcq" },
                        { q: "When you remove the garbage bag from the house, you ________.", options:[{t: "Take out the trash", c: true}, {t: "Do the laundry", c: false}, {t: "Make the bed", c: false}, {t: "Rent", c: false}], type: "mcq" },
                        { q: "When you arrange the blankets on your mattress in the morning, you ________.", options:[{t: "Wash the dishes", c: false}, {t: "Make the bed", c: true}, {t: "Tidy up", c: false}, {t: "Move in", c: false}], type: "mcq" },
                        { q: "When you organize a messy room by putting things away, you ________.", options:[{t: "Take out the trash", c: false}, {t: "Tidy up", c: true}, {t: "Rent", c: false}, {t: "Go grocery shopping", c: false}], type: "mcq" },
                        { q: "When you go to the supermarket to buy food, you ________.", options:[{t: "Do the laundry", c: false}, {t: "Move out", c: false}, {t: "Go grocery shopping", c: true}, {t: "Make the bed", c: false}], type: "mcq" },
                        { q: "The person who owns a property and allows someone else to live in it for money is the ________.", options:[{t: "Roommate", c: false}, {t: "Landlord", c: true}, {t: "Tenant", c: false}, {t: "Utilities", c: false}], type: "mcq" },
                        { q: "A person who pays rent to live in a property is a ________.", options:[{t: "Landlord", c: false}, {t: "Tenant", c: true}, {t: "Bills", c: false}, {t: "Rent", c: false}], type: "mcq" },
                        { q: "A person you share an apartment or house with is your ________.", options:[{t: "Roommate", c: true}, {t: "Landlord", c: false}, {t: "Tenant", c: false}, {t: "Utilities", c: false}], type: "mcq" },
                        { q: "The money you pay every month to live in a property is the ________.", options:[{t: "Bills", c: false}, {t: "Rent", c: true}, {t: "Furnished", c: false}, {t: "Tidy up", c: false}], type: "mcq" },
                        { q: "The pieces of paper (or digital documents) requesting payment for internet or phone are ________.", options:[{t: "Bills", c: true}, {t: "Rent", c: false}, {t: "Landlords", c: false}, {t: "Tenants", c: false}], type: "mcq" },
                        { q: "Essential services like water, gas, and electricity are called ________.", options:[{t: "Roommates", c: false}, {t: "Utilities", c: true}, {t: "Rents", c: false}, {t: "Bills", c: false}], type: "mcq" },
                        { q: "If an apartment comes with beds, a sofa, and appliances, it is ________.", options:[{t: "Furnished", c: true}, {t: "Messy", c: false}, {t: "Tidy", c: false}, {t: "Moved out", c: false}], type: "mcq" },
                        { q: "The action of arriving at a new home to start living there is to ________.", options:[{t: "Move out", c: false}, {t: "Move in", c: true}, {t: "Rent", c: false}, {t: "Tidy up", c: false}], type: "mcq" },
                        { q: "The action of leaving a home permanently is to ________.", options:[{t: "Move in", c: false}, {t: "Move out", c: true}, {t: "Do the laundry", c: false}, {t: "Go grocery shopping", c: false}], type: "mcq" }
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
                    title: "Describing Your Home",
                    audio: "TTS: I live in a... What's your new place like? How many rooms are there in your house? Who do you live with?",
                    explanation: "Phrases used to ask and answer basic questions about where and how you live.<br><span style='color:var(--primary-blue); font-style:italic;'>(Frases usadas para fazer e responder perguntas básicas sobre onde e como você mora.)</span>",
                    samples:[
                        { en: "<b>I live in a...</b>", pt: "<span style='color:var(--primary-blue)'>(Eu moro em um/uma...)</span>" },
                        { en: "<b>What's your new place like?</b>", pt: "<span style='color:var(--primary-blue)'>(Como é a sua casa nova?)</span>" },
                        { en: "<b>How many rooms are there in your house?</b>", pt: "<span style='color:var(--primary-blue)'>(Quantos cômodos tem na sua casa?)</span>" },
                        { en: "<b>Who do you live with?</b>", pt: "<span style='color:var(--primary-blue)'>(Com quem você mora?)</span>" }
                    ]
                },
                {
                    title: "Household Chores",
                    audio: "TTS: What chores do you have to do today? Whose turn is it to...? It's my turn. I hate washing the dishes.",
                    explanation: "Useful phrases for discussing daily tasks and dividing responsibilities with others.<br><span style='color:var(--primary-blue); font-style:italic;'>(Frases úteis para discutir tarefas diárias e dividir responsabilidades com outros.)</span>",
                    samples:[
                        { en: "<b>What chores do you have to do today?</b>", pt: "<span style='color:var(--primary-blue)'>(Quais tarefas você tem que fazer hoje?)</span>" },
                        { en: "<b>Whose turn is it to...?</b>", pt: "<span style='color:var(--primary-blue)'>(De quem é a vez de...?)</span>" },
                        { en: "<b>It's my turn.</b>", pt: "<span style='color:var(--primary-blue)'>(É a minha vez.)</span>" },
                        { en: "<b>I hate washing the dishes.</b>", pt: "<span style='color:var(--primary-blue)'>(Eu odeio lavar as louças.)</span>" }
                    ]
                },
                {
                    title: "Renting a Home",
                    audio: "TTS: I'm looking for an apartment to rent. Is it furnished or unfurnished? How much is the rent per month? Utilities are included. You have to pay for electricity separately.",
                    explanation: "Vocabulary for communicating with landlords and understanding rental conditions.<br><span style='color:var(--primary-blue); font-style:italic;'>(Vocabulário para se comunicar com proprietários e entender as condições de aluguel.)</span>",
                    samples:[
                        { en: "<b>I'm looking for an apartment to rent.</b>", pt: "<span style='color:var(--primary-blue)'>(Estou procurando um apartamento para alugar.)</span>" },
                        { en: "<b>Is it furnished or unfurnished?</b>", pt: "<span style='color:var(--primary-blue)'>(É mobiliado ou sem mobília?)</span>" },
                        { en: "<b>How much is the rent per month?</b>", pt: "<span style='color:var(--primary-blue)'>(Quanto é o aluguel por mês?)</span>" },
                        { en: "<b>Utilities are included.</b>", pt: "<span style='color:var(--primary-blue)'>(As contas de consumo estão incluídas.)</span>" },
                        { en: "<b>You have to pay for electricity separately.</b>", pt: "<span style='color:var(--primary-blue)'>(Você tem que pagar a eletricidade separadamente.)</span>" }
                    ]
                }
            ],

            // --- 3B: DIALOGUES ---
            dialogueGroups:[
                {
                    title: "Dialogue 1: The New Apartment",
                    audio: "TTS: What's your new place like? It's amazing! I live in a small apartment with a balcony.",
                    lines:[
                        { speaker: "Sarah", text: "What's your new place like?", pt: "(Como é o seu novo lugar?)" },
                        { speaker: "Mark", text: "It's amazing! I live in a small apartment with a balcony.", pt: "(É incrível! Eu moro em um apartamento pequeno com sacada.)" }
                    ]
                },
                {
                    title: "Dialogue 2: Housemates",
                    audio: "TTS: Who do you live with? I share a house with two friends. How many rooms are there in your house? There are three bedrooms.",
                    lines:[
                        { speaker: "Leo", text: "Who do you live with?", pt: "(Com quem você mora?)" },
                        { speaker: "Emma", text: "I share a house with two friends. How many rooms are there in your house?", pt: "(Eu divido uma casa com dois amigos. Quantos cômodos tem na sua casa?)" }
                    ]
                },
                {
                    title: "Dialogue 3: Dividing the Work",
                    audio: "TTS: What chores do you have to do today? I need to sweep the floor. I hate washing the dishes.",
                    lines:[
                        { speaker: "Tom", text: "What chores do you have to do today?", pt: "(Quais tarefas você tem que fazer hoje?)" },
                        { speaker: "Jake", text: "I need to sweep the floor. I hate washing the dishes.", pt: "(Eu preciso varrer o chão. Eu odeio lavar as louças.)" }
                    ]
                },
                {
                    title: "Dialogue 4: Dinner Time",
                    audio: "TTS: Whose turn is it to cook dinner? It's my turn tonight.",
                    lines:[
                        { speaker: "Anna", text: "Whose turn is it to cook dinner?", pt: "(De quem é a vez de fazer o jantar?)" },
                        { speaker: "Chris", text: "It's my turn tonight.", pt: "(É a minha vez hoje à noite.)" }
                    ]
                },
                {
                    title: "Dialogue 5: Calling the Landlord",
                    audio: "TTS: Hello, I'm looking for an apartment to rent. Great. Is it furnished or unfurnished?",
                    lines:[
                        { speaker: "Alex", text: "Hello, I'm looking for an apartment to rent.", pt: "(Olá, estou procurando um apartamento para alugar.)" },
                        { speaker: "Landlord", text: "Great. Is it furnished or unfurnished?", pt: "(Ótimo. É mobiliado ou sem mobília?)" }
                    ]
                },
                {
                    title: "Dialogue 6: Discussing the Costs",
                    audio: "TTS: How much is the rent per month? Utilities are included. However, you have to pay for electricity separately.",
                    lines:[
                        { speaker: "Alex", text: "How much is the rent per month?", pt: "(Quanto é o aluguel por mês?)" },
                        { speaker: "Landlord", text: "Utilities are included. However, you have to pay for electricity separately.", pt: "(As contas de consumo estão incluídas. Porém, você tem que pagar a eletricidade separadamente.)" }
                    ]
                }
            ],

            // --- 3C: PRACTICE ---
            grammarDrillGroups:[
                {
                    title: "Describing Your Home",
                    drills:[
                        { q: "_____ live in a small apartment.", options:[{t: "I", c: true}, {t: "My", c: false}, {t: "Me", c: false}, {t: "Mine", c: false}], type: "mcq" },
                        { q: "_____ your new place like?", options:[{t: "What's", c: true}, {t: "Who's", c: false}, {t: "Where's", c: false}, {t: "How's", c: false}], type: "mcq" },
                        { q: "_____ many rooms are there in your house?", options:[{t: "What", c: false}, {t: "Who", c: false}, {t: "Where", c: false}, {t: "How", c: true}], type: "mcq" },
                        { q: "_____ do you live with?", options:[{t: "What", c: false}, {t: "When", c: false}, {t: "Who", c: true}, {t: "Why", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Household Chores",
                    drills:[
                        { q: "What _____ do you have to do today?", options:[{t: "chores", c: true}, {t: "rooms", c: false}, {t: "furnitures", c: false}, {t: "rents", c: false}], type: "mcq" },
                        { q: "_____ turn is it to cook dinner?", options:[{t: "Who's", c: false}, {t: "Whose", c: true}, {t: "Who", c: false}, {t: "Which", c: false}], type: "mcq" },
                        { q: "It's my _____ tonight.", options:[{t: "time", c: false}, {t: "hour", c: false}, {t: "turn", c: true}, {t: "chore", c: false}], type: "mcq" },
                        { q: "I _____ washing the dishes.", options:[{t: "hate", c: true}, {t: "hating", c: false}, {t: "hated", c: false}, {t: "am hate", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Renting a Home",
                    drills:[
                        { q: "I'm looking for an apartment to _____.", options:[{t: "rent", c: true}, {t: "landlord", c: false}, {t: "tenant", c: false}, {t: "utility", c: false}], type: "mcq" },
                        { q: "Is it furnished or _____?", options:[{t: "unfurnished", c: true}, {t: "spacious", c: false}, {t: "cozy", c: false}, {t: "dirty", c: false}], type: "mcq" },
                        { q: "How much is the rent per _____?", options:[{t: "day", c: false}, {t: "week", c: false}, {t: "month", c: true}, {t: "year", c: false}], type: "mcq" },
                        { q: "Utilities are _____ in the rent.", options:[{t: "separated", c: false}, {t: "furnished", c: false}, {t: "included", c: true}, {t: "tidy", c: false}], type: "mcq" },
                        { q: "You have to pay for electricity _____.", options:[{t: "included", c: false}, {t: "separately", c: true}, {t: "together", c: false}, {t: "furnished", c: false}], type: "mcq" }
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
                { text: "I live in a small apartment with a balcony. ↘", audio: "TTS: I live in a small apartment with a balcony." },
                { text: "What's your new place like? ↘", audio: "TTS: What's your new place like?" },
                { text: "How many rooms are there in your house? ↘", audio: "TTS: How many rooms are there in your house?" },
                { text: "Who do you live with? ↘", audio: "TTS: Who do you live with?" },
                { text: "What chores do you have to do today? ↘", audio: "TTS: What chores do you have to do today?" },
                { text: "Whose turn is it to take out the trash? ↘", audio: "TTS: Whose turn is it to take out the trash?" },
                { text: "It's my turn to wash the dishes tonight. ↘", audio: "TTS: It's my turn to wash the dishes tonight." },
                { text: "I'm looking for an apartment to rent. ↘", audio: "TTS: I'm looking for an apartment to rent." },
                { text: "How much is the rent per month? ↘", audio: "TTS: How much is the rent per month?" },
                { text: "Are utilities included, or do I pay separately? ↗", audio: "TTS: Are utilities included, or do I pay separately?" }
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
                    instruction: "Listen to the voice message and type the missing words.",
                    audio: "TTS: Hi! I need you to do the laundry and clean the bathroom today. Don't forget to take out the trash. I will go grocery shopping after work.",
                    text: "Hi! I need you to do the [laundry] and clean the [bathroom] today. Don't forget to take out the [trash]. I will go grocery [shopping] after work."
                },
                {
                    type: "dropdown",
                    instruction: "Listen to the conversation between a tenant and a landlord.",
                    audio: "TTS: Tenant: Is the apartment furnished? Landlord: Yes, it has a bed and a sofa. Tenant: Are the utilities included? Landlord: Yes, water and gas are included.",
                    questions:[
                        { q: "Tenant: Is the apartment [furnished* | messy | spacious]?", a: "furnished" },
                        { q: "Landlord: Yes, it has a bed and a[sofa* | yard | balcony].", a: "sofa" },
                        { q: "Tenant: Are the[utilities* | bills | rents] included?", a: "utilities" },
                        { q: "Landlord: Yes, water and gas are included.", a: "" }
                    ]
                },
                {
                    type: "audio-choice",
                    instruction: "Listen to the person describing their new home. What does the house have?",
                    audio: "TTS: I moved to the suburbs last month. It's very quiet, and my new house has a big yard and a garage, but it is far from the city center.",
                    options:[
                        { t: "A balcony and an attic.", c: false },
                        { t: "A big yard and a garage.", c: true },
                        { t: "A big kitchen and a basement.", c: false },
                        { t: "No yard, but a big living room.", c: false }
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
                    title: "Narration - The Empty Apartment",
                    audio: "TTS: Last week, John moved into his new apartment. It was completely unfurnished. There was no bed, no sofa, and no coffee table. First, he bought a mattress to sleep on. Then, he bought a refrigerator for the kitchen so his food wouldn't go bad. Tomorrow, he plans to go to the store to buy a wardrobe and an armchair.",
                    body: "Last week, John moved into his new [apartment](tooltip:apartment). It was completely unfurnished. There was no [bed](tooltip:bed), no [sofa (couch)](tooltip:sofa), and no [coffee table](tooltip:coffee-table). First, he bought a mattress to sleep on. Then, he bought a[refrigerator (fridge)](tooltip:refrigerator) for the [kitchen](tooltip:kitchen) so his food wouldn't go bad. Tomorrow, he plans to go to the store to buy a [wardrobe (closet)](tooltip:wardrobe) and an [armchair](tooltip:armchair).",
                    questions:[
                        { q: "Why did John have to buy a bed?", options:[{t: "Because the apartment was unfurnished.", c: true}, {t: "Because his old bed was broken.", c: false}, {t: "Because the landlord told him to.", c: false}], type: "mcq" },
                        { q: "What appliance did he buy for the kitchen?", options:[{t: "A microwave.", c: false}, {t: "A refrigerator.", c: true}, {t: "An oven.", c: false}], type: "mcq" },
                        { q: "What does he plan to buy tomorrow?", options:[{t: "A coffee table and a sofa.", c: false}, {t: "A wardrobe and an armchair.", c: true}, {t: "A bed and a sink.", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Dialogue - The Messy Roommates",
                    audio: "TTS: Emma: Leo, your clothes are all over the living room! You need to tidy up. Leo: I'm sorry, I'll put them in my wardrobe right now. Emma: Also, whose turn is it to wash the dishes? The sink is full. Leo: It's my turn. I hate washing the dishes, but I will do it after I take out the trash.",
                    body: "<b>Emma:</b> Leo, your clothes are all over the [living room](tooltip:living-room)! You need to [tidy up](tooltip:tidy-up).<br><b>Leo:</b> I'm sorry, I'll put them in my [wardrobe (closet)](tooltip:wardrobe) right now.<br><b>Emma:</b> Also, whose turn is it to [wash the dishes](tooltip:wash-dishes)? The [sink](tooltip:sink) is full.<br><b>Leo:</b> It's my turn. I hate washing the dishes, but I will do it after I [take out the trash (garbage)](tooltip:take-trash).",
                    questions:[
                        { q: "Where did Leo leave his clothes?", options:[{t: "In the bedroom.", c: false}, {t: "In the living room.", c: true}, {t: "In the kitchen.", c: false}], type: "mcq" },
                        { q: "Where is Leo going to put his clothes?", options:[{t: "In the washing machine.", c: false}, {t: "In his wardrobe.", c: true}, {t: "On the bed.", c: false}], type: "mcq" },
                        { q: "What chore does Leo hate doing?", options:[{t: "Washing the dishes.", c: true}, {t: "Taking out the trash.", c: false}, {t: "Tidying up.", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Email - Life in the Suburbs",
                    audio: "TTS: Subject: My new house! Hi Sarah, I finally moved into my new house in the suburbs. It is very different from the city! The house has three bedrooms, a large dining room, and a big yard for the dog. I don't have a landlord anymore because I bought the house! The only problem is that the commute is long, but it is worth it. Come visit soon! Best, Mark.",
                    body: "<b>Subject:</b> My new house!<br><br>Hi Sarah,<br>I finally moved into my new [house](tooltip:house) in the[suburbs](tooltip:suburbs). It is very different from the city! The house has three [bedrooms](tooltip:bedroom), a large [dining room](tooltip:dining-room), and a big [yard](tooltip:yard) for the dog. I don't have a [landlord](tooltip:landlord) anymore because I bought the house! The only problem is that the commute is long, but it is worth it. Come visit soon!<br><br>Best, Mark.",
                    questions:[
                        { q: "Where is Mark's new house?", options:[{t: "In the city center.", c: false}, {t: "In the countryside.", c: false}, {t: "In the suburbs.", c: true}], type: "mcq" },
                        { q: "Why doesn't Mark have a landlord?", options:[{t: "Because he bought the house.", c: true}, {t: "Because he lives in an apartment.", c: false}, {t: "Because utilities are included.", c: false}], type: "mcq" },
                        { q: "What does the house have for the dog?", options:[{t: "A balcony.", c: false}, {t: "A basement.", c: false}, {t: "A yard.", c: true}], type: "mcq" }
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
                { type: "matching", instruction: "Match the room with its purpose.", pairs:[
                    { left: "Bedroom", right: "Where you sleep", val: "1" },
                    { left: "Kitchen", right: "Where you cook", val: "2" },
                    { left: "Living room", right: "Where you watch TV", val: "3" },
                    { left: "Dining room", right: "Where you eat meals", val: "4" }
                ]},
                { type: "matching", instruction: "Match the furniture to the room.", pairs:[
                    { left: "Bed", right: "Bedroom", val: "1" },
                    { left: "Sofa", right: "Living room", val: "2" },
                    { left: "Refrigerator", right: "Kitchen", val: "3" },
                    { left: "Bathtub", right: "Bathroom", val: "4" }
                ]},
                { type: "matching", instruction: "Match the verb to the chore.", pairs:[
                    { left: "Do", right: "the laundry", val: "1" },
                    { left: "Wash", right: "the dishes", val: "2" },
                    { left: "Take out", right: "the trash", val: "3" },
                    { left: "Make", right: "the bed", val: "4" }
                ]},
                { type: "matching", instruction: "Match the housing terms.", pairs:[
                    { left: "Landlord", right: "Owns the property", val: "1" },
                    { left: "Tenant", right: "Pays the rent", val: "2" },
                    { left: "Utilities", right: "Water, gas, electricity", val: "3" },
                    { left: "Roommate", right: "Shares the apartment", val: "4" }
                ]},

                // --- WORD ORDER (5-14) ---
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "live / I / small / in / apartment / a / .", correct: "I live in a small apartment ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "new / like / What's / place / your / ?", correct: "What's your new place like ?" },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "rooms / there / house / are / How / many / your / in / ?", correct: "How many rooms are there in your house ?" },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "you / live / do / Who / with / ?", correct: "Who do you live with ?" },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "chores / today / do / you / What / to / have / do / ?", correct: "What chores do you have to do today ?" },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "turn / cook / is / dinner / it / Whose / to / ?", correct: "Whose turn is it to cook dinner ?" },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "my / It's / turn / tonight / .", correct: "It's my turn tonight ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "rent / an / looking / for / apartment / to / I'm / .", correct: "I'm looking for an apartment to rent ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "per / rent / much / How / month / the / is / ?", correct: "How much is the rent per month ?" },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "included / the / Utilities / rent / in / are / .", correct: "Utilities are included in the rent ." },

                // --- CLICKABLE ERROR (15-24) ---
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "I [make](error:do) the laundry on Sundays." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "Please [do](error:wash) the dishes after dinner." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "Don't forget to take [in](error:out) the trash." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "I need to [do](error:make) the bed in the morning." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "I live[on](error:in) a big house." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "What is your new place [love](error:like)?" },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "[Who's](error:Whose) turn is it to clean?" },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "The utilities are [including](error:included) in the rent." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "You pay for electricity [separate](error:separately)." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "I hate [to](error:) washing the dishes." },

                // --- ODD ONE OUT (25-30) ---
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Furniture)", options:[{t: "Sofa (couch)", c: false}, {t: "Armchair", c: false}, {t: "Bed", c: false}, {t: "Sink", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Rooms)", options:[{t: "Kitchen", c: false}, {t: "Bathroom", c: false}, {t: "Bedroom", c: false}, {t: "Wardrobe (closet)", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (People & Money)", options:[{t: "Tenant", c: false}, {t: "Landlord", c: false}, {t: "Roommate", c: false}, {t: "Rent", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Appliances)", options:[{t: "Microwave", c: false}, {t: "Refrigerator (fridge)", c: false}, {t: "Oven", c: false}, {t: "Balcony", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Places to live)", options:[{t: "House", c: false}, {t: "Apartment (flat)", c: false}, {t: "Condo", c: false}, {t: "Garage", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Chores)", options:[{t: "Tidy up", c: false}, {t: "Wash the dishes", c: false}, {t: "Take out the trash", c: false}, {t: "Move in", c: true}] },

                // --- TRUE / FALSE (31-35) ---
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "You sleep in the dining room.", correct: "false"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "A landlord pays rent to a tenant.", correct: "false"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "Utilities usually include water, gas, and electricity.", correct: "true"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "A furnished apartment already has furniture inside.", correct: "true"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "You park your car in the attic.", correct: "false"}] },

                // --- MCQ (36-39) ---
                { type: "mcq", instruction: "Choose the correct word.<br>The room below the ground level is the ______.", options:[{t: "Basement", c: true}, {t: "Attic", c: false}, {t: "Balcony", c: false}, {t: "Hallway", c: false}] },
                { type: "mcq", instruction: "Choose the correct word.<br>The machine used to wash clothes is the ______.", options:[{t: "Washing machine", c: true}, {t: "Dishwasher", c: false}, {t: "Vacuum cleaner", c: false}, {t: "Oven", c: false}] },
                { type: "mcq", instruction: "Choose the correct word.<br>If an apartment has no furniture, it is ______.", options:[{t: "Furnished", c: false}, {t: "Unfurnished", c: true}, {t: "Spacious", c: false}, {t: "Cozy", c: false}] },
                { type: "mcq", instruction: "Choose the correct word.<br>The outdoor green space around a house is the ______.", options:[{t: "Yard", c: true}, {t: "Basement", c: false}, {t: "Garage", c: false}, {t: "Hallway", c: false}] },

                // --- CATEGORIZE (40) ---
                { type: "categorize", instruction: "Sort the words into Furniture and Appliances.", 
                    categories:[{id: "furn", name: "Furniture"}, {id: "app", name: "Appliances"}],
                    items:[
                        {text: "Sofa (couch)", catId: "furn"}, 
                        {text: "Bed", catId: "furn"}, 
                        {text: "Wardrobe (closet)", catId: "furn"}, 
                        {text: "Refrigerator (fridge)", catId: "app"}, 
                        {text: "Microwave", catId: "app"}, 
                        {text: "Oven", catId: "app"}
                    ] 
                }
            ]
        },

        // ======================================================
        // STEP 8: WRITING PRACTICE
        // ======================================================
        {
            title: "Writing Practice",
            instruction: "Write an email to a friend (5-7 sentences) describing your current home. Mention if you live in a house or apartment, what rooms you have, who you live with, and how you split the household chores.",
            example: "Hi John, I recently moved into a new apartment. It is very spacious and has two bedrooms. I live with one roommate, and we share the rent and bills. We divide the chores so it is fair. I wash the dishes and take out the trash, and he does the laundry. Come visit us soon! Best, Alex.",
            prompts:[
                "Describe the type of home (house, apartment, suburbs, etc.).",
                "Name at least three rooms or pieces of furniture.",
                "Mention at least two chores you or your roommates do."
            ]
        },

        // ======================================================
        // STEP 9: FLASHCARDS
        // ======================================================
        {
            title: "Flashcards",
            items:[
                // 2A Items (43 items)
                { term: "House", definition: "A building for human habitation.", defTrans: "Casa", example: "My parents bought a large house.", audioFront: "TTS: House", audioBack: "TTS: My parents bought a large house." },
                { term: "Apartment (flat)", definition: "A set of rooms for living in, usually on one floor of a building.", defTrans: "Apartamento", example: "I rent an apartment in the city center.", audioFront: "TTS: Apartment", audioBack: "TTS: I rent an apartment in the city center." },
                { term: "Suburbs", definition: "A residential area on the edge of a city.", defTrans: "Subúrbios", example: "We live in the suburbs where it is quiet.", audioFront: "TTS: Suburbs", audioBack: "TTS: We live in the suburbs where it is quiet." },
                { term: "Countryside", definition: "The land and scenery of a rural area.", defTrans: "Interior / Campo", example: "My grandfather has a farm in the countryside.", audioFront: "TTS: Countryside", audioBack: "TTS: My grandfather has a farm in the countryside." },
                { term: "Living room", definition: "A room for general everyday use.", defTrans: "Sala de estar", example: "We sit in the living room to watch TV.", audioFront: "TTS: Living room", audioBack: "TTS: We sit in the living room to watch TV." },
                { term: "Bedroom", definition: "A room for sleeping in.", defTrans: "Quarto", example: "I need to paint the walls in my bedroom.", audioFront: "TTS: Bedroom", audioBack: "TTS: I need to paint the walls in my bedroom." },
                { term: "Kitchen", definition: "A room used for cooking and food preparation.", defTrans: "Cozinha", example: "She is cooking soup in the kitchen.", audioFront: "TTS: Kitchen", audioBack: "TTS: She is cooking soup in the kitchen." },
                { term: "Dining room", definition: "A room in which meals are eaten.", defTrans: "Sala de jantar", example: "We eat all our meals in the dining room.", audioFront: "TTS: Dining room", audioBack: "TTS: We eat all our meals in the dining room." },
                { term: "Bathroom", definition: "A room containing a toilet, sink, and typically a shower or bathtub.", defTrans: "Banheiro", example: "Please wash your hands in the bathroom.", audioFront: "TTS: Bathroom", audioBack: "TTS: Please wash your hands in the bathroom." },
                { term: "Hallway", definition: "A corridor connecting rooms.", defTrans: "Corredor", example: "Don't leave your shoes in the hallway.", audioFront: "TTS: Hallway", audioBack: "TTS: Don't leave your shoes in the hallway." },
                { term: "Garage", definition: "A building for housing a motor vehicle.", defTrans: "Garagem", example: "Park your car inside the garage.", audioFront: "TTS: Garage", audioBack: "TTS: Park your car inside the garage." },
                { term: "Basement", definition: "The floor of a building which is partly or entirely below ground.", defTrans: "Porão", example: "We store old boxes down in the basement.", audioFront: "TTS: Basement", audioBack: "TTS: We store old boxes down in the basement." },
                { term: "Balcony", definition: "A platform enclosed by a wall or balustrade on the outside of a building.", defTrans: "Varanda / Sacada", example: "I like to drink coffee on the balcony.", audioFront: "TTS: Balcony", audioBack: "TTS: I like to drink coffee on the balcony." },
                { term: "Yard", definition: "A piece of uncultivated ground adjoining a building.", defTrans: "Quintal", example: "The dog is running around in the yard.", audioFront: "TTS: Yard", audioBack: "TTS: The dog is running around in the yard." },
                
                { term: "Sofa (couch)", definition: "A long upholstered piece of furniture for several people.", defTrans: "Sofá", example: "Three people can sit on this sofa.", audioFront: "TTS: Sofa", audioBack: "TTS: Three people can sit on this sofa." },
                { term: "Armchair", definition: "A comfortable chair with side supports for a person's arms.", defTrans: "Poltrona", example: "He fell asleep in the comfortable armchair.", audioFront: "TTS: Armchair", audioBack: "TTS: He fell asleep in the comfortable armchair." },
                { term: "Coffee table", definition: "A small, low table usually placed in front of a sofa.", defTrans: "Mesa de centro", example: "Put your cup on the coffee table.", audioFront: "TTS: Coffee table", audioBack: "TTS: Put your cup on the coffee table." },
                { term: "Bookshelf", definition: "An open cabinet containing shelves for books.", defTrans: "Estante de livros", example: "She has hundreds of novels on her bookshelf.", audioFront: "TTS: Bookshelf", audioBack: "TTS: She has hundreds of novels on her bookshelf." },
                { term: "Bed", definition: "A piece of furniture for sleep or rest.", defTrans: "Cama", example: "I bought a new mattress for my bed.", audioFront: "TTS: Bed", audioBack: "TTS: I bought a new mattress for my bed." },
                { term: "Wardrobe (closet)", definition: "A large, tall cabinet in which clothes may be hung or stored.", defTrans: "Guarda-roupa", example: "Hang your shirts in the wardrobe.", audioFront: "TTS: Wardrobe", audioBack: "TTS: Hang your shirts in the wardrobe." },
                { term: "Nightstand", definition: "A small table kept at the side of a bed.", defTrans: "Criado-mudo", example: "My lamp is on the nightstand.", audioFront: "TTS: Nightstand", audioBack: "TTS: My lamp is on the nightstand." },
                { term: "Counter", definition: "A long flat-topped fixture in a kitchen.", defTrans: "Bancada", example: "Chop the vegetables on the kitchen counter.", audioFront: "TTS: Counter", audioBack: "TTS: Chop the vegetables on the kitchen counter." },
                { term: "Sink", definition: "A fixed basin with a water supply.", defTrans: "Pia", example: "Leave the dirty plates in the sink.", audioFront: "TTS: Sink", audioBack: "TTS: Leave the dirty plates in the sink." },
                { term: "Refrigerator (fridge)", definition: "An appliance to keep food and drinks cold.", defTrans: "Geladeira", example: "Keep the milk cold in the refrigerator.", audioFront: "TTS: Refrigerator", audioBack: "TTS: Keep the milk cold in the refrigerator." },
                { term: "Microwave", definition: "An oven that uses microwaves to cook or heat food quickly.", defTrans: "Micro-ondas", example: "You can heat up the pizza in the microwave.", audioFront: "TTS: Microwave", audioBack: "TTS: You can heat up the pizza in the microwave." },
                { term: "Oven", definition: "An enclosed compartment for baking or roasting food.", defTrans: "Forno", example: "We are roasting a chicken in the oven.", audioFront: "TTS: Oven", audioBack: "TTS: We are roasting a chicken in the oven." },
                { term: "Washing machine", definition: "A machine for washing clothes.", defTrans: "Máquina de lavar", example: "Load your dirty clothes into the washing machine.", audioFront: "TTS: Washing machine", audioBack: "TTS: Load your dirty clothes into the washing machine." },
                { term: "Vacuum cleaner", definition: "An electrical apparatus that sucks up dust and dirt.", defTrans: "Aspirador de pó", example: "Use the vacuum cleaner to clean the carpet.", audioFront: "TTS: Vacuum cleaner", audioBack: "TTS: Use the vacuum cleaner to clean the carpet." },

                { term: "Do the laundry", definition: "To wash dirty clothes.", defTrans: "Lavar as roupas", example: "I need to do the laundry because I have no clean shirts.", audioFront: "TTS: Do the laundry", audioBack: "TTS: I need to do the laundry because I have no clean shirts." },
                { term: "Wash the dishes", definition: "To clean plates and glasses after a meal.", defTrans: "Lavar as louças", example: "After dinner, it is my turn to wash the dishes.", audioFront: "TTS: Wash the dishes", audioBack: "TTS: After dinner, it is my turn to wash the dishes." },
                { term: "Take out the trash", definition: "To remove garbage from the house.", defTrans: "Levar o lixo para fora", example: "The garbage smells, please take out the trash.", audioFront: "TTS: Take out the trash", audioBack: "TTS: The garbage smells, please take out the trash." },
                { term: "Make the bed", definition: "To arrange the blankets and pillows on a bed.", defTrans: "Arrumar a cama", example: "Get up and make the bed immediately.", audioFront: "TTS: Make the bed", audioBack: "TTS: Get up and make the bed immediately." },
                { term: "Tidy up", definition: "To arrange things neatly.", defTrans: "Organizar / Arrumar", example: "Your room is messy, please tidy up.", audioFront: "TTS: Tidy up", audioBack: "TTS: Your room is messy, please tidy up." },
                { term: "Go grocery shopping", definition: "To go to the supermarket to buy food.", defTrans: "Fazer compras de mercado", example: "We have no food, so I must go grocery shopping.", audioFront: "TTS: Go grocery shopping", audioBack: "TTS: We have no food, so I must go grocery shopping." },
                { term: "Landlord", definition: "A person who rents out land, a building, or accommodation.", defTrans: "Proprietário", example: "The landlord expects us to pay on time.", audioFront: "TTS: Landlord", audioBack: "TTS: The landlord expects us to pay on time." },
                { term: "Tenant", definition: "A person who occupies land or property rented from a landlord.", defTrans: "Inquilino", example: "The new tenant signed the contract yesterday.", audioFront: "TTS: Tenant", audioBack: "TTS: The new tenant signed the contract yesterday." },
                { term: "Roommate", definition: "A person occupying the same room or apartment as another.", defTrans: "Colega de quarto", example: "My roommate and I divide the chores.", audioFront: "TTS: Roommate", audioBack: "TTS: My roommate and I divide the chores." },
                { term: "Rent", definition: "A tenant's regular payment to a landlord for the use of property or to pay to use other people's properties.", defTrans: "Aluguel/Alugar", example: "The monthly rent for this place is very high.", audioFront: "TTS: Rent", audioBack: "TTS: The monthly rent for this place is very high." },
                { term: "Bills", definition: "Printed or written statements of the money owed for goods or services.", defTrans: "Contas", example: "I check my emails to pay the internet bills.", audioFront: "TTS: Bills", audioBack: "TTS: I check my emails to pay the internet bills." },
                { term: "Utilities", definition: "Services like water, electricity, or gas.", defTrans: "Contas de consumo", example: "Electricity and water are necessary utilities.", audioFront: "TTS: Utilities", audioBack: "TTS: Electricity and water are necessary utilities." },
                { term: "Furnished", definition: "Available to be rented with furniture.", defTrans: "Mobiliado", example: "The apartment is furnished, so you don't need a bed.", audioFront: "TTS: Furnished", audioBack: "TTS: The apartment is furnished, so you don't need a bed." },
                { term: "Move in", definition: "To start living in a new place.", defTrans: "Mudar-se para dentro", example: "Here are your keys, you can move in today.", audioFront: "TTS: Move in", audioBack: "TTS: Here are your keys, you can move in today." },
                { term: "Move out", definition: "To leave one's home permanently.", defTrans: "Mudar-se (sair)", example: "I found a better place, so I will move out next week.", audioFront: "TTS: Move out", audioBack: "TTS: I found a better place, so I will move out next week." },

                // 3A Items (13 items)
                { term: "I live in a...", definition: "Stating your current living situation.", defTrans: "Eu moro em um...", example: "I live in a small apartment.", audioFront: "TTS: I live in a", audioBack: "TTS: I live in a small apartment." },
                { term: "What's your new place like?", definition: "Asking for a description of a new home.", defTrans: "Como é a sua casa nova?", example: "What's your new place like? Is it big?", audioFront: "TTS: What's your new place like?", audioBack: "TTS: What's your new place like? Is it big?" },
                { term: "How many rooms are there in your house?", definition: "Asking about the size or layout of a house.", defTrans: "Quantos cômodos tem na sua casa?", example: "How many rooms are there in your house?", audioFront: "TTS: How many rooms are there in your house?", audioBack: "TTS: How many rooms are there in your house?" },
                { term: "Who do you live with?", definition: "Asking about someone's roommates or family.", defTrans: "Com quem você mora?", example: "Who do you live with? My parents.", audioFront: "TTS: Who do you live with?", audioBack: "TTS: Who do you live with? My parents." },
                { term: "What chores do you have to do today?", definition: "Asking about household responsibilities for the day.", defTrans: "Quais tarefas você tem que fazer hoje?", example: "What chores do you have to do today?", audioFront: "TTS: What chores do you have to do today?", audioBack: "TTS: What chores do you have to do today?" },
                { term: "Whose turn is it to...?", definition: "Asking who is responsible for a task this time.", defTrans: "De quem é a vez de...?", example: "Whose turn is it to cook dinner?", audioFront: "TTS: Whose turn is it to", audioBack: "TTS: Whose turn is it to cook dinner?" },
                { term: "It's my turn.", definition: "Stating that you are responsible for the task this time.", defTrans: "É a minha vez.", example: "It's my turn to wash the dishes.", audioFront: "TTS: It's my turn.", audioBack: "TTS: It's my turn to wash the dishes." },
                { term: "I hate washing the dishes.", definition: "Expressing strong dislike for a specific chore.", defTrans: "Eu odeio lavar as louças.", example: "I hate washing the dishes.", audioFront: "TTS: I hate washing the dishes.", audioBack: "TTS: I hate washing the dishes." },
                { term: "I'm looking for an apartment to rent.", definition: "Stating your intention to find a new home.", defTrans: "Estou procurando um apartamento para alugar.", example: "I'm looking for an apartment to rent.", audioFront: "TTS: I'm looking for an apartment to rent.", audioBack: "TTS: I'm looking for an apartment to rent." },
                { term: "Is it furnished or unfurnished?", definition: "Asking if the rental property includes furniture.", defTrans: "É mobiliado ou sem mobília?", example: "Is it furnished or unfurnished?", audioFront: "TTS: Is it furnished or unfurnished?", audioBack: "TTS: Is it furnished or unfurnished?" },
                { term: "How much is the rent per month?", definition: "Asking about the monthly cost of the property.", defTrans: "Quanto é o aluguel por mês?", example: "How much is the rent per month?", audioFront: "TTS: How much is the rent per month?", audioBack: "TTS: How much is the rent per month?" },
                { term: "Utilities are included.", definition: "Stating that water/gas/electricity are paid for in the rent.", defTrans: "As contas estão incluídas.", example: "Utilities are included in the price.", audioFront: "TTS: Utilities are included.", audioBack: "TTS: Utilities are included in the price." },
                { term: "You have to pay for electricity separately.", definition: "Explaining that electricity is an extra cost.", defTrans: "Você tem que pagar a eletricidade separadamente.", example: "You have to pay for electricity separately.", audioFront: "TTS: You have to pay for electricity separately.", audioBack: "TTS: You have to pay for electricity separately." }
            ]
        }
    ],

    // ======================================================
    // GLOSSARY (All 56 items + Context words)
    // ======================================================
    glossary:[
        // 2A: Places & Rooms
        { topic: "Places & Rooms", term: "house", definition: "A building for human habitation.", translation: "Casa" },
        { topic: "Places & Rooms", term: "apartment", definition: "A set of rooms for living in, usually on one floor.", translation: "Apartamento" },
        { topic: "Places & Rooms", term: "suburbs", definition: "A residential area on the edge of a city.", translation: "Subúrbios" },
        { topic: "Places & Rooms", term: "countryside", definition: "The land and scenery of a rural area.", translation: "Interior / Campo" },
        { topic: "Places & Rooms", term: "living-room", definition: "A room for general everyday use.", translation: "Sala de estar" },
        { topic: "Places & Rooms", term: "bedroom", definition: "A room for sleeping in.", translation: "Quarto" },
        { topic: "Places & Rooms", term: "kitchen", definition: "A room used for cooking.", translation: "Cozinha" },
        { topic: "Places & Rooms", term: "dining-room", definition: "A room in which meals are eaten.", translation: "Sala de jantar" },
        { topic: "Places & Rooms", term: "bathroom", definition: "A room containing a toilet, sink, and shower/bath.", translation: "Banheiro" },
        { topic: "Places & Rooms", term: "hallway", definition: "A corridor connecting rooms.", translation: "Corredor" },
        { topic: "Places & Rooms", term: "garage", definition: "A building for housing a car.", translation: "Garagem" },
        { topic: "Places & Rooms", term: "basement", definition: "The floor of a building partly or entirely below ground.", translation: "Porão" },
        { topic: "Places & Rooms", term: "balcony", definition: "An outdoor platform attached to an upper floor.", translation: "Varanda / Sacada" },
        { topic: "Places & Rooms", term: "yard", definition: "A piece of uncultivated ground adjoining a building.", translation: "Quintal" },

        // 2A: Furniture & Appliances
        { topic: "Furniture & Appliances", term: "sofa", definition: "A long upholstered piece of furniture.", translation: "Sofá" },
        { topic: "Furniture & Appliances", term: "armchair", definition: "A comfortable chair with arm supports.", translation: "Poltrona" },
        { topic: "Furniture & Appliances", term: "coffee-table", definition: "A small, low table placed in front of a sofa.", translation: "Mesa de centro" },
        { topic: "Furniture & Appliances", term: "bookshelf", definition: "A cabinet containing shelves for books.", translation: "Estante de livros" },
        { topic: "Furniture & Appliances", term: "bed", definition: "A piece of furniture for sleeping.", translation: "Cama" },
        { topic: "Furniture & Appliances", term: "wardrobe", definition: "A large cabinet where clothes are hung.", translation: "Guarda-roupa" },
        { topic: "Furniture & Appliances", term: "nightstand", definition: "A small table kept at the side of a bed.", translation: "Criado-mudo" },
        { topic: "Furniture & Appliances", term: "counter", definition: "A long flat-topped fixture in a kitchen.", translation: "Bancada" },
        { topic: "Furniture & Appliances", term: "sink", definition: "A fixed basin with a water supply.", translation: "Pia" },
        { topic: "Furniture & Appliances", term: "refrigerator", definition: "An appliance to keep food and drinks cold.", translation: "Geladeira" },
        { topic: "Furniture & Appliances", term: "microwave", definition: "An oven that uses microwaves to cook quickly.", translation: "Micro-ondas" },
        { topic: "Furniture & Appliances", term: "oven", definition: "An enclosed compartment for baking.", translation: "Forno" },
        { topic: "Furniture & Appliances", term: "washing-machine", definition: "A machine for washing clothes.", translation: "Máquina de lavar" },
        { topic: "Furniture & Appliances", term: "vacuum-cleaner", definition: "An apparatus that sucks up dust and dirt.", translation: "Aspirador de pó" },

        // 2A: Chores & Renting
        { topic: "Chores & Renting", term: "do-the-laundry", definition: "To wash dirty clothes.", translation: "Lavar as roupas" },
        { topic: "Chores & Renting", term: "wash-dishes", definition: "To clean plates and glasses after a meal.", translation: "Lavar as louças" },
        { topic: "Chores & Renting", term: "take-trash", definition: "To remove garbage from the house.", translation: "Levar o lixo para fora" },
        { topic: "Chores & Renting", term: "make-the-bed", definition: "To arrange the blankets and pillows on a bed.", translation: "Arrumar a cama" },
        { topic: "Chores & Renting", term: "tidy-up", definition: "To arrange things neatly.", translation: "Organizar / Arrumar" },
        { topic: "Chores & Renting", term: "grocery-shopping", definition: "To go to the supermarket to buy food.", translation: "Fazer compras de mercado" },
        { topic: "Chores & Renting", term: "landlord", definition: "A person who rents out property.", translation: "Proprietário" },
        { topic: "Chores & Renting", term: "tenant", definition: "A person who rents a property.", translation: "Inquilino" },
        { topic: "Chores & Renting", term: "roommate", definition: "A person occupying the same room or apartment.", translation: "Colega de quarto" },
        { topic: "Chores & Renting", term: "rent", definition: "A regular payment for the use of property or to pay to use other people's properties.", translation: "Aluguel/Alugar" },
        { topic: "Chores & Renting", term: "bills", definition: "Statements of the money owed for services.", translation: "Contas" },
        { topic: "Chores & Renting", term: "utilities", definition: "Services like water, electricity, or gas.", translation: "Contas de consumo" },
        { topic: "Chores & Renting", term: "furnished", definition: "Available to be rented with furniture.", translation: "Mobiliado" },
        { topic: "Chores & Renting", term: "move-in", definition: "To start living in a new place.", translation: "Mudar-se para dentro" },
        { topic: "Chores & Renting", term: "move-out", definition: "To leave one's home permanently.", translation: "Mudar-se (sair)" },

        // 3A: Expressions
        { topic: "Expressions", term: "i-live-in-a", definition: "Stating your current living situation.", translation: "Eu moro em um..." },
        { topic: "Expressions", term: "whats-your-new-place-like", definition: "Asking for a description of a new home.", translation: "Como é a sua casa nova?" },
        { topic: "Expressions", term: "how-many-rooms", definition: "Asking about the size or layout of a house.", translation: "Quantos cômodos tem na sua casa?" },
        { topic: "Expressions", term: "who-do-you-live-with", definition: "Asking about someone's roommates or family.", translation: "Com quem você mora?" },
        { topic: "Expressions", term: "what-chores-today", definition: "Asking about household responsibilities.", translation: "Quais tarefas você tem que fazer hoje?" },
        { topic: "Expressions", term: "whose-turn-is-it", definition: "Asking who is responsible for a task.", translation: "De quem é a vez de...?" },
        { topic: "Expressions", term: "its-my-turn", definition: "Stating that you are responsible for the task.", translation: "É a minha vez." },
        { topic: "Expressions", term: "i-hate-washing-dishes", definition: "Expressing strong dislike for a chore.", translation: "Eu odeio lavar as louças." },
        { topic: "Expressions", term: "looking-for-apartment", definition: "Stating intention to find a new home.", translation: "Estou procurando um apartamento para alugar." },
        { topic: "Expressions", term: "is-it-furnished", definition: "Asking if the rental includes furniture.", translation: "É mobiliado ou sem mobília?" },
        { topic: "Expressions", term: "how-much-rent", definition: "Asking about the monthly cost of the property.", translation: "Quanto é o aluguel por mês?" },
        { topic: "Expressions", term: "utilities-included", definition: "Stating that water/gas/electric are paid for.", translation: "As contas estão incluídas." },
        { topic: "Expressions", term: "pay-electricity-separately", definition: "Explaining that electricity is an extra cost.", translation: "Você tem que pagar a eletricidade separadamente." },

        // Additional Context Words Used in Texts/Intros
        { topic: "Context", term: "room", definition: "A part of a building enclosed by walls, floor, and ceiling.", translation: "Cômodo" },
        { topic: "Context", term: "furniture", definition: "Large movable equipment used to make a house suitable for living.", translation: "Móveis" },
        { topic: "Context", term: "kitchen-appliances", definition: "Machines used in the kitchen for cooking and food preparation.", translation: "Eletrodomésticos de cozinha" },
        { topic: "Context", term: "chores", definition: "Routine tasks, especially household ones.", translation: "Tarefas domésticas" },
        { topic: "Context", term: "appliances", definition: "Electrical machines used in the home.", translation: "Eletrodomésticos" },
        { topic: "Context", term: "spacious", definition: "Having ample space.", translation: "Espaçoso" },
        { topic: "Context", term: "cozy", definition: "Giving a feeling of comfort, warmth, and relaxation.", translation: "Aconchegante" },
        { topic: "Context", term: "messy", definition: "Untidy or dirty.", translation: "Bagunçado" },
        { topic: "Context", term: "unfurnished", definition: "Without furniture.", translation: "Sem mobília" },
        { topic: "Context", term: "journey", definition: "An act of traveling from one place to another.", translation: "Jornada / Viagem" },
        { topic: "Context", term: "route", definition: "A way or course taken.", translation: "Rota / Caminho" }
    ]
});