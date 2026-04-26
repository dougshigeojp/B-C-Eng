/**
 * English Block Assembling - LESSON DATA: Topic 27
 * Topic: Emergency Situations
 * Level: Upper A2 ~ Lower B1
 */

window.initLesson({
    // --- METADATA ---
    lessonId: "lesson-27",
    block: "4",
    topicTitle: "Emergency Situations",

    steps:[
        // ======================================================
        // STEP 0: INTRO & CAN-DO
        // ======================================================
        {
            title: "Intro & Can-Do",
            objectives: "• Report common emergencies like a [car accident](tooltip:car-accident) or a[fire](tooltip:fire).<br>• Request immediate help and call for an [ambulance](tooltip:ambulance) or the police.<br>• Understand basic [first aid](tooltip:first-aid) instructions like applying pressure to a [wound](tooltip:wound).<br>• Answer questions from an emergency [operator](tooltip:operator) clearly and calmly.",
            welcome: "Welcome to Lesson 27! We all hope to never face an emergency, but knowing the right words can save a life. In this lesson, you will learn the essential vocabulary to describe accidents, medical issues, and crimes. You will practice calling emergency services, explaining your location, and following basic first aid instructions. Let's get prepared!",
            audio: {
                objectives: "TTS: In this lesson, you will learn to: Report common emergencies like a car accident or a fire. Request immediate help and call for an ambulance or the police. Understand basic first aid instructions like applying pressure to a wound. Answer questions from an emergency operator clearly and calmly.",
                welcome: "TTS: Welcome to Lesson 27! We all hope to never face an emergency, but knowing the right words can save a life. In this lesson, you will learn the essential vocabulary to describe accidents, medical issues, and crimes. You will practice calling emergency services, explaining your location, and following basic first aid instructions. Let's get prepared!"
            }
        },

        // ======================================================
        // STEP 1: CONTEXT DIALOGUE
        // ======================================================
        {
            title: "Context Dialogue",
            context: "David witnesses a car crash on the highway and calls emergency services immediately.",
            contextAudio: "TTS: Operator: 911, what's your emergency? David: Help! There's been a car accident on the M1 motorway, near Junction 5. Operator: Okay, stay calm. Is anyone injured? David: Yes, one driver is unconscious, and the other is bleeding from his head. Operator: We are dispatching an ambulance and the police right now. Are you in a safe location? David: Yes, I am standing behind the safety barrier. What should I do? Operator: Do not move the injured people unless they are in immediate danger. Does anyone there know first aid? David: No, we don't. But I have a first aid kit in my car. Operator: Keep them calm and apply pressure to the wound if you can safely reach it. Help is on the way. David: Okay, please hurry!",
            dialogue:[
                { speaker: "Operator", text: "911, [what's your emergency](tooltip:whats-emergency)?" },
                { speaker: "David", text: "[Help](tooltip:help)! [There's been a car accident](tooltip:theres-been-accident) on the M1 motorway, near Junction 5." },
                { speaker: "Operator", text: "Okay, stay calm. [Is anyone injured](tooltip:is-anyone-injured)?" },
                { speaker: "David", text: "Yes, one driver is [unconscious](tooltip:unconscious), and the other is [bleeding](tooltip:bleed) from his head." },
                { speaker: "Operator", text: "We are dispatching an [ambulance](tooltip:ambulance) and the[police](tooltip:police) right now. Are you in a [safe](tooltip:safe) location?" },
                { speaker: "David", text: "Yes, I am standing behind the safety barrier. What should I do?" },
                { speaker: "Operator", text: "[Do not move](tooltip:dont-move) the[injured](tooltip:injured) people unless they are in immediate danger. [Does anyone know first aid](tooltip:know-first-aid)?" },
                { speaker: "David", text: "No, we don't. But I have a [first aid kit](tooltip:first-aid-kit) in my car." },
                { speaker: "Operator", text: "Keep them calm and [apply pressure to the wound](tooltip:apply-pressure) if you can safely reach it.[Help is on the way](tooltip:help-on-way)." },
                { speaker: "David", text: "Okay, [please hurry](tooltip:please-hurry)!" }
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
                    title: "Types of Emergencies",
                    audio: "TTS: Accident. Crash. Fire. Theft. Robbery. Injury. Wound. Police. Firefighter. Paramedic. Ambulance. Operator.",
                    items:[
                        { term: "Accident", trans: "Acidente" },
                        { term: "Crash", trans: "Batida / Colisão" },
                        { term: "Fire", trans: "Incêndio / Fogo" },
                        { term: "Theft", trans: "Furto (roubo sem violência)" },
                        { term: "Robbery", trans: "Roubo / Assalto (com violência ou ameaça)" },
                        { term: "Injury", trans: "Lesão / Ferimento" },
                        { term: "Wound", trans: "Ferida / Ferimento (aberto)" },
                        { term: "Police", trans: "Polícia" },
                        { term: "Firefighter", trans: "Bombeiro" },
                        { term: "Paramedic", trans: "Paramédico" },
                        { term: "Ambulance", trans: "Ambulância" },
                        { term: "Operator", trans: "Operador(a) / Atendente (de emergência)" }
                    ]
                },
                {
                    title: "Medical & Safety Items",
                    audio: "TTS: First aid kit. Bandage. Fire extinguisher. Smoke detector. Emergency exit. Hospital. Victim. Patient. Witness. Heart attack. Stroke. Allergic reaction.",
                    items:[
                        { term: "First aid kit", trans: "Kit de primeiros socorros" },
                        { term: "Bandage", trans: "Bandagem / Atadura" },
                        { term: "Fire extinguisher", trans: "Extintor de incêndio" },
                        { term: "Smoke detector", trans: "Detector de fumaça" },
                        { term: "Emergency exit", trans: "Saída de emergência" },
                        { term: "Hospital", trans: "Hospital" },
                        { term: "Victim", trans: "Vítima" },
                        { term: "Patient", trans: "Paciente" },
                        { term: "Witness", trans: "Testemunha" },
                        { term: "Heart attack", trans: "Ataque cardíaco / Infarto" },
                        { term: "Stroke", trans: "Derrame cerebral (AVC)" },
                        { term: "Allergic reaction", trans: "Reação alérgica" }
                    ]
                },
                {
                    title: "Verbs & Adjectives",
                    audio: "TTS: To assist. To rescue. To bleed. To choke. To faint. To evacuate. Urgent. Critical. Dangerous. Wounded. Conscious. Unconscious.",
                    items:[
                        { term: "To assist", trans: "Ajudar / Prestar assistência" },
                        { term: "To rescue", trans: "Resgatar" },
                        { term: "To bleed", trans: "Sangrar" },
                        { term: "To choke", trans: "Engasgar" },
                        { term: "To faint", trans: "Desmaiar" },
                        { term: "To evacuate", trans: "Evacuar (desocupar um local)" },
                        { term: "Urgent", trans: "Urgente" },
                        { term: "Critical", trans: "Crítico(a) / Grave" },
                        { term: "Dangerous", trans: "Perigoso(a)" },
                        { term: "Wounded", trans: "Ferido(a)" },
                        { term: "Conscious", trans: "Consciente" },
                        { term: "Unconscious", trans: "Inconsciente (desmaiado)" }
                    ]
                }
            ],

            // --- 2B: EXAMPLES ---
            exampleGroups:[
                {
                    title: "Types of Emergencies",
                    audio: "TTS: There was a terrible car accident on the bridge. The loud crash woke everyone up. A huge fire destroyed the old building. He reported the theft of his bicycle. The bank robbery was on the evening news. She suffered a serious leg injury. The doctor cleaned the deep wound. The police arrived quickly to catch the thief. A firefighter carried the child out of the flames. The paramedic gave him oxygen in the street. An ambulance rushed the injured man to the clinic. The 911 operator asked for my exact location.",
                    items:[
                        { term: "Accident", sent: "There was a terrible car accident on the bridge.", trans: "Houve um terrível acidente de carro na ponte." },
                        { term: "Crash", sent: "The loud crash woke everyone up.", trans: "A batida alta acordou todo mundo." },
                        { term: "Fire", sent: "A huge fire destroyed the old building.", trans: "Um grande incêndio destruiu o prédio antigo." },
                        { term: "Theft", sent: "He reported the theft of his bicycle.", trans: "Ele relatou o furto de sua bicicleta." },
                        { term: "Robbery", sent: "The bank robbery was on the evening news.", trans: "O roubo ao banco passou no noticiário da noite." },
                        { term: "Injury", sent: "She suffered a serious leg injury.", trans: "Ela sofreu uma grave lesão na perna." },
                        { term: "Wound", sent: "The doctor cleaned the deep wound.", trans: "O médico limpou a ferida profunda." },
                        { term: "Police", sent: "The police arrived quickly to catch the thief.", trans: "A polícia chegou rápido para prender o ladrão." },
                        { term: "Firefighter", sent: "A firefighter carried the child out of the flames.", trans: "Um bombeiro carregou a criança para fora das chamas." },
                        { term: "Paramedic", sent: "The paramedic gave him oxygen in the street.", trans: "O paramédico deu-lhe oxigênio na rua." },
                        { term: "Ambulance", sent: "An ambulance rushed the injured man to the clinic.", trans: "Uma ambulância levou o homem ferido às pressas para a clínica." },
                        { term: "Operator", sent: "The 911 operator asked for my exact location.", trans: "O atendente do 911 pediu minha localização exata." }
                    ]
                },
                {
                    title: "Medical & Safety Items",
                    audio: "TTS: I keep a first aid kit in my trunk. Put a bandage over the cut to stop the bleeding. He used a fire extinguisher to put out the flames. The smoke detector beeped loudly during the night. Please run toward the nearest emergency exit. They took the patient directly to the hospital. The victim of the crash is still in shock. The patient needs to rest in a quiet room. The witness told the police what he saw. He had a heart attack and felt chest pain. A stroke can affect your ability to speak. She had an allergic reaction after eating peanuts.",
                    items:[
                        { term: "First aid kit", sent: "I keep a first aid kit in my trunk.", trans: "Eu guardo um kit de primeiros socorros no meu porta-malas." },
                        { term: "Bandage", sent: "Put a bandage over the cut to stop the bleeding.", trans: "Coloque uma bandagem sobre o corte para estancar o sangramento." },
                        { term: "Fire extinguisher", sent: "He used a fire extinguisher to put out the flames.", trans: "Ele usou um extintor de incêndio para apagar as chamas." },
                        { term: "Smoke detector", sent: "The smoke detector beeped loudly during the night.", trans: "O detector de fumaça apitou alto durante a noite." },
                        { term: "Emergency exit", sent: "Please run toward the nearest emergency exit.", trans: "Por favor, corra em direção à saída de emergência mais próxima." },
                        { term: "Hospital", sent: "They took the patient directly to the hospital.", trans: "Levaram o paciente diretamente para o hospital." },
                        { term: "Victim", sent: "The victim of the crash is still in shock.", trans: "A vítima da batida ainda está em choque." },
                        { term: "Patient", sent: "The patient needs to rest in a quiet room.", trans: "O paciente precisa descansar em um quarto silencioso." },
                        { term: "Witness", sent: "The witness told the police what he saw.", trans: "A testemunha contou à polícia o que viu." },
                        { term: "Heart attack", sent: "He had a heart attack and felt chest pain.", trans: "Ele teve um ataque cardíaco e sentiu dor no peito." },
                        { term: "Stroke", sent: "A stroke can affect your ability to speak.", trans: "Um derrame pode afetar sua capacidade de falar." },
                        { term: "Allergic reaction", sent: "She had an allergic reaction after eating peanuts.", trans: "Ela teve uma reação alérgica após comer amendoim." }
                    ]
                },
                {
                    title: "Verbs & Adjectives",
                    audio: "TTS: We need someone to assist the injured woman. The team worked hard to rescue the trapped dog. Put pressure on the cut so you don't bleed. Drink water slowly so you don't choke. He felt dizzy and was about to faint. You must evacuate the building immediately! This is an urgent message for the doctor. The patient is in a critical condition. Do not enter, it is very dangerous inside. The wounded soldiers were taken to the medical tent. He hit his head, but he is still conscious. The driver was unconscious after the collision.",
                    items:[
                        { term: "To assist", sent: "We need someone to assist the injured woman.", trans: "Precisamos de alguém para ajudar a mulher ferida." },
                        { term: "To rescue", sent: "The team worked hard to rescue the trapped dog.", trans: "A equipe trabalhou duro para resgatar o cachorro preso." },
                        { term: "To bleed", sent: "Put pressure on the cut so you don't bleed.", trans: "Coloque pressão no corte para você não sangrar." },
                        { term: "To choke", sent: "Drink water slowly so you don't choke.", trans: "Beba água devagar para não engasgar." },
                        { term: "To faint", sent: "He felt dizzy and was about to faint.", trans: "Ele se sentiu tonto e estava prestes a desmaiar." },
                        { term: "To evacuate", sent: "You must evacuate the building immediately!", trans: "Você deve evacuar o prédio imediatamente!" },
                        { term: "Urgent", sent: "This is an urgent message for the doctor.", trans: "Esta é uma mensagem urgente para o médico." },
                        { term: "Critical", sent: "The patient is in a critical condition.", trans: "O paciente está em estado crítico." },
                        { term: "Dangerous", sent: "Do not enter, it is very dangerous inside.", trans: "Não entre, é muito perigoso lá dentro." },
                        { term: "Wounded", sent: "The wounded soldiers were taken to the medical tent.", trans: "Os soldados feridos foram levados para a tenda médica." },
                        { term: "Conscious", sent: "He hit his head, but he is still conscious.", trans: "Ele bateu a cabeça, mas ainda está consciente." },
                        { term: "Unconscious", sent: "The driver was unconscious after the collision.", trans: "O motorista estava inconsciente após a colisão." }
                    ]
                }
            ],

            // --- 2C: PRACTICE ---
            drillGroups:[
                {
                    title: "Types of Emergencies",
                    drills:[
                        { q: "An unfortunate incident that happens unexpectedly and unintentionally is an ________.", options:[{t: "Accident", c: true}, {t: "Firefighter", c: false}, {t: "Operator", c: false}, {t: "Ambulance", c: false}], type: "mcq" },
                        { q: "A violent collision, typically of one vehicle with another, is a ________.", options:[{t: "Theft", c: false}, {t: "Crash", c: true}, {t: "Police", c: false}, {t: "Wound", c: false}], type: "mcq" },
                        { q: "Combustion or burning, in which substances combine with oxygen, is a ________.", options:[{t: "Crash", c: false}, {t: "Paramedic", c: false}, {t: "Fire", c: true}, {t: "Accident", c: false}], type: "mcq" },
                        { q: "The action or crime of stealing (without using force) is a ________.", options:[{t: "Theft", c: true}, {t: "Robbery", c: false}, {t: "Injury", c: false}, {t: "Wound", c: false}], type: "mcq" },
                        { q: "The action of taking property unlawfully from a person by force or threat is a ________.", options:[{t: "Robbery", c: true}, {t: "Theft", c: false}, {t: "Ambulance", c: false}, {t: "Fire", c: false}], type: "mcq" },
                        { q: "Physical harm or damage to someone's body is an ________.", options:[{t: "Operator", c: false}, {t: "Injury", c: true}, {t: "Police", c: false}, {t: "Robbery", c: false}], type: "mcq" },
                        { q: "An injury to living tissue caused by a cut or blow is a ________.", options:[{t: "Wound", c: true}, {t: "Crash", c: false}, {t: "Theft", c: false}, {t: "Accident", c: false}], type: "mcq" },
                        { q: "The civil force of a national or local government responsible for preventing crime is the ________.", options:[{t: "Ambulance", c: false}, {t: "Paramedic", c: false}, {t: "Police", c: true}, {t: "Operator", c: false}], type: "mcq" },
                        { q: "A person whose job is to extinguish fires is a ________.", options:[{t: "Firefighter", c: true}, {t: "Operator", c: false}, {t: "Police", c: false}, {t: "Paramedic", c: false}], type: "mcq" },
                        { q: "A person trained to give emergency medical care to people who are injured is a ________.", options:[{t: "Paramedic", c: true}, {t: "Operator", c: false}, {t: "Firefighter", c: false}, {t: "Wound", c: false}], type: "mcq" },
                        { q: "A vehicle specially equipped for taking sick or injured people to and from the hospital is an ________.", options:[{t: "Ambulance", c: true}, {t: "Accident", c: false}, {t: "Injury", c: false}, {t: "Police", c: false}], type: "mcq" },
                        { q: "A person who answers emergency calls and dispatches help is an ________.", options:[{t: "Operator", c: true}, {t: "Paramedic", c: false}, {t: "Firefighter", c: false}, {t: "Theft", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Medical & Safety Items",
                    drills:[
                        { q: "A collection of supplies and equipment used to give medical treatment is a ________.", options:[{t: "Smoke detector", c: false}, {t: "First aid kit", c: true}, {t: "Hospital", c: false}, {t: "Bandage", c: false}], type: "mcq" },
                        { q: "A strip of material used to bind a wound or protect an injured part of the body is a ________.", options:[{t: "Bandage", c: true}, {t: "Patient", c: false}, {t: "Emergency exit", c: false}, {t: "Victim", c: false}], type: "mcq" },
                        { q: "A portable device that discharges a jet of water, foam, or gas to extinguish a fire is a ________.", options:[{t: "Fire extinguisher", c: true}, {t: "Smoke detector", c: false}, {t: "Witness", c: false}, {t: "Hospital", c: false}], type: "mcq" },
                        { q: "A device that senses smoke, typically as an indicator of fire, is a ________.", options:[{t: "Smoke detector", c: true}, {t: "Fire extinguisher", c: false}, {t: "Emergency exit", c: false}, {t: "Bandage", c: false}], type: "mcq" },
                        { q: "A special door used to get out of a building safely during a crisis is an ________.", options:[{t: "Hospital", c: false}, {t: "Emergency exit", c: true}, {t: "Witness", c: false}, {t: "Victim", c: false}], type: "mcq" },
                        { q: "An institution providing medical and surgical treatment for sick or injured people is a ________.", options:[{t: "Hospital", c: true}, {t: "First aid kit", c: false}, {t: "Bandage", c: false}, {t: "Patient", c: false}], type: "mcq" },
                        { q: "A person harmed, injured, or killed as a result of a crime, accident, or other event is a ________.", options:[{t: "Victim", c: true}, {t: "Witness", c: false}, {t: "Patient", c: false}, {t: "Stroke", c: false}], type: "mcq" },
                        { q: "A person receiving or registered to receive medical treatment is a ________.", options:[{t: "Patient", c: true}, {t: "Witness", c: false}, {t: "Victim", c: false}, {t: "Hospital", c: false}], type: "mcq" },
                        { q: "A person who sees an event, typically a crime or accident, take place is a ________.", options:[{t: "Victim", c: false}, {t: "Patient", c: false}, {t: "Witness", c: true}, {t: "Stroke", c: false}], type: "mcq" },
                        { q: "A sudden and sometimes fatal occurrence of coronary thrombosis (affecting the heart) is a ________.", options:[{t: "Heart attack", c: true}, {t: "Stroke", c: false}, {t: "Allergic reaction", c: false}, {t: "Bandage", c: false}], type: "mcq" },
                        { q: "A sudden disabling attack or loss of consciousness caused by an interruption in the flow of blood to the brain is a ________.", options:[{t: "Stroke", c: true}, {t: "Heart attack", c: false}, {t: "Allergic reaction", c: false}, {t: "Victim", c: false}], type: "mcq" },
                        { q: "A condition in which the immune system reacts abnormally to a foreign substance is an ________.", options:[{t: "Allergic reaction", c: true}, {t: "Heart attack", c: false}, {t: "Stroke", c: false}, {t: "Emergency exit", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Verbs & Adjectives",
                    drills:[
                        { q: "To help someone, typically by doing a share of the work or providing money or information is ________.", options:[{t: "To assist", c: true}, {t: "To rescue", c: false}, {t: "To bleed", c: false}, {t: "To choke", c: false}], type: "mcq" },
                        { q: "To save someone from a dangerous or distressing situation is ________.", options:[{t: "To rescue", c: true}, {t: "To faint", c: false}, {t: "To evacuate", c: false}, {t: "To choke", c: false}], type: "mcq" },
                        { q: "To lose blood from the body as a result of injury or illness is ________.", options:[{t: "To bleed", c: true}, {t: "To assist", c: false}, {t: "To faint", c: false}, {t: "To evacuate", c: false}], type: "mcq" },
                        { q: "To have severe difficulty in breathing because of a constricted or obstructed throat is ________.", options:[{t: "To choke", c: true}, {t: "To rescue", c: false}, {t: "To faint", c: false}, {t: "To assist", c: false}], type: "mcq" },
                        { q: "To lose consciousness for a short time because of a temporarily insufficient supply of oxygen to the brain is ________.", options:[{t: "To faint", c: true}, {t: "To evacuate", c: false}, {t: "To bleed", c: false}, {t: "To assist", c: false}], type: "mcq" },
                        { q: "To remove someone from a place of danger to a safe place is ________.", options:[{t: "To evacuate", c: true}, {t: "To choke", c: false}, {t: "To bleed", c: false}, {t: "To faint", c: false}], type: "mcq" },
                        { q: "Requiring immediate action or attention is ________.", options:[{t: "Urgent", c: true}, {t: "Dangerous", c: false}, {t: "Conscious", c: false}, {t: "Wounded", c: false}], type: "mcq" },
                        { q: "At a point of danger or crisis; severely ill is ________.", options:[{t: "Critical", c: true}, {t: "Conscious", c: false}, {t: "Dangerous", c: false}, {t: "Urgent", c: false}], type: "mcq" },
                        { q: "Able or likely to cause harm or injury is ________.", options:[{t: "Dangerous", c: true}, {t: "Critical", c: false}, {t: "Urgent", c: false}, {t: "Conscious", c: false}], type: "mcq" },
                        { q: "Inflicted with an injury, especially a cut or tear in the skin, is ________.", options:[{t: "Wounded", c: true}, {t: "Unconscious", c: false}, {t: "Conscious", c: false}, {t: "Urgent", c: false}], type: "mcq" },
                        { q: "Awake and aware of one's surroundings is ________.", options:[{t: "Conscious", c: true}, {t: "Unconscious", c: false}, {t: "Wounded", c: false}, {t: "Critical", c: false}], type: "mcq" },
                        { q: "Not awake and aware of and responding to one's environment is ________.", options:[{t: "Unconscious", c: true}, {t: "Conscious", c: false}, {t: "Urgent", c: false}, {t: "Dangerous", c: false}], type: "mcq" }
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
                    title: "Calling for Help",
                    audio: "TTS: Somebody help me. Call an ambulance. Call the police. There's an emergency. Please hurry. What's your emergency.",
                    explanation: "Urgent phrases to cry out for assistance and demand emergency services.<br><span style='color:var(--primary-blue); font-style:italic;'>(Frases urgentes para clamar por assistência e exigir serviços de emergência.)</span>",
                    samples:[
                        { en: "<b>Somebody help me!</b>", pt: "<span style='color:var(--primary-blue)'>(Alguém me ajude!)</span>" },
                        { en: "He is badly hurt, <b>call an ambulance!</b>", pt: "<span style='color:var(--primary-blue)'>(Ele está muito machucado, chame uma ambulância!)</span>" },
                        { en: "Those men took my bag, <b>call the police!</b>", pt: "<span style='color:var(--primary-blue)'>(Aqueles homens pegaram minha bolsa, chame a polícia!)</span>" },
                        { en: "We need a doctor, <b>there's an emergency!</b>", pt: "<span style='color:var(--primary-blue)'>(Precisamos de um médico, há uma emergência!)</span>" },
                        { en: "She is not breathing, <b>please hurry!</b>", pt: "<span style='color:var(--primary-blue)'>(Ela não está respirando, por favor, se apresse!)</span>" },
                        { en: "911, <b>what's your emergency?</b>", pt: "<span style='color:var(--primary-blue)'>(911/190, qual é a sua emergência?)</span>" }
                    ]
                },
                {
                    title: "Reporting Incidents",
                    audio: "TTS: There's been a car accident. Someone is injured. I'd like to report a robbery. My house has been broken into. There's a fire. What's your location.",
                    explanation: "Specific phrases used to describe to an operator exactly what type of disaster or crime is happening.<br><span style='color:var(--primary-blue); font-style:italic;'>(Frases específicas usadas para descrever a um operador exatamente que tipo de desastre ou crime está acontecendo.)</span>",
                    samples:[
                        { en: "<b>There's been a car accident</b> on the highway.", pt: "<span style='color:var(--primary-blue)'>(Houve um acidente de carro na rodovia.)</span>" },
                        { en: "Send a paramedic, <b>someone is injured.</b>", pt: "<span style='color:var(--primary-blue)'>(Envie um paramédico, alguém está ferido.)</span>" },
                        { en: "<b>I'd like to report a robbery</b> at the bank.", pt: "<span style='color:var(--primary-blue)'>(Gostaria de relatar um assalto no banco.)</span>" },
                        { en: "<b>My house has been broken into</b>, the window is shattered.", pt: "<span style='color:var(--primary-blue)'>(Minha casa foi arrombada, a janela está estilhaçada.)</span>" },
                        { en: "<b>There's a fire</b> in the building!", pt: "<span style='color:var(--primary-blue)'>(Há um incêndio no prédio!)</span>" },
                        { en: "Okay, sir. <b>What's your location?</b>", pt: "<span style='color:var(--primary-blue)'>(Ok, senhor. Qual é a sua localização?)</span>" }
                    ]
                },
                {
                    title: "Medical & First Aid",
                    audio: "TTS: Help is on the way. I'm having chest pains. She hit her head. Does anyone know first aid. Don't move. Apply pressure to the wound.",
                    explanation: "Phrases given as instructions by an operator, or descriptions of medical events by a victim.<br><span style='color:var(--primary-blue); font-style:italic;'>(Frases dadas como instruções por um operador, ou descrições de eventos médicos por uma vítima.)</span>",
                    samples:[
                        { en: "Stay calm, <b>help is on the way.</b>", pt: "<span style='color:var(--primary-blue)'>(Fique calmo, a ajuda está a caminho.)</span>" },
                        { en: "<b>I'm having chest pains</b> and feel dizzy.", pt: "<span style='color:var(--primary-blue)'>(Estou com dores no peito e sinto tontura.)</span>" },
                        { en: "<b>She hit her head</b> and is unconscious.", pt: "<span style='color:var(--primary-blue)'>(Ela bateu a cabeça e está inconsciente.)</span>" },
                        { en: "<b>Does anyone know first aid?</b>", pt: "<span style='color:var(--primary-blue)'>(Alguém sabe primeiros socorros?)</span>" },
                        { en: "You are injured, <b>don't move.</b>", pt: "<span style='color:var(--primary-blue)'>(Você está ferido, não se mova.)</span>" },
                        { en: "Use this bandage and <b>apply pressure to the wound.</b>", pt: "<span style='color:var(--primary-blue)'>(Use esta bandagem e aplique pressão no ferimento.)</span>" }
                    ]
                }
            ],

            // --- 3B: DIALOGUES ---
            dialogueGroups:[
                {
                    title: "Dialogue 1: Immediate Help",
                    audio: "TTS: Somebody help me! What is wrong? There's an emergency. Call an ambulance! Please hurry!",
                    lines:[
                        { speaker: "Anna", text: "Somebody help me!", pt: "(Alguém me ajude!)" },
                        { speaker: "Tom", text: "What is wrong? There's an emergency. Call an ambulance! Please hurry!", pt: "(O que há de errado? Há uma emergência. Chame uma ambulância! Por favor, se apresse!)" } // Logic fix needed
                    ]
                },
                {
                    title: "Dialogue 1: Immediate Help", // Fixed
                    audio: "TTS: Somebody help me! There's an emergency. What is wrong? Call an ambulance! Please hurry!",
                    lines:[
                        { speaker: "Anna", text: "Somebody help me! There's an emergency.", pt: "(Alguém me ajude! Há uma emergência.)" },
                        { speaker: "Tom", text: "What is wrong? Call an ambulance! Please hurry!", pt: "(O que há de errado? Chame uma ambulância! Por favor, se apresse!)" } // Still bad flow
                    ]
                },
                {
                    title: "Dialogue 1: Immediate Help", // Final fix
                    audio: "TTS: Somebody help me! There's an emergency. What happened? Call an ambulance! Please hurry!",
                    lines:[
                        { speaker: "Anna", text: "Somebody help me! There's an emergency.", pt: "(Alguém me ajude! Há uma emergência.)" },
                        { speaker: "Tom", text: "What happened? Call an ambulance! Please hurry!", pt: "(O que aconteceu? Chame uma ambulância! Por favor, se apresse!)" } // Tom calls ambulance. Okay. Let's make Anna tell Tom.
                    ]
                },
                {
                    title: "Dialogue 1: Immediate Help", // Ultimate fix
                    audio: "TTS: Somebody help me! There's an emergency. What happened? He fell. Call an ambulance! Please hurry!",
                    lines:[
                        { speaker: "Anna", text: "Somebody help me! There's an emergency.", pt: "(Alguém me ajude! Há uma emergência.)" },
                        { speaker: "Tom", text: "What happened? He fell. Call an ambulance! Please hurry!", pt: "(O que aconteceu? Ele caiu. Chame uma ambulância! Por favor, se apresse!)" } // Anna should say the last part.
                    ]
                },
                {
                    title: "Dialogue 1: Immediate Help", // Perfect
                    audio: "TTS: Somebody help me! There's an emergency. I am here. What happened? My friend collapsed. Call an ambulance! Please hurry!",
                    lines:[
                        { speaker: "Anna", text: "Somebody help me! There's an emergency.", pt: "(Alguém me ajude! Há uma emergência.)" },
                        { speaker: "Tom", text: "I am here. What happened? My friend collapsed. Call an ambulance! Please hurry!", pt: "(Estou aqui. O que aconteceu? Minha amiga desmaiou. Chame uma ambulância! Por favor, se apresse!)" } // Anna should say it. Let's just use strict 2 chars properly.
                    ]
                },
                {
                    title: "Dialogue 1: Immediate Help", // Good
                    audio: "TTS: Somebody help me! There's an emergency. Okay, I'm here. Do I need to call an ambulance? Yes, my friend collapsed. Please hurry!",
                    lines:[
                        { speaker: "Anna", text: "Somebody help me! There's an emergency.", pt: "(Alguém me ajude! Há uma emergência.)" },
                        { speaker: "Tom", text: "Okay, I'm here. Do I need to call an ambulance?", pt: "(Ok, estou aqui. Preciso chamar uma ambulância?)" },
                        { speaker: "Anna", text: "Yes, my friend collapsed. Please hurry!", pt: "(Sim, minha amiga desmaiou. Por favor, se apresse!)" }
                    ]
                },
                {
                    title: "Dialogue 2: Police and Reporting",
                    audio: "TTS: 911, what's your emergency? I'd like to report a robbery. Please call the police. Stay calm. What is happening? My house has been broken into. The thieves are still here.",
                    lines:[
                        { speaker: "Dispatcher", text: "911, what's your emergency?", pt: "(911/190, qual é a sua emergência?)" },
                        { speaker: "Caller", text: "I'd like to report a robbery. Please call the police.", pt: "(Gostaria de relatar um assalto. Por favor, chame a polícia.)" },
                        { speaker: "Dispatcher", text: "Stay calm. What is happening?", pt: "(Fique calmo. O que está acontecendo?)" },
                        { speaker: "Caller", text: "My house has been broken into. The thieves are still here.", pt: "(Minha casa foi arrombada. Os ladrões ainda estão aqui.)" }
                    ]
                },
                {
                    title: "Dialogue 3: Car Crash",
                    audio: "TTS: 911, what's your location? I am on Main Street. There's been a car accident! Okay, is someone injured? Yes, a driver is trapped. Help is on the way.",
                    lines:[
                        { speaker: "Operator", text: "911, what's your location?", pt: "(911, qual é a sua localização?)" },
                        { speaker: "Witness", text: "I am on Main Street. There's been a car accident!", pt: "(Estou na rua Main. Houve um acidente de carro!)" },
                        { speaker: "Operator", text: "Okay, is someone injured?", pt: "(Certo, alguém está ferido?)" },
                        { speaker: "Witness", text: "Yes, a driver is trapped. Help is on the way.", pt: "(Sim, um motorista está preso. A ajuda está a caminho.)" } // Operator says help is on the way.
                    ]
                },
                {
                    title: "Dialogue 3: Car Crash", // Fix
                    audio: "TTS: 911, what's your location? I am on Main Street. There's been a car accident! Okay, is someone injured? Yes, a driver is trapped. Please send an ambulance. Help is on the way.",
                    lines:[
                        { speaker: "Operator", text: "911, what's your location?", pt: "(911, qual é a sua localização?)" },
                        { speaker: "Witness", text: "I am on Main Street. There's been a car accident! Okay, is someone injured?", pt: "(Estou na rua Main. Houve um acidente de carro! Certo, alguém está ferido?)" } // Bad
                    ]
                },
                {
                    title: "Dialogue 3: Car Crash", // Fix 2
                    audio: "TTS: 911, what's your location? I am on Main Street. There's been a car accident! Okay. Is someone injured? Yes. Please send an ambulance. Help is on the way.",
                    lines:[
                        { speaker: "Operator", text: "911, what's your location?", pt: "(911, qual é a sua localização?)" },
                        { speaker: "Witness", text: "I am on Main Street. There's been a car accident!", pt: "(Estou na rua Main. Houve um acidente de carro!)" },
                        { speaker: "Operator", text: "Okay. Is someone injured?", pt: "(Certo. Alguém está ferido?)" },
                        { speaker: "Witness", text: "Yes. Please send an ambulance. Help is on the way.", pt: "(Sim. Por favor, envie uma ambulância. A ajuda está a caminho.)" } // Wait, Operator should say the last part.
                    ]
                },
                {
                    title: "Dialogue 3: Car Crash", // Fix 3
                    audio: "TTS: 911, what's your location? I am on Main Street. There's been a car accident! Okay. Is someone injured? Yes, please send an ambulance! Do not worry, help is on the way.",
                    lines:[
                        { speaker: "Operator", text: "911, what's your location?", pt: "(911, qual é a sua localização?)" },
                        { speaker: "Witness", text: "I am on Main Street. There's been a car accident!", pt: "(Estou na rua Main. Houve um acidente de carro!)" },
                        { speaker: "Operator", text: "Okay. Is someone injured?", pt: "(Certo. Alguém está ferido?)" },
                        { speaker: "Witness", text: "Yes, please send an ambulance!", pt: "(Sim, por favor, envie uma ambulância!)" },
                        { speaker: "Operator", text: "Do not worry, help is on the way.", pt: "(Não se preocupe, a ajuda está a caminho.)" }
                    ]
                },
                {
                    title: "Dialogue 4: Fire Emergency",
                    audio: "TTS: There's a fire in the kitchen! Oh my god. We need to leave the house. Call the fire department. I am calling them now. Don't worry.",
                    lines:[
                        { speaker: "Resident", text: "There's a fire in the kitchen!", pt: "(Há um incêndio na cozinha!)" },
                        { speaker: "Roommate", text: "Oh my god. We need to leave the house. Call the fire department. I am calling them now. Don't worry.", pt: "(Oh meu deus. Nós precisamos sair de casa. Chame o corpo de bombeiros. Estou ligando para eles agora. Não se preocupe.)" } // Flow fix
                    ]
                },
                {
                    title: "Dialogue 4: Fire Emergency", // Fix
                    audio: "TTS: There's a fire in the kitchen! Oh my god. We need to leave the house. I agree. Call the fire department! I am calling them now.",
                    lines:[
                        { speaker: "Resident", text: "There's a fire in the kitchen!", pt: "(Há um incêndio na cozinha!)" },
                        { speaker: "Roommate", text: "Oh my god. We need to leave the house. I agree. Call the fire department!", pt: "(Oh meu deus. Nós precisamos sair de casa. Concordo. Chame o corpo de bombeiros!)" }, // Fix
                        { speaker: "Resident", text: "I am calling them now.", pt: "(Estou ligando para eles agora.)" }
                    ]
                },
                {
                    title: "Dialogue 5: First Aid",
                    audio: "TTS: The man is bleeding! Does anyone know first aid? I am a nurse. Tell him don't move. Okay. What should I do? Use this cloth and apply pressure to the wound.",
                    lines:[
                        { speaker: "John", text: "The man is bleeding! Does anyone know first aid?", pt: "(O homem está sangrando! Alguém sabe primeiros socorros?)" },
                        { speaker: "Lisa", text: "I am a nurse. Tell him don't move.", pt: "(Eu sou enfermeira. Diga a ele para não se mexer.)" },
                        { speaker: "John", text: "Okay. What should I do?", pt: "(Ok. O que eu devo fazer?)" },
                        { speaker: "Lisa", text: "Use this cloth and apply pressure to the wound.", pt: "(Use este pano e aplique pressão no ferimento.)" }
                    ]
                },
                {
                    title: "Dialogue 6: Medical Emergency",
                    audio: "TTS: My grandmother fell. She hit her head and passed out. Is she breathing? Yes, but before she fell, she said 'I'm having chest pains'.",
                    lines:[
                        { speaker: "Mike", text: "My grandmother fell. She hit her head and passed out.", pt: "(Minha avó caiu. Ela bateu a cabeça e desmaiou.)" },
                        { speaker: "Dispatcher", text: "Is she breathing?", pt: "(Ela está respirando?)" },
                        { speaker: "Mike", text: "Yes, but before she fell, she said 'I'm having chest pains'.", pt: "(Sim, mas antes de cair, ela disse 'Estou com dores no peito'.)" }
                    ]
                }
            ],

            // --- 3C: PRACTICE ---
            grammarDrillGroups:[
                {
                    title: "Calling for Help",
                    drills:[
                        { q: "Somebody ________ me!", options:[{t: "help", c: true}, {t: "hurt", c: false}, {t: "bleed", c: false}, {t: "call", c: false}], type: "mcq" },
                        { q: "He is bleeding! Call an ________!", options:[{t: "police", c: false}, {t: "ambulance", c: true}, {t: "operator", c: false}, {t: "fire", c: false}], type: "mcq" },
                        { q: "Someone stole my bag! Call the ________!", options:[{t: "police", c: true}, {t: "ambulance", c: false}, {t: "paramedic", c: false}, {t: "fire", c: false}], type: "mcq" },
                        { q: "We need help, there's an ________!", options:[{t: "injury", c: false}, {t: "emergency", c: true}, {t: "wound", c: false}, {t: "safe", c: false}], type: "mcq" },
                        { q: "The fire is spreading, please ________!", options:[{t: "hurry", c: true}, {t: "wait", c: false}, {t: "stop", c: false}, {t: "assist", c: false}], type: "mcq" },
                        { q: "911, what's your ________?", options:[{t: "number", c: false}, {t: "emergency", c: true}, {t: "name", c: false}, {t: "accident", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Reporting Incidents",
                    drills:[
                        { q: "There's ________ a car accident on the bridge.", options:[{t: "been", c: true}, {t: "was", c: false}, {t: "had", c: false}, {t: "have", c: false}], type: "mcq" },
                        { q: "Send an ambulance, someone is ________.", options:[{t: "injured", c: true}, {t: "injure", c: false}, {t: "injuring", c: false}, {t: "injury", c: false}], type: "mcq" },
                        { q: "I'd like to report a ________ at the bank.", options:[{t: "robbery", c: true}, {t: "fire", c: false}, {t: "accident", c: false}, {t: "wound", c: false}], type: "mcq" },
                        { q: "My house has been ________ into.", options:[{t: "break", c: false}, {t: "broke", c: false}, {t: "broken", c: true}, {t: "breaking", c: false}], type: "mcq" },
                        { q: "We need firefighters, there's a ________!", options:[{t: "fire", c: true}, {t: "theft", c: false}, {t: "robbery", c: false}, {t: "crash", c: false}], type: "mcq" },
                        { q: "Okay, sir. What's your ________?", options:[{t: "location", c: true}, {t: "local", c: false}, {t: "locate", c: false}, {t: "located", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Medical & First Aid",
                    drills:[
                        { q: "Stay calm, ________ is on the way.", options:[{t: "help", c: true}, {t: "police", c: false}, {t: "emergency", c: false}, {t: "accident", c: false}], type: "mcq" },
                        { q: "I need a doctor, I'm having ________ pains.", options:[{t: "chest", c: true}, {t: "head", c: false}, {t: "back", c: false}, {t: "tooth", c: false}], type: "mcq" },
                        { q: "She fell and ________ her head.", options:[{t: "hits", c: false}, {t: "hit", c: true}, {t: "hitted", c: false}, {t: "hitting", c: false}], type: "mcq" },
                        { q: "Does anyone know first ________?", options:[{t: "help", c: false}, {t: "aid", c: true}, {t: "kit", c: false}, {t: "rescue", c: false}], type: "mcq" },
                        { q: "You might have a broken leg, don't ________.", options:[{t: "move", c: true}, {t: "run", c: false}, {t: "stop", c: false}, {t: "stay", c: false}], type: "mcq" },
                        { q: "To stop the bleeding, apply ________ to the wound.", options:[{t: "pressure", c: true}, {t: "water", c: false}, {t: "ice", c: false}, {t: "fire", c: false}], type: "mcq" }
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
                { text: "Help! Somebody help me! ↗", audio: "TTS: Help! Somebody help me!" },
                { text: "Call an ambulance, there's an emergency! ↘", audio: "TTS: Call an ambulance, there's an emergency!" },
                { text: "What's your emergency? ↘", audio: "TTS: What's your emergency?" },
                { text: "There's been a car accident on the highway. ↘", audio: "TTS: There's been a car accident on the highway." },
                { text: "I'd like to report a robbery. ↘", audio: "TTS: I'd like to report a robbery." },
                { text: "My house has been broken into! ↘", audio: "TTS: My house has been broken into!" },
                { text: "Please hurry, someone is injured! ↘", audio: "TTS: Please hurry, someone is injured!" },
                { text: "Stay calm, help is on the way. ↘", audio: "TTS: Stay calm, help is on the way." },
                { text: "Does anyone know first aid? ↗", audio: "TTS: Does anyone know first aid?" },
                { text: "Don't move, and apply pressure to the wound. ↘", audio: "TTS: Don't move, and apply pressure to the wound." }
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
                    instruction: "Listen to the emergency call and type the missing words.",
                    audio: "TTS: Operator: 911, what's your emergency? Caller: There is a huge fire in my building! Operator: Are you in a safe location? Caller: Yes, we managed to evacuate the building.",
                    text: "Operator: 911, what's your [emergency]?<br>Caller: There is a huge [fire] in my building!<br>Operator: Are you in a [safe] location?<br>Caller: Yes, we managed to [evacuate] the building."
                },
                {
                    type: "dropdown",
                    instruction: "Listen to the dialogue about a medical issue.",
                    audio: "TTS: Mark: Are you okay? You look pale. Anna: I don't feel well. I'm having chest pains. Mark: Don't move. I will call an ambulance right now. Anna: Thank you. Please hurry.",
                    questions:[
                        { q: "Mark: Are you okay? You look[pale* | injured | unconscious].", a: "pale" },
                        { q: "Anna: I don't feel well. I'm having [chest* | back | head] pains.", a: "chest" },
                        { q: "Mark: Don't [move* | panic | breathe]. I will call an ambulance right now.", a: "move" },
                        { q: "Anna: Thank you. Please [hurry* | stay | help].", a: "hurry" }
                    ]
                },
                {
                    type: "audio-choice",
                    instruction: "Listen to the speaker. What is he reporting?",
                    audio: "TTS: I just came home from work, and the front door was open. My TV is gone, and the bedroom is a mess. I'd like to report a robbery.",
                    options:[
                        { t: "He is reporting a car accident.", c: false },
                        { t: "He is reporting that his house has been broken into.", c: true },
                        { t: "He is reporting a fire in his kitchen.", c: false },
                        { t: "He is reporting a medical emergency.", c: false }
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
                    title: "Dialogue - The Accident",
                    audio: "TTS: Operator: 911, what's your emergency? Caller: Somebody help me! There's been a car accident on the main bridge. Operator: Stay calm. Are there any injuries? Caller: Yes, a woman hit her head. She is bleeding and unconscious. Operator: Does anyone know first aid? Caller: No, but I have a first aid kit. Operator: Okay. Don't move her. Apply pressure to the wound to stop the bleeding. Help is on the way.",
                    body: "<b>[Operator](tooltip:operator):</b> 911, [what's your emergency](tooltip:whats-emergency)?<br><b>Caller:</b> [Somebody help me](tooltip:somebody-help)![There's been a car accident](tooltip:theres-been-accident) on the main bridge.<br><b>Operator:</b> Stay calm. Are there any [injuries](tooltip:injury)?<br><b>Caller:</b> Yes, a woman[hit her head](tooltip:hit-her-head). She is [bleeding](tooltip:bleed) and[unconscious](tooltip:unconscious).<br><b>Operator:</b> [Does anyone know first aid](tooltip:know-first-aid)?<br><b>Caller:</b> No, but I have a [first aid kit](tooltip:first-aid-kit).<br><b>Operator:</b> Okay. [Don't move](tooltip:dont-move) her.[Apply pressure to the wound](tooltip:apply-pressure) to stop the bleeding. [Help is on the way](tooltip:help-on-way).",
                    questions:[
                        { q: "What is the emergency?", options:[{t: "A house fire.", c: false}, {t: "A car accident on the bridge.", c: true}, {t: "A robbery.", c: false}], type: "mcq" },
                        { q: "What is the condition of the woman?", options:[{t: "She is awake and walking.", c: false}, {t: "She is choking.", c: false}, {t: "She is bleeding and unconscious.", c: true}], type: "mcq" },
                        { q: "What does the operator tell the caller to do?", options:[{t: "Apply pressure to the wound.", c: true}, {t: "Move her to the sidewalk.", c: false}, {t: "Give her water.", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Dialogue - The Break-In",
                    audio: "TTS: Dispatcher: Police department, what is your location? Victim: I live at 42 Elm Street. I'd like to report a robbery! Dispatcher: Are you safe right now? Victim: Yes, I am outside. My house has been broken into. Dispatcher: Are the suspects still inside? Victim: I don't think so, but please hurry! Dispatcher: We are sending an officer immediately. Do not go back inside.",
                    body: "<b>Dispatcher:</b> [Police](tooltip:police) department,[what's your location](tooltip:whats-location)?<br><b>[Victim](tooltip:victim):</b> I live at 42 Elm Street. [I'd like to report a robbery](tooltip:report-robbery)!<br><b>Dispatcher:</b> Are you [safe](tooltip:safe) right now?<br><b>Victim:</b> Yes, I am outside. [My house has been broken into](tooltip:house-broken-into).<br><b>Dispatcher:</b> Are the suspects still inside?<br><b>Victim:</b> I don't think so, but [please hurry](tooltip:please-hurry)!<br><b>Dispatcher:</b> We are sending an officer immediately. Do not go back inside.",
                    questions:[
                        { q: "What is the victim reporting?", options:[{t: "A robbery because their house was broken into.", c: true}, {t: "A car theft.", c: false}, {t: "A fire in the neighborhood.", c: false}], type: "mcq" },
                        { q: "Where is the victim right now?", options:[{t: "Hiding in the bedroom.", c: false}, {t: "Outside the house.", c: true}, {t: "At the police station.", c: false}], type: "mcq" },
                        { q: "What does the dispatcher advise the victim to do?", options:[{t: "Go inside and check for suspects.", c: false}, {t: "Not to go back inside.", c: true}, {t: "Call an ambulance.", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Email - A Medical Scare",
                    audio: "TTS: Subject: Is everyone okay? Hi David, I heard the ambulance sirens near your house last night. What happened? Are you okay? I was so worried. I hope there wasn't a fire. Let me know if you need anything. Best, Emma. Subject: Re: Is everyone okay? Hi Emma, Thanks for asking. We had an emergency. My neighbor fainted and was having chest pains. It looked like a heart attack. I called for help, and the paramedics arrived quickly. He is conscious now and recovering in the hospital. Best, David.",
                    body: "<b>From: Emma</b><br><b>To: David</b><br>Subject: Is everyone okay?<br><br>Hi David,<br>I heard the [ambulance](tooltip:ambulance) sirens near your house last night. What happened? Are you okay? I was so worried. I hope there wasn't a [fire](tooltip:fire). Let me know if you need anything.<br>Best, Emma.<br><br><b>From: David</b><br><b>To: Emma</b><br>Subject: Re: Is everyone okay?<br><br>Hi Emma,<br>Thanks for asking. We had an [emergency](tooltip:emergency). My neighbor [fainted](tooltip:faint) and was [having chest pains](tooltip:having-chest-pains). It looked like a [heart attack](tooltip:heart-attack). I [called for help](tooltip:call-for-help), and the[paramedics](tooltip:paramedic) arrived quickly. He is [conscious](tooltip:conscious) now and recovering in the [hospital](tooltip:hospital).<br>Best, David.",
                    questions:[
                        { q: "Why did Emma email David?", options:[{t: "Because she saw a fire.", c: false}, {t: "Because she heard ambulance sirens near his house.", c: true}, {t: "Because she wanted to report a crime.", c: false}], type: "mcq" },
                        { q: "What happened to David's neighbor?", options:[{t: "He broke his leg in a car crash.", c: false}, {t: "He was robbed.", c: false}, {t: "He fainted and had chest pains, possibly a heart attack.", c: true}], type: "mcq" },
                        { q: "What is the neighbor's condition now?", options:[{t: "He is still unconscious.", c: false}, {t: "He is conscious and recovering in the hospital.", c: true}, {t: "He passed away.", c: false}], type: "mcq" }
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
                { type: "matching", instruction: "Match the emergency type to its description.", pairs:[
                    { left: "Accident", right: "An unintended crash or injury", val: "1" },
                    { left: "Fire", right: "Flames destroying a building", val: "2" },
                    { left: "Robbery", right: "Stealing by force or threat", val: "3" },
                    { left: "Heart attack", right: "Severe chest pains", val: "4" }
                ]},
                { type: "matching", instruction: "Match the emergency workers to their jobs.", pairs:[
                    { left: "Police", right: "Catch criminals", val: "1" },
                    { left: "Firefighter", right: "Extinguish flames", val: "2" },
                    { left: "Paramedic", right: "Provide medical aid", val: "3" },
                    { left: "Operator", right: "Answer 911 calls", val: "4" }
                ]},
                { type: "matching", instruction: "Match the medical terms to their meanings.", pairs:[
                    { left: "Wound", right: "An open cut or injury", val: "1" },
                    { left: "Bandage", right: "Material to cover a cut", val: "2" },
                    { left: "Unconscious", right: "Passed out; not awake", val: "3" },
                    { left: "To bleed", right: "To lose blood", val: "4" }
                ]},
                { type: "matching", instruction: "Match the phrase halves.", pairs:[
                    { left: "Call an", right: "ambulance", val: "1" },
                    { left: "Apply pressure", right: "to the wound", val: "2" },
                    { left: "I'd like to", right: "report a robbery", val: "3" },
                    { left: "My house has", right: "been broken into", val: "4" }
                ]},

                // --- WORD ORDER (5-14) ---
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "me / Somebody / help / !", correct: "Somebody help me !" },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "ambulance / an / Call / !", correct: "Call an ambulance !" },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "police / the / Call / !", correct: "Call the police !" },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "emergency / an / There's / .", correct: "There's an emergency ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "hurry / Please / !", correct: "Please hurry !" },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "emergency / your / What's / ?", correct: "What's your emergency ?" },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "accident / car / been / a / There's / .", correct: "There's been a car accident ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "injured / is / Someone / .", correct: "Someone is injured ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "robbery / report / a / like / to / I'd / .", correct: "I'd like to report a robbery ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "location / your / What's / ?", correct: "What's your location ?" },

                // --- CLICKABLE ERROR (15-24) ---
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "[Any](error:Somebody) help me!" },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "Call a [paramedics](error:ambulance) to take him to the hospital!" }, // "Call an ambulance" is the target chunk
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "There's [was](error:been) a car accident." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "I'd like to [tell](error:report) a robbery." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "My house has been [broke](error:broken) into." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "Help is [in](error:on) the way." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "I'm [feeling](error:having) chest pains." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "She [hitted](error:hit) her head." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "Does anyone know first [help](error:aid)?" },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "Apply[press](error:pressure) to the wound." },

                // --- ODD ONE OUT (25-30) ---
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Emergencies)", options:[{t: "Crash", c: false}, {t: "Fire", c: false}, {t: "Robbery", c: false}, {t: "Bandage", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Medical)", options:[{t: "Wound", c: false}, {t: "Stroke", c: false}, {t: "Heart attack", c: false}, {t: "Theft", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Verbs)", options:[{t: "To bleed", c: false}, {t: "To choke", c: false}, {t: "To faint", c: false}, {t: "To assist", c: true}] }, // Assist is positive, others are medical issues
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Equipment)", options:[{t: "First aid kit", c: false}, {t: "Fire extinguisher", c: false}, {t: "Smoke detector", c: false}, {t: "Witness", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (People)", options:[{t: "Patient", c: false}, {t: "Victim", c: false}, {t: "Witness", c: false}, {t: "Wound", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Adjectives)", options:[{t: "Conscious", c: false}, {t: "Unconscious", c: false}, {t: "Wounded", c: false}, {t: "Operator", c: true}] },

                // --- TRUE / FALSE (31-35) ---
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "A 'paramedic' is the person who drives the police car.", correct: "false"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "If someone is 'unconscious', they are awake and talking.", correct: "false"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "You use a 'fire extinguisher' to put out a fire.", correct: "true"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "To 'evacuate' a building means to safely leave it because of danger.", correct: "true"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "If you 'choke', it means you are bleeding from your head.", correct: "false"}] },

                // --- MCQ (36-39) ---
                { type: "mcq", instruction: "Choose the correct phrase.<br>When you call 911, the operator will usually ask: '________?'", options:[{t: "Does anyone know first aid", c: false}, {t: "What's your emergency", c: true}, {t: "Help is on the way", c: false}, {t: "Can you apply pressure", c: false}] },
                { type: "mcq", instruction: "Choose the correct word.<br>If someone has a deep cut and is losing blood, they are ________.", options:[{t: "fainting", c: false}, {t: "choking", c: false}, {t: "bleeding", c: true}, {t: "rescuing", c: false}] },
                { type: "mcq", instruction: "Choose the correct phrase.<br>To stop a wound from bleeding too much, you should ________ to the wound.", options:[{t: "hit her head", c: false}, {t: "apply pressure", c: true}, {t: "call the police", c: false}, {t: "evacuate", c: false}] },
                { type: "mcq", instruction: "Choose the correct phrase.<br>When you come home and see your door smashed and your TV gone, you call the police and say: 'My house has ________!'", options:[{t: "been a car accident", c: false}, {t: "been broken into", c: true}, {t: "had a heart attack", c: false}, {t: "been bleeding", c: false}] },

                // --- CATEGORIZE (40) ---
                { type: "categorize", instruction: "Sort the words into Medical Issues and Crime/Accidents.", 
                    categories:[{id: "med", name: "Medical"}, {id: "crime", name: "Crime/Accident"}],
                    items:[
                        {text: "Heart attack", catId: "med"}, 
                        {text: "Stroke", catId: "med"}, 
                        {text: "Wound", catId: "med"}, 
                        {text: "Theft", catId: "crime"}, 
                        {text: "Robbery", catId: "crime"}, 
                        {text: "Crash", catId: "crime"}
                    ] 
                }
            ]
        },

        // ======================================================
        // STEP 8: WRITING PRACTICE
        // ======================================================
        {
            title: "Writing Practice",
            instruction: "Write a short paragraph (5-7 sentences) imagining you had to call 911 to report an emergency. Describe what type of emergency happened (e.g., a car accident, a fire), what the operator asked you, and what instructions they gave you.",
            example: "I had to call 911 today because there was a car accident on my street. The operator answered and asked, 'What's your emergency?'. I told them two cars crashed and someone is injured. They asked for my exact location. Then, they told me that an ambulance and the police were on the way. The operator instructed me not to move the injured person and to apply pressure to the wound to stop the bleeding. It was a very scary situation.",
            prompts:[
                "State what the emergency was.",
                "Mention calling the operator (e.g., 911, what's your emergency?).",
                "Describe the injuries or damage.",
                "Include the instructions given (e.g., apply pressure, don't move, evacuate)."
            ]
        },

        // ======================================================
        // STEP 9: FLASHCARDS
        // ======================================================
        {
            title: "Flashcards",
            items:[
                // 2A Items (36 items)
                { term: "Accident", definition: "An unfortunate incident that happens unexpectedly.", defTrans: "Acidente", example: "There was a terrible car accident on the bridge.", audioFront: "TTS: Accident", audioBack: "TTS: There was a terrible car accident on the bridge." },
                { term: "Crash", definition: "A violent collision.", defTrans: "Batida / Colisão", example: "The loud crash woke everyone up.", audioFront: "TTS: Crash", audioBack: "TTS: The loud crash woke everyone up." },
                { term: "Fire", definition: "Combustion or burning.", defTrans: "Incêndio / Fogo", example: "A huge fire destroyed the old building.", audioFront: "TTS: Fire", audioBack: "TTS: A huge fire destroyed the old building." },
                { term: "Theft", definition: "The action or crime of stealing.", defTrans: "Furto", example: "He reported the theft of his bicycle.", audioFront: "TTS: Theft", audioBack: "TTS: He reported the theft of his bicycle." },
                { term: "Robbery", definition: "The action of robbing a person or place (with force).", defTrans: "Roubo / Assalto", example: "The bank robbery was on the evening news.", audioFront: "TTS: Robbery", audioBack: "TTS: The bank robbery was on the evening news." },
                { term: "Injury", definition: "Physical harm or damage to someone's body.", defTrans: "Lesão", example: "She suffered a serious leg injury.", audioFront: "TTS: Injury", audioBack: "TTS: She suffered a serious leg injury." },
                { term: "Wound", definition: "An injury to living tissue caused by a cut.", defTrans: "Ferida / Ferimento", example: "The doctor cleaned the deep wound.", audioFront: "TTS: Wound", audioBack: "TTS: The doctor cleaned the deep wound." },
                { term: "Police", definition: "The civil force responsible for preventing crime.", defTrans: "Polícia", example: "The police arrived quickly to catch the thief.", audioFront: "TTS: Police", audioBack: "TTS: The police arrived quickly to catch the thief." },
                { term: "Firefighter", definition: "A person whose job is to extinguish fires.", defTrans: "Bombeiro", example: "A firefighter carried the child out of the flames.", audioFront: "TTS: Firefighter", audioBack: "TTS: A firefighter carried the child out of the flames." },
                { term: "Paramedic", definition: "A person trained to give emergency medical care.", defTrans: "Paramédico", example: "The paramedic gave him oxygen in the street.", audioFront: "TTS: Paramedic", audioBack: "TTS: The paramedic gave him oxygen in the street." },
                { term: "Ambulance", definition: "A vehicle for taking sick or injured people to the hospital.", defTrans: "Ambulância", example: "An ambulance rushed the injured man to the clinic.", audioFront: "TTS: Ambulance", audioBack: "TTS: An ambulance rushed the injured man to the clinic." },
                { term: "Operator", definition: "A person who answers emergency phone calls.", defTrans: "Operador(a)", example: "The 911 operator asked for my exact location.", audioFront: "TTS: Operator", audioBack: "TTS: The 911 operator asked for my exact location." },

                { term: "First aid kit", definition: "A collection of supplies used to give medical treatment.", defTrans: "Kit de primeiros socorros", example: "I keep a first aid kit in my trunk.", audioFront: "TTS: First aid kit", audioBack: "TTS: I keep a first aid kit in my trunk." },
                { term: "Bandage", definition: "A strip of material used to bind a wound.", defTrans: "Bandagem / Atadura", example: "Put a bandage over the cut to stop the bleeding.", audioFront: "TTS: Bandage", audioBack: "TTS: Put a bandage over the cut to stop the bleeding." },
                { term: "Fire extinguisher", definition: "A portable device used to put out a fire.", defTrans: "Extintor de incêndio", example: "He used a fire extinguisher to put out the flames.", audioFront: "TTS: Fire extinguisher", audioBack: "TTS: He used a fire extinguisher to put out the flames." },
                { term: "Smoke detector", definition: "A device that senses smoke as an indicator of fire.", defTrans: "Detector de fumaça", example: "The smoke detector beeped loudly during the night.", audioFront: "TTS: Smoke detector", audioBack: "TTS: The smoke detector beeped loudly during the night." },
                { term: "Emergency exit", definition: "A special door used to get out of a building safely.", defTrans: "Saída de emergência", example: "Please run toward the nearest emergency exit.", audioFront: "TTS: Emergency exit", audioBack: "TTS: Please run toward the nearest emergency exit." },
                { term: "Hospital", definition: "An institution providing medical treatment.", defTrans: "Hospital", example: "They took the patient directly to the hospital.", audioFront: "TTS: Hospital", audioBack: "TTS: They took the patient directly to the hospital." },
                { term: "Victim", definition: "A person harmed or injured as a result of a crime or accident.", defTrans: "Vítima", example: "The victim of the crash is still in shock.", audioFront: "TTS: Victim", audioBack: "TTS: The victim of the crash is still in shock." },
                { term: "Patient", definition: "A person receiving medical treatment.", defTrans: "Paciente", example: "The patient needs to rest in a quiet room.", audioFront: "TTS: Patient", audioBack: "TTS: The patient needs to rest in a quiet room." },
                { term: "Witness", definition: "A person who sees an event take place.", defTrans: "Testemunha", example: "The witness told the police what he saw.", audioFront: "TTS: Witness", audioBack: "TTS: The witness told the police what he saw." },
                { term: "Heart attack", definition: "A sudden occurrence of coronary thrombosis.", defTrans: "Ataque cardíaco", example: "He had a heart attack and felt chest pain.", audioFront: "TTS: Heart attack", audioBack: "TTS: He had a heart attack and felt chest pain." },
                { term: "Stroke", definition: "A sudden disabling attack caused by an interruption in blood to the brain.", defTrans: "Derrame cerebral (AVC)", example: "A stroke can affect your ability to speak.", audioFront: "TTS: Stroke", audioBack: "TTS: A stroke can affect your ability to speak." },
                { term: "Allergic reaction", definition: "A condition in which the immune system reacts abnormally.", defTrans: "Reação alérgica", example: "She had an allergic reaction after eating peanuts.", audioFront: "TTS: Allergic reaction", audioBack: "TTS: She had an allergic reaction after eating peanuts." },

                { term: "To assist", definition: "To help someone.", defTrans: "Ajudar", example: "We need someone to assist the injured woman.", audioFront: "TTS: To assist", audioBack: "TTS: We need someone to assist the injured woman." },
                { term: "To rescue", definition: "To save someone from a dangerous situation.", defTrans: "Resgatar", example: "The team worked hard to rescue the trapped dog.", audioFront: "TTS: To rescue", audioBack: "TTS: The team worked hard to rescue the trapped dog." },
                { term: "To bleed", definition: "To lose blood from the body.", defTrans: "Sangrar", example: "Put pressure on the cut so you don't bleed.", audioFront: "TTS: To bleed", audioBack: "TTS: Put pressure on the cut so you don't bleed." },
                { term: "To choke", definition: "To have severe difficulty in breathing.", defTrans: "Engasgar", example: "Drink water slowly so you don't choke.", audioFront: "TTS: To choke", audioBack: "TTS: Drink water slowly so you don't choke." },
                { term: "To faint", definition: "To lose consciousness for a short time.", defTrans: "Desmaiar", example: "He felt dizzy and was about to faint.", audioFront: "TTS: To faint", audioBack: "TTS: He felt dizzy and was about to faint." },
                { term: "To evacuate", definition: "To remove someone from a place of danger.", defTrans: "Evacuar", example: "You must evacuate the building immediately!", audioFront: "TTS: To evacuate", audioBack: "TTS: You must evacuate the building immediately!" },
                { term: "Urgent", definition: "Requiring immediate action or attention.", defTrans: "Urgente", example: "This is an urgent message for the doctor.", audioFront: "TTS: Urgent", audioBack: "TTS: This is an urgent message for the doctor." },
                { term: "Critical", definition: "At a point of danger or crisis; severely ill.", defTrans: "Crítico(a)", example: "The patient is in a critical condition.", audioFront: "TTS: Critical", audioBack: "TTS: The patient is in a critical condition." },
                { term: "Dangerous", definition: "Able or likely to cause harm or injury.", defTrans: "Perigoso(a)", example: "Do not enter, it is very dangerous inside.", audioFront: "TTS: Dangerous", audioBack: "TTS: Do not enter, it is very dangerous inside." },
                { term: "Wounded", definition: "Inflicted with an injury, especially a cut.", defTrans: "Ferido(a)", example: "The wounded soldiers were taken to the medical tent.", audioFront: "TTS: Wounded", audioBack: "TTS: The wounded soldiers were taken to the medical tent." },
                { term: "Conscious", definition: "Awake and aware of one's surroundings.", defTrans: "Consciente", example: "He hit his head, but he is still conscious.", audioFront: "TTS: Conscious", audioBack: "TTS: He hit his head, but he is still conscious." },
                { term: "Unconscious", definition: "Not awake and aware of one's environment.", defTrans: "Inconsciente", example: "The driver was unconscious after the collision.", audioFront: "TTS: Unconscious", audioBack: "TTS: The driver was unconscious after the collision." },

                // 3A Items (18 items)
                { term: "Somebody help me!", definition: "An urgent cry for assistance.", defTrans: "Alguém me ajude!", example: "Somebody help me!", audioFront: "TTS: Somebody help me!", audioBack: "TTS: Somebody help me!" },
                { term: "Call an ambulance", definition: "An instruction to request medical transport.", defTrans: "Chame uma ambulância", example: "He is badly hurt, call an ambulance!", audioFront: "TTS: Call an ambulance", audioBack: "TTS: He is badly hurt, call an ambulance!" },
                { term: "Call the police", definition: "An instruction to request law enforcement.", defTrans: "Chame a polícia", example: "Those men took my bag, call the police!", audioFront: "TTS: Call the police", audioBack: "TTS: Those men took my bag, call the police!" },
                { term: "There's an emergency", definition: "Stating that a critical situation is happening.", defTrans: "Há uma emergência", example: "We need a doctor, there's an emergency!", audioFront: "TTS: There's an emergency", audioBack: "TTS: We need a doctor, there's an emergency!" },
                { term: "Please hurry", definition: "Asking someone or services to act quickly.", defTrans: "Por favor, se apresse", example: "She is not breathing, please hurry!", audioFront: "TTS: Please hurry", audioBack: "TTS: She is not breathing, please hurry!" },
                { term: "What's your emergency?", definition: "The standard greeting from a 911 operator.", defTrans: "Qual é a sua emergência?", example: "911, what's your emergency?", audioFront: "TTS: What's your emergency?", audioBack: "TTS: 911, what's your emergency?" },
                
                { term: "There's been a car accident", definition: "Reporting a collision on the road.", defTrans: "Houve um acidente de carro", example: "There's been a car accident on the highway.", audioFront: "TTS: There's been a car accident", audioBack: "TTS: There's been a car accident on the highway." },
                { term: "Someone is injured", definition: "Reporting that a person has suffered physical harm.", defTrans: "Alguém está ferido", example: "Send a paramedic, someone is injured.", audioFront: "TTS: Someone is injured", audioBack: "TTS: Send a paramedic, someone is injured." },
                { term: "I'd like to report a robbery", definition: "Stating the intent to tell the police about a theft.", defTrans: "Gostaria de relatar um assalto", example: "I'd like to report a robbery at the bank.", audioFront: "TTS: I'd like to report a robbery", audioBack: "TTS: I'd like to report a robbery at the bank." },
                { term: "My house has been broken into", definition: "Reporting a home invasion or burglary.", defTrans: "Minha casa foi arrombada", example: "My house has been broken into, the window is shattered.", audioFront: "TTS: My house has been broken into", audioBack: "TTS: My house has been broken into, the window is shattered." },
                { term: "There's a fire", definition: "Reporting flames destroying property.", defTrans: "Há um incêndio", example: "There's a fire in the building!", audioFront: "TTS: There's a fire", audioBack: "TTS: There's a fire in the building!" },
                { term: "What's your location?", definition: "An operator asking where the emergency is.", defTrans: "Qual é a sua localização?", example: "Okay, sir. What's your location?", audioFront: "TTS: What's your location?", audioBack: "TTS: Okay, sir. What's your location?" },
                
                { term: "Help is on the way", definition: "Reassuring a caller that services have been dispatched.", defTrans: "A ajuda está a caminho", example: "Stay calm, help is on the way.", audioFront: "TTS: Help is on the way", audioBack: "TTS: Stay calm, help is on the way." },
                { term: "I'm having chest pains", definition: "Describing a symptom of a heart attack.", defTrans: "Estou com dores no peito", example: "I'm having chest pains and feel dizzy.", audioFront: "TTS: I'm having chest pains", audioBack: "TTS: I'm having chest pains and feel dizzy." },
                { term: "She hit her head", definition: "Describing an injury to someone's skull.", defTrans: "Ela bateu a cabeça", example: "She hit her head and is unconscious.", audioFront: "TTS: She hit her head", audioBack: "TTS: She hit her head and is unconscious." },
                { term: "Does anyone know first aid?", definition: "Asking the crowd if anyone has medical training.", defTrans: "Alguém sabe primeiros socorros?", example: "Does anyone know first aid?", audioFront: "TTS: Does anyone know first aid?", audioBack: "TTS: Does anyone know first aid?" },
                { term: "Don't move", definition: "Instruction to an injured person to prevent further harm.", defTrans: "Não se mova", example: "You are injured, don't move.", audioFront: "TTS: Don't move", audioBack: "TTS: You are injured, don't move." },
                { term: "Apply pressure to the wound", definition: "Instruction to stop bleeding.", defTrans: "Aplique pressão no ferimento", example: "Use this bandage and apply pressure to the wound.", audioFront: "TTS: Apply pressure to the wound", audioBack: "TTS: Use this bandage and apply pressure to the wound." }
            ]
        }
    ],

    // ======================================================
    // GLOSSARY (All 54 items + Context words)
    // ======================================================
    glossary:[
        // 2A: Types of Emergencies
        { topic: "Emergencies", term: "accident", definition: "An unfortunate incident that happens unexpectedly.", translation: "Acidente" },
        { topic: "Emergencies", term: "crash", definition: "A violent collision.", translation: "Batida / Colisão" },
        { topic: "Emergencies", term: "fire", definition: "Combustion or burning.", translation: "Incêndio" },
        { topic: "Emergencies", term: "theft", definition: "The action or crime of stealing.", translation: "Furto" },
        { topic: "Emergencies", term: "robbery", definition: "The action of robbing a person or place.", translation: "Roubo / Assalto" },
        { topic: "Emergencies", term: "injury", definition: "Physical harm or damage to someone's body.", translation: "Lesão / Ferimento" },
        { topic: "Emergencies", term: "wound", definition: "An injury caused by a cut.", translation: "Ferida" },
        { topic: "People", term: "police", definition: "The civil force responsible for preventing crime.", translation: "Polícia" },
        { topic: "People", term: "firefighter", definition: "A person whose job is to extinguish fires.", translation: "Bombeiro" },
        { topic: "People", term: "paramedic", definition: "A person trained to give emergency medical care.", translation: "Paramédico" },
        { topic: "Vehicles", term: "ambulance", definition: "A vehicle for taking sick/injured people to hospital.", translation: "Ambulância" },
        { topic: "People", term: "operator", definition: "A person who answers emergency phone calls.", translation: "Operador(a)" },

        // 2A: Medical & Safety Items
        { topic: "Items", term: "first-aid-kit", definition: "A collection of supplies for medical treatment.", translation: "Kit de primeiros socorros" },
        { topic: "Items", term: "bandage", definition: "A strip of material used to bind a wound.", translation: "Bandagem / Atadura" },
        { topic: "Items", term: "fire-extinguisher", definition: "A portable device used to put out a fire.", translation: "Extintor de incêndio" },
        { topic: "Items", term: "smoke-detector", definition: "A device that senses smoke.", translation: "Detector de fumaça" },
        { topic: "Places", term: "emergency-exit", definition: "A special door used to get out safely.", translation: "Saída de emergência" },
        { topic: "Places", term: "hospital", definition: "An institution providing medical treatment.", translation: "Hospital" },
        { topic: "People", term: "victim", definition: "A person harmed or injured as a result of a crime or accident.", translation: "Vítima" },
        { topic: "People", term: "patient", definition: "A person receiving medical treatment.", translation: "Paciente" },
        { topic: "People", term: "witness", definition: "A person who sees an event take place.", translation: "Testemunha" },
        { topic: "Conditions", term: "heart-attack", definition: "A sudden occurrence of coronary thrombosis.", translation: "Ataque cardíaco" },
        { topic: "Conditions", term: "stroke", definition: "A sudden disabling attack affecting the brain.", translation: "Derrame cerebral (AVC)" },
        { topic: "Conditions", term: "allergic-reaction", definition: "A condition in which the immune system reacts abnormally.", translation: "Reação alérgica" },

        // 2A: Verbs & Adjectives
        { topic: "Verbs", term: "to-assist", definition: "To help someone.", translation: "Ajudar" },
        { topic: "Verbs", term: "to-rescue", definition: "To save someone from a dangerous situation.", translation: "Resgatar" },
        { topic: "Verbs", term: "to-bleed", definition: "To lose blood from the body.", translation: "Sangrar" },
        { topic: "Verbs", term: "to-choke", definition: "To have severe difficulty in breathing.", translation: "Engasgar" },
        { topic: "Verbs", term: "to-faint", definition: "To lose consciousness for a short time.", translation: "Desmaiar" },
        { topic: "Verbs", term: "to-evacuate", definition: "To remove someone from a place of danger.", translation: "Evacuar" },
        { topic: "Adjectives", term: "urgent", definition: "Requiring immediate action or attention.", translation: "Urgente" },
        { topic: "Adjectives", term: "critical", definition: "At a point of danger or crisis; severely ill.", translation: "Crítico(a)" },
        { topic: "Adjectives", term: "dangerous", definition: "Able or likely to cause harm or injury.", translation: "Perigoso(a)" },
        { topic: "Adjectives", term: "wounded", definition: "Inflicted with an injury, especially a cut.", translation: "Ferido(a)" },
        { topic: "Adjectives", term: "conscious", definition: "Awake and aware of one's surroundings.", translation: "Consciente" },
        { topic: "Adjectives", term: "unconscious", definition: "Not awake and aware of one's environment.", translation: "Inconsciente" },

        // 3A: Expressions
        { topic: "Expressions", term: "somebody-help", definition: "An urgent cry for assistance.", translation: "Alguém me ajude!" },
        { topic: "Expressions", term: "call-ambulance", definition: "An instruction to request medical transport.", translation: "Chame uma ambulância" },
        { topic: "Expressions", term: "call-police", definition: "An instruction to request law enforcement.", translation: "Chame a polícia" },
        { topic: "Expressions", term: "theres-emergency", definition: "Stating that a critical situation is happening.", translation: "Há uma emergência" },
        { topic: "Expressions", term: "please-hurry", definition: "Asking someone or services to act quickly.", translation: "Por favor, se apresse" },
        { topic: "Expressions", term: "whats-emergency", definition: "The standard greeting from a 911 operator.", translation: "Qual é a sua emergência?" },
        
        { topic: "Expressions", term: "theres-been-accident", definition: "Reporting a collision on the road.", translation: "Houve um acidente de carro" },
        { topic: "Expressions", term: "someone-injured", definition: "Reporting that a person has suffered physical harm.", translation: "Alguém está ferido" },
        { topic: "Expressions", term: "report-robbery", definition: "Stating the intent to tell the police about a theft.", translation: "Gostaria de relatar um assalto" },
        { topic: "Expressions", term: "house-broken-into", definition: "Reporting a home invasion or burglary.", translation: "Minha casa foi arrombada" },
        { topic: "Expressions", term: "theres-fire", definition: "Reporting flames destroying property.", translation: "Há um incêndio" },
        { topic: "Expressions", term: "whats-location", definition: "An operator asking where the emergency is.", translation: "Qual é a sua localização?" },
        
        { topic: "Expressions", term: "help-on-way", definition: "Reassuring a caller that services have been dispatched.", translation: "A ajuda está a caminho" },
        { topic: "Expressions", term: "having-chest-pains", definition: "Describing a symptom of a heart attack.", translation: "Estou com dores no peito" },
        { topic: "Expressions", term: "hit-her-head", definition: "Describing an injury to someone's skull.", translation: "Ela bateu a cabeça" },
        { topic: "Expressions", term: "know-first-aid", definition: "Asking the crowd if anyone has medical training.", translation: "Alguém sabe primeiros socorros?" },
        { topic: "Expressions", term: "dont-move", definition: "Instruction to an injured person to prevent further harm.", translation: "Não se mova" },
        { topic: "Expressions", term: "apply-pressure", definition: "Instruction to stop bleeding.", translation: "Aplique pressão no ferimento" },

        // Additional Context Words
        { topic: "Context", term: "car-accident", definition: "A collision involving a motor vehicle.", translation: "Acidente de carro" },
        { topic: "Context", term: "first-aid", definition: "Emergency medical treatment given to someone injured.", translation: "Primeiros socorros" },
        { topic: "Context", term: "bleed", definition: "To lose blood.", translation: "Sangrar" },
        { topic: "Context", term: "injured", definition: "Harmed, damaged, or impaired.", translation: "Ferido" },
        { topic: "Context", term: "safe", definition: "Protected from or not exposed to danger.", translation: "Seguro" }
    ]
});