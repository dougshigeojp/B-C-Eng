/**
 * English Block Assembling - LESSON DATA: Topic 16
 * Topic: Feelings and Emotions
 * Level: Upper A2 ~ Lower B1
 */

window.initLesson({
    // --- METADATA ---
    lessonId: "lesson-16",
    block: "3",
    topicTitle: "Feelings and Emotions",

    steps:[
        // ======================================================
        // STEP 0: INTRO & CAN-DO
        // ======================================================
        {
            title: "Intro & Can-Do",
            objectives: "• Describe personal[feelings](tooltip:feeling) and express a range of [emotions](tooltip:emotion).<br>• Ask others how they feel in various situations.<br>• Share positive news and describe a good [mood](tooltip:mood).<br>• Comfort someone who is [upset](tooltip:upset) and show empathy.",
            welcome: "Welcome to Lesson 16! Emotions are a universal part of the human experience. In this lesson, we will focus on the vocabulary you need to talk about how you feel inside, whether you are thrilled and happy, or stressed and exhausted. You will also learn polite and empathetic phrases to react when friends share their good or bad news. Let's get started!",
            audio: {
                objectives: "TTS: In this lesson, you will learn to: Describe personal feelings and express a range of emotions. Ask others how they feel in various situations. Share positive news and describe a good mood. Comfort someone who is upset and show empathy.",
                welcome: "TTS: Welcome to Lesson 16! Emotions are a universal part of the human experience. In this lesson, we will focus on the vocabulary you need to talk about how you feel inside, whether you are thrilled and happy, or stressed and exhausted. You will also learn polite and empathetic phrases to react when friends share their good or bad news. Let's get started!"
            }
        },

        // ======================================================
        // STEP 1: CONTEXT DIALOGUE
        // ======================================================
        {
            title: "Context Dialogue",
            context: "Emma meets Liam at the office. She notices that he doesn't look as cheerful as usual.",
            contextAudio: "TTS: Emma: Good morning, Liam. Are you alright? You seem a little sad today. Liam: Hi, Emma. To be honest, I'm feeling a bit down. Emma: What's the matter? Is everything okay? Liam: I'm worried about my exam results, and I'm stressed out because of this new project at work. Emma: I'm sorry to hear that. I understand how you feel. I was very anxious last month, too. Liam: It's just too much right now. I feel exhausted. Emma: Don't worry, everything will be fine. You always get great grades. Liam: Thanks, Emma. I just need to relax. Actually, I'm looking forward to the weekend so I can rest.",
            dialogue:[
                { speaker: "Emma", text: "Good morning, Liam. [Are you alright](tooltip:are-you-alright)? [You seem a little sad](tooltip:you-seem-sad) today." },
                { speaker: "Liam", text: "Hi, Emma. To be honest,[I'm feeling a bit down](tooltip:feeling-down)." },
                { speaker: "Emma", text: "[What's the matter](tooltip:whats-matter)? [Is everything okay](tooltip:is-everything-okay)?" },
                { speaker: "Liam", text: "[I'm worried about my exam](tooltip:worried-about-exam) results, and [I'm stressed out](tooltip:stressed-out) because of this new project at work." },
                { speaker: "Emma", text: "[I'm sorry to hear that](tooltip:sorry-to-hear). [I understand how you feel](tooltip:understand-how-feel). I was very [anxious](tooltip:anxious) last month, too." },
                { speaker: "Liam", text: "It's just too much right now. I feel [exhausted](tooltip:exhausted)." },
                { speaker: "Emma", text: "[Don't worry](tooltip:dont-worry), [everything will be fine](tooltip:everything-will-be-fine). You always get great grades." },
                { speaker: "Liam", text: "Thanks, Emma. I just need to [relax](tooltip:relaxed). Actually, [I'm looking forward to the weekend](tooltip:looking-forward) so I can rest." }
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
                    title: "Nouns & Verbs",
                    audio: "TTS: Feeling. Emotion. Mood. Happiness. Sadness. Anger. Fear. To feel. To smile. To laugh. To cry. To worry.",
                    items:[
                        { term: "Feeling", trans: "Sentimento" },
                        { term: "Emotion", trans: "Emoção" },
                        { term: "Mood", trans: "Humor / Estado de espírito" },
                        { term: "Happiness", trans: "Felicidade" },
                        { term: "Sadness", trans: "Tristeza" },
                        { term: "Anger", trans: "Raiva" },
                        { term: "Fear", trans: "Medo" },
                        { term: "To feel", trans: "Sentir / Sentir-se" },
                        { term: "To smile", trans: "Sorrir" },
                        { term: "To laugh", trans: "Rir" },
                        { term: "To cry", trans: "Chorar" },
                        { term: "To worry", trans: "Preocupar-se" }
                    ]
                },
                {
                    title: "Positive Adjectives",
                    audio: "TTS: Happy. Glad. Delighted. Excited. Thrilled. Proud. Calm. Relaxed. Confident. Surprised. Amazed. Wonderful.",
                    items:[
                        { term: "Happy", trans: "Feliz" },
                        { term: "Glad", trans: "Contente / Alegre" },
                        { term: "Delighted", trans: "Encantado(a) / Muito satisfeito(a)" },
                        { term: "Excited", trans: "Animado(a) / Empolgado(a)" },
                        { term: "Thrilled", trans: "Entusiasmado(a) / Maravilhado(a)" },
                        { term: "Proud", trans: "Orgulhoso(a)" },
                        { term: "Calm", trans: "Calmo(a)" },
                        { term: "Relaxed", trans: "Relaxado(a)" },
                        { term: "Confident", trans: "Confiante" },
                        { term: "Surprised", trans: "Surpreso(a)" },
                        { term: "Amazed", trans: "Maravilhado(a) / Espantado(a)" },
                        { term: "Wonderful", trans: "Maravilhoso(a)" }
                    ]
                },
                {
                    title: "Negative Adjectives",
                    audio: "TTS: Sad. Upset. Miserable. Angry. Furious. Worried. Nervous. Anxious. Exhausted. Scared. Confused. Embarrassed.",
                    items:[
                        { term: "Sad", trans: "Triste" },
                        { term: "Upset", trans: "Chateado(a) / Aborrecido(a)" },
                        { term: "Miserable", trans: "Miserável / Muito triste" },
                        { term: "Angry", trans: "Irritado(a) / Zangado(a)" },
                        { term: "Furious", trans: "Furioso(a)" },
                        { term: "Worried", trans: "Preocupado(a)" },
                        { term: "Nervous", trans: "Nervoso(a)" },
                        { term: "Anxious", trans: "Ansioso(a)" },
                        { term: "Exhausted", trans: "Exausto(a) / Esgotado(a)" },
                        { term: "Scared", trans: "Assustado(a) / Com medo" },
                        { term: "Confused", trans: "Confuso(a)" },
                        { term: "Embarrassed", trans: "Envergonhado(a) / Constrangido(a)" }
                    ]
                }
            ],

            // --- 2B: EXAMPLES ---
            exampleGroups:[
                {
                    title: "Nouns & Verbs",
                    audio: "TTS: Love is a very strong feeling. Fear is a natural human emotion. I am in a good mood today. Her smile brought happiness to the room. The movie ended in sadness. He could not hide his anger. The loud noise caused a lot of fear. I feel much better after sleeping. She likes to smile at everyone she meets. The joke made us all laugh. The sad news made him cry. Don't worry about the small things.",
                    items:[
                        { term: "Feeling", sent: "Love is a very strong feeling.", trans: "O amor é um sentimento muito forte." },
                        { term: "Emotion", sent: "Fear is a natural human emotion.", trans: "O medo é uma emoção humana natural." },
                        { term: "Mood", sent: "I am in a good mood today.", trans: "Estou de bom humor hoje." },
                        { term: "Happiness", sent: "Her smile brought happiness to the room.", trans: "O sorriso dela trouxe felicidade à sala." },
                        { term: "Sadness", sent: "The movie ended in sadness.", trans: "O filme terminou em tristeza." },
                        { term: "Anger", sent: "He could not hide his anger.", trans: "Ele não conseguiu esconder sua raiva." },
                        { term: "Fear", sent: "The loud noise caused a lot of fear.", trans: "O barulho alto causou muito medo." },
                        { term: "To feel", sent: "I feel much better after sleeping.", trans: "Eu me sinto muito melhor depois de dormir." },
                        { term: "To smile", sent: "She likes to smile at everyone she meets.", trans: "Ela gosta de sorrir para todos que encontra." },
                        { term: "To laugh", sent: "The joke made us all laugh.", trans: "A piada nos fez rir." },
                        { term: "To cry", sent: "The sad news made him cry.", trans: "A notícia triste o fez chorar." },
                        { term: "To worry", sent: "Don't worry about the small things.", trans: "Não se preocupe com as coisas pequenas." }
                    ]
                },
                {
                    title: "Positive Adjectives",
                    audio: "TTS: I am so happy to see you. I am glad you could come to the party. We are delighted with the new house. The kids are excited about the trip. I was thrilled when I won the prize. She is proud of her son for graduating. Keep calm and take a deep breath. I feel relaxed after a hot bath. He is very confident about the interview. I was surprised by the sudden rain. We were amazed by the beautiful view. That is a wonderful idea!",
                    items:[
                        { term: "Happy", sent: "I am so happy to see you.", trans: "Estou tão feliz em ver você." },
                        { term: "Glad", sent: "I am glad you could come to the party.", trans: "Estou contente que você pôde vir à festa." },
                        { term: "Delighted", sent: "We are delighted with the new house.", trans: "Estamos encantados (muito satisfeitos) com a casa nova." },
                        { term: "Excited", sent: "The kids are excited about the trip.", trans: "As crianças estão animadas com a viagem." },
                        { term: "Thrilled", sent: "I was thrilled when I won the prize.", trans: "Fiquei maravilhado(a) quando ganhei o prêmio." },
                        { term: "Proud", sent: "She is proud of her son for graduating.", trans: "Ela está orgulhosa do filho por se formar." },
                        { term: "Calm", sent: "Keep calm and take a deep breath.", trans: "Mantenha-se calmo(a) e respire fundo." },
                        { term: "Relaxed", sent: "I feel relaxed after a hot bath.", trans: "Me sinto relaxado(a) depois de um banho quente." },
                        { term: "Confident", sent: "He is very confident about the interview.", trans: "Ele está muito confiante sobre a entrevista." },
                        { term: "Surprised", sent: "I was surprised by the sudden rain.", trans: "Fiquei surpreso(a) com a chuva repentina." },
                        { term: "Amazed", sent: "We were amazed by the beautiful view.", trans: "Ficamos maravilhados com a bela vista." },
                        { term: "Wonderful", sent: "That is a wonderful idea!", trans: "Essa é uma ideia maravilhosa!" }
                    ]
                },
                {
                    title: "Negative Adjectives",
                    audio: "TTS: The ending of the book made me sad. He is upset because he lost his wallet. She felt miserable when she caught the flu. Why are you so angry with me? The boss was furious about the mistake. I am worried about my sick dog. I always get nervous before a test. Waiting for the email made her anxious. I worked all day and now I am exhausted. The little boy is scared of the dark. The instructions were not clear, so I was confused. He felt embarrassed when he forgot her name.",
                    items:[
                        { term: "Sad", sent: "The ending of the book made me sad.", trans: "O final do livro me deixou triste." },
                        { term: "Upset", sent: "He is upset because he lost his wallet.", trans: "Ele está chateado porque perdeu a carteira." },
                        { term: "Miserable", sent: "She felt miserable when she caught the flu.", trans: "Ela se sentiu miserável (muito triste/mal) quando pegou gripe." },
                        { term: "Angry", sent: "Why are you so angry with me?", trans: "Por que você está tão zangado(a) comigo?" },
                        { term: "Furious", sent: "The boss was furious about the mistake.", trans: "O chefe ficou furioso com o erro." },
                        { term: "Worried", sent: "I am worried about my sick dog.", trans: "Estou preocupado(a) com meu cachorro doente." },
                        { term: "Nervous", sent: "I always get nervous before a test.", trans: "Sempre fico nervoso(a) antes de uma prova." },
                        { term: "Anxious", sent: "Waiting for the email made her anxious.", trans: "Esperar pelo e-mail a deixou ansiosa." },
                        { term: "Exhausted", sent: "I worked all day and now I am exhausted.", trans: "Trabalhei o dia todo e agora estou exausto(a)." },
                        { term: "Scared", sent: "The little boy is scared of the dark.", trans: "O garotinho tem medo do escuro." },
                        { term: "Confused", sent: "The instructions were not clear, so I was confused.", trans: "As instruções não foram claras, então fiquei confuso(a)." },
                        { term: "Embarrassed", sent: "He felt embarrassed when he forgot her name.", trans: "Ele se sentiu envergonhado quando esqueceu o nome dela." }
                    ]
                }
            ],

            // --- 2C: PRACTICE ---
            drillGroups:[
                {
                    title: "Nouns & Verbs",
                    drills:[
                        { q: "An emotional state or reaction is a ________.", options:[{t: "Feeling", c: true}, {t: "Smile", c: false}, {t: "To worry", c: false}, {t: "Happiness", c: false}], type: "mcq" },
                        { q: "A strong feeling such as love or anger is an ________.", options:[{t: "Fear", c: false}, {t: "Emotion", c: true}, {t: "To laugh", c: false}, {t: "Mood", c: false}], type: "mcq" },
                        { q: "A temporary state of mind or feeling is your ________.", options:[{t: "To cry", c: false}, {t: "Mood", c: true}, {t: "Sadness", c: false}, {t: "Feeling", c: false}], type: "mcq" },
                        { q: "The state of being joyful and content is ________.", options:[{t: "Sadness", c: false}, {t: "Anger", c: false}, {t: "Happiness", c: true}, {t: "Fear", c: false}], type: "mcq" },
                        { q: "The condition of experiencing sorrow is ________.", options:[{t: "Sadness", c: true}, {t: "Happiness", c: false}, {t: "To smile", c: false}, {t: "Mood", c: false}], type: "mcq" },
                        { q: "A strong feeling of annoyance or displeasure is ________.", options:[{t: "Fear", c: false}, {t: "Feeling", c: false}, {t: "Anger", c: true}, {t: "To laugh", c: false}], type: "mcq" },
                        { q: "An unpleasant emotion caused by the threat of danger is ________.", options:[{t: "Fear", c: true}, {t: "Happiness", c: false}, {t: "Anger", c: false}, {t: "To feel", c: false}], type: "mcq" },
                        { q: "To experience an emotion or sensation is ________.", options:[{t: "To feel", c: true}, {t: "To cry", c: false}, {t: "To laugh", c: false}, {t: "To worry", c: false}], type: "mcq" },
                        { q: "To form one's features into a pleased expression is ________.", options:[{t: "To cry", c: false}, {t: "To smile", c: true}, {t: "To worry", c: false}, {t: "To laugh", c: false}], type: "mcq" },
                        { q: "To make spontaneous sounds and movements of amusement is ________.", options:[{t: "To worry", c: false}, {t: "To laugh", c: true}, {t: "To cry", c: false}, {t: "To feel", c: false}], type: "mcq" },
                        { q: "To shed tears, typically as an expression of distress, is ________.", options:[{t: "To cry", c: true}, {t: "To smile", c: false}, {t: "To laugh", c: false}, {t: "To feel", c: false}], type: "mcq" },
                        { q: "To feel anxious or troubled about potential problems is ________.", options:[{t: "To smile", c: false}, {t: "To feel", c: false}, {t: "To worry", c: true}, {t: "To laugh", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Positive Adjectives",
                    drills:[
                        { q: "Feeling or showing pleasure or contentment is ________.", options:[{t: "Happy", c: true}, {t: "Calm", c: false}, {t: "Amazed", c: false}, {t: "Proud", c: false}], type: "mcq" },
                        { q: "Feeling pleasure or happiness (often used to say 'I'm ____ to help') is ________.", options:[{t: "Surprised", c: false}, {t: "Glad", c: true}, {t: "Relaxed", c: false}, {t: "Confident", c: false}], type: "mcq" },
                        { q: "Feeling or showing great pleasure and satisfaction is ________.", options:[{t: "Delighted", c: true}, {t: "Calm", c: false}, {t: "Wonderful", c: false}, {t: "Amazed", c: false}], type: "mcq" },
                        { q: "Very enthusiastic and eager about something is ________.", options:[{t: "Excited", c: true}, {t: "Relaxed", c: false}, {t: "Calm", c: false}, {t: "Confident", c: false}], type: "mcq" },
                        { q: "Extremely pleased and excited (a stronger word for happy) is ________.", options:[{t: "Thrilled", c: true}, {t: "Surprised", c: false}, {t: "Glad", c: false}, {t: "Calm", c: false}], type: "mcq" },
                        { q: "Feeling deep pleasure from one's own achievements is ________.", options:[{t: "Proud", c: true}, {t: "Delighted", c: false}, {t: "Amazed", c: false}, {t: "Relaxed", c: false}], type: "mcq" },
                        { q: "Not showing or feeling nervousness, anger, or strong emotions is ________.", options:[{t: "Calm", c: true}, {t: "Excited", c: false}, {t: "Thrilled", c: false}, {t: "Surprised", c: false}], type: "mcq" },
                        { q: "Free from tension and anxiety is ________.", options:[{t: "Relaxed", c: true}, {t: "Excited", c: false}, {t: "Proud", c: false}, {t: "Glad", c: false}], type: "mcq" },
                        { q: "Feeling certain about yourself or your abilities is ________.", options:[{t: "Surprised", c: false}, {t: "Confident", c: true}, {t: "Delighted", c: false}, {t: "Amazed", c: false}], type: "mcq" },
                        { q: "Feeling mild astonishment or shock caused by something unexpected is ________.", options:[{t: "Glad", c: false}, {t: "Calm", c: false}, {t: "Surprised", c: true}, {t: "Proud", c: false}], type: "mcq" },
                        { q: "Greatly surprised; astounded is ________.", options:[{t: "Amazed", c: true}, {t: "Relaxed", c: false}, {t: "Confident", c: false}, {t: "Calm", c: false}], type: "mcq" },
                        { q: "Inspiring delight, pleasure, or admiration; extremely good is ________.", options:[{t: "Wonderful", c: true}, {t: "Surprised", c: false}, {t: "Excited", c: false}, {t: "Proud", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Negative Adjectives",
                    drills:[
                        { q: "Feeling or showing sorrow is ________.", options:[{t: "Sad", c: true}, {t: "Nervous", c: false}, {t: "Angry", c: false}, {t: "Exhausted", c: false}], type: "mcq" },
                        { q: "Unhappy, disappointed, or worried about something is ________.", options:[{t: "Upset", c: true}, {t: "Confused", c: false}, {t: "Scared", c: false}, {t: "Furious", c: false}], type: "mcq" },
                        { q: "Wretchedly unhappy or uncomfortable is ________.", options:[{t: "Miserable", c: true}, {t: "Anxious", c: false}, {t: "Embarrassed", c: false}, {t: "Worried", c: false}], type: "mcq" },
                        { q: "Having a strong feeling of annoyance or hostility is ________.", options:[{t: "Exhausted", c: false}, {t: "Angry", c: true}, {t: "Sad", c: false}, {t: "Confused", c: false}], type: "mcq" },
                        { q: "Extremely angry is ________.", options:[{t: "Furious", c: true}, {t: "Scared", c: false}, {t: "Upset", c: false}, {t: "Nervous", c: false}], type: "mcq" },
                        { q: "Anxious or troubled about actual or potential problems is ________.", options:[{t: "Worried", c: true}, {t: "Miserable", c: false}, {t: "Furious", c: false}, {t: "Angry", c: false}], type: "mcq" },
                        { q: "Easily agitated or alarmed; feeling tension is ________.", options:[{t: "Nervous", c: true}, {t: "Sad", c: false}, {t: "Exhausted", c: false}, {t: "Embarrassed", c: false}], type: "mcq" },
                        { q: "Experiencing worry or unease, typically about an imminent event is ________.", options:[{t: "Anxious", c: true}, {t: "Angry", c: false}, {t: "Confused", c: false}, {t: "Furious", c: false}], type: "mcq" },
                        { q: "Drained of one's physical or mental resources; very tired is ________.", options:[{t: "Exhausted", c: true}, {t: "Upset", c: false}, {t: "Worried", c: false}, {t: "Scared", c: false}], type: "mcq" },
                        { q: "Fearful or frightened is ________.", options:[{t: "Scared", c: true}, {t: "Miserable", c: false}, {t: "Angry", c: false}, {t: "Confused", c: false}], type: "mcq" },
                        { q: "Unable to think clearly or understand something is ________.", options:[{t: "Confused", c: true}, {t: "Exhausted", c: false}, {t: "Sad", c: false}, {t: "Furious", c: false}], type: "mcq" },
                        { q: "Feeling ashamed or self-conscious is ________.", options:[{t: "Embarrassed", c: true}, {t: "Nervous", c: false}, {t: "Angry", c: false}, {t: "Scared", c: false}], type: "mcq" }
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
                    title: "Asking About Feelings",
                    audio: "TTS: How are you feeling today? Are you alright? Is everything okay? What's the matter? What's wrong? You seem a little sad.",
                    explanation: "Useful phrases to check on someone's emotional or physical state.<br><span style='color:var(--primary-blue); font-style:italic;'>(Frases úteis para verificar o estado emocional ou físico de alguém.)</span>",
                    samples:[
                        { en: "<b>How are you feeling today?</b>", pt: "<span style='color:var(--primary-blue)'>(Como você está se sentindo hoje?)</span>" },
                        { en: "<b>Are you alright?</b> You look pale.", pt: "<span style='color:var(--primary-blue)'>(Você está bem? Você parece pálido(a).)</span>" },
                        { en: "<b>Is everything okay?</b>", pt: "<span style='color:var(--primary-blue)'>(Está tudo bem?)</span>" },
                        { en: "<b>What's the matter?</b>", pt: "<span style='color:var(--primary-blue)'>(Qual é o problema?)</span>" },
                        { en: "<b>What's wrong?</b> You look worried.", pt: "<span style='color:var(--primary-blue)'>(O que há de errado? Você parece preocupado(a).)</span>" },
                        { en: "<b>You seem a little sad</b> today.", pt: "<span style='color:var(--primary-blue)'>(Você parece um pouco triste hoje.)</span>" }
                    ]
                },
                {
                    title: "Expressing Emotions",
                    audio: "TTS: I feel great. I'm in a really good mood. I'm looking forward to the weekend. I'm feeling a bit down. I'm stressed out. I'm worried about my exam.",
                    explanation: "Phrases to communicate both positive energy and negative distress.<br><span style='color:var(--primary-blue); font-style:italic;'>(Frases para comunicar tanto energia positiva quanto angústia negativa.)</span>",
                    samples:[
                        { en: "<b>I feel great</b> after a good night's sleep.", pt: "<span style='color:var(--primary-blue)'>(Me sinto ótimo(a) depois de uma boa noite de sono.)</span>" },
                        { en: "<b>I'm in a really good mood</b> today.", pt: "<span style='color:var(--primary-blue)'>(Estou de muito bom humor hoje.)</span>" },
                        { en: "<b>I'm looking forward to the weekend</b>.", pt: "<span style='color:var(--primary-blue)'>(Estou ansioso(a)/esperando pelo fim de semana.)</span>" },
                        { en: "<b>I'm feeling a bit down</b> because of the news.", pt: "<span style='color:var(--primary-blue)'>(Estou me sentindo um pouco para baixo por causa das notícias.)</span>" },
                        { en: "<b>I'm stressed out</b> at work.", pt: "<span style='color:var(--primary-blue)'>(Estou estressado(a) no trabalho.)</span>" },
                        { en: "<b>I'm worried about my exam</b> tomorrow.", pt: "<span style='color:var(--primary-blue)'>(Estou preocupado(a) com a minha prova amanhã.)</span>" }
                    ]
                },
                {
                    title: "Responding to Feelings",
                    audio: "TTS: That's wonderful news! That must be very exciting! I'm sorry to hear that. I understand how you feel. Don't worry. Everything will be fine.",
                    explanation: "Empathetic responses to celebrate good news or comfort someone in trouble.<br><span style='color:var(--primary-blue); font-style:italic;'>(Respostas empáticas para celebrar boas notícias ou confortar alguém com problemas.)</span>",
                    samples:[
                        { en: "You passed? <b>That's wonderful news!</b>", pt: "<span style='color:var(--primary-blue)'>(Você passou? São notícias maravilhosas!)</span>" },
                        { en: "A new job? <b>That must be very exciting!</b>", pt: "<span style='color:var(--primary-blue)'>(Um emprego novo? Isso deve ser muito empolgante!)</span>" },
                        { en: "Your dog is sick? <b>I'm sorry to hear that.</b>", pt: "<span style='color:var(--primary-blue)'>(Seu cachorro está doente? Sinto muito em ouvir isso.)</span>" },
                        { en: "<b>I understand how you feel.</b> It's hard.", pt: "<span style='color:var(--primary-blue)'>(Eu entendo como você se sente. É difícil.)</span>" },
                        { en: "<b>Don't worry</b>, I will help you.", pt: "<span style='color:var(--primary-blue)'>(Não se preocupe, eu vou te ajudar.)</span>" },
                        { en: "Take a deep breath, <b>everything will be fine.</b>", pt: "<span style='color:var(--primary-blue)'>(Respire fundo, tudo vai ficar bem.)</span>" }
                    ]
                }
            ],

            // --- 3B: DIALOGUES ---
            dialogueGroups:[
                {
                    title: "Dialogue 1: Checking In",
                    audio: "TTS: How are you feeling today? I feel great! I'm in a really good mood. That's wonderful news! Why are you so happy?",
                    lines:[
                        { speaker: "Mark", text: "How are you feeling today?", pt: "(Como você está se sentindo hoje?)" },
                        { speaker: "Anna", text: "I feel great! I'm in a really good mood. That's wonderful news! Why are you so happy?", pt: "(Me sinto ótima! Estou de muito bom humor. São notícias maravilhosas! Por que você está tão feliz?)" } // Fixed speaker separation below
                    ]
                },
                {
                    title: "Dialogue 1: Checking In", // Fixed Separation
                    audio: "TTS: How are you feeling today? I feel great! I'm in a really good mood. That's wonderful news! Why are you so happy?",
                    lines:[
                        { speaker: "Mark", text: "How are you feeling today?", pt: "(Como você está se sentindo hoje?)" },
                        { speaker: "Anna", text: "I feel great! I'm in a really good mood.", pt: "(Me sinto ótima! Estou de muito bom humor.)" },
                        { speaker: "Mark", text: "That's wonderful news! Why are you so happy?", pt: "(São notícias maravilhosas! Por que você está tão feliz?)" }
                    ]
                },
                {
                    title: "Dialogue 2: A Bad Day",
                    audio: "TTS: Are you alright? You seem a little sad. Yes, I'm feeling a bit down. I'm worried about my exam. Don't worry. Everything will be fine.",
                    lines:[
                        { speaker: "Leo", text: "Are you alright? You seem a little sad.", pt: "(Você está bem? Você parece um pouco triste.)" },
                        { speaker: "Mia", text: "Yes, I'm feeling a bit down. I'm worried about my exam.", pt: "(Sim, estou me sentindo um pouco pra baixo. Estou preocupada com a minha prova.)" },
                        { speaker: "Leo", text: "Don't worry. Everything will be fine.", pt: "(Não se preocupe. Tudo vai ficar bem.)" }
                    ]
                },
                {
                    title: "Dialogue 3: Stress at Work",
                    audio: "TTS: Is everything okay? What's the matter? I'm stressed out. We have too much work to do. I understand how you feel. I am tired, too.",
                    lines:[
                        { speaker: "Chris", text: "Is everything okay? What's the matter?", pt: "(Está tudo bem? Qual é o problema?)" },
                        { speaker: "Sophie", text: "I'm stressed out. We have too much work to do.", pt: "(Estou estressada. Temos muito trabalho a fazer.)" },
                        { speaker: "Chris", text: "I understand how you feel. I am tired, too.", pt: "(Eu entendo como você se sente. Também estou cansado.)" }
                    ]
                },
                {
                    title: "Dialogue 4: Looking Forward",
                    audio: "TTS: What's wrong? You are just staring at the wall. Nothing is wrong! I'm looking forward to the weekend. Oh! Are you going anywhere? Yes, we are going to Paris!",
                    lines:[
                        { speaker: "David", text: "What's wrong? You are just staring at the wall.", pt: "(O que há de errado? Você está só encarando a parede.)" },
                        { speaker: "Chloe", text: "Nothing is wrong! I'm looking forward to the weekend.", pt: "(Não há nada de errado! Estou ansiosa pelo fim de semana.)" }
                    ]
                },
                {
                    title: "Dialogue 5: Bad News",
                    audio: "TTS: I lost my phone today. I'm sorry to hear that. Were your photos saved on the cloud? No, they are all gone. I am so upset.",
                    lines:[
                        { speaker: "Tom", text: "I lost my phone today.", pt: "(Eu perdi meu telefone hoje.)" },
                        { speaker: "Emma", text: "I'm sorry to hear that. Were your photos saved on the cloud?", pt: "(Sinto muito em ouvir isso. Suas fotos estavam salvas na nuvem?)" }
                    ]
                },
                {
                    title: "Dialogue 6: Great Expectations",
                    audio: "TTS: My sister is having a baby in two months! Wow, that must be very exciting! Yes, she is delighted.",
                    lines:[
                        { speaker: "Lisa", text: "My sister is having a baby in two months!", pt: "(Minha irmã vai ter um bebê em dois meses!)" },
                        { speaker: "John", text: "Wow, that must be very exciting!", pt: "(Uau, isso deve ser muito empolgante!)" }
                    ]
                }
            ],

            // --- 3C: PRACTICE ---
            grammarDrillGroups:[
                {
                    title: "Asking About Feelings",
                    drills:[
                        { q: "How are you ________ today?", options:[{t: "feeling", c: true}, {t: "sad", c: false}, {t: "okay", c: false}, {t: "matter", c: false}], type: "mcq" },
                        { q: "Are you ________? You look pale.", options:[{t: "alright", c: true}, {t: "matter", c: false}, {t: "wrong", c: false}, {t: "sad", c: false}], type: "mcq" },
                        { q: "Is everything ________?", options:[{t: "okay", c: true}, {t: "matter", c: false}, {t: "wrong", c: false}, {t: "sad", c: false}], type: "mcq" },
                        { q: "What's the ________?", options:[{t: "matter", c: true}, {t: "feeling", c: false}, {t: "alright", c: false}, {t: "okay", c: false}], type: "mcq" },
                        { q: "What's ________?", options:[{t: "wrong", c: true}, {t: "matter", c: false}, {t: "okay", c: false}, {t: "sad", c: false}], type: "mcq" },
                        { q: "You ________ a little sad.", options:[{t: "seem", c: true}, {t: "matter", c: false}, {t: "alright", c: false}, {t: "wrong", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Expressing Emotions",
                    drills:[
                        { q: "I feel ________ today!", options:[{t: "great", c: true}, {t: "mood", c: false}, {t: "down", c: false}, {t: "forward", c: false}], type: "mcq" },
                        { q: "I'm in a really good ________.", options:[{t: "mood", c: true}, {t: "great", c: false}, {t: "down", c: false}, {t: "forward", c: false}], type: "mcq" },
                        { q: "I'm looking ________ to the weekend.", options:[{t: "forward", c: true}, {t: "mood", c: false}, {t: "down", c: false}, {t: "stressed", c: false}], type: "mcq" },
                        { q: "I'm feeling a bit ________ today.", options:[{t: "down", c: true}, {t: "great", c: false}, {t: "mood", c: false}, {t: "forward", c: false}], type: "mcq" },
                        { q: "I'm ________ out because of work.", options:[{t: "stressed", c: true}, {t: "mood", c: false}, {t: "worried", c: false}, {t: "great", c: false}], type: "mcq" },
                        { q: "I'm ________ about my exam.", options:[{t: "worried", c: true}, {t: "stressed", c: false}, {t: "down", c: false}, {t: "forward", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Responding to Feelings",
                    drills:[
                        { q: "That's wonderful ________!", options:[{t: "news", c: true}, {t: "exciting", c: false}, {t: "feel", c: false}, {t: "fine", c: false}], type: "mcq" },
                        { q: "That must be very ________!", options:[{t: "exciting", c: true}, {t: "news", c: false}, {t: "sorry", c: false}, {t: "worry", c: false}], type: "mcq" },
                        { q: "I'm ________ to hear that.", options:[{t: "sorry", c: true}, {t: "news", c: false}, {t: "exciting", c: false}, {t: "understand", c: false}], type: "mcq" },
                        { q: "I ________ how you feel.", options:[{t: "understand", c: true}, {t: "worry", c: false}, {t: "sorry", c: false}, {t: "fine", c: false}], type: "mcq" },
                        { q: "Don't ________, I will help you.", options:[{t: "worry", c: true}, {t: "news", c: false}, {t: "fine", c: false}, {t: "understand", c: false}], type: "mcq" },
                        { q: "Everything will be ________.", options:[{t: "fine", c: true}, {t: "news", c: false}, {t: "worry", c: false}, {t: "sorry", c: false}], type: "mcq" }
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
                { text: "How are you feeling today? ↘", audio: "TTS: How are you feeling today?" },
                { text: "Is everything okay? You seem a little sad. ↗", audio: "TTS: Is everything okay? You seem a little sad." },
                { text: "I'm in a really good mood! ↘", audio: "TTS: I'm in a really good mood!" },
                { text: "I'm looking forward to the weekend. ↘", audio: "TTS: I'm looking forward to the weekend." },
                { text: "I'm feeling a bit down because of the bad news. ↘", audio: "TTS: I'm feeling a bit down because of the bad news." },
                { text: "I'm stressed out and completely exhausted. ↘", audio: "TTS: I'm stressed out and completely exhausted." },
                { text: "That must be very exciting! ↘", audio: "TTS: That must be very exciting!" },
                { text: "I'm so sorry to hear that. ↘", audio: "TTS: I'm so sorry to hear that." },
                { text: "I understand how you feel. ↘", audio: "TTS: I understand how you feel." },
                { text: "Don't worry, everything will be fine. ↘", audio: "TTS: Don't worry, everything will be fine." }
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
                    audio: "TTS: Mark: You look very happy today. What happened? Sarah: I passed my driving test! I am so thrilled. Mark: That's wonderful news! I am very proud of you. Sarah: Thank you! I was so nervous before the exam.",
                    text: "Mark: You look very [happy] today. What happened?<br>Sarah: I passed my driving test! I am so [thrilled].<br>Mark: That's wonderful [news]! I am very [proud] of you.<br>Sarah: Thank you! I was so [nervous] before the exam."
                },
                {
                    type: "dropdown",
                    instruction: "Listen to the dialogue about a bad day.",
                    audio: "TTS: Tom: What's the matter, Lisa? You seem upset. Lisa: I lost my wallet on the train this morning. I am furious! Tom: I'm sorry to hear that. I understand how you feel. Lisa: I am just worried about my credit cards.",
                    questions:[
                        { q: "Tom: What's the [matter* | feeling | fear], Lisa? You seem upset.", a: "matter" },
                        { q: "Lisa: I lost my wallet on the train this morning. I am [furious* | delighted | relaxed]!", a: "furious" },
                        { q: "Tom: I'm [sorry* | glad | happy] to hear that. I understand how you feel.", a: "sorry" },
                        { q: "Lisa: I am just[worried* | confident | amazed] about my credit cards.", a: "worried" }
                    ]
                },
                {
                    type: "audio-choice",
                    instruction: "Listen to the speaker. How does she feel about her new job?",
                    audio: "TTS: I started my new job today. The people are very nice, but there is so much to learn. I am a little confused by the new software, and I feel quite anxious about making mistakes.",
                    options:[
                        { t: "She feels confident and relaxed.", c: false },
                        { t: "She feels angry and miserable.", c: false },
                        { t: "She feels a little confused and anxious.", c: true },
                        { t: "She feels thrilled and amazed.", c: false }
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
                    title: "Dialogue - The Big Surprise",
                    audio: "TTS: David: Hey Emma, you have a huge smile on your face! Is everything okay? Emma: Everything is perfect! I just won a free trip to Japan. David: Wow! That must be very exciting! I am amazed. Emma: I am absolutely thrilled. I'm looking forward to the weekend so I can start planning. David: I am so happy for you. You must be in a really good mood today. Emma: I am! It's a wonderful feeling.",
                    body: "<b>David:</b> Hey Emma, you have a huge [smile](tooltip:smile) on your face![Is everything okay](tooltip:is-everything-okay)?<br><b>Emma:</b> Everything is perfect! I just won a free trip to Japan.<br><b>David:</b> Wow! [That must be very exciting](tooltip:must-be-exciting)! I am [amazed](tooltip:amazed).<br><b>Emma:</b> I am absolutely [thrilled](tooltip:thrilled). [I'm looking forward to the weekend](tooltip:looking-forward) so I can start planning.<br><b>David:</b> I am so [happy](tooltip:happy) for you. You must be [in a really good mood](tooltip:in-good-mood) today.<br><b>Emma:</b> I am! It's a [wonderful](tooltip:wonderful) [feeling](tooltip:feeling).",
                    questions:[
                        { q: "Why does Emma have a huge smile on her face?", options:[{t: "She got a new job.", c: false}, {t: "She won a free trip to Japan.", c: true}, {t: "She bought a new car.", c: false}], type: "mcq" },
                        { q: "How does David react to the news?", options:[{t: "He is angry.", c: false}, {t: "He is worried.", c: false}, {t: "He is amazed and happy for her.", c: true}], type: "mcq" },
                        { q: "What is Emma looking forward to?", options:[{t: "The weekend.", c: true}, {t: "Her exam.", c: false}, {t: "Dinner.", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Dialogue - Exam Stress",
                    audio: "TTS: Lucas: Hi Chloe. Are you alright? You seem a little sad. Chloe: I'm stressed out, Lucas. I failed my math test. Lucas: Oh no, I'm sorry to hear that. I understand how you feel. Chloe: I studied so hard! I am just so frustrated and upset. Lucas: Don't worry, everything will be fine. You can retake the test next month. Chloe: I know, but I feel exhausted. I just want to go home and cry.",
                    body: "<b>Lucas:</b> Hi Chloe. [Are you alright](tooltip:are-you-alright)?[You seem a little sad](tooltip:you-seem-sad).<br><b>Chloe:</b> [I'm stressed out](tooltip:stressed-out), Lucas. I failed my math test.<br><b>Lucas:</b> Oh no,[I'm sorry to hear that](tooltip:sorry-to-hear). [I understand how you feel](tooltip:understand-how-feel).<br><b>Chloe:</b> I studied so hard! I am just so frustrated and [upset](tooltip:upset).<br><b>Lucas:</b> [Don't worry](tooltip:dont-worry),[everything will be fine](tooltip:everything-will-be-fine). You can retake the test next month.<br><b>Chloe:</b> I know, but I feel [exhausted](tooltip:exhausted). I just want to go home and [cry](tooltip:cry).",
                    questions:[
                        { q: "Why is Chloe stressed out?", options:[{t: "She lost her wallet.", c: false}, {t: "She failed her math test.", c: true}, {t: "She is sick.", c: false}], type: "mcq" },
                        { q: "How does Lucas comfort Chloe?", options:[{t: "He laughs at her.", c: false}, {t: "He tells her everything will be fine.", c: true}, {t: "He tells her to study more.", c: false}], type: "mcq" },
                        { q: "What does Chloe want to do now?", options:[{t: "Go home and cry.", c: true}, {t: "Take the test again immediately.", c: false}, {t: "Smile and laugh.", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Email - Reconnecting",
                    audio: "TTS: Subject: Thinking of you. Hi Sophia, What's the matter? I haven't heard from you in weeks. I hope you are not feeling a bit down. I know you were very anxious about moving to a new city. It can be scary and confusing at first, but I am confident you will make new friends soon. I am in a really good mood today because I got a promotion! Let's call each other tonight. Best, Jake.",
                    body: "<b>From: Jake</b><br><b>To: Sophia</b><br>Subject: Thinking of you.<br><br>Hi Sophia,<br>[What's the matter](tooltip:whats-matter)? I haven't heard from you in weeks. I hope you are not[feeling a bit down](tooltip:feeling-down). I know you were very [anxious](tooltip:anxious) about moving to a new city. It can be [scared](tooltip:scared) and[confused](tooltip:confused) at first, but I am [confident](tooltip:confident) you will make new friends soon. [I am in a really good mood](tooltip:in-good-mood) today because I got a promotion! Let's call each other tonight.<br><br>Best, Jake.",
                    questions:[
                        { q: "Why is Jake writing to Sophia?", options:[{t: "To complain about his job.", c: false}, {t: "To check on her because he hasn't heard from her.", c: true}, {t: "To ask for money.", c: false}], type: "mcq" },
                        { q: "Why was Sophia anxious?", options:[{t: "Because she was taking a test.", c: false}, {t: "Because she moved to a new city.", c: true}, {t: "Because she lost her job.", c: false}], type: "mcq" },
                        { q: "Why is Jake in a really good mood?", options:[{t: "He got a promotion.", c: true}, {t: "He bought a new car.", c: false}, {t: "He is going on vacation.", c: false}], type: "mcq" }
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
                { type: "matching", instruction: "Match the noun to its translation.", pairs:[
                    { left: "Happiness", right: "Felicidade", val: "1" },
                    { left: "Sadness", right: "Tristeza", val: "2" },
                    { left: "Anger", right: "Raiva", val: "3" },
                    { left: "Fear", right: "Medo", val: "4" }
                ]},
                { type: "matching", instruction: "Match the positive adjectives with their meanings.", pairs:[
                    { left: "Thrilled", right: "Very excited", val: "1" },
                    { left: "Proud", right: "Pleased with achievements", val: "2" },
                    { left: "Calm", right: "Not nervous or angry", val: "3" },
                    { left: "Amazed", right: "Greatly surprised", val: "4" }
                ]},
                { type: "matching", instruction: "Match the negative adjectives with their meanings.", pairs:[
                    { left: "Furious", right: "Extremely angry", val: "1" },
                    { left: "Exhausted", right: "Very tired", val: "2" },
                    { left: "Anxious", right: "Worried and uneasy", val: "3" },
                    { left: "Scared", right: "Frightened", val: "4" }
                ]},
                { type: "matching", instruction: "Match the phrases to their contexts.", pairs:[
                    { left: "What's the", right: "matter?", val: "1" },
                    { left: "I'm in a really", right: "good mood.", val: "2" },
                    { left: "I'm looking", right: "forward to the weekend.", val: "3" },
                    { left: "Everything will", right: "be fine.", val: "4" }
                ]},

                // --- WORD ORDER (5-14) ---
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "you / feeling / How / today / are / ?", correct: "How are you feeling today ?" },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "everything / okay / Is / ?", correct: "Is everything okay ?" },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "seem / sad / little / You / a / .", correct: "You seem a little sad ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "feel / great / I / !", correct: "I feel great !" },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "down / a / feeling / I'm / bit / .", correct: "I'm feeling a bit down ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "out / stressed / I'm / .", correct: "I'm stressed out ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "my / worried / I'm / about / exam / .", correct: "I'm worried about my exam ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "wonderful / That's / news / !", correct: "That's wonderful news !" },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "feel / how / understand / I / you / .", correct: "I understand how you feel ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "will / Everything / fine / be / .", correct: "Everything will be fine ." },

                // --- CLICKABLE ERROR (15-24) ---
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "Are you [all right](error:alright)?" }, // alright is the target
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "What's the [problem](error:matter)?" },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "What's [bad](error:wrong)?" },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "I'm in a really good [feel](error:mood)." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "I'm looking [front](error:forward) to the weekend." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "I'm feeling a [piece](error:bit) down." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "I'm stressed [in](error:out)." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "That [should](error:must) be very exciting!" },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "I'm sorry to [listen](error:hear) that." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "Don't [cry](error:worry), everything will be fine." },

                // --- ODD ONE OUT (25-30) ---
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Nouns)", options:[{t: "Emotion", c: false}, {t: "Mood", c: false}, {t: "Happiness", c: false}, {t: "Confident", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Verbs)", options:[{t: "To smile", c: false}, {t: "To laugh", c: false}, {t: "To cry", c: false}, {t: "Fear", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Positive Adjectives)", options:[{t: "Glad", c: false}, {t: "Delighted", c: false}, {t: "Thrilled", c: false}, {t: "Upset", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Negative Adjectives)", options:[{t: "Miserable", c: false}, {t: "Furious", c: false}, {t: "Anxious", c: false}, {t: "Proud", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Expressions of concern)", options:[{t: "Are you alright?", c: false}, {t: "What's the matter?", c: false}, {t: "What's wrong?", c: false}, {t: "I feel great.", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Empathetic responses)", options:[{t: "I'm sorry to hear that.", c: false}, {t: "I understand how you feel.", c: false}, {t: "Don't worry.", c: false}, {t: "I'm stressed out.", c: true}] },

                // --- TRUE / FALSE (31-35) ---
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "If you are 'thrilled', it means you are very sad.", correct: "false"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "A 'mood' is a temporary state of mind or feeling.", correct: "true"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "If you say 'I'm looking forward to the weekend', you are excited about it.", correct: "true"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "'Furious' is a positive adjective.", correct: "false"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "You can say 'That's wonderful news!' when someone tells you they failed an exam.", correct: "false"}] },

                // --- MCQ (36-39) ---
                { type: "mcq", instruction: "Choose the correct phrase.<br>When someone looks like they are having a problem, you ask: 'What's the ________?'", options:[{t: "feeling", c: false}, {t: "matter", c: true}, {t: "sad", c: false}, {t: "emotion", c: false}] },
                { type: "mcq", instruction: "Choose the correct word.<br>If you are very tired from working all day, you feel ________.", options:[{t: "exhausted", c: true}, {t: "confident", c: false}, {t: "embarrassed", c: false}, {t: "glad", c: false}] },
                { type: "mcq", instruction: "Choose the correct phrase.<br>If your friend tells you their dog ran away, a polite response is: 'I'm ________ to hear that.'", options:[{t: "glad", c: false}, {t: "excited", c: false}, {t: "sorry", c: true}, {t: "proud", c: false}] },
                { type: "mcq", instruction: "Choose the correct phrase.<br>When you have too much work and pressure, you can say: 'I'm ________ out.'", options:[{t: "stressed", c: true}, {t: "down", c: false}, {t: "looked", c: false}, {t: "amazed", c: false}] },

                // --- CATEGORIZE (40) ---
                { type: "categorize", instruction: "Sort the adjectives into Positive and Negative.", 
                    categories:[{id: "pos", name: "Positive"}, {id: "neg", name: "Negative"}],
                    items:[
                        {text: "Delighted", catId: "pos"}, 
                        {text: "Proud", catId: "pos"}, 
                        {text: "Confident", catId: "pos"}, 
                        {text: "Miserable", catId: "neg"}, 
                        {text: "Anxious", catId: "neg"}, 
                        {text: "Embarrassed", catId: "neg"}
                    ] 
                }
            ]
        },

        // ======================================================
        // STEP 8: WRITING PRACTICE
        // ======================================================
        {
            title: "Writing Practice",
            instruction: "Write an email to a close friend (5-7 sentences) describing a recent event that changed your mood. Explain how you felt before and how you feel now. Ask them how they are doing to show you care.",
            example: "Hi Mark, I wanted to tell you about my week. I was very anxious and stressed out because I had a huge presentation at work. But guess what? It went perfectly! My boss was very proud, and I am in a really good mood now. I feel completely relaxed and happy. How are you feeling today? Is everything okay with you? Let's catch up soon. Best, Liam.",
            prompts:[
                "Use negative adjectives to describe a stressful past situation (e.g., anxious, worried).",
                "Share positive news using phrases like 'I feel great' or 'I'm thrilled'.",
                "Use positive adjectives to describe your current state (e.g., relaxed, proud).",
                "Ask a caring question (e.g., How are you feeling?, Is everything okay?)."
            ]
        },

        // ======================================================
        // STEP 9: FLASHCARDS
        // ======================================================
        {
            title: "Flashcards",
            items:[
                // 2A Items (36 items)
                { term: "Feeling", definition: "An emotional state or reaction.", defTrans: "Sentimento", example: "Love is a very strong feeling.", audioFront: "TTS: Feeling", audioBack: "TTS: Love is a very strong feeling." },
                { term: "Emotion", definition: "A strong feeling such as love, anger, or fear.", defTrans: "Emoção", example: "Fear is a natural human emotion.", audioFront: "TTS: Emotion", audioBack: "TTS: Fear is a natural human emotion." },
                { term: "Mood", definition: "A temporary state of mind or feeling.", defTrans: "Humor / Estado de espírito", example: "I am in a good mood today.", audioFront: "TTS: Mood", audioBack: "TTS: I am in a good mood today." },
                { term: "Happiness", definition: "The state of being happy.", defTrans: "Felicidade", example: "Her smile brought happiness to the room.", audioFront: "TTS: Happiness", audioBack: "TTS: Her smile brought happiness to the room." },
                { term: "Sadness", definition: "The condition of being sad.", defTrans: "Tristeza", example: "The movie ended in sadness.", audioFront: "TTS: Sadness", audioBack: "TTS: The movie ended in sadness." },
                { term: "Anger", definition: "A strong feeling of annoyance or hostility.", defTrans: "Raiva", example: "He could not hide his anger.", audioFront: "TTS: Anger", audioBack: "TTS: He could not hide his anger." },
                { term: "Fear", definition: "An unpleasant emotion caused by the threat of danger.", defTrans: "Medo", example: "The loud noise caused a lot of fear.", audioFront: "TTS: Fear", audioBack: "TTS: The loud noise caused a lot of fear." },
                { term: "To feel", definition: "To experience an emotion or sensation.", defTrans: "Sentir", example: "I feel much better after sleeping.", audioFront: "TTS: To feel", audioBack: "TTS: I feel much better after sleeping." },
                { term: "To smile", definition: "To form one's features into a pleased expression.", defTrans: "Sorrir", example: "She likes to smile at everyone she meets.", audioFront: "TTS: To smile", audioBack: "TTS: She likes to smile at everyone she meets." },
                { term: "To laugh", definition: "To make sounds expressing amusement.", defTrans: "Rir", example: "The joke made us all laugh.", audioFront: "TTS: To laugh", audioBack: "TTS: The joke made us all laugh." },
                { term: "To cry", definition: "To shed tears.", defTrans: "Chorar", example: "The sad news made him cry.", audioFront: "TTS: To cry", audioBack: "TTS: The sad news made him cry." },
                { term: "To worry", definition: "To feel anxious or troubled.", defTrans: "Preocupar-se", example: "Don't worry about the small things.", audioFront: "TTS: To worry", audioBack: "TTS: Don't worry about the small things." },
                
                { term: "Happy", definition: "Feeling or showing pleasure.", defTrans: "Feliz", example: "I am so happy to see you.", audioFront: "TTS: Happy", audioBack: "TTS: I am so happy to see you." },
                { term: "Glad", definition: "Feeling pleasure or joy.", defTrans: "Contente", example: "I am glad you could come to the party.", audioFront: "TTS: Glad", audioBack: "TTS: I am glad you could come to the party." },
                { term: "Delighted", definition: "Feeling or showing great pleasure.", defTrans: "Encantado(a)", example: "We are delighted with the new house.", audioFront: "TTS: Delighted", audioBack: "TTS: We are delighted with the new house." },
                { term: "Excited", definition: "Very enthusiastic and eager.", defTrans: "Animado(a)", example: "The kids are excited about the trip.", audioFront: "TTS: Excited", audioBack: "TTS: The kids are excited about the trip." },
                { term: "Thrilled", definition: "Extremely pleased and excited.", defTrans: "Maravilhado(a)", example: "I was thrilled when I won the prize.", audioFront: "TTS: Thrilled", audioBack: "TTS: I was thrilled when I won the prize." },
                { term: "Proud", definition: "Feeling deep pleasure from one's own achievements.", defTrans: "Orgulhoso(a)", example: "She is proud of her son for graduating.", audioFront: "TTS: Proud", audioBack: "TTS: She is proud of her son for graduating." },
                { term: "Calm", definition: "Not showing or feeling nervousness or anger.", defTrans: "Calmo(a)", example: "Keep calm and take a deep breath.", audioFront: "TTS: Calm", audioBack: "TTS: Keep calm and take a deep breath." },
                { term: "Relaxed", definition: "Free from tension and anxiety.", defTrans: "Relaxado(a)", example: "I feel relaxed after a hot bath.", audioFront: "TTS: Relaxed", audioBack: "TTS: I feel relaxed after a hot bath." },
                { term: "Confident", definition: "Feeling certain about yourself.", defTrans: "Confiante", example: "He is very confident about the interview.", audioFront: "TTS: Confident", audioBack: "TTS: He is very confident about the interview." },
                { term: "Surprised", definition: "Feeling mild astonishment caused by something unexpected.", defTrans: "Surpreso(a)", example: "I was surprised by the sudden rain.", audioFront: "TTS: Surprised", audioBack: "TTS: I was surprised by the sudden rain." },
                { term: "Amazed", definition: "Greatly surprised; astounded.", defTrans: "Espantado(a) / Maravilhado(a)", example: "We were amazed by the beautiful view.", audioFront: "TTS: Amazed", audioBack: "TTS: We were amazed by the beautiful view." },
                { term: "Wonderful", definition: "Inspiring delight or admiration; extremely good.", defTrans: "Maravilhoso(a)", example: "That is a wonderful idea!", audioFront: "TTS: Wonderful", audioBack: "TTS: That is a wonderful idea!" },

                { term: "Sad", definition: "Feeling or showing sorrow.", defTrans: "Triste", example: "The ending of the book made me sad.", audioFront: "TTS: Sad", audioBack: "TTS: The ending of the book made me sad." },
                { term: "Upset", definition: "Unhappy, disappointed, or worried.", defTrans: "Chateado(a)", example: "He is upset because he lost his wallet.", audioFront: "TTS: Upset", audioBack: "TTS: He is upset because he lost his wallet." },
                { term: "Miserable", definition: "Wretchedly unhappy or uncomfortable.", defTrans: "Miserável / Muito triste", example: "She felt miserable when she caught the flu.", audioFront: "TTS: Miserable", audioBack: "TTS: She felt miserable when she caught the flu." },
                { term: "Angry", definition: "Having a strong feeling of annoyance.", defTrans: "Irritado(a)", example: "Why are you so angry with me?", audioFront: "TTS: Angry", audioBack: "TTS: Why are you so angry with me?" },
                { term: "Furious", definition: "Extremely angry.", defTrans: "Furioso(a)", example: "The boss was furious about the mistake.", audioFront: "TTS: Furious", audioBack: "TTS: The boss was furious about the mistake." },
                { term: "Worried", definition: "Anxious or troubled about actual or potential problems.", defTrans: "Preocupado(a)", example: "I am worried about my sick dog.", audioFront: "TTS: Worried", audioBack: "TTS: I am worried about my sick dog." },
                { term: "Nervous", definition: "Easily agitated or alarmed; tense.", defTrans: "Nervoso(a)", example: "I always get nervous before a test.", audioFront: "TTS: Nervous", audioBack: "TTS: I always get nervous before a test." },
                { term: "Anxious", definition: "Experiencing worry or unease about an imminent event.", defTrans: "Ansioso(a)", example: "Waiting for the email made her anxious.", audioFront: "TTS: Anxious", audioBack: "TTS: Waiting for the email made her anxious." },
                { term: "Exhausted", definition: "Drained of physical or mental resources; very tired.", defTrans: "Exausto(a)", example: "I worked all day and now I am exhausted.", audioFront: "TTS: Exhausted", audioBack: "TTS: I worked all day and now I am exhausted." },
                { term: "Scared", definition: "Fearful or frightened.", defTrans: "Assustado(a)", example: "The little boy is scared of the dark.", audioFront: "TTS: Scared", audioBack: "TTS: The little boy is scared of the dark." },
                { term: "Confused", definition: "Unable to think clearly or understand.", defTrans: "Confuso(a)", example: "The instructions were not clear, so I was confused.", audioFront: "TTS: Confused", audioBack: "TTS: The instructions were not clear, so I was confused." },
                { term: "Embarrassed", definition: "Feeling ashamed or self-conscious.", defTrans: "Envergonhado(a)", example: "He felt embarrassed when he forgot her name.", audioFront: "TTS: Embarrassed", audioBack: "TTS: He felt embarrassed when he forgot her name." },

                // 3A Items (18 items)
                { term: "How are you feeling today?", definition: "Asking someone about their emotional or physical state.", defTrans: "Como você está se sentindo hoje?", example: "How are you feeling today?", audioFront: "TTS: How are you feeling today?", audioBack: "TTS: How are you feeling today?" },
                { term: "Are you alright?", definition: "Checking if someone is okay when they seem distressed.", defTrans: "Você está bem?", example: "Are you alright? You look pale.", audioFront: "TTS: Are you alright?", audioBack: "TTS: Are you alright? You look pale." },
                { term: "Is everything okay?", definition: "Asking for confirmation that there are no problems.", defTrans: "Está tudo bem?", example: "Is everything okay?", audioFront: "TTS: Is everything okay?", audioBack: "TTS: Is everything okay?" },
                { term: "What's the matter?", definition: "Asking what the problem is.", defTrans: "Qual é o problema?", example: "What's the matter?", audioFront: "TTS: What's the matter?", audioBack: "TTS: What's the matter?" },
                { term: "What's wrong?", definition: "Asking what the issue is when someone looks troubled.", defTrans: "O que há de errado?", example: "What's wrong? You look worried.", audioFront: "TTS: What's wrong?", audioBack: "TTS: What's wrong? You look worried." },
                { term: "You seem a little sad", definition: "Making an observation about someone's negative mood.", defTrans: "Você parece um pouco triste.", example: "You seem a little sad today.", audioFront: "TTS: You seem a little sad", audioBack: "TTS: You seem a little sad today." },
                
                { term: "I feel great", definition: "Expressing a very positive physical or emotional state.", defTrans: "Me sinto ótimo(a).", example: "I feel great after a good night's sleep.", audioFront: "TTS: I feel great", audioBack: "TTS: I feel great after a good night's sleep." },
                { term: "I'm in a really good mood", definition: "Stating that you are currently very happy and agreeable.", defTrans: "Estou de muito bom humor.", example: "I'm in a really good mood today.", audioFront: "TTS: I'm in a really good mood", audioBack: "TTS: I'm in a really good mood today." },
                { term: "I'm looking forward to the weekend", definition: "Expressing positive anticipation for the weekend.", defTrans: "Estou ansioso(a) pelo fim de semana.", example: "I'm looking forward to the weekend.", audioFront: "TTS: I'm looking forward to the weekend", audioBack: "TTS: I'm looking forward to the weekend." },
                { term: "I'm feeling a bit down", definition: "An informal way to say you are slightly sad.", defTrans: "Estou me sentindo um pouco para baixo.", example: "I'm feeling a bit down because of the news.", audioFront: "TTS: I'm feeling a bit down", audioBack: "TTS: I'm feeling a bit down because of the news." },
                { term: "I'm stressed out", definition: "Expressing that you are overwhelmed by pressure.", defTrans: "Estou estressado(a).", example: "I'm stressed out at work.", audioFront: "TTS: I'm stressed out", audioBack: "TTS: I'm stressed out at work." },
                { term: "I'm worried about my exam", definition: "Expressing anxiety concerning a test.", defTrans: "Estou preocupado(a) com a minha prova.", example: "I'm worried about my exam tomorrow.", audioFront: "TTS: I'm worried about my exam", audioBack: "TTS: I'm worried about my exam tomorrow." },
                
                { term: "That's wonderful news!", definition: "An enthusiastic response to someone's success.", defTrans: "São notícias maravilhosas!", example: "You passed? That's wonderful news!", audioFront: "TTS: That's wonderful news!", audioBack: "TTS: You passed? That's wonderful news!" },
                { term: "That must be very exciting!", definition: "An empathetic response showing you understand someone's joy.", defTrans: "Isso deve ser muito empolgante!", example: "A new job? That must be very exciting!", audioFront: "TTS: That must be very exciting!", audioBack: "TTS: A new job? That must be very exciting!" },
                { term: "I'm sorry to hear that.", definition: "A polite phrase used to express sympathy for someone's bad news.", defTrans: "Sinto muito em ouvir isso.", example: "Your dog is sick? I'm sorry to hear that.", audioFront: "TTS: I'm sorry to hear that.", audioBack: "TTS: Your dog is sick? I'm sorry to hear that." },
                { term: "I understand how you feel.", definition: "A phrase used to show empathy and solidarity.", defTrans: "Eu entendo como você se sente.", example: "I understand how you feel. It's hard.", audioFront: "TTS: I understand how you feel.", audioBack: "TTS: I understand how you feel. It's hard." },
                { term: "Don't worry", definition: "Used to reassure someone that things will be fine.", defTrans: "Não se preocupe.", example: "Don't worry, I will help you.", audioFront: "TTS: Don't worry", audioBack: "TTS: Don't worry, I will help you." },
                { term: "Everything will be fine", definition: "A comforting phrase predicting a positive outcome to a problem.", defTrans: "Tudo vai ficar bem.", example: "Take a deep breath, everything will be fine.", audioFront: "TTS: Everything will be fine", audioBack: "TTS: Take a deep breath, everything will be fine." }
            ]
        }
    ],

    // ======================================================
    // GLOSSARY (All 54 items + Context words)
    // ======================================================
    glossary:[
        // 2A: Nouns & Verbs
        { topic: "Nouns", term: "feeling", definition: "An emotional state or reaction.", translation: "Sentimento" },
        { topic: "Nouns", term: "emotion", definition: "A strong feeling such as love, anger, or fear.", translation: "Emoção" },
        { topic: "Nouns", term: "mood", definition: "A temporary state of mind or feeling.", translation: "Humor / Estado de espírito" },
        { topic: "Nouns", term: "happiness", definition: "The state of being happy.", translation: "Felicidade" },
        { topic: "Nouns", term: "sadness", definition: "The condition of being sad.", translation: "Tristeza" },
        { topic: "Nouns", term: "anger", definition: "A strong feeling of annoyance or hostility.", translation: "Raiva" },
        { topic: "Nouns", term: "fear", definition: "An unpleasant emotion caused by the threat of danger.", translation: "Medo" },
        { topic: "Verbs", term: "to-feel", definition: "To experience an emotion or sensation.", translation: "Sentir / Sentir-se" },
        { topic: "Verbs", term: "to-smile", definition: "To form one's features into a pleased expression.", translation: "Sorrir" },
        { topic: "Verbs", term: "to-laugh", definition: "To make sounds expressing amusement.", translation: "Rir" },
        { topic: "Verbs", term: "to-cry", definition: "To shed tears.", translation: "Chorar" },
        { topic: "Verbs", term: "to-worry", definition: "To feel anxious or troubled.", translation: "Preocupar-se" },

        // 2A: Positive Adjectives
        { topic: "Positive Adjectives", term: "happy", definition: "Feeling or showing pleasure.", translation: "Feliz" },
        { topic: "Positive Adjectives", term: "glad", definition: "Feeling pleasure or joy.", translation: "Contente" },
        { topic: "Positive Adjectives", term: "delighted", definition: "Feeling or showing great pleasure.", translation: "Encantado(a)" },
        { topic: "Positive Adjectives", term: "excited", definition: "Very enthusiastic and eager.", translation: "Animado(a)" },
        { topic: "Positive Adjectives", term: "thrilled", definition: "Extremely pleased and excited.", translation: "Maravilhado(a)" },
        { topic: "Positive Adjectives", term: "proud", definition: "Feeling deep pleasure from one's own achievements.", translation: "Orgulhoso(a)" },
        { topic: "Positive Adjectives", term: "calm", definition: "Not showing or feeling nervousness or anger.", translation: "Calmo(a)" },
        { topic: "Positive Adjectives", term: "relaxed", definition: "Free from tension and anxiety.", translation: "Relaxado(a)" },
        { topic: "Positive Adjectives", term: "confident", definition: "Feeling certain about yourself.", translation: "Confiante" },
        { topic: "Positive Adjectives", term: "surprised", definition: "Feeling mild astonishment.", translation: "Surpreso(a)" },
        { topic: "Positive Adjectives", term: "amazed", definition: "Greatly surprised; astounded.", translation: "Espantado(a) / Maravilhado(a)" },
        { topic: "Positive Adjectives", term: "wonderful", definition: "Inspiring delight or admiration.", translation: "Maravilhoso(a)" },

        // 2A: Negative Adjectives
        { topic: "Negative Adjectives", term: "sad", definition: "Feeling or showing sorrow.", translation: "Triste" },
        { topic: "Negative Adjectives", term: "upset", definition: "Unhappy, disappointed, or worried.", translation: "Chateado(a)" },
        { topic: "Negative Adjectives", term: "miserable", definition: "Wretchedly unhappy or uncomfortable.", translation: "Miserável / Muito triste" },
        { topic: "Negative Adjectives", term: "angry", definition: "Having a strong feeling of annoyance.", translation: "Irritado(a)" },
        { topic: "Negative Adjectives", term: "furious", definition: "Extremely angry.", translation: "Furioso(a)" },
        { topic: "Negative Adjectives", term: "worried", definition: "Anxious or troubled about actual or potential problems.", translation: "Preocupado(a)" },
        { topic: "Negative Adjectives", term: "nervous", definition: "Easily agitated or alarmed; tense.", translation: "Nervoso(a)" },
        { topic: "Negative Adjectives", term: "anxious", definition: "Experiencing worry or unease.", translation: "Ansioso(a)" },
        { topic: "Negative Adjectives", term: "exhausted", definition: "Drained of physical or mental resources.", translation: "Exausto(a)" },
        { topic: "Negative Adjectives", term: "scared", definition: "Fearful or frightened.", translation: "Assustado(a)" },
        { topic: "Negative Adjectives", term: "confused", definition: "Unable to think clearly or understand.", translation: "Confuso(a)" },
        { topic: "Negative Adjectives", term: "embarrassed", definition: "Feeling ashamed or self-conscious.", translation: "Envergonhado(a)" },

        // 3A: Expressions
        { topic: "Expressions", term: "how-are-you-feeling", definition: "Asking someone about their emotional or physical state.", translation: "Como você está se sentindo hoje?" },
        { topic: "Expressions", term: "are-you-alright", definition: "Checking if someone is okay when they seem distressed.", translation: "Você está bem?" },
        { topic: "Expressions", term: "is-everything-okay", definition: "Asking for confirmation that there are no problems.", translation: "Está tudo bem?" },
        { topic: "Expressions", term: "whats-matter", definition: "Asking what the problem is.", translation: "Qual é o problema?" },
        { topic: "Expressions", term: "whats-wrong", definition: "Asking what the issue is when someone looks troubled.", translation: "O que há de errado?" },
        { topic: "Expressions", term: "you-seem-sad", definition: "Making an observation about someone's negative mood.", translation: "Você parece um pouco triste." },
        
        { topic: "Expressions", term: "feel-great", definition: "Expressing a very positive physical or emotional state.", translation: "Me sinto ótimo(a)." },
        { topic: "Expressions", term: "in-good-mood", definition: "Stating that you are currently very happy and agreeable.", translation: "Estou de muito bom humor." },
        { topic: "Expressions", term: "looking-forward", definition: "Expressing positive anticipation for the weekend.", translation: "Estou ansioso(a) pelo fim de semana." },
        { topic: "Expressions", term: "feeling-down", definition: "An informal way to say you are slightly sad.", translation: "Estou me sentindo um pouco para baixo." },
        { topic: "Expressions", term: "stressed-out", definition: "Expressing that you are overwhelmed by pressure.", translation: "Estou estressado(a)." },
        { topic: "Expressions", term: "worried-about-exam", definition: "Expressing anxiety concerning a test.", translation: "Estou preocupado(a) com a minha prova." },
        
        { topic: "Expressions", term: "wonderful-news", definition: "An enthusiastic response to someone's success.", translation: "São notícias maravilhosas!" },
        { topic: "Expressions", term: "must-be-exciting", definition: "An empathetic response showing you understand someone's joy.", translation: "Isso deve ser muito empolgante!" },
        { topic: "Expressions", term: "sorry-to-hear", definition: "A polite phrase used to express sympathy for someone's bad news.", translation: "Sinto muito em ouvir isso." },
        { topic: "Expressions", term: "understand-how-feel", definition: "A phrase used to show empathy and solidarity.", translation: "Eu entendo como você se sente." },
        { topic: "Expressions", term: "dont-worry", definition: "Used to reassure someone that things will be fine.", translation: "Não se preocupe." },
        { topic: "Expressions", term: "everything-will-be-fine", definition: "A comforting phrase predicting a positive outcome to a problem.", translation: "Tudo vai ficar bem." },

        // Additional Context Words
        { topic: "Context", term: "empathy", definition: "The ability to understand and share the feelings of another.", translation: "Empatia" }
    ]
});