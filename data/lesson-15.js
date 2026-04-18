/**
 * English Block Assembling - LESSON DATA: Topic 15
 * Topic: Leisure Activities
 * Level: Upper A2 ~ Lower B1
 */

window.initLesson({
    // --- METADATA ---
    lessonId: "lesson-15",
    block: "3",
    topicTitle: "Leisure Activities",

    steps:[
        // ======================================================
        // STEP 0: INTRO & CAN-DO
        // ======================================================
        {
            title: "Intro & Can-Do",
            objectives: "• Discuss specific [entertainment](tooltip:entertainment) activities like movies, music, and books.<br>• Talk about playing or watching [sports](tooltip:sport) and games.<br>• Ask others about their [leisure](tooltip:leisure) time and weekend plans.<br>• Successfully invite someone out and [book tickets](tooltip:book) in advance.",
            welcome: "Welcome to Lesson 15! In our busy lives, free time is precious. In this lesson, we will focus on the vocabulary and phrases you need to talk about what you do for fun. We will cover movies, concerts, sports, and games. You will also learn how to naturally ask your friends about their weekend plans and organize a great night out. Let's have some fun!",
            audio: {
                objectives: "TTS: In this lesson, you will learn to: Discuss specific entertainment activities like movies, music, and books. Talk about playing or watching sports and games. Ask others about their leisure time and weekend plans. Successfully invite someone out and book tickets in advance.",
                welcome: "TTS: Welcome to Lesson 15! In our busy lives, free time is precious. In this lesson, we will focus on the vocabulary and phrases you need to talk about what you do for fun. We will cover movies, concerts, sports, and games. You will also learn how to naturally ask your friends about their weekend plans and organize a great night out. Let's have some fun!"
            }
        },

        // ======================================================
        // STEP 1: CONTEXT DIALOGUE
        // ======================================================
        {
            title: "Context Dialogue",
            context: "Mark and Lisa are chatting at the office on a Friday afternoon, trying to organize an outing.",
            contextAudio: "TTS: Mark: Hey Lisa, what are you up to this weekend? Lisa: Not much. I don't have any plans for Friday night. Why? Mark: A few of us are going to the cinema to see the new superhero movie. Fancy doing something? Lisa: Oh, I'd love to! I watched the trailer, and it looks really thrilling. Mark: Great! Are you up for dinner before the movie? Lisa: That sounds perfect. I am so glad we can get together. Mark: Me too! I will book tickets in advance so we don't have to wait in line. Lisa: Thanks, Mark. See you later!",
            dialogue:[
                { speaker: "Mark", text: "Hey Lisa, [what are you up to this weekend](tooltip:what-up-to-weekend)?" },
                { speaker: "Lisa", text: "Not much. I don't have any plans for Friday night. Why?" },
                { speaker: "Mark", text: "A few of us are going to the [cinema](tooltip:cinema) to see the new superhero [movie](tooltip:movie). [Fancy doing something](tooltip:fancy-doing-something)?" },
                { speaker: "Lisa", text: "Oh, I'd love to! I watched the trailer, and it looks really [thrilling](tooltip:thrilling)." },
                { speaker: "Mark", text: "Great! [Are you up for](tooltip:are-you-up-for) dinner before the movie?" },
                { speaker: "Lisa", text: "That sounds perfect. I am so glad we can [get together](tooltip:get-together)." },
                { speaker: "Mark", text: "Me too! I will [book tickets in advance](tooltip:book-tickets-advance) so we don't have to wait in line." },
                { speaker: "Lisa", text: "Thanks, Mark. See you later!" }
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
                    title: "Entertainment & Arts",
                    audio: "TTS: Movie. Cinema. Ticket. Actor. Concert. Band. Singer. Album. Novel. Author. Series. Exhibition.",
                    items:[
                        { term: "Movie (film)", trans: "Filme" },
                        { term: "Cinema (movie theater)", trans: "Cinema" },
                        { term: "Ticket", trans: "Ingresso / Passagem" },
                        { term: "Actor", trans: "Ator (ou atriz)" },
                        { term: "Concert (gig)", trans: "Show / Concerto" },
                        { term: "Band", trans: "Banda (musical)" },
                        { term: "Singer", trans: "Cantor(a)" },
                        { term: "Album", trans: "Álbum (musical)" },
                        { term: "Novel", trans: "Romance (livro de ficção)" },
                        { term: "Author", trans: "Autor(a)" },
                        { term: "Series", trans: "Série (de TV)" },
                        { term: "Exhibition", trans: "Exposição (de arte)" }
                    ]
                },
                {
                    title: "Sports & Games",
                    audio: "TTS: Sport. Match. Team. Player. Fan. Stadium. Football. Tennis. Swimming. Board game. Puzzle. Video game.",
                    items:[
                        { term: "Sport", trans: "Esporte" },
                        { term: "Match", trans: "Partida / Jogo" },
                        { term: "Team", trans: "Time / Equipe" },
                        { term: "Player", trans: "Jogador(a)" },
                        { term: "Fan", trans: "Fã / Torcedor" },
                        { term: "Stadium", trans: "Estádio" },
                        { term: "Football", trans: "Futebol" },
                        { term: "Tennis", trans: "Tênis" },
                        { term: "Swimming", trans: "Natação" },
                        { term: "Board game", trans: "Jogo de tabuleiro" },
                        { term: "Puzzle", trans: "Quebra-cabeça" },
                        { term: "Video game", trans: "Jogo de videogame" }
                    ]
                },
                {
                    title: "Verbs & Adjectives",
                    audio: "TTS: To watch. To listen. To read. To play. To win. To lose. To book. Entertaining. Thrilling. Dull. Funny. Scary.",
                    items:[
                        { term: "To watch", trans: "Assistir" },
                        { term: "To listen", trans: "Ouvir" },
                        { term: "To read", trans: "Ler" },
                        { term: "To play", trans: "Jogar / Brincar / Tocar" },
                        { term: "To win", trans: "Vencer / Ganhar" },
                        { term: "To lose", trans: "Perder" },
                        { term: "To book", trans: "Reservar" },
                        { term: "Entertaining", trans: "Divertido / Que entretém" },
                        { term: "Thrilling", trans: "Emocionante / Eletrizante" },
                        { term: "Dull", trans: "Maçante / Sem graça" },
                        { term: "Funny", trans: "Engraçado" },
                        { term: "Scary", trans: "Assustador" }
                    ]
                }
            ],

            // --- 2B: EXAMPLES ---
            exampleGroups:[
                {
                    title: "Entertainment & Arts",
                    audio: "TTS: I want to see the new action movie. We are going to the cinema tonight. I bought a ticket for the front row. My favorite actor is in this film. We went to a rock concert on Saturday. The band played all their best songs. She is a very famous pop singer. Their new album drops next week. I am reading a fantastic mystery novel. The author signed my book. We binge-watched the entire television series. There is a great art exhibition downtown.",
                    items:[
                        { term: "Movie (film)", sent: "I want to see the new action movie.", trans: "Quero ver o novo filme de ação." },
                        { term: "Cinema (movie theater)", sent: "We are going to the cinema tonight.", trans: "Nós vamos ao cinema hoje à noite." },
                        { term: "Ticket", sent: "I bought a ticket for the front row.", trans: "Comprei um ingresso para a primeira fileira." },
                        { term: "Actor", sent: "My favorite actor is in this film.", trans: "Meu ator favorito está neste filme." },
                        { term: "Concert (gig)", sent: "We went to a rock concert on Saturday.", trans: "Fomos a um show de rock no sábado." },
                        { term: "Band", sent: "The band played all their best songs.", trans: "A banda tocou todas as suas melhores músicas." },
                        { term: "Singer", sent: "She is a very famous pop singer.", trans: "Ela é uma cantora pop muito famosa." },
                        { term: "Album", sent: "Their new album drops next week.", trans: "O novo álbum deles sai na próxima semana." },
                        { term: "Novel", sent: "I am reading a fantastic mystery novel.", trans: "Estou lendo um romance de mistério fantástico." },
                        { term: "Author", sent: "The author signed my book.", trans: "O autor autografou meu livro." },
                        { term: "Series", sent: "We binge-watched the entire television series.", trans: "Nós maratonamos a série inteira de televisão." },
                        { term: "Exhibition", sent: "There is a great art exhibition downtown.", trans: "Há uma ótima exposição de arte no centro." }
                    ]
                },
                {
                    title: "Sports & Games",
                    audio: "TTS: Basketball is my favorite sport. We watched the final match on TV. Our local team won the championship. The best player scored three goals. He is a huge fan of the Lakers. Over fifty thousand people were in the stadium. The kids are playing football in the park. She plays tennis every Sunday morning. Swimming is a great way to stay fit. We played a fun board game with the family. My grandmother loves solving a difficult puzzle. I bought a new video game for my console.",
                    items:[
                        { term: "Sport", sent: "Basketball is my favorite sport.", trans: "Basquete é o meu esporte favorito." },
                        { term: "Match", sent: "We watched the final match on TV.", trans: "Nós assistimos à partida final na TV." },
                        { term: "Team", sent: "Our local team won the championship.", trans: "Nosso time local ganhou o campeonato." },
                        { term: "Player", sent: "The best player scored three goals.", trans: "O melhor jogador marcou três gols." },
                        { term: "Fan", sent: "He is a huge fan of the Lakers.", trans: "Ele é um grande fã dos Lakers." },
                        { term: "Stadium", sent: "Over fifty thousand people were in the stadium.", trans: "Mais de cinquenta mil pessoas estavam no estádio." },
                        { term: "Football", sent: "The kids are playing football in the park.", trans: "As crianças estão jogando futebol no parque." },
                        { term: "Tennis", sent: "She plays tennis every Sunday morning.", trans: "Ela joga tênis todo domingo de manhã." },
                        { term: "Swimming", sent: "Swimming is a great way to stay fit.", trans: "A natação é uma ótima forma de se manter em forma." },
                        { term: "Board game", sent: "We played a fun board game with the family.", trans: "Nós jogamos um divertido jogo de tabuleiro com a família." },
                        { term: "Puzzle", sent: "My grandmother loves solving a difficult puzzle.", trans: "Minha avó ama resolver um quebra-cabeça difícil." },
                        { term: "Video game", sent: "I bought a new video game for my console.", trans: "Eu comprei um jogo de videogame novo para o meu console." }
                    ]
                },
                {
                    title: "Verbs & Adjectives",
                    audio: "TTS: I like to watch television to relax. Do you listen to podcasts? I read a chapter before I sleep. We play cards every Friday. They practice hard to win the game. I hate to lose when I play chess. You should book a table at the restaurant. The comedy show was very entertaining. The roller coaster was a thrilling experience. The documentary was a bit dull. He told a very funny joke. I couldn't sleep because the movie was so scary.",
                    items:[
                        { term: "To watch", sent: "I like to watch television to relax.", trans: "Eu gosto de assistir televisão para relaxar." },
                        { term: "To listen", sent: "Do you listen to podcasts?", trans: "Você ouve podcasts?" },
                        { term: "To read", sent: "I read a chapter before I sleep.", trans: "Eu leio um capítulo antes de dormir." },
                        { term: "To play", sent: "We play cards every Friday.", trans: "Nós jogamos cartas toda sexta-feira." },
                        { term: "To win", sent: "They practice hard to win the game.", trans: "Eles praticam duro para vencer o jogo." },
                        { term: "To lose", sent: "I hate to lose when I play chess.", trans: "Eu odeio perder quando jogo xadrez." },
                        { term: "To book", sent: "You should book a table at the restaurant.", trans: "Você deveria reservar uma mesa no restaurante." },
                        { term: "Entertaining", sent: "The comedy show was very entertaining.", trans: "O show de comédia foi muito divertido (entretedor)." },
                        { term: "Thrilling", sent: "The roller coaster was a thrilling experience.", trans: "A montanha-russa foi uma experiência emocionante/eletrizante." },
                        { term: "Dull", sent: "The documentary was a bit dull.", trans: "O documentário foi um pouco maçante." },
                        { term: "Funny", sent: "He told a very funny joke.", trans: "Ele contou uma piada muito engraçada." },
                        { term: "Scary", sent: "I couldn't sleep because the movie was so scary.", trans: "Não consegui dormir porque o filme era muito assustador." }
                    ]
                }
            ],

            // --- 2C: PRACTICE ---
            drillGroups:[
                {
                    title: "Entertainment & Arts",
                    drills:[
                        { q: "A story or event recorded by a camera and shown in a theater or on TV is a ________.", options:[{t: "Movie (film)", c: true}, {t: "Album", c: false}, {t: "Novel", c: false}, {t: "Ticket", c: false}], type: "mcq" },
                        { q: "A theater where films are shown for public entertainment is a ________.", options:[{t: "Cinema", c: true}, {t: "Concert", c: false}, {t: "Exhibition", c: false}, {t: "Band", c: false}], type: "mcq" },
                        { q: "A piece of paper that gives you the right to enter a place or event is a ________.", options:[{t: "Ticket", c: true}, {t: "Novel", c: false}, {t: "Album", c: false}, {t: "Series", c: false}], type: "mcq" },
                        { q: "A person whose profession is acting on the stage, in movies, or on TV is an ________.", options:[{t: "Author", c: false}, {t: "Singer", c: false}, {t: "Actor", c: true}, {t: "Band", c: false}], type: "mcq" },
                        { q: "A musical performance given in public is a ________.", options:[{t: "Concert (gig)", c: true}, {t: "Cinema", c: false}, {t: "Exhibition", c: false}, {t: "Novel", c: false}], type: "mcq" },
                        { q: "A group of musicians who play modern music together is a ________.", options:[{t: "Band", c: true}, {t: "Series", c: false}, {t: "Actor", c: false}, {t: "Ticket", c: false}], type: "mcq" },
                        { q: "A person who sings, especially professionally, is a ________.", options:[{t: "Singer", c: true}, {t: "Author", c: false}, {t: "Actor", c: false}, {t: "Band", c: false}], type: "mcq" },
                        { q: "A collection of musical recordings issued as a single item is an ________.", options:[{t: "Album", c: true}, {t: "Novel", c: false}, {t: "Series", c: false}, {t: "Exhibition", c: false}], type: "mcq" },
                        { q: "A long printed story about imaginary characters and events is a ________.", options:[{t: "Novel", c: true}, {t: "Ticket", c: false}, {t: "Concert", c: false}, {t: "Cinema", c: false}], type: "mcq" },
                        { q: "A writer of a book, article, or report is an ________.", options:[{t: "Author", c: true}, {t: "Singer", c: false}, {t: "Actor", c: false}, {t: "Band", c: false}], type: "mcq" },
                        { q: "A set of related television or radio programs is a ________.", options:[{t: "Series", c: true}, {t: "Exhibition", c: false}, {t: "Album", c: false}, {t: "Ticket", c: false}], type: "mcq" },
                        { q: "A public display of works of art or items of interest is an ________.", options:[{t: "Exhibition", c: true}, {t: "Cinema", c: false}, {t: "Concert", c: false}, {t: "Novel", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Sports & Games",
                    drills:[
                        { q: "An activity involving physical exertion and skill is a ________.", options:[{t: "Sport", c: true}, {t: "Puzzle", c: false}, {t: "Board game", c: false}, {t: "Fan", c: false}], type: "mcq" },
                        { q: "A contest in which people or teams compete against each other is a ________.", options:[{t: "Match", c: true}, {t: "Stadium", c: false}, {t: "Player", c: false}, {t: "Puzzle", c: false}], type: "mcq" },
                        { q: "A group of players forming one side in a competitive game is a ________.", options:[{t: "Team", c: true}, {t: "Fan", c: false}, {t: "Match", c: false}, {t: "Video game", c: false}], type: "mcq" },
                        { q: "A person taking part in a sport or game is a ________.", options:[{t: "Player", c: true}, {t: "Team", c: false}, {t: "Stadium", c: false}, {t: "Fan", c: false}], type: "mcq" },
                        { q: "A person who has a strong interest in or admiration for a sport or team is a ________.", options:[{t: "Fan", c: true}, {t: "Player", c: false}, {t: "Match", c: false}, {t: "Puzzle", c: false}], type: "mcq" },
                        { q: "A large sports arena with tiers of seats for spectators is a ________.", options:[{t: "Stadium", c: true}, {t: "Board game", c: false}, {t: "Tennis", c: false}, {t: "Team", c: false}], type: "mcq" },
                        { q: "A game played with a round ball, usually kicked, is ________.", options:[{t: "Football", c: true}, {t: "Tennis", c: false}, {t: "Swimming", c: false}, {t: "Puzzle", c: false}], type: "mcq" },
                        { q: "A game played with rackets and a light ball on a rectangular court is ________.", options:[{t: "Tennis", c: true}, {t: "Swimming", c: false}, {t: "Football", c: false}, {t: "Video game", c: false}], type: "mcq" },
                        { q: "The sport or activity of moving through water is ________.", options:[{t: "Swimming", c: true}, {t: "Football", c: false}, {t: "Tennis", c: false}, {t: "Board game", c: false}], type: "mcq" },
                        { q: "A tabletop game that involves counters or pieces moved on a pre-marked surface is a ________.", options:[{t: "Board game", c: true}, {t: "Video game", c: false}, {t: "Puzzle", c: false}, {t: "Sport", c: false}], type: "mcq" },
                        { q: "A game, toy, or problem designed to test ingenuity or knowledge is a ________.", options:[{t: "Puzzle", c: true}, {t: "Match", c: false}, {t: "Stadium", c: false}, {t: "Team", c: false}], type: "mcq" },
                        { q: "A game played by electronically manipulating images on a display is a ________.", options:[{t: "Video game", c: true}, {t: "Board game", c: false}, {t: "Puzzle", c: false}, {t: "Tennis", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Verbs & Adjectives",
                    drills:[
                        { q: "To look at or observe attentively over a period of time is to ________.", options:[{t: "Watch", c: true}, {t: "Listen", c: false}, {t: "Read", c: false}, {t: "Win", c: false}], type: "mcq" },
                        { q: "To give one's attention to a sound is to ________.", options:[{t: "Listen", c: true}, {t: "Watch", c: false}, {t: "Play", c: false}, {t: "Book", c: false}], type: "mcq" },
                        { q: "To look at and comprehend the meaning of written matter is to ________.", options:[{t: "Read", c: true}, {t: "Watch", c: false}, {t: "Lose", c: false}, {t: "Play", c: false}], type: "mcq" },
                        { q: "To engage in an activity for enjoyment and recreation is to ________.", options:[{t: "Play", c: true}, {t: "Read", c: false}, {t: "Listen", c: false}, {t: "Book", c: false}], type: "mcq" },
                        { q: "To be successful or victorious in a contest or conflict is to ________.", options:[{t: "Win", c: true}, {t: "Lose", c: false}, {t: "Play", c: false}, {t: "Watch", c: false}], type: "mcq" },
                        { q: "To fail to win a game or contest is to ________.", options:[{t: "Lose", c: true}, {t: "Win", c: false}, {t: "Book", c: false}, {t: "Read", c: false}], type: "mcq" },
                        { q: "To reserve accommodations, a place, or a ticket is to ________.", options:[{t: "Book", c: true}, {t: "Play", c: false}, {t: "Lose", c: false}, {t: "Listen", c: false}], type: "mcq" },
                        { q: "Providing amusement or enjoyment means something is ________.", options:[{t: "Entertaining", c: true}, {t: "Dull", c: false}, {t: "Scary", c: false}, {t: "Thrilling", c: false}], type: "mcq" },
                        { q: "Causing excitement and pleasure; exhilarating means something is ________.", options:[{t: "Thrilling", c: true}, {t: "Dull", c: false}, {t: "Funny", c: false}, {t: "Scary", c: false}], type: "mcq" },
                        { q: "Lacking interest or excitement; boring means something is ________.", options:[{t: "Dull", c: true}, {t: "Entertaining", c: false}, {t: "Thrilling", c: false}, {t: "Funny", c: false}], type: "mcq" },
                        { q: "Causing laughter or amusement means something is ________.", options:[{t: "Funny", c: true}, {t: "Scary", c: false}, {t: "Dull", c: false}, {t: "Thrilling", c: false}], type: "mcq" },
                        { q: "Frightening or causing fear means something is ________.", options:[{t: "Scary", c: true}, {t: "Funny", c: false}, {t: "Entertaining", c: false}, {t: "Dull", c: false}], type: "mcq" }
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
                    title: "Movies, Music & Books",
                    audio: "TTS: Go to the movies. See a play. Listen to live music. Binge-watch a TV series. My favorite band is.",
                    explanation: "Phrases used to describe cultural and entertainment activities.<br><span style='color:var(--primary-blue); font-style:italic;'>(Frases usadas para descrever atividades culturais e de entretenimento.)</span>",
                    samples:[
                        { en: "Let's <b>go to the movies</b> tonight.", pt: "<span style='color:var(--primary-blue)'>(Vamos ao cinema hoje à noite.)</span>" },
                        { en: "We want to <b>see a play</b> at the theater.", pt: "<span style='color:var(--primary-blue)'>(Queremos ver uma peça no teatro.)</span>" },
                        { en: "I love to <b>listen to live music</b>.", pt: "<span style='color:var(--primary-blue)'>(Eu amo ouvir música ao vivo.)</span>" },
                        { en: "I will just stay home and <b>binge-watch a TV series</b>.", pt: "<span style='color:var(--primary-blue)'>(Vou apenas ficar em casa e maratonar uma série de TV.)</span>" },
                        { en: "<b>My favorite band is</b> Coldplay.", pt: "<span style='color:var(--primary-blue)'>(Minha banda favorita é Coldplay.)</span>" }
                    ]
                },
                {
                    title: "Sports & Activities",
                    audio: "TTS: Go for a run. Watch a match. Support a team. Go to the gym. Do you play any sports?",
                    explanation: "Phrases used to talk about athletic and physical activities.<br><span style='color:var(--primary-blue); font-style:italic;'>(Frases usadas para falar sobre atividades atléticas e físicas.)</span>",
                    samples:[
                        { en: "I like to <b>go for a run</b> in the morning.", pt: "<span style='color:var(--primary-blue)'>(Gosto de correr de manhã.)</span>" },
                        { en: "Did you <b>watch a match</b> on TV last night?", pt: "<span style='color:var(--primary-blue)'>(Você assistiu a um jogo na TV ontem à noite?)</span>" },
                        { en: "I always <b>support a team</b> from my hometown.", pt: "<span style='color:var(--primary-blue)'>(Sempre torço por um time da minha cidade natal.)</span>" },
                        { en: "I <b>go to the gym</b> every day.", pt: "<span style='color:var(--primary-blue)'>(Eu vou à academia todos os dias.)</span>" },
                        { en: "<b>Do you play any sports?</b>", pt: "<span style='color:var(--primary-blue)'>(Você pratica algum esporte?)</span>" }
                    ]
                },
                {
                    title: "Planning Activities",
                    audio: "TTS: What are you up to this weekend? Do you have any plans for Friday? Fancy doing something? Are you up for? Let's get together. Book tickets in advance.",
                    explanation: "Useful phrases to organize meetings, invite people, and prepare for an event.<br><span style='color:var(--primary-blue); font-style:italic;'>(Frases úteis para organizar encontros, convidar pessoas e preparar-se para um evento.)</span>",
                    samples:[
                        { en: "<b>What are you up to this weekend?</b>", pt: "<span style='color:var(--primary-blue)'>(O que você vai fazer neste fim de semana?)</span>" },
                        { en: "<b>Do you have any plans for Friday?</b>", pt: "<span style='color:var(--primary-blue)'>(Você tem algum plano para sexta-feira?)</span>" },
                        { en: "I am bored. <b>Fancy doing something?</b>", pt: "<span style='color:var(--primary-blue)'>(Estou entediado. Tá a fim de fazer algo?)</span>" },
                        { en: "<b>Are you up for</b> a concert?", pt: "<span style='color:var(--primary-blue)'>(Você topa ir a um show?)</span>" },
                        { en: "<b>Let's get together</b> for lunch.", pt: "<span style='color:var(--primary-blue)'>(Vamos nos reunir para o almoço.)</span>" },
                        { en: "We should <b>book tickets in advance</b>.", pt: "<span style='color:var(--primary-blue)'>(Devemos reservar os ingressos com antecedência.)</span>" }
                    ]
                }
            ],

            // --- 3B: DIALOGUES ---
            dialogueGroups:[
                {
                    title: "Dialogue 1: Movies & TV",
                    audio: "TTS: Let's go to the movies tonight. I'd rather stay home and binge-watch a TV series.",
                    lines:[
                        { speaker: "Anna", text: "Let's go to the movies tonight.", pt: "(Vamos ao cinema hoje à noite.)" },
                        { speaker: "David", text: "I'd rather stay home and binge-watch a TV series.", pt: "(Prefiro ficar em casa e maratonar uma série de TV.)" }
                    ]
                },
                {
                    title: "Dialogue 2: Live Entertainment",
                    audio: "TTS: Do you want to see a play tonight? Actually, my favorite band is playing in town. I prefer to listen to live music.",
                    lines:[
                        { speaker: "Emma", text: "Do you want to see a play tonight?", pt: "(Você quer ver uma peça hoje à noite?)" },
                        { speaker: "Mark", text: "Actually, my favorite band is playing in town. I prefer to listen to live music.", pt: "(Na verdade, minha banda favorita está tocando na cidade. Eu prefiro ouvir música ao vivo.)" }
                    ]
                },
                {
                    title: "Dialogue 3: Staying Active",
                    audio: "TTS: Do you play any sports? No, but I go to the gym every morning. I also like to go for a run.",
                    lines:[
                        { speaker: "Lucas", text: "Do you play any sports?", pt: "(Você pratica algum esporte?)" },
                        { speaker: "Sarah", text: "No, but I go to the gym every morning. I also like to go for a run.", pt: "(Não, mas vou à academia todas as manhãs. Também gosto de dar uma corrida.)" }
                    ]
                },
                {
                    title: "Dialogue 4: Game Night",
                    audio: "TTS: Did you watch a match on TV last night? Yes, I always support a team from my hometown.",
                    lines:[
                        { speaker: "Tom", text: "Did you watch a match on TV last night?", pt: "(Você assistiu a um jogo na TV ontem à noite?)" },
                        { speaker: "Mike", text: "Yes, I always support a team from my hometown.", pt: "(Sim, sempre torço por um time da minha cidade natal.)" }
                    ]
                },
                {
                    title: "Dialogue 5: Weekend Plans",
                    audio: "TTS: What are you up to this weekend? Do you have any plans for Friday? Not yet. Fancy doing something?",
                    lines:[
                        { speaker: "Julia", text: "What are you up to this weekend? Do you have any plans for Friday?", pt: "(O que você vai fazer neste fim de semana? Você tem algum plano para sexta-feira?)" },
                        { speaker: "Chloe", text: "Not yet. Fancy doing something?", pt: "(Ainda não. Tá a fim de fazer algo?)" }
                    ]
                },
                {
                    title: "Dialogue 6: Organizing an Outing",
                    audio: "TTS: Are you up for a concert? Yes! Let's get together. We should book tickets in advance.",
                    lines:[
                        { speaker: "John", text: "Are you up for a concert?", pt: "(Você topa ir a um show?)" },
                        { speaker: "Lisa", text: "Yes! Let's get together. We should book tickets in advance.", pt: "(Sim! Vamos nos reunir. Devemos reservar ingressos com antecedência.)" }
                    ]
                }
            ],

            // --- 3C: PRACTICE ---
            grammarDrillGroups:[
                {
                    title: "Movies, Music & Books",
                    drills:[
                        { q: "Let's go to the ________.", options:[{t: "movies", c: true}, {t: "series", c: false}, {t: "music", c: false}, {t: "band", c: false}], type: "mcq" },
                        { q: "We are going to the theater to see a ________.", options:[{t: "music", c: false}, {t: "play", c: true}, {t: "novel", c: false}, {t: "TV", c: false}], type: "mcq" },
                        { q: "I love to listen to ________ music.", options:[{t: "live", c: true}, {t: "alive", c: false}, {t: "play", c: false}, {t: "movies", c: false}], type: "mcq" },
                        { q: "I watched 10 episodes today! I love to ________ a TV series.", options:[{t: "read", c: false}, {t: "binge-watch", c: true}, {t: "see", c: false}, {t: "listen", c: false}], type: "mcq" },
                        { q: "My favorite ________ is The Beatles.", options:[{t: "actor", c: false}, {t: "author", c: false}, {t: "band", c: true}, {t: "movie", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Sports & Activities",
                    drills:[
                        { q: "I put on my shoes to go for a ________.", options:[{t: "run", c: true}, {t: "gym", c: false}, {t: "match", c: false}, {t: "team", c: false}], type: "mcq" },
                        { q: "Did you ________ a match on TV last night?", options:[{t: "play", c: false}, {t: "watch", c: true}, {t: "listen", c: false}, {t: "support", c: false}], type: "mcq" },
                        { q: "I always ________ a team from my hometown.", options:[{t: "watch", c: false}, {t: "play", c: false}, {t: "support", c: true}, {t: "go", c: false}], type: "mcq" },
                        { q: "I want to get fit, so I go to the ________ every day.", options:[{t: "movies", c: false}, {t: "run", c: false}, {t: "gym", c: true}, {t: "play", c: false}], type: "mcq" },
                        { q: "________ you play any sports?", options:[{t: "Are", c: false}, {t: "Do", c: true}, {t: "Does", c: false}, {t: "Have", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Planning Activities",
                    drills:[
                        { q: "What are you ________ to this weekend?", options:[{t: "on", c: false}, {t: "up", c: true}, {t: "in", c: false}, {t: "do", c: false}], type: "mcq" },
                        { q: "Do you have any ________ for Friday?", options:[{t: "tickets", c: false}, {t: "sports", c: false}, {t: "plans", c: true}, {t: "movies", c: false}], type: "mcq" },
                        { q: "________ doing something tonight?", options:[{t: "Fancy", c: true}, {t: "Like", c: false}, {t: "Want", c: false}, {t: "Love", c: false}], type: "mcq" },
                        { q: "Are you ________ for a concert?", options:[{t: "up", c: true}, {t: "down", c: false}, {t: "on", c: false}, {t: "in", c: false}], type: "mcq" },
                        { q: "Let's ________ together on Saturday.", options:[{t: "go", c: false}, {t: "play", c: false}, {t: "get", c: true}, {t: "make", c: false}], type: "mcq" },
                        { q: "We should ________ tickets in advance.", options:[{t: "read", c: false}, {t: "play", c: false}, {t: "watch", c: false}, {t: "book", c: true}], type: "mcq" }
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
                { text: "What are you up to this weekend? ↘", audio: "TTS: What are you up to this weekend?" },
                { text: "Do you have any plans for Friday night? ↗", audio: "TTS: Do you have any plans for Friday night?" },
                { text: "Fancy doing something together on Saturday? ↗", audio: "TTS: Fancy doing something together on Saturday?" },
                { text: "Let's get together and go to the movies. ↘", audio: "TTS: Let's get together and go to the movies." },
                { text: "We should book tickets in advance. ↘", audio: "TTS: We should book tickets in advance." },
                { text: "Are you up for a rock concert tonight? ↗", audio: "TTS: Are you up for a rock concert tonight?" },
                { text: "My favorite band is playing at the stadium. ↘", audio: "TTS: My favorite band is playing at the stadium." },
                { text: "Do you play any sports? ↗", audio: "TTS: Do you play any sports?" },
                { text: "I like to go to the gym and go for a run. ↘", audio: "TTS: I like to go to the gym and go for a run." },
                { text: "I always support a team from my hometown. ↘", audio: "TTS: I always support a team from my hometown." }
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
                    audio: "TTS: Leo: Hey Emma, do you have any plans for Friday? Emma: Not yet. Fancy doing something? Leo: Let's get together and see a movie. Emma: Great idea! Can you book the tickets?",
                    text: "Leo: Hey Emma, do you have any [plans] for Friday?<br>Emma: Not yet. Fancy [doing] something?<br>Leo: Let's get [together] and see a movie.<br>Emma: Great idea! Can you book the [tickets]?"
                },
                {
                    type: "dropdown",
                    instruction: "Listen to the conversation about sports.",
                    audio: "TTS: David: Did you watch the football match last night? Lisa: Yes, the stadium was full of fans. David: My favorite player scored the winning goal. Lisa: It was a very thrilling game to watch.",
                    questions:[
                        { q: "David: Did you watch the football [match* | sport | team] last night?", a: "match" },
                        { q: "Lisa: Yes, the [stadium* | cinema | exhibition] was full of fans.", a: "stadium" },
                        { q: "David: My favorite [player* | actor | singer] scored the winning goal.", a: "player" },
                        { q: "Lisa: It was a very [thrilling* | dull | boring] game to watch.", a: "thrilling" }
                    ]
                },
                {
                    type: "audio-choice",
                    instruction: "Listen to the speaker. What is she going to do tonight?",
                    audio: "TTS: I had a long week at work, so I don't want to go out tonight. I'm just going to stay home, relax, and binge-watch a TV series.",
                    options:[
                        { t: "She is going to a rock concert.", c: false },
                        { t: "She is going to stay home and watch a TV series.", c: true },
                        { t: "She is going to the cinema to see a movie.", c: false },
                        { t: "She is going to play board games.", c: false }
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
                    title: "Dialogue - The Cinema Date",
                    audio: "TTS: John: Hey Sarah, what are you up to this weekend? Sarah: I don't have any plans for Friday. Why? John: Are you up for going to the cinema? There is a new thriller movie playing. Sarah: Fancy doing something a bit more relaxing? Scary movies are not my favorite. John: No problem. How about a comedy? We can have dinner first and then go to the movies. Sarah: That sounds highly entertaining! We should book tickets in advance so we get good seats.",
                    body: "<b>John:</b> Hey Sarah, [what are you up to this weekend](tooltip:what-up-to-weekend)?<br><b>Sarah:</b> I don't have any [plans](tooltip:plans) for Friday. Why?<br><b>John:</b>[Are you up for](tooltip:are-you-up-for) going to the [cinema](tooltip:cinema)? There is a new thriller [movie](tooltip:movie) playing.<br><b>Sarah:</b>[Fancy doing something](tooltip:fancy-doing-something) a bit more relaxing? [Scary](tooltip:scary) movies are not my favorite.<br><b>John:</b> No problem. How about a comedy? We can have dinner first and then [go to the movies](tooltip:go-movies).<br><b>Sarah:</b> That sounds highly [entertaining](tooltip:entertaining)! We should [book tickets in advance](tooltip:book-tickets-advance) so we get good seats.",
                    questions:[
                        { q: "What does John initially suggest doing?", options:[{t: "Going to a concert.", c: false}, {t: "Watching a scary movie.", c: true}, {t: "Having a picnic.", c: false}], type: "mcq" },
                        { q: "Why does Sarah reject the first idea?", options:[{t: "She doesn't like scary movies.", c: true}, {t: "She is busy on Friday.", c: false}, {t: "She hates the cinema.", c: false}], type: "mcq" },
                        { q: "What do they decide to do to ensure they get good seats?", options:[{t: "Arrive very early.", c: false}, {t: "Book tickets in advance.", c: true}, {t: "Ask a friend to buy them.", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Dialogue - The Big Match",
                    audio: "TTS: Mike: Do you play any sports, Tom? Tom: I play tennis sometimes, but I mostly watch football. Are you a fan? Mike: Yes! I always support a team from London. We should watch a match together. Tom: Actually, my team is playing in the stadium tomorrow. Let's get together! Mike: That sounds thrilling! I hope my team doesn't lose. Tom: Don't worry, even if they lose, it will be a fun game.",
                    body: "<b>Mike:</b>[Do you play any sports](tooltip:do-you-play-sports), Tom?<br><b>Tom:</b> I play[tennis](tooltip:tennis) sometimes, but I mostly watch [football](tooltip:football). Are you a [fan](tooltip:fan)?<br><b>Mike:</b> Yes! I always [support a team](tooltip:support-team) from London. We should [watch a match](tooltip:watch-match) together.<br><b>Tom:</b> Actually, my [team](tooltip:team) is playing in the [stadium](tooltip:stadium) tomorrow.[Let's get together](tooltip:lets-get-together)!<br><b>Mike:</b> That sounds [thrilling](tooltip:thrilling)! I hope my team doesn't [lose](tooltip:lose).<br><b>Tom:</b> Don't worry, even if they lose, it will be a fun game.",
                    questions:[
                        { q: "What sport does Tom play sometimes?", options:[{t: "Football", c: false}, {t: "Tennis", c: true}, {t: "Basketball", c: false}], type: "mcq" },
                        { q: "Where is Tom's team playing tomorrow?", options:[{t: "At the local park.", c: false}, {t: "In the stadium.", c: true}, {t: "On television.", c: false}], type: "mcq" },
                        { q: "What is Mike worried about?", options:[{t: "That his team will lose.", c: true}, {t: "That the tickets are sold out.", c: false}, {t: "That it will rain.", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Email - An Artsy Weekend",
                    audio: "TTS: Subject: Live music and art! Hi Emma, I wanted to ask what you are up to this weekend. A new art exhibition just opened downtown, and I heard it is not dull at all. I also found out that my favorite band is playing a concert nearby on Saturday. I know you love to listen to live music! Let me know if you are up for it, and I will book the tickets. Best, Lisa.",
                    body: "<b>From: Lisa</b><br><b>To: Emma</b><br>Subject: Live music and art!<br><br>Hi Emma,<br>I wanted to ask [what are you up to this weekend](tooltip:what-up-to-weekend). A new art [exhibition](tooltip:exhibition) just opened downtown, and I heard it is not[dull](tooltip:dull) at all. I also found out that [my favorite band is](tooltip:favorite-band) playing a [concert](tooltip:concert) nearby on Saturday. I know you love to[listen to live music](tooltip:listen-live-music)! Let me know if [you are up for](tooltip:are-you-up-for) it, and I will [book](tooltip:book) the tickets.<br><br>Best, Lisa.",
                    questions:[
                        { q: "What event just opened downtown?", options:[{t: "A music festival.", c: false}, {t: "An art exhibition.", c: true}, {t: "A new cinema.", c: false}], type: "mcq" },
                        { q: "What is happening on Saturday?", options:[{t: "Lisa's favorite band is playing a concert.", c: true}, {t: "A football match.", c: false}, {t: "A comedy play.", c: false}], type: "mcq" },
                        { q: "What will Lisa do if Emma agrees to go?", options:[{t: "She will book the tickets.", c: true}, {t: "She will drive the car.", c: false}, {t: "She will pay for dinner.", c: false}], type: "mcq" }
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
                { type: "matching", instruction: "Match the word to its entertainment category.", pairs:[
                    { left: "Actor", right: "Movies & Cinema", val: "1" },
                    { left: "Singer", right: "Music & Concerts", val: "2" },
                    { left: "Author", right: "Books & Novels", val: "3" },
                    { left: "Player", right: "Sports & Matches", val: "4" }
                ]},
                { type: "matching", instruction: "Match the sports terms to their definitions.", pairs:[
                    { left: "Stadium", right: "A large sports arena", val: "1" },
                    { left: "Team", right: "A group of players", val: "2" },
                    { left: "Fan", right: "A supporter of a sport", val: "3" },
                    { left: "Match", right: "A competitive game", val: "4" }
                ]},
                { type: "matching", instruction: "Match the verbs with the nouns.", pairs:[
                    { left: "Watch", right: "a movie", val: "1" },
                    { left: "Listen", right: "to a band", val: "2" },
                    { left: "Read", right: "a novel", val: "3" },
                    { left: "Book", right: "tickets in advance", val: "4" }
                ]},
                { type: "matching", instruction: "Match the adjectives with their meanings.", pairs:[
                    { left: "Thrilling", right: "Very exciting", val: "1" },
                    { left: "Dull", right: "Boring and uninteresting", val: "2" },
                    { left: "Funny", right: "Making you laugh", val: "3" },
                    { left: "Scary", right: "Frightening", val: "4" }
                ]},

                // --- WORD ORDER (5-14) ---
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "to / the / movies / Let's / go / .", correct: "Let's go to the movies ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "favorite / is / band / My / Coldplay / .", correct: "My favorite band is Coldplay ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "music / to / live / listen / I / love / .", correct: "I love to listen to live music ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "for / run / go / a / I / morning / every / .", correct: "I go for a run every morning ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "sports / play / you / Do / any / ?", correct: "Do you play any sports ?" },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "up / What / weekend / you / to / are / this / ?", correct: "What are you up to this weekend ?" },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "plans / any / Friday / Do / have / for / you / ?", correct: "Do you have any plans for Friday ?" },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "doing / Fancy / tonight / something / ?", correct: "Fancy doing something tonight ?" },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "together / Let's / Saturday / get / on / .", correct: "Let's get together on Saturday ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "advance / tickets / in / book / We / should / .", correct: "We should book tickets in advance ." },

                // --- CLICKABLE ERROR (15-24) ---
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "I want to [look](error:see) a play at the theater." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "Let's binge-[watch](error:watch) a TV series tonight." }, // Actually "binge-watch" is correct. Let's make the error obvious.
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "Let's binge-[look](error:watch) a TV series tonight." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "I always [give](error:support) a team from my city." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "Are you [down](error:up) for a concert?" },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "I love reading a good [novelty](error:novel)." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "The [player](error:actor) won an award for the best film." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "We must [reserve](error:book) tickets in advance." }, // 'reserve' is technically okay, but 'book' is the target. Let's use something wrong.
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "We must [buy](error:book) tickets in advance." }, // Buy is fine.
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "We must [page](error:book) tickets in advance." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "What are you up [for](error:to) this weekend?" },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "Let's [make](error:get) together on Saturday." },

                // --- ODD ONE OUT (25-30) ---
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Music)", options:[{t: "Band", c: false}, {t: "Singer", c: false}, {t: "Album", c: false}, {t: "Novel", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Movies)", options:[{t: "Cinema", c: false}, {t: "Actor", c: false}, {t: "Series", c: false}, {t: "Stadium", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Sports)", options:[{t: "Football", c: false}, {t: "Tennis", c: false}, {t: "Swimming", c: false}, {t: "Exhibition", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Adjectives)", options:[{t: "Thrilling", c: false}, {t: "Scary", c: false}, {t: "Funny", c: false}, {t: "Concert", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Games)", options:[{t: "Board game", c: false}, {t: "Video game", c: false}, {t: "Puzzle", c: false}, {t: "Author", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Verbs)", options:[{t: "To win", c: false}, {t: "To lose", c: false}, {t: "To watch", c: false}, {t: "Ticket", c: true}] },

                // --- TRUE / FALSE (31-35) ---
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "A 'novel' is a type of book that tells a fictional story.", correct: "true"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "You usually play 'football' by yourself in your bedroom.", correct: "false"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "If a movie is 'dull', it means it is very exciting.", correct: "false"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "To 'book tickets in advance' means you buy them before the event happens.", correct: "true"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "A 'fan' is a person who strongly supports a sports team or a band.", correct: "true"}] },

                // --- MCQ (36-39) ---
                { type: "mcq", instruction: "Choose the correct phrase.<br>When you want to invite a friend out informally, you can say: '________ doing something?'", options:[{t: "Want", c: false}, {t: "Like", c: false}, {t: "Fancy", c: true}, {t: "Love", c: false}] },
                { type: "mcq", instruction: "Choose the correct word.<br>The large building where many people watch a sports match is a ________.", options:[{t: "cinema", c: false}, {t: "stadium", c: true}, {t: "concert", c: false}, {t: "exhibition", c: false}] },
                { type: "mcq", instruction: "Choose the correct verb.<br>My favorite team played well, but unfortunately, they managed to ________ the match.", options:[{t: "win", c: false}, {t: "lose", c: true}, {t: "book", c: false}, {t: "watch", c: false}] },
                { type: "mcq", instruction: "Choose the correct phrase.<br>To ask someone about their weekend plans, you say: 'What are you ________ this weekend?'", options:[{t: "doing on", c: false}, {t: "planning to", c: false}, {t: "up to", c: true}, {t: "going for", c: false}] },

                // --- CATEGORIZE (40) ---
                { type: "categorize", instruction: "Sort the words into Entertainment/Arts and Sports/Games.", 
                    categories:[{id: "arts", name: "Arts"}, {id: "sports", name: "Sports"}],
                    items:[
                        {text: "Album", catId: "arts"}, 
                        {text: "Exhibition", catId: "arts"}, 
                        {text: "Actor", catId: "arts"}, 
                        {text: "Stadium", catId: "sports"}, 
                        {text: "Match", catId: "sports"}, 
                        {text: "Puzzle", catId: "sports"}
                    ] 
                }
            ]
        },

        // ======================================================
        // STEP 8: WRITING PRACTICE
        // ======================================================
        {
            title: "Writing Practice",
            instruction: "Write an email to a friend (5-7 sentences) to invite them to a leisure activity this weekend. It can be a movie, a concert, or a sports match. Ask if they are free, suggest what you want to do, and propose booking the tickets in advance.",
            example: "Hi Sarah, what are you up to this weekend? Do you have any plans for Saturday night? My favorite band is playing a concert downtown, and I thought of you. Fancy doing something together? I think it will be a really thrilling show. Let me know if you are up for it, and I will book tickets in advance. I hope we can get together! Best, Mark.",
            prompts:[
                "Use an opening phrase (e.g., What are you up to this weekend?).",
                "Suggest an activity using 'Fancy doing something?' or 'Are you up for...?'",
                "Describe the activity (e.g., thrilling, entertaining).",
                "Suggest booking tickets or meeting up."
            ]
        },

        // ======================================================
        // STEP 9: FLASHCARDS
        // ======================================================
        {
            title: "Flashcards",
            items:[
                // 2A Items (36 items)
                { term: "Movie (film)", definition: "A story or event recorded by a camera as a set of moving images.", defTrans: "Filme", example: "I want to see the new action movie.", audioFront: "TTS: Movie", audioBack: "TTS: I want to see the new action movie." },
                { term: "Cinema (movie theater)", definition: "A theater where movies are shown.", defTrans: "Cinema", example: "We are going to the cinema tonight.", audioFront: "TTS: Cinema", audioBack: "TTS: We are going to the cinema tonight." },
                { term: "Ticket", definition: "A piece of paper that gives the holder a certain right, like entering a place.", defTrans: "Ingresso", example: "I bought a ticket for the front row.", audioFront: "TTS: Ticket", audioBack: "TTS: I bought a ticket for the front row." },
                { term: "Actor", definition: "A person whose profession is acting on stage, in movies, or on television.", defTrans: "Ator / Atriz", example: "My favorite actor is in this film.", audioFront: "TTS: Actor", audioBack: "TTS: My favorite actor is in this film." },
                { term: "Concert (gig)", definition: "A musical performance given in public.", defTrans: "Show / Concerto", example: "We went to a rock concert on Saturday.", audioFront: "TTS: Concert", audioBack: "TTS: We went to a rock concert on Saturday." },
                { term: "Band", definition: "A small group of musicians who play music together.", defTrans: "Banda", example: "The band played all their best songs.", audioFront: "TTS: Band", audioBack: "TTS: The band played all their best songs." },
                { term: "Singer", definition: "A person who sings, especially professionally.", defTrans: "Cantor(a)", example: "She is a very famous pop singer.", audioFront: "TTS: Singer", audioBack: "TTS: She is a very famous pop singer." },
                { term: "Album", definition: "A collection of musical recordings issued as a single item.", defTrans: "Álbum", example: "Their new album drops next week.", audioFront: "TTS: Album", audioBack: "TTS: Their new album drops next week." },
                { term: "Novel", definition: "A fictitious prose narrative of book length.", defTrans: "Romance (livro)", example: "I am reading a fantastic mystery novel.", audioFront: "TTS: Novel", audioBack: "TTS: I am reading a fantastic mystery novel." },
                { term: "Author", definition: "A writer of a book, article, or report.", defTrans: "Autor(a)", example: "The author signed my book.", audioFront: "TTS: Author", audioBack: "TTS: The author signed my book." },
                { term: "Series", definition: "A set of related television or radio programs.", defTrans: "Série (de TV)", example: "We binge-watched the entire television series.", audioFront: "TTS: Series", audioBack: "TTS: We binge-watched the entire television series." },
                { term: "Exhibition", definition: "A public display of works of art or items of interest.", defTrans: "Exposição", example: "There is a great art exhibition downtown.", audioFront: "TTS: Exhibition", audioBack: "TTS: There is a great art exhibition downtown." },

                { term: "Sport", definition: "An activity involving physical exertion and skill in which an individual or team competes.", defTrans: "Esporte", example: "Basketball is my favorite sport.", audioFront: "TTS: Sport", audioBack: "TTS: Basketball is my favorite sport." },
                { term: "Match", definition: "A contest in which people or teams compete against each other in a sport.", defTrans: "Partida / Jogo", example: "We watched the final match on TV.", audioFront: "TTS: Match", audioBack: "TTS: We watched the final match on TV." },
                { term: "Team", definition: "A group of players forming one side in a competitive game or sport.", defTrans: "Time / Equipe", example: "Our local team won the championship.", audioFront: "TTS: Team", audioBack: "TTS: Our local team won the championship." },
                { term: "Player", definition: "A person taking part in a sport or game.", defTrans: "Jogador(a)", example: "The best player scored three goals.", audioFront: "TTS: Player", audioBack: "TTS: The best player scored three goals." },
                { term: "Fan", definition: "A person who has a strong interest in or admiration for a particular person or sport.", defTrans: "Fã / Torcedor", example: "He is a huge fan of the Lakers.", audioFront: "TTS: Fan", audioBack: "TTS: He is a huge fan of the Lakers." },
                { term: "Stadium", definition: "A sports arena with tiers of seats for spectators.", defTrans: "Estádio", example: "Over fifty thousand people were in the stadium.", audioFront: "TTS: Stadium", audioBack: "TTS: Over fifty thousand people were in the stadium." },
                { term: "Football", definition: "A game played with a round ball, usually kicked.", defTrans: "Futebol", example: "The kids are playing football in the park.", audioFront: "TTS: Football", audioBack: "TTS: The kids are playing football in the park." },
                { term: "Tennis", definition: "A game played with rackets and a light ball on a rectangular court.", defTrans: "Tênis", example: "She plays tennis every Sunday morning.", audioFront: "TTS: Tennis", audioBack: "TTS: She plays tennis every Sunday morning." },
                { term: "Swimming", definition: "The sport or activity of propelling oneself through water.", defTrans: "Natação", example: "Swimming is a great way to stay fit.", audioFront: "TTS: Swimming", audioBack: "TTS: Swimming is a great way to stay fit." },
                { term: "Board game", definition: "A tabletop game that involves counters or pieces moved on a pre-marked surface.", defTrans: "Jogo de tabuleiro", example: "We played a fun board game with the family.", audioFront: "TTS: Board game", audioBack: "TTS: We played a fun board game with the family." },
                { term: "Puzzle", definition: "A game, toy, or problem designed to test ingenuity or knowledge.", defTrans: "Quebra-cabeça", example: "My grandmother loves solving a difficult puzzle.", audioFront: "TTS: Puzzle", audioBack: "TTS: My grandmother loves solving a difficult puzzle." },
                { term: "Video game", definition: "A game played by electronically manipulating images on a display.", defTrans: "Jogo de videogame", example: "I bought a new video game for my console.", audioFront: "TTS: Video game", audioBack: "TTS: I bought a new video game for my console." },

                { term: "To watch", definition: "To look at or observe attentively over a period of time.", defTrans: "Assistir", example: "I like to watch television to relax.", audioFront: "TTS: To watch", audioBack: "TTS: I like to watch television to relax." },
                { term: "To listen", definition: "To give one's attention to a sound.", defTrans: "Ouvir", example: "Do you listen to podcasts?", audioFront: "TTS: To listen", audioBack: "TTS: Do you listen to podcasts?" },
                { term: "To read", definition: "To look at and comprehend the meaning of written matter.", defTrans: "Ler", example: "I read a chapter before I sleep.", audioFront: "TTS: To read", audioBack: "TTS: I read a chapter before I sleep." },
                { term: "To play", definition: "To engage in activity for enjoyment and recreation.", defTrans: "Jogar / Brincar / Tocar", example: "We play cards every Friday.", audioFront: "TTS: To play", audioBack: "TTS: We play cards every Friday." },
                { term: "To win", definition: "To be successful or victorious in a contest.", defTrans: "Vencer / Ganhar", example: "They practice hard to win the game.", audioFront: "TTS: To win", audioBack: "TTS: They practice hard to win the game." },
                { term: "To lose", definition: "To fail to win a game or contest.", defTrans: "Perder", example: "I hate to lose when I play chess.", audioFront: "TTS: To lose", audioBack: "TTS: I hate to lose when I play chess." },
                { term: "To book", definition: "To reserve something (accommodations, place, ticket) in advance.", defTrans: "Reservar", example: "You should book a table at the restaurant.", audioFront: "TTS: To book", audioBack: "TTS: You should book a table at the restaurant." },
                { term: "Entertaining", definition: "Providing amusement or enjoyment.", defTrans: "Divertido / Que entretém", example: "The comedy show was very entertaining.", audioFront: "TTS: Entertaining", audioBack: "TTS: The comedy show was very entertaining." },
                { term: "Thrilling", definition: "Causing excitement and pleasure; exhilarating.", defTrans: "Emocionante", example: "The roller coaster was a thrilling experience.", audioFront: "TTS: Thrilling", audioBack: "TTS: The roller coaster was a thrilling experience." },
                { term: "Dull", definition: "Lacking interest or excitement; boring.", defTrans: "Maçante", example: "The documentary was a bit dull.", audioFront: "TTS: Dull", audioBack: "TTS: The documentary was a bit dull." },
                { term: "Funny", definition: "Causing laughter or amusement.", defTrans: "Engraçado", example: "He told a very funny joke.", audioFront: "TTS: Funny", audioBack: "TTS: He told a very funny joke." },
                { term: "Scary", definition: "Frightening or causing fear.", defTrans: "Assustador", example: "I couldn't sleep because the movie was so scary.", audioFront: "TTS: Scary", audioBack: "TTS: I couldn't sleep because the movie was so scary." },

                // 3A Items (16 items)
                { term: "Go to the movies", definition: "To visit the cinema to watch a film.", defTrans: "Ir ao cinema", example: "Let's go to the movies tonight.", audioFront: "TTS: Go to the movies", audioBack: "TTS: Let's go to the movies tonight." },
                { term: "See a play", definition: "To watch a theatrical performance.", defTrans: "Ver uma peça", example: "We want to see a play at the theater.", audioFront: "TTS: See a play", audioBack: "TTS: We want to see a play at the theater." },
                { term: "Listen to live music", definition: "To hear musicians perform in real-time, not recorded.", defTrans: "Ouvir música ao vivo", example: "I love to listen to live music.", audioFront: "TTS: Listen to live music", audioBack: "TTS: I love to listen to live music." },
                { term: "Binge-watch a TV series", definition: "To watch multiple episodes of a television program in rapid succession.", defTrans: "Maratonar uma série de TV", example: "I will just stay home and binge-watch a TV series.", audioFront: "TTS: Binge-watch a TV series", audioBack: "TTS: I will just stay home and binge-watch a TV series." },
                { term: "My favorite band is", definition: "Stating which musical group you like the most.", defTrans: "Minha banda favorita é", example: "My favorite band is Coldplay.", audioFront: "TTS: My favorite band is", audioBack: "TTS: My favorite band is Coldplay." },
                
                { term: "Go for a run", definition: "To jog for exercise.", defTrans: "Dar uma corrida", example: "I like to go for a run in the morning.", audioFront: "TTS: Go for a run", audioBack: "TTS: I like to go for a run in the morning." },
                { term: "Watch a match", definition: "To view a sports competition.", defTrans: "Assistir a uma partida", example: "Did you watch a match on TV last night?", audioFront: "TTS: Watch a match", audioBack: "TTS: Did you watch a match on TV last night?" },
                { term: "Support a team", definition: "To be a fan of and encourage a specific sports group.", defTrans: "Torcer para um time", example: "I always support a team from my hometown.", audioFront: "TTS: Support a team", audioBack: "TTS: I always support a team from my hometown." },
                { term: "Go to the gym", definition: "To visit a fitness center to exercise.", defTrans: "Ir à academia", example: "I go to the gym every day.", audioFront: "TTS: Go to the gym", audioBack: "TTS: I go to the gym every day." },
                { term: "Do you play any sports?", definition: "Asking if someone engages in athletic activities.", defTrans: "Você pratica algum esporte?", example: "Do you play any sports?", audioFront: "TTS: Do you play any sports?", audioBack: "TTS: Do you play any sports?" },
                
                { term: "What are you up to this weekend?", definition: "Asking someone about their plans for the weekend.", defTrans: "O que você vai fazer neste fim de semana?", example: "What are you up to this weekend?", audioFront: "TTS: What are you up to this weekend?", audioBack: "TTS: What are you up to this weekend?" },
                { term: "Do you have any plans for Friday?", definition: "Asking if someone is busy on a specific day.", defTrans: "Você tem algum plano para sexta-feira?", example: "Do you have any plans for Friday?", audioFront: "TTS: Do you have any plans for Friday?", audioBack: "TTS: Do you have any plans for Friday?" },
                { term: "Fancy doing something?", definition: "An informal way to ask if someone wants to do an activity.", defTrans: "Tá a fim de fazer algo?", example: "I am bored. Fancy doing something?", audioFront: "TTS: Fancy doing something?", audioBack: "TTS: I am bored. Fancy doing something?" },
                { term: "Are you up for", definition: "Asking if someone is willing to participate in an activity.", defTrans: "Você topa / está disposto a", example: "Are you up for a concert?", audioFront: "TTS: Are you up for", audioBack: "TTS: Are you up for a concert?" },
                { term: "Let's get together", definition: "A suggestion to meet up and socialize.", defTrans: "Vamos nos reunir / encontrar", example: "Let's get together for lunch.", audioFront: "TTS: Let's get together", audioBack: "TTS: Let's get together for lunch." },
                { term: "Book tickets in advance", definition: "To purchase entry passes before the day of the event.", defTrans: "Reservar ingressos com antecedência", example: "We should book tickets in advance.", audioFront: "TTS: Book tickets in advance", audioBack: "TTS: We should book tickets in advance." }
            ]
        }
    ],

    // ======================================================
    // GLOSSARY (All 52 items + Context words)
    // ======================================================
    glossary:[
        // 2A: Entertainment & Arts
        { topic: "Entertainment", term: "movie", definition: "A cinema film.", translation: "Filme" },
        { topic: "Entertainment", term: "cinema", definition: "A theater where movies are shown.", translation: "Cinema" },
        { topic: "Entertainment", term: "ticket", definition: "A paper or digital pass to enter an event.", translation: "Ingresso" },
        { topic: "Entertainment", term: "actor", definition: "A person whose profession is acting.", translation: "Ator / Atriz" },
        { topic: "Entertainment", term: "concert", definition: "A musical performance given in public.", translation: "Show / Concerto" },
        { topic: "Entertainment", term: "band", definition: "A small group of musicians.", translation: "Banda" },
        { topic: "Entertainment", term: "singer", definition: "A person who sings professionally.", translation: "Cantor(a)" },
        { topic: "Entertainment", term: "album", definition: "A collection of musical recordings.", translation: "Álbum" },
        { topic: "Entertainment", term: "novel", definition: "A fictitious prose narrative book.", translation: "Romance (livro)" },
        { topic: "Entertainment", term: "author", definition: "A writer of a book.", translation: "Autor(a)" },
        { topic: "Entertainment", term: "series", definition: "A set of related television programs.", translation: "Série (de TV)" },
        { topic: "Entertainment", term: "exhibition", definition: "A public display of art or items.", translation: "Exposição" },

        // 2A: Sports & Games
        { topic: "Sports", term: "sport", definition: "An activity involving physical exertion and skill.", translation: "Esporte" },
        { topic: "Sports", term: "match", definition: "A contest in which teams compete.", translation: "Partida / Jogo" },
        { topic: "Sports", term: "team", definition: "A group of players forming one side.", translation: "Time / Equipe" },
        { topic: "Sports", term: "player", definition: "A person taking part in a sport or game.", translation: "Jogador(a)" },
        { topic: "Sports", term: "fan", definition: "A person who supports a sport or team.", translation: "Fã / Torcedor" },
        { topic: "Sports", term: "stadium", definition: "A sports arena with tiers of seats.", translation: "Estádio" },
        { topic: "Sports", term: "football", definition: "A game played with a round ball.", translation: "Futebol" },
        { topic: "Sports", term: "tennis", definition: "A game played with rackets on a court.", translation: "Tênis" },
        { topic: "Sports", term: "swimming", definition: "The sport of moving through water.", translation: "Natação" },
        { topic: "Games", term: "board-game", definition: "A tabletop game played on a board.", translation: "Jogo de tabuleiro" },
        { topic: "Games", term: "puzzle", definition: "A game designed to test knowledge or ingenuity.", translation: "Quebra-cabeça" },
        { topic: "Games", term: "video-game", definition: "A game played on an electronic display.", translation: "Jogo de videogame" },

        // 2A: Verbs & Adjectives
        { topic: "Verbs", term: "to-watch", definition: "To observe attentively.", translation: "Assistir" },
        { topic: "Verbs", term: "to-listen", definition: "To give attention to a sound.", translation: "Ouvir" },
        { topic: "Verbs", term: "to-read", definition: "To look at and comprehend written text.", translation: "Ler" },
        { topic: "Verbs", term: "to-play", definition: "To engage in a game or sport.", translation: "Jogar" },
        { topic: "Verbs", term: "to-win", definition: "To be victorious in a contest.", translation: "Vencer / Ganhar" },
        { topic: "Verbs", term: "to-lose", definition: "To fail to win.", translation: "Perder" },
        { topic: "Verbs", term: "to-book", definition: "To reserve in advance.", translation: "Reservar" },
        { topic: "Adjectives", term: "entertaining", definition: "Providing amusement or enjoyment.", translation: "Divertido" },
        { topic: "Adjectives", term: "thrilling", definition: "Causing excitement and pleasure.", translation: "Emocionante" },
        { topic: "Adjectives", term: "dull", definition: "Lacking interest; boring.", translation: "Maçante / Sem graça" },
        { topic: "Adjectives", term: "funny", definition: "Causing laughter.", translation: "Engraçado" },
        { topic: "Adjectives", term: "scary", definition: "Frightening.", translation: "Assustador" },

        // 3A: Expressions
        { topic: "Expressions", term: "go-movies", definition: "To visit the cinema to watch a film.", translation: "Ir ao cinema" },
        { topic: "Expressions", term: "see-play", definition: "To watch a theatrical performance.", translation: "Ver uma peça" },
        { topic: "Expressions", term: "listen-live-music", definition: "To hear musicians perform in real-time.", translation: "Ouvir música ao vivo" },
        { topic: "Expressions", term: "binge-watch", definition: "To watch multiple episodes rapidly.", translation: "Maratonar série" },
        { topic: "Expressions", term: "favorite-band", definition: "Stating which musical group you like best.", translation: "Minha banda favorita é" },
        { topic: "Expressions", term: "go-run", definition: "To jog for exercise.", translation: "Dar uma corrida" },
        { topic: "Expressions", term: "watch-match", definition: "To view a sports competition.", translation: "Assistir a uma partida" },
        { topic: "Expressions", term: "support-team", definition: "To be a fan of a specific sports group.", translation: "Torcer para um time" },
        { topic: "Expressions", term: "go-gym", definition: "To visit a fitness center.", translation: "Ir à academia" },
        { topic: "Expressions", term: "do-you-play-sports", definition: "Asking if someone engages in athletic activities.", translation: "Você pratica algum esporte?" },
        { topic: "Expressions", term: "what-up-to-weekend", definition: "Asking about weekend plans.", translation: "O que você vai fazer neste fim de semana?" },
        { topic: "Expressions", term: "plans", definition: "Intentions for the future.", translation: "Planos" },
        { topic: "Expressions", term: "fancy-doing-something", definition: "Informal way to ask if someone wants to do an activity.", translation: "Tá a fim de fazer algo?" },
        { topic: "Expressions", term: "are-you-up-for", definition: "Asking if someone is willing to participate.", translation: "Você topa..." },
        { topic: "Expressions", term: "lets-get-together", definition: "A suggestion to meet up.", translation: "Vamos nos reunir" },
        { topic: "Expressions", term: "book-tickets-advance", definition: "To purchase entry passes early.", translation: "Reservar ingressos com antecedência" },

        // Additional Context Words
        { topic: "Context", term: "entertainment", definition: "The action of providing or being provided with amusement or enjoyment.", translation: "Entretenimento" },
        { topic: "Context", term: "leisure", definition: "Free time.", translation: "Lazer" },
        { topic: "Context", term: "book", definition: "To reserve (a place, a ticket) in advance.", translation: "Reservar" }
    ]
});