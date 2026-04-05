/**
 * English Block Assembling - LESSON DATA: Topic 2
/**
 * English Block Assembling - LESSON DATA: Topic 4
 * Topic: Food and Drink
 * Level: Upper A2 ~ Lower B1
 */

window.initLesson({
    // --- METADATA ---
    lessonId: "lesson-4",
    block: "1",
    topicTitle: "4 - Food and Drink",

    steps:[
        // ======================================================
        // STEP 0: INTRO & CAN-DO
        // ======================================================
        {
            title: "Intro & Can-Do",
            objectives: "• Order [food](tooltip:food) and drinks politely in a [restaurant](tooltip:restaurant) or café.<br>• Discuss meals, [recipes](tooltip:recipe), and daily eating habits.<br>• Identify common food items, [meats](tooltip:meat), and [vegetables](tooltip:vegetable).<br>• Express and explain your personal food [preferences](tooltip:preference).",
            welcome: "Welcome to Lesson 4! Food is a universal topic. In this lesson, you will learn the essential vocabulary to order food at a restaurant, talk about what you like to eat, and describe different flavors and textures. You will also learn practical phrases for asking for recommendations and paying the bill. Let's dig in!",
            audio: {
                objectives: "TTS: In this lesson, you will learn to: Order food and drinks politely in a restaurant or café. Discuss meals, recipes, and daily eating habits. Identify common food items, meats, and vegetables. Express and explain your personal food preferences.",
                welcome: "TTS: Welcome to Lesson 4! Food is a universal topic. In this lesson, you will learn the essential vocabulary to order food at a restaurant, talk about what you like to eat, and describe different flavors and textures. You will also learn practical phrases for asking for recommendations and paying the bill. Let's dig in!"
            }
        },

        // ======================================================
        // STEP 1: CONTEXT DIALOGUE
        // ======================================================
        {
            title: "Context Dialogue",
            context: "Liam is having dinner at a nice Italian restaurant and is talking to the waiter.",
            contextAudio: "TTS: Waiter: Good evening! Are you ready to order? Liam: Yes, I think so. Can I see the menu, please? Waiter: Of course. Here you go. What do you recommend? Liam: For the main course, our seafood pasta is delicious. It has shrimp and a rich tomato sauce. Waiter: That sounds great. I'll have that, please. Liam: Excellent choice. Anything to drink? Waiter: Just some water, please. I am really thirsty. Liam: Right away. And would you like to see the dessert menu later? Waiter: Yes, I have a sweet tooth. Thank you!",
            dialogue:[
                { speaker: "Waiter", text: "Good evening! [Are you ready to order](tooltip:ready-to-order)?" },
                { speaker: "Liam", text: "Yes, I think so. [Can I see the menu, please](tooltip:can-i-see-menu)?" },
                { speaker: "Waiter", text: "Of course. Here you go. [What do you recommend](tooltip:what-recommend)?" },
                { speaker: "Liam", text: "For the [main course](tooltip:main-course), our [seafood](tooltip:seafood) pasta is[delicious](tooltip:delicious). It has shrimp and a rich tomato sauce." },
                { speaker: "Waiter", text: "That sounds great. [I'll have](tooltip:ill-have) that, please." },
                { speaker: "Liam", text: "Excellent choice. [Anything to drink](tooltip:anything-drink)?" },
                { speaker: "Waiter", text: "Just some water, please. I am really [thirsty](tooltip:thirsty)." },
                { speaker: "Liam", text: "Right away. And would you like to see the [dessert](tooltip:dessert) menu later?" },
                { speaker: "Waiter", text: "Yes, I love [sweet](tooltip:sweet) things. Thank you!" }
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
                    title: "Meals & Dining",
                    audio: "TTS: Breakfast. Lunch. Dinner. Dessert. Appetizer. Menu. Waiter. Chef. Tip. Reservation.",
                    items:[
                        { term: "Breakfast", trans: "Café da manhã" },
                        { term: "Lunch", trans: "Almoço" },
                        { term: "Dinner", trans: "Jantar" },
                        { term: "Dessert", trans: "Sobremesa" },
                        { term: "Appetizer", trans: "Entrada (Aperitivo)" },
                        { term: "Menu", trans: "Cardápio" },
                        { term: "Waiter", trans: "Garçom" },
                        { term: "Chef", trans: "Chefe de cozinha" },
                        { term: "Tip", trans: "Gorjeta" },
                        { term: "Reservation", trans: "Reserva" }
                    ]
                },
                {
                    title: "Food Items & Drinks",
                    audio: "TTS: Beef. Chicken. Seafood. Cheese. Apple. Potato. Bread. Rice. Coffee. Water. Juice. Wine.",
                    items:[
                        { term: "Beef", trans: "Carne bovina (Carne de boi)" },
                        { term: "Chicken", trans: "Frango" },
                        { term: "Seafood", trans: "Frutos do mar" },
                        { term: "Cheese", trans: "Queijo" },
                        { term: "Apple", trans: "Maçã" },
                        { term: "Potato", trans: "Batata" },
                        { term: "Bread", trans: "Pão" },
                        { term: "Rice", trans: "Arroz" },
                        { term: "Coffee", trans: "Café" },
                        { term: "Water", trans: "Água" },
                        { term: "Juice", trans: "Suco" },
                        { term: "Wine", trans: "Vinho" }
                    ]
                },
                {
                    title: "Actions & Descriptions",
                    audio: "TTS: To order. To pay. To cook. To boil. To fry. Sweet. Sour. Salty. Spicy. Crispy. Fresh. Delicious.",
                    items:[
                        { term: "To order", trans: "Fazer o pedido / Pedir (em restaurante)" },
                        { term: "To pay", trans: "Pagar" },
                        { term: "To cook", trans: "Cozinhar" },
                        { term: "To boil", trans: "Ferver" },
                        { term: "To fry", trans: "Fritar" },
                        { term: "Sweet", trans: "Doce" },
                        { term: "Sour", trans: "Azedo" },
                        { term: "Salty", trans: "Salgado" },
                        { term: "Spicy", trans: "Apimentado / Picante" },
                        { term: "Crispy", trans: "Crocante" },
                        { term: "Fresh", trans: "Fresco" },
                        { term: "Delicious", trans: "Delicioso" }
                    ]
                }
            ],

            // --- 2B: EXAMPLES ---
            exampleGroups:[
                {
                    title: "Meals & Dining",
                    audio: "TTS: I eat eggs for breakfast. We had a quick lunch at noon. I am cooking pasta for dinner. I want chocolate cake for dessert. We ordered a salad as an appetizer. Can I see the menu, please? The waiter brought our drinks. The chef prepared a special dish. We left a large tip on the table. I made a reservation for 8 PM.",
                    items:[
                        { term: "Breakfast", sent: "I eat eggs for breakfast.", trans: "Eu como ovos no café da manhã." },
                        { term: "Lunch", sent: "We had a quick lunch at noon.", trans: "Nós tivemos um almoço rápido ao meio-dia." },
                        { term: "Dinner", sent: "I am cooking pasta for dinner.", trans: "Estou cozinhando macarrão para o jantar." },
                        { term: "Dessert", sent: "I want chocolate cake for dessert.", trans: "Eu quero bolo de chocolate como sobremesa." },
                        { term: "Appetizer", sent: "We ordered a salad as an appetizer.", trans: "Nós pedimos uma salada como entrada." },
                        { term: "Menu", sent: "Can I see the menu, please?", trans: "Posso ver o cardápio, por favor?" },
                        { term: "Waiter", sent: "The waiter brought our drinks.", trans: "O garçom trouxe nossas bebidas." },
                        { term: "Chef", sent: "The chef prepared a special dish.", trans: "O chefe preparou um prato especial." },
                        { term: "Tip", sent: "We left a large tip on the table.", trans: "Nós deixamos uma gorjeta grande na mesa." },
                        { term: "Reservation", sent: "I made a reservation for 8 PM.", trans: "Eu fiz uma reserva para as 20h." }
                    ]
                },
                {
                    title: "Food Items & Drinks",
                    audio: "TTS: I prefer beef over pork. She roasted a whole chicken. This restaurant serves great seafood. I love eating bread with cheese. He ate a red apple for a snack. We baked a large potato. I bought some fresh bread at the bakery. I always eat rice and beans. I need a cup of coffee to wake up. Please give me a glass of cold water. I drink orange juice in the morning. We opened a bottle of red wine.",
                    items:[
                        { term: "Beef", sent: "I prefer beef over pork.", trans: "Eu prefiro carne bovina do que carne de porco." },
                        { term: "Chicken", sent: "She roasted a whole chicken.", trans: "Ela assou um frango inteiro." },
                        { term: "Seafood", sent: "This restaurant serves great seafood.", trans: "Este restaurante serve ótimos frutos do mar." },
                        { term: "Cheese", sent: "I love eating bread with cheese.", trans: "Eu amo comer pão com queijo." },
                        { term: "Apple", sent: "He ate a red apple for a snack.", trans: "Ele comeu uma maçã vermelha no lanche." },
                        { term: "Potato", sent: "We baked a large potato.", trans: "Nós assamos uma batata grande." },
                        { term: "Bread", sent: "I bought some fresh bread at the bakery.", trans: "Comprei pão fresco na padaria." },
                        { term: "Rice", sent: "I always eat rice and beans.", trans: "Eu sempre como arroz e feijão." },
                        { term: "Coffee", sent: "I need a cup of coffee to wake up.", trans: "Eu preciso de uma xícara de café para acordar." },
                        { term: "Water", sent: "Please give me a glass of cold water.", trans: "Por favor, me dê um copo de água gelada." },
                        { term: "Juice", sent: "I drink orange juice in the morning.", trans: "Eu bebo suco de laranja de manhã." },
                        { term: "Wine", sent: "We opened a bottle of red wine.", trans: "Nós abrimos uma garrafa de vinho tinto." }
                    ]
                },
                {
                    title: "Actions & Descriptions",
                    audio: "TTS: Are you ready to order your food? I will pay the bill with my credit card. I like to cook dinner for my family. You need to boil water to make pasta. I am going to fry an egg for breakfast. The cake is very sweet. This lemon is too sour. The soup is a bit salty. I love spicy Mexican food. The fried chicken was very crispy. The market sells fresh vegetables. This meal is absolutely delicious.",
                    items:[
                        { term: "To order", sent: "Are you ready to order your food?", trans: "Você está pronto para pedir sua comida?" },
                        { term: "To pay", sent: "I will pay the bill with my credit card.", trans: "Eu vou pagar a conta com meu cartão de crédito." },
                        { term: "To cook", sent: "I like to cook dinner for my family.", trans: "Eu gosto de cozinhar o jantar para a minha família." },
                        { term: "To boil", sent: "You need to boil water to make pasta.", trans: "Você precisa ferver água para fazer macarrão." },
                        { term: "To fry", sent: "I am going to fry an egg for breakfast.", trans: "Eu vou fritar um ovo no café da manhã." },
                        { term: "Sweet", sent: "The cake is very sweet.", trans: "O bolo é muito doce." },
                        { term: "Sour", sent: "This lemon is too sour.", trans: "Este limão é muito azedo." },
                        { term: "Salty", sent: "The soup is a bit salty.", trans: "A sopa está um pouco salgada." },
                        { term: "Spicy", sent: "I love spicy Mexican food.", trans: "Eu amo comida mexicana apimentada." },
                        { term: "Crispy", sent: "The fried chicken was very crispy.", trans: "O frango frito estava muito crocante." },
                        { term: "Fresh", sent: "The market sells fresh vegetables.", trans: "O mercado vende vegetais frescos." },
                        { term: "Delicious", sent: "This meal is absolutely delicious.", trans: "Esta refeição está absolutamente deliciosa." }
                    ]
                }
            ],

            // --- 2C: PRACTICE ---
            drillGroups:[
                {
                    title: "Meals & Dining",
                    drills:[
                        { q: "The first meal of the day is ________.", options:[{t: "Dinner", c: false}, {t: "Breakfast", c: true}, {t: "Appetizer", c: false}, {t: "Lunch", c: false}], type: "mcq" },
                        { q: "The meal you eat in the middle of the day is ________.", options:[{t: "Dessert", c: false}, {t: "Breakfast", c: false}, {t: "Lunch", c: true}, {t: "Dinner", c: false}], type: "mcq" },
                        { q: "The meal you eat in the evening is ________.", options:[{t: "Dinner", c: true}, {t: "Lunch", c: false}, {t: "Appetizer", c: false}, {t: "Breakfast", c: false}], type: "mcq" },
                        { q: "A sweet dish eaten at the end of a meal is a ________.", options:[{t: "Dessert", c: true}, {t: "Appetizer", c: false}, {t: "Menu", c: false}, {t: "Tip", c: false}], type: "mcq" },
                        { q: "A small dish served before the main course is an ________.", options:[{t: "Dessert", c: false}, {t: "Appetizer", c: true}, {t: "Menu", c: false}, {t: "Dinner", c: false}], type: "mcq" },
                        { q: "A list of food and drinks available at a restaurant is a ________.", options:[{t: "Menu", c: true}, {t: "Reservation", c: false}, {t: "Tip", c: false}, {t: "Chef", c: false}], type: "mcq" },
                        { q: "A person who takes your order and brings your food is a ________.", options:[{t: "Chef", c: false}, {t: "Waiter", c: true}, {t: "Appetizer", c: false}, {t: "Menu", c: false}], type: "mcq" },
                        { q: "A professional cook, typically the chief cook in a restaurant, is the ________.", options:[{t: "Waiter", c: false}, {t: "Menu", c: false}, {t: "Chef", c: true}, {t: "Reservation", c: false}], type: "mcq" },
                        { q: "Extra money given to a waiter for good service is a ________.", options:[{t: "Tip", c: true}, {t: "Menu", c: false}, {t: "Reservation", c: false}, {t: "Dessert", c: false}], type: "mcq" },
                        { q: "An arrangement to have a table kept for you at a restaurant is a ________.", options:[{t: "Reservation", c: true}, {t: "Menu", c: false}, {t: "Tip", c: false}, {t: "Waiter", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Food Items & Drinks",
                    drills:[
                        { q: "Meat that comes from a cow is called ________.", options:[{t: "Chicken", c: false}, {t: "Beef", c: true}, {t: "Seafood", c: false}, {t: "Pork", c: false}], type: "mcq" },
                        { q: "A common bird kept for its meat and eggs is ________.", options:[{t: "Beef", c: false}, {t: "Seafood", c: false}, {t: "Chicken", c: true}, {t: "Apple", c: false}], type: "mcq" },
                        { q: "Fish, shrimp, and other sea creatures eaten as food are ________.", options:[{t: "Beef", c: false}, {t: "Seafood", c: true}, {t: "Cheese", c: false}, {t: "Rice", c: false}], type: "mcq" },
                        { q: "A yellow or white solid food made from milk is ________.", options:[{t: "Bread", c: false}, {t: "Cheese", c: true}, {t: "Potato", c: false}, {t: "Juice", c: false}], type: "mcq" },
                        { q: "A round fruit with red or green skin and a whitish interior is an ________.", options:[{t: "Apple", c: true}, {t: "Potato", c: false}, {t: "Bread", c: false}, {t: "Cheese", c: false}], type: "mcq" },
                        { q: "A starchy plant tuber which is one of the most important food crops, cooked and eaten as a vegetable is a ________.", options:[{t: "Apple", c: false}, {t: "Rice", c: false}, {t: "Potato", c: true}, {t: "Bread", c: false}], type: "mcq" },
                        { q: "Food made of flour, water, and yeast baked together is ________.", options:[{t: "Bread", c: true}, {t: "Rice", c: false}, {t: "Cheese", c: false}, {t: "Water", c: false}], type: "mcq" },
                        { q: "A swamp grass which is widely cultivated as a source of food, especially in Asia, is ________.", options:[{t: "Potato", c: false}, {t: "Rice", c: true}, {t: "Bread", c: false}, {t: "Coffee", c: false}], type: "mcq" },
                        { q: "A hot drink made from the roasted and ground seeds of a tropical shrub is ________.", options:[{t: "Juice", c: false}, {t: "Wine", c: false}, {t: "Coffee", c: true}, {t: "Water", c: false}], type: "mcq" },
                        { q: "A colorless, transparent, odorless liquid that forms the seas, lakes, rivers, and rain is ________.", options:[{t: "Water", c: true}, {t: "Juice", c: false}, {t: "Wine", c: false}, {t: "Coffee", c: false}], type: "mcq" },
                        { q: "The liquid obtained from or present in fruit or vegetables is ________.", options:[{t: "Coffee", c: false}, {t: "Juice", c: true}, {t: "Water", c: false}, {t: "Wine", c: false}], type: "mcq" },
                        { q: "An alcoholic drink made from fermented grapes is ________.", options:[{t: "Wine", c: true}, {t: "Juice", c: false}, {t: "Coffee", c: false}, {t: "Water", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Actions & Descriptions",
                    drills:[
                        { q: "To request that food or drink be made or supplied is to ________.", options:[{t: "To order", c: true}, {t: "To pay", c: false}, {t: "To boil", c: false}, {t: "To fry", c: false}], type: "mcq" },
                        { q: "To give money in return for food or services is to ________.", options:[{t: "To order", c: false}, {t: "To cook", c: false}, {t: "To pay", c: true}, {t: "To boil", c: false}], type: "mcq" },
                        { q: "To prepare food, a dish, or a meal by combining and heating ingredients is to ________.", options:[{t: "To fry", c: false}, {t: "To cook", c: true}, {t: "To pay", c: false}, {t: "To order", c: false}], type: "mcq" },
                        { q: "To cook food in water that is 100°C (bubbling) is to ________.", options:[{t: "To fry", c: false}, {t: "To cook", c: false}, {t: "To order", c: false}, {t: "To boil", c: true}], type: "mcq" },
                        { q: "To cook food in hot fat or oil is to ________.", options:[{t: "To fry", c: true}, {t: "To boil", c: false}, {t: "To pay", c: false}, {t: "To order", c: false}], type: "mcq" },
                        { q: "Having the pleasant taste characteristic of sugar or honey is ________.", options:[{t: "Sweet", c: true}, {t: "Sour", c: false}, {t: "Salty", c: false}, {t: "Spicy", c: false}], type: "mcq" },
                        { q: "Having an acid taste like lemon or vinegar is ________.", options:[{t: "Sweet", c: false}, {t: "Sour", c: true}, {t: "Salty", c: false}, {t: "Spicy", c: false}], type: "mcq" },
                        { q: "Tasting of, containing, or preserved with salt is ________.", options:[{t: "Sweet", c: false}, {t: "Sour", c: false}, {t: "Salty", c: true}, {t: "Spicy", c: false}], type: "mcq" },
                        { q: "Flavored with or fragrant with spice (often hot) is ________.", options:[{t: "Spicy", c: true}, {t: "Sweet", c: false}, {t: "Salty", c: false}, {t: "Crispy", c: false}], type: "mcq" },
                        { q: "Having a firm, dry, and brittle surface or texture is ________.", options:[{t: "Crispy", c: true}, {t: "Fresh", c: false}, {t: "Delicious", c: false}, {t: "Spicy", c: false}], type: "mcq" },
                        { q: "Recently made or obtained; not canned, frozen, or otherwise preserved is ________.", options:[{t: "Fresh", c: true}, {t: "Crispy", c: false}, {t: "Delicious", c: false}, {t: "Salty", c: false}], type: "mcq" },
                        { q: "Highly pleasant to the taste is ________.", options:[{t: "Delicious", c: true}, {t: "Fresh", c: false}, {t: "Crispy", c: false}, {t: "Sour", c: false}], type: "mcq" }
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
                    title: "Ordering in a Restaurant",
                    audio: "TTS: A table for two, please. Can I see the menu? Are you ready to order? What do you recommend? I will have. Anything to drink? The check, please. To take away.",
                    explanation: "Essential phrases to use from arriving at a restaurant to paying the bill.<br><span style='color:var(--primary-blue); font-style:italic;'>(Frases essenciais para usar desde a chegada a um restaurante até o pagamento da conta.)</span>",
                    samples:[
                        { en: "<b>A table for two, please.</b>", pt: "<span style='color:var(--primary-blue)'>(Uma mesa para dois, por favor.)</span>" },
                        { en: "<b>Can I see the menu?</b>", pt: "<span style='color:var(--primary-blue)'>(Posso ver o cardápio?)</span>" },
                        { en: "<b>Are you ready to order?</b>", pt: "<span style='color:var(--primary-blue)'>(Vocês estão prontos para pedir?)</span>" },
                        { en: "<b>What do you recommend?</b>", pt: "<span style='color:var(--primary-blue)'>(O que você recomenda?)</span>" },
                        { en: "<b>I will have</b> the chicken.", pt: "<span style='color:var(--primary-blue)'>(Eu vou querer o frango.)</span>" },
                        { en: "<b>Anything to drink?</b>", pt: "<span style='color:var(--primary-blue)'>(Algo para beber?)</span>" },
                        { en: "<b>The check, please.</b>", pt: "<span style='color:var(--primary-blue)'>(A conta, por favor.)</span>" },
                        { en: "I'd like a pizza <b>to take away</b>.", pt: "<span style='color:var(--primary-blue)'>(Eu gostaria de uma pizza para viagem/levar.)</span>" }
                    ]
                },
                {
                    title: "Meals & Needs",
                    audio: "TTS: I am starving. I am thirsty. Let's eat out. What is for dinner? Follow a recipe.",
                    explanation: "Phrases for expressing hunger or thirst, suggesting a meal out, and cooking.<br><span style='color:var(--primary-blue); font-style:italic;'>(Frases para expressar fome ou sede, sugerir uma refeição fora e cozinhar.)</span>",
                    samples:[
                        { en: "<b>I am starving.</b>", pt: "<span style='color:var(--primary-blue)'>(Estou morrendo de fome.)</span>" },
                        { en: "<b>I am thirsty.</b>", pt: "<span style='color:var(--primary-blue)'>(Estou com sede.)</span>" },
                        { en: "<b>Let's eat out</b> tonight.", pt: "<span style='color:var(--primary-blue)'>(Vamos comer fora hoje à noite.)</span>" },
                        { en: "<b>What is for dinner?</b>", pt: "<span style='color:var(--primary-blue)'>(O que tem para o jantar?)</span>" },
                        { en: "You should <b>follow a recipe</b>.", pt: "<span style='color:var(--primary-blue)'>(Você deveria seguir uma receita.)</span>" }
                    ]
                },
                {
                    title: "Expressing Preferences",
                    audio: "TTS: My favorite food is. I prefer tea to coffee. It is awful.",
                    explanation: "Phrases used to state what you like the most, compare choices, and express strong dislike.<br><span style='color:var(--primary-blue); font-style:italic;'>(Frases usadas para declarar o que você mais gosta, comparar opções e expressar forte antipatia.)</span>",
                    samples:[
                        { en: "<b>My favorite food is</b> sushi.", pt: "<span style='color:var(--primary-blue)'>(Minha comida favorita é sushi.)</span>" },
                        { en: "<b>I prefer tea to coffee.</b>", pt: "<span style='color:var(--primary-blue)'>(Eu prefiro chá a café.)</span>" },
                        { en: "I can't eat this; <b>it is awful.</b>", pt: "<span style='color:var(--primary-blue)'>(Eu não consigo comer isso; é horrível.)</span>" }
                    ]
                }
            ],

            // --- 3B: DIALOGUES ---
            dialogueGroups:[
                {
                    title: "Dialogue 1: Arriving at the Restaurant",
                    audio: "TTS: Good evening. A table for two, please. Right this way. Can I see the menu? Certainly. I will bring it right now.",
                    lines:[
                        { speaker: "Customer", text: "Good evening. A table for two, please.", pt: "(Boa noite. Uma mesa para dois, por favor.)" },
                        { speaker: "Host", text: "Right this way. Can I see the menu? Certainly. I will bring it right now.", pt: "(Por aqui. Posso ver o cardápio? Certamente. Trarei agora mesmo.)" } // Fixed customer line merging into host line smoothly based on context. Wait, let's keep it 1 sentence per speaker if possible or natural.
                    ] // Correcting structure
                },
                {
                    title: "Dialogue 1: Arriving at the Restaurant",
                    audio: "TTS: Good evening. A table for two, please. Right this way. Can I see the menu? Certainly. I will bring it right now.", // Re-recording for clarity
                    lines:[
                        { speaker: "John", text: "Good evening. A table for two, please. Also, can I see the menu?", pt: "(Boa noite. Uma mesa para dois, por favor. Além disso, posso ver o cardápio?)" },
                        { speaker: "Waiter", text: "Right this way, sir. Certainly, I will bring it right now.", pt: "(Por aqui, senhor. Certamente, trarei agora mesmo.)" }
                    ]
                },
                {
                    title: "Dialogue 2: Ordering Food",
                    audio: "TTS: Are you ready to order? Yes. What do you recommend? The beef is excellent. I will have that.",
                    lines:[
                        { speaker: "Waiter", text: "Are you ready to order?", pt: "(Você está pronto para pedir?)" },
                        { speaker: "Mary", text: "Yes. What do you recommend? The beef is excellent? I will have that.", pt: "(Sim. O que você recomenda? A carne bovina é excelente? Eu vou querer isso.)" }
                    ]
                },
                {
                    title: "Dialogue 3: Drinks and Payment",
                    audio: "TTS: Anything to drink? Just water. I am thirsty. Later, can I get the check, please?",
                    lines:[
                        { speaker: "Waiter", text: "Anything to drink?", pt: "(Algo para beber?)" },
                        { speaker: "Paul", text: "Just water. I am thirsty. Later, can I get the check, please?", pt: "(Só água. Estou com sede. Mais tarde, posso pedir a conta, por favor?)" }
                    ]
                },
                {
                    title: "Dialogue 4: Dinner Plans",
                    audio: "TTS: I am starving. Let's eat out tonight! Good idea. What is for dinner? I want sushi. My favorite food is Japanese.",
                    lines:[
                        { speaker: "Anna", text: "I am starving. Let's eat out tonight!", pt: "(Estou morrendo de fome. Vamos comer fora hoje à noite!)" },
                        { speaker: "David", text: "Good idea. What is for dinner? I want sushi. My favorite food is Japanese.", pt: "(Boa ideia. O que tem pro jantar? Eu quero sushi. Minha comida favorita é a japonesa.)" }
                    ]
                },
                {
                    title: "Dialogue 5: Cooking at Home",
                    audio: "TTS: If we don't go out, I have to follow a recipe to cook. That's fine. I prefer tea to coffee anyway, so we can stay in. But last time you cooked, it was awful!",
                    lines:[
                        { speaker: "Emma", text: "If we don't go out, I have to follow a recipe to cook. But last time I cooked, it was awful!", pt: "(Se não sairmos, eu tenho que seguir uma receita para cozinhar. Mas da última vez que cozinhei, foi horrível!)" },
                        { speaker: "Mark", text: "That's fine. I prefer tea to coffee anyway, so we can stay in and order a pizza to take away.", pt: "(Tudo bem. Eu prefiro chá a café de qualquer forma, então podemos ficar em casa e pedir uma pizza para viagem.)" }
                    ]
                }
            ],

            // --- 3C: PRACTICE ---
            grammarDrillGroups:[
                {
                    title: "Ordering in a Restaurant",
                    drills:[
                        { q: "A table ________ two, please.", options:[{t: "of", c: false}, {t: "for", c: true}, {t: "in", c: false}, {t: "to", c: false}], type: "mcq" },
                        { q: "Can I ________ the menu?", options:[{t: "look", c: false}, {t: "see", c: true}, {t: "watch", c: false}, {t: "eat", c: false}], type: "mcq" },
                        { q: "Are you ready to ________?", options:[{t: "pay", c: false}, {t: "order", c: true}, {t: "eat", c: false}, {t: "book", c: false}], type: "mcq" },
                        { q: "What do you ________?", options:[{t: "recommend", c: true}, {t: "order", c: false}, {t: "menu", c: false}, {t: "delicious", c: false}], type: "mcq" },
                        { q: "I ________ have the chicken.", options:[{t: "am", c: false}, {t: "will", c: true}, {t: "do", c: false}, {t: "want", c: false}], type: "mcq" },
                        { q: "Anything to ________?", options:[{t: "eat", c: false}, {t: "food", c: false}, {t: "drink", c: true}, {t: "pay", c: false}], type: "mcq" },
                        { q: "The ________, please.", options:[{t: "money", c: false}, {t: "check", c: true}, {t: "menu", c: false}, {t: "order", c: false}], type: "mcq" },
                        { q: "I'd like this pizza to ________ away.", options:[{t: "go", c: false}, {t: "take", c: true}, {t: "make", c: false}, {t: "eat", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Meals & Needs",
                    drills:[
                        { q: "I haven't eaten all day. I am ________.", options:[{t: "thirsty", c: false}, {t: "delicious", c: false}, {t: "starving", c: true}, {t: "sweet", c: false}], type: "mcq" },
                        { q: "I need some water. I am ________.", options:[{t: "thirsty", c: true}, {t: "starving", c: false}, {t: "hungry", c: false}, {t: "spicy", c: false}], type: "mcq" },
                        { q: "I don't want to cook. Let's eat ________ tonight.", options:[{t: "in", c: false}, {t: "out", c: true}, {t: "away", c: false}, {t: "up", c: false}], type: "mcq" },
                        { q: "What is ________ dinner?", options:[{t: "to", c: false}, {t: "for", c: true}, {t: "at", c: false}, {t: "in", c: false}], type: "mcq" },
                        { q: "I don't know how to cook this. I need to follow a ________.", options:[{t: "menu", c: false}, {t: "check", c: false}, {t: "recipe", c: true}, {t: "appetizer", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Expressing Preferences",
                    drills:[
                        { q: "My ________ food is sushi.", options:[{t: "prefer", c: false}, {t: "best", c: false}, {t: "favorite", c: true}, {t: "delicious", c: false}], type: "mcq" },
                        { q: "I prefer tea ________ coffee.", options:[{t: "than", c: false}, {t: "to", c: true}, {t: "for", c: false}, {t: "over", c: false}], type: "mcq" },
                        { q: "This soup is too salty. It is ________.", options:[{t: "delicious", c: false}, {t: "awful", c: true}, {t: "crispy", c: false}, {t: "sweet", c: false}], type: "mcq" }
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
                { text: "Good evening. A table for two, please. ↘", audio: "TTS: Good evening. A table for two, please." },
                { text: "Can I see the menu, please? ↗", audio: "TTS: Can I see the menu, please?" },
                { text: "Are you ready to order? ↗", audio: "TTS: Are you ready to order?" },
                { text: "What do you recommend for the main course? ↘", audio: "TTS: What do you recommend for the main course?" },
                { text: "I will have the roasted chicken and some rice. ↘", audio: "TTS: I will have the roasted chicken and some rice." },
                { text: "Could I get the check, please? ↗", audio: "TTS: Could I get the check, please?" },
                { text: "I am starving, let's eat out tonight! ↘", audio: "TTS: I am starving, let's eat out tonight!" },
                { text: "What is for dinner? I hope it's not spicy. ↘", audio: "TTS: What is for dinner? I hope it's not spicy." },
                { text: "My favorite food is seafood. ↘", audio: "TTS: My favorite food is seafood." },
                { text: "I prefer tea to coffee in the morning. ↘", audio: "TTS: I prefer tea to coffee in the morning." }
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
                    instruction: "Listen to the phone call and type the missing words.",
                    audio: "TTS: Host: Hello, Luigi's Restaurant. Customer: Hi, I'd like to make a reservation for tonight. Host: Of course. A table for how many? Customer: A table for two, please.",
                    text: "Host: Hello, Luigi's Restaurant.<br>Customer: Hi, I'd like to make a [reservation] for tonight.<br>Host: Of course. A [table] for how many?<br>Customer: A table for [two], please."
                },
                {
                    type: "dropdown",
                    instruction: "Listen to the dialogue at the restaurant.",
                    audio: "TTS: Waiter: Are you ready to order? Customer: Yes, I will have the beef and a baked potato. Waiter: Excellent. Anything to drink? Customer: Just some water. I am very thirsty.",
                    questions:[
                        { q: "Waiter: Are you ready to [order* | pay | cook]?", a: "order" },
                        { q: "Customer: Yes, I will have the [beef* | chicken | cheese] and a baked potato.", a: "beef" },
                        { q: "Waiter: Excellent. Anything to[drink* | eat | dessert]?", a: "drink" },
                        { q: "Customer: Just some[water* | juice | wine]. I am very thirsty.", a: "water" }
                    ]
                },
                {
                    type: "audio-choice",
                    instruction: "Listen to the person talking about their cooking. How did the food taste?",
                    audio: "TTS: I tried to follow a recipe for a lemon cake today. I baked it in the oven, but I added too much lemon juice. Now it is incredibly sour and it tastes awful!",
                    options:[
                        { t: "It is very sweet and delicious.", c: false },
                        { t: "It is incredibly sour and awful.", c: true },
                        { t: "It is salty and crispy.", c: false },
                        { t: "It is spicy and fresh.", c: false }
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
                    title: "Dialogue - Ordering Dinner",
                    audio: "TTS: Waiter: Good evening. Here is the menu. What can I get for you? Customer: What do you recommend? I prefer seafood to beef. Waiter: I highly recommend our fried shrimp. It comes with a side of rice. Customer: That sounds delicious. I will have that. Waiter: Would you like an appetizer to start? Customer: No thank you, I'll just wait for the main course.",
                    body: "<b>Waiter:</b> Good evening. Here is the [menu](tooltip:menu). What can I get for you?<br><b>Customer:</b> [What do you recommend](tooltip:what-recommend)? [I prefer](tooltip:prefer) [seafood](tooltip:seafood) to [beef](tooltip:beef).<br><b>Waiter:</b> I highly recommend our [fried](tooltip:fry) shrimp. It comes with a side of [rice](tooltip:rice).<br><b>Customer:</b> That sounds [delicious](tooltip:delicious). [I will have](tooltip:ill-have) that.<br><b>Waiter:</b> Would you like an [appetizer](tooltip:appetizer) to start?<br><b>Customer:</b> No thank you, I'll just wait for the main course.",
                    questions:[
                        { q: "What kind of meat does the customer prefer?", options:[{t: "Beef", c: false}, {t: "Chicken", c: false}, {t: "Seafood", c: true}], type: "mcq" },
                        { q: "What does the waiter recommend?", options:[{t: "Fried shrimp with rice.", c: true}, {t: "A sweet dessert.", c: false}, {t: "A cheese appetizer.", c: false}], type: "mcq" },
                        { q: "Does the customer want an appetizer?", options:[{t: "Yes.", c: false}, {t: "No.", c: true}, {t: "Only if it is spicy.", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Dialogue - Cooking at Home",
                    audio: "TTS: Liam: I am starving. Let's eat out tonight! Sarah: We ate out yesterday. Why don't we cook something at home? Liam: Okay, what is for dinner? Sarah: We have some chicken, potatoes, and fresh vegetables. Liam: Great. You can boil the potatoes, and I will fry the chicken. Sarah: Sounds good. We just need to follow a recipe so it doesn't taste awful.",
                    body: "<b>Liam:</b> [I am starving](tooltip:starving).[Let's eat out](tooltip:eat-out) tonight!<br><b>Sarah:</b> We ate out yesterday. Why don't we [cook](tooltip:cook) something at home?<br><b>Liam:</b> Okay, [what is for dinner](tooltip:what-for-dinner)?<br><b>Sarah:</b> We have some [chicken](tooltip:chicken), [potatoes](tooltip:potato), and [fresh](tooltip:fresh) [vegetables](tooltip:vegetable).<br><b>Liam:</b> Great. You can [boil](tooltip:boil) the potatoes, and I will [fry](tooltip:fry) the chicken.<br><b>Sarah:</b> Sounds good. We just need to [follow a recipe](tooltip:follow-recipe) so it doesn't taste [awful](tooltip:awful).",
                    questions:[
                        { q: "Why doesn't Sarah want to eat out?", options:[{t: "She is not hungry.", c: false}, {t: "They ate out yesterday.", c: true}, {t: "She prefers beef.", c: false}], type: "mcq" },
                        { q: "What is Liam going to do with the chicken?", options:[{t: "He is going to boil it.", c: false}, {t: "He is going to eat it raw.", c: false}, {t: "He is going to fry it.", c: true}], type: "mcq" },
                        { q: "Why do they need to follow a recipe?", options:[{t: "So the food doesn't taste awful.", c: true}, {t: "So the food is very sweet.", c: false}, {t: "Because the chef told them to.", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Email Exchange - A Great Restaurant",
                    audio: "TTS: Subject: Amazing food! Hi Jake, I went to a new restaurant yesterday. The chef is Italian. For the appetizer, I had fresh bread with cheese. For the main course, I ordered pasta. It was perfectly salty and slightly spicy. My favorite food is Italian, so I loved it! Let's go there together next week. Best, Emma. Subject: Re: Amazing food! Hi Emma, That sounds delicious! I am always thirsty for good wine, do they serve it there? I would love to go. Let me know when you want to make a reservation. Jake.",
                    body: "<b>From: Emma</b><br><b>To: Jake</b><br>Subject: Amazing food!<br><br>Hi Jake,<br>I went to a new [restaurant](tooltip:restaurant) yesterday. The [chef](tooltip:chef) is Italian. For the [appetizer](tooltip:appetizer), I had [fresh](tooltip:fresh) [bread](tooltip:bread) with [cheese](tooltip:cheese). For the main course, I [ordered](tooltip:order) pasta. It was perfectly [salty](tooltip:salty) and slightly [spicy](tooltip:spicy).[My favorite food is](tooltip:favorite-food) Italian, so I loved it! Let's go there together next week.<br>Best, Emma.<br><br><b>From: Jake</b><br><b>To: Emma</b><br>Subject: Re: Amazing food!<br><br>Hi Emma,<br>That sounds[delicious](tooltip:delicious)! I am always [thirsty](tooltip:thirsty) for good [wine](tooltip:wine), do they serve it there? I would love to go. Let me know when you want to make a[reservation](tooltip:reservation).<br>Jake.",
                    questions:[
                        { q: "What did Emma eat for her appetizer?", options:[{t: "Bread with cheese.", c: true}, {t: "Spicy chicken.", c: false}, {t: "An apple.", c: false}], type: "mcq" },
                        { q: "How did Emma describe the pasta?", options:[{t: "Sour and crispy.", c: false}, {t: "Salty and slightly spicy.", c: true}, {t: "Awful and sweet.", c: false}], type: "mcq" },
                        { q: "What does Jake want to drink at the restaurant?", options:[{t: "Coffee", c: false}, {t: "Juice", c: false}, {t: "Wine", c: true}], type: "mcq" }
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
                { type: "matching", instruction: "Match the food or drink to its category.", pairs:[
                    { left: "Beef", right: "Meat", val: "1" },
                    { left: "Apple", right: "Fruit", val: "2" },
                    { left: "Coffee", right: "Drink", val: "3" },
                    { left: "Cheese", right: "Dairy", val: "4" }
                ]},
                { type: "matching", instruction: "Match the meal to its description.", pairs:[
                    { left: "Breakfast", right: "First meal of the day", val: "1" },
                    { left: "Appetizer", right: "Small dish before the main course", val: "2" },
                    { left: "Dessert", right: "Sweet dish at the end", val: "3" },
                    { left: "Dinner", right: "Evening meal", val: "4" }
                ]},
                { type: "matching", instruction: "Match the adjectives to their descriptions.", pairs:[
                    { left: "Sweet", right: "Tastes like sugar", val: "1" },
                    { left: "Sour", right: "Tastes like lemon", val: "2" },
                    { left: "Salty", right: "Tastes like salt", val: "3" },
                    { left: "Spicy", right: "Hot and fiery flavor", val: "4" }
                ]},
                { type: "matching", instruction: "Match the restaurant terms.", pairs:[
                    { left: "Waiter", right: "Serves the food", val: "1" },
                    { left: "Chef", right: "Cooks the food", val: "2" },
                    { left: "Menu", right: "List of dishes", val: "3" },
                    { left: "Tip", right: "Extra money for good service", val: "4" }
                ]},

                // --- WORD ORDER (5-14) ---
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "two / A / for / please / table / .", correct: "A table for two please ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "see / I / Can / please / menu / the / ?", correct: "Can I see the menu please ?" },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "you / order / to / Are / ready / ?", correct: "Are you ready to order ?" },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "do / recommend / you / What / ?", correct: "What do you recommend ?" },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "chicken / will / the / I / have / .", correct: "I will have the chicken ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "to / Anything / drink / ?", correct: "Anything to drink ?" },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "check / please / The / .", correct: "The check please ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "out / eat / Let's / tonight / .", correct: "Let's eat out tonight ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "favorite / sushi / My / is / food / .", correct: "My favorite food is sushi ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "tea / coffee / I / to / prefer / .", correct: "I prefer tea to coffee ." },

                // --- CLICKABLE ERROR (15-24) ---
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "A table [to](error:for) two, please." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "Are you ready to [eat](error:order)?" },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "What do you [suggests](error:recommend)?" },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "I [am](error:will) have the beef." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "The [money](error:check), please." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "I am [starved](error:starving), let's eat out." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "I need water. I am [hungry](error:thirsty)." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "What is[to](error:for) dinner?" },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "My [best](error:favorite) food is pizza." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "I prefer chicken [than](error:to) beef." },

                // --- ODD ONE OUT (25-30) ---
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Meals)", options:[{t: "Breakfast", c: false}, {t: "Lunch", c: false}, {t: "Dinner", c: false}, {t: "Water", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Drinks)", options:[{t: "Coffee", c: false}, {t: "Juice", c: false}, {t: "Wine", c: false}, {t: "Potato", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Cooking Verbs)", options:[{t: "To boil", c: false}, {t: "To fry", c: false}, {t: "To cook", c: false}, {t: "To pay", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Flavors)", options:[{t: "Sweet", c: false}, {t: "Sour", c: false}, {t: "Salty", c: false}, {t: "Waiter", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Meat)", options:[{t: "Beef", c: false}, {t: "Chicken", c: false}, {t: "Seafood", c: false}, {t: "Apple", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Restaurant)", options:[{t: "Reservation", c: false}, {t: "Menu", c: false}, {t: "Tip", c: false}, {t: "Recipe", c: true}] },

                // --- TRUE / FALSE (31-35) ---
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "An 'appetizer' is eaten after the dessert.", correct: "false"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "You ask for the 'check' or 'bill' when you want to pay in a restaurant.", correct: "true"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "If a food is 'spicy', it tastes like lots of sugar.", correct: "false"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "You 'boil' an egg in hot water.", correct: "true"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "If you 'prefer tea to coffee', it means you like coffee more.", correct: "false"}] },

                // --- MCQ (36-39) ---
                { type: "mcq", instruction: "Choose the correct phrase.<br>When the waiter asks what you want to eat, you say: '________ the chicken.'", options:[{t: "I will make", c: false}, {t: "I will have", c: true}, {t: "I do", c: false}, {t: "I drink", c: false}] },
                { type: "mcq", instruction: "Choose the correct word.<br>The person who cooks food professionally in a restaurant is the ________.", options:[{t: "waiter", c: false}, {t: "menu", c: false}, {t: "chef", c: true}, {t: "recipe", c: false}] },
                { type: "mcq", instruction: "Choose the correct adjective.<br>Fried chicken is usually very ________.", options:[{t: "crispy", c: true}, {t: "sweet", c: false}, {t: "thirsty", c: false}, {t: "raw", c: false}] },
                { type: "mcq", instruction: "Choose the correct phrase.<br>If you haven't eaten all day, you are ________.", options:[{t: "thirsty", c: false}, {t: "starving", c: true}, {t: "awful", c: false}, {t: "spicy", c: false}] },

                // --- CATEGORIZE (40) ---
                { type: "categorize", instruction: "Sort the words into Food and Flavors/Textures.", 
                    categories:[{id: "food", name: "Food"}, {id: "flav", name: "Flavors"}],
                    items:[
                        {text: "Potato", catId: "food"}, 
                        {text: "Bread", catId: "food"}, 
                        {text: "Cheese", catId: "food"}, 
                        {text: "Crispy", catId: "flav"}, 
                        {text: "Sour", catId: "flav"}, 
                        {text: "Salty", catId: "flav"}
                    ] 
                }
            ]
        },

        // ======================================================
        // STEP 8: WRITING PRACTICE
        // ======================================================
        {
            title: "Writing Practice",
            instruction: "Write an email to a friend (5-7 sentences) about a restaurant you recently visited. Mention what you ordered for your appetizer, main course, and dessert. Describe how the food tasted (delicious, salty, sweet, etc.) and invite your friend to go there with you next time.",
            example: "Hi Mark! I went to a great restaurant yesterday. I was starving, so I ordered a lot of food. For the appetizer, I had crispy bread with cheese. For the main course, I had beef with rice, and it was absolutely delicious. Finally, I had a very sweet apple cake for dessert. We should eat out there together next week. Let me know!",
            prompts:[
                "Use restaurant vocabulary (menu, waiter, order, bill).",
                "Describe the meals (appetizer, main course, dessert).",
                "Use flavor adjectives (sweet, sour, spicy, delicious).",
                "Use phrases like 'Let's eat out' or 'I prefer'."
            ]
        },

        // ======================================================
        // STEP 9: FLASHCARDS
        // ======================================================
        {
            title: "Flashcards",
            items:[
                // 2A Items (34 items)
                { term: "Breakfast", definition: "A meal eaten in the morning, the first of the day.", defTrans: "Café da manhã", example: "I eat eggs for breakfast.", audioFront: "TTS: Breakfast", audioBack: "TTS: I eat eggs for breakfast." },
                { term: "Lunch", definition: "A meal eaten in the middle of the day.", defTrans: "Almoço", example: "We had a quick lunch at noon.", audioFront: "TTS: Lunch", audioBack: "TTS: We had a quick lunch at noon." },
                { term: "Dinner", definition: "The main meal of the day, taken either around midday or in the evening.", defTrans: "Jantar", example: "I am cooking pasta for dinner.", audioFront: "TTS: Dinner", audioBack: "TTS: I am cooking pasta for dinner." },
                { term: "Dessert", definition: "The sweet course eaten at the end of a meal.", defTrans: "Sobremesa", example: "I want chocolate cake for dessert.", audioFront: "TTS: Dessert", audioBack: "TTS: I want chocolate cake for dessert." },
                { term: "Appetizer", definition: "A small dish of food or a drink taken before a meal to stimulate one's appetite.", defTrans: "Entrada (Aperitivo)", example: "We ordered a salad as an appetizer.", audioFront: "TTS: Appetizer", audioBack: "TTS: We ordered a salad as an appetizer." },
                { term: "Menu", definition: "A list of dishes available in a restaurant.", defTrans: "Cardápio", example: "Can I see the menu, please?", audioFront: "TTS: Menu", audioBack: "TTS: Can I see the menu, please?" },
                { term: "Waiter", definition: "A man whose job is to serve customers at their tables in a restaurant.", defTrans: "Garçom", example: "The waiter brought our drinks.", audioFront: "TTS: Waiter", audioBack: "TTS: The waiter brought our drinks." },
                { term: "Chef", definition: "A professional cook, typically the chief cook in a restaurant or hotel.", defTrans: "Chefe de cozinha", example: "The chef prepared a special dish.", audioFront: "TTS: Chef", audioBack: "TTS: The chef prepared a special dish." },
                { term: "Tip", definition: "A sum of money given to someone as a reward for their services.", defTrans: "Gorjeta", example: "We left a large tip on the table.", audioFront: "TTS: Tip", audioBack: "TTS: We left a large tip on the table." },
                { term: "Reservation", definition: "An arrangement to secure accommodations at a restaurant or hotel.", defTrans: "Reserva", example: "I made a reservation for 8 PM.", audioFront: "TTS: Reservation", audioBack: "TTS: I made a reservation for 8 PM." },
                
                { term: "Beef", definition: "The flesh of a cow, bull, or ox, used as food.", defTrans: "Carne bovina", example: "I prefer beef over pork.", audioFront: "TTS: Beef", audioBack: "TTS: I prefer beef over pork." },
                { term: "Chicken", definition: "The meat of a domestic fowl.", defTrans: "Frango", example: "She roasted a whole chicken.", audioFront: "TTS: Chicken", audioBack: "TTS: She roasted a whole chicken." },
                { term: "Seafood", definition: "Edible aquatic animals, excluding mammals, but including both fish and shellfish.", defTrans: "Frutos do mar", example: "This restaurant serves great seafood.", audioFront: "TTS: Seafood", audioBack: "TTS: This restaurant serves great seafood." },
                { term: "Cheese", definition: "A food made from the pressed curds of milk.", defTrans: "Queijo", example: "I love eating bread with cheese.", audioFront: "TTS: Cheese", audioBack: "TTS: I love eating bread with cheese." },
                { term: "Apple", definition: "The round fruit of a tree of the rose family.", defTrans: "Maçã", example: "He ate a red apple for a snack.", audioFront: "TTS: Apple", audioBack: "TTS: He ate a red apple for a snack." },
                { term: "Potato", definition: "A starchy plant tuber which is one of the most important food crops.", defTrans: "Batata", example: "We baked a large potato.", audioFront: "TTS: Potato", audioBack: "TTS: We baked a large potato." },
                { term: "Bread", definition: "Food made of flour, water, and yeast or another leavening agent, mixed together and baked.", defTrans: "Pão", example: "I bought some fresh bread at the bakery.", audioFront: "TTS: Bread", audioBack: "TTS: I bought some fresh bread at the bakery." },
                { term: "Rice", definition: "A swamp grass which is widely cultivated as a source of food.", defTrans: "Arroz", example: "I always eat rice and beans.", audioFront: "TTS: Rice", audioBack: "TTS: I always eat rice and beans." },
                { term: "Coffee", definition: "A hot drink made from the roasted and ground seeds of a tropical shrub.", defTrans: "Café", example: "I need a cup of coffee to wake up.", audioFront: "TTS: Coffee", audioBack: "TTS: I need a cup of coffee to wake up." },
                { term: "Water", definition: "A colorless, transparent, odorless liquid.", defTrans: "Água", example: "Please give me a glass of cold water.", audioFront: "TTS: Water", audioBack: "TTS: Please give me a glass of cold water." },
                { term: "Juice", definition: "The liquid obtained from or present in fruit or vegetables.", defTrans: "Suco", example: "I drink orange juice in the morning.", audioFront: "TTS: Juice", audioBack: "TTS: I drink orange juice in the morning." },
                { term: "Wine", definition: "An alcoholic drink made from fermented grape juice.", defTrans: "Vinho", example: "We opened a bottle of red wine.", audioFront: "TTS: Wine", audioBack: "TTS: We opened a bottle of red wine." },

                { term: "To order", definition: "To request that food or drink be made or supplied.", defTrans: "Pedir (em restaurante)", example: "Are you ready to order your food?", audioFront: "TTS: To order", audioBack: "TTS: Are you ready to order your food?" },
                { term: "To pay", definition: "To give money that is due for work done, goods received, or a debt incurred.", defTrans: "Pagar", example: "I will pay the bill with my credit card.", audioFront: "TTS: To pay", audioBack: "TTS: I will pay the bill with my credit card." },
                { term: "To cook", definition: "To prepare food, a dish, or a meal by combining and heating ingredients.", defTrans: "Cozinhar", example: "I like to cook dinner for my family.", audioFront: "TTS: To cook", audioBack: "TTS: I like to cook dinner for my family." },
                { term: "To boil", definition: "To reach or cause to reach the temperature at which it bubbles and turns to vapor.", defTrans: "Ferver", example: "You need to boil water to make pasta.", audioFront: "TTS: To boil", audioBack: "TTS: You need to boil water to make pasta." },
                { term: "To fry", definition: "To cook food in hot fat or oil, typically in a shallow pan.", defTrans: "Fritar", example: "I am going to fry an egg for breakfast.", audioFront: "TTS: To fry", audioBack: "TTS: I am going to fry an egg for breakfast." },
                { term: "Sweet", definition: "Having the pleasant taste characteristic of sugar or honey.", defTrans: "Doce", example: "The cake is very sweet.", audioFront: "TTS: Sweet", audioBack: "TTS: The cake is very sweet." },
                { term: "Sour", definition: "Having an acid taste like lemon or vinegar.", defTrans: "Azedo", example: "This lemon is too sour.", audioFront: "TTS: Sour", audioBack: "TTS: This lemon is too sour." },
                { term: "Salty", definition: "Tasting of, containing, or preserved with salt.", defTrans: "Salgado", example: "The soup is a bit salty.", audioFront: "TTS: Salty", audioBack: "TTS: The soup is a bit salty." },
                { term: "Spicy", definition: "Flavored with or fragrant with spice.", defTrans: "Apimentado / Picante", example: "I love spicy Mexican food.", audioFront: "TTS: Spicy", audioBack: "TTS: I love spicy Mexican food." },
                { term: "Crispy", definition: "Having a firm, dry, and brittle surface or texture.", defTrans: "Crocante", example: "The fried chicken was very crispy.", audioFront: "TTS: Crispy", audioBack: "TTS: The fried chicken was very crispy." },
                { term: "Fresh", definition: "Recently made or obtained; not canned, frozen, or otherwise preserved.", defTrans: "Fresco", example: "The market sells fresh vegetables.", audioFront: "TTS: Fresh", audioBack: "TTS: The market sells fresh vegetables." },
                { term: "Delicious", definition: "Highly pleasant to the taste.", defTrans: "Delicioso", example: "This meal is absolutely delicious.", audioFront: "TTS: Delicious", audioBack: "TTS: This meal is absolutely delicious." },

                // 3A Items (16 items)
                { term: "A table for two, please", definition: "A polite request for a table when arriving at a restaurant.", defTrans: "Uma mesa para dois, por favor.", example: "A table for two, please.", audioFront: "TTS: A table for two, please.", audioBack: "TTS: A table for two, please." },
                { term: "Can I see the menu?", definition: "A request to look at the list of available food.", defTrans: "Posso ver o cardápio?", example: "Can I see the menu, please?", audioFront: "TTS: Can I see the menu?", audioBack: "TTS: Can I see the menu, please?" },
                { term: "Are you ready to order?", definition: "A question a waiter asks when they want to know what you will eat.", defTrans: "Vocês estão prontos para pedir?", example: "Are you ready to order?", audioFront: "TTS: Are you ready to order?", audioBack: "TTS: Are you ready to order?" },
                { term: "What do you recommend?", definition: "Asking the waiter or chef for advice on what to eat.", defTrans: "O que você recomenda?", example: "What do you recommend?", audioFront: "TTS: What do you recommend?", audioBack: "TTS: What do you recommend?" },
                { term: "I will have", definition: "The standard phrase used to state your choice of food.", defTrans: "Eu vou querer", example: "I will have the chicken.", audioFront: "TTS: I will have", audioBack: "TTS: I will have the chicken." },
                { term: "Anything to drink?", definition: "A question a waiter asks to offer beverages.", defTrans: "Algo para beber?", example: "Anything to drink?", audioFront: "TTS: Anything to drink?", audioBack: "TTS: Anything to drink?" },
                { term: "The check, please", definition: "A request for the bill at the end of a meal.", defTrans: "A conta, por favor.", example: "The check, please.", audioFront: "TTS: The check, please", audioBack: "TTS: The check, please." },
                { term: "To take away", definition: "Asking for food to be packaged so you can eat it elsewhere.", defTrans: "Para viagem (levar)", example: "I'd like a pizza to take away.", audioFront: "TTS: To take away", audioBack: "TTS: I'd like a pizza to take away." },
                { term: "I am starving", definition: "A strong way of saying you are very hungry.", defTrans: "Estou morrendo de fome.", example: "I am starving.", audioFront: "TTS: I am starving", audioBack: "TTS: I am starving." },
                { term: "I am thirsty", definition: "Feeling a need to drink something.", defTrans: "Estou com sede.", example: "I am thirsty.", audioFront: "TTS: I am thirsty", audioBack: "TTS: I am thirsty." },
                { term: "Let's eat out", definition: "A suggestion to go to a restaurant instead of cooking at home.", defTrans: "Vamos comer fora", example: "Let's eat out tonight.", audioFront: "TTS: Let's eat out", audioBack: "TTS: Let's eat out tonight." },
                { term: "What is for dinner?", definition: "Asking what meal is being prepared for the evening.", defTrans: "O que tem para o jantar?", example: "What is for dinner?", audioFront: "TTS: What is for dinner?", audioBack: "TTS: What is for dinner?" },
                { term: "Follow a recipe", definition: "To cook by obeying a set of written instructions.", defTrans: "Seguir uma receita", example: "You should follow a recipe.", audioFront: "TTS: Follow a recipe", audioBack: "TTS: You should follow a recipe." },
                { term: "My favorite food is", definition: "Stating the specific dish or type of cuisine you like best.", defTrans: "Minha comida favorita é", example: "My favorite food is sushi.", audioFront: "TTS: My favorite food is", audioBack: "TTS: My favorite food is sushi." },
                { term: "I prefer tea to coffee", definition: "Stating that you like one thing more than another thing.", defTrans: "Eu prefiro chá a café.", example: "I prefer tea to coffee.", audioFront: "TTS: I prefer tea to coffee", audioBack: "TTS: I prefer tea to coffee." },
                { term: "It is awful", definition: "A strong way of saying something tastes very bad.", defTrans: "É horrível.", example: "I can't eat this; it is awful.", audioFront: "TTS: It is awful", audioBack: "TTS: I can't eat this; it is awful." }
            ]
        }
    ],

    // ======================================================
    // GLOSSARY (All 50 items + Context words)
    // ======================================================
    glossary:[
        // 2A: Meals & Dining
        { topic: "Meals & Dining", term: "breakfast", definition: "A meal eaten in the morning, the first of the day.", translation: "Café da manhã" },
        { topic: "Meals & Dining", term: "lunch", definition: "A meal eaten in the middle of the day.", translation: "Almoço" },
        { topic: "Meals & Dining", term: "dinner", definition: "The main meal of the day, usually in the evening.", translation: "Jantar" },
        { topic: "Meals & Dining", term: "dessert", definition: "The sweet course eaten at the end of a meal.", translation: "Sobremesa" },
        { topic: "Meals & Dining", term: "appetizer", definition: "A small dish of food taken before a meal.", translation: "Entrada (Aperitivo)" },
        { topic: "Meals & Dining", term: "menu", definition: "A list of dishes available in a restaurant.", translation: "Cardápio" },
        { topic: "Meals & Dining", term: "waiter", definition: "A man whose job is to serve customers in a restaurant.", translation: "Garçom" },
        { topic: "Meals & Dining", term: "chef", definition: "A professional cook in a restaurant or hotel.", translation: "Chefe de cozinha" },
        { topic: "Meals & Dining", term: "tip", definition: "A sum of money given as a reward for services.", translation: "Gorjeta" },
        { topic: "Meals & Dining", term: "reservation", definition: "An arrangement to secure a table at a restaurant.", translation: "Reserva" },

        // 2A: Food Items & Drinks
        { topic: "Food & Drinks", term: "beef", definition: "The flesh of a cow, bull, or ox.", translation: "Carne bovina" },
        { topic: "Food & Drinks", term: "chicken", definition: "The meat of a domestic fowl.", translation: "Frango" },
        { topic: "Food & Drinks", term: "seafood", definition: "Edible aquatic animals, including fish and shellfish.", translation: "Frutos do mar" },
        { topic: "Food & Drinks", term: "cheese", definition: "A food made from the pressed curds of milk.", translation: "Queijo" },
        { topic: "Food & Drinks", term: "apple", definition: "A round fruit with red or green skin.", translation: "Maçã" },
        { topic: "Food & Drinks", term: "potato", definition: "A starchy plant tuber.", translation: "Batata" },
        { topic: "Food & Drinks", term: "bread", definition: "Food made of flour, water, and yeast.", translation: "Pão" },
        { topic: "Food & Drinks", term: "rice", definition: "A swamp grass widely cultivated as food.", translation: "Arroz" },
        { topic: "Food & Drinks", term: "coffee", definition: "A hot drink made from roasted seeds.", translation: "Café" },
        { topic: "Food & Drinks", term: "water", definition: "A colorless, transparent liquid.", translation: "Água" },
        { topic: "Food & Drinks", term: "juice", definition: "The liquid obtained from fruit or vegetables.", translation: "Suco" },
        { topic: "Food & Drinks", term: "wine", definition: "An alcoholic drink made from fermented grapes.", translation: "Vinho" },

        // 2A: Actions & Descriptions
        { topic: "Actions & Descriptions", term: "to-order", definition: "To request that food or drink be supplied.", translation: "Fazer o pedido / Pedir" },
        { topic: "Actions & Descriptions", term: "to-pay", definition: "To give money that is due for goods received.", translation: "Pagar" },
        { topic: "Actions & Descriptions", term: "to-cook", definition: "To prepare food by combining and heating ingredients.", translation: "Cozinhar" },
        { topic: "Actions & Descriptions", term: "to-boil", definition: "To cook food in bubbling water.", translation: "Ferver" },
        { topic: "Actions & Descriptions", term: "to-fry", definition: "To cook food in hot fat or oil.", translation: "Fritar" },
        { topic: "Actions & Descriptions", term: "sweet", definition: "Having the pleasant taste characteristic of sugar.", translation: "Doce" },
        { topic: "Actions & Descriptions", term: "sour", definition: "Having an acid taste like lemon.", translation: "Azedo" },
        { topic: "Actions & Descriptions", term: "salty", definition: "Tasting of, or preserved with salt.", translation: "Salgado" },
        { topic: "Actions & Descriptions", term: "spicy", definition: "Flavored with or fragrant with hot spice.", translation: "Apimentado / Picante" },
        { topic: "Actions & Descriptions", term: "crispy", definition: "Having a firm, dry, and brittle surface.", translation: "Crocante" },
        { topic: "Actions & Descriptions", term: "fresh", definition: "Recently made or obtained; not canned or frozen.", translation: "Fresco" },
        { topic: "Actions & Descriptions", term: "delicious", definition: "Highly pleasant to the taste.", translation: "Delicioso" },

        // 3A: Expressions
        { topic: "Expressions", term: "table-for-two", definition: "A polite request for a table when arriving at a restaurant.", translation: "Uma mesa para dois, por favor." },
        { topic: "Expressions", term: "can-i-see-menu", definition: "A request to look at the list of available food.", translation: "Posso ver o cardápio?" },
        { topic: "Expressions", term: "ready-to-order", definition: "A question a waiter asks to know if you are ready to eat.", translation: "Vocês estão prontos para pedir?" },
        { topic: "Expressions", term: "what-recommend", definition: "Asking the waiter or chef for advice on what to eat.", translation: "O que você recomenda?" },
        { topic: "Expressions", term: "ill-have", definition: "The standard phrase used to state your choice of food.", translation: "Eu vou querer" },
        { topic: "Expressions", term: "anything-drink", definition: "A question a waiter asks to offer beverages.", translation: "Algo para beber?" },
        { topic: "Expressions", term: "check-please", definition: "A request for the bill at the end of a meal.", translation: "A conta, por favor." },
        { topic: "Expressions", term: "take-away", definition: "Asking for food to be packaged so you can eat it elsewhere.", translation: "Para viagem (levar)" },
        { topic: "Expressions", term: "starving", definition: "A strong way of saying you are very hungry.", translation: "Estou morrendo de fome." },
        { topic: "Expressions", term: "thirsty", definition: "Feeling a need to drink something.", translation: "Estou com sede." },
        { topic: "Expressions", term: "eat-out", definition: "A suggestion to go to a restaurant instead of cooking.", translation: "Comer fora" },
        { topic: "Expressions", term: "what-for-dinner", definition: "Asking what meal is being prepared for the evening.", translation: "O que tem para o jantar?" },
        { topic: "Expressions", term: "follow-recipe", definition: "To cook by obeying a set of written instructions.", translation: "Seguir uma receita" },
        { topic: "Expressions", term: "favorite-food", definition: "Stating the specific dish or type of cuisine you like best.", translation: "Minha comida favorita é" },
        { topic: "Expressions", term: "prefer", definition: "Stating that you like one thing more than another.", translation: "Preferir" },
        { topic: "Expressions", term: "awful", definition: "A strong way of saying something tastes very bad.", translation: "Horrível." },

        // Additional Context Words Used in Texts/Intros
        { topic: "Context", term: "food", definition: "Any nutritious substance that people or animals eat or drink.", translation: "Comida" },
        { topic: "Context", term: "restaurant", definition: "A place where people pay to sit and eat meals.", translation: "Restaurante" },
        { topic: "Context", term: "recipe", definition: "A set of instructions for preparing a particular dish.", translation: "Receita" },
        { topic: "Context", term: "meat", definition: "The flesh of an animal as food.", translation: "Carne" },
        { topic: "Context", term: "vegetable", definition: "A plant or part of a plant used as food.", translation: "Vegetal / Legume" },
        { topic: "Context", term: "preference", definition: "A greater liking for one alternative over another or others.", translation: "Preferência" },
        { topic: "Context", term: "main-course", definition: "The most substantial course of a meal.", translation: "Prato principal" }
    ]
});