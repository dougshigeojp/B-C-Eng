/**
 * English Block Assembling - LESSON DATA: Topic 2
 * Topic: Daily Routines
 * Level: Upper A2 ~ Lower B1
 */

window.initLesson({
    // --- METADATA ---
    lessonId: "lesson-2",
    block: "1",
    topicTitle: "2 - Daily Routines",

    steps:[
        // ======================================================
        // STEP 0: INTRO & CAN-DO
        // ======================================================
        {
            title: "Intro & Can-Do",
            objectives: "• Describe your typical daily [routine](tooltip:routine) from morning to night.<br>• Use [adverbs](tooltip:adverb) of frequency to say how often you do things.<br>• Talk about work, [study](tooltip:study), and meal times.<br>• Use correct [time expressions](tooltip:time-expression) with prepositions like *at*, *in*, and *on*.",
            welcome: "Welcome to Lesson 2! Everyone has a routine. In this lesson, we will focus on the vocabulary and phrases you need to describe your everyday activities, habits, and schedules. You will learn how to use the simple present tense to talk about what you do in the morning, at work, and in the evening. Let's get started!",
            audio: {
                objectives: "TTS: In this lesson, you will learn to: Describe your typical daily routine from morning to night. Use adverbs of frequency to say how often you do things. Talk about work, study, and meal times. Use correct time expressions with prepositions like at, in, and on.",
                welcome: "TTS: Welcome to Lesson 2! Everyone has a routine. In this lesson, we will focus on the vocabulary and phrases you need to describe your everyday activities, habits, and schedules. You will learn how to use the simple present tense to talk about what you do in the morning, at work, and in the evening. Let's get started!"
            }
        },

        // ======================================================
        // STEP 1: CONTEXT DIALOGUE
        // ======================================================
        {
            title: "Context Dialogue",
            context: "Liam and Sarah are having a coffee before work and discussing their morning habits.",
            contextAudio: "TTS: Sarah: Good morning, Liam! How did you sleep? Liam: Good morning, Sarah! I slept well, thanks. I woke up feeling refreshed, but it was hard to get up! Sarah: I know what you mean! What do you usually do after you get up? Liam: I usually have breakfast and check my phone. What about you? Sarah: I always go for a walk before having breakfast. It helps me wake up. Liam: That's healthy! When do you go to work? Sarah: I start work at 8:00 AM, and I usually finish work at 5:00 PM. Liam: I go to work at 9:00 AM. I should probably leave the house now. Sarah: Okay, have a great day!",
            dialogue:[
                { speaker: "Sarah", text: "Good morning, Liam! How did you [sleep](tooltip:sleep)?" },
                { speaker: "Liam", text: "Good morning, Sarah! I slept well, thanks. I [woke up](tooltip:wake-up) feeling refreshed, but it was hard to [get up](tooltip:get-up)!" },
                { speaker: "Sarah", text: "I know what you mean! What do you usually do after you get up?" },
                { speaker: "Liam", text: "I [usually](tooltip:usually) [have breakfast](tooltip:have-breakfast) and check my phone. What about you?" },
                { speaker: "Sarah", text: "I [always](tooltip:always) go for a walk before having breakfast. It helps me wake up." },
                { speaker: "Liam", text: "That's healthy! [When](tooltip:when) do you go to work?" },
                { speaker: "Sarah", text: "I [start work](tooltip:start-work) at 8:00 AM, and I usually [finish work](tooltip:finish-work) at 5:00 PM." },
                { speaker: "Liam", text: "I go to work at 9:00 AM. I should probably [leave the house](tooltip:leave-house) now." },
                { speaker: "Sarah", text: "Okay, have a great day!" }
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
                    title: "Morning & Evening Actions",
                    audio: "TTS: Wake up. Get up. Take a shower. Get dressed. Brush my teeth. Have breakfast. Drink coffee. Leave the house. Get home. Go to bed.",
                    items:[
                        { term: "Wake up", trans: "Acordar" },
                        { term: "Get up", trans: "Levantar-se (da cama)" },
                        { term: "Take a shower", trans: "Tomar banho" },
                        { term: "Get dressed", trans: "Vestir-se" },
                        { term: "Brush my teeth", trans: "Escovar meus dentes" },
                        { term: "Have breakfast (Eat breakfast)", trans: "Tomar café da manhã" },
                        { term: "Drink coffee", trans: "Beber café" },
                        { term: "Leave the house", trans: "Sair de casa" },
                        { term: "Get home (Arrive home)", trans: "Chegar em casa" },
                        { term: "Go to bed (Go to sleep)", trans: "Ir para a cama (Dormir)" }
                    ]
                },
                {
                    title: "Work, Study & Meals",
                    audio: "TTS: Start work. Finish work. Have a break. Have lunch. Have dinner. Attend a meeting. Do homework. Breakfast. Lunch. Snack.",
                    items:[
                        { term: "Start work", trans: "Começar a trabalhar" },
                        { term: "Finish work", trans: "Terminar o trabalho" },
                        { term: "Have a break (Take a break)", trans: "Fazer uma pausa" },
                        { term: "Have lunch (Eat lunch)", trans: "Almoçar" },
                        { term: "Have dinner (Eat dinner)", trans: "Jantar" },
                        { term: "Attend a meeting", trans: "Participar de uma reunião" },
                        { term: "Do homework", trans: "Fazer o dever de casa" },
                        { term: "Breakfast", trans: "Café da manhã" },
                        { term: "Lunch", trans: "Almoço" },
                        { term: "Snack", trans: "Lanche (refeição leve)" }
                    ]
                },
                {
                    title: "Time & Frequency",
                    audio: "TTS: Always. Usually. Often. Sometimes. Rarely. Never. Morning. Afternoon. Evening. Weekend.",
                    items:[
                        { term: "Always", trans: "Sempre (100%)" },
                        { term: "Usually (Normally)", trans: "Geralmente (Normalmente)" },
                        { term: "Often (Frequently)", trans: "Frequentemente" },
                        { term: "Sometimes", trans: "Às vezes" },
                        { term: "Rarely (Occasionally)", trans: "Raramente" },
                        { term: "Never", trans: "Nunca (0%)" },
                        { term: "Morning", trans: "Manhã" },
                        { term: "Afternoon", trans: "Tarde" },
                        { term: "Evening", trans: "Noite (início/período em que se está acordado)" },
                        { term: "Weekend", trans: "Fim de semana" }
                    ]
                }
            ],

            // --- 2B: EXAMPLES ---
            exampleGroups:[
                {
                    title: "Morning & Evening Actions",
                    audio: "TTS: I wake up naturally without an alarm. I get up at seven AM on weekdays. I take a shower to feel clean. I get dressed quickly in the morning. I brush my teeth after eating. I always have breakfast before going to work. I drink coffee to get some energy. I leave the house at eight o'clock. I get home late on Mondays. I go to bed at eleven PM.",
                    items:[
                        { term: "Wake up", sent: "I wake up naturally without an alarm.", trans: "Eu acordo naturalmente sem alarme." },
                        { term: "Get up", sent: "I get up at 7:00 AM on weekdays.", trans: "Eu levanto às 7:00 da manhã durante a semana." },
                        { term: "Take a shower", sent: "I take a shower to feel clean.", trans: "Eu tomo banho para me sentir limpo." },
                        { term: "Get dressed", sent: "I get dressed quickly in the morning.", trans: "Eu me visto rapidamente de manhã." },
                        { term: "Brush my teeth", sent: "I brush my teeth after eating.", trans: "Eu escovo meus dentes depois de comer." },
                        { term: "Have breakfast (Eat breakfast)", sent: "I always have breakfast before going to work.", trans: "Eu sempre tomo café da manhã antes de ir trabalhar." },
                        { term: "Drink coffee", sent: "I drink coffee to get some energy.", trans: "Eu bebo café para ter energia." },
                        { term: "Leave the house", sent: "I leave the house at 8 o'clock.", trans: "Eu saio de casa às 8 horas." },
                        { term: "Get home (Arrive home)", sent: "I get home late on Mondays.", trans: "Eu chego em casa tarde nas segundas-feiras." },
                        { term: "Go to bed (Go to sleep)", sent: "I go to bed at 11:00 PM.", trans: "Eu vou para a cama às 23:00." }
                    ]
                },
                {
                    title: "Work, Study & Meals",
                    audio: "TTS: I start work at nine AM every day. I finish work at five PM. Let's have a break and relax for ten minutes. I usually have lunch at noon with my colleagues. We have dinner as a family at eight PM. I need to attend a meeting with my boss. The students do homework after school. Breakfast is the first meal of the day. We eat lunch in the middle of the day. I had a snack because I was hungry between meals.",
                    items:[
                        { term: "Start work", sent: "I start work at 9 AM every day.", trans: "Eu começo a trabalhar às 9h todos os dias." },
                        { term: "Finish work", sent: "I finish work at 5 PM.", trans: "Eu termino o trabalho às 17h." },
                        { term: "Have a break (Take a break)", sent: "Let's have a break and relax for ten minutes.", trans: "Vamos fazer uma pausa e relaxar por dez minutos." },
                        { term: "Have lunch (Eat lunch)", sent: "I usually have lunch at noon with my colleagues.", trans: "Eu geralmente almoço ao meio-dia com meus colegas." },
                        { term: "Have dinner (Eat dinner)", sent: "We have dinner as a family at 8:00 PM.", trans: "Nós jantamos em família às 20h." },
                        { term: "Attend a meeting", sent: "I need to attend a meeting with my boss.", trans: "Preciso participar de uma reunião com meu chefe." },
                        { term: "Do homework", sent: "The students do homework after school.", trans: "Os estudantes fazem o dever de casa depois da escola." },
                        { term: "Breakfast", sent: "Breakfast is the first meal of the day.", trans: "O café da manhã é a primeira refeição do dia." },
                        { term: "Lunch", sent: "We eat lunch in the middle of the day.", trans: "Nós almoçamos no meio do dia." },
                        { term: "Snack", sent: "I had a snack because I was hungry between meals.", trans: "Eu comi um lanche porque estava com fome entre as refeições." }
                    ]
                },
                {
                    title: "Time & Frequency",
                    audio: "TTS: I always lock the door. I usually watch TV after dinner. I often go to the gym. I sometimes read a book in bed. I rarely eat fast food. I never skip breakfast. I drink tea in the morning. I work hard in the afternoon. I relax in the evening. I like to sleep late on the weekend.",
                    items:[
                        { term: "Always", sent: "I always lock the door.", trans: "Eu sempre tranco a porta." },
                        { term: "Usually (Normally)", sent: "I usually watch TV after dinner.", trans: "Eu geralmente assisto TV depois do jantar." },
                        { term: "Often (Frequently)", sent: "I often go to the gym.", trans: "Eu vou à academia frequentemente." },
                        { term: "Sometimes", sent: "I sometimes read a book in bed.", trans: "Às vezes eu leio um livro na cama." },
                        { term: "Rarely (Occasionally)", sent: "I rarely eat fast food.", trans: "Eu raramente como fast food." },
                        { term: "Never", sent: "I never skip breakfast.", trans: "Eu nunca pulo o café da manhã." },
                        { term: "Morning", sent: "I drink tea in the morning.", trans: "Eu bebo chá de manhã." },
                        { term: "Afternoon", sent: "I work hard in the afternoon.", trans: "Eu trabalho duro à tarde." },
                        { term: "Evening", sent: "I relax in the evening.", trans: "Eu relaxo à noite." },
                        { term: "Weekend", sent: "I like to sleep late on the weekend.", trans: "Eu gosto de dormir até tarde no fim de semana." }
                    ]
                }
            ],

            // --- 2C: PRACTICE ---
            drillGroups:[
                {
                    title: "Morning & Evening Actions",
                    drills:[
                        { q: "What verb means to become conscious after sleeping?", options:[{t: "Get up", c: false}, {t: "Wake up", c: true}, {t: "Leave the house", c: false}, {t: "Get dressed", c: false}], type: "mcq" },
                        { q: "What verb describes the action of rising from bed and starting your day?", options:[{t: "Wake up", c: false}, {t: "Get up", c: true}, {t: "Get home", c: false}, {t: "Go to bed", c: false}], type: "mcq" },
                        { q: "What action do you take to wash your body with water?", options:[{t: "Get dressed", c: false}, {t: "Brush my teeth", c: false}, {t: "Take a shower", c: true}, {t: "Drink coffee", c: false}], type: "mcq" },
                        { q: "Which phrase means putting on clothes?", options:[{t: "Take a shower", c: false}, {t: "Get dressed", c: true}, {t: "Leave the house", c: false}, {t: "Get home", c: false}], type: "mcq" },
                        { q: "You use a toothbrush and toothpaste to ________.", options:[{t: "Brush my teeth", c: true}, {t: "Have breakfast", c: false}, {t: "Get dressed", c: false}, {t: "Drink coffee", c: false}], type: "mcq" },
                        { q: "What phrase means eating the first meal of the day?", options:[{t: "Have lunch", c: false}, {t: "Have dinner", c: false}, {t: "Have breakfast", c: true}, {t: "Have a snack", c: false}], type: "mcq" },
                        { q: "Many people ________ in the morning to wake up and get energy.", options:[{t: "Drink coffee", c: true}, {t: "Go to bed", c: false}, {t: "Get home", c: false}, {t: "Attend a meeting", c: false}], type: "mcq" },
                        { q: "To go out of your home to start the day is to ________.", options:[{t: "Get home", c: false}, {t: "Leave the house", c: true}, {t: "Go to bed", c: false}, {t: "Get up", c: false}], type: "mcq" },
                        { q: "To return to your house after work or school is to ________.", options:[{t: "Leave the house", c: false}, {t: "Get home", c: true}, {t: "Wake up", c: false}, {t: "Start work", c: false}], type: "mcq" },
                        { q: "The action of going to sleep at night is to ________.", options:[{t: "Go to bed", c: true}, {t: "Get up", c: false}, {t: "Take a shower", c: false}, {t: "Get home", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Work, Study & Meals",
                    drills:[
                        { q: "To begin your job duties for the day is to ________.", options:[{t: "Finish work", c: false}, {t: "Start work", c: true}, {t: "Have a break", c: false}, {t: "Leave the house", c: false}], type: "mcq" },
                        { q: "To complete your job duties and stop working is to ________.", options:[{t: "Finish work", c: true}, {t: "Start work", c: false}, {t: "Get dressed", c: false}, {t: "Attend a meeting", c: false}], type: "mcq" },
                        { q: "To pause working for a short time to rest is to ________.", options:[{t: "Attend a meeting", c: false}, {t: "Start work", c: false}, {t: "Have a break", c: true}, {t: "Do homework", c: false}], type: "mcq" },
                        { q: "To eat the meal in the middle of the day is to ________.", options:[{t: "Have breakfast", c: false}, {t: "Have lunch", c: true}, {t: "Have dinner", c: false}, {t: "Have a break", c: false}], type: "mcq" },
                        { q: "To eat the evening meal is to ________.", options:[{t: "Have breakfast", c: false}, {t: "Have lunch", c: false}, {t: "Have dinner", c: true}, {t: "Drink coffee", c: false}], type: "mcq" },
                        { q: "To be present at a gathering for business or work is to ________.", options:[{t: "Have a break", c: false}, {t: "Attend a meeting", c: true}, {t: "Start work", c: false}, {t: "Do homework", c: false}], type: "mcq" },
                        { q: "To complete school assignments at home is to ________.", options:[{t: "Start work", c: false}, {t: "Do homework", c: true}, {t: "Take a break", c: false}, {t: "Attend a meeting", c: false}], type: "mcq" },
                        { q: "The noun for the first meal of the day is ________.", options:[{t: "Lunch", c: false}, {t: "Snack", c: false}, {t: "Breakfast", c: true}, {t: "Dinner", c: false}], type: "mcq" },
                        { q: "The noun for the meal eaten around noon is ________.", options:[{t: "Breakfast", c: false}, {t: "Lunch", c: true}, {t: "Dinner", c: false}, {t: "Snack", c: false}], type: "mcq" },
                        { q: "A small amount of food eaten between main meals is a ________.", options:[{t: "Dinner", c: false}, {t: "Breakfast", c: false}, {t: "Snack", c: true}, {t: "Lunch", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Time & Frequency",
                    drills:[
                        { q: "Which adverb means 100% of the time?", options:[{t: "Usually", c: false}, {t: "Sometimes", c: false}, {t: "Always", c: true}, {t: "Never", c: false}], type: "mcq" },
                        { q: "Which adverb means approximately 90% of the time, or normally?", options:[{t: "Usually", c: true}, {t: "Sometimes", c: false}, {t: "Rarely", c: false}, {t: "Never", c: false}], type: "mcq" },
                        { q: "Which adverb means many times, or frequently?", options:[{t: "Rarely", c: false}, {t: "Often", c: true}, {t: "Sometimes", c: false}, {t: "Never", c: false}], type: "mcq" },
                        { q: "Which adverb means occasionally, or about 50% of the time?", options:[{t: "Always", c: false}, {t: "Sometimes", c: true}, {t: "Never", c: false}, {t: "Usually", c: false}], type: "mcq" },
                        { q: "Which adverb means very infrequently, or almost never?", options:[{t: "Often", c: false}, {t: "Rarely", c: true}, {t: "Always", c: false}, {t: "Usually", c: false}], type: "mcq" },
                        { q: "Which adverb means 0% of the time?", options:[{t: "Rarely", c: false}, {t: "Sometimes", c: false}, {t: "Never", c: true}, {t: "Often", c: false}], type: "mcq" },
                        { q: "The early part of the day ending at noon is the ________.", options:[{t: "Afternoon", c: false}, {t: "Evening", c: false}, {t: "Morning", c: true}, {t: "Weekend", c: false}], type: "mcq" },
                        { q: "The part of the day from noon to evening is the ________.", options:[{t: "Morning", c: false}, {t: "Afternoon", c: true}, {t: "Evening", c: false}, {t: "Weekend", c: false}], type: "mcq" },
                        { q: "The period of time at the end of the day, before you go to bed, is the ________.", options:[{t: "Morning", c: false}, {t: "Afternoon", c: false}, {t: "Evening", c: true}, {t: "Weekend", c: false}], type: "mcq" },
                        { q: "Saturday and Sunday together are called the ________.", options:[{t: "Morning", c: false}, {t: "Evening", c: false}, {t: "Weekend", c: true}, {t: "Afternoon", c: false}], type: "mcq" }
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
                    title: "Asking About Routines",
                    audio: "TTS: What time do you usually wake up? What do you do in the morning? When do you go to work? Do you drink coffee every day? What do you do after work? What's your typical day like?",
                    explanation: "Common questions to ask someone about their daily habits and schedules.<br><span style='color:var(--primary-blue); font-style:italic;'>(Perguntas comuns para fazer a alguém sobre seus hábitos diários e horários.)</span>",
                    samples:[
                        { en: "<b>What time do you usually wake up?</b>", pt: "<span style='color:var(--primary-blue)'>(A que horas você costuma acordar?)</span>" },
                        { en: "<b>What do you do in the morning?</b>", pt: "<span style='color:var(--primary-blue)'>(O que você faz de manhã?)</span>" },
                        { en: "<b>When do you go to work?</b>", pt: "<span style='color:var(--primary-blue)'>(Quando você vai para o trabalho?)</span>" },
                        { en: "<b>Do you drink coffee every day?</b>", pt: "<span style='color:var(--primary-blue)'>(Você bebe café todos os dias?)</span>" },
                        { en: "<b>What do you do after work?</b>", pt: "<span style='color:var(--primary-blue)'>(O que você faz depois do trabalho?)</span>" },
                        { en: "<b>What's your typical day like?</b>", pt: "<span style='color:var(--primary-blue)'>(Como é o seu dia típico?)</span>" }
                    ]
                },
                {
                    title: "Time Prepositions & Expressions",
                    audio: "TTS: At 7:00 a.m. In the morning. On weekdays. From 9 to 5. Every day. After work.",
                    explanation: "Phrases used to specify when actions happen. Use 'at' for specific times, 'in' for parts of the day, and 'on' for days.<br><span style='color:var(--primary-blue); font-style:italic;'>(Frases usadas para especificar quando as ações acontecem. Use 'at' para horários específicos, 'in' para partes do dia e 'on' para os dias.)</span>",
                    samples:[
                        { en: "I wake up <b>at 7:00 a.m.</b>", pt: "<span style='color:var(--primary-blue)'>(Eu acordo às 7h.)</span>" },
                        { en: "I take a shower <b>in the morning</b>.", pt: "<span style='color:var(--primary-blue)'>(Eu tomo banho de manhã.)</span>" },
                        { en: "I go to school <b>on weekdays</b>.", pt: "<span style='color:var(--primary-blue)'>(Eu vou para a escola nos dias de semana.)</span>" },
                        { en: "I work <b>from 9 to 5</b>.", pt: "<span style='color:var(--primary-blue)'>(Eu trabalho das 9 às 5.)</span>" },
                        { en: "I exercise <b>every day</b>.", pt: "<span style='color:var(--primary-blue)'>(Eu me exercito todos os dias.)</span>" },
                        { en: "I relax <b>after work</b>.", pt: "<span style='color:var(--primary-blue)'>(Eu relaxo depois do trabalho.)</span>" }
                    ]
                }
            ],

            // --- 3B: DIALOGUES ---
            dialogueGroups:[
                {
                    title: "Dialogue 1: Morning Times",
                    audio: "TTS: What time do you usually wake up? I wake up at 7:00 a.m. on weekdays.",
                    lines:[
                        { speaker: "Mark", text: "What time do you usually wake up?", pt: "(Que horas você costuma acordar?)" },
                        { speaker: "Sophie", text: "I wake up at 7:00 a.m. on weekdays.", pt: "(Eu acordo às 7:00 da manhã nos dias de semana.)" }
                    ]
                },
                {
                    title: "Dialogue 2: Morning Habits",
                    audio: "TTS: What do you do in the morning? I take a shower and have breakfast.",
                    lines:[
                        { speaker: "David", text: "What do you do in the morning?", pt: "(O que você faz de manhã?)" },
                        { speaker: "Lucas", text: "I take a shower and have breakfast.", pt: "(Eu tomo banho e tomo café da manhã.)" }
                    ]
                },
                {
                    title: "Dialogue 3: Going to the Office",
                    audio: "TTS: When do you go to work? I leave the house in the morning and work from 9 to 5.",
                    lines:[
                        { speaker: "Anna", text: "When do you go to work?", pt: "(Quando você vai para o trabalho?)" },
                        { speaker: "John", text: "I leave the house in the morning and work from 9 to 5.", pt: "(Eu saio de casa de manhã e trabalho das 9 às 5.)" }
                    ]
                },
                {
                    title: "Dialogue 4: Coffee Habits",
                    audio: "TTS: Do you drink coffee every day? Yes, I always have a cup with my breakfast.",
                    lines:[
                        { speaker: "Emma", text: "Do you drink coffee every day?", pt: "(Você bebe café todos os dias?)" },
                        { speaker: "Leo", text: "Yes, I always have a cup with my breakfast.", pt: "(Sim, eu sempre tomo uma xícara com meu café da manhã.)" }
                    ]
                },
                {
                    title: "Dialogue 5: Evening Activities",
                    audio: "TTS: What do you do after work? I go to the gym, have dinner, and watch TV.",
                    lines:[
                        { speaker: "Jake", text: "What do you do after work?", pt: "(O que você faz depois do trabalho?)" },
                        { speaker: "Mia", text: "I go to the gym, have dinner, and watch TV.", pt: "(Eu vou à academia, janto e assisto TV.)" }
                    ]
                },
                {
                    title: "Dialogue 6: Describing Your Day",
                    audio: "TTS: What's your typical day like? Well, I work every day, so I stay busy until the evening.",
                    lines:[
                        { speaker: "Paul", text: "What's your typical day like?", pt: "(Como é o seu dia típico?)" },
                        { speaker: "Sarah", text: "Well, I work every day, so I stay busy until the evening.", pt: "(Bem, eu trabalho todos os dias, então fico ocupada até a noite.)" }
                    ]
                }
            ],

            // --- 3C: PRACTICE ---
            grammarDrillGroups:[
                {
                    title: "Asking About Routines",
                    drills:[
                        { q: "________ time do you usually wake up?", options:[{t: "What", c: true}, {t: "When", c: false}, {t: "How", c: false}, {t: "Where", c: false}], type: "mcq" },
                        { q: "What do you do ________ the morning?", options:[{t: "on", c: false}, {t: "at", c: false}, {t: "in", c: true}, {t: "by", c: false}], type: "mcq" },
                        { q: "________ do you go to work?", options:[{t: "What", c: false}, {t: "When", c: true}, {t: "Who", c: false}, {t: "Which", c: false}], type: "mcq" },
                        { q: "Do you drink coffee ________ day?", options:[{t: "every", c: true}, {t: "always", c: false}, {t: "sometimes", c: false}, {t: "in", c: false}], type: "mcq" },
                        { q: "What do you do ________ work?", options:[{t: "after", c: true}, {t: "in", c: false}, {t: "on", c: false}, {t: "at", c: false}], type: "mcq" },
                        { q: "What's your typical day ________?", options:[{t: "love", c: false}, {t: "look", c: false}, {t: "like", c: true}, {t: "as", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Time Prepositions & Expressions",
                    drills:[
                        { q: "I wake up ________ 7:00 a.m.", options:[{t: "in", c: false}, {t: "on", c: false}, {t: "at", c: true}, {t: "for", c: false}], type: "mcq" },
                        { q: "I take a shower ________ the morning.", options:[{t: "at", c: false}, {t: "on", c: false}, {t: "in", c: true}, {t: "by", c: false}], type: "mcq" },
                        { q: "I go to school ________ weekdays.", options:[{t: "in", c: false}, {t: "at", c: false}, {t: "for", c: false}, {t: "on", c: true}], type: "mcq" },
                        { q: "I work ________ 9 to 5.", options:[{t: "at", c: false}, {t: "from", c: true}, {t: "on", c: false}, {t: "in", c: false}], type: "mcq" },
                        { q: "I eat breakfast ________ day.", options:[{t: "every", c: true}, {t: "all", c: false}, {t: "always", c: false}, {t: "usually", c: false}], type: "mcq" },
                        { q: "I like to relax ________ work.", options:[{t: "at", c: false}, {t: "after", c: true}, {t: "on", c: false}, {t: "every", c: false}], type: "mcq" }
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
                { text: "I always wake up early in the morning. ↘", audio: "TTS: I always wake up early in the morning." },
                { text: "What time do you usually get up? ↘", audio: "TTS: What time do you usually get up?" },
                { text: "I take a shower and get dressed quickly. ↘", audio: "TTS: I take a shower and get dressed quickly." },
                { text: "Do you drink coffee every day? ↗", audio: "TTS: Do you drink coffee every day?" },
                { text: "I usually leave the house at eight o'clock. ↘", audio: "TTS: I usually leave the house at eight o'clock." },
                { text: "When do you go to work? ↘", audio: "TTS: When do you go to work?" },
                { text: "I start work at nine and finish at five. ↘", audio: "TTS: I start work at nine and finish at five." },
                { text: "Let's take a break and have lunch. ↘", audio: "TTS: Let's take a break and have lunch." },
                { text: "What do you do after work? ↘", audio: "TTS: What do you do after work?" },
                { text: "I relax in the evening and go to bed at eleven. ↘", audio: "TTS: I relax in the evening and go to bed at eleven." }
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
                    instruction: "Listen to the voicemail and type the missing words.",
                    audio: "TTS: Hi! I usually wake up at seven, but today I got up late. I will take a shower and leave the house soon. See you at work!",
                    text: "Hi! I usually wake up at seven, but today I got up [late]. I will take a [shower] and leave the[house] soon. See you at [work]!"
                },
                {
                    type: "dropdown",
                    instruction: "Listen to the conversation about meals and work.",
                    audio: "TTS: Mark: Do you have breakfast every day? Anna: Yes, I always eat breakfast before I start work. Mark: When do you have lunch? Anna: I take a break and have lunch at noon.",
                    questions:[
                        { q: "Mark: Do you have [breakfast* | dinner | lunch] every day?", a: "breakfast" },
                        { q: "Anna: Yes, I [always* | never | rarely] eat breakfast before I start work.", a: "always" },
                        { q: "Mark: When do you have[lunch* | coffee | dinner]?", a: "lunch" },
                        { q: "Anna: I take a[break* | shower | meeting] and have lunch at noon.", a: "break" }
                    ]
                },
                {
                    type: "audio-choice",
                    instruction: "Listen to the person describing their weekend. When do they usually wake up?",
                    audio: "TTS: On the weekend, I never wake up early. I usually sleep until ten. In the afternoon, I do my homework or relax.",
                    options:[
                        { t: "At 6:00 a.m.", c: false },
                        { t: "At 7:00 a.m.", c: false },
                        { t: "At 10:00 a.m.", c: true },
                        { t: "They don't sleep.", c: false }
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
                    title: "Narration - A Busy Morning",
                    audio: "TTS: Liam has a very busy routine. He always wakes up at six AM. First, he takes a shower and gets dressed. He never skips breakfast because he needs energy. At seven thirty AM, he leaves the house to start work early. He works hard in the morning.",
                    body: "Liam has a very busy [routine](tooltip:routine). He [always](tooltip:always) [wakes up](tooltip:wake-up) at 6:00 a.m. First, he [takes a shower](tooltip:take-shower) and [gets dressed](tooltip:get-dressed). He [never](tooltip:never) skips [breakfast](tooltip:breakfast) because he needs energy. At 7:30 a.m., he [leaves the house](tooltip:leave-house) to [start work](tooltip:start-work) early. He works hard [in the morning](tooltip:in-morning).",
                    questions:[
                        { q: "What time does Liam wake up?", options:[{t: "7:30 a.m.", c: false}, {t: "6:00 a.m.", c: true}, {t: "8:00 a.m.", c: false}], type: "mcq" },
                        { q: "Why does he never skip breakfast?", options:[{t: "Because he is thirsty.", c: false}, {t: "Because he needs energy.", c: true}, {t: "Because he is late.", c: false}], type: "mcq" },
                        { q: "What does he do at 7:30 a.m.?", options:[{t: "He leaves the house.", c: true}, {t: "He takes a shower.", c: false}, {t: "He goes to bed.", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Dialogue - Office Habits",
                    audio: "TTS: Emma: When do you go to work? Leo: I work from 9 to 5. What about you? Emma: I usually finish work at 6 PM. Leo: Do you have a break in the afternoon? Emma: Yes, I sometimes drink a coffee at 3 PM.",
                    body: "<b>Emma:</b> [When do you go to work](tooltip:when-go-work)?<br><b>Leo:</b> I work [from 9 to 5](tooltip:from-9-to-5). [What about you](tooltip:what-about-you)?<br><b>Emma:</b> I [usually](tooltip:usually) [finish work](tooltip:finish-work) at 6:00 p.m.<br><b>Leo:</b> Do you [have a break](tooltip:have-break) in the afternoon?<br><b>Emma:</b> Yes, I [sometimes](tooltip:sometimes) drink a coffee at 3:00 p.m.",
                    questions:[
                        { q: "What are Leo's working hours?", options:[{t: "From 9 to 5", c: true}, {t: "From 8 to 6", c: false}, {t: "From 10 to 4", c: false}], type: "mcq" },
                        { q: "When does Emma finish work?", options:[{t: "At 5:00 p.m.", c: false}, {t: "At 6:00 p.m.", c: true}, {t: "At 3:00 p.m.", c: false}], type: "mcq" },
                        { q: "What does Emma do during her break?", options:[{t: "She eats lunch.", c: false}, {t: "She drinks a coffee.", c: true}, {t: "She goes home.", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Email - Evening Plans",
                    audio: "TTS: Subject: Dinner tonight! Hi Jake, What do you do after work today? I usually get home around 5:30 PM. I want to have dinner together. Let me know if you are free in the evening. I usually go to bed by 10:00 PM, so let's eat early. Best, Mia.",
                    body: "<b>Subject:</b> Dinner tonight!<br><br>Hi Jake,<br>[What do you do after work](tooltip:what-do-after-work) today? I usually [get home](tooltip:get-home) around 5:30 p.m. I want to [have dinner](tooltip:have-dinner) together. Let me know if you are free [in the evening](tooltip:in-evening). I usually [go to bed](tooltip:go-to-bed) by 10:00 p.m., so let's eat early.<br><br>Best, Mia.",
                    questions:[
                        { q: "What time does Mia usually get home?", options:[{t: "10:00 p.m.", c: false}, {t: "5:30 p.m.", c: true}, {t: "7:00 a.m.", c: false}], type: "mcq" },
                        { q: "What does Mia want to do with Jake?", options:[{t: "Have breakfast together.", c: false}, {t: "Have dinner together.", c: true}, {t: "Go to work together.", c: false}], type: "mcq" },
                        { q: "Why do they need to eat early?", options:[{t: "Because Mia goes to bed by 10:00 p.m.", c: true}, {t: "Because Jake works at night.", c: false}, {t: "Because they have a meeting.", c: false}], type: "mcq" }
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
                { type: "matching", instruction: "Match the verb to the correct noun.", pairs:[
                    { left: "Take", right: "a shower", val: "1" },
                    { left: "Brush", right: "my teeth", val: "2" },
                    { left: "Drink", right: "coffee", val: "3" },
                    { left: "Leave", right: "the house", val: "4" }
                ]},
                { type: "matching", instruction: "Match the time of day with a typical hour.", pairs:[
                    { left: "Morning", right: "8:00 AM", val: "1" },
                    { left: "Noon", right: "12:00 PM", val: "2" },
                    { left: "Afternoon", right: "3:00 PM", val: "3" },
                    { left: "Evening", right: "8:00 PM", val: "4" }
                ]},
                { type: "matching", instruction: "Match the frequency adverb to its meaning.", pairs:[
                    { left: "Always", right: "100% of the time", val: "1" },
                    { left: "Usually", right: "90% of the time", val: "2" },
                    { left: "Sometimes", right: "50% of the time", val: "3" },
                    { left: "Never", right: "0% of the time", val: "4" }
                ]},
                { type: "matching", instruction: "Match the phrase with its definition.", pairs:[
                    { left: "Start work", right: "Begin your job", val: "1" },
                    { left: "Finish work", right: "Stop working", val: "2" },
                    { left: "Have lunch", right: "Eat the midday meal", val: "3" },
                    { left: "Go to bed", right: "Go to sleep", val: "4" }
                ]},

                // --- WORD ORDER (5-14) ---
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "up / wake / I / 7:00 a.m. / at / .", correct: "I wake up at 7:00 a.m. ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "my / brush / I / morning / the / in / teeth / .", correct: "I brush my teeth in the morning ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "coffee / drink / you / Do / day / every / ?", correct: "Do you drink coffee every day ?" },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "usually / I / have / 8:00 / breakfast / at / .", correct: "I usually have breakfast at 8:00 ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "leave / I / house / the / work / for / .", correct: "I leave the house for work ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "start / you / do / When / work / ?", correct: "When do you start work ?" },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "always / lunch / We / at / noon / have / .", correct: "We always have lunch at noon ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "after / do / What / you / work / do / ?", correct: "What do you do after work ?" },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "home / usually / get / at / I / 6:00 p.m. / .", correct: "I usually get home at 6:00 p.m. ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "bed / go / I / 11:00 p.m. / to / at / .", correct: "I go to bed at 11:00 p.m. ." },

                // --- CLICKABLE ERROR (15-24) ---
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "I wake up [on](error:at) 7:00 a.m." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "She [take](error:takes) a shower every morning." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "I go to work [at](error:in) the morning." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "We always [has](error:have) breakfast together." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "He [leave](error:leaves) the house at 8:30." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "I work [at](error:from) 9 to 5." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "Do you [drinks](error:drink) coffee every day?" },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "They have a [broke](error:break) at noon." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "I [rare](error:rarely) eat fast food." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "What do you do [before](error:after) work when you go home?" },

                // --- ODD ONE OUT (25-30) ---
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Morning routine)", options:[{t: "Wake up", c: false}, {t: "Take a shower", c: false}, {t: "Get dressed", c: false}, {t: "Go to bed", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Meals)", options:[{t: "Breakfast", c: false}, {t: "Lunch", c: false}, {t: "Snack", c: false}, {t: "Meeting", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Adverbs of Frequency)", options:[{t: "Always", c: false}, {t: "Often", c: false}, {t: "Rarely", c: false}, {t: "Morning", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Parts of the day)", options:[{t: "Morning", c: false}, {t: "Afternoon", c: false}, {t: "Evening", c: false}, {t: "Never", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Work tasks)", options:[{t: "Start work", c: false}, {t: "Attend a meeting", c: false}, {t: "Have a break", c: false}, {t: "Brush my teeth", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Verbs)", options:[{t: "Get up", c: false}, {t: "Leave", c: false}, {t: "Finish", c: false}, {t: "Usually", c: true}] },

                // --- TRUE / FALSE (31-35) ---
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "You use 'at' before specific times, like 'at 7:00 a.m.'", correct: "true"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "Dinner is usually eaten in the morning.", correct: "false"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "'Never' means 100% of the time.", correct: "false"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "A 'snack' is a small amount of food eaten between meals.", correct: "true"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "You 'get up' before you 'wake up'.", correct: "false"}] },

                // --- MCQ (36-39) ---
                { type: "mcq", instruction: "Choose the correct preposition.<br>I go to the gym _____ the evening.", options:[{t: "at", c: false}, {t: "in", c: true}, {t: "on", c: false}, {t: "by", c: false}] },
                { type: "mcq", instruction: "Choose the correct phrase.<br>When you finish your tasks for the day, you ________.", options:[{t: "start work", c: false}, {t: "finish work", c: true}, {t: "attend a meeting", c: false}, {t: "have breakfast", c: false}] },
                { type: "mcq", instruction: "Choose the correct word.<br>The meal you eat at 12:00 PM (noon) is called ________.", options:[{t: "Breakfast", c: false}, {t: "Lunch", c: true}, {t: "Dinner", c: false}, {t: "Snack", c: false}] },
                { type: "mcq", instruction: "Choose the correct adverb.<br>If you do something 5 days a week out of 7, you ________ do it.", options:[{t: "Never", c: false}, {t: "Usually", c: true}, {t: "Rarely", c: false}, {t: "Sometimes", c: false}] },

                // --- CATEGORIZE (40) ---
                { type: "categorize", instruction: "Sort the activities into Morning and Evening.", 
                    categories:[{id: "morn", name: "Morning"}, {id: "eve", name: "Evening"}],
                    items:[
                        {text: "Wake up", catId: "morn"}, 
                        {text: "Have breakfast", catId: "morn"}, 
                        {text: "Leave the house", catId: "morn"}, 
                        {text: "Get home", catId: "eve"}, 
                        {text: "Have dinner", catId: "eve"}, 
                        {text: "Go to bed", catId: "eve"}
                    ] 
                }
            ]
        },

        // ======================================================
        // STEP 8: WRITING PRACTICE
        // ======================================================
        {
            title: "Writing Practice",
            instruction: "Write a short paragraph (4-6 sentences) describing your typical weekday routine. Include what time you wake up, what you do in the morning, when you start/finish work or study, and what you do in the evening.",
            example: "I usually wake up at 6:30 a.m. every day. First, I take a shower and get dressed. I always have breakfast and drink coffee. I leave the house at 8:00 a.m. because I start work at 9:00 a.m. After work, I go to the gym, have dinner, and go to bed at 11:00 p.m.",
            prompts:[
                "Use time expressions (at 7:00 a.m., in the morning).",
                "Use sequence words like 'first', 'then', or 'after'.",
                "Include adverbs of frequency (always, usually, sometimes).",
                "Describe at least one morning activity and one evening activity."
            ]
        },

        // ======================================================
        // STEP 9: FLASHCARDS
        // ======================================================
        {
            title: "Flashcards",
            items:[
                // 2A Items (30 items)
                { term: "Wake up", definition: "To become conscious after sleeping.", defTrans: "Acordar", example: "I wake up naturally without an alarm.", audioFront: "TTS: Wake up", audioBack: "TTS: I wake up naturally without an alarm." },
                { term: "Get up", definition: "To rise from bed.", defTrans: "Levantar-se", example: "I get up at 7:00 AM on weekdays.", audioFront: "TTS: Get up", audioBack: "TTS: I get up at 7:00 AM on weekdays." },
                { term: "Take a shower", definition: "To wash one's body under a spray of water.", defTrans: "Tomar banho", example: "I take a shower to feel clean.", audioFront: "TTS: Take a shower", audioBack: "TTS: I take a shower to feel clean." },
                { term: "Get dressed", definition: "To put on clothes.", defTrans: "Vestir-se", example: "I get dressed quickly in the morning.", audioFront: "TTS: Get dressed", audioBack: "TTS: I get dressed quickly in the morning." },
                { term: "Brush my teeth", definition: "To clean one's teeth with a brush.", defTrans: "Escovar meus dentes", example: "I brush my teeth after eating.", audioFront: "TTS: Brush my teeth", audioBack: "TTS: I brush my teeth after eating." },
                { term: "Have breakfast", definition: "To eat the first meal of the day.", defTrans: "Tomar café da manhã", example: "I always have breakfast before going to work.", audioFront: "TTS: Have breakfast", audioBack: "TTS: I always have breakfast before going to work." },
                { term: "Drink coffee", definition: "To consume a hot, caffeinated beverage.", defTrans: "Beber café", example: "I drink coffee to get some energy.", audioFront: "TTS: Drink coffee", audioBack: "TTS: I drink coffee to get some energy." },
                { term: "Leave the house", definition: "To exit one's home.", defTrans: "Sair de casa", example: "I leave the house at 8 o'clock.", audioFront: "TTS: Leave the house", audioBack: "TTS: I leave the house at 8 o'clock." },
                { term: "Get home", definition: "To arrive at one's house.", defTrans: "Chegar em casa", example: "I get home late on Mondays.", audioFront: "TTS: Get home", audioBack: "TTS: I get home late on Mondays." },
                { term: "Go to bed", definition: "To go to sleep.", defTrans: "Ir para a cama (Dormir)", example: "I go to bed at 11:00 PM.", audioFront: "TTS: Go to bed", audioBack: "TTS: I go to bed at 11:00 PM." },

                { term: "Start work", definition: "To begin one's job duties.", defTrans: "Começar a trabalhar", example: "I start work at 9 AM every day.", audioFront: "TTS: Start work", audioBack: "TTS: I start work at 9 AM every day." },
                { term: "Finish work", definition: "To end one's job duties.", defTrans: "Terminar o trabalho", example: "I finish work at 5 PM.", audioFront: "TTS: Finish work", audioBack: "TTS: I finish work at 5 PM." },
                { term: "Have a break", definition: "To pause working for a short rest.", defTrans: "Fazer uma pausa", example: "Let's have a break and relax.", audioFront: "TTS: Have a break", audioBack: "TTS: Let's have a break and relax." },
                { term: "Have lunch", definition: "To eat the midday meal.", defTrans: "Almoçar", example: "I usually have lunch at noon.", audioFront: "TTS: Have lunch", audioBack: "TTS: I usually have lunch at noon." },
                { term: "Have dinner", definition: "To eat the evening meal.", defTrans: "Jantar", example: "We have dinner as a family at 8:00 PM.", audioFront: "TTS: Have dinner", audioBack: "TTS: We have dinner as a family at 8:00 PM." },
                { term: "Attend a meeting", definition: "To be present at a gathering for business.", defTrans: "Participar de uma reunião", example: "I need to attend a meeting with my boss.", audioFront: "TTS: Attend a meeting", audioBack: "TTS: I need to attend a meeting with my boss." },
                { term: "Do homework", definition: "To complete school assignments at home.", defTrans: "Fazer o dever de casa", example: "The students do homework after school.", audioFront: "TTS: Do homework", audioBack: "TTS: The students do homework after school." },
                { term: "Breakfast", definition: "The first meal of the day.", defTrans: "Café da manhã", example: "Breakfast is the first meal of the day.", audioFront: "TTS: Breakfast", audioBack: "TTS: Breakfast is the first meal of the day." },
                { term: "Lunch", definition: "A meal eaten in the middle of the day.", defTrans: "Almoço", example: "We eat lunch in the middle of the day.", audioFront: "TTS: Lunch", audioBack: "TTS: We eat lunch in the middle of the day." },
                { term: "Snack", definition: "A small amount of food eaten between meals.", defTrans: "Lanche", example: "I had a snack because I was hungry.", audioFront: "TTS: Snack", audioBack: "TTS: I had a snack because I was hungry." },

                { term: "Always", definition: "At all times; 100% of the time.", defTrans: "Sempre", example: "I always lock the door.", audioFront: "TTS: Always", audioBack: "TTS: I always lock the door." },
                { term: "Usually", definition: "Under normal conditions; generally.", defTrans: "Geralmente", example: "I usually watch TV after dinner.", audioFront: "TTS: Usually", audioBack: "TTS: I usually watch TV after dinner." },
                { term: "Often", definition: "Frequently; many times.", defTrans: "Frequentemente", example: "I often go to the gym.", audioFront: "TTS: Often", audioBack: "TTS: I often go to the gym." },
                { term: "Sometimes", definition: "Occasionally; about 50% of the time.", defTrans: "Às vezes", example: "I sometimes read a book in bed.", audioFront: "TTS: Sometimes", audioBack: "TTS: I sometimes read a book in bed." },
                { term: "Rarely", definition: "Not often; infrequently.", defTrans: "Raramente", example: "I rarely eat fast food.", audioFront: "TTS: Rarely", audioBack: "TTS: I rarely eat fast food." },
                { term: "Never", definition: "At no time in the past or future; 0%.", defTrans: "Nunca", example: "I never skip breakfast.", audioFront: "TTS: Never", audioBack: "TTS: I never skip breakfast." },
                { term: "Morning", definition: "The period of time between midnight and noon.", defTrans: "Manhã", example: "I drink tea in the morning.", audioFront: "TTS: Morning", audioBack: "TTS: I drink tea in the morning." },
                { term: "Afternoon", definition: "The time from noon or lunchtime to evening.", defTrans: "Tarde", example: "I work hard in the afternoon.", audioFront: "TTS: Afternoon", audioBack: "TTS: I work hard in the afternoon." },
                { term: "Evening", definition: "The period of time at the end of the day.", defTrans: "Noite", example: "I relax in the evening.", audioFront: "TTS: Evening", audioBack: "TTS: I relax in the evening." },
                { term: "Weekend", definition: "Saturday and Sunday.", defTrans: "Fim de semana", example: "I like to sleep late on the weekend.", audioFront: "TTS: Weekend", audioBack: "TTS: I like to sleep late on the weekend." },

                // 3A Items (12 items)
                { term: "What time do you usually wake up?", definition: "Asking about someone's morning schedule.", defTrans: "A que horas você costuma acordar?", example: "What time do you usually wake up?", audioFront: "TTS: What time do you usually wake up?", audioBack: "TTS: What time do you usually wake up?" },
                { term: "What do you do in the morning?", definition: "Asking about morning habits.", defTrans: "O que você faz de manhã?", example: "What do you do in the morning?", audioFront: "TTS: What do you do in the morning?", audioBack: "TTS: What do you do in the morning?" },
                { term: "When do you go to work?", definition: "Asking for a departure or start time for work.", defTrans: "Quando você vai para o trabalho?", example: "When do you go to work?", audioFront: "TTS: When do you go to work?", audioBack: "TTS: When do you go to work?" },
                { term: "Do you drink coffee every day?", definition: "Asking about a daily habit.", defTrans: "Você bebe café todos os dias?", example: "Do you drink coffee every day?", audioFront: "TTS: Do you drink coffee every day?", audioBack: "TTS: Do you drink coffee every day?" },
                { term: "What do you do after work?", definition: "Asking about evening or leisure activities.", defTrans: "O que você faz depois do trabalho?", example: "What do you do after work?", audioFront: "TTS: What do you do after work?", audioBack: "TTS: What do you do after work?" },
                { term: "What's your typical day like?", definition: "Asking someone to describe their daily routine.", defTrans: "Como é o seu dia típico?", example: "What's your typical day like?", audioFront: "TTS: What's your typical day like?", audioBack: "TTS: What's your typical day like?" },
                { term: "At 7:00 a.m.", definition: "Specifying an exact time.", defTrans: "Às 7 da manhã", example: "I wake up at 7:00 a.m.", audioFront: "TTS: At 7:00 a.m.", audioBack: "TTS: I wake up at 7:00 a.m." },
                { term: "In the morning", definition: "Specifying a part of the day.", defTrans: "De manhã", example: "I take a shower in the morning.", audioFront: "TTS: In the morning", audioBack: "TTS: I take a shower in the morning." },
                { term: "On weekdays", definition: "Specifying the days from Monday to Friday.", defTrans: "Nos dias de semana", example: "I go to school on weekdays.", audioFront: "TTS: On weekdays", audioBack: "TTS: I go to school on weekdays." },
                { term: "From 9 to 5", definition: "Indicating a duration of time.", defTrans: "Das 9 às 5", example: "I work from 9 to 5.", audioFront: "TTS: From 9 to 5", audioBack: "TTS: I work from 9 to 5." },
                { term: "Every day", definition: "Indicating a daily occurrence.", defTrans: "Todos os dias", example: "I exercise every day.", audioFront: "TTS: Every day", audioBack: "TTS: I exercise every day." },
                { term: "After work", definition: "Indicating the time following a work shift.", defTrans: "Depois do trabalho", example: "I relax after work.", audioFront: "TTS: After work", audioBack: "TTS: I relax after work." }
            ]
        }
    ],

    // ======================================================
    // GLOSSARY (All 42 items + Context words)
    // ======================================================
    glossary:[
        // 2A: Morning & Evening Actions
        { topic: "Actions", term: "wake-up", definition: "To become conscious after sleeping.", translation: "Acordar" },
        { topic: "Actions", term: "get-up", definition: "To rise from bed.", translation: "Levantar-se" },
        { topic: "Actions", term: "take-shower", definition: "To wash one's body under a spray of water.", translation: "Tomar banho" },
        { topic: "Actions", term: "get-dressed", definition: "To put on clothes.", translation: "Vestir-se" },
        { topic: "Actions", term: "brush-teeth", definition: "To clean one's teeth with a brush.", translation: "Escovar os dentes" },
        { topic: "Actions", term: "have-breakfast", definition: "To eat the first meal of the day.", translation: "Tomar café da manhã" },
        { topic: "Actions", term: "drink-coffee", definition: "To consume a hot, caffeinated beverage.", translation: "Beber café" },
        { topic: "Actions", term: "leave-house", definition: "To exit one's home.", translation: "Sair de casa" },
        { topic: "Actions", term: "get-home", definition: "To arrive at one's house.", translation: "Chegar em casa" },
        { topic: "Actions", term: "go-to-bed", definition: "To go to sleep.", translation: "Ir para a cama (Dormir)" },

        // 2A: Work, Study & Meals
        { topic: "Work & Meals", term: "start-work", definition: "To begin one's job duties.", translation: "Começar a trabalhar" },
        { topic: "Work & Meals", term: "finish-work", definition: "To end one's job duties.", translation: "Terminar o trabalho" },
        { topic: "Work & Meals", term: "have-break", definition: "To pause working for a short rest.", translation: "Fazer uma pausa" },
        { topic: "Work & Meals", term: "have-lunch", definition: "To eat the midday meal.", translation: "Almoçar" },
        { topic: "Work & Meals", term: "have-dinner", definition: "To eat the evening meal.", translation: "Jantar" },
        { topic: "Work & Meals", term: "attend-meeting", definition: "To be present at a gathering for business.", translation: "Participar de uma reunião" },
        { topic: "Work & Meals", term: "do-homework", definition: "To complete school assignments at home.", translation: "Fazer o dever de casa" },
        { topic: "Work & Meals", term: "breakfast", definition: "The first meal of the day.", translation: "Café da manhã" },
        { topic: "Work & Meals", term: "lunch", definition: "A meal eaten in the middle of the day.", translation: "Almoço" },
        { topic: "Work & Meals", term: "snack", definition: "A small amount of food eaten between meals.", translation: "Lanche" },

        // 2A: Time & Frequency
        { topic: "Time", term: "always", definition: "At all times; 100% of the time.", translation: "Sempre" },
        { topic: "Time", term: "usually", definition: "Under normal conditions; generally.", translation: "Geralmente" },
        { topic: "Time", term: "often", definition: "Frequently; many times.", translation: "Frequentemente" },
        { topic: "Time", term: "sometimes", definition: "Occasionally; about 50% of the time.", translation: "Às vezes" },
        { topic: "Time", term: "rarely", definition: "Not often; infrequently.", translation: "Raramente" },
        { topic: "Time", term: "never", definition: "At no time in the past or future; 0%.", translation: "Nunca" },
        { topic: "Time", term: "morning", definition: "The period between midnight and noon.", translation: "Manhã" },
        { topic: "Time", term: "afternoon", definition: "The time from noon to evening.", translation: "Tarde" },
        { topic: "Time", term: "evening", definition: "The period at the end of the day.", translation: "Noite" },
        { topic: "Time", term: "weekend", definition: "Saturday and Sunday.", translation: "Fim de semana" },

        // 3A: Expressions
        { topic: "Expressions", term: "what-time-wake", definition: "Asking about morning schedule.", translation: "A que horas você costuma acordar?" },
        { topic: "Expressions", term: "what-do-morning", definition: "Asking about morning habits.", translation: "O que você faz de manhã?" },
        { topic: "Expressions", term: "when-go-work", definition: "Asking for a departure time for work.", translation: "Quando você vai para o trabalho?" },
        { topic: "Expressions", term: "drink-coffee-everyday", definition: "Asking about a daily habit.", translation: "Você bebe café todos os dias?" },
        { topic: "Expressions", term: "what-do-after-work", definition: "Asking about evening activities.", translation: "O que você faz depois do trabalho?" },
        { topic: "Expressions", term: "what-typical-day", definition: "Asking to describe a daily routine.", translation: "Como é o seu dia típico?" },
        { topic: "Expressions", term: "at-7am", definition: "Specifying an exact time.", translation: "Às 7 da manhã" },
        { topic: "Expressions", term: "in-morning", definition: "Specifying a part of the day.", translation: "De manhã" },
        { topic: "Expressions", term: "on-weekdays", definition: "Specifying the days from Monday to Friday.", translation: "Nos dias de semana" },
        { topic: "Expressions", term: "from-9-to-5", definition: "Indicating a duration of time.", translation: "Das 9 às 5" },
        { topic: "Expressions", term: "every-day", definition: "Indicating a daily occurrence.", translation: "Todos os dias" },
        { topic: "Expressions", term: "after-work", definition: "Indicating the time following a work shift.", translation: "Depois do trabalho" },

        // Additional Context Words Used in Texts/Intros
        { topic: "Context", term: "routine", definition: "A sequence of actions regularly followed.", translation: "Rotina" },
        { topic: "Context", term: "study", definition: "To devote time and attention to acquiring knowledge.", translation: "Estudar" },
        { topic: "Context", term: "time-expression", definition: "A word or phrase used to tell when an action happens.", translation: "Expressão de tempo" },
        { topic: "Context", term: "adverb", definition: "A word that describes a verb, showing how often it occurs.", translation: "Advérbio" },
        { topic: "Context", term: "sleep", definition: "A condition of body and mind that typically recurs for several hours every night.", translation: "Dormir / Sono" },
        { topic: "Context", term: "when", definition: "At what time or period.", translation: "Quando" },
        { topic: "Context", term: "what-about-you", definition: "Asking someone the same question they just asked you.", translation: "E você?" },
        { topic: "Context", term: "in-evening", definition: "During the evening time.", translation: "À noite" }
    ]
});