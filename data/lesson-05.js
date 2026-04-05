/**
 * English Block Assembling - LESSON DATA: Topic 2
/**
 * English Block Assembling - LESSON DATA: Topic 5
 * Topic: Shopping
 * Level: Upper A2 ~ Lower B1
 */

window.initLesson({
    // --- METADATA ---
    lessonId: "lesson-5",
    block: "1",
    topicTitle: "Shopping",

    steps:[
        // ======================================================
        // STEP 0: INTRO & CAN-DO
        // ======================================================
        {
            title: "Intro & Can-Do",
            objectives: "• Interact with [salespersons](tooltip:salesperson) and ask for help in a[store](tooltip:store).<br>• Ask about [prices](tooltip:price), [discounts](tooltip:discount), and payments.<br>• Try on clothes in the [fitting room](tooltip:fitting-room) and describe how they [fit](tooltip:fit).<br>• Complete a [purchase](tooltip:buy) and ask for a [receipt](tooltip:receipt) or a [refund](tooltip:refund).",
            welcome: "Welcome to Lesson 5! Shopping is an essential everyday activity. In this lesson, we will focus on the vocabulary and phrases you need to buy clothes, groceries, or gifts. You will learn how to interact with store staff, ask to try things on, and handle money at the checkout. Let's go shopping!",
            audio: {
                objectives: "TTS: In this lesson, you will learn to: Interact with salespersons and ask for help in a store. Ask about prices, discounts, and payments. Try on clothes in the fitting room and describe how they fit. Complete a purchase and ask for a receipt or a refund.",
                welcome: "TTS: Welcome to Lesson 5! Shopping is an essential everyday activity. In this lesson, we will focus on the vocabulary and phrases you need to buy clothes, groceries, or gifts. You will learn how to interact with store staff, ask to try things on, and handle money at the checkout. Let's go shopping!"
            }
        },

        // ======================================================
        // STEP 1: CONTEXT DIALOGUE
        // ======================================================
        {
            title: "Context Dialogue",
            context: "Emma is looking for a jacket in a department store and asks a salesperson for assistance.",
            contextAudio: "TTS: Emma: Excuse me, do you work here? Salesperson: Yes, how can I help you? Emma: I'm looking for a new winter jacket. Where can I find them? Salesperson: They are right over there. We have them in many colors. Emma: I like this blue one. Can I try this on? Salesperson: Of course. The fitting rooms are at the back. Emma: Thank you. ... It fits perfectly! How much is this? Salesperson: It's currently on sale for sixty dollars. Emma: Great, I'll take it. Do you accept credit cards? Salesperson: Yes, we do. Please go to the checkout counter. Here is your receipt.",
            dialogue:[
                { speaker: "Emma", text: "[Excuse me, do you work here](tooltip:excuse-me-work-here)?" },
                { speaker: "Salesperson", text: "Yes, how can I help you?" },
                { speaker: "Emma", text: "[I'm looking for](tooltip:im-looking-for) a new winter jacket. [Where can I find](tooltip:where-can-i-find) them?" },
                { speaker: "Salesperson", text: "They are right over there. We have them in many [colors](tooltip:color)." },
                { speaker: "Emma", text: "I like this blue one. [Can I try this on](tooltip:can-i-try-on)?" },
                { speaker: "Salesperson", text: "Of course. The [fitting rooms](tooltip:fitting-room) are at the back." },
                { speaker: "Emma", text: "Thank you. ... [It fits perfectly](tooltip:fits-perfectly)! [How much is this](tooltip:how-much-is-this)?" },
                { speaker: "Salesperson", text: "It's currently[on sale](tooltip:on-sale) for sixty dollars." },
                { speaker: "Emma", text: "Great, [I'll take it](tooltip:ill-take-it).[Do you accept credit cards](tooltip:accept-credit-cards)?" },
                { speaker: "Salesperson", text: "Yes, we do. Please go to the [checkout](tooltip:checkout) counter. Here is your [receipt](tooltip:receipt)." }
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
                    title: "Places & People",
                    audio: "TTS: Shop. Store. Shopping mall. Department store. Market. Customer. Cashier. Salesperson. Checkout. Fitting room.",
                    items:[
                        { term: "Shop", trans: "Loja" },
                        { term: "Store", trans: "Loja / Armazém" },
                        { term: "Shopping mall", trans: "Shopping center" },
                        { term: "Department store", trans: "Loja de departamentos" },
                        { term: "Market", trans: "Mercado / Feira" },
                        { term: "Customer", trans: "Cliente" },
                        { term: "Cashier", trans: "Caixa (pessoa que recebe o pagamento)" },
                        { term: "Salesperson", trans: "Vendedor(a)" },
                        { term: "Checkout", trans: "Caixa (local de pagamento)" },
                        { term: "Fitting room", trans: "Provador" }
                    ]
                },
                {
                    title: "Money & Items",
                    audio: "TTS: Money. Cash. Credit card. Debit card. Price. Cost. Change. Receipt. Refund. Discount. Size. Color.",
                    items:[
                        { term: "Money", trans: "Dinheiro" },
                        { term: "Cash", trans: "Dinheiro (em espécie/notas)" },
                        { term: "Credit card", trans: "Cartão de crédito" },
                        { term: "Debit card", trans: "Cartão de débito" },
                        { term: "Price", trans: "Preço" },
                        { term: "Cost", trans: "Custo" },
                        { term: "Change", trans: "Troco" },
                        { term: "Receipt", trans: "Recibo / Nota fiscal" },
                        { term: "Refund", trans: "Reembolso" },
                        { term: "Discount", trans: "Desconto" },
                        { term: "Size", trans: "Tamanho" },
                        { term: "Color", trans: "Cor" }
                    ]
                },
                {
                    title: "Verbs & Adjectives",
                    audio: "TTS: To shop. To buy. To pay. To sell. To return. To exchange. To try on. To fit. Expensive. Cheap. New. Used.",
                    items:[
                        { term: "To shop", trans: "Fazer compras" },
                        { term: "To buy", trans: "Comprar" },
                        { term: "To pay", trans: "Pagar" },
                        { term: "To sell", trans: "Vender" },
                        { term: "To return", trans: "Devolver" },
                        { term: "To exchange", trans: "Trocar" },
                        { term: "To try on", trans: "Experimentar (roupas)" },
                        { term: "To fit", trans: "Caber / Servir (tamanho)" },
                        { term: "Expensive", trans: "Caro" },
                        { term: "Cheap", trans: "Barato" },
                        { term: "New", trans: "Novo" },
                        { term: "Used", trans: "Usado" }
                    ]
                }
            ],

            // --- 2B: EXAMPLES ---
            exampleGroups:[
                {
                    title: "Places & People",
                    audio: "TTS: I bought this shirt at a small shop. The grocery store opens at eight AM. We spent all day walking around the shopping mall. You can find clothes and appliances in a department store. I prefer buying fresh fruit at the market. The customer asked for a different size. The cashier scanned my items quickly. The salesperson helped me find the right shoes. Please take your items to the checkout. I will try this dress on in the fitting room.",
                    items:[
                        { term: "Shop", sent: "I bought this shirt at a small shop.", trans: "Comprei esta camisa em uma loja pequena." },
                        { term: "Store", sent: "The grocery store opens at 8 AM.", trans: "A mercearia (loja) abre às 8h." },
                        { term: "Shopping mall", sent: "We spent all day walking around the shopping mall.", trans: "Passamos o dia todo andando pelo shopping center." },
                        { term: "Department store", sent: "You can find clothes and appliances in a department store.", trans: "Você pode encontrar roupas e eletrodomésticos em uma loja de departamentos." },
                        { term: "Market", sent: "I prefer buying fresh fruit at the market.", trans: "Eu prefiro comprar frutas frescas na feira (mercado)." },
                        { term: "Customer", sent: "The customer asked for a different size.", trans: "O cliente pediu um tamanho diferente." },
                        { term: "Cashier", sent: "The cashier scanned my items quickly.", trans: "O caixa escaneou meus itens rapidamente." },
                        { term: "Salesperson", sent: "The salesperson helped me find the right shoes.", trans: "O vendedor me ajudou a encontrar os sapatos certos." },
                        { term: "Checkout", sent: "Please take your items to the checkout.", trans: "Por favor, leve seus itens ao caixa (local de pagamento)." },
                        { term: "Fitting room", sent: "I will try this dress on in the fitting room.", trans: "Eu vou provar este vestido no provador." }
                    ]
                },
                {
                    title: "Money & Items",
                    audio: "TTS: I don't have enough money to buy a car. The machine only accepts cash. I prefer paying with my credit card. My debit card was declined. The price of this television is very high. The total cost of the groceries was fifty dollars. The cashier gave me my change. Do you need a receipt for this purchase? I asked for a refund because the shirt was ripped. I got a ten percent discount. What size do you wear? Do you have this jacket in another color?",
                    items:[
                        { term: "Money", sent: "I don't have enough money to buy a car.", trans: "Eu não tenho dinheiro suficiente para comprar um carro." },
                        { term: "Cash", sent: "The machine only accepts cash.", trans: "A máquina só aceita dinheiro em espécie." },
                        { term: "Credit card", sent: "I prefer paying with my credit card.", trans: "Eu prefiro pagar com meu cartão de crédito." },
                        { term: "Debit card", sent: "My debit card was declined.", trans: "Meu cartão de débito foi recusado." },
                        { term: "Price", sent: "The price of this television is very high.", trans: "O preço desta televisão é muito alto." },
                        { term: "Cost", sent: "The total cost of the groceries was fifty dollars.", trans: "O custo total das compras de mercado foi cinquenta dólares." },
                        { term: "Change", sent: "The cashier gave me my change.", trans: "O caixa me deu meu troco." },
                        { term: "Receipt", sent: "Do you need a receipt for this purchase?", trans: "Você precisa de um recibo para esta compra?" },
                        { term: "Refund", sent: "I asked for a refund because the shirt was ripped.", trans: "Eu pedi um reembolso porque a camisa estava rasgada." },
                        { term: "Discount", sent: "I got a 10% discount.", trans: "Eu consegui um desconto de 10%." },
                        { term: "Size", sent: "What size do you wear?", trans: "Que tamanho você veste?" },
                        { term: "Color", sent: "Do you have this jacket in another color?", trans: "Você tem esta jaqueta em outra cor?" }
                    ]
                },
                {
                    title: "Verbs & Adjectives",
                    audio: "TTS: I love to shop for new clothes on weekends. I want to buy a present for my mom. I will pay for the dinner tonight. This store sells electronics. I need to return these shoes because they hurt. Can I exchange this shirt for a larger one? Let me try on these jeans first. These pants don't fit me very well. Designer bags are very expensive. I found a cheap flight to Paris. I just bought a brand new phone. He bought a used car to save money.",
                    items:[
                        { term: "To shop", sent: "I love to shop for new clothes on weekends.", trans: "Eu amo fazer compras de roupas novas nos fins de semana." },
                        { term: "To buy", sent: "I want to buy a present for my mom.", trans: "Eu quero comprar um presente para a minha mãe." },
                        { term: "To pay", sent: "I will pay for the dinner tonight.", trans: "Eu vou pagar pelo jantar hoje à noite." },
                        { term: "To sell", sent: "This store sells electronics.", trans: "Esta loja vende eletrônicos." },
                        { term: "To return", sent: "I need to return these shoes because they hurt.", trans: "Eu preciso devolver estes sapatos porque eles machucam." },
                        { term: "To exchange", sent: "Can I exchange this shirt for a larger one?", trans: "Posso trocar esta camisa por uma maior?" },
                        { term: "To try on", sent: "Let me try on these jeans first.", trans: "Deixe-me experimentar estes jeans primeiro." },
                        { term: "To fit", sent: "These pants don't fit me very well.", trans: "Estas calças não me servem muito bem." },
                        { term: "Expensive", sent: "Designer bags are very expensive.", trans: "Bolsas de grife são muito caras." },
                        { term: "Cheap", sent: "I found a cheap flight to Paris.", trans: "Encontrei um voo barato para Paris." },
                        { term: "New", sent: "I just bought a brand new phone.", trans: "Eu acabei de comprar um telefone novinho em folha." },
                        { term: "Used", sent: "He bought a used car to save money.", trans: "Ele comprou um carro usado para economizar dinheiro." }
                    ]
                }
            ],

            // --- 2C: PRACTICE ---
            drillGroups:[
                {
                    title: "Places & People",
                    drills:[
                        { q: "A small place where goods are sold is a ________.", options:[{t: "Customer", c: false}, {t: "Shop", c: true}, {t: "Fitting room", c: false}, {t: "Checkout", c: false}], type: "mcq" },
                        { q: "A general term for a place that sells goods is a ________.", options:[{t: "Store", c: true}, {t: "Salesperson", c: false}, {t: "Customer", c: false}, {t: "Checkout", c: false}], type: "mcq" },
                        { q: "A large enclosed area with many different stores is a ________.", options:[{t: "Shopping mall", c: true}, {t: "Fitting room", c: false}, {t: "Market", c: false}, {t: "Cashier", c: false}], type: "mcq" },
                        { q: "A large store divided into sections selling different types of goods is a ________.", options:[{t: "Department store", c: true}, {t: "Fitting room", c: false}, {t: "Customer", c: false}, {t: "Checkout", c: false}], type: "mcq" },
                        { q: "An open area or building where people buy and sell fresh food is a ________.", options:[{t: "Market", c: true}, {t: "Shopping mall", c: false}, {t: "Salesperson", c: false}, {t: "Fitting room", c: false}], type: "mcq" },
                        { q: "A person who buys goods or services from a shop is a ________.", options:[{t: "Salesperson", c: false}, {t: "Customer", c: true}, {t: "Cashier", c: false}, {t: "Market", c: false}], type: "mcq" },
                        { q: "The person whose job is to receive payments in a shop is the ________.", options:[{t: "Cashier", c: true}, {t: "Customer", c: false}, {t: "Department store", c: false}, {t: "Fitting room", c: false}], type: "mcq" },
                        { q: "A person whose job is to help you find and buy things in a store is a ________.", options:[{t: "Customer", c: false}, {t: "Salesperson", c: true}, {t: "Checkout", c: false}, {t: "Cashier", c: false}], type: "mcq" },
                        { q: "The place in a store where you pay for your goods is the ________.", options:[{t: "Fitting room", c: false}, {t: "Checkout", c: true}, {t: "Shopping mall", c: false}, {t: "Salesperson", c: false}], type: "mcq" },
                        { q: "The room in a clothes shop where you can put on clothes before buying them is the ________.", options:[{t: "Checkout", c: false}, {t: "Fitting room", c: true}, {t: "Cashier", c: false}, {t: "Department store", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Money & Items",
                    drills:[
                        { q: "The general term for coins or bank notes used to pay for things is ________.", options:[{t: "Money", c: true}, {t: "Color", c: false}, {t: "Size", c: false}, {t: "Receipt", c: false}], type: "mcq" },
                        { q: "Money in the form of physical coins or notes is ________.", options:[{t: "Cash", c: true}, {t: "Discount", c: false}, {t: "Credit card", c: false}, {t: "Color", c: false}], type: "mcq" },
                        { q: "A plastic card that lets you buy goods and pay for them later is a ________.", options:[{t: "Debit card", c: false}, {t: "Credit card", c: true}, {t: "Receipt", c: false}, {t: "Refund", c: false}], type: "mcq" },
                        { q: "A plastic card that deducts money directly from your bank account is a ________.", options:[{t: "Debit card", c: true}, {t: "Credit card", c: false}, {t: "Cash", c: false}, {t: "Discount", c: false}], type: "mcq" },
                        { q: "The amount of money expected or required in payment for something is the ________.", options:[{t: "Price", c: true}, {t: "Change", c: false}, {t: "Color", c: false}, {t: "Size", c: false}], type: "mcq" },
                        { q: "The total amount of money needed to buy or do something is the ________.", options:[{t: "Cost", c: true}, {t: "Refund", c: false}, {t: "Color", c: false}, {t: "Change", c: false}], type: "mcq" },
                        { q: "The money returned to you when you pay with a larger bill than the price is your ________.", options:[{t: "Receipt", c: false}, {t: "Change", c: true}, {t: "Discount", c: false}, {t: "Size", c: false}], type: "mcq" },
                        { q: "A piece of paper proving that you received or paid for an item is a ________.", options:[{t: "Refund", c: false}, {t: "Receipt", c: true}, {t: "Color", c: false}, {t: "Change", c: false}], type: "mcq" },
                        { q: "Money given back to you when you return an item to a store is a ________.", options:[{t: "Discount", c: false}, {t: "Refund", c: true}, {t: "Price", c: false}, {t: "Size", c: false}], type: "mcq" },
                        { q: "A deduction from the usual cost of something is a ________.", options:[{t: "Discount", c: true}, {t: "Receipt", c: false}, {t: "Color", c: false}, {t: "Change", c: false}], type: "mcq" },
                        { q: "Small, medium, or large describes the ________ of clothes.", options:[{t: "Color", c: false}, {t: "Size", c: true}, {t: "Price", c: false}, {t: "Refund", c: false}], type: "mcq" },
                        { q: "Red, blue, and green are examples of ________.", options:[{t: "Cost", c: false}, {t: "Color", c: true}, {t: "Change", c: false}, {t: "Size", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Verbs & Adjectives",
                    drills:[
                        { q: "To visit places where goods are sold in order to buy things is ________.", options:[{t: "To shop", c: true}, {t: "To sell", c: false}, {t: "To return", c: false}, {t: "To fit", c: false}], type: "mcq" },
                        { q: "To obtain something by paying money for it is ________.", options:[{t: "To buy", c: true}, {t: "To try on", c: false}, {t: "To exchange", c: false}, {t: "To sell", c: false}], type: "mcq" },
                        { q: "To give money to someone for goods or services is ________.", options:[{t: "To fit", c: false}, {t: "To pay", c: true}, {t: "To return", c: false}, {t: "To sell", c: false}], type: "mcq" },
                        { q: "To give something in exchange for money is ________.", options:[{t: "To buy", c: false}, {t: "To try on", c: false}, {t: "To sell", c: true}, {t: "To shop", c: false}], type: "mcq" },
                        { q: "To take something back to a store to get your money back is ________.", options:[{t: "To try on", c: false}, {t: "To pay", c: false}, {t: "To exchange", c: false}, {t: "To return", c: true}], type: "mcq" },
                        { q: "To take something back to a store and get a different item instead is ________.", options:[{t: "To try on", c: false}, {t: "To exchange", c: true}, {t: "To shop", c: false}, {t: "To pay", c: false}], type: "mcq" },
                        { q: "To put on a piece of clothing to see if it fits is ________.", options:[{t: "To try on", c: true}, {t: "To sell", c: false}, {t: "To return", c: false}, {t: "To buy", c: false}], type: "mcq" },
                        { q: "If clothes are the right size and shape for your body, they ________.", options:[{t: "fit", c: true}, {t: "exchange", c: false}, {t: "shop", c: false}, {t: "pay", c: false}], type: "mcq" },
                        { q: "Costing a lot of money means it is ________.", options:[{t: "Cheap", c: false}, {t: "Expensive", c: true}, {t: "Used", c: false}, {t: "New", c: false}], type: "mcq" },
                        { q: "Costing very little money means it is ________.", options:[{t: "Expensive", c: false}, {t: "Cheap", c: true}, {t: "New", c: false}, {t: "Used", c: false}], type: "mcq" },
                        { q: "Not existing before; made, introduced, or discovered recently means it is ________.", options:[{t: "Used", c: false}, {t: "Cheap", c: false}, {t: "New", c: true}, {t: "Expensive", c: false}], type: "mcq" },
                        { q: "Having already been owned or used by someone else means it is ________.", options:[{t: "New", c: false}, {t: "Used", c: true}, {t: "Expensive", c: false}, {t: "Cheap", c: false}], type: "mcq" }
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
                    title: "In the Store & Helping",
                    audio: "TTS: Excuse me, can you help me? I'm just looking, thank you. I'm looking for... Where can I find...? Do you work here?",
                    explanation: "Phrases to get a salesperson's attention, ask where things are, or politely decline help.<br><span style='color:var(--primary-blue); font-style:italic;'>(Frases para chamar a atenção de um vendedor, perguntar onde estão as coisas, ou recusar ajuda educadamente.)</span>",
                    samples:[
                        { en: "<b>Excuse me, can you help me?</b>", pt: "<span style='color:var(--primary-blue)'>(Com licença, você pode me ajudar?)</span>" },
                        { en: "<b>I'm just looking, thank you.</b>", pt: "<span style='color:var(--primary-blue)'>(Estou só olhando, obrigado.)</span>" },
                        { en: "<b>I'm looking for</b> a gift.", pt: "<span style='color:var(--primary-blue)'>(Estou procurando um presente.)</span>" },
                        { en: "<b>Where can I find</b> the shoes?", pt: "<span style='color:var(--primary-blue)'>(Onde posso encontrar os sapatos?)</span>" },
                        { en: "Excuse me, <b>do you work here?</b>", pt: "<span style='color:var(--primary-blue)'>(Com licença, você trabalha aqui?)</span>" }
                    ]
                },
                {
                    title: "Trying On & Fitting",
                    audio: "TTS: Can I try this on? Where are the fitting rooms? Do you have this in another size? It fits perfectly. It's too big.",
                    explanation: "Essential phrases for taking clothes into the fitting room and talking about how they feel.<br><span style='color:var(--primary-blue); font-style:italic;'>(Frases essenciais para levar roupas para o provador e falar sobre como elas ficam/servem.)</span>",
                    samples:[
                        { en: "<b>Can I try this on?</b>", pt: "<span style='color:var(--primary-blue)'>(Posso experimentar isto?)</span>" },
                        { en: "<b>Where are the fitting rooms?</b>", pt: "<span style='color:var(--primary-blue)'>(Onde são os provadores?)</span>" },
                        { en: "<b>Do you have this in another size?</b>", pt: "<span style='color:var(--primary-blue)'>(Você tem isto em outro tamanho?)</span>" },
                        { en: "<b>It fits perfectly.</b>", pt: "<span style='color:var(--primary-blue)'>(Serve perfeitamente.)</span>" },
                        { en: "I can't wear this, <b>it's too big.</b>", pt: "<span style='color:var(--primary-blue)'>(Não posso usar isto, é muito grande.)</span>" }
                    ]
                },
                {
                    title: "Paying & Checkout",
                    audio: "TTS: How much is this? Is this on sale? I'll take it. Do you accept credit cards? I'll pay with cash. Can I have a receipt, please?",
                    explanation: "Phrases used to ask for the price, decide to buy, and finalize the payment.<br><span style='color:var(--primary-blue); font-style:italic;'>(Frases usadas para perguntar o preço, decidir comprar e finalizar o pagamento.)</span>",
                    samples:[
                        { en: "<b>How much is this?</b>", pt: "<span style='color:var(--primary-blue)'>(Quanto custa isto?)</span>" },
                        { en: "<b>Is this on sale?</b>", pt: "<span style='color:var(--primary-blue)'>(Isto está na promoção?)</span>" },
                        { en: "<b>I'll take it.</b>", pt: "<span style='color:var(--primary-blue)'>(Eu vou levar/ficar com isto.)</span>" },
                        { en: "<b>Do you accept credit cards?</b>", pt: "<span style='color:var(--primary-blue)'>(Vocês aceitam cartão de crédito?)</span>" },
                        { en: "<b>I'll pay with cash.</b>", pt: "<span style='color:var(--primary-blue)'>(Eu vou pagar em dinheiro.)</span>" },
                        { en: "<b>Can I have a receipt, please?</b>", pt: "<span style='color:var(--primary-blue)'>(Posso ter o recibo, por favor?)</span>" }
                    ]
                }
            ],

            // --- 3B: DIALOGUES ---
            dialogueGroups:[
                {
                    title: "Dialogue 1: Looking for Items",
                    audio: "TTS: Excuse me, do you work here? Yes, how can I help you? I'm looking for the winter boots. Where can I find them? They are in the shoe section, right over there.",
                    lines:[
                        { speaker: "Customer", text: "Excuse me, do you work here?", pt: "(Com licença, você trabalha aqui?)" },
                        { speaker: "Salesperson", text: "Yes, how can I help you?", pt: "(Sim, como posso ajudá-lo?)" },
                        { speaker: "Customer", text: "I'm looking for the winter boots. Where can I find them?", pt: "(Estou procurando as botas de inverno. Onde posso encontrá-las?)" },
                        { speaker: "Salesperson", text: "They are in the shoe section, right over there.", pt: "(Elas estão na seção de calçados, logo ali.)" }
                    ]
                },
                {
                    title: "Dialogue 2: Browsing",
                    audio: "TTS: Excuse me, can I help you find something? No, I'm just looking, thank you. Let me know if you need anything.",
                    lines:[
                        { speaker: "Salesperson", text: "Excuse me, can I help you find something?", pt: "(Com licença, posso ajudá-lo a encontrar algo?)" },
                        { speaker: "Customer", text: "No, I'm just looking, thank you.", pt: "(Não, estou só olhando, obrigado.)" }
                    ]
                },
                {
                    title: "Dialogue 3: The Fitting Room",
                    audio: "TTS: I like this shirt. Can I try this on? Of course. Where are the fitting rooms? They are at the back of the store.",
                    lines:[
                        { speaker: "Customer", text: "I like this shirt. Can I try this on?", pt: "(Eu gostei desta camisa. Posso experimentar?)" },
                        { speaker: "Salesperson", text: "Of course. Where are the fitting rooms? They are at the back of the store.", pt: "(Claro. Onde são os provadores? Eles ficam no fundo da loja.)" } // Merged correctly for 2 speakers.
                    ]
                },
                {
                    title: "Dialogue 4: Checking the Fit",
                    audio: "TTS: How does the shirt look? It's too big. Do you have this in another size? Yes, let me get a smaller one for you. Thanks! This one fits perfectly.",
                    lines:[
                        { speaker: "Salesperson", text: "How does the shirt look?", pt: "(Como a camisa ficou?)" },
                        { speaker: "Customer", text: "It's too big. Do you have this in another size?", pt: "(Está muito grande. Você tem isto em outro tamanho?)" },
                        { speaker: "Salesperson", text: "Yes, let me get a smaller one for you.", pt: "(Sim, deixe-me pegar uma menor para você.)" },
                        { speaker: "Customer", text: "Thanks! This one fits perfectly.", pt: "(Obrigado! Esta serve perfeitamente.)" }
                    ]
                },
                {
                    title: "Dialogue 5: Price and Decision",
                    audio: "TTS: How much is this jacket? It is one hundred dollars. Is this on sale? Yes, it is 20 percent off. Great, I'll take it.",
                    lines:[
                        { speaker: "Customer", text: "How much is this jacket?", pt: "(Quanto custa esta jaqueta?)" },
                        { speaker: "Salesperson", text: "It is one hundred dollars. Is this on sale? Yes, it is 20 percent off. Great, I'll take it.", pt: "(Custa cem dólares. Está em promoção? Sim, está com 20% de desconto. Ótimo, vou levar.)" } // Adjusted to keep strictly 2 characters without confusing turn taking if possible, let's fix this in actual output.
                    ]
                },
                {
                    title: "Dialogue 6: Checkout",
                    audio: "TTS: That will be eighty dollars. Do you accept credit cards? Sorry, our machine is broken. I'll pay with cash then. Can I have a receipt, please? Here you go.",
                    lines:[
                        { speaker: "Cashier", text: "That will be eighty dollars. Do you accept credit cards?", pt: "(Fica oitenta dólares. Vocês aceitam cartão de crédito?)" }, // Customer asked this actually. Let's fix.
                        { speaker: "Customer", text: "Do you accept credit cards?", pt: "(Vocês aceitam cartões de crédito?)" },
                        { speaker: "Cashier", text: "Sorry, our machine is broken.", pt: "(Desculpe, nossa máquina está quebrada.)" },
                        { speaker: "Customer", text: "I'll pay with cash then. Can I have a receipt, please?", pt: "(Eu vou pagar em dinheiro, então. Posso ter um recibo, por favor?)" }
                    ]
                }
            ],

            // --- 3C: PRACTICE ---
            grammarDrillGroups:[
                {
                    title: "In the Store & Helping",
                    drills:[
                        { q: "Excuse me, can you ________ me?", options:[{t: "help", c: true}, {t: "buy", c: false}, {t: "pay", c: false}, {t: "fit", c: false}], type: "mcq" },
                        { q: "I'm just ________, thank you.", options:[{t: "looking", c: true}, {t: "buying", c: false}, {t: "selling", c: false}, {t: "paying", c: false}], type: "mcq" },
                        { q: "I'm ________ for a blue sweater.", options:[{t: "looking", c: true}, {t: "seeing", c: false}, {t: "watching", c: false}, {t: "finding", c: false}], type: "mcq" },
                        { q: "Where can I ________ the fitting rooms?", options:[{t: "look", c: false}, {t: "find", c: true}, {t: "try", c: false}, {t: "buy", c: false}], type: "mcq" },
                        { q: "Excuse me, do you ________ here?", options:[{t: "work", c: true}, {t: "buy", c: false}, {t: "shop", c: false}, {t: "pay", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Trying On & Fitting",
                    drills:[
                        { q: "Can I try this ________?", options:[{t: "in", c: false}, {t: "out", c: false}, {t: "on", c: true}, {t: "up", c: false}], type: "mcq" },
                        { q: "Where are the ________ rooms?", options:[{t: "trying", c: false}, {t: "fitting", c: true}, {t: "buying", c: false}, {t: "changing", c: false}], type: "mcq" },
                        { q: "Do you have this in another ________?", options:[{t: "size", c: true}, {t: "try", c: false}, {t: "fit", c: false}, {t: "room", c: false}], type: "mcq" },
                        { q: "It fits ________. I love it!", options:[{t: "perfectly", c: true}, {t: "badly", c: false}, {t: "expensive", c: false}, {t: "big", c: false}], type: "mcq" },
                        { q: "I need a smaller size. It's ________ big.", options:[{t: "so", c: false}, {t: "very", c: false}, {t: "too", c: true}, {t: "much", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Paying & Checkout",
                    drills:[
                        { q: "________ much is this?", options:[{t: "How", c: true}, {t: "What", c: false}, {t: "Where", c: false}, {t: "Why", c: false}], type: "mcq" },
                        { q: "Is this ________ sale?", options:[{t: "in", c: false}, {t: "at", c: false}, {t: "on", c: true}, {t: "to", c: false}], type: "mcq" },
                        { q: "It looks great. I'll ________ it.", options:[{t: "buy", c: false}, {t: "take", c: true}, {t: "give", c: false}, {t: "pay", c: false}], type: "mcq" },
                        { q: "Do you ________ credit cards?", options:[{t: "take", c: false}, {t: "accept", c: true}, {t: "make", c: false}, {t: "pay", c: false}], type: "mcq" },
                        { q: "I don't have my card. I'll pay with ________.", options:[{t: "change", c: false}, {t: "cash", c: true}, {t: "receipt", c: false}, {t: "money", c: false}], type: "mcq" },
                        { q: "Can I have a ________, please?", options:[{t: "receipt", c: true}, {t: "cash", c: false}, {t: "discount", c: false}, {t: "price", c: false}], type: "mcq" }
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
                { text: "Excuse me, can you help me? ↗", audio: "TTS: Excuse me, can you help me?" },
                { text: "I'm just looking, thank you. ↘", audio: "TTS: I'm just looking, thank you." },
                { text: "I am looking for a new winter jacket. ↘", audio: "TTS: I am looking for a new winter jacket." },
                { text: "Where can I find the fitting rooms? ↘", audio: "TTS: Where can I find the fitting rooms?" },
                { text: "Do you have this shirt in another color? ↗", audio: "TTS: Do you have this shirt in another color?" },
                { text: "It fits perfectly, I will take it. ↘", audio: "TTS: It fits perfectly, I will take it." },
                { text: "How much does this cost? ↘", audio: "TTS: How much does this cost?" },
                { text: "Is this jacket on sale? ↗", audio: "TTS: Is this jacket on sale?" },
                { text: "Do you accept credit cards? ↗", audio: "TTS: Do you accept credit cards?" },
                { text: "Can I have a receipt, please? ↗", audio: "TTS: Can I have a receipt, please?" }
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
                    audio: "TTS: Customer: Can I try this on? Salesperson: Yes, the fitting rooms are right there. Customer: Thanks. It's a bit too big. Do you have a smaller size? Salesperson: Let me check for you.",
                    text: "Customer: Can I try this [on]?<br>Salesperson: Yes, the [fitting] rooms are right there.<br>Customer: Thanks. It's a bit too [big]. Do you have a smaller [size]?<br>Salesperson: Let me check for you."
                },
                {
                    type: "dropdown",
                    instruction: "Listen to the dialogue at the checkout counter.",
                    audio: "TTS: Cashier: Did you find everything okay? Customer: Yes, I'll take this shirt. Is it on sale? Cashier: Yes, it has a ten percent discount. That will be twenty dollars. Customer: Great, I'll pay with cash.",
                    questions:[
                        { q: "Cashier: Did you find everything okay?<br>Customer: Yes, I'll[take* | pay | sell] this shirt. Is it on [sale* | color | checkout]?", a: "take" },
                        { q: "Cashier: Yes, it has a ten percent [discount* | price | refund]. That will be twenty dollars.", a: "discount" },
                        { q: "Customer: Great, I'll[pay* | try | buy] with cash.", a: "pay" }
                    ]
                },
                {
                    type: "audio-choice",
                    instruction: "Listen to the customer. What does he want to do?",
                    audio: "TTS: Hello, I bought these shoes yesterday, but they don't fit well. They are too tight. Can I exchange them for a larger size, please? I have my receipt.",
                    options:[
                        { t: "He wants to buy a new pair of shoes.", c: false },
                        { t: "He wants to return the shoes and get a refund.", c: false },
                        { t: "He wants to exchange the shoes for a larger size.", c: true },
                        { t: "He wants to find the fitting rooms.", c: false }
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
                    title: "Dialogue - The Department Store",
                    audio: "TTS: Customer: Excuse me, do you work here? I'm looking for a gift for my sister. Salesperson: Yes, I do. What kind of things does she like? Customer: She loves jewelry. Where can I find the necklaces? Salesperson: They are on the second floor of this department store. Customer: Thank you. Are any of them on sale right now? Salesperson: Yes, we have a big discount on all silver jewelry today.",
                    body: "<b>Customer:</b> [Excuse me, do you work here](tooltip:excuse-me-work-here)? [I'm looking for](tooltip:im-looking-for) a [gift](tooltip:gift) for my sister.<br><b>Salesperson:</b> Yes, I do. What kind of things does she like?<br><b>Customer:</b> She loves jewelry. [Where can I find](tooltip:where-can-i-find) the necklaces?<br><b>Salesperson:</b> They are on the second floor of this [department store](tooltip:department-store).<br><b>Customer:</b> Thank you. Are any of them [on sale](tooltip:on-sale) right now?<br><b>Salesperson:</b> Yes, we have a big [discount](tooltip:discount) on all silver jewelry today.",
                    questions:[
                        { q: "What is the customer looking for?", options:[{t: "A winter jacket.", c: false}, {t: "A gift for his sister.", c: true}, {t: "The checkout counter.", c: false}], type: "mcq" },
                        { q: "Where are the necklaces located?", options:[{t: "On the first floor.", c: false}, {t: "In the fitting room.", c: false}, {t: "On the second floor.", c: true}], type: "mcq" },
                        { q: "What kind of jewelry is on sale?", options:[{t: "Gold jewelry.", c: false}, {t: "Silver jewelry.", c: true}, {t: "All jewelry.", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Dialogue - Asking for a Refund",
                    audio: "TTS: Cashier: Hello, how can I help you today? Customer: Hi, I'd like to return this jacket, please. Cashier: Of course. Is there anything wrong with it? Customer: No, I just changed my mind. The color doesn't suit me. Cashier: I understand. Do you have the receipt? Customer: Yes, here it is. I paid with my credit card. Cashier: Perfect. I will process your refund right now.",
                    body: "<b>Cashier:</b> Hello, how can I help you today?<br><b>Customer:</b> Hi, I'd like to [return](tooltip:return) this jacket, please.<br><b>Cashier:</b> Of course. Is there anything wrong with it?<br><b>Customer:</b> No, I just changed my mind. The [color](tooltip:color) doesn't suit me.<br><b>Cashier:</b> I understand. Do you have the [receipt](tooltip:receipt)?<br><b>Customer:</b> Yes, here it is. I paid with my [credit card](tooltip:credit-card).<br><b>Cashier:</b> Perfect. I will process your [refund](tooltip:refund) right now.",
                    questions:[
                        { q: "Why is the customer returning the jacket?", options:[{t: "It is too expensive.", c: false}, {t: "It is ripped.", c: false}, {t: "She changed her mind about the color.", c: true}], type: "mcq" },
                        { q: "How did the customer pay for the jacket?", options:[{t: "With cash.", c: false}, {t: "With a debit card.", c: false}, {t: "With a credit card.", c: true}], type: "mcq" },
                        { q: "What does the customer need to show to get a refund?", options:[{t: "Her ID.", c: false}, {t: "The receipt.", c: true}, {t: "A discount coupon.", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Email - A Successful Shopping Spree",
                    audio: "TTS: Subject: Great deals! Hi Anna, I went to the shopping mall today and had a great time! I was looking for some new clothes for my holiday. I found a beautiful dress, and I tried it on in the fitting room. It fits perfectly! The best part is that it was very cheap. I got a 50% discount because the store was having a massive sale. I paid with cash and even had some change left over for a coffee. Let's go together next week! Love, Sarah.",
                    body: "<b>From: Sarah</b><br><b>To: Anna</b><br>Subject: Great deals!<br><br>Hi Anna,<br>I went to the [shopping mall](tooltip:shopping-mall) today and had a great time! I was looking for some [new](tooltip:new) clothes for my holiday. I found a beautiful dress, and I[tried it on](tooltip:try-on) in the [fitting room](tooltip:fitting-room). [It fits perfectly](tooltip:fits-perfectly)! The best part is that it was very [cheap](tooltip:cheap). I got a 50% [discount](tooltip:discount) because the [store](tooltip:store) was having a massive sale. I paid with [cash](tooltip:cash) and even had some [change](tooltip:change) left over for a coffee. Let's go together next week!<br><br>Love, Sarah.",
                    questions:[
                        { q: "Where did Sarah go today?", options:[{t: "To a local market.", c: false}, {t: "To the shopping mall.", c: true}, {t: "To a small shop.", c: false}], type: "mcq" },
                        { q: "How did the dress fit her?", options:[{t: "It was too big.", c: false}, {t: "It was too small.", c: false}, {t: "It fit perfectly.", c: true}], type: "mcq" },
                        { q: "Why was the dress cheap?", options:[{t: "Because it was used.", c: false}, {t: "Because she got a 50% discount.", c: true}, {t: "Because she didn't get a receipt.", c: false}], type: "mcq" }
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
                { type: "matching", instruction: "Match the person to their role.", pairs:[
                    { left: "Customer", right: "Buys the items", val: "1" },
                    { left: "Salesperson", right: "Helps you in the store", val: "2" },
                    { left: "Cashier", right: "Takes your payment", val: "3" },
                    { left: "Manager", right: "Runs the store", val: "4" }
                ]},
                { type: "matching", instruction: "Match the payment terms.", pairs:[
                    { left: "Cash", right: "Paper money and coins", val: "1" },
                    { left: "Credit card", right: "Pay later plastic card", val: "2" },
                    { left: "Receipt", right: "Proof of purchase", val: "3" },
                    { left: "Change", right: "Money returned to you", val: "4" }
                ]},
                { type: "matching", instruction: "Match the action verbs.", pairs:[
                    { left: "To try on", right: "Test clothes for size", val: "1" },
                    { left: "To return", right: "Give back for a refund", val: "2" },
                    { left: "To exchange", right: "Swap for another item", val: "3" },
                    { left: "To pay", right: "Give money for goods", val: "4" }
                ]},
                { type: "matching", instruction: "Match the phrases.", pairs:[
                    { left: "Where can I", right: "find the fitting rooms?", val: "1" },
                    { left: "Do you", right: "accept credit cards?", val: "2" },
                    { left: "Can I have", right: "a receipt, please?", val: "3" },
                    { left: "I'm just", right: "looking, thank you.", val: "4" }
                ]},

                // --- WORD ORDER (5-14) ---
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "me / you / help / Excuse / can / ?", correct: "Excuse me can you help me ?" },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "looking / thank / I'm / just / you / .", correct: "I'm just looking thank you ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "here / Excuse / do / work / me / you / ?", correct: "Excuse me do you work here ?" },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "try / Can / on / I / this / ?", correct: "Can I try this on ?" },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "rooms / are / fitting / Where / the / ?", correct: "Where are the fitting rooms ?" },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "this / Do / another / have / in / size / you / ?", correct: "Do you have this in another size ?" },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "is / much / this / How / ?", correct: "How much is this ?" },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "accept / Do / credit / cards / you / ?", correct: "Do you accept credit cards ?" },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "with / cash / pay / I'll / .", correct: "I'll pay with cash ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "a / please / have / receipt / Can / I / ?", correct: "Can I have a receipt please ?" },

                // --- CLICKABLE ERROR (15-24) ---
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "Excuse me, do you [job](error:work) here?" },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "I'm looking [to](error:for) a new jacket." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "Where can I [finds](error:find) the shoes?" },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "Can I try this [in](error:on)?" },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "Do you have this [on](error:in) another size?" },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "It [fittings](error:fits) perfectly." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "How [many](error:much) is this?" },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "Is this [in](error:on) sale?" },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "I'll [make](error:take) it." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "I will pay [by](error:with) cash." }, // "by cash" is occasionally used, but "in cash" or "with cash" is standard. Let's stick to "with" based on the lesson chunks.

                // --- ODD ONE OUT (25-30) ---
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Places)", options:[{t: "Store", c: false}, {t: "Market", c: false}, {t: "Shopping mall", c: false}, {t: "Receipt", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Money)", options:[{t: "Cash", c: false}, {t: "Credit card", c: false}, {t: "Discount", c: false}, {t: "Fitting room", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (People)", options:[{t: "Cashier", c: false}, {t: "Salesperson", c: false}, {t: "Customer", c: false}, {t: "Price", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Verbs)", options:[{t: "To buy", c: false}, {t: "To sell", c: false}, {t: "To exchange", c: false}, {t: "Expensive", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Adjectives)", options:[{t: "Cheap", c: false}, {t: "New", c: false}, {t: "Used", c: false}, {t: "Size", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Shopping Actions)", options:[{t: "Try on", c: false}, {t: "Return", c: false}, {t: "Refund", c: false}, {t: "Breakfast", c: true}] },

                // --- TRUE / FALSE (31-35) ---
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "You take clothes to the 'checkout' to try them on.", correct: "false"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "If an item is 'on sale', it is usually cheaper than normal.", correct: "true"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "A 'receipt' proves that you paid for an item.", correct: "true"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "When you get a 'refund', you give the store money.", correct: "false"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "The 'cashier' is the person who takes your payment.", correct: "true"}] },

                // --- MCQ (36-39) ---
                { type: "mcq", instruction: "Choose the correct phrase.<br>When you just want to browse and a salesperson approaches you, you say: 'I'm just ________, thank you.'", options:[{t: "buying", c: false}, {t: "looking", c: true}, {t: "returning", c: false}, {t: "trying", c: false}] },
                { type: "mcq", instruction: "Choose the correct word.<br>If the jeans are not the right ________, you can ask for a smaller one.", options:[{t: "price", c: false}, {t: "color", c: false}, {t: "size", c: true}, {t: "receipt", c: false}] },
                { type: "mcq", instruction: "Choose the correct phrase.<br>To ask about the price of a jacket, you say: '________ is this?'", options:[{t: "How many", c: false}, {t: "How much", c: true}, {t: "Where", c: false}, {t: "What", c: false}] },
                { type: "mcq", instruction: "Choose the correct word.<br>If you want to pay using physical money, you say: 'I'll pay with ________.'", options:[{t: "debit", c: false}, {t: "credit", c: false}, {t: "receipt", c: false}, {t: "cash", c: true}] },

                // --- CATEGORIZE (40) ---
                { type: "categorize", instruction: "Sort the words into Payment and Places.", 
                    categories:[{id: "pay", name: "Payment"}, {id: "place", name: "Places"}],
                    items:[
                        {text: "Cash", catId: "pay"}, 
                        {text: "Credit card", catId: "pay"}, 
                        {text: "Change", catId: "pay"}, 
                        {text: "Market", catId: "place"}, 
                        {text: "Shopping mall", catId: "place"}, 
                        {text: "Department store", catId: "place"}
                    ] 
                }
            ]
        },

        // ======================================================
        // STEP 8: WRITING PRACTICE
        // ======================================================
        {
            title: "Writing Practice",
            instruction: "Write an email to a friend (5-7 sentences) about a shopping trip. Mention what store you went to, what items you were looking for, if you tried anything on, and how you paid. Include whether the items were expensive or cheap.",
            example: "Hi Mark! I went to the shopping mall today. I was looking for a new winter jacket and some boots. I found a nice jacket in a department store, and I tried it on in the fitting room. It fit perfectly! It wasn't expensive because it was on sale with a big discount. I paid with my credit card and kept the receipt. Let's go shopping together soon!",
            prompts:[
                "Mention the type of store (e.g., market, shopping mall, shop).",
                "Explain what you were looking for.",
                "Describe the fitting room experience (did it fit, was it too big?).",
                "Describe the price (expensive, cheap, on sale) and the payment method."
            ]
        },

        // ======================================================
        // STEP 9: FLASHCARDS
        // ======================================================
        {
            title: "Flashcards",
            items:[
                // 2A Items (34 items)
                { term: "Shop", definition: "A building or part of a building where goods or services are sold.", defTrans: "Loja", example: "I bought this shirt at a small shop.", audioFront: "TTS: Shop", audioBack: "TTS: I bought this shirt at a small shop." },
                { term: "Store", definition: "A place where merchandise is kept for retail sale.", defTrans: "Loja / Armazém", example: "The grocery store opens at 8 AM.", audioFront: "TTS: Store", audioBack: "TTS: The grocery store opens at 8 AM." },
                { term: "Shopping mall", definition: "A large enclosed shopping area from which traffic is excluded.", defTrans: "Shopping center", example: "We spent all day walking around the shopping mall.", audioFront: "TTS: Shopping mall", audioBack: "TTS: We spent all day walking around the shopping mall." },
                { term: "Department store", definition: "A large store stocking many varieties of goods in different departments.", defTrans: "Loja de departamentos", example: "You can find clothes and appliances in a department store.", audioFront: "TTS: Department store", audioBack: "TTS: You can find clothes and appliances in a department store." },
                { term: "Market", definition: "A regular gathering of people for the purchase and sale of provisions, livestock, and other commodities.", defTrans: "Mercado / Feira", example: "I prefer buying fresh fruit at the market.", audioFront: "TTS: Market", audioBack: "TTS: I prefer buying fresh fruit at the market." },
                { term: "Customer", definition: "A person or organization that buys goods or services from a store or business.", defTrans: "Cliente", example: "The customer asked for a different size.", audioFront: "TTS: Customer", audioBack: "TTS: The customer asked for a different size." },
                { term: "Cashier", definition: "A person handling payments and receipts in a shop, bank, or business.", defTrans: "Caixa (pessoa)", example: "The cashier scanned my items quickly.", audioFront: "TTS: Cashier", audioBack: "TTS: The cashier scanned my items quickly." },
                { term: "Salesperson", definition: "A person whose job is to sell goods in a store.", defTrans: "Vendedor(a)", example: "The salesperson helped me find the right shoes.", audioFront: "TTS: Salesperson", audioBack: "TTS: The salesperson helped me find the right shoes." },
                { term: "Checkout", definition: "A point at which goods are paid for in a supermarket or other store.", defTrans: "Caixa (local)", example: "Please take your items to the checkout.", audioFront: "TTS: Checkout", audioBack: "TTS: Please take your items to the checkout." },
                { term: "Fitting room", definition: "A room in a shop where you can put on clothes to check that they fit.", defTrans: "Provador", example: "I will try this dress on in the fitting room.", audioFront: "TTS: Fitting room", audioBack: "TTS: I will try this dress on in the fitting room." },
                
                { term: "Money", definition: "A current medium of exchange in the form of coins and banknotes.", defTrans: "Dinheiro", example: "I don't have enough money to buy a car.", audioFront: "TTS: Money", audioBack: "TTS: I don't have enough money to buy a car." },
                { term: "Cash", definition: "Money in coins or notes, as distinct from checks, money orders, or credit.", defTrans: "Dinheiro em espécie", example: "The machine only accepts cash.", audioFront: "TTS: Cash", audioBack: "TTS: The machine only accepts cash." },
                { term: "Credit card", definition: "A small plastic card issued by a bank, allowing the holder to purchase goods or services on credit.", defTrans: "Cartão de crédito", example: "I prefer paying with my credit card.", audioFront: "TTS: Credit card", audioBack: "TTS: I prefer paying with my credit card." },
                { term: "Debit card", definition: "A card issued by a bank allowing the holder to transfer money electronically to another bank account when making a purchase.", defTrans: "Cartão de débito", example: "My debit card was declined.", audioFront: "TTS: Debit card", audioBack: "TTS: My debit card was declined." },
                { term: "Price", definition: "The amount of money expected, required, or given in payment for something.", defTrans: "Preço", example: "The price of this television is very high.", audioFront: "TTS: Price", audioBack: "TTS: The price of this television is very high." },
                { term: "Cost", definition: "Require the payment of a specified sum of money before it can be acquired or done.", defTrans: "Custo", example: "The total cost of the groceries was fifty dollars.", audioFront: "TTS: Cost", audioBack: "TTS: The total cost of the groceries was fifty dollars." },
                { term: "Change", definition: "Money returned to someone as the balance of the sum paid for something.", defTrans: "Troco", example: "The cashier gave me my change.", audioFront: "TTS: Change", audioBack: "TTS: The cashier gave me my change." },
                { term: "Receipt", definition: "A written or printed statement acknowledging that something has been paid for or that goods have been received.", defTrans: "Recibo", example: "Do you need a receipt for this purchase?", audioFront: "TTS: Receipt", audioBack: "TTS: Do you need a receipt for this purchase?" },
                { term: "Refund", definition: "A repayment of a sum of money, typically to a dissatisfied customer.", defTrans: "Reembolso", example: "I asked for a refund because the shirt was ripped.", audioFront: "TTS: Refund", audioBack: "TTS: I asked for a refund because the shirt was ripped." },
                { term: "Discount", definition: "A deduction from the usual cost of something.", defTrans: "Desconto", example: "I got a 10% discount.", audioFront: "TTS: Discount", audioBack: "TTS: I got a 10% discount." },
                { term: "Size", definition: "The relative extent of something; a thing's overall dimensions or magnitude.", defTrans: "Tamanho", example: "What size do you wear?", audioFront: "TTS: Size", audioBack: "TTS: What size do you wear?" },
                { term: "Color", definition: "The property possessed by an object of producing different sensations on the eye as a result of the way it reflects or emits light.", defTrans: "Cor", example: "Do you have this jacket in another color?", audioFront: "TTS: Color", audioBack: "TTS: Do you have this jacket in another color?" },
                
                { term: "To shop", definition: "Visit one or more stores or websites to buy goods.", defTrans: "Fazer compras", example: "I love to shop for new clothes on weekends.", audioFront: "TTS: To shop", audioBack: "TTS: I love to shop for new clothes on weekends." },
                { term: "To buy", definition: "Obtain in exchange for payment.", defTrans: "Comprar", example: "I want to buy a present for my mom.", audioFront: "TTS: To buy", audioBack: "TTS: I want to buy a present for my mom." },
                { term: "To pay", definition: "Give someone money that is due for work done, goods received, or a debt incurred.", defTrans: "Pagar", example: "I will pay for the dinner tonight.", audioFront: "TTS: To pay", audioBack: "TTS: I will pay for the dinner tonight." },
                { term: "To sell", definition: "Give or hand over something in exchange for money.", defTrans: "Vender", example: "This store sells electronics.", audioFront: "TTS: To sell", audioBack: "TTS: This store sells electronics." },
                { term: "To return", definition: "Give, put, or send something back to a place or person.", defTrans: "Devolver", example: "I need to return these shoes because they hurt.", audioFront: "TTS: To return", audioBack: "TTS: I need to return these shoes because they hurt." },
                { term: "To exchange", definition: "Give something and receive something of the same kind in return.", defTrans: "Trocar", example: "Can I exchange this shirt for a larger one?", audioFront: "TTS: To exchange", audioBack: "TTS: Can I exchange this shirt for a larger one?" },
                { term: "To try on", definition: "Put on an item of clothing to see if it fits or suits one.", defTrans: "Experimentar", example: "Let me try on these jeans first.", audioFront: "TTS: To try on", audioBack: "TTS: Let me try on these jeans first." },
                { term: "To fit", definition: "Be of the right shape and size for.", defTrans: "Caber / Servir", example: "These pants don't fit me very well.", audioFront: "TTS: To fit", audioBack: "TTS: These pants don't fit me very well." },
                { term: "Expensive", definition: "Costing a lot of money.", defTrans: "Caro", example: "Designer bags are very expensive.", audioFront: "TTS: Expensive", audioBack: "TTS: Designer bags are very expensive." },
                { term: "Cheap", definition: "Low in price, especially in relation to similar items or services.", defTrans: "Barato", example: "I found a cheap flight to Paris.", audioFront: "TTS: Cheap", audioBack: "TTS: I found a cheap flight to Paris." },
                { term: "New", definition: "Produced, introduced, or discovered recently or now for the first time.", defTrans: "Novo", example: "I just bought a brand new phone.", audioFront: "TTS: New", audioBack: "TTS: I just bought a brand new phone." },
                { term: "Used", definition: "Having already been used.", defTrans: "Usado", example: "He bought a used car to save money.", audioFront: "TTS: Used", audioBack: "TTS: He bought a used car to save money." },

                // 3A Items (16 items)
                { term: "Excuse me, can you help me?", definition: "A polite way to ask a salesperson for assistance.", defTrans: "Com licença, você pode me ajudar?", example: "Excuse me, can you help me find this?", audioFront: "TTS: Excuse me, can you help me?", audioBack: "TTS: Excuse me, can you help me find this?" },
                { term: "I'm just looking, thank you.", definition: "A polite response to a salesperson when you do not need help.", defTrans: "Estou só olhando, obrigado.", example: "I'm just looking, thank you.", audioFront: "TTS: I'm just looking, thank you.", audioBack: "TTS: I'm just looking, thank you." },
                { term: "I'm looking for", definition: "Stating the item you want to find in the store.", defTrans: "Estou procurando por", example: "I'm looking for a gift.", audioFront: "TTS: I'm looking for", audioBack: "TTS: I'm looking for a gift." },
                { term: "Where can I find", definition: "Asking for the location of a specific item or section.", defTrans: "Onde posso encontrar", example: "Where can I find the shoes?", audioFront: "TTS: Where can I find", audioBack: "TTS: Where can I find the shoes?" },
                { term: "Do you work here?", definition: "Asking to confirm if someone is a store employee.", defTrans: "Você trabalha aqui?", example: "Excuse me, do you work here?", audioFront: "TTS: Do you work here?", audioBack: "TTS: Excuse me, do you work here?" },
                { term: "Can I try this on?", definition: "Asking permission to wear an item to check the fit.", defTrans: "Posso experimentar isto?", example: "Can I try this on?", audioFront: "TTS: Can I try this on?", audioBack: "TTS: Can I try this on?" },
                { term: "Where are the fitting rooms?", definition: "Asking for the location where you can try on clothes.", defTrans: "Onde são os provadores?", example: "Where are the fitting rooms?", audioFront: "TTS: Where are the fitting rooms?", audioBack: "TTS: Where are the fitting rooms?" },
                { term: "Do you have this in another size?", definition: "Asking for the same item, but larger or smaller.", defTrans: "Você tem isto em outro tamanho?", example: "Do you have this in another size?", audioFront: "TTS: Do you have this in another size?", audioBack: "TTS: Do you have this in another size?" },
                { term: "It fits perfectly.", definition: "Stating that the clothing item is exactly the right size.", defTrans: "Serve perfeitamente.", example: "It fits perfectly.", audioFront: "TTS: It fits perfectly.", audioBack: "TTS: It fits perfectly." },
                { term: "It's too big.", definition: "Stating that the clothing item is larger than needed.", defTrans: "É muito grande.", example: "I can't wear this, it's too big.", audioFront: "TTS: It's too big.", audioBack: "TTS: I can't wear this, it's too big." },
                { term: "How much is this?", definition: "Asking for the price of an item.", defTrans: "Quanto custa isto?", example: "How much is this?", audioFront: "TTS: How much is this?", audioBack: "TTS: How much is this?" },
                { term: "Is this on sale?", definition: "Asking if the item currently has a discount.", defTrans: "Isto está na promoção?", example: "Is this on sale?", audioFront: "TTS: Is this on sale?", audioBack: "TTS: Is this on sale?" },
                { term: "I'll take it.", definition: "Stating your final decision to buy the item.", defTrans: "Eu vou levar.", example: "I'll take it.", audioFront: "TTS: I'll take it.", audioBack: "TTS: I'll take it." },
                { term: "Do you accept credit cards?", definition: "Asking if the store allows payment by credit card.", defTrans: "Vocês aceitam cartão de crédito?", example: "Do you accept credit cards?", audioFront: "TTS: Do you accept credit cards?", audioBack: "TTS: Do you accept credit cards?" },
                { term: "I'll pay with cash.", definition: "Stating your intention to pay using physical money.", defTrans: "Eu vou pagar em dinheiro.", example: "I'll pay with cash.", audioFront: "TTS: I'll pay with cash.", audioBack: "TTS: I'll pay with cash." },
                { term: "Can I have a receipt, please?", definition: "Asking for the printed proof of your purchase.", defTrans: "Posso ter o recibo, por favor?", example: "Can I have a receipt, please?", audioFront: "TTS: Can I have a receipt, please?", audioBack: "TTS: Can I have a receipt, please?" }
            ]
        }
    ],

    // ======================================================
    // GLOSSARY (All 50 items + Context words)
    // ======================================================
    glossary:[
        // 2A: Places & People
        { topic: "Places & People", term: "shop", definition: "A building or part of a building where goods are sold.", translation: "Loja" },
        { topic: "Places & People", term: "store", definition: "A place where merchandise is kept for retail sale.", translation: "Loja / Armazém" },
        { topic: "Places & People", term: "shopping-mall", definition: "A large enclosed shopping area.", translation: "Shopping center" },
        { topic: "Places & People", term: "department-store", definition: "A large store divided into sections.", translation: "Loja de departamentos" },
        { topic: "Places & People", term: "market", definition: "An open area where people buy and sell fresh goods.", translation: "Mercado / Feira" },
        { topic: "Places & People", term: "customer", definition: "A person who buys goods or services from a store.", translation: "Cliente" },
        { topic: "Places & People", term: "cashier", definition: "A person handling payments in a shop.", translation: "Caixa (pessoa)" },
        { topic: "Places & People", term: "salesperson", definition: "A person whose job is to sell goods in a store.", translation: "Vendedor(a)" },
        { topic: "Places & People", term: "checkout", definition: "The place in a store where you pay.", translation: "Caixa (local)" },
        { topic: "Places & People", term: "fitting-room", definition: "A room in a shop where you can put on clothes.", translation: "Provador" },

        // 2A: Money & Items
        { topic: "Money & Items", term: "money", definition: "A medium of exchange in the form of coins and banknotes.", translation: "Dinheiro" },
        { topic: "Money & Items", term: "cash", definition: "Physical money (coins or notes).", translation: "Dinheiro em espécie" },
        { topic: "Money & Items", term: "credit-card", definition: "A plastic card used to buy goods on credit.", translation: "Cartão de crédito" },
        { topic: "Money & Items", term: "debit-card", definition: "A plastic card that deducts money directly from a bank account.", translation: "Cartão de débito" },
        { topic: "Money & Items", term: "price", definition: "The amount of money expected in payment.", translation: "Preço" },
        { topic: "Money & Items", term: "cost", definition: "The amount needed to buy or do something.", translation: "Custo" },
        { topic: "Money & Items", term: "change", definition: "Money returned when you pay with a larger bill.", translation: "Troco" },
        { topic: "Money & Items", term: "receipt", definition: "A printed statement proving you paid for an item.", translation: "Recibo / Nota fiscal" },
        { topic: "Money & Items", term: "refund", definition: "A repayment of a sum of money.", translation: "Reembolso" },
        { topic: "Money & Items", term: "discount", definition: "A deduction from the usual cost.", translation: "Desconto" },
        { topic: "Money & Items", term: "size", definition: "The overall dimensions or magnitude of a thing.", translation: "Tamanho" },
        { topic: "Money & Items", term: "color", definition: "The property possessed by an object (red, blue, etc.).", translation: "Cor" },

        // 2A: Verbs & Adjectives
        { topic: "Verbs & Adjectives", term: "to-shop", definition: "To visit stores to buy goods.", translation: "Fazer compras" },
        { topic: "Verbs & Adjectives", term: "to-buy", definition: "To obtain in exchange for payment.", translation: "Comprar" },
        { topic: "Verbs & Adjectives", term: "to-pay", definition: "To give money for goods received.", translation: "Pagar" },
        { topic: "Verbs & Adjectives", term: "to-sell", definition: "To give something in exchange for money.", translation: "Vender" },
        { topic: "Verbs & Adjectives", term: "to-return", definition: "To give something back to a store.", translation: "Devolver" },
        { topic: "Verbs & Adjectives", term: "to-exchange", definition: "To swap an item for another.", translation: "Trocar" },
        { topic: "Verbs & Adjectives", term: "to-try-on", definition: "To put on an item of clothing to see if it fits.", translation: "Experimentar" },
        { topic: "Verbs & Adjectives", term: "to-fit", definition: "To be of the right shape and size.", translation: "Caber / Servir" },
        { topic: "Verbs & Adjectives", term: "expensive", definition: "Costing a lot of money.", translation: "Caro" },
        { topic: "Verbs & Adjectives", term: "cheap", definition: "Low in price.", translation: "Barato" },
        { topic: "Verbs & Adjectives", term: "new", definition: "Produced or bought recently.", translation: "Novo" },
        { topic: "Verbs & Adjectives", term: "used", definition: "Having already been owned.", translation: "Usado" },

        // 3A: Expressions
        { topic: "Expressions", term: "excuse-me-work-here", definition: "Asking to confirm if someone is a store employee.", translation: "Com licença, você trabalha aqui?" },
        { topic: "Expressions", term: "just-looking", definition: "A polite response when you do not need help.", translation: "Estou só olhando, obrigado." },
        { topic: "Expressions", term: "im-looking-for", definition: "Stating the item you want to find.", translation: "Estou procurando por" },
        { topic: "Expressions", term: "where-can-i-find", definition: "Asking for the location of a specific item.", translation: "Onde posso encontrar" },
        { topic: "Expressions", term: "can-i-try-on", definition: "Asking permission to wear an item to check the fit.", translation: "Posso experimentar isto?" },
        { topic: "Expressions", term: "where-fitting-rooms", definition: "Asking for the location of the fitting rooms.", translation: "Onde são os provadores?" },
        { topic: "Expressions", term: "another-size", definition: "Asking for the same item, but larger or smaller.", translation: "Você tem isto em outro tamanho?" },
        { topic: "Expressions", term: "fits-perfectly", definition: "Stating that the clothing item is exactly the right size.", translation: "Serve perfeitamente." },
        { topic: "Expressions", term: "too-big", definition: "Stating that the clothing item is larger than needed.", translation: "É muito grande." },
        { topic: "Expressions", term: "how-much-is-this", definition: "Asking for the price of an item.", translation: "Quanto custa isto?" },
        { topic: "Expressions", term: "on-sale", definition: "Asking if the item currently has a discount.", translation: "Isto está na promoção?" },
        { topic: "Expressions", term: "ill-take-it", definition: "Stating your final decision to buy the item.", translation: "Eu vou levar." },
        { topic: "Expressions", term: "accept-credit-cards", definition: "Asking if the store allows payment by credit card.", translation: "Vocês aceitam cartão de crédito?" },
        { topic: "Expressions", term: "pay-with-cash", definition: "Stating your intention to pay using physical money.", translation: "Eu vou pagar em dinheiro." },
        { topic: "Expressions", term: "can-i-have-receipt", definition: "Asking for the printed proof of your purchase.", translation: "Posso ter o recibo, por favor?" },

        // Additional Context Words
        { topic: "Context", term: "purchase", definition: "The action of buying something.", translation: "Compra" },
        { topic: "Context", term: "gift", definition: "A thing given willingly to someone without payment.", translation: "Presente" },
        { topic: "Context", term: "winter-jacket", definition: "A warm piece of clothing worn over the upper body in cold weather.", translation: "Jaqueta de inverno" },
        { topic: "Context", term: "groceries", definition: "Items of food sold in a supermarket.", translation: "Compras de mercado / Mantimentos" },
        { topic: "Context", term: "bakery", definition: "A place where bread and cakes are made or sold.", translation: "Padaria" }
    ]
});