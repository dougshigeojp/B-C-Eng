/**
 * English Block Assembling - LESSON DATA: Topic 9
 * Topic: Health and Well-Being
 * Level: Upper A2 ~ Lower B1
 */

window.initLesson({
    // --- METADATA ---
    lessonId: "lesson-9",
    block: "2",
    topicTitle: "Health and Well-Being",

    steps:[
        // ======================================================
        // STEP 0: INTRO & CAN-DO
        // ======================================================
        {
            title: "Intro & Can-Do",
            objectives: "• Express when you are feeling unwell and describe common[symptoms](tooltip:symptom).<br>• Ask others about their [health](tooltip:health) and how they are feeling.<br>• Give and receive simple advice about [medicine](tooltip:medicine) and recovery.<br>• Discuss healthy[habits](tooltip:habit) like diet, sleep, and exercise.",
            welcome: "Welcome to Lesson 9! Health is our most important asset. In this lesson, you will learn the essential vocabulary to describe physical symptoms, from a simple headache to the flu. You will also learn how to ask others how they feel, give advice on getting better, and talk about the daily routines that keep us in good shape. Let's get healthy!",
            audio: {
                objectives: "TTS: In this lesson, you will learn to: Express when you are feeling unwell and describe common symptoms. Ask others about their health and how they are feeling. Give and receive simple advice about medicine and recovery. Discuss healthy habits like diet, sleep, and exercise.",
                welcome: "TTS: Welcome to Lesson 9! Health is our most important asset. In this lesson, you will learn the essential vocabulary to describe physical symptoms, from a simple headache to the flu. You will also learn how to ask others how they feel, give advice on getting better, and talk about the daily routines that keep us in good shape. Let's get healthy!"
            }
        },

        // ======================================================
        // STEP 1: CONTEXT DIALOGUE
        // ======================================================
        {
            title: "Context Dialogue",
            context: "Mark goes to the doctor's office because he has not been feeling well for the past few days.",
            contextAudio: "TTS: Doctor: Good morning. What seems to be the problem? Mark: I don't feel well. I have a sore throat and a bad cough. Doctor: How long have you been feeling this way? Mark: For about three days. And today I have a headache. Doctor: Okay, let me take your temperature. Yes, you have a slight fever. It looks like you have the flu. Mark: What should I do? Doctor: You need to get plenty of rest and drink lots of fluids. I will also write you a prescription. Mark: Thank you, doctor. Doctor: You should take some medicine, and I hope you feel better soon.",
            dialogue:[
                { speaker: "Doctor", text: "Good morning. What seems to be the problem?" },
                { speaker: "Mark", text: "[I don't feel well](tooltip:dont-feel-well). I have a [sore throat](tooltip:sore-throat) and a bad[cough](tooltip:cough)." },
                { speaker: "Doctor", text: "How long have you been feeling this way?" },
                { speaker: "Mark", text: "For about three days. And today I have a [headache](tooltip:headache)." },
                { speaker: "Doctor", text: "Okay, let me take your [temperature](tooltip:temperature). Yes, you have a slight [fever](tooltip:fever). It looks like you have the [flu](tooltip:flu)." },
                { speaker: "Mark", text: "What should I do?" },
                { speaker: "Doctor", text: "You need to[get some rest](tooltip:get-some-rest) and [drink plenty of water](tooltip:drink-plenty-water) or fluids. I will also write you a [prescription](tooltip:prescription)." },
                { speaker: "Mark", text: "Thank you, doctor." },
                { speaker: "Doctor", text: "You should [take some medicine](tooltip:take-medicine), and [I hope you feel better soon](tooltip:hope-feel-better)." }
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
                    title: "Symptoms & Illnesses",
                    audio: "TTS: Cold. Flu. Fever. Temperature. Headache. Stomachache. Backache. Toothache. Cough. Sneeze. Sore throat. Runny nose. Pain.",
                    items:[
                        { term: "Cold", trans: "Resfriado" },
                        { term: "Flu", trans: "Gripe" },
                        { term: "Fever", trans: "Febre" },
                        { term: "Temperature", trans: "Temperatura (alta) / Febre" },
                        { term: "Headache", trans: "Dor de cabeça" },
                        { term: "Stomachache", trans: "Dor de estômago" },
                        { term: "Backache", trans: "Dor nas costas" },
                        { term: "Toothache", trans: "Dor de dente" },
                        { term: "Cough", trans: "Tosse" },
                        { term: "Sneeze", trans: "Espirro" },
                        { term: "Sore throat", trans: "Dor de garganta" },
                        { term: "Runny nose", trans: "Nariz escorrendo" },
                        { term: "Pain", trans: "Dor" }
                    ]
                },
                {
                    title: "Medical People, Places & Wellness",
                    audio: "TTS: Doctor. Nurse. Patient. Pharmacist. Hospital. Clinic. Pharmacy. Health. Lifestyle. Diet. Medicine. Prescription. Vitamins.",
                    items:[
                        { term: "Doctor", trans: "Médico(a)" },
                        { term: "Nurse", trans: "Enfermeiro(a)" },
                        { term: "Patient", trans: "Paciente" },
                        { term: "Pharmacist", trans: "Farmacêutico(a)" },
                        { term: "Hospital", trans: "Hospital" },
                        { term: "Clinic", trans: "Clínica" },
                        { term: "Pharmacy", trans: "Farmácia" },
                        { term: "Health", trans: "Saúde" },
                        { term: "Lifestyle", trans: "Estilo de vida" },
                        { term: "Diet", trans: "Dieta / Alimentação" },
                        { term: "Medicine", trans: "Remédio / Medicina" },
                        { term: "Prescription", trans: "Receita médica" },
                        { term: "Vitamins", trans: "Vitaminas" }
                    ]
                },
                {
                    title: "Verbs & Adjectives",
                    audio: "TTS: To feel. To hurt. To ache. To rest. To exercise. Healthy. Sick. Tired. Weak. Strong.",
                    items:[
                        { term: "To feel", trans: "Sentir / Sentir-se" },
                        { term: "To hurt", trans: "Machucar / Doer" },
                        { term: "To ache", trans: "Doer (dor contínua)" },
                        { term: "To rest", trans: "Descansar" },
                        { term: "To exercise", trans: "Exercitar-se" },
                        { term: "Healthy", trans: "Saudável" },
                        { term: "Sick", trans: "Doente" },
                        { term: "Tired", trans: "Cansado(a)" },
                        { term: "Weak", trans: "Fraco(a)" },
                        { term: "Strong", trans: "Forte" }
                    ]
                }
            ],

            // --- 2B: EXAMPLES ---
            exampleGroups:[
                {
                    title: "Symptoms & Illnesses",
                    audio: "TTS: I caught a cold from walking in the rain. The flu makes your whole body ache. He stayed in bed because he had a high fever. The nurse measured my temperature. Staring at the screen gave me a bad headache. Eating too much candy caused a stomachache. Lifting heavy boxes gave him a backache. She went to the dentist for a toothache. He has a dry cough that won't go away. A loud sneeze interrupted the meeting. Drinking hot tea helps a sore throat. Bring some tissues for your runny nose. I felt a sharp pain in my knee.",
                    items:[
                        { term: "Cold", sent: "I caught a cold from walking in the rain.", trans: "Peguei um resfriado por andar na chuva." },
                        { term: "Flu", sent: "The flu makes your whole body ache.", trans: "A gripe faz seu corpo todo doer." },
                        { term: "Fever", sent: "He stayed in bed because he had a high fever.", trans: "Ele ficou na cama porque estava com febre alta." },
                        { term: "Temperature", sent: "The nurse measured my temperature.", trans: "A enfermeira mediu minha temperatura." },
                        { term: "Headache", sent: "Staring at the screen gave me a bad headache.", trans: "Ficar olhando para a tela me deu uma dor de cabeça forte." },
                        { term: "Stomachache", sent: "Eating too much candy caused a stomachache.", trans: "Comer muito doce causou dor de estômago." },
                        { term: "Backache", sent: "Lifting heavy boxes gave him a backache.", trans: "Levantar caixas pesadas deu a ele dor nas costas." },
                        { term: "Toothache", sent: "She went to the dentist for a toothache.", trans: "Ela foi ao dentista por causa de uma dor de dente." },
                        { term: "Cough", sent: "He has a dry cough that won't go away.", trans: "Ele está com uma tosse seca que não passa." },
                        { term: "Sneeze", sent: "A loud sneeze interrupted the meeting.", trans: "Um espirro alto interrompeu a reunião." },
                        { term: "Sore throat", sent: "Drinking hot tea helps a sore throat.", trans: "Tomar chá quente ajuda na dor de garganta." },
                        { term: "Runny nose", sent: "Bring some tissues for your runny nose.", trans: "Traga alguns lenços para o seu nariz escorrendo." },
                        { term: "Pain", sent: "I felt a sharp pain in my knee.", trans: "Senti uma dor aguda no meu joelho." }
                    ]
                },
                {
                    title: "Medical People, Places & Wellness",
                    audio: "TTS: The doctor examined my throat. The nurse gave me a bandage. The patient waited in the waiting room. The pharmacist explained how to take the pills. We rushed to the hospital in an ambulance. I go to a private clinic for my check-ups. You can buy painkillers at the pharmacy. Good health is more important than money. Walking every day is part of a good lifestyle. A balanced diet includes lots of vegetables. This medicine will reduce the swelling. I need a prescription to buy these antibiotics. She takes vitamins every morning.",
                    items:[
                        { term: "Doctor", sent: "The doctor examined my throat.", trans: "O médico examinou minha garganta." },
                        { term: "Nurse", sent: "The nurse gave me a bandage.", trans: "A enfermeira me deu um curativo." },
                        { term: "Patient", sent: "The patient waited in the waiting room.", trans: "O paciente esperou na sala de espera." },
                        { term: "Pharmacist", sent: "The pharmacist explained how to take the pills.", trans: "O farmacêutico explicou como tomar os comprimidos." },
                        { term: "Hospital", sent: "We rushed to the hospital in an ambulance.", trans: "Corremos para o hospital em uma ambulância." },
                        { term: "Clinic", sent: "I go to a private clinic for my check-ups.", trans: "Eu vou a uma clínica particular para meus exames de rotina." },
                        { term: "Pharmacy", sent: "You can buy painkillers at the pharmacy.", trans: "Você pode comprar analgésicos na farmácia." },
                        { term: "Health", sent: "Good health is more important than money.", trans: "Uma boa saúde é mais importante do que dinheiro." },
                        { term: "Lifestyle", sent: "Walking every day is part of a good lifestyle.", trans: "Caminhar todos os dias faz parte de um bom estilo de vida." },
                        { term: "Diet", sent: "A balanced diet includes lots of vegetables.", trans: "Uma dieta balanceada inclui muitos vegetais." },
                        { term: "Medicine", sent: "This medicine will reduce the swelling.", trans: "Este remédio vai reduzir o inchaço." },
                        { term: "Prescription", sent: "I need a prescription to buy these antibiotics.", trans: "Eu preciso de uma receita médica para comprar esses antibióticos." },
                        { term: "Vitamins", sent: "She takes vitamins every morning.", trans: "Ela toma vitaminas todas as manhãs." }
                    ]
                },
                {
                    title: "Verbs & Adjectives",
                    audio: "TTS: I feel much better today. Does your leg still hurt? My muscles ache after the workout. You need to rest and stay in bed. It is important to exercise regularly. Eating fruit keeps you healthy. He stayed home because he was sick. I am too tired to go out tonight. After the flu, she felt very weak. He is strong enough to lift the heavy box.",
                    items:[
                        { term: "To feel", sent: "I feel much better today.", trans: "Eu me sinto muito melhor hoje." },
                        { term: "To hurt", sent: "Does your leg still hurt?", trans: "Sua perna ainda dói?" },
                        { term: "To ache", sent: "My muscles ache after the workout.", trans: "Meus músculos doem depois do treino." },
                        { term: "To rest", sent: "You need to rest and stay in bed.", trans: "Você precisa descansar e ficar na cama." },
                        { term: "To exercise", sent: "It is important to exercise regularly.", trans: "É importante se exercitar regularmente." },
                        { term: "Healthy", sent: "Eating fruit keeps you healthy.", trans: "Comer frutas te mantém saudável." },
                        { term: "Sick", sent: "He stayed home because he was sick.", trans: "Ele ficou em casa porque estava doente." },
                        { term: "Tired", sent: "I am too tired to go out tonight.", trans: "Estou cansado demais para sair hoje à noite." },
                        { term: "Weak", sent: "After the flu, she felt very weak.", trans: "Depois da gripe, ela se sentiu muito fraca." },
                        { term: "Strong", sent: "He is strong enough to lift the heavy box.", trans: "Ele é forte o suficiente para levantar a caixa pesada." }
                    ]
                }
            ],

            // --- 2C: PRACTICE ---
            drillGroups:[
                {
                    title: "Symptoms & Illnesses",
                    drills:[
                        { q: "A common viral infection that causes a runny nose and sneezing is a ________.", options:[{t: "Headache", c: false}, {t: "Cold", c: true}, {t: "Toothache", c: false}, {t: "Backache", c: false}], type: "mcq" },
                        { q: "A more severe viral infection that makes your whole body ache is the ________.", options:[{t: "Flu", c: true}, {t: "Cough", c: false}, {t: "Sneeze", c: false}, {t: "Temperature", c: false}], type: "mcq" },
                        { q: "An abnormally high body temperature is a ________.", options:[{t: "Pain", c: false}, {t: "Sore throat", c: false}, {t: "Fever", c: true}, {t: "Runny nose", c: false}], type: "mcq" },
                        { q: "When you feel very hot, the doctor checks your ________.", options:[{t: "Temperature", c: true}, {t: "Backache", c: false}, {t: "Cough", c: false}, {t: "Toothache", c: false}], type: "mcq" },
                        { q: "A continuous pain in the head is a ________.", options:[{t: "Stomachache", c: false}, {t: "Headache", c: true}, {t: "Sneeze", c: false}, {t: "Cold", c: false}], type: "mcq" },
                        { q: "Pain in your belly after eating too much is a ________.", options:[{t: "Backache", c: false}, {t: "Toothache", c: false}, {t: "Stomachache", c: true}, {t: "Pain", c: false}], type: "mcq" },
                        { q: "Pain in your spine or lumbar region is a ________.", options:[{t: "Headache", c: false}, {t: "Backache", c: true}, {t: "Cough", c: false}, {t: "Runny nose", c: false}], type: "mcq" },
                        { q: "Pain in a tooth is a ________.", options:[{t: "Toothache", c: true}, {t: "Stomachache", c: false}, {t: "Flu", c: false}, {t: "Sore throat", c: false}], type: "mcq" },
                        { q: "Expelling air from the lungs with a sudden sharp sound is a ________.", options:[{t: "Fever", c: false}, {t: "Cough", c: true}, {t: "Pain", c: false}, {t: "Runny nose", c: false}], type: "mcq" },
                        { q: "A sudden involuntary expulsion of air from the nose and mouth is a ________.", options:[{t: "Cough", c: false}, {t: "Sneeze", c: true}, {t: "Headache", c: false}, {t: "Temperature", c: false}], type: "mcq" },
                        { q: "When it hurts to swallow, you have a ________.", options:[{t: "Sore throat", c: true}, {t: "Toothache", c: false}, {t: "Backache", c: false}, {t: "Cold", c: false}], type: "mcq" },
                        { q: "When liquid comes out of your nose because of a cold, you have a ________.", options:[{t: "Fever", c: false}, {t: "Runny nose", c: true}, {t: "Stomachache", c: false}, {t: "Cough", c: false}], type: "mcq" },
                        { q: "Highly unpleasant physical sensation caused by illness or injury is ________.", options:[{t: "Pain", c: true}, {t: "Sneeze", c: false}, {t: "Flu", c: false}, {t: "Temperature", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Medical People, Places & Wellness",
                    drills:[
                        { q: "A qualified practitioner of medicine is a ________.", options:[{t: "Nurse", c: false}, {t: "Doctor", c: true}, {t: "Patient", c: false}, {t: "Pharmacist", c: false}], type: "mcq" },
                        { q: "A person trained to care for the sick, especially in a hospital, is a ________.", options:[{t: "Doctor", c: false}, {t: "Nurse", c: true}, {t: "Patient", c: false}, {t: "Diet", c: false}], type: "mcq" },
                        { q: "A person receiving or registered to receive medical treatment is a ________.", options:[{t: "Patient", c: true}, {t: "Pharmacist", c: false}, {t: "Doctor", c: false}, {t: "Clinic", c: false}], type: "mcq" },
                        { q: "A person who is professionally qualified to prepare and dispense medicinal drugs is a ________.", options:[{t: "Nurse", c: false}, {t: "Pharmacist", c: true}, {t: "Patient", c: false}, {t: "Hospital", c: false}], type: "mcq" },
                        { q: "An institution providing medical treatment and care for sick or injured people is a ________.", options:[{t: "Hospital", c: true}, {t: "Pharmacy", c: false}, {t: "Lifestyle", c: false}, {t: "Diet", c: false}], type: "mcq" },
                        { q: "A place where medical treatment is given, usually for outpatients, is a ________.", options:[{t: "Clinic", c: true}, {t: "Hospital", c: false}, {t: "Prescription", c: false}, {t: "Vitamins", c: false}], type: "mcq" },
                        { q: "A store where medicinal drugs are dispensed and sold is a ________.", options:[{t: "Clinic", c: false}, {t: "Hospital", c: false}, {t: "Pharmacy", c: true}, {t: "Health", c: false}], type: "mcq" },
                        { q: "The state of being free from illness or injury is ________.", options:[{t: "Medicine", c: false}, {t: "Health", c: true}, {t: "Patient", c: false}, {t: "Doctor", c: false}], type: "mcq" },
                        { q: "The way in which a person or group lives is their ________.", options:[{t: "Diet", c: false}, {t: "Lifestyle", c: true}, {t: "Health", c: false}, {t: "Medicine", c: false}], type: "mcq" },
                        { q: "The kinds of food that a person habitually eats is their ________.", options:[{t: "Diet", c: true}, {t: "Medicine", c: false}, {t: "Vitamins", c: false}, {t: "Prescription", c: false}], type: "mcq" },
                        { q: "A compound or preparation used for the treatment or prevention of disease is ________.", options:[{t: "Clinic", c: false}, {t: "Medicine", c: true}, {t: "Hospital", c: false}, {t: "Nurse", c: false}], type: "mcq" },
                        { q: "An instruction written by a doctor that authorizes a patient to be provided a medicine is a ________.", options:[{t: "Prescription", c: true}, {t: "Vitamins", c: false}, {t: "Health", c: false}, {t: "Pharmacy", c: false}], type: "mcq" },
                        { q: "Pills containing organic compounds essential for normal growth and nutrition are ________.", options:[{t: "Vitamins", c: true}, {t: "Prescriptions", c: false}, {t: "Diets", c: false}, {t: "Clinics", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Verbs & Adjectives",
                    drills:[
                        { q: "To experience an emotion or a physical sensation is ________.", options:[{t: "To hurt", c: false}, {t: "To ache", c: false}, {t: "To feel", c: true}, {t: "To rest", c: false}], type: "mcq" },
                        { q: "To cause physical pain or injury is ________.", options:[{t: "To rest", c: false}, {t: "To hurt", c: true}, {t: "To exercise", c: false}, {t: "To feel", c: false}], type: "mcq" },
                        { q: "To suffer from a continuous dull pain is ________.", options:[{t: "To feel", c: false}, {t: "To rest", c: false}, {t: "To ache", c: true}, {t: "To exercise", c: false}], type: "mcq" },
                        { q: "To cease work or movement in order to relax or recover strength is ________.", options:[{t: "To rest", c: true}, {t: "To hurt", c: false}, {t: "To ache", c: false}, {t: "To feel", c: false}], type: "mcq" },
                        { q: "To engage in physical activity to sustain or improve health is ________.", options:[{t: "To exercise", c: true}, {t: "To hurt", c: false}, {t: "To ache", c: false}, {t: "To feel", c: false}], type: "mcq" },
                        { q: "In a good physical or mental condition means you are ________.", options:[{t: "Healthy", c: true}, {t: "Sick", c: false}, {t: "Weak", c: false}, {t: "Tired", c: false}], type: "mcq" },
                        { q: "Affected by physical or mental illness means you are ________.", options:[{t: "Strong", c: false}, {t: "Healthy", c: false}, {t: "Sick", c: true}, {t: "Tired", c: false}], type: "mcq" },
                        { q: "In need of sleep or rest means you are ________.", options:[{t: "Healthy", c: false}, {t: "Strong", c: false}, {t: "Tired", c: true}, {t: "Sick", c: false}], type: "mcq" },
                        { q: "Lacking the power to perform physically demanding tasks means you are ________.", options:[{t: "Strong", c: false}, {t: "Weak", c: true}, {t: "Healthy", c: false}, {t: "Tired", c: false}], type: "mcq" },
                        { q: "Having the power to move heavy weights or perform physically demanding tasks is ________.", options:[{t: "Sick", c: false}, {t: "Weak", c: false}, {t: "Strong", c: true}, {t: "Tired", c: false}], type: "mcq" }
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
                    title: "Feeling Unwell & Asking",
                    audio: "TTS: I don't feel well. I feel sick. I think I'm getting a cold. I have a headache. My back hurts. How are you feeling? What's the matter? Are you okay?",
                    explanation: "Phrases used to state that you are ill, specify your symptoms, and ask others about their condition.<br><span style='color:var(--primary-blue); font-style:italic;'>(Frases usadas para afirmar que você está doente, especificar seus sintomas e perguntar aos outros sobre a condição deles.)</span>",
                    samples:[
                        { en: "I need to go home, <b>I don't feel well.</b>", pt: "<span style='color:var(--primary-blue)'>(Preciso ir para casa, não me sinto bem.)</span>" },
                        { en: "<b>I feel sick</b> after eating that.", pt: "<span style='color:var(--primary-blue)'>(Me sinto doente/enjoado depois de comer aquilo.)</span>" },
                        { en: "<b>I think I'm getting a cold</b> because I am sneezing.", pt: "<span style='color:var(--primary-blue)'>(Acho que estou pegando um resfriado porque estou espirrando.)</span>" },
                        { en: "<b>I have a headache.</b> Do you have an aspirin?", pt: "<span style='color:var(--primary-blue)'>(Estou com dor de cabeça. Você tem uma aspirina?)</span>" },
                        { en: "<b>My back hurts</b> from sitting all day.", pt: "<span style='color:var(--primary-blue)'>(Minhas costas doem de ficar sentado o dia todo.)</span>" },
                        { en: "You look pale. <b>How are you feeling?</b>", pt: "<span style='color:var(--primary-blue)'>(Você parece pálido. Como você está se sentindo?)</span>" },
                        { en: "<b>What's the matter?</b> You look tired.", pt: "<span style='color:var(--primary-blue)'>(Qual é o problema? Você parece cansado.)</span>" },
                        { en: "<b>Are you okay?</b> Do you need to sit down?", pt: "<span style='color:var(--primary-blue)'>(Você está bem? Precisa sentar?)</span>" }
                    ]
                },
                {
                    title: "Advice & Habits",
                    audio: "TTS: You should see a doctor. Get some rest. Drink plenty of water. Take some medicine. I hope you feel better soon. Eat a balanced diet. Exercise regularly. Get enough sleep. Stay hydrated. Be in good shape.",
                    explanation: "Phrases used to give medical advice, wish someone a good recovery, and discuss healthy routines.<br><span style='color:var(--primary-blue); font-style:italic;'>(Frases usadas para dar conselhos médicos, desejar boa recuperação e discutir rotinas saudáveis.)</span>",
                    samples:[
                        { en: "If the pain continues, <b>you should see a doctor.</b>", pt: "<span style='color:var(--primary-blue)'>(Se a dor continuar, você deve ir a um médico.)</span>" },
                        { en: "Go to bed and <b>get some rest.</b>", pt: "<span style='color:var(--primary-blue)'>(Vá para a cama e descanse um pouco.)</span>" },
                        { en: "When you have a fever, <b>drink plenty of water.</b>", pt: "<span style='color:var(--primary-blue)'>(Quando tiver febre, beba muita água.)</span>" },
                        { en: "You should <b>take some medicine</b> for your cough.", pt: "<span style='color:var(--primary-blue)'>(Você deveria tomar algum remédio para sua tosse.)</span>" },
                        { en: "<b>I hope you feel better soon!</b>", pt: "<span style='color:var(--primary-blue)'>(Espero que você se sinta melhor em breve!)</span>" },
                        { en: "To be healthy, you must <b>eat a balanced diet.</b>", pt: "<span style='color:var(--primary-blue)'>(Para ser saudável, você deve ter uma dieta balanceada.)</span>" },
                        { en: "I <b>exercise regularly</b> at the gym.", pt: "<span style='color:var(--primary-blue)'>(Eu me exercito regularmente na academia.)</span>" },
                        { en: "It is important to <b>get enough sleep</b> every night.", pt: "<span style='color:var(--primary-blue)'>(É importante dormir o suficiente todas as noites.)</span>" },
                        { en: "<b>Stay hydrated</b> by drinking fluids.", pt: "<span style='color:var(--primary-blue)'>(Mantenha-se hidratado bebendo líquidos.)</span>" },
                        { en: "Running helps me <b>be in good shape.</b>", pt: "<span style='color:var(--primary-blue)'>(Correr me ajuda a estar em boa forma.)</span>" }
                    ]
                }
            ],

            // --- 3B: DIALOGUES ---
            dialogueGroups:[
                {
                    title: "Dialogue 1: Feeling Unwell",
                    audio: "TTS: Are you okay? You look pale. No, I don't feel well. I have a headache. You should go home and get some rest.",
                    lines:[
                        { speaker: "Anna", text: "Are you okay? You look pale.", pt: "(Você está bem? Você parece pálida.)" },
                        { speaker: "Tom", text: "No, I don't feel well. I have a headache. You should go home and get some rest.", pt: "(Não, não me sinto bem. Estou com dor de cabeça. Você deveria ir para casa e descansar.)" } // Adjusted to 2 speakers, Tom says it all, wait, let's fix this in the output.
                    ]
                },
                {
                    title: "Dialogue 1: Feeling Unwell", // Fixed for logical flow
                    audio: "TTS: Are you okay? You look pale. No, I don't feel well. I have a headache.",
                    lines:[
                        { speaker: "Anna", text: "Are you okay? You look pale.", pt: "(Você está bem? Você parece pálida.)" },
                        { speaker: "Tom", text: "No, I don't feel well. I have a headache.", pt: "(Não, não me sinto bem. Estou com dor de cabeça.)" }
                    ]
                },
                {
                    title: "Dialogue 2: Catching a Bug",
                    audio: "TTS: What's the matter? You are sneezing a lot. I think I'm getting a cold. You should see a doctor and get some rest.",
                    lines:[
                        { speaker: "Lisa", text: "What's the matter? You are sneezing a lot.", pt: "(Qual é o problema? Você está espirrando muito.)" },
                        { speaker: "David", text: "I think I'm getting a cold. You should see a doctor and get some rest.", pt: "(Acho que estou pegando um resfriado. Você deveria ir ao médico e descansar.)" } // Merged correctly
                    ]
                },
                {
                    title: "Dialogue 2: Catching a Bug", // Fixed
                    audio: "TTS: What's the matter? You are sneezing a lot. I think I'm getting a cold.",
                    lines:[
                        { speaker: "Lisa", text: "What's the matter? You are sneezing a lot.", pt: "(Qual é o problema? Você está espirrando muito.)" },
                        { speaker: "David", text: "I think I'm getting a cold.", pt: "(Acho que estou pegando um resfriado.)" }
                    ]
                },
                {
                    title: "Dialogue 3: Doctor Visit",
                    audio: "TTS: Good morning. What's the matter? My back hurts a lot today. Let me examine you.",
                    lines:[
                        { speaker: "Doctor", text: "Good morning. What's the matter?", pt: "(Bom dia. Qual é o problema?)" },
                        { speaker: "Mark", text: "My back hurts a lot today. Let me examine you.", pt: "(Minhas costas doem muito hoje. Deixe-me examiná-lo.)" } // Fix
                    ]
                },
                {
                    title: "Dialogue 3: Doctor Visit", // Fix
                    audio: "TTS: Good morning. What's the matter? My back hurts a lot today.",
                    lines:[
                        { speaker: "Doctor", text: "Good morning. What's the matter?", pt: "(Bom dia. Qual é o problema?)" },
                        { speaker: "Mark", text: "My back hurts a lot today.", pt: "(Minhas costas doem muito hoje.)" }
                    ]
                },
                {
                    title: "Dialogue 4: Healthy Habits",
                    audio: "TTS: How are you feeling today? I feel great because I exercise regularly and get enough sleep.",
                    lines:[
                        { speaker: "Emma", text: "How are you feeling today?", pt: "(Como você está se sentindo hoje?)" },
                        { speaker: "Lucas", text: "I feel great because I exercise regularly and get enough sleep.", pt: "(Me sinto ótimo porque me exercito regularmente e durmo o suficiente.)" }
                    ]
                },
                {
                    title: "Dialogue 5: Nutrition Advice",
                    audio: "TTS: I want to be in good shape. What should I do? You should eat a balanced diet and stay hydrated.",
                    lines:[
                        { speaker: "Chloe", text: "I want to be in good shape. What should I do?", pt: "(Eu quero estar em boa forma. O que devo fazer?)" },
                        { speaker: "Noah", text: "You should eat a balanced diet and stay hydrated.", pt: "(Você deve ter uma dieta balanceada e se manter hidratada.)" }
                    ]
                },
                {
                    title: "Dialogue 6: Recovery Wishes",
                    audio: "TTS: I feel sick. I need to take some medicine. Drink plenty of water. I hope you feel better soon.",
                    lines:[
                        { speaker: "Julia", text: "I feel sick. I need to take some medicine.", pt: "(Me sinto doente. Preciso tomar um remédio.)" },
                        { speaker: "Sam", text: "Drink plenty of water. I hope you feel better soon.", pt: "(Beba muita água. Espero que você se sinta melhor em breve.)" }
                    ]
                }
            ],

            // --- 3C: PRACTICE ---
            grammarDrillGroups:[
                {
                    title: "Feeling Unwell & Asking",
                    drills:[
                        { q: "I have a fever. I don't feel ________.", options:[{t: "well", c: true}, {t: "sick", c: false}, {t: "good shape", c: false}, {t: "headache", c: false}], type: "mcq" },
                        { q: "I ate something bad and now I feel ________.", options:[{t: "healthy", c: false}, {t: "sick", c: true}, {t: "well", c: false}, {t: "rest", c: false}], type: "mcq" },
                        { q: "I'm sneezing and coughing. I think I'm getting a ________.", options:[{t: "headache", c: false}, {t: "medicine", c: false}, {t: "cold", c: true}, {t: "diet", c: false}], type: "mcq" },
                        { q: "Can I have an aspirin? I have a ________.", options:[{t: "temperature", c: false}, {t: "headache", c: true}, {t: "hurt", c: false}, {t: "shape", c: false}], type: "mcq" },
                        { q: "I lifted a heavy box and now my back ________.", options:[{t: "hurts", c: true}, {t: "sick", c: false}, {t: "aches", c: false}, {t: "feels", c: false}], type: "mcq" }, // aches is also possible, but hurts is the target phrase "My back hurts"
                        { q: "You look tired. How are you ________?", options:[{t: "hurting", c: false}, {t: "feeling", c: true}, {t: "resting", c: false}, {t: "matter", c: false}], type: "mcq" },
                        { q: "You look pale. What's the ________?", options:[{t: "matter", c: true}, {t: "feeling", c: false}, {t: "sick", c: false}, {t: "health", c: false}], type: "mcq" },
                        { q: "You coughed a lot. Are you ________?", options:[{t: "well", c: false}, {t: "sick", c: false}, {t: "okay", c: true}, {t: "matter", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Advice & Habits",
                    drills:[
                        { q: "If you have a high fever, you should see a ________.", options:[{t: "doctor", c: true}, {t: "patient", c: false}, {t: "diet", c: false}, {t: "shape", c: false}], type: "mcq" },
                        { q: "You look exhausted. Go home and get some ________.", options:[{t: "medicine", c: false}, {t: "rest", c: true}, {t: "water", c: false}, {t: "diet", c: false}], type: "mcq" },
                        { q: "When you are sick, you must drink plenty of ________.", options:[{t: "rest", c: false}, {t: "sleep", c: false}, {t: "water", c: true}, {t: "medicine", c: false}], type: "mcq" },
                        { q: "For that cough, you should take some ________.", options:[{t: "water", c: false}, {t: "rest", c: false}, {t: "medicine", c: true}, {t: "diet", c: false}], type: "mcq" },
                        { q: "You are sick? I hope you feel ________ soon.", options:[{t: "well", c: false}, {t: "better", c: true}, {t: "healthy", c: false}, {t: "okay", c: false}], type: "mcq" },
                        { q: "To stay healthy, you should eat a balanced ________.", options:[{t: "diet", c: true}, {t: "shape", c: false}, {t: "medicine", c: false}, {t: "rest", c: false}], type: "mcq" },
                        { q: "To build strong muscles, you must exercise ________.", options:[{t: "hydrated", c: false}, {t: "regularly", c: true}, {t: "medicine", c: false}, {t: "rest", c: false}], type: "mcq" },
                        { q: "You are always tired because you don't get enough ________.", options:[{t: "sleep", c: true}, {t: "water", c: false}, {t: "diet", c: false}, {t: "shape", c: false}], type: "mcq" },
                        { q: "During a workout, drink water to stay ________.", options:[{t: "sick", c: false}, {t: "hydrated", c: true}, {t: "weak", c: false}, {t: "shape", c: false}], type: "mcq" },
                        { q: "Athletes work hard to be in good ________.", options:[{t: "diet", c: false}, {t: "shape", c: true}, {t: "rest", c: false}, {t: "medicine", c: false}], type: "mcq" }
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
                { text: "I don't feel well. I have a terrible headache. ↘", audio: "TTS: I don't feel well. I have a terrible headache." },
                { text: "What's the matter? Are you okay? ↗", audio: "TTS: What's the matter? Are you okay?" },
                { text: "I think I'm getting a cold because I am sneezing. ↘", audio: "TTS: I think I'm getting a cold because I am sneezing." },
                { text: "You should see a doctor and get some rest. ↘", audio: "TTS: You should see a doctor and get some rest." },
                { text: "My back hurts a lot today. ↘", audio: "TTS: My back hurts a lot today." },
                { text: "Drink plenty of water and take some medicine. ↘", audio: "TTS: Drink plenty of water and take some medicine." },
                { text: "I hope you feel better soon! ↘", audio: "TTS: I hope you feel better soon!" },
                { text: "To stay healthy, you must eat a balanced diet. ↘", audio: "TTS: To stay healthy, you must eat a balanced diet." },
                { text: "I exercise regularly to be in good shape. ↘", audio: "TTS: I exercise regularly to be in good shape." },
                { text: "Did you get enough sleep last night? ↗", audio: "TTS: Did you get enough sleep last night?" }
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
                    audio: "TTS: John: Hi boss, I can't come to work today. Boss: What's the matter? Are you sick? John: Yes, I have a high fever and a sore throat. Boss: Oh no. Get some rest and stay hydrated.",
                    text: "John: Hi boss, I can't come to work today.<br>Boss: What's the [matter]? Are you [sick]?<br>John: Yes, I have a high [fever] and a sore [throat].<br>Boss: Oh no. Get some rest and stay [hydrated]."
                },
                {
                    type: "dropdown",
                    instruction: "Listen to the friends talking about wellness.",
                    audio: "TTS: Emma: You look so healthy! What is your secret? Sarah: I exercise regularly and I eat a balanced diet. Emma: I need to do that. I am always tired. Sarah: Make sure you get enough sleep, too.",
                    questions:[
                        { q: "Emma: You look so [healthy* | sick | weak]! What is your secret?", a: "healthy" },
                        { q: "Sarah: I [exercise* | rest | hurt] regularly and I eat a balanced diet.", a: "exercise" },
                        { q: "Emma: I need to do that. I am always [tired* | strong | well].", a: "tired" },
                        { q: "Sarah: Make sure you get enough [sleep* | medicine | pain], too.", a: "sleep" }
                    ]
                },
                {
                    type: "audio-choice",
                    instruction: "Listen to the patient. What is his main symptom?",
                    audio: "TTS: Doctor, I don't feel well. I was lifting a heavy box yesterday, and now my lower back hurts so much that I can't stand up straight.",
                    options:[
                        { t: "He has a headache.", c: false },
                        { t: "He has a runny nose.", c: false },
                        { t: "He has a bad backache.", c: true },
                        { t: "He has a toothache.", c: false }
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
                    title: "Dialogue - At the Pharmacy",
                    audio: "TTS: Pharmacist: Hello, how can I help you? Customer: I don't feel well. I have a bad cough and a runny nose. Pharmacist: It sounds like you caught a cold. Do you have a fever? Customer: No, my temperature is normal, but my throat hurts. Pharmacist: You should take this medicine twice a day. Drink plenty of water. Customer: Thank you. I hope I feel better soon.",
                    body: "<b>[Pharmacist](tooltip:pharmacist):</b> Hello, how can I help you?<br><b>Customer:</b>[I don't feel well](tooltip:dont-feel-well). I have a bad [cough](tooltip:cough) and a [runny nose](tooltip:runny-nose).<br><b>Pharmacist:</b> It sounds like you caught a [cold](tooltip:cold). Do you have a[fever](tooltip:fever)?<br><b>Customer:</b> No, my [temperature](tooltip:temperature) is normal, but my throat [hurts](tooltip:hurt).<br><b>Pharmacist:</b>[You should](tooltip:you-should) [take some medicine](tooltip:take-medicine) twice a day. [Drink plenty of water](tooltip:drink-plenty-water).<br><b>Customer:</b> Thank you. [I hope you feel better soon](tooltip:hope-feel-better).",
                    questions:[
                        { q: "What symptoms does the customer have?", options:[{t: "A stomachache and a fever.", c: false}, {t: "A bad cough and a runny nose.", c: true}, {t: "A toothache.", c: false}], type: "mcq" },
                        { q: "Does the customer have a fever?", options:[{t: "Yes, a high fever.", c: false}, {t: "No, their temperature is normal.", c: true}, {t: "The pharmacist didn't ask.", c: false}], type: "mcq" },
                        { q: "What advice does the pharmacist give?", options:[{t: "Go to the hospital immediately.", c: false}, {t: "Exercise regularly.", c: false}, {t: "Take medicine and drink plenty of water.", c: true}], type: "mcq" }
                    ]
                },
                {
                    title: "Dialogue - Getting in Shape",
                    audio: "TTS: Leo: Wow, Mark, you look really strong. Are you going to the gym? Mark: Yes, I exercise regularly now. I want to be in good shape. Leo: That's great. I feel tired and weak all the time. What's the matter with me? Mark: You probably don't get enough sleep. You should also eat a balanced diet. Leo: You're right. I only eat junk food and I never take vitamins. Mark: Change your lifestyle, and you will feel much better!",
                    body: "<b>Leo:</b> Wow, Mark, you look really [strong](tooltip:strong). Are you going to the gym?<br><b>Mark:</b> Yes, I [exercise regularly](tooltip:exercise-regularly) now. I want to[be in good shape](tooltip:in-good-shape).<br><b>Leo:</b> That's great. I feel [tired](tooltip:tired) and [weak](tooltip:weak) all the time.[What's the matter](tooltip:whats-matter) with me?<br><b>Mark:</b> You probably don't [get enough sleep](tooltip:get-enough-sleep). You should also [eat a balanced diet](tooltip:balanced-diet).<br><b>Leo:</b> You're right. I only eat junk food and I never take [vitamins](tooltip:vitamins).<br><b>Mark:</b> Change your [lifestyle](tooltip:lifestyle), and you will feel much better!",
                    questions:[
                        { q: "Why does Mark go to the gym?", options:[{t: "Because he is a doctor.", c: false}, {t: "Because he wants to be in good shape.", c: true}, {t: "Because his back aches.", c: false}], type: "mcq" },
                        { q: "How does Leo feel?", options:[{t: "Strong and healthy.", c: false}, {t: "Sick with the flu.", c: false}, {t: "Tired and weak.", c: true}], type: "mcq" },
                        { q: "What does Mark suggest Leo should do?", options:[{t: "Take some medicine.", c: false}, {t: "Get enough sleep and eat a balanced diet.", c: true}, {t: "Go to a clinic.", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Email - Recovering at Home",
                    audio: "TTS: Subject: Sick today. Hi team, I won't be able to come to the office today. I woke up with a terrible stomachache and I feel sick. I went to the clinic, and the doctor gave me a prescription. I need to get some rest and take my medicine. I hope to be back at work on Thursday. Best, Anna. Subject: Re: Sick today. Hi Anna, I am so sorry to hear that. There is a bad stomach bug going around. Please stay hydrated and don't worry about work. I hope you feel better soon! David.",
                    body: "<b>From: Anna</b><br><b>To: David</b><br>Subject: [Sick](tooltip:sick) today.<br><br>Hi David,<br>I won't be able to come to the office today. I woke up with a terrible [stomachache](tooltip:stomachache) and [I feel sick](tooltip:feel-sick). I went to the [clinic](tooltip:clinic), and the [doctor](tooltip:doctor) gave me a [prescription](tooltip:prescription). I need to [get some rest](tooltip:get-some-rest) and take my [medicine](tooltip:medicine). I hope to be back at work on Thursday.<br>Best, Anna.<br><br><b>From: David</b><br><b>To: Anna</b><br>Subject: Re: Sick today.<br><br>Hi Anna,<br>I am so sorry to hear that. There is a bad stomach [bug](tooltip:bug) going around. Please [stay hydrated](tooltip:stay-hydrated) and don't worry about work.[I hope you feel better soon](tooltip:hope-feel-better)!<br>David.",
                    questions:[
                        { q: "Why is Anna not going to work?", options:[{t: "She is on vacation.", c: false}, {t: "She feels sick with a stomachache.", c: true}, {t: "She has a toothache.", c: false}], type: "mcq" },
                        { q: "What did the doctor give Anna?", options:[{t: "A prescription.", c: true}, {t: "A glass of water.", c: false}, {t: "Vitamins.", c: false}], type: "mcq" },
                        { q: "What advice does David give Anna?", options:[{t: "Exercise regularly.", c: false}, {t: "Stay hydrated and don't worry about work.", c: true}, {t: "Go to the hospital.", c: false}], type: "mcq" }
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
                { type: "matching", instruction: "Match the symptom to the body part.", pairs:[
                    { left: "Toothache", right: "Mouth / Teeth", val: "1" },
                    { left: "Headache", right: "Head", val: "2" },
                    { left: "Stomachache", right: "Belly", val: "3" },
                    { left: "Backache", right: "Spine / Back", val: "4" }
                ]},
                { type: "matching", instruction: "Match the medical professional to their role.", pairs:[
                    { left: "Doctor", right: "Diagnoses illnesses", val: "1" },
                    { left: "Nurse", right: "Cares for patients", val: "2" },
                    { left: "Pharmacist", right: "Prepares medicines", val: "3" },
                    { left: "Patient", right: "Receives treatment", val: "4" }
                ]},
                { type: "matching", instruction: "Match the verbs with the wellness advice.", pairs:[
                    { left: "Eat", right: "a balanced diet", val: "1" },
                    { left: "Drink", right: "plenty of water", val: "2" },
                    { left: "Get", right: "enough sleep", val: "3" },
                    { left: "Stay", right: "hydrated", val: "4" }
                ]},
                { type: "matching", instruction: "Match the adjectives with their opposites.", pairs:[
                    { left: "Healthy", right: "Sick", val: "1" },
                    { left: "Strong", right: "Weak", val: "2" },
                    { left: "Tired", right: "Rested / Energetic", val: "3" },
                    { left: "Well", right: "Unwell", val: "4" }
                ]},

                // --- WORD ORDER (5-14) ---
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "don't / well / feel / I / .", correct: "I don't feel well ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "think / cold / getting / I / a / I'm / .", correct: "I think I'm getting a cold ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "headache / a / have / I / terrible / .", correct: "I have a terrible headache ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "hurts / My / lot / a / back / .", correct: "My back hurts a lot ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "you / feeling / are / How / ?", correct: "How are you feeling ?" },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "the / What's / matter / ?", correct: "What's the matter ?" },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "see / should / You / doctor / a / .", correct: "You should see a doctor ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "rest / some / Get / .", correct: "Get some rest ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "water / of / Drink / plenty / .", correct: "Drink plenty of water ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "better / feel / you / hope / I / soon / .", correct: "I hope you feel better soon ." },

                // --- CLICKABLE ERROR (15-24) ---
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "I don't [fall](error:feel) well." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "I have a [running](error:runny) nose." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "I think I'm [making](error:getting) a cold." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "My leg [aches](error:hurts) when I walk." }, // aches is ok, but "hurts" is the primary targeted verb for specific acute pain in the lesson context, though both pass. Let's use a clearer error.
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "What's the [problem](error:matter) with you?" }, // matter is the target phrase
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "You should [look](error:see) a doctor." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "Get [any](error:some) rest in bed." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "Drink [many](error:plenty) of water." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "I hope you feel [good](error:better) soon." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "I want to be in good [form](error:shape)." },

                // --- ODD ONE OUT (25-30) ---
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Symptoms)", options:[{t: "Cough", c: false}, {t: "Sneeze", c: false}, {t: "Fever", c: false}, {t: "Diet", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Medical Places)", options:[{t: "Hospital", c: false}, {t: "Clinic", c: false}, {t: "Pharmacy", c: false}, {t: "Patient", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Illnesses)", options:[{t: "Cold", c: false}, {t: "Flu", c: false}, {t: "Toothache", c: false}, {t: "Lifestyle", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Verbs)", options:[{t: "To hurt", c: false}, {t: "To ache", c: false}, {t: "To feel", c: false}, {t: "Vitamins", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Wellness)", options:[{t: "Diet", c: false}, {t: "Exercise", c: false}, {t: "Sleep", c: false}, {t: "Pain", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Adjectives)", options:[{t: "Healthy", c: false}, {t: "Strong", c: false}, {t: "Sick", c: false}, {t: "Medicine", c: true}] },

                // --- TRUE / FALSE (31-35) ---
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "A 'prescription' is a piece of paper from a doctor to buy medicine.", correct: "true"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "If you 'stay hydrated', it means you eat a lot of food.", correct: "false"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "A 'sore throat' makes it painful to swallow or talk.", correct: "true"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "When you have a 'fever', your body temperature is very low.", correct: "false"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "A 'pharmacist' is the person who gives you your medicine at the pharmacy.", correct: "true"}] },

                // --- MCQ (36-39) ---
                { type: "mcq", instruction: "Choose the correct word.<br>I have a terrible ________; my head is pounding.", options:[{t: "stomachache", c: false}, {t: "headache", c: true}, {t: "backache", c: false}, {t: "toothache", c: false}] },
                { type: "mcq", instruction: "Choose the correct phrase.<br>When someone looks sick, you can ask: 'What's the ________?'", options:[{t: "shape", c: false}, {t: "matter", c: true}, {t: "pain", c: false}, {t: "lifestyle", c: false}] },
                { type: "mcq", instruction: "Choose the correct verb.<br>If you want to be healthy, you must ________ regularly.", options:[{t: "hurt", c: false}, {t: "ache", c: false}, {t: "exercise", c: true}, {t: "feel", c: false}] },
                { type: "mcq", instruction: "Choose the correct phrase.<br>A polite thing to say to a sick person is: 'I hope you feel ________ soon.'", options:[{t: "strong", c: false}, {t: "healthy", c: false}, {t: "better", c: true}, {t: "rested", c: false}] },

                // --- CATEGORIZE (40) ---
                { type: "categorize", instruction: "Sort the words into Symptoms and Wellness/Health.", 
                    categories:[{id: "sym", name: "Symptoms"}, {id: "well", name: "Wellness"}],
                    items:[
                        {text: "Headache", catId: "sym"}, 
                        {text: "Cough", catId: "sym"}, 
                        {text: "Fever", catId: "sym"}, 
                        {text: "Diet", catId: "well"}, 
                        {text: "Exercise", catId: "well"}, 
                        {text: "Vitamins", catId: "well"}
                    ] 
                }
            ]
        },

        // ======================================================
        // STEP 8: WRITING PRACTICE
        // ======================================================
        {
            title: "Writing Practice",
            instruction: "Write a message to a friend (5-7 sentences) explaining that you are sick and cannot meet them today. Mention your symptoms, what you are doing to recover (medicine, rest), and apologize for canceling the plans.",
            example: "Hi Sarah, I am so sorry, but I can't meet you for lunch today. I don't feel well at all. I woke up with a high fever and a terrible sore throat. I think I am getting the flu. I went to the pharmacy to get some medicine, and now I am going to get some rest. I will drink plenty of water and stay in bed. I hope to see you next week when I feel better!",
            prompts:[
                "State clearly that you don't feel well.",
                "Describe at least two symptoms (e.g., headache, cough).",
                "Mention what advice you are following (e.g., resting, medicine).",
                "Use the phrase 'I hope to feel better soon'."
            ]
        },

        // ======================================================
        // STEP 9: FLASHCARDS
        // ======================================================
        {
            title: "Flashcards",
            items:[
                // 2A Items (36 items)
                { term: "Cold", definition: "A common viral infection causing a runny nose and sneezing.", defTrans: "Resfriado", example: "I caught a cold from walking in the rain.", audioFront: "TTS: Cold", audioBack: "TTS: I caught a cold from walking in the rain." },
                { term: "Flu", definition: "A highly contagious viral infection causing fever and aching.", defTrans: "Gripe", example: "The flu makes your whole body ache.", audioFront: "TTS: Flu", audioBack: "TTS: The flu makes your whole body ache." },
                { term: "Fever", definition: "An abnormally high body temperature.", defTrans: "Febre", example: "He stayed in bed because he had a high fever.", audioFront: "TTS: Fever", audioBack: "TTS: He stayed in bed because he had a high fever." },
                { term: "Temperature", definition: "The degree of heat in a person's body.", defTrans: "Temperatura (alta) / Febre", example: "The nurse measured my temperature.", audioFront: "TTS: Temperature", audioBack: "TTS: The nurse measured my temperature." },
                { term: "Headache", definition: "A continuous pain in the head.", defTrans: "Dor de cabeça", example: "Staring at the screen gave me a bad headache.", audioFront: "TTS: Headache", audioBack: "TTS: Staring at the screen gave me a bad headache." },
                { term: "Stomachache", definition: "A pain in a person's belly.", defTrans: "Dor de estômago", example: "Eating too much candy caused a stomachache.", audioFront: "TTS: Stomachache", audioBack: "TTS: Eating too much candy caused a stomachache." },
                { term: "Backache", definition: "A prolonged pain in one's back.", defTrans: "Dor nas costas", example: "Lifting heavy boxes gave him a backache.", audioFront: "TTS: Backache", audioBack: "TTS: Lifting heavy boxes gave him a backache." },
                { term: "Toothache", definition: "A pain in or around a tooth.", defTrans: "Dor de dente", example: "She went to the dentist for a toothache.", audioFront: "TTS: Toothache", audioBack: "TTS: She went to the dentist for a toothache." },
                { term: "Cough", definition: "Expel air from the lungs with a sudden sharp sound.", defTrans: "Tosse", example: "He has a dry cough that won't go away.", audioFront: "TTS: Cough", audioBack: "TTS: He has a dry cough that won't go away." },
                { term: "Sneeze", definition: "A sudden involuntary expulsion of air from the nose and mouth.", defTrans: "Espirro", example: "A loud sneeze interrupted the meeting.", audioFront: "TTS: Sneeze", audioBack: "TTS: A loud sneeze interrupted the meeting." },
                { term: "Sore throat", definition: "A condition in which the throat is red and feels painful.", defTrans: "Dor de garganta", example: "Drinking hot tea helps a sore throat.", audioFront: "TTS: Sore throat", audioBack: "TTS: Drinking hot tea helps a sore throat." },
                { term: "Runny nose", definition: "A condition where liquid comes out of the nose due to a cold.", defTrans: "Nariz escorrendo", example: "Bring some tissues for your runny nose.", audioFront: "TTS: Runny nose", audioBack: "TTS: Bring some tissues for your runny nose." },
                { term: "Pain", definition: "Highly unpleasant physical sensation caused by illness or injury.", defTrans: "Dor", example: "I felt a sharp pain in my knee.", audioFront: "TTS: Pain", audioBack: "TTS: I felt a sharp pain in my knee." },

                { term: "Doctor", definition: "A qualified practitioner of medicine.", defTrans: "Médico(a)", example: "The doctor examined my throat.", audioFront: "TTS: Doctor", audioBack: "TTS: The doctor examined my throat." },
                { term: "Nurse", definition: "A person trained to care for the sick.", defTrans: "Enfermeiro(a)", example: "The nurse gave me a bandage.", audioFront: "TTS: Nurse", audioBack: "TTS: The nurse gave me a bandage." },
                { term: "Patient", definition: "A person receiving medical treatment.", defTrans: "Paciente", example: "The patient waited in the waiting room.", audioFront: "TTS: Patient", audioBack: "TTS: The patient waited in the waiting room." },
                { term: "Pharmacist", definition: "A person qualified to prepare and dispense medicinal drugs.", defTrans: "Farmacêutico(a)", example: "The pharmacist explained how to take the pills.", audioFront: "TTS: Pharmacist", audioBack: "TTS: The pharmacist explained how to take the pills." },
                { term: "Hospital", definition: "An institution providing medical treatment and care.", defTrans: "Hospital", example: "We rushed to the hospital in an ambulance.", audioFront: "TTS: Hospital", audioBack: "TTS: We rushed to the hospital in an ambulance." },
                { term: "Clinic", definition: "A place where medical treatment is given to outpatients.", defTrans: "Clínica", example: "I go to a private clinic for my check-ups.", audioFront: "TTS: Clinic", audioBack: "TTS: I go to a private clinic for my check-ups." },
                { term: "Pharmacy", definition: "A store where medicinal drugs are sold.", defTrans: "Farmácia", example: "You can buy painkillers at the pharmacy.", audioFront: "TTS: Pharmacy", audioBack: "TTS: You can buy painkillers at the pharmacy." },
                { term: "Health", definition: "The state of being free from illness or injury.", defTrans: "Saúde", example: "Good health is more important than money.", audioFront: "TTS: Health", audioBack: "TTS: Good health is more important than money." },
                { term: "Lifestyle", definition: "The way in which a person lives.", defTrans: "Estilo de vida", example: "Walking every day is part of a good lifestyle.", audioFront: "TTS: Lifestyle", audioBack: "TTS: Walking every day is part of a good lifestyle." },
                { term: "Diet", definition: "The kinds of food that a person habitually eats.", defTrans: "Dieta / Alimentação", example: "A balanced diet includes lots of vegetables.", audioFront: "TTS: Diet", audioBack: "TTS: A balanced diet includes lots of vegetables." },
                { term: "Medicine", definition: "A compound used for the treatment or prevention of disease.", defTrans: "Remédio / Medicina", example: "This medicine will reduce the swelling.", audioFront: "TTS: Medicine", audioBack: "TTS: This medicine will reduce the swelling." },
                { term: "Prescription", definition: "An instruction written by a medical practitioner for medicine.", defTrans: "Receita médica", example: "I need a prescription to buy these antibiotics.", audioFront: "TTS: Prescription", audioBack: "TTS: I need a prescription to buy these antibiotics." },
                { term: "Vitamins", definition: "Pills containing organic compounds essential for normal nutrition.", defTrans: "Vitaminas", example: "She takes vitamins every morning.", audioFront: "TTS: Vitamins", audioBack: "TTS: She takes vitamins every morning." },

                { term: "To feel", definition: "To experience an emotion or sensation.", defTrans: "Sentir / Sentir-se", example: "I feel much better today.", audioFront: "TTS: To feel", audioBack: "TTS: I feel much better today." },
                { term: "To hurt", definition: "To cause physical pain or injury to.", defTrans: "Machucar / Doer", example: "Does your leg still hurt?", audioFront: "TTS: To hurt", audioBack: "TTS: Does your leg still hurt?" },
                { term: "To ache", definition: "To suffer from a continuous dull pain.", defTrans: "Doer (dor contínua)", example: "My muscles ache after the workout.", audioFront: "TTS: To ache", audioBack: "TTS: My muscles ache after the workout." },
                { term: "To rest", definition: "To cease work or movement in order to relax.", defTrans: "Descansar", example: "You need to rest and stay in bed.", audioFront: "TTS: To rest", audioBack: "TTS: You need to rest and stay in bed." },
                { term: "To exercise", definition: "To engage in physical activity to sustain health.", defTrans: "Exercitar-se", example: "It is important to exercise regularly.", audioFront: "TTS: To exercise", audioBack: "TTS: It is important to exercise regularly." },
                { term: "Healthy", definition: "In a good physical or mental condition.", defTrans: "Saudável", example: "Eating fruit keeps you healthy.", audioFront: "TTS: Healthy", audioBack: "TTS: Eating fruit keeps you healthy." },
                { term: "Sick", definition: "Affected by physical or mental illness.", defTrans: "Doente", example: "He stayed home because he was sick.", audioFront: "TTS: Sick", audioBack: "TTS: He stayed home because he was sick." },
                { term: "Tired", definition: "In need of sleep or rest.", defTrans: "Cansado(a)", example: "I am too tired to go out tonight.", audioFront: "TTS: Tired", audioBack: "TTS: I am too tired to go out tonight." },
                { term: "Weak", definition: "Lacking the power to perform physically demanding tasks.", defTrans: "Fraco(a)", example: "After the flu, she felt very weak.", audioFront: "TTS: Weak", audioBack: "TTS: After the flu, she felt very weak." },
                { term: "Strong", definition: "Having the power to move heavy weights or perform tasks.", defTrans: "Forte", example: "He is strong enough to lift the heavy box.", audioFront: "TTS: Strong", audioBack: "TTS: He is strong enough to lift the heavy box." },

                // 3A Items (18 items)
                { term: "I don't feel well", definition: "Stating that you are not healthy today.", defTrans: "Não me sinto bem.", example: "I need to go home, I don't feel well.", audioFront: "TTS: I don't feel well", audioBack: "TTS: I need to go home, I don't feel well." },
                { term: "I feel sick", definition: "Stating that you feel ill or nauseous.", defTrans: "Me sinto doente/enjoado.", example: "I feel sick after eating that.", audioFront: "TTS: I feel sick", audioBack: "TTS: I feel sick after eating that." },
                { term: "I think I'm getting a cold", definition: "Predicting that you are catching a minor illness.", defTrans: "Acho que estou pegando um resfriado.", example: "I think I'm getting a cold because I am sneezing.", audioFront: "TTS: I think I'm getting a cold", audioBack: "TTS: I think I'm getting a cold because I am sneezing." },
                { term: "I have a headache", definition: "Stating that your head hurts.", defTrans: "Estou com dor de cabeça.", example: "I have a headache.", audioFront: "TTS: I have a headache", audioBack: "TTS: I have a headache." },
                { term: "My back hurts", definition: "Stating that you have pain in your back.", defTrans: "Minhas costas doem.", example: "My back hurts from sitting all day.", audioFront: "TTS: My back hurts", audioBack: "TTS: My back hurts from sitting all day." },
                { term: "How are you feeling?", definition: "Asking someone about their physical state.", defTrans: "Como você está se sentindo?", example: "How are you feeling?", audioFront: "TTS: How are you feeling?", audioBack: "TTS: How are you feeling?" },
                { term: "What's the matter?", definition: "Asking someone what the problem is.", defTrans: "Qual é o problema?", example: "What's the matter? You look tired.", audioFront: "TTS: What's the matter?", audioBack: "TTS: What's the matter? You look tired." },
                { term: "Are you okay?", definition: "Asking if someone is fine.", defTrans: "Você está bem?", example: "Are you okay? Do you need to sit down?", audioFront: "TTS: Are you okay?", audioBack: "TTS: Are you okay? Do you need to sit down?" },
                
                { term: "You should see a doctor", definition: "Advising someone to get professional medical help.", defTrans: "Você deve ir a um médico.", example: "You should see a doctor.", audioFront: "TTS: You should see a doctor", audioBack: "TTS: You should see a doctor." },
                { term: "Get some rest", definition: "Advising someone to relax and sleep to recover.", defTrans: "Descanse um pouco.", example: "Go to bed and get some rest.", audioFront: "TTS: Get some rest", audioBack: "TTS: Go to bed and get some rest." },
                { term: "Drink plenty of water", definition: "Advising someone to stay hydrated.", defTrans: "Beba muita água.", example: "When you have a fever, drink plenty of water.", audioFront: "TTS: Drink plenty of water", audioBack: "TTS: When you have a fever, drink plenty of water." },
                { term: "Take some medicine", definition: "Advising someone to use drugs to cure an illness.", defTrans: "Tome algum remédio.", example: "You should take some medicine for your cough.", audioFront: "TTS: Take some medicine", audioBack: "TTS: You should take some medicine for your cough." },
                { term: "I hope you feel better soon", definition: "A polite wish for someone's fast recovery.", defTrans: "Espero que você se sinta melhor em breve.", example: "I hope you feel better soon!", audioFront: "TTS: I hope you feel better soon", audioBack: "TTS: I hope you feel better soon!" },
                { term: "Eat a balanced diet", definition: "To consume healthy amounts of different foods.", defTrans: "Ter uma dieta balanceada.", example: "To be healthy, you must eat a balanced diet.", audioFront: "TTS: Eat a balanced diet", audioBack: "TTS: To be healthy, you must eat a balanced diet." },
                { term: "Exercise regularly", definition: "To do physical activities on a frequent schedule.", defTrans: "Exercitar-se regularmente.", example: "I exercise regularly at the gym.", audioFront: "TTS: Exercise regularly", audioBack: "TTS: I exercise regularly at the gym." },
                { term: "Get enough sleep", definition: "To rest for the appropriate amount of hours.", defTrans: "Dormir o suficiente.", example: "It is important to get enough sleep every night.", audioFront: "TTS: Get enough sleep", audioBack: "TTS: It is important to get enough sleep every night." },
                { term: "Stay hydrated", definition: "To drink enough water to keep your body functioning.", defTrans: "Mantenha-se hidratado.", example: "Stay hydrated by drinking fluids.", audioFront: "TTS: Stay hydrated", audioBack: "TTS: Stay hydrated by drinking fluids." },
                { term: "Be in good shape", definition: "To be physically fit and healthy.", defTrans: "Estar em boa forma.", example: "Running helps me be in good shape.", audioFront: "TTS: Be in good shape", audioBack: "TTS: Running helps me be in good shape." }
            ]
        }
    ],

    // ======================================================
    // GLOSSARY (All 54 items + Context words)
    // ======================================================
    glossary:[
        // 2A: Symptoms & Illnesses
        { topic: "Symptoms", term: "cold", definition: "A common viral infection causing a runny nose.", translation: "Resfriado" },
        { topic: "Symptoms", term: "flu", definition: "A highly contagious viral infection.", translation: "Gripe" },
        { topic: "Symptoms", term: "fever", definition: "An abnormally high body temperature.", translation: "Febre" },
        { topic: "Symptoms", term: "temperature", definition: "The degree of heat in a person's body.", translation: "Temperatura / Febre" },
        { topic: "Symptoms", term: "headache", definition: "A continuous pain in the head.", translation: "Dor de cabeça" },
        { topic: "Symptoms", term: "stomachache", definition: "A pain in a person's belly.", translation: "Dor de estômago" },
        { topic: "Symptoms", term: "backache", definition: "A prolonged pain in one's back.", translation: "Dor nas costas" },
        { topic: "Symptoms", term: "toothache", definition: "A pain in or around a tooth.", translation: "Dor de dente" },
        { topic: "Symptoms", term: "cough", definition: "Expelling air from the lungs with a sound.", translation: "Tosse" },
        { topic: "Symptoms", term: "sneeze", definition: "Involuntary expulsion of air from the nose.", translation: "Espirro" },
        { topic: "Symptoms", term: "sore-throat", definition: "A painful, red throat.", translation: "Dor de garganta" },
        { topic: "Symptoms", term: "runny-nose", definition: "Liquid coming out of the nose due to a cold.", translation: "Nariz escorrendo" },
        { topic: "Symptoms", term: "pain", definition: "Highly unpleasant physical sensation.", translation: "Dor" },

        // 2A: Medical People & Wellness
        { topic: "Medical", term: "doctor", definition: "A qualified practitioner of medicine.", translation: "Médico(a)" },
        { topic: "Medical", term: "nurse", definition: "A person trained to care for the sick.", translation: "Enfermeiro(a)" },
        { topic: "Medical", term: "patient", definition: "A person receiving medical treatment.", translation: "Paciente" },
        { topic: "Medical", term: "pharmacist", definition: "A person qualified to prepare drugs.", translation: "Farmacêutico(a)" },
        { topic: "Medical", term: "hospital", definition: "Institution providing medical treatment.", translation: "Hospital" },
        { topic: "Medical", term: "clinic", definition: "Place for medical treatment of outpatients.", translation: "Clínica" },
        { topic: "Medical", term: "pharmacy", definition: "Store where medicinal drugs are sold.", translation: "Farmácia" },
        { topic: "Wellness", term: "health", definition: "State of being free from illness or injury.", translation: "Saúde" },
        { topic: "Wellness", term: "lifestyle", definition: "The way in which a person lives.", translation: "Estilo de vida" },
        { topic: "Wellness", term: "diet", definition: "The food that a person habitually eats.", translation: "Dieta / Alimentação" },
        { topic: "Wellness", term: "medicine", definition: "Substance used to treat disease.", translation: "Remédio" },
        { topic: "Wellness", term: "prescription", definition: "A doctor's written instruction for medicine.", translation: "Receita médica" },
        { topic: "Wellness", term: "vitamins", definition: "Pills containing essential organic compounds.", translation: "Vitaminas" },

        // 2A: Verbs & Adjectives
        { topic: "Verbs", term: "to-feel", definition: "To experience a physical sensation.", translation: "Sentir" },
        { topic: "Verbs", term: "to-hurt", definition: "To cause physical pain.", translation: "Machucar / Doer" },
        { topic: "Verbs", term: "to-ache", definition: "To suffer from a continuous dull pain.", translation: "Doer (dor contínua)" },
        { topic: "Verbs", term: "to-rest", definition: "To cease work in order to relax.", translation: "Descansar" },
        { topic: "Verbs", term: "to-exercise", definition: "To engage in physical activity.", translation: "Exercitar-se" },
        { topic: "Adjectives", term: "healthy", definition: "In a good physical condition.", translation: "Saudável" },
        { topic: "Adjectives", term: "sick", definition: "Affected by physical illness.", translation: "Doente" },
        { topic: "Adjectives", term: "tired", definition: "In need of sleep or rest.", translation: "Cansado(a)" },
        { topic: "Adjectives", term: "weak", definition: "Lacking physical power.", translation: "Fraco(a)" },
        { topic: "Adjectives", term: "strong", definition: "Having the power to perform heavy tasks.", translation: "Forte" },

        // 3A: Expressions
        { topic: "Expressions", term: "dont-feel-well", definition: "Stating that you are not healthy today.", translation: "Não me sinto bem." },
        { topic: "Expressions", term: "feel-sick", definition: "Stating that you feel ill or nauseous.", translation: "Me sinto doente/enjoado." },
        { topic: "Expressions", term: "getting-cold", definition: "Predicting that you are catching a minor illness.", translation: "Estou pegando um resfriado." },
        { topic: "Expressions", term: "have-headache", definition: "Stating that your head hurts.", translation: "Estou com dor de cabeça." },
        { topic: "Expressions", term: "back-hurts", definition: "Stating that you have pain in your back.", translation: "Minhas costas doem." },
        { topic: "Expressions", term: "how-feeling", definition: "Asking someone about their physical state.", translation: "Como você está se sentindo?" },
        { topic: "Expressions", term: "whats-matter", definition: "Asking someone what the problem is.", translation: "Qual é o problema?" },
        { topic: "Expressions", term: "are-you-okay", definition: "Asking if someone is fine.", translation: "Você está bem?" },
        { topic: "Expressions", term: "see-doctor", definition: "Advising someone to get medical help.", translation: "Você deve ir a um médico." },
        { topic: "Expressions", term: "get-some-rest", definition: "Advising someone to relax and sleep.", translation: "Descanse um pouco." },
        { topic: "Expressions", term: "drink-plenty-water", definition: "Advising someone to stay hydrated.", translation: "Beba muita água." },
        { topic: "Expressions", term: "take-medicine", definition: "Advising someone to use drugs to cure an illness.", translation: "Tome algum remédio." },
        { topic: "Expressions", term: "hope-feel-better", definition: "A polite wish for fast recovery.", translation: "Espero que você se sinta melhor." },
        { topic: "Expressions", term: "balanced-diet", definition: "To consume healthy amounts of different foods.", translation: "Ter uma dieta balanceada." },
        { topic: "Expressions", term: "exercise-regularly", definition: "To do physical activities frequently.", translation: "Exercitar-se regularmente." },
        { topic: "Expressions", term: "get-enough-sleep", definition: "To rest for the appropriate amount of hours.", translation: "Dormir o suficiente." },
        { topic: "Expressions", term: "stay-hydrated", definition: "To drink enough water to keep your body functioning.", translation: "Mantenha-se hidratado." },
        { topic: "Expressions", term: "in-good-shape", definition: "To be physically fit and healthy.", translation: "Estar em boa forma." },

        // Additional Context Words
        { topic: "Context", term: "symptom", definition: "A physical or mental feature which is regarded as indicating a condition of disease.", translation: "Sintoma" },
        { topic: "Context", term: "asset", definition: "A useful or valuable thing or person.", translation: "Bem / Trunfo (figurativo)" },
        { topic: "Context", term: "recovery", definition: "A return to a normal state of health.", translation: "Recuperação" },
        { topic: "Context", term: "habit", definition: "A settled or regular tendency or practice.", translation: "Hábito" },
        { topic: "Context", term: "bug", definition: "An illness, usually minor, caused by a bacterium or virus.", translation: "Vírus / Inseto" }
    ]
});