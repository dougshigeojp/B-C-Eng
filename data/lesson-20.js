/**
 * English Block Assembling - LESSON DATA: Topic 20
 * Topic: Events and Celebrations
 * Level: Upper A2 ~ Lower B1
 */

window.initLesson({
    // --- METADATA ---
    lessonId: "lesson-20",
    block: "3",
    topicTitle: "Events and Celebrations",

    steps:[
        // ======================================================
        // STEP 0: INTRO & CAN-DO
        // ======================================================
        {
            title: "Intro & Can-Do",
            objectives: "• Talk about special [occasions](tooltip:occasion) like birthdays, [weddings](tooltip:wedding), and holidays.<br>• Plan and organize a [party](tooltip:party) or a family [gathering](tooltip:gathering).<br>• Use polite phrases to [invite](tooltip:invite) someone, accept, or decline an invitation.<br>• Understand what to say at an [event](tooltip:event), such as making a [toast](tooltip:toast) or giving a [gift](tooltip:gift).",
            welcome: "Welcome to Lesson 20! Celebrating special moments with family and friends is a joyful part of life. In this lesson, we will explore the vocabulary you need to talk about festivals, holidays, and milestones. You will also learn practical phrases for planning a party, sending out invitations, and expressing your congratulations. Let's start the celebration!",
            audio: {
                objectives: "TTS: In this lesson, you will learn to: Talk about special occasions like birthdays, weddings, and holidays. Plan and organize a party or a family gathering. Use polite phrases to invite someone, accept, or decline an invitation. Understand what to say at an event, such as making a toast or giving a gift.",
                welcome: "TTS: Welcome to Lesson 20! Celebrating special moments with family and friends is a joyful part of life. In this lesson, we will explore the vocabulary you need to talk about festivals, holidays, and milestones. You will also learn practical phrases for planning a party, sending out invitations, and expressing your congratulations. Let's start the celebration!"
            }
        },

        // ======================================================
        // STEP 1: CONTEXT DIALOGUE
        // ======================================================
        {
            title: "Context Dialogue",
            context: "Emma is planning a surprise party for her sister and is inviting Liam to the event.",
            contextAudio: "TTS: Emma: Hi Liam! I'm having a party on Saturday for my sister's graduation. Can you come? Liam: A graduation party? That sounds great! I'd love to come. What time should I arrive? Emma: The guests are arriving at seven PM. Please RSVP by Thursday so I can prepare food and drinks. Liam: I will definitely be there. Is it a formal or casual event? Emma: It's very casual. Just a fun gathering with family and friends. Liam: Perfect. Can I bring anything? Like a dessert or some drinks? Emma: Just bring yourself! But please don't tell my sister, it's a surprise. Liam: My lips are sealed! I can't wait to congratulate her.",
            dialogue:[
                { speaker: "Emma", text: "Hi Liam![I'm having a party](tooltip:having-party) on Saturday for my sister's [graduation](tooltip:graduation). [Can you come](tooltip:can-you-come)?" },
                { speaker: "Liam", text: "A graduation party? That sounds great! [I'd love to come](tooltip:id-love-to-come). What time should I arrive?" },
                { speaker: "Emma", text: "The [guests](tooltip:guest) are arriving at 7:00 PM. [Please RSVP](tooltip:please-rsvp) by Thursday so I can [prepare](tooltip:prepare) food and drinks." },
                { speaker: "Liam", text: "I will definitely be there. Is it a [formal](tooltip:formal) or [casual](tooltip:casual) event?" },
                { speaker: "Emma", text: "It's very casual. Just a [fun](tooltip:fun)[gathering](tooltip:gathering) with family and friends." },
                { speaker: "Liam", text: "Perfect. Can I bring anything? Like a dessert or some drinks?" },
                { speaker: "Emma", text: "Just bring yourself! But please don't tell my sister, it's a surprise." },
                { speaker: "Liam", text: "My lips are sealed! I can't wait to [congratulate](tooltip:congratulate) her." }
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
                    title: "Events & Occasions",
                    audio: "TTS: Party. Celebration. Gathering. Birthday. Anniversary. Wedding. Graduation. Holiday. Festival. Christmas. Halloween. Easter.",
                    items:[
                        { term: "Party", trans: "Festa" },
                        { term: "Celebration", trans: "Celebração / Comemoração" },
                        { term: "Gathering", trans: "Reunião (social) / Encontro" },
                        { term: "Birthday", trans: "Aniversário" },
                        { term: "Anniversary", trans: "Aniversário (de casamento ou evento)" },
                        { term: "Wedding", trans: "Casamento (cerimônia)" },
                        { term: "Graduation", trans: "Formatura" },
                        { term: "Holiday", trans: "Feriado / Férias" },
                        { term: "Festival", trans: "Festival" },
                        { term: "Christmas", trans: "Natal" },
                        { term: "Halloween", trans: "Dia das Bruxas / Halloween" },
                        { term: "Easter", trans: "Páscoa" }
                    ]
                },
                {
                    title: "People & Items",
                    audio: "TTS: Host. Guest. Bride. Groom. Relative. Invitation. Gift. Card. Decoration. Balloon. Candle. Firework.",
                    items:[
                        { term: "Host", trans: "Anfitrião / Anfitriã" },
                        { term: "Guest", trans: "Convidado(a)" },
                        { term: "Bride", trans: "Noiva" },
                        { term: "Groom", trans: "Noivo" },
                        { term: "Relative", trans: "Parente" },
                        { term: "Invitation", trans: "Convite" },
                        { term: "Gift", trans: "Presente" },
                        { term: "Card", trans: "Cartão" },
                        { term: "Decoration", trans: "Decoração" },
                        { term: "Balloon", trans: "Balão / Bexiga" },
                        { term: "Candle", trans: "Vela" },
                        { term: "Firework", trans: "Fogo de artifício" }
                    ]
                },
                {
                    title: "Verbs & Adjectives",
                    audio: "TTS: To celebrate. To invite. To accept. To decline. To decorate. To congratulate. Merry. Special. Formal. Casual. Festive. Important.",
                    items:[
                        { term: "To celebrate", trans: "Celebrar / Comemorar" },
                        { term: "To invite", trans: "Convidar" },
                        { term: "To accept", trans: "Aceitar" },
                        { term: "To decline", trans: "Recusar" },
                        { term: "To decorate", trans: "Decorar / Enfeitar" },
                        { term: "To congratulate", trans: "Parabenizar" },
                        { term: "Merry", trans: "Alegre (frequentemente usado com Natal)" },
                        { term: "Special", trans: "Especial" },
                        { term: "Formal", trans: "Formal" },
                        { term: "Casual", trans: "Casual / Informal" },
                        { term: "Festive", trans: "Festivo" },
                        { term: "Important", trans: "Importante" }
                    ]
                }
            ],

            // --- 2B: EXAMPLES ---
            exampleGroups:[
                {
                    title: "Events & Occasions",
                    audio: "TTS: We are having a big party for her birthday. The town held a celebration for the new mayor. It is just a small family gathering. I will bake a cake for his birthday. Tomorrow is our tenth wedding anniversary. They invited me to their beautiful wedding. She threw her hat in the air at graduation. The bank is closed because it is a national holiday. We danced a lot at the summer festival. We open our presents on Christmas morning. Children wear scary costumes on Halloween. We eat a lot of chocolate eggs during Easter.",
                    items:[
                        { term: "Party", sent: "We are having a big party for her birthday.", trans: "Nós vamos dar uma grande festa para o aniversário dela." },
                        { term: "Celebration", sent: "The town held a celebration for the new mayor.", trans: "A cidade fez uma celebração para o novo prefeito." },
                        { term: "Gathering", sent: "It is just a small family gathering.", trans: "É apenas um pequeno encontro de família." },
                        { term: "Birthday", sent: "I will bake a cake for his birthday.", trans: "Eu vou assar um bolo para o aniversário dele." },
                        { term: "Anniversary", sent: "Tomorrow is our tenth wedding anniversary.", trans: "Amanhã é nosso décimo aniversário de casamento." },
                        { term: "Wedding", sent: "They invited me to their beautiful wedding.", trans: "Eles me convidaram para o lindo casamento deles." },
                        { term: "Graduation", sent: "She threw her hat in the air at graduation.", trans: "Ela jogou o chapéu para o ar na formatura." },
                        { term: "Holiday", sent: "The bank is closed because it is a national holiday.", trans: "O banco está fechado porque é um feriado nacional." },
                        { term: "Festival", sent: "We danced a lot at the summer festival.", trans: "Nós dançamos muito no festival de verão." },
                        { term: "Christmas", sent: "We open our presents on Christmas morning.", trans: "Nós abrimos nossos presentes na manhã de Natal." },
                        { term: "Halloween", sent: "Children wear scary costumes on Halloween.", trans: "As crianças usam fantasias assustadoras no Halloween." },
                        { term: "Easter", sent: "We eat a lot of chocolate eggs during Easter.", trans: "Nós comemos muitos ovos de chocolate durante a Páscoa." }
                    ]
                },
                {
                    title: "People & Items",
                    audio: "TTS: The host welcomed everyone at the door. Every guest received a welcome drink. The bride wore a beautiful white dress. The groom looked nervous before the ceremony. We invited every relative to the reunion. I sent an email invitation to my friends. I bought an expensive gift for my sister. He wrote a sweet message inside the birthday card. She put up a beautiful decoration in the hall. We filled the room with a red balloon. He blew out the candle on his cake. We watched a loud firework in the sky.",
                    items:[
                        { term: "Host", sent: "The host welcomed everyone at the door.", trans: "O anfitrião deu as boas-vindas a todos na porta." },
                        { term: "Guest", sent: "Every guest received a welcome drink.", trans: "Cada convidado recebeu uma bebida de boas-vindas." },
                        { term: "Bride", sent: "The bride wore a beautiful white dress.", trans: "A noiva usou um lindo vestido branco." },
                        { term: "Groom", sent: "The groom looked nervous before the ceremony.", trans: "O noivo parecia nervoso antes da cerimônia." },
                        { term: "Relative", sent: "We invited every relative to the reunion.", trans: "Convidamos todos os parentes para a reunião." },
                        { term: "Invitation", sent: "I sent an email invitation to my friends.", trans: "Enviei um convite por e-mail para meus amigos." },
                        { term: "Gift", sent: "I bought an expensive gift for my sister.", trans: "Comprei um presente caro para a minha irmã." },
                        { term: "Card", sent: "He wrote a sweet message inside the birthday card.", trans: "Ele escreveu uma mensagem doce dentro do cartão de aniversário." },
                        { term: "Decoration", sent: "She put up a beautiful decoration in the hall.", trans: "Ela colocou uma bela decoração no salão." },
                        { term: "Balloon", sent: "We filled the room with a red balloon.", trans: "Enchemos a sala com um balão vermelho." },
                        { term: "Candle", sent: "He blew out the candle on his cake.", trans: "Ele soprou a vela no seu bolo." },
                        { term: "Firework", sent: "We watched a loud firework in the sky.", trans: "Assistimos a um fogo de artifício barulhento no céu." }
                    ]
                },
                {
                    title: "Verbs & Adjectives",
                    audio: "TTS: We want to celebrate his promotion tonight. I need to invite all my colleagues. I am happy to accept your invitation. I must decline because I am busy. We will decorate the living room with lights. I want to congratulate you on your success. I wish you a Merry Christmas! This is a very special occasion for us. You must wear a suit to a formal event. You can wear jeans; it is a casual party. The music created a very festive atmosphere. Please attend, this meeting is important.",
                    items:[
                        { term: "To celebrate", sent: "We want to celebrate his promotion tonight.", trans: "Nós queremos celebrar a promoção dele esta noite." },
                        { term: "To invite", sent: "I need to invite all my colleagues.", trans: "Eu preciso convidar todos os meus colegas." },
                        { term: "To accept", sent: "I am happy to accept your invitation.", trans: "Estou feliz em aceitar seu convite." },
                        { term: "To decline", sent: "I must decline because I am busy.", trans: "Eu devo recusar porque estou ocupado." },
                        { term: "To decorate", sent: "We will decorate the living room with lights.", trans: "Vamos decorar a sala de estar com luzes." },
                        { term: "To congratulate", sent: "I want to congratulate you on your success.", trans: "Quero parabenizá-lo pelo seu sucesso." },
                        { term: "Merry", sent: "I wish you a Merry Christmas!", trans: "Desejo a você um Feliz Natal!" },
                        { term: "Special", sent: "This is a very special occasion for us.", trans: "Esta é uma ocasião muito especial para nós." },
                        { term: "Formal", sent: "You must wear a suit to a formal event.", trans: "Você deve usar terno em um evento formal." },
                        { term: "Casual", sent: "You can wear jeans; it is a casual party.", trans: "Você pode usar jeans; é uma festa casual." },
                        { term: "Festive", sent: "The music created a very festive atmosphere.", trans: "A música criou uma atmosfera muito festiva." },
                        { term: "Important", sent: "Please attend, this meeting is important.", trans: "Por favor, compareça, esta reunião é importante." }
                    ]
                }
            ],

            // --- 2C: PRACTICE ---
            drillGroups:[
                {
                    title: "Events & Occasions",
                    drills:[
                        { q: "A social gathering of invited guests, typically involving eating, drinking, and entertainment is a ________.", options:[{t: "Graduation", c: false}, {t: "Party", c: true}, {t: "Wedding", c: false}, {t: "Anniversary", c: false}], type: "mcq" },
                        { q: "The action of marking a significant or happy day or event is a ________.", options:[{t: "Gathering", c: false}, {t: "Celebration", c: true}, {t: "Holiday", c: false}, {t: "Festival", c: false}], type: "mcq" },
                        { q: "An assembly or meeting of people, often informal, is a ________.", options:[{t: "Gathering", c: true}, {t: "Birthday", c: false}, {t: "Wedding", c: false}, {t: "Halloween", c: false}], type: "mcq" },
                        { q: "The anniversary of the day on which a person was born is a ________.", options:[{t: "Christmas", c: false}, {t: "Graduation", c: false}, {t: "Birthday", c: true}, {t: "Holiday", c: false}], type: "mcq" },
                        { q: "The date on which an event took place in a previous year (like a marriage) is an ________.", options:[{t: "Anniversary", c: true}, {t: "Gathering", c: false}, {t: "Easter", c: false}, {t: "Party", c: false}], type: "mcq" },
                        { q: "A marriage ceremony, especially considered as including the associated celebrations, is a ________.", options:[{t: "Wedding", c: true}, {t: "Festival", c: false}, {t: "Holiday", c: false}, {t: "Graduation", c: false}], type: "mcq" },
                        { q: "The receiving or conferring of an academic degree or diploma is a ________.", options:[{t: "Graduation", c: true}, {t: "Birthday", c: false}, {t: "Halloween", c: false}, {t: "Gathering", c: false}], type: "mcq" },
                        { q: "A day of festivity or recreation when no work is done is a ________.", options:[{t: "Holiday", c: true}, {t: "Wedding", c: false}, {t: "Anniversary", c: false}, {t: "Party", c: false}], type: "mcq" },
                        { q: "A day or period of celebration, typically a religious commemoration or a music event, is a ________.", options:[{t: "Festival", c: true}, {t: "Birthday", c: false}, {t: "Graduation", c: false}, {t: "Gathering", c: false}], type: "mcq" },
                        { q: "The annual Christian festival celebrating Christ's birth is ________.", options:[{t: "Easter", c: false}, {t: "Halloween", c: false}, {t: "Christmas", c: true}, {t: "Wedding", c: false}], type: "mcq" },
                        { q: "The night of October 31, when children wear costumes, is ________.", options:[{t: "Christmas", c: false}, {t: "Halloween", c: true}, {t: "Easter", c: false}, {t: "Holiday", c: false}], type: "mcq" },
                        { q: "The Christian festival celebrating the resurrection of Jesus is ________.", options:[{t: "Easter", c: true}, {t: "Halloween", c: false}, {t: "Christmas", c: false}, {t: "Festival", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "People & Items",
                    drills:[
                        { q: "A person who receives or entertains other people as guests is a ________.", options:[{t: "Host", c: true}, {t: "Bride", c: false}, {t: "Groom", c: false}, {t: "Relative", c: false}], type: "mcq" },
                        { q: "A person who is invited to visit someone's home or attend a party is a ________.", options:[{t: "Host", c: false}, {t: "Guest", c: true}, {t: "Bride", c: false}, {t: "Groom", c: false}], type: "mcq" },
                        { q: "A woman on her wedding day or just before it is the ________.", options:[{t: "Relative", c: false}, {t: "Host", c: false}, {t: "Bride", c: true}, {t: "Guest", c: false}], type: "mcq" },
                        { q: "A man on his wedding day or just before it is the ________.", options:[{t: "Groom", c: true}, {t: "Host", c: false}, {t: "Guest", c: false}, {t: "Relative", c: false}], type: "mcq" },
                        { q: "A person connected by blood or marriage is a ________.", options:[{t: "Bride", c: false}, {t: "Groom", c: false}, {t: "Relative", c: true}, {t: "Guest", c: false}], type: "mcq" },
                        { q: "A written or verbal request inviting someone to go somewhere or do something is an ________.", options:[{t: "Invitation", c: true}, {t: "Gift", c: false}, {t: "Card", c: false}, {t: "Decoration", c: false}], type: "mcq" },
                        { q: "A thing given willingly to someone without payment; a present is a ________.", options:[{t: "Gift", c: true}, {t: "Balloon", c: false}, {t: "Candle", c: false}, {t: "Invitation", c: false}], type: "mcq" },
                        { q: "A piece of thick, stiff paper or fine pasteboard, often with a greeting, is a ________.", options:[{t: "Card", c: true}, {t: "Decoration", c: false}, {t: "Balloon", c: false}, {t: "Firework", c: false}], type: "mcq" },
                        { q: "The process or art of decorating something is ________.", options:[{t: "Decoration", c: true}, {t: "Invitation", c: false}, {t: "Gift", c: false}, {t: "Card", c: false}], type: "mcq" },
                        { q: "A small colored rubber bag which is inflated with air or helium is a ________.", options:[{t: "Candle", c: false}, {t: "Balloon", c: true}, {t: "Firework", c: false}, {t: "Gift", c: false}], type: "mcq" },
                        { q: "A cylinder or block of wax with a central wick which is lit to produce light is a ________.", options:[{t: "Candle", c: true}, {t: "Balloon", c: false}, {t: "Decoration", c: false}, {t: "Card", c: false}], type: "mcq" },
                        { q: "A device containing gunpowder and other combustible chemicals that causes spectacular explosions when ignited is a ________.", options:[{t: "Firework", c: true}, {t: "Candle", c: false}, {t: "Balloon", c: false}, {t: "Decoration", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Verbs & Adjectives",
                    drills:[
                        { q: "To acknowledge a significant or happy day with a social gathering is ________.", options:[{t: "To invite", c: false}, {t: "To celebrate", c: true}, {t: "To accept", c: false}, {t: "To decline", c: false}], type: "mcq" },
                        { q: "To make a polite, formal, or friendly request to someone to go somewhere is ________.", options:[{t: "To decorate", c: false}, {t: "To congratulate", c: false}, {t: "To invite", c: true}, {t: "To celebrate", c: false}], type: "mcq" },
                        { q: "To say yes to an invitation is ________.", options:[{t: "To decline", c: false}, {t: "To accept", c: true}, {t: "To decorate", c: false}, {t: "To invite", c: false}], type: "mcq" },
                        { q: "To politely refuse an invitation is ________.", options:[{t: "To accept", c: false}, {t: "To decline", c: true}, {t: "To congratulate", c: false}, {t: "To celebrate", c: false}], type: "mcq" },
                        { q: "To make something look more attractive by adding extra items is ________.", options:[{t: "To decorate", c: true}, {t: "To invite", c: false}, {t: "To decline", c: false}, {t: "To accept", c: false}], type: "mcq" },
                        { q: "To express one's pleasure to another person at that person's success is ________.", options:[{t: "To congratulate", c: true}, {t: "To decorate", c: false}, {t: "To invite", c: false}, {t: "To celebrate", c: false}], type: "mcq" },
                        { q: "An adjective that means cheerful and lively (often used with Christmas) is ________.", options:[{t: "Merry", c: true}, {t: "Formal", c: false}, {t: "Casual", c: false}, {t: "Important", c: false}], type: "mcq" },
                        { q: "Better, greater, or otherwise different from what is usual is ________.", options:[{t: "Special", c: true}, {t: "Casual", c: false}, {t: "Merry", c: false}, {t: "Festive", c: false}], type: "mcq" },
                        { q: "Done in accordance with rules of convention or etiquette is ________.", options:[{t: "Casual", c: false}, {t: "Formal", c: true}, {t: "Merry", c: false}, {t: "Festive", c: false}], type: "mcq" },
                        { q: "Relaxed and unconcerned; not regular or formal is ________.", options:[{t: "Important", c: false}, {t: "Special", c: false}, {t: "Casual", c: true}, {t: "Formal", c: false}], type: "mcq" },
                        { q: "Relating to a festival; cheerful and jovial is ________.", options:[{t: "Festive", c: true}, {t: "Important", c: false}, {t: "Formal", c: false}, {t: "Casual", c: false}], type: "mcq" },
                        { q: "Of great significance or value is ________.", options:[{t: "Important", c: true}, {t: "Casual", c: false}, {t: "Merry", c: false}, {t: "Festive", c: false}], type: "mcq" }
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
                    title: "Greetings & Wishes",
                    audio: "TTS: Happy birthday. Happy New Year. Merry Christmas. Congratulations. Cheers. Make a toast.",
                    explanation: "Classic phrases used to wish someone well on a specific holiday or milestone.<br><span style='color:var(--primary-blue); font-style:italic;'>(Frases clássicas usadas para desejar felicidades a alguém em um feriado ou marco específico.)</span>",
                    samples:[
                        { en: "<b>Happy birthday!</b> I bought you a gift.", pt: "<span style='color:var(--primary-blue)'>(Feliz aniversário! Eu te comprei um presente.)</span>" },
                        { en: "<b>Happy New Year!</b> May it be a great year.", pt: "<span style='color:var(--primary-blue)'>(Feliz Ano Novo! Que seja um ótimo ano.)</span>" },
                        { en: "I wish you a very <b>Merry Christmas!</b>", pt: "<span style='color:var(--primary-blue)'>(Desejo a você um Feliz Natal!)</span>" },
                        { en: "<b>Congratulations</b> on your new job!", pt: "<span style='color:var(--primary-blue)'>(Parabéns pelo seu novo emprego!)</span>" },
                        { en: "<b>Cheers!</b> Here is to our friendship.", pt: "<span style='color:var(--primary-blue)'>(Saúde/Um brinde! Um brinde à nossa amizade.)</span>" },
                        { en: "I would like to <b>make a toast</b> to the bride.", pt: "<span style='color:var(--primary-blue)'>(Gostaria de fazer um brinde à noiva.)</span>" }
                    ]
                },
                {
                    title: "Inviting & Planning",
                    audio: "TTS: I'm having a party. Can you come? Would you like to come? Please RSVP. Make a guest list. Send out invitations.",
                    explanation: "Phrases used by a host to organize an event and invite people to it.<br><span style='color:var(--primary-blue); font-style:italic;'>(Frases usadas por um anfitrião para organizar um evento e convidar pessoas para ele.)</span>",
                    samples:[
                        { en: "<b>I'm having a party</b> next week.", pt: "<span style='color:var(--primary-blue)'>(Vou dar uma festa na próxima semana.)</span>" },
                        { en: "I'm having a barbecue. <b>Can you come?</b>", pt: "<span style='color:var(--primary-blue)'>(Vou fazer um churrasco. Você pode vir?)</span>" },
                        { en: "<b>Would you like to come</b> to my wedding?", pt: "<span style='color:var(--primary-blue)'>(Você gostaria de ir ao meu casamento?)</span>" },
                        { en: "<b>Please RSVP</b> by Friday.", pt: "<span style='color:var(--primary-blue)'>(Por favor, confirme presença até sexta-feira.)</span>" },
                        { en: "We need to <b>make a guest list</b> today.", pt: "<span style='color:var(--primary-blue)'>(Precisamos fazer uma lista de convidados hoje.)</span>" },
                        { en: "I will <b>send out invitations</b> tomorrow.", pt: "<span style='color:var(--primary-blue)'>(Vou enviar os convites amanhã.)</span>" }
                    ]
                },
                {
                    title: "Responding & Attending",
                    audio: "TTS: Thanks for the invitation. I'd love to come. I'm afraid I can't make it. This is for you. Have a great time. Thanks for having me.",
                    explanation: "Phrases used by a guest to respond to an invite, give a present, or say goodbye to the host.<br><span style='color:var(--primary-blue); font-style:italic;'>(Frases usadas por um convidado para responder a um convite, dar um presente ou se despedir do anfitrião.)</span>",
                    samples:[
                        { en: "<b>Thanks for the invitation.</b> It's very kind of you.", pt: "<span style='color:var(--primary-blue)'>(Obrigado pelo convite. É muito gentil da sua parte.)</span>" },
                        { en: "<b>I'd love to come.</b> What time?", pt: "<span style='color:var(--primary-blue)'>(Eu adoraria ir. A que horas?)</span>" },
                        { en: "<b>I'm afraid I can't make it.</b> I am working.", pt: "<span style='color:var(--primary-blue)'>(Receio que não poderei ir. Eu estou trabalhando.)</span>" },
                        { en: "Happy birthday! <b>This is for you.</b>", pt: "<span style='color:var(--primary-blue)'>(Feliz aniversário! Isto é para você.)</span>" },
                        { en: "<b>Have a great time</b> at the party!", pt: "<span style='color:var(--primary-blue)'>(Divirta-se muito / Tenha um ótimo momento na festa!)</span>" },
                        { en: "It was a lovely dinner. <b>Thanks for having me.</b>", pt: "<span style='color:var(--primary-blue)'>(Foi um jantar adorável. Obrigado por me receber.)</span>" }
                    ]
                }
            ],

            // --- 3B: DIALOGUES ---
            dialogueGroups:[
                {
                    title: "Dialogue 1: A Birthday Invite",
                    audio: "TTS: Hi, I'm having a party on Saturday. Can you come? I'd love to come! What time does it start?",
                    lines:[
                        { speaker: "Leo", text: "Hi, I'm having a party on Saturday. Can you come?", pt: "(Oi, vou dar uma festa no sábado. Você pode vir?)" },
                        { speaker: "Anna", text: "I'd love to come! What time does it start?", pt: "(Eu adoraria ir! A que horas começa?)" }
                    ]
                },
                {
                    title: "Dialogue 2: Holiday Wishes",
                    audio: "TTS: Merry Christmas! Happy New Year! Let's make a toast to our family.",
                    lines:[
                        { speaker: "Mark", text: "Merry Christmas!", pt: "(Feliz Natal!)" },
                        { speaker: "Sarah", text: "Happy New Year! Let's make a toast to our family.", pt: "(Feliz Ano Novo! Vamos fazer um brinde à nossa família.)" }
                    ]
                },
                {
                    title: "Dialogue 3: Planning Ahead",
                    audio: "TTS: We need to make a guest list for the wedding. Yes, and then send out invitations next week. Make sure you add 'Please RSVP' on the cards.",
                    lines:[
                        { speaker: "Groom", text: "We need to make a guest list for the wedding.", pt: "(Precisamos fazer uma lista de convidados para o casamento.)" },
                        { speaker: "Bride", text: "Yes, and then send out invitations next week. Make sure you add 'Please RSVP' on the cards.", pt: "(Sim, e então enviar os convites na próxima semana. Certifique-se de adicionar 'Por favor, confirme presença' nos cartões.)" } // Adjusted to keep strictly 2 characters
                    ]
                },
                {
                    title: "Dialogue 4: Declining an Invitation",
                    audio: "TTS: Would you like to come to my graduation? Thanks for the invitation, but I'm afraid I can't make it.",
                    lines:[
                        { speaker: "David", text: "Would you like to come to my graduation?", pt: "(Você gostaria de ir à minha formatura?)" },
                        { speaker: "Emma", text: "Thanks for the invitation, but I'm afraid I can't make it.", pt: "(Obrigada pelo convite, mas receio que não poderei ir.)" }
                    ]
                },
                {
                    title: "Dialogue 5: Giving a Gift",
                    audio: "TTS: Happy birthday! This is for you. Thank you so much! Have a great time tonight.",
                    lines:[
                        { speaker: "John", text: "Happy birthday! This is for you.", pt: "(Feliz aniversário! Isto é para você.)" },
                        { speaker: "Mia", text: "Thank you so much! Have a great time tonight.", pt: "(Muito obrigada! Divirta-se muito hoje à noite.)" }
                    ]
                },
                {
                    title: "Dialogue 6: Leaving the Event",
                    audio: "TTS: Cheers to the new couple! Congratulations again! It was a beautiful event. Thanks for having me.",
                    lines:[
                        { speaker: "Guest", text: "Cheers to the new couple! Congratulations again!", pt: "(Um brinde ao novo casal! Parabéns novamente!)" },
                        { speaker: "Host", text: "It was a beautiful event. Thanks for having me.", pt: "(Foi um belo evento. Obrigado por me receber.)" } // Wait, Host doesn't say thanks for having me.
                    ]
                },
                {
                    title: "Dialogue 6: Leaving the Event", // Logic Fix
                    audio: "TTS: Cheers to the new couple! Congratulations! Thank you! It was great to see you. Thanks for having me.",
                    lines:[
                        { speaker: "Guest", text: "Cheers to the new couple! Congratulations! Thanks for having me.", pt: "(Um brinde ao novo casal! Parabéns! Obrigado por me receberem.)" },
                        { speaker: "Host", text: "Thank you! It was great to see you.", pt: "(Obrigado! Foi ótimo ver você.)" } 
                    ]
                }
            ],

            // --- 3C: PRACTICE ---
            grammarDrillGroups:[
                {
                    title: "Greetings & Wishes",
                    drills:[
                        { q: "________ birthday! I bought you a gift.", options:[{t: "Merry", c: false}, {t: "Happy", c: true}, {t: "Good", c: false}, {t: "Cheers", c: false}], type: "mcq" },
                        { q: "Happy New ________! May it be great.", options:[{t: "Year", c: true}, {t: "Day", c: false}, {t: "Time", c: false}, {t: "Christmas", c: false}], type: "mcq" },
                        { q: "________ Christmas!", options:[{t: "Happy", c: false}, {t: "Merry", c: true}, {t: "Good", c: false}, {t: "Cheers", c: false}], type: "mcq" },
                        { q: "________ on your new job!", options:[{t: "Congratulations", c: true}, {t: "Toast", c: false}, {t: "Merry", c: false}, {t: "Cheers", c: false}], type: "mcq" },
                        { q: "________! Here is to our friendship.", options:[{t: "Happy", c: false}, {t: "Merry", c: false}, {t: "Cheers", c: true}, {t: "Toast", c: false}], type: "mcq" },
                        { q: "I would like to make a ________ to the bride.", options:[{t: "cheers", c: false}, {t: "toast", c: true}, {t: "merry", c: false}, {t: "happy", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Inviting & Planning",
                    drills:[
                        { q: "I'm ________ a party next week.", options:[{t: "doing", c: false}, {t: "making", c: false}, {t: "having", c: true}, {t: "going", c: false}], type: "mcq" },
                        { q: "I'm having a barbecue. Can you ________?", options:[{t: "come", c: true}, {t: "go", c: false}, {t: "invite", c: false}, {t: "accept", c: false}], type: "mcq" },
                        { q: "________ you like to come to my wedding?", options:[{t: "Do", c: false}, {t: "Are", c: false}, {t: "Would", c: true}, {t: "Can", c: false}], type: "mcq" },
                        { q: "Please ________ by Friday.", options:[{t: "RSVP", c: true}, {t: "toast", c: false}, {t: "invite", c: false}, {t: "guest", c: false}], type: "mcq" },
                        { q: "We need to make a guest ________ today.", options:[{t: "card", c: false}, {t: "list", c: true}, {t: "book", c: false}, {t: "note", c: false}], type: "mcq" },
                        { q: "I will ________ out invitations tomorrow.", options:[{t: "give", c: false}, {t: "send", c: true}, {t: "make", c: false}, {t: "receive", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Responding & Attending",
                    drills:[
                        { q: "Thanks for the ________.", options:[{t: "invitation", c: true}, {t: "invite", c: false}, {t: "toast", c: false}, {t: "guest", c: false}], type: "mcq" },
                        { q: "I'd ________ to come.", options:[{t: "like", c: false}, {t: "love", c: true}, {t: "want", c: false}, {t: "happy", c: false}], type: "mcq" },
                        { q: "I'm afraid I can't ________ it.", options:[{t: "do", c: false}, {t: "make", c: true}, {t: "go", c: false}, {t: "attend", c: false}], type: "mcq" },
                        { q: "Happy birthday! This is ________ you.", options:[{t: "to", c: false}, {t: "from", c: false}, {t: "for", c: true}, {t: "with", c: false}], type: "mcq" },
                        { q: "________ a great time at the party!", options:[{t: "Make", c: false}, {t: "Do", c: false}, {t: "Have", c: true}, {t: "Be", c: false}], type: "mcq" },
                        { q: "It was a lovely dinner. Thanks for ________ me.", options:[{t: "inviting", c: false}, {t: "having", c: true}, {t: "hosting", c: false}, {t: "giving", c: false}], type: "mcq" }
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
                { text: "I'm having a party next week for my birthday. ↘", audio: "TTS: I'm having a party next week for my birthday." },
                { text: "Can you come to my wedding anniversary? ↗", audio: "TTS: Can you come to my wedding anniversary?" },
                { text: "Would you like to come to our gathering? ↗", audio: "TTS: Would you like to come to our gathering?" },
                { text: "Please RSVP by Friday so I can make a guest list. ↘", audio: "TTS: Please RSVP by Friday so I can make a guest list." },
                { text: "I will send out invitations to all my relatives. ↘", audio: "TTS: I will send out invitations to all my relatives." },
                { text: "Thanks for the invitation, I'd love to come! ↘", audio: "TTS: Thanks for the invitation, I'd love to come!" },
                { text: "I'm afraid I can't make it to the celebration. ↘", audio: "TTS: I'm afraid I can't make it to the celebration." },
                { text: "Happy birthday! This gift is for you. ↘", audio: "TTS: Happy birthday! This gift is for you." },
                { text: "Let's make a toast to the bride and groom! ↘", audio: "TTS: Let's make a toast to the bride and groom!" },
                { text: "Thanks for having me, I had a great time! ↘", audio: "TTS: Thanks for having me, I had a great time!" }
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
                    audio: "TTS: Tom: Hi Lisa! We are having a party for New Year's Eve. Can you come? Lisa: I'd love to come! Should I bring a gift? Tom: No, it is just a casual gathering. Please RSVP by Monday. Lisa: Okay, see you then!",
                    text: "Tom: Hi Lisa! We are having a[party] for New Year's Eve. Can you [come]?<br>Lisa: I'd [love] to come! Should I bring a [gift]?<br>Tom: No, it is just a [casual] gathering. Please [RSVP] by Monday.<br>Lisa: Okay, see you then!"
                },
                {
                    type: "dropdown",
                    instruction: "Listen to the conversation about a special event.",
                    audio: "TTS: Mark: I received your invitation for the wedding. Congratulations! Sarah: Thank you! I hope you can make it. Mark: Yes, I am happy to accept. I am looking forward to the celebration. Sarah: We are very excited, too. The groom is organizing the music.",
                    questions:[
                        { q: "Mark: I received your[invitation* | card | gift] for the wedding. [Congratulations* | Cheers | Merry]!", a: "invitation" },
                        { q: "Sarah: Thank you! I hope you can [make* | do | celebrate] it.", a: "make" },
                        { q: "Mark: Yes, I am happy to [accept* | decline | invite]. I am looking forward to the celebration.", a: "accept" },
                        { q: "Sarah: We are very excited, too. The [groom* | host | bride] is organizing the music.", a: "groom" }
                    ]
                },
                {
                    type: "audio-choice",
                    instruction: "Listen to the speaker. Why is he calling?",
                    audio: "TTS: Hi Emma, thanks for the invitation to your graduation party. It's very kind of you, but I'm afraid I can't make it. I have to work that weekend. Have a great time, and congratulations!",
                    options:[
                        { t: "He is calling to accept the invitation.", c: false },
                        { t: "He is calling to ask for a gift.", c: false },
                        { t: "He is calling to decline the invitation because he is busy.", c: true },
                        { t: "He is calling to organize a new party.", c: false }
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
                    title: "Dialogue - The Surprise Birthday",
                    audio: "TTS: Anna: We need to plan the party for David's birthday. Let's make a guest list. John: Good idea. We should invite all our colleagues and relatives. Anna: I will send out invitations tonight. I'll tell them to keep it a secret. John: Don't forget to ask them to RSVP. I need to know how much food to prepare. Anna: Also, I bought some balloons and candles for the decoration. John: Perfect. When David arrives, we will make a toast to his health!",
                    body: "<b>Anna:</b> We need to plan the [party](tooltip:party) for David's [birthday](tooltip:birthday).[Let's make a guest list](tooltip:make-guest-list).<br><b>John:</b> Good idea. We should [invite](tooltip:invite) all our colleagues and [relatives](tooltip:relative).<br><b>Anna:</b> I will [send out invitations](tooltip:send-invitations) tonight. I'll tell them to keep it a secret.<br><b>John:</b> Don't forget to ask them to [RSVP](tooltip:please-rsvp). I need to know how much food to prepare.<br><b>Anna:</b> Also, I bought some [balloons](tooltip:balloon) and[candles](tooltip:candle) for the [decoration](tooltip:decoration).<br><b>John:</b> Perfect. When David arrives, we will [make a toast](tooltip:make-toast) to his health!",
                    questions:[
                        { q: "What kind of event are Anna and John planning?", options:[{t: "A wedding anniversary.", c: false}, {t: "A surprise birthday party.", c: true}, {t: "A formal graduation.", c: false}], type: "mcq" },
                        { q: "What will Anna do tonight?", options:[{t: "Buy a gift.", c: false}, {t: "Send out invitations.", c: true}, {t: "Bake a cake.", c: false}], type: "mcq" },
                        { q: "Why does John need the guests to RSVP?", options:[{t: "So he knows how much food to prepare.", c: true}, {t: "So he can buy the right decorations.", c: false}, {t: "So he can make a toast.", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Dialogue - The Wedding Reception",
                    audio: "TTS: Guest: Congratulations! The wedding was beautiful. Bride: Thank you! I am so glad you could come. Guest: This is for you and the groom. It's a small gift for your new home. Bride: You didn't have to! But thank you, that is very generous. Guest: The decorations look amazing, and the atmosphere is very festive. Bride: Enjoy yourself! Grab a drink, and have a great time.",
                    body: "<b>[Guest](tooltip:guest):</b>[Congratulations](tooltip:congratulations)! The [wedding](tooltip:wedding) was beautiful.<br><b>[Bride](tooltip:bride):</b> Thank you! I am so glad you could come.<br><b>Guest:</b>[This is for you](tooltip:this-is-for-you) and the[groom](tooltip:groom). It's a small [gift](tooltip:gift) for your new home.<br><b>Bride:</b> You didn't have to! But thank you, that is very generous.<br><b>Guest:</b> The [decorations](tooltip:decoration) look amazing, and the atmosphere is very [festive](tooltip:festive).<br><b>Bride:</b> Enjoy yourself! Grab a drink, and [have a great time](tooltip:have-great-time).",
                    questions:[
                        { q: "Who is the guest giving the gift to?", options:[{t: "To the host of the birthday party.", c: false}, {t: "To the bride and groom.", c: true}, {t: "To the relatives.", c: false}], type: "mcq" },
                        { q: "How does the guest describe the wedding?", options:[{t: "Beautiful and festive.", c: true}, {t: "Casual and boring.", c: false}, {t: "Formal and sad.", c: false}], type: "mcq" },
                        { q: "What does the bride tell the guest to do?", options:[{t: "To leave the party.", c: false}, {t: "To grab a drink and have a great time.", c: true}, {t: "To make a toast.", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Email - Holiday Gathering",
                    audio: "TTS: Subject: Christmas Celebration! Hi David, I'm having a party at my house for Christmas next Friday! It will be a casual family gathering, but I am inviting a few special friends too. We will decorate the tree and watch some fireworks later in the evening. Would you like to come? Please RSVP by Tuesday so I can plan the meal. I hope you can make it! Merry Christmas! Cheers, Leo.",
                    body: "<b>From: Leo</b><br><b>To: David</b><br>Subject: [Christmas](tooltip:christmas) [Celebration](tooltip:celebration)!<br><br>Hi David,<br>[I'm having a party](tooltip:having-party) at my house for Christmas next Friday! It will be a [casual](tooltip:casual) family [gathering](tooltip:gathering), but I am inviting a few [special](tooltip:special) friends too. We will [decorate](tooltip:decorate) the tree and watch some [fireworks](tooltip:firework) later in the evening.[Would you like to come](tooltip:would-you-like-come)? [Please RSVP](tooltip:please-rsvp) by Tuesday so I can plan the meal. I hope you can make it! [Merry](tooltip:merry) Christmas!<br><br>[Cheers](tooltip:cheers), Leo.",
                    questions:[
                        { q: "What kind of event is Leo hosting?", options:[{t: "A formal wedding.", c: false}, {t: "A casual Christmas gathering.", c: true}, {t: "A surprise birthday party.", c: false}], type: "mcq" },
                        { q: "What activities are planned for the evening?", options:[{t: "Exchanging business cards.", c: false}, {t: "Decorating the tree and watching fireworks.", c: true}, {t: "Making a speech and handing out diplomas.", c: false}], type: "mcq" },
                        { q: "When does David need to RSVP?", options:[{t: "By Friday.", c: false}, {t: "By Tuesday.", c: true}, {t: "He doesn't need to RSVP.", c: false}], type: "mcq" }
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
                { type: "matching", instruction: "Match the event to its description.", pairs:[
                    { left: "Wedding", right: "Marriage ceremony", val: "1" },
                    { left: "Graduation", right: "Receiving a diploma", val: "2" },
                    { left: "Anniversary", right: "Yearly celebration of a past event", val: "3" },
                    { left: "Birthday", right: "Celebrating the day you were born", val: "4" }
                ]},
                { type: "matching", instruction: "Match the people with their roles.", pairs:[
                    { left: "Host", right: "Organizes the party", val: "1" },
                    { left: "Guest", right: "Invited to the party", val: "2" },
                    { left: "Bride", right: "Woman getting married", val: "3" },
                    { left: "Groom", right: "Man getting married", val: "4" }
                ]},
                { type: "matching", instruction: "Match the verbs to the nouns.", pairs:[
                    { left: "To decorate", right: "the room", val: "1" },
                    { left: "To accept", right: "an invitation", val: "2" },
                    { left: "To celebrate", right: "a holiday", val: "3" },
                    { left: "To congratulate", right: "a friend", val: "4" }
                ]},
                { type: "matching", instruction: "Match the phrase halves.", pairs:[
                    { left: "I'm having", right: "a party", val: "1" },
                    { left: "Would you like", right: "to come?", val: "2" },
                    { left: "Please", right: "RSVP", val: "3" },
                    { left: "Make a", right: "guest list", val: "4" }
                ]},

                // --- WORD ORDER (5-14) ---
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "birthday / Happy / !", correct: "Happy birthday !" },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "Year / New / Happy / !", correct: "Happy New Year !" },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "Christmas / Merry / !", correct: "Merry Christmas !" },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "job / your / Congratulations / on / new / !", correct: "Congratulations on your new job !" },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "party / having / a / I'm / week / next / .", correct: "I'm having a party next week ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "come / to / my / you / Can / wedding / ?", correct: "Can you come to my wedding ?" },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "like / come / you / Would / to / ?", correct: "Would you like to come ?" },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "invitation / for / Thanks / the / .", correct: "Thanks for the invitation ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "afraid / make / I / I'm / it / can't / .", correct: "I'm afraid I can't make it ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "you / having / Thanks / me / for / .", correct: "Thanks for having me ." },

                // --- CLICKABLE ERROR (15-24) ---
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "[Happy](error:Merry) Christmas!" },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "[Merry](error:Happy) New Year!" },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "I want to make a [bread](error:toast) to the bride." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "We need to make a guest [card](error:list)." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "I will send [in](error:out) invitations tomorrow." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "I'd [like](error:love) to come!" },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "I'm afraid I can't [do](error:make) it." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "This gift is [to](error:for) you." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "Have a great [moment](error:time)!" },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "Thanks for [inviting](error:having) me." }, // 'inviting' is okay, but 'having' is the target. Let's make it clearer:
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "Thanks for[taking](error:having) me." },

                // --- ODD ONE OUT (25-30) ---
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Events)", options:[{t: "Birthday", c: false}, {t: "Wedding", c: false}, {t: "Graduation", c: false}, {t: "Relative", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (People)", options:[{t: "Host", c: false}, {t: "Guest", c: false}, {t: "Bride", c: false}, {t: "Candle", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Items)", options:[{t: "Gift", c: false}, {t: "Card", c: false}, {t: "Balloon", c: false}, {t: "Groom", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Verbs)", options:[{t: "To celebrate", c: false}, {t: "To decorate", c: false}, {t: "To accept", c: false}, {t: "Festive", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Adjectives)", options:[{t: "Merry", c: false}, {t: "Formal", c: false}, {t: "Casual", c: false}, {t: "Invitation", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Holidays)", options:[{t: "Christmas", c: false}, {t: "Halloween", c: false}, {t: "Easter", c: false}, {t: "Firework", c: true}] },

                // --- TRUE / FALSE (31-35) ---
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "A 'gathering' is usually a large, formal event like a national holiday.", correct: "false"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "The 'host' is the person who throws the party and invites others.", correct: "true"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "If you 'decline' an invitation, it means you agree to go to the party.", correct: "false"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "You can say 'Merry Christmas' but usually say 'Happy New Year'.", correct: "true"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "To 'make a toast' means to cook bread at a party.", correct: "false"}] },

                // --- MCQ (36-39) ---
                { type: "mcq", instruction: "Choose the correct phrase.<br>When you want to know if someone can attend your event, you ask: '________ you come?'", options:[{t: "Do", c: false}, {t: "Can", c: true}, {t: "Are", c: false}, {t: "Would", c: false}] },
                { type: "mcq", instruction: "Choose the correct word.<br>If you want the guests to confirm if they are going to your party, you write 'Please ________' on the invitation.", options:[{t: "cheers", c: false}, {t: "RSVP", c: true}, {t: "decline", c: false}, {t: "accept", c: false}] },
                { type: "mcq", instruction: "Choose the correct phrase.<br>When giving someone a present, you can politely say: '________ you.'", options:[{t: "This is from", c: false}, {t: "This is to", c: false}, {t: "This is for", c: true}, {t: "Here is", c: false}] },
                { type: "mcq", instruction: "Choose the correct phrase.<br>When leaving a party, it is polite to thank the host by saying: 'Thanks for ________ me.'", options:[{t: "inviting", c: false}, {t: "hosting", c: false}, {t: "having", c: true}, {t: "making", c: false}] },

                // --- CATEGORIZE (40) ---
                { type: "categorize", instruction: "Sort the words into Events/Holidays and People.", 
                    categories:[{id: "event", name: "Events"}, {id: "people", name: "People"}],
                    items:[
                        {text: "Graduation", catId: "event"}, 
                        {text: "Halloween", catId: "event"}, 
                        {text: "Easter", catId: "event"}, 
                        {text: "Host", catId: "people"}, 
                        {text: "Bride", catId: "people"}, 
                        {text: "Guest", catId: "people"}
                    ] 
                }
            ]
        },

        // ======================================================
        // STEP 8: WRITING PRACTICE
        // ======================================================
        {
            title: "Writing Practice",
            instruction: "Write an email to a friend (5-7 sentences) to invite them to a special celebration (e.g., a birthday, a graduation, or a holiday party). Mention what you are celebrating, if the event is casual or formal, and ask them to RSVP.",
            example: "Hi Mark! I am having a party next Saturday to celebrate my graduation. I would love for you to come! It will be a casual gathering with some close friends and relatives. I am going to decorate the house and prepare a lot of food. We will make a toast to the future around eight o'clock. Please RSVP by Wednesday so I can organize everything. Hope you can make it!",
            prompts:[
                "State what the occasion is (e.g., birthday, graduation).",
                "Use an inviting phrase (e.g., Can you come?, I'd love for you to come).",
                "Describe the type of event (formal, casual, special).",
                "Ask the person to confirm their attendance (RSVP)."
            ]
        },

        // ======================================================
        // STEP 9: FLASHCARDS
        // ======================================================
        {
            title: "Flashcards",
            items:[
                // 2A Items (36 items)
                { term: "Party", definition: "A social gathering of invited guests.", defTrans: "Festa", example: "We are having a big party for her birthday.", audioFront: "TTS: Party", audioBack: "TTS: We are having a big party for her birthday." },
                { term: "Celebration", definition: "The action of marking a significant or happy day.", defTrans: "Celebração", example: "The town held a celebration for the new mayor.", audioFront: "TTS: Celebration", audioBack: "TTS: The town held a celebration for the new mayor." },
                { term: "Gathering", definition: "An assembly or meeting, especially a social or festive one.", defTrans: "Encontro / Reunião (social)", example: "It is just a small family gathering.", audioFront: "TTS: Gathering", audioBack: "TTS: It is just a small family gathering." },
                { term: "Birthday", definition: "The anniversary of the day on which a person was born.", defTrans: "Aniversário", example: "I will bake a cake for his birthday.", audioFront: "TTS: Birthday", audioBack: "TTS: I will bake a cake for his birthday." },
                { term: "Anniversary", definition: "The date on which an event took place in a previous year.", defTrans: "Aniversário (evento/casamento)", example: "Tomorrow is our tenth wedding anniversary.", audioFront: "TTS: Anniversary", audioBack: "TTS: Tomorrow is our tenth wedding anniversary." },
                { term: "Wedding", definition: "A marriage ceremony.", defTrans: "Casamento (cerimônia)", example: "They invited me to their beautiful wedding.", audioFront: "TTS: Wedding", audioBack: "TTS: They invited me to their beautiful wedding." },
                { term: "Graduation", definition: "The receiving of an academic degree or diploma.", defTrans: "Formatura", example: "She threw her hat in the air at graduation.", audioFront: "TTS: Graduation", audioBack: "TTS: She threw her hat in the air at graduation." },
                { term: "Holiday", definition: "A day of festivity or recreation when no work is done.", defTrans: "Feriado / Férias", example: "The bank is closed because it is a national holiday.", audioFront: "TTS: Holiday", audioBack: "TTS: The bank is closed because it is a national holiday." },
                { term: "Festival", definition: "A day or period of celebration.", defTrans: "Festival", example: "We danced a lot at the summer festival.", audioFront: "TTS: Festival", audioBack: "TTS: We danced a lot at the summer festival." },
                { term: "Christmas", definition: "The annual Christian festival celebrating Christ's birth.", defTrans: "Natal", example: "We open our presents on Christmas morning.", audioFront: "TTS: Christmas", audioBack: "TTS: We open our presents on Christmas morning." },
                { term: "Halloween", definition: "The night of October 31, when children wear costumes.", defTrans: "Dia das Bruxas / Halloween", example: "Children wear scary costumes on Halloween.", audioFront: "TTS: Halloween", audioBack: "TTS: Children wear scary costumes on Halloween." },
                { term: "Easter", definition: "The Christian festival celebrating the resurrection of Jesus.", defTrans: "Páscoa", example: "We eat a lot of chocolate eggs during Easter.", audioFront: "TTS: Easter", audioBack: "TTS: We eat a lot of chocolate eggs during Easter." },
                
                { term: "Host", definition: "A person who receives or entertains other people as guests.", defTrans: "Anfitrião(ã)", example: "The host welcomed everyone at the door.", audioFront: "TTS: Host", audioBack: "TTS: The host welcomed everyone at the door." },
                { term: "Guest", definition: "A person who is invited to visit someone's home or attend a party.", defTrans: "Convidado(a)", example: "Every guest received a welcome drink.", audioFront: "TTS: Guest", audioBack: "TTS: Every guest received a welcome drink." },
                { term: "Bride", definition: "A woman on her wedding day or just before it.", defTrans: "Noiva", example: "The bride wore a beautiful white dress.", audioFront: "TTS: Bride", audioBack: "TTS: The bride wore a beautiful white dress." },
                { term: "Groom", definition: "A man on his wedding day or just before it.", defTrans: "Noivo", example: "The groom looked nervous before the ceremony.", audioFront: "TTS: Groom", audioBack: "TTS: The groom looked nervous before the ceremony." },
                { term: "Relative", definition: "A person connected by blood or marriage.", defTrans: "Parente", example: "We invited every relative to the reunion.", audioFront: "TTS: Relative", audioBack: "TTS: We invited every relative to the reunion." },
                { term: "Invitation", definition: "A written or verbal request inviting someone to go somewhere.", defTrans: "Convite", example: "I sent an email invitation to my friends.", audioFront: "TTS: Invitation", audioBack: "TTS: I sent an email invitation to my friends." },
                { term: "Gift", definition: "A thing given willingly to someone without payment.", defTrans: "Presente", example: "I bought an expensive gift for my sister.", audioFront: "TTS: Gift", audioBack: "TTS: I bought an expensive gift for my sister." },
                { term: "Card", definition: "A piece of thick, stiff paper with a greeting.", defTrans: "Cartão", example: "He wrote a sweet message inside the birthday card.", audioFront: "TTS: Card", audioBack: "TTS: He wrote a sweet message inside the birthday card." },
                { term: "Decoration", definition: "The process or art of decorating something.", defTrans: "Decoração", example: "She put up a beautiful decoration in the hall.", audioFront: "TTS: Decoration", audioBack: "TTS: She put up a beautiful decoration in the hall." },
                { term: "Balloon", definition: "A small colored rubber bag inflated with air.", defTrans: "Balão / Bexiga", example: "We filled the room with a red balloon.", audioFront: "TTS: Balloon", audioBack: "TTS: We filled the room with a red balloon." },
                { term: "Candle", definition: "A cylinder of wax with a central wick lit to produce light.", defTrans: "Vela", example: "He blew out the candle on his cake.", audioFront: "TTS: Candle", audioBack: "TTS: He blew out the candle on his cake." },
                { term: "Firework", definition: "A device containing gunpowder that causes spectacular explosions.", defTrans: "Fogo de artifício", example: "We watched a loud firework in the sky.", audioFront: "TTS: Firework", audioBack: "TTS: We watched a loud firework in the sky." },

                { term: "To celebrate", definition: "To acknowledge a significant or happy day with a gathering.", defTrans: "Celebrar", example: "We want to celebrate his promotion tonight.", audioFront: "TTS: To celebrate", audioBack: "TTS: We want to celebrate his promotion tonight." },
                { term: "To invite", definition: "To make a polite request to someone to go somewhere.", defTrans: "Convidar", example: "I need to invite all my colleagues.", audioFront: "TTS: To invite", audioBack: "TTS: I need to invite all my colleagues." },
                { term: "To accept", definition: "To consent to receive or undertake.", defTrans: "Aceitar", example: "I am happy to accept your invitation.", audioFront: "TTS: To accept", audioBack: "TTS: I am happy to accept your invitation." },
                { term: "To decline", definition: "To politely refuse.", defTrans: "Recusar", example: "I must decline because I am busy.", audioFront: "TTS: To decline", audioBack: "TTS: I must decline because I am busy." },
                { term: "To decorate", definition: "To make something look more attractive by adding extra items.", defTrans: "Decorar / Enfeitar", example: "We will decorate the living room with lights.", audioFront: "TTS: To decorate", audioBack: "TTS: We will decorate the living room with lights." },
                { term: "To congratulate", definition: "To express one's pleasure to another person at their success.", defTrans: "Parabenizar", example: "I want to congratulate you on your success.", audioFront: "TTS: To congratulate", audioBack: "TTS: I want to congratulate you on your success." },
                { term: "Merry", definition: "Cheerful and lively.", defTrans: "Alegre (Feliz Natal)", example: "I wish you a Merry Christmas!", audioFront: "TTS: Merry", audioBack: "TTS: I wish you a Merry Christmas!" },
                { term: "Special", definition: "Better, greater, or otherwise different from what is usual.", defTrans: "Especial", example: "This is a very special occasion for us.", audioFront: "TTS: Special", audioBack: "TTS: This is a very special occasion for us." },
                { term: "Formal", definition: "Done in accordance with rules of convention or etiquette.", defTrans: "Formal", example: "You must wear a suit to a formal event.", audioFront: "TTS: Formal", audioBack: "TTS: You must wear a suit to a formal event." },
                { term: "Casual", definition: "Relaxed and unconcerned; not regular or formal.", defTrans: "Casual / Informal", example: "You can wear jeans; it is a casual party.", audioFront: "TTS: Casual", audioBack: "TTS: You can wear jeans; it is a casual party." },
                { term: "Festive", definition: "Relating to a festival; cheerful and jovial.", defTrans: "Festivo", example: "The music created a very festive atmosphere.", audioFront: "TTS: Festive", audioBack: "TTS: The music created a very festive atmosphere." },
                { term: "Important", definition: "Of great significance or value.", defTrans: "Importante", example: "Please attend, this meeting is important.", audioFront: "TTS: Important", audioBack: "TTS: Please attend, this meeting is important." },

                // 3A Items (18 items)
                { term: "Happy birthday", definition: "A classic phrase used to wish someone well on their birthday.", defTrans: "Feliz aniversário!", example: "Happy birthday! I bought you a gift.", audioFront: "TTS: Happy birthday", audioBack: "TTS: Happy birthday! I bought you a gift." },
                { term: "Happy New Year", definition: "A phrase used to wish someone a good year ahead.", defTrans: "Feliz Ano Novo!", example: "Happy New Year! May it be a great year.", audioFront: "TTS: Happy New Year", audioBack: "TTS: Happy New Year! May it be a great year." },
                { term: "Merry Christmas", definition: "The traditional greeting for the Christmas holiday.", defTrans: "Feliz Natal!", example: "I wish you a very Merry Christmas!", audioFront: "TTS: Merry Christmas", audioBack: "TTS: I wish you a very Merry Christmas!" },
                { term: "Congratulations", definition: "A phrase used to express praise for an achievement.", defTrans: "Parabéns!", example: "Congratulations on your new job!", audioFront: "TTS: Congratulations", audioBack: "TTS: Congratulations on your new job!" },
                { term: "Cheers", definition: "A phrase used when raising glasses to drink.", defTrans: "Saúde! / Um brinde!", example: "Cheers! Here is to our friendship.", audioFront: "TTS: Cheers", audioBack: "TTS: Cheers! Here is to our friendship." },
                { term: "Make a toast", definition: "To raise a glass and drink to someone's health or success.", defTrans: "Fazer um brinde", example: "I would like to make a toast to the bride.", audioFront: "TTS: Make a toast", audioBack: "TTS: I would like to make a toast to the bride." },
                
                { term: "I'm having a party", definition: "Stating that you are organizing and hosting a celebration.", defTrans: "Vou dar uma festa", example: "I'm having a party next week.", audioFront: "TTS: I'm having a party", audioBack: "TTS: I'm having a party next week." },
                { term: "Can you come?", definition: "Asking if someone is able to attend your event.", defTrans: "Você pode vir?", example: "I'm having a barbecue. Can you come?", audioFront: "TTS: Can you come?", audioBack: "TTS: I'm having a barbecue. Can you come?" },
                { term: "Would you like to come?", definition: "A polite way to invite someone to an event.", defTrans: "Você gostaria de ir/vir?", example: "Would you like to come to my wedding?", audioFront: "TTS: Would you like to come?", audioBack: "TTS: Would you like to come to my wedding?" },
                { term: "Please RSVP", definition: "A request for the guest to confirm if they will attend.", defTrans: "Por favor, confirme presença", example: "Please RSVP by Friday.", audioFront: "TTS: Please RSVP", audioBack: "TTS: Please RSVP by Friday." },
                { term: "Make a guest list", definition: "To write down the names of everyone you want to invite.", defTrans: "Fazer uma lista de convidados", example: "We need to make a guest list today.", audioFront: "TTS: Make a guest list", audioBack: "TTS: We need to make a guest list today." },
                { term: "Send out invitations", definition: "To mail or email the formal requests to attend.", defTrans: "Enviar os convites", example: "I will send out invitations tomorrow.", audioFront: "TTS: Send out invitations", audioBack: "TTS: I will send out invitations tomorrow." },
                
                { term: "Thanks for the invitation", definition: "A polite response to receiving an invite.", defTrans: "Obrigado(a) pelo convite", example: "Thanks for the invitation. It's very kind of you.", audioFront: "TTS: Thanks for the invitation", audioBack: "TTS: Thanks for the invitation. It's very kind of you." },
                { term: "I'd love to come", definition: "An enthusiastic acceptance of an invitation.", defTrans: "Eu adoraria ir", example: "I'd love to come. What time?", audioFront: "TTS: I'd love to come", audioBack: "TTS: I'd love to come. What time?" },
                { term: "I'm afraid I can't make it", definition: "A polite way to decline an invitation.", defTrans: "Receio que não poderei ir", example: "I'm afraid I can't make it. I am working.", audioFront: "TTS: I'm afraid I can't make it", audioBack: "TTS: I'm afraid I can't make it. I am working." },
                { term: "This is for you", definition: "A phrase used when handing someone a gift.", defTrans: "Isto é para você", example: "Happy birthday! This is for you.", audioFront: "TTS: This is for you", audioBack: "TTS: Happy birthday! This is for you." },
                { term: "Have a great time", definition: "Wishing someone a fun experience at an event.", defTrans: "Divirta-se muito", example: "Have a great time at the party!", audioFront: "TTS: Have a great time", audioBack: "TTS: Have a great time at the party!" },
                { term: "Thanks for having me", definition: "A polite phrase used by a guest to thank the host before leaving.", defTrans: "Obrigado(a) por me receber", example: "It was a lovely dinner. Thanks for having me.", audioFront: "TTS: Thanks for having me", audioBack: "TTS: It was a lovely dinner. Thanks for having me." }
            ]
        }
    ],

    // ======================================================
    // GLOSSARY (All 54 items + Context words)
    // ======================================================
    glossary:[
        // 2A: Events & Occasions
        { topic: "Events", term: "party", definition: "A social gathering of invited guests.", translation: "Festa" },
        { topic: "Events", term: "celebration", definition: "The action of marking a significant day.", translation: "Celebração" },
        { topic: "Events", term: "gathering", definition: "An assembly or meeting.", translation: "Reunião (social) / Encontro" },
        { topic: "Events", term: "birthday", definition: "The anniversary of the day a person was born.", translation: "Aniversário" },
        { topic: "Events", term: "anniversary", definition: "The date an event took place in a previous year.", translation: "Aniversário (evento/casamento)" },
        { topic: "Events", term: "wedding", definition: "A marriage ceremony.", translation: "Casamento" },
        { topic: "Events", term: "graduation", definition: "The receiving of an academic degree.", translation: "Formatura" },
        { topic: "Events", term: "holiday", definition: "A day of festivity when no work is done.", translation: "Feriado / Férias" },
        { topic: "Events", term: "festival", definition: "A day or period of celebration.", translation: "Festival" },
        { topic: "Events", term: "christmas", definition: "The festival celebrating Christ's birth.", translation: "Natal" },
        { topic: "Events", term: "halloween", definition: "The night of October 31.", translation: "Dia das Bruxas / Halloween" },
        { topic: "Events", term: "easter", definition: "The festival celebrating the resurrection of Jesus.", translation: "Páscoa" },

        // 2A: People & Items
        { topic: "People", term: "host", definition: "A person who receives guests.", translation: "Anfitrião(ã)" },
        { topic: "People", term: "guest", definition: "A person invited to an event.", translation: "Convidado(a)" },
        { topic: "People", term: "bride", definition: "A woman on her wedding day.", translation: "Noiva" },
        { topic: "People", term: "groom", definition: "A man on his wedding day.", translation: "Noivo" },
        { topic: "People", term: "relative", definition: "A person connected by blood or marriage.", translation: "Parente" },
        { topic: "Items", term: "invitation", definition: "A request inviting someone to an event.", translation: "Convite" },
        { topic: "Items", term: "gift", definition: "A thing given willingly without payment.", translation: "Presente" },
        { topic: "Items", term: "card", definition: "A piece of paper with a greeting.", translation: "Cartão" },
        { topic: "Items", term: "decoration", definition: "The art of decorating something.", translation: "Decoração" },
        { topic: "Items", term: "balloon", definition: "A small colored rubber bag inflated with air.", translation: "Balão / Bexiga" },
        { topic: "Items", term: "candle", definition: "A cylinder of wax lit to produce light.", translation: "Vela" },
        { topic: "Items", term: "firework", definition: "A device that causes spectacular explosions.", translation: "Fogo de artifício" },

        // 2A: Verbs & Adjectives
        { topic: "Verbs", term: "to-celebrate", definition: "To acknowledge a significant day.", translation: "Celebrar" },
        { topic: "Verbs", term: "to-invite", definition: "To make a polite request to someone.", translation: "Convidar" },
        { topic: "Verbs", term: "to-accept", definition: "To consent to receive or undertake.", translation: "Aceitar" },
        { topic: "Verbs", term: "to-decline", definition: "To politely refuse.", translation: "Recusar" },
        { topic: "Verbs", term: "to-decorate", definition: "To make something look more attractive.", translation: "Decorar" },
        { topic: "Verbs", term: "to-congratulate", definition: "To express pleasure at someone's success.", translation: "Parabenizar" },
        { topic: "Adjectives", term: "merry", definition: "Cheerful and lively.", translation: "Alegre (Feliz Natal)" },
        { topic: "Adjectives", term: "special", definition: "Different from what is usual.", translation: "Especial" },
        { topic: "Adjectives", term: "formal", definition: "Done in accordance with rules of convention.", translation: "Formal" },
        { topic: "Adjectives", term: "casual", definition: "Relaxed and unconcerned.", translation: "Casual" },
        { topic: "Adjectives", term: "festive", definition: "Relating to a festival; cheerful.", translation: "Festivo" },
        { topic: "Adjectives", term: "important", definition: "Of great significance.", translation: "Importante" },

        // 3A: Expressions
        { topic: "Expressions", term: "happy-birthday", definition: "Wishing someone well on their birthday.", translation: "Feliz aniversário!" },
        { topic: "Expressions", term: "happy-new-year", definition: "Wishing someone a good year ahead.", translation: "Feliz Ano Novo!" },
        { topic: "Expressions", term: "merry-christmas", definition: "Greeting for the Christmas holiday.", translation: "Feliz Natal!" },
        { topic: "Expressions", term: "congratulations", definition: "Praise for an achievement.", translation: "Parabéns!" },
        { topic: "Expressions", term: "cheers", definition: "Phrase used when raising glasses.", translation: "Saúde! / Um brinde!" },
        { topic: "Expressions", term: "make-toast", definition: "To raise a glass to someone's health.", translation: "Fazer um brinde" },
        
        { topic: "Expressions", term: "having-party", definition: "Stating you are organizing a celebration.", translation: "Vou dar uma festa" },
        { topic: "Expressions", term: "can-you-come", definition: "Asking if someone is able to attend.", translation: "Você pode vir?" },
        { topic: "Expressions", term: "would-you-like-come", definition: "Polite way to invite someone.", translation: "Você gostaria de ir/vir?" },
        { topic: "Expressions", term: "please-rsvp", definition: "Request to confirm attendance.", translation: "Por favor, confirme presença" },
        { topic: "Expressions", term: "make-guest-list", definition: "To write down names of invitees.", translation: "Fazer uma lista de convidados" },
        { topic: "Expressions", term: "send-invitations", definition: "To mail formal requests to attend.", translation: "Enviar os convites" },
        
        { topic: "Expressions", term: "thanks-invitation", definition: "Polite response to receiving an invite.", translation: "Obrigado(a) pelo convite" },
        { topic: "Expressions", term: "id-love-to-come", definition: "Enthusiastic acceptance of an invitation.", translation: "Eu adoraria ir" },
        { topic: "Expressions", term: "cant-make-it", definition: "Polite way to decline an invitation.", translation: "Receio que não poderei ir" },
        { topic: "Expressions", term: "this-is-for-you", definition: "Phrase used when handing a gift.", translation: "Isto é para você" },
        { topic: "Expressions", term: "have-great-time", definition: "Wishing someone a fun experience.", translation: "Divirta-se muito" },
        { topic: "Expressions", term: "thanks-having-me", definition: "Thanking the host before leaving.", translation: "Obrigado(a) por me receber" },

        // Additional Context Words
        { topic: "Context", term: "occasion", definition: "A particular time or instance of an event.", translation: "Ocasião" },
        { topic: "Context", term: "event", definition: "A thing that happens, especially one of importance.", translation: "Evento" },
        { topic: "Context", term: "prepare", definition: "To make ready for use or consideration.", translation: "Preparar" },
        { topic: "Context", term: "fun", definition: "Enjoyment, amusement, or lighthearted pleasure.", translation: "Divertido / Diversão" }
    ]
});