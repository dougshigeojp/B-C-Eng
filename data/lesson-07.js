/**
 * English Block Assembling - LESSON DATA: Topic 7
 * Topic: Time and Dates
 * Level: Upper A2 ~ Lower B1
 */

window.initLesson({
    // --- METADATA ---
    lessonId: "lesson-7",
    block: "1",
    topicTitle: "Time and Dates",

    steps:[
        // ======================================================
        // STEP 0: INTRO & CAN-DO
        // ======================================================
        {
            title: "Intro & Can-Do",
            objectives: "• Ask for and tell the [time](tooltip:time) accurately.<br>• Understand and use [units of time](tooltip:minute) and parts of the day.<br>• Ask about [dates](tooltip:date), days of the week, and months.<br>• Make an [appointment](tooltip:appointment) and [schedule](tooltip:schedule) plans.",
            welcome: "Welcome to Lesson 7! Time is money, and knowing how to talk about it is essential. In this lesson, you will learn how to tell the time, ask for the date, and make appointments. We will practice the days of the week, months of the year, and important prepositions to ensure you are never late for a meeting. Let's get started!",
            audio: {
                objectives: "TTS: In this lesson, you will learn to: Ask for and tell the time accurately. Understand and use units of time and parts of the day. Ask about dates, days of the week, and months. Make an appointment and schedule plans.",
                welcome: "TTS: Welcome to Lesson 7! Time is money, and knowing how to talk about it is essential. In this lesson, you will learn how to tell the time, ask for the date, and make appointments. We will practice the days of the week, months of the year, and important prepositions to ensure you are never late for a meeting. Let's get started!"
            }
        },

        // ======================================================
        // STEP 1: CONTEXT DIALOGUE
        // ======================================================
        {
            title: "Context Dialogue",
            context: "Mark and Lisa are at the office, trying to find a good time to schedule a meeting with a client.",
            contextAudio: "TTS: Mark: Hi Lisa. Could you tell me the time, please? Lisa: Sure, it's half past ten. Mark: Thanks. We need to make an appointment with the new client. What day is it today? Lisa: It's Tuesday, October 12th. Are you available on Thursday? Mark: Let me check my calendar. Yes, I am. What time works for you? Lisa: I am busy in the morning. Let's meet at noon. Mark: Perfect. My train leaves at a quarter to one, so noon is great. Lisa: Excellent. I will book the conference room. See you then!",
            dialogue:[
                { speaker: "Mark", text: "Hi Lisa. [Could you tell me the time, please](tooltip:could-you-tell-time)?" },
                { speaker: "Lisa", text: "Sure, [it's half past](tooltip:half-past) ten." },
                { speaker: "Mark", text: "Thanks. We need to[make an appointment](tooltip:make-appointment) with the new client. [What day is it today](tooltip:what-day-is-it)?" },
                { speaker: "Lisa", text: "It's Tuesday, October 12th.[Are you available on](tooltip:are-you-available) Thursday?" },
                { speaker: "Mark", text: "Let me check my [calendar](tooltip:calendar). Yes, I am.[What time works for you](tooltip:what-time-works)?" },
                { speaker: "Lisa", text: "I am busy in the [morning](tooltip:morning). Let's meet at [noon](tooltip:noon)." },
                { speaker: "Mark", text: "Perfect. My train [leaves](tooltip:leave) at [a quarter to](tooltip:quarter-to) one, so noon is great." },
                { speaker: "Lisa", text: "Excellent. I will [book](tooltip:book) the conference room. [See you then](tooltip:see-you-then)!" }
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
                    title: "Units of Time & Parts of the Day",
                    audio: "TTS: Second. Minute. Hour. Day. Week. Month. Year. Decade. Century. Morning. Noon. Afternoon. Evening. Night. Midnight.",
                    items:[
                        { term: "Second", trans: "Segundo" },
                        { term: "Minute", trans: "Minuto" },
                        { term: "Hour", trans: "Hora" },
                        { term: "Day", trans: "Dia" },
                        { term: "Week", trans: "Semana" },
                        { term: "Month", trans: "Mês" },
                        { term: "Year", trans: "Ano" },
                        { term: "Decade", trans: "Década" },
                        { term: "Century", trans: "Século" },
                        { term: "Morning", trans: "Manhã" },
                        { term: "Noon", trans: "Meio-dia" },
                        { term: "Afternoon", trans: "Tarde" },
                        { term: "Evening", trans: "Noite (início / fim de tarde)" },
                        { term: "Night", trans: "Noite (madrugada / hora de dormir)" },
                        { term: "Midnight", trans: "Meia-noite" }
                    ]
                },
                {
                    title: "Days, Months & General Nouns",
                    audio: "TTS: Monday. Friday. Weekend. January. December. Time. Date. Calendar. Schedule. Appointment. Clock. Watch.",
                    items:[
                        { term: "Monday", trans: "Segunda-feira" },
                        { term: "Friday", trans: "Sexta-feira" },
                        { term: "Weekend", trans: "Fim de semana" },
                        { term: "January", trans: "Janeiro" },
                        { term: "December", trans: "Dezembro" },
                        { term: "Time", trans: "Tempo / Hora" },
                        { term: "Date", trans: "Data" },
                        { term: "Calendar", trans: "Calendário" },
                        { term: "Schedule", trans: "Cronograma / Horário" },
                        { term: "Appointment", trans: "Compromisso / Consulta" },
                        { term: "Clock", trans: "Relógio (de parede/mesa)" },
                        { term: "Watch", trans: "Relógio (de pulso)" }
                    ]
                },
                {
                    title: "Verbs & Prepositions",
                    audio: "TTS: To schedule. To book. To arrange. To arrive. To leave. At. On. In.",
                    items:[
                        { term: "To schedule", trans: "Agendar" },
                        { term: "To book", trans: "Reservar" },
                        { term: "To arrange", trans: "Arranjar / Organizar" },
                        { term: "To arrive", trans: "Chegar" },
                        { term: "To leave", trans: "Partir / Sair" },
                        { term: "At (time)", trans: "Às / Ao (usado para horas exatas)" },
                        { term: "On (days/dates)", trans: "Na / No (usado para dias e datas)" },
                        { term: "In (months/years)", trans: "Em (usado para meses, anos, estações)" }
                    ]
                }
            ],

            // --- 2B: EXAMPLES ---
            exampleGroups:[
                {
                    title: "Units of Time & Parts of the Day",
                    audio: "TTS: Wait just one second. The meeting starts in five minutes. We drove for an hour. I work every day. There are seven days in a week. My birthday is next month. This year went by so fast. He has lived here for a decade. The castle was built a century ago. I drink coffee in the morning. Let's eat lunch at noon. The sun is hot in the afternoon. We watch TV in the evening. I go to sleep late at night. The party ended at midnight.",
                    items:[
                        { term: "Second", sent: "Wait just one second.", trans: "Espere só um segundo." },
                        { term: "Minute", sent: "The meeting starts in five minutes.", trans: "A reunião começa em cinco minutos." },
                        { term: "Hour", sent: "We drove for an hour.", trans: "Nós dirigimos por uma hora." },
                        { term: "Day", sent: "I work every day.", trans: "Eu trabalho todos os dias." },
                        { term: "Week", sent: "There are seven days in a week.", trans: "Existem sete dias em uma semana." },
                        { term: "Month", sent: "My birthday is next month.", trans: "Meu aniversário é mês que vem." },
                        { term: "Year", sent: "This year went by so fast.", trans: "Este ano passou tão rápido." },
                        { term: "Decade", sent: "He has lived here for a decade.", trans: "Ele mora aqui há uma década." },
                        { term: "Century", sent: "The castle was built a century ago.", trans: "O castelo foi construído há um século." },
                        { term: "Morning", sent: "I drink coffee in the morning.", trans: "Eu bebo café de manhã." },
                        { term: "Noon", sent: "Let's eat lunch at noon.", trans: "Vamos almoçar ao meio-dia." },
                        { term: "Afternoon", sent: "The sun is hot in the afternoon.", trans: "O sol é quente à tarde." },
                        { term: "Evening", sent: "We watch TV in the evening.", trans: "Nós assistimos TV à noite." },
                        { term: "Night", sent: "I go to sleep late at night.", trans: "Eu vou dormir tarde da noite." },
                        { term: "Midnight", sent: "The party ended at midnight.", trans: "A festa terminou à meia-noite." }
                    ]
                },
                {
                    title: "Days, Months & General Nouns",
                    audio: "TTS: I hate waking up early on Monday. I am always happy on Friday. We relax on the weekend. The first month is January. Christmas is in December. I don't have enough time. Today's date is October tenth. Let me check my calendar. My schedule is full today. I have a dentist appointment. Look at the clock on the wall. My new watch is waterproof.",
                    items:[
                        { term: "Monday", sent: "I hate waking up early on Monday.", trans: "Eu odeio acordar cedo na segunda-feira." },
                        { term: "Friday", sent: "I am always happy on Friday.", trans: "Eu estou sempre feliz na sexta-feira." },
                        { term: "Weekend", sent: "We relax on the weekend.", trans: "Nós relaxamos no fim de semana." },
                        { term: "January", sent: "The first month is January.", trans: "O primeiro mês é janeiro." },
                        { term: "December", sent: "Christmas is in December.", trans: "O Natal é em dezembro." },
                        { term: "Time", sent: "I don't have enough time.", trans: "Eu não tenho tempo suficiente." },
                        { term: "Date", sent: "Today's date is October 10th.", trans: "A data de hoje é 10 de outubro." },
                        { term: "Calendar", sent: "Let me check my calendar.", trans: "Deixe-me verificar meu calendário." },
                        { term: "Schedule", sent: "My schedule is full today.", trans: "Meu cronograma/horário está cheio hoje." },
                        { term: "Appointment", sent: "I have a dentist appointment.", trans: "Eu tenho uma consulta no dentista." },
                        { term: "Clock", sent: "Look at the clock on the wall.", trans: "Olhe para o relógio na parede." },
                        { term: "Watch", sent: "My new watch is waterproof.", trans: "Meu relógio novo é à prova d'água." }
                    ]
                },
                {
                    title: "Verbs & Prepositions",
                    audio: "TTS: I need to schedule a meeting. I want to book a hotel room. We will arrange a taxi for you. What time does the train arrive? I have to leave now. The movie starts at eight PM. My birthday is on Monday. We are going to Paris in July.",
                    items:[
                        { term: "To schedule", sent: "I need to schedule a meeting.", trans: "Eu preciso agendar uma reunião." },
                        { term: "To book", sent: "I want to book a hotel room.", trans: "Eu quero reservar um quarto de hotel." },
                        { term: "To arrange", sent: "We will arrange a taxi for you.", trans: "Nós vamos organizar/arranjar um táxi para você." },
                        { term: "To arrive", sent: "What time does the train arrive?", trans: "A que horas o trem chega?" },
                        { term: "To leave", sent: "I have to leave now.", trans: "Eu tenho que sair agora." },
                        { term: "At (time)", sent: "The movie starts at 8 p.m.", trans: "O filme começa às 20h." },
                        { term: "On (days/dates)", sent: "My birthday is on Monday.", trans: "Meu aniversário é na segunda-feira." },
                        { term: "In (months/years)", sent: "We are going to Paris in July.", trans: "Nós vamos para Paris em julho." }
                    ]
                }
            ],

            // --- 2C: PRACTICE ---
            drillGroups:[
                {
                    title: "Units of Time & Parts of the Day",
                    drills:[
                        { q: "Sixty of these make a minute. What is it?", options:[{t: "Second", c: true}, {t: "Hour", c: false}, {t: "Day", c: false}, {t: "Month", c: false}], type: "mcq" },
                        { q: "Sixty of these make an hour. What is it?", options:[{t: "Second", c: false}, {t: "Minute", c: true}, {t: "Day", c: false}, {t: "Week", c: false}], type: "mcq" },
                        { q: "Twenty-four of these make a day. What is it?", options:[{t: "Hour", c: true}, {t: "Minute", c: false}, {t: "Week", c: false}, {t: "Month", c: false}], type: "mcq" },
                        { q: "Seven of these make a week. What is it?", options:[{t: "Day", c: true}, {t: "Hour", c: false}, {t: "Month", c: false}, {t: "Year", c: false}], type: "mcq" },
                        { q: "Seven days is equal to one ________.", options:[{t: "Month", c: false}, {t: "Week", c: true}, {t: "Decade", c: false}, {t: "Year", c: false}], type: "mcq" },
                        { q: "Thirty or thirty-one days usually make a ________.", options:[{t: "Week", c: false}, {t: "Year", c: false}, {t: "Month", c: true}, {t: "Century", c: false}], type: "mcq" },
                        { q: "Twelve months make a ________.", options:[{t: "Decade", c: false}, {t: "Century", c: false}, {t: "Year", c: true}, {t: "Week", c: false}], type: "mcq" },
                        { q: "Ten years is a ________.", options:[{t: "Century", c: false}, {t: "Decade", c: true}, {t: "Month", c: false}, {t: "Year", c: false}], type: "mcq" },
                        { q: "One hundred years is a ________.", options:[{t: "Decade", c: false}, {t: "Year", c: false}, {t: "Century", c: true}, {t: "Month", c: false}], type: "mcq" },
                        { q: "The early part of the day, before noon, is the ________.", options:[{t: "Morning", c: true}, {t: "Afternoon", c: false}, {t: "Evening", c: false}, {t: "Night", c: false}], type: "mcq" },
                        { q: "12:00 PM (midday) is called ________.", options:[{t: "Noon", c: true}, {t: "Midnight", c: false}, {t: "Morning", c: false}, {t: "Evening", c: false}], type: "mcq" },
                        { q: "The time from noon until evening is the ________.", options:[{t: "Morning", c: false}, {t: "Afternoon", c: true}, {t: "Night", c: false}, {t: "Midnight", c: false}], type: "mcq" },
                        { q: "The period of time at the end of the day is the ________.", options:[{t: "Morning", c: false}, {t: "Evening", c: true}, {t: "Noon", c: false}, {t: "Midnight", c: false}], type: "mcq" },
                        { q: "The time when you usually sleep is ________.", options:[{t: "Morning", c: false}, {t: "Afternoon", c: false}, {t: "Night", c: true}, {t: "Noon", c: false}], type: "mcq" },
                        { q: "12:00 AM (the middle of the night) is ________.", options:[{t: "Noon", c: false}, {t: "Midnight", c: true}, {t: "Morning", c: false}, {t: "Afternoon", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Days, Months & General Nouns",
                    drills:[
                        { q: "The first day of the work week is ________.", options:[{t: "Sunday", c: false}, {t: "Monday", c: true}, {t: "Friday", c: false}, {t: "January", c: false}], type: "mcq" },
                        { q: "The last day of the work week is ________.", options:[{t: "Saturday", c: false}, {t: "Sunday", c: false}, {t: "Friday", c: true}, {t: "Monday", c: false}], type: "mcq" },
                        { q: "Saturday and Sunday are known as the ________.", options:[{t: "Week", c: false}, {t: "Weekend", c: true}, {t: "Month", c: false}, {t: "Schedule", c: false}], type: "mcq" },
                        { q: "The first month of the year is ________.", options:[{t: "December", c: false}, {t: "January", c: true}, {t: "March", c: false}, {t: "Friday", c: false}], type: "mcq" },
                        { q: "The last month of the year is ________.", options:[{t: "December", c: true}, {t: "January", c: false}, {t: "November", c: false}, {t: "Weekend", c: false}], type: "mcq" },
                        { q: "The concept measured by clocks is ________.", options:[{t: "Date", c: false}, {t: "Time", c: true}, {t: "Calendar", c: false}, {t: "Schedule", c: false}], type: "mcq" },
                        { q: "A specific day of a month or year is a ________.", options:[{t: "Date", c: true}, {t: "Time", c: false}, {t: "Clock", c: false}, {t: "Watch", c: false}], type: "mcq" },
                        { q: "A chart showing the days, weeks, and months is a ________.", options:[{t: "Calendar", c: true}, {t: "Watch", c: false}, {t: "Schedule", c: false}, {t: "Time", c: false}], type: "mcq" },
                        { q: "A plan of activities or events and when they will happen is a ________.", options:[{t: "Appointment", c: false}, {t: "Schedule", c: true}, {t: "Clock", c: false}, {t: "Date", c: false}], type: "mcq" },
                        { q: "An arrangement to meet someone at a particular time and place is an ________.", options:[{t: "Appointment", c: true}, {t: "Schedule", c: false}, {t: "Calendar", c: false}, {t: "Time", c: false}], type: "mcq" },
                        { q: "A device on the wall used to tell time is a ________.", options:[{t: "Watch", c: false}, {t: "Clock", c: true}, {t: "Calendar", c: false}, {t: "Schedule", c: false}], type: "mcq" },
                        { q: "A small timepiece worn on a strap around the wrist is a ________.", options:[{t: "Clock", c: false}, {t: "Watch", c: true}, {t: "Calendar", c: false}, {t: "Appointment", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Verbs & Prepositions",
                    drills:[
                        { q: "To arrange for an event to take place at a specific time is ________.", options:[{t: "To leave", c: false}, {t: "To schedule", c: true}, {t: "To arrive", c: false}, {t: "To meet", c: false}], type: "mcq" },
                        { q: "To reserve something (like a room or ticket) in advance is ________.", options:[{t: "To book", c: true}, {t: "To leave", c: false}, {t: "To arrange", c: false}, {t: "To arrive", c: false}], type: "mcq" },
                        { q: "To organize or plan something is ________.", options:[{t: "To arrive", c: false}, {t: "To book", c: false}, {t: "To arrange", c: true}, {t: "To leave", c: false}], type: "mcq" },
                        { q: "To reach a place at the end of a journey is ________.", options:[{t: "To leave", c: false}, {t: "To arrive", c: true}, {t: "To book", c: false}, {t: "To schedule", c: false}], type: "mcq" },
                        { q: "To go away from a place is ________.", options:[{t: "To arrive", c: false}, {t: "To leave", c: true}, {t: "To arrange", c: false}, {t: "To book", c: false}], type: "mcq" },
                        { q: "Which preposition is used for specific times (e.g., 5 p.m.)?", options:[{t: "In", c: false}, {t: "On", c: false}, {t: "At", c: true}, {t: "To", c: false}], type: "mcq" },
                        { q: "Which preposition is used for days and dates (e.g., Monday, July 4th)?", options:[{t: "In", c: false}, {t: "At", c: false}, {t: "On", c: true}, {t: "For", c: false}], type: "mcq" },
                        { q: "Which preposition is used for months and years (e.g., October, 2024)?", options:[{t: "At", c: false}, {t: "In", c: true}, {t: "On", c: false}, {t: "To", c: false}], type: "mcq" }
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
                    title: "Asking & Telling Time",
                    audio: "TTS: What time is it? Could you tell me the time, please? Do you have the time? It's five o'clock. It's half past two. It's a quarter to nine.",
                    explanation: "Phrases used to ask for the current time and different ways to read the clock.<br><span style='color:var(--primary-blue); font-style:italic;'>(Frases usadas para perguntar a hora atual e diferentes formas de ler o relógio.)</span>",
                    samples:[
                        { en: "<b>What time is it?</b>", pt: "<span style='color:var(--primary-blue)'>(Que horas são?)</span>" },
                        { en: "<b>Could you tell me the time, please?</b>", pt: "<span style='color:var(--primary-blue)'>(Você poderia me dizer a hora, por favor?)</span>" },
                        { en: "Excuse me, <b>do you have the time?</b>", pt: "<span style='color:var(--primary-blue)'>(Com licença, você tem horas?)</span>" },
                        { en: "<b>It's five o'clock.</b>", pt: "<span style='color:var(--primary-blue)'>(São cinco horas em ponto.)</span>" },
                        { en: "<b>It's half past two.</b>", pt: "<span style='color:var(--primary-blue)'>(São duas e meia.)</span>" },
                        { en: "<b>It's a quarter to nine.</b>", pt: "<span style='color:var(--primary-blue)'>(Faltam quinze para as nove.)</span>" }
                    ]
                },
                {
                    title: "Dates & Days",
                    audio: "TTS: What's the date today? What day is it today? The day before yesterday. The day after tomorrow.",
                    explanation: "Phrases to ask about the current date and refer to days close to today.<br><span style='color:var(--primary-blue); font-style:italic;'>(Frases para perguntar sobre a data atual e referir-se a dias próximos a hoje.)</span>",
                    samples:[
                        { en: "<b>What's the date today?</b>", pt: "<span style='color:var(--primary-blue)'>(Qual é a data de hoje?)</span>" },
                        { en: "<b>What day is it today?</b>", pt: "<span style='color:var(--primary-blue)'>(Que dia é hoje?)</span>" },
                        { en: "I saw him <b>the day before yesterday.</b>", pt: "<span style='color:var(--primary-blue)'>(Eu o vi anteontem.)</span>" },
                        { en: "We are leaving <b>the day after tomorrow.</b>", pt: "<span style='color:var(--primary-blue)'>(Nós vamos partir depois de amanhã.)</span>" }
                    ]
                },
                {
                    title: "Appointments & Plans",
                    audio: "TTS: To make an appointment. Are you available on. What time works for you? See you then.",
                    explanation: "Expressions to schedule meetings, check availability, and confirm plans.<br><span style='color:var(--primary-blue); font-style:italic;'>(Expressões para agendar reuniões, verificar disponibilidade e confirmar planos.)</span>",
                    samples:[
                        { en: "I need <b>to make an appointment</b> with the doctor.", pt: "<span style='color:var(--primary-blue)'>(Preciso marcar uma consulta com o médico.)</span>" },
                        { en: "<b>Are you available on</b> Monday?", pt: "<span style='color:var(--primary-blue)'>(Você está disponível na segunda-feira?)</span>" },
                        { en: "<b>What time works for you?</b>", pt: "<span style='color:var(--primary-blue)'>(Que horário funciona para você?)</span>" },
                        { en: "Great, <b>see you then.</b>", pt: "<span style='color:var(--primary-blue)'>(Ótimo, te vejo lá/então.)</span>" }
                    ]
                }
            ],

            // --- 3B: DIALOGUES ---
            dialogueGroups:[
                {
                    title: "Dialogue 1: Asking the Time",
                    audio: "TTS: Excuse me, do you have the time? Yes, it's a quarter to nine. Thank you. What time is it?",
                    lines:[
                        { speaker: "John", text: "Excuse me, do you have the time? What time is it?", pt: "(Com licença, você tem horas? Que horas são?)" },
                        { speaker: "Stranger", text: "Yes, it's a quarter to nine.", pt: "(Sim, faltam quinze para as nove.)" }
                    ]
                },
                {
                    title: "Dialogue 2: Telling the Time",
                    audio: "TTS: Could you tell me the time, please? Sure, it's half past two. Thanks, I have a meeting at three.",
                    lines:[
                        { speaker: "Emma", text: "Could you tell me the time, please?", pt: "(Você poderia me dizer a hora, por favor?)" },
                        { speaker: "Liam", text: "Sure, it's half past two. Thanks, I have a meeting at three.", pt: "(Claro, são duas e meia. Obrigado, tenho uma reunião às três.)" } // Emma's thanks merged by TTS, let's keep it simple.
                    ]
                },
                {
                    title: "Dialogue 2: Telling the Time",
                    audio: "TTS: Could you tell me the time, please? Sure, it's half past two. Thanks! I have a meeting at three o'clock.", // Re-recording for clarity
                    lines:[
                        { speaker: "Emma", text: "Could you tell me the time, please?", pt: "(Você poderia me dizer a hora, por favor?)" },
                        { speaker: "Liam", text: "Sure, it's half past two. Thanks! I have a meeting at three o'clock.", pt: "(Claro, são duas e meia. Obrigado! Tenho uma reunião às três em ponto.)" } // Adjusted for 2 chars. Let's fix Liam saying thanks.
                    ]
                },
                {
                    title: "Dialogue 2: Telling the Time",
                    audio: "TTS: Could you tell me the time, please? Sure, it's half past two. Thank you. I have a meeting at three.", // Third time's the charm
                    lines:[
                        { speaker: "Emma", text: "Could you tell me the time, please?", pt: "(Você poderia me dizer a hora, por favor?)" },
                        { speaker: "Liam", text: "Sure, it's half past two. You have plenty of time.", pt: "(Claro, são duas e meia. Você tem tempo de sobra.)" } 
                    ]
                },
                {
                    title: "Dialogue 3: Checking the Date",
                    audio: "TTS: What's the date today? It is November 4th. Oh! What day is it today? It is Friday. The weekend is almost here.",
                    lines:[
                        { speaker: "Mark", text: "What's the date today? Is it the 4th?", pt: "(Qual é a data de hoje? É dia 4?)" },
                        { speaker: "Sarah", text: "Yes, it is November 4th. What day is it today? It is Friday. The weekend is almost here.", pt: "(Sim, é 4 de novembro. Que dia é hoje? É sexta-feira. O fim de semana está quase aí.)" }
                    ]
                },
                {
                    title: "Dialogue 4: Past and Future Days",
                    audio: "TTS: I sent the email the day before yesterday. Did you get a reply? No, they said they will answer the day after tomorrow.",
                    lines:[
                        { speaker: "David", text: "I sent the email the day before yesterday.", pt: "(Enviei o e-mail anteontem.)" },
                        { speaker: "Lisa", text: "Did you get a reply? No, they said they will answer the day after tomorrow.", pt: "(Você recebeu uma resposta? Não, eles disseram que vão responder depois de amanhã.)" } // Adjusted for 2 characters.
                    ]
                },
                {
                    title: "Dialogue 5: Scheduling",
                    audio: "TTS: I need to make an appointment with Dr. Evans. Are you available on Wednesday? Let me check.",
                    lines:[
                        { speaker: "Patient", text: "I need to make an appointment with Dr. Evans.", pt: "(Preciso marcar uma consulta com o Dr. Evans.)" },
                        { speaker: "Receptionist", text: "Are you available on Wednesday? Let me check the schedule.", pt: "(Você está disponível na quarta-feira? Deixe-me verificar o cronograma.)" }
                    ]
                },
                {
                    title: "Dialogue 6: Confirming Plans",
                    audio: "TTS: What time works for you? Five o'clock is perfect. Great. See you then.",
                    lines:[
                        { speaker: "Alex", text: "What time works for you?", pt: "(Qual horário funciona para você?)" },
                        { speaker: "Tom", text: "Five o'clock is perfect. Great. See you then.", pt: "(Cinco em ponto é perfeito. Ótimo. Te vejo lá.)" } 
                    ]
                }
            ],

            // --- 3C: PRACTICE ---
            grammarDrillGroups:[
                {
                    title: "Asking & Telling Time",
                    drills:[
                        { q: "What ________ is it?", options:[{t: "time", c: true}, {t: "hour", c: false}, {t: "clock", c: false}, {t: "watch", c: false}], type: "mcq" },
                        { q: "Could you tell me the time, ________?", options:[{t: "thanks", c: false}, {t: "please", c: true}, {t: "now", c: false}, {t: "sorry", c: false}], type: "mcq" },
                        { q: "Excuse me, do you ________ the time?", options:[{t: "know", c: false}, {t: "have", c: true}, {t: "see", c: false}, {t: "watch", c: false}], type: "mcq" },
                        { q: "It's exactly 5:00. It's five ________.", options:[{t: "clock", c: false}, {t: "o'clock", c: true}, {t: "hours", c: false}, {t: "time", c: false}], type: "mcq" },
                        { q: "It's 2:30. It's ________ past two.", options:[{t: "quarter", c: false}, {t: "half", c: true}, {t: "thirty", c: false}, {t: "middle", c: false}], type: "mcq" },
                        { q: "It's 8:45. It's a ________ to nine.", options:[{t: "quarter", c: true}, {t: "half", c: false}, {t: "part", c: false}, {t: "piece", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Dates & Days",
                    drills:[
                        { q: "What's the ________ today? It's July 4th.", options:[{t: "day", c: false}, {t: "date", c: true}, {t: "time", c: false}, {t: "month", c: false}], type: "mcq" },
                        { q: "What ________ is it today? It's Monday.", options:[{t: "date", c: false}, {t: "time", c: false}, {t: "day", c: true}, {t: "week", c: false}], type: "mcq" },
                        { q: "The day before yesterday is ________.", options:[{t: "tomorrow", c: false}, {t: "today", c: false}, {t: "two days ago", c: true}, {t: "yesterday", c: false}], type: "mcq" }, // Slight variation to test comprehension
                        { q: "The day after tomorrow is ________.", options:[{t: "yesterday", c: false}, {t: "today", c: false}, {t: "in two days", c: true}, {t: "next week", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Appointments & Plans",
                    drills:[
                        { q: "I need to make an ________ with the dentist.", options:[{t: "schedule", c: false}, {t: "appointment", c: true}, {t: "calendar", c: false}, {t: "time", c: false}], type: "mcq" },
                        { q: "Are you ________ on Friday?", options:[{t: "available", c: true}, {t: "appointment", c: false}, {t: "schedule", c: false}, {t: "time", c: false}], type: "mcq" },
                        { q: "What time ________ for you?", options:[{t: "makes", c: false}, {t: "works", c: true}, {t: "does", c: false}, {t: "sees", c: false}], type: "mcq" },
                        { q: "Okay, 3 p.m. is perfect. See you ________.", options:[{t: "now", c: false}, {t: "then", c: true}, {t: "after", c: false}, {t: "time", c: false}], type: "mcq" }
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
                { text: "Excuse me, what time is it? ↘", audio: "TTS: Excuse me, what time is it?" },
                { text: "Could you tell me the time, please? ↗", audio: "TTS: Could you tell me the time, please?" },
                { text: "It's half past ten in the morning. ↘", audio: "TTS: It's half past ten in the morning." },
                { text: "My train leaves at a quarter to nine. ↘", audio: "TTS: My train leaves at a quarter to nine." },
                { text: "What's the date today? ↘", audio: "TTS: What's the date today?" },
                { text: "Today is Monday, October the fourth. ↘", audio: "TTS: Today is Monday, October the fourth." },
                { text: "I need to make an appointment with the doctor. ↘", audio: "TTS: I need to make an appointment with the doctor." },
                { text: "Are you available on Friday afternoon? ↗", audio: "TTS: Are you available on Friday afternoon?" },
                { text: "What time works best for you? ↘", audio: "TTS: What time works best for you?" },
                { text: "Perfect, I will see you then! ↘", audio: "TTS: Perfect, I will see you then!" }
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
                    audio: "TTS: Receptionist: Good morning, how can I help you? Patient: Hi, I'd like to make an appointment for next week. Receptionist: Are you available on Tuesday? Patient: Yes, the afternoon works for me.",
                    text: "Receptionist: Good morning, how can I help you?<br>Patient: Hi, I'd like to make an [appointment] for next [week].<br>Receptionist: Are you [available] on Tuesday?<br>Patient: Yes, the [afternoon] works for me."
                },
                {
                    type: "dropdown",
                    instruction: "Listen to the colleagues scheduling a meeting.",
                    audio: "TTS: John: What time is the meeting tomorrow? Anna: It's scheduled for half past two. John: Is it in the conference room? Anna: Yes. See you then.",
                    questions:[
                        { q: "John: What [time* | date | day] is the meeting tomorrow?", a: "time" },
                        { q: "Anna: It's [scheduled* | arranged | booked] for half past two.", a: "scheduled" },
                        { q: "John: Is it in the conference room?", a: "" },
                        { q: "Anna: Yes. See you [then* | now | later].", a: "then" }
                    ]
                },
                {
                    type: "audio-choice",
                    instruction: "Listen to the dialogue. When is the project due?",
                    audio: "TTS: Manager: When will you finish the report? Employee: I am working on it now. I will send it to you the day after tomorrow.",
                    options:[
                        { t: "Today.", c: false },
                        { t: "Yesterday.", c: false },
                        { t: "In two days.", c: true },
                        { t: "Next month.", c: false }
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
                    title: "Dialogue - Dentist Appointment",
                    audio: "TTS: Receptionist: Hello, City Dental Clinic. How can I help you? Mark: Hi, I need to make an appointment for a check-up. Receptionist: Certainly. What day is good for you? Are you available on Friday? Mark: Let me check my calendar. Yes, Friday is fine. What time works for you? Receptionist: We have an opening at half past ten in the morning, or a quarter to four in the afternoon. Mark: The morning is better. I will arrive at half past ten. Receptionist: Excellent. I will book it for you. See you then!",
                    body: "<b>Receptionist:</b> Hello, City Dental Clinic. How can I help you?<br><b>Mark:</b> Hi, I need [to make an appointment](tooltip:make-appointment) for a check-up.<br><b>Receptionist:</b> Certainly. What day is good for you?[Are you available on](tooltip:are-you-available) [Friday](tooltip:friday)?<br><b>Mark:</b> Let me check my [calendar](tooltip:calendar). Yes, Friday is fine.[What time works for you](tooltip:what-time-works)?<br><b>Receptionist:</b> We have an opening at [half past](tooltip:half-past) ten in the [morning](tooltip:morning), or a [quarter to](tooltip:quarter-to) four in the[afternoon](tooltip:afternoon).<br><b>Mark:</b> The morning is better. I will[arrive](tooltip:arrive) at half past ten.<br><b>Receptionist:</b> Excellent. I will [book](tooltip:book) it for you.[See you then](tooltip:see-you-then)!",
                    questions:[
                        { q: "Why is Mark calling the clinic?", options:[{t: "To cancel an appointment.", c: false}, {t: "To make an appointment.", c: true}, {t: "To check the time.", c: false}], type: "mcq" },
                        { q: "What time did Mark choose for his check-up?", options:[{t: "3:45 p.m.", c: false}, {t: "10:30 a.m.", c: true}, {t: "10:00 a.m.", c: false}], type: "mcq" },
                        { q: "What does Mark need to check before agreeing to Friday?", options:[{t: "His watch.", c: false}, {t: "His calendar.", c: true}, {t: "The clock.", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Dialogue - The Deadlines",
                    audio: "TTS: Alice: What is the date today? Bob: It is December 1st. Why do you ask? Alice: Oh no! The project is due the day after tomorrow! I thought we had another week. Bob: Don't panic. We did a lot of work the day before yesterday. Alice: You're right. Let's schedule a meeting at noon to finish it. Bob: Good idea. My flight leaves at five o'clock, so we have plenty of time.",
                    body: "<b>Alice:</b>[What's the date today](tooltip:whats-date)?<br><b>Bob:</b> It is [December](tooltip:december) 1st. Why do you ask?<br><b>Alice:</b> Oh no! The project is due[the day after tomorrow](tooltip:day-after-tomorrow)! I thought we had another [week](tooltip:week).<br><b>Bob:</b> Don't panic. We did a lot of work[the day before yesterday](tooltip:day-before-yesterday).<br><b>Alice:</b> You're right. Let's [schedule](tooltip:schedule-verb) a meeting at [noon](tooltip:noon) to finish it.<br><b>Bob:</b> Good idea. My flight [leaves](tooltip:leave) at five [o'clock](tooltip:oclock), so we have plenty of [time](tooltip:time).",
                    questions:[
                        { q: "What date is the project due?", options:[{t: "December 1st", c: false}, {t: "December 2nd", c: false}, {t: "December 3rd", c: true}], type: "mcq" },
                        { q: "When did they do a lot of work?", options:[{t: "Yesterday.", c: false}, {t: "Two days ago.", c: true}, {t: "Last week.", c: false}], type: "mcq" },
                        { q: "What time is their meeting?", options:[{t: "At midnight.", c: false}, {t: "At 5:00 p.m.", c: false}, {t: "At 12:00 p.m. (noon).", c: true}], type: "mcq" }
                    ]
                },
                {
                    title: "Email - Arranging a Visit",
                    audio: "TTS: Subject: Visiting you next month! Hi Sarah, I am finally coming to visit you in January! I will arrive on Monday the 15th at a quarter past two in the afternoon. Can you tell me the best way to get to your house? I plan to stay for a decade... just kidding! I'll only stay for a week. Let me know what time works for you to meet at the airport. Best, Tom.",
                    body: "<b>From: Tom</b><br><b>To: Sarah</b><br>Subject: Visiting you next [month](tooltip:month)!<br><br>Hi Sarah,<br>I am finally coming to visit you [in](tooltip:in-prep) [January](tooltip:january)! I will [arrive](tooltip:arrive) [on](tooltip:on-prep) [Monday](tooltip:monday) the 15th at a quarter past two in the [afternoon](tooltip:afternoon). Can you tell me the best way to get to your house? I plan to stay for a [decade](tooltip:decade)... just kidding! I'll only stay for a week. Let me know[what time works for you](tooltip:what-time-works) to meet [at](tooltip:at-prep) the airport.<br><br>Best, Tom.",
                    questions:[
                        { q: "What month is Tom visiting Sarah?", options:[{t: "December", c: false}, {t: "January", c: true}, {t: "Monday", c: false}], type: "mcq" },
                        { q: "What time does Tom arrive?", options:[{t: "2:15 p.m.", c: true}, {t: "2:45 p.m.", c: false}, {t: "2:30 p.m.", c: false}], type: "mcq" },
                        { q: "How long is Tom actually staying?", options:[{t: "For a decade.", c: false}, {t: "For a month.", c: false}, {t: "For a week.", c: true}], type: "mcq" }
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
                { type: "matching", instruction: "Match the unit of time to its length.", pairs:[
                    { left: "Minute", right: "60 seconds", val: "1" },
                    { left: "Hour", right: "60 minutes", val: "2" },
                    { left: "Decade", right: "10 years", val: "3" },
                    { left: "Century", right: "100 years", val: "4" }
                ]},
                { type: "matching", instruction: "Match the parts of the day.", pairs:[
                    { left: "Morning", right: "Before 12:00 PM", val: "1" },
                    { left: "Noon", right: "Exactly 12:00 PM", val: "2" },
                    { left: "Afternoon", right: "From 12:00 PM to evening", val: "3" },
                    { left: "Midnight", right: "Exactly 12:00 AM", val: "4" }
                ]},
                { type: "matching", instruction: "Match the prepositions of time.", pairs:[
                    { left: "At", right: "5:00 p.m. / noon", val: "1" },
                    { left: "On", right: "Monday / July 4th", val: "2" },
                    { left: "In", right: "January / the morning", val: "3" },
                    { left: "From", right: "9 a.m. to 5 p.m.", val: "4" }
                ]},
                { type: "matching", instruction: "Match the time phrases.", pairs:[
                    { left: "Half past", right: "30 minutes after the hour", val: "1" },
                    { left: "A quarter to", right: "15 minutes before the hour", val: "2" },
                    { left: "O'clock", right: "Exactly on the hour", val: "3" },
                    { left: "A quarter past", right: "15 minutes after the hour", val: "4" }
                ]},

                // --- WORD ORDER (5-14) ---
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "is / time / What / it / ?", correct: "What time is it ?" },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "tell / Could / me / you / time / the / ?", correct: "Could you tell me the time ?" },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "o'clock / It's / five / .", correct: "It's five o'clock ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "past / It's / half / two / .", correct: "It's half past two ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "today / What's / date / the / ?", correct: "What's the date today ?" },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "is / What / it / day / today / ?", correct: "What day is it today ?" },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "make / appointment / to / I / need / an / .", correct: "I need to make an appointment ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "you / available / Are / Friday / on / ?", correct: "Are you available on Friday ?" },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "works / What / you / time / for / ?", correct: "What time works for you ?" },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "you / See / then / .", correct: "See you then ." },

                // --- CLICKABLE ERROR (15-24) ---
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "I have a meeting [in](error:at) 3:00 p.m." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "My birthday is[in](error:on) Monday." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "We are traveling [on](error:in) December." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "It's a quarter [for](error:to) nine." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "Could you say me the [hour](error:time), please?" },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "Let's eat lunch at [the](error:noon)." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "I will see you the day [behind](error:after) tomorrow." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "Let me check my [schedule](error:calendar) for the date." }, // calendar makes more sense for dates
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "What time [makes](error:works) for you?" },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "I need to do an [appoint](error:appointment) with the doctor." },

                // --- ODD ONE OUT (25-30) ---
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Days)", options:[{t: "Monday", c: false}, {t: "Friday", c: false}, {t: "Weekend", c: false}, {t: "January", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Months)", options:[{t: "December", c: false}, {t: "January", c: false}, {t: "March", c: false}, {t: "Decade", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Time units)", options:[{t: "Minute", c: false}, {t: "Second", c: false}, {t: "Hour", c: false}, {t: "Clock", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Verbs)", options:[{t: "To schedule", c: false}, {t: "To book", c: false}, {t: "To arrange", c: false}, {t: "To calendar", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Prepositions)", options:[{t: "At", c: false}, {t: "On", c: false}, {t: "In", c: false}, {t: "Then", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Time pieces)", options:[{t: "Clock", c: false}, {t: "Watch", c: false}, {t: "Appointment", c: true}, {t: "Calendar", c: false}] }, // Calendar loosely tracks time, but appointment doesn't

                // --- TRUE / FALSE (31-35) ---
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "There are 100 years in a decade.", correct: "false"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "'Half past two' means 2:30.", correct: "true"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "You wear a 'clock' on your wrist.", correct: "false"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "The 'day before yesterday' was two days ago.", correct: "true"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "You use the preposition 'at' for days of the week, like 'at Monday'.", correct: "false"}] },

                // --- MCQ (36-39) ---
                { type: "mcq", instruction: "Choose the correct phrase.<br>When you want to arrange a meeting with a doctor, you need to make an ________.", options:[{t: "schedule", c: false}, {t: "appointment", c: true}, {t: "calendar", c: false}, {t: "watch", c: false}] },
                { type: "mcq", instruction: "Choose the correct preposition.<br>My favorite festival is ________ December.", options:[{t: "in", c: true}, {t: "on", c: false}, {t: "at", c: false}, {t: "for", c: false}] },
                { type: "mcq", instruction: "Choose the correct word.<br>The time exactly in the middle of the night (12:00 a.m.) is called ________.", options:[{t: "noon", c: false}, {t: "evening", c: false}, {t: "midnight", c: true}, {t: "morning", c: false}] },
                { type: "mcq", instruction: "Choose the correct phrase.<br>To ask someone if they have free time on a specific day, you say: 'Are you ________ on Friday?'", options:[{t: "arrange", c: false}, {t: "available", c: true}, {t: "booking", c: false}, {t: "appointment", c: false}] },

                // --- CATEGORIZE (40) ---
                { type: "categorize", instruction: "Sort the words into Units of Time and Parts of the Day.", 
                    categories:[{id: "unit", name: "Units"}, {id: "part", name: "Parts of Day"}],
                    items:[
                        {text: "Minute", catId: "unit"}, 
                        {text: "Decade", catId: "unit"}, 
                        {text: "Century", catId: "unit"}, 
                        {text: "Morning", catId: "part"}, 
                        {text: "Noon", catId: "part"}, 
                        {text: "Midnight", catId: "part"}
                    ] 
                }
            ]
        },

        // ======================================================
        // STEP 8: WRITING PRACTICE
        // ======================================================
        {
            title: "Writing Practice",
            instruction: "Write an email to a colleague (5-7 sentences) to schedule a meeting. Mention what day and date you want to meet. Ask if they are available in the morning or afternoon, and propose a specific time.",
            example: "Hi Mark, I need to arrange a meeting to discuss the new project. Are you available on Thursday, October 15th? Let me know what time works for you. I am busy in the morning, but the afternoon is free. We can meet at a quarter past two. Please check your calendar and let me know. See you then!",
            prompts:[
                "Use phrases for scheduling (to make an appointment, to arrange a meeting).",
                "Use correct prepositions (on Monday, at 3 p.m.).",
                "Include a time expression (half past, a quarter to).",
                "Ask if they are available (Are you available on...?, What time works...?)."
            ]
        },

        // ======================================================
        // STEP 9: FLASHCARDS
        // ======================================================
        {
            title: "Flashcards",
            items:[
                // 2A Items (35 items)
                { term: "Second", definition: "A 60th of a minute of time.", defTrans: "Segundo", example: "Wait just one second.", audioFront: "TTS: Second", audioBack: "TTS: Wait just one second." },
                { term: "Minute", definition: "A period of time equal to sixty seconds.", defTrans: "Minuto", example: "The meeting starts in five minutes.", audioFront: "TTS: Minute", audioBack: "TTS: The meeting starts in five minutes." },
                { term: "Hour", definition: "A period of time equal to sixty minutes.", defTrans: "Hora", example: "We drove for an hour.", audioFront: "TTS: Hour", audioBack: "TTS: We drove for an hour." },
                { term: "Day", definition: "A period of twenty-four hours.", defTrans: "Dia", example: "I work every day.", audioFront: "TTS: Day", audioBack: "TTS: I work every day." },
                { term: "Week", definition: "A period of seven days.", defTrans: "Semana", example: "There are seven days in a week.", audioFront: "TTS: Week", audioBack: "TTS: There are seven days in a week." },
                { term: "Month", definition: "Each of the twelve named periods into which a year is divided.", defTrans: "Mês", example: "My birthday is next month.", audioFront: "TTS: Month", audioBack: "TTS: My birthday is next month." },
                { term: "Year", definition: "The time taken by the earth to make one revolution around the sun.", defTrans: "Ano", example: "This year went by so fast.", audioFront: "TTS: Year", audioBack: "TTS: This year went by so fast." },
                { term: "Decade", definition: "A period of ten years.", defTrans: "Década", example: "He has lived here for a decade.", audioFront: "TTS: Decade", audioBack: "TTS: He has lived here for a decade." },
                { term: "Century", definition: "A period of one hundred years.", defTrans: "Século", example: "The castle was built a century ago.", audioFront: "TTS: Century", audioBack: "TTS: The castle was built a century ago." },
                { term: "Morning", definition: "The period of time between midnight and noon.", defTrans: "Manhã", example: "I drink coffee in the morning.", audioFront: "TTS: Morning", audioBack: "TTS: I drink coffee in the morning." },
                { term: "Noon", definition: "Twelve o'clock in the day; midday.", defTrans: "Meio-dia", example: "Let's eat lunch at noon.", audioFront: "TTS: Noon", audioBack: "TTS: Let's eat lunch at noon." },
                { term: "Afternoon", definition: "The time from noon or lunchtime to evening.", defTrans: "Tarde", example: "The sun is hot in the afternoon.", audioFront: "TTS: Afternoon", audioBack: "TTS: The sun is hot in the afternoon." },
                { term: "Evening", definition: "The period of time at the end of the day.", defTrans: "Noite (início)", example: "We watch TV in the evening.", audioFront: "TTS: Evening", audioBack: "TTS: We watch TV in the evening." },
                { term: "Night", definition: "The period of darkness in each twenty-four hours.", defTrans: "Noite (madrugada)", example: "I go to sleep late at night.", audioFront: "TTS: Night", audioBack: "TTS: I go to sleep late at night." },
                { term: "Midnight", definition: "Twelve o'clock at night.", defTrans: "Meia-noite", example: "The party ended at midnight.", audioFront: "TTS: Midnight", audioBack: "TTS: The party ended at midnight." },

                { term: "Monday", definition: "The day of the week before Tuesday.", defTrans: "Segunda-feira", example: "I hate waking up early on Monday.", audioFront: "TTS: Monday", audioBack: "TTS: I hate waking up early on Monday." },
                { term: "Friday", definition: "The day of the week before Saturday.", defTrans: "Sexta-feira", example: "I am always happy on Friday.", audioFront: "TTS: Friday", audioBack: "TTS: I am always happy on Friday." },
                { term: "Weekend", definition: "Saturday and Sunday.", defTrans: "Fim de semana", example: "We relax on the weekend.", audioFront: "TTS: Weekend", audioBack: "TTS: We relax on the weekend." },
                { term: "January", definition: "The first month of the year.", defTrans: "Janeiro", example: "The first month is January.", audioFront: "TTS: January", audioBack: "TTS: The first month is January." },
                { term: "December", definition: "The twelfth and last month of the year.", defTrans: "Dezembro", example: "Christmas is in December.", audioFront: "TTS: December", audioBack: "TTS: Christmas is in December." },
                { term: "Time", definition: "The indefinite continued progress of existence and events.", defTrans: "Tempo / Hora", example: "I don't have enough time.", audioFront: "TTS: Time", audioBack: "TTS: I don't have enough time." },
                { term: "Date", definition: "The day of the month or year as specified by a number.", defTrans: "Data", example: "Today's date is October 10th.", audioFront: "TTS: Date", audioBack: "TTS: Today's date is October 10th." },
                { term: "Calendar", definition: "A chart or series of pages showing the days, weeks, and months.", defTrans: "Calendário", example: "Let me check my calendar.", audioFront: "TTS: Calendar", audioBack: "TTS: Let me check my calendar." },
                { term: "Schedule", definition: "A plan for carrying out a process or procedure.", defTrans: "Cronograma", example: "My schedule is full today.", audioFront: "TTS: Schedule", audioBack: "TTS: My schedule is full today." },
                { term: "Appointment", definition: "An arrangement to meet someone at a particular time and place.", defTrans: "Compromisso / Consulta", example: "I have a dentist appointment.", audioFront: "TTS: Appointment", audioBack: "TTS: I have a dentist appointment." },
                { term: "Clock", definition: "A mechanical or electrical device for measuring time (wall/desk).", defTrans: "Relógio", example: "Look at the clock on the wall.", audioFront: "TTS: Clock", audioBack: "TTS: Look at the clock on the wall." },
                { term: "Watch", definition: "A small timepiece worn typically on a strap on one's wrist.", defTrans: "Relógio de pulso", example: "My new watch is waterproof.", audioFront: "TTS: Watch", audioBack: "TTS: My new watch is waterproof." },

                { term: "To schedule", definition: "To arrange or plan an event to take place at a particular time.", defTrans: "Agendar", example: "I need to schedule a meeting.", audioFront: "TTS: To schedule", audioBack: "TTS: I need to schedule a meeting." },
                { term: "To book", definition: "To reserve accommodations, a place, etc. in advance.", defTrans: "Reservar", example: "I want to book a hotel room.", audioFront: "TTS: To book", audioBack: "TTS: I want to book a hotel room." },
                { term: "To arrange", definition: "To put plans or preparations in place.", defTrans: "Arranjar / Organizar", example: "We will arrange a taxi for you.", audioFront: "TTS: To arrange", audioBack: "TTS: We will arrange a taxi for you." },
                { term: "To arrive", definition: "To reach a place at the end of a journey.", defTrans: "Chegar", example: "What time does the train arrive?", audioFront: "TTS: To arrive", audioBack: "TTS: What time does the train arrive?" },
                { term: "To leave", definition: "To go away from.", defTrans: "Partir / Sair", example: "I have to leave now.", audioFront: "TTS: To leave", audioBack: "TTS: I have to leave now." },
                { term: "At (time)", definition: "Used to indicate a specific point in time.", defTrans: "Às / Ao", example: "The movie starts at 8 p.m.", audioFront: "TTS: At", audioBack: "TTS: The movie starts at 8 p.m." },
                { term: "On (days/dates)", definition: "Used to indicate a day or date.", defTrans: "No / Na", example: "My birthday is on Monday.", audioFront: "TTS: On", audioBack: "TTS: My birthday is on Monday." },
                { term: "In (months/years)", definition: "Used to indicate a month, year, or season.", defTrans: "Em", example: "We are going to Paris in July.", audioFront: "TTS: In", audioBack: "TTS: We are going to Paris in July." },

                // 3A Items (14 items)
                { term: "What time is it?", definition: "Asking for the current time.", defTrans: "Que horas são?", example: "What time is it?", audioFront: "TTS: What time is it?", audioBack: "TTS: What time is it?" },
                { term: "Could you tell me the time, please?", definition: "A polite way to ask for the time.", defTrans: "Você poderia me dizer a hora, por favor?", example: "Could you tell me the time, please?", audioFront: "TTS: Could you tell me the time, please?", audioBack: "TTS: Could you tell me the time, please?" },
                { term: "Do you have the time?", definition: "Asking if someone knows the current time.", defTrans: "Você tem horas?", example: "Excuse me, do you have the time?", audioFront: "TTS: Do you have the time?", audioBack: "TTS: Excuse me, do you have the time?" },
                { term: "It's five o'clock.", definition: "Stating that the time is exactly on the hour.", defTrans: "São cinco horas em ponto.", example: "It's five o'clock.", audioFront: "TTS: It's five o'clock.", audioBack: "TTS: It's five o'clock." },
                { term: "It's half past two.", definition: "Stating the time is thirty minutes past the hour (2:30).", defTrans: "São duas e meia.", example: "It's half past two.", audioFront: "TTS: It's half past two.", audioBack: "TTS: It's half past two." },
                { term: "It's a quarter to nine.", definition: "Stating the time is fifteen minutes before the hour (8:45).", defTrans: "Faltam quinze para as nove.", example: "It's a quarter to nine.", audioFront: "TTS: It's a quarter to nine.", audioBack: "TTS: It's a quarter to nine." },
                { term: "What's the date today?", definition: "Asking for the current day of the month.", defTrans: "Qual é a data de hoje?", example: "What's the date today?", audioFront: "TTS: What's the date today?", audioBack: "TTS: What's the date today?" },
                { term: "What day is it today?", definition: "Asking for the current day of the week.", defTrans: "Que dia é hoje?", example: "What day is it today?", audioFront: "TTS: What day is it today?", audioBack: "TTS: What day is it today?" },
                { term: "The day before yesterday.", definition: "Referring to two days ago.", defTrans: "Anteontem.", example: "I saw him the day before yesterday.", audioFront: "TTS: The day before yesterday.", audioBack: "TTS: I saw him the day before yesterday." },
                { term: "The day after tomorrow.", definition: "Referring to two days from now.", defTrans: "Depois de amanhã.", example: "We are leaving the day after tomorrow.", audioFront: "TTS: The day after tomorrow.", audioBack: "TTS: We are leaving the day after tomorrow." },
                { term: "To make an appointment.", definition: "To arrange a meeting, usually for professional services.", defTrans: "Marcar uma consulta/compromisso.", example: "I need to make an appointment with the doctor.", audioFront: "TTS: To make an appointment.", audioBack: "TTS: I need to make an appointment with the doctor." },
                { term: "Are you available on", definition: "Asking if someone is free to meet on a specific day.", defTrans: "Você está disponível no(a)", example: "Are you available on Monday?", audioFront: "TTS: Are you available on", audioBack: "TTS: Are you available on Monday?" },
                { term: "What time works for you?", definition: "Asking what hour is convenient for the other person.", defTrans: "Que horário funciona para você?", example: "What time works for you?", audioFront: "TTS: What time works for you?", audioBack: "TTS: What time works for you?" },
                { term: "See you then.", definition: "A phrase used to confirm a meeting time and say goodbye.", defTrans: "Te vejo lá/então.", example: "Great, see you then.", audioFront: "TTS: See you then.", audioBack: "TTS: Great, see you then." }
            ]
        }
    ],

    // ======================================================
    // GLOSSARY (All 49 items + Context words)
    // ======================================================
    glossary:[
        // 2A: Units of Time
        { topic: "Units of Time", term: "second", definition: "A 60th of a minute.", translation: "Segundo" },
        { topic: "Units of Time", term: "minute", definition: "A period of 60 seconds.", translation: "Minuto" },
        { topic: "Units of Time", term: "hour", definition: "A period of 60 minutes.", translation: "Hora" },
        { topic: "Units of Time", term: "day", definition: "A period of 24 hours.", translation: "Dia" },
        { topic: "Units of Time", term: "week", definition: "A period of seven days.", translation: "Semana" },
        { topic: "Units of Time", term: "month", definition: "A period of about 30 days.", translation: "Mês" },
        { topic: "Units of Time", term: "year", definition: "A period of 365 days.", translation: "Ano" },
        { topic: "Units of Time", term: "decade", definition: "A period of ten years.", translation: "Década" },
        { topic: "Units of Time", term: "century", definition: "A period of one hundred years.", translation: "Século" },
        { topic: "Parts of Day", term: "morning", definition: "The period between midnight and noon.", translation: "Manhã" },
        { topic: "Parts of Day", term: "noon", definition: "Twelve o'clock in the day.", translation: "Meio-dia" },
        { topic: "Parts of Day", term: "afternoon", definition: "The time from noon to evening.", translation: "Tarde" },
        { topic: "Parts of Day", term: "evening", definition: "The period at the end of the day.", translation: "Noite (início)" },
        { topic: "Parts of Day", term: "night", definition: "The period of darkness.", translation: "Noite (madrugada)" },
        { topic: "Parts of Day", term: "midnight", definition: "Twelve o'clock at night.", translation: "Meia-noite" },

        // 2A: Days, Months & Nouns
        { topic: "Days & Months", term: "monday", definition: "The day after Sunday.", translation: "Segunda-feira" },
        { topic: "Days & Months", term: "friday", definition: "The day after Thursday.", translation: "Sexta-feira" },
        { topic: "Days & Months", term: "weekend", definition: "Saturday and Sunday.", translation: "Fim de semana" },
        { topic: "Days & Months", term: "january", definition: "The first month of the year.", translation: "Janeiro" },
        { topic: "Days & Months", term: "december", definition: "The last month of the year.", translation: "Dezembro" },
        { topic: "Nouns", term: "time", definition: "The continued progress of existence.", translation: "Tempo / Hora" },
        { topic: "Nouns", term: "date", definition: "The day of the month or year.", translation: "Data" },
        { topic: "Nouns", term: "calendar", definition: "A chart showing days and months.", translation: "Calendário" },
        { topic: "Nouns", term: "schedule", definition: "A plan of activities.", translation: "Cronograma / Horário" },
        { topic: "Nouns", term: "appointment", definition: "An arrangement to meet someone.", translation: "Compromisso / Consulta" },
        { topic: "Nouns", term: "clock", definition: "A device for measuring time (wall).", translation: "Relógio (parede)" },
        { topic: "Nouns", term: "watch", definition: "A small timepiece worn on the wrist.", translation: "Relógio de pulso" },

        // 2A: Verbs & Prepositions
        { topic: "Verbs", term: "to-schedule", definition: "To arrange an event.", translation: "Agendar" },
        { topic: "Verbs", term: "to-book", definition: "To reserve accommodations.", translation: "Reservar" },
        { topic: "Verbs", term: "to-arrange", definition: "To put plans in place.", translation: "Organizar / Arranjar" },
        { topic: "Verbs", term: "to-arrive", definition: "To reach a place.", translation: "Chegar" },
        { topic: "Verbs", term: "to-leave", definition: "To go away from.", translation: "Partir / Sair" },
        { topic: "Prepositions", term: "at-prep", definition: "Used for specific times.", translation: "Às / Ao" },
        { topic: "Prepositions", term: "on-prep", definition: "Used for days and dates.", translation: "Na / No" },
        { topic: "Prepositions", term: "in-prep", definition: "Used for months and years.", translation: "Em" },

        // 3A: Expressions
        { topic: "Expressions", term: "what-time-is-it", definition: "Asking for the current time.", translation: "Que horas são?" },
        { topic: "Expressions", term: "could-you-tell-time", definition: "A polite way to ask for the time.", translation: "Você poderia me dizer a hora, por favor?" },
        { topic: "Expressions", term: "do-you-have-time", definition: "Asking if someone knows the current time.", translation: "Você tem horas?" },
        { topic: "Expressions", term: "oclock", definition: "Stating that the time is exactly on the hour.", translation: "Em ponto" },
        { topic: "Expressions", term: "half-past", definition: "Stating the time is thirty minutes past the hour.", translation: "Meia (ex: duas e meia)" },
        { topic: "Expressions", term: "quarter-to", definition: "Stating the time is fifteen minutes before the hour.", translation: "Quinze para as..." },
        { topic: "Expressions", term: "whats-date", definition: "Asking for the current day of the month.", translation: "Qual é a data de hoje?" },
        { topic: "Expressions", term: "what-day-is-it", definition: "Asking for the current day of the week.", translation: "Que dia é hoje?" },
        { topic: "Expressions", term: "day-before-yesterday", definition: "Referring to two days ago.", translation: "Anteontem" },
        { topic: "Expressions", term: "day-after-tomorrow", definition: "Referring to two days from now.", translation: "Depois de amanhã" },
        { topic: "Expressions", term: "make-appointment", definition: "To arrange a meeting.", translation: "Marcar uma consulta/compromisso" },
        { topic: "Expressions", term: "are-you-available", definition: "Asking if someone is free to meet.", translation: "Você está disponível no(a)?" },
        { topic: "Expressions", term: "what-time-works", definition: "Asking what hour is convenient.", translation: "Que horário funciona para você?" },
        { topic: "Expressions", term: "see-you-then", definition: "A phrase used to confirm a meeting time.", translation: "Te vejo lá/então." },

        // Additional Context Words
        { topic: "Context", term: "schedule-verb", definition: "To arrange or plan an event.", translation: "Agendar" }
    ]
});