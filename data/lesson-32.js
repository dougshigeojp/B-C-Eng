/**
 * English Block Assembling - LESSON DATA: Topic 32
 * Topic: Art and Creativity
 * Level: Upper A2 ~ Lower B1
 */

window.initLesson({
    // --- METADATA ---
    lessonId: "lesson-32",
    block: "5",
    topicTitle: "Art and Creativity",

    steps:[
        // ======================================================
        // STEP 0: INTRO & CAN-DO
        // ======================================================
        {
            title: "Intro & Can-Do",
            objectives: "• Discuss different forms of [art](tooltip:art), from[painting](tooltip:painting) to [music](tooltip:music).<br>• Describe your own [creative](tooltip:creative) hobbies and how you [express](tooltip:express) yourself.<br>• Talk about visiting cultural venues like a [museum](tooltip:museum) or an [art gallery](tooltip:art-gallery).<br>• Share your personal preferences about [modern](tooltip:modern) and [classical](tooltip:classical) art styles.",
            welcome: "Welcome to Lesson 32! Art is a wonderful way to express our thoughts and feelings. In this lesson, you will learn the vocabulary to talk about visual and performing arts, from visiting a famous exhibition to playing a musical instrument. You will also learn how to discuss your own creative hobbies and describe pieces of art that inspire you. Let's get creative!",
            audio: {
                objectives: "TTS: In this lesson, you will learn to: Discuss different forms of art, from painting to music. Describe your own creative hobbies and how you express yourself. Talk about visiting cultural venues like a museum or an art gallery. Share your personal preferences about modern and classical art styles.",
                welcome: "TTS: Welcome to Lesson 32! Art is a wonderful way to express our thoughts and feelings. In this lesson, you will learn the vocabulary to talk about visual and performing arts, from visiting a famous exhibition to playing a musical instrument. You will also learn how to discuss your own creative hobbies and describe pieces of art that inspire you. Let's get creative!"
            }
        },

        // ======================================================
        // STEP 1: CONTEXT DIALOGUE
        // ======================================================
        {
            title: "Context Dialogue",
            context: "Emma and Mark are discussing their weekend plans and a new art event in town.",
            contextAudio: "TTS: Emma: There's a new photography exhibition at the City Art Gallery. Would you be interested in going this weekend? Mark: Oh, definitely! Who is the photographer? Emma: It's a collection by a famous landscape photographer. The pictures are supposed to be incredible. Mark: That sounds great. I'm not very artistic myself, but I really appreciate seeing other people's creative work. Emma: Me too. I find it very inspiring. It makes me want to take up a creative hobby again. Mark: What did you used to do? Emma: I used to paint a little bit. I really enjoy painting landscapes. Mark: You should start again! It is a great way to express yourself.",
            dialogue:[
                { speaker: "Emma", text: "There's a new [photography](tooltip:photograph) [exhibition](tooltip:exhibition) at the City[Art Gallery](tooltip:art-gallery). Would you be interested in going this weekend?" },
                { speaker: "Mark", text: "Oh, definitely! Who is the [photographer](tooltip:photographer)?" },
                { speaker: "Emma", text: "It's a collection by a famous landscape photographer. The pictures are supposed to be incredible." },
                { speaker: "Mark", text: "That sounds great. I'm not very [artistic](tooltip:artistic) myself, but I really [appreciate](tooltip:to-appreciate) seeing other people's [creative](tooltip:creative) work." },
                { speaker: "Emma", text: "Me too. I find it very inspiring. It makes me want to [take up a creative hobby](tooltip:take-up-hobby) again." },
                { speaker: "Mark", text: "What did you used to do?" },
                { speaker: "Emma", text: "I used to [paint](tooltip:to-paint) a little bit.[I enjoy painting](tooltip:enjoy-painting) landscapes." },
                { speaker: "Mark", text: "You should start again! It is a great way to [express yourself](tooltip:express-yourself)." }
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
                    title: "Art Forms & Works",
                    audio: "TTS: Art. Painting. Drawing. Sculpture. Photograph. Music. Dance. Theater. Literature. Masterpiece. Exhibition. Performance.",
                    items:[
                        { term: "Art", trans: "Arte" },
                        { term: "Painting", trans: "Pintura / Quadro" },
                        { term: "Drawing", trans: "Desenho" },
                        { term: "Sculpture", trans: "Escultura" },
                        { term: "Photograph", trans: "Fotografia (foto)" },
                        { term: "Music", trans: "Música" },
                        { term: "Dance", trans: "Dança" },
                        { term: "Theater", trans: "Teatro (a arte ou o local)" },
                        { term: "Literature", trans: "Literatura" },
                        { term: "Masterpiece", trans: "Obra-prima" },
                        { term: "Exhibition", trans: "Exposição" },
                        { term: "Performance", trans: "Apresentação / Performance" }
                    ]
                },
                {
                    title: "People, Places & Concepts",
                    audio: "TTS: Artist. Painter. Photographer. Musician. Writer. Museum. Art gallery. Concert hall. Studio. Creativity. Inspiration. Talent.",
                    items:[
                        { term: "Artist", trans: "Artista" },
                        { term: "Painter", trans: "Pintor(a)" },
                        { term: "Photographer", trans: "Fotógrafo(a)" },
                        { term: "Musician", trans: "Músico(a)" },
                        { term: "Writer", trans: "Escritor(a)" },
                        { term: "Museum", trans: "Museu" },
                        { term: "Art gallery", trans: "Galeria de arte" },
                        { term: "Concert hall", trans: "Casa de shows / Sala de concertos" },
                        { term: "Studio", trans: "Estúdio" },
                        { term: "Creativity", trans: "Criatividade" },
                        { term: "Inspiration", trans: "Inspiração" },
                        { term: "Talent", trans: "Talento" }
                    ]
                },
                {
                    title: "Verbs & Adjectives",
                    audio: "TTS: To create. To design. To paint. To perform. To express. To appreciate. Artistic. Talented. Impressive. Thought-provoking. Modern. Classical.",
                    items:[
                        { term: "To create", trans: "Criar" },
                        { term: "To design", trans: "Projetar / Desenhar" },
                        { term: "To paint", trans: "Pintar" },
                        { term: "To perform", trans: "Apresentar-se / Atuar" },
                        { term: "To express", trans: "Expressar" },
                        { term: "To appreciate", trans: "Apreciar / Valorizar" },
                        { term: "Artistic", trans: "Artístico(a)" },
                        { term: "Talented", trans: "Talentoso(a)" },
                        { term: "Impressive", trans: "Impressionante" },
                        { term: "Thought-provoking", trans: "Que faz pensar / Instigante" },
                        { term: "Modern", trans: "Moderno(a)" },
                        { term: "Classical", trans: "Clássico(a)" }
                    ]
                }
            ],

            // --- 2B: EXAMPLES ---
            exampleGroups:[
                {
                    title: "Art Forms & Works",
                    audio: "TTS: She studies art at the university. This painting uses very bright colors. He made a beautiful pencil drawing. There is a large stone sculpture in the park. I took a photograph of the sunset. Listening to music helps me relax. The ballet is a beautiful form of dance. We saw a great play at the theater last night. I enjoy reading classical literature. The Mona Lisa is considered a masterpiece. The new art exhibition opens on Friday. The live performance was absolutely amazing.",
                    items:[
                        { term: "Art", sent: "She studies art at the university.", trans: "Ela estuda arte na universidade." },
                        { term: "Painting", sent: "This painting uses very bright colors.", trans: "Esta pintura usa cores muito vivas." },
                        { term: "Drawing", sent: "He made a beautiful pencil drawing.", trans: "Ele fez um lindo desenho a lápis." },
                        { term: "Sculpture", sent: "There is a large stone sculpture in the park.", trans: "Há uma grande escultura de pedra no parque." },
                        { term: "Photograph", sent: "I took a photograph of the sunset.", trans: "Eu tirei uma fotografia do pôr do sol." },
                        { term: "Music", sent: "Listening to music helps me relax.", trans: "Ouvir música me ajuda a relaxar." },
                        { term: "Dance", sent: "The ballet is a beautiful form of dance.", trans: "O balé é uma bela forma de dança." },
                        { term: "Theater", sent: "We saw a great play at the theater last night.", trans: "Nós vimos uma ótima peça no teatro ontem à noite." },
                        { term: "Literature", sent: "I enjoy reading classical literature.", trans: "Eu gosto de ler literatura clássica." },
                        { term: "Masterpiece", sent: "The Mona Lisa is considered a masterpiece.", trans: "A Mona Lisa é considerada uma obra-prima." },
                        { term: "Exhibition", sent: "The new art exhibition opens on Friday.", trans: "A nova exposição de arte abre na sexta-feira." },
                        { term: "Performance", sent: "The live performance was absolutely amazing.", trans: "A apresentação ao vivo foi absolutamente incrível." }
                    ]
                },
                {
                    title: "People, Places & Concepts",
                    audio: "TTS: The artist sold his work for a lot of money. The painter mixed blue and yellow on the canvas. A famous photographer took my portrait. The musician played the violin perfectly. My favorite writer just published a new novel. We spent the afternoon at the history museum. I bought a small piece from the local art gallery. The orchestra played in a massive concert hall. The band recorded their new album in the studio. You need a lot of creativity to write a book. Traveling gives me inspiration for my stories. She has a natural talent for singing.",
                    items:[
                        { term: "Artist", sent: "The artist sold his work for a lot of money.", trans: "O artista vendeu sua obra por muito dinheiro." },
                        { term: "Painter", sent: "The painter mixed blue and yellow on the canvas.", trans: "O pintor misturou azul e amarelo na tela." },
                        { term: "Photographer", sent: "A famous photographer took my portrait.", trans: "Um fotógrafo famoso tirou meu retrato." },
                        { term: "Musician", sent: "The musician played the violin perfectly.", trans: "O músico tocou violino perfeitamente." },
                        { term: "Writer", sent: "My favorite writer just published a new novel.", trans: "Meu escritor favorito acabou de publicar um novo romance." },
                        { term: "Museum", sent: "We spent the afternoon at the history museum.", trans: "Passamos a tarde no museu de história." },
                        { term: "Art gallery", sent: "I bought a small piece from the local art gallery.", trans: "Comprei uma pequena peça na galeria de arte local." },
                        { term: "Concert hall", sent: "The orchestra played in a massive concert hall.", trans: "A orquestra tocou em uma enorme casa de shows." },
                        { term: "Studio", sent: "The band recorded their new album in the studio.", trans: "A banda gravou seu novo álbum no estúdio." },
                        { term: "Creativity", sent: "You need a lot of creativity to write a book.", trans: "Você precisa de muita criatividade para escrever um livro." },
                        { term: "Inspiration", sent: "Traveling gives me inspiration for my stories.", trans: "Viajar me dá inspiração para minhas histórias." },
                        { term: "Talent", sent: "She has a natural talent for singing.", trans: "Ela tem um talento natural para cantar." }
                    ]
                },
                {
                    title: "Verbs & Adjectives",
                    audio: "TTS: I want to create something beautiful today. The architect will design the new museum. She likes to paint landscapes in her free time. The actors will perform the play tonight. Art is a great way to express your emotions. I really appreciate classical music. He is a very artistic and creative person. The talented singer won a major award. The size of the sculpture is very impressive. The documentary was very thought-provoking. I prefer modern art over older styles. Classical music is very relaxing to listen to.",
                    items:[
                        { term: "To create", sent: "I want to create something beautiful today.", trans: "Quero criar algo bonito hoje." },
                        { term: "To design", sent: "The architect will design the new museum.", trans: "O arquiteto vai projetar o novo museu." },
                        { term: "To paint", sent: "She likes to paint landscapes in her free time.", trans: "Ela gosta de pintar paisagens no seu tempo livre." },
                        { term: "To perform", sent: "The actors will perform the play tonight.", trans: "Os atores vão se apresentar na peça esta noite." },
                        { term: "To express", sent: "Art is a great way to express your emotions.", trans: "A arte é uma ótima maneira de expressar suas emoções." },
                        { term: "To appreciate", sent: "I really appreciate classical music.", trans: "Eu realmente aprecio música clássica." },
                        { term: "Artistic", sent: "He is a very artistic and creative person.", trans: "Ele é uma pessoa muito artística e criativa." },
                        { term: "Talented", sent: "The talented singer won a major award.", trans: "O talentoso cantor ganhou um prêmio importante." },
                        { term: "Impressive", sent: "The size of the sculpture is very impressive.", trans: "O tamanho da escultura é muito impressionante." },
                        { term: "Thought-provoking", sent: "The documentary was very thought-provoking.", trans: "O documentário foi muito instigante (que faz pensar)." },
                        { term: "Modern", sent: "I prefer modern art over older styles.", trans: "Eu prefiro arte moderna em vez de estilos mais antigos." },
                        { term: "Classical", sent: "Classical music is very relaxing to listen to.", trans: "Música clássica é muito relaxante de se ouvir." }
                    ]
                }
            ],

            // --- 2C: PRACTICE ---
            drillGroups:[
                {
                    title: "Art Forms & Works",
                    drills:[
                        { q: "The expression or application of human creative skill and imagination is ________.", options:[{t: "Exhibition", c: false}, {t: "Art", c: true}, {t: "Literature", c: false}, {t: "Performance", c: false}], type: "mcq" },
                        { q: "The process or art of using paint, in a picture, as a protective coating, or as decoration is ________.", options:[{t: "Painting", c: true}, {t: "Drawing", c: false}, {t: "Music", c: false}, {t: "Dance", c: false}], type: "mcq" },
                        { q: "A picture or diagram made with a pencil, pen, or crayon rather than paint is a ________.", options:[{t: "Drawing", c: true}, {t: "Painting", c: false}, {t: "Sculpture", c: false}, {t: "Masterpiece", c: false}], type: "mcq" },
                        { q: "The art of making two- or three-dimensional representative or abstract forms, especially by carving stone or wood, is ________.", options:[{t: "Theater", c: false}, {t: "Sculpture", c: true}, {t: "Photograph", c: false}, {t: "Literature", c: false}], type: "mcq" },
                        { q: "A picture made using a camera is a ________.", options:[{t: "Painting", c: false}, {t: "Drawing", c: false}, {t: "Photograph", c: true}, {t: "Exhibition", c: false}], type: "mcq" },
                        { q: "Vocal or instrumental sounds combined in such a way as to produce beauty of form, harmony, and expression of emotion is ________.", options:[{t: "Dance", c: false}, {t: "Music", c: true}, {t: "Literature", c: false}, {t: "Performance", c: false}], type: "mcq" },
                        { q: "A series of movements that match the speed and rhythm of a piece of music is ________.", options:[{t: "Theater", c: false}, {t: "Dance", c: true}, {t: "Art", c: false}, {t: "Exhibition", c: false}], type: "mcq" },
                        { q: "A play or other activity or presentation considered in terms of its dramatic quality is ________.", options:[{t: "Theater", c: true}, {t: "Literature", c: false}, {t: "Sculpture", c: false}, {t: "Drawing", c: false}], type: "mcq" },
                        { q: "Written works, especially those considered of superior or lasting artistic merit, is ________.", options:[{t: "Literature", c: true}, {t: "Music", c: false}, {t: "Dance", c: false}, {t: "Performance", c: false}], type: "mcq" },
                        { q: "A work of outstanding artistry, skill, or workmanship is a ________.", options:[{t: "Photograph", c: false}, {t: "Exhibition", c: false}, {t: "Masterpiece", c: true}, {t: "Theater", c: false}], type: "mcq" },
                        { q: "A public display of works of art or items of interest, held in an art gallery or museum, is an ________.", options:[{t: "Exhibition", c: true}, {t: "Performance", c: false}, {t: "Painting", c: false}, {t: "Masterpiece", c: false}], type: "mcq" },
                        { q: "An act of staging or presenting a play, concert, or other form of entertainment is a ________.", options:[{t: "Drawing", c: false}, {t: "Exhibition", c: false}, {t: "Performance", c: true}, {t: "Sculpture", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "People, Places & Concepts",
                    drills:[
                        { q: "A person who produces paintings or drawings as a profession or hobby is an ________.", options:[{t: "Musician", c: false}, {t: "Artist", c: true}, {t: "Museum", c: false}, {t: "Talent", c: false}], type: "mcq" },
                        { q: "An artist who paints pictures is a ________.", options:[{t: "Painter", c: true}, {t: "Writer", c: false}, {t: "Photographer", c: false}, {t: "Inspiration", c: false}], type: "mcq" },
                        { q: "A person who takes photographs, especially as a job, is a ________.", options:[{t: "Photographer", c: true}, {t: "Musician", c: false}, {t: "Painter", c: false}, {t: "Creativity", c: false}], type: "mcq" },
                        { q: "A person who plays a musical instrument, especially as a profession, is a ________.", options:[{t: "Writer", c: false}, {t: "Musician", c: true}, {t: "Artist", c: false}, {t: "Museum", c: false}], type: "mcq" },
                        { q: "A person who has written a particular text is a ________.", options:[{t: "Writer", c: true}, {t: "Painter", c: false}, {t: "Photographer", c: false}, {t: "Studio", c: false}], type: "mcq" },
                        { q: "A building in which objects of historical, scientific, artistic, or cultural interest are stored and exhibited is a ________.", options:[{t: "Art gallery", c: false}, {t: "Museum", c: true}, {t: "Concert hall", c: false}, {t: "Studio", c: false}], type: "mcq" },
                        { q: "A room or building for the display or sale of works of art is an ________.", options:[{t: "Art gallery", c: true}, {t: "Museum", c: false}, {t: "Concert hall", c: false}, {t: "Inspiration", c: false}], type: "mcq" },
                        { q: "A large public building designed for the performance of concerts is a ________.", options:[{t: "Concert hall", c: true}, {t: "Studio", c: false}, {t: "Art gallery", c: false}, {t: "Museum", c: false}], type: "mcq" },
                        { q: "A room where an artist, photographer, sculptor, etc., works is a ________.", options:[{t: "Studio", c: true}, {t: "Concert hall", c: false}, {t: "Museum", c: false}, {t: "Talent", c: false}], type: "mcq" },
                        { q: "The use of the imagination or original ideas, especially in the production of an artistic work, is ________.", options:[{t: "Talent", c: false}, {t: "Creativity", c: true}, {t: "Inspiration", c: false}, {t: "Writer", c: false}], type: "mcq" },
                        { q: "The process of being mentally stimulated to do or feel something, especially to do something creative, is ________.", options:[{t: "Creativity", c: false}, {t: "Inspiration", c: true}, {t: "Talent", c: false}, {t: "Artist", c: false}], type: "mcq" },
                        { q: "Natural aptitude or skill is ________.", options:[{t: "Talent", c: true}, {t: "Inspiration", c: false}, {t: "Creativity", c: false}, {t: "Studio", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Verbs & Adjectives",
                    drills:[
                        { q: "To bring (something) into existence is ________.", options:[{t: "To design", c: false}, {t: "To create", c: true}, {t: "To express", c: false}, {t: "To perform", c: false}], type: "mcq" },
                        { q: "To decide upon the look and functioning of (a building, garment, or other object), by making a detailed drawing of it is ________.", options:[{t: "To design", c: true}, {t: "To paint", c: false}, {t: "To appreciate", c: false}, {t: "To create", c: false}], type: "mcq" },
                        { q: "To apply paint to (a surface, such as a canvas) is ________.", options:[{t: "To paint", c: true}, {t: "To express", c: false}, {t: "To perform", c: false}, {t: "To design", c: false}], type: "mcq" },
                        { q: "To present (a form of entertainment) to an audience is ________.", options:[{t: "To perform", c: true}, {t: "To appreciate", c: false}, {t: "To create", c: false}, {t: "To paint", c: false}], type: "mcq" },
                        { q: "To convey (a thought or feeling) in words or by gestures and conduct is ________.", options:[{t: "To appreciate", c: false}, {t: "To express", c: true}, {t: "To design", c: false}, {t: "To create", c: false}], type: "mcq" },
                        { q: "To recognize the full worth of something is ________.", options:[{t: "To appreciate", c: true}, {t: "To perform", c: false}, {t: "To express", c: false}, {t: "To paint", c: false}], type: "mcq" },
                        { q: "Having or revealing natural creative skill is ________.", options:[{t: "Artistic", c: true}, {t: "Modern", c: false}, {t: "Classical", c: false}, {t: "Impressive", c: false}], type: "mcq" },
                        { q: "Having a natural aptitude or skill for something is ________.", options:[{t: "Talented", c: true}, {t: "Thought-provoking", c: false}, {t: "Modern", c: false}, {t: "Artistic", c: false}], type: "mcq" },
                        { q: "Evoking admiration through size, quality, or skill is ________.", options:[{t: "Impressive", c: true}, {t: "Classical", c: false}, {t: "Talented", c: false}, {t: "Modern", c: false}], type: "mcq" },
                        { q: "Stimulating careful consideration or attention is ________.", options:[{t: "Thought-provoking", c: true}, {t: "Artistic", c: false}, {t: "Classical", c: false}, {t: "Impressive", c: false}], type: "mcq" },
                        { q: "Relating to the present or recent times as opposed to the remote past is ________.", options:[{t: "Modern", c: true}, {t: "Classical", c: false}, {t: "Thought-provoking", c: false}, {t: "Talented", c: false}], type: "mcq" },
                        { q: "Representing an exemplary standard within a traditional and long-established form or style is ________.", options:[{t: "Classical", c: true}, {t: "Modern", c: false}, {t: "Impressive", c: false}, {t: "Artistic", c: false}], type: "mcq" }
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
                    title: "Forms of Art",
                    audio: "TTS: Visual arts. Performing arts. A work of art. A masterpiece. A sculpture. A play.",
                    explanation: "Phrases used to categorize and describe specific types of artistic creations.<br><span style='color:var(--primary-blue); font-style:italic;'>(Frases usadas para categorizar e descrever tipos específicos de criações artísticas.)</span>",
                    samples:[
                        { en: "Painting and photography are <b>visual arts</b>.", pt: "<span style='color:var(--primary-blue)'>(Pintura e fotografia são artes visuais.)</span>" },
                        { en: "Dance and theater belong to the <b>performing arts</b>.", pt: "<span style='color:var(--primary-blue)'>(Dança e teatro pertencem às artes cênicas.)</span>" },
                        { en: "That painting is a beautiful <b>work of art</b>.", pt: "<span style='color:var(--primary-blue)'>(Aquela pintura é uma bela obra de arte.)</span>" },
                        { en: "The Mona Lisa is a famous <b>masterpiece</b>.", pt: "<span style='color:var(--primary-blue)'>(A Mona Lisa é uma famosa obra-prima.)</span>" },
                        { en: "He carved a beautiful <b>sculpture</b> out of wood.", pt: "<span style='color:var(--primary-blue)'>(Ele esculpiu uma linda escultura de madeira.)</span>" },
                        { en: "We went to the theater to see a comedy <b>play</b>.", pt: "<span style='color:var(--primary-blue)'>(Fomos ao teatro ver uma peça de comédia.)</span>" }
                    ]
                },
                {
                    title: "Creative Hobbies",
                    audio: "TTS: To be creative. Take up a creative hobby. I enjoy painting. Play a musical instrument. Express yourself. Are you a creative person?",
                    explanation: "Vocabulary for discussing personal talents and activities that require imagination.<br><span style='color:var(--primary-blue); font-style:italic;'>(Vocabulário para discutir talentos pessoais e atividades que exigem imaginação.)</span>",
                    samples:[
                        { en: "You need <b>to be creative</b> to write a novel.", pt: "<span style='color:var(--primary-blue)'>(Você precisa ser criativo para escrever um romance.)</span>" },
                        { en: "I want to <b>take up a creative hobby</b>, like drawing.", pt: "<span style='color:var(--primary-blue)'>(Quero começar um hobby criativo, como desenhar.)</span>" },
                        { en: "In my free time, <b>I enjoy painting</b>.", pt: "<span style='color:var(--primary-blue)'>(No meu tempo livre, eu gosto de pintar.)</span>" },
                        { en: "Do you <b>play a musical instrument</b>?", pt: "<span style='color:var(--primary-blue)'>(Você toca algum instrumento musical?)</span>" },
                        { en: "Art is a great way to <b>express yourself</b>.", pt: "<span style='color:var(--primary-blue)'>(A arte é uma ótima maneira de se expressar.)</span>" },
                        { en: "<b>Are you a creative person?</b>", pt: "<span style='color:var(--primary-blue)'>(Você é uma pessoa criativa?)</span>" }
                    ]
                },
                {
                    title: "Cultural Venues & Preferences",
                    audio: "TTS: Go to an art gallery. See an exhibition. Go to the theater. A local artist. What kind of art do you like? I find modern art difficult to understand.",
                    explanation: "Expressions to talk about visiting artistic places and sharing your opinion on different styles.<br><span style='color:var(--primary-blue); font-style:italic;'>(Expressões para falar sobre visitar lugares artísticos e compartilhar sua opinião sobre diferentes estilos.)</span>",
                    samples:[
                        { en: "Let's <b>go to an art gallery</b> this weekend.", pt: "<span style='color:var(--primary-blue)'>(Vamos a uma galeria de arte neste fim de semana.)</span>" },
                        { en: "I want to <b>see an exhibition</b> about ancient Egypt.", pt: "<span style='color:var(--primary-blue)'>(Quero ver uma exposição sobre o antigo Egito.)</span>" },
                        { en: "We should dress up and <b>go to the theater</b>.", pt: "<span style='color:var(--primary-blue)'>(Devemos nos arrumar e ir ao teatro.)</span>" },
                        { en: "This painting was made by <b>a local artist</b>.", pt: "<span style='color:var(--primary-blue)'>(Esta pintura foi feita por um artista local.)</span>" },
                        { en: "<b>What kind of art do you like?</b>", pt: "<span style='color:var(--primary-blue)'>(De que tipo de arte você gosta?)</span>" },
                        { en: "Honestly, <b>I find modern art difficult to understand</b>.", pt: "<span style='color:var(--primary-blue)'>(Sinceramente, acho a arte moderna difícil de entender.)</span>" }
                    ]
                }
            ],

            // --- 3B: DIALOGUES ---
            dialogueGroups:[
                {
                    title: "Dialogue 1: Discussing Art Preferences",
                    audio: "TTS: What kind of art do you like? I enjoy painting and visual arts. I find modern art difficult to understand. Really? I think it is thought-provoking.",
                    lines:[
                        { speaker: "John", text: "What kind of art do you like?", pt: "(Que tipo de arte você gosta?)" },
                        { speaker: "Sarah", text: "I enjoy painting and visual arts. I find modern art difficult to understand. Really? I think it is thought-provoking.", pt: "(Eu gosto de pintura e artes visuais. Acho a arte moderna difícil de entender. Sério? Eu acho instigante.)" } // Flow error
                    ]
                },
                {
                    title: "Dialogue 1: Discussing Art Preferences", // Fixed
                    audio: "TTS: What kind of art do you like? I enjoy painting and visual arts. I find modern art difficult to understand. Really? I think it is thought-provoking.",
                    lines:[
                        { speaker: "John", text: "What kind of art do you like?", pt: "(Que tipo de arte você gosta?)" },
                        { speaker: "Sarah", text: "I enjoy painting and visual arts.", pt: "(Eu gosto de pintura e artes visuais.)" },
                        { speaker: "John", text: "I find modern art difficult to understand.", pt: "(Acho a arte moderna difícil de entender.)" },
                        { speaker: "Sarah", text: "Really? I think it is thought-provoking.", pt: "(Sério? Eu acho instigante.)" }
                    ]
                },
                {
                    title: "Dialogue 2: Visiting a Museum",
                    audio: "TTS: Do you want to go to an art gallery this weekend? Yes, I want to see an exhibition. They are showing a masterpiece by a local artist. That sounds great. Let's go on Saturday.",
                    lines:[
                        { speaker: "Mike", text: "Do you want to go to an art gallery this weekend?", pt: "(Você quer ir a uma galeria de arte neste fim de semana?)" },
                        { speaker: "Emma", text: "Yes, I want to see an exhibition. They are showing a masterpiece by a local artist.", pt: "(Sim, eu quero ver uma exposição. Eles estão mostrando uma obra-prima de um artista local.)" },
                        { speaker: "Mike", text: "That sounds great. Let's go on Saturday.", pt: "(Isso parece ótimo. Vamos no sábado.)" }
                    ]
                },
                {
                    title: "Dialogue 3: Creative Outlets",
                    audio: "TTS: Are you a creative person? I like to think so. I want to take up a creative hobby. You should try drawing. It's a great way to express yourself.",
                    lines:[
                        { speaker: "Lisa", text: "Are you a creative person?", pt: "(Você é uma pessoa criativa?)" },
                        { speaker: "David", text: "I like to think so. I want to take up a creative hobby.", pt: "(Gosto de pensar que sim. Quero começar um hobby criativo.)" },
                        { speaker: "Lisa", text: "You should try drawing. It's a great way to express yourself.", pt: "(Você deveria tentar desenhar. É uma ótima maneira de se expressar.)" }
                    ]
                },
                {
                    title: "Dialogue 4: The Music Concert",
                    audio: "TTS: I am going to a concert tonight. Do you play a musical instrument? Yes, I play the guitar. Being a musician requires a lot of talent.",
                    lines:[
                        { speaker: "Tom", text: "I am going to a concert tonight.", pt: "(Vou a um show hoje à noite.)" },
                        { speaker: "Anna", text: "Do you play a musical instrument?", pt: "(Você toca algum instrumento musical?)" },
                        { speaker: "Tom", text: "Yes, I play the guitar.", pt: "(Sim, eu toco violão/guitarra.)" },
                        { speaker: "Anna", text: "Being a musician requires a lot of talent.", pt: "(Ser músico exige muito talento.)" }
                    ]
                },
                {
                    title: "Dialogue 5: Acting in a Play",
                    audio: "TTS: Are you going to go to the theater tomorrow? Yes, I want to see a play. My brother is performing in it. He must be very creative to act on stage.",
                    lines:[
                        { speaker: "Chloe", text: "Are you going to go to the theater tomorrow?", pt: "(Você vai ao teatro amanhã?)" },
                        { speaker: "Leo", text: "Yes, I want to see a play. My brother is performing in it.", pt: "(Sim, eu quero ver uma peça. Meu irmão vai atuar nela.)" },
                        { speaker: "Chloe", text: "He must be very creative to act on stage.", pt: "(Ele deve ser muito criativo para atuar no palco.)" }
                    ]
                },
                {
                    title: "Dialogue 6: Analyzing Art",
                    audio: "TTS: Wow, look at this sculpture. It is an amazing work of art. I agree. Visual arts always require so much inspiration. Absolutely. The performing arts are impressive, too.",
                    lines:[
                        { speaker: "Sarah", text: "Wow, look at this sculpture. It is an amazing work of art.", pt: "(Uau, olhe esta escultura. É uma incrível obra de arte.)" },
                        { speaker: "Mark", text: "I agree. Visual arts always require so much inspiration.", pt: "(Eu concordo. Artes visuais sempre exigem muita inspiração.)" },
                        { speaker: "Sarah", text: "Absolutely. The performing arts are impressive, too.", pt: "(Com certeza. As artes cênicas também são impressionantes.)" }
                    ]
                }
            ],

            // --- 3C: PRACTICE ---
            grammarDrillGroups:[
                {
                    title: "Forms of Art",
                    drills:[
                        { q: "Painting and photography are examples of ________ arts.", options:[{t: "visual", c: true}, {t: "performing", c: false}, {t: "musical", c: false}, {t: "literature", c: false}], type: "mcq" },
                        { q: "Dance and theater belong to the ________ arts.", options:[{t: "visual", c: false}, {t: "performing", c: true}, {t: "sculpture", c: false}, {t: "painting", c: false}], type: "mcq" },
                        { q: "That painting is a beautiful ________ of art.", options:[{t: "piece", c: false}, {t: "work", c: true}, {t: "job", c: false}, {t: "make", c: false}], type: "mcq" },
                        { q: "The Mona Lisa is a famous ________.", options:[{t: "masterpiece", c: true}, {t: "performance", c: false}, {t: "exhibition", c: false}, {t: "gallery", c: false}], type: "mcq" },
                        { q: "He carved a beautiful ________ out of wood.", options:[{t: "play", c: false}, {t: "sculpture", c: true}, {t: "photograph", c: false}, {t: "concert", c: false}], type: "mcq" },
                        { q: "We went to the theater to see a comedy ________.", options:[{t: "exhibition", c: false}, {t: "gallery", c: false}, {t: "play", c: true}, {t: "sculpture", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Creative Hobbies",
                    drills:[
                        { q: "You need to be ________ to write a novel.", options:[{t: "creative", c: true}, {t: "classical", c: false}, {t: "modern", c: false}, {t: "thought-provoking", c: false}], type: "mcq" },
                        { q: "I want to take ________ a creative hobby, like drawing.", options:[{t: "in", c: false}, {t: "out", c: false}, {t: "up", c: true}, {t: "on", c: false}], type: "mcq" },
                        { q: "In my free time, I ________ painting.", options:[{t: "enjoy", c: true}, {t: "want", c: false}, {t: "do", c: false}, {t: "make", c: false}], type: "mcq" },
                        { q: "Do you play a musical ________?", options:[{t: "music", c: false}, {t: "instrument", c: true}, {t: "art", c: false}, {t: "performance", c: false}], type: "mcq" },
                        { q: "Art is a great way to ________ yourself.", options:[{t: "perform", c: false}, {t: "express", c: true}, {t: "create", c: false}, {t: "appreciate", c: false}], type: "mcq" },
                        { q: "Are you a ________ person?", options:[{t: "creative", c: true}, {t: "creativity", c: false}, {t: "creation", c: false}, {t: "create", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Cultural Venues & Preferences",
                    drills:[
                        { q: "Let's go to an art ________ this weekend.", options:[{t: "museum", c: false}, {t: "gallery", c: true}, {t: "studio", c: false}, {t: "theater", c: false}], type: "mcq" },
                        { q: "I want to ________ an exhibition about ancient Egypt.", options:[{t: "look", c: false}, {t: "see", c: true}, {t: "watch", c: false}, {t: "go", c: false}], type: "mcq" },
                        { q: "We should dress up and go to the ________.", options:[{t: "gallery", c: false}, {t: "theater", c: true}, {t: "artist", c: false}, {t: "painter", c: false}], type: "mcq" },
                        { q: "This painting was made by a ________ artist.", options:[{t: "local", c: true}, {t: "locality", c: false}, {t: "locate", c: false}, {t: "location", c: false}], type: "mcq" },
                        { q: "What ________ of art do you like?", options:[{t: "type", c: false}, {t: "kind", c: true}, {t: "sort", c: false}, {t: "way", c: false}], type: "mcq" },
                        { q: "I find ________ art difficult to understand.", options:[{t: "modern", c: true}, {t: "classical", c: false}, {t: "traditional", c: false}, {t: "talented", c: false}], type: "mcq" }
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
                { text: "What kind of art do you like? ↘", audio: "TTS: What kind of art do you like?" },
                { text: "I find modern art difficult to understand. ↘", audio: "TTS: I find modern art difficult to understand." },
                { text: "Are you a creative person? ↗", audio: "TTS: Are you a creative person?" },
                { text: "I want to take up a creative hobby this year. ↘", audio: "TTS: I want to take up a creative hobby this year." },
                { text: "In my free time, I really enjoy painting. ↘", audio: "TTS: In my free time, I really enjoy painting." },
                { text: "Do you play a musical instrument? ↗", audio: "TTS: Do you play a musical instrument?" },
                { text: "Let's go to an art gallery this weekend. ↘", audio: "TTS: Let's go to an art gallery this weekend." },
                { text: "I want to see an exhibition by a local artist. ↘", audio: "TTS: I want to see an exhibition by a local artist." },
                { text: "Art is a wonderful way to express yourself. ↘", audio: "TTS: Art is a wonderful way to express yourself." },
                { text: "That sculpture is very thought-provoking. ↘", audio: "TTS: That sculpture is very thought-provoking." }
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
                    audio: "TTS: Mark: I went to the art gallery yesterday. Sarah: Did you see the new exhibition? Mark: Yes! There was a beautiful painting by a local artist. Sarah: That sounds inspiring. I love visual arts.",
                    text: "Mark: I went to the art [gallery] yesterday.<br>Sarah: Did you see the new [exhibition]?<br>Mark: Yes! There was a beautiful [painting] by a local artist.<br>Sarah: That sounds inspiring. I love [visual] arts."
                },
                {
                    type: "dropdown",
                    instruction: "Listen to the dialogue about performing arts.",
                    audio: "TTS: John: Are we going to the theater tonight? Emma: Yes, we are going to see a play. John: I hope the performance is good. Emma: The actors are very talented, so I am sure it will be impressive.",
                    questions:[
                        { q: "John: Are we going to the [theater* | museum | studio] tonight?", a: "theater" },
                        { q: "Emma: Yes, we are going to see a [play* | sculpture | painting].", a: "play" },
                        { q: "John: I hope the [performance* | literature | photographer] is good.", a: "performance" },
                        { q: "Emma: The actors are very[talented* | boring | modern], so I am sure it will be impressive.", a: "talented" }
                    ]
                },
                {
                    type: "audio-choice",
                    instruction: "Listen to the speaker. How does she express her creativity?",
                    audio: "TTS: I am not very good at painting or drawing, but I am a very creative person. I express myself through music. I play the piano and I am currently writing a new song.",
                    options:[
                        { t: "She expresses herself by painting landscapes.", c: false },
                        { t: "She expresses herself by taking photographs.", c: false },
                        { t: "She expresses herself by playing a musical instrument.", c: true },
                        { t: "She expresses herself by acting in a theater.", c: false }
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
                    title: "Dialogue - The Art Exhibition",
                    audio: "TTS: Tom: Lisa, what kind of art do you like? Lisa: I really appreciate classical art. What about you? Tom: I prefer modern art. I think it is very thought-provoking. Lisa: Sometimes I find modern art difficult to understand. Tom: I can see why. Hey, do you want to go to an art gallery this weekend? There's a new exhibition. Lisa: I'd love to! I always enjoy seeing a great masterpiece.",
                    body: "<b>Tom:</b> Lisa,[what kind of art do you like](tooltip:what-kind-art)?<br><b>Lisa:</b> I really [appreciate](tooltip:to-appreciate) [classical](tooltip:classical) [art](tooltip:art). What about you?<br><b>Tom:</b> I prefer [modern](tooltip:modern) art. I think it is very [thought-provoking](tooltip:thought-provoking).<br><b>Lisa:</b> Sometimes [I find modern art difficult to understand](tooltip:modern-art-difficult).<br><b>Tom:</b> I can see why. Hey, do you want to [go to an art gallery](tooltip:go-art-gallery) this weekend? There's a new [exhibition](tooltip:exhibition).<br><b>Lisa:</b> I'd love to! I always enjoy seeing a great [masterpiece](tooltip:masterpiece).",
                    questions:[
                        { q: "What kind of art does Lisa appreciate?", options:[{t: "Modern art.", c: false}, {t: "Classical art.", c: true}, {t: "Photography.", c: false}], type: "mcq" },
                        { q: "Why does Tom like modern art?", options:[{t: "Because it is thought-provoking.", c: true}, {t: "Because it is easy to understand.", c: false}, {t: "Because he is a painter.", c: false}], type: "mcq" },
                        { q: "Where are they going this weekend?", options:[{t: "To the theater.", c: false}, {t: "To an art gallery.", c: true}, {t: "To a concert hall.", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Dialogue - Musical Talents",
                    audio: "TTS: David: Are you a creative person, Chloe? Chloe: I like to think so. I play a musical instrument to express myself. David: Oh, really? Which one? Chloe: I play the violin. I am actually a musician in the city orchestra. David: Wow, you must be very talented! I would love to see a performance. Chloe: We are playing at the concert hall next Friday. You should come!",
                    body: "<b>David:</b>[Are you a creative person](tooltip:are-you-creative), Chloe?<br><b>Chloe:</b> I like to think so. I[play a musical instrument](tooltip:play-instrument) to [express yourself](tooltip:express-yourself).<br><b>David:</b> Oh, really? Which one?<br><b>Chloe:</b> I play the violin. I am actually a [musician](tooltip:musician) in the city orchestra.<br><b>David:</b> Wow, you must be very[talented](tooltip:talented)! I would love to see a [performance](tooltip:performance).<br><b>Chloe:</b> We are playing at the [concert hall](tooltip:concert-hall) next Friday. You should come!",
                    questions:[
                        { q: "How does Chloe express herself?", options:[{t: "By painting pictures.", c: false}, {t: "By playing a musical instrument.", c: true}, {t: "By writing literature.", c: false}], type: "mcq" },
                        { q: "What is Chloe's profession?", options:[{t: "She is a painter.", c: false}, {t: "She is a musician.", c: true}, {t: "She is a photographer.", c: false}], type: "mcq" },
                        { q: "Where is the orchestra playing next Friday?", options:[{t: "At the museum.", c: false}, {t: "At the concert hall.", c: true}, {t: "At the art gallery.", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Email - Finding Inspiration",
                    audio: "TTS: Subject: A new hobby! Hi Mark, I hope you are doing well. I recently decided to take up a creative hobby. I realized I needed a way to relax, so I started drawing. I enjoy painting and drawing landscapes. I went to the museum yesterday to find some inspiration. Seeing the visual arts there was incredibly impressive. Do you have any creative hobbies? Let me know! Best, Noah.",
                    body: "<b>From: Noah</b><br><b>To: Mark</b><br>Subject: A new hobby!<br><br>Hi Mark,<br>I hope you are doing well. I recently decided to [take up a creative hobby](tooltip:take-up-hobby). I realized I needed a way to relax, so I started [drawing](tooltip:drawing).[I enjoy painting](tooltip:enjoy-painting) and drawing landscapes. I went to the [museum](tooltip:museum) yesterday to find some [inspiration](tooltip:inspiration). Seeing the [visual arts](tooltip:visual-arts) there was incredibly [impressive](tooltip:impressive). Do you have any [creative](tooltip:creative) hobbies? Let me know!<br><br>Best, Noah.",
                    questions:[
                        { q: "What did Noah decide to do?", options:[{t: "Take up a creative hobby.", c: true}, {t: "Buy a new camera.", c: false}, {t: "Play a musical instrument.", c: false}], type: "mcq" },
                        { q: "What specific activity does Noah enjoy doing?", options:[{t: "Acting in a play.", c: false}, {t: "Painting and drawing landscapes.", c: true}, {t: "Writing literature.", c: false}], type: "mcq" },
                        { q: "Where did Noah go to find inspiration?", options:[{t: "To the museum.", c: true}, {t: "To the theater.", c: false}, {t: "To the studio.", c: false}], type: "mcq" }
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
                { type: "matching", instruction: "Match the art form to its description.", pairs:[
                    { left: "Painting", right: "Using colors on a canvas", val: "1" },
                    { left: "Sculpture", right: "Carving 3D shapes", val: "2" },
                    { left: "Photography", right: "Taking pictures with a camera", val: "3" },
                    { left: "Literature", right: "Writing books and poetry", val: "4" }
                ]},
                { type: "matching", instruction: "Match the person to the place.", pairs:[
                    { left: "Painter", right: "Studio", val: "1" },
                    { left: "Musician", right: "Concert hall", val: "2" },
                    { left: "Actor", right: "Theater", val: "3" },
                    { left: "Curator", right: "Museum", val: "4" } // General logic
                ]},
                { type: "matching", instruction: "Match the verbs with their objects.", pairs:[
                    { left: "To paint", right: "a picture", val: "1" },
                    { left: "To perform", right: "a play", val: "2" },
                    { left: "To play", right: "an instrument", val: "3" },
                    { left: "To design", right: "a building", val: "4" }
                ]},
                { type: "matching", instruction: "Match the phrase halves.", pairs:[
                    { left: "Visual", right: "arts", val: "1" },
                    { left: "Performing", right: "arts", val: "2" },
                    { left: "A work of", right: "art", val: "3" },
                    { left: "Express", right: "yourself", val: "4" }
                ]},

                // --- WORD ORDER (5-14) ---
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "kind / What / do / art / you / of / like / ?", correct: "What kind of art do you like ?" },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "art / modern / find / I / difficult / .", correct: "I find modern art difficult ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "a / you / creative / Are / person / ?", correct: "Are you a creative person ?" },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "take / want / I / to / a / up / hobby / .", correct: "I want to take up a hobby ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "painting / free / enjoy / I / my / in / time / .", correct: "I enjoy painting in my free time ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "you / play / instrument / Do / a / musical / ?", correct: "Do you play a musical instrument ?" },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "to / an / gallery / Let's / go / art / .", correct: "Let's go to an art gallery ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "an / to / want / I / see / exhibition / .", correct: "I want to see an exhibition ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "art / A / of / work / beautiful / .", correct: "A beautiful work of art ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "way / A / to / great / express / yourself / .", correct: "A great way to express yourself ." },

                // --- CLICKABLE ERROR (15-24) ---
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "I want to [make](error:take) up a creative hobby." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "Are you a [creating](error:creative) person?" },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "I enjoy [paint](error:painting) landscapes." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "Do you play a music [tool](error:instrument)?" },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "Art helps you [show](error:express) yourself." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "Let's go to an art [museum](error:gallery) to buy a painting." }, // museum doesn't sell usually, gallery fits better, or just use the exact chunk.
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "Let's go to an art [station](error:gallery)." }, // Better error
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "I want to [look](error:see) an exhibition." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "What [type](error:kind) of art do you like?" }, // "what kind of art" is the chunk
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "I find modern art difficult to [know](error:understand)." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "The sculpture is very thought-[making](error:provoking)." },

                // --- ODD ONE OUT (25-30) ---
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Visual Arts)", options:[{t: "Painting", c: false}, {t: "Drawing", c: false}, {t: "Photograph", c: false}, {t: "Music", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Performing Arts)", options:[{t: "Dance", c: false}, {t: "Theater", c: false}, {t: "Music", c: false}, {t: "Sculpture", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (People)", options:[{t: "Musician", c: false}, {t: "Painter", c: false}, {t: "Photographer", c: false}, {t: "Masterpiece", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Places)", options:[{t: "Art gallery", c: false}, {t: "Museum", c: false}, {t: "Concert hall", c: false}, {t: "Literature", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Adjectives)", options:[{t: "Artistic", c: false}, {t: "Talented", c: false}, {t: "Impressive", c: false}, {t: "To design", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Concepts)", options:[{t: "Creativity", c: false}, {t: "Inspiration", c: false}, {t: "Talent", c: false}, {t: "To perform", c: true}] },

                // --- TRUE / FALSE (31-35) ---
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "A 'masterpiece' is a very bad and poorly made work of art.", correct: "false"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "To 'take up' a hobby means to start doing it regularly.", correct: "true"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "If a movie is 'thought-provoking', it makes you think deeply about a subject.", correct: "true"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "'Classical' art refers to the newest and most modern styles of painting.", correct: "false"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "You go to a 'concert hall' to see a musical performance.", correct: "true"}] },

                // --- MCQ (36-39) ---
                { type: "mcq", instruction: "Choose the correct phrase.<br>Painting and drawing are considered ________ arts.", options:[{t: "performing", c: false}, {t: "visual", c: true}, {t: "musical", c: false}, {t: "modern", c: false}] },
                { type: "mcq", instruction: "Choose the correct word.<br>The person who writes books and novels is a ________.", options:[{t: "painter", c: false}, {t: "musician", c: false}, {t: "writer", c: true}, {t: "photographer", c: false}] },
                { type: "mcq", instruction: "Choose the correct verb.<br>If you want to show your feelings through art, you use it to ________ yourself.", options:[{t: "create", c: false}, {t: "design", c: false}, {t: "express", c: true}, {t: "perform", c: false}] },
                { type: "mcq", instruction: "Choose the correct adjective.<br>If someone has a natural ability to play the piano beautifully, they are very ________.", options:[{t: "modern", c: false}, {t: "talented", c: true}, {t: "classical", c: false}, {t: "thought-provoking", c: false}] },

                // --- CATEGORIZE (40) ---
                { type: "categorize", instruction: "Sort the words into Visual Arts and Performing Arts.", 
                    categories:[{id: "vis", name: "Visual Arts"}, {id: "perf", name: "Performing"}],
                    items:[
                        {text: "Painting", catId: "vis"}, 
                        {text: "Drawing", catId: "vis"}, 
                        {text: "Sculpture", catId: "vis"}, 
                        {text: "Dance", catId: "perf"}, 
                        {text: "Theater", catId: "perf"}, 
                        {text: "Music", catId: "perf"}
                    ] 
                }
            ]
        },

        // ======================================================
        // STEP 8: WRITING PRACTICE
        // ======================================================
        {
            title: "Writing Practice",
            instruction: "Write a short paragraph (5-7 sentences) about your creative hobbies or your taste in art. Mention what kind of art you like (e.g., visual or performing arts), if you play a musical instrument or paint, and describe a recent visit to a museum or theater.",
            example: "I have always been a very creative person. I find that art is a great way to express yourself. In my free time, I enjoy painting landscapes, and I also play a musical instrument. I play the piano every evening to relax. Last weekend, I went to an art gallery to see an exhibition by a local artist. The modern paintings were very thought-provoking and impressive. I really appreciate seeing new masterpieces.",
            prompts:[
                "State if you are a creative person or what kind of art you like.",
                "Mention a creative hobby you have (e.g., painting, drawing, playing an instrument).",
                "Describe a visit to a cultural venue (museum, theater, art gallery).",
                "Use an adjective to describe the art (impressive, thought-provoking, classical)."
            ]
        },

        // ======================================================
        // STEP 9: FLASHCARDS
        // ======================================================
        {
            title: "Flashcards",
            items:[
                // 2A Items (36 items)
                { term: "Art", definition: "The expression or application of human creative skill.", defTrans: "Arte", example: "She studies art at the university.", audioFront: "TTS: Art", audioBack: "TTS: She studies art at the university." },
                { term: "Painting", definition: "The practice of applying paint to a surface.", defTrans: "Pintura / Quadro", example: "This painting uses very bright colors.", audioFront: "TTS: Painting", audioBack: "TTS: This painting uses very bright colors." },
                { term: "Drawing", definition: "A picture or diagram made with a pencil or pen.", defTrans: "Desenho", example: "He made a beautiful pencil drawing.", audioFront: "TTS: Drawing", audioBack: "TTS: He made a beautiful pencil drawing." },
                { term: "Sculpture", definition: "The art of making two- or three-dimensional forms.", defTrans: "Escultura", example: "There is a large stone sculpture in the park.", audioFront: "TTS: Sculpture", audioBack: "TTS: There is a large stone sculpture in the park." },
                { term: "Photograph", definition: "A picture made using a camera.", defTrans: "Fotografia", example: "I took a photograph of the sunset.", audioFront: "TTS: Photograph", audioBack: "TTS: I took a photograph of the sunset." },
                { term: "Music", definition: "Vocal or instrumental sounds combined to produce beauty.", defTrans: "Música", example: "Listening to music helps me relax.", audioFront: "TTS: Music", audioBack: "TTS: Listening to music helps me relax." },
                { term: "Dance", definition: "A series of movements that match the speed of music.", defTrans: "Dança", example: "The ballet is a beautiful form of dance.", audioFront: "TTS: Dance", audioBack: "TTS: The ballet is a beautiful form of dance." },
                { term: "Theater", definition: "A play or other activity presented on stage.", defTrans: "Teatro", example: "We saw a great play at the theater last night.", audioFront: "TTS: Theater", audioBack: "TTS: We saw a great play at the theater last night." },
                { term: "Literature", definition: "Written works, especially those considered of superior merit.", defTrans: "Literatura", example: "I enjoy reading classical literature.", audioFront: "TTS: Literature", audioBack: "TTS: I enjoy reading classical literature." },
                { term: "Masterpiece", definition: "A work of outstanding artistry or skill.", defTrans: "Obra-prima", example: "The Mona Lisa is considered a masterpiece.", audioFront: "TTS: Masterpiece", audioBack: "TTS: The Mona Lisa is considered a masterpiece." },
                { term: "Exhibition", definition: "A public display of works of art.", defTrans: "Exposição", example: "The new art exhibition opens on Friday.", audioFront: "TTS: Exhibition", audioBack: "TTS: The new art exhibition opens on Friday." },
                { term: "Performance", definition: "An act of presenting a play, concert, or other entertainment.", defTrans: "Apresentação / Performance", example: "The live performance was absolutely amazing.", audioFront: "TTS: Performance", audioBack: "TTS: The live performance was absolutely amazing." },

                { term: "Artist", definition: "A person who produces paintings or drawings.", defTrans: "Artista", example: "The artist sold his work for a lot of money.", audioFront: "TTS: Artist", audioBack: "TTS: The artist sold his work for a lot of money." },
                { term: "Painter", definition: "An artist who paints pictures.", defTrans: "Pintor(a)", example: "The painter mixed blue and yellow on the canvas.", audioFront: "TTS: Painter", audioBack: "TTS: The painter mixed blue and yellow on the canvas." },
                { term: "Photographer", definition: "A person who takes photographs.", defTrans: "Fotógrafo(a)", example: "A famous photographer took my portrait.", audioFront: "TTS: Photographer", audioBack: "TTS: A famous photographer took my portrait." },
                { term: "Musician", definition: "A person who plays a musical instrument.", defTrans: "Músico(a)", example: "The musician played the violin perfectly.", audioFront: "TTS: Musician", audioBack: "TTS: The musician played the violin perfectly." },
                { term: "Writer", definition: "A person who has written a particular text.", defTrans: "Escritor(a)", example: "My favorite writer just published a new novel.", audioFront: "TTS: Writer", audioBack: "TTS: My favorite writer just published a new novel." },
                { term: "Museum", definition: "A building in which objects of interest are exhibited.", defTrans: "Museu", example: "We spent the afternoon at the history museum.", audioFront: "TTS: Museum", audioBack: "TTS: We spent the afternoon at the history museum." },
                { term: "Art gallery", definition: "A room or building for the display of works of art.", defTrans: "Galeria de arte", example: "I bought a small piece from the local art gallery.", audioFront: "TTS: Art gallery", audioBack: "TTS: I bought a small piece from the local art gallery." },
                { term: "Concert hall", definition: "A large public building designed for performances.", defTrans: "Casa de shows", example: "The orchestra played in a massive concert hall.", audioFront: "TTS: Concert hall", audioBack: "TTS: The orchestra played in a massive concert hall." },
                { term: "Studio", definition: "A room where an artist or musician works.", defTrans: "Estúdio", example: "The band recorded their new album in the studio.", audioFront: "TTS: Studio", audioBack: "TTS: The band recorded their new album in the studio." },
                { term: "Creativity", definition: "The use of the imagination or original ideas.", defTrans: "Criatividade", example: "You need a lot of creativity to write a book.", audioFront: "TTS: Creativity", audioBack: "TTS: You need a lot of creativity to write a book." },
                { term: "Inspiration", definition: "The process of being mentally stimulated to do something.", defTrans: "Inspiração", example: "Traveling gives me inspiration for my stories.", audioFront: "TTS: Inspiration", audioBack: "TTS: Traveling gives me inspiration for my stories." },
                { term: "Talent", definition: "Natural aptitude or skill.", defTrans: "Talento", example: "She has a natural talent for singing.", audioFront: "TTS: Talent", audioBack: "TTS: She has a natural talent for singing." },

                { term: "To create", definition: "To bring something into existence.", defTrans: "Criar", example: "I want to create something beautiful today.", audioFront: "TTS: To create", audioBack: "TTS: I want to create something beautiful today." },
                { term: "To design", definition: "To decide upon the look and functioning of something.", defTrans: "Projetar / Desenhar", example: "The architect will design the new museum.", audioFront: "TTS: To design", audioBack: "TTS: The architect will design the new museum." },
                { term: "To paint", definition: "To apply paint to a surface.", defTrans: "Pintar", example: "She likes to paint landscapes in her free time.", audioFront: "TTS: To paint", audioBack: "TTS: She likes to paint landscapes in her free time." },
                { term: "To perform", definition: "To present a form of entertainment to an audience.", defTrans: "Apresentar-se", example: "The actors will perform the play tonight.", audioFront: "TTS: To perform", audioBack: "TTS: The actors will perform the play tonight." },
                { term: "To express", definition: "To convey a thought or feeling.", defTrans: "Expressar", example: "Art is a great way to express your emotions.", audioFront: "TTS: To express", audioBack: "TTS: Art is a great way to express your emotions." },
                { term: "To appreciate", definition: "To recognize the full worth of something.", defTrans: "Apreciar", example: "I really appreciate classical music.", audioFront: "TTS: To appreciate", audioBack: "TTS: I really appreciate classical music." },
                { term: "Artistic", definition: "Having or revealing natural creative skill.", defTrans: "Artístico(a)", example: "He is a very artistic and creative person.", audioFront: "TTS: Artistic", audioBack: "TTS: He is a very artistic and creative person." },
                { term: "Talented", definition: "Having a natural aptitude or skill.", defTrans: "Talentoso(a)", example: "The talented singer won a major award.", audioFront: "TTS: Talented", audioBack: "TTS: The talented singer won a major award." },
                { term: "Impressive", definition: "Evoking admiration through size, quality, or skill.", defTrans: "Impressionante", example: "The size of the sculpture is very impressive.", audioFront: "TTS: Impressive", audioBack: "TTS: The size of the sculpture is very impressive." },
                { term: "Thought-provoking", definition: "Stimulating careful consideration or attention.", defTrans: "Instigante", example: "The documentary was very thought-provoking.", audioFront: "TTS: Thought-provoking", audioBack: "TTS: The documentary was very thought-provoking." },
                { term: "Modern", definition: "Relating to the present or recent times.", defTrans: "Moderno(a)", example: "I prefer modern art over older styles.", audioFront: "TTS: Modern", audioBack: "TTS: I prefer modern art over older styles." },
                { term: "Classical", definition: "Representing an exemplary standard within a traditional form.", defTrans: "Clássico(a)", example: "Classical music is very relaxing to listen to.", audioFront: "TTS: Classical", audioBack: "TTS: Classical music is very relaxing to listen to." },

                // 3A Items (18 items)
                { term: "Visual arts", definition: "Art forms that create works that are primarily visual in nature.", defTrans: "Artes visuais", example: "Painting and photography are visual arts.", audioFront: "TTS: Visual arts", audioBack: "TTS: Painting and photography are visual arts." },
                { term: "Performing arts", definition: "Forms of creative activity performed in front of an audience.", defTrans: "Artes cênicas", example: "Dance and theater belong to the performing arts.", audioFront: "TTS: Performing arts", audioBack: "TTS: Dance and theater belong to the performing arts." },
                { term: "A work of art", definition: "A product of the fine arts.", defTrans: "Uma obra de arte", example: "That painting is a beautiful work of art.", audioFront: "TTS: A work of art", audioBack: "TTS: That painting is a beautiful work of art." },
                { term: "A masterpiece", definition: "A work of outstanding artistry.", defTrans: "Uma obra-prima", example: "The Mona Lisa is a famous masterpiece.", audioFront: "TTS: A masterpiece", audioBack: "TTS: The Mona Lisa is a famous masterpiece." },
                { term: "A sculpture", definition: "The art of making three-dimensional forms.", defTrans: "Uma escultura", example: "He carved a beautiful sculpture out of wood.", audioFront: "TTS: A sculpture", audioBack: "TTS: He carved a beautiful sculpture out of wood." },
                { term: "A play", definition: "A dramatic work for the stage.", defTrans: "Uma peça de teatro", example: "We went to the theater to see a comedy play.", audioFront: "TTS: A play", audioBack: "TTS: We went to the theater to see a comedy play." },
                
                { term: "To be creative", definition: "To have the ability to invent and develop original ideas.", defTrans: "Ser criativo", example: "You need to be creative to write a novel.", audioFront: "TTS: To be creative", audioBack: "TTS: You need to be creative to write a novel." },
                { term: "Take up a creative hobby", definition: "To begin an artistic leisure activity.", defTrans: "Começar um hobby criativo", example: "I want to take up a creative hobby, like drawing.", audioFront: "TTS: Take up a creative hobby", audioBack: "TTS: I want to take up a creative hobby, like drawing." },
                { term: "I enjoy painting", definition: "Stating pleasure in creating art with colors.", defTrans: "Eu gosto de pintar", example: "In my free time, I enjoy painting.", audioFront: "TTS: I enjoy painting", audioBack: "TTS: In my free time, I enjoy painting." },
                { term: "Play a musical instrument", definition: "To produce music using a specialized device.", defTrans: "Tocar um instrumento musical", example: "Do you play a musical instrument?", audioFront: "TTS: Play a musical instrument", audioBack: "TTS: Do you play a musical instrument?" },
                { term: "Express yourself", definition: "To communicate your feelings and thoughts.", defTrans: "Se expressar", example: "Art is a great way to express yourself.", audioFront: "TTS: Express yourself", audioBack: "TTS: Art is a great way to express yourself." },
                { term: "Are you a creative person?", definition: "Asking someone if they are imaginative and artistic.", defTrans: "Você é uma pessoa criativa?", example: "Are you a creative person?", audioFront: "TTS: Are you a creative person?", audioBack: "TTS: Are you a creative person?" },
                
                { term: "Go to an art gallery", definition: "To visit a room or building displaying art.", defTrans: "Ir a uma galeria de arte", example: "Let's go to an art gallery this weekend.", audioFront: "TTS: Go to an art gallery", audioBack: "TTS: Let's go to an art gallery this weekend." },
                { term: "See an exhibition", definition: "To view a public display of works of art.", defTrans: "Ver uma exposição", example: "I want to see an exhibition about ancient Egypt.", audioFront: "TTS: See an exhibition", audioBack: "TTS: I want to see an exhibition about ancient Egypt." },
                { term: "Go to the theater", definition: "To attend a dramatic performance.", defTrans: "Ir ao teatro", example: "We should dress up and go to the theater.", audioFront: "TTS: Go to the theater", audioBack: "TTS: We should dress up and go to the theater." },
                { term: "A local artist", definition: "A creative person from the nearby community.", defTrans: "Um artista local", example: "This painting was made by a local artist.", audioFront: "TTS: A local artist", audioBack: "TTS: This painting was made by a local artist." },
                { term: "What kind of art do you like?", definition: "Asking for someone's preferences in art styles.", defTrans: "Que tipo de arte você gosta?", example: "What kind of art do you like?", audioFront: "TTS: What kind of art do you like?", audioBack: "TTS: What kind of art do you like?" },
                { term: "I find modern art difficult to understand.", definition: "Stating that contemporary art is confusing to you.", defTrans: "Acho a arte moderna difícil de entender.", example: "Honestly, I find modern art difficult to understand.", audioFront: "TTS: I find modern art difficult to understand.", audioBack: "TTS: Honestly, I find modern art difficult to understand." }
            ]
        }
    ],

    // ======================================================
    // GLOSSARY (All 54 items + Context words)
    // ======================================================
    glossary:[
        // 2A: Art Forms & Works
        { topic: "Art Forms", term: "art", definition: "The expression of human creative skill.", translation: "Arte" },
        { topic: "Art Forms", term: "painting", definition: "Applying paint to a surface.", translation: "Pintura" },
        { topic: "Art Forms", term: "drawing", definition: "A picture made with a pencil or pen.", translation: "Desenho" },
        { topic: "Art Forms", term: "sculpture", definition: "The art of making three-dimensional forms.", translation: "Escultura" },
        { topic: "Art Forms", term: "photograph", definition: "A picture made using a camera.", translation: "Fotografia" },
        { topic: "Art Forms", term: "music", definition: "Vocal or instrumental sounds.", translation: "Música" },
        { topic: "Art Forms", term: "dance", definition: "Rhythmic movement to music.", translation: "Dança" },
        { topic: "Art Forms", term: "theater", definition: "A play or other activity presented on stage.", translation: "Teatro" },
        { topic: "Art Forms", term: "literature", definition: "Written works of superior merit.", translation: "Literatura" },
        { topic: "Works", term: "masterpiece", definition: "A work of outstanding artistry.", translation: "Obra-prima" },
        { topic: "Works", term: "exhibition", definition: "A public display of art.", translation: "Exposição" },
        { topic: "Works", term: "performance", definition: "An act of presenting a play or concert.", translation: "Apresentação" },

        // 2A: People, Places & Concepts
        { topic: "People", term: "artist", definition: "A person who produces paintings or drawings.", translation: "Artista" },
        { topic: "People", term: "painter", definition: "An artist who paints pictures.", translation: "Pintor(a)" },
        { topic: "People", term: "photographer", definition: "A person who takes photographs.", translation: "Fotógrafo(a)" },
        { topic: "People", term: "musician", definition: "A person who plays a musical instrument.", translation: "Músico(a)" },
        { topic: "People", term: "writer", definition: "A person who writes books or articles.", translation: "Escritor(a)" },
        { topic: "Places", term: "museum", definition: "A building exhibiting objects of historical/artistic interest.", translation: "Museu" },
        { topic: "Places", term: "art-gallery", definition: "A room or building for the display of art.", translation: "Galeria de arte" },
        { topic: "Places", term: "concert-hall", definition: "A public building designed for concerts.", translation: "Casa de shows" },
        { topic: "Places", term: "studio", definition: "A room where an artist or musician works.", translation: "Estúdio" },
        { topic: "Concepts", term: "creativity", definition: "The use of original ideas.", translation: "Criatividade" },
        { topic: "Concepts", term: "inspiration", definition: "Being mentally stimulated to do something creative.", translation: "Inspiração" },
        { topic: "Concepts", term: "talent", definition: "Natural aptitude or skill.", translation: "Talento" },

        // 2A: Verbs & Adjectives
        { topic: "Verbs", term: "to-create", definition: "To bring something into existence.", translation: "Criar" },
        { topic: "Verbs", term: "to-design", definition: "To decide upon the look and functioning of something.", translation: "Projetar" },
        { topic: "Verbs", term: "to-paint", definition: "To apply paint to a surface.", translation: "Pintar" },
        { topic: "Verbs", term: "to-perform", definition: "To present entertainment to an audience.", translation: "Apresentar-se" },
        { topic: "Verbs", term: "to-express", definition: "To convey a thought or feeling.", translation: "Expressar" },
        { topic: "Verbs", term: "to-appreciate", definition: "To recognize the full worth of something.", translation: "Apreciar" },
        { topic: "Adjectives", term: "artistic", definition: "Having natural creative skill.", translation: "Artístico(a)" },
        { topic: "Adjectives", term: "talented", definition: "Having a natural aptitude or skill.", translation: "Talentoso(a)" },
        { topic: "Adjectives", term: "impressive", definition: "Evoking admiration through quality or skill.", translation: "Impressionante" },
        { topic: "Adjectives", term: "thought-provoking", definition: "Stimulating careful consideration.", translation: "Instigante" },
        { topic: "Adjectives", term: "modern", definition: "Relating to the present or recent times.", translation: "Moderno(a)" },
        { topic: "Adjectives", term: "classical", definition: "Representing an exemplary standard within a traditional form.", translation: "Clássico(a)" },

        // 3A: Expressions
        { topic: "Expressions", term: "visual-arts", definition: "Art forms that create visual works.", translation: "Artes visuais" },
        { topic: "Expressions", term: "performing-arts", definition: "Forms of creative activity performed in front of an audience.", translation: "Artes cênicas" },
        { topic: "Expressions", term: "work-of-art", definition: "A product of the fine arts.", translation: "Uma obra de arte" },
        { topic: "Expressions", term: "masterpiece", definition: "A work of outstanding artistry.", translation: "Uma obra-prima" },
        { topic: "Expressions", term: "sculpture", definition: "The art of making 3D forms.", translation: "Uma escultura" },
        { topic: "Expressions", term: "play", definition: "A dramatic work for the stage.", translation: "Uma peça de teatro" },
        
        { topic: "Expressions", term: "to-be-creative", definition: "To have the ability to invent original ideas.", translation: "Ser criativo" },
        { topic: "Expressions", term: "take-up-hobby", definition: "To begin an artistic leisure activity.", translation: "Começar um hobby criativo" },
        { topic: "Expressions", term: "enjoy-painting", definition: "Stating pleasure in creating art.", translation: "Eu gosto de pintar" },
        { topic: "Expressions", term: "play-instrument", definition: "To produce music using a specialized device.", translation: "Tocar um instrumento musical" },
        { topic: "Expressions", term: "express-yourself", definition: "To communicate your feelings.", translation: "Se expressar" },
        { topic: "Expressions", term: "are-you-creative", definition: "Asking if someone is imaginative.", translation: "Você é uma pessoa criativa?" },
        
        { topic: "Expressions", term: "go-art-gallery", definition: "To visit a room displaying art.", translation: "Ir a uma galeria de arte" },
        { topic: "Expressions", term: "see-exhibition", definition: "To view a public display of art.", translation: "Ver uma exposição" },
        { topic: "Expressions", term: "go-theater", definition: "To attend a dramatic performance.", translation: "Ir ao teatro" },
        { topic: "Expressions", term: "local-artist", definition: "A creative person from the nearby community.", translation: "Um artista local" },
        { topic: "Expressions", term: "what-kind-art", definition: "Asking for someone's preferences in art.", translation: "Que tipo de arte você gosta?" },
        { topic: "Expressions", term: "modern-art-difficult", definition: "Stating that contemporary art is confusing.", translation: "Acho a arte moderna difícil de entender." },

        // Additional Context Words
        { topic: "Context", term: "creative", definition: "Relating to or involving the imagination or original ideas.", translation: "Criativo(a)" }
    ]
});