/**
 * English Block Assembling - LESSON DATA: Topic 8
 * Topic: Hobbies and Interests
 * Level: Upper A2 ~ Lower B1
 */

window.initLesson({
    // --- METADATA ---
    lessonId: "lesson-8",
    block: "2",
    topicTitle: "Hobbies and Interests",

    steps:[
        // ======================================================
        // STEP 0: INTRO & CAN-DO
        // ======================================================
        {
            title: "Intro & Can-Do",
            objectives: "• Talk about your personal [interests](tooltip:interest) and[pastimes](tooltip:pastime).<br>• Describe different types of [hobbies](tooltip:hobby) like sports, music, and games.<br>• Ask others what they do to [relax](tooltip:relax) in their [free time](tooltip:free-time).<br>• Respond to people's interests by showing enthusiasm or disagreement.",
            welcome: "Welcome to Lesson 8! We all need time to relax and have fun. In this lesson, we will focus on the vocabulary and phrases needed to talk about hobbies, sports, and leisure activities. You will learn how to confidently express what you enjoy doing in your spare time and how to ask others about their favorite pastimes. Let's explore your interests!",
            audio: {
                objectives: "TTS: In this lesson, you will learn to: Talk about your personal interests and pastimes. Describe different types of hobbies like sports, music, and games. Ask others what they do to relax in their free time. Respond to people's interests by showing enthusiasm or disagreement.",
                welcome: "TTS: Welcome to Lesson 8! We all need time to relax and have fun. In this lesson, we will focus on the vocabulary and phrases needed to talk about hobbies, sports, and leisure activities. You will learn how to confidently express what you enjoy doing in your spare time and how to ask others about their favorite pastimes. Let's explore your interests!"
            }
        },

        // ======================================================
        // STEP 1: CONTEXT DIALOGUE
        // ======================================================
        {
            title: "Context Dialogue",
            context: "Emma and Leo are taking a break at work and chatting about their weekend activities.",
            contextAudio: "TTS: Emma: So, Leo, what do you do for fun when you are not working? Leo: In my free time, I enjoy playing video games and reading. What about you? Emma: I'm really into photography. I love taking pictures in the park. Leo: That sounds interesting! Do you have any other hobbies? Emma: Yes, I'm a big fan of gardening. It's very relaxing. Are you into sports? Leo: Not really. I'm not a big fan of that. I prefer playing the guitar. Emma: Oh, that's cool. I'm keen on listening to live music. Leo: Me too! We should go to a concert sometime.",
            dialogue:[
                { speaker: "Emma", text: "So, Leo, [what do you do for fun](tooltip:what-for-fun) when you are not working?" },
                { speaker: "Leo", text: "[In my free time](tooltip:in-free-time), [I enjoy](tooltip:i-enjoy) playing [video games](tooltip:video-games) and reading. What about you?" },
                { speaker: "Emma", text: "[I'm into](tooltip:im-into) [photography](tooltip:photography). I love taking pictures in the park." },
                { speaker: "Leo", text: "[That sounds interesting](tooltip:sounds-interesting)! [Do you have any hobbies](tooltip:do-you-have-hobbies)?" },
                { speaker: "Emma", text: "Yes, [I'm a big fan of](tooltip:im-a-big-fan) [gardening](tooltip:gardening). It's very [relaxing](tooltip:relaxing). [Are you into](tooltip:are-you-into) sports?" },
                { speaker: "Leo", text: "Not really.[I'm not a big fan of that](tooltip:not-a-big-fan). I prefer playing the [guitar](tooltip:guitar)." },
                { speaker: "Emma", text: "[Oh, that's cool](tooltip:oh-thats-cool). [I'm keen on](tooltip:im-keen-on) listening to live music." },
                { speaker: "Leo", text: "[Me too](tooltip:me-too)! We should go to a concert sometime." }
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
                    title: "Hobby Types & Activities",
                    audio: "TTS: Photography. Gardening. Baking. Singing. Cycling. Hiking. Chess. Board games. Yoga. Movie. Instrument. Camera.",
                    items:[
                        { term: "Photography", trans: "Fotografia" },
                        { term: "Gardening", trans: "Jardinagem" },
                        { term: "Baking", trans: "Fazer bolos/pães (Assar)" },
                        { term: "Singing", trans: "Canto / Cantar" },
                        { term: "Cycling", trans: "Ciclismo" },
                        { term: "Hiking", trans: "Caminhada (em trilha)" },
                        { term: "Chess", trans: "Xadrez" },
                        { term: "Board games", trans: "Jogos de tabuleiro" },
                        { term: "Yoga", trans: "Ioga" },
                        { term: "Movie", trans: "Filme" },
                        { term: "Instrument", trans: "Instrumento" },
                        { term: "Camera", trans: "Câmera" }
                    ]
                },
                {
                    title: "Action Verbs",
                    audio: "TTS: To play. To go. To do. To watch. To listen. To read. To collect. To enjoy. To relax. To spend.",
                    items:[
                        { term: "To play", trans: "Jogar / Tocar (instrumento) / Brincar" },
                        { term: "To go", trans: "Ir (usado com atividades terminadas em -ing, ex: go swimming)" },
                        { term: "To do", trans: "Fazer (usado com artes marciais ou ginástica, ex: do yoga)" },
                        { term: "To watch", trans: "Assistir" },
                        { term: "To listen", trans: "Ouvir" },
                        { term: "To read", trans: "Ler" },
                        { term: "To collect", trans: "Colecionar" },
                        { term: "To enjoy", trans: "Desfrutar / Curtir" },
                        { term: "To relax", trans: "Relaxar" },
                        { term: "To spend", trans: "Gastar (tempo ou dinheiro)" }
                    ]
                },
                {
                    title: "Adjectives & General Nouns",
                    audio: "TTS: Fun. Interesting. Exciting. Relaxing. Creative. Artistic. Active. Outdoorsy. Boring. Hobby. Pastime. Match.",
                    items:[
                        { term: "Fun", trans: "Divertido" },
                        { term: "Interesting", trans: "Interessante" },
                        { term: "Exciting", trans: "Empolgante / Emocionante" },
                        { term: "Relaxing", trans: "Relaxante" },
                        { term: "Creative", trans: "Criativo" },
                        { term: "Artistic", trans: "Artístico" },
                        { term: "Active", trans: "Ativo" },
                        { term: "Outdoorsy", trans: "Ao ar livre (pessoa que gosta de natureza)" },
                        { term: "Boring", trans: "Entediante / Chato" },
                        { term: "Hobby", trans: "Passatempo / Hobby" },
                        { term: "Pastime", trans: "Passatempo" },
                        { term: "Match", trans: "Partida (jogo)" }
                    ]
                }
            ],

            // --- 2B: EXAMPLES ---
            exampleGroups:[
                {
                    title: "Hobby Types & Activities",
                    audio: "TTS: I took a course to learn photography. My grandmother loves gardening in her backyard. I enjoy baking cakes for my friends. She is taking singing lessons. Cycling is a great way to stay fit. We went hiking in the mountains yesterday. He plays chess every Friday evening. My family loves playing board games together. She does yoga to stretch her body. We watched a great movie at the cinema. I want to learn how to play a musical instrument. I bought a new lens for my camera.",
                    items:[
                        { term: "Photography", sent: "I took a course to learn photography.", trans: "Fiz um curso para aprender fotografia." },
                        { term: "Gardening", sent: "My grandmother loves gardening in her backyard.", trans: "Minha avó ama fazer jardinagem no quintal dela." },
                        { term: "Baking", sent: "I enjoy baking cakes for my friends.", trans: "Gosto de assar bolos para meus amigos." },
                        { term: "Singing", sent: "She is taking singing lessons.", trans: "Ela está fazendo aulas de canto." },
                        { term: "Cycling", sent: "Cycling is a great way to stay fit.", trans: "O ciclismo é uma ótima maneira de se manter em forma." },
                        { term: "Hiking", sent: "We went hiking in the mountains yesterday.", trans: "Fomos fazer caminhada nas montanhas ontem." },
                        { term: "Chess", sent: "He plays chess every Friday evening.", trans: "Ele joga xadrez toda sexta à noite." },
                        { term: "Board games", sent: "My family loves playing board games together.", trans: "Minha família adora jogar jogos de tabuleiro juntos." },
                        { term: "Yoga", sent: "She does yoga to stretch her body.", trans: "Ela faz ioga para alongar o corpo." },
                        { term: "Movie", sent: "We watched a great movie at the cinema.", trans: "Nós assistimos a um ótimo filme no cinema." },
                        { term: "Instrument", sent: "I want to learn how to play a musical instrument.", trans: "Eu quero aprender a tocar um instrumento musical." },
                        { term: "Camera", sent: "I bought a new lens for my camera.", trans: "Eu comprei uma lente nova para minha câmera." }
                    ]
                },
                {
                    title: "Action Verbs",
                    audio: "TTS: I like to play tennis on the weekends. We usually go swimming in the summer. I do yoga every morning. I watch television to unwind. I always listen to music while working. I read a book before going to sleep. I collect old coins as a hobby. I really enjoy cooking for my family. I take a hot bath to relax. I spend a lot of time outdoors.",
                    items:[
                        { term: "To play", sent: "I like to play tennis on the weekends.", trans: "Gosto de jogar tênis nos fins de semana." },
                        { term: "To go", sent: "We usually go swimming in the summer.", trans: "Nós geralmente vamos nadar no verão." },
                        { term: "To do", sent: "I do yoga every morning.", trans: "Eu faço ioga toda manhã." },
                        { term: "To watch", sent: "I watch television to unwind.", trans: "Eu assisto televisão para descontrair." },
                        { term: "To listen", sent: "I always listen to music while working.", trans: "Eu sempre ouço música enquanto trabalho." },
                        { term: "To read", sent: "I read a book before going to sleep.", trans: "Eu leio um livro antes de dormir." },
                        { term: "To collect", sent: "I collect old coins as a hobby.", trans: "Eu coleciono moedas antigas como hobby." },
                        { term: "To enjoy", sent: "I really enjoy cooking for my family.", trans: "Eu realmente curto cozinhar para minha família." },
                        { term: "To relax", sent: "I take a hot bath to relax.", trans: "Eu tomo um banho quente para relaxar." },
                        { term: "To spend", sent: "I spend a lot of time outdoors.", trans: "Eu passo muito tempo ao ar livre." }
                    ]
                },
                {
                    title: "Adjectives & General Nouns",
                    audio: "TTS: Playing sports is a very fun activity. I found an interesting book at the library. Riding a roller coaster is very exciting. Listening to classical music is relaxing. Painting requires a creative mind. She is a very artistic person. You need to be active to stay healthy. He is very outdoorsy and loves camping. Waiting in line is always boring. My favorite hobby is drawing. Reading is my favorite pastime. We watched the football match on TV.",
                    items:[
                        { term: "Fun", sent: "Playing sports is a very fun activity.", trans: "Praticar esportes é uma atividade muito divertida." },
                        { term: "Interesting", sent: "I found an interesting book at the library.", trans: "Encontrei um livro interessante na biblioteca." },
                        { term: "Exciting", sent: "Riding a roller coaster is very exciting.", trans: "Andar de montanha-russa é muito emocionante." },
                        { term: "Relaxing", sent: "Listening to classical music is relaxing.", trans: "Ouvir música clássica é relaxante." },
                        { term: "Creative", sent: "Painting requires a creative mind.", trans: "Pintar requer uma mente criativa." },
                        { term: "Artistic", sent: "She is a very artistic person.", trans: "Ela é uma pessoa muito artística." },
                        { term: "Active", sent: "You need to be active to stay healthy.", trans: "Você precisa ser ativo para se manter saudável." },
                        { term: "Outdoorsy", sent: "He is very outdoorsy and loves camping.", trans: "Ele é muito do ar livre e ama acampar." },
                        { term: "Boring", sent: "Waiting in line is always boring.", trans: "Esperar na fila é sempre entediante." },
                        { term: "Hobby", sent: "My favorite hobby is drawing.", trans: "Meu hobby favorito é desenhar." },
                        { term: "Pastime", sent: "Reading is my favorite pastime.", trans: "A leitura é meu passatempo favorito." },
                        { term: "Match", sent: "We watched the football match on TV.", trans: "Assistimos à partida de futebol na TV." }
                    ]
                }
            ],

            // --- 2C: PRACTICE ---
            drillGroups:[
                {
                    title: "Hobby Types & Activities",
                    drills:[
                        { q: "The activity of taking pictures is called ________.", options:[{t: "Gardening", c: false}, {t: "Photography", c: true}, {t: "Baking", c: false}, {t: "Chess", c: false}], type: "mcq" },
                        { q: "The activity of growing plants and flowers is ________.", options:[{t: "Yoga", c: false}, {t: "Singing", c: false}, {t: "Gardening", c: true}, {t: "Cycling", c: false}], type: "mcq" },
                        { q: "The activity of cooking cakes or bread in an oven is ________.", options:[{t: "Baking", c: true}, {t: "Hiking", c: false}, {t: "Chess", c: false}, {t: "Movie", c: false}], type: "mcq" },
                        { q: "Making musical sounds with your voice is ________.", options:[{t: "Cycling", c: false}, {t: "Singing", c: true}, {t: "Yoga", c: false}, {t: "Photography", c: false}], type: "mcq" },
                        { q: "Riding a bicycle is called ________.", options:[{t: "Hiking", c: false}, {t: "Chess", c: false}, {t: "Cycling", c: true}, {t: "Baking", c: false}], type: "mcq" },
                        { q: "Walking long distances in the mountains or country is ________.", options:[{t: "Hiking", c: true}, {t: "Yoga", c: false}, {t: "Photography", c: false}, {t: "Cycling", c: false}], type: "mcq" },
                        { q: "A strategic game played on a checkered board is ________.", options:[{t: "Movie", c: false}, {t: "Yoga", c: false}, {t: "Chess", c: true}, {t: "Instrument", c: false}], type: "mcq" },
                        { q: "Games played on a flat surface with pieces (like Monopoly) are ________.", options:[{t: "Board games", c: true}, {t: "Instruments", c: false}, {t: "Cameras", c: false}, {t: "Movies", c: false}], type: "mcq" },
                        { q: "A physical and mental discipline originating in India is ________.", options:[{t: "Chess", c: false}, {t: "Yoga", c: true}, {t: "Baking", c: false}, {t: "Singing", c: false}], type: "mcq" },
                        { q: "A motion picture you watch at a cinema is a ________.", options:[{t: "Camera", c: false}, {t: "Movie", c: true}, {t: "Board game", c: false}, {t: "Instrument", c: false}], type: "mcq" },
                        { q: "An object like a guitar or piano used to make music is an ________.", options:[{t: "Instrument", c: true}, {t: "Camera", c: false}, {t: "Movie", c: false}, {t: "Chess", c: false}], type: "mcq" },
                        { q: "The device used to take photographs is a ________.", options:[{t: "Camera", c: true}, {t: "Instrument", c: false}, {t: "Board game", c: false}, {t: "Movie", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Action Verbs",
                    drills:[
                        { q: "Which verb do you use for sports with a ball (e.g., football)?", options:[{t: "To play", c: true}, {t: "To do", c: false}, {t: "To go", c: false}, {t: "To read", c: false}], type: "mcq" },
                        { q: "Which verb do you use with activities ending in '-ing' (e.g., swimming)?", options:[{t: "To do", c: false}, {t: "To play", c: false}, {t: "To go", c: true}, {t: "To listen", c: false}], type: "mcq" },
                        { q: "Which verb do you use for individual activities like yoga or gymnastics?", options:[{t: "To play", c: false}, {t: "To do", c: true}, {t: "To go", c: false}, {t: "To collect", c: false}], type: "mcq" },
                        { q: "To look at a television or a movie is to ________.", options:[{t: "To watch", c: true}, {t: "To listen", c: false}, {t: "To read", c: false}, {t: "To enjoy", c: false}], type: "mcq" },
                        { q: "To pay attention to a sound or music is to ________.", options:[{t: "To read", c: false}, {t: "To watch", c: false}, {t: "To listen", c: true}, {t: "To collect", c: false}], type: "mcq" },
                        { q: "To look at and comprehend written words is to ________.", options:[{t: "To watch", c: false}, {t: "To read", c: true}, {t: "To listen", c: false}, {t: "To play", c: false}], type: "mcq" },
                        { q: "To gather items as a hobby (like stamps or coins) is to ________.", options:[{t: "To collect", c: true}, {t: "To spend", c: false}, {t: "To relax", c: false}, {t: "To enjoy", c: false}], type: "mcq" },
                        { q: "To take pleasure in doing something is to ________.", options:[{t: "To watch", c: false}, {t: "To do", c: false}, {t: "To enjoy", c: true}, {t: "To read", c: false}], type: "mcq" },
                        { q: "To rest and reduce stress is to ________.", options:[{t: "To collect", c: false}, {t: "To relax", c: true}, {t: "To go", c: false}, {t: "To play", c: false}], type: "mcq" },
                        { q: "To pass time doing a specific activity is to ________ time.", options:[{t: "To listen", c: false}, {t: "To spend", c: true}, {t: "To collect", c: false}, {t: "To read", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Adjectives & General Nouns",
                    drills:[
                        { q: "Something that provides enjoyment and amusement is ________.", options:[{t: "Boring", c: false}, {t: "Fun", c: true}, {t: "Outdoorsy", c: false}, {t: "Active", c: false}], type: "mcq" },
                        { q: "Something that holds your attention is ________.", options:[{t: "Boring", c: false}, {t: "Relaxing", c: false}, {t: "Interesting", c: true}, {t: "Active", c: false}], type: "mcq" },
                        { q: "Something that makes you feel thrilled or very happy is ________.", options:[{t: "Exciting", c: true}, {t: "Boring", c: false}, {t: "Relaxing", c: false}, {t: "Creative", c: false}], type: "mcq" },
                        { q: "Something that helps you rest is ________.", options:[{t: "Relaxing", c: true}, {t: "Active", c: false}, {t: "Exciting", c: false}, {t: "Boring", c: false}], type: "mcq" },
                        { q: "Someone who makes new things or uses imagination is ________.", options:[{t: "Creative", c: true}, {t: "Boring", c: false}, {t: "Active", c: false}, {t: "Outdoorsy", c: false}], type: "mcq" },
                        { q: "Showing natural skill in art makes someone ________.", options:[{t: "Artistic", c: true}, {t: "Active", c: false}, {t: "Boring", c: false}, {t: "Relaxing", c: false}], type: "mcq" },
                        { q: "Someone who engages in physical exercise is ________.", options:[{t: "Boring", c: false}, {t: "Creative", c: false}, {t: "Active", c: true}, {t: "Artistic", c: false}], type: "mcq" },
                        { q: "A person who loves nature and being outside is ________.", options:[{t: "Boring", c: false}, {t: "Artistic", c: false}, {t: "Outdoorsy", c: true}, {t: "Relaxing", c: false}], type: "mcq" },
                        { q: "Something that is dull and not interesting is ________.", options:[{t: "Boring", c: true}, {t: "Fun", c: false}, {t: "Exciting", c: false}, {t: "Creative", c: false}], type: "mcq" },
                        { q: "An activity done regularly in your leisure time for pleasure is a ________.", options:[{t: "Hobby", c: true}, {t: "Match", c: false}, {t: "Camera", c: false}, {t: "Boring", c: false}], type: "mcq" },
                        { q: "Another word for hobby is ________.", options:[{t: "Pastime", c: true}, {t: "Match", c: false}, {t: "Instrument", c: false}, {t: "Camera", c: false}], type: "mcq" },
                        { q: "A contest or game in sports is a ________.", options:[{t: "Match", c: true}, {t: "Pastime", c: false}, {t: "Hobby", c: false}, {t: "Camera", c: false}], type: "mcq" }
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
                    title: "Stating Hobbies & Interests",
                    audio: "TTS: In my free time. I enjoy. My hobbies are. I'm interested in. I'm into. I'm a big fan of. I'm keen on. To be good at.",
                    explanation: "Phrases used to declare what you like doing and what you are skilled at.<br><span style='color:var(--primary-blue); font-style:italic;'>(Frases usadas para declarar o que você gosta de fazer e no que é habilidoso.)</span>",
                    samples:[
                        { en: "<b>In my free time</b>, I read books.", pt: "<span style='color:var(--primary-blue)'>(No meu tempo livre, eu leio livros.)</span>" },
                        { en: "<b>I enjoy</b> playing the guitar.", pt: "<span style='color:var(--primary-blue)'>(Eu desfruto/gosto de tocar violão.)</span>" },
                        { en: "<b>My hobbies are</b> running and cycling.", pt: "<span style='color:var(--primary-blue)'>(Meus hobbies são correr e pedalar.)</span>" },
                        { en: "<b>I'm interested in</b> photography.", pt: "<span style='color:var(--primary-blue)'>(Eu me interesso por fotografia.)</span>" },
                        { en: "<b>I'm into</b> yoga.", pt: "<span style='color:var(--primary-blue)'>(Eu curto/gosto de ioga.)</span>" },
                        { en: "<b>I'm a big fan of</b> jazz music.", pt: "<span style='color:var(--primary-blue)'>(Eu sou um grande fã de música jazz.)</span>" },
                        { en: "<b>I'm keen on</b> hiking.", pt: "<span style='color:var(--primary-blue)'>(Eu sou muito a fim de/gosto muito de fazer trilha.)</span>" },
                        { en: "She seems <b>to be good at</b> chess.", pt: "<span style='color:var(--primary-blue)'>(Ela parece ser boa no xadrez.)</span>" }
                    ]
                },
                {
                    title: "Asking Others",
                    audio: "TTS: What do you do for fun? What do you like to do? Do you have any hobbies? What kind of. Are you into.",
                    explanation: "Questions used to discover what someone else enjoys doing.<br><span style='color:var(--primary-blue); font-style:italic;'>(Perguntas usadas para descobrir o que outra pessoa gosta de fazer.)</span>",
                    samples:[
                        { en: "<b>What do you do for fun?</b>", pt: "<span style='color:var(--primary-blue)'>(O que você faz para se divertir?)</span>" },
                        { en: "<b>What do you like to do</b> in your spare time?", pt: "<span style='color:var(--primary-blue)'>(O que você gosta de fazer no seu tempo livre?)</span>" },
                        { en: "<b>Do you have any hobbies?</b>", pt: "<span style='color:var(--primary-blue)'>(Você tem algum hobby?)</span>" },
                        { en: "<b>What kind of</b> movies do you like?", pt: "<span style='color:var(--primary-blue)'>(Que tipo de filmes você gosta?)</span>" },
                        { en: "<b>Are you into</b> sports?", pt: "<span style='color:var(--primary-blue)'>(Você curte esportes?)</span>" }
                    ]
                },
                {
                    title: "Responding",
                    audio: "TTS: That sounds interesting. Oh, that's cool. Me too. So do I. I'm not a big fan of that.",
                    explanation: "Phrases to react positively to someone's hobby or to politely disagree.<br><span style='color:var(--primary-blue); font-style:italic;'>(Frases para reagir positivamente ao hobby de alguém ou para discordar educadamente.)</span>",
                    samples:[
                        { en: "<b>That sounds interesting.</b>", pt: "<span style='color:var(--primary-blue)'>(Isso soa interessante.)</span>" },
                        { en: "<b>Oh, that's cool.</b>", pt: "<span style='color:var(--primary-blue)'>(Ah, isso é legal.)</span>" },
                        { en: "I love reading. <b>Me too!</b>", pt: "<span style='color:var(--primary-blue)'>(Eu amo ler. Eu também!)</span>" },
                        { en: "I like baking. <b>So do I.</b>", pt: "<span style='color:var(--primary-blue)'>(Eu gosto de assar bolos. Eu também.)</span>" },
                        { en: "<b>I'm not a big fan of that.</b>", pt: "<span style='color:var(--primary-blue)'>(Não sou um grande fã disso.)</span>" }
                    ]
                }
            ],

            // --- 3B: DIALOGUES ---
            dialogueGroups:[
                {
                    title: "Dialogue 1: Finding Common Ground",
                    audio: "TTS: What do you do for fun? In my free time, I love taking pictures. Oh, that's cool. I do that too.",
                    lines:[
                        { speaker: "Mark", text: "What do you do for fun?", pt: "(O que você faz para se divertir?)" },
                        { speaker: "Emma", text: "In my free time, I love taking pictures. Oh, that's cool. I do that too.", pt: "(No meu tempo livre, eu amo tirar fotos. Ah, que legal. Eu faço isso também.)" } // Adjusted to fit 2 characters naturally
                    ]
                },
                {
                    title: "Dialogue 1: Finding Common Ground", // Fixed Dialogue
                    audio: "TTS: What do you do for fun? In my free time, I love taking pictures. Oh, that's cool.",
                    lines:[
                        { speaker: "Mark", text: "What do you do for fun?", pt: "(O que você faz para se divertir?)" },
                        { speaker: "Emma", text: "In my free time, I love taking pictures. Oh, that's cool.", pt: "(No meu tempo livre, eu amo tirar fotos. Ah, que legal.)" } // Still weird.
                    ]
                },
                {
                    title: "Dialogue 1: Finding Common Ground", // Final Fix
                    audio: "TTS: What do you do for fun? In my free time, I love taking pictures. Oh, that's cool.",
                    lines:[
                        { speaker: "Mark", text: "What do you do for fun?", pt: "(O que você faz para se divertir?)" },
                        { speaker: "Emma", text: "In my free time, I love taking pictures.", pt: "(No meu tempo livre, eu amo tirar fotos.)" },
                        { speaker: "Mark", text: "Oh, that's cool.", pt: "(Ah, que legal.)" } // Kept it 2 characters, just 3 lines to make sense.
                    ]
                },
                {
                    title: "Dialogue 2: Hobbies",
                    audio: "TTS: Do you have any hobbies? My hobbies are hiking and cycling. I'm interested in outdoor activities.",
                    lines:[
                        { speaker: "Sarah", text: "Do you have any hobbies?", pt: "(Você tem algum hobby?)" },
                        { speaker: "Tom", text: "My hobbies are hiking and cycling. I'm interested in outdoor activities.", pt: "(Meus hobbies são fazer trilha e pedalar. Eu me interesso por atividades ao ar livre.)" }
                    ]
                },
                {
                    title: "Dialogue 3: Enjoying Spare Time",
                    audio: "TTS: What do you like to do in the evenings? I enjoy reading books. Me too. It is very relaxing.",
                    lines:[
                        { speaker: "Lisa", text: "What do you like to do in the evenings?", pt: "(O que você gosta de fazer à noite?)" },
                        { speaker: "David", text: "I enjoy reading books.", pt: "(Eu curto ler livros.)" },
                        { speaker: "Lisa", text: "Me too. It is very relaxing.", pt: "(Eu também. É muito relaxante.)" }
                    ]
                },
                {
                    title: "Dialogue 4: Shared Interests",
                    audio: "TTS: Are you into gardening? Yes, I'm into growing my own vegetables. So do I. I have a big garden.",
                    lines:[
                        { speaker: "Anna", text: "Are you into gardening?", pt: "(Você curte jardinagem?)" },
                        { speaker: "John", text: "Yes, I'm into growing my own vegetables. So do I. I have a big garden.", pt: "(Sim, eu curto cultivar meus próprios vegetais. Eu também. Tenho um jardim grande.)" } // Fix
                    ]
                },
                {
                    title: "Dialogue 4: Shared Interests", // Fix
                    audio: "TTS: Are you into gardening? Yes, I'm into growing my own vegetables. So do I. I have a big garden.",
                    lines:[
                        { speaker: "Anna", text: "Are you into gardening?", pt: "(Você curte jardinagem?)" },
                        { speaker: "John", text: "Yes, I'm into growing my own vegetables.", pt: "(Sim, eu curto cultivar meus próprios vegetais.)" },
                        { speaker: "Anna", text: "So do I. I have a big garden.", pt: "(Eu também. Tenho um jardim grande.)" }
                    ]
                },
                {
                    title: "Dialogue 5: Different Tastes",
                    audio: "TTS: What kind of music do you like? I'm a big fan of classical music. I'm not a big fan of that. I prefer jazz.",
                    lines:[
                        { speaker: "Leo", text: "What kind of music do you like?", pt: "(Que tipo de música você gosta?)" },
                        { speaker: "Mia", text: "I'm a big fan of classical music.", pt: "(Sou uma grande fã de música clássica.)" },
                        { speaker: "Leo", text: "I'm not a big fan of that. I prefer jazz.", pt: "(Não sou um grande fã disso. Prefiro jazz.)" }
                    ]
                },
                {
                    title: "Dialogue 6: Showing Skills",
                    audio: "TTS: I'm keen on playing chess. You must to be good at it! That sounds interesting, but it is too difficult for me.",
                    lines:[
                        { speaker: "Noah", text: "I'm keen on playing chess.", pt: "(Eu gosto muito de jogar xadrez.)" },
                        { speaker: "Chloe", text: "You must to be good at it! That sounds interesting, but it is too difficult for me.", pt: "(Você deve ser boa nisso! Isso soa interessante, mas é muito difícil para mim.)" }
                    ]
                }
            ],

            // --- 3C: PRACTICE ---
            grammarDrillGroups:[
                {
                    title: "Stating Hobbies & Interests",
                    drills:[
                        { q: "________ my free time, I read books.", options:[{t: "On", c: false}, {t: "In", c: true}, {t: "At", c: false}, {t: "For", c: false}], type: "mcq" },
                        { q: "I ________ playing the guitar.", options:[{t: "enjoy", c: true}, {t: "interested", c: false}, {t: "fan", c: false}, {t: "keen", c: false}], type: "mcq" },
                        { q: "My ________ are running and cycling.", options:[{t: "pastime", c: false}, {t: "hobbies", c: true}, {t: "enjoy", c: false}, {t: "into", c: false}], type: "mcq" },
                        { q: "I'm interested ________ photography.", options:[{t: "on", c: false}, {t: "at", c: false}, {t: "in", c: true}, {t: "for", c: false}], type: "mcq" },
                        { q: "I'm ________ yoga.", options:[{t: "into", c: true}, {t: "in", c: false}, {t: "on", c: false}, {t: "at", c: false}], type: "mcq" },
                        { q: "I'm a big ________ of jazz music.", options:[{t: "enjoy", c: false}, {t: "interested", c: false}, {t: "fan", c: true}, {t: "keen", c: false}], type: "mcq" },
                        { q: "I'm keen ________ hiking.", options:[{t: "in", c: false}, {t: "on", c: true}, {t: "at", c: false}, {t: "for", c: false}], type: "mcq" },
                        { q: "She is very ________ at chess.", options:[{t: "enjoy", c: false}, {t: "good", c: true}, {t: "keen", c: false}, {t: "fan", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Asking Others",
                    drills:[
                        { q: "What do you do ________ fun?", options:[{t: "in", c: false}, {t: "at", c: false}, {t: "for", c: true}, {t: "on", c: false}], type: "mcq" },
                        { q: "What do you ________ to do in your spare time?", options:[{t: "like", c: true}, {t: "enjoy", c: false}, {t: "keen", c: false}, {t: "good", c: false}], type: "mcq" },
                        { q: "Do you have any ________?", options:[{t: "hobbies", c: true}, {t: "free time", c: false}, {t: "into", c: false}, {t: "enjoy", c: false}], type: "mcq" },
                        { q: "What ________ of movies do you like?", options:[{t: "into", c: false}, {t: "type", c: false}, {t: "kind", c: true}, {t: "fan", c: false}], type: "mcq" },
                        { q: "Are you ________ sports?", options:[{t: "in", c: false}, {t: "on", c: false}, {t: "into", c: true}, {t: "at", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Responding",
                    drills:[
                        { q: "That ________ interesting.", options:[{t: "hears", c: false}, {t: "listens", c: false}, {t: "sounds", c: true}, {t: "feels", c: false}], type: "mcq" },
                        { q: "Oh, that's ________.", options:[{t: "fan", c: false}, {t: "cool", c: true}, {t: "enjoy", c: false}, {t: "keen", c: false}], type: "mcq" },
                        { q: "I love reading. ________ too!", options:[{t: "I", c: false}, {t: "Me", c: true}, {t: "So", c: false}, {t: "My", c: false}], type: "mcq" },
                        { q: "I like baking. ________ do I.", options:[{t: "Me", c: false}, {t: "I", c: false}, {t: "So", c: true}, {t: "Too", c: false}], type: "mcq" },
                        { q: "I'm not a big ________ of that.", options:[{t: "into", c: false}, {t: "fan", c: true}, {t: "keen", c: false}, {t: "enjoy", c: false}], type: "mcq" }
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
                { text: "What do you do for fun? ↘", audio: "TTS: What do you do for fun?" },
                { text: "In my free time, I enjoy reading books. ↘", audio: "TTS: In my free time, I enjoy reading books." },
                { text: "Do you have any hobbies? ↗", audio: "TTS: Do you have any hobbies?" },
                { text: "My hobbies are gardening and baking. ↘", audio: "TTS: My hobbies are gardening and baking." },
                { text: "I'm a big fan of jazz music. ↘", audio: "TTS: I'm a big fan of jazz music." },
                { text: "Are you into sports? ↗", audio: "TTS: Are you into sports?" },
                { text: "I'm keen on cycling and hiking. ↘", audio: "TTS: I'm keen on cycling and hiking." },
                { text: "What kind of movies do you like? ↘", audio: "TTS: What kind of movies do you like?" },
                { text: "That sounds interesting! ↘", audio: "TTS: That sounds interesting!" },
                { text: "I'm not a big fan of that. ↘", audio: "TTS: I'm not a big fan of that." }
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
                    audio: "TTS: Anna: What do you do in your free time? John: I usually play chess or read. What about you? Anna: I love taking pictures with my new camera.",
                    text: "Anna: What do you do in your [free] time?<br>John: I usually [play] chess or read. What about you?<br>Anna: I love taking pictures with my new [camera]."
                },
                {
                    type: "dropdown",
                    instruction: "Listen to the dialogue about hobbies.",
                    audio: "TTS: Emma: Are you into cycling? Lucas: Yes, I am a big fan of outdoor sports. Emma: That sounds exciting! I prefer yoga.",
                    questions:[
                        { q: "Emma: Are you [into* | enjoy | keen] cycling?", a: "into" },
                        { q: "Lucas: Yes, I am a big [fan* | pastime | match] of outdoor sports.", a: "fan" },
                        { q: "Emma: That sounds[exciting* | boring | active]! I prefer yoga.", a: "exciting" }
                    ]
                },
                {
                    type: "audio-choice",
                    instruction: "Listen to the speaker. What kind of person is he?",
                    audio: "TTS: I don't like staying indoors and watching TV. I am very outdoorsy. I love hiking in the mountains and cycling on the weekends.",
                    options:[
                        { t: "He is a very boring person.", c: false },
                        { t: "He is very artistic and creative.", c: false },
                        { t: "He is very outdoorsy and active.", c: true },
                        { t: "He only likes playing board games.", c: false }
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
                    title: "Dialogue - A Creative Hobby",
                    audio: "TTS: Leo: Hey Emma, what do you like to do in your spare time? Emma: I'm really into photography. I bought a new camera last week. Leo: Oh, that's cool! You must be very artistic. Emma: I try to be. It is a very creative hobby. What about you? Leo: I'm not very creative. My favorite pastime is watching movies. Emma: That sounds relaxing.",
                    body: "<b>Leo:</b> Hey Emma, [what do you like to do](tooltip:what-like-to-do) in your spare time?<br><b>Emma:</b>[I'm into](tooltip:im-into) [photography](tooltip:photography). I bought a new [camera](tooltip:camera) last week.<br><b>Leo:</b>[Oh, that's cool](tooltip:oh-thats-cool)! You must be very [artistic](tooltip:artistic).<br><b>Emma:</b> I try to be. It is a very [creative](tooltip:creative) [hobby](tooltip:hobby). What about you?<br><b>Leo:</b> I'm not very creative. My favorite [pastime](tooltip:pastime) is watching [movies](tooltip:movie).<br><b>Emma:</b> That sounds [relaxing](tooltip:relaxing).",
                    questions:[
                        { q: "What is Emma's hobby?", options:[{t: "Watching movies.", c: false}, {t: "Photography.", c: true}, {t: "Painting.", c: false}], type: "mcq" },
                        { q: "What did Emma buy last week?", options:[{t: "A new movie.", c: false}, {t: "A new camera.", c: true}, {t: "A new instrument.", c: false}], type: "mcq" },
                        { q: "What is Leo's favorite pastime?", options:[{t: "Photography.", c: false}, {t: "Watching movies.", c: true}, {t: "Reading.", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Dialogue - Sports and Music",
                    audio: "TTS: Mark: Are you into sports, Sarah? Sarah: Yes, I am keen on cycling. I ride my bike every morning. Mark: That's great! I prefer playing chess and board games. Sarah: I'm not a big fan of that. I need to be active. Mark: I understand. Do you play any musical instruments? Sarah: No, but I'm a big fan of singing!",
                    body: "<b>Mark:</b>[Are you into](tooltip:are-you-into) sports, Sarah?<br><b>Sarah:</b> Yes,[I'm keen on](tooltip:im-keen-on) [cycling](tooltip:cycling). I ride my bike every morning.<br><b>Mark:</b> That's great! I prefer playing [chess](tooltip:chess) and [board games](tooltip:board-games).<br><b>Sarah:</b>[I'm not a big fan of that](tooltip:not-a-big-fan). I need to be [active](tooltip:active).<br><b>Mark:</b> I understand. Do you [play](tooltip:to-play) any musical [instruments](tooltip:instrument)?<br><b>Sarah:</b> No, but [I'm a big fan of](tooltip:im-a-big-fan) [singing](tooltip:singing)!",
                    questions:[
                        { q: "What sport is Sarah keen on?", options:[{t: "Chess", c: false}, {t: "Cycling", c: true}, {t: "Swimming", c: false}], type: "mcq" },
                        { q: "What does Mark prefer to do?", options:[{t: "Play chess and board games.", c: true}, {t: "Sing and dance.", c: false}, {t: "Go cycling.", c: false}], type: "mcq" },
                        { q: "Does Sarah play a musical instrument?", options:[{t: "Yes, she plays the guitar.", c: false}, {t: "No, but she likes singing.", c: true}, {t: "No, she hates music.", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Email - Weekend Pastimes",
                    audio: "TTS: Subject: Plans for the weekend! Hi John, What do you do for fun on the weekends? In my free time, I enjoy hiking. I am very outdoorsy and I love nature. I am planning to go to the mountains this Saturday. Do you have any hobbies like that? If you are interested, you can join me. Let me know! Best, David.",
                    body: "<b>From: David</b><br><b>To: John</b><br>Subject: Plans for the weekend!<br><br>Hi John,<br>[What do you do for fun](tooltip:what-for-fun) on the weekends?[In my free time](tooltip:in-free-time), [I enjoy](tooltip:i-enjoy) [hiking](tooltip:hiking). I am very [outdoorsy](tooltip:outdoorsy) and I love nature. I am planning to go to the mountains this Saturday. [Do you have any hobbies](tooltip:do-you-have-hobbies) like that? If you are interested, you can join me. Let me know!<br><br>Best, David.",
                    questions:[
                        { q: "What does David enjoy doing in his free time?", options:[{t: "Playing video games.", c: false}, {t: "Hiking.", c: true}, {t: "Baking.", c: false}], type: "mcq" },
                        { q: "How does David describe himself?", options:[{t: "Very outdoorsy.", c: true}, {t: "Very boring.", c: false}, {t: "Very artistic.", c: false}], type: "mcq" },
                        { q: "What is David planning for Saturday?", options:[{t: "A chess match.", c: false}, {t: "A trip to the mountains.", c: true}, {t: "A singing lesson.", c: false}], type: "mcq" }
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
                { type: "matching", instruction: "Match the hobby to its category.", pairs:[
                    { left: "Cycling", right: "Sports", val: "1" },
                    { left: "Chess", right: "Games", val: "2" },
                    { left: "Singing", right: "Music", val: "3" },
                    { left: "Baking", right: "Cooking", val: "4" }
                ]},
                { type: "matching", instruction: "Match the verbs with the activities.", pairs:[
                    { left: "To play", right: "board games", val: "1" },
                    { left: "To go", right: "hiking", val: "2" },
                    { left: "To do", right: "yoga", val: "3" },
                    { left: "To watch", right: "a movie", val: "4" }
                ]},
                { type: "matching", instruction: "Match the adjectives with their meanings.", pairs:[
                    { left: "Boring", right: "Not interesting", val: "1" },
                    { left: "Relaxing", right: "Helps you rest", val: "2" },
                    { left: "Outdoorsy", right: "Loves nature", val: "3" },
                    { left: "Creative", right: "Full of imagination", val: "4" }
                ]},
                { type: "matching", instruction: "Match the phrases.", pairs:[
                    { left: "In my", right: "free time", val: "1" },
                    { left: "I'm a big", right: "fan of", val: "2" },
                    { left: "That sounds", right: "interesting", val: "3" },
                    { left: "I'm keen", right: "on", val: "4" }
                ]},

                // --- WORD ORDER (5-14) ---
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "do / fun / you / What / for / do / ?", correct: "What do you do for fun ?" },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "time / my / enjoy / In / free / reading / I / .", correct: "In my free time I enjoy reading ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "hobbies / your / What / are / ?", correct: "What are your hobbies ?" },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "in / interested / I'm / photography / .", correct: "I'm interested in photography ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "into / sports / Are / you / ?", correct: "Are you into sports ?" },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "big / I'm / music / a / fan / of / .", correct: "I'm a big fan of music ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "keen / hiking / on / I'm / .", correct: "I'm keen on hiking ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "sounds / interesting / That / !", correct: "That sounds interesting !" },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "too / love / I / movies / Me / .", correct: "I love movies Me too ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "a / fan / of / big / I'm / not / that / .", correct: "I'm not a big fan of that ." },

                // --- CLICKABLE ERROR (15-24) ---
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "I [does](error:play) chess with my friends." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "We usually [play](error:go) hiking in the mountains." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "She [makes](error:does) yoga every morning." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "I like to [see](error:watch) movies at night." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "What do you do [to](error:for) fun?" },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "In my [empty](error:free) time, I read." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "I'm a big fan [for](error:of) rock music." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "Are you [in](error:into) sports?" },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "That [hears](error:sounds) interesting." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "I am keen [in](error:on) cycling." },

                // --- ODD ONE OUT (25-30) ---
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Hobbies)", options:[{t: "Gardening", c: false}, {t: "Baking", c: false}, {t: "Photography", c: false}, {t: "Match", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Adjectives)", options:[{t: "Fun", c: false}, {t: "Exciting", c: false}, {t: "Relaxing", c: false}, {t: "Camera", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Verbs)", options:[{t: "To watch", c: false}, {t: "To collect", c: false}, {t: "To relax", c: false}, {t: "Pastime", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Outdoors)", options:[{t: "Cycling", c: false}, {t: "Hiking", c: false}, {t: "Outdoorsy", c: false}, {t: "Chess", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Equipment)", options:[{t: "Camera", c: false}, {t: "Instrument", c: false}, {t: "Board games", c: false}, {t: "Yoga", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Reactions)", options:[{t: "Me too", c: false}, {t: "So do I", c: false}, {t: "Oh, that's cool", c: false}, {t: "Boring", c: true}] },

                // --- TRUE / FALSE (31-35) ---
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "If you 'enjoy' something, it means you don't like it.", correct: "false"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "A 'pastime' is something you do in your free time.", correct: "true"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "You use the verb 'go' with activities like hiking and cycling.", correct: "true"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "If someone says 'I'm keen on it', they mean they find it boring.", correct: "false"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "'Board games' are usually played outdoors in the park.", correct: "false"}] },

                // --- MCQ (36-39) ---
                { type: "mcq", instruction: "Choose the correct preposition.<br>I am interested ________ learning how to bake.", options:[{t: "on", c: false}, {t: "in", c: true}, {t: "at", c: false}, {t: "for", c: false}] },
                { type: "mcq", instruction: "Choose the correct phrase.<br>When someone tells you a great idea, you can say: 'That ________ interesting!'", options:[{t: "hears", c: false}, {t: "listens", c: false}, {t: "sounds", c: true}, {t: "watches", c: false}] },
                { type: "mcq", instruction: "Choose the correct word.<br>The strategic game played on a black and white board is ________.", options:[{t: "yoga", c: false}, {t: "cycling", c: false}, {t: "chess", c: true}, {t: "photography", c: false}] },
                { type: "mcq", instruction: "Choose the correct phrase.<br>If someone says 'I love music', and you agree, you can say '________'.", options:[{t: "Me too", c: true}, {t: "I'm not a big fan", c: false}, {t: "That's boring", c: false}, {t: "I do yoga", c: false}] },

                // --- CATEGORIZE (40) ---
                { type: "categorize", instruction: "Sort the words into Verbs and Adjectives.", 
                    categories:[{id: "verb", name: "Verbs"}, {id: "adj", name: "Adjectives"}],
                    items:[
                        {text: "To collect", catId: "verb"}, 
                        {text: "To relax", catId: "verb"}, 
                        {text: "To enjoy", catId: "verb"}, 
                        {text: "Creative", catId: "adj"}, 
                        {text: "Outdoorsy", catId: "adj"}, 
                        {text: "Exciting", catId: "adj"}
                    ] 
                }
            ]
        },

        // ======================================================
        // STEP 8: WRITING PRACTICE
        // ======================================================
        {
            title: "Writing Practice",
            instruction: "Write a short paragraph (5-7 sentences) about your hobbies and interests. Mention what you like to do in your free time, if you are an active or relaxing person, and ask a question to learn about someone else's hobbies.",
            example: "In my free time, I really enjoy photography. I love going to the park to take pictures of nature. I am also keen on playing board games with my family. I am not very outdoorsy, so I prefer relaxing activities indoors. I am not a big fan of sports. What do you do for fun? Are you into music or movies?",
            prompts:[
                "Use phrases like 'In my free time' or 'I enjoy'.",
                "Mention at least two specific hobbies (e.g., baking, chess).",
                "Use an adjective to describe yourself or the hobby (e.g., active, relaxing).",
                "Include a question to ask someone else (e.g., Are you into...?)."
            ]
        },

        // ======================================================
        // STEP 9: FLASHCARDS
        // ======================================================
        {
            title: "Flashcards",
            items:[
                // 2A Items (34 items)
                { term: "Photography", definition: "The art or practice of taking and processing photographs.", defTrans: "Fotografia", example: "I took a course to learn photography.", audioFront: "TTS: Photography", audioBack: "TTS: I took a course to learn photography." },
                { term: "Gardening", definition: "The activity of tending and cultivating a garden.", defTrans: "Jardinagem", example: "My grandmother loves gardening in her backyard.", audioFront: "TTS: Gardening", audioBack: "TTS: My grandmother loves gardening in her backyard." },
                { term: "Baking", definition: "Cooking food by dry heat without direct exposure to a flame, typically in an oven.", defTrans: "Fazer bolos/pães (Assar)", example: "I enjoy baking cakes for my friends.", audioFront: "TTS: Baking", audioBack: "TTS: I enjoy baking cakes for my friends." },
                { term: "Singing", definition: "The activity of performing songs or tunes by making musical sounds with the voice.", defTrans: "Canto / Cantar", example: "She is taking singing lessons.", audioFront: "TTS: Singing", audioBack: "TTS: She is taking singing lessons." },
                { term: "Cycling", definition: "The sport or activity of riding a bicycle.", defTrans: "Ciclismo", example: "Cycling is a great way to stay fit.", audioFront: "TTS: Cycling", audioBack: "TTS: Cycling is a great way to stay fit." },
                { term: "Hiking", definition: "The activity of going for long walks, especially in the country or woods.", defTrans: "Caminhada (em trilha)", example: "We went hiking in the mountains yesterday.", audioFront: "TTS: Hiking", audioBack: "TTS: We went hiking in the mountains yesterday." },
                { term: "Chess", definition: "A board game of strategic skill for two players.", defTrans: "Xadrez", example: "He plays chess every Friday evening.", audioFront: "TTS: Chess", audioBack: "TTS: He plays chess every Friday evening." },
                { term: "Board games", definition: "Games that involve the movement of pieces on a pre-marked surface or board.", defTrans: "Jogos de tabuleiro", example: "My family loves playing board games together.", audioFront: "TTS: Board games", audioBack: "TTS: My family loves playing board games together." },
                { term: "Yoga", definition: "A Hindu spiritual and ascetic discipline, including breath control and meditation.", defTrans: "Ioga", example: "She does yoga to stretch her body.", audioFront: "TTS: Yoga", audioBack: "TTS: She does yoga to stretch her body." },
                { term: "Movie", definition: "A cinema film.", defTrans: "Filme", example: "We watched a great movie at the cinema.", audioFront: "TTS: Movie", audioBack: "TTS: We watched a great movie at the cinema." },
                { term: "Instrument", definition: "A device for producing musical sounds.", defTrans: "Instrumento", example: "I want to learn how to play a musical instrument.", audioFront: "TTS: Instrument", audioBack: "TTS: I want to learn how to play a musical instrument." },
                { term: "Camera", definition: "A device for recording visual images in the form of photographs or video.", defTrans: "Câmera", example: "I bought a new lens for my camera.", audioFront: "TTS: Camera", audioBack: "TTS: I bought a new lens for my camera." },
                
                { term: "To play", definition: "To engage in activity for enjoyment and recreation.", defTrans: "Jogar / Tocar / Brincar", example: "I like to play tennis on the weekends.", audioFront: "TTS: To play", audioBack: "TTS: I like to play tennis on the weekends." },
                { term: "To go", definition: "Used with activities ending in -ing.", defTrans: "Ir", example: "We usually go swimming in the summer.", audioFront: "TTS: To go", audioBack: "TTS: We usually go swimming in the summer." },
                { term: "To do", definition: "Used with individual, non-team sports or martial arts.", defTrans: "Fazer", example: "I do yoga every morning.", audioFront: "TTS: To do", audioBack: "TTS: I do yoga every morning." },
                { term: "To watch", definition: "Look at or observe attentively.", defTrans: "Assistir", example: "I watch television to unwind.", audioFront: "TTS: To watch", audioBack: "TTS: I watch television to unwind." },
                { term: "To listen", definition: "Give one's attention to a sound.", defTrans: "Ouvir", example: "I always listen to music while working.", audioFront: "TTS: To listen", audioBack: "TTS: I always listen to music while working." },
                { term: "To read", definition: "Look at and comprehend the meaning of written or printed matter.", defTrans: "Ler", example: "I read a book before going to sleep.", audioFront: "TTS: To read", audioBack: "TTS: I read a book before going to sleep." },
                { term: "To collect", definition: "Bring or gather together a number of things as a hobby.", defTrans: "Colecionar", example: "I collect old coins as a hobby.", audioFront: "TTS: To collect", audioBack: "TTS: I collect old coins as a hobby." },
                { term: "To enjoy", definition: "Take delight or pleasure in.", defTrans: "Desfrutar / Curtir", example: "I really enjoy cooking for my family.", audioFront: "TTS: To enjoy", audioBack: "TTS: I really enjoy cooking for my family." },
                { term: "To relax", definition: "Rest or engage in an enjoyable activity so as to become less tired.", defTrans: "Relaxar", example: "I take a hot bath to relax.", audioFront: "TTS: To relax", audioBack: "TTS: I take a hot bath to relax." },
                { term: "To spend", definition: "Pass time in a specified way or in a particular place.", defTrans: "Gastar / Passar (tempo)", example: "I spend a lot of time outdoors.", audioFront: "TTS: To spend", audioBack: "TTS: I spend a lot of time outdoors." },

                { term: "Fun", definition: "Enjoyable, amusing, or lighthearted.", defTrans: "Divertido", example: "Playing sports is a very fun activity.", audioFront: "TTS: Fun", audioBack: "TTS: Playing sports is a very fun activity." },
                { term: "Interesting", definition: "Arousing curiosity or interest; holding or catching the attention.", defTrans: "Interessante", example: "I found an interesting book at the library.", audioFront: "TTS: Interesting", audioBack: "TTS: I found an interesting book at the library." },
                { term: "Exciting", definition: "Causing great enthusiasm and eagerness.", defTrans: "Empolgante / Emocionante", example: "Riding a roller coaster is very exciting.", audioFront: "TTS: Exciting", audioBack: "TTS: Riding a roller coaster is very exciting." },
                { term: "Relaxing", definition: "Reducing tension or anxiety.", defTrans: "Relaxante", example: "Listening to classical music is relaxing.", audioFront: "TTS: Relaxing", audioBack: "TTS: Listening to classical music is relaxing." },
                { term: "Creative", definition: "Relating to or involving the imagination or original ideas.", defTrans: "Criativo", example: "Painting requires a creative mind.", audioFront: "TTS: Creative", audioBack: "TTS: Painting requires a creative mind." },
                { term: "Artistic", definition: "Having or revealing natural creative skill.", defTrans: "Artístico", example: "She is a very artistic person.", audioFront: "TTS: Artistic", audioBack: "TTS: She is a very artistic person." },
                { term: "Active", definition: "Engaging or ready to engage in physically energetic pursuits.", defTrans: "Ativo", example: "You need to be active to stay healthy.", audioFront: "TTS: Active", audioBack: "TTS: You need to be active to stay healthy." },
                { term: "Outdoorsy", definition: "Fond of the outdoors and outdoor activities.", defTrans: "Ao ar livre (pessoa)", example: "He is very outdoorsy and loves camping.", audioFront: "TTS: Outdoorsy", audioBack: "TTS: He is very outdoorsy and loves camping." },
                { term: "Boring", definition: "Not interesting; tedious.", defTrans: "Entediante", example: "Waiting in line is always boring.", audioFront: "TTS: Boring", audioBack: "TTS: Waiting in line is always boring." },
                { term: "Hobby", definition: "An activity done regularly in one's leisure time for pleasure.", defTrans: "Hobby", example: "My favorite hobby is drawing.", audioFront: "TTS: Hobby", audioBack: "TTS: My favorite hobby is drawing." },
                { term: "Pastime", definition: "An activity that someone does regularly for enjoyment.", defTrans: "Passatempo", example: "Reading is my favorite pastime.", audioFront: "TTS: Pastime", audioBack: "TTS: Reading is my favorite pastime." },
                { term: "Match", definition: "A contest in which people or teams compete against each other in a particular sport.", defTrans: "Partida (jogo)", example: "We watched the football match on TV.", audioFront: "TTS: Match", audioBack: "TTS: We watched the football match on TV." },

                // 3A Items (18 items)
                { term: "In my free time", definition: "Referring to the time when you are not working or busy.", defTrans: "No meu tempo livre", example: "In my free time, I read books.", audioFront: "TTS: In my free time", audioBack: "TTS: In my free time, I read books." },
                { term: "I enjoy", definition: "Stating that you take pleasure in something.", defTrans: "Eu gosto de / desfruto", example: "I enjoy playing the guitar.", audioFront: "TTS: I enjoy", audioBack: "TTS: I enjoy playing the guitar." },
                { term: "My hobbies are", definition: "Listing the activities you do for fun.", defTrans: "Meus hobbies são", example: "My hobbies are running and cycling.", audioFront: "TTS: My hobbies are", audioBack: "TTS: My hobbies are running and cycling." },
                { term: "I'm interested in", definition: "Showing curiosity or concern about something.", defTrans: "Eu me interesso por", example: "I'm interested in photography.", audioFront: "TTS: I'm interested in", audioBack: "TTS: I'm interested in photography." },
                { term: "I'm into", definition: "An informal way to say you are interested in something.", defTrans: "Eu curto / gosto de", example: "I'm into yoga.", audioFront: "TTS: I'm into", audioBack: "TTS: I'm into yoga." },
                { term: "I'm a big fan of", definition: "Stating that you strongly like or admire something.", defTrans: "Eu sou um grande fã de", example: "I'm a big fan of jazz music.", audioFront: "TTS: I'm a big fan of", audioBack: "TTS: I'm a big fan of jazz music." },
                { term: "I'm keen on", definition: "Stating that you are highly interested in or enthusiastic about something.", defTrans: "Eu sou muito a fim de / gosto muito de", example: "I'm keen on hiking.", audioFront: "TTS: I'm keen on", audioBack: "TTS: I'm keen on hiking." },
                { term: "To be good at", definition: "To have the necessary skills to do something well.", defTrans: "Ser bom em", example: "She seems to be good at chess.", audioFront: "TTS: To be good at", audioBack: "TTS: She seems to be good at chess." },
                
                { term: "What do you do for fun?", definition: "Asking someone about their leisure activities.", defTrans: "O que você faz para se divertir?", example: "What do you do for fun?", audioFront: "TTS: What do you do for fun?", audioBack: "TTS: What do you do for fun?" },
                { term: "What do you like to do", definition: "Asking someone about their preferences.", defTrans: "O que você gosta de fazer", example: "What do you like to do in your spare time?", audioFront: "TTS: What do you like to do", audioBack: "TTS: What do you like to do in your spare time?" },
                { term: "Do you have any hobbies?", definition: "Asking if someone has a regular leisure activity.", defTrans: "Você tem algum hobby?", example: "Do you have any hobbies?", audioFront: "TTS: Do you have any hobbies?", audioBack: "TTS: Do you have any hobbies?" },
                { term: "What kind of", definition: "Asking for a specific category or type.", defTrans: "Que tipo de", example: "What kind of movies do you like?", audioFront: "TTS: What kind of", audioBack: "TTS: What kind of movies do you like?" },
                { term: "Are you into", definition: "An informal way to ask if someone likes something.", defTrans: "Você curte...?", example: "Are you into sports?", audioFront: "TTS: Are you into", audioBack: "TTS: Are you into sports?" },
                
                { term: "That sounds interesting", definition: "A polite and positive response to something you just heard.", defTrans: "Isso soa interessante", example: "That sounds interesting.", audioFront: "TTS: That sounds interesting", audioBack: "TTS: That sounds interesting." },
                { term: "Oh, that's cool", definition: "An informal, positive reaction.", defTrans: "Ah, isso é legal", example: "Oh, that's cool.", audioFront: "TTS: Oh, that's cool", audioBack: "TTS: Oh, that's cool." },
                { term: "Me too", definition: "Used to agree with a positive statement.", defTrans: "Eu também", example: "Me too!", audioFront: "TTS: Me too", audioBack: "TTS: Me too!" },
                { term: "So do I", definition: "A slightly more formal way to agree with a positive statement.", defTrans: "Eu também", example: "So do I.", audioFront: "TTS: So do I", audioBack: "TTS: So do I." },
                { term: "I'm not a big fan of that", definition: "A polite way to say you don't like something.", defTrans: "Não sou um grande fã disso", example: "I'm not a big fan of that.", audioFront: "TTS: I'm not a big fan of that", audioBack: "TTS: I'm not a big fan of that." }
            ]
        }
    ],

    // ======================================================
    // GLOSSARY (All 52 items + Context words)
    // ======================================================
    glossary:[
        // 2A: Hobby Types & Activities
        { topic: "Activities", term: "photography", definition: "The art or practice of taking photographs.", translation: "Fotografia" },
        { topic: "Activities", term: "gardening", definition: "The activity of tending and cultivating a garden.", translation: "Jardinagem" },
        { topic: "Activities", term: "baking", definition: "Cooking food by dry heat in an oven.", translation: "Assar (bolos, pães)" },
        { topic: "Activities", term: "singing", definition: "Making musical sounds with the voice.", translation: "Canto / Cantar" },
        { topic: "Activities", term: "cycling", definition: "The sport or activity of riding a bicycle.", translation: "Ciclismo" },
        { topic: "Activities", term: "hiking", definition: "Walking long distances, especially in the country or woods.", translation: "Caminhada (em trilha)" },
        { topic: "Activities", term: "chess", definition: "A strategic board game for two players.", translation: "Xadrez" },
        { topic: "Activities", term: "board-games", definition: "Games that involve the movement of pieces on a board.", translation: "Jogos de tabuleiro" },
        { topic: "Activities", term: "yoga", definition: "A spiritual and ascetic discipline, including breath control and posture.", translation: "Ioga" },
        { topic: "Activities", term: "movie", definition: "A cinema film.", translation: "Filme" },
        { topic: "Activities", term: "instrument", definition: "A device for producing musical sounds.", translation: "Instrumento" },
        { topic: "Activities", term: "camera", definition: "A device for recording visual images.", translation: "Câmera" },

        // 2A: Action Verbs
        { topic: "Verbs", term: "to-play", definition: "To engage in activity for enjoyment and recreation.", translation: "Jogar / Tocar / Brincar" },
        { topic: "Verbs", term: "to-go", definition: "Used with activities ending in -ing.", translation: "Ir" },
        { topic: "Verbs", term: "to-do", definition: "Used with individual, non-team sports or martial arts.", translation: "Fazer" },
        { topic: "Verbs", term: "to-watch", definition: "Look at or observe attentively.", translation: "Assistir" },
        { topic: "Verbs", term: "to-listen", definition: "Give one's attention to a sound.", translation: "Ouvir" },
        { topic: "Verbs", term: "to-read", definition: "Look at and comprehend written or printed matter.", translation: "Ler" },
        { topic: "Verbs", term: "to-collect", definition: "Bring or gather together things as a hobby.", translation: "Colecionar" },
        { topic: "Verbs", term: "to-enjoy", definition: "Take delight or pleasure in.", translation: "Desfrutar / Curtir" },
        { topic: "Verbs", term: "to-relax", definition: "Rest or engage in an enjoyable activity.", translation: "Relaxar" },
        { topic: "Verbs", term: "to-spend", definition: "Pass time in a specified way.", translation: "Gastar / Passar (tempo)" },

        // 2A: Adjectives & General Nouns
        { topic: "Adjectives", term: "fun", definition: "Enjoyable, amusing, or lighthearted.", translation: "Divertido" },
        { topic: "Adjectives", term: "interesting", definition: "Arousing curiosity or interest.", translation: "Interessante" },
        { topic: "Adjectives", term: "exciting", definition: "Causing great enthusiasm and eagerness.", translation: "Empolgante" },
        { topic: "Adjectives", term: "relaxing", definition: "Reducing tension or anxiety.", translation: "Relaxante" },
        { topic: "Adjectives", term: "creative", definition: "Involving the imagination or original ideas.", translation: "Criativo" },
        { topic: "Adjectives", term: "artistic", definition: "Having natural creative skill.", translation: "Artístico" },
        { topic: "Adjectives", term: "active", definition: "Engaging in physically energetic pursuits.", translation: "Ativo" },
        { topic: "Adjectives", term: "outdoorsy", definition: "Fond of the outdoors and outdoor activities.", translation: "Ao ar livre (pessoa)" },
        { topic: "Adjectives", term: "boring", definition: "Not interesting; tedious.", translation: "Entediante" },
        { topic: "Nouns", term: "hobby", definition: "An activity done regularly in leisure time for pleasure.", translation: "Hobby / Passatempo" },
        { topic: "Nouns", term: "pastime", definition: "An activity that someone does regularly for enjoyment.", translation: "Passatempo" },
        { topic: "Nouns", term: "match", definition: "A contest in which teams compete against each other.", translation: "Partida (jogo)" },

        // 3A: Expressions
        { topic: "Expressions", term: "in-free-time", definition: "Referring to the time when you are not working.", translation: "No meu tempo livre" },
        { topic: "Expressions", term: "i-enjoy", definition: "Stating that you take pleasure in something.", translation: "Eu gosto de / desfruto" },
        { topic: "Expressions", term: "my-hobbies-are", definition: "Listing the activities you do for fun.", translation: "Meus hobbies são" },
        { topic: "Expressions", term: "im-interested", definition: "Showing curiosity or concern about something.", translation: "Eu me interesso por" },
        { topic: "Expressions", term: "im-into", definition: "An informal way to say you are interested in something.", translation: "Eu curto / gosto de" },
        { topic: "Expressions", term: "im-a-big-fan", definition: "Stating that you strongly like or admire something.", translation: "Eu sou um grande fã de" },
        { topic: "Expressions", term: "im-keen-on", definition: "Stating that you are highly interested in something.", translation: "Eu sou muito a fim de" },
        { topic: "Expressions", term: "to-be-good-at", definition: "To have the necessary skills to do something well.", translation: "Ser bom em" },
        
        { topic: "Expressions", term: "what-for-fun", definition: "Asking someone about their leisure activities.", translation: "O que você faz para se divertir?" },
        { topic: "Expressions", term: "what-like-to-do", definition: "Asking someone about their preferences.", translation: "O que você gosta de fazer" },
        { topic: "Expressions", term: "do-you-have-hobbies", definition: "Asking if someone has a regular leisure activity.", translation: "Você tem algum hobby?" },
        { topic: "Expressions", term: "what-kind", definition: "Asking for a specific category or type.", translation: "Que tipo de" },
        { topic: "Expressions", term: "are-you-into", definition: "An informal way to ask if someone likes something.", translation: "Você curte...?" },
        
        { topic: "Expressions", term: "sounds-interesting", definition: "A polite and positive response to something you just heard.", translation: "Isso soa interessante" },
        { topic: "Expressions", term: "oh-thats-cool", definition: "An informal, positive reaction.", translation: "Ah, isso é legal" },
        { topic: "Expressions", term: "me-too", definition: "Used to agree with a positive statement.", translation: "Eu também" },
        { topic: "Expressions", term: "so-do-i", definition: "A slightly more formal way to agree with a positive statement.", translation: "Eu também" },
        { topic: "Expressions", term: "not-a-big-fan", definition: "A polite way to say you don't like something.", translation: "Não sou um grande fã disso" },

        // Additional Context Words
        { topic: "Context", term: "interest", definition: "The feeling of wanting to know or learn about something.", translation: "Interesse" },
        { topic: "Context", term: "free-time", definition: "Time available for hobbies and other activities that you enjoy.", translation: "Tempo livre" },
        { topic: "Context", term: "video-games", definition: "Games played by electronically manipulating images on a display.", translation: "Jogos de videogame" },
        { topic: "Context", term: "guitar", definition: "A stringed musical instrument.", translation: "Violão / Guitarra" }
    ]
});