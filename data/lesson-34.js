/**
 * English Block Assembling - LESSON DATA: Topic 34
 * Topic: Weather Disasters and Safety
 * Level: Upper A2 ~ Lower B1
 */

window.initLesson({
    // --- METADATA ---
    lessonId: "lesson-34",
    block: "5",
    topicTitle: "Weather Disasters and Safety",

    steps:[
        // ======================================================
        // STEP 0: INTRO & CAN-DO
        // ======================================================
        {
            title: "Intro & Can-Do",
            objectives: "• Identify and describe different types of natural [disasters](tooltip:disaster).<br>• Understand and communicate weather [warnings](tooltip:warning) and [alerts](tooltip:alert).<br>• Discuss essential safety[precautions](tooltip:precaution) and emergency kits.<br>• Describe the [damage](tooltip:damage) and impact of severe weather events.",
            welcome: "Welcome to Lesson 34! Nature can be beautiful, but it can also be very dangerous. In this lesson, you will learn the essential vocabulary to talk about extreme weather events like hurricanes, earthquakes, and floods. You will also learn practical phrases to understand safety alerts, prepare an emergency kit, and talk about the impact of a disaster. Let's learn how to stay safe!",
            audio: {
                objectives: "TTS: In this lesson, you will learn to: Identify and describe different types of natural disasters. Understand and communicate weather warnings and alerts. Discuss essential safety precautions and emergency kits. Describe the damage and impact of severe weather events.",
                welcome: "TTS: Welcome to Lesson 34! Nature can be beautiful, but it can also be very dangerous. In this lesson, you will learn the essential vocabulary to talk about extreme weather events like hurricanes, earthquakes, and floods. You will also learn practical phrases to understand safety alerts, prepare an emergency kit, and talk about the impact of a disaster. Let's learn how to stay safe!"
            }
        },

        // ======================================================
        // STEP 1: CONTEXT DIALOGUE
        // ======================================================
        {
            title: "Context Dialogue",
            context: "Emma and Liam are at home when they receive an emergency alert on their phones.",
            contextAudio: "TTS: Emma: Did you see the weather alert on your phone? A hurricane is expected to hit our area on Saturday. Liam: Yes, I just saw it. It sounds serious. A weather warning was also issued on TV. Emma: We need to prepare. I am going to the supermarket to buy some supplies. Liam: Me too. I need to make sure our emergency kit is ready. Do you have flashlights and extra batteries? Emma: I think so. I should also bring my outdoor furniture inside so it doesn't blow away. Liam: Good idea. Let's make sure we check on our elderly neighbor, Mrs. Smith, to see if she needs anything. Emma: Absolutely. Let's stay in touch and keep our phones charged. Stay safe!",
            dialogue:[
                { speaker: "Emma", text: "Did you see the [weather warning](tooltip:weather-warning) on your phone? A [hurricane](tooltip:hurricane) is expected to[strike](tooltip:strike) our area on Saturday." },
                { speaker: "Liam", text: "Yes, I just saw the [alert](tooltip:alert). It sounds serious. We need to [prepare](tooltip:prepare)." },
                { speaker: "Emma", text: "I am going to the supermarket to buy some[supplies](tooltip:supplies)." },
                { speaker: "Liam", text: "Me too. I need to make sure our[emergency kit](tooltip:emergency-kit) is ready. Do you have [flashlights](tooltip:flashlight) and extra [batteries](tooltip:battery)?" },
                { speaker: "Emma", text: "I think so. I should also bring my outdoor furniture inside so it doesn't cause [damage](tooltip:damage)." },
                { speaker: "Liam", text: "Good idea.[Let's](tooltip:lets) make sure we [check on your neighbors](tooltip:check-neighbors), especially Mrs. Smith, to see if she needs anything." },
                { speaker: "Emma", text: "Absolutely. Let's stay in touch and keep our phones charged. [Safe](tooltip:safe) travels!" }
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
                    title: "Types of Disasters",
                    audio: "TTS: Disaster. Storm. Hurricane. Typhoon. Tornado. Blizzard. Earthquake. Tremor. Aftershock. Flood. Wildfire. Drought. Heatwave. Tsunami.",
                    items:[
                        { term: "Disaster", trans: "Desastre" },
                        { term: "Storm", trans: "Tempestade" },
                        { term: "Hurricane", trans: "Furacão" },
                        { term: "Typhoon", trans: "Tufão" },
                        { term: "Tornado", trans: "Tornado" },
                        { term: "Blizzard", trans: "Nevasca" },
                        { term: "Earthquake", trans: "Terremoto" },
                        { term: "Tremor", trans: "Tremor" },
                        { term: "Aftershock", trans: "Tremor secundário (após terremoto)" },
                        { term: "Flood", trans: "Enchente / Inundação" },
                        { term: "Wildfire", trans: "Incêndio florestal" },
                        { term: "Drought", trans: "Seca" },
                        { term: "Heatwave", trans: "Onda de calor" },
                        { term: "Tsunami", trans: "Tsunami / Maremoto" }
                    ]
                },
                {
                    title: "Safety & Impact",
                    audio: "TTS: Safety. Precaution. Warning. Alert. Alarm. Shelter. Evacuation. Emergency kit. First-aid kit. Flashlight. Battery. Supplies. Damage. Power outage.",
                    items:[
                        { term: "Safety", trans: "Segurança" },
                        { term: "Precaution", trans: "Precaução" },
                        { term: "Warning", trans: "Aviso" },
                        { term: "Alert", trans: "Alerta" },
                        { term: "Alarm", trans: "Alarme" },
                        { term: "Shelter", trans: "Abrigo" },
                        { term: "Evacuation", trans: "Evacuação / Retirada" },
                        { term: "Emergency kit", trans: "Kit de emergência" },
                        { term: "First-aid kit", trans: "Kit de primeiros socorros" },
                        { term: "Flashlight", trans: "Lanterna" },
                        { term: "Battery", trans: "Bateria / Pilha" },
                        { term: "Supplies", trans: "Suprimentos / Provisões" },
                        { term: "Damage", trans: "Dano / Estrago" },
                        { term: "Power outage", trans: "Queda de energia" }
                    ]
                },
                {
                    title: "Verbs & Adjectives",
                    audio: "TTS: To warn. To strike. To shake. To evacuate. To survive. To rescue. Severe. Extreme. Powerful. Dangerous. Destructive. Safe. Unsafe. Prepared.",
                    items:[
                        { term: "To warn", trans: "Avisar / Alertar" },
                        { term: "To strike", trans: "Atingir / Atacar" },
                        { term: "To shake", trans: "Tremer / Sacudir" },
                        { term: "To evacuate", trans: "Evacuar / Retirar-se" },
                        { term: "To survive", trans: "Sobreviver" },
                        { term: "To rescue", trans: "Resgatar / Salvar" },
                        { term: "Severe", trans: "Severo / Grave" },
                        { term: "Extreme", trans: "Extremo" },
                        { term: "Powerful", trans: "Poderoso" },
                        { term: "Dangerous", trans: "Perigoso" },
                        { term: "Destructive", trans: "Destrutivo" },
                        { term: "Safe", trans: "Seguro" },
                        { term: "Unsafe", trans: "Inseguro" },
                        { term: "Prepared", trans: "Preparado" }
                    ]
                }
            ],

            // --- 2B: EXAMPLES ---
            exampleGroups:[
                {
                    title: "Types of Disasters",
                    audio: "TTS: The natural disaster caused many people to leave their homes. The storm brought heavy rain and strong winds. The hurricane hit the coast of Florida. A typhoon is similar to a hurricane but in the Pacific. The tornado destroyed several houses. We were stuck inside during the blizzard. The earthquake shook the entire city. I felt a small tremor in the morning. After the main earthquake, there was a strong aftershock. The heavy rains caused a terrible flood. A wildfire burned thousands of trees in the forest. The drought ruined the farmers' crops. It is hard to sleep during a heatwave. The tsunami wave was incredibly high.",
                    items:[
                        { term: "Disaster", sent: "The natural disaster caused many people to leave their homes.", trans: "O desastre natural fez com que muitas pessoas deixassem suas casas." },
                        { term: "Storm", sent: "The storm brought heavy rain and strong winds.", trans: "A tempestade trouxe chuva forte e ventos fortes." },
                        { term: "Hurricane", sent: "The hurricane hit the coast of Florida.", trans: "O furacão atingiu a costa da Flórida." },
                        { term: "Typhoon", sent: "A typhoon is similar to a hurricane but in the Pacific.", trans: "Um tufão é semelhante a um furacão, mas no Pacífico." },
                        { term: "Tornado", sent: "The tornado destroyed several houses.", trans: "O tornado destruiu várias casas." },
                        { term: "Blizzard", sent: "We were stuck inside during the blizzard.", trans: "Ficamos presos lá dentro durante a nevasca." },
                        { term: "Earthquake", sent: "The earthquake shook the entire city.", trans: "O terremoto sacudiu a cidade inteira." },
                        { term: "Tremor", sent: "I felt a small tremor in the morning.", trans: "Senti um pequeno tremor de manhã." },
                        { term: "Aftershock", sent: "After the main earthquake, there was a strong aftershock.", trans: "Após o terremoto principal, houve um forte tremor secundário." },
                        { term: "Flood", sent: "The heavy rains caused a terrible flood.", trans: "As fortes chuvas causaram uma terrível enchente." },
                        { term: "Wildfire", sent: "A wildfire burned thousands of trees in the forest.", trans: "Um incêndio florestal queimou milhares de árvores na floresta." },
                        { term: "Drought", sent: "The drought ruined the farmers' crops.", trans: "A seca arruinou as plantações dos agricultores." },
                        { term: "Heatwave", sent: "It is hard to sleep during a heatwave.", trans: "É difícil dormir durante uma onda de calor." },
                        { term: "Tsunami", sent: "The tsunami wave was incredibly high.", trans: "A onda do tsunami era incrivelmente alta." }
                    ]
                },
                {
                    title: "Safety & Impact",
                    audio: "TTS: Your safety is our number one priority. You should take every precaution before the storm. The government issued a weather warning. My phone received an emergency alert. The fire alarm woke everyone up. We had to seek shelter in the basement. The evacuation of the town went smoothly. Everyone needs an emergency kit at home. The first-aid kit has bandages and medicine. Use a flashlight if the lights go out. We bought an extra battery for the radio. We bought food and water supplies. The storm caused significant damage to the roof. The power outage lasted for three days.",
                    items:[
                        { term: "Safety", sent: "Your safety is our number one priority.", trans: "Sua segurança é nossa prioridade número um." },
                        { term: "Precaution", sent: "You should take every precaution before the storm.", trans: "Você deve tomar todas as precauções antes da tempestade." },
                        { term: "Warning", sent: "The government issued a weather warning.", trans: "O governo emitiu um aviso meteorológico." },
                        { term: "Alert", sent: "My phone received an emergency alert.", trans: "Meu telefone recebeu um alerta de emergência." },
                        { term: "Alarm", sent: "The fire alarm woke everyone up.", trans: "O alarme de incêndio acordou todo mundo." },
                        { term: "Shelter", sent: "We had to seek shelter in the basement.", trans: "Tivemos que procurar abrigo no porão." },
                        { term: "Evacuation", sent: "The evacuation of the town went smoothly.", trans: "A evacuação da cidade ocorreu sem problemas." },
                        { term: "Emergency kit", sent: "Everyone needs an emergency kit at home.", trans: "Todos precisam de um kit de emergência em casa." },
                        { term: "First-aid kit", sent: "The first-aid kit has bandages and medicine.", trans: "O kit de primeiros socorros tem ataduras e remédios." },
                        { term: "Flashlight", sent: "Use a flashlight if the lights go out.", trans: "Use uma lanterna se as luzes apagarem." },
                        { term: "Battery", sent: "We bought an extra battery for the radio.", trans: "Compramos uma pilha extra para o rádio." },
                        { term: "Supplies", sent: "We bought food and water supplies.", trans: "Compramos suprimentos de comida e água." },
                        { term: "Damage", sent: "The storm caused significant damage to the roof.", trans: "A tempestade causou danos significativos ao telhado." },
                        { term: "Power outage", sent: "The power outage lasted for three days.", trans: "A queda de energia durou três dias." }
                    ]
                },
                {
                    title: "Verbs & Adjectives",
                    audio: "TTS: They tried to warn the residents about the flood. The hurricane will strike the island tomorrow. The ground began to shake violently. We must evacuate the building immediately. Fortunately, everyone managed to survive. The firefighters helped rescue the trapped family. The city experienced a severe storm. Extreme weather is becoming more common. The tornado was very powerful. It is dangerous to drive during a blizzard. The earthquake was highly destructive. Stay indoors to remain safe. It is unsafe to swim during a thunderstorm. We are prepared for any emergency.",
                    items:[
                        { term: "To warn", sent: "They tried to warn the residents about the flood.", trans: "Eles tentaram avisar os residentes sobre a enchente." },
                        { term: "To strike", sent: "The hurricane will strike the island tomorrow.", trans: "O furacão atingirá a ilha amanhã." },
                        { term: "To shake", sent: "The ground began to shake violently.", trans: "O chão começou a tremer violentamente." },
                        { term: "To evacuate", sent: "We must evacuate the building immediately.", trans: "Devemos evacuar o prédio imediatamente." },
                        { term: "To survive", sent: "Fortunately, everyone managed to survive.", trans: "Felizmente, todos conseguiram sobreviver." },
                        { term: "To rescue", sent: "The firefighters helped rescue the trapped family.", trans: "Os bombeiros ajudaram a resgatar a família presa." },
                        { term: "Severe", sent: "The city experienced a severe storm.", trans: "A cidade passou por uma tempestade severa." },
                        { term: "Extreme", sent: "Extreme weather is becoming more common.", trans: "Clima extremo está se tornando mais comum." },
                        { term: "Powerful", sent: "The tornado was very powerful.", trans: "O tornado era muito poderoso." },
                        { term: "Dangerous", sent: "It is dangerous to drive during a blizzard.", trans: "É perigoso dirigir durante uma nevasca." },
                        { term: "Destructive", sent: "The earthquake was highly destructive.", trans: "O terremoto foi altamente destrutivo." },
                        { term: "Safe", sent: "Stay indoors to remain safe.", trans: "Fique dentro de casa para permanecer seguro." },
                        { term: "Unsafe", sent: "It is unsafe to swim during a thunderstorm.", trans: "É inseguro nadar durante uma tempestade de raios." },
                        { term: "Prepared", sent: "We are prepared for any emergency.", trans: "Estamos preparados para qualquer emergência." }
                    ]
                }
            ],

            // --- 2C: PRACTICE ---
            drillGroups:[
                {
                    title: "Types of Disasters",
                    drills:[
                        { q: "A sudden event, such as an accident or a natural catastrophe, that causes great damage is a ________.", options:[{t: "Shelter", c: false}, {t: "Disaster", c: true}, {t: "Alert", c: false}, {t: "Rescue", c: false}], type: "mcq" },
                        { q: "A violent disturbance of the atmosphere with strong winds and usually rain is a ________.", options:[{t: "Storm", c: true}, {t: "Drought", c: false}, {t: "Tremor", c: false}, {t: "Heatwave", c: false}], type: "mcq" },
                        { q: "A storm with a violent wind, in particular a tropical cyclone in the Caribbean, is a ________.", options:[{t: "Blizzard", c: false}, {t: "Tsunami", c: false}, {t: "Hurricane", c: true}, {t: "Earthquake", c: false}], type: "mcq" },
                        { q: "A tropical storm in the region of the Indian or western Pacific oceans is a ________.", options:[{t: "Tornado", c: false}, {t: "Typhoon", c: true}, {t: "Flood", c: false}, {t: "Wildfire", c: false}], type: "mcq" },
                        { q: "A destructive vortex of violently rotating winds having the appearance of a funnel-shaped cloud is a ________.", options:[{t: "Tornado", c: true}, {t: "Tsunami", c: false}, {t: "Drought", c: false}, {t: "Blizzard", c: false}], type: "mcq" },
                        { q: "A severe snowstorm with high winds and low visibility is a ________.", options:[{t: "Blizzard", c: true}, {t: "Hurricane", c: false}, {t: "Heatwave", c: false}, {t: "Wildfire", c: false}], type: "mcq" },
                        { q: "A sudden and violent shaking of the ground is an ________.", options:[{t: "Earthquake", c: true}, {t: "Flood", c: false}, {t: "Storm", c: false}, {t: "Typhoon", c: false}], type: "mcq" },
                        { q: "A slight earthquake or a shaking movement is a ________.", options:[{t: "Tremor", c: true}, {t: "Tornado", c: false}, {t: "Hurricane", c: false}, {t: "Drought", c: false}], type: "mcq" },
                        { q: "A smaller earthquake following the main shock of a large earthquake is an ________.", options:[{t: "Aftershock", c: true}, {t: "Evacuation", c: false}, {t: "Alarm", c: false}, {t: "Alert", c: false}], type: "mcq" },
                        { q: "An overflow of a large amount of water beyond its normal limits is a ________.", options:[{t: "Drought", c: false}, {t: "Flood", c: true}, {t: "Blizzard", c: false}, {t: "Heatwave", c: false}], type: "mcq" },
                        { q: "A large, destructive fire that spreads quickly over woodland or brush is a ________.", options:[{t: "Wildfire", c: true}, {t: "Tsunami", c: false}, {t: "Earthquake", c: false}, {t: "Storm", c: false}], type: "mcq" },
                        { q: "A prolonged period of abnormally low rainfall, leading to a shortage of water is a ________.", options:[{t: "Flood", c: false}, {t: "Hurricane", c: false}, {t: "Drought", c: true}, {t: "Blizzard", c: false}], type: "mcq" },
                        { q: "A prolonged period of abnormally hot weather is a ________.", options:[{t: "Heatwave", c: true}, {t: "Tsunami", c: false}, {t: "Earthquake", c: false}, {t: "Tornado", c: false}], type: "mcq" },
                        { q: "A long high sea wave caused by an earthquake or other disturbance is a ________.", options:[{t: "Hurricane", c: false}, {t: "Flood", c: false}, {t: "Tsunami", c: true}, {t: "Wildfire", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Safety & Impact",
                    drills:[
                        { q: "The condition of being protected from or unlikely to cause danger is ________.", options:[{t: "Damage", c: false}, {t: "Safety", c: true}, {t: "Alert", c: false}, {t: "Evacuation", c: false}], type: "mcq" },
                        { q: "A measure taken in advance to prevent something dangerous from happening is a ________.", options:[{t: "Precaution", c: true}, {t: "Damage", c: false}, {t: "Flashlight", c: false}, {t: "Shelter", c: false}], type: "mcq" },
                        { q: "A statement or event that indicates a possible or impending danger is a ________.", options:[{t: "Shelter", c: false}, {t: "Warning", c: true}, {t: "Battery", c: false}, {t: "Supplies", c: false}], type: "mcq" },
                        { q: "A warning of danger, typically by a signal or message on your phone is an ________.", options:[{t: "Alert", c: true}, {t: "Damage", c: false}, {t: "Outage", c: false}, {t: "Precaution", c: false}], type: "mcq" },
                        { q: "An anxious awareness of danger, or a sound to warn you, is an ________.", options:[{t: "Evacuation", c: false}, {t: "Alarm", c: true}, {t: "Shelter", c: false}, {t: "Supply", c: false}], type: "mcq" },
                        { q: "A place giving temporary protection from bad weather or danger is a ________.", options:[{t: "Shelter", c: true}, {t: "Battery", c: false}, {t: "Damage", c: false}, {t: "Flashlight", c: false}], type: "mcq" },
                        { q: "The action of emptying a place of people to move them to safety is ________.", options:[{t: "Evacuation", c: true}, {t: "Precaution", c: false}, {t: "Warning", c: false}, {t: "Alert", c: false}], type: "mcq" },
                        { q: "A package of essential items you need to survive a disaster is an ________.", options:[{t: "First-aid kit", c: false}, {t: "Emergency kit", c: true}, {t: "Alarm", c: false}, {t: "Power outage", c: false}], type: "mcq" },
                        { q: "A collection of supplies and equipment used to give medical treatment is a ________.", options:[{t: "Emergency kit", c: false}, {t: "First-aid kit", c: true}, {t: "Battery", c: false}, {t: "Flashlight", c: false}], type: "mcq" },
                        { q: "A portable battery-operated electric lamp is a ________.", options:[{t: "Shelter", c: false}, {t: "Flashlight", c: true}, {t: "Alarm", c: false}, {t: "Warning", c: false}], type: "mcq" },
                        { q: "A device that provides electricity for flashlights or radios is a ________.", options:[{t: "Battery", c: true}, {t: "Supply", c: false}, {t: "Precaution", c: false}, {t: "Alert", c: false}], type: "mcq" },
                        { q: "Food, water, and other essential items are called ________.", options:[{t: "Supplies", c: true}, {t: "Alarms", c: false}, {t: "Shelters", c: false}, {t: "Damages", c: false}], type: "mcq" },
                        { q: "Physical harm caused to something in such a way as to impair its value is ________.", options:[{t: "Safety", c: false}, {t: "Precaution", c: false}, {t: "Damage", c: true}, {t: "Shelter", c: false}], type: "mcq" },
                        { q: "A short or long period when electrical power is lost is a ________.", options:[{t: "Power outage", c: true}, {t: "Evacuation", c: false}, {t: "First-aid kit", c: false}, {t: "Warning", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Verbs & Adjectives",
                    drills:[
                        { q: "To inform someone in advance of an impending or possible danger is ________.", options:[{t: "To warn", c: true}, {t: "To rescue", c: false}, {t: "To survive", c: false}, {t: "To shake", c: false}], type: "mcq" },
                        { q: "To hit forcibly and deliberately, like a hurricane hitting a coast is ________.", options:[{t: "To evacuate", c: false}, {t: "To strike", c: true}, {t: "To survive", c: false}, {t: "To warn", c: false}], type: "mcq" },
                        { q: "To move (an object or surface) up and down or from side to side rapidly is ________.", options:[{t: "To shake", c: true}, {t: "To rescue", c: false}, {t: "To warn", c: false}, {t: "To evacuate", c: false}], type: "mcq" },
                        { q: "To remove someone from a place of danger to a safe place is ________.", options:[{t: "To evacuate", c: true}, {t: "To survive", c: false}, {t: "To strike", c: false}, {t: "To shake", c: false}], type: "mcq" },
                        { q: "To continue to live or exist, especially in spite of danger is ________.", options:[{t: "To warn", c: false}, {t: "To survive", c: true}, {t: "To shake", c: false}, {t: "To strike", c: false}], type: "mcq" },
                        { q: "To save someone from a dangerous or distressing situation is ________.", options:[{t: "To evacuate", c: false}, {t: "To warn", c: false}, {t: "To rescue", c: true}, {t: "To strike", c: false}], type: "mcq" },
                        { q: "Something very intense or harsh is ________.", options:[{t: "Severe", c: true}, {t: "Safe", c: false}, {t: "Prepared", c: false}, {t: "Unsafe", c: false}], type: "mcq" },
                        { q: "Reaching a high or the highest degree is ________.", options:[{t: "Safe", c: false}, {t: "Prepared", c: false}, {t: "Extreme", c: true}, {t: "Dangerous", c: false}], type: "mcq" },
                        { q: "Having great power or strength is ________.", options:[{t: "Powerful", c: true}, {t: "Safe", c: false}, {t: "Prepared", c: false}, {t: "Unsafe", c: false}], type: "mcq" },
                        { q: "Able or likely to cause harm or injury is ________.", options:[{t: "Safe", c: false}, {t: "Dangerous", c: true}, {t: "Prepared", c: false}, {t: "Secure", c: false}], type: "mcq" },
                        { q: "Causing great and irreparable harm or damage is ________.", options:[{t: "Destructive", c: true}, {t: "Safe", c: false}, {t: "Prepared", c: false}, {t: "Severe", c: false}], type: "mcq" },
                        { q: "Protected from or not exposed to danger or risk is ________.", options:[{t: "Dangerous", c: false}, {t: "Unsafe", c: false}, {t: "Safe", c: true}, {t: "Destructive", c: false}], type: "mcq" },
                        { q: "Not safe; dangerous is ________.", options:[{t: "Unsafe", c: true}, {t: "Prepared", c: false}, {t: "Safe", c: false}, {t: "Powerful", c: false}], type: "mcq" },
                        { q: "Made ready for use or action is ________.", options:[{t: "Prepared", c: true}, {t: "Dangerous", c: false}, {t: "Unsafe", c: false}, {t: "Severe", c: false}], type: "mcq" }
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
                    title: "Severe Weather",
                    audio: "TTS: A natural disaster. A weather warning. An alert. A severe storm. A heatwave.",
                    explanation: "Phrases used to identify big weather events and the official messages warning the public about them.<br><span style='color:var(--primary-blue); font-style:italic;'>(Frases usadas para identificar grandes eventos climáticos e as mensagens oficiais alertando o público sobre eles.)</span>",
                    samples:[
                        { en: "An earthquake is a terrible <b>natural disaster</b>.", pt: "<span style='color:var(--primary-blue)'>(Um terremoto é um desastre natural terrível.)</span>" },
                        { en: "The TV issued a <b>weather warning</b> for the coast.", pt: "<span style='color:var(--primary-blue)'>(A TV emitiu um aviso meteorológico para a costa.)</span>" },
                        { en: "My phone just got an <b>alert</b>.", pt: "<span style='color:var(--primary-blue)'>(Meu celular acabou de receber um alerta.)</span>" },
                        { en: "We are expecting a <b>severe storm</b> tonight.", pt: "<span style='color:var(--primary-blue)'>(Estamos esperando uma tempestade severa esta noite.)</span>" },
                        { en: "Drink water during a <b>heatwave</b>.", pt: "<span style='color:var(--primary-blue)'>(Beba água durante uma onda de calor.)</span>" }
                    ]
                },
                {
                    title: "Safety Precautions",
                    audio: "TTS: Stay indoors. Seek shelter. Evacuate the area. An emergency kit. Stay away from windows. Check on your neighbors.",
                    explanation: "Essential instructions on what to do (or not do) to stay alive during a disaster.<br><span style='color:var(--primary-blue); font-style:italic;'>(Instruções essenciais sobre o que fazer (ou não fazer) para permanecer vivo durante um desastre.)</span>",
                    samples:[
                        { en: "During the hurricane, please <b>stay indoors</b>.", pt: "<span style='color:var(--primary-blue)'>(Durante o furacão, por favor, fique em lugares fechados.)</span>" },
                        { en: "If you see a tornado, <b>seek shelter</b>.", pt: "<span style='color:var(--primary-blue)'>(Se você vir um tornado, procure abrigo.)</span>" },
                        { en: "The police told us to <b>evacuate the area</b>.", pt: "<span style='color:var(--primary-blue)'>(A polícia nos disse para evacuar a área.)</span>" },
                        { en: "Do you have an <b>emergency kit</b>?", pt: "<span style='color:var(--primary-blue)'>(Você tem um kit de emergência?)</span>" },
                        { en: "During a storm, <b>stay away from windows</b>.", pt: "<span style='color:var(--primary-blue)'>(Durante uma tempestade, fique longe das janelas.)</span>" },
                        { en: "After the storm, <b>check on your neighbors</b>.", pt: "<span style='color:var(--primary-blue)'>(Após a tempestade, verifique/cheque seus vizinhos.)</span>" }
                    ]
                },
                {
                    title: "Describing Impact",
                    audio: "TTS: The power went out. Cause a lot of damage. Roads are blocked. It was a frightening experience. Follow the instructions.",
                    explanation: "Phrases used to explain what happened during or after the storm.<br><span style='color:var(--primary-blue); font-style:italic;'>(Frases usadas para explicar o que aconteceu durante ou após a tempestade.)</span>",
                    samples:[
                        { en: "Everything is dark because <b>the power went out</b>.", pt: "<span style='color:var(--primary-blue)'>(Tudo está escuro porque a energia acabou.)</span>" },
                        { en: "The earthquake will <b>cause a lot of damage</b>.", pt: "<span style='color:var(--primary-blue)'>(O terremoto vai causar muitos danos.)</span>" },
                        { en: "We can't drive because <b>roads are blocked</b>.", pt: "<span style='color:var(--primary-blue)'>(Não podemos dirigir porque as estradas estão bloqueadas.)</span>" },
                        { en: "<b>It was a frightening experience</b> for everyone.", pt: "<span style='color:var(--primary-blue)'>(Foi uma experiência assustadora para todos.)</span>" },
                        { en: "Always <b>follow the instructions</b> of the authorities.", pt: "<span style='color:var(--primary-blue)'>(Siga sempre as instruções das autoridades.)</span>" }
                    ]
                }
            ],

            // --- 3B: DIALOGUES ---
            dialogueGroups:[
                {
                    title: "Dialogue 1: Weather Alerts",
                    audio: "TTS: Did you see the weather warning? Yes, a severe storm is coming tonight. We should prepare an emergency kit.",
                    lines:[
                        { speaker: "John", text: "Did you see the weather warning?", pt: "(Você viu o aviso meteorológico?)" },
                        { speaker: "Sarah", text: "Yes, a severe storm is coming tonight. We should prepare an emergency kit.", pt: "(Sim, uma tempestade severa está chegando esta noite. Devemos preparar um kit de emergência.)" }
                    ]
                },
                {
                    title: "Dialogue 2: Seeking Shelter",
                    audio: "TTS: My phone just gave me an alert for a tornado! We need to seek shelter immediately. Stay away from windows!",
                    lines:[
                        { speaker: "Mike", text: "My phone just gave me an alert for a tornado!", pt: "(Meu telefone acabou de me dar um alerta de tornado!)" },
                        { speaker: "Anna", text: "We need to seek shelter immediately. Stay away from windows!", pt: "(Precisamos procurar abrigo imediatamente. Fique longe das janelas!)" }
                    ]
                },
                {
                    title: "Dialogue 3: Heatwave Instructions",
                    audio: "TTS: It is so hot outside during this heatwave. The news says we must stay indoors. We have to follow the instructions to stay safe.",
                    lines:[
                        { speaker: "Leo", text: "It is so hot outside during this heatwave.", pt: "(Está tão quente lá fora durante esta onda de calor.)" },
                        { speaker: "Emma", text: "The news says we must stay indoors. We have to follow the instructions to stay safe.", pt: "(O noticiário diz que devemos ficar em lugares fechados. Temos que seguir as instruções para ficarmos seguros.)" }
                    ]
                },
                {
                    title: "Dialogue 4: Evacuation Orders",
                    audio: "TTS: A natural disaster is approaching the coast. Yes, the police told everyone to evacuate the area. I hope it doesn't cause a lot of damage.",
                    lines:[
                        { speaker: "Chris", text: "A natural disaster is approaching the coast.", pt: "(Um desastre natural está se aproximando da costa.)" },
                        { speaker: "Julia", text: "Yes, the police told everyone to evacuate the area. I hope it doesn't cause a lot of damage.", pt: "(Sim, a polícia mandou todos evacuarem a área. Espero que não cause muitos danos.)" }
                    ]
                },
                {
                    title: "Dialogue 5: Power Outage",
                    audio: "TTS: Oh no, the power went out. I can't see anything. Get the flashlight from the emergency kit. I'm glad we prepared yesterday.",
                    lines:[
                        { speaker: "David", text: "Oh no, the power went out. I can't see anything.", pt: "(Oh não, a energia acabou. Não consigo ver nada.)" },
                        { speaker: "Lisa", text: "Get the flashlight from the emergency kit. I'm glad we prepared yesterday.", pt: "(Pegue a lanterna do kit de emergência. Estou feliz que nos preparamos ontem.)" }
                    ]
                },
                {
                    title: "Dialogue 6: The Aftermath",
                    audio: "TTS: That earthquake was a frightening experience. Are you okay? Yes, but the roads are blocked now. We should check on your neighbors to see if they need help.",
                    lines:[
                        { speaker: "Tom", text: "That earthquake was a frightening experience. Are you okay?", pt: "(Aquele terremoto foi uma experiência assustadora. Você está bem?)" },
                        { speaker: "Mia", text: "Yes, but the roads are blocked now. We should check on your neighbors to see if they need help.", pt: "(Sim, mas as estradas estão bloqueadas agora. Devemos checar seus vizinhos para ver se precisam de ajuda.)" }
                    ]
                }
            ],

            // --- 3C: PRACTICE ---
            grammarDrillGroups:[
                {
                    title: "Severe Weather",
                    drills:[
                        { q: "A hurricane is a type of natural ________.", options:[{t: "disaster", c: true}, {t: "warning", c: false}, {t: "damage", c: false}, {t: "alert", c: false}], type: "mcq" },
                        { q: "The government issued a weather ________ on the TV.", options:[{t: "alert", c: false}, {t: "warning", c: true}, {t: "damage", c: false}, {t: "outage", c: false}], type: "mcq" },
                        { q: "My phone beeped because I got an emergency ________.", options:[{t: "warning", c: false}, {t: "alert", c: true}, {t: "disaster", c: false}, {t: "storm", c: false}], type: "mcq" },
                        { q: "There will be heavy rain and wind during the severe ________.", options:[{t: "storm", c: true}, {t: "heatwave", c: false}, {t: "alert", c: false}, {t: "warning", c: false}], type: "mcq" },
                        { q: "It is very hot outside because we are having a ________.", options:[{t: "storm", c: false}, {t: "heatwave", c: true}, {t: "disaster", c: false}, {t: "alert", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Safety Precautions",
                    drills:[
                        { q: "During a storm, do not go out. You must stay ________.", options:[{t: "indoors", c: true}, {t: "shelter", c: false}, {t: "evacuate", c: false}, {t: "windows", c: false}], type: "mcq" },
                        { q: "If a tornado is coming, seek ________ in the basement.", options:[{t: "indoors", c: false}, {t: "shelter", c: true}, {t: "evacuate", c: false}, {t: "kit", c: false}], type: "mcq" },
                        { q: "The flood is rising, so we have to ________ the area.", options:[{t: "shelter", c: false}, {t: "evacuate", c: true}, {t: "indoors", c: false}, {t: "check", c: false}], type: "mcq" },
                        { q: "You need water and flashlights in your emergency ________.", options:[{t: "shelter", c: false}, {t: "kit", c: true}, {t: "windows", c: false}, {t: "area", c: false}], type: "mcq" },
                        { q: "Glass can break, so stay away from ________.", options:[{t: "doors", c: false}, {t: "windows", c: true}, {t: "kits", c: false}, {t: "shelter", c: false}], type: "mcq" },
                        { q: "After a disaster, you should check ________ your neighbors.", options:[{t: "in", c: false}, {t: "on", c: true}, {t: "at", c: false}, {t: "for", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Describing Impact",
                    drills:[
                        { q: "Everything is dark. The power ________ out.", options:[{t: "went", c: true}, {t: "got", c: false}, {t: "made", c: false}, {t: "caused", c: false}], type: "mcq" },
                        { q: "The strong winds will cause a lot of ________ to the houses.", options:[{t: "damage", c: true}, {t: "power", c: false}, {t: "roads", c: false}, {t: "instructions", c: false}], type: "mcq" },
                        { q: "We can't drive because the roads are ________ by trees.", options:[{t: "blocked", c: true}, {t: "damaged", c: false}, {t: "evacuated", c: false}, {t: "warned", c: false}], type: "mcq" },
                        { q: "The earthquake was a very frightening ________.", options:[{t: "instruction", c: false}, {t: "experience", c: true}, {t: "damage", c: false}, {t: "power", c: false}], type: "mcq" },
                        { q: "To stay safe, you must follow the ________ of the police.", options:[{t: "damage", c: false}, {t: "experience", c: false}, {t: "instructions", c: true}, {t: "blocked", c: false}], type: "mcq" }
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
                { text: "A hurricane is expected to hit our area on Saturday. ↘", audio: "TTS: A hurricane is expected to hit our area on Saturday." },
                { text: "Did you see the weather warning on your phone? ↗", audio: "TTS: Did you see the weather warning on your phone?" },
                { text: "We need to seek shelter in the basement immediately. ↘", audio: "TTS: We need to seek shelter in the basement immediately." },
                { text: "The police told everyone to evacuate the area. ↘", audio: "TTS: The police told everyone to evacuate the area." },
                { text: "Do you have an emergency kit with extra batteries? ↗", audio: "TTS: Do you have an emergency kit with extra batteries?" },
                { text: "During a severe storm, you must stay indoors. ↘", audio: "TTS: During a severe storm, you must stay indoors." },
                { text: "The earthquake caused a lot of damage to the city. ↘", audio: "TTS: The earthquake caused a lot of damage to the city." },
                { text: "Everything is dark because the power went out. ↘", audio: "TTS: Everything is dark because the power went out." },
                { text: "It is very important to stay away from windows. ↘", audio: "TTS: It is very important to stay away from windows." },
                { text: "Please check on your neighbors after the disaster. ↘", audio: "TTS: Please check on your neighbors after the disaster." }
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
                    audio: "TTS: Operator: 911, what is your emergency? Caller: I need help! There is a huge flood. Operator: Are you safe right now? Caller: Yes, I am on the roof, but I need a rescue.",
                    text: "Operator: 911, what is your [emergency]?<br>Caller: I need help! There is a huge [flood].<br>Operator: Are you [safe] right now?<br>Caller: Yes, I am on the roof, but I need a [rescue]."
                },
                {
                    type: "dropdown",
                    instruction: "Listen to the dialogue about an earthquake.",
                    audio: "TTS: Tom: Did you feel the earthquake? Anna: Yes, the ground began to shake. Tom: I hope there are no aftershocks. Anna: Me too. It was a frightening experience.",
                    questions:[
                        { q: "Tom: Did you feel the [earthquake* | storm | heatwave]?", a: "earthquake" },
                        { q: "Anna: Yes, the ground began to [shake* | strike | warn].", a: "shake" },
                        { q: "Tom: I hope there are no [aftershocks* | alarms | shelters].", a: "aftershocks" },
                        { q: "Anna: Me too. It was a[frightening* | safe | prepared] experience.", a: "frightening" }
                    ]
                },
                {
                    type: "audio-choice",
                    instruction: "Listen to the conversation. Why is the man telling the woman to stay indoors?",
                    audio: "TTS: Officer: Miss, you cannot drive down this street. The roads are blocked. Woman: What happened? Officer: A severe wildfire burned the trees, and it is very dangerous right now. Please return home and stay indoors.",
                    options:[
                        { t: "Because a blizzard is freezing the roads.", c: false },
                        { t: "Because a wildfire made the roads dangerous and blocked.", c: true },
                        { t: "Because a tsunami is approaching the city.", c: false },
                        { t: "Because there is a power outage in the supermarket.", c: false }
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
                    title: "Dialogue - The Hurricane Warning",
                    audio: "TTS: Emma: Liam, I just got an alert on my phone. A severe storm is turning into a hurricane. Liam: Are you serious? Did the government issue an evacuation order? Emma: Not yet, but they gave us a weather warning to prepare. Liam: We need to check our emergency kit. Do we have enough supplies? Emma: We have a first-aid kit, but we need to buy a new flashlight and extra batteries. Liam: Okay, I will go to the store now. We have to be prepared.",
                    body: "<b>Emma:</b> Liam, I just got an [alert](tooltip:alert) on my phone. A [severe storm](tooltip:severe-storm) is turning into a [hurricane](tooltip:hurricane).<br><b>Liam:</b> Are you [serious](tooltip:serious)? Did the government issue an [evacuation](tooltip:evacuation) order?<br><b>Emma:</b> Not yet, but they gave us a [weather warning](tooltip:weather-warning) to [prepare](tooltip:prepare).<br><b>Liam:</b> We need to check our [emergency kit](tooltip:emergency-kit). Do we have enough [supplies](tooltip:supplies)?<br><b>Emma:</b> We have a [first-aid kit](tooltip:first-aid-kit), but we need to buy a new[flashlight](tooltip:flashlight) and extra [batteries](tooltip:battery).<br><b>Liam:</b> Okay, I will go to the store now. We have to be [prepared](tooltip:prepared).",
                    questions:[
                        { q: "What did Emma receive on her phone?", options:[{t: "An evacuation order.", c: false}, {t: "An alert about a hurricane.", c: true}, {t: "A call from a neighbor.", c: false}], type: "mcq" },
                        { q: "What does Liam want to check?", options:[{t: "The emergency kit.", c: true}, {t: "The weather channel.", c: false}, {t: "The windows.", c: false}], type: "mcq" },
                        { q: "What do they need to buy at the store?", options:[{t: "A new first-aid kit.", c: false}, {t: "Water and food.", c: false}, {t: "A flashlight and batteries.", c: true}], type: "mcq" }
                    ]
                },
                {
                    title: "Dialogue - After the Earthquake",
                    audio: "TTS: Chris: That was a huge earthquake! Is everyone okay? Sarah: Yes, we managed to survive without injuries. But it was a frightening experience. Chris: The power went out completely. It's totally dark in here. Sarah: Let's find the flashlight. We need to check if it caused a lot of damage to the house. Chris: The walls seem okay, but we should stay away from windows in case of an aftershock. Sarah: Good idea. Let's also check on our neighbors to make sure they are safe.",
                    body: "<b>Chris:</b> That was a huge [earthquake](tooltip:earthquake)! Is everyone okay?<br><b>Sarah:</b> Yes, we managed to [survive](tooltip:survive) without injuries. But [it was a frightening experience](tooltip:frightening-experience).<br><b>Chris:</b> [The power went out](tooltip:power-went-out) completely. It's totally dark in here.<br><b>Sarah:</b> Let's find the [flashlight](tooltip:flashlight). We need to check if it[caused a lot of damage](tooltip:cause-damage) to the house.<br><b>Chris:</b> The walls seem okay, but we should [stay away from windows](tooltip:stay-away-windows) in case of an[aftershock](tooltip:aftershock).<br><b>Sarah:</b> Good idea. [Let's](tooltip:lets) also [check on your neighbors](tooltip:check-neighbors) to make sure they are [safe](tooltip:safe).",
                    questions:[
                        { q: "How do Chris and Sarah feel after the earthquake?", options:[{t: "They are badly injured.", c: false}, {t: "They survived but are frightened.", c: true}, {t: "They are completely calm.", c: false}], type: "mcq" },
                        { q: "Why is it totally dark in the house?", options:[{t: "Because the power went out.", c: true}, {t: "Because the windows broke.", c: false}, {t: "Because the sun went down.", c: false}], type: "mcq" },
                        { q: "Why should they stay away from windows?", options:[{t: "Because of the strong wind.", c: false}, {t: "Because of a potential aftershock.", c: true}, {t: "Because the neighbors are looking.", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Dialogue - A Winter Blizzard",
                    audio: "TTS: John: Look outside! The snow is falling so fast. It is a severe blizzard. Lisa: Yes, the news told everyone to stay indoors today. The roads are blocked. John: It is dangerous to drive. Did you take precautions for the cold? Lisa: I turned up the heating, and we have plenty of food supplies. John: I just hope the power doesn't go out. It will be freezing. Lisa: We have to follow the instructions of the authorities and wait until it is safe.",
                    body: "<b>John:</b> Look outside! The snow is falling so fast. It is a [severe](tooltip:severe) [blizzard](tooltip:blizzard).<br><b>Lisa:</b> Yes, the news told everyone to [stay indoors](tooltip:stay-indoors) today.[Roads are blocked](tooltip:roads-blocked).<br><b>John:</b> It is [dangerous](tooltip:dangerous) to drive. Did you take[precautions](tooltip:precaution) for the cold?<br><b>Lisa:</b> I turned up the heating, and we have plenty of food [supplies](tooltip:supplies).<br><b>John:</b> I just hope the power doesn't go out. It will be freezing.<br><b>Lisa:</b> We have to[follow the instructions](tooltip:follow-instructions) of the authorities and wait until it is [safe](tooltip:safe).",
                    questions:[
                        { q: "Why is it dangerous to drive?", options:[{t: "Because it is pouring rain.", c: false}, {t: "Because of the severe blizzard and blocked roads.", c: true}, {t: "Because the traffic lights are out.", c: false}], type: "mcq" },
                        { q: "What precautions did Lisa take?", options:[{t: "She evacuated the house.", c: false}, {t: "She bought an emergency kit.", c: false}, {t: "She turned up the heating and checked the food supplies.", c: true}], type: "mcq" },
                        { q: "What is John's main concern?", options:[{t: "That the power will go out.", c: true}, {t: "That the roof will collapse.", c: false}, {t: "That a tornado will strike.", c: false}], type: "mcq" }
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
                { type: "matching", instruction: "Match the disaster to its description.", pairs:[
                    { left: "Hurricane", right: "Tropical storm with severe wind", val: "1" },
                    { left: "Blizzard", right: "Severe snowstorm", val: "2" },
                    { left: "Drought", right: "Long period without rain", val: "3" },
                    { left: "Earthquake", right: "Shaking of the ground", val: "4" }
                ]},
                { type: "matching", instruction: "Match the safety item to its use.", pairs:[
                    { left: "Flashlight", right: "Provides light in the dark", val: "1" },
                    { left: "Battery", right: "Powers electronic devices", val: "2" },
                    { left: "First-aid kit", right: "Treats minor injuries", val: "3" },
                    { left: "Shelter", right: "A safe place to hide", val: "4" }
                ]},
                { type: "matching", instruction: "Match the verb to the context.", pairs:[
                    { left: "To warn", right: "Tell someone about danger", val: "1" },
                    { left: "To evacuate", right: "Leave a dangerous area", val: "2" },
                    { left: "To rescue", right: "Save someone in danger", val: "3" },
                    { left: "To survive", right: "Stay alive during a disaster", val: "4" }
                ]},
                { type: "matching", instruction: "Match the phrases.", pairs:[
                    { left: "Stay away", right: "from windows", val: "1" },
                    { left: "The power", right: "went out", val: "2" },
                    { left: "Cause a lot", right: "of damage", val: "3" },
                    { left: "Follow the", right: "instructions", val: "4" }
                ]},

                // --- WORD ORDER (5-14) ---
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "is / hurricane / A / natural / disaster / a / .", correct: "A hurricane is a natural disaster ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "storm / We / a / expecting / severe / are / .", correct: "We are expecting a severe storm ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "issued / weather / a / They / warning / .", correct: "They issued a weather warning ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "during / indoors / You / stay / storm / the / must / .", correct: "You must stay indoors during the storm ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "tornado / from / Seek / shelter / the / .", correct: "Seek shelter from the tornado ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "evacuate / to / Everyone / area / the / has / .", correct: "Everyone has to evacuate the area ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "windows / away / Please / from / stay / .", correct: "Please stay away from windows ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "went / because / storm / The / power / out / of / the / .", correct: "The power went out because of the storm ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "blocked / because / are / The / roads / trees / of / .", correct: "The roads are blocked because of trees ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "instructions / the / Follow / authorities / of / the / .", correct: "Follow the instructions of the authorities ." },

                // --- CLICKABLE ERROR (15-24) ---
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "We must stay [outdoors](error:indoors) during the storm." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "The government issued a weather [alerting](error:warning)." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "We need an emergency [bag](error:kit) with supplies." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "The earthquake caused a lot of [damages](error:damage)." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "The power [went](error:went) out last night." }, // Tricky: the target is "went out" - wait, if I put "went", it's correct. Let's make the error obvious.
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "The power [came](error:went) out last night." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "You should seek [house](error:shelter) during a tornado." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "We have to [escape](error:evacuate) the area immediately." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "The roads are [blocking](error:blocked) by the flood." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "Check [in](error:on) your neighbors after the disaster." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "It was a very [frightened](error:frightening) experience." },

                // --- ODD ONE OUT (25-30) ---
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Disasters)", options:[{t: "Hurricane", c: false}, {t: "Tornado", c: false}, {t: "Earthquake", c: false}, {t: "Shelter", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Water related)", options:[{t: "Flood", c: false}, {t: "Tsunami", c: false}, {t: "Rain", c: false}, {t: "Wildfire", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Safety kit)", options:[{t: "Flashlight", c: false}, {t: "Battery", c: false}, {t: "First-aid kit", c: false}, {t: "Damage", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Verbs)", options:[{t: "To warn", c: false}, {t: "To rescue", c: false}, {t: "To evacuate", c: false}, {t: "Severe", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Adjectives)", options:[{t: "Dangerous", c: false}, {t: "Destructive", c: false}, {t: "Extreme", c: false}, {t: "Tremor", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Impact)", options:[{t: "Damage", c: false}, {t: "Power outage", c: false}, {t: "Blocked roads", c: false}, {t: "Precaution", c: true}] },

                // --- TRUE / FALSE (31-35) ---
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "A 'drought' is when there is too much rain and water floods the streets.", correct: "false"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "You should 'stay away from windows' during a severe storm or earthquake.", correct: "true"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "An 'aftershock' happens before the main earthquake to warn you.", correct: "false"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "When you 'evacuate', you stay in your house and wait for rescue.", correct: "false"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "A 'power outage' means you do not have electricity.", correct: "true"}] },

                // --- MCQ (36-39) ---
                { type: "mcq", instruction: "Choose the correct phrase.<br>When you hear a tornado alarm, you should immediately ________.", options:[{t: "cause damage", c: false}, {t: "seek shelter", c: true}, {t: "check the power", c: false}, {t: "start a fire", c: false}] },
                { type: "mcq", instruction: "Choose the correct word.<br>The firefighters managed to ________ the people trapped in the flooded house.", options:[{t: "warn", c: false}, {t: "strike", c: false}, {t: "rescue", c: true}, {t: "damage", c: false}] },
                { type: "mcq", instruction: "Choose the correct adjective.<br>The hurricane was so ________ that it destroyed entire neighborhoods.", options:[{t: "prepared", c: false}, {t: "safe", c: false}, {t: "destructive", c: true}, {t: "alert", c: false}] },
                { type: "mcq", instruction: "Choose the correct phrase.<br>After the storm passed, we went outside to ________ our elderly neighbor.", options:[{t: "evacuate from", c: false}, {t: "check on", c: true}, {t: "stay away from", c: false}, {t: "pour on", c: false}] },

                // --- CATEGORIZE (40) ---
                { type: "categorize", instruction: "Sort the words into Disasters and Safety/Precautions.", 
                    categories:[{id: "dis", name: "Disasters"}, {id: "safe", name: "Safety"}],
                    items:[
                        {text: "Tornado", catId: "dis"}, 
                        {text: "Wildfire", catId: "dis"}, 
                        {text: "Blizzard", catId: "dis"}, 
                        {text: "Shelter", catId: "safe"}, 
                        {text: "Emergency kit", catId: "safe"}, 
                        {text: "Flashlight", catId: "safe"}
                    ] 
                }
            ]
        },

        // ======================================================
        // STEP 8: WRITING PRACTICE
        // ======================================================
        {
            title: "Writing Practice",
            instruction: "Write an email to a friend (5-7 sentences) telling them you are safe after a natural disaster. Mention what type of disaster happened, what the damage was (e.g., power outage, blocked roads), and how you used your emergency kit or followed safety precautions.",
            example: "Hi Mark, I am writing to let you know that I am safe. A severe hurricane hit our city yesterday. It was a very frightening experience. The wind was so powerful that it caused a lot of damage to the trees, and the roads are blocked. The power went out last night, but we were prepared. We used the flashlights from our emergency kit and stayed indoors. I hope everything is okay with you. Best, Sarah.",
            prompts:[
                "State the type of natural disaster that occurred.",
                "Describe the impact or damage (e.g., roads blocked, power outage).",
                "Explain the precautions you took (e.g., stayed indoors, sought shelter).",
                "Mention the supplies you used from your emergency kit."
            ]
        },

        // ======================================================
        // STEP 9: FLASHCARDS
        // ======================================================
        {
            title: "Flashcards",
            items:[
                // 2A Items (42 items)
                { term: "Disaster", definition: "A sudden event causing great damage or loss of life.", defTrans: "Desastre", example: "The natural disaster caused many people to leave their homes.", audioFront: "TTS: Disaster", audioBack: "TTS: The natural disaster caused many people to leave their homes." },
                { term: "Storm", definition: "A violent disturbance of the atmosphere with strong winds and rain.", defTrans: "Tempestade", example: "The storm brought heavy rain and strong winds.", audioFront: "TTS: Storm", audioBack: "TTS: The storm brought heavy rain and strong winds." },
                { term: "Hurricane", definition: "A storm with a violent wind, in particular a tropical cyclone in the Caribbean.", defTrans: "Furacão", example: "The hurricane hit the coast of Florida.", audioFront: "TTS: Hurricane", audioBack: "TTS: The hurricane hit the coast of Florida." },
                { term: "Typhoon", definition: "A tropical storm in the region of the Indian or western Pacific oceans.", defTrans: "Tufão", example: "A typhoon is similar to a hurricane but in the Pacific.", audioFront: "TTS: Typhoon", audioBack: "TTS: A typhoon is similar to a hurricane but in the Pacific." },
                { term: "Tornado", definition: "A destructive vortex of violently rotating winds.", defTrans: "Tornado", example: "The tornado destroyed several houses.", audioFront: "TTS: Tornado", audioBack: "TTS: The tornado destroyed several houses." },
                { term: "Blizzard", definition: "A severe snowstorm with high winds and low visibility.", defTrans: "Nevasca", example: "We were stuck inside during the blizzard.", audioFront: "TTS: Blizzard", audioBack: "TTS: We were stuck inside during the blizzard." },
                { term: "Earthquake", definition: "A sudden and violent shaking of the ground.", defTrans: "Terremoto", example: "The earthquake shook the entire city.", audioFront: "TTS: Earthquake", audioBack: "TTS: The earthquake shook the entire city." },
                { term: "Tremor", definition: "A slight earthquake or a shaking movement.", defTrans: "Tremor", example: "I felt a small tremor in the morning.", audioFront: "TTS: Tremor", audioBack: "TTS: I felt a small tremor in the morning." },
                { term: "Aftershock", definition: "A smaller earthquake following the main shock of a large earthquake.", defTrans: "Tremor secundário", example: "After the main earthquake, there was a strong aftershock.", audioFront: "TTS: Aftershock", audioBack: "TTS: After the main earthquake, there was a strong aftershock." },
                { term: "Flood", definition: "An overflow of a large amount of water beyond its normal limits.", defTrans: "Enchente / Inundação", example: "The heavy rains caused a terrible flood.", audioFront: "TTS: Flood", audioBack: "TTS: The heavy rains caused a terrible flood." },
                { term: "Wildfire", definition: "A large, destructive fire that spreads quickly over woodland.", defTrans: "Incêndio florestal", example: "A wildfire burned thousands of trees in the forest.", audioFront: "TTS: Wildfire", audioBack: "TTS: A wildfire burned thousands of trees in the forest." },
                { term: "Drought", definition: "A prolonged period of abnormally low rainfall.", defTrans: "Seca", example: "The drought ruined the farmers' crops.", audioFront: "TTS: Drought", audioBack: "TTS: The drought ruined the farmers' crops." },
                { term: "Heatwave", definition: "A prolonged period of abnormally hot weather.", defTrans: "Onda de calor", example: "It is hard to sleep during a heatwave.", audioFront: "TTS: Heatwave", audioBack: "TTS: It is hard to sleep during a heatwave." },
                { term: "Tsunami", definition: "A long high sea wave caused by an earthquake or other disturbance.", defTrans: "Tsunami / Maremoto", example: "The tsunami wave was incredibly high.", audioFront: "TTS: Tsunami", audioBack: "TTS: The tsunami wave was incredibly high." },

                { term: "Safety", definition: "The condition of being protected from or unlikely to cause danger.", defTrans: "Segurança", example: "Your safety is our number one priority.", audioFront: "TTS: Safety", audioBack: "TTS: Your safety is our number one priority." },
                { term: "Precaution", definition: "A measure taken in advance to prevent something dangerous from happening.", defTrans: "Precaução", example: "You should take every precaution before the storm.", audioFront: "TTS: Precaution", audioBack: "TTS: You should take every precaution before the storm." },
                { term: "Warning", definition: "A statement or event that indicates a possible or impending danger.", defTrans: "Aviso", example: "The government issued a weather warning.", audioFront: "TTS: Warning", audioBack: "TTS: The government issued a weather warning." },
                { term: "Alert", definition: "A warning of danger, typically by a signal or message.", defTrans: "Alerta", example: "My phone received an emergency alert.", audioFront: "TTS: Alert", audioBack: "TTS: My phone received an emergency alert." },
                { term: "Alarm", definition: "An anxious awareness of danger, or a sound to warn you.", defTrans: "Alarme", example: "The fire alarm woke everyone up.", audioFront: "TTS: Alarm", audioBack: "TTS: The fire alarm woke everyone up." },
                { term: "Shelter", definition: "A place giving temporary protection from bad weather or danger.", defTrans: "Abrigo", example: "We had to seek shelter in the basement.", audioFront: "TTS: Shelter", audioBack: "TTS: We had to seek shelter in the basement." },
                { term: "Evacuation", definition: "The action of emptying a place of people to move them to safety.", defTrans: "Evacuação / Retirada", example: "The evacuation of the town went smoothly.", audioFront: "TTS: Evacuation", audioBack: "TTS: The evacuation of the town went smoothly." },
                { term: "Emergency kit", definition: "A package of essential items you need to survive a disaster.", defTrans: "Kit de emergência", example: "Everyone needs an emergency kit at home.", audioFront: "TTS: Emergency kit", audioBack: "TTS: Everyone needs an emergency kit at home." },
                { term: "First-aid kit", definition: "A collection of supplies and equipment used to give medical treatment.", defTrans: "Kit de primeiros socorros", example: "The first-aid kit has bandages and medicine.", audioFront: "TTS: First-aid kit", audioBack: "TTS: The first-aid kit has bandages and medicine." },
                { term: "Flashlight", definition: "A portable battery-operated electric lamp.", defTrans: "Lanterna", example: "Use a flashlight if the lights go out.", audioFront: "TTS: Flashlight", audioBack: "TTS: Use a flashlight if the lights go out." },
                { term: "Battery", definition: "A device that provides electricity for flashlights or radios.", defTrans: "Bateria / Pilha", example: "We bought an extra battery for the radio.", audioFront: "TTS: Battery", audioBack: "TTS: We bought an extra battery for the radio." },
                { term: "Supplies", definition: "Food, water, and other essential items.", defTrans: "Suprimentos / Provisões", example: "We bought food and water supplies.", audioFront: "TTS: Supplies", audioBack: "TTS: We bought food and water supplies." },
                { term: "Damage", definition: "Physical harm caused to something in such a way as to impair its value.", defTrans: "Dano / Estrago", example: "The storm caused significant damage to the roof.", audioFront: "TTS: Damage", audioBack: "TTS: The storm caused significant damage to the roof." },
                { term: "Power outage", definition: "A short or long period when electrical power is lost.", defTrans: "Queda de energia", example: "The power outage lasted for three days.", audioFront: "TTS: Power outage", audioBack: "TTS: The power outage lasted for three days." },

                { term: "To warn", definition: "To inform someone in advance of an impending or possible danger.", defTrans: "Avisar / Alertar", example: "They tried to warn the residents about the flood.", audioFront: "TTS: To warn", audioBack: "TTS: They tried to warn the residents about the flood." },
                { term: "To strike", definition: "To hit forcibly and deliberately, like a hurricane hitting a coast.", defTrans: "Atingir / Atacar", example: "The hurricane will strike the island tomorrow.", audioFront: "TTS: To strike", audioBack: "TTS: The hurricane will strike the island tomorrow." },
                { term: "To shake", definition: "To move up and down or from side to side rapidly.", defTrans: "Tremer / Sacudir", example: "The ground began to shake violently.", audioFront: "TTS: To shake", audioBack: "TTS: The ground began to shake violently." },
                { term: "To evacuate", definition: "To remove someone from a place of danger to a safe place.", defTrans: "Evacuar / Retirar-se", example: "We must evacuate the building immediately.", audioFront: "TTS: To evacuate", audioBack: "TTS: We must evacuate the building immediately." },
                { term: "To survive", definition: "To continue to live or exist, especially in spite of danger.", defTrans: "Sobreviver", example: "Fortunately, everyone managed to survive.", audioFront: "TTS: To survive", audioBack: "TTS: Fortunately, everyone managed to survive." },
                { term: "To rescue", definition: "To save someone from a dangerous or distressing situation.", defTrans: "Resgatar / Salvar", example: "The firefighters helped rescue the trapped family.", audioFront: "TTS: To rescue", audioBack: "TTS: The firefighters helped rescue the trapped family." },
                { term: "Severe", definition: "Something very intense or harsh.", defTrans: "Severo / Grave", example: "The city experienced a severe storm.", audioFront: "TTS: Severe", audioBack: "TTS: The city experienced a severe storm." },
                { term: "Extreme", definition: "Reaching a high or the highest degree.", defTrans: "Extremo", example: "Extreme weather is becoming more common.", audioFront: "TTS: Extreme", audioBack: "TTS: Extreme weather is becoming more common." },
                { term: "Powerful", definition: "Having great power or strength.", defTrans: "Poderoso", example: "The tornado was very powerful.", audioFront: "TTS: Powerful", audioBack: "TTS: The tornado was very powerful." },
                { term: "Dangerous", definition: "Able or likely to cause harm or injury.", defTrans: "Perigoso", example: "It is dangerous to drive during a blizzard.", audioFront: "TTS: Dangerous", audioBack: "TTS: It is dangerous to drive during a blizzard." },
                { term: "Destructive", definition: "Causing great and irreparable harm or damage.", defTrans: "Destrutivo", example: "The earthquake was highly destructive.", audioFront: "TTS: Destructive", audioBack: "TTS: The earthquake was highly destructive." },
                { term: "Safe", definition: "Protected from or not exposed to danger or risk.", defTrans: "Seguro", example: "Stay indoors to remain safe.", audioFront: "TTS: Safe", audioBack: "TTS: Stay indoors to remain safe." },
                { term: "Unsafe", definition: "Not safe; dangerous.", defTrans: "Inseguro", example: "It is unsafe to swim during a thunderstorm.", audioFront: "TTS: Unsafe", audioBack: "TTS: It is unsafe to swim during a thunderstorm." },
                { term: "Prepared", definition: "Made ready for use or action.", defTrans: "Preparado", example: "We are prepared for any emergency.", audioFront: "TTS: Prepared", audioBack: "TTS: We are prepared for any emergency." },

                // 3A Items (16 items)
                { term: "A natural disaster", definition: "A catastrophic event caused by nature or the natural processes of the earth.", defTrans: "Um desastre natural", example: "An earthquake is a terrible natural disaster.", audioFront: "TTS: A natural disaster", audioBack: "TTS: An earthquake is a terrible natural disaster." },
                { term: "A weather warning", definition: "An official statement predicting dangerous weather conditions.", defTrans: "Um aviso meteorológico", example: "The TV issued a weather warning for the coast.", audioFront: "TTS: A weather warning", audioBack: "TTS: The TV issued a weather warning for the coast." },
                { term: "An alert", definition: "A notification of a danger or a problem.", defTrans: "Um alerta", example: "My phone just got an alert.", audioFront: "TTS: An alert", audioBack: "TTS: My phone just got an alert." },
                { term: "A severe storm", definition: "A storm that is very intense and potentially dangerous.", defTrans: "Uma tempestade severa", example: "We are expecting a severe storm tonight.", audioFront: "TTS: A severe storm", audioBack: "TTS: We are expecting a severe storm tonight." },
                { term: "A heatwave", definition: "A prolonged period of abnormally hot weather.", defTrans: "Uma onda de calor", example: "Drink water during a heatwave.", audioFront: "TTS: A heatwave", audioBack: "TTS: Drink water during a heatwave." },
                { term: "Stay indoors", definition: "To remain inside a building rather than going outside.", defTrans: "Ficar em lugares fechados", example: "During the hurricane, please stay indoors.", audioFront: "TTS: Stay indoors", audioBack: "TTS: During the hurricane, please stay indoors." },
                { term: "Seek shelter", definition: "To look for a place giving temporary protection from danger.", defTrans: "Procurar abrigo", example: "If you see a tornado, seek shelter.", audioFront: "TTS: Seek shelter", audioBack: "TTS: If you see a tornado, seek shelter." },
                { term: "Evacuate the area", definition: "To leave a place due to danger.", defTrans: "Evacuar a área", example: "The police told us to evacuate the area.", audioFront: "TTS: Evacuate the area", audioBack: "TTS: The police told us to evacuate the area." },
                { term: "An emergency kit", definition: "A package of essential items needed to survive a disaster.", defTrans: "Um kit de emergência", example: "Do you have an emergency kit?", audioFront: "TTS: An emergency kit", audioBack: "TTS: Do you have an emergency kit?" },
                { term: "Stay away from windows", definition: "To keep a distance from glass windows to avoid injury.", defTrans: "Ficar longe das janelas", example: "During a storm, stay away from windows.", audioFront: "TTS: Stay away from windows", audioBack: "TTS: During a storm, stay away from windows." },
                { term: "Check on your neighbors", definition: "To visit or contact people living near you to make sure they are okay.", defTrans: "Verificar seus vizinhos", example: "After the storm, check on your neighbors.", audioFront: "TTS: Check on your neighbors", audioBack: "TTS: After the storm, check on your neighbors." },
                { term: "The power went out", definition: "Stating that the electricity supply failed.", defTrans: "A energia acabou", example: "Everything is dark because the power went out.", audioFront: "TTS: The power went out", audioBack: "TTS: Everything is dark because the power went out." },
                { term: "Cause a lot of damage", definition: "To result in severe harm or destruction to property.", defTrans: "Causar muitos danos", example: "The earthquake will cause a lot of damage.", audioFront: "TTS: Cause a lot of damage", audioBack: "TTS: The earthquake will cause a lot of damage." },
                { term: "Roads are blocked", definition: "Stating that streets are obstructed and impassable.", defTrans: "As estradas estão bloqueadas", example: "We can't drive because roads are blocked.", audioFront: "TTS: Roads are blocked", audioBack: "TTS: We can't drive because roads are blocked." },
                { term: "It was a frightening experience", definition: "Describing an event that caused a lot of fear.", defTrans: "Foi uma experiência assustadora", example: "It was a frightening experience for everyone.", audioFront: "TTS: It was a frightening experience", audioBack: "TTS: It was a frightening experience for everyone." },
                { term: "Follow the instructions", definition: "To obey rules or guidance provided by authorities.", defTrans: "Seguir as instruções", example: "Always follow the instructions of the authorities.", audioFront: "TTS: Follow the instructions", audioBack: "TTS: Always follow the instructions of the authorities." }
            ]
        }
    ],

    // ======================================================
    // GLOSSARY (All 58 items + Context words)
    // ======================================================
    glossary:[
        // 2A: Types of Disasters
        { topic: "Disasters", term: "disaster", definition: "A sudden event causing great damage or loss of life.", translation: "Desastre" },
        { topic: "Disasters", term: "storm", definition: "A violent disturbance of the atmosphere with strong winds and rain.", translation: "Tempestade" },
        { topic: "Disasters", term: "hurricane", definition: "A storm with a violent wind, in particular a tropical cyclone in the Caribbean.", translation: "Furacão" },
        { topic: "Disasters", term: "typhoon", definition: "A tropical storm in the region of the Indian or western Pacific oceans.", translation: "Tufão" },
        { topic: "Disasters", term: "tornado", definition: "A destructive vortex of violently rotating winds.", translation: "Tornado" },
        { topic: "Disasters", term: "blizzard", definition: "A severe snowstorm with high winds and low visibility.", translation: "Nevasca" },
        { topic: "Disasters", term: "earthquake", definition: "A sudden and violent shaking of the ground.", translation: "Terremoto" },
        { topic: "Disasters", term: "tremor", definition: "A slight earthquake or a shaking movement.", translation: "Tremor" },
        { topic: "Disasters", term: "aftershock", definition: "A smaller earthquake following the main shock of a large earthquake.", translation: "Tremor secundário" },
        { topic: "Disasters", term: "flood", definition: "An overflow of a large amount of water beyond its normal limits.", translation: "Enchente / Inundação" },
        { topic: "Disasters", term: "wildfire", definition: "A large, destructive fire that spreads quickly over woodland.", translation: "Incêndio florestal" },
        { topic: "Disasters", term: "drought", definition: "A prolonged period of abnormally low rainfall.", translation: "Seca" },
        { topic: "Disasters", term: "heatwave", definition: "A prolonged period of abnormally hot weather.", translation: "Onda de calor" },
        { topic: "Disasters", term: "tsunami", definition: "A long high sea wave caused by an earthquake or other disturbance.", translation: "Tsunami / Maremoto" },

        // 2A: Safety & Impact
        { topic: "Safety", term: "safety", definition: "The condition of being protected from or unlikely to cause danger.", translation: "Segurança" },
        { topic: "Safety", term: "precaution", definition: "A measure taken in advance to prevent something dangerous from happening.", translation: "Precaução" },
        { topic: "Safety", term: "warning", definition: "A statement or event that indicates a possible or impending danger.", translation: "Aviso" },
        { topic: "Safety", term: "alert", definition: "A warning of danger, typically by a signal or message.", translation: "Alerta" },
        { topic: "Safety", term: "alarm", definition: "An anxious awareness of danger, or a sound to warn you.", translation: "Alarme" },
        { topic: "Safety", term: "shelter", definition: "A place giving temporary protection from bad weather or danger.", translation: "Abrigo" },
        { topic: "Safety", term: "evacuation", definition: "The action of emptying a place of people to move them to safety.", translation: "Evacuação / Retirada" },
        { topic: "Safety", term: "emergency-kit", definition: "A package of essential items you need to survive a disaster.", translation: "Kit de emergência" },
        { topic: "Safety", term: "first-aid-kit", definition: "A collection of supplies and equipment used to give medical treatment.", translation: "Kit de primeiros socorros" },
        { topic: "Safety", term: "flashlight", definition: "A portable battery-operated electric lamp.", translation: "Lanterna" },
        { topic: "Safety", term: "battery", definition: "A device that provides electricity for flashlights or radios.", translation: "Bateria / Pilha" },
        { topic: "Safety", term: "supplies", definition: "Food, water, and other essential items.", translation: "Suprimentos / Provisões" },
        { topic: "Impact", term: "damage", definition: "Physical harm caused to something in such a way as to impair its value.", translation: "Dano / Estrago" },
        { topic: "Impact", term: "power-outage", definition: "A short or long period when electrical power is lost.", translation: "Queda de energia" },

        // 2A: Verbs & Adjectives
        { topic: "Verbs", term: "to-warn", definition: "To inform someone in advance of an impending or possible danger.", translation: "Avisar / Alertar" },
        { topic: "Verbs", term: "to-strike", definition: "To hit forcibly and deliberately, like a hurricane hitting a coast.", translation: "Atingir / Atacar" },
        { topic: "Verbs", term: "to-shake", definition: "To move up and down or from side to side rapidly.", translation: "Tremer / Sacudir" },
        { topic: "Verbs", term: "to-evacuate", definition: "To remove someone from a place of danger to a safe place.", translation: "Evacuar / Retirar-se" },
        { topic: "Verbs", term: "to-survive", definition: "To continue to live or exist, especially in spite of danger.", translation: "Sobreviver" },
        { topic: "Verbs", term: "to-rescue", definition: "To save someone from a dangerous or distressing situation.", translation: "Resgatar / Salvar" },
        { topic: "Adjectives", term: "severe", definition: "Something very intense or harsh.", translation: "Severo / Grave" },
        { topic: "Adjectives", term: "extreme", definition: "Reaching a high or the highest degree.", translation: "Extremo" },
        { topic: "Adjectives", term: "powerful", definition: "Having great power or strength.", translation: "Poderoso" },
        { topic: "Adjectives", term: "dangerous", definition: "Able or likely to cause harm or injury.", translation: "Perigoso" },
        { topic: "Adjectives", term: "destructive", definition: "Causing great and irreparable harm or damage.", translation: "Destrutivo" },
        { topic: "Adjectives", term: "safe", definition: "Protected from or not exposed to danger or risk.", translation: "Seguro" },
        { topic: "Adjectives", term: "unsafe", definition: "Not safe; dangerous.", translation: "Inseguro" },
        { topic: "Adjectives", term: "prepared", definition: "Made ready for use or action.", translation: "Preparado" },

        // 3A: Expressions
        { topic: "Expressions", term: "natural-disaster", definition: "A catastrophic event caused by nature.", translation: "Um desastre natural" },
        { topic: "Expressions", term: "weather-warning", definition: "An official statement predicting dangerous weather conditions.", translation: "Um aviso meteorológico" },
        { topic: "Expressions", term: "an-alert", definition: "A notification of a danger or a problem.", translation: "Um alerta" },
        { topic: "Expressions", term: "severe-storm", definition: "A storm that is very intense and potentially dangerous.", translation: "Uma tempestade severa" },
        { topic: "Expressions", term: "a-heatwave", definition: "A prolonged period of abnormally hot weather.", translation: "Uma onda de calor" },
        { topic: "Expressions", term: "stay-indoors", definition: "To remain inside a building rather than going outside.", translation: "Ficar em lugares fechados" },
        { topic: "Expressions", term: "seek-shelter", definition: "To look for a place giving temporary protection from danger.", translation: "Procurar abrigo" },
        { topic: "Expressions", term: "evacuate-area", definition: "To leave a place due to danger.", translation: "Evacuar a área" },
        { topic: "Expressions", term: "an-emergency-kit", definition: "A package of essential items needed to survive a disaster.", translation: "Um kit de emergência" },
        { topic: "Expressions", term: "stay-away-windows", definition: "To keep a distance from glass windows to avoid injury.", translation: "Ficar longe das janelas" },
        { topic: "Expressions", term: "check-neighbors", definition: "To visit or contact people living near you to make sure they are okay.", translation: "Verificar seus vizinhos" },
        { topic: "Expressions", term: "power-went-out", definition: "Stating that the electricity supply failed.", translation: "A energia acabou" },
        { topic: "Expressions", term: "cause-damage", definition: "To result in severe harm or destruction to property.", translation: "Causar muitos danos" },
        { topic: "Expressions", term: "roads-blocked", definition: "Stating that streets are obstructed and impassable.", translation: "As estradas estão bloqueadas" },
        { topic: "Expressions", term: "frightening-experience", definition: "Describing an event that caused a lot of fear.", translation: "Foi uma experiência assustadora" },
        { topic: "Expressions", term: "follow-instructions", definition: "To obey rules or guidance provided by authorities.", translation: "Seguir as instruções" },

        // Additional Context Words
        { topic: "Context", term: "serious", definition: "Demanding or characterized by careful consideration or application.", translation: "Sério" },
        { topic: "Context", term: "priority", definition: "The fact or condition of being regarded or treated as more important.", translation: "Prioridade" },
        { topic: "Context", term: "elderly", definition: "Old or aging.", translation: "Idoso" },
        { topic: "Context", term: "charge", definition: "Store electrical energy in a battery or battery-operated device.", translation: "Carregar" }
    ]
});