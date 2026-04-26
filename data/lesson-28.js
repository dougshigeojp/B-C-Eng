/**
 * English Block Assembling - LESSON DATA: Topic 28
 * Topic: Cultural Differences
 * Level: Upper A2 ~ Lower B1
 */

window.initLesson({
    // --- METADATA ---
    lessonId: "lesson-28",
    block: "4",
    topicTitle: "Cultural Differences",

    steps:[
        // ======================================================
        // STEP 0: INTRO & CAN-DO
        // ======================================================
        {
            title: "Intro & Can-Do",
            objectives: "• Discuss[customs](tooltip:custom) and [traditions](tooltip:tradition) from different countries.<br>• Understand [etiquette](tooltip:etiquette) and polite [behavior](tooltip:behavior) in various social situations.<br>• Ask about cultural norms like [greetings](tooltip:greeting), gifts, and table [manners](tooltip:manner).<br>• Compare cultures and explain [similarities](tooltip:similar) and [differences](tooltip:different).",
            welcome: "Welcome to Lesson 28! Traveling and meeting people from other countries is a wonderful experience, but it requires cultural awareness. In this lesson, you will learn the vocabulary to talk about traditions, polite behavior, and social etiquette. You will practice how to ask what is acceptable in a foreign country and how to compare different cultural norms respectfully. Let's broaden our horizons!",
            audio: {
                objectives: "TTS: In this lesson, you will learn to: Discuss customs and traditions from different countries. Understand etiquette and polite behavior in various social situations. Ask about cultural norms like greetings, gifts, and table manners. Compare cultures and explain similarities and differences.",
                welcome: "TTS: Welcome to Lesson 28! Traveling and meeting people from other countries is a wonderful experience, but it requires cultural awareness. In this lesson, you will learn the vocabulary to talk about traditions, polite behavior, and social etiquette. You will practice how to ask what is acceptable in a foreign country and how to compare different cultural norms respectfully. Let's broaden our horizons!"
            }
        },

        // ======================================================
        // STEP 1: CONTEXT DIALOGUE
        // ======================================================
        {
            title: "Context Dialogue",
            context: "Emma is going to a dinner party at her new colleague's house. Her colleague is from Japan, so she asks Ken for advice.",
            contextAudio: "TTS: Emma: I am going to a dinner party at my colleague's house tonight. He is from Japan, and I am a bit nervous. Ken: Don't worry! I can help you. What should you know before visiting? Emma: For example, is there a dress code? Ken: No, but it's considered polite to take off your shoes before entering the house. Emma: Good to know. And how do you greet people formally? Is it okay to shake hands? Ken: You can, but it is customary to bow when you greet someone. Emma: Oh, we do it differently in my culture. We always shake hands and make eye contact. Ken: A key difference is that they might not make strong eye contact. Also, you should bring a small gift. Emma: A gift? It's the same in my culture. I will bring a nice box of chocolates. Ken: That is very appropriate. Have a great time!",
            dialogue:[
                { speaker: "Emma", text: "I am going to a dinner party at my colleague's house tonight. He is from Japan, and I am a bit nervous." },
                { speaker: "Ken", text: "Don't worry! I can help you.[What should I know before](tooltip:what-know-before) visiting?" },
                { speaker: "Emma", text: "For example, is there [a dress code](tooltip:dress-code)?" },
                { speaker: "Ken", text: "No, but[it's considered polite](tooltip:considered-polite) to take off your shoes before entering the house." },
                { speaker: "Emma", text: "Good to know. And[how do you greet](tooltip:how-greet) people formally?[Is it okay to](tooltip:is-it-okay-to) [shake hands](tooltip:shake-hands)?" },
                { speaker: "Ken", text: "You can, but it is [customary](tooltip:customary) to [bow](tooltip:bow) when you [greet](tooltip:greet) someone." },
                { speaker: "Emma", text: "Oh,[we do it differently](tooltip:do-differently) [in my culture](tooltip:in-my-culture). We always shake hands and [make eye contact](tooltip:make-eye-contact)." },
                { speaker: "Ken", text: "[A key difference is](tooltip:key-difference) that they might not make strong eye contact. Also, you should bring a small [gift](tooltip:gift)." },
                { speaker: "Emma", text: "A gift?[It's the same in my culture](tooltip:same-in-culture). I will bring a nice box of chocolates." },
                { speaker: "Ken", text: "That is very [appropriate](tooltip:appropriate). Have a great time!" }
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
                    title: "Nouns (Culture & Events)",
                    audio: "TTS: Culture. Custom. Tradition. Etiquette. Behavior. Value. Festival. Holiday. Ceremony. Wedding. Gift. Greeting.",
                    items:[
                        { term: "Culture", trans: "Cultura" },
                        { term: "Custom", trans: "Costume" },
                        { term: "Tradition", trans: "Tradição" },
                        { term: "Etiquette", trans: "Etiqueta (boas maneiras)" },
                        { term: "Behavior", trans: "Comportamento" },
                        { term: "Value", trans: "Valor (princípio moral)" },
                        { term: "Festival", trans: "Festival" },
                        { term: "Holiday", trans: "Feriado" },
                        { term: "Ceremony", trans: "Cerimônia" },
                        { term: "Wedding", trans: "Casamento (evento)" },
                        { term: "Gift", trans: "Presente" },
                        { term: "Greeting", trans: "Saudação / Cumprimento" }
                    ]
                },
                {
                    title: "Nouns & Verbs (Actions)",
                    audio: "TTS: Punctuality. Handshake. Gesture. To celebrate. To observe. To greet. To bow. To behave. To expect. To consider. To respect. To offend.",
                    items:[
                        { term: "Punctuality", trans: "Pontualidade" },
                        { term: "Handshake", trans: "Aperto de mão" },
                        { term: "Gesture", trans: "Gesto" },
                        { term: "To celebrate", trans: "Celebrar / Comemorar" },
                        { term: "To observe", trans: "Observar (um feriado/costume)" },
                        { term: "To greet", trans: "Cumprimentar / Saudar" },
                        { term: "To bow", trans: "Curvar-se (em reverência)" },
                        { term: "To behave", trans: "Comportar-se" },
                        { term: "To expect", trans: "Esperar (ter expectativa)" },
                        { term: "To consider", trans: "Considerar" },
                        { term: "To respect", trans: "Respeitar" },
                        { term: "To offend", trans: "Ofender" }
                    ]
                },
                {
                    title: "Adjectives (Norms)",
                    audio: "TTS: Polite. Impolite. Rude. Formal. Informal. Traditional. Customary. Common. Typical. Acceptable. Appropriate. Similar.",
                    items:[
                        { term: "Polite", trans: "Educado(a)" },
                        { term: "Impolite", trans: "Maleducado(a) / Indelicado(a)" },
                        { term: "Rude", trans: "Grosseiro(a) / Rude" },
                        { term: "Formal", trans: "Formal" },
                        { term: "Informal", trans: "Informal" },
                        { term: "Traditional", trans: "Tradicional" },
                        { term: "Customary", trans: "Costumeiro / Habitual" },
                        { term: "Common", trans: "Comum" },
                        { term: "Typical", trans: "Típico" },
                        { term: "Acceptable", trans: "Aceitável" },
                        { term: "Appropriate", trans: "Apropriado / Adequado" },
                        { term: "Similar", trans: "Semelhante / Parecido" }
                    ]
                }
            ],

            // --- 2B: EXAMPLES ---
            exampleGroups:[
                {
                    title: "Nouns (Culture & Events)",
                    audio: "TTS: Learning a new language helps you understand a new culture. Taking off your shoes is a local custom. Eating turkey is a Christmas tradition. You must learn the proper dining etiquette. His bad behavior surprised everyone at the party. Honesty is a very important family value. We went to the lantern festival in the city. Independence Day is a national holiday. The graduation ceremony was very beautiful. They invited me to their traditional wedding. It is polite to bring a small gift for the host. A hug is a common greeting among friends.",
                    items:[
                        { term: "Culture", sent: "Learning a new language helps you understand a new culture.", trans: "Aprender um novo idioma ajuda você a entender uma nova cultura." },
                        { term: "Custom", sent: "Taking off your shoes is a local custom.", trans: "Tirar os sapatos é um costume local." },
                        { term: "Tradition", sent: "Eating turkey is a Christmas tradition.", trans: "Comer peru é uma tradição de Natal." },
                        { term: "Etiquette", sent: "You must learn the proper dining etiquette.", trans: "Você deve aprender a etiqueta adequada à mesa." },
                        { term: "Behavior", sent: "His bad behavior surprised everyone at the party.", trans: "O mau comportamento dele surpreendeu a todos na festa." },
                        { term: "Value", sent: "Honesty is a very important family value.", trans: "A honestidade é um valor familiar muito importante." },
                        { term: "Festival", sent: "We went to the lantern festival in the city.", trans: "Nós fomos ao festival de lanternas na cidade." },
                        { term: "Holiday", sent: "Independence Day is a national holiday.", trans: "O Dia da Independência é um feriado nacional." },
                        { term: "Ceremony", sent: "The graduation ceremony was very beautiful.", trans: "A cerimônia de formatura foi muito linda." },
                        { term: "Wedding", sent: "They invited me to their traditional wedding.", trans: "Eles me convidaram para seu casamento tradicional." },
                        { term: "Gift", sent: "It is polite to bring a small gift for the host.", trans: "É educado levar um pequeno presente para o anfitrião." },
                        { term: "Greeting", sent: "A hug is a common greeting among friends.", trans: "Um abraço é um cumprimento comum entre amigos." }
                    ]
                },
                {
                    title: "Nouns & Verbs (Actions)",
                    audio: "TTS: Punctuality is very important in German culture. A firm handshake shows confidence. Pointing your finger is considered a rude gesture. We will celebrate the New Year with fireworks. Many countries observe a holiday in December. How do you greet people in your country? In Japan, it is customary to bow when you say hello. Children are taught to behave well in public. We do not expect a tip in this restaurant. I consider it a great honor to be invited. You must respect the local traditions. I did not mean to offend you with my question.",
                    items:[
                        { term: "Punctuality", sent: "Punctuality is very important in German culture.", trans: "A pontualidade é muito importante na cultura alemã." },
                        { term: "Handshake", sent: "A firm handshake shows confidence.", trans: "Um aperto de mão firme demonstra confiança." },
                        { term: "Gesture", sent: "Pointing your finger is considered a rude gesture.", trans: "Apontar o dedo é considerado um gesto rude." },
                        { term: "To celebrate", sent: "We will celebrate the New Year with fireworks.", trans: "Nós vamos celebrar o Ano Novo com fogos de artifício." },
                        { term: "To observe", sent: "Many countries observe a holiday in December.", trans: "Muitos países observam (comemoram) um feriado em dezembro." },
                        { term: "To greet", sent: "How do you greet people in your country?", trans: "Como você cumprimenta as pessoas no seu país?" },
                        { term: "To bow", sent: "In Japan, it is customary to bow when you say hello.", trans: "No Japão, é costume curvar-se ao dizer olá." },
                        { term: "To behave", sent: "Children are taught to behave well in public.", trans: "As crianças são ensinadas a se comportar bem em público." },
                        { term: "To expect", sent: "We do not expect a tip in this restaurant.", trans: "Nós não esperamos (temos expectativa de) gorjeta neste restaurante." },
                        { term: "To consider", sent: "I consider it a great honor to be invited.", trans: "Eu considero uma grande honra ser convidado." },
                        { term: "To respect", sent: "You must respect the local traditions.", trans: "Você deve respeitar as tradições locais." },
                        { term: "To offend", sent: "I did not mean to offend you with my question.", trans: "Eu não tive a intenção de te ofender com a minha pergunta." }
                    ]
                },
                {
                    title: "Adjectives (Norms)",
                    audio: "TTS: It is polite to say please and thank you. Interrupting someone when they speak is impolite. Arriving late without calling is very rude. You must wear a suit to a formal dinner. We are having an informal barbecue in the backyard. They wore traditional clothes for the ceremony. It is customary to bring wine to a dinner party. Drinking tea is very common in England. A typical breakfast here includes eggs and bacon. Jeans are not acceptable at a fancy restaurant. A nice bouquet of flowers is an appropriate gift. Our cultures are very similar in many ways.",
                    items:[
                        { term: "Polite", sent: "It is polite to say please and thank you.", trans: "É educado dizer por favor e obrigado." },
                        { term: "Impolite", sent: "Interrupting someone when they speak is impolite.", trans: "Interromper alguém quando fala é maleducado." },
                        { term: "Rude", sent: "Arriving late without calling is very rude.", trans: "Chegar atrasado sem avisar é muito grosseiro." },
                        { term: "Formal", sent: "You must wear a suit to a formal dinner.", trans: "Você deve usar terno em um jantar formal." },
                        { term: "Informal", sent: "We are having an informal barbecue in the backyard.", trans: "Nós vamos fazer um churrasco informal no quintal." },
                        { term: "Traditional", sent: "They wore traditional clothes for the ceremony.", trans: "Eles usaram roupas tradicionais para a cerimônia." },
                        { term: "Customary", sent: "It is customary to bring wine to a dinner party.", trans: "É costumeiro (hábito) levar vinho para um jantar." },
                        { term: "Common", sent: "Drinking tea is very common in England.", trans: "Beber chá é muito comum na Inglaterra." },
                        { term: "Typical", sent: "A typical breakfast here includes eggs and bacon.", trans: "Um café da manhã típico aqui inclui ovos e bacon." },
                        { term: "Acceptable", sent: "Jeans are not acceptable at a fancy restaurant.", trans: "Jeans não são aceitáveis em um restaurante chique." },
                        { term: "Appropriate", sent: "A nice bouquet of flowers is an appropriate gift.", trans: "Um belo buquê de flores é um presente apropriado." },
                        { term: "Similar", sent: "Our cultures are very similar in many ways.", trans: "Nossas culturas são muito parecidas em muitos aspectos." }
                    ]
                }
            ],

            // --- 2C: PRACTICE ---
            drillGroups:[
                {
                    title: "Nouns (Culture & Events)",
                    drills:[
                        { q: "The customs, arts, and social institutions of a nation is its ________.", options:[{t: "Culture", c: true}, {t: "Gift", c: false}, {t: "Holiday", c: false}, {t: "Ceremony", c: false}], type: "mcq" },
                        { q: "A traditional and widely accepted way of behaving specific to a society is a ________.", options:[{t: "Wedding", c: false}, {t: "Custom", c: true}, {t: "Greeting", c: false}, {t: "Value", c: false}], type: "mcq" },
                        { q: "A custom passed on from generation to generation is a ________.", options:[{t: "Tradition", c: true}, {t: "Gift", c: false}, {t: "Holiday", c: false}, {t: "Greeting", c: false}], type: "mcq" },
                        { q: "The customary code of polite behavior in society is ________.", options:[{t: "Behavior", c: false}, {t: "Etiquette", c: true}, {t: "Ceremony", c: false}, {t: "Wedding", c: false}], type: "mcq" },
                        { q: "The way in which one acts or conducts oneself, especially toward others, is ________.", options:[{t: "Behavior", c: true}, {t: "Tradition", c: false}, {t: "Culture", c: false}, {t: "Holiday", c: false}], type: "mcq" },
                        { q: "Principles or standards of behavior; one's judgment of what is important in life is a ________.", options:[{t: "Value", c: true}, {t: "Greeting", c: false}, {t: "Festival", c: false}, {t: "Ceremony", c: false}], type: "mcq" },
                        { q: "A day or period of celebration, typically a religious or musical event, is a ________.", options:[{t: "Gift", c: false}, {t: "Festival", c: true}, {t: "Custom", c: false}, {t: "Wedding", c: false}], type: "mcq" },
                        { q: "A day of festivity or recreation when no work is done is a ________.", options:[{t: "Culture", c: false}, {t: "Value", c: false}, {t: "Holiday", c: true}, {t: "Etiquette", c: false}], type: "mcq" },
                        { q: "A formal religious or public occasion, typically one celebrating a particular event, is a ________.", options:[{t: "Greeting", c: false}, {t: "Ceremony", c: true}, {t: "Behavior", c: false}, {t: "Tradition", c: false}], type: "mcq" },
                        { q: "A marriage ceremony, especially considered as including the associated celebrations, is a ________.", options:[{t: "Wedding", c: true}, {t: "Holiday", c: false}, {t: "Custom", c: false}, {t: "Value", c: false}], type: "mcq" },
                        { q: "A thing given willingly to someone without payment is a ________.", options:[{t: "Etiquette", c: false}, {t: "Culture", c: false}, {t: "Gift", c: true}, {t: "Ceremony", c: false}], type: "mcq" },
                        { q: "A polite word or sign of welcome or recognition is a ________.", options:[{t: "Greeting", c: true}, {t: "Wedding", c: false}, {t: "Festival", c: false}, {t: "Behavior", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Nouns & Verbs (Actions)",
                    drills:[
                        { q: "The fact or quality of being on time is ________.", options:[{t: "Punctuality", c: true}, {t: "Handshake", c: false}, {t: "Gesture", c: false}, {t: "To behave", c: false}], type: "mcq" },
                        { q: "An act of grasping someone's hand in greeting is a ________.", options:[{t: "Gesture", c: false}, {t: "Handshake", c: true}, {t: "To bow", c: false}, {t: "Punctuality", c: false}], type: "mcq" },
                        { q: "A movement of part of the body, especially a hand or the head, to express an idea or meaning is a ________.", options:[{t: "Gesture", c: true}, {t: "To expect", c: false}, {t: "To celebrate", c: false}, {t: "Handshake", c: false}], type: "mcq" },
                        { q: "To acknowledge a significant or happy day with a social gathering is ________.", options:[{t: "To observe", c: false}, {t: "To celebrate", c: true}, {t: "To offend", c: false}, {t: "To consider", c: false}], type: "mcq" },
                        { q: "To fulfill or comply with a social, legal, or religious obligation (like a holiday) is ________.", options:[{t: "To observe", c: true}, {t: "To bow", c: false}, {t: "To greet", c: false}, {t: "To behave", c: false}], type: "mcq" },
                        { q: "To give a polite word or sign of welcome to someone is ________.", options:[{t: "To offend", c: false}, {t: "To greet", c: true}, {t: "To consider", c: false}, {t: "To expect", c: false}], type: "mcq" },
                        { q: "To bend the head or upper part of the body as a sign of respect or greeting is ________.", options:[{t: "To respect", c: false}, {t: "To bow", c: true}, {t: "To celebrate", c: false}, {t: "To observe", c: false}], type: "mcq" },
                        { q: "To act or conduct oneself in a specified way is ________.", options:[{t: "To behave", c: true}, {t: "To offend", c: false}, {t: "To expect", c: false}, {t: "To greet", c: false}], type: "mcq" },
                        { q: "To regard (something) as likely to happen or to require (something) as a norm is ________.", options:[{t: "To consider", c: false}, {t: "To respect", c: false}, {t: "To expect", c: true}, {t: "To celebrate", c: false}], type: "mcq" },
                        { q: "To think about something carefully, or to regard someone or something in a specific way is ________.", options:[{t: "To consider", c: true}, {t: "To bow", c: false}, {t: "To behave", c: false}, {t: "To offend", c: false}], type: "mcq" },
                        { q: "To admire someone deeply, or to have due regard for feelings, wishes, or rights is ________.", options:[{t: "To respect", c: true}, {t: "To expect", c: false}, {t: "To observe", c: false}, {t: "To greet", c: false}], type: "mcq" },
                        { q: "To cause to feel resentment or indignation is ________.", options:[{t: "To offend", c: true}, {t: "To celebrate", c: false}, {t: "To behave", c: false}, {t: "To consider", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Adjectives (Norms)",
                    drills:[
                        { q: "Having or showing behavior that is respectful and considerate is ________.", options:[{t: "Polite", c: true}, {t: "Rude", c: false}, {t: "Informal", c: false}, {t: "Impolite", c: false}], type: "mcq" },
                        { q: "Not showing respect; synonymous with rude is ________.", options:[{t: "Polite", c: false}, {t: "Impolite", c: true}, {t: "Formal", c: false}, {t: "Traditional", c: false}], type: "mcq" },
                        { q: "Offensively impolite or ill-mannered is ________.", options:[{t: "Rude", c: true}, {t: "Customary", c: false}, {t: "Polite", c: false}, {t: "Appropriate", c: false}], type: "mcq" },
                        { q: "Done in accordance with rules of convention or etiquette is ________.", options:[{t: "Formal", c: true}, {t: "Casual", c: false}, {t: "Informal", c: false}, {t: "Similar", c: false}], type: "mcq" },
                        { q: "Having a relaxed, friendly, or unofficial style, manner, or nature is ________.", options:[{t: "Formal", c: false}, {t: "Informal", c: true}, {t: "Traditional", c: false}, {t: "Customary", c: false}], type: "mcq" },
                        { q: "Existing in or as part of a tradition; long-established is ________.", options:[{t: "Traditional", c: true}, {t: "Rude", c: false}, {t: "Acceptable", c: false}, {t: "Impolite", c: false}], type: "mcq" },
                        { q: "According to the customs or usual practices associated with a particular society is ________.", options:[{t: "Customary", c: true}, {t: "Informal", c: false}, {t: "Similar", c: false}, {t: "Rude", c: false}], type: "mcq" },
                        { q: "Occurring, found, or done often; prevalent is ________.", options:[{t: "Common", c: true}, {t: "Polite", c: false}, {t: "Formal", c: false}, {t: "Appropriate", c: false}], type: "mcq" },
                        { q: "Having the distinctive qualities of a particular type of person or thing is ________.", options:[{t: "Typical", c: true}, {t: "Rude", c: false}, {t: "Impolite", c: false}, {t: "Informal", c: false}], type: "mcq" },
                        { q: "Able to be agreed on; suitable is ________.", options:[{t: "Acceptable", c: true}, {t: "Rude", c: false}, {t: "Traditional", c: false}, {t: "Similar", c: false}], type: "mcq" },
                        { q: "Suitable or proper in the circumstances is ________.", options:[{t: "Appropriate", c: true}, {t: "Impolite", c: false}, {t: "Formal", c: false}, {t: "Customary", c: false}], type: "mcq" },
                        { q: "Looking or being almost, but not exactly, the same is ________.", options:[{t: "Similar", c: true}, {t: "Common", c: false}, {t: "Typical", c: false}, {t: "Acceptable", c: false}], type: "mcq" }
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
                    title: "Customs & Traditions",
                    audio: "TTS: It's a local custom to. It's traditional to. In my culture. A national holiday. Cultural heritage. A popular festival.",
                    explanation: "Phrases used to explain the typical habits, celebrations, and historical background of a country.<br><span style='color:var(--primary-blue); font-style:italic;'>(Frases usadas para explicar os hábitos típicos, celebrações e o histórico de um país.)</span>",
                    samples:[
                        { en: "<b>It's a local custom to</b> leave a tip.", pt: "<span style='color:var(--primary-blue)'>(É um costume local deixar uma gorjeta.)</span>" },
                        { en: "<b>It's traditional to</b> wear white at a wedding.", pt: "<span style='color:var(--primary-blue)'>(É tradicional usar branco num casamento.)</span>" },
                        { en: "<b>In my culture</b>, family is the most important thing.", pt: "<span style='color:var(--primary-blue)'>(Na minha cultura, a família é a coisa mais importante.)</span>" },
                        { en: "Independence Day is <b>a national holiday</b>.", pt: "<span style='color:var(--primary-blue)'>(O Dia da Independência é um feriado nacional.)</span>" },
                        { en: "These ancient buildings are part of our <b>cultural heritage</b>.", pt: "<span style='color:var(--primary-blue)'>(Estes edifícios antigos são parte da nossa herança cultural.)</span>" },
                        { en: "Carnival is <b>a popular festival</b> in Brazil.", pt: "<span style='color:var(--primary-blue)'>(O Carnaval é um festival popular no Brasil.)</span>" }
                    ]
                },
                {
                    title: "Etiquette & Behavior",
                    audio: "TTS: It's considered polite. It's considered rude. Table manners. Make eye contact. Shake hands. A dress code.",
                    explanation: "Essential vocabulary for discussing what is socially acceptable and polite in interactions.<br><span style='color:var(--primary-blue); font-style:italic;'>(Vocabulário essencial para discutir o que é socialmente aceitável e educado em interações.)</span>",
                    samples:[
                        { en: "<b>It's considered polite</b> to open the door for others.", pt: "<span style='color:var(--primary-blue)'>(É considerado educado abrir a porta para os outros.)</span>" },
                        { en: "<b>It's considered rude</b> to speak loudly on the phone.", pt: "<span style='color:var(--primary-blue)'>(É considerado rude/maleducado falar alto no telefone.)</span>" },
                        { en: "Good <b>table manners</b> are important when eating out.", pt: "<span style='color:var(--primary-blue)'>(Boas maneiras à mesa são importantes ao comer fora.)</span>" },
                        { en: "You should <b>make eye contact</b> during an interview.", pt: "<span style='color:var(--primary-blue)'>(Você deve fazer contato visual durante uma entrevista.)</span>" },
                        { en: "We always <b>shake hands</b> when we meet someone new.", pt: "<span style='color:var(--primary-blue)'>(Nós sempre apertamos as mãos quando conhecemos alguém novo.)</span>" },
                        { en: "Is there <b>a dress code</b> for the party tonight?", pt: "<span style='color:var(--primary-blue)'>(Há um código de vestimenta / traje para a festa hoje à noite?)</span>" }
                    ]
                },
                {
                    title: "Asking & Comparing",
                    audio: "TTS: Is it okay to. What should I know before. How do you greet. We do it differently. It's the same in my culture. A key difference is.",
                    explanation: "Phrases for politely inquiring about foreign customs and comparing them to your own.<br><span style='color:var(--primary-blue); font-style:italic;'>(Frases para perguntar educadamente sobre costumes estrangeiros e compará-los com os seus.)</span>",
                    samples:[
                        { en: "<b>Is it okay to</b> wear jeans here?", pt: "<span style='color:var(--primary-blue)'>(Tudo bem usar jeans aqui?)</span>" },
                        { en: "<b>What should I know before</b> visiting your home?", pt: "<span style='color:var(--primary-blue)'>(O que devo saber antes de visitar sua casa?)</span>" },
                        { en: "<b>How do you greet</b> older people in your country?", pt: "<span style='color:var(--primary-blue)'>(Como você cumprimenta as pessoas mais velhas no seu país?)</span>" },
                        { en: "That is interesting, <b>we do it differently</b>.", pt: "<span style='color:var(--primary-blue)'>(Isso é interessante, nós fazemos isso de forma diferente.)</span>" },
                        { en: "We bring gifts too. <b>It's the same in my culture</b>.", pt: "<span style='color:var(--primary-blue)'>(Nós levamos presentes também. É a mesma coisa na minha cultura.)</span>" },
                        { en: "<b>A key difference is</b> that we eat very late.", pt: "<span style='color:var(--primary-blue)'>(Uma diferença fundamental é que nós comemos muito tarde.)</span>" }
                    ]
                }
            ],

            // --- 3B: DIALOGUES ---
            dialogueGroups:[
                {
                    title: "Dialogue 1: Local Customs",
                    audio: "TTS: I am excited for the trip. What is it a local custom to do there? Well, attending a popular festival in the summer is huge. That sounds amazing. Is the festival part of your cultural heritage? Yes, it is a very old tradition.",
                    lines:[
                        { speaker: "Tourist", text: "I am excited for the trip. What is it a local custom to do there?", pt: "(Estou animado para a viagem. O que é um costume local de se fazer lá?)" },
                        { speaker: "Guide", text: "Well, attending a popular festival in the summer is huge.", pt: "(Bem, participar de um festival popular no verão é enorme.)" },
                        { speaker: "Tourist", text: "That sounds amazing. Is the festival part of your cultural heritage?", pt: "(Isso soa incrível. O festival faz parte da sua herança cultural?)" },
                        { speaker: "Guide", text: "Yes, it is a very old tradition.", pt: "(Sim, é uma tradição muito antiga.)" }
                    ]
                },
                {
                    title: "Dialogue 2: Visiting Rules",
                    audio: "TTS: What should I know before visiting the temple? It's considered polite to take off your hat. Oh, okay. Is there a dress code? Yes, you should wear formal clothes.",
                    lines:[
                        { speaker: "John", text: "What should I know before visiting the temple?", pt: "(O que eu devo saber antes de visitar o templo?)" },
                        { speaker: "Lisa", text: "It's considered polite to take off your hat.", pt: "(É considerado educado tirar o chapéu.)" },
                        { speaker: "John", text: "Oh, okay. Is there a dress code?", pt: "(Ah, ok. Tem código de vestimenta?)" },
                        { speaker: "Lisa", text: "Yes, you should wear formal clothes.", pt: "(Sim, você deve usar roupas formais.)" }
                    ]
                },
                {
                    title: "Dialogue 3: Greetings",
                    audio: "TTS: How do you greet people in your office? We usually shake hands. We do it differently in my company. We just say hello.",
                    lines:[
                        { speaker: "Emma", text: "How do you greet people in your office?", pt: "(Como você cumprimenta as pessoas no seu escritório?)" },
                        { speaker: "Tom", text: "We usually shake hands. We do it differently in my company. We just say hello.", pt: "(Geralmente apertamos as mãos. Nós fazemos diferente na minha empresa. Nós só dizemos olá.)" } // Logic fix needed
                    ]
                },
                {
                    title: "Dialogue 3: Greetings", // Fixed
                    audio: "TTS: How do you greet people in your office? We usually shake hands. Really? We do it differently. We just bow.",
                    lines:[
                        { speaker: "Emma", text: "How do you greet people in your office?", pt: "(Como você cumprimenta as pessoas no seu escritório?)" },
                        { speaker: "Tom", text: "We usually shake hands. Really? We do it differently. We just bow.", pt: "(Geralmente apertamos as mãos. Sério? Nós fazemos diferente. Nós só nos curvamos.)" } // Still bad flow.
                    ]
                },
                {
                    title: "Dialogue 3: Greetings", // Fixed properly
                    audio: "TTS: How do you greet people in your office? We usually shake hands. Really? We do it differently. We just bow.",
                    lines:[
                        { speaker: "Emma", text: "How do you greet people in your office?", pt: "(Como você cumprimenta as pessoas no seu escritório?)" },
                        { speaker: "Tom", text: "We usually shake hands.", pt: "(Geralmente apertamos as mãos.)" },
                        { speaker: "Emma", text: "Really? We do it differently. We just bow.", pt: "(Sério? Nós fazemos diferente. Nós só nos curvamos.)" }
                    ]
                },
                {
                    title: "Dialogue 4: Dining & Manners",
                    audio: "TTS: In my culture, we share all the food on the table. Good table manners are very important to us, too. It's considered rude to reach across the table here. Yes, you should always ask someone to pass the dish.",
                    lines:[
                        { speaker: "Anna", text: "In my culture, we share all the food on the table.", pt: "(Na minha cultura, nós compartilhamos toda a comida na mesa.)" },
                        { speaker: "David", text: "Good table manners are very important to us, too. It's considered rude to reach across the table here.", pt: "(Boas maneiras à mesa são muito importantes para nós também. É considerado falta de educação cruzar o braço sobre a mesa aqui.)" }, // Adjusted flow
                        { speaker: "Anna", text: "Yes, you should always ask someone to pass the dish.", pt: "(Sim, você deve sempre pedir a alguém para passar o prato.)" }
                    ]
                },
                {
                    title: "Dialogue 5: Commonalities",
                    audio: "TTS: Tomorrow is a national holiday, so we don't work. Oh, it's the same in my culture! Do you celebrate it with food? Yes, it's traditional to eat a big turkey dinner.",
                    lines:[
                        { speaker: "Mark", text: "Tomorrow is a national holiday, so we don't work.", pt: "(Amanhã é um feriado nacional, então nós não trabalhamos.)" },
                        { speaker: "Lisa", text: "Oh, it's the same in my culture! Do you celebrate it with food?", pt: "(Ah, é igual na minha cultura! Vocês celebram com comida?)" },
                        { speaker: "Mark", text: "Yes, it's traditional to eat a big turkey dinner.", pt: "(Sim, é tradicional comer um grande jantar com peru.)" }
                    ]
                },
                {
                    title: "Dialogue 6: Comparisons",
                    audio: "TTS: Is it okay to call my boss by his first name? Not really. A key difference is that we are very formal here. I understand. In my country, we make eye contact and talk casually with the boss.",
                    lines:[
                        { speaker: "Carlos", text: "Is it okay to call my boss by his first name?", pt: "(Tudo bem chamar meu chefe pelo primeiro nome?)" },
                        { speaker: "Sophie", text: "Not really. A key difference is that we are very formal here.", pt: "(Na verdade não. Uma diferença principal é que nós somos muito formais aqui.)" },
                        { speaker: "Carlos", text: "I understand. In my country, we make eye contact and talk casually with the boss.", pt: "(Eu entendo. No meu país, nós fazemos contato visual e conversamos casualmente com o chefe.)" }
                    ]
                }
            ],

            // --- 3C: PRACTICE ---
            grammarDrillGroups:[
                {
                    title: "Customs & Traditions",
                    drills:[
                        { q: "It's a local ________ to take off your shoes.", options:[{t: "custom", c: true}, {t: "heritage", c: false}, {t: "holiday", c: false}, {t: "festival", c: false}], type: "mcq" },
                        { q: "It's ________ to wear white at a wedding.", options:[{t: "culture", c: false}, {t: "traditional", c: true}, {t: "holiday", c: false}, {t: "heritage", c: false}], type: "mcq" },
                        { q: "In my ________, family is the most important thing.", options:[{t: "festival", c: false}, {t: "custom", c: false}, {t: "culture", c: true}, {t: "holiday", c: false}], type: "mcq" },
                        { q: "Independence Day is a national ________.", options:[{t: "holiday", c: true}, {t: "custom", c: false}, {t: "traditional", c: false}, {t: "culture", c: false}], type: "mcq" },
                        { q: "These ancient buildings are part of our cultural ________.", options:[{t: "custom", c: false}, {t: "festival", c: false}, {t: "holiday", c: false}, {t: "heritage", c: true}], type: "mcq" },
                        { q: "Carnival is a popular ________ in Brazil.", options:[{t: "holiday", c: false}, {t: "festival", c: true}, {t: "custom", c: false}, {t: "heritage", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Etiquette & Behavior",
                    drills:[
                        { q: "It's considered ________ to open the door for others.", options:[{t: "rude", c: false}, {t: "polite", c: true}, {t: "manners", c: false}, {t: "code", c: false}], type: "mcq" },
                        { q: "It's considered ________ to speak loudly on the phone.", options:[{t: "rude", c: true}, {t: "polite", c: false}, {t: "manners", c: false}, {t: "code", c: false}], type: "mcq" },
                        { q: "Good table ________ are important when eating out.", options:[{t: "codes", c: false}, {t: "manners", c: true}, {t: "rude", c: false}, {t: "polite", c: false}], type: "mcq" },
                        { q: "You should make eye ________ during an interview.", options:[{t: "contact", c: true}, {t: "hands", c: false}, {t: "manners", c: false}, {t: "code", c: false}], type: "mcq" },
                        { q: "We always ________ hands when we meet someone new.", options:[{t: "make", c: false}, {t: "shake", c: true}, {t: "take", c: false}, {t: "hold", c: false}], type: "mcq" },
                        { q: "Is there a dress ________ for the party tonight?", options:[{t: "manner", c: false}, {t: "polite", c: false}, {t: "code", c: true}, {t: "contact", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Asking & Comparing",
                    drills:[
                        { q: "Is it ________ to wear jeans here?", options:[{t: "okay", c: true}, {t: "know", c: false}, {t: "greet", c: false}, {t: "same", c: false}], type: "mcq" },
                        { q: "What should I ________ before visiting your home?", options:[{t: "know", c: true}, {t: "okay", c: false}, {t: "greet", c: false}, {t: "same", c: false}], type: "mcq" },
                        { q: "How do you ________ older people in your country?", options:[{t: "know", c: false}, {t: "greet", c: true}, {t: "okay", c: false}, {t: "differently", c: false}], type: "mcq" },
                        { q: "That is interesting, we do it ________.", options:[{t: "same", c: false}, {t: "differently", c: true}, {t: "okay", c: false}, {t: "difference", c: false}], type: "mcq" },
                        { q: "We bring gifts too. It's the ________ in my culture.", options:[{t: "same", c: true}, {t: "differently", c: false}, {t: "difference", c: false}, {t: "okay", c: false}], type: "mcq" },
                        { q: "A key ________ is that we eat very late.", options:[{t: "differently", c: false}, {t: "same", c: false}, {t: "difference", c: true}, {t: "okay", c: false}], type: "mcq" }
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
                { text: "What should I know before visiting your home? ↘", audio: "TTS: What should I know before visiting your home?" },
                { text: "In my culture, punctuality is very important. ↘", audio: "TTS: In my culture, punctuality is very important." },
                { text: "Is it okay to wear casual clothes to the party? ↗", audio: "TTS: Is it okay to wear casual clothes to the party?" },
                { text: "It's considered polite to take off your shoes. ↘", audio: "TTS: It's considered polite to take off your shoes." },
                { text: "How do you greet people formally in your country? ↘", audio: "TTS: How do you greet people formally in your country?" },
                { text: "It is customary to bow when you greet someone. ↘", audio: "TTS: It is customary to bow when you greet someone." },
                { text: "We do it differently; we usually shake hands. ↘", audio: "TTS: We do it differently; we usually shake hands." },
                { text: "It's considered rude to not make eye contact. ↘", audio: "TTS: It's considered rude to not make eye contact." },
                { text: "A key difference is our table manners. ↘", audio: "TTS: A key difference is our table manners." },
                { text: "Oh, it's exactly the same in my culture! ↘", audio: "TTS: Oh, it's exactly the same in my culture!" }
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
                    audio: "TTS: Tom: Is there a dress code for the wedding? Lisa: Yes, it is very formal. Tom: Should I bring a gift for the bride and groom? Lisa: Yes, that is considered polite.",
                    text: "Tom: Is there a dress [code] for the wedding?<br>Lisa: Yes, it is very [formal].<br>Tom: Should I bring a [gift] for the bride and groom?<br>Lisa: Yes, that is considered [polite]."
                },
                {
                    type: "dropdown",
                    instruction: "Listen to the dialogue about business etiquette.",
                    audio: "TTS: David: How do you greet people here? Emma: A firm handshake is very common. David: What about making eye contact? Emma: Yes, that is highly acceptable and expected.",
                    questions:[
                        { q: "David: How do you [greet* | bow | offend] people here?", a: "greet" },
                        { q: "Emma: A firm[handshake* | gesture | punctuality] is very common.", a: "handshake" },
                        { q: "David: What about making eye[contact* | code | manners]?", a: "contact" },
                        { q: "Emma: Yes, that is highly[acceptable* | rude | impolite] and expected.", a: "acceptable" }
                    ]
                },
                {
                    type: "audio-choice",
                    instruction: "Listen to the speaker. What is considered rude in his culture?",
                    audio: "TTS: In my culture, dinner table manners are very strict. It is considered rude to start eating before the host. However, arriving a little bit late to a party is totally acceptable and informal.",
                    options:[
                        { t: "Arriving late is considered extremely rude.", c: false },
                        { t: "Starting to eat before the host is considered rude.", c: true },
                        { t: "You must shake hands before dinner.", c: false },
                        { t: "You should eat before the host sits down.", c: false }
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
                    title: "Dialogue - Festival Traditions",
                    audio: "TTS: Anna: I am so excited for the lantern festival tonight! It is a great cultural heritage. Ken: Yes, it is a very popular festival in our country. Anna: What should I know before we go? Is there a dress code? Ken: No, it's very casual. But it is traditional to wear red for good luck. Anna: Oh, that's interesting! We do it differently in my culture. We wear white for New Year's. Ken: That is a key difference. But the most important value is just to celebrate and be happy.",
                    body: "<b>Anna:</b> I am so excited for the lantern [festival](tooltip:festival) tonight! It is a great [cultural heritage](tooltip:cultural-heritage).<br><b>Ken:</b> Yes, it is [a popular festival](tooltip:popular-festival) in our country.<br><b>Anna:</b>[What should I know before](tooltip:what-know-before) we go? Is there [a dress code](tooltip:dress-code)?<br><b>Ken:</b> No, it's very [casual](tooltip:casual). But[it's traditional to](tooltip:its-traditional-to) wear red for good luck.<br><b>Anna:</b> Oh, that's interesting![We do it differently](tooltip:do-differently) [in my culture](tooltip:in-my-culture). We wear white for New Year's.<br><b>Ken:</b> That is [a key difference is](tooltip:key-difference). But the most important [value](tooltip:value) is just to [celebrate](tooltip:celebrate) and be happy.",
                    questions:[
                        { q: "What event are Anna and Ken attending?", options:[{t: "A formal wedding.", c: false}, {t: "A popular lantern festival.", c: true}, {t: "A business meeting.", c: false}], type: "mcq" },
                        { q: "What is traditional to wear to the festival for good luck?", options:[{t: "White", c: false}, {t: "Black", c: false}, {t: "Red", c: true}], type: "mcq" },
                        { q: "What do people in Anna's culture wear for New Year's?", options:[{t: "White", c: true}, {t: "Red", c: false}, {t: "Casual clothes", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Dialogue - Business Etiquette",
                    audio: "TTS: Mark: I have a meeting with the new international clients today. How do you greet them? Sophie: It is customary to bow first. A handshake is also acceptable, but a bow shows more respect. Mark: Good to know. Should I make eye contact? Sophie: Yes, but don't stare. Also, punctuality is very important to them. Don't be late! Mark: I will be there ten minutes early. I don't want to offend anyone. Sophie: That is very appropriate. Good luck with the meeting!",
                    body: "<b>Mark:</b> I have a meeting with the new international clients today.[How do you greet](tooltip:how-greet) them?<br><b>Sophie:</b> It is [customary](tooltip:customary) to[bow](tooltip:bow) first. A [handshake](tooltip:handshake) is also [acceptable](tooltip:acceptable), but a bow shows more [respect](tooltip:respect).<br><b>Mark:</b> Good to know. Should I[make eye contact](tooltip:make-eye-contact)?<br><b>Sophie:</b> Yes, but don't stare. Also, [punctuality](tooltip:punctuality) is very important to them. Don't be late!<br><b>Mark:</b> I will be there ten minutes early. I don't want to[offend](tooltip:offend) anyone.<br><b>Sophie:</b> That is very [appropriate](tooltip:appropriate). Good luck with the meeting!",
                    questions:[
                        { q: "How is it customary to greet the international clients?", options:[{t: "By shaking hands only.", c: false}, {t: "By bowing first.", c: true}, {t: "By making strong eye contact.", c: false}], type: "mcq" },
                        { q: "Why will Mark arrive ten minutes early?", options:[{t: "Because he wants to leave early.", c: false}, {t: "Because punctuality is very important and he doesn't want to offend them.", c: true}, {t: "Because he needs to buy a gift.", c: false}], type: "mcq" },
                        { q: "Is a handshake acceptable?", options:[{t: "Yes, it is also acceptable.", c: true}, {t: "No, it is considered very rude.", c: false}, {t: "Yes, but only for women.", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Email - Wedding Traditions",
                    audio: "TTS: Subject: Cultural differences! Hi John, I just came back from my friend's wedding in India. It was so beautiful! It is considered polite to wear bright colors there. In my culture, we usually wear dark suits or formal dresses, so that was a key difference! However, there are many similarities too. For example, giving a gift to the bride and groom is common in both our cultures. It's the same in my culture! Observing these new traditions was a typical, yet wonderful experience. Best, Lucas.",
                    body: "<b>From: Lucas</b><br><b>To: John</b><br>Subject: Cultural differences!<br><br>Hi John,<br>I just came back from my friend's [wedding](tooltip:wedding) in India. It was so beautiful! [It's considered polite](tooltip:considered-polite) to wear bright colors there. [In my culture](tooltip:in-my-culture), we usually wear dark suits or [formal](tooltip:formal) dresses, so that was[a key difference is](tooltip:key-difference)! However, there are many [similar](tooltip:similar) traditions too. For example, giving a [gift](tooltip:gift) to the bride and groom is [common](tooltip:common) in both our cultures.[It's the same in my culture](tooltip:same-in-culture)! [To observe](tooltip:observe) these new [traditions](tooltip:tradition) was a [typical](tooltip:typical), yet wonderful experience.<br><br>Best, Lucas.",
                    questions:[
                        { q: "What was a key difference in the wedding Lucas attended?", options:[{t: "People gave gifts to the bride and groom.", c: false}, {t: "It is considered polite to wear bright colors.", c: true}, {t: "The ceremony was very quiet.", c: false}], type: "mcq" },
                        { q: "What do people in Lucas's culture usually wear to weddings?", options:[{t: "Casual jeans.", c: false}, {t: "Dark suits or formal dresses.", c: true}, {t: "Bright, colorful clothes.", c: false}], type: "mcq" },
                        { q: "What is a similarity between the two cultures?", options:[{t: "Giving a gift to the married couple.", c: true}, {t: "Wearing bright colors.", c: false}, {t: "Arriving very late.", c: false}], type: "mcq" }
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
                { type: "matching", instruction: "Match the nouns to their definitions.", pairs:[
                    { left: "Culture", right: "Customs and arts of a nation", val: "1" },
                    { left: "Etiquette", right: "Code of polite behavior", val: "2" },
                    { left: "Punctuality", right: "Being on time", val: "3" },
                    { left: "Gesture", right: "Body movement to express meaning", val: "4" }
                ]},
                { type: "matching", instruction: "Match the verbs to their meanings.", pairs:[
                    { left: "To greet", right: "Say hello to someone", val: "1" },
                    { left: "To bow", right: "Bend the upper body", val: "2" },
                    { left: "To offend", right: "Cause someone to feel upset", val: "3" },
                    { left: "To respect", right: "Admire and treat well", val: "4" }
                ]},
                { type: "matching", instruction: "Match the opposites.", pairs:[
                    { left: "Polite", right: "Rude", val: "1" },
                    { left: "Formal", right: "Informal", val: "2" },
                    { left: "Appropriate", right: "Inappropriate / Unacceptable", val: "3" },
                    { left: "Similar", right: "Different", val: "4" }
                ]},
                { type: "matching", instruction: "Match the phrase halves.", pairs:[
                    { left: "A national", right: "holiday", val: "1" },
                    { left: "Cultural", right: "heritage", val: "2" },
                    { left: "Table", right: "manners", val: "3" },
                    { left: "Dress", right: "code", val: "4" }
                ]},

                // --- WORD ORDER (5-14) ---
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "custom / local / a / It's / to / bow / .", correct: "It's a local custom to bow ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "to / traditional / It's / wear / white / .", correct: "It's traditional to wear white ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "culture / family / In / my / is / important / .", correct: "In my culture family is important ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "holiday / is / Today / a / national / .", correct: "Today is a national holiday ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "polite / It's / considered / to / smile / .", correct: "It's considered polite to smile ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "rude / It's / considered / to / point / .", correct: "It's considered rude to point ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "code / Is / there / a / dress / ?", correct: "Is there a dress code ?" },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "okay / Is / it / to / hands / shake / ?", correct: "Is it okay to shake hands ?" },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "my / the / It's / same / in / culture / .", correct: "It's the same in my culture ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "difference / key / A / is / food / the / .", correct: "A key difference is the food ." },

                // --- CLICKABLE ERROR (15-24) ---
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "It's a local [habit](error:custom) to leave a tip." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "It's [tradition](error:traditional) to wear formal clothes." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "[On](error:In) my culture, we eat late." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "It's[considers](error:considered) polite to help." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "Good table [behaviors](error:manners) are important." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "You should make eye [touch](error:contact)." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "We always [take](error:shake) hands." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "Is it [fine](error:okay) to take pictures here?" },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "We do it [different](error:differently) here." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "It's the [similar](error:same) in my culture." },

                // --- ODD ONE OUT (25-30) ---
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Culture)", options:[{t: "Custom", c: false}, {t: "Tradition", c: false}, {t: "Value", c: false}, {t: "Gift", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Actions)", options:[{t: "To bow", c: false}, {t: "To greet", c: false}, {t: "To shake hands", c: false}, {t: "To offend", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Positive behavior)", options:[{t: "Polite", c: false}, {t: "Appropriate", c: false}, {t: "Acceptable", c: false}, {t: "Rude", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Events)", options:[{t: "Festival", c: false}, {t: "Holiday", c: false}, {t: "Ceremony", c: false}, {t: "Punctuality", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Comparison)", options:[{t: "Similar", c: false}, {t: "Different", c: false}, {t: "Same", c: false}, {t: "Formal", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Phrases)", options:[{t: "Make eye contact", c: false}, {t: "Shake hands", c: false}, {t: "Take off shoes", c: false}, {t: "A key difference is", c: true}] },

                // --- TRUE / FALSE (31-35) ---
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "If an action is 'considered rude', you should probably not do it.", correct: "true"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "A 'custom' is a very rare and unusual behavior that nobody does.", correct: "false"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "'Punctuality' means arriving exactly on time for an event or meeting.", correct: "true"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "If two cultures are 'similar', it means they are completely opposite.", correct: "false"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "A 'dress code' tells you what kind of clothes are appropriate to wear.", correct: "true"}] },

                // --- MCQ (36-39) ---
                { type: "mcq", instruction: "Choose the correct word.<br>In many Asian countries, it is customary to ________ when greeting someone, rather than shaking hands.", options:[{t: "offend", c: false}, {t: "bow", c: true}, {t: "celebrate", c: false}, {t: "expect", c: false}] },
                { type: "mcq", instruction: "Choose the correct phrase.<br>When you are not sure if an action is allowed, you ask: 'Is it ________ to take photos here?'", options:[{t: "polite", c: false}, {t: "okay", c: true}, {t: "formal", c: false}, {t: "rude", c: false}] },
                { type: "mcq", instruction: "Choose the correct phrase.<br>If someone does something exactly like you do in your country, you say: 'It's the ________ in my culture!'", options:[{t: "difference", c: false}, {t: "appropriate", c: false}, {t: "same", c: true}, {t: "custom", c: false}] },
                { type: "mcq", instruction: "Choose the correct word.<br>Not chewing with your mouth open is an example of good table ________.", options:[{t: "etiquette", c: false}, {t: "manners", c: true}, {t: "values", c: false}, {t: "customs", c: false}] }, // Manners is the targeted word for table, though etiquette is similar.

                // --- CATEGORIZE (40) ---
                { type: "categorize", instruction: "Sort the adjectives into Polite/Acceptable and Impolite/Rude.", 
                    categories:[{id: "good", name: "Polite/Acceptable"}, {id: "bad", name: "Impolite/Rude"}],
                    items:[
                        {text: "Appropriate", catId: "good"}, 
                        {text: "Acceptable", catId: "good"}, 
                        {text: "Polite", catId: "good"}, 
                        {text: "Rude", catId: "bad"}, 
                        {text: "Impolite", catId: "bad"}, 
                        {text: "Offensive (offend)", catId: "bad"}
                    ] 
                }
            ]
        },

        // ======================================================
        // STEP 8: WRITING PRACTICE
        // ======================================================
        {
            title: "Writing Practice",
            instruction: "Write a short message (5-7 sentences) to a foreigner who is going to visit your country for the first time. Give them advice on local customs, greetings, and table manners. Mention what is considered polite and what they should avoid doing.",
            example: "Hi Mark! I am so excited that you are visiting my country. What should you know before you arrive? Well, in my culture, it is considered polite to shake hands and make eye contact when you meet someone. A key difference is that we eat dinner very late, around 9 PM. Good table manners are important, so wait until the host sits down before eating. It is perfectly acceptable to wear casual clothes to most places. However, being late is considered rude, so punctuality is important! Safe travels!",
            prompts:[
                "Describe how people greet each other (e.g., shake hands, bow).",
                "Mention a specific custom or tradition (e.g., taking off shoes, dinner time).",
                "Explain what is considered polite or rude.",
                "Give advice on dress code or punctuality."
            ]
        },

        // ======================================================
        // STEP 9: FLASHCARDS
        // ======================================================
        {
            title: "Flashcards",
            items:[
                // 2A Items (36 items)
                { term: "Culture", definition: "The arts and other manifestations of human intellectual achievement regarded collectively.", defTrans: "Cultura", example: "Learning a new language helps you understand a new culture.", audioFront: "TTS: Culture", audioBack: "TTS: Learning a new language helps you understand a new culture." },
                { term: "Custom", definition: "A traditional and widely accepted way of behaving or doing something specific to a particular society.", defTrans: "Costume", example: "Taking off your shoes is a local custom.", audioFront: "TTS: Custom", audioBack: "TTS: Taking off your shoes is a local custom." },
                { term: "Tradition", definition: "The transmission of customs or beliefs from generation to generation.", defTrans: "Tradição", example: "Eating turkey is a Christmas tradition.", audioFront: "TTS: Tradition", audioBack: "TTS: Eating turkey is a Christmas tradition." },
                { term: "Etiquette", definition: "The customary code of polite behavior in society.", defTrans: "Etiqueta (boas maneiras)", example: "You must learn the proper dining etiquette.", audioFront: "TTS: Etiquette", audioBack: "TTS: You must learn the proper dining etiquette." },
                { term: "Behavior", definition: "The way in which one acts or conducts oneself.", defTrans: "Comportamento", example: "His bad behavior surprised everyone at the party.", audioFront: "TTS: Behavior", audioBack: "TTS: His bad behavior surprised everyone at the party." },
                { term: "Value", definition: "Principles or standards of behavior.", defTrans: "Valor (princípio moral)", example: "Honesty is a very important family value.", audioFront: "TTS: Value", audioBack: "TTS: Honesty is a very important family value." },
                { term: "Festival", definition: "A day or period of celebration, typically a religious commemoration.", defTrans: "Festival", example: "We went to the lantern festival in the city.", audioFront: "TTS: Festival", audioBack: "TTS: We went to the lantern festival in the city." },
                { term: "Holiday", definition: "A day of festivity or recreation when no work is done.", defTrans: "Feriado", example: "Independence Day is a national holiday.", audioFront: "TTS: Holiday", audioBack: "TTS: Independence Day is a national holiday." },
                { term: "Ceremony", definition: "A formal religious or public occasion.", defTrans: "Cerimônia", example: "The graduation ceremony was very beautiful.", audioFront: "TTS: Ceremony", audioBack: "TTS: The graduation ceremony was very beautiful." },
                { term: "Wedding", definition: "A marriage ceremony.", defTrans: "Casamento (evento)", example: "They invited me to their traditional wedding.", audioFront: "TTS: Wedding", audioBack: "TTS: They invited me to their traditional wedding." },
                { term: "Gift", definition: "A thing given willingly to someone without payment.", defTrans: "Presente", example: "It is polite to bring a small gift for the host.", audioFront: "TTS: Gift", audioBack: "TTS: It is polite to bring a small gift for the host." },
                { term: "Greeting", definition: "A polite word or sign of welcome.", defTrans: "Saudação / Cumprimento", example: "A hug is a common greeting among friends.", audioFront: "TTS: Greeting", audioBack: "TTS: A hug is a common greeting among friends." },
                
                { term: "Punctuality", definition: "The fact or quality of being on time.", defTrans: "Pontualidade", example: "Punctuality is very important in German culture.", audioFront: "TTS: Punctuality", audioBack: "TTS: Punctuality is very important in German culture." },
                { term: "Handshake", definition: "An act of grasping someone's hand in greeting.", defTrans: "Aperto de mão", example: "A firm handshake shows confidence.", audioFront: "TTS: Handshake", audioBack: "TTS: A firm handshake shows confidence." },
                { term: "Gesture", definition: "A movement of part of the body to express an idea or meaning.", defTrans: "Gesto", example: "Pointing your finger is considered a rude gesture.", audioFront: "TTS: Gesture", audioBack: "TTS: Pointing your finger is considered a rude gesture." },
                { term: "To celebrate", definition: "To acknowledge a significant or happy day with a social gathering.", defTrans: "Celebrar", example: "We will celebrate the New Year with fireworks.", audioFront: "TTS: To celebrate", audioBack: "TTS: We will celebrate the New Year with fireworks." },
                { term: "To observe", definition: "To fulfill or comply with a social or religious obligation.", defTrans: "Observar (feriado)", example: "Many countries observe a holiday in December.", audioFront: "TTS: To observe", audioBack: "TTS: Many countries observe a holiday in December." },
                { term: "To greet", definition: "To give a polite word or sign of welcome to someone.", defTrans: "Cumprimentar", example: "How do you greet people in your country?", audioFront: "TTS: To greet", audioBack: "TTS: How do you greet people in your country?" },
                { term: "To bow", definition: "To bend the head or upper part of the body as a sign of respect.", defTrans: "Curvar-se", example: "In Japan, it is customary to bow when you say hello.", audioFront: "TTS: To bow", audioBack: "TTS: In Japan, it is customary to bow when you say hello." },
                { term: "To behave", definition: "To act or conduct oneself in a specified way.", defTrans: "Comportar-se", example: "Children are taught to behave well in public.", audioFront: "TTS: To behave", audioBack: "TTS: Children are taught to behave well in public." },
                { term: "To expect", definition: "To regard (something) as likely to happen or to require as a norm.", defTrans: "Esperar (expectativa)", example: "We do not expect a tip in this restaurant.", audioFront: "TTS: To expect", audioBack: "TTS: We do not expect a tip in this restaurant." },
                { term: "To consider", definition: "To think about carefully, or to regard in a specific way.", defTrans: "Considerar", example: "I consider it a great honor to be invited.", audioFront: "TTS: To consider", audioBack: "TTS: I consider it a great honor to be invited." },
                { term: "To respect", definition: "To admire someone deeply, or to have due regard for feelings/rights.", defTrans: "Respeitar", example: "You must respect the local traditions.", audioFront: "TTS: To respect", audioBack: "TTS: You must respect the local traditions." },
                { term: "To offend", definition: "To cause to feel resentment or indignation.", defTrans: "Ofender", example: "I did not mean to offend you with my question.", audioFront: "TTS: To offend", audioBack: "TTS: I did not mean to offend you with my question." },

                { term: "Polite", definition: "Having or showing behavior that is respectful and considerate.", defTrans: "Educado(a)", example: "It is polite to say please and thank you.", audioFront: "TTS: Polite", audioBack: "TTS: It is polite to say please and thank you." },
                { term: "Impolite", definition: "Not showing respect; rude.", defTrans: "Maleducado(a)", example: "Interrupting someone when they speak is impolite.", audioFront: "TTS: Impolite", audioBack: "TTS: Interrupting someone when they speak is impolite." },
                { term: "Rude", definition: "Offensively impolite or ill-mannered.", defTrans: "Grosseiro(a)", example: "Arriving late without calling is very rude.", audioFront: "TTS: Rude", audioBack: "TTS: Arriving late without calling is very rude." },
                { term: "Formal", definition: "Done in accordance with rules of convention or etiquette.", defTrans: "Formal", example: "You must wear a suit to a formal dinner.", audioFront: "TTS: Formal", audioBack: "TTS: You must wear a suit to a formal dinner." },
                { term: "Informal", definition: "Having a relaxed, friendly, or unofficial style.", defTrans: "Informal", example: "We are having an informal barbecue in the backyard.", audioFront: "TTS: Informal", audioBack: "TTS: We are having an informal barbecue in the backyard." },
                { term: "Traditional", definition: "Existing in or as part of a tradition.", defTrans: "Tradicional", example: "They wore traditional clothes for the ceremony.", audioFront: "TTS: Traditional", audioBack: "TTS: They wore traditional clothes for the ceremony." },
                { term: "Customary", definition: "According to the customs or usual practices of a particular society.", defTrans: "Costumeiro / Habitual", example: "It is customary to bring wine to a dinner party.", audioFront: "TTS: Customary", audioBack: "TTS: It is customary to bring wine to a dinner party." },
                { term: "Common", definition: "Occurring, found, or done often; prevalent.", defTrans: "Comum", example: "Drinking tea is very common in England.", audioFront: "TTS: Common", audioBack: "TTS: Drinking tea is very common in England." },
                { term: "Typical", definition: "Having the distinctive qualities of a particular type of person or thing.", defTrans: "Típico", example: "A typical breakfast here includes eggs and bacon.", audioFront: "TTS: Typical", audioBack: "TTS: A typical breakfast here includes eggs and bacon." },
                { term: "Acceptable", definition: "Able to be agreed on; suitable.", defTrans: "Aceitável", example: "Jeans are not acceptable at a fancy restaurant.", audioFront: "TTS: Acceptable", audioBack: "TTS: Jeans are not acceptable at a fancy restaurant." },
                { term: "Appropriate", definition: "Suitable or proper in the circumstances.", defTrans: "Apropriado / Adequado", example: "A nice bouquet of flowers is an appropriate gift.", audioFront: "TTS: Appropriate", audioBack: "TTS: A nice bouquet of flowers is an appropriate gift." },
                { term: "Similar", definition: "Looking or being almost, but not exactly, the same.", defTrans: "Semelhante", example: "Our cultures are very similar in many ways.", audioFront: "TTS: Similar", audioBack: "TTS: Our cultures are very similar in many ways." },

                // 3A Items (18 items)
                { term: "It's a local custom to", definition: "Stating a typical regional habit.", defTrans: "É um costume local", example: "It's a local custom to leave a tip.", audioFront: "TTS: It's a local custom to", audioBack: "TTS: It's a local custom to leave a tip." },
                { term: "It's traditional to", definition: "Stating a long-established cultural practice.", defTrans: "É tradicional", example: "It's traditional to wear white at a wedding.", audioFront: "TTS: It's traditional to", audioBack: "TTS: It's traditional to wear white at a wedding." },
                { term: "In my culture", definition: "Explaining how things are done in your own country.", defTrans: "Na minha cultura", example: "In my culture, family is the most important thing.", audioFront: "TTS: In my culture", audioBack: "TTS: In my culture, family is the most important thing." },
                { term: "A national holiday", definition: "A legally recognized day of festivity for the whole country.", defTrans: "Um feriado nacional", example: "Independence Day is a national holiday.", audioFront: "TTS: A national holiday", audioBack: "TTS: Independence Day is a national holiday." },
                { term: "Cultural heritage", definition: "An expression of the ways of living developed by a community.", defTrans: "Herança cultural", example: "These ancient buildings are part of our cultural heritage.", audioFront: "TTS: Cultural heritage", audioBack: "TTS: These ancient buildings are part of our cultural heritage." },
                { term: "A popular festival", definition: "A widely celebrated public event.", defTrans: "Um festival popular", example: "Carnival is a popular festival in Brazil.", audioFront: "TTS: A popular festival", audioBack: "TTS: Carnival is a popular festival in Brazil." },
                
                { term: "It's considered polite", definition: "Stating that a behavior is viewed as good manners.", defTrans: "É considerado educado", example: "It's considered polite to open the door for others.", audioFront: "TTS: It's considered polite", audioBack: "TTS: It's considered polite to open the door for others." },
                { term: "It's considered rude", definition: "Stating that a behavior is viewed as bad manners.", defTrans: "É considerado maleducado", example: "It's considered rude to speak loudly on the phone.", audioFront: "TTS: It's considered rude", audioBack: "TTS: It's considered rude to speak loudly on the phone." },
                { term: "Table manners", definition: "Rules of etiquette used while eating.", defTrans: "Boas maneiras à mesa", example: "Good table manners are important when eating out.", audioFront: "TTS: Table manners", audioBack: "TTS: Good table manners are important when eating out." },
                { term: "Make eye contact", definition: "To look directly into someone's eyes.", defTrans: "Fazer contato visual", example: "You should make eye contact during an interview.", audioFront: "TTS: Make eye contact", audioBack: "TTS: You should make eye contact during an interview." },
                { term: "Shake hands", definition: "A common gesture of greeting or agreement.", defTrans: "Apertar as mãos", example: "We always shake hands when we meet someone new.", audioFront: "TTS: Shake hands", audioBack: "TTS: We always shake hands when we meet someone new." },
                { term: "A dress code", definition: "A set of rules about what clothing to wear.", defTrans: "Um código de vestimenta", example: "Is there a dress code for the party tonight?", audioFront: "TTS: A dress code", audioBack: "TTS: Is there a dress code for the party tonight?" },
                
                { term: "Is it okay to", definition: "Politely asking if an action is acceptable.", defTrans: "Tudo bem se eu / É aceitável", example: "Is it okay to wear jeans here?", audioFront: "TTS: Is it okay to", audioBack: "TTS: Is it okay to wear jeans here?" },
                { term: "What should I know before", definition: "Asking for advice prior to an event.", defTrans: "O que devo saber antes de", example: "What should I know before visiting your home?", audioFront: "TTS: What should I know before", audioBack: "TTS: What should I know before visiting your home?" },
                { term: "How do you greet", definition: "Asking about the physical or verbal way people say hello.", defTrans: "Como você cumprimenta", example: "How do you greet older people in your country?", audioFront: "TTS: How do you greet", audioBack: "TTS: How do you greet older people in your country?" },
                { term: "We do it differently", definition: "Stating that your customs are not the same.", defTrans: "Nós fazemos diferente", example: "That is interesting, we do it differently.", audioFront: "TTS: We do it differently", audioBack: "TTS: That is interesting, we do it differently." },
                { term: "It's the same in my culture", definition: "Stating that your customs share a similarity.", defTrans: "É a mesma coisa na minha cultura", example: "We bring gifts too. It's the same in my culture.", audioFront: "TTS: It's the same in my culture", audioBack: "TTS: We bring gifts too. It's the same in my culture." },
                { term: "A key difference is", definition: "Highlighting a major contrasting point.", defTrans: "Uma diferença principal é", example: "A key difference is that we eat very late.", audioFront: "TTS: A key difference is", audioBack: "TTS: A key difference is that we eat very late." }
            ]
        }
    ],

    // ======================================================
    // GLOSSARY (All 54 items + Context words)
    // ======================================================
    glossary:[
        // 2A: Culture & Events
        { topic: "Culture", term: "culture", definition: "The arts and manifestations of a nation's achievement.", translation: "Cultura" },
        { topic: "Culture", term: "custom", definition: "A widely accepted way of behaving specific to a society.", translation: "Costume" },
        { topic: "Culture", term: "tradition", definition: "The transmission of customs from generation to generation.", translation: "Tradição" },
        { topic: "Behavior", term: "etiquette", definition: "The customary code of polite behavior.", translation: "Etiqueta" },
        { topic: "Behavior", term: "behavior", definition: "The way in which one acts or conducts oneself.", translation: "Comportamento" },
        { topic: "Culture", term: "value", definition: "Principles or standards of behavior.", translation: "Valor (moral)" },
        { topic: "Events", term: "festival", definition: "A period of celebration, often religious or cultural.", translation: "Festival" },
        { topic: "Events", term: "holiday", definition: "A day of festivity or recreation when no work is done.", translation: "Feriado" },
        { topic: "Events", term: "ceremony", definition: "A formal religious or public occasion.", translation: "Cerimônia" },
        { topic: "Events", term: "wedding", definition: "A marriage ceremony.", translation: "Casamento" },
        { topic: "Culture", term: "gift", definition: "A thing given willingly without payment.", translation: "Presente" },
        { topic: "Culture", term: "greeting", definition: "A polite word or sign of welcome.", translation: "Saudação / Cumprimento" },

        // 2A: Actions & Verbs
        { topic: "Actions", term: "punctuality", definition: "The fact or quality of being on time.", translation: "Pontualidade" },
        { topic: "Actions", term: "handshake", definition: "An act of grasping someone's hand in greeting.", translation: "Aperto de mão" },
        { topic: "Actions", term: "gesture", definition: "A movement of part of the body to express meaning.", translation: "Gesto" },
        { topic: "Verbs", term: "to-celebrate", definition: "To acknowledge a significant day with a gathering.", translation: "Celebrar" },
        { topic: "Verbs", term: "to-observe", definition: "To fulfill or comply with a social or religious obligation.", translation: "Observar (um costume)" },
        { topic: "Verbs", term: "to-greet", definition: "To give a polite word or sign of welcome.", translation: "Cumprimentar" },
        { topic: "Verbs", term: "to-bow", definition: "To bend the head or upper body as a sign of respect.", translation: "Curvar-se" },
        { topic: "Verbs", term: "to-behave", definition: "To conduct oneself in a specified way.", translation: "Comportar-se" },
        { topic: "Verbs", term: "to-expect", definition: "To regard something as likely to happen or required.", translation: "Esperar (expectativa)" },
        { topic: "Verbs", term: "to-consider", definition: "To think about carefully or regard in a specific way.", translation: "Considerar" },
        { topic: "Verbs", term: "to-respect", definition: "To have due regard for feelings, wishes, or rights.", translation: "Respeitar" },
        { topic: "Verbs", term: "to-offend", definition: "To cause to feel resentment or indignation.", translation: "Ofender" },

        // 2A: Adjectives
        { topic: "Adjectives", term: "polite", definition: "Showing behavior that is respectful and considerate.", translation: "Educado(a)" },
        { topic: "Adjectives", term: "impolite", definition: "Not showing respect; rude.", translation: "Indelicado(a)" },
        { topic: "Adjectives", term: "rude", definition: "Offensively impolite or ill-mannered.", translation: "Grosseiro(a)" },
        { topic: "Adjectives", term: "formal", definition: "Done in accordance with rules of convention.", translation: "Formal" },
        { topic: "Adjectives", term: "informal", definition: "Having a relaxed, friendly, or unofficial style.", translation: "Informal" },
        { topic: "Adjectives", term: "traditional", definition: "Existing in or as part of a tradition.", translation: "Tradicional" },
        { topic: "Adjectives", term: "customary", definition: "According to the customs or usual practices.", translation: "Costumeiro" },
        { topic: "Adjectives", term: "common", definition: "Occurring, found, or done often.", translation: "Comum" },
        { topic: "Adjectives", term: "typical", definition: "Having the distinctive qualities of a particular type.", translation: "Típico" },
        { topic: "Adjectives", term: "acceptable", definition: "Able to be agreed on; suitable.", translation: "Aceitável" },
        { topic: "Adjectives", term: "appropriate", definition: "Suitable or proper in the circumstances.", translation: "Apropriado / Adequado" },
        { topic: "Adjectives", term: "similar", definition: "Looking or being almost, but not exactly, the same.", translation: "Semelhante" },

        // 3A: Expressions
        { topic: "Expressions", term: "local-custom", definition: "Stating a typical regional habit.", translation: "É um costume local" },
        { topic: "Expressions", term: "its-traditional-to", definition: "Stating a long-established cultural practice.", translation: "É tradicional" },
        { topic: "Expressions", term: "in-my-culture", definition: "Explaining how things are done in your own country.", translation: "Na minha cultura" },
        { topic: "Expressions", term: "national-holiday", definition: "A legally recognized day of festivity.", translation: "Um feriado nacional" },
        { topic: "Expressions", term: "cultural-heritage", definition: "An expression of the ways of living developed by a community.", translation: "Herança cultural" },
        { topic: "Expressions", term: "popular-festival", definition: "A widely celebrated public event.", translation: "Um festival popular" },
        
        { topic: "Expressions", term: "considered-polite", definition: "Stating that a behavior is viewed as good manners.", translation: "É considerado educado" },
        { topic: "Expressions", term: "considered-rude", definition: "Stating that a behavior is viewed as bad manners.", translation: "É considerado maleducado" },
        { topic: "Expressions", term: "table-manners", definition: "Rules of etiquette used while eating.", translation: "Boas maneiras à mesa" },
        { topic: "Expressions", term: "make-eye-contact", definition: "To look directly into someone's eyes.", translation: "Fazer contato visual" },
        { topic: "Expressions", term: "shake-hands", definition: "A common gesture of greeting.", translation: "Apertar as mãos" },
        { topic: "Expressions", term: "dress-code", definition: "A set of rules about what clothing to wear.", translation: "Um código de vestimenta" },
        
        { topic: "Expressions", term: "is-it-okay-to", definition: "Politely asking if an action is acceptable.", translation: "Tudo bem se eu... / É aceitável...?" },
        { topic: "Expressions", term: "what-know-before", definition: "Asking for advice prior to an event.", translation: "O que devo saber antes de" },
        { topic: "Expressions", term: "how-greet", definition: "Asking about the way people say hello.", translation: "Como você cumprimenta" },
        { topic: "Expressions", term: "do-differently", definition: "Stating that your customs are not the same.", translation: "Nós fazemos diferente" },
        { topic: "Expressions", term: "same-in-culture", definition: "Stating that your customs share a similarity.", translation: "É a mesma coisa na minha cultura" },
        { topic: "Expressions", term: "key-difference", definition: "Highlighting a major contrasting point.", translation: "Uma diferença principal é" },

        // Additional Context Words
        { topic: "Context", term: "awareness", definition: "Knowledge or perception of a situation or fact.", translation: "Consciência" },
        { topic: "Context", term: "shoes", definition: "A covering for the foot.", translation: "Sapatos" },
        { topic: "Context", term: "entering", definition: "To come or go into a place.", translation: "Entrar" },
        { topic: "Context", term: "chocolates", definition: "A food preparation in the form of a paste or solid block made from roasted and ground cacao seeds.", translation: "Chocolates" }
    ]
});