/**
 * English Block Assembling - LESSON DATA: Topic 31
 * Topic: Personal Development
 * Level: Upper A2 ~ Lower B1
 */

window.initLesson({
    // --- METADATA ---
    lessonId: "lesson-31",
    block: "5",
    topicTitle: "Personal Development",

    steps:[
        // ======================================================
        // STEP 0: INTRO & CAN-DO
        // ======================================================
        {
            title: "Intro & Can-Do",
            objectives: "• Discuss self-[improvement](tooltip:improvement) and ways to build your[confidence](tooltip:confidence).<br>• Learn how to properly set a [goal](tooltip:goal) and track your [progress](tooltip:progress).<br>• Talk about [mental health](tooltip:mental-health) and ways to [manage](tooltip:manage) daily stress.<br>• Use vocabulary related to [mindfulness](tooltip:mindfulness), habits, and [well-being](tooltip:well-being).",
            welcome: "Welcome to Lesson 31! Working on yourself is a lifelong journey. In this lesson, we will focus on the vocabulary needed to talk about personal growth, setting realistic goals, and developing positive new habits. You will also learn how to discuss mental health, stress management, and the importance of a healthy work-life balance. Let's start improving!",
            audio: {
                objectives: "TTS: In this lesson, you will learn to: Discuss self-improvement and ways to build your confidence. Learn how to properly set a goal and track your progress. Talk about mental health and ways to manage daily stress. Use vocabulary related to mindfulness, habits, and well-being.",
                welcome: "TTS: Welcome to Lesson 31! Working on yourself is a lifelong journey. In this lesson, we will focus on the vocabulary needed to talk about personal growth, setting realistic goals, and developing positive new habits. You will also learn how to discuss mental health, stress management, and the importance of a healthy work-life balance. Let's start improving!"
            }
        },

        // ======================================================
        // STEP 1: CONTEXT DIALOGUE
        // ======================================================
        {
            title: "Context Dialogue",
            context: "Emma is feeling a bit stuck in her routine and talks to her friend Liam about making some positive changes.",
            contextAudio: "TTS: Emma: I've been feeling a bit stuck lately. I want to work on my personal development, but I don't know where to start. Liam: I understand. Maybe you could start by setting a goal for yourself. Make sure it is specific and realistic. Emma: Like what? Liam: Well, you can learn a new skill or develop a new hobby. For example, I started learning Spanish online using an app. Emma: I've always wanted to learn photography. It would definitely help me step out of my comfort zone. Liam: That's a perfect idea! Achieving that short-term goal will help you build your confidence. Emma: Thanks, Liam. I also need to focus on my well-being and manage stress better. Liam: Taking care of your mental health is crucial. You should practice mindfulness and try to relax more. Emma: You are right. I need a healthy work-life balance. I feel more motivated already!",
            dialogue:[
                { speaker: "Emma", text: "I've been feeling a bit stuck lately. I want to work on my personal [development](tooltip:development), but I don't know where to start." },
                { speaker: "Liam", text: "I understand. Maybe you could start by [setting a goal](tooltip:set-goal) for yourself. Make sure it is [specific](tooltip:specific) and [realistic](tooltip:realistic)." },
                { speaker: "Emma", text: "Like what?" },
                { speaker: "Liam", text: "Well, you can [learn a new skill](tooltip:learn-skill) or[develop a new hobby](tooltip:develop-hobby). For example, I started learning Spanish online using an app." },
                { speaker: "Emma", text: "I've always wanted to learn photography. It would definitely help me [step out of my comfort zone](tooltip:comfort-zone)." },
                { speaker: "Liam", text: "That's a perfect idea![Achieving](tooltip:achieve) that [short-term goal](tooltip:short-term) will help you [build your confidence](tooltip:build-confidence)." },
                { speaker: "Emma", text: "Thanks, Liam. I also need to [focus](tooltip:focus) on my [well-being](tooltip:well-being) and[manage stress](tooltip:manage-stress) better." },
                { speaker: "Liam", text: "[Taking care of your mental health](tooltip:mental-health) is crucial. You should [practice mindfulness](tooltip:practice-mindfulness) and try to [relax](tooltip:relax) more." },
                { speaker: "Emma", text: "You are right. I need a [healthy work-life balance](tooltip:work-life-balance). I feel more[motivated](tooltip:motivated) already!" }
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
                    title: "Nouns (Concepts & Well-being)",
                    audio: "TTS: Development. Improvement. Progress. Goal. Skill. Well-being. Mindfulness. Meditation. Stress. Confidence. Motivation. Habit.",
                    items:[
                        { term: "Development", trans: "Desenvolvimento" },
                        { term: "Improvement", trans: "Melhoria" },
                        { term: "Progress", trans: "Progresso" },
                        { term: "Goal", trans: "Meta / Objetivo" },
                        { term: "Skill", trans: "Habilidade" },
                        { term: "Well-being", trans: "Bem-estar" },
                        { term: "Mindfulness", trans: "Atenção plena (Mindfulness)" },
                        { term: "Meditation", trans: "Meditação" },
                        { term: "Stress", trans: "Estresse" },
                        { term: "Confidence", trans: "Confiança" },
                        { term: "Motivation", trans: "Motivação" },
                        { term: "Habit", trans: "Hábito" }
                    ]
                },
                {
                    title: "Verbs (Growth & Management)",
                    audio: "TTS: To improve. To develop. To grow. To learn. To set. To achieve. To accomplish. To plan. To manage. To encourage. To focus. To relax.",
                    items:[
                        { term: "To improve", trans: "Melhorar" },
                        { term: "To develop", trans: "Desenvolver" },
                        { term: "To grow", trans: "Crescer" },
                        { term: "To learn", trans: "Aprender" },
                        { term: "To set", trans: "Definir (uma meta)" },
                        { term: "To achieve", trans: "Alcançar" },
                        { term: "To accomplish", trans: "Realizar / Cumprir" },
                        { term: "To plan", trans: "Planejar" },
                        { term: "To manage", trans: "Gerenciar / Lidar com" },
                        { term: "To encourage", trans: "Encorajar / Incentivar" },
                        { term: "To focus", trans: "Focar / Concentrar-se" },
                        { term: "To relax", trans: "Relaxar" }
                    ]
                },
                {
                    title: "Adjectives (States & Traits)",
                    audio: "TTS: Personal. Professional. Motivated. Confident. Positive. Stressed. Anxious. Healthy. Balanced. Achievable. Realistic. Specific.",
                    items:[
                        { term: "Personal", trans: "Pessoal" },
                        { term: "Professional", trans: "Profissional" },
                        { term: "Motivated", trans: "Motivado(a)" },
                        { term: "Confident", trans: "Confiante" },
                        { term: "Positive", trans: "Positivo(a)" },
                        { term: "Stressed", trans: "Estressado(a)" },
                        { term: "Anxious", trans: "Ansioso(a)" },
                        { term: "Healthy", trans: "Saudável" },
                        { term: "Balanced", trans: "Equilibrado(a)" },
                        { term: "Achievable", trans: "Alcançável" },
                        { term: "Realistic", trans: "Realista" },
                        { term: "Specific", trans: "Específico(a)" }
                    ]
                }
            ],

            // --- 2B: EXAMPLES ---
            exampleGroups:[
                {
                    title: "Nouns (Concepts & Well-being)",
                    audio: "TTS: Personal development is a lifelong journey. There is room for improvement in your writing. You are making great progress in your studies. My main goal this year is to read more. Coding is a very useful skill to have. Sleep is essential for your overall well-being. Mindfulness helps you stay in the present moment. Daily meditation can calm your mind. Work is causing me a lot of stress lately. Winning the award gave her a lot of confidence. I lost my motivation to exercise. Drinking water every morning is a good habit.",
                    items:[
                        { term: "Development", sent: "Personal development is a lifelong journey.", trans: "O desenvolvimento pessoal é uma jornada para a vida toda." },
                        { term: "Improvement", sent: "There is room for improvement in your writing.", trans: "Há espaço para melhoria na sua escrita." },
                        { term: "Progress", sent: "You are making great progress in your studies.", trans: "Você está fazendo um ótimo progresso nos seus estudos." },
                        { term: "Goal", sent: "My main goal this year is to read more.", trans: "Minha meta principal este ano é ler mais." },
                        { term: "Skill", sent: "Coding is a very useful skill to have.", trans: "Programar é uma habilidade muito útil para se ter." },
                        { term: "Well-being", sent: "Sleep is essential for your overall well-being.", trans: "O sono é essencial para o seu bem-estar geral." },
                        { term: "Mindfulness", sent: "Mindfulness helps you stay in the present moment.", trans: "A atenção plena ajuda você a permanecer no momento presente." },
                        { term: "Meditation", sent: "Daily meditation can calm your mind.", trans: "A meditação diária pode acalmar a sua mente." },
                        { term: "Stress", sent: "Work is causing me a lot of stress lately.", trans: "O trabalho está me causando muito estresse ultimamente." },
                        { term: "Confidence", sent: "Winning the award gave her a lot of confidence.", trans: "Ganhar o prêmio deu a ela muita confiança." },
                        { term: "Motivation", sent: "I lost my motivation to exercise.", trans: "Perdi minha motivação para me exercitar." },
                        { term: "Habit", sent: "Drinking water every morning is a good habit.", trans: "Beber água toda manhã é um bom hábito." }
                    ]
                },
                {
                    title: "Verbs (Growth & Management)",
                    audio: "TTS: I read books to improve my vocabulary. It takes time to develop a new habit. Plants need sunlight to grow. I want to learn how to play the piano. You should set a deadline for your project. She worked hard to achieve success. He finally accomplished his biggest dream. Let's plan our trip for next summer. It is difficult to manage a large team. My parents always encourage me to do my best. I need quiet space to focus on my work. Listen to some music to relax your mind.",
                    items:[
                        { term: "To improve", sent: "I read books to improve my vocabulary.", trans: "Eu leio livros para melhorar meu vocabulário." },
                        { term: "To develop", sent: "It takes time to develop a new habit.", trans: "Leva tempo para desenvolver um novo hábito." },
                        { term: "To grow", sent: "Plants need sunlight to grow.", trans: "As plantas precisam de luz solar para crescer." },
                        { term: "To learn", sent: "I want to learn how to play the piano.", trans: "Quero aprender a tocar piano." },
                        { term: "To set", sent: "You should set a deadline for your project.", trans: "Você deve definir um prazo para o seu projeto." },
                        { term: "To achieve", sent: "She worked hard to achieve success.", trans: "Ela trabalhou duro para alcançar o sucesso." },
                        { term: "To accomplish", sent: "He finally accomplished his biggest dream.", trans: "Ele finalmente realizou seu maior sonho." },
                        { term: "To plan", sent: "Let's plan our trip for next summer.", trans: "Vamos planejar nossa viagem para o próximo verão." },
                        { term: "To manage", sent: "It is difficult to manage a large team.", trans: "É difícil gerenciar uma equipe grande." },
                        { term: "To encourage", sent: "My parents always encourage me to do my best.", trans: "Meus pais sempre me encorajam a dar o meu melhor." },
                        { term: "To focus", sent: "I need quiet space to focus on my work.", trans: "Preciso de um espaço silencioso para focar no meu trabalho." },
                        { term: "To relax", sent: "Listen to some music to relax your mind.", trans: "Ouça um pouco de música para relaxar sua mente." }
                    ]
                },
                {
                    title: "Adjectives (States & Traits)",
                    audio: "TTS: This journal is for my personal thoughts. Please maintain a professional attitude at work. She is highly motivated to win the race. I am confident that we will pass the test. Try to keep a positive mindset. He feels stressed because of the deadline. Waiting for the results makes me anxious. Eating vegetables is part of a healthy diet. You need a balanced life to be truly happy. Make sure your targets are achievable. Running a marathon tomorrow is not realistic. We need specific instructions to build the machine.",
                    items:[
                        { term: "Personal", sent: "This journal is for my personal thoughts.", trans: "Este diário é para meus pensamentos pessoais." },
                        { term: "Professional", sent: "Please maintain a professional attitude at work.", trans: "Por favor, mantenha uma atitude profissional no trabalho." },
                        { term: "Motivated", sent: "She is highly motivated to win the race.", trans: "Ela está altamente motivada para vencer a corrida." },
                        { term: "Confident", sent: "I am confident that we will pass the test.", trans: "Estou confiante de que vamos passar no teste." },
                        { term: "Positive", sent: "Try to keep a positive mindset.", trans: "Tente manter uma mentalidade positiva." },
                        { term: "Stressed", sent: "He feels stressed because of the deadline.", trans: "Ele se sente estressado por causa do prazo." },
                        { term: "Anxious", sent: "Waiting for the results makes me anxious.", trans: "Esperar pelos resultados me deixa ansioso." },
                        { term: "Healthy", sent: "Eating vegetables is part of a healthy diet.", trans: "Comer vegetais faz parte de uma dieta saudável." },
                        { term: "Balanced", sent: "You need a balanced life to be truly happy.", trans: "Você precisa de uma vida equilibrada para ser verdadeiramente feliz." },
                        { term: "Achievable", sent: "Make sure your targets are achievable.", trans: "Certifique-se de que seus alvos sejam alcançáveis." },
                        { term: "Realistic", sent: "Running a marathon tomorrow is not realistic.", trans: "Correr uma maratona amanhã não é realista." },
                        { term: "Specific", sent: "We need specific instructions to build the machine.", trans: "Precisamos de instruções específicas para construir a máquina." }
                    ]
                }
            ],

            // --- 2C: PRACTICE ---
            drillGroups:[
                {
                    title: "Nouns (Concepts & Well-being)",
                    drills:[
                        { q: "The process of developing or being developed is ________.", options:[{t: "Habit", c: false}, {t: "Development", c: true}, {t: "Meditation", c: false}, {t: "Goal", c: false}], type: "mcq" },
                        { q: "An example or instance of making something better is an ________.", options:[{t: "Improvement", c: true}, {t: "Stress", c: false}, {t: "Skill", c: false}, {t: "Confidence", c: false}], type: "mcq" },
                        { q: "Forward or onward movement toward a destination or goal is ________.", options:[{t: "Progress", c: true}, {t: "Mindfulness", c: false}, {t: "Habit", c: false}, {t: "Meditation", c: false}], type: "mcq" },
                        { q: "The object of a person's ambition or effort; an aim or desired result is a ________.", options:[{t: "Goal", c: true}, {t: "Stress", c: false}, {t: "Well-being", c: false}, {t: "Improvement", c: false}], type: "mcq" },
                        { q: "The ability to do something well; expertise is a ________.", options:[{t: "Confidence", c: false}, {t: "Skill", c: true}, {t: "Motivation", c: false}, {t: "Progress", c: false}], type: "mcq" },
                        { q: "The state of being comfortable, healthy, or happy is ________.", options:[{t: "Development", c: false}, {t: "Goal", c: false}, {t: "Well-being", c: true}, {t: "Stress", c: false}], type: "mcq" },
                        { q: "A mental state achieved by focusing one's awareness on the present moment is ________.", options:[{t: "Mindfulness", c: true}, {t: "Habit", c: false}, {t: "Progress", c: false}, {t: "Skill", c: false}], type: "mcq" },
                        { q: "The action or practice of meditating to relax and focus the mind is ________.", options:[{t: "Motivation", c: false}, {t: "Meditation", c: true}, {t: "Stress", c: false}, {t: "Goal", c: false}], type: "mcq" },
                        { q: "A state of mental or emotional strain or tension resulting from adverse circumstances is ________.", options:[{t: "Stress", c: true}, {t: "Well-being", c: false}, {t: "Confidence", c: false}, {t: "Development", c: false}], type: "mcq" },
                        { q: "The feeling or belief that one can rely on someone or something; firm trust in oneself is ________.", options:[{t: "Mindfulness", c: false}, {t: "Confidence", c: true}, {t: "Habit", c: false}, {t: "Meditation", c: false}], type: "mcq" },
                        { q: "The reason or reasons one has for acting or behaving in a particular way is ________.", options:[{t: "Motivation", c: true}, {t: "Stress", c: false}, {t: "Skill", c: false}, {t: "Improvement", c: false}], type: "mcq" },
                        { q: "A settled or regular tendency or practice, especially one that is hard to give up, is a ________.", options:[{t: "Habit", c: true}, {t: "Progress", c: false}, {t: "Goal", c: false}, {t: "Well-being", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Verbs (Growth & Management)",
                    drills:[
                        { q: "To make or become better is ________.", options:[{t: "To learn", c: false}, {t: "To improve", c: true}, {t: "To set", c: false}, {t: "To relax", c: false}], type: "mcq" },
                        { q: "To grow or cause to grow and become more mature, advanced, or elaborate is ________.", options:[{t: "To develop", c: true}, {t: "To accomplish", c: false}, {t: "To manage", c: false}, {t: "To plan", c: false}], type: "mcq" },
                        { q: "To undergo natural development by increasing in size and changing physically is ________.", options:[{t: "To grow", c: true}, {t: "To set", c: false}, {t: "To learn", c: false}, {t: "To focus", c: false}], type: "mcq" },
                        { q: "To acquire knowledge of or skill in something by study, experience, or being taught is ________.", options:[{t: "To relax", c: false}, {t: "To learn", c: true}, {t: "To encourage", c: false}, {t: "To improve", c: false}], type: "mcq" },
                        { q: "To fix or establish (a goal or deadline) is ________.", options:[{t: "To set", c: true}, {t: "To accomplish", c: false}, {t: "To manage", c: false}, {t: "To grow", c: false}], type: "mcq" },
                        { q: "To successfully bring about or reach (a desired objective or result) by effort is ________.", options:[{t: "To encourage", c: false}, {t: "To focus", c: false}, {t: "To achieve", c: true}, {t: "To plan", c: false}], type: "mcq" },
                        { q: "To achieve or complete successfully (often a task) is ________.", options:[{t: "To relax", c: false}, {t: "To accomplish", c: true}, {t: "To learn", c: false}, {t: "To set", c: false}], type: "mcq" },
                        { q: "To decide on and arrange in advance is ________.", options:[{t: "To plan", c: true}, {t: "To grow", c: false}, {t: "To encourage", c: false}, {t: "To improve", c: false}], type: "mcq" },
                        { q: "To be in charge of (a company, establishment, or undertaking) is ________.", options:[{t: "To set", c: false}, {t: "To manage", c: true}, {t: "To learn", c: false}, {t: "To accomplish", c: false}], type: "mcq" },
                        { q: "To give support, confidence, or hope to someone is ________.", options:[{t: "To encourage", c: true}, {t: "To focus", c: false}, {t: "To relax", c: false}, {t: "To develop", c: false}], type: "mcq" },
                        { q: "To pay particular attention to is ________.", options:[{t: "To focus", c: true}, {t: "To improve", c: false}, {t: "To plan", c: false}, {t: "To grow", c: false}], type: "mcq" },
                        { q: "To rest from work or engage in an enjoyable activity so as to become less tired is ________.", options:[{t: "To relax", c: true}, {t: "To achieve", c: false}, {t: "To manage", c: false}, {t: "To set", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Adjectives (States & Traits)",
                    drills:[
                        { q: "Of, affecting, or belonging to a particular person rather than to anyone else is ________.", options:[{t: "Professional", c: false}, {t: "Personal", c: true}, {t: "Specific", c: false}, {t: "Achievable", c: false}], type: "mcq" },
                        { q: "Relating to or belonging to a profession is ________.", options:[{t: "Professional", c: true}, {t: "Balanced", c: false}, {t: "Anxious", c: false}, {t: "Healthy", c: false}], type: "mcq" },
                        { q: "Provided with a motive; highly driven to do something is ________.", options:[{t: "Motivated", c: true}, {t: "Stressed", c: false}, {t: "Realistic", c: false}, {t: "Anxious", c: false}], type: "mcq" },
                        { q: "Feeling or showing confidence in oneself; self-assured is ________.", options:[{t: "Confident", c: true}, {t: "Personal", c: false}, {t: "Specific", c: false}, {t: "Healthy", c: false}], type: "mcq" },
                        { q: "Constructive, optimistic, or confident is ________.", options:[{t: "Positive", c: true}, {t: "Stressed", c: false}, {t: "Anxious", c: false}, {t: "Professional", c: false}], type: "mcq" },
                        { q: "Experiencing mental or emotional strain or tension is ________.", options:[{t: "Balanced", c: false}, {t: "Achievable", c: false}, {t: "Stressed", c: true}, {t: "Motivated", c: false}], type: "mcq" },
                        { q: "Experiencing worry, unease, or nervousness is ________.", options:[{t: "Anxious", c: true}, {t: "Confident", c: false}, {t: "Positive", c: false}, {t: "Realistic", c: false}], type: "mcq" },
                        { q: "In a good physical or mental condition is ________.", options:[{t: "Healthy", c: true}, {t: "Specific", c: false}, {t: "Stressed", c: false}, {t: "Personal", c: false}], type: "mcq" },
                        { q: "Keeping or showing a balance; arranged in good proportions is ________.", options:[{t: "Balanced", c: true}, {t: "Anxious", c: false}, {t: "Achievable", c: false}, {t: "Motivated", c: false}], type: "mcq" },
                        { q: "Able to be brought about or reached successfully is ________.", options:[{t: "Achievable", c: true}, {t: "Stressed", c: false}, {t: "Professional", c: false}, {t: "Confident", c: false}], type: "mcq" },
                        { q: "Having or showing a sensible and practical idea of what can be achieved or expected is ________.", options:[{t: "Realistic", c: true}, {t: "Anxious", c: false}, {t: "Personal", c: false}, {t: "Positive", c: false}], type: "mcq" },
                        { q: "Clearly defined or identified is ________.", options:[{t: "Specific", c: true}, {t: "Healthy", c: false}, {t: "Balanced", c: false}, {t: "Stressed", c: false}], type: "mcq" }
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
                    title: "Self-Improvement",
                    audio: "TTS: Work on yourself. Learn a new skill. Step out of your comfort zone. Develop a new hobby. Build your confidence. Improve your communication skills.",
                    explanation: "Phrases to talk about personal growth and trying new challenges to better yourself.<br><span style='color:var(--primary-blue); font-style:italic;'>(Frases para falar sobre crescimento pessoal e tentar novos desafios para melhorar a si mesmo.)</span>",
                    samples:[
                        { en: "It is important to <b>work on yourself</b> every day.", pt: "<span style='color:var(--primary-blue)'>(É importante trabalhar em si mesmo todos os dias.)</span>" },
                        { en: "I want to <b>learn a new skill</b> this year, like coding.", pt: "<span style='color:var(--primary-blue)'>(Quero aprender uma nova habilidade este ano, como programar.)</span>" },
                        { en: "You must <b>step out of your comfort zone</b> to grow.", pt: "<span style='color:var(--primary-blue)'>(Você deve sair da sua zona de conforto para crescer.)</span>" },
                        { en: "I decided to <b>develop a new hobby</b> to relax.", pt: "<span style='color:var(--primary-blue)'>(Decidi desenvolver um novo hobby para relaxar.)</span>" },
                        { en: "Public speaking will help <b>build your confidence</b>.", pt: "<span style='color:var(--primary-blue)'>(Falar em público ajudará a construir sua confiança.)</span>" },
                        { en: "Reading books can <b>improve your communication skills</b>.", pt: "<span style='color:var(--primary-blue)'>(Ler livros pode melhorar suas habilidades de comunicação.)</span>" }
                    ]
                },
                {
                    title: "Setting Goals",
                    audio: "TTS: Set a goal for yourself. A short-term goal. A long-term goal. Make a plan. Track your progress. Achieve your goals.",
                    explanation: "Vocabulary for defining what you want to accomplish and mapping out the steps to get there.<br><span style='color:var(--primary-blue); font-style:italic;'>(Vocabulário para definir o que você deseja realizar e mapear as etapas para chegar lá.)</span>",
                    samples:[
                        { en: "You should <b>set a goal for yourself</b> to stay motivated.", pt: "<span style='color:var(--primary-blue)'>(Você deve definir uma meta para si mesmo para se manter motivado.)</span>" },
                        { en: "Losing two kilos is <b>a short-term goal</b>.", pt: "<span style='color:var(--primary-blue)'>(Perder dois quilos é uma meta de curto prazo.)</span>" },
                        { en: "Buying a house is <b>a long-term goal</b>.", pt: "<span style='color:var(--primary-blue)'>(Comprar uma casa é uma meta de longo prazo.)</span>" },
                        { en: "To succeed, you need to <b>make a plan</b>.", pt: "<span style='color:var(--primary-blue)'>(Para ter sucesso, você precisa fazer um plano.)</span>" },
                        { en: "Use a journal to <b>track your progress</b>.", pt: "<span style='color:var(--primary-blue)'>(Use um diário para acompanhar seu progresso.)</span>" },
                        { en: "Hard work helps you <b>achieve your goals</b>.", pt: "<span style='color:var(--primary-blue)'>(Trabalho duro ajuda você a alcançar suas metas.)</span>" }
                    ]
                },
                {
                    title: "Mental Health & Mindfulness",
                    audio: "TTS: Take care of your mental health. Manage stress. Practice mindfulness. Live in the moment. A healthy work-life balance. Take time for yourself.",
                    explanation: "Expressions focused on well-being, reducing anxiety, and finding balance in your daily life.<br><span style='color:var(--primary-blue); font-style:italic;'>(Expressões focadas no bem-estar, em reduzir a ansiedade e em encontrar equilíbrio na sua vida diária.)</span>",
                    samples:[
                        { en: "You must <b>take care of your mental health</b>.", pt: "<span style='color:var(--primary-blue)'>(Você deve cuidar da sua saúde mental.)</span>" },
                        { en: "Meditation is a great way to <b>manage stress</b>.", pt: "<span style='color:var(--primary-blue)'>(A meditação é uma ótima maneira de gerenciar o estresse.)</span>" },
                        { en: "I try to <b>practice mindfulness</b> every morning.", pt: "<span style='color:var(--primary-blue)'>(Tento praticar a atenção plena todas as manhãs.)</span>" },
                        { en: "Stop worrying about the future and <b>live in the moment</b>.", pt: "<span style='color:var(--primary-blue)'>(Pare de se preocupar com o futuro e viva o momento.)</span>" },
                        { en: "She finally found <b>a healthy work-life balance</b>.", pt: "<span style='color:var(--primary-blue)'>(Ela finalmente encontrou um equilíbrio saudável entre vida pessoal e profissional.)</span>" },
                        { en: "When you are tired, you should <b>take time for yourself</b>.", pt: "<span style='color:var(--primary-blue)'>(Quando estiver cansado, você deve tirar um tempo para si mesmo.)</span>" }
                    ]
                }
            ],

            // --- 3B: DIALOGUES ---
            dialogueGroups:[
                {
                    title: "Dialogue 1: Personal Growth",
                    audio: "TTS: I feel like I need to work on myself. That's good. You should step out of your comfort zone. I know. I want to try public speaking to build my confidence.",
                    lines:[
                        { speaker: "Anna", text: "I feel like I need to work on myself.", pt: "(Sinto que preciso trabalhar em mim mesma.)" },
                        { speaker: "Tom", text: "That's good. You should step out of your comfort zone.", pt: "(Isso é bom. Você deveria sair da sua zona de conforto.)" },
                        { speaker: "Anna", text: "I know. I want to try public speaking to build my confidence.", pt: "(Eu sei. Quero tentar falar em público para construir minha confiança.)" }
                    ]
                },
                {
                    title: "Dialogue 2: New Interests",
                    audio: "TTS: I really want to learn a new skill. Why don't you develop a new hobby, like painting? That could be fun. But I also need to improve my communication skills for work.",
                    lines:[
                        { speaker: "Mark", text: "I really want to learn a new skill.", pt: "(Eu realmente quero aprender uma nova habilidade.)" },
                        { speaker: "Lisa", text: "Why don't you develop a new hobby, like painting?", pt: "(Por que você não desenvolve um novo hobby, como pintura?)" },
                        { speaker: "Mark", text: "That could be fun. But I also need to improve my communication skills for work.", pt: "(Isso pode ser divertido. Mas também preciso melhorar minhas habilidades de comunicação para o trabalho.)" }
                    ]
                },
                {
                    title: "Dialogue 3: Goal Setting",
                    audio: "TTS: You should always set a goal for yourself. I agree. Right now, passing my exam is a short-term goal. Good. And what is a long-term goal you have? I want to open my own business.",
                    lines:[
                        { speaker: "David", text: "You should always set a goal for yourself.", pt: "(Você deve sempre definir uma meta para si mesmo.)" },
                        { speaker: "Chloe", text: "I agree. Right now, passing my exam is a short-term goal.", pt: "(Eu concordo. No momento, passar no meu exame é uma meta de curto prazo.)" },
                        { speaker: "David", text: "Good. And what is a long-term goal you have? I want to open my own business.", pt: "(Bom. E qual é uma meta de longo prazo que você tem? Eu quero abrir meu próprio negócio.)" } // Logic fix needed
                    ]
                },
                {
                    title: "Dialogue 3: Goal Setting", // Fixed
                    audio: "TTS: You should always set a goal for yourself. I agree. Right now, passing my exam is a short-term goal. Good. And what is a long-term goal you have? I want to open my own business.",
                    lines:[
                        { speaker: "David", text: "You should always set a goal for yourself.", pt: "(Você deve sempre definir uma meta para si mesmo.)" },
                        { speaker: "Chloe", text: "I agree. Right now, passing my exam is a short-term goal.", pt: "(Eu concordo. No momento, passar no meu exame é uma meta de curto prazo.)" },
                        { speaker: "David", text: "Good. And what is a long-term goal you have?", pt: "(Bom. E qual é uma meta de longo prazo que você tem?)" },
                        { speaker: "Chloe", text: "I want to open my own business.", pt: "(Eu quero abrir meu próprio negócio.)" } // Max 2 speakers, perfect. Wait, the rule is exactly 2 characters. The number of lines can be 2 to 4. I'll stick to 3 or 4.
                    ]
                },
                {
                    title: "Dialogue 4: Executing Plans",
                    audio: "TTS: If you want to succeed, you need to make a plan. I did. I use an app to track my progress every day. Excellent. That is the best way to achieve your goals.",
                    lines:[
                        { speaker: "Coach", text: "If you want to succeed, you need to make a plan.", pt: "(Se você quer ter sucesso, precisa fazer um plano.)" },
                        { speaker: "Client", text: "I did. I use an app to track my progress every day.", pt: "(Eu fiz. Eu uso um aplicativo para acompanhar meu progresso todos os dias.)" },
                        { speaker: "Coach", text: "Excellent. That is the best way to achieve your goals.", pt: "(Excelente. Essa é a melhor maneira de alcançar suas metas.)" }
                    ]
                },
                {
                    title: "Dialogue 5: Stress & Balance",
                    audio: "TTS: I feel so anxious. You really need to take care of your mental health. I know. I just don't know how to manage stress well. You need to find a healthy work-life balance and rest more.",
                    lines:[
                        { speaker: "Emma", text: "I feel so anxious. You really need to take care of your mental health.", pt: "(Me sinto tão ansiosa. Você realmente precisa cuidar da sua saúde mental.)" }, // Logic fix
                        { speaker: "John", text: "I know. I just don't know how to manage stress well. You need to find a healthy work-life balance and rest more.", pt: "(Eu sei. Eu só não sei como gerenciar bem o estresse. Você precisa encontrar um equilíbrio saudável entre vida pessoal e profissional e descansar mais.)" }
                    ]
                },
                {
                    title: "Dialogue 5: Stress & Balance", // Fixed logic
                    audio: "TTS: I feel so anxious lately. You really need to take care of your mental health. I know. I just don't know how to manage stress well. You need to find a healthy work-life balance.",
                    lines:[
                        { speaker: "Emma", text: "I feel so anxious lately.", pt: "(Me sinto tão ansiosa ultimamente.)" },
                        { speaker: "John", text: "You really need to take care of your mental health.", pt: "(Você realmente precisa cuidar da sua saúde mental.)" },
                        { speaker: "Emma", text: "I know. I just don't know how to manage stress well.", pt: "(Eu sei. Só não sei como gerenciar o estresse bem.)" },
                        { speaker: "John", text: "You need to find a healthy work-life balance.", pt: "(Você precisa encontrar um equilíbrio saudável entre trabalho e vida pessoal.)" }
                    ]
                },
                {
                    title: "Dialogue 6: Mindfulness",
                    audio: "TTS: You always seem so calm. How do you do it? I practice mindfulness every morning. It helps a lot. I should try that. I never take time for myself. You definitely should. It teaches you to live in the moment.",
                    lines:[
                        { speaker: "Mia", text: "You always seem so calm. How do you do it?", pt: "(Você sempre parece tão calmo. Como você faz isso?)" },
                        { speaker: "Leo", text: "I practice mindfulness every morning. It helps a lot.", pt: "(Eu pratico atenção plena toda manhã. Ajuda muito.)" },
                        { speaker: "Mia", text: "I should try that. I never take time for myself.", pt: "(Eu deveria tentar isso. Eu nunca tiro um tempo para mim.)" },
                        { speaker: "Leo", text: "You definitely should. It teaches you to live in the moment.", pt: "(Você definitivamente deveria. Isso te ensina a viver o momento.)" }
                    ]
                }
            ],

            // --- 3C: PRACTICE ---
            grammarDrillGroups:[
                {
                    title: "Self-Improvement",
                    drills:[
                        { q: "It is important to work ________ yourself every day.", options:[{t: "on", c: true}, {t: "in", c: false}, {t: "at", c: false}, {t: "to", c: false}], type: "mcq" },
                        { q: "I want to ________ a new skill this year.", options:[{t: "teach", c: false}, {t: "learn", c: true}, {t: "make", c: false}, {t: "do", c: false}], type: "mcq" },
                        { q: "You must step out of your ________ zone to grow.", options:[{t: "safety", c: false}, {t: "comfort", c: true}, {t: "lazy", c: false}, {t: "easy", c: false}], type: "mcq" },
                        { q: "I decided to ________ a new hobby to relax.", options:[{t: "improve", c: false}, {t: "develop", c: true}, {t: "build", c: false}, {t: "grow", c: false}], type: "mcq" },
                        { q: "Public speaking will help ________ your confidence.", options:[{t: "build", c: true}, {t: "make", c: false}, {t: "do", c: false}, {t: "work", c: false}], type: "mcq" },
                        { q: "Reading books can ________ your communication skills.", options:[{t: "improve", c: true}, {t: "build", c: false}, {t: "grow", c: false}, {t: "set", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Setting Goals",
                    drills:[
                        { q: "You should ________ a goal for yourself.", options:[{t: "put", c: false}, {t: "set", c: true}, {t: "make", c: false}, {t: "do", c: false}], type: "mcq" },
                        { q: "Losing two kilos is a ________-term goal.", options:[{t: "short", c: true}, {t: "long", c: false}, {t: "fast", c: false}, {t: "quick", c: false}], type: "mcq" },
                        { q: "Buying a house is a ________-term goal.", options:[{t: "big", c: false}, {t: "short", c: false}, {t: "long", c: true}, {t: "high", c: false}], type: "mcq" },
                        { q: "To succeed, you need to ________ a plan.", options:[{t: "do", c: false}, {t: "make", c: true}, {t: "build", c: false}, {t: "set", c: false}], type: "mcq" },
                        { q: "Use a journal to ________ your progress.", options:[{t: "track", c: true}, {t: "find", c: false}, {t: "look", c: false}, {t: "see", c: false}], type: "mcq" },
                        { q: "Hard work helps you ________ your goals.", options:[{t: "achieve", c: true}, {t: "improve", c: false}, {t: "develop", c: false}, {t: "manage", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Mental Health & Mindfulness",
                    drills:[
                        { q: "You must take ________ of your mental health.", options:[{t: "attention", c: false}, {t: "time", c: false}, {t: "care", c: true}, {t: "mind", c: false}], type: "mcq" },
                        { q: "Meditation is a great way to ________ stress.", options:[{t: "improve", c: false}, {t: "manage", c: true}, {t: "develop", c: false}, {t: "build", c: false}], type: "mcq" },
                        { q: "I try to ________ mindfulness every morning.", options:[{t: "make", c: false}, {t: "do", c: false}, {t: "practice", c: true}, {t: "live", c: false}], type: "mcq" },
                        { q: "Stop worrying about the future and live in the ________.", options:[{t: "time", c: false}, {t: "moment", c: true}, {t: "mind", c: false}, {t: "past", c: false}], type: "mcq" },
                        { q: "She finally found a healthy ________-life balance.", options:[{t: "work", c: true}, {t: "job", c: false}, {t: "stress", c: false}, {t: "time", c: false}], type: "mcq" },
                        { q: "When you are tired, you should take ________ for yourself.", options:[{t: "time", c: true}, {t: "moment", c: false}, {t: "care", c: false}, {t: "health", c: false}], type: "mcq" }
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
                { text: "It is important to work on yourself every day. ↘", audio: "TTS: It is important to work on yourself every day." },
                { text: "You must step out of your comfort zone to grow. ↘", audio: "TTS: You must step out of your comfort zone to grow." },
                { text: "What is a long-term goal you have? ↘", audio: "TTS: What is a long-term goal you have?" },
                { text: "You should set a realistic goal to stay motivated. ↘", audio: "TTS: You should set a realistic goal to stay motivated." },
                { text: "I use a journal to track my progress. ↘", audio: "TTS: I use a journal to track my progress." },
                { text: "Hard work helps you achieve your goals. ↘", audio: "TTS: Hard work helps you achieve your goals." },
                { text: "You really need to take care of your mental health. ↘", audio: "TTS: You really need to take care of your mental health." },
                { text: "How do you manage stress at work? ↘", audio: "TTS: How do you manage stress at work?" },
                { text: "I practice mindfulness to live in the moment. ↘", audio: "TTS: I practice mindfulness to live in the moment." },
                { text: "It is hard to find a healthy work-life balance. ↘", audio: "TTS: It is hard to find a healthy work-life balance." }
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
                    audio: "TTS: John: I want to improve my writing skills. Sarah: That's a great goal. You should make a plan. John: Yes, I will practice every evening to track my progress. Sarah: Building a new habit takes a lot of motivation.",
                    text: "John: I want to [improve] my writing [skills].<br>Sarah: That's a great [goal]. You should make a [plan].<br>John: Yes, I will practice every evening to track my [progress].<br>Sarah: Building a new habit takes a lot of [motivation]."
                },
                {
                    type: "dropdown",
                    instruction: "Listen to the dialogue about mental health.",
                    audio: "TTS: Mark: I am feeling very stressed today. Emma: Have you tried to practice mindfulness? Mark: No, I never have the time to relax. Emma: You should really take time for yourself. It is important.",
                    questions:[
                        { q: "Mark: I am feeling very [stressed* | confident | active] today.", a: "stressed" },
                        { q: "Emma: Have you tried to practice [mindfulness* | confidence | habits]?", a: "mindfulness" },
                        { q: "Mark: No, I never have the time to [relax* | achieve | manage].", a: "relax" },
                        { q: "Emma: You should really take [time* | goals | plans] for yourself. It is important.", a: "time" }
                    ]
                },
                {
                    type: "audio-choice",
                    instruction: "Listen to the speaker. What did she do?",
                    audio: "TTS: I decided to step out of my comfort zone this year. I enrolled in a public speaking course. It was scary at first, but it really helped me build my confidence.",
                    options:[
                        { t: "She bought a new house.", c: false },
                        { t: "She stepped out of her comfort zone to build her confidence.", c: true },
                        { t: "She decided to retire from work.", c: false },
                        { t: "She took a long vacation to manage her stress.", c: false }
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
                    title: "Dialogue - New Year's Resolutions",
                    audio: "TTS: Lisa: What is your main goal for this year? David: I want to work on myself. I plan to learn a new language. Lisa: That is a great short-term goal. How will you achieve it? David: I will study for twenty minutes every day to develop a new habit. Lisa: Tracking your progress daily will help you stay motivated. David: Yes, and stepping out of my comfort zone will build my confidence, too.",
                    body: "<b>Lisa:</b> What is your main [goal](tooltip:goal) for this year?<br><b>David:</b> I want to [work on myself](tooltip:work-on-yourself). I [plan](tooltip:to-plan) to [learn a new skill](tooltip:learn-skill), specifically a language.<br><b>Lisa:</b> That is a great [short-term goal](tooltip:short-term). How will you [achieve](tooltip:to-achieve) it?<br><b>David:</b> I will study for twenty minutes every day to [develop a new hobby](tooltip:develop-hobby) and habit.<br><b>Lisa:</b>[Tracking your progress](tooltip:track-progress) daily will help you stay [motivated](tooltip:motivated).<br><b>David:</b> Yes, and [stepping out of my comfort zone](tooltip:comfort-zone) will[build my confidence](tooltip:build-confidence), too.",
                    questions:[
                        { q: "What is David's short-term goal?", options:[{t: "To buy a house.", c: false}, {t: "To learn a new language.", c: true}, {t: "To manage stress.", c: false}], type: "mcq" },
                        { q: "How does David plan to achieve his goal?", options:[{t: "By studying once a month.", c: false}, {t: "By taking a vacation.", c: false}, {t: "By studying for twenty minutes every day.", c: true}], type: "mcq" },
                        { q: "Why is David doing this?", options:[{t: "To make money.", c: false}, {t: "To step out of his comfort zone and build confidence.", c: true}, {t: "To find a new job.", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Dialogue - Finding Balance",
                    audio: "TTS: Emma: You look exhausted, Tom. Are you okay? Tom: I'm just so stressed out from work. I never relax. Emma: You really need to take care of your mental health. Tom: I know. But it's hard to find a healthy work-life balance. Emma: Have you tried to practice mindfulness or meditation? Tom: No, but I should. I really need to take time for myself and live in the moment.",
                    body: "<b>Emma:</b> You look exhausted, Tom. Are you okay?<br><b>Tom:</b> I'm just so [stressed](tooltip:stressed) out from work. I never [relax](tooltip:to-relax).<br><b>Emma:</b> You really need to [take care of your mental health](tooltip:mental-health).<br><b>Tom:</b> I know. But it's hard to find a[healthy work-life balance](tooltip:work-life-balance).<br><b>Emma:</b> Have you tried to[practice mindfulness](tooltip:practice-mindfulness) or [meditation](tooltip:meditation)?<br><b>Tom:</b> No, but I should. I really need to [take time for myself](tooltip:take-time-yourself) and [live in the moment](tooltip:live-in-moment).",
                    questions:[
                        { q: "Why does Tom look exhausted?", options:[{t: "He is sick.", c: false}, {t: "He exercises too much.", c: false}, {t: "He is stressed from work and never relaxes.", c: true}], type: "mcq" },
                        { q: "What does Emma say Tom needs to take care of?", options:[{t: "His mental health.", c: true}, {t: "His physical health.", c: false}, {t: "His diet.", c: false}], type: "mcq" },
                        { q: "What is Tom going to try to do?", options:[{t: "Take time for himself and live in the moment.", c: true}, {t: "Work more hours.", c: false}, {t: "Get a new job.", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Email - Monthly Check-in",
                    audio: "TTS: Subject: How are your goals? Hi Sarah, I am writing to check on your progress. At the beginning of the year, you set a goal to improve your communication skills. You wanted to make a plan to achieve this long-term goal. Have you been able to manage your time and stay motivated? I want to encourage you to keep trying. Being confident is a very important professional trait. Let's meet next week to chat! Best, Manager.",
                    body: "<b>From: Manager</b><br><b>To: Sarah</b><br>Subject: How are your [goals](tooltip:goal)?<br><br>Hi Sarah,<br>I am writing to check on your [progress](tooltip:progress). At the beginning of the year, you [set a goal](tooltip:set-goal) to[improve your communication skills](tooltip:improve-communication). You wanted to [make a plan](tooltip:make-plan) to [achieve](tooltip:to-achieve) this [long-term goal](tooltip:long-term). Have you been able to [manage](tooltip:to-manage) your time and stay [motivated](tooltip:motivated)? I want to[encourage](tooltip:to-encourage) you to keep trying. Being [confident](tooltip:confident) is a very important [professional](tooltip:professional) trait. Let's meet next week to chat!<br><br>Best, Manager.",
                    questions:[
                        { q: "What goal did Sarah set at the beginning of the year?", options:[{t: "To improve her communication skills.", c: true}, {t: "To lose weight.", c: false}, {t: "To learn a new language.", c: false}], type: "mcq" },
                        { q: "What type of goal is it?", options:[{t: "A short-term goal.", c: false}, {t: "A long-term goal.", c: true}, {t: "An unrealistic goal.", c: false}], type: "mcq" },
                        { q: "What does the manager want to do?", options:[{t: "Fire Sarah.", c: false}, {t: "Encourage her to keep trying.", c: true}, {t: "Cancel the project.", c: false}], type: "mcq" }
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
                    { left: "Development", right: "The process of growing", val: "1" },
                    { left: "Goal", right: "An objective or aim", val: "2" },
                    { left: "Habit", right: "A regular practice or routine", val: "3" },
                    { left: "Mindfulness", right: "Focusing on the present moment", val: "4" }
                ]},
                { type: "matching", instruction: "Match the verbs to their meanings.", pairs:[
                    { left: "To achieve", right: "To successfully reach a goal", val: "1" },
                    { left: "To improve", right: "To make something better", val: "2" },
                    { left: "To encourage", right: "To give support and hope", val: "3" },
                    { left: "To relax", right: "To rest and reduce stress", val: "4" }
                ]},
                { type: "matching", instruction: "Match the adjectives with their opposites.", pairs:[
                    { left: "Confident", right: "Anxious / Insecure", val: "1" },
                    { left: "Motivated", right: "Unmotivated / Lazy", val: "2" },
                    { left: "Realistic", right: "Unrealistic / Impossible", val: "3" },
                    { left: "Positive", right: "Negative", val: "4" }
                ]},
                { type: "matching", instruction: "Match the phrase halves.", pairs:[
                    { left: "Step out of your", right: "comfort zone", val: "1" },
                    { left: "Take care of your", right: "mental health", val: "2" },
                    { left: "A healthy work-life", right: "balance", val: "3" },
                    { left: "Live in", right: "the moment", val: "4" }
                ]},

                // --- WORD ORDER (5-14) ---
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "yourself / on / work / to / important / It's / .", correct: "It's important to work on yourself ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "skill / new / learn / a / I / want / to / .", correct: "I want to learn a new skill ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "zone / out / of / your / comfort / Step / .", correct: "Step out of your comfort zone ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "hobby / a / new / Develop / .", correct: "Develop a new hobby ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "confidence / your / Build / .", correct: "Build your confidence ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "yourself / for / goal / a / Set / .", correct: "Set a goal for yourself ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "plan / a / Make / .", correct: "Make a plan ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "progress / your / Track / .", correct: "Track your progress ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "goals / your / Achieve / .", correct: "Achieve your goals ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "moment / the / in / Live / .", correct: "Live in the moment ." },

                // --- CLICKABLE ERROR (15-24) ---
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "I want to work [in](error:on) myself." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "Step out of your [lazy](error:comfort) zone." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "This will[make](error:build) your confidence." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "You must [put](error:set) a goal for yourself." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "It is a [small](error:short)-term goal." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "I use an app to [look](error:track) my progress." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "Take care of your [brain](error:mental) health." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "I try to [do](error:manage) my stress." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "You should [do](error:practice) mindfulness." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "Take [moment](error:time) for yourself." },

                // --- ODD ONE OUT (25-30) ---
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Positive Concepts)", options:[{t: "Improvement", c: false}, {t: "Development", c: false}, {t: "Progress", c: false}, {t: "Stress", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Verbs for Goals)", options:[{t: "To achieve", c: false}, {t: "To set", c: false}, {t: "To accomplish", c: false}, {t: "To relax", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Mental States)", options:[{t: "Mindfulness", c: false}, {t: "Meditation", c: false}, {t: "Well-being", c: false}, {t: "Skill", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Adjectives)", options:[{t: "Motivated", c: false}, {t: "Confident", c: false}, {t: "Positive", c: false}, {t: "Habit", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Negative States)", options:[{t: "Stressed", c: false}, {t: "Anxious", c: false}, {t: "Tired", c: false}, {t: "Balanced", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Goal Adjectives)", options:[{t: "Realistic", c: false}, {t: "Achievable", c: false}, {t: "Specific", c: false}, {t: "Personal", c: true}] },

                // --- TRUE / FALSE (31-35) ---
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "To 'step out of your comfort zone' means doing things that are familiar and easy.", correct: "false"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "A 'short-term goal' is something you want to achieve very far in the future.", correct: "false"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "If you 'track your progress', you monitor how close you are to your goal.", correct: "true"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "To 'live in the moment' means you are constantly worrying about tomorrow.", correct: "false"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "'Mindfulness' involves focusing your awareness on the present moment.", correct: "true"}] },

                // --- MCQ (36-39) ---
                { type: "mcq", instruction: "Choose the correct phrase.<br>When you decide exactly what you want to achieve, you ________ a goal.", options:[{t: "do", c: false}, {t: "make", c: false}, {t: "set", c: true}, {t: "get", c: false}] },
                { type: "mcq", instruction: "Choose the correct word.<br>I need to find a healthy work-life ________.", options:[{t: "balance", c: true}, {t: "habit", c: false}, {t: "development", c: false}, {t: "stress", c: false}] },
                { type: "mcq", instruction: "Choose the correct verb.<br>If you want to reduce your anxiety, you should learn to ________ your stress.", options:[{t: "build", c: false}, {t: "manage", c: true}, {t: "improve", c: false}, {t: "achieve", c: false}] },
                { type: "mcq", instruction: "Choose the correct phrase.<br>To become better at public speaking, you need to build your ________.", options:[{t: "mindfulness", c: false}, {t: "confidence", c: true}, {t: "plan", c: false}, {t: "meditation", c: false}] },

                // --- CATEGORIZE (40) ---
                { type: "categorize", instruction: "Sort the words into Goal Setting and Mental Health.", 
                    categories:[{id: "goal", name: "Goal Setting"}, {id: "mental", name: "Mental Health"}],
                    items:[
                        {text: "Achieve", catId: "goal"}, 
                        {text: "Progress", catId: "goal"}, 
                        {text: "Plan", catId: "goal"}, 
                        {text: "Stress", catId: "mental"}, 
                        {text: "Mindfulness", catId: "mental"}, 
                        {text: "Meditation", catId: "mental"}
                    ] 
                }
            ]
        },

        // ======================================================
        // STEP 8: WRITING PRACTICE
        // ======================================================
        {
            title: "Writing Practice",
            instruction: "Write a short paragraph (5-7 sentences) about your personal development goals for the year. Mention one short-term goal and one long-term goal. Describe what you are doing to achieve them, and how you take care of your mental health while working hard.",
            example: "This year, I really want to work on myself. My short-term goal is to learn a new skill, so I am taking an online coding class. My long-term goal is to get a promotion at work. I track my progress every week to stay motivated. It is a lot of hard work, so I have to be careful with my mental health. I practice mindfulness in the mornings to manage my stress, and I make sure to maintain a healthy work-life balance.",
            prompts:[
                "State that you want to work on yourself or improve.",
                "Describe a short-term goal (e.g., learn a new skill).",
                "Describe a long-term goal (e.g., get a promotion, buy a house).",
                "Explain how you manage stress (e.g., practice mindfulness, take time for yourself)."
            ]
        },

        // ======================================================
        // STEP 9: FLASHCARDS
        // ======================================================
        {
            title: "Flashcards",
            items:[
                // 2A Items (36 items)
                { term: "Development", definition: "The process of developing or being developed.", defTrans: "Desenvolvimento", example: "Personal development is a lifelong journey.", audioFront: "TTS: Development", audioBack: "TTS: Personal development is a lifelong journey." },
                { term: "Improvement", definition: "An instance of making something better.", defTrans: "Melhoria", example: "There is room for improvement in your writing.", audioFront: "TTS: Improvement", audioBack: "TTS: There is room for improvement in your writing." },
                { term: "Progress", definition: "Forward movement toward a destination or goal.", defTrans: "Progresso", example: "You are making great progress in your studies.", audioFront: "TTS: Progress", audioBack: "TTS: You are making great progress in your studies." },
                { term: "Goal", definition: "The object of a person's ambition; an aim.", defTrans: "Meta / Objetivo", example: "My main goal this year is to read more.", audioFront: "TTS: Goal", audioBack: "TTS: My main goal this year is to read more." },
                { term: "Skill", definition: "The ability to do something well; expertise.", defTrans: "Habilidade", example: "Coding is a very useful skill to have.", audioFront: "TTS: Skill", audioBack: "TTS: Coding is a very useful skill to have." },
                { term: "Well-being", definition: "The state of being comfortable, healthy, or happy.", defTrans: "Bem-estar", example: "Sleep is essential for your overall well-being.", audioFront: "TTS: Well-being", audioBack: "TTS: Sleep is essential for your overall well-being." },
                { term: "Mindfulness", definition: "A mental state achieved by focusing awareness on the present moment.", defTrans: "Atenção plena (Mindfulness)", example: "Mindfulness helps you stay in the present moment.", audioFront: "TTS: Mindfulness", audioBack: "TTS: Mindfulness helps you stay in the present moment." },
                { term: "Meditation", definition: "The practice of thinking deeply in silence for relaxation.", defTrans: "Meditação", example: "Daily meditation can calm your mind.", audioFront: "TTS: Meditation", audioBack: "TTS: Daily meditation can calm your mind." },
                { term: "Stress", definition: "A state of mental or emotional strain.", defTrans: "Estresse", example: "Work is causing me a lot of stress lately.", audioFront: "TTS: Stress", audioBack: "TTS: Work is causing me a lot of stress lately." },
                { term: "Confidence", definition: "The feeling or belief that one can rely on oneself.", defTrans: "Confiança", example: "Winning the award gave her a lot of confidence.", audioFront: "TTS: Confidence", audioBack: "TTS: Winning the award gave her a lot of confidence." },
                { term: "Motivation", definition: "The reason or reasons one has for acting in a particular way.", defTrans: "Motivação", example: "I lost my motivation to exercise.", audioFront: "TTS: Motivation", audioBack: "TTS: I lost my motivation to exercise." },
                { term: "Habit", definition: "A settled or regular tendency or practice.", defTrans: "Hábito", example: "Drinking water every morning is a good habit.", audioFront: "TTS: Habit", audioBack: "TTS: Drinking water every morning is a good habit." },
                
                { term: "To improve", definition: "To make or become better.", defTrans: "Melhorar", example: "I read books to improve my vocabulary.", audioFront: "TTS: To improve", audioBack: "TTS: I read books to improve my vocabulary." },
                { term: "To develop", definition: "To grow or cause to grow and become more mature.", defTrans: "Desenvolver", example: "It takes time to develop a new habit.", audioFront: "TTS: To develop", audioBack: "TTS: It takes time to develop a new habit." },
                { term: "To grow", definition: "To undergo natural development by increasing in size.", defTrans: "Crescer", example: "Plants need sunlight to grow.", audioFront: "TTS: To grow", audioBack: "TTS: Plants need sunlight to grow." },
                { term: "To learn", definition: "To acquire knowledge of or skill in something.", defTrans: "Aprender", example: "I want to learn how to play the piano.", audioFront: "TTS: To learn", audioBack: "TTS: I want to learn how to play the piano." },
                { term: "To set", definition: "To fix or establish (a goal or deadline).", defTrans: "Definir", example: "You should set a deadline for your project.", audioFront: "TTS: To set", audioBack: "TTS: You should set a deadline for your project." },
                { term: "To achieve", definition: "To successfully bring about a desired objective.", defTrans: "Alcançar", example: "She worked hard to achieve success.", audioFront: "TTS: To achieve", audioBack: "TTS: She worked hard to achieve success." },
                { term: "To accomplish", definition: "To achieve or complete successfully.", defTrans: "Realizar / Cumprir", example: "He finally accomplished his biggest dream.", audioFront: "TTS: To accomplish", audioBack: "TTS: He finally accomplished his biggest dream." },
                { term: "To plan", definition: "To decide on and arrange in advance.", defTrans: "Planejar", example: "Let's plan our trip for next summer.", audioFront: "TTS: To plan", audioBack: "TTS: Let's plan our trip for next summer." },
                { term: "To manage", definition: "To succeed in surviving or dealing with a difficult situation.", defTrans: "Gerenciar / Lidar", example: "It is difficult to manage a large team.", audioFront: "TTS: To manage", audioBack: "TTS: It is difficult to manage a large team." },
                { term: "To encourage", definition: "To give support, confidence, or hope to someone.", defTrans: "Encorajar / Incentivar", example: "My parents always encourage me to do my best.", audioFront: "TTS: To encourage", audioBack: "TTS: My parents always encourage me to do my best." },
                { term: "To focus", definition: "To pay particular attention to.", defTrans: "Focar", example: "I need quiet space to focus on my work.", audioFront: "TTS: To focus", audioBack: "TTS: I need quiet space to focus on my work." },
                { term: "To relax", definition: "To rest from work or become less tense.", defTrans: "Relaxar", example: "Listen to some music to relax your mind.", audioFront: "TTS: To relax", audioBack: "TTS: Listen to some music to relax your mind." },

                { term: "Personal", definition: "Of, affecting, or belonging to a particular person.", defTrans: "Pessoal", example: "This journal is for my personal thoughts.", audioFront: "TTS: Personal", audioBack: "TTS: This journal is for my personal thoughts." },
                { term: "Professional", definition: "Relating to or belonging to a profession.", defTrans: "Profissional", example: "Please maintain a professional attitude at work.", audioFront: "TTS: Professional", audioBack: "TTS: Please maintain a professional attitude at work." },
                { term: "Motivated", definition: "Highly driven to do something.", defTrans: "Motivado(a)", example: "She is highly motivated to win the race.", audioFront: "TTS: Motivated", audioBack: "TTS: She is highly motivated to win the race." },
                { term: "Confident", definition: "Feeling or showing confidence in oneself.", defTrans: "Confiante", example: "I am confident that we will pass the test.", audioFront: "TTS: Confident", audioBack: "TTS: I am confident that we will pass the test." },
                { term: "Positive", definition: "Constructive, optimistic, or confident.", defTrans: "Positivo(a)", example: "Try to keep a positive mindset.", audioFront: "TTS: Positive", audioBack: "TTS: Try to keep a positive mindset." },
                { term: "Stressed", definition: "Experiencing mental or emotional strain.", defTrans: "Estressado(a)", example: "He feels stressed because of the deadline.", audioFront: "TTS: Stressed", audioBack: "TTS: He feels stressed because of the deadline." },
                { term: "Anxious", definition: "Experiencing worry, unease, or nervousness.", defTrans: "Ansioso(a)", example: "Waiting for the results makes me anxious.", audioFront: "TTS: Anxious", audioBack: "TTS: Waiting for the results makes me anxious." },
                { term: "Healthy", definition: "In a good physical or mental condition.", defTrans: "Saudável", example: "Eating vegetables is part of a healthy diet.", audioFront: "TTS: Healthy", audioBack: "TTS: Eating vegetables is part of a healthy diet." },
                { term: "Balanced", definition: "Keeping or showing a balance.", defTrans: "Equilibrado(a)", example: "You need a balanced life to be truly happy.", audioFront: "TTS: Balanced", audioBack: "TTS: You need a balanced life to be truly happy." },
                { term: "Achievable", definition: "Able to be brought about or reached successfully.", defTrans: "Alcançável", example: "Make sure your targets are achievable.", audioFront: "TTS: Achievable", audioBack: "TTS: Make sure your targets are achievable." },
                { term: "Realistic", definition: "Having a sensible idea of what can be achieved.", defTrans: "Realista", example: "Running a marathon tomorrow is not realistic.", audioFront: "TTS: Realistic", audioBack: "TTS: Running a marathon tomorrow is not realistic." },
                { term: "Specific", definition: "Clearly defined or identified.", defTrans: "Específico(a)", example: "We need specific instructions to build the machine.", audioFront: "TTS: Specific", audioBack: "TTS: We need specific instructions to build the machine." },

                // 3A Items (18 items)
                { term: "Work on yourself", definition: "To put effort into personal growth.", defTrans: "Trabalhar em si mesmo", example: "It is important to work on yourself every day.", audioFront: "TTS: Work on yourself", audioBack: "TTS: It is important to work on yourself every day." },
                { term: "Learn a new skill", definition: "To acquire a new ability.", defTrans: "Aprender uma nova habilidade", example: "I want to learn a new skill this year, like coding.", audioFront: "TTS: Learn a new skill", audioBack: "TTS: I want to learn a new skill this year, like coding." },
                { term: "Step out of your comfort zone", definition: "To do something that you are not comfortable or familiar with.", defTrans: "Sair da sua zona de conforto", example: "You must step out of your comfort zone to grow.", audioFront: "TTS: Step out of your comfort zone", audioBack: "TTS: You must step out of your comfort zone to grow." },
                { term: "Develop a new hobby", definition: "To start doing a new activity for fun.", defTrans: "Desenvolver um novo hobby", example: "I decided to develop a new hobby to relax.", audioFront: "TTS: Develop a new hobby", audioBack: "TTS: I decided to develop a new hobby to relax." },
                { term: "Build your confidence", definition: "To increase your belief in your own abilities.", defTrans: "Construir sua confiança", example: "Public speaking will help build your confidence.", audioFront: "TTS: Build your confidence", audioBack: "TTS: Public speaking will help build your confidence." },
                { term: "Improve your communication skills", definition: "To get better at talking and listening to others.", defTrans: "Melhorar suas habilidades de comunicação", example: "Reading books can improve your communication skills.", audioFront: "TTS: Improve your communication skills", audioBack: "TTS: Reading books can improve your communication skills." },
                
                { term: "Set a goal", definition: "To define a specific target you want to reach.", defTrans: "Definir uma meta", example: "You should set a goal for yourself.", audioFront: "TTS: Set a goal", audioBack: "TTS: You should set a goal for yourself." },
                { term: "A short-term goal", definition: "A target you want to reach in the near future.", defTrans: "Uma meta de curto prazo", example: "Losing two kilos is a short-term goal.", audioFront: "TTS: A short-term goal", audioBack: "TTS: Losing two kilos is a short-term goal." },
                { term: "A long-term goal", definition: "A target you want to reach far in the future.", defTrans: "Uma meta de longo prazo", example: "Buying a house is a long-term goal.", audioFront: "TTS: A long-term goal", audioBack: "TTS: Buying a house is a long-term goal." },
                { term: "Make a plan", definition: "To map out the steps to achieve an objective.", defTrans: "Fazer um plano", example: "To succeed, you need to make a plan.", audioFront: "TTS: Make a plan", audioBack: "TTS: To succeed, you need to make a plan." },
                { term: "Track your progress", definition: "To monitor how close you are to your goal.", defTrans: "Acompanhar seu progresso", example: "Use a journal to track your progress.", audioFront: "TTS: Track your progress", audioBack: "TTS: Use a journal to track your progress." },
                { term: "Achieve your goals", definition: "To successfully reach the targets you set.", defTrans: "Alcançar suas metas", example: "Hard work helps you achieve your goals.", audioFront: "TTS: Achieve your goals", audioBack: "TTS: Hard work helps you achieve your goals." },
                
                { term: "Take care of your mental health", definition: "To ensure your psychological well-being.", defTrans: "Cuidar da sua saúde mental", example: "You must take care of your mental health.", audioFront: "TTS: Take care of your mental health", audioBack: "TTS: You must take care of your mental health." },
                { term: "Manage stress", definition: "To control and reduce feelings of anxiety and pressure.", defTrans: "Gerenciar o estresse", example: "Meditation is a great way to manage stress.", audioFront: "TTS: Manage stress", audioBack: "TTS: Meditation is a great way to manage stress." },
                { term: "Practice mindfulness", definition: "To intentionally focus on the present moment.", defTrans: "Praticar atenção plena", example: "I try to practice mindfulness every morning.", audioFront: "TTS: Practice mindfulness", audioBack: "TTS: I try to practice mindfulness every morning." },
                { term: "Live in the moment", definition: "To focus on the present rather than the past or future.", defTrans: "Viver o momento", example: "Stop worrying about the future and live in the moment.", audioFront: "TTS: Live in the moment", audioBack: "TTS: Stop worrying about the future and live in the moment." },
                { term: "A healthy work-life balance", definition: "The proper division of time between working and relaxing.", defTrans: "Um equilíbrio saudável entre trabalho e vida", example: "She finally found a healthy work-life balance.", audioFront: "TTS: A healthy work-life balance", audioBack: "TTS: She finally found a healthy work-life balance." },
                { term: "Take time for yourself", definition: "To spend time doing things you enjoy for your own well-being.", defTrans: "Tirar um tempo para si mesmo", example: "When you are tired, you should take time for yourself.", audioFront: "TTS: Take time for yourself", audioBack: "TTS: When you are tired, you should take time for yourself." }
            ]
        }
    ],

    // ======================================================
    // GLOSSARY (All 54 items + Context words)
    // ======================================================
    glossary:[
        // 2A: Concepts & Well-being
        { topic: "Concepts", term: "development", definition: "The process of developing.", translation: "Desenvolvimento" },
        { topic: "Concepts", term: "improvement", definition: "Making something better.", translation: "Melhoria" },
        { topic: "Concepts", term: "progress", definition: "Forward movement toward a goal.", translation: "Progresso" },
        { topic: "Concepts", term: "goal", definition: "An objective or aim.", translation: "Meta / Objetivo" },
        { topic: "Concepts", term: "skill", definition: "The ability to do something well.", translation: "Habilidade" },
        { topic: "Well-being", term: "well-being", definition: "The state of being comfortable and healthy.", translation: "Bem-estar" },
        { topic: "Well-being", term: "mindfulness", definition: "Focusing awareness on the present moment.", translation: "Atenção plena" },
        { topic: "Well-being", term: "meditation", definition: "The practice of thinking deeply in silence.", translation: "Meditação" },
        { topic: "Well-being", term: "stress", definition: "A state of mental or emotional strain.", translation: "Estresse" },
        { topic: "Concepts", term: "confidence", definition: "A feeling of self-assurance.", translation: "Confiança" },
        { topic: "Concepts", term: "motivation", definition: "The reason for acting in a particular way.", translation: "Motivação" },
        { topic: "Concepts", term: "habit", definition: "A settled or regular tendency or practice.", translation: "Hábito" },

        // 2A: Verbs (Growth & Management)
        { topic: "Verbs", term: "to-improve", definition: "To make better.", translation: "Melhorar" },
        { topic: "Verbs", term: "to-develop", definition: "To grow or become more mature.", translation: "Desenvolver" },
        { topic: "Verbs", term: "to-grow", definition: "To increase in size or maturity.", translation: "Crescer" },
        { topic: "Verbs", term: "to-learn", definition: "To acquire knowledge.", translation: "Aprender" },
        { topic: "Verbs", term: "to-set", definition: "To fix or establish (a goal).", translation: "Definir" },
        { topic: "Verbs", term: "to-achieve", definition: "To successfully bring about a desired result.", translation: "Alcançar" },
        { topic: "Verbs", term: "to-accomplish", definition: "To complete successfully.", translation: "Realizar" },
        { topic: "Verbs", term: "to-plan", definition: "To decide on and arrange in advance.", translation: "Planejar" },
        { topic: "Verbs", term: "to-manage", definition: "To deal with a difficult situation.", translation: "Gerenciar / Lidar" },
        { topic: "Verbs", term: "to-encourage", definition: "To give support and hope.", translation: "Encorajar" },
        { topic: "Verbs", term: "to-focus", definition: "To pay particular attention to.", translation: "Focar" },
        { topic: "Verbs", term: "to-relax", definition: "To rest from work or become less tense.", translation: "Relaxar" },

        // 2A: Adjectives
        { topic: "Adjectives", term: "personal", definition: "Belonging to a particular person.", translation: "Pessoal" },
        { topic: "Adjectives", term: "professional", definition: "Relating to a profession.", translation: "Profissional" },
        { topic: "Adjectives", term: "motivated", definition: "Highly driven to do something.", translation: "Motivado(a)" },
        { topic: "Adjectives", term: "confident", definition: "Feeling certain about yourself.", translation: "Confiante" },
        { topic: "Adjectives", term: "positive", definition: "Optimistic or confident.", translation: "Positivo(a)" },
        { topic: "Adjectives", term: "stressed", definition: "Experiencing emotional strain.", translation: "Estressado(a)" },
        { topic: "Adjectives", term: "anxious", definition: "Experiencing worry or unease.", translation: "Ansioso(a)" },
        { topic: "Adjectives", term: "healthy", definition: "In a good physical or mental condition.", translation: "Saudável" },
        { topic: "Adjectives", term: "balanced", definition: "Arranged in good proportions.", translation: "Equilibrado(a)" },
        { topic: "Adjectives", term: "achievable", definition: "Able to be reached successfully.", translation: "Alcançável" },
        { topic: "Adjectives", term: "realistic", definition: "Having a sensible idea of what can be achieved.", translation: "Realista" },
        { topic: "Adjectives", term: "specific", definition: "Clearly defined or identified.", translation: "Específico(a)" },

        // 3A: Expressions
        { topic: "Expressions", term: "work-on-yourself", definition: "To put effort into personal growth.", translation: "Trabalhar em si mesmo" },
        { topic: "Expressions", term: "learn-skill", definition: "To acquire a new ability.", translation: "Aprender uma nova habilidade" },
        { topic: "Expressions", term: "comfort-zone", definition: "Doing things you are familiar with.", translation: "Zona de conforto" },
        { topic: "Expressions", term: "develop-hobby", definition: "To start a new activity for fun.", translation: "Desenvolver um novo hobby" },
        { topic: "Expressions", term: "build-confidence", definition: "To increase belief in your abilities.", translation: "Construir sua confiança" },
        { topic: "Expressions", term: "improve-communication", definition: "To get better at talking to others.", translation: "Melhorar habilidades de comunicação" },
        
        { topic: "Expressions", term: "set-goal", definition: "To define a specific target.", translation: "Definir uma meta" },
        { topic: "Expressions", term: "short-term", definition: "A target you want to reach soon.", translation: "Meta de curto prazo" },
        { topic: "Expressions", term: "long-term", definition: "A target you want to reach in the future.", translation: "Meta de longo prazo" },
        { topic: "Expressions", term: "make-plan", definition: "To map out steps to an objective.", translation: "Fazer um plano" },
        { topic: "Expressions", term: "track-progress", definition: "To monitor how close you are to a goal.", translation: "Acompanhar seu progresso" },
        { topic: "Expressions", term: "to-achieve", definition: "To successfully reach targets.", translation: "Alcançar suas metas" },
        
        { topic: "Expressions", term: "mental-health", definition: "Psychological well-being.", translation: "Saúde mental" },
        { topic: "Expressions", term: "manage-stress", definition: "To reduce feelings of anxiety.", translation: "Gerenciar o estresse" },
        { topic: "Expressions", term: "practice-mindfulness", definition: "To focus on the present moment.", translation: "Praticar atenção plena" },
        { topic: "Expressions", term: "live-in-moment", definition: "To focus on the present.", translation: "Viver o momento" },
        { topic: "Expressions", term: "work-life-balance", definition: "Division of time between work and life.", translation: "Equilíbrio entre trabalho e vida pessoal" },
        { topic: "Expressions", term: "take-time-yourself", definition: "To do things you enjoy for well-being.", translation: "Tirar um tempo para si mesmo" }
    ]
});