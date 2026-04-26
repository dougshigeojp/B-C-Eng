/**
 * English Block Assembling - LESSON DATA: Topic 24
 * Topic: Life Milestones and Memories
 * Level: Upper A2 ~ Lower B1
 */

window.initLesson({
    // --- METADATA ---
    lessonId: "lesson-24",
    block: "4",
    topicTitle: "Life Milestones and Memories",

    steps:[
        // ======================================================
        // STEP 0: INTRO & CAN-DO
        // ======================================================
        {
            title: "Intro & Can-Do",
            objectives: "• Talk about different stages of life, from [childhood](tooltip:childhood) to [retirement](tooltip:retirement).<br>• Discuss major life events and [milestones](tooltip:milestone).<br>• Share [memories](tooltip:memory) and [reminisce](tooltip:reminisce) about the past.<br>• Use natural expressions like 'time flies' and 'tie the knot'.",
            welcome: "Welcome to Lesson 24! Life is full of important moments and unforgettable experiences. In this lesson, you will learn the vocabulary to talk about growing up, graduating, getting married, and starting a family. You will also learn how to look back on your past and share your favorite childhood memories. Let's take a trip down memory lane!",
            audio: {
                objectives: "TTS: In this lesson, you will learn to: Talk about different stages of life, from childhood to retirement. Discuss major life events and milestones. Share memories and reminisce about the past. Use natural expressions like 'time flies' and 'tie the knot'.",
                welcome: "TTS: Welcome to Lesson 24! Life is full of important moments and unforgettable experiences. In this lesson, you will learn the vocabulary to talk about growing up, graduating, getting married, and starting a family. You will also learn how to look back on your past and share your favorite childhood memories. Let's take a trip down memory lane!"
            }
        },

        // ======================================================
        // STEP 1: CONTEXT DIALOGUE
        // ======================================================
        {
            title: "Context Dialogue",
            context: "Anna and Ben are looking at old photographs and talking about Ben's younger brother.",
            contextAudio: "TTS: Anna: I can't believe your little brother is graduating from high school next week. Ben: I know. Wow, time flies! It feels like just yesterday we were teaching him how to ride a bike. Anna: Looking back, we had such a great childhood. We were so independent. Ben: Yes, those were the good old days. I feel so nostalgic looking at these photos. Anna: What is your brother going to do next? Is he moving out? Ben: He's taking a gap year to travel the world before settling down to study at university. Anna: That is an amazing milestone. He is definitely coming of age. Ben: Yes, he is. I remember when he was just a baby!",
            dialogue:[
                { speaker: "Anna", text: "I can't believe your little brother is [graduating](tooltip:graduate) from high school next week." },
                { speaker: "Ben", text: "I know. Wow, time flies! [It feels like just yesterday](tooltip:feels-like-yesterday) we were teaching him how to ride a bike." },
                { speaker: "Anna", text: "[Looking back](tooltip:looking-back), we had such a great [childhood](tooltip:childhood). We were so [independent](tooltip:independent)." },
                { speaker: "Ben", text: "Yes,[those were the good old days](tooltip:good-old-days). I feel so [nostalgic](tooltip:nostalgic) looking at these photos." },
                { speaker: "Anna", text: "What is your brother going to do next? Is he [moving out](tooltip:move-out)?" },
                { speaker: "Ben", text: "He's taking a gap year to travel the world before [settling down](tooltip:settle-down) to study at university." },
                { speaker: "Anna", text: "That is an amazing[milestone](tooltip:milestone). He is definitely [coming of age](tooltip:coming-of-age)." },
                { speaker: "Ben", text: "Yes, he is. [I remember when](tooltip:i-remember-when) he was just a baby!" }
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
                    title: "Life Stages & Events",
                    audio: "TTS: Childhood. Adolescence. Adulthood. Retirement. Generation. Milestone. Birth. Graduation. Engagement. Wedding. Anniversary. Funeral.",
                    items:[
                        { term: "Childhood", trans: "Infância" },
                        { term: "Adolescence", trans: "Adolescência" },
                        { term: "Adulthood", trans: "Fase adulta / Maioridade" },
                        { term: "Retirement", trans: "Aposentadoria" },
                        { term: "Generation", trans: "Geração" },
                        { term: "Milestone", trans: "Marco (etapa importante)" },
                        { term: "Birth", trans: "Nascimento" },
                        { term: "Graduation", trans: "Formatura" },
                        { term: "Engagement", trans: "Noivado" },
                        { term: "Wedding", trans: "Casamento (cerimônia)" },
                        { term: "Anniversary", trans: "Aniversário (de casamento/evento)" },
                        { term: "Funeral", trans: "Funeral / Enterro" }
                    ]
                },
                {
                    title: "Action Verbs",
                    audio: "TTS: To be born. To grow up. To raise. To graduate. To move out. To date. To propose. To get married. To divorce. To retire. To pass away. To reminisce.",
                    items:[
                        { term: "To be born", trans: "Nascer" },
                        { term: "To grow up", trans: "Crescer" },
                        { term: "To raise", trans: "Criar (filhos/animais)" },
                        { term: "To graduate", trans: "Formar-se / Graduar-se" },
                        { term: "To move out", trans: "Mudar-se (sair de casa)" },
                        { term: "To date", trans: "Namorar / Sair com alguém" },
                        { term: "To propose", trans: "Pedir em casamento / Propor" },
                        { term: "To get married", trans: "Casar-se" },
                        { term: "To divorce", trans: "Divorciar-se" },
                        { term: "To retire", trans: "Aposentar-se" },
                        { term: "To pass away", trans: "Falecer (morrer)" },
                        { term: "To reminisce", trans: "Relembrar (com nostalgia)" }
                    ]
                },
                {
                    title: "Adjectives & Memories",
                    audio: "TTS: Memory. Nostalgia. To remember. Young. Middle-aged. Elderly. Mature. Immature. Independent. Memorable. Nostalgic. Unforgettable.",
                    items:[
                        { term: "Memory", trans: "Memória / Lembrança" },
                        { term: "Nostalgia", trans: "Nostalgia" },
                        { term: "To remember", trans: "Lembrar" },
                        { term: "Young", trans: "Jovem" },
                        { term: "Middle-aged", trans: "De meia-idade" },
                        { term: "Elderly", trans: "Idoso(a)" },
                        { term: "Mature", trans: "Maduro(a)" },
                        { term: "Immature", trans: "Imaturo(a)" },
                        { term: "Independent", trans: "Independente" },
                        { term: "Memorable", trans: "Memorável" },
                        { term: "Nostalgic", trans: "Nostálgico(a)" },
                        { term: "Unforgettable", trans: "Inesquecível" }
                    ]
                }
            ],

            // --- 2B: EXAMPLES ---
            exampleGroups:[
                {
                    title: "Life Stages & Events",
                    audio: "TTS: I had a very happy childhood. Adolescence can be a difficult time for teenagers. Adulthood brings many new responsibilities. He wants to travel the world during his retirement. This new technology is very popular with the younger generation. Buying a house is a huge financial milestone. They celebrated the birth of their first child. Her parents cried at her high school graduation. He bought a diamond ring for the engagement. We danced all night at their beautiful wedding. Today is my parents' twentieth wedding anniversary. We wore black clothes to attend the funeral.",
                    items:[
                        { term: "Childhood", sent: "I had a very happy childhood.", trans: "Eu tive uma infância muito feliz." },
                        { term: "Adolescence", sent: "Adolescence can be a difficult time for teenagers.", trans: "A adolescência pode ser uma época difícil para os adolescentes." },
                        { term: "Adulthood", sent: "Adulthood brings many new responsibilities.", trans: "A fase adulta traz muitas responsabilidades novas." },
                        { term: "Retirement", sent: "He wants to travel the world during his retirement.", trans: "Ele quer viajar pelo mundo durante sua aposentadoria." },
                        { term: "Generation", sent: "This new technology is very popular with the younger generation.", trans: "Esta nova tecnologia é muito popular entre a geração mais jovem." },
                        { term: "Milestone", sent: "Buying a house is a huge financial milestone.", trans: "Comprar uma casa é um marco financeiro enorme." },
                        { term: "Birth", sent: "They celebrated the birth of their first child.", trans: "Eles celebraram o nascimento de seu primeiro filho." },
                        { term: "Graduation", sent: "Her parents cried at her high school graduation.", trans: "Os pais dela choraram na formatura do ensino médio dela." },
                        { term: "Engagement", sent: "He bought a diamond ring for the engagement.", trans: "Ele comprou um anel de diamante para o noivado." },
                        { term: "Wedding", sent: "We danced all night at their beautiful wedding.", trans: "Nós dançamos a noite toda no lindo casamento deles." },
                        { term: "Anniversary", sent: "Today is my parents' twentieth wedding anniversary.", trans: "Hoje é o vigésimo aniversário de casamento dos meus pais." },
                        { term: "Funeral", sent: "We wore black clothes to attend the funeral.", trans: "Nós vestimos roupas pretas para comparecer ao funeral." }
                    ]
                },
                {
                    title: "Action Verbs",
                    audio: "TTS: I was born in the year two thousand. I want my children to grow up in a safe city. It is hard work to raise three kids. He will graduate with a degree in science. I plan to move out of my parents' house next year. They decided to date exclusively. He kneeled down to propose to his girlfriend. We want to get married on the beach. Sadly, they chose to divorce after five years. She will retire at the age of sixty-five. My grandfather passed away peacefully in his sleep. We sat around the fire to reminisce about school days.",
                    items:[
                        { term: "To be born", sent: "I was born in the year 2000.", trans: "Eu nasci no ano 2000." },
                        { term: "To grow up", sent: "I want my children to grow up in a safe city.", trans: "Quero que meus filhos cresçam em uma cidade segura." },
                        { term: "To raise", sent: "It is hard work to raise three kids.", trans: "É um trabalho duro criar três filhos." },
                        { term: "To graduate", sent: "He will graduate with a degree in science.", trans: "Ele vai se formar com um diploma em ciências." },
                        { term: "To move out", sent: "I plan to move out of my parents' house next year.", trans: "Eu planejo me mudar da casa dos meus pais no ano que vem." },
                        { term: "To date", sent: "They decided to date exclusively.", trans: "Eles decidiram namorar exclusivamente." },
                        { term: "To propose", sent: "He kneeled down to propose to his girlfriend.", trans: "Ele se ajoelhou para pedir a namorada em casamento." },
                        { term: "To get married", sent: "We want to get married on the beach.", trans: "Nós queremos nos casar na praia." },
                        { term: "To divorce", sent: "Sadly, they chose to divorce after five years.", trans: "Infelizmente, eles escolheram se divorciar após cinco anos." },
                        { term: "To retire", sent: "She will retire at the age of 65.", trans: "Ela vai se aposentar aos 65 anos." },
                        { term: "To pass away", sent: "My grandfather passed away peacefully in his sleep.", trans: "Meu avô faleceu pacificamente durante o sono." },
                        { term: "To reminisce", sent: "We sat around the fire to reminisce about school days.", trans: "Sentamos ao redor da fogueira para relembrar os dias de escola." }
                    ]
                },
                {
                    title: "Adjectives & Memories",
                    audio: "TTS: I have a happy memory of playing in the park. Hearing that song fills me with nostalgia. I will always remember our first trip together. The young boy ran fast across the field. The middle-aged man started a new career. Please offer your seat to the elderly woman. She acts in a very mature and responsible way. Complaining about small things is very immature. Living alone makes you feel very independent. The concert was a highly memorable event. Looking at old photos makes me feel nostalgic. Our trip to Italy was unforgettable.",
                    items:[
                        { term: "Memory", sent: "I have a happy memory of playing in the park.", trans: "Eu tenho uma lembrança feliz de brincar no parque." },
                        { term: "Nostalgia", sent: "Hearing that song fills me with nostalgia.", trans: "Ouvir aquela música me enche de nostalgia." },
                        { term: "To remember", sent: "I will always remember our first trip together.", trans: "Sempre me lembrarei da nossa primeira viagem juntos." },
                        { term: "Young", sent: "The young boy ran fast across the field.", trans: "O menino jovem correu rápido pelo campo." },
                        { term: "Middle-aged", sent: "The middle-aged man started a new career.", trans: "O homem de meia-idade começou uma nova carreira." },
                        { term: "Elderly", sent: "Please offer your seat to the elderly woman.", trans: "Por favor, ofereça seu assento à senhora idosa." },
                        { term: "Mature", sent: "She acts in a very mature and responsible way.", trans: "Ela age de uma maneira muito madura e responsável." },
                        { term: "Immature", sent: "Complaining about small things is very immature.", trans: "Reclamar de coisas pequenas é muito imaturo." },
                        { term: "Independent", sent: "Living alone makes you feel very independent.", trans: "Morar sozinho faz você se sentir muito independente." },
                        { term: "Memorable", sent: "The concert was a highly memorable event.", trans: "O show foi um evento altamente memorável." },
                        { term: "Nostalgic", sent: "Looking at old photos makes me feel nostalgic.", trans: "Olhar fotos antigas me faz sentir nostálgico." },
                        { term: "Unforgettable", sent: "Our trip to Italy was unforgettable.", trans: "Nossa viagem à Itália foi inesquecível." }
                    ]
                }
            ],

            // --- 2C: PRACTICE ---
            drillGroups:[
                {
                    title: "Life Stages & Events",
                    drills:[
                        { q: "The state of being a child is ________.", options:[{t: "Adolescence", c: false}, {t: "Childhood", c: true}, {t: "Retirement", c: false}, {t: "Adulthood", c: false}], type: "mcq" },
                        { q: "The period following the onset of puberty during which a young person develops is ________.", options:[{t: "Adolescence", c: true}, {t: "Childhood", c: false}, {t: "Generation", c: false}, {t: "Retirement", c: false}], type: "mcq" },
                        { q: "The state of being fully grown or mature is ________.", options:[{t: "Childhood", c: false}, {t: "Adulthood", c: true}, {t: "Milestone", c: false}, {t: "Adolescence", c: false}], type: "mcq" },
                        { q: "The action or fact of leaving one's job and ceasing to work is ________.", options:[{t: "Retirement", c: true}, {t: "Generation", c: false}, {t: "Engagement", c: false}, {t: "Birth", c: false}], type: "mcq" },
                        { q: "All of the people born and living at about the same time is a ________.", options:[{t: "Generation", c: true}, {t: "Milestone", c: false}, {t: "Wedding", c: false}, {t: "Childhood", c: false}], type: "mcq" },
                        { q: "A significant event or stage in the life, progress, or development of a person is a ________.", options:[{t: "Milestone", c: true}, {t: "Generation", c: false}, {t: "Funeral", c: false}, {t: "Birth", c: false}], type: "mcq" },
                        { q: "The emergence of a baby or other young from the body of its mother is ________.", options:[{t: "Graduation", c: false}, {t: "Birth", c: true}, {t: "Wedding", c: false}, {t: "Anniversary", c: false}], type: "mcq" },
                        { q: "The receiving or conferring of an academic degree or diploma is ________.", options:[{t: "Engagement", c: false}, {t: "Graduation", c: true}, {t: "Funeral", c: false}, {t: "Birth", c: false}], type: "mcq" },
                        { q: "A formal agreement to get married is an ________.", options:[{t: "Engagement", c: true}, {t: "Anniversary", c: false}, {t: "Milestone", c: false}, {t: "Adulthood", c: false}], type: "mcq" },
                        { q: "A marriage ceremony, especially considered as including the associated celebrations, is a ________.", options:[{t: "Funeral", c: false}, {t: "Wedding", c: true}, {t: "Graduation", c: false}, {t: "Birth", c: false}], type: "mcq" },
                        { q: "The date on which an event took place in a previous year is an ________.", options:[{t: "Anniversary", c: true}, {t: "Engagement", c: false}, {t: "Milestone", c: false}, {t: "Childhood", c: false}], type: "mcq" },
                        { q: "The ceremonies honoring a dead person are a ________.", options:[{t: "Wedding", c: false}, {t: "Funeral", c: true}, {t: "Retirement", c: false}, {t: "Graduation", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Action Verbs",
                    drills:[
                        { q: "To be brought into life is ________.", options:[{t: "To grow up", c: false}, {t: "To be born", c: true}, {t: "To raise", c: false}, {t: "To date", c: false}], type: "mcq" },
                        { q: "To advance to maturity; to spend one's childhood is ________.", options:[{t: "To get married", c: false}, {t: "To raise", c: false}, {t: "To grow up", c: true}, {t: "To propose", c: false}], type: "mcq" },
                        { q: "To bring up a child is ________.", options:[{t: "To raise", c: true}, {t: "To grow up", c: false}, {t: "To retire", c: false}, {t: "To move out", c: false}], type: "mcq" },
                        { q: "To successfully complete an academic degree is ________.", options:[{t: "To graduate", c: true}, {t: "To pass away", c: false}, {t: "To propose", c: false}, {t: "To date", c: false}], type: "mcq" },
                        { q: "To leave one's home and go to live somewhere else is ________.", options:[{t: "To move out", c: true}, {t: "To divorce", c: false}, {t: "To grow up", c: false}, {t: "To raise", c: false}], type: "mcq" },
                        { q: "To go out with someone in whom one is romantically interested is ________.", options:[{t: "To propose", c: false}, {t: "To date", c: true}, {t: "To retire", c: false}, {t: "To graduate", c: false}], type: "mcq" },
                        { q: "To offer marriage to someone is ________.", options:[{t: "To propose", c: true}, {t: "To get married", c: false}, {t: "To divorce", c: false}, {t: "To move out", c: false}], type: "mcq" },
                        { q: "To be joined in marriage is ________.", options:[{t: "To get married", c: true}, {t: "To propose", c: false}, {t: "To reminisce", c: false}, {t: "To raise", c: false}], type: "mcq" },
                        { q: "To legally dissolve one's marriage is ________.", options:[{t: "To pass away", c: false}, {t: "To retire", c: false}, {t: "To divorce", c: true}, {t: "To date", c: false}], type: "mcq" },
                        { q: "To leave one's job and cease to work, typically upon reaching the normal age, is ________.", options:[{t: "To retire", c: true}, {t: "To move out", c: false}, {t: "To graduate", c: false}, {t: "To grow up", c: false}], type: "mcq" },
                        { q: "A polite way of saying 'to die' is ________.", options:[{t: "To pass away", c: true}, {t: "To move out", c: false}, {t: "To retire", c: false}, {t: "To raise", c: false}], type: "mcq" },
                        { q: "To indulge in enjoyable recollection of past events is ________.", options:[{t: "To reminisce", c: true}, {t: "To propose", c: false}, {t: "To graduate", c: false}, {t: "To date", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Adjectives & Memories",
                    drills:[
                        { q: "Something remembered from the past is a ________.", options:[{t: "Nostalgia", c: false}, {t: "Memory", c: true}, {t: "Elderly", c: false}, {t: "Immature", c: false}], type: "mcq" },
                        { q: "A sentimental longing or wistful affection for the past is ________.", options:[{t: "Memory", c: false}, {t: "Nostalgia", c: true}, {t: "Mature", c: false}, {t: "Young", c: false}], type: "mcq" },
                        { q: "To bring to one's mind an awareness of someone or something from the past is ________.", options:[{t: "To remember", c: true}, {t: "To reminisce", c: false}, {t: "Nostalgic", c: false}, {t: "Memorable", c: false}], type: "mcq" },
                        { q: "Having lived or existed for only a short time is ________.", options:[{t: "Elderly", c: false}, {t: "Middle-aged", c: false}, {t: "Young", c: true}, {t: "Mature", c: false}], type: "mcq" },
                        { q: "Aged about 45 to 65 is ________.", options:[{t: "Middle-aged", c: true}, {t: "Elderly", c: false}, {t: "Young", c: false}, {t: "Immature", c: false}], type: "mcq" },
                        { q: "A polite word for 'old' when referring to a person is ________.", options:[{t: "Elderly", c: true}, {t: "Middle-aged", c: false}, {t: "Mature", c: false}, {t: "Independent", c: false}], type: "mcq" },
                        { q: "Fully developed physically; behaving like an adult is ________.", options:[{t: "Mature", c: true}, {t: "Immature", c: false}, {t: "Young", c: false}, {t: "Nostalgic", c: false}], type: "mcq" },
                        { q: "Having or showing an emotional or intellectual development appropriate to someone younger is ________.", options:[{t: "Mature", c: false}, {t: "Immature", c: true}, {t: "Elderly", c: false}, {t: "Independent", c: false}], type: "mcq" },
                        { q: "Free from outside control; not depending on another's authority is ________.", options:[{t: "Independent", c: true}, {t: "Immature", c: false}, {t: "Nostalgic", c: false}, {t: "Memorable", c: false}], type: "mcq" },
                        { q: "Worth remembering or easily remembered, especially because of being special or unusual is ________.", options:[{t: "Memorable", c: true}, {t: "Unforgettable", c: false}, {t: "Nostalgic", c: false}, {t: "Young", c: false}], type: "mcq" },
                        { q: "Feeling, evoking, or characterized by a sentimental longing for the past is ________.", options:[{t: "Nostalgic", c: true}, {t: "Memorable", c: false}, {t: "Independent", c: false}, {t: "Mature", c: false}], type: "mcq" },
                        { q: "Impossible to forget; very strongly impressed on the mind is ________.", options:[{t: "Unforgettable", c: true}, {t: "Immature", c: false}, {t: "Middle-aged", c: false}, {t: "Elderly", c: false}], type: "mcq" }
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
                    title: "Stages & Reminiscing",
                    audio: "TTS: When I was a kid. Growing up. In my teenage years. I remember when. Looking back. It feels like just yesterday.",
                    explanation: "Phrases used to talk about your past and express nostalgia about your childhood and adolescence.<br><span style='color:var(--primary-blue); font-style:italic;'>(Frases usadas para falar sobre o seu passado e expressar nostalgia sobre a sua infância e adolescência.)</span>",
                    samples:[
                        { en: "<b>When I was a kid</b>, I played outside every day.", pt: "<span style='color:var(--primary-blue)'>(Quando eu era criança, brincava na rua todos os dias.)</span>" },
                        { en: "<b>Growing up</b> in a small town was very peaceful.", pt: "<span style='color:var(--primary-blue)'>(Crescer em uma cidade pequena foi muito pacífico.)</span>" },
                        { en: "<b>In my teenage years</b>, I listened to rock music.", pt: "<span style='color:var(--primary-blue)'>(Na minha adolescência, eu escutava música de rock.)</span>" },
                        { en: "<b>I remember when</b> we used to climb that tree.", pt: "<span style='color:var(--primary-blue)'>(Eu me lembro de quando costumávamos subir naquela árvore.)</span>" },
                        { en: "<b>Looking back</b>, high school was actually a fun time.", pt: "<span style='color:var(--primary-blue)'>(Olhando para trás, o ensino médio foi na verdade uma época divertida.)</span>" },
                        { en: "You are already graduating! <b>It feels like just yesterday</b> you were ten.", pt: "<span style='color:var(--primary-blue)'>(Você já está se formando! Parece que foi ontem que você tinha dez anos.)</span>" }
                    ]
                },
                {
                    title: "Life Events",
                    audio: "TTS: Coming of age. Settle down. Start a family. Get your driver's license. Tie the knot. Have a baby.",
                    explanation: "Idioms and collocations to describe huge milestones in a young adult's life.<br><span style='color:var(--primary-blue); font-style:italic;'>(Expressões idiomáticas e combinações de palavras para descrever marcos enormes na vida de um jovem adulto.)</span>",
                    samples:[
                        { en: "Graduating from college is a <b>coming of age</b> moment.", pt: "<span style='color:var(--primary-blue)'>(Formar-se na faculdade é um momento de amadurecimento/maioridade.)</span>" },
                        { en: "He traveled a lot, but now he wants to <b>settle down</b>.", pt: "<span style='color:var(--primary-blue)'>(Ele viajou muito, mas agora quer sossegar/se estabelecer.)</span>" },
                        { en: "They bought a house because they want to <b>start a family</b>.", pt: "<span style='color:var(--primary-blue)'>(Eles compraram uma casa porque querem começar uma família.)</span>" },
                        { en: "At sixteen, you can <b>get your driver's license</b>.", pt: "<span style='color:var(--primary-blue)'>(Aos dezesseis anos, você pode tirar sua carteira de motorista.)</span>" },
                        { en: "They got engaged and plan to <b>tie the knot</b> next summer.", pt: "<span style='color:var(--primary-blue)'>(Eles ficaram noivos e planejam se casar no próximo verão.)</span>" },
                        { en: "My sister is going to <b>have a baby</b> in March.", pt: "<span style='color:var(--primary-blue)'>(Minha irmã vai ter um bebê em março.)</span>" }
                    ]
                },
                {
                    title: "Questions & Discussions",
                    audio: "TTS: Retire from work. Raise children. Buy your first house. Those were the good old days. Where did you grow up? What is your favorite childhood memory?",
                    explanation: "Phrases regarding older adult milestones and common conversation starters to share memories.<br><span style='color:var(--primary-blue); font-style:italic;'>(Frases referentes a marcos de adultos mais velhos e inícios de conversas comuns para compartilhar memórias.)</span>",
                    samples:[
                        { en: "My dad will <b>retire from work</b> at 65.", pt: "<span style='color:var(--primary-blue)'>(Meu pai vai se aposentar do trabalho aos 65.)</span>" },
                        { en: "It is a big responsibility to <b>raise children</b>.", pt: "<span style='color:var(--primary-blue)'>(É uma grande responsabilidade criar filhos.)</span>" },
                        { en: "It feels amazing to <b>buy your first house</b>.", pt: "<span style='color:var(--primary-blue)'>(É uma sensação incrível comprar a sua primeira casa.)</span>" },
                        { en: "We used to play outside all day. <b>Those were the good old days</b>.", pt: "<span style='color:var(--primary-blue)'>(Costumávamos brincar na rua o dia todo. Aqueles eram os bons e velhos tempos.)</span>" },
                        { en: "<b>Where did you grow up?</b>", pt: "<span style='color:var(--primary-blue)'>(Onde você cresceu?)</span>" },
                        { en: "<b>What is your favorite childhood memory?</b>", pt: "<span style='color:var(--primary-blue)'>(Qual é a sua lembrança favorita de infância?)</span>" }
                    ]
                }
            ],

            // --- 3B: DIALOGUES ---
            dialogueGroups:[
                {
                    title: "Dialogue 1: Childhood Origins",
                    audio: "TTS: Where did you grow up? I grew up in a small village. Growing up there was very peaceful. When I was a kid, I loved playing in the forest.",
                    lines:[
                        { speaker: "Sarah", text: "Where did you grow up?", pt: "(Onde você cresceu?)" },
                        { speaker: "John", text: "I grew up in a small village. Growing up there was very peaceful. When I was a kid, I loved playing in the forest.", pt: "(Eu cresci em uma pequena vila. Crescer lá era muito tranquilo. Quando eu era criança, adorava brincar na floresta.)" }
                    ]
                },
                {
                    title: "Dialogue 2: Driving and Teens",
                    audio: "TTS: Did you have a car in your teenage years? Yes, I did. A car is important for coming of age. I agree. I was so happy to get your driver's license back then. You mean my license? Yes!",
                    lines:[
                        { speaker: "Leo", text: "Did you have a car in your teenage years?", pt: "(Você tinha um carro na sua adolescência?)" },
                        { speaker: "Mia", text: "Yes, I did. A car is important for coming of age. I was so happy to get your driver's license back then. You mean my license? Yes!", pt: "(Sim, eu tinha. Um carro é importante para a maioridade. Eu estava tão feliz em tirar a sua carteira de motorista naquela época. Você quer dizer a minha carteira? Sim!)" } // Logic fix needed
                    ]
                },
                {
                    title: "Dialogue 2: Driving and Teens", // Fixed
                    audio: "TTS: Did you have a car in your teenage years? Yes. In my town, driving is a big coming of age moment. I remember. Everyone wanted to get your driver's license fast. You mean their license? Yes!",
                    lines:[
                        { speaker: "Leo", text: "Did you have a car in your teenage years?", pt: "(Você tinha um carro na sua adolescência?)" },
                        { speaker: "Mia", text: "Yes. In my town, driving is a big coming of age moment. Everyone wanted to get your driver's license fast.", pt: "(Sim. Na minha cidade, dirigir é um grande momento de amadurecimento. Todo mundo queria tirar a carteira de motorista rápido.)" }
                    ] // Let's use the phrase 'get your driver's license' neutrally.
                },
                {
                    title: "Dialogue 2: Driving and Teens", // Final fix
                    audio: "TTS: Did you have a car in your teenage years? Yes. Learning to drive is a big coming of age moment. I agree. It is so exciting to get your driver's license.",
                    lines:[
                        { speaker: "Leo", text: "Did you have a car in your teenage years?", pt: "(Você tinha um carro na sua adolescência?)" },
                        { speaker: "Mia", text: "Yes. Learning to drive is a big coming of age moment. I agree. It is so exciting to get your driver's license.", pt: "(Sim. Aprender a dirigir é um grande momento de amadurecimento. Eu concordo. É muito empolgante tirar a carteira de motorista.)" } // Adjusted speakers
                    ]
                },
                {
                    title: "Dialogue 2: Driving and Teens", // Strict 2 char alternating
                    audio: "TTS: Did you have a car in your teenage years? Yes. Learning to drive is a big coming of age moment. I agree. It is so exciting to get your driver's license.",
                    lines:[
                        { speaker: "Leo", text: "Did you have a car in your teenage years?", pt: "(Você tinha um carro na sua adolescência?)" },
                        { speaker: "Mia", text: "Yes. Learning to drive is a big coming of age moment.", pt: "(Sim. Aprender a dirigir é um grande momento de amadurecimento.)" },
                        { speaker: "Leo", text: "I agree. It is so exciting to get your driver's license.", pt: "(Eu concordo. É muito empolgante tirar a carteira de motorista.)" }
                    ]
                },
                {
                    title: "Dialogue 3: Settling Down",
                    audio: "TTS: Mark and Lisa want to settle down soon. That's great. Do they want to start a family? Yes, they plan to have a baby next year.",
                    lines:[
                        { speaker: "Chloe", text: "Mark and Lisa want to settle down soon.", pt: "(Mark e Lisa querem se estabelecer/sossegar em breve.)" },
                        { speaker: "David", text: "That's great. Do they want to start a family?", pt: "(Isso é ótimo. Eles querem começar uma família?)" },
                        { speaker: "Chloe", text: "Yes, they plan to have a baby next year.", pt: "(Sim, eles planejam ter um bebê no ano que vem.)" }
                    ]
                },
                {
                    title: "Dialogue 4: Big Commitments",
                    audio: "TTS: Did you hear? Tom and Emma are going to tie the knot! Wow. Are they going to buy your first house too? You mean their house? Yes, they are looking for a place to raise children.",
                    lines:[
                        { speaker: "Anna", text: "Did you hear? Tom and Emma are going to tie the knot!", pt: "(Você soube? Tom e Emma vão se casar!)" },
                        { speaker: "Ben", text: "Wow. Are they going to buy your first house too? I mean, their house? Yes, they are looking for a place to raise children.", pt: "(Uau. Eles vão comprar a primeira casa também? Digo, a casa deles? Sim, eles estão procurando um lugar para criar os filhos.)" }
                    ] // Will adjust the "your" idiom to fit naturally. "Buy your first house" is usually said in 2nd person general.
                },
                {
                    title: "Dialogue 4: Big Commitments", // Adjusted
                    audio: "TTS: Did you hear? Tom and Emma are going to tie the knot! Wow. It's a big step to tie the knot and buy your first house. Exactly. And soon they will raise children, too.",
                    lines:[
                        { speaker: "Anna", text: "Did you hear? Tom and Emma are going to tie the knot!", pt: "(Você soube? Tom e Emma vão se casar!)" },
                        { speaker: "Ben", text: "Wow. It's a big step to tie the knot and buy your first house.", pt: "(Uau. É um grande passo se casar e comprar a sua primeira casa.)" },
                        { speaker: "Anna", text: "Exactly. And soon they will raise children, too.", pt: "(Exatamente. E logo eles vão criar filhos também.)" }
                    ]
                },
                {
                    title: "Dialogue 5: The Passing of Time",
                    audio: "TTS: It feels like just yesterday we were in college. I know. Looking back, we had so much fun. Now our boss is about to retire from work!",
                    lines:[
                        { speaker: "Emma", text: "It feels like just yesterday we were in college.", pt: "(Parece que foi ontem que estávamos na faculdade.)" },
                        { speaker: "Liam", text: "I know. Looking back, we had so much fun. Now our boss is about to retire from work!", pt: "(Eu sei. Olhando para trás, nos divertimos muito. Agora nosso chefe está prestes a se aposentar do trabalho!)" }
                    ]
                },
                {
                    title: "Dialogue 6: Nostalgia",
                    audio: "TTS: What is your favorite childhood memory? I remember when my dad took me fishing. Those were the good old days.",
                    lines:[
                        { speaker: "Lucas", text: "What is your favorite childhood memory?", pt: "(Qual é a sua lembrança favorita de infância?)" },
                        { speaker: "Sarah", text: "I remember when my dad took me fishing. Those were the good old days.", pt: "(Eu me lembro de quando meu pai me levava para pescar. Aqueles eram os bons e velhos tempos.)" }
                    ]
                }
            ],

            // --- 3C: PRACTICE ---
            grammarDrillGroups:[
                {
                    title: "Stages & Reminiscing",
                    drills:[
                        { q: "________ I was a kid, I loved cartoons.", options:[{t: "When", c: true}, {t: "Where", c: false}, {t: "Who", c: false}, {t: "Why", c: false}], type: "mcq" },
                        { q: "________ up in a big city is very noisy.", options:[{t: "Going", c: false}, {t: "Making", c: false}, {t: "Growing", c: true}, {t: "Doing", c: false}], type: "mcq" },
                        { q: "In my ________ years, I learned to drive.", options:[{t: "kid", c: false}, {t: "adult", c: false}, {t: "teenage", c: true}, {t: "retire", c: false}], type: "mcq" },
                        { q: "I ________ when we used to play here.", options:[{t: "memory", c: false}, {t: "remember", c: true}, {t: "nostalgic", c: false}, {t: "forget", c: false}], type: "mcq" },
                        { q: "Looking ________, it was a great experience.", options:[{t: "forward", c: false}, {t: "back", c: true}, {t: "behind", c: false}, {t: "after", c: false}], type: "mcq" },
                        { q: "It feels like just ________ we met.", options:[{t: "today", c: false}, {t: "tomorrow", c: false}, {t: "yesterday", c: true}, {t: "morning", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Life Events",
                    drills:[
                        { q: "Graduation is a big ________ of age moment.", options:[{t: "going", c: false}, {t: "coming", c: true}, {t: "making", c: false}, {t: "taking", c: false}], type: "mcq" },
                        { q: "After traveling, he wants to ________ down.", options:[{t: "sit", c: false}, {t: "settle", c: true}, {t: "stay", c: false}, {t: "move", c: false}], type: "mcq" },
                        { q: "They got married to ________ a family.", options:[{t: "begin", c: false}, {t: "start", c: true}, {t: "make", c: false}, {t: "do", c: false}], type: "mcq" },
                        { q: "You must pass a test to get your driver's ________.", options:[{t: "card", c: false}, {t: "paper", c: false}, {t: "license", c: true}, {t: "ticket", c: false}], type: "mcq" },
                        { q: "They are engaged and will ________ the knot soon.", options:[{t: "tie", c: true}, {t: "make", c: false}, {t: "do", c: false}, {t: "cut", c: false}], type: "mcq" },
                        { q: "My wife is going to ________ a baby.", options:[{t: "make", c: false}, {t: "do", c: false}, {t: "have", c: true}, {t: "take", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Questions & Discussions",
                    drills:[
                        { q: "My grandfather will ________ from work next year.", options:[{t: "quit", c: false}, {t: "fire", c: false}, {t: "retire", c: true}, {t: "leave", c: false}], type: "mcq" },
                        { q: "It takes a lot of patience to ________ children.", options:[{t: "grow", c: false}, {t: "rise", c: false}, {t: "raise", c: true}, {t: "make", c: false}], type: "mcq" },
                        { q: "It is expensive to ________ your first house.", options:[{t: "rent", c: false}, {t: "buy", c: true}, {t: "sell", c: false}, {t: "make", c: false}], type: "mcq" },
                        { q: "Those were the good ________ days.", options:[{t: "old", c: true}, {t: "past", c: false}, {t: "new", c: false}, {t: "young", c: false}], type: "mcq" },
                        { q: "________ did you grow up?", options:[{t: "What", c: false}, {t: "Who", c: false}, {t: "Where", c: true}, {t: "When", c: false}], type: "mcq" },
                        { q: "What is your favorite childhood ________?", options:[{t: "memory", c: true}, {t: "nostalgia", c: false}, {t: "remember", c: false}, {t: "time", c: false}], type: "mcq" }
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
                { text: "Where did you grow up? ↘", audio: "TTS: Where did you grow up?" },
                { text: "Growing up in the countryside was very peaceful. ↘", audio: "TTS: Growing up in the countryside was very peaceful." },
                { text: "What is your favorite childhood memory? ↘", audio: "TTS: What is your favorite childhood memory?" },
                { text: "I remember when we got our first dog. ↘", audio: "TTS: I remember when we got our first dog." },
                { text: "Looking back, those were the good old days. ↘", audio: "TTS: Looking back, those were the good old days." },
                { text: "It feels like just yesterday I was in high school. ↘", audio: "TTS: It feels like just yesterday I was in high school." },
                { text: "Getting your driver's license is a big coming of age moment. ↘", audio: "TTS: Getting your driver's license is a big coming of age moment." },
                { text: "Are they going to tie the knot this year? ↗", audio: "TTS: Are they going to tie the knot this year?" },
                { text: "They want to buy their first house and start a family. ↘", audio: "TTS: They want to buy their first house and start a family." },
                { text: "My grandfather decided to retire from work. ↘", audio: "TTS: My grandfather decided to retire from work." }
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
                    audio: "TTS: Anna: I am so happy for my brother. He is graduating today! Mark: That's a great milestone. Time flies! Anna: It feels like just yesterday he was a baby. Mark: Yes, those were the good old days.",
                    text: "Anna: I am so happy for my brother. He is [graduating] today!<br>Mark: That's a great [milestone]. Time flies!<br>Anna: It feels like just [yesterday] he was a baby.<br>Mark: Yes, those were the good old [days]."
                },
                {
                    type: "dropdown",
                    instruction: "Listen to the dialogue about the future.",
                    audio: "TTS: Lisa: What are your plans after you move out? John: I want to settle down and buy my first house. Lisa: Are you going to start a family, too? John: Yes, we are planning to have a baby soon.",
                    questions:[
                        { q: "Lisa: What are your plans after you[move* | grow | born] out?", a: "move" },
                        { q: "John: I want to[settle* | tie | reminisce] down and buy my first house.", a: "settle" },
                        { q: "Lisa: Are you going to [start* | retire | divorce] a family, too?", a: "start" },
                        { q: "John: Yes, we are planning to [have* | raise | pass] a baby soon.", a: "have" }
                    ]
                },
                {
                    type: "audio-choice",
                    instruction: "Listen to the speaker. What is she doing?",
                    audio: "TTS: When I was a kid, my parents used to take me to the lake every summer. Looking back, I feel so nostalgic. We would swim all day. I will never forget it.",
                    options:[
                        { t: "She is predicting her future career.", c: false },
                        { t: "She is planning her retirement.", c: false },
                        { t: "She is reminiscing about a favorite childhood memory.", c: true },
                        { t: "She is studying for her final exams.", c: false }
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
                    title: "Dialogue - High School Reunion",
                    audio: "TTS: Sarah: Hi Tom! It's so good to see you again at the reunion. Tom: Sarah! Wow, it feels like just yesterday we were in our teenage years. Sarah: I know. Looking back, we had so much fun. Remember when we skipped class? Tom: Yes! Those were the good old days. Now we are both in adulthood with so many responsibilities. Sarah: True. Did you hear about Emma? She is going to tie the knot! Tom: That is an amazing milestone. I'm very happy for her.",
                    body: "<b>Sarah:</b> Hi Tom! It's so good to see you again at the reunion.<br><b>Tom:</b> Sarah! Wow, [it feels like just yesterday](tooltip:feels-like-yesterday) we were [in our teenage years](tooltip:in-teenage-years).<br><b>Sarah:</b> I know. [Looking back](tooltip:looking-back), we had so much fun.[I remember when](tooltip:i-remember-when) we skipped class?<br><b>Tom:</b> Yes![Those were the good old days](tooltip:good-old-days). Now we are both in [adulthood](tooltip:adulthood) with so many responsibilities.<br><b>Sarah:</b> True. Did you hear about Emma? She is going to [tie the knot](tooltip:tie-the-knot)!<br><b>Tom:</b> That is an amazing [milestone](tooltip:milestone). I'm very happy for her.",
                    questions:[
                        { q: "What stage of life are Sarah and Tom in now?", options:[{t: "Childhood.", c: false}, {t: "Adolescence.", c: false}, {t: "Adulthood.", c: true}], type: "mcq" },
                        { q: "How does Tom feel about their time in high school?", options:[{t: "He thinks it was boring.", c: false}, {t: "He thinks those were the good old days.", c: true}, {t: "He forgot everything about it.", c: false}], type: "mcq" },
                        { q: "What is Emma going to do?", options:[{t: "Get married.", c: true}, {t: "Retire from work.", c: false}, {t: "Get a driver's license.", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Dialogue - The Big Move",
                    audio: "TTS: David: Mom, I found an apartment. I am going to move out next month. Mom: Oh, David. I am so proud of you, but it makes me sad. You are growing up so fast! David: Don't worry. I will visit you often. Mom: It's just that getting your own place is a big coming of age moment. David: I know. I am trying to become more independent. Mom: You are very mature. Are you going to settle down soon? David: Not yet! I want to date and travel before I start a family.",
                    body: "<b>David:</b> Mom, I found an apartment. I am going to [move out](tooltip:move-out) next month.<br><b>Mom:</b> Oh, David. I am so proud of you, but it makes me sad. You are [growing up](tooltip:grow-up) so fast!<br><b>David:</b> Don't worry. I will visit you often.<br><b>Mom:</b> It's just that getting your own place is a big [coming of age](tooltip:coming-of-age) moment.<br><b>David:</b> I know. I am trying to become more [independent](tooltip:independent).<br><b>Mom:</b> You are very [mature](tooltip:mature). Are you going to[settle down](tooltip:settle-down) soon?<br><b>David:</b> Not yet! I want to [date](tooltip:date) and travel before I [start a family](tooltip:start-family).",
                    questions:[
                        { q: "What is David going to do next month?", options:[{t: "Move out of his mother's house.", c: true}, {t: "Retire from his job.", c: false}, {t: "Tie the knot.", c: false}], type: "mcq" },
                        { q: "How does his mother feel about it?", options:[{t: "She is furious and angry.", c: false}, {t: "She is proud but a little sad.", c: true}, {t: "She is confused.", c: false}], type: "mcq" },
                        { q: "What does David want to do before settling down?", options:[{t: "Have a baby.", c: false}, {t: "Buy a house.", c: false}, {t: "Date and travel.", c: true}], type: "mcq" }
                    ]
                },
                {
                    title: "Email - Retirement Plans",
                    audio: "TTS: Subject: Great news about dad! Hi Mark, I just wanted to let you know that dad is going to retire from work at the end of the year! He is very excited. He worked hard to raise us, so he deserves a break. For his retirement, he and mom want to buy a small house near the beach. They said the city is too stressful for elderly people. What is your favorite childhood memory with dad? I want to make a special photo album for him to reminisce. Love, Anna.",
                    body: "<b>From: Anna</b><br><b>To: Mark</b><br>Subject: Great news about dad!<br><br>Hi Mark,<br>I just wanted to let you know that dad is going to [retire from work](tooltip:retire-work) at the end of the year! He is very excited. He worked hard to [raise](tooltip:raise) us, so he deserves a break. For his [retirement](tooltip:retirement), he and mom want to[buy their first house](tooltip:buy-first-house) near the beach. Well, not their first house, but a new one! They said the city is too stressful for [elderly](tooltip:elderly) people. [What is your favorite childhood memory](tooltip:favorite-memory) with dad? I want to make a special photo album for him to [reminisce](tooltip:reminisce).<br><br>Love, Anna.",
                    questions:[
                        { q: "What is Mark and Anna's father going to do?", options:[{t: "Graduate from university.", c: false}, {t: "Retire from work.", c: true}, {t: "Get a divorce.", c: false}], type: "mcq" },
                        { q: "Where do the parents want to live?", options:[{t: "In the noisy city.", c: false}, {t: "In a small house near the beach.", c: true}, {t: "In another country.", c: false}], type: "mcq" },
                        { q: "What is Anna making for her dad?", options:[{t: "A photo album to help him reminisce.", c: true}, {t: "A big cake.", c: false}, {t: "A new car.", c: false}], type: "mcq" }
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
                { type: "matching", instruction: "Match the life stage to its definition.", pairs:[
                    { left: "Childhood", right: "Time of being a kid", val: "1" },
                    { left: "Adolescence", right: "Teenage years", val: "2" },
                    { left: "Adulthood", right: "Being fully grown", val: "3" },
                    { left: "Retirement", right: "Life after stopping work", val: "4" }
                ]},
                { type: "matching", instruction: "Match the event to what happens.", pairs:[
                    { left: "Birth", right: "A baby is born", val: "1" },
                    { left: "Graduation", right: "Getting a diploma", val: "2" },
                    { left: "Wedding", right: "Getting married", val: "3" },
                    { left: "Funeral", right: "Honoring someone who passed away", val: "4" }
                ]},
                { type: "matching", instruction: "Match the verbs with their meanings.", pairs:[
                    { left: "To grow up", right: "To advance to maturity", val: "1" },
                    { left: "To move out", right: "To leave parents' house", val: "2" },
                    { left: "To retire", right: "To stop working for good", val: "3" },
                    { left: "To reminisce", right: "To talk about the past fondly", val: "4" }
                ]},
                { type: "matching", instruction: "Match the adjectives with their opposites.", pairs:[
                    { left: "Young", right: "Elderly", val: "1" },
                    { left: "Mature", right: "Immature", val: "2" },
                    { left: "Independent", right: "Dependent", val: "3" },
                    { left: "Memorable", right: "Forgettable", val: "4" }
                ]},

                // --- WORD ORDER (5-14) ---
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "kid / was / a / I / When / .", correct: "When I was a kid ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "years / my / In / teenage / .", correct: "In my teenage years ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "when / remember / I / .", correct: "I remember when ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "back / Looking / fun / had / we / .", correct: "Looking back we had fun ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "yesterday / just / like / feels / It / .", correct: "It feels like just yesterday ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "moment / age / coming / of / A / .", correct: "A coming of age moment ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "down / wants / to / settle / He / .", correct: "He wants to settle down ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "family / to / a / start / time / It's / .", correct: "It's time to start a family ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "knot / tied / the / They / .", correct: "They tied the knot ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "days / the / were / Those / old / good / .", correct: "Those were the good old days ." },

                // --- CLICKABLE ERROR (15-24) ---
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "[Where](error:When) I was a kid, I liked games." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "[On](error:In) my teenage years, I was shy." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "It [makes](error:feels) like just yesterday." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "Looking [front](error:back), it was a great time." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "It's a coming of [time](error:age) moment." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "He wants to settle [up](error:down)." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "They decided to[begin](error:start) a family." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "She is going to [make](error:tie) the knot." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "He will [tired](error:retire) from work." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "Those were the good [past](error:old) days." },

                // --- ODD ONE OUT (25-30) ---
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Life Stages)", options:[{t: "Childhood", c: false}, {t: "Adulthood", c: false}, {t: "Adolescence", c: false}, {t: "Memory", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Events)", options:[{t: "Wedding", c: false}, {t: "Graduation", c: false}, {t: "Generation", c: true}, {t: "Anniversary", c: false}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Verbs)", options:[{t: "To get married", c: false}, {t: "To divorce", c: false}, {t: "To propose", c: false}, {t: "To pass away", c: true}] }, // Pass away is death, others are marriage related
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Age Adjectives)", options:[{t: "Young", c: false}, {t: "Middle-aged", c: false}, {t: "Elderly", c: false}, {t: "Nostalgic", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Memory Adjectives)", options:[{t: "Memorable", c: false}, {t: "Unforgettable", c: false}, {t: "Nostalgic", c: false}, {t: "Independent", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Phrases)", options:[{t: "Settle down", c: false}, {t: "Tie the knot", c: false}, {t: "Start a family", c: false}, {t: "Retire from work", c: true}] }, // Retire is end of career, others are starting adult life

                // --- TRUE / FALSE (31-35) ---
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "To 'tie the knot' means to get married.", correct: "true"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "When you 'reminisce', you talk about the future.", correct: "false"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "A 'milestone' is a very important event or achievement in your life.", correct: "true"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "To 'move out' means to buy your first house.", correct: "false"}] }, // It just means leaving your current home, often parents'
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "You usually 'retire from work' during your childhood.", correct: "false"}] },

                // --- MCQ (36-39) ---
                { type: "mcq", instruction: "Choose the correct phrase.<br>When you feel emotional thinking about the past, you say: 'I feel so ________.'", options:[{t: "independent", c: false}, {t: "immature", c: false}, {t: "nostalgic", c: true}, {t: "young", c: false}] },
                { type: "mcq", instruction: "Choose the correct word.<br>The ceremony honoring someone who has passed away is a ________.", options:[{t: "wedding", c: false}, {t: "graduation", c: false}, {t: "funeral", c: true}, {t: "anniversary", c: false}] },
                { type: "mcq", instruction: "Choose the correct phrase.<br>When time goes by very fast, you can say: 'Time ________!'", options:[{t: "runs", c: false}, {t: "flies", c: true}, {t: "goes", c: false}, {t: "moves", c: false}] },
                { type: "mcq", instruction: "Choose the correct phrase.<br>To ask someone where they spent their childhood, you say: 'Where did you ________?'", options:[{t: "grow up", c: true}, {t: "move out", c: false}, {t: "settle down", c: false}, {t: "raise", c: false}] },

                // --- CATEGORIZE (40) ---
                { type: "categorize", instruction: "Sort the words into Life Stages and Events.", 
                    categories:[{id: "stage", name: "Stages"}, {id: "event", name: "Events"}],
                    items:[
                        {text: "Childhood", catId: "stage"}, 
                        {text: "Adolescence", catId: "stage"}, 
                        {text: "Adulthood", catId: "stage"}, 
                        {text: "Graduation", catId: "event"}, 
                        {text: "Wedding", catId: "event"}, 
                        {text: "Funeral", catId: "event"}
                    ] 
                }
            ]
        },

        // ======================================================
        // STEP 8: WRITING PRACTICE
        // ======================================================
        {
            title: "Writing Practice",
            instruction: "Write a short paragraph (5-7 sentences) reminiscing about your childhood or teenage years. Mention where you grew up, a favorite memory you have, and use phrases to express nostalgia.",
            example: "I grew up in a small town near the mountains. Looking back, I had a very happy childhood. In my teenage years, my friends and I used to go hiking every weekend. I remember when we found a secret cave near the river. It feels like just yesterday! Those were the good old days, and thinking about them makes me feel very nostalgic.",
            prompts:[
                "State where you grew up.",
                "Use phrases like 'When I was a kid' or 'In my teenage years'.",
                "Share a specific favorite memory ('I remember when...').",
                "Express your feelings about the past ('Those were the good old days', 'I feel nostalgic')."
            ]
        },

        // ======================================================
        // STEP 9: FLASHCARDS
        // ======================================================
        {
            title: "Flashcards",
            items:[
                // 2A Items (36 items)
                { term: "Childhood", definition: "The state of being a child.", defTrans: "Infância", example: "I had a very happy childhood.", audioFront: "TTS: Childhood", audioBack: "TTS: I had a very happy childhood." },
                { term: "Adolescence", definition: "The period following the onset of puberty.", defTrans: "Adolescência", example: "Adolescence can be a difficult time for teenagers.", audioFront: "TTS: Adolescence", audioBack: "TTS: Adolescence can be a difficult time for teenagers." },
                { term: "Adulthood", definition: "The state of being fully grown or mature.", defTrans: "Fase adulta", example: "Adulthood brings many new responsibilities.", audioFront: "TTS: Adulthood", audioBack: "TTS: Adulthood brings many new responsibilities." },
                { term: "Retirement", definition: "The action of leaving one's job and ceasing to work.", defTrans: "Aposentadoria", example: "He wants to travel the world during his retirement.", audioFront: "TTS: Retirement", audioBack: "TTS: He wants to travel the world during his retirement." },
                { term: "Generation", definition: "All of the people born and living at about the same time.", defTrans: "Geração", example: "This new technology is very popular with the younger generation.", audioFront: "TTS: Generation", audioBack: "TTS: This new technology is very popular with the younger generation." },
                { term: "Milestone", definition: "A significant event or stage in the life.", defTrans: "Marco", example: "Buying a house is a huge financial milestone.", audioFront: "TTS: Milestone", audioBack: "TTS: Buying a house is a huge financial milestone." },
                { term: "Birth", definition: "The emergence of a baby from the body of its mother.", defTrans: "Nascimento", example: "They celebrated the birth of their first child.", audioFront: "TTS: Birth", audioBack: "TTS: They celebrated the birth of their first child." },
                { term: "Graduation", definition: "The receiving of an academic degree or diploma.", defTrans: "Formatura", example: "Her parents cried at her high school graduation.", audioFront: "TTS: Graduation", audioBack: "TTS: Her parents cried at her high school graduation." },
                { term: "Engagement", definition: "A formal agreement to get married.", defTrans: "Noivado", example: "He bought a diamond ring for the engagement.", audioFront: "TTS: Engagement", audioBack: "TTS: He bought a diamond ring for the engagement." },
                { term: "Wedding", definition: "A marriage ceremony.", defTrans: "Casamento (cerimônia)", example: "We danced all night at their beautiful wedding.", audioFront: "TTS: Wedding", audioBack: "TTS: We danced all night at their beautiful wedding." },
                { term: "Anniversary", definition: "The date on which an event took place in a previous year.", defTrans: "Aniversário (evento)", example: "Today is my parents' twentieth wedding anniversary.", audioFront: "TTS: Anniversary", audioBack: "TTS: Today is my parents' twentieth wedding anniversary." },
                { term: "Funeral", definition: "The ceremonies honoring a dead person.", defTrans: "Funeral / Enterro", example: "We wore black clothes to attend the funeral.", audioFront: "TTS: Funeral", audioBack: "TTS: We wore black clothes to attend the funeral." },

                { term: "To be born", definition: "To be brought into life.", defTrans: "Nascer", example: "I was born in the year 2000.", audioFront: "TTS: To be born", audioBack: "TTS: I was born in the year 2000." },
                { term: "To grow up", definition: "To advance to maturity.", defTrans: "Crescer", example: "I want my children to grow up in a safe city.", audioFront: "TTS: To grow up", audioBack: "TTS: I want my children to grow up in a safe city." },
                { term: "To raise", definition: "To bring up a child.", defTrans: "Criar (filhos)", example: "It is hard work to raise three kids.", audioFront: "TTS: To raise", audioBack: "TTS: It is hard work to raise three kids." },
                { term: "To graduate", definition: "To successfully complete an academic degree.", defTrans: "Formar-se", example: "He will graduate with a degree in science.", audioFront: "TTS: To graduate", audioBack: "TTS: He will graduate with a degree in science." },
                { term: "To move out", definition: "To leave one's home and go to live somewhere else.", defTrans: "Mudar-se (sair de casa)", example: "I plan to move out of my parents' house next year.", audioFront: "TTS: To move out", audioBack: "TTS: I plan to move out of my parents' house next year." },
                { term: "To date", definition: "To go out with someone romantically.", defTrans: "Namorar", example: "They decided to date exclusively.", audioFront: "TTS: To date", audioBack: "TTS: They decided to date exclusively." },
                { term: "To propose", definition: "To offer marriage to someone.", defTrans: "Pedir em casamento", example: "He kneeled down to propose to his girlfriend.", audioFront: "TTS: To propose", audioBack: "TTS: He kneeled down to propose to his girlfriend." },
                { term: "To get married", definition: "To be joined in marriage.", defTrans: "Casar-se", example: "We want to get married on the beach.", audioFront: "TTS: To get married", audioBack: "TTS: We want to get married on the beach." },
                { term: "To divorce", definition: "To legally dissolve one's marriage.", defTrans: "Divorciar-se", example: "Sadly, they chose to divorce after five years.", audioFront: "TTS: To divorce", audioBack: "TTS: Sadly, they chose to divorce after five years." },
                { term: "To retire", definition: "To leave one's job and cease to work.", defTrans: "Aposentar-se", example: "She will retire at the age of 65.", audioFront: "TTS: To retire", audioBack: "TTS: She will retire at the age of 65." },
                { term: "To pass away", definition: "A polite way of saying 'to die'.", defTrans: "Falecer", example: "My grandfather passed away peacefully.", audioFront: "TTS: To pass away", audioBack: "TTS: My grandfather passed away peacefully." },
                { term: "To reminisce", definition: "To indulge in enjoyable recollection of past events.", defTrans: "Relembrar", example: "We sat around the fire to reminisce.", audioFront: "TTS: To reminisce", audioBack: "TTS: We sat around the fire to reminisce." },

                { term: "Memory", definition: "Something remembered from the past.", defTrans: "Memória", example: "I have a happy memory of playing in the park.", audioFront: "TTS: Memory", audioBack: "TTS: I have a happy memory of playing in the park." },
                { term: "Nostalgia", definition: "A sentimental longing for the past.", defTrans: "Nostalgia", example: "Hearing that song fills me with nostalgia.", audioFront: "TTS: Nostalgia", audioBack: "TTS: Hearing that song fills me with nostalgia." },
                { term: "To remember", definition: "To bring to one's mind an awareness of the past.", defTrans: "Lembrar", example: "I will always remember our first trip together.", audioFront: "TTS: To remember", audioBack: "TTS: I will always remember our first trip together." },
                { term: "Young", definition: "Having lived or existed for only a short time.", defTrans: "Jovem", example: "The young boy ran fast across the field.", audioFront: "TTS: Young", audioBack: "TTS: The young boy ran fast across the field." },
                { term: "Middle-aged", definition: "Aged about 45 to 65.", defTrans: "De meia-idade", example: "The middle-aged man started a new career.", audioFront: "TTS: Middle-aged", audioBack: "TTS: The middle-aged man started a new career." },
                { term: "Elderly", definition: "A polite word for 'old' when referring to a person.", defTrans: "Idoso(a)", example: "Please offer your seat to the elderly woman.", audioFront: "TTS: Elderly", audioBack: "TTS: Please offer your seat to the elderly woman." },
                { term: "Mature", definition: "Fully developed physically; behaving like an adult.", defTrans: "Maduro(a)", example: "She acts in a very mature and responsible way.", audioFront: "TTS: Mature", audioBack: "TTS: She acts in a very mature and responsible way." },
                { term: "Immature", definition: "Having or showing an emotional development appropriate to someone younger.", defTrans: "Imaturo(a)", example: "Complaining about small things is very immature.", audioFront: "TTS: Immature", audioBack: "TTS: Complaining about small things is very immature." },
                { term: "Independent", definition: "Free from outside control.", defTrans: "Independente", example: "Living alone makes you feel very independent.", audioFront: "TTS: Independent", audioBack: "TTS: Living alone makes you feel very independent." },
                { term: "Memorable", definition: "Worth remembering or easily remembered.", defTrans: "Memorável", example: "The concert was a highly memorable event.", audioFront: "TTS: Memorable", audioBack: "TTS: The concert was a highly memorable event." },
                { term: "Nostalgic", definition: "Feeling a sentimental longing for the past.", defTrans: "Nostálgico(a)", example: "Looking at old photos makes me feel nostalgic.", audioFront: "TTS: Nostalgic", audioBack: "TTS: Looking at old photos makes me feel nostalgic." },
                { term: "Unforgettable", definition: "Impossible to forget.", defTrans: "Inesquecível", example: "Our trip to Italy was unforgettable.", audioFront: "TTS: Unforgettable", audioBack: "TTS: Our trip to Italy was unforgettable." },

                // 3A Items (18 items)
                { term: "When I was a kid", definition: "Referring to your time as a child.", defTrans: "Quando eu era criança", example: "When I was a kid, I played outside every day.", audioFront: "TTS: When I was a kid", audioBack: "TTS: When I was a kid, I played outside every day." },
                { term: "Growing up", definition: "The process of developing from a child to an adult.", defTrans: "Crescer", example: "Growing up in a small town was very peaceful.", audioFront: "TTS: Growing up", audioBack: "TTS: Growing up in a small town was very peaceful." },
                { term: "In my teenage years", definition: "Referring to the time when you were between 13 and 19.", defTrans: "Na minha adolescência", example: "In my teenage years, I listened to rock music.", audioFront: "TTS: In my teenage years", audioBack: "TTS: In my teenage years, I listened to rock music." },
                { term: "I remember when", definition: "Used to introduce a specific memory.", defTrans: "Eu me lembro de quando", example: "I remember when we used to climb that tree.", audioFront: "TTS: I remember when", audioBack: "TTS: I remember when we used to climb that tree." },
                { term: "Looking back", definition: "Thinking about the past.", defTrans: "Olhando para trás", example: "Looking back, high school was actually a fun time.", audioFront: "TTS: Looking back", audioBack: "TTS: Looking back, high school was actually a fun time." },
                { term: "It feels like just yesterday", definition: "Expressing that time has passed very quickly.", defTrans: "Parece que foi ontem", example: "It feels like just yesterday you were ten.", audioFront: "TTS: It feels like just yesterday", audioBack: "TTS: It feels like just yesterday you were ten." },
                
                { term: "Coming of age", definition: "The transition from child to adult.", defTrans: "Maioridade / Amadurecimento", example: "Graduating from college is a coming of age moment.", audioFront: "TTS: Coming of age", audioBack: "TTS: Graduating from college is a coming of age moment." },
                { term: "Settle down", definition: "To begin to live a quiet and steady life.", defTrans: "Estabelecer-se / Sossegar", example: "He traveled a lot, but now he wants to settle down.", audioFront: "TTS: Settle down", audioBack: "TTS: He traveled a lot, but now he wants to settle down." },
                { term: "Start a family", definition: "To have your first child.", defTrans: "Começar uma família", example: "They bought a house because they want to start a family.", audioFront: "TTS: Start a family", audioBack: "TTS: They bought a house because they want to start a family." },
                { term: "Get your driver's license", definition: "To pass the test allowing you to drive a car.", defTrans: "Tirar a carteira de motorista", example: "At sixteen, you can get your driver's license.", audioFront: "TTS: Get your driver's license", audioBack: "TTS: At sixteen, you can get your driver's license." },
                { term: "Tie the knot", definition: "An idiom meaning to get married.", defTrans: "Casar-se (dar o nó)", example: "They got engaged and plan to tie the knot next summer.", audioFront: "TTS: Tie the knot", audioBack: "TTS: They got engaged and plan to tie the knot next summer." },
                { term: "Have a baby", definition: "To give birth to a child.", defTrans: "Ter um bebê", example: "My sister is going to have a baby in March.", audioFront: "TTS: Have a baby", audioBack: "TTS: My sister is going to have a baby in March." },
                
                { term: "Retire from work", definition: "To permanently stop working due to age.", defTrans: "Aposentar-se do trabalho", example: "My dad will retire from work at 65.", audioFront: "TTS: Retire from work", audioBack: "TTS: My dad will retire from work at 65." },
                { term: "Raise children", definition: "To bring up and care for kids until they are adults.", defTrans: "Criar filhos", example: "It is a big responsibility to raise children.", audioFront: "TTS: Raise children", audioBack: "TTS: It is a big responsibility to raise children." },
                { term: "Buy your first house", definition: "A major financial and life milestone.", defTrans: "Comprar sua primeira casa", example: "It feels amazing to buy your first house.", audioFront: "TTS: Buy your first house", audioBack: "TTS: It feels amazing to buy your first house." },
                { term: "Those were the good old days", definition: "A phrase expressing fond nostalgia for a past era.", defTrans: "Aqueles eram os bons e velhos tempos", example: "We used to play outside all day. Those were the good old days.", audioFront: "TTS: Those were the good old days", audioBack: "TTS: We used to play outside all day. Those were the good old days." },
                { term: "Where did you grow up?", definition: "Asking someone where they spent their childhood.", defTrans: "Onde você cresceu?", example: "Where did you grow up?", audioFront: "TTS: Where did you grow up?", audioBack: "TTS: Where did you grow up?" },
                { term: "What is your favorite childhood memory?", definition: "Asking someone to share a happy story from when they were young.", defTrans: "Qual é a sua lembrança favorita de infância?", example: "What is your favorite childhood memory?", audioFront: "TTS: What is your favorite childhood memory?", audioBack: "TTS: What is your favorite childhood memory?" }
            ]
        }
    ],

    // ======================================================
    // GLOSSARY (All 54 items + Context words)
    // ======================================================
    glossary:[
        // 2A: Life Stages & Events
        { topic: "Stages", term: "childhood", definition: "The state of being a child.", translation: "Infância" },
        { topic: "Stages", term: "adolescence", definition: "The period following the onset of puberty.", translation: "Adolescência" },
        { topic: "Stages", term: "adulthood", definition: "The state of being fully grown or mature.", translation: "Fase adulta" },
        { topic: "Stages", term: "retirement", definition: "The action of leaving one's job.", translation: "Aposentadoria" },
        { topic: "Stages", term: "generation", definition: "All the people born at about the same time.", translation: "Geração" },
        { topic: "Events", term: "milestone", definition: "A significant event or stage in life.", translation: "Marco (etapa)" },
        { topic: "Events", term: "birth", definition: "The emergence of a baby from its mother.", translation: "Nascimento" },
        { topic: "Events", term: "graduation", definition: "The receiving of an academic degree.", translation: "Formatura" },
        { topic: "Events", term: "engagement", definition: "A formal agreement to get married.", translation: "Noivado" },
        { topic: "Events", term: "wedding", definition: "A marriage ceremony.", translation: "Casamento" },
        { topic: "Events", term: "anniversary", definition: "The date an event took place in a previous year.", translation: "Aniversário" },
        { topic: "Events", term: "funeral", definition: "The ceremonies honoring a dead person.", translation: "Funeral / Enterro" },

        // 2A: Action Verbs
        { topic: "Verbs", term: "to-be-born", definition: "To be brought into life.", translation: "Nascer" },
        { topic: "Verbs", term: "to-grow-up", definition: "To advance to maturity.", translation: "Crescer" },
        { topic: "Verbs", term: "to-raise", definition: "To bring up a child.", translation: "Criar" },
        { topic: "Verbs", term: "to-graduate", definition: "To successfully complete a degree.", translation: "Formar-se" },
        { topic: "Verbs", term: "to-move-out", definition: "To leave one's home.", translation: "Mudar-se" },
        { topic: "Verbs", term: "to-date", definition: "To go out with someone romantically.", translation: "Namorar" },
        { topic: "Verbs", term: "to-propose", definition: "To offer marriage to someone.", translation: "Pedir em casamento" },
        { topic: "Verbs", term: "to-get-married", definition: "To be joined in marriage.", translation: "Casar-se" },
        { topic: "Verbs", term: "to-divorce", definition: "To legally dissolve a marriage.", translation: "Divorciar-se" },
        { topic: "Verbs", term: "to-retire", definition: "To leave one's job.", translation: "Aposentar-se" },
        { topic: "Verbs", term: "to-pass-away", definition: "A polite way of saying 'to die'.", translation: "Falecer" },
        { topic: "Verbs", term: "to-reminisce", definition: "To indulge in enjoyable recollection.", translation: "Relembrar" },

        // 2A: Adjectives & Memories
        { topic: "Memories", term: "memory", definition: "Something remembered from the past.", translation: "Memória" },
        { topic: "Memories", term: "nostalgia", definition: "A sentimental longing for the past.", translation: "Nostalgia" },
        { topic: "Verbs", term: "to-remember", definition: "To bring to one's mind.", translation: "Lembrar" },
        { topic: "Adjectives", term: "young", definition: "Having lived for only a short time.", translation: "Jovem" },
        { topic: "Adjectives", term: "middle-aged", definition: "Aged about 45 to 65.", translation: "De meia-idade" },
        { topic: "Adjectives", term: "elderly", definition: "Polite word for 'old'.", translation: "Idoso(a)" },
        { topic: "Adjectives", term: "mature", definition: "Fully developed physically and mentally.", translation: "Maduro(a)" },
        { topic: "Adjectives", term: "immature", definition: "Showing emotional development appropriate to someone younger.", translation: "Imaturo(a)" },
        { topic: "Adjectives", term: "independent", definition: "Free from outside control.", translation: "Independente" },
        { topic: "Adjectives", term: "memorable", definition: "Worth remembering.", translation: "Memorável" },
        { topic: "Adjectives", term: "nostalgic", definition: "Feeling a sentimental longing for the past.", translation: "Nostálgico(a)" },
        { topic: "Adjectives", term: "unforgettable", definition: "Impossible to forget.", translation: "Inesquecível" },

        // 3A: Expressions
        { topic: "Expressions", term: "when-i-was-kid", definition: "Referring to your time as a child.", translation: "Quando eu era criança" },
        { topic: "Expressions", term: "growing-up", definition: "The process of developing from a child.", translation: "Crescer" },
        { topic: "Expressions", term: "in-teenage-years", definition: "Referring to the time between 13 and 19.", translation: "Na minha adolescência" },
        { topic: "Expressions", term: "i-remember-when", definition: "Used to introduce a specific memory.", translation: "Eu me lembro de quando" },
        { topic: "Expressions", term: "looking-back", definition: "Thinking about the past.", translation: "Olhando para trás" },
        { topic: "Expressions", term: "feels-like-yesterday", definition: "Expressing that time passed quickly.", translation: "Parece que foi ontem" },
        
        { topic: "Expressions", term: "coming-of-age", definition: "The transition from child to adult.", translation: "Maioridade / Amadurecimento" },
        { topic: "Expressions", term: "settle-down", definition: "To begin to live a quiet life.", translation: "Estabelecer-se" },
        { topic: "Expressions", term: "start-family", definition: "To have your first child.", translation: "Começar uma família" },
        { topic: "Expressions", term: "get-drivers-license", definition: "To pass the test allowing you to drive.", translation: "Tirar a carteira de motorista" },
        { topic: "Expressions", term: "tie-the-knot", definition: "Idiom meaning to get married.", translation: "Casar-se (dar o nó)" },
        { topic: "Expressions", term: "have-a-baby", definition: "To give birth to a child.", translation: "Ter um bebê" },
        
        { topic: "Expressions", term: "retire-work", definition: "To permanently stop working.", translation: "Aposentar-se do trabalho" },
        { topic: "Expressions", term: "raise-children", definition: "To bring up and care for kids.", translation: "Criar filhos" },
        { topic: "Expressions", term: "buy-first-house", definition: "A major financial milestone.", translation: "Comprar sua primeira casa" },
        { topic: "Expressions", term: "good-old-days", definition: "Expressing fond nostalgia for a past era.", translation: "Bons e velhos tempos" },
        { topic: "Expressions", term: "where-grow-up", definition: "Asking where someone spent their childhood.", translation: "Onde você cresceu?" },
        { topic: "Expressions", term: "favorite-memory", definition: "Asking someone to share a happy story.", translation: "Lembrança favorita" },

        // Additional Context Words
        { topic: "Context", term: "experience", definition: "An event or occurrence which leaves an impression.", translation: "Experiência" },
        { topic: "Context", term: "date", definition: "To go out with someone romantically.", translation: "Namorar" }
    ]
});