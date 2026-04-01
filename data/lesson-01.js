/**
 * English Block Assembling - LESSON DATA: Topic 1
 * Topic: Introductions and Greetings
 * Level: Upper A2 ~ Lower B1
 */

window.initLesson({
    // --- METADATA ---
    lessonId: "lesson-1",
    block: "1",
    topicTitle: "1 - Introductions and Greetings",

    steps:[
        // ======================================================
        // STEP 0: INTRO & CAN-DO
        // ======================================================
        {
            title: "Intro & Can-Do",
            objectives: "• Greet people formally and informally depending on the [setting](tooltip:setting).<br>• Introduce yourself and ask for basic personal information.<br>• Ask about someone's [age](tooltip:age), [nationality](tooltip:nationality), and [profession](tooltip:profession).<br>• Politely end a [conversation](tooltip:conversation) and say goodbye.",
            welcome: "Welcome to Lesson 1! First impressions are extremely important. In this lesson, we will cover the essential phrases for meeting people for the first time. You will learn how to confidently introduce yourself, ask polite questions to get to know someone, and properly close a conversation. Let's start building your social skills!",
            audio: {
                objectives: "TTS: In this lesson, you will learn to: Greet people formally and informally depending on the setting. Introduce yourself and ask for basic personal information. Ask about someone's age, nationality, and profession. Politely end a conversation and say goodbye.",
                welcome: "TTS: Welcome to Lesson 1! First impressions are extremely important. In this lesson, we will cover the essential phrases for meeting people for the first time. You will learn how to confidently introduce yourself, ask polite questions to get to know someone, and properly close a conversation. Let's start building your social skills!"
            }
        },

        // ======================================================
        // STEP 1: CONTEXT DIALOGUE
        // ======================================================
        {
            title: "Context Dialogue",
            context: "Emma and Liam meet at a local coffee shop for the first time and start getting to know each other.",
            contextAudio: "TTS: Emma: Good morning! I'm Emma. Liam: Hi, Emma! I'm Liam. Nice to meet you! Emma: Nice to meet you too! How are you doing today? Liam: I'm doing well, thanks! How about you? Emma: I'm great, thanks for asking. So, where are you from, Liam? Liam: I'm from New York. And you? Emma: I'm from London. What do you do for a living? Liam: I work as a graphic designer. It was nice meeting you, but I have to go to work now. See you later! Emma: Goodbye! Have a nice day!",
            dialogue:[
                { speaker: "Emma", text: "Good morning! I'm Emma." },
                { speaker: "Liam", text: "Hi, Emma! I'm Liam. [Nice to meet you](tooltip:nice-to-meet)!" },
                { speaker: "Emma", text: "Nice to meet you too! How are you doing today?" },
                { speaker: "Liam", text: "I'm doing well, thanks! How about you?" },
                { speaker: "Emma", text: "I'm great, thanks for [asking](tooltip:ask). So, where are you from, Liam?" },
                { speaker: "Liam", text: "I'm from New York. And you?" },
                { speaker: "Emma", text: "I'm from London. What do you do for a [living](tooltip:living)?" },
                { speaker: "Liam", text: "I work as a graphic designer. It was nice meeting you, but I have to go to work now. [See you later](tooltip:see-you-later)!" },
                { speaker: "Emma", text: "Goodbye! Have a nice day!" }
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
                    title: "Personal Information",
                    audio: "TTS: Name. Nationality. Country. City. Age. Job. Student. Teacher. Doctor. Engineer.",
                    items:[
                        { term: "Name", trans: "Nome" },
                        { term: "Nationality", trans: "Nacionalidade" },
                        { term: "Country", trans: "País" },
                        { term: "City", trans: "Cidade" },
                        { term: "Age", trans: "Idade" },
                        { term: "Job (Occupation / Profession)", trans: "Trabalho (Profissão / Ocupação)" },
                        { term: "Student", trans: "Estudante" },
                        { term: "Teacher", trans: "Professor(a)" },
                        { term: "Doctor", trans: "Médico(a)" },
                        { term: "Engineer", trans: "Engenheiro(a)" }
                    ]
                },
                {
                    title: "Action Verbs",
                    audio: "TTS: To be. To have. To live. To work. To introduce. To meet. To say. To ask. To keep in touch. To part ways.",
                    items:[
                        { term: "To be", trans: "Ser / Estar" },
                        { term: "To have", trans: "Ter" },
                        { term: "To live", trans: "Viver / Morar" },
                        { term: "To work", trans: "Trabalhar" },
                        { term: "To introduce", trans: "Apresentar (alguém ou a si mesmo)" },
                        { term: "To meet", trans: "Conhecer / Encontrar" },
                        { term: "To say", trans: "Dizer" },
                        { term: "To ask", trans: "Perguntar / Pedir" },
                        { term: "To keep in touch", trans: "Manter contato" },
                        { term: "To part ways", trans: "Separar-se / Despedir-se" }
                    ]
                },
                {
                    title: "Adjectives & Basics",
                    audio: "TTS: Good. Fine. Great. Nice. Happy. Single. Married. Hello. Goodbye. Later.",
                    items:[
                        { term: "Good", trans: "Bom / Boa" },
                        { term: "Fine", trans: "Bem / Bom" },
                        { term: "Great", trans: "Ótimo" },
                        { term: "Nice", trans: "Agradável / Legal" },
                        { term: "Happy", trans: "Feliz" },
                        { term: "Single", trans: "Solteiro(a)" },
                        { term: "Married", trans: "Casado(a)" },
                        { term: "Hello (Hi / Hey)", trans: "Olá (Oi)" },
                        { term: "Goodbye (Bye)", trans: "Adeus (Tchau)" },
                        { term: "Later", trans: "Mais tarde / Depois" }
                    ]
                }
            ],

            // --- 2B: EXAMPLES ---
            exampleGroups:[
                {
                    title: "Personal Information",
                    audio: "TTS: My first name is John. Her nationality is Canadian. Brazil is a very large country. Tokyo is a busy city. They asked me about my age. My job is very interesting. The student is reading a book. The teacher explains the lesson clearly. The doctor works at the local hospital. The engineer designed a new bridge.",
                    items:[
                        { term: "Name", sent: "My first name is John.", trans: "Meu primeiro nome é John." },
                        { term: "Nationality", sent: "Her nationality is Canadian.", trans: "A nacionalidade dela é canadense." },
                        { term: "Country", sent: "Brazil is a very large country.", trans: "O Brasil é um país muito grande." },
                        { term: "City", sent: "Tokyo is a busy city.", trans: "Tóquio é uma cidade movimentada." },
                        { term: "Age", sent: "They asked me about my age.", trans: "Eles me perguntaram sobre a minha idade." },
                        { term: "Job (Occupation / Profession)", sent: "My job is very interesting.", trans: "Meu trabalho é muito interessante." },
                        { term: "Student", sent: "The student is reading a book.", trans: "O estudante está lendo um livro." },
                        { term: "Teacher", sent: "The teacher explains the lesson clearly.", trans: "O professor explica a lição claramente." },
                        { term: "Doctor", sent: "The doctor works at the local hospital.", trans: "O médico trabalha no hospital local." },
                        { term: "Engineer", sent: "The engineer designed a new bridge.", trans: "O engenheiro projetou uma nova ponte." }
                    ]
                },
                {
                    title: "Action Verbs",
                    audio: "TTS: I am a graphic designer. I have two brothers. They live in a small town. We work in the same office. I want to introduce my colleague to you. Let's meet at the cafe at noon. What did he say to you? I need to ask you a question. Even though she moved, we keep in touch. We must part ways here, but I will see you tomorrow.",
                    items:[
                        { term: "To be", sent: "I am a graphic designer.", trans: "Eu sou um designer gráfico." },
                        { term: "To have", sent: "I have two brothers.", trans: "Eu tenho dois irmãos." },
                        { term: "To live", sent: "They live in a small town.", trans: "Eles moram em uma cidade pequena." },
                        { term: "To work", sent: "We work in the same office.", trans: "Nós trabalhamos no mesmo escritório." },
                        { term: "To introduce", sent: "I want to introduce my colleague to you.", trans: "Eu quero apresentar meu colega a você." },
                        { term: "To meet", sent: "Let's meet at the cafe at noon.", trans: "Vamos nos encontrar no café ao meio-dia." },
                        { term: "To say", sent: "What did he say to you?", trans: "O que ele disse para você?" },
                        { term: "To ask", sent: "I need to ask you a question.", trans: "Eu preciso te fazer uma pergunta." },
                        { term: "To keep in touch", sent: "Even though she moved, we keep in touch.", trans: "Mesmo que ela tenha se mudado, nós mantemos contato." },
                        { term: "To part ways", sent: "We must part ways here, but I will see you tomorrow.", trans: "Nós devemos nos separar aqui, mas eu te vejo amanhã." }
                    ]
                },
                {
                    title: "Adjectives & Basics",
                    audio: "TTS: I read a good book yesterday. I was sick, but now I feel fine. We had a great time at the party. It is nice to see you again. She looks very happy today. My brother is currently single. They have been married for five years. I always say hello to my neighbors. We hugged and said goodbye. I will finish this report later.",
                    items:[
                        { term: "Good", sent: "I read a good book yesterday.", trans: "Eu li um bom livro ontem." },
                        { term: "Fine", sent: "I was sick, but now I feel fine.", trans: "Eu estava doente, mas agora me sinto bem." },
                        { term: "Great", sent: "We had a great time at the party.", trans: "Nós tivemos um ótimo momento na festa." },
                        { term: "Nice", sent: "It is nice to see you again.", trans: "É legal te ver novamente." },
                        { term: "Happy", sent: "She looks very happy today.", trans: "Ela parece muito feliz hoje." },
                        { term: "Single", sent: "My brother is currently single.", trans: "Meu irmão está solteiro no momento." },
                        { term: "Married", sent: "They have been married for five years.", trans: "Eles estão casados há cinco anos." },
                        { term: "Hello (Hi / Hey)", sent: "I always say hello to my neighbors.", trans: "Eu sempre digo olá para os meus vizinhos." },
                        { term: "Goodbye (Bye)", sent: "We hugged and said goodbye.", trans: "Nós nos abraçamos e dissemos adeus." },
                        { term: "Later", sent: "I will finish this report later.", trans: "Eu vou terminar este relatório mais tarde." }
                    ]
                }
            ],

            // --- 2C: PRACTICE ---
            drillGroups:[
                {
                    title: "Personal Information",
                    drills:[
                        { q: "What is the word for what people call you?", options:[{t: "Name", c: true}, {t: "Age", c: false}, {t: "City", c: false}, {t: "Job", c: false}], type: "mcq" },
                        { q: "Which word describes the status of belonging to a particular nation?", options:[{t: "Job", c: false}, {t: "City", c: false}, {t: "Nationality", c: true}, {t: "Student", c: false}], type: "mcq" },
                        { q: "Japan, Brazil, and Canada are examples of a ________.", options:[{t: "City", c: false}, {t: "Country", c: true}, {t: "Name", c: false}, {t: "Job", c: false}], type: "mcq" },
                        { q: "London and New York are examples of a ________.", options:[{t: "Country", c: false}, {t: "Nationality", c: false}, {t: "City", c: true}, {t: "Teacher", c: false}], type: "mcq" },
                        { q: "The number of years someone has lived is their ________.", options:[{t: "Age", c: true}, {t: "Name", c: false}, {t: "Job", c: false}, {t: "City", c: false}], type: "mcq" },
                        { q: "Another word for occupation or profession is ________.", options:[{t: "Age", c: false}, {t: "Job", c: true}, {t: "Name", c: false}, {t: "Country", c: false}], type: "mcq" },
                        { q: "A person who studies at a school or university is a ________.", options:[{t: "Doctor", c: false}, {t: "Teacher", c: false}, {t: "Engineer", c: false}, {t: "Student", c: true}], type: "mcq" },
                        { q: "A person who helps others learn in a school is a ________.", options:[{t: "Student", c: false}, {t: "Doctor", c: false}, {t: "Teacher", c: true}, {t: "Engineer", c: false}], type: "mcq" },
                        { q: "A person who treats sick people is a ________.", options:[{t: "Engineer", c: false}, {t: "Student", c: false}, {t: "Teacher", c: false}, {t: "Doctor", c: true}], type: "mcq" },
                        { q: "A person who designs and builds machines or bridges is an ________.", options:[{t: "Teacher", c: false}, {t: "Engineer", c: true}, {t: "Student", c: false}, {t: "Doctor", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Action Verbs",
                    drills:[
                        { q: "Which verb is used to express existence or a state?", options:[{t: "To live", c: false}, {t: "To have", c: false}, {t: "To be", c: true}, {t: "To say", c: false}], type: "mcq" },
                        { q: "Which verb means to possess or own something?", options:[{t: "To have", c: true}, {t: "To be", c: false}, {t: "To meet", c: false}, {t: "To ask", c: false}], type: "mcq" },
                        { q: "Which verb means to reside in a specific place?", options:[{t: "To say", c: false}, {t: "To live", c: true}, {t: "To introduce", c: false}, {t: "To have", c: false}], type: "mcq" },
                        { q: "Which verb means to do a job for money?", options:[{t: "To live", c: false}, {t: "To work", c: true}, {t: "To meet", c: false}, {t: "To ask", c: false}], type: "mcq" },
                        { q: "Which verb means to formally present someone by name?", options:[{t: "To ask", c: false}, {t: "To say", c: false}, {t: "To introduce", c: true}, {t: "To have", c: false}], type: "mcq" },
                        { q: "Which verb means to see and speak to someone for the first time?", options:[{t: "To meet", c: true}, {t: "To live", c: false}, {t: "To be", c: false}, {t: "To say", c: false}], type: "mcq" },
                        { q: "Which verb means to speak words out loud?", options:[{t: "To meet", c: false}, {t: "To say", c: true}, {t: "To ask", c: false}, {t: "To work", c: false}], type: "mcq" },
                        { q: "Which verb means to request information from someone?", options:[{t: "To introduce", c: false}, {t: "To say", c: false}, {t: "To have", c: false}, {t: "To ask", c: true}], type: "mcq" },
                        { q: "Which phrase means to maintain communication over time?", options:[{t: "To part ways", c: false}, {t: "To keep in touch", c: true}, {t: "To introduce", c: false}, {t: "To meet", c: false}], type: "mcq" },
                        { q: "Which phrase means to leave or separate from each other?", options:[{t: "To keep in touch", c: false}, {t: "To live", c: false}, {t: "To part ways", c: true}, {t: "To ask", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Adjectives & Basics",
                    drills:[
                        { q: "Which adjective means having positive qualities?", options:[{t: "Good", c: true}, {t: "Single", c: false}, {t: "Married", c: false}, {t: "Later", c: false}], type: "mcq" },
                        { q: "If someone asks 'How are you?', you can say 'I am ________.'", options:[{t: "Fine", c: true}, {t: "Later", c: false}, {t: "Goodbye", c: false}, {t: "Hello", c: false}], type: "mcq" },
                        { q: "Which adjective means much better than just 'good'?", options:[{t: "Married", c: false}, {t: "Great", c: true}, {t: "Single", c: false}, {t: "Hello", c: false}], type: "mcq" },
                        { q: "Which adjective means pleasant or agreeable?", options:[{t: "Nice", c: true}, {t: "Single", c: false}, {t: "Later", c: false}, {t: "Goodbye", c: false}], type: "mcq" },
                        { q: "Which adjective describes feeling joy or pleasure?", options:[{t: "Married", c: false}, {t: "Single", c: false}, {t: "Happy", c: true}, {t: "Hello", c: false}], type: "mcq" },
                        { q: "Which adjective describes someone who is NOT married?", options:[{t: "Great", c: false}, {t: "Single", c: true}, {t: "Fine", c: false}, {t: "Nice", c: false}], type: "mcq" },
                        { q: "Which adjective describes someone who has a husband or wife?", options:[{t: "Happy", c: false}, {t: "Single", c: false}, {t: "Married", c: true}, {t: "Later", c: false}], type: "mcq" },
                        { q: "Which word do you use to greet someone?", options:[{t: "Goodbye", c: false}, {t: "Later", c: false}, {t: "Hello", c: true}, {t: "Single", c: false}], type: "mcq" },
                        { q: "Which word do you use when you are leaving?", options:[{t: "Goodbye", c: true}, {t: "Hello", c: false}, {t: "Fine", c: false}, {t: "Nice", c: false}], type: "mcq" },
                        { q: "Which word refers to a time in the future?", options:[{t: "Great", c: false}, {t: "Later", c: true}, {t: "Single", c: false}, {t: "Happy", c: false}], type: "mcq" }
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
                    title: "Greetings & Leave-Taking",
                    audio: "TTS: Good morning. How's it going? How are you doing? What's up? Long time no see. Have a nice day. See you later. Take care.",
                    explanation: "Common phrases used when you meet someone and when you leave.<br><span style='color:var(--primary-blue); font-style:italic;'>(Frases comuns usadas quando você encontra alguém e quando vai embora.)</span>",
                    samples:[
                        { en: "<b>Good morning!</b>", pt: "<span style='color:var(--primary-blue)'>(Bom dia!)</span>" },
                        { en: "<b>How's it going?</b>", pt: "<span style='color:var(--primary-blue)'>(Como vão as coisas?)</span>" },
                        { en: "<b>How are you doing?</b>", pt: "<span style='color:var(--primary-blue)'>(Como você está?)</span>" },
                        { en: "<b>What's up?</b>", pt: "<span style='color:var(--primary-blue)'>(E aí? / O que está acontecendo?)</span>" },
                        { en: "<b>Long time no see.</b>", pt: "<span style='color:var(--primary-blue)'>(Quanto tempo não te vejo.)</span>" },
                        { en: "<b>Have a nice day.</b>", pt: "<span style='color:var(--primary-blue)'>(Tenha um bom dia.)</span>" },
                        { en: "<b>See you later.</b>", pt: "<span style='color:var(--primary-blue)'>(Te vejo mais tarde.)</span>" },
                        { en: "<b>Take care.</b>", pt: "<span style='color:var(--primary-blue)'>(Cuide-se.)</span>" }
                    ]
                },
                {
                    title: "Introductions",
                    audio: "TTS: My name is. Nice to meet you. Let me introduce myself. This is my friend. It was nice meeting you.",
                    explanation: "Useful phrases to introduce yourself or someone else to a new person.<br><span style='color:var(--primary-blue); font-style:italic;'>(Frases úteis para apresentar a si mesmo ou outra pessoa a alguém novo.)</span>",
                    samples:[
                        { en: "<b>My name is...</b>", pt: "<span style='color:var(--primary-blue)'>(Meu nome é...)</span>" },
                        { en: "<b>Nice to meet you.</b>", pt: "<span style='color:var(--primary-blue)'>(Prazer em conhecê-lo/la.)</span>" },
                        { en: "<b>Let me introduce myself.</b>", pt: "<span style='color:var(--primary-blue)'>(Deixe-me me apresentar.)</span>" },
                        { en: "<b>This is my friend.</b>", pt: "<span style='color:var(--primary-blue)'>(Este é o meu amigo.)</span>" },
                        { en: "<b>It was nice meeting you.</b>", pt: "<span style='color:var(--primary-blue)'>(Foi um prazer conhecê-lo/la.)</span>" }
                    ]
                },
                {
                    title: "Questions & Repetition",
                    audio: "TTS: What's your name? Where are you from? How old are you? What do you do for a living? Could you repeat that?",
                    explanation: "Basic questions to get to know someone, and how to politely ask them to say something again.<br><span style='color:var(--primary-blue); font-style:italic;'>(Perguntas básicas para conhecer alguém e como pedir educadamente para repetir algo.)</span>",
                    samples:[
                        { en: "<b>What's your name?</b>", pt: "<span style='color:var(--primary-blue)'>(Qual é o seu nome?)</span>" },
                        { en: "<b>Where are you from?</b>", pt: "<span style='color:var(--primary-blue)'>(De onde você é?)</span>" },
                        { en: "<b>How old are you?</b>", pt: "<span style='color:var(--primary-blue)'>(Quantos anos você tem?)</span>" },
                        { en: "<b>What do you do for a living?</b>", pt: "<span style='color:var(--primary-blue)'>(O que você faz da vida? / Qual é a sua profissão?)</span>" },
                        { en: "<b>Could you repeat that?</b>", pt: "<span style='color:var(--primary-blue)'>(Você poderia repetir isso?)</span>" }
                    ]
                }
            ],

            // --- 3B: DIALOGUES ---
            dialogueGroups:[
                {
                    title: "Dialogue 1: A Casual Morning Meeting",
                    audio: "TTS: Good morning! How's it going? I'm doing well, thanks. What's up with you? Not much. I just wanted to say hello.",
                    lines:[
                        { speaker: "John", text: "Good morning! How's it going?", pt: "(Bom dia! Como vão as coisas?)" },
                        { speaker: "Mike", text: "I'm doing well, thanks. What's up with you?", pt: "(Estou indo bem, obrigado. E aí, o que me conta?)" }
                    ]
                },
                {
                    title: "Dialogue 2: Reconnecting with an Old Friend",
                    audio: "TTS: Hey! Long time no see. How are you doing? I'm great! It's so nice to see you again.",
                    lines:[
                        { speaker: "Sarah", text: "Hey! Long time no see. How are you doing?", pt: "(Ei! Quanto tempo não te vejo. Como você está?)" },
                        { speaker: "Anna", text: "I'm great! It's so nice to see you again.", pt: "(Estou ótima! É tão legal te ver de novo.)" }
                    ]
                },
                {
                    title: "Dialogue 3: Formal Introductions",
                    audio: "TTS: Let me introduce myself. My name is David. Nice to meet you, David. I'm Mr. Smith.",
                    lines:[
                        { speaker: "David", text: "Let me introduce myself. My name is David.", pt: "(Deixe-me me apresentar. Meu nome é David.)" },
                        { speaker: "Mr. Smith", text: "Nice to meet you, David. I'm Mr. Smith.", pt: "(Prazer em conhecê-lo, David. Eu sou o Sr. Smith.)" }
                    ]
                },
                {
                    title: "Dialogue 4: Introducing a Friend",
                    audio: "TTS: Hi, Emma! This is my friend, Leo. Hello, Leo! What do you do for a living? I am a doctor at the city hospital.",
                    lines:[
                        { speaker: "Liam", text: "Hi, Emma! This is my friend, Leo.", pt: "(Oi, Emma! Este é meu amigo, Leo.)" },
                        { speaker: "Emma", text: "Hello, Leo! What do you do for a living?", pt: "(Olá, Leo! O que você faz da vida?)" }
                    ]
                },
                {
                    title: "Dialogue 5: Asking Personal Questions",
                    audio: "TTS: Excuse me, what's your name? I'm Sophia. Where are you from? I am from Canada. How old are you? I'm twenty-five.",
                    lines:[
                        { speaker: "Lucas", text: "Excuse me, what's your name?", pt: "(Com licença, qual é o seu nome?)" },
                        { speaker: "Sophia", text: "I'm Sophia. Where are you from?", pt: "(Eu sou a Sophia. De onde você é?)" }
                    ]
                },
                {
                    title: "Dialogue 6: Saying Goodbye",
                    audio: "TTS: Could you repeat that? I said it was nice meeting you. Oh! Have a nice day! See you later, take care.",
                    lines:[
                        { speaker: "Mark", text: "Could you repeat that? I said it was nice meeting you.", pt: "(Você poderia repetir isso? Eu disse que foi um prazer conhecê-lo.)" },
                        { speaker: "Julia", text: "Oh! Have a nice day! See you later, take care.", pt: "(Oh! Tenha um bom dia! Te vejo mais tarde, cuide-se.)" }
                    ]
                }
            ],

            // --- 3C: PRACTICE ---
            grammarDrillGroups:[
                {
                    title: "Greetings & Leave-Taking",
                    drills:[
                        { q: "What is a common way to greet someone before noon?", options:[{t: "Good morning", c: true}, {t: "Take care", c: false}, {t: "See you later", c: false}, {t: "Goodbye", c: false}], type: "mcq" },
                        { q: "Which informal phrase means 'How are you?'", options:[{t: "How's it going?", c: true}, {t: "What do you do?", c: false}, {t: "Take care", c: false}, {t: "Pardon me?", c: false}], type: "mcq" },
                        { q: "If someone asks '________?', you can answer 'I'm fine, thanks.'", options:[{t: "Where are you from", c: false}, {t: "How are you doing?", c: true}, {t: "How old are you?", c: false}, {t: "What's your name?", c: false}], type: "mcq" },
                        { q: "Which phrase is a very casual way to ask 'what is happening'?", options:[{t: "Take care?", c: false}, {t: "What do you do?", c: false}, {t: "What's up?", c: true}, {t: "Pardon me?", c: false}], type: "mcq" },
                        { q: "What do you say when you haven't seen someone for a while?", options:[{t: "Have a nice day", c: false}, {t: "Long time no see", c: true}, {t: "Could you repeat that?", c: false}, {t: "Take care", c: false}], type: "mcq" },
                        { q: "A polite way to say goodbye and wish someone well for the day is ________.", options:[{t: "Have a nice day", c: true}, {t: "Long time no see", c: false}, {t: "What's up?", c: false}, {t: "How's it going?", c: false}], type: "mcq" },
                        { q: "A common way to say goodbye to a friend you will meet again soon is ________.", options:[{t: "Nice to meet you", c: false}, {t: "Let me introduce myself", c: false}, {t: "See you later", c: true}, {t: "Pardon me?", c: false}], type: "mcq" },
                        { q: "When leaving, you can tell someone to stay safe by saying '________.'", options:[{t: "Take care", c: true}, {t: "Good morning", c: false}, {t: "What's up?", c: false}, {t: "My name is...", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Introductions",
                    drills:[
                        { q: "To tell someone your name, you can say '________.'", options:[{t: "See you later", c: false}, {t: "My name is...", c: true}, {t: "Where are you from?", c: false}, {t: "Take care", c: false}], type: "mcq" },
                        { q: "After someone introduces themselves, it is polite to reply '________.'", options:[{t: "Nice to meet you", c: true}, {t: "Have a nice day", c: false}, {t: "What's up?", c: false}, {t: "See you later", c: false}], type: "mcq" },
                        { q: "Before saying your name in a formal setting, you might say '________.'", options:[{t: "Take care", c: false}, {t: "Let me introduce myself", c: true}, {t: "Long time no see", c: false}, {t: "Could you repeat that?", c: false}], type: "mcq" },
                        { q: "To introduce another person, you use the phrase '________.'", options:[{t: "I'm fine, thanks.", c: false}, {t: "Take care", c: false}, {t: "This is my friend", c: true}, {t: "What's your job?", c: false}], type: "mcq" },
                        { q: "When ending a conversation with a new person, you should say '________.'", options:[{t: "What's your name?", c: false}, {t: "It was nice meeting you", c: true}, {t: "My name is...", c: false}, {t: "Where are you from?", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Questions & Repetition",
                    drills:[
                        { q: "Which phrase is used to ask how someone is called?", options:[{t: "What's your name?", c: true}, {t: "How old are you?", c: false}, {t: "Where are you from?", c: false}, {t: "Take care.", c: false}], type: "mcq" },
                        { q: "Which phrase asks about someone's origin or nationality?", options:[{t: "What's your name?", c: false}, {t: "Where are you from?", c: true}, {t: "Could you repeat that?", c: false}, {t: "What do you do for a living?", c: false}], type: "mcq" },
                        { q: "Which phrase is used to ask someone's age?", options:[{t: "How old are you?", c: true}, {t: "Where are you from?", c: false}, {t: "What's your name?", c: false}, {t: "How's it going?", c: false}], type: "mcq" },
                        { q: "Which phrase is a common way to ask about someone's job?", options:[{t: "Where are you from?", c: false}, {t: "What do you do for a living?", c: true}, {t: "How old are you?", c: false}, {t: "Take care", c: false}], type: "mcq" },
                        { q: "If you didn't hear what someone said, you should ask '________?'", options:[{t: "Could you repeat that?", c: true}, {t: "What do you do for a living?", c: false}, {t: "Where are you from?", c: false}, {t: "How old are you?", c: false}], type: "mcq" }
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
                { text: "Hi, how are you doing today? ↘", audio: "TTS: Hi, how are you doing today?" },
                { text: "Good morning! It is a pleasure to meet you. ↘", audio: "TTS: Good morning! It is a pleasure to meet you." },
                { text: "My name is Sarah, and I am from Canada. ↘", audio: "TTS: My name is Sarah, and I am from Canada." },
                { text: "What do you do for a living? ↘", audio: "TTS: What do you do for a living?" },
                { text: "I work as an engineer in a big city. ↘", audio: "TTS: I work as an engineer in a big city." },
                { text: "How old are you? ↘", audio: "TTS: How old are you?" },
                { text: "I am twenty-five years old, and I am a student. ↘", audio: "TTS: I am twenty-five years old, and I am a student." },
                { text: "Could you repeat your name, please? ↗", audio: "TTS: Could you repeat your name, please?" },
                { text: "It was really nice meeting you! ↘", audio: "TTS: It was really nice meeting you!" },
                { text: "Have a great day, and see you later! ↘", audio: "TTS: Have a great day, and see you later!" }
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
                    audio: "TTS: John: Hello? Mary: Hi John, it's Mary! How are you doing? John: I'm fine, thanks! What's up? Mary: Nothing much, I just called to say hello!",
                    text: "John: Hello?<br>Mary: Hi John, it's Mary! How are you [doing]?<br>John: I'm [fine], thanks! What's [up]?<br>Mary: Nothing much, I just called to [say] hello!"
                },
                {
                    type: "dropdown",
                    instruction: "Listen to the conversation between two people meeting at a party.",
                    audio: "TTS: Tom: Hi, let me introduce myself. I am Tom. Lucy: Nice to meet you, Tom. I am Lucy. Tom: Where are you from, Lucy? Lucy: I am from Brazil.",
                    questions:[
                        { q: "Tom: Hi, let me[introduce* | say | meet] myself. I am Tom.", a: "introduce" },
                        { q: "Lucy:[Nice* | Good | Great] to meet you, Tom. I am Lucy.", a: "Nice" },
                        { q: "Tom: Where are you [from* | living | nationality], Lucy?", a: "from" },
                        { q: "Lucy: I am from Brazil.", a: "" }
                    ]
                },
                {
                    type: "audio-choice",
                    instruction: "Listen to the interview. What is Paul's job?",
                    audio: "TTS: Agent: What do you do for a living, Paul? Paul: I work as a teacher at the local school. Agent: Are you single or married? Paul: I am married.",
                    options:[
                        { t: "He is a student.", c: false },
                        { t: "He is a doctor.", c: false },
                        { t: "He is a teacher.", c: true },
                        { t: "He is an engineer.", c: false }
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
                    title: "Dialogue - The New Student",
                    audio: "TTS: Alex: Hello! My name is Alex. Are you the new student? Maria: Hi, Alex. Yes, I am. My name is Maria. Alex: Nice to meet you, Maria. Where are you from? Maria: I am from Spain. And you? Alex: I'm from Canada. How old are you? Maria: I'm twenty years old.",
                    body: "<b>Alex:</b> [Hello](tooltip:hello)! My [name](tooltip:name) is Alex. Are you the new [student](tooltip:student)?<br><b>Maria:</b> [Hi](tooltip:hello), Alex. Yes, I am. My name is Maria.<br><b>Alex:</b> [Nice to meet you](tooltip:nice-to-meet), Maria. [Where are you from](tooltip:where-from)?<br><b>Maria:</b> I am from Spain. And you?<br><b>Alex:</b> I'm from Canada. [How old are you](tooltip:how-old)?<br><b>Maria:</b> I'm twenty years old.",
                    questions:[
                        { q: "Where is Maria from?", options:[{t: "Canada", c: false}, {t: "Spain", c: true}, {t: "Brazil", c: false}], type: "mcq" },
                        { q: "Who is the new student?", options:[{t: "Alex", c: false}, {t: "Maria", c: true}, {t: "The teacher", c: false}], type: "mcq" },
                        { q: "How old is Maria?", options:[{t: "Twenty", c: true}, {t: "Twenty-five", c: false}, {t: "Thirty", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Dialogue - The Business Conference",
                    audio: "TTS: Mr. Lee: Good morning. Let me introduce myself. I am Mr. Lee. Ms. Davis: It's a pleasure to meet you, Mr. Lee. I am Ms. Davis. Mr. Lee: What do you do for a living, Ms. Davis? Ms. Davis: I work as an engineer. And you? Mr. Lee: I am a doctor. Well, I have to go to a meeting. See you later! Ms. Davis: Take care!",
                    body: "<b>Mr. Lee:</b> [Good morning](tooltip:good-morning). [Let me introduce myself](tooltip:let-me-introduce). I am Mr. Lee.<br><b>Ms. Davis:</b> It's a pleasure to meet you, Mr. Lee. I am Ms. Davis.<br><b>Mr. Lee:</b> [What do you do for a living](tooltip:what-do-living), Ms. Davis?<br><b>Ms. Davis:</b> I work as an [engineer](tooltip:engineer). And you?<br><b>Mr. Lee:</b> I am a [doctor](tooltip:doctor). Well, I have to go to a meeting. [See you later](tooltip:see-you-later)!<br><b>Ms. Davis:</b> [Take care](tooltip:take-care)!",
                    questions:[
                        { q: "How do Mr. Lee and Ms. Davis greet each other?", options:[{t: "Formally", c: true}, {t: "Casually", c: false}, {t: "They don't greet each other.", c: false}], type: "mcq" },
                        { q: "What is Ms. Davis's job?", options:[{t: "Doctor", c: false}, {t: "Teacher", c: false}, {t: "Engineer", c: true}], type: "mcq" },
                        { q: "What does Mr. Lee say before leaving?", options:[{t: "What's up?", c: false}, {t: "See you later!", c: true}, {t: "Could you repeat that?", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Email Chain - Keeping in Touch",
                    audio: "TTS: Subject: Long time no see! Hi Anna, How is it going? Long time no see! I hope you are doing well. I live in London now, and I work as a graphic designer. I am very happy here. What about you? Let's keep in touch! Best, Ben. Subject: Re: Long time no see! Hi Ben, I am great! It is so nice to hear from you. I still live in New York, and I am married now. Yes, let's meet online soon! Take care, Anna.",
                    body: "<b>From: Ben</b><br><b>To: Anna</b><br>Subject: [Long time no see](tooltip:long-time)!<br><br>[Hi](tooltip:hello) Anna, [How's it going](tooltip:how-going)? Long time no see! I hope you are [doing well](tooltip:how-doing). I [live](tooltip:live) in London now, and I [work](tooltip:work) as a graphic designer. I am very [happy](tooltip:happy) here. What about you? Let's [keep in touch](tooltip:keep-in-touch)!<br>Best, Ben.<br><br><b>From: Anna</b><br><b>To: Ben</b><br>Subject: Re: Long time no see!<br><br>Hi Ben, I am [great](tooltip:great)! It is so [nice](tooltip:nice) to hear from you. I still live in New York, and I am [married](tooltip:married) now. Yes, let's [meet](tooltip:meet) online soon! [Take care](tooltip:take-care), Anna.",
                    questions:[
                        { q: "Where does Ben live now?", options:[{t: "New York", c: false}, {t: "London", c: true}, {t: "Canada", c: false}], type: "mcq" },
                        { q: "What is Ben's profession?", options:[{t: "Graphic designer", c: true}, {t: "Doctor", c: false}, {t: "Student", c: false}], type: "mcq" },
                        { q: "What is Anna's marital status?", options:[{t: "Single", c: false}, {t: "Married", c: true}, {t: "She is a student.", c: false}], type: "mcq" }
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
                { type: "matching", instruction: "Match the word to its Portuguese translation.", pairs:[
                    { left: "Name", right: "Nome", val: "1" },
                    { left: "Country", right: "País", val: "2" },
                    { left: "City", right: "Cidade", val: "3" },
                    { left: "Age", right: "Idade", val: "4" }
                ]},
                { type: "matching", instruction: "Match the profession to its meaning.", pairs:[
                    { left: "Teacher", right: "Helps students learn", val: "1" },
                    { left: "Doctor", right: "Treats sick people", val: "2" },
                    { left: "Engineer", right: "Builds and designs", val: "3" },
                    { left: "Student", right: "Studies at school", val: "4" }
                ]},
                { type: "matching", instruction: "Match the question to its purpose.", pairs:[
                    { left: "What's your name?", right: "Asking identity", val: "1" },
                    { left: "Where are you from?", right: "Asking origin", val: "2" },
                    { left: "How old are you?", right: "Asking age", val: "3" },
                    { left: "What do you do?", right: "Asking profession", val: "4" }
                ]},
                { type: "matching", instruction: "Match the phrase to its context.", pairs:[
                    { left: "Good morning", right: "Morning greeting", val: "1" },
                    { left: "See you later", right: "Saying goodbye", val: "2" },
                    { left: "Could you repeat that?", right: "Asking to hear again", val: "3" },
                    { left: "Nice to meet you", right: "After an introduction", val: "4" }
                ]},

                // --- WORD ORDER (5-14) ---
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "morning / Good / how / it / going / is / ?", correct: "Good morning how is it going ?" },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "me / myself / Let / introduce / .", correct: "Let me introduce myself ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "friend / This / my / is / John / .", correct: "This is my friend John ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "doing / How / you / are / today / ?", correct: "How are you doing today ?" },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "nice / meeting / was / It / you / .", correct: "It was nice meeting you ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "for / living / do / What / you / do / a / ?", correct: "What do you do for a living ?" },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "you / are / old / How / ?", correct: "How old are you ?" },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "you / from / Where / are / ?", correct: "Where are you from ?" },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "repeat / you / that / Could / ?", correct: "Could you repeat that ?" },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "touch / Let's / in / keep / .", correct: "Let's keep in touch ." },

                // --- CLICKABLE ERROR (15-24) ---
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "How [is](error:are) you doing today?" },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "What do you do for a [live](error:living)?" },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "Let me [introduces](error:introduce) myself." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "Where [is](error:are) you from?" },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "It was nice [meet](error:meeting) you." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "How [many](error:old) are you?" },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "[Do](error:Could) you repeat that, please?" },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "I [lives](error:live) in New York City." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "This [are](error:is) my friend, Tom." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "I am [a](error:an) engineer." },

                // --- ODD ONE OUT (25-30) ---
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Professions)", options:[{t: "Doctor", c: false}, {t: "Teacher", c: false}, {t: "Engineer", c: false}, {t: "City", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Personal Info)", options:[{t: "Name", c: false}, {t: "Age", c: false}, {t: "Nationality", c: false}, {t: "Goodbye", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Verbs)", options:[{t: "To live", c: false}, {t: "To work", c: false}, {t: "To meet", c: false}, {t: "Single", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Adjectives)", options:[{t: "Happy", c: false}, {t: "Great", c: false}, {t: "Nice", c: false}, {t: "Country", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Greetings)", options:[{t: "Hello", c: false}, {t: "Good morning", c: false}, {t: "What's up?", c: false}, {t: "Take care", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Farewells)", options:[{t: "See you later", c: false}, {t: "Goodbye", c: false}, {t: "Take care", c: false}, {t: "How's it going?", c: true}] },

                // --- TRUE / FALSE (31-35) ---
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "You say 'See you later' when you meet someone for the first time.", correct: "false"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "'What do you do for a living?' asks about someone's job.", correct: "true"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "An engineer helps sick people in a hospital.", correct: "false"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "'Single' means you are not married.", correct: "true"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "'Pardon me?' or 'Could you repeat that?' is used when you didn't hear what someone said.", correct: "true"}] },

                // --- MCQ (36-39) ---
                { type: "mcq", instruction: "Choose the correct phrase.<br>When you leave a party, you say:", options:[{t: "Nice to meet you", c: false}, {t: "Let me introduce myself", c: false}, {t: "Have a nice day", c: true}, {t: "What's up?", c: false}] },
                { type: "mcq", instruction: "Choose the correct phrase.<br>When you introduce your friend Mark to someone, you say:", options:[{t: "Where is Mark from?", c: false}, {t: "This is my friend, Mark.", c: true}, {t: "Mark is a doctor.", c: false}, {t: "See you later, Mark.", c: false}] },
                { type: "mcq", instruction: "Choose the correct phrase.<br>To ask about someone's origin, you say:", options:[{t: "How old are you?", c: false}, {t: "What's your name?", c: false}, {t: "Where are you from?", c: true}, {t: "How are you doing?", c: false}] },
                { type: "mcq", instruction: "Choose the correct phrase.<br>If you want to maintain contact with someone in the future, you say:", options:[{t: "Let's part ways.", c: false}, {t: "Let's keep in touch.", c: true}, {t: "What's your job?", c: false}, {t: "Good morning.", c: false}] },

                // --- CATEGORIZE (40) ---
                { type: "categorize", instruction: "Sort the phrases into Greetings and Farewells.", 
                    categories:[{id: "greet", name: "Greetings"}, {id: "farewell", name: "Farewells"}],
                    items:[
                        {text: "Good morning", catId: "greet"}, 
                        {text: "What's up?", catId: "greet"}, 
                        {text: "How's it going?", catId: "greet"}, 
                        {text: "See you later", catId: "farewell"}, 
                        {text: "Take care", catId: "farewell"}, 
                        {text: "Have a nice day", catId: "farewell"}
                    ] 
                }
            ]
        },

        // ======================================================
        // STEP 8: WRITING PRACTICE
        // ======================================================
        {
            title: "Writing Practice",
            instruction: "Write a short paragraph (4-6 sentences) introducing yourself to a new online pen pal. Include your name, age, where you are from, what you do for a living, and a polite greeting and farewell.",
            example: "Hello! My name is Carlos. I am twenty-eight years old, and I am from Brazil. I live in a big city, and I work as an engineer. It is very nice to meet you. I hope we can keep in touch. Take care!",
            prompts:[
                "Use a greeting (e.g., Hello, Good morning).",
                "State your personal information (Name, Age, Country).",
                "Mention your job (e.g., I am a student, I work as...).",
                "Use a farewell phrase (e.g., Take care, Have a nice day)."
            ]
        },

        // ======================================================
        // STEP 9: FLASHCARDS
        // ======================================================
        {
            title: "Flashcards",
            items:[
                // 2A Items (30 items)
                { term: "Name", definition: "A word or set of words by which a person is known.", defTrans: "Nome", example: "My first name is John.", audioFront: "TTS: Name", audioBack: "TTS: My first name is John." },
                { term: "Nationality", definition: "The status of belonging to a particular nation.", defTrans: "Nacionalidade", example: "Her nationality is Canadian.", audioFront: "TTS: Nationality", audioBack: "TTS: Her nationality is Canadian." },
                { term: "Country", definition: "A nation with its own government.", defTrans: "País", example: "Brazil is a very large country.", audioFront: "TTS: Country", audioBack: "TTS: Brazil is a very large country." },
                { term: "City", definition: "A large human settlement.", defTrans: "Cidade", example: "Tokyo is a busy city.", audioFront: "TTS: City", audioBack: "TTS: Tokyo is a busy city." },
                { term: "Age", definition: "The length of time that a person has lived.", defTrans: "Idade", example: "They asked me about my age.", audioFront: "TTS: Age", audioBack: "TTS: They asked me about my age." },
                { term: "Job", definition: "A paid position of regular employment.", defTrans: "Trabalho (Profissão)", example: "My job is very interesting.", audioFront: "TTS: Job", audioBack: "TTS: My job is very interesting." },
                { term: "Student", definition: "A person who is studying at a school or college.", defTrans: "Estudante", example: "The student is reading a book.", audioFront: "TTS: Student", audioBack: "TTS: The student is reading a book." },
                { term: "Teacher", definition: "A person who teaches, especially in a school.", defTrans: "Professor(a)", example: "The teacher explains the lesson clearly.", audioFront: "TTS: Teacher", audioBack: "TTS: The teacher explains the lesson clearly." },
                { term: "Doctor", definition: "A qualified practitioner of medicine.", defTrans: "Médico(a)", example: "The doctor works at the local hospital.", audioFront: "TTS: Doctor", audioBack: "TTS: The doctor works at the local hospital." },
                { term: "Engineer", definition: "A person who designs, builds, or maintains engines or machines.", defTrans: "Engenheiro(a)", example: "The engineer designed a new bridge.", audioFront: "TTS: Engineer", audioBack: "TTS: The engineer designed a new bridge." },
                
                { term: "To be", definition: "To exist; used to describe identity, qualities, or condition.", defTrans: "Ser / Estar", example: "I am a graphic designer.", audioFront: "TTS: To be", audioBack: "TTS: I am a graphic designer." },
                { term: "To have", definition: "To possess, own, or hold.", defTrans: "Ter", example: "I have two brothers.", audioFront: "TTS: To have", audioBack: "TTS: I have two brothers." },
                { term: "To live", definition: "To make one's home in a particular place.", defTrans: "Viver / Morar", example: "They live in a small town.", audioFront: "TTS: To live", audioBack: "TTS: They live in a small town." },
                { term: "To work", definition: "To do a job, especially for money.", defTrans: "Trabalhar", example: "We work in the same office.", audioFront: "TTS: To work", audioBack: "TTS: We work in the same office." },
                { term: "To introduce", definition: "To make someone known by name to another in person.", defTrans: "Apresentar", example: "I want to introduce my colleague to you.", audioFront: "TTS: To introduce", audioBack: "TTS: I want to introduce my colleague to you." },
                { term: "To meet", definition: "To come into the presence or company of someone.", defTrans: "Conhecer / Encontrar", example: "Let's meet at the cafe at noon.", audioFront: "TTS: To meet", audioBack: "TTS: Let's meet at the cafe at noon." },
                { term: "To say", definition: "To utter words so as to convey information.", defTrans: "Dizer", example: "What did he say to you?", audioFront: "TTS: To say", audioBack: "TTS: What did he say to you?" },
                { term: "To ask", definition: "To say something in order to obtain an answer.", defTrans: "Perguntar / Pedir", example: "I need to ask you a question.", audioFront: "TTS: To ask", audioBack: "TTS: I need to ask you a question." },
                { term: "To keep in touch", definition: "To maintain communication with someone.", defTrans: "Manter contato", example: "Even though she moved, we keep in touch.", audioFront: "TTS: To keep in touch", audioBack: "TTS: Even though she moved, we keep in touch." },
                { term: "To part ways", definition: "To leave each other's company.", defTrans: "Separar-se", example: "We must part ways here.", audioFront: "TTS: To part ways", audioBack: "TTS: We must part ways here." },

                { term: "Good", definition: "To be desired or approved of.", defTrans: "Bom / Boa", example: "I read a good book yesterday.", audioFront: "TTS: Good", audioBack: "TTS: I read a good book yesterday." },
                { term: "Fine", definition: "In a satisfactory or pleasing manner; well.", defTrans: "Bem / Bom", example: "I was sick, but now I feel fine.", audioFront: "TTS: Fine", audioBack: "TTS: I was sick, but now I feel fine." },
                { term: "Great", definition: "Of an extent, amount, or intensity considerably above the normal.", defTrans: "Ótimo", example: "We had a great time at the party.", audioFront: "TTS: Great", audioBack: "TTS: We had a great time at the party." },
                { term: "Nice", definition: "Pleasant; agreeable; satisfactory.", defTrans: "Agradável / Legal", example: "It is nice to see you again.", audioFront: "TTS: Nice", audioBack: "TTS: It is nice to see you again." },
                { term: "Happy", definition: "Feeling or showing pleasure or contentment.", defTrans: "Feliz", example: "She looks very happy today.", audioFront: "TTS: Happy", audioBack: "TTS: She looks very happy today." },
                { term: "Single", definition: "Unmarried or not involved in a stable romantic relationship.", defTrans: "Solteiro(a)", example: "My brother is currently single.", audioFront: "TTS: Single", audioBack: "TTS: My brother is currently single." },
                { term: "Married", definition: "Joined in marriage.", defTrans: "Casado(a)", example: "They have been married for five years.", audioFront: "TTS: Married", audioBack: "TTS: They have been married for five years." },
                { term: "Hello", definition: "Used as a greeting or to begin a conversation.", defTrans: "Olá (Oi)", example: "I always say hello to my neighbors.", audioFront: "TTS: Hello", audioBack: "TTS: I always say hello to my neighbors." },
                { term: "Goodbye", definition: "Used to express good wishes when parting.", defTrans: "Adeus (Tchau)", example: "We hugged and said goodbye.", audioFront: "TTS: Goodbye", audioBack: "TTS: We hugged and said goodbye." },
                { term: "Later", definition: "At a time in the near future.", defTrans: "Mais tarde / Depois", example: "I will finish this report later.", audioFront: "TTS: Later", audioBack: "TTS: I will finish this report later." },

                // 3A Items (18 items)
                { term: "Good morning", definition: "A formal greeting used before noon.", defTrans: "Bom dia!", example: "Good morning! How are you?", audioFront: "TTS: Good morning", audioBack: "TTS: Good morning! How are you?" },
                { term: "How's it going?", definition: "An informal way to ask how someone is doing.", defTrans: "Como vão as coisas?", example: "Hey, how's it going?", audioFront: "TTS: How's it going?", audioBack: "TTS: Hey, how's it going?" },
                { term: "How are you doing?", definition: "A standard way to ask about someone's well-being.", defTrans: "Como você está?", example: "How are you doing today?", audioFront: "TTS: How are you doing?", audioBack: "TTS: How are you doing today?" },
                { term: "What's up?", definition: "A very casual greeting asking what is happening.", defTrans: "E aí?", example: "What's up? Not much.", audioFront: "TTS: What's up?", audioBack: "TTS: What's up? Not much." },
                { term: "Long time no see", definition: "A phrase used when you haven't seen someone for a long time.", defTrans: "Quanto tempo não te vejo.", example: "Long time no see! You look great.", audioFront: "TTS: Long time no see", audioBack: "TTS: Long time no see! You look great." },
                { term: "Have a nice day", definition: "A polite farewell wishing someone a good day.", defTrans: "Tenha um bom dia.", example: "Goodbye, have a nice day.", audioFront: "TTS: Have a nice day", audioBack: "TTS: Goodbye, have a nice day." },
                { term: "See you later", definition: "An informal farewell indicating you will meet again.", defTrans: "Te vejo mais tarde.", example: "I have to go now. See you later.", audioFront: "TTS: See you later", audioBack: "TTS: I have to go now. See you later." },
                { term: "Take care", definition: "A polite farewell telling someone to stay safe.", defTrans: "Cuide-se.", example: "It was nice seeing you. Take care.", audioFront: "TTS: Take care", audioBack: "TTS: It was nice seeing you. Take care." },
                
                { term: "My name is...", definition: "A standard way to introduce yourself.", defTrans: "Meu nome é...", example: "My name is David.", audioFront: "TTS: My name is", audioBack: "TTS: My name is David." },
                { term: "Nice to meet you", definition: "A polite response after someone introduces themselves.", defTrans: "Prazer em conhecê-lo.", example: "Nice to meet you too.", audioFront: "TTS: Nice to meet you", audioBack: "TTS: Nice to meet you too." },
                { term: "Let me introduce myself", definition: "A formal way to start introducing yourself.", defTrans: "Deixe-me me apresentar.", example: "Let me introduce myself. I am the new teacher.", audioFront: "TTS: Let me introduce myself", audioBack: "TTS: Let me introduce myself. I am the new teacher." },
                { term: "This is my friend", definition: "A phrase used to introduce another person.", defTrans: "Este é meu amigo.", example: "This is my friend, Lisa.", audioFront: "TTS: This is my friend", audioBack: "TTS: This is my friend, Lisa." },
                { term: "It was nice meeting you", definition: "A polite phrase used when ending a conversation with someone new.", defTrans: "Foi um prazer conhecê-lo.", example: "It was nice meeting you. Have a great day.", audioFront: "TTS: It was nice meeting you", audioBack: "TTS: It was nice meeting you. Have a great day." },
                
                { term: "What's your name?", definition: "Asking for a person's identity.", defTrans: "Qual é o seu nome?", example: "Excuse me, what's your name?", audioFront: "TTS: What's your name?", audioBack: "TTS: Excuse me, what's your name?" },
                { term: "Where are you from?", definition: "Asking for a person's country or city of origin.", defTrans: "De onde você é?", example: "Where are you from? I'm from Brazil.", audioFront: "TTS: Where are you from?", audioBack: "TTS: Where are you from? I'm from Brazil." },
                { term: "How old are you?", definition: "Asking for a person's age.", defTrans: "Quantos anos você tem?", example: "How old are you? I am 30.", audioFront: "TTS: How old are you?", audioBack: "TTS: How old are you? I am 30." },
                { term: "What do you do for a living?", definition: "Asking about a person's job or profession.", defTrans: "O que você faz da vida?", example: "What do you do for a living? I am a doctor.", audioFront: "TTS: What do you do for a living?", audioBack: "TTS: What do you do for a living? I am a doctor." },
                { term: "Could you repeat that?", definition: "A polite way to ask someone to say something again.", defTrans: "Você poderia repetir isso?", example: "Sorry, I didn't hear you. Could you repeat that?", audioFront: "TTS: Could you repeat that?", audioBack: "TTS: Sorry, I didn't hear you. Could you repeat that?" }
            ]
        }
    ],

    // ======================================================
    // GLOSSARY (All 48 items + Context words)
    // ======================================================
    glossary:[
        // 2A: Personal Information
        { topic: "Personal Info", term: "name", definition: "A word or set of words by which a person is known.", translation: "Nome" },
        { topic: "Personal Info", term: "nationality", definition: "The status of belonging to a particular nation.", translation: "Nacionalidade" },
        { topic: "Personal Info", term: "country", definition: "A nation with its own government.", translation: "País" },
        { topic: "Personal Info", term: "city", definition: "A large human settlement.", translation: "Cidade" },
        { topic: "Personal Info", term: "age", definition: "The length of time that a person has lived.", translation: "Idade" },
        { topic: "Personal Info", term: "job", definition: "A paid position of regular employment.", translation: "Trabalho (Profissão)" },
        { topic: "Personal Info", term: "student", definition: "A person who is studying at a school or college.", translation: "Estudante" },
        { topic: "Personal Info", term: "teacher", definition: "A person who teaches, especially in a school.", translation: "Professor(a)" },
        { topic: "Personal Info", term: "doctor", definition: "A qualified practitioner of medicine.", translation: "Médico(a)" },
        { topic: "Personal Info", term: "engineer", definition: "A person who designs, builds, or maintains engines or machines.", translation: "Engenheiro(a)" },
        
        // 2A: Action Verbs
        { topic: "Verbs", term: "to-be", definition: "To exist; used to describe identity or condition.", translation: "Ser / Estar" },
        { topic: "Verbs", term: "to-have", definition: "To possess, own, or hold.", translation: "Ter" },
        { topic: "Verbs", term: "to-live", definition: "To make one's home in a particular place.", translation: "Viver / Morar" },
        { topic: "Verbs", term: "to-work", definition: "To do a job, especially for money.", translation: "Trabalhar" },
        { topic: "Verbs", term: "to-introduce", definition: "To make someone known by name to another.", translation: "Apresentar" },
        { topic: "Verbs", term: "to-meet", definition: "To come into the presence or company of someone.", translation: "Conhecer / Encontrar" },
        { topic: "Verbs", term: "to-say", definition: "To utter words so as to convey information.", translation: "Dizer" },
        { topic: "Verbs", term: "to-ask", definition: "To say something in order to obtain an answer.", translation: "Perguntar / Pedir" },
        { topic: "Verbs", term: "to-keep-in-touch", definition: "To maintain communication with someone.", translation: "Manter contato" },
        { topic: "Verbs", term: "to-part-ways", definition: "To leave each other's company.", translation: "Separar-se" },

        // 2A: Adjectives & Basics
        { topic: "Adjectives", term: "good", definition: "To be desired or approved of.", translation: "Bom / Boa" },
        { topic: "Adjectives", term: "fine", definition: "In a satisfactory or pleasing manner; well.", translation: "Bem / Bom" },
        { topic: "Adjectives", term: "great", definition: "Of an extent, amount, or intensity considerably above the normal.", translation: "Ótimo" },
        { topic: "Adjectives", term: "nice", definition: "Pleasant; agreeable.", translation: "Agradável / Legal" },
        { topic: "Adjectives", term: "happy", definition: "Feeling or showing pleasure or contentment.", translation: "Feliz" },
        { topic: "Adjectives", term: "single", definition: "Unmarried or not involved in a stable romantic relationship.", translation: "Solteiro(a)" },
        { topic: "Adjectives", term: "married", definition: "Joined in marriage.", translation: "Casado(a)" },
        { topic: "Basics", term: "hello", definition: "Used as a greeting.", translation: "Olá" },
        { topic: "Basics", term: "goodbye", definition: "Used to express good wishes when parting.", translation: "Adeus / Tchau" },
        { topic: "Basics", term: "later", definition: "At a time in the near future.", translation: "Mais tarde / Depois" },

        // 3A: Expressions
        { topic: "Expressions", term: "good-morning", definition: "A formal greeting used before noon.", translation: "Bom dia!" },
        { topic: "Expressions", term: "how-going", definition: "An informal way to ask how someone is doing.", translation: "Como vão as coisas?" },
        { topic: "Expressions", term: "how-doing", definition: "A standard way to ask about someone's well-being.", translation: "Como você está?" },
        { topic: "Expressions", term: "whats-up", definition: "A very casual greeting asking what is happening.", translation: "E aí?" },
        { topic: "Expressions", term: "long-time", definition: "A phrase used when you haven't seen someone for a long time.", translation: "Quanto tempo não te vejo." },
        { topic: "Expressions", term: "have-nice-day", definition: "A polite farewell wishing someone a good day.", translation: "Tenha um bom dia." },
        { topic: "Expressions", term: "see-you-later", definition: "An informal farewell indicating you will meet again.", translation: "Te vejo mais tarde." },
        { topic: "Expressions", term: "take-care", definition: "A polite farewell telling someone to stay safe.", translation: "Cuide-se." },
        { topic: "Expressions", term: "my-name-is", definition: "A standard way to introduce yourself.", translation: "Meu nome é..." },
        { topic: "Expressions", term: "nice-to-meet", definition: "A polite response after someone introduces themselves.", translation: "Prazer em conhecê-lo." },
        { topic: "Expressions", term: "let-me-introduce", definition: "A formal way to start introducing yourself.", translation: "Deixe-me me apresentar." },
        { topic: "Expressions", term: "this-is-friend", definition: "A phrase used to introduce another person.", translation: "Este é meu amigo." },
        { topic: "Expressions", term: "was-nice-meeting", definition: "A polite phrase used when ending a conversation with someone new.", translation: "Foi um prazer conhecê-lo." },
        { topic: "Expressions", term: "whats-name", definition: "Asking for a person's identity.", translation: "Qual é o seu nome?" },
        { topic: "Expressions", term: "where-from", definition: "Asking for a person's country or city of origin.", translation: "De onde você é?" },
        { topic: "Expressions", term: "how-old", definition: "Asking for a person's age.", translation: "Quantos anos você tem?" },
        { topic: "Expressions", term: "what-do-living", definition: "Asking about a person's job or profession.", translation: "O que você faz da vida?" },
        { topic: "Expressions", term: "could-repeat", definition: "A polite way to ask someone to say something again.", translation: "Você poderia repetir isso?" },

        // Additional Context Words Used in Texts/Intros
        { topic: "Context", term: "setting", definition: "The place or type of surroundings where something is positioned or where an event takes place.", translation: "Ambiente / Cenário" },
        { topic: "Context", term: "profession", definition: "A paid occupation, especially one that involves prolonged training and a formal qualification.", translation: "Profissão" },
        { topic: "Context", term: "conversation", definition: "A talk, especially an informal one, between two or more people.", translation: "Conversa" },
        { topic: "Context", term: "ask", definition: "To say something in order to obtain an answer or some information.", translation: "Perguntar" },
        { topic: "Context", term: "live", definition: "To make one's home in a particular place.", translation: "Viver / Morar" },
        { topic: "Context", term: "work", definition: "To do a job, especially for money.", translation: "Trabalhar" },
        { topic: "Context", term: "meet", definition: "To come into the presence or company of someone.", translation: "Conhecer / Encontrar" },
        { topic: "Context", term: "keep-in-touch", definition: "To maintain communication with someone.", translation: "Manter contato" },
        { topic: "Context", term: "living", definition: "An income sufficient to live on or the means of earning it.", translation: "Sustento / Meio de vida" }
    ]
});