/**
 * English Block Assembling - LESSON DATA: Topic 2
/**
 * English Block Assembling - LESSON DATA: Topic 3
 * Topic: Family and Friends
 * Level: Upper A2 ~ Lower B1
 */

window.initLesson({
    // --- METADATA ---
    lessonId: "lesson-3",
    block: "1",
    topicTitle: "3 - Family and Friends",

    steps:[
        // ======================================================
        // STEP 0: INTRO & CAN-DO
        // ======================================================
        {
            title: "Intro & Can-Do",
            objectives: "• Describe your [immediate](tooltip:immediate) and extended [family](tooltip:family) relationships.<br>• Introduce family members and talk about [marital status](tooltip:marital-status).<br>• Discuss your [friends](tooltip:friends) and social life.<br>• Ask about someone's schedule and make simple [social plans](tooltip:social-plans).",
            welcome: "Welcome to Lesson 3! Family and friends are the most important people in our lives. In this lesson, we will focus on the vocabulary needed to describe your relatives, your best friends, and your social activities. You will also learn how to invite someone out and make plans for the weekend. Let's get started!",
            audio: {
                objectives: "TTS: In this lesson, you will learn to: Describe your immediate and extended family relationships. Introduce family members and talk about marital status. Discuss your friends and social life. Ask about someone's schedule and make simple social plans.",
                welcome: "TTS: Welcome to Lesson 3! Family and friends are the most important people in our lives. In this lesson, we will focus on the vocabulary needed to describe your relatives, your best friends, and your social activities. You will also learn how to invite someone out and make plans for the weekend. Let's get started!"
            }
        },

        // ======================================================
        // STEP 1: CONTEXT DIALOGUE
        // ======================================================
        {
            title: "Context Dialogue",
            context: "Liam and Sarah are looking at some photos on Liam's phone during their lunch break.",
            contextAudio: "TTS: Sarah: Is this a picture of your family? Liam: Yes! I have a big family. These are my parents, and my three siblings. Sarah: Wow! Do you get along with them? Liam: Yes, we are very close. I really take after my father. Sarah: That's nice. Are you free on Saturday? Liam: I think so. I don't have any plans yet. Why? Sarah: A few friends and I are going to a concert. Would you like to join us? Liam: That sounds great! Who is going? Sarah: Just my best friend Emma, some classmates, and me. Liam: Perfect. Let's meet before the concert to grab a coffee.",
            dialogue:[
                { speaker: "Sarah", text: "Is this a picture of your [family](tooltip:family)?" },
                { speaker: "Liam", text: "Yes! I have a [big family](tooltip:big-family). These are my [parents](tooltip:parents), and my three [siblings](tooltip:siblings)." },
                { speaker: "Sarah", text: "Wow! Do you[get along with](tooltip:get-along-with) them?" },
                { speaker: "Liam", text: "Yes, we are very [close](tooltip:close). I really [take after](tooltip:take-after) my father." },
                { speaker: "Sarah", text: "That's nice.[Are you free on](tooltip:are-you-free) Saturday?" },
                { speaker: "Liam", text: "I think so. I don't have any [plans](tooltip:plans) yet. Why?" },
                { speaker: "Sarah", text: "A few friends and I are going to a [concert](tooltip:concert).[Would you like to](tooltip:would-you-like) join us?" },
                { speaker: "Liam", text: "[That sounds great](tooltip:that-sounds-great)! Who is going?" },
                { speaker: "Sarah", text: "Just my [best friend](tooltip:best-friend) Emma, some [classmates](tooltip:classmate), and me." },
                { speaker: "Liam", text: "Perfect.[Let's](tooltip:lets) meet before the concert to grab a coffee." }
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
                    title: "Family Members",
                    audio: "TTS: Parents. Siblings. Son. Daughter. Grandparents. Uncle. Aunt. Cousin. Nephew. Niece.",
                    items:[
                        { term: "Parents", trans: "Pais (Pai e Mãe)" },
                        { term: "Siblings", trans: "Irmãos (Irmãos e Irmãs)" },
                        { term: "Son", trans: "Filho" },
                        { term: "Daughter", trans: "Filha" },
                        { term: "Grandparents", trans: "Avós" },
                        { term: "Uncle", trans: "Tio" },
                        { term: "Aunt", trans: "Tia" },
                        { term: "Cousin", trans: "Primo(a)" },
                        { term: "Nephew", trans: "Sobrinho" },
                        { term: "Niece", trans: "Sobrinha" }
                    ]
                },
                {
                    title: "Friends & Marital Status",
                    audio: "TTS: Friend. Neighbor. Best friend. Single. Married. Engaged. Divorced. Widowed. Colleague. Classmate.",
                    items:[
                        { term: "Friend", trans: "Amigo(a)" },
                        { term: "Neighbor", trans: "Vizinho(a)" },
                        { term: "Best friend (Close friend)", trans: "Melhor amigo(a) / Amigo(a) íntimo(a)" },
                        { term: "Single", trans: "Solteiro(a)" },
                        { term: "Married", trans: "Casado(a)" },
                        { term: "Engaged", trans: "Noivo(a)" },
                        { term: "Divorced", trans: "Divorciado(a)" },
                        { term: "Widowed", trans: "Viúvo(a)" },
                        { term: "Colleague", trans: "Colega (de trabalho)" },
                        { term: "Classmate", trans: "Colega de classe" }
                    ]
                },
                {
                    title: "Social Activities & Verbs",
                    audio: "TTS: Party. Concert. Picnic. Weekend. To visit. To spend time. To hang out. To invite. To meet. To go out.",
                    items:[
                        { term: "Party", trans: "Festa" },
                        { term: "Concert", trans: "Show / Concerto" },
                        { term: "Picnic", trans: "Piquenique" },
                        { term: "Weekend", trans: "Fim de semana" },
                        { term: "To visit", trans: "Visitar" },
                        { term: "To spend time", trans: "Passar tempo" },
                        { term: "To hang out", trans: "Sair para curtir / Passar tempo com amigos" },
                        { term: "To invite", trans: "Convidar" },
                        { term: "To meet", trans: "Encontrar / Conhecer" },
                        { term: "To go out", trans: "Sair (para passear/divertir-se)" }
                    ]
                }
            ],

            // --- 2B: EXAMPLES ---
            exampleGroups:[
                {
                    title: "Family Members",
                    audio: "TTS: My parents live in a different city. I have two siblings, a brother and a sister. Their son loves playing football. My daughter is five years old. We visit our grandparents every Sunday. My uncle always tells funny jokes. My aunt baked a delicious cake. I went to the park with my cousin. My nephew is learning to ride a bike. I bought a gift for my niece.",
                    items:[
                        { term: "Parents", sent: "My parents live in a different city.", trans: "Meus pais moram em uma cidade diferente." },
                        { term: "Siblings", sent: "I have two siblings, a brother and a sister.", trans: "Eu tenho dois irmãos, um irmão e uma irmã." },
                        { term: "Son", sent: "Their son loves playing football.", trans: "O filho deles adora jogar futebol." },
                        { term: "Daughter", sent: "My daughter is five years old.", trans: "Minha filha tem cinco anos de idade." },
                        { term: "Grandparents", sent: "We visit our grandparents every Sunday.", trans: "Nós visitamos nossos avós todo domingo." },
                        { term: "Uncle", sent: "My uncle always tells funny jokes.", trans: "Meu tio sempre conta piadas engraçadas." },
                        { term: "Aunt", sent: "My aunt baked a delicious cake.", trans: "Minha tia assou um bolo delicioso." },
                        { term: "Cousin", sent: "I went to the park with my cousin.", trans: "Eu fui ao parque com meu primo." },
                        { term: "Nephew", sent: "My nephew is learning to ride a bike.", trans: "Meu sobrinho está aprendendo a andar de bicicleta." },
                        { term: "Niece", sent: "I bought a gift for my niece.", trans: "Eu comprei um presente para a minha sobrinha." }
                    ]
                },
                {
                    title: "Friends & Marital Status",
                    audio: "TTS: She is a very good friend of mine. My neighbor is very quiet and polite. He is my best friend since childhood. I am currently single and focusing on my career. They have been married for ten years. My sister just got engaged to her boyfriend. He is divorced and lives alone now. She is a widowed mother of two. I eat lunch with my colleague every day. My classmate helped me study for the exam.",
                    items:[
                        { term: "Friend", sent: "She is a very good friend of mine.", trans: "Ela é uma amiga minha muito boa." },
                        { term: "Neighbor", sent: "My neighbor is very quiet and polite.", trans: "Meu vizinho é muito quieto e educado." },
                        { term: "Best friend (Close friend)", sent: "He is my best friend since childhood.", trans: "Ele é meu melhor amigo desde a infância." },
                        { term: "Single", sent: "I am currently single and focusing on my career.", trans: "Estou atualmente solteiro e focando na minha carreira." },
                        { term: "Married", sent: "They have been married for ten years.", trans: "Eles estão casados há dez anos." },
                        { term: "Engaged", sent: "My sister just got engaged to her boyfriend.", trans: "Minha irmã acabou de ficar noiva do namorado dela." },
                        { term: "Divorced", sent: "He is divorced and lives alone now.", trans: "Ele é divorciado e mora sozinho agora." },
                        { term: "Widowed", sent: "She is a widowed mother of two.", trans: "Ela é uma mãe viúva de dois filhos." },
                        { term: "Colleague", sent: "I eat lunch with my colleague every day.", trans: "Eu almoço com meu colega (de trabalho) todos os dias." },
                        { term: "Classmate", sent: "My classmate helped me study for the exam.", trans: "Meu colega de classe me ajudou a estudar para a prova." }
                    ]
                },
                {
                    title: "Social Activities & Verbs",
                    audio: "TTS: We are going to a birthday party tonight. I bought tickets for a rock concert. Let's have a picnic in the park. I like to relax on the weekend. We visit my grandparents on holidays. I want to spend time with my family. We hang out at the cafe after school. I will invite my friends to dinner. Let's meet at the cinema at eight. Do you want to go out on Friday?",
                    items:[
                        { term: "Party", sent: "We are going to a birthday party tonight.", trans: "Nós vamos a uma festa de aniversário esta noite." },
                        { term: "Concert", sent: "I bought tickets for a rock concert.", trans: "Eu comprei ingressos para um show de rock." },
                        { term: "Picnic", sent: "Let's have a picnic in the park.", trans: "Vamos fazer um piquenique no parque." },
                        { term: "Weekend", sent: "I like to relax on the weekend.", trans: "Eu gosto de relaxar no fim de semana." },
                        { term: "To visit", sent: "We visit my grandparents on holidays.", trans: "Nós visitamos meus avós nos feriados." },
                        { term: "To spend time", sent: "I want to spend time with my family.", trans: "Eu quero passar tempo com a minha família." },
                        { term: "To hang out", sent: "We hang out at the cafe after school.", trans: "Nós saímos para curtir no café depois da escola." },
                        { term: "To invite", sent: "I will invite my friends to dinner.", trans: "Eu vou convidar meus amigos para o jantar." },
                        { term: "To meet", sent: "Let's meet at the cinema at eight.", trans: "Vamos nos encontrar no cinema às oito." },
                        { term: "To go out", sent: "Do you want to go out on Friday?", trans: "Você quer sair na sexta-feira?" }
                    ]
                }
            ],

            // --- 2C: PRACTICE ---
            drillGroups:[
                {
                    title: "Family Members",
                    drills:[
                        { q: "A person's father and mother are their ________.", options:[{t: "Siblings", c: false}, {t: "Parents", c: true}, {t: "Grandparents", c: false}, {t: "Cousins", c: false}], type: "mcq" },
                        { q: "Brothers and sisters are also called ________.", options:[{t: "Parents", c: false}, {t: "Siblings", c: true}, {t: "Nieces", c: false}, {t: "Uncles", c: false}], type: "mcq" },
                        { q: "Your male child is your ________.", options:[{t: "Nephew", c: false}, {t: "Son", c: true}, {t: "Brother", c: false}, {t: "Uncle", c: false}], type: "mcq" },
                        { q: "Your female child is your ________.", options:[{t: "Niece", c: false}, {t: "Sister", c: false}, {t: "Daughter", c: true}, {t: "Aunt", c: false}], type: "mcq" },
                        { q: "The parents of your father or mother are your ________.", options:[{t: "Parents", c: false}, {t: "Grandparents", c: true}, {t: "Siblings", c: false}, {t: "Cousins", c: false}], type: "mcq" },
                        { q: "The brother of your mother or father is your ________.", options:[{t: "Uncle", c: true}, {t: "Cousin", c: false}, {t: "Nephew", c: false}, {t: "Son", c: false}], type: "mcq" },
                        { q: "The sister of your mother or father is your ________.", options:[{t: "Aunt", c: true}, {t: "Niece", c: false}, {t: "Daughter", c: false}, {t: "Sister", c: false}], type: "mcq" },
                        { q: "The child of your aunt or uncle is your ________.", options:[{t: "Sibling", c: false}, {t: "Nephew", c: false}, {t: "Cousin", c: true}, {t: "Son", c: false}], type: "mcq" },
                        { q: "The son of your brother or sister is your ________.", options:[{t: "Cousin", c: false}, {t: "Nephew", c: true}, {t: "Uncle", c: false}, {t: "Son", c: false}], type: "mcq" },
                        { q: "The daughter of your brother or sister is your ________.", options:[{t: "Niece", c: true}, {t: "Aunt", c: false}, {t: "Daughter", c: false}, {t: "Sister", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Friends & Marital Status",
                    drills:[
                        { q: "A person you know well and like is a ________.", options:[{t: "Neighbor", c: false}, {t: "Friend", c: true}, {t: "Colleague", c: false}, {t: "Classmate", c: false}], type: "mcq" },
                        { q: "A person living next door to you is your ________.", options:[{t: "Classmate", c: false}, {t: "Neighbor", c: true}, {t: "Colleague", c: false}, {t: "Best friend", c: false}], type: "mcq" },
                        { q: "Your closest and most trusted friend is your ________.", options:[{t: "Colleague", c: false}, {t: "Neighbor", c: false}, {t: "Best friend", c: true}, {t: "Classmate", c: false}], type: "mcq" },
                        { q: "Someone who is not married is ________.", options:[{t: "Engaged", c: false}, {t: "Divorced", c: false}, {t: "Single", c: true}, {t: "Widowed", c: false}], type: "mcq" },
                        { q: "Two people united legally in a relationship are ________.", options:[{t: "Single", c: false}, {t: "Married", c: true}, {t: "Divorced", c: false}, {t: "Colleagues", c: false}], type: "mcq" },
                        { q: "A person who has promised to get married soon is ________.", options:[{t: "Married", c: false}, {t: "Single", c: false}, {t: "Engaged", c: true}, {t: "Divorced", c: false}], type: "mcq" },
                        { q: "A person whose marriage has legally ended is ________.", options:[{t: "Widowed", c: false}, {t: "Single", c: false}, {t: "Engaged", c: false}, {t: "Divorced", c: true}], type: "mcq" },
                        { q: "A person whose spouse has died and has not remarried is ________.", options:[{t: "Widowed", c: true}, {t: "Divorced", c: false}, {t: "Single", c: false}, {t: "Engaged", c: false}], type: "mcq" },
                        { q: "A person you work with is a ________.", options:[{t: "Classmate", c: false}, {t: "Neighbor", c: false}, {t: "Colleague", c: true}, {t: "Best friend", c: false}], type: "mcq" },
                        { q: "A person in the same school class as you is a ________.", options:[{t: "Colleague", c: false}, {t: "Classmate", c: true}, {t: "Neighbor", c: false}, {t: "Spouse", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Social Activities & Verbs",
                    drills:[
                        { q: "A social gathering of invited guests, usually with music and food, is a ________.", options:[{t: "Concert", c: false}, {t: "Weekend", c: false}, {t: "Party", c: true}, {t: "Colleague", c: false}], type: "mcq" },
                        { q: "A musical performance given in public is a ________.", options:[{t: "Picnic", c: false}, {t: "Concert", c: true}, {t: "Party", c: false}, {t: "Weekend", c: false}], type: "mcq" },
                        { q: "An outing or occasion that involves taking a packed meal to be eaten outdoors is a ________.", options:[{t: "Concert", c: false}, {t: "Party", c: false}, {t: "Picnic", c: true}, {t: "Weekend", c: false}], type: "mcq" },
                        { q: "Saturday and Sunday are the ________.", options:[{t: "Weekend", c: true}, {t: "Party", c: false}, {t: "Concert", c: false}, {t: "Picnic", c: false}], type: "mcq" },
                        { q: "To go to see and spend time with someone is to ________ them.", options:[{t: "Invite", c: false}, {t: "Visit", c: true}, {t: "Hang out", c: false}, {t: "Meet", c: false}], type: "mcq" },
                        { q: "To pass time doing something with someone is to ________.", options:[{t: "Go out", c: false}, {t: "Invite", c: false}, {t: "Spend time", c: true}, {t: "Visit", c: false}], type: "mcq" },
                        { q: "An informal way to say you relax and spend time with friends is to ________.", options:[{t: "Invite", c: false}, {t: "Visit", c: false}, {t: "Meet", c: false}, {t: "Hang out", c: true}], type: "mcq" },
                        { q: "To politely ask someone to go somewhere or do something is to ________ them.", options:[{t: "Invite", c: true}, {t: "Hang out", c: false}, {t: "Spend time", c: false}, {t: "Go out", c: false}], type: "mcq" },
                        { q: "To come together with someone intentionally is to ________ them.", options:[{t: "Invite", c: false}, {t: "Meet", c: true}, {t: "Go out", c: false}, {t: "Visit", c: false}], type: "mcq" },
                        { q: "To leave your house to go to a social event is to ________.", options:[{t: "Go out", c: true}, {t: "Invite", c: false}, {t: "Spend time", c: false}, {t: "Meet", c: false}], type: "mcq" }
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
                    title: "Talking About Family",
                    audio: "TTS: A big family. Immediate family. Extended family. Get along with. Look like. Take after.",
                    explanation: "Phrases used to describe the size of your family, the types of relatives, and your relationships with them.<br><span style='color:var(--primary-blue); font-style:italic;'>(Frases usadas para descrever o tamanho da sua família, os tipos de parentes e seus relacionamentos com eles.)</span>",
                    samples:[
                        { en: "I come from <b>a big family</b>.", pt: "<span style='color:var(--primary-blue)'>(Eu venho de uma família grande.)</span>" },
                        { en: "My parents and siblings are my <b>immediate family</b>.", pt: "<span style='color:var(--primary-blue)'>(Meus pais e irmãos são minha família imediata.)</span>" },
                        { en: "My cousins and uncles are my <b>extended family</b>.", pt: "<span style='color:var(--primary-blue)'>(Meus primos e tios são minha família estendida.)</span>" },
                        { en: "I really <b>get along with</b> my brother.", pt: "<span style='color:var(--primary-blue)'>(Eu me dou muito bem com o meu irmão.)</span>" },
                        { en: "I <b>look like</b> my father.", pt: "<span style='color:var(--primary-blue)'>(Eu me pareço com o meu pai fisicamente.)</span>" },
                        { en: "I <b>take after</b> my mother in personality.", pt: "<span style='color:var(--primary-blue)'>(Eu puxei a minha mãe na personalidade.)</span>" }
                    ]
                },
                {
                    title: "Family Questions & Social Plans",
                    audio: "TTS: Do you have any brothers or sisters? How many people are in your family? Tell me about your family. Do you have any children? Make new friends. Keep in touch.",
                    explanation: "Common questions to ask someone about their family, and phrases about friendships.<br><span style='color:var(--primary-blue); font-style:italic;'>(Perguntas comuns para fazer a alguém sobre a família deles e frases sobre amizades.)</span>",
                    samples:[
                        { en: "<b>Do you have any brothers or sisters?</b>", pt: "<span style='color:var(--primary-blue)'>(Você tem algum irmão ou irmã?)</span>" },
                        { en: "<b>How many people are in your family?</b>", pt: "<span style='color:var(--primary-blue)'>(Quantas pessoas tem na sua família?)</span>" },
                        { en: "<b>Tell me about your family.</b>", pt: "<span style='color:var(--primary-blue)'>(Me fale sobre a sua família.)</span>" },
                        { en: "<b>Do you have any children?</b>", pt: "<span style='color:var(--primary-blue)'>(Você tem filhos?)</span>" },
                        { en: "It is fun to <b>make new friends</b>.", pt: "<span style='color:var(--primary-blue)'>(É divertido fazer novos amigos.)</span>" },
                        { en: "Even if we move, let's <b>keep in touch</b>.", pt: "<span style='color:var(--primary-blue)'>(Mesmo que a gente se mude, vamos manter contato.)</span>" }
                    ]
                },
                {
                    title: "Making Social Plans",
                    audio: "TTS: Are you free on. Are you busy this weekend? What are you doing on. Would you like to. Let's. That sounds great.",
                    explanation: "Useful phrases to invite someone to do something or to propose a plan.<br><span style='color:var(--primary-blue); font-style:italic;'>(Frases úteis para convidar alguém para fazer algo ou para propor um plano.)</span>",
                    samples:[
                        { en: "<b>Are you free on</b> Saturday?", pt: "<span style='color:var(--primary-blue)'>(Você está livre no sábado?)</span>" },
                        { en: "<b>Are you busy this weekend?</b>", pt: "<span style='color:var(--primary-blue)'>(Você está ocupado neste fim de semana?)</span>" },
                        { en: "<b>What are you doing on</b> Friday night?", pt: "<span style='color:var(--primary-blue)'>(O que você vai fazer na sexta à noite?)</span>" },
                        { en: "<b>Would you like to</b> grab a coffee?", pt: "<span style='color:var(--primary-blue)'>(Você gostaria de tomar um café?)</span>" },
                        { en: "<b>Let's</b> go to the cinema.", pt: "<span style='color:var(--primary-blue)'>(Vamos ao cinema.)</span>" },
                        { en: "<b>That sounds great!</b>", pt: "<span style='color:var(--primary-blue)'>(Isso soa ótimo! / Parece ótimo!)</span>" }
                    ]
                }
            ],

            // --- 3B: DIALOGUES ---
            dialogueGroups:[
                {
                    title: "Dialogue 1: Meeting a Colleague",
                    audio: "TTS: Do you have any brothers or sisters? Yes, I come from a big family. I have three siblings.",
                    lines:[
                        { speaker: "Mark", text: "Do you have any brothers or sisters?", pt: "(Você tem irmãos ou irmãs?)" },
                        { speaker: "Anna", text: "Yes, I come from a big family. I have three siblings.", pt: "(Sim, eu venho de uma família grande. Eu tenho três irmãos.)" }
                    ]
                },
                {
                    title: "Dialogue 2: Family Traits",
                    audio: "TTS: Tell me about your family. Who do you look like? I look like my mother, but I take after my father.",
                    lines:[
                        { speaker: "John", text: "Tell me about your family. Who do you look like?", pt: "(Me conte sobre a sua família. Com quem você se parece?)" },
                        { speaker: "Lisa", text: "I look like my mother, but I take after my father.", pt: "(Eu me pareço com a minha mãe, mas eu puxei o meu pai.)" }
                    ]
                },
                {
                    title: "Dialogue 3: Immediate vs Extended",
                    audio: "TTS: How many people are in your family? There are four in my immediate family, but my extended family is huge!",
                    lines:[
                        { speaker: "Tom", text: "How many people are in your family?", pt: "(Quantas pessoas tem na sua família?)" },
                        { speaker: "Emma", text: "There are four in my immediate family, but my extended family is huge!", pt: "(Tem quatro na minha família imediata, mas minha família estendida é enorme!)" }
                    ]
                },
                {
                    title: "Dialogue 4: Children and Friends",
                    audio: "TTS: Do you have any children? Yes, one son. He is very social and loves to make new friends.",
                    lines:[
                        { speaker: "David", text: "Do you have any children?", pt: "(Você tem filhos?)" },
                        { speaker: "Sarah", text: "Yes, one son. He is very social and loves to make new friends.", pt: "(Sim, um filho. Ele é muito social e adora fazer novos amigos.)" }
                    ]
                },
                {
                    title: "Dialogue 5: Weekend Plans",
                    audio: "TTS: Are you busy this weekend? Not really. What are you doing on Saturday? Would you like to go to a party?",
                    lines:[
                        { speaker: "Lucas", text: "Are you busy this weekend?", pt: "(Você está ocupado neste fim de semana?)" },
                        { speaker: "Chloe", text: "Not really. What are you doing on Saturday? Would you like to go to a party?", pt: "(Na verdade não. O que você vai fazer no sábado? Você gostaria de ir a uma festa?)" }
                    ]
                },
                {
                    title: "Dialogue 6: Scheduling",
                    audio: "TTS: Are you free on Friday? Let's grab dinner. That sounds great! We always get along with each other. Yes, let's keep in touch.",
                    lines:[
                        { speaker: "Mia", text: "Are you free on Friday? Let's grab dinner.", pt: "(Você está livre na sexta? Vamos jantar.)" },
                        { speaker: "Noah", text: "That sounds great! We always get along with each other. Yes, let's keep in touch.", pt: "(Isso parece ótimo! Nós sempre nos damos bem. Sim, vamos manter contato.)" }
                    ]
                }
            ],

            // --- 3C: PRACTICE ---
            grammarDrillGroups:[
                {
                    title: "Talking About Family",
                    drills:[
                        { q: "If you have 5 siblings, you come from a ________.", options:[{t: "small family", c: false}, {t: "big family", c: true}, {t: "extended family", c: false}, {t: "immediate family", c: false}], type: "mcq" },
                        { q: "Your parents and siblings are part of your ________.", options:[{t: "extended family", c: false}, {t: "immediate family", c: true}, {t: "cousins", c: false}, {t: "colleagues", c: false}], type: "mcq" },
                        { q: "Your grandparents, aunts, uncles, and cousins are your ________.", options:[{t: "immediate family", c: false}, {t: "extended family", c: true}, {t: "siblings", c: false}, {t: "parents", c: false}], type: "mcq" },
                        { q: "If you have a good relationship with your sister, you ________ her.", options:[{t: "take after", c: false}, {t: "look like", c: false}, {t: "get along with", c: true}, {t: "keep in touch", c: false}], type: "mcq" },
                        { q: "If you have the same eyes and hair as your dad, you ________ him.", options:[{t: "look like", c: true}, {t: "take after", c: false}, {t: "get along with", c: false}, {t: "make new friends", c: false}], type: "mcq" },
                        { q: "If you have the same personality as your mom, you ________ her.", options:[{t: "look like", c: false}, {t: "take after", c: true}, {t: "get along with", c: false}, {t: "invite", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Family Questions & Social Plans",
                    drills:[
                        { q: "Do you have any brothers or ________?", options:[{t: "parents", c: false}, {t: "sisters", c: true}, {t: "uncles", c: false}, {t: "children", c: false}], type: "mcq" },
                        { q: "How many people are ________ your family?", options:[{t: "on", c: false}, {t: "at", c: false}, {t: "in", c: true}, {t: "with", c: false}], type: "mcq" },
                        { q: "________ me about your family.", options:[{t: "Say", c: false}, {t: "Speak", c: false}, {t: "Tell", c: true}, {t: "Talk", c: false}], type: "mcq" },
                        { q: "Do you have any ________? Yes, a son and a daughter.", options:[{t: "siblings", c: false}, {t: "parents", c: false}, {t: "children", c: true}, {t: "grandparents", c: false}], type: "mcq" },
                        { q: "When you go to a new school, it is good to ________.", options:[{t: "keep in touch", c: false}, {t: "take after", c: false}, {t: "make new friends", c: true}, {t: "get along with", c: false}], type: "mcq" },
                        { q: "When you move to another city, you should ________ with your old friends.", options:[{t: "keep in touch", c: true}, {t: "take after", c: false}, {t: "look like", c: false}, {t: "make new friends", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Making Social Plans",
                    drills:[
                        { q: "Are you free ________ Saturday?", options:[{t: "in", c: false}, {t: "on", c: true}, {t: "at", c: false}, {t: "to", c: false}], type: "mcq" },
                        { q: "Are you ________ this weekend? No, I have no plans.", options:[{t: "free", c: false}, {t: "busy", c: true}, {t: "married", c: false}, {t: "single", c: false}], type: "mcq" },
                        { q: "What are you ________ on Friday night?", options:[{t: "making", c: false}, {t: "doing", c: true}, {t: "having", c: false}, {t: "taking", c: false}], type: "mcq" },
                        { q: "________ you like to go to the cinema?", options:[{t: "Do", c: false}, {t: "Are", c: false}, {t: "Would", c: true}, {t: "Can", c: false}], type: "mcq" },
                        { q: "________ go to the park.", options:[{t: "Let", c: false}, {t: "Let's", c: true}, {t: "We", c: false}, {t: "Us", c: false}], type: "mcq" },
                        { q: "A: Let's grab a coffee. B: That ________ great!", options:[{t: "sounds", c: true}, {t: "hears", c: false}, {t: "looks", c: false}, {t: "feels", c: false}], type: "mcq" }
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
                { text: "I come from a very big family. ↘", audio: "TTS: I come from a very big family." },
                { text: "Do you have any brothers or sisters? ↗", audio: "TTS: Do you have any brothers or sisters?" },
                { text: "I look like my mother, but I take after my father. ↘", audio: "TTS: I look like my mother, but I take after my father." },
                { text: "Tell me about your extended family. ↘", audio: "TTS: Tell me about your extended family." },
                { text: "She is my best friend since childhood. ↘", audio: "TTS: She is my best friend since childhood." },
                { text: "Are you free on Saturday night? ↗", audio: "TTS: Are you free on Saturday night?" },
                { text: "Would you like to go to a concert with us? ↗", audio: "TTS: Would you like to go to a concert with us?" },
                { text: "That sounds great! I would love to. ↘", audio: "TTS: That sounds great! I would love to." },
                { text: "Let's meet at the cafe before the party. ↘", audio: "TTS: Let's meet at the cafe before the party." },
                { text: "Even though we live far away, we keep in touch. ↘", audio: "TTS: Even though we live far away, we keep in touch." }
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
                    audio: "TTS: Emma: Hi Mark! Are you free on Friday? Mark: Let me check. No, I am visiting my grandparents. Emma: What about the weekend? Mark: Yes, I want to hang out with my friends.",
                    text: "Emma: Hi Mark! Are you [free] on Friday?<br>Mark: Let me check. No, I am visiting my [grandparents].<br>Emma: What about the [weekend]?<br>Mark: Yes, I want to hang [out] with my friends."
                },
                {
                    type: "dropdown",
                    instruction: "Listen to the conversation about family.",
                    audio: "TTS: Sarah: How many people are in your family? Liam: There are five of us. I have two siblings. Sarah: Do you get along with them? Liam: Yes, we are very close.",
                    questions:[
                        { q: "Sarah: How many [people* | parents | cousins] are in your family?", a: "people" },
                        { q: "Liam: There are five of us. I have two[siblings* | uncles | nephews].", a: "siblings" },
                        { q: "Sarah: Do you get [along* | around | away] with them?", a: "along" },
                        { q: "Liam: Yes, we are very[close* | single | engaged].", a: "close" }
                    ]
                },
                {
                    type: "audio-choice",
                    instruction: "Listen to the speaker. What is he planning to do?",
                    audio: "TTS: My cousin is getting married next week, so we are going to a big party. I want to invite my best friend to come with me.",
                    options:[
                        { t: "He is going to a rock concert alone.", c: false },
                        { t: "He is going to a wedding party with his best friend.", c: true },
                        { t: "He is going to visit his grandparents on Saturday.", c: false },
                        { t: "He is moving to a new apartment with a roommate.", c: false }
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
                    title: "Dialogue - A New Colleague",
                    audio: "TTS: Tom: Hi Lisa. Is that a photo of your husband? Lisa: Yes, we have been married for five years. Tom: Do you have any children? Lisa: Yes, we have one daughter and one son. What about you, Tom? Tom: I am single. But I have a very big extended family. I have ten cousins! Lisa: Wow, that's a lot of people to keep in touch with.",
                    body: "<b>Tom:</b> Hi Lisa. Is that a photo of your husband?<br><b>Lisa:</b> Yes, we have been [married](tooltip:married) for five years.<br><b>Tom:</b> [Do you have any children](tooltip:do-you-have-children)?<br><b>Lisa:</b> Yes, we have one [daughter](tooltip:daughter) and one [son](tooltip:son). What about you, Tom?<br><b>Tom:</b> I am [single](tooltip:single). But I have a very big[extended family](tooltip:extended-family). I have ten [cousins](tooltip:cousin)!<br><b>Lisa:</b> Wow, that's a lot of people to [keep in touch](tooltip:keep-in-touch) with.",
                    questions:[
                        { q: "What is Lisa's marital status?", options:[{t: "Single", c: false}, {t: "Married", c: true}, {t: "Divorced", c: false}], type: "mcq" },
                        { q: "How many children does Lisa have?", options:[{t: "One son.", c: false}, {t: "One daughter and one son.", c: true}, {t: "Two daughters.", c: false}], type: "mcq" },
                        { q: "Why does Tom have a big extended family?", options:[{t: "He has ten cousins.", c: true}, {t: "He has ten siblings.", c: false}, {t: "He is married.", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Dialogue - Weekend Plans",
                    audio: "TTS: Anna: Hey Jake, are you busy this weekend? Jake: Not really. I am just going to hang out at home. Why? Anna: Let's go to a concert on Saturday night! My favorite band is playing. Jake: That sounds great! Would you like to meet for dinner before the concert? Anna: Yes, perfect. We can invite our classmates too. Jake: Awesome. I'll send them a message.",
                    body: "<b>Anna:</b> Hey Jake, [are you busy this weekend](tooltip:are-you-busy)?<br><b>Jake:</b> Not really. I am just going to [hang out](tooltip:hang-out) at home. Why?<br><b>Anna:</b> [Let's](tooltip:lets) go to a [concert](tooltip:concert) on Saturday night! My favorite band is playing.<br><b>Jake:</b> [That sounds great](tooltip:that-sounds-great)! [Would you like to](tooltip:would-you-like) [meet](tooltip:meet) for dinner before the concert?<br><b>Anna:</b> Yes, perfect. We can [invite](tooltip:invite) our [classmates](tooltip:classmate) too.<br><b>Jake:</b> Awesome. I'll send them a message.",
                    questions:[
                        { q: "What was Jake originally planning to do this weekend?", options:[{t: "Go to a party.", c: false}, {t: "Hang out at home.", c: true}, {t: "Visit his parents.", c: false}], type: "mcq" },
                        { q: "What does Anna want to do?", options:[{t: "Have a picnic.", c: false}, {t: "Go to a concert.", c: true}, {t: "Study for an exam.", c: false}], type: "mcq" },
                        { q: "Who else are they going to invite?", options:[{t: "Their classmates.", c: true}, {t: "Their siblings.", c: false}, {t: "Their grandparents.", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Email - Catching Up",
                    audio: "TTS: Subject: Long time no see! Hi Emma, How are you? I wanted to see if you are free on Friday. It has been a long time since we spent time together. My sister recently got engaged, so we are planning a small party to celebrate. I want to invite you to come over. Let me know if you can make it! Best, Sophie.",
                    body: "<b>From: Sophie</b><br><b>To: Emma</b><br>Subject: Long time no see!<br><br>Hi Emma,<br>How are you? I wanted to see if you [are free on](tooltip:are-you-free) Friday. It has been a long time since we [spent time](tooltip:spend-time) together. My sister recently got [engaged](tooltip:engaged), so we are planning a small [party](tooltip:party) to celebrate. I want to [invite](tooltip:invite) you to come over. Let me know if you can make it!<br><br>Best, Sophie.",
                    questions:[
                        { q: "Why is Sophie writing to Emma?", options:[{t: "To ask for money.", c: false}, {t: "To invite her to a party.", c: true}, {t: "To talk about her new job.", c: false}], type: "mcq" },
                        { q: "What is the reason for the party?", options:[{t: "Sophie's sister got engaged.", c: true}, {t: "It's Sophie's birthday.", c: false}, {t: "Sophie got married.", c: false}], type: "mcq" },
                        { q: "When does Sophie want to meet?", options:[{t: "On Saturday.", c: false}, {t: "On Friday.", c: true}, {t: "On the weekend.", c: false}], type: "mcq" }
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
                { type: "matching", instruction: "Match the family members to their descriptions.", pairs:[
                    { left: "Parents", right: "Mother and father", val: "1" },
                    { left: "Siblings", right: "Brothers and sisters", val: "2" },
                    { left: "Aunt", right: "Sister of a parent", val: "3" },
                    { left: "Nephew", right: "Son of a sibling", val: "4" }
                ]},
                { type: "matching", instruction: "Match the marital status to its meaning.", pairs:[
                    { left: "Single", right: "Not married", val: "1" },
                    { left: "Married", right: "Having a husband or wife", val: "2" },
                    { left: "Engaged", right: "Promised to be married", val: "3" },
                    { left: "Divorced", right: "Legally separated from spouse", val: "4" }
                ]},
                { type: "matching", instruction: "Match the social verbs.", pairs:[
                    { left: "To visit", right: "Go to see someone", val: "1" },
                    { left: "To invite", right: "Ask someone to come", val: "2" },
                    { left: "To hang out", right: "Spend time relaxing", val: "3" },
                    { left: "To meet", right: "Come together with someone", val: "4" }
                ]},
                { type: "matching", instruction: "Match the phrase halves.", pairs:[
                    { left: "Get along", right: "with someone", val: "1" },
                    { left: "Take", right: "after your father", val: "2" },
                    { left: "Keep in", right: "touch", val: "3" },
                    { left: "Look", right: "like your mother", val: "4" }
                ]},

                // --- WORD ORDER (5-14) ---
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "come / a / I / big / from / family / .", correct: "I come from a big family ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "get / with / I / along / sister / my / .", correct: "I get along with my sister ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "after / really / I / father / take / my / .", correct: "I really take after my father ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "any / brothers / Do / have / or / you / sisters / ?", correct: "Do you have any brothers or sisters ?" },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "in / people / How / many / your / are / family / ?", correct: "How many people are in your family ?" },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "any / children / have / Do / you / ?", correct: "Do you have any children ?" },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "free / Are / Friday / you / on / ?", correct: "Are you free on Friday ?" },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "doing / What / on / you / Saturday / are / ?", correct: "What are you doing on Saturday ?" },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "like / to / grab / Would / coffee / you / a / ?", correct: "Would you like to grab a coffee ?" },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "sounds / great / That / !", correct: "That sounds great !" },

                // --- CLICKABLE ERROR (15-24) ---
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "I get [along](error:alone) with my older brother." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "I [look](error:see) like my mother." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "She [takes](error:makes) after her grandfather." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "How [many](error:much) people are in your family?" },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "Are you free [on](error:in) Saturday?" },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "Would you [like](error:love) to go to a concert?" },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "Let's [keep](error:make) in touch." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "My [nephew](error:niece) is the son of my sister." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "I am [married](error:marry) and I have two children." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "Let's [hang](error:stay) out this weekend." },

                // --- ODD ONE OUT (25-30) ---
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Immediate Family)", options:[{t: "Parents", c: false}, {t: "Siblings", c: false}, {t: "Son", c: false}, {t: "Cousin", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Extended Family)", options:[{t: "Uncle", c: false}, {t: "Aunt", c: false}, {t: "Nephew", c: false}, {t: "Daughter", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Marital Status)", options:[{t: "Single", c: false}, {t: "Married", c: false}, {t: "Divorced", c: false}, {t: "Neighbor", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Social Life)", options:[{t: "Party", c: false}, {t: "Concert", c: false}, {t: "Picnic", c: false}, {t: "Colleague", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Verbs)", options:[{t: "To invite", c: false}, {t: "To visit", c: false}, {t: "To hang out", c: false}, {t: "Widowed", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Relations)", options:[{t: "Friend", c: false}, {t: "Classmate", c: false}, {t: "Colleague", c: false}, {t: "Concert", c: true}] },

                // --- TRUE / FALSE (31-35) ---
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "Your aunt is the sister of your mother or father.", correct: "true"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "If you 'take after' someone, it means you run behind them.", correct: "false"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "A 'colleague' is someone you work with.", correct: "true"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "If you are 'single', you are married to one person.", correct: "false"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "You can say 'That sounds great!' to accept an invitation.", correct: "true"}] },

                // --- MCQ (36-39) ---
                { type: "mcq", instruction: "Choose the correct phrase.<br>When you have a good relationship with someone, you ________ them.", options:[{t: "look like", c: false}, {t: "get along with", c: true}, {t: "take after", c: false}, {t: "invite", c: false}] },
                { type: "mcq", instruction: "Choose the correct phrase.<br>To ask someone if they have time to meet on Friday, you say: ________ Friday?", options:[{t: "Are you busy on", c: false}, {t: "Are you free on", c: true}, {t: "Do you have on", c: false}, {t: "What are you doing at", c: false}] },
                { type: "mcq", instruction: "Choose the correct noun.<br>The child of your aunt or uncle is your ________.", options:[{t: "nephew", c: false}, {t: "niece", c: false}, {t: "cousin", c: true}, {t: "sibling", c: false}] },
                { type: "mcq", instruction: "Choose the correct verb.<br>I like to ________ time with my family on Sundays.", options:[{t: "spend", c: true}, {t: "hang", c: false}, {t: "visit", c: false}, {t: "meet", c: false}] },

                // --- CATEGORIZE (40) ---
                { type: "categorize", instruction: "Sort the words into Family and Friends/Social.", 
                    categories:[{id: "fam", name: "Family"}, {id: "soc", name: "Friends/Social"}],
                    items:[
                        {text: "Siblings", catId: "fam"}, 
                        {text: "Cousin", catId: "fam"}, 
                        {text: "Parents", catId: "fam"}, 
                        {text: "Neighbor", catId: "soc"}, 
                        {text: "Classmate", catId: "soc"}, 
                        {text: "Colleague", catId: "soc"}
                    ] 
                }
            ]
        },

        // ======================================================
        // STEP 8: WRITING PRACTICE
        // ======================================================
        {
            title: "Writing Practice",
            instruction: "Write a short paragraph (5-7 sentences) introducing your family and describing your weekend plans with friends.",
            example: "I come from a big family. I have two siblings, and we get along very well. I also look like my father. This weekend, I am going to spend time with my best friend. We are not busy, so we plan to hang out in the park and have a picnic. I hope the weather is nice!",
            prompts:[
                "Describe your immediate family (e.g., I have... / There are... people in my family).",
                "Mention who you take after or get along with.",
                "Describe your social plans for the weekend.",
                "Use vocabulary like 'hang out', 'invite', or 'spend time'."
            ]
        },

        // ======================================================
        // STEP 9: FLASHCARDS
        // ======================================================
        {
            title: "Flashcards",
            items:[
                // 2A Items (30 items)
                { term: "Parents", definition: "A person's father or mother.", defTrans: "Pais (Pai e Mãe)", example: "My parents live in a different city.", audioFront: "TTS: Parents", audioBack: "TTS: My parents live in a different city." },
                { term: "Siblings", definition: "Brothers and sisters.", defTrans: "Irmãos (Irmãos e Irmãs)", example: "I have two siblings, a brother and a sister.", audioFront: "TTS: Siblings", audioBack: "TTS: I have two siblings, a brother and a sister." },
                { term: "Son", definition: "A boy or man in relation to either or both of his parents.", defTrans: "Filho", example: "Their son loves playing football.", audioFront: "TTS: Son", audioBack: "TTS: Their son loves playing football." },
                { term: "Daughter", definition: "A girl or woman in relation to either or both of her parents.", defTrans: "Filha", example: "My daughter is five years old.", audioFront: "TTS: Daughter", audioBack: "TTS: My daughter is five years old." },
                { term: "Grandparents", definition: "The parents of a person's father or mother.", defTrans: "Avós", example: "We visit our grandparents every Sunday.", audioFront: "TTS: Grandparents", audioBack: "TTS: We visit our grandparents every Sunday." },
                { term: "Uncle", definition: "The brother of one's father or mother.", defTrans: "Tio", example: "My uncle always tells funny jokes.", audioFront: "TTS: Uncle", audioBack: "TTS: My uncle always tells funny jokes." },
                { term: "Aunt", definition: "The sister of one's father or mother.", defTrans: "Tia", example: "My aunt baked a delicious cake.", audioFront: "TTS: Aunt", audioBack: "TTS: My aunt baked a delicious cake." },
                { term: "Cousin", definition: "A child of one's uncle or aunt.", defTrans: "Primo(a)", example: "I went to the park with my cousin.", audioFront: "TTS: Cousin", audioBack: "TTS: I went to the park with my cousin." },
                { term: "Nephew", definition: "A son of one's brother or sister.", defTrans: "Sobrinho", example: "My nephew is learning to ride a bike.", audioFront: "TTS: Nephew", audioBack: "TTS: My nephew is learning to ride a bike." },
                { term: "Niece", definition: "A daughter of one's brother or sister.", defTrans: "Sobrinha", example: "I bought a gift for my niece.", audioFront: "TTS: Niece", audioBack: "TTS: I bought a gift for my niece." },

                { term: "Friend", definition: "A person whom one knows and with whom one has a bond of mutual affection.", defTrans: "Amigo(a)", example: "She is a very good friend of mine.", audioFront: "TTS: Friend", audioBack: "TTS: She is a very good friend of mine." },
                { term: "Neighbor", definition: "A person living next door to or very near to the speaker.", defTrans: "Vizinho(a)", example: "My neighbor is very quiet and polite.", audioFront: "TTS: Neighbor", audioBack: "TTS: My neighbor is very quiet and polite." },
                { term: "Best friend", definition: "A person's closest and dearest friend.", defTrans: "Melhor amigo(a)", example: "He is my best friend since childhood.", audioFront: "TTS: Best friend", audioBack: "TTS: He is my best friend since childhood." },
                { term: "Single", definition: "Unmarried or not involved in a stable romantic relationship.", defTrans: "Solteiro(a)", example: "I am currently single and focusing on my career.", audioFront: "TTS: Single", audioBack: "TTS: I am currently single and focusing on my career." },
                { term: "Married", definition: "Joined in marriage.", defTrans: "Casado(a)", example: "They have been married for ten years.", audioFront: "TTS: Married", audioBack: "TTS: They have been married for ten years." },
                { term: "Engaged", definition: "Having formally agreed to marry.", defTrans: "Noivo(a)", example: "My sister just got engaged to her boyfriend.", audioFront: "TTS: Engaged", audioBack: "TTS: My sister just got engaged to her boyfriend." },
                { term: "Divorced", definition: "Legally separated from one's spouse.", defTrans: "Divorciado(a)", example: "He is divorced and lives alone now.", audioFront: "TTS: Divorced", audioBack: "TTS: He is divorced and lives alone now." },
                { term: "Widowed", definition: "Having lost one's spouse through death and not remarried.", defTrans: "Viúvo(a)", example: "She is a widowed mother of two.", audioFront: "TTS: Widowed", audioBack: "TTS: She is a widowed mother of two." },
                { term: "Colleague", definition: "A person with whom one works in a profession or business.", defTrans: "Colega (de trabalho)", example: "I eat lunch with my colleague every day.", audioFront: "TTS: Colleague", audioBack: "TTS: I eat lunch with my colleague every day." },
                { term: "Classmate", definition: "A fellow student in one's class at school or college.", defTrans: "Colega de classe", example: "My classmate helped me study for the exam.", audioFront: "TTS: Classmate", audioBack: "TTS: My classmate helped me study for the exam." },

                { term: "Party", definition: "A social gathering of invited guests.", defTrans: "Festa", example: "We are going to a birthday party tonight.", audioFront: "TTS: Party", audioBack: "TTS: We are going to a birthday party tonight." },
                { term: "Concert", definition: "A musical performance given in public.", defTrans: "Show / Concerto", example: "I bought tickets for a rock concert.", audioFront: "TTS: Concert", audioBack: "TTS: I bought tickets for a rock concert." },
                { term: "Picnic", definition: "An occasion that involves taking a packed meal to be eaten outdoors.", defTrans: "Piquenique", example: "Let's have a picnic in the park.", audioFront: "TTS: Picnic", audioBack: "TTS: Let's have a picnic in the park." },
                { term: "Weekend", definition: "Saturday and Sunday.", defTrans: "Fim de semana", example: "I like to relax on the weekend.", audioFront: "TTS: Weekend", audioBack: "TTS: I like to relax on the weekend." },
                { term: "To visit", definition: "To go to see and spend time with someone.", defTrans: "Visitar", example: "We visit my grandparents on holidays.", audioFront: "TTS: To visit", audioBack: "TTS: We visit my grandparents on holidays." },
                { term: "To spend time", definition: "To pass time doing something.", defTrans: "Passar tempo", example: "I want to spend time with my family.", audioFront: "TTS: To spend time", audioBack: "TTS: I want to spend time with my family." },
                { term: "To hang out", definition: "To spend time relaxing or socializing informally.", defTrans: "Sair para curtir / Passar tempo", example: "We hang out at the cafe after school.", audioFront: "TTS: To hang out", audioBack: "TTS: We hang out at the cafe after school." },
                { term: "To invite", definition: "To make a polite, formal, or friendly request to someone to go somewhere.", defTrans: "Convidar", example: "I will invite my friends to dinner.", audioFront: "TTS: To invite", audioBack: "TTS: I will invite my friends to dinner." },
                { term: "To meet", definition: "To arrange or happen to come into the presence of someone.", defTrans: "Encontrar / Conhecer", example: "Let's meet at the cinema at eight.", audioFront: "TTS: To meet", audioBack: "TTS: Let's meet at the cinema at eight." },
                { term: "To go out", definition: "To leave one's home to go to a social event.", defTrans: "Sair (divertir-se)", example: "Do you want to go out on Friday?", audioFront: "TTS: To go out", audioBack: "TTS: Do you want to go out on Friday?" },

                // 3A Items (18 items)
                { term: "A big family", definition: "A family with many members.", defTrans: "Uma família grande", example: "I come from a big family.", audioFront: "TTS: A big family", audioBack: "TTS: I come from a big family." },
                { term: "Immediate family", definition: "A person's parents, children, brothers, and sisters.", defTrans: "Família imediata", example: "My parents and siblings are my immediate family.", audioFront: "TTS: Immediate family", audioBack: "TTS: My parents and siblings are my immediate family." },
                { term: "Extended family", definition: "A family that extends beyond the nuclear family.", defTrans: "Família estendida", example: "My cousins and uncles are my extended family.", audioFront: "TTS: Extended family", audioBack: "TTS: My cousins and uncles are my extended family." },
                { term: "Get along with", definition: "To have a harmonious or friendly relationship with someone.", defTrans: "Dar-se bem com", example: "I really get along with my brother.", audioFront: "TTS: Get along with", audioBack: "TTS: I really get along with my brother." },
                { term: "Look like", definition: "To have a similar physical appearance to someone.", defTrans: "Parecer fisicamente com", example: "I look like my father.", audioFront: "TTS: Look like", audioBack: "TTS: I look like my father." },
                { term: "Take after", definition: "To resemble a parent or ancestor, especially in personality.", defTrans: "Puxar a (alguém na personalidade)", example: "I take after my mother in personality.", audioFront: "TTS: Take after", audioBack: "TTS: I take after my mother in personality." },
                { term: "Do you have any brothers or sisters?", definition: "Asking about someone's siblings.", defTrans: "Você tem irmãos ou irmãs?", example: "Do you have any brothers or sisters?", audioFront: "TTS: Do you have any brothers or sisters?", audioBack: "TTS: Do you have any brothers or sisters?" },
                { term: "How many people are in your family?", definition: "Asking about family size.", defTrans: "Quantas pessoas tem na sua família?", example: "How many people are in your family?", audioFront: "TTS: How many people are in your family?", audioBack: "TTS: How many people are in your family?" },
                { term: "Tell me about your family.", definition: "Asking someone to describe their family.", defTrans: "Me fale sobre a sua família.", example: "Tell me about your family.", audioFront: "TTS: Tell me about your family.", audioBack: "TTS: Tell me about your family." },
                { term: "Do you have any children?", definition: "Asking if someone is a parent.", defTrans: "Você tem filhos?", example: "Do you have any children?", audioFront: "TTS: Do you have any children?", audioBack: "TTS: Do you have any children?" },
                { term: "Make new friends", definition: "To form new friendships.", defTrans: "Fazer novos amigos", example: "It is fun to make new friends.", audioFront: "TTS: Make new friends", audioBack: "TTS: It is fun to make new friends." },
                { term: "Keep in touch", definition: "To maintain communication with someone.", defTrans: "Manter contato", example: "Even if we move, let's keep in touch.", audioFront: "TTS: Keep in touch", audioBack: "TTS: Even if we move, let's keep in touch." },
                { term: "Are you free on", definition: "Asking if someone is available on a specific day.", defTrans: "Você está livre no(a)", example: "Are you free on Saturday?", audioFront: "TTS: Are you free on", audioBack: "TTS: Are you free on Saturday?" },
                { term: "Are you busy this weekend?", definition: "Asking if someone has plans for the weekend.", defTrans: "Você está ocupado neste fim de semana?", example: "Are you busy this weekend?", audioFront: "TTS: Are you busy this weekend?", audioBack: "TTS: Are you busy this weekend?" },
                { term: "What are you doing on", definition: "Asking about someone's plans for a specific time.", defTrans: "O que você vai fazer no(a)", example: "What are you doing on Friday night?", audioFront: "TTS: What are you doing on", audioBack: "TTS: What are you doing on Friday night?" },
                { term: "Would you like to", definition: "A polite way to invite someone or offer something.", defTrans: "Você gostaria de", example: "Would you like to grab a coffee?", audioFront: "TTS: Would you like to", audioBack: "TTS: Would you like to grab a coffee?" },
                { term: "Let's", definition: "Used to make a suggestion to do something together.", defTrans: "Vamos", example: "Let's go to the cinema.", audioFront: "TTS: Let's", audioBack: "TTS: Let's go to the cinema." },
                { term: "That sounds great", definition: "Used to enthusiastically accept an idea or invitation.", defTrans: "Isso parece/soa ótimo", example: "That sounds great!", audioFront: "TTS: That sounds great", audioBack: "TTS: That sounds great!" }
            ]
        }
    ],

    // ======================================================
    // GLOSSARY (All 48 items + Context words)
    // ======================================================
    glossary:[
        // 2A: Family Members
        { topic: "Family", term: "parents", definition: "A person's father or mother.", translation: "Pais (Pai e Mãe)" },
        { topic: "Family", term: "siblings", definition: "Brothers and sisters.", translation: "Irmãos" },
        { topic: "Family", term: "son", definition: "A male child.", translation: "Filho" },
        { topic: "Family", term: "daughter", definition: "A female child.", translation: "Filha" },
        { topic: "Family", term: "grandparents", definition: "The parents of a person's father or mother.", translation: "Avós" },
        { topic: "Family", term: "uncle", definition: "The brother of one's father or mother.", translation: "Tio" },
        { topic: "Family", term: "aunt", definition: "The sister of one's father or mother.", translation: "Tia" },
        { topic: "Family", term: "cousin", definition: "A child of one's uncle or aunt.", translation: "Primo(a)" },
        { topic: "Family", term: "nephew", definition: "A son of one's brother or sister.", translation: "Sobrinho" },
        { topic: "Family", term: "niece", definition: "A daughter of one's brother or sister.", translation: "Sobrinha" },

        // 2A: Friends & Marital Status
        { topic: "Social", term: "friend", definition: "A person whom one knows and likes.", translation: "Amigo(a)" },
        { topic: "Social", term: "neighbor", definition: "A person living next door.", translation: "Vizinho(a)" },
        { topic: "Social", term: "best-friend", definition: "A person's closest and dearest friend.", translation: "Melhor amigo(a)" },
        { topic: "Social", term: "single", definition: "Unmarried.", translation: "Solteiro(a)" },
        { topic: "Social", term: "married", definition: "Joined in marriage.", translation: "Casado(a)" },
        { topic: "Social", term: "engaged", definition: "Having formally agreed to marry.", translation: "Noivo(a)" },
        { topic: "Social", term: "divorced", definition: "Legally separated from one's spouse.", translation: "Divorciado(a)" },
        { topic: "Social", term: "widowed", definition: "Having lost one's spouse through death.", translation: "Viúvo(a)" },
        { topic: "Social", term: "colleague", definition: "A person with whom one works.", translation: "Colega (de trabalho)" },
        { topic: "Social", term: "classmate", definition: "A fellow student in one's class.", translation: "Colega de classe" },

        // 2A: Social Activities & Verbs
        { topic: "Activities", term: "party", definition: "A social gathering of invited guests.", translation: "Festa" },
        { topic: "Activities", term: "concert", definition: "A musical performance given in public.", translation: "Show / Concerto" },
        { topic: "Activities", term: "picnic", definition: "An occasion eating a packed meal outdoors.", translation: "Piquenique" },
        { topic: "Activities", term: "weekend", definition: "Saturday and Sunday.", translation: "Fim de semana" },
        { topic: "Activities", term: "to-visit", definition: "To go to see someone.", translation: "Visitar" },
        { topic: "Activities", term: "to-spend-time", definition: "To pass time doing something.", translation: "Passar tempo" },
        { topic: "Activities", term: "to-hang-out", definition: "To spend time relaxing or socializing informally.", translation: "Sair para curtir / Passar tempo" },
        { topic: "Activities", term: "to-invite", definition: "To ask someone to go somewhere.", translation: "Convidar" },
        { topic: "Activities", term: "to-meet", definition: "To come into the presence of someone.", translation: "Encontrar / Conhecer" },
        { topic: "Activities", term: "to-go-out", definition: "To leave home for a social event.", translation: "Sair (divertir-se)" },

        // 3A: Expressions
        { topic: "Expressions", term: "big-family", definition: "A family with many members.", translation: "Uma família grande" },
        { topic: "Expressions", term: "immediate-family", definition: "Parents, children, brothers, and sisters.", translation: "Família imediata" },
        { topic: "Expressions", term: "extended-family", definition: "A family extending beyond the nuclear family.", translation: "Família estendida" },
        { topic: "Expressions", term: "get-along-with", definition: "To have a friendly relationship.", translation: "Dar-se bem com" },
        { topic: "Expressions", term: "look-like", definition: "To have a similar physical appearance.", translation: "Parecer fisicamente com" },
        { topic: "Expressions", term: "take-after", definition: "To resemble a parent, especially in personality.", translation: "Puxar a" },
        { topic: "Expressions", term: "do-you-have-brothers", definition: "Asking about siblings.", translation: "Você tem irmãos ou irmãs?" },
        { topic: "Expressions", term: "how-many-people-family", definition: "Asking about family size.", translation: "Quantas pessoas tem na sua família?" },
        { topic: "Expressions", term: "tell-me-about-family", definition: "Asking to describe their family.", translation: "Me fale sobre a sua família." },
        { topic: "Expressions", term: "do-you-have-children", definition: "Asking if someone is a parent.", translation: "Você tem filhos?" },
        { topic: "Expressions", term: "make-new-friends", definition: "To form new friendships.", translation: "Fazer novos amigos" },
        { topic: "Expressions", term: "keep-in-touch", definition: "To maintain communication.", translation: "Manter contato" },
        { topic: "Expressions", term: "are-you-free", definition: "Asking if someone is available.", translation: "Você está livre no(a)" },
        { topic: "Expressions", term: "are-you-busy", definition: "Asking if someone has plans.", translation: "Você está ocupado?" },
        { topic: "Expressions", term: "what-are-you-doing-on", definition: "Asking about plans.", translation: "O que você vai fazer no(a)" },
        { topic: "Expressions", term: "would-you-like", definition: "A polite way to invite someone.", translation: "Você gostaria de" },
        { topic: "Expressions", term: "lets", definition: "Used to make a suggestion.", translation: "Vamos" },
        { topic: "Expressions", term: "that-sounds-great", definition: "Accepting an invitation enthusiastically.", translation: "Isso parece ótimo!" },

        // Additional Context Words
        { topic: "Context", term: "family", definition: "A group of one or more parents and their children living together as a unit.", translation: "Família" },
        { topic: "Context", term: "marital-status", definition: "The legally defined marital state of a person (e.g., single, married).", translation: "Estado civil" },
        { topic: "Context", term: "friends", definition: "People whom one knows and with whom one has a bond of mutual affection.", translation: "Amigos" },
        { topic: "Context", term: "social-plans", definition: "Arrangements to do something for fun with other people.", translation: "Planos sociais" },
        { topic: "Context", term: "close", definition: "Strongly attached or devoted.", translation: "Próximos / Unidos" },
        { topic: "Context", term: "plans", definition: "Intentions or decisions about what one is going to do.", translation: "Planos" }
    ]
});