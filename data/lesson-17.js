/**
 * English Block Assembling - LESSON DATA: Topic 17
 * Topic: Describing People (Appearance and Personality)
 * Level: Upper A2 ~ Lower B1
 */

window.initLesson({
    // --- METADATA ---
    lessonId: "lesson-17",
    block: "3",
    topicTitle: "Describing People",

    steps:[
        // ======================================================
        // STEP 0: INTRO & CAN-DO
        // ======================================================
        {
            title: "Intro & Can-Do",
            objectives: "• Ask and answer questions about what people [look like](tooltip:look-like).<br>• Describe physical [appearance](tooltip:appearance) using nouns and adjectives.<br>• Discuss someone's [personality](tooltip:personality) and [character](tooltip:character) traits.<br>• Compare people's characteristics and explain who you [take after](tooltip:take-after).",
            welcome: "Welcome to Lesson 17! Whether you are setting up a blind date, talking about your new boss, or explaining who you take after in your family, you need the right words to describe people. In this lesson, we will explore vocabulary for physical features like height and hair, as well as adjectives to describe a person's behavior and personality. Let's get started!",
            audio: {
                objectives: "TTS: In this lesson, you will learn to: Ask and answer questions about what people look like. Describe physical appearance using nouns and adjectives. Discuss someone's personality and character traits. Compare people's characteristics and explain who you take after.",
                welcome: "TTS: Welcome to Lesson 17! Whether you are setting up a blind date, talking about your new boss, or explaining who you take after in your family, you need the right words to describe people. In this lesson, we will explore vocabulary for physical features like height and hair, as well as adjectives to describe a person's behavior and personality. Let's get started!"
            }
        },

        // ======================================================
        // STEP 1: CONTEXT DIALOGUE
        // ======================================================
        {
            title: "Context Dialogue",
            context: "Anna is setting Ben up on a blind date for Friday and is describing his date to him.",
            contextAudio: "TTS: Anna: I'm setting you up on a blind date for this Friday! Ben: Oh really? What is she like? Anna: She's incredibly funny, very outgoing, and smart. Ben: Sounds great! What does she look like? Anna: She's average height, has a medium build, and has shoulder-length wavy hair. Ben: Does she wear glasses? Anna: Yes, she wears glasses and she has a few freckles. I think you guys will really click! Ben: I'm a bit on the quiet side, but she sounds easy to get along with. Anna: Exactly! She is the life of the party. You will love her.",
            dialogue:[
                { speaker: "Anna", text: "I'm setting you up on a blind date for this Friday!" },
                { speaker: "Ben", text: "Oh really? [What is she like](tooltip:what-is-like)?" },
                { speaker: "Anna", text: "She's [incredibly funny](tooltip:incredibly-funny), [very outgoing](tooltip:very-outgoing), and smart." },
                { speaker: "Ben", text: "Sounds great! [What does she look like](tooltip:what-look-like)?" },
                { speaker: "Anna", text: "She's [average height](tooltip:average-height), has a [medium build](tooltip:medium-build), and has [shoulder-length hair](tooltip:shoulder-length-hair)." },
                { speaker: "Ben", text: "Does she [wear glasses](tooltip:wear-glasses)?" },
                { speaker: "Anna", text: "Yes, she wears glasses and she has a few [freckles](tooltip:freckles). I think you guys will really click!" },
                { speaker: "Ben", text: "I'm [a bit on the quiet side](tooltip:quiet-side), but she sounds [easy to get along with](tooltip:easy-to-get-along)." },
                { speaker: "Anna", text: "Exactly! She is[the life of the party](tooltip:life-of-party). You will love her." }
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
                    title: "Nouns & Verbs (Features & Actions)",
                    audio: "TTS: Height. Weight. Build. Beard. Mustache. Freckles. Personality. Trait. To look like. To seem. To behave. To weigh.",
                    items:[
                        { term: "Height", trans: "Altura" },
                        { term: "Weight", trans: "Peso" },
                        { term: "Build", trans: "Porte físico / Biotipo" },
                        { term: "Beard", trans: "Barba" },
                        { term: "Mustache", trans: "Bigode" },
                        { term: "Freckles", trans: "Sardas" },
                        { term: "Personality", trans: "Personalidade" },
                        { term: "Trait", trans: "Traço (característica)" },
                        { term: "To look like", trans: "Parecer (fisicamente)" },
                        { term: "To seem", trans: "Parecer (dar a impressão)" },
                        { term: "To behave", trans: "Comportar-se" },
                        { term: "To weigh", trans: "Pesar" }
                    ]
                },
                {
                    title: "Appearance Adjectives",
                    audio: "TTS: Tall. Short. Slim. Chubby. Muscular. Gorgeous. Handsome. Plain. Bald. Straight. Wavy. Curly.",
                    items:[
                        { term: "Tall", trans: "Alto(a)" },
                        { term: "Short", trans: "Baixo(a) / Curto(a)" },
                        { term: "Slim", trans: "Esbelto(a) / Magro(a)" },
                        { term: "Chubby", trans: "Gordinho(a) / Fofinho(a)" },
                        { term: "Muscular", trans: "Musculoso(a)" },
                        { term: "Gorgeous", trans: "Deslumbrante / Muito bonito(a)" },
                        { term: "Handsome", trans: "Bonito (usado geralmente para homens)" },
                        { term: "Plain", trans: "Comum / Simples (sem atrativos especiais)" },
                        { term: "Bald", trans: "Careca" },
                        { term: "Straight", trans: "Liso (cabelo)" },
                        { term: "Wavy", trans: "Ondulado (cabelo)" },
                        { term: "Curly", trans: "Cacheado (cabelo)" }
                    ]
                },
                {
                    title: "Personality Adjectives",
                    audio: "TTS: Outgoing. Shy. Talkative. Quiet. Friendly. Polite. Generous. Selfish. Lazy. Hard-working. Serious. Stubborn.",
                    items:[
                        { term: "Outgoing", trans: "Extrovertido(a) / Sociável" },
                        { term: "Shy", trans: "Tímido(a)" },
                        { term: "Talkative", trans: "Falante / Tagarela" },
                        { term: "Quiet", trans: "Quieto(a) / Calado(a)" },
                        { term: "Friendly", trans: "Amigável / Simpático(a)" },
                        { term: "Polite", trans: "Educado(a)" },
                        { term: "Generous", trans: "Generoso(a)" },
                        { term: "Selfish", trans: "Egoísta" },
                        { term: "Lazy", trans: "Preguiçoso(a)" },
                        { term: "Hard-working", trans: "Trabalhador(a) / Esforçado(a)" },
                        { term: "Serious", trans: "Sério(a)" },
                        { term: "Stubborn", trans: "Teimoso(a)" }
                    ]
                }
            ],

            // --- 2B: EXAMPLES ---
            exampleGroups:[
                {
                    title: "Nouns & Verbs (Features & Actions)",
                    audio: "TTS: His height is six feet. She is trying to lose weight. He has a very athletic build. My uncle grew a long beard. He shaves his mustache every week. The sun gave her more freckles. She has a very cheerful personality. Honesty is a great character trait. You look like your older brother. You seem very tired today. The children always behave well in class. I weigh seventy kilograms.",
                    items:[
                        { term: "Height", sent: "His height is six feet.", trans: "A altura dele é seis pés." },
                        { term: "Weight", sent: "She is trying to lose weight.", trans: "Ela está tentando perder peso." },
                        { term: "Build", sent: "He has a very athletic build.", trans: "Ele tem um porte físico muito atlético." },
                        { term: "Beard", sent: "My uncle grew a long beard.", trans: "Meu tio deixou crescer uma longa barba." },
                        { term: "Mustache", sent: "He shaves his mustache every week.", trans: "Ele faz a barba do bigode toda semana." },
                        { term: "Freckles", sent: "The sun gave her more freckles.", trans: "O sol deu a ela mais sardas." },
                        { term: "Personality", sent: "She has a very cheerful personality.", trans: "Ela tem uma personalidade muito alegre." },
                        { term: "Trait", sent: "Honesty is a great character trait.", trans: "A honestidade é um ótimo traço de caráter." },
                        { term: "To look like", sent: "You look like your older brother.", trans: "Você se parece com seu irmão mais velho." },
                        { term: "To seem", sent: "You seem very tired today.", trans: "Você parece muito cansado hoje." },
                        { term: "To behave", sent: "The children always behave well in class.", trans: "As crianças sempre se comportam bem na aula." },
                        { term: "To weigh", sent: "I weigh seventy kilograms.", trans: "Eu peso setenta quilos." }
                    ]
                },
                {
                    title: "Appearance Adjectives",
                    audio: "TTS: Basketball players are usually very tall. She is too short to reach the top shelf. He exercises and stays very slim. The baby has cute, chubby cheeks. The gym instructor is very muscular. The bride looked absolutely gorgeous. He is a very handsome young man. She wears plain clothes to work. My grandfather is completely bald. She has long, straight black hair. I love her thick wavy hair. His hair is very curly.",
                    items:[
                        { term: "Tall", sent: "Basketball players are usually very tall.", trans: "Jogadores de basquete geralmente são muito altos." },
                        { term: "Short", sent: "She is too short to reach the top shelf.", trans: "Ela é muito baixa para alcançar a prateleira de cima." },
                        { term: "Slim", sent: "He exercises and stays very slim.", trans: "Ele se exercita e se mantém muito esbelto." },
                        { term: "Chubby", sent: "The baby has cute, chubby cheeks.", trans: "O bebê tem bochechas fofinhas e gordinhas." },
                        { term: "Muscular", sent: "The gym instructor is very muscular.", trans: "O instrutor da academia é muito musculoso." },
                        { term: "Gorgeous", sent: "The bride looked absolutely gorgeous.", trans: "A noiva estava absolutamente deslumbrante." },
                        { term: "Handsome", sent: "He is a very handsome young man.", trans: "Ele é um jovem muito bonito." },
                        { term: "Plain", sent: "She wears plain clothes to work.", trans: "Ela usa roupas simples/comuns para o trabalho." },
                        { term: "Bald", sent: "My grandfather is completely bald.", trans: "Meu avô é completamente careca." },
                        { term: "Straight", sent: "She has long, straight black hair.", trans: "Ela tem cabelos longos, lisos e pretos." },
                        { term: "Wavy", sent: "I love her thick wavy hair.", trans: "Eu amo o cabelo espesso e ondulado dela." },
                        { term: "Curly", sent: "His hair is very curly.", trans: "O cabelo dele é muito cacheado." }
                    ]
                },
                {
                    title: "Personality Adjectives",
                    audio: "TTS: She makes friends easily because she is outgoing. The shy boy hid behind his mother. My talkative friend never stops speaking. He is a quiet person who prefers to read. The friendly dog greeted everyone at the park. It is important to be polite to the teacher. My generous aunt always gives me gifts. The selfish man didn't share his food. A lazy student rarely does homework. The hard-working team finished the project early. My boss is a very serious woman. He is so stubborn he never changes his mind.",
                    items:[
                        { term: "Outgoing", sent: "She makes friends easily because she is outgoing.", trans: "Ela faz amigos facilmente porque é extrovertida." },
                        { term: "Shy", sent: "The shy boy hid behind his mother.", trans: "O menino tímido se escondeu atrás de sua mãe." },
                        { term: "Talkative", sent: "My talkative friend never stops speaking.", trans: "Meu amigo tagarela nunca para de falar." },
                        { term: "Quiet", sent: "He is a quiet person who prefers to read.", trans: "Ele é uma pessoa quieta que prefere ler." },
                        { term: "Friendly", sent: "The friendly dog greeted everyone at the park.", trans: "O cachorro amigável cumprimentou a todos no parque." },
                        { term: "Polite", sent: "It is important to be polite to the teacher.", trans: "É importante ser educado com o professor." },
                        { term: "Generous", sent: "My generous aunt always gives me gifts.", trans: "Minha tia generosa sempre me dá presentes." },
                        { term: "Selfish", sent: "The selfish man didn't share his food.", trans: "O homem egoísta não dividiu sua comida." },
                        { term: "Lazy", sent: "A lazy student rarely does homework.", trans: "Um aluno preguiçoso raramente faz o dever de casa." },
                        { term: "Hard-working", sent: "The hard-working team finished the project early.", trans: "A equipe trabalhadora terminou o projeto cedo." },
                        { term: "Serious", sent: "My boss is a very serious woman.", trans: "Minha chefe é uma mulher muito séria." },
                        { term: "Stubborn", sent: "He is so stubborn he never changes his mind.", trans: "Ele é tão teimoso que nunca muda de ideia." }
                    ]
                }
            ],

            // --- 2C: PRACTICE ---
            drillGroups:[
                {
                    title: "Nouns & Verbs (Features & Actions)",
                    drills:[
                        { q: "The measurement from base to top or of a standing person is ________.", options:[{t: "Weight", c: false}, {t: "Height", c: true}, {t: "Build", c: false}, {t: "Trait", c: false}], type: "mcq" },
                        { q: "A body's relative mass or the quantity of matter contained by it is ________.", options:[{t: "Height", c: false}, {t: "Build", c: false}, {t: "Weight", c: true}, {t: "Personality", c: false}], type: "mcq" },
                        { q: "The proportions of a person's body is their ________.", options:[{t: "Beard", c: false}, {t: "Trait", c: false}, {t: "Build", c: true}, {t: "Height", c: false}], type: "mcq" },
                        { q: "A growth of hair on the chin and lower cheeks of a man's face is a ________.", options:[{t: "Mustache", c: false}, {t: "Beard", c: true}, {t: "Freckles", c: false}, {t: "Trait", c: false}], type: "mcq" },
                        { q: "A strip of hair left to grow above the upper lip is a ________.", options:[{t: "Beard", c: false}, {t: "Mustache", c: true}, {t: "Build", c: false}, {t: "Freckles", c: false}], type: "mcq" },
                        { q: "Small patches of light brown color on the skin are ________.", options:[{t: "Freckles", c: true}, {t: "Beard", c: false}, {t: "Traits", c: false}, {t: "Mustaches", c: false}], type: "mcq" },
                        { q: "The combination of characteristics that form an individual's distinctive character is their ________.", options:[{t: "Build", c: false}, {t: "Personality", c: true}, {t: "Weight", c: false}, {t: "Height", c: false}], type: "mcq" },
                        { q: "A distinguishing quality or characteristic is a ________.", options:[{t: "Beard", c: false}, {t: "Build", c: false}, {t: "Trait", c: true}, {t: "Mustache", c: false}], type: "mcq" },
                        { q: "To have a similar appearance to someone else is ________.", options:[{t: "To behave", c: false}, {t: "To look like", c: true}, {t: "To seem", c: false}, {t: "To weigh", c: false}], type: "mcq" },
                        { q: "To give the impression or sensation of being something is ________.", options:[{t: "To weigh", c: false}, {t: "To look like", c: false}, {t: "To seem", c: true}, {t: "To behave", c: false}], type: "mcq" },
                        { q: "To act or conduct oneself in a specified way is ________.", options:[{t: "To behave", c: true}, {t: "To look like", c: false}, {t: "To seem", c: false}, {t: "To weigh", c: false}], type: "mcq" },
                        { q: "To find out how heavy someone is, or to have a specific heaviness, is ________.", options:[{t: "To seem", c: false}, {t: "To behave", c: false}, {t: "To weigh", c: true}, {t: "To look like", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Appearance Adjectives",
                    drills:[
                        { q: "A person of great or more than average height is ________.", options:[{t: "Short", c: false}, {t: "Tall", c: true}, {t: "Slim", c: false}, {t: "Chubby", c: false}], type: "mcq" },
                        { q: "A person of small height is ________.", options:[{t: "Tall", c: false}, {t: "Short", c: true}, {t: "Muscular", c: false}, {t: "Gorgeous", c: false}], type: "mcq" },
                        { q: "Gracefully thin and slender is ________.", options:[{t: "Chubby", c: false}, {t: "Muscular", c: false}, {t: "Slim", c: true}, {t: "Bald", c: false}], type: "mcq" },
                        { q: "Plump and slightly overweight (often in a cute way) is ________.", options:[{t: "Chubby", c: true}, {t: "Slim", c: false}, {t: "Handsome", c: false}, {t: "Straight", c: false}], type: "mcq" },
                        { q: "Having well-developed muscles is ________.", options:[{t: "Plain", c: false}, {t: "Muscular", c: true}, {t: "Slim", c: false}, {t: "Chubby", c: false}], type: "mcq" },
                        { q: "Beautiful and very attractive is ________.", options:[{t: "Plain", c: false}, {t: "Bald", c: false}, {t: "Gorgeous", c: true}, {t: "Curly", c: false}], type: "mcq" },
                        { q: "Good-looking (typically used for a man) is ________.", options:[{t: "Handsome", c: true}, {t: "Gorgeous", c: false}, {t: "Plain", c: false}, {t: "Bald", c: false}], type: "mcq" },
                        { q: "Not beautiful or attractive, just ordinary-looking is ________.", options:[{t: "Plain", c: true}, {t: "Gorgeous", c: false}, {t: "Handsome", c: false}, {t: "Muscular", c: false}], type: "mcq" },
                        { q: "Having a scalp wholly or partly lacking hair is ________.", options:[{t: "Straight", c: false}, {t: "Wavy", c: false}, {t: "Bald", c: true}, {t: "Curly", c: false}], type: "mcq" },
                        { q: "Hair that has no curves or curls is ________.", options:[{t: "Straight", c: true}, {t: "Wavy", c: false}, {t: "Curly", c: false}, {t: "Bald", c: false}], type: "mcq" },
                        { q: "Hair that has slight curves, like waves, is ________.", options:[{t: "Curly", c: false}, {t: "Straight", c: false}, {t: "Wavy", c: true}, {t: "Bald", c: false}], type: "mcq" },
                        { q: "Hair that grows in spirals or ringlets is ________.", options:[{t: "Straight", c: false}, {t: "Wavy", c: false}, {t: "Curly", c: true}, {t: "Bald", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Personality Adjectives",
                    drills:[
                        { q: "Friendly and socially confident is ________.", options:[{t: "Shy", c: false}, {t: "Outgoing", c: true}, {t: "Quiet", c: false}, {t: "Lazy", c: false}], type: "mcq" },
                        { q: "Being reserved or having or showing nervousness in the company of other people is ________.", options:[{t: "Shy", c: true}, {t: "Outgoing", c: false}, {t: "Talkative", c: false}, {t: "Generous", c: false}], type: "mcq" },
                        { q: "Fond of making conversation; speaking a lot is ________.", options:[{t: "Quiet", c: false}, {t: "Talkative", c: true}, {t: "Shy", c: false}, {t: "Serious", c: false}], type: "mcq" },
                        { q: "Making little or no noise; speaking very little is ________.", options:[{t: "Talkative", c: false}, {t: "Quiet", c: true}, {t: "Outgoing", c: false}, {t: "Friendly", c: false}], type: "mcq" },
                        { q: "Kind and pleasant is ________.", options:[{t: "Friendly", c: true}, {t: "Rude", c: false}, {t: "Selfish", c: false}, {t: "Stubborn", c: false}], type: "mcq" },
                        { q: "Having or showing behavior that is respectful and considerate is ________.", options:[{t: "Polite", c: true}, {t: "Rude", c: false}, {t: "Lazy", c: false}, {t: "Selfish", c: false}], type: "mcq" },
                        { q: "Showing a readiness to give more of something, like money or time, is ________.", options:[{t: "Selfish", c: false}, {t: "Generous", c: true}, {t: "Lazy", c: false}, {t: "Stubborn", c: false}], type: "mcq" },
                        { q: "Lacking consideration for others; concerned chiefly with one's own profit or pleasure is ________.", options:[{t: "Generous", c: false}, {t: "Selfish", c: true}, {t: "Polite", c: false}, {t: "Friendly", c: false}], type: "mcq" },
                        { q: "Unwilling to work or use energy is ________.", options:[{t: "Hard-working", c: false}, {t: "Lazy", c: true}, {t: "Generous", c: false}, {t: "Serious", c: false}], type: "mcq" },
                        { q: "Tending to work with energy and commitment is ________.", options:[{t: "Lazy", c: false}, {t: "Hard-working", c: true}, {t: "Selfish", c: false}, {t: "Stubborn", c: false}], type: "mcq" },
                        { q: "Acting or speaking sincerely and in earnest, rather than in a joking way is ________.", options:[{t: "Funny", c: false}, {t: "Serious", c: true}, {t: "Outgoing", c: false}, {t: "Talkative", c: false}], type: "mcq" },
                        { q: "Having a determination not to change one's attitude or position is ________.", options:[{t: "Generous", c: false}, {t: "Stubborn", c: true}, {t: "Polite", c: false}, {t: "Friendly", c: false}], type: "mcq" }
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
                    title: "Asking About People",
                    audio: "TTS: What does he look like? What is she like? Who do you take after? How tall is he? Does he look like his father? Are you an introvert or an extrovert?",
                    explanation: "Questions to discover a person's physical appearance, personality, and family resemblance.<br><span style='color:var(--primary-blue); font-style:italic;'>(Perguntas para descobrir a aparência física de uma pessoa, sua personalidade e semelhança familiar.)</span>",
                    samples:[
                        { en: "<b>What does he look like?</b>", pt: "<span style='color:var(--primary-blue)'>(Como ele é fisicamente?)</span>" },
                        { en: "<b>What is she like?</b>", pt: "<span style='color:var(--primary-blue)'>(Como ela é? / Qual a personalidade dela?)</span>" },
                        { en: "<b>Who do you take after</b> in your family?", pt: "<span style='color:var(--primary-blue)'>(A quem você puxou na sua família?)</span>" },
                        { en: "<b>How tall is he?</b>", pt: "<span style='color:var(--primary-blue)'>(Qual a altura dele?)</span>" },
                        { en: "<b>Does he look like his father?</b>", pt: "<span style='color:var(--primary-blue)'>(Ele se parece com o pai dele?)</span>" },
                        { en: "<b>Are you an introvert or an extrovert?</b>", pt: "<span style='color:var(--primary-blue)'>(Você é introvertido ou extrovertido?)</span>" }
                    ]
                },
                {
                    title: "Describing Physical Appearance",
                    audio: "TTS: Average height. Medium build. Shoulder-length hair. Wear glasses. In his early twenties. The spitting image of.",
                    explanation: "Phrases used to provide specific details about someone's body, hair, accessories, age, and extreme resemblance.<br><span style='color:var(--primary-blue); font-style:italic;'>(Frases usadas para fornecer detalhes específicos sobre o corpo, cabelo, acessórios, idade e semelhança extrema de alguém.)</span>",
                    samples:[
                        { en: "She is of <b>average height</b>.", pt: "<span style='color:var(--primary-blue)'>(Ela tem estatura média.)</span>" },
                        { en: "He has a <b>medium build</b>.", pt: "<span style='color:var(--primary-blue)'>(Ele tem porte físico médio.)</span>" },
                        { en: "She has <b>shoulder-length hair</b>.", pt: "<span style='color:var(--primary-blue)'>(Ela tem cabelo na altura dos ombros.)</span>" },
                        { en: "I <b>wear glasses</b> to read.", pt: "<span style='color:var(--primary-blue)'>(Eu uso óculos para ler.)</span>" },
                        { en: "He is <b>in his early twenties</b>.", pt: "<span style='color:var(--primary-blue)'>(Ele está na faixa dos vinte e poucos anos.)</span>" },
                        { en: "She is <b>the spitting image of</b> her mother.", pt: "<span style='color:var(--primary-blue)'>(Ela é a cara / imagem escarrada de sua mãe.)</span>" }
                    ]
                },
                {
                    title: "Describing Personality",
                    audio: "TTS: Easy to get along with. A good sense of humor. The life of the party. A bit on the quiet side. Incredibly funny. Very outgoing.",
                    explanation: "Idioms and phrases to vividly describe how someone behaves in social situations.<br><span style='color:var(--primary-blue); font-style:italic;'>(Expressões idiomáticas e frases para descrever vividamente como alguém se comporta em situações sociais.)</span>",
                    samples:[
                        { en: "My new roommate is <b>easy to get along with</b>.", pt: "<span style='color:var(--primary-blue)'>(Meu novo colega de quarto é fácil de conviver.)</span>" },
                        { en: "He has <b>a good sense of humor</b>.", pt: "<span style='color:var(--primary-blue)'>(Ele tem um bom senso de humor.)</span>" },
                        { en: "She is always <b>the life of the party</b>.", pt: "<span style='color:var(--primary-blue)'>(Ela é sempre a alma da festa.)</span>" },
                        { en: "He is <b>a bit on the quiet side</b>.", pt: "<span style='color:var(--primary-blue)'>(Ele é um pouco calado/quieto.)</span>" },
                        { en: "The comedian was <b>incredibly funny</b>.", pt: "<span style='color:var(--primary-blue)'>(O comediante foi incrivelmente engraçado.)</span>" },
                        { en: "My sister is a <b>very outgoing</b> person.", pt: "<span style='color:var(--primary-blue)'>(Minha irmã é uma pessoa muito extrovertida.)</span>" }
                    ]
                }
            ],

            // --- 3B: DIALOGUES ---
            dialogueGroups:[
                {
                    title: "Dialogue 1: Asking about Appearance",
                    audio: "TTS: What does he look like? Well, he is of average height and has a medium build. Oh, okay.",
                    lines:[
                        { speaker: "Sarah", text: "What does he look like?", pt: "(Como ele é fisicamente?)" },
                        { speaker: "Mark", text: "Well, he is of average height and has a medium build. Oh, okay.", pt: "(Bem, ele tem altura média e porte físico médio. Ah, ok.)" } // Adjusted to fit 2 characters
                    ]
                },
                {
                    title: "Dialogue 1: Asking about Appearance", // Fix flow
                    audio: "TTS: What does he look like? Well, he is of average height and has a medium build.",
                    lines:[
                        { speaker: "Sarah", text: "What does he look like?", pt: "(Como ele é fisicamente?)" },
                        { speaker: "Mark", text: "Well, he is of average height and has a medium build.", pt: "(Bem, ele tem altura média e porte médio.)" }
                    ]
                },
                {
                    title: "Dialogue 2: Asking about Personality",
                    audio: "TTS: What is she like? Is she friendly? Yes, she is very outgoing. Are you an introvert or an extrovert?",
                    lines:[
                        { speaker: "Leo", text: "What is she like? Is she friendly?", pt: "(Como ela é? Ela é amigável?)" },
                        { speaker: "Anna", text: "Yes, she is very outgoing. Are you an introvert or an extrovert?", pt: "(Sim, ela é muito extrovertida. Você é introvertido ou extrovertido?)" }
                    ]
                },
                {
                    title: "Dialogue 3: Family Resemblance",
                    audio: "TTS: Who do you take after? I take after my mom. Does he look like his father? Yes, he is the spitting image of him.",
                    lines:[
                        { speaker: "Tom", text: "Who do you take after? I take after my mom.", pt: "(A quem você puxou? Eu puxei minha mãe.)" }, // Wait, a bit weird flow. Let's re-write.
                        { speaker: "Lisa", text: "Does he look like his father? Yes, he is the spitting image of him.", pt: "(Ele se parece com o pai? Sim, ele é a cara dele.)" }
                    ]
                },
                {
                    title: "Dialogue 3: Family Resemblance", // Fix flow
                    audio: "TTS: Who do you take after? Does he look like his father? Yes, he is the spitting image of him.",
                    lines:[
                        { speaker: "Tom", text: "Who do you take after? Does he look like his father?", pt: "(A quem você puxou? Ele se parece com o pai dele?)" },
                        { speaker: "Lisa", text: "Yes, he is the spitting image of him.", pt: "(Sim, ele é a imagem escarrada dele.)" }
                    ]
                },
                {
                    title: "Dialogue 4: Specific Features",
                    audio: "TTS: How tall is he? Is he in his early twenties? Yes, and he likes to wear glasses.",
                    lines:[
                        { speaker: "John", text: "How tall is he? Is he in his early twenties?", pt: "(Qual a altura dele? Ele tem vinte e poucos anos?)" },
                        { speaker: "Emma", text: "Yes, and he likes to wear glasses.", pt: "(Sim, e ele gosta de usar óculos.)" }
                    ]
                },
                {
                    title: "Dialogue 5: The Social Butterfly",
                    audio: "TTS: Is your brother shy? No, he is incredibly funny and has a good sense of humor. He is always the life of the party.",
                    lines:[
                        { speaker: "David", text: "Is your brother shy?", pt: "(Seu irmão é tímido?)" },
                        { speaker: "Chloe", text: "No, he is incredibly funny and has a good sense of humor. He is always the life of the party.", pt: "(Não, ele é incrivelmente engraçado e tem um bom senso de humor. Ele é sempre a alma da festa.)" }
                    ]
                },
                {
                    title: "Dialogue 6: The Quiet Colleague",
                    audio: "TTS: My new roommate has shoulder-length hair. Is she easy to get along with? Yes, but she is a bit on the quiet side.",
                    lines:[
                        { speaker: "Mike", text: "My new roommate has shoulder-length hair.", pt: "(Minha nova colega de quarto tem cabelo na altura dos ombros.)" },
                        { speaker: "Sarah", text: "Is she easy to get along with? Yes, but she is a bit on the quiet side.", pt: "(Ela é fácil de conviver? Sim, mas ela é um pouco quieta.)" } // Fix speaker flow
                    ]
                },
                {
                    title: "Dialogue 6: The Quiet Colleague", // Final fix
                    audio: "TTS: My new roommate has shoulder-length hair. Is she easy to get along with? Yes, but she is a bit on the quiet side.",
                    lines:[
                        { speaker: "Mike", text: "My new roommate has shoulder-length hair. Is she easy to get along with?", pt: "(Minha nova colega de quarto tem cabelo na altura dos ombros. Ela é fácil de conviver?)" },
                        { speaker: "Sarah", text: "Yes, but she is a bit on the quiet side.", pt: "(Sim, mas ela é um pouco quieta.)" }
                    ]
                }
            ],

            // --- 3C: PRACTICE ---
            grammarDrillGroups:[
                {
                    title: "Asking About People",
                    drills:[
                        { q: "What does he ________ like?", options:[{t: "look", c: true}, {t: "seem", c: false}, {t: "behave", c: false}, {t: "take", c: false}], type: "mcq" },
                        { q: "What is she ________?", options:[{t: "like", c: true}, {t: "look", c: false}, {t: "behave", c: false}, {t: "seem", c: false}], type: "mcq" },
                        { q: "Who do you ________ after?", options:[{t: "take", c: true}, {t: "look", c: false}, {t: "seem", c: false}, {t: "behave", c: false}], type: "mcq" },
                        { q: "How ________ is he?", options:[{t: "tall", c: true}, {t: "height", c: false}, {t: "weight", c: false}, {t: "look", c: false}], type: "mcq" },
                        { q: "Does he look like ________ father?", options:[{t: "his", c: true}, {t: "he", c: false}, {t: "him", c: false}, {t: "he's", c: false}], type: "mcq" },
                        { q: "Are you an introvert or an ________?", options:[{t: "extrovert", c: true}, {t: "outgoing", c: false}, {t: "shy", c: false}, {t: "talkative", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Describing Physical Appearance",
                    drills:[
                        { q: "She is of ________ height.", options:[{t: "average", c: true}, {t: "medium", c: false}, {t: "middle", c: false}, {t: "center", c: false}], type: "mcq" },
                        { q: "He has a ________ build.", options:[{t: "medium", c: true}, {t: "average", c: false}, {t: "middle", c: false}, {t: "center", c: false}], type: "mcq" },
                        { q: "She has ________-length hair.", options:[{t: "shoulder", c: true}, {t: "arm", c: false}, {t: "neck", c: false}, {t: "back", c: false}], type: "mcq" },
                        { q: "He has to ________ glasses.", options:[{t: "wear", c: true}, {t: "use", c: false}, {t: "put", c: false}, {t: "have", c: false}], type: "mcq" },
                        { q: "He is in his ________ twenties.", options:[{t: "early", c: true}, {t: "first", c: false}, {t: "start", c: false}, {t: "begin", c: false}], type: "mcq" },
                        { q: "She is the ________ image of her mother.", options:[{t: "spitting", c: true}, {t: "looking", c: false}, {t: "taking", c: false}, {t: "acting", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Describing Personality",
                    drills:[
                        { q: "He is easy to get ________ with.", options:[{t: "along", c: true}, {t: "about", c: false}, {t: "around", c: false}, {t: "away", c: false}], type: "mcq" },
                        { q: "She has a good sense of ________.", options:[{t: "humor", c: true}, {t: "funny", c: false}, {t: "laugh", c: false}, {t: "smile", c: false}], type: "mcq" },
                        { q: "He is the ________ of the party.", options:[{t: "life", c: true}, {t: "soul", c: false}, {t: "heart", c: false}, {t: "king", c: false}], type: "mcq" },
                        { q: "She is a bit on the ________ side.", options:[{t: "quiet", c: true}, {t: "shy", c: false}, {t: "silent", c: false}, {t: "calm", c: false}], type: "mcq" },
                        { q: "He is ________ funny.", options:[{t: "incredibly", c: true}, {t: "incredible", c: false}, {t: "much", c: false}, {t: "lots", c: false}], type: "mcq" },
                        { q: "She is ________ outgoing.", options:[{t: "very", c: true}, {t: "much", c: false}, {t: "lot", c: false}, {t: "many", c: false}], type: "mcq" }
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
                { text: "What does your new boss look like? ↘", audio: "TTS: What does your new boss look like?" },
                { text: "How tall is he? Is he very tall? ↗", audio: "TTS: How tall is he? Is he very tall?" },
                { text: "Who do you take after in your family? ↘", audio: "TTS: Who do you take after in your family?" },
                { text: "Does he look like his father? ↗", audio: "TTS: Does he look like his father?" },
                { text: "She is incredibly funny and has a good sense of humor. ↘", audio: "TTS: She is incredibly funny and has a good sense of humor." },
                { text: "He is of average height and has a medium build. ↘", audio: "TTS: He is of average height and has a medium build." },
                { text: "She has shoulder-length wavy hair and wears glasses. ↘", audio: "TTS: She has shoulder-length wavy hair and wears glasses." },
                { text: "My roommate is very easy to get along with. ↘", audio: "TTS: My roommate is very easy to get along with." },
                { text: "Are you an introvert or an extrovert? ↗", audio: "TTS: Are you an introvert or an extrovert?" },
                { text: "He is very outgoing and is always the life of the party. ↘", audio: "TTS: He is very outgoing and is always the life of the party." }
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
                    audio: "TTS: Tom: Who do you take after? Lisa: I look like my mom, but I have my dad's personality. Tom: Is your dad outgoing? Lisa: Yes, he is very talkative and friendly.",
                    text: "Tom: Who do you [take] after?<br>Lisa: I look like my mom, but I have my dad's [personality].<br>Tom: Is your dad [outgoing]?<br>Lisa: Yes, he is very [talkative] and friendly."
                },
                {
                    type: "dropdown",
                    instruction: "Listen to the dialogue about a new manager.",
                    audio: "TTS: John: What does the new manager look like? Emma: He is quite tall and has a beard. John: Is he serious? Emma: No, he has a great sense of humor.",
                    questions:[
                        { q: "John: What does the new manager [look* | seem | behave] like?", a: "look" },
                        { q: "Emma: He is quite [tall* | short | plain] and has a beard.", a: "tall" },
                        { q: "John: Is he [serious* | stubborn | bald]?", a: "serious" },
                        { q: "Emma: No, he has a great sense of [humor* | trait | weight].", a: "humor" }
                    ]
                },
                {
                    type: "audio-choice",
                    instruction: "Listen to the speaker. How is her sister different from her grandmother?",
                    audio: "TTS: My sister is the spitting image of my grandmother. They both have curly hair and freckles. However, they have different personalities. My sister is a bit on the quiet side, while my grandmother is very talkative.",
                    options:[
                        { t: "Her sister is taller.", c: false },
                        { t: "Her sister is very talkative.", c: false },
                        { t: "Her sister is quieter.", c: true },
                        { t: "Her sister does not have freckles.", c: false }
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
                    title: "Dialogue - The Blind Date",
                    audio: "TTS: Anna: I am setting you up on a blind date for Friday! Ben: Oh really? What is she like? Anna: She is incredibly funny, very outgoing, and smart. Ben: Sounds great! What does she look like? Anna: She is of average height, has a medium build, and has shoulder-length hair. Ben: Does she wear glasses? Anna: Yes, she wears glasses and has a few freckles. I think you guys will really click!",
                    body: "<b>Anna:</b> I am setting you up on a [blind date](tooltip:blind-date) for Friday!<br><b>Ben:</b> Oh really? [What is she like](tooltip:what-is-like)?<br><b>Anna:</b> She is [incredibly funny](tooltip:incredibly-funny), [very outgoing](tooltip:very-outgoing), and smart.<br><b>Ben:</b> Sounds great! [What does she look like](tooltip:what-look-like)?<br><b>Anna:</b> She is of [average height](tooltip:average-height), has a [medium build](tooltip:medium-build), and has [shoulder-length hair](tooltip:shoulder-length-hair).<br><b>Ben:</b> Does she [wear glasses](tooltip:wear-glasses)?<br><b>Anna:</b> Yes, she wears glasses and has a few [freckles](tooltip:freckles). I think you guys will really [click](tooltip:click)!",
                    questions:[
                        { q: "What is the woman's personality like?", options:[{t: "She is shy and quiet.", c: false}, {t: "She is incredibly funny and outgoing.", c: true}, {t: "She is stubborn and lazy.", c: false}], type: "mcq" },
                        { q: "What does the woman look like?", options:[{t: "She is short and chubby.", c: false}, {t: "She is tall and bald.", c: false}, {t: "She is of average height with a medium build.", c: true}], type: "mcq" },
                        { q: "Does the woman wear glasses?", options:[{t: "Yes, and she has freckles.", c: true}, {t: "No, she has perfect vision.", c: false}, {t: "Yes, and she has a mustache.", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Dialogue - Family Traits",
                    audio: "TTS: Sarah: Tell me about your brother. Who do you take after in your family? Mark: I take after my mom. She is very hard-working and generous. My brother takes after my dad. Sarah: Does he look like his father? Mark: Yes, he is the spitting image of him. He is tall, muscular, and has curly hair. Sarah: Is he easy to get along with? Mark: Sometimes. But he can be very stubborn.",
                    body: "<b>Sarah:</b> Tell me about your brother. [Who do you take after](tooltip:who-take-after) in your family?<br><b>Mark:</b> I [take after](tooltip:take-after) my mom. She is very[hard-working](tooltip:hard-working) and [generous](tooltip:generous). My brother takes after my dad.<br><b>Sarah:</b> [Does he look like his father](tooltip:look-like-father)?<br><b>Mark:</b> Yes, he is [the spitting image of](tooltip:spitting-image) him. He is [tall](tooltip:tall), [muscular](tooltip:muscular), and has [curly](tooltip:curly) hair.<br><b>Sarah:</b> Is he [easy to get along with](tooltip:easy-to-get-along)?<br><b>Mark:</b> Sometimes. But he can be very [stubborn](tooltip:stubborn).",
                    questions:[
                        { q: "Who does Mark take after?", options:[{t: "His father.", c: false}, {t: "His brother.", c: false}, {t: "His mother.", c: true}], type: "mcq" },
                        { q: "What does Mark's brother look like?", options:[{t: "He is tall, muscular, and has curly hair.", c: true}, {t: "He is short and plain.", c: false}, {t: "He is slim and bald.", c: false}], type: "mcq" },
                        { q: "What is a negative trait of Mark's brother?", options:[{t: "He is lazy.", c: false}, {t: "He is stubborn.", c: true}, {t: "He is selfish.", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Email - My New Roommate",
                    audio: "TTS: Subject: Great news! Hi Lisa, I finally found a new roommate. Her name is Clara. She is in her early twenties and she is gorgeous. She has a slim build and long, straight black hair. I was worried she might be selfish, but she is very polite and friendly. Are you an introvert or an extrovert? Well, Clara is definitely an extrovert! She is the life of the party. Let's hang out this weekend so you can meet her. Best, David.",
                    body: "<b>From: David</b><br><b>To: Lisa</b><br>Subject: Great news!<br><br>Hi Lisa,<br>I finally found a new roommate. Her name is Clara. She is [in her early twenties](tooltip:early-twenties) and she is [gorgeous](tooltip:gorgeous). She has a [slim](tooltip:slim)[build](tooltip:build) and long, [straight](tooltip:straight) black hair. I was worried she might be [selfish](tooltip:selfish), but she is very [polite](tooltip:polite) and[friendly](tooltip:friendly).[Are you an introvert or an extrovert](tooltip:introvert-extrovert)? Well, Clara is definitely an extrovert! She is [the life of the party](tooltip:life-of-party). Let's hang out this weekend so you can meet her.<br><br>Best, David.",
                    questions:[
                        { q: "How old is Clara?", options:[{t: "In her early twenties.", c: true}, {t: "Thirty years old.", c: false}, {t: "In her late teens.", c: false}], type: "mcq" },
                        { q: "What kind of hair does Clara have?", options:[{t: "Curly blonde hair.", c: false}, {t: "Long, straight black hair.", c: true}, {t: "Shoulder-length wavy hair.", c: false}], type: "mcq" },
                        { q: "How does David describe Clara's personality?", options:[{t: "Shy and quiet.", c: false}, {t: "Lazy and serious.", c: false}, {t: "Polite, friendly, and an extrovert.", c: true}], type: "mcq" }
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
                { type: "matching", instruction: "Match the facial feature to its description.", pairs:[
                    { left: "Beard", right: "Hair on the chin and jaw", val: "1" },
                    { left: "Mustache", right: "Hair above the upper lip", val: "2" },
                    { left: "Freckles", right: "Small brown spots on the skin", val: "3" },
                    { left: "Bald", right: "Having no hair on the head", val: "4" }
                ]},
                { type: "matching", instruction: "Match the hair type to its appearance.", pairs:[
                    { left: "Straight", right: "No curls or waves", val: "1" },
                    { left: "Wavy", right: "Slightly curved", val: "2" },
                    { left: "Curly", right: "Having ringlets or spirals", val: "3" },
                    { left: "Shoulder-length", right: "Reaching the shoulders", val: "4" }
                ]},
                { type: "matching", instruction: "Match the personality adjectives to their opposites.", pairs:[
                    { left: "Outgoing", right: "Shy", val: "1" },
                    { left: "Talkative", right: "Quiet", val: "2" },
                    { left: "Generous", right: "Selfish", val: "3" },
                    { left: "Hard-working", right: "Lazy", val: "4" }
                ]},
                { type: "matching", instruction: "Match the question to what it asks about.", pairs:[
                    { left: "What does he look like?", right: "Asks about appearance", val: "1" },
                    { left: "What is she like?", right: "Asks about personality", val: "2" },
                    { left: "How tall is he?", right: "Asks about height", val: "3" },
                    { left: "Who do you take after?", right: "Asks about family resemblance", val: "4" }
                ]},

                // --- WORD ORDER (5-14) ---
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "he / like / What / look / does / ?", correct: "What does he look like ?" },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "she / What / like / is / ?", correct: "What is she like ?" },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "after / do / Who / take / you / ?", correct: "Who do you take after ?" },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "is / tall / he / How / ?", correct: "How tall is he ?" },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "glasses / Does / wear / he / ?", correct: "Does he wear glasses ?" },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "height / is / She / of / average / .", correct: "She is of average height ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "image / is / spitting / the / He / of / father / his / .", correct: "He is the spitting image of his father ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "with / to / along / get / easy / is / She / .", correct: "She is easy to get along with ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "of / party / life / the / is / He / .", correct: "He is the life of the party ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "side / quiet / the / on / bit / a / I'm / .", correct: "I'm a bit on the quiet side ." },

                // --- CLICKABLE ERROR (15-24) ---
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "How [much](error:tall) is he?" },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "What does he [seems](error:look) like?" },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "She is of [medium](error:average) height." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "He has a [average](error:medium) build." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "She has shoulder-[size](error:length) hair." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "He likes to [use](error:wear) glasses." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "He is the [spitting](error:spitting) image of his dad." }, // Tricky: The word is correct, let's change the error.
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "He is the [talking](error:spitting) image of his dad." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "She is easy to get [around](error:along) with." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "He is the [soul](error:life) of the party." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "She is incredibly [fun](error:funny)." },

                // --- ODD ONE OUT (25-30) ---
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Hair)", options:[{t: "Straight", c: false}, {t: "Wavy", c: false}, {t: "Curly", c: false}, {t: "Stubborn", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Build)", options:[{t: "Muscular", c: false}, {t: "Slim", c: false}, {t: "Chubby", c: false}, {t: "Talkative", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Positive Traits)", options:[{t: "Generous", c: false}, {t: "Friendly", c: false}, {t: "Polite", c: false}, {t: "Selfish", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Negative Traits)", options:[{t: "Lazy", c: false}, {t: "Stubborn", c: false}, {t: "Rude", c: false}, {t: "Handsome", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Features)", options:[{t: "Beard", c: false}, {t: "Mustache", c: false}, {t: "Freckles", c: false}, {t: "Height", c: true}] }, // Height is a measurement, others are specific physical traits on the face
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Appearance)", options:[{t: "Gorgeous", c: false}, {t: "Handsome", c: false}, {t: "Plain", c: false}, {t: "Serious", c: true}] },

                // --- TRUE / FALSE (31-35) ---
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "If you 'take after' someone, you resemble them in appearance or behavior.", correct: "true"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "A person with a 'medium build' is extremely muscular and large.", correct: "false"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "Someone who is 'outgoing' likes to meet and talk to new people.", correct: "true"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "If a person is 'bald', they have very long, curly hair.", correct: "false"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "Being the 'life of the party' means you are very quiet and shy.", correct: "false"}] },

                // --- MCQ (36-39) ---
                { type: "mcq", instruction: "Choose the correct phrase.<br>If you want to know about someone's personality, you ask: '________?'", options:[{t: "What does she look like", c: false}, {t: "What is she like", c: true}, {t: "How tall is she", c: false}, {t: "Does she wear glasses", c: false}] },
                { type: "mcq", instruction: "Choose the correct word.<br>Someone who does not like to work is ________.", options:[{t: "hard-working", c: false}, {t: "generous", c: false}, {t: "lazy", c: true}, {t: "polite", c: false}] },
                { type: "mcq", instruction: "Choose the correct phrase.<br>If someone looks exactly like their parent, you say they are the ________ image.", options:[{t: "looking", c: false}, {t: "spitting", c: true}, {t: "taking", c: false}, {t: "smiling", c: false}] },
                { type: "mcq", instruction: "Choose the correct adjective.<br>If you only care about yourself and not others, you are ________.", options:[{t: "generous", c: false}, {t: "friendly", c: false}, {t: "selfish", c: true}, {t: "polite", c: false}] },

                // --- CATEGORIZE (40) ---
                { type: "categorize", instruction: "Sort the adjectives into Appearance and Personality.", 
                    categories:[{id: "app", name: "Appearance"}, {id: "per", name: "Personality"}],
                    items:[
                        {text: "Handsome", catId: "app"}, 
                        {text: "Chubby", catId: "app"}, 
                        {text: "Bald", catId: "app"}, 
                        {text: "Stubborn", catId: "per"}, 
                        {text: "Outgoing", catId: "per"}, 
                        {text: "Talkative", catId: "per"}
                    ] 
                }
            ]
        },

        // ======================================================
        // STEP 8: WRITING PRACTICE
        // ======================================================
        {
            title: "Writing Practice",
            instruction: "Write a short paragraph (5-7 sentences) describing a family member or a close friend. Describe what they look like (height, build, hair), what their personality is like, and mention who they take after in their family.",
            example: "My best friend's name is Lucas. He is of average height and has a muscular build because he goes to the gym. He has short, curly hair and a thick beard. Lucas is a very outgoing and talkative person. He is always the life of the party. He takes after his mother, who is also incredibly funny and friendly. We are very easy to get along with.",
            prompts:[
                "Describe their physical appearance (e.g., tall, slim, wavy hair, wears glasses).",
                "Describe their personality using at least two adjectives (e.g., shy, hard-working).",
                "Use an expression like 'easy to get along with' or 'the life of the party'.",
                "Explain who they take after or look like."
            ]
        },

        // ======================================================
        // STEP 9: FLASHCARDS
        // ======================================================
        {
            title: "Flashcards",
            items:[
                // 2A Items (36 items)
                { term: "Height", definition: "The measurement from base to top or of a standing person.", defTrans: "Altura", example: "His height is six feet.", audioFront: "TTS: Height", audioBack: "TTS: His height is six feet." },
                { term: "Weight", definition: "A body's relative mass.", defTrans: "Peso", example: "She is trying to lose weight.", audioFront: "TTS: Weight", audioBack: "TTS: She is trying to lose weight." },
                { term: "Build", definition: "The proportions of a person's body.", defTrans: "Porte físico / Biotipo", example: "He has a very athletic build.", audioFront: "TTS: Build", audioBack: "TTS: He has a very athletic build." },
                { term: "Beard", definition: "A growth of hair on the chin and lower cheeks.", defTrans: "Barba", example: "My uncle grew a long beard.", audioFront: "TTS: Beard", audioBack: "TTS: My uncle grew a long beard." },
                { term: "Mustache", definition: "A strip of hair left to grow above the upper lip.", defTrans: "Bigode", example: "He shaves his mustache every week.", audioFront: "TTS: Mustache", audioBack: "TTS: He shaves his mustache every week." },
                { term: "Freckles", definition: "Small patches of light brown color on the skin.", defTrans: "Sardas", example: "The sun gave her more freckles.", audioFront: "TTS: Freckles", audioBack: "TTS: The sun gave her more freckles." },
                { term: "Personality", definition: "The combination of characteristics that form an individual's character.", defTrans: "Personalidade", example: "She has a very cheerful personality.", audioFront: "TTS: Personality", audioBack: "TTS: She has a very cheerful personality." },
                { term: "Trait", definition: "A distinguishing quality or characteristic.", defTrans: "Traço (característica)", example: "Honesty is a great character trait.", audioFront: "TTS: Trait", audioBack: "TTS: Honesty is a great character trait." },
                { term: "To look like", definition: "To have a similar appearance to someone or something.", defTrans: "Parecer (fisicamente)", example: "You look like your older brother.", audioFront: "TTS: To look like", audioBack: "TTS: You look like your older brother." },
                { term: "To seem", definition: "To give the impression or sensation of being something.", defTrans: "Parecer (dar a impressão)", example: "You seem very tired today.", audioFront: "TTS: To seem", audioBack: "TTS: You seem very tired today." },
                { term: "To behave", definition: "To act or conduct oneself in a specified way.", defTrans: "Comportar-se", example: "The children always behave well in class.", audioFront: "TTS: To behave", audioBack: "TTS: The children always behave well in class." },
                { term: "To weigh", definition: "To find out how heavy someone is, or to have a specific heaviness.", defTrans: "Pesar", example: "I weigh seventy kilograms.", audioFront: "TTS: To weigh", audioBack: "TTS: I weigh seventy kilograms." },

                { term: "Tall", definition: "Of great or more than average height.", defTrans: "Alto(a)", example: "Basketball players are usually very tall.", audioFront: "TTS: Tall", audioBack: "TTS: Basketball players are usually very tall." },
                { term: "Short", definition: "Measuring a small distance from end to end.", defTrans: "Baixo(a) / Curto(a)", example: "She is too short to reach the top shelf.", audioFront: "TTS: Short", audioBack: "TTS: She is too short to reach the top shelf." },
                { term: "Slim", definition: "Gracefully thin; slender.", defTrans: "Esbelto(a) / Magro(a)", example: "He exercises and stays very slim.", audioFront: "TTS: Slim", audioBack: "TTS: He exercises and stays very slim." },
                { term: "Chubby", definition: "Plump and rounded.", defTrans: "Gordinho(a)", example: "The baby has cute, chubby cheeks.", audioFront: "TTS: Chubby", audioBack: "TTS: The baby has cute, chubby cheeks." },
                { term: "Muscular", definition: "Having well-developed muscles.", defTrans: "Musculoso(a)", example: "The gym instructor is very muscular.", audioFront: "TTS: Muscular", audioBack: "TTS: The gym instructor is very muscular." },
                { term: "Gorgeous", definition: "Beautiful; very attractive.", defTrans: "Deslumbrante", example: "The bride looked absolutely gorgeous.", audioFront: "TTS: Gorgeous", audioBack: "TTS: The bride looked absolutely gorgeous." },
                { term: "Handsome", definition: "Good-looking (typically used for a man).", defTrans: "Bonito", example: "He is a very handsome young man.", audioFront: "TTS: Handsome", audioBack: "TTS: He is a very handsome young man." },
                { term: "Plain", definition: "Not beautiful or attractive; ordinary-looking.", defTrans: "Comum / Simples", example: "She wears plain clothes to work.", audioFront: "TTS: Plain", audioBack: "TTS: She wears plain clothes to work." },
                { term: "Bald", definition: "Having a scalp wholly or partly lacking hair.", defTrans: "Careca", example: "My grandfather is completely bald.", audioFront: "TTS: Bald", audioBack: "TTS: My grandfather is completely bald." },
                { term: "Straight", definition: "Without a curve or bend.", defTrans: "Liso (cabelo)", example: "She has long, straight black hair.", audioFront: "TTS: Straight", audioBack: "TTS: She has long, straight black hair." },
                { term: "Wavy", definition: "Having a series of curves; not straight.", defTrans: "Ondulado (cabelo)", example: "I love her thick wavy hair.", audioFront: "TTS: Wavy", audioBack: "TTS: I love her thick wavy hair." },
                { term: "Curly", definition: "Made, growing, or arranged in curls or curves.", defTrans: "Cacheado (cabelo)", example: "His hair is very curly.", audioFront: "TTS: Curly", audioBack: "TTS: His hair is very curly." },

                { term: "Outgoing", definition: "Friendly and socially confident.", defTrans: "Extrovertido(a)", example: "She makes friends easily because she is outgoing.", audioFront: "TTS: Outgoing", audioBack: "TTS: She makes friends easily because she is outgoing." },
                { term: "Shy", definition: "Being reserved or showing nervousness with other people.", defTrans: "Tímido(a)", example: "The shy boy hid behind his mother.", audioFront: "TTS: Shy", audioBack: "TTS: The shy boy hid behind his mother." },
                { term: "Talkative", definition: "Fond of making conversation.", defTrans: "Falante / Tagarela", example: "My talkative friend never stops speaking.", audioFront: "TTS: Talkative", audioBack: "TTS: My talkative friend never stops speaking." },
                { term: "Quiet", definition: "Making little or no noise; speaking very little.", defTrans: "Quieto(a)", example: "He is a quiet person who prefers to read.", audioFront: "TTS: Quiet", audioBack: "TTS: He is a quiet person who prefers to read." },
                { term: "Friendly", definition: "Kind and pleasant.", defTrans: "Amigável", example: "The friendly dog greeted everyone at the park.", audioFront: "TTS: Friendly", audioBack: "TTS: The friendly dog greeted everyone at the park." },
                { term: "Polite", definition: "Having or showing respectful behavior.", defTrans: "Educado(a)", example: "It is important to be polite to the teacher.", audioFront: "TTS: Polite", audioBack: "TTS: It is important to be polite to the teacher." },
                { term: "Generous", definition: "Showing a readiness to give more of something.", defTrans: "Generoso(a)", example: "My generous aunt always gives me gifts.", audioFront: "TTS: Generous", audioBack: "TTS: My generous aunt always gives me gifts." },
                { term: "Selfish", definition: "Lacking consideration for others.", defTrans: "Egoísta", example: "The selfish man didn't share his food.", audioFront: "TTS: Selfish", audioBack: "TTS: The selfish man didn't share his food." },
                { term: "Lazy", definition: "Unwilling to work or use energy.", defTrans: "Preguiçoso(a)", example: "A lazy student rarely does homework.", audioFront: "TTS: Lazy", audioBack: "TTS: A lazy student rarely does homework." },
                { term: "Hard-working", definition: "Tending to work with energy and commitment.", defTrans: "Trabalhador(a)", example: "The hard-working team finished the project early.", audioFront: "TTS: Hard-working", audioBack: "TTS: The hard-working team finished the project early." },
                { term: "Serious", definition: "Acting or speaking sincerely and in earnest.", defTrans: "Sério(a)", example: "My boss is a very serious woman.", audioFront: "TTS: Serious", audioBack: "TTS: My boss is a very serious woman." },
                { term: "Stubborn", definition: "Having a determination not to change one's attitude.", defTrans: "Teimoso(a)", example: "He is so stubborn he never changes his mind.", audioFront: "TTS: Stubborn", audioBack: "TTS: He is so stubborn he never changes his mind." },

                // 3A Items (18 items)
                { term: "What does he look like?", definition: "Asking for a physical description of a male.", defTrans: "Como ele é fisicamente?", example: "What does he look like?", audioFront: "TTS: What does he look like?", audioBack: "TTS: What does he look like?" },
                { term: "What is she like?", definition: "Asking for a description of a female's personality.", defTrans: "Como ela é? (Personalidade)", example: "What is she like?", audioFront: "TTS: What is she like?", audioBack: "TTS: What is she like?" },
                { term: "Who do you take after?", definition: "Asking which older relative you resemble.", defTrans: "A quem você puxou?", example: "Who do you take after in your family?", audioFront: "TTS: Who do you take after?", audioBack: "TTS: Who do you take after in your family?" },
                { term: "How tall is he?", definition: "Asking for a male's height measurement.", defTrans: "Qual a altura dele?", example: "How tall is he?", audioFront: "TTS: How tall is he?", audioBack: "TTS: How tall is he?" },
                { term: "Does he look like his father?", definition: "Asking if a male physically resembles his dad.", defTrans: "Ele se parece com o pai dele?", example: "Does he look like his father?", audioFront: "TTS: Does he look like his father?", audioBack: "TTS: Does he look like his father?" },
                { term: "Are you an introvert or an extrovert?", definition: "Asking about someone's core social energy style.", defTrans: "Você é introvertido ou extrovertido?", example: "Are you an introvert or an extrovert?", audioFront: "TTS: Are you an introvert or an extrovert?", audioBack: "TTS: Are you an introvert or an extrovert?" },
                
                { term: "Average height", definition: "Not particularly tall or short.", defTrans: "Estatura média", example: "She is of average height.", audioFront: "TTS: Average height", audioBack: "TTS: She is of average height." },
                { term: "Medium build", definition: "Not particularly thin or overweight.", defTrans: "Porte físico médio", example: "He has a medium build.", audioFront: "TTS: Medium build", audioBack: "TTS: He has a medium build." },
                { term: "Shoulder-length hair", definition: "Hair that falls just down to the shoulders.", defTrans: "Cabelo na altura dos ombros", example: "She has shoulder-length hair.", audioFront: "TTS: Shoulder-length hair", audioBack: "TTS: She has shoulder-length hair." },
                { term: "Wear glasses", definition: "To use spectacles for better vision.", defTrans: "Usar óculos", example: "I wear glasses to read.", audioFront: "TTS: Wear glasses", audioBack: "TTS: I wear glasses to read." },
                { term: "In his early twenties", definition: "Being aged between 20 and 23.", defTrans: "Na faixa dos vinte e poucos anos", example: "He is in his early twenties.", audioFront: "TTS: In his early twenties", audioBack: "TTS: He is in his early twenties." },
                { term: "The spitting image of", definition: "An exact visual replica of someone else.", defTrans: "A cara / Imagem escarrada de", example: "She is the spitting image of her mother.", audioFront: "TTS: The spitting image of", audioBack: "TTS: She is the spitting image of her mother." },
                
                { term: "Easy to get along with", definition: "Being friendly and not causing conflict.", defTrans: "Fácil de conviver", example: "My new roommate is easy to get along with.", audioFront: "TTS: Easy to get along with", audioBack: "TTS: My new roommate is easy to get along with." },
                { term: "A good sense of humor", definition: "The ability to appreciate or express things that are funny.", defTrans: "Bom senso de humor", example: "He has a good sense of humor.", audioFront: "TTS: A good sense of humor", audioBack: "TTS: He has a good sense of humor." },
                { term: "The life of the party", definition: "A lively, amusing person who is the center of attention.", defTrans: "A alma da festa", example: "She is always the life of the party.", audioFront: "TTS: The life of the party", audioBack: "TTS: She is always the life of the party." },
                { term: "A bit on the quiet side", definition: "Tending to not speak much.", defTrans: "Um pouco quieto/calado", example: "He is a bit on the quiet side.", audioFront: "TTS: A bit on the quiet side", audioBack: "TTS: He is a bit on the quiet side." },
                { term: "Incredibly funny", definition: "Causing extreme laughter.", defTrans: "Incrivelmente engraçado", example: "The comedian was incredibly funny.", audioFront: "TTS: Incredibly funny", audioBack: "TTS: The comedian was incredibly funny." },
                { term: "Very outgoing", definition: "Highly friendly and socially confident.", defTrans: "Muito extrovertido", example: "My sister is a very outgoing person.", audioFront: "TTS: Very outgoing", audioBack: "TTS: My sister is a very outgoing person." }
            ]
        }
    ],

    // ======================================================
    // GLOSSARY (All 54 items + Context words)
    // ======================================================
    glossary:[
        // 2A: Features & Actions
        { topic: "Features", term: "height", definition: "The measurement from base to top.", translation: "Altura" },
        { topic: "Features", term: "weight", definition: "A body's relative mass.", translation: "Peso" },
        { topic: "Features", term: "build", definition: "The proportions of a person's body.", translation: "Porte físico" },
        { topic: "Features", term: "beard", definition: "Hair on the chin and lower cheeks.", translation: "Barba" },
        { topic: "Features", term: "mustache", definition: "Hair left to grow above the upper lip.", translation: "Bigode" },
        { topic: "Features", term: "freckles", definition: "Small patches of light brown color on the skin.", translation: "Sardas" },
        { topic: "Features", term: "personality", definition: "The combination of characteristics that form character.", translation: "Personalidade" },
        { topic: "Features", term: "trait", definition: "A distinguishing quality or characteristic.", translation: "Traço" },
        { topic: "Verbs", term: "to-look-like", definition: "To have a similar appearance.", translation: "Parecer (físico)" },
        { topic: "Verbs", term: "to-seem", definition: "To give the impression of being something.", translation: "Parecer (impressão)" },
        { topic: "Verbs", term: "to-behave", definition: "To act in a specified way.", translation: "Comportar-se" },
        { topic: "Verbs", term: "to-weigh", definition: "To find out how heavy someone is.", translation: "Pesar" },

        // 2A: Appearance Adjectives
        { topic: "Appearance", term: "tall", definition: "Of great or more than average height.", translation: "Alto(a)" },
        { topic: "Appearance", term: "short", definition: "Measuring a small distance from end to end.", translation: "Baixo(a)" },
        { topic: "Appearance", term: "slim", definition: "Gracefully thin; slender.", translation: "Esbelto(a)" },
        { topic: "Appearance", term: "chubby", definition: "Plump and rounded.", translation: "Gordinho(a)" },
        { topic: "Appearance", term: "muscular", definition: "Having well-developed muscles.", translation: "Musculoso(a)" },
        { topic: "Appearance", term: "gorgeous", definition: "Beautiful; very attractive.", translation: "Deslumbrante" },
        { topic: "Appearance", term: "handsome", definition: "Good-looking (typically used for a man).", translation: "Bonito" },
        { topic: "Appearance", term: "plain", definition: "Not beautiful or attractive; ordinary-looking.", translation: "Comum / Simples" },
        { topic: "Appearance", term: "bald", definition: "Having a scalp wholly or partly lacking hair.", translation: "Careca" },
        { topic: "Appearance", term: "straight", definition: "Without a curve or bend.", translation: "Liso" },
        { topic: "Appearance", term: "wavy", definition: "Having a series of curves.", translation: "Ondulado" },
        { topic: "Appearance", term: "curly", definition: "Growing in curls or curves.", translation: "Cacheado" },

        // 2A: Personality Adjectives
        { topic: "Personality", term: "outgoing", definition: "Friendly and socially confident.", translation: "Extrovertido(a)" },
        { topic: "Personality", term: "shy", definition: "Being reserved or showing nervousness.", translation: "Tímido(a)" },
        { topic: "Personality", term: "talkative", definition: "Fond of making conversation.", translation: "Falante" },
        { topic: "Personality", term: "quiet", definition: "Making little noise; speaking very little.", translation: "Quieto(a)" },
        { topic: "Personality", term: "friendly", definition: "Kind and pleasant.", translation: "Amigável" },
        { topic: "Personality", term: "polite", definition: "Having respectful behavior.", translation: "Educado(a)" },
        { topic: "Personality", term: "generous", definition: "Readiness to give more of something.", translation: "Generoso(a)" },
        { topic: "Personality", term: "selfish", definition: "Lacking consideration for others.", translation: "Egoísta" },
        { topic: "Personality", term: "lazy", definition: "Unwilling to work or use energy.", translation: "Preguiçoso(a)" },
        { topic: "Personality", term: "hard-working", definition: "Working with energy and commitment.", translation: "Trabalhador(a)" },
        { topic: "Personality", term: "serious", definition: "Acting sincerely, rather than in a joking way.", translation: "Sério(a)" },
        { topic: "Personality", term: "stubborn", definition: "Determination not to change one's attitude.", translation: "Teimoso(a)" },

        // 3A: Expressions
        { topic: "Expressions", term: "what-look-like", definition: "Asking for a physical description of a male.", translation: "Como ele é fisicamente?" },
        { topic: "Expressions", term: "what-is-like", definition: "Asking for a description of a female's personality.", translation: "Como ela é? (Personalidade)" },
        { topic: "Expressions", term: "who-take-after", definition: "Asking which older relative you resemble.", translation: "A quem você puxou?" },
        { topic: "Expressions", term: "how-tall-is-he", definition: "Asking for a male's height measurement.", translation: "Qual a altura dele?" },
        { topic: "Expressions", term: "look-like-father", definition: "Asking if a male physically resembles his dad.", translation: "Ele se parece com o pai dele?" },
        { topic: "Expressions", term: "introvert-extrovert", definition: "Asking about someone's core social energy style.", translation: "Você é introvertido ou extrovertido?" },
        
        { topic: "Expressions", term: "average-height", definition: "Not particularly tall or short.", translation: "Estatura média" },
        { topic: "Expressions", term: "medium-build", definition: "Not particularly thin or overweight.", translation: "Porte físico médio" },
        { topic: "Expressions", term: "shoulder-length-hair", definition: "Hair that falls just down to the shoulders.", translation: "Cabelo na altura dos ombros" },
        { topic: "Expressions", term: "wear-glasses", definition: "To use spectacles for better vision.", translation: "Usar óculos" },
        { topic: "Expressions", term: "early-twenties", definition: "Being aged between 20 and 23.", translation: "Na faixa dos 20 e poucos anos" },
        { topic: "Expressions", term: "spitting-image", definition: "An exact visual replica of someone else.", translation: "A cara / Imagem escarrada" },
        
        { topic: "Expressions", term: "easy-to-get-along", definition: "Being friendly and not causing conflict.", translation: "Fácil de conviver" },
        { topic: "Expressions", term: "good-sense-humor", definition: "The ability to appreciate or express things that are funny.", translation: "Bom senso de humor" },
        { topic: "Expressions", term: "life-of-party", definition: "A lively, amusing person who is the center of attention.", translation: "A alma da festa" },
        { topic: "Expressions", term: "quiet-side", definition: "Tending to not speak much.", translation: "Um pouco quieto/calado" },
        { topic: "Expressions", term: "incredibly-funny", definition: "Causing extreme laughter.", translation: "Incrivelmente engraçado" },
        { topic: "Expressions", term: "very-outgoing", definition: "Highly friendly and socially confident.", translation: "Muito extrovertido" },

        // Additional Context Words
        { topic: "Context", term: "appearance", definition: "The way that someone or something looks.", translation: "Aparência" },
        { topic: "Context", term: "character", definition: "The mental and moral qualities distinctive to an individual.", translation: "Caráter" },
        { topic: "Context", term: "blind-date", definition: "A social engagement with someone you have not previously met.", translation: "Encontro às cegas" },
        { topic: "Context", term: "click", definition: "To immediately become friendly and get along well.", translation: "Dar-se bem rapidamente (Dar liga)" },
        { topic: "Context", term: "take-after", definition: "To resemble a parent or ancestor in appearance or personality.", translation: "Puxar a (alguém)" }
    ]
});