/**
 * English Block Assembling - LESSON DATA: Topic 13
 * Topic: Education and Learning
 * Level: Upper A2 ~ Lower B1
 */

window.initLesson({
    // --- METADATA ---
    lessonId: "lesson-13",
    block: "2",
    topicTitle: "13 - Education and Learning",

    steps:[
        // ======================================================
        // STEP 0: INTRO & CAN-DO
        // ======================================================
        {
            title: "Intro & Can-Do",
            objectives: "• Talk about educational experiences and different [school subjects](tooltip:subject).<br>• Describe [studying habits](tooltip:studying-habits) and preparing for [exams](tooltip:exam).<br>• Understand vocabulary related to [higher education](tooltip:higher-education) and degrees.<br>• Discuss your [future plans](tooltip:future-plans) and career path.",
            welcome: "Welcome to Lesson 13! Education is a continuous journey. In this lesson, we will explore the vocabulary needed to talk about school, university, and learning. You will practice describing your favorite subjects, your study habits, and your plans for the future. Let's start learning!",
            audio: {
                objectives: "TTS: In this lesson, you will learn to: Talk about educational experiences and different school subjects. Describe studying habits and preparing for exams. Understand vocabulary related to higher education and degrees. Discuss your future plans and career path.",
                welcome: "TTS: Welcome to Lesson 13! Education is a continuous journey. In this lesson, we will explore the vocabulary needed to talk about school, university, and learning. You will practice describing your favorite subjects, your study habits, and your plans for the future. Let's start learning!"
            }
        },

        // ======================================================
        // STEP 1: CONTEXT DIALOGUE
        // ======================================================
        {
            title: "Context Dialogue",
            context: "Sarah and Mark bump into each other at the university library and talk about their studies.",
            contextAudio: "TTS: Sarah: Hi Mark! What are you doing in the library so late? Mark: Hey Sarah. I have a big exam next week, so I need to study hard. Sarah: Oh, I understand. What do you study again? Mark: I'm majoring in engineering. It is a very difficult course. Sarah: I bet! I'm studying Literature. We have to hand in our essays by Friday. Mark: That sounds interesting, but I was never good at writing. What are your plans after you graduate? Sarah: I want to continue my studies and get a Master's degree. Mark: That's a great choice. I think I will apply for a job right after I get my diploma.",
            dialogue:[
                { speaker: "Sarah", text: "Hi Mark! What are you doing in the [library](tooltip:library) so late?" },
                { speaker: "Mark", text: "Hey Sarah. I have a big [exam](tooltip:exam) next week, so I need to study hard." },
                { speaker: "Sarah", text: "Oh, I understand. What do you study again?" },
                { speaker: "Mark", text: "I'm [majoring in](tooltip:major-in) engineering. It is a very [difficult](tooltip:difficult) [course](tooltip:course)." },
                { speaker: "Sarah", text: "I bet! I'm studying Literature. We have to hand in our [essays](tooltip:essay) by Friday." },
                { speaker: "Mark", text: "That sounds interesting, but I was never good at writing. What are your plans after you [graduate](tooltip:to-graduate)?" },
                { speaker: "Sarah", text: "I want to continue my studies and get a [Master's degree](tooltip:masters-degree)." },
                { speaker: "Mark", text: "That's a great choice. I think I will apply for a job right after I get my [diploma](tooltip:diploma)." }
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
                    title: "Places, People & Subjects",
                    audio: "TTS: Professor. Classmate. Principal. Campus. Library. Laboratory. Mathematics. Science. History. Geography. Literature. Physical Education.",
                    items:[
                        { term: "Professor", trans: "Professor(a) universitário(a)" },
                        { term: "Classmate", trans: "Colega de classe" },
                        { term: "Principal", trans: "Diretor(a) de escola" },
                        { term: "Campus", trans: "Campus (área da universidade)" },
                        { term: "Library", trans: "Biblioteca" },
                        { term: "Laboratory (lab)", trans: "Laboratório" },
                        { term: "Mathematics (Math)", trans: "Matemática" },
                        { term: "Science", trans: "Ciência(s)" },
                        { term: "History", trans: "História" },
                        { term: "Geography", trans: "Geografia" },
                        { term: "Literature", trans: "Literatura" },
                        { term: "Physical Education (P.E.)", trans: "Educação Física" }
                    ]
                },
                {
                    title: "Academic Terms",
                    audio: "TTS: Course. Semester. Assignment. Essay. Presentation. Exam. Grade. Degree. Diploma. Scholarship. Tuition fees. Lecture.",
                    items:[
                        { term: "Course", trans: "Curso / Disciplina" },
                        { term: "Semester", trans: "Semestre" },
                        { term: "Assignment", trans: "Tarefa / Trabalho" },
                        { term: "Essay", trans: "Redação / Ensaio" },
                        { term: "Presentation", trans: "Apresentação" },
                        { term: "Exam", trans: "Exame / Prova" },
                        { term: "Grade (mark)", trans: "Nota" },
                        { term: "Degree", trans: "Grau acadêmico / Diploma universitário" },
                        { term: "Diploma", trans: "Diploma / Certificado" },
                        { term: "Scholarship", trans: "Bolsa de estudos" },
                        { term: "Tuition fees", trans: "Mensalidades (taxas de ensino)" },
                        { term: "Lecture", trans: "Aula expositiva / Palestra" }
                    ]
                },
                {
                    title: "Verbs & Adjectives",
                    audio: "TTS: To study. To teach. To attend. To review. To pass. To fail. To graduate. To enroll. Difficult. Boring. Compulsory. Optional.",
                    items:[
                        { term: "To study", trans: "Estudar" },
                        { term: "To teach", trans: "Ensinar / Dar aula" },
                        { term: "To attend", trans: "Frequentar / Comparecer" },
                        { term: "To review", trans: "Revisar" },
                        { term: "To pass", trans: "Passar (ser aprovado)" },
                        { term: "To fail", trans: "Reprovar / Falhar" },
                        { term: "To graduate", trans: "Formar-se / Graduar-se" },
                        { term: "To enroll", trans: "Matricular-se / Inscrever-se" },
                        { term: "Difficult", trans: "Difícil" },
                        { term: "Boring", trans: "Entediante / Chato" },
                        { term: "Compulsory", trans: "Obrigatório" },
                        { term: "Optional", trans: "Opcional" }
                    ]
                }
            ],

            // --- 2B: EXAMPLES ---
            exampleGroups:[
                {
                    title: "Places, People & Subjects",
                    audio: "TTS: The professor explained the theory clearly. My classmate helped me with the project. The principal announced a new school rule. The university campus is huge and green. I borrowed three books from the library. We did chemistry experiments in the laboratory. Mathematics is all about numbers and logic. In science class, we study biology and physics. History teaches us about past events. Geography helps us understand world maps. I love reading classic books in literature. We play sports in physical education.",
                    items:[
                        { term: "Professor", sent: "The professor explained the theory clearly.", trans: "O professor explicou a teoria claramente." },
                        { term: "Classmate", sent: "My classmate helped me with the project.", trans: "Meu colega de classe me ajudou com o projeto." },
                        { term: "Principal", sent: "The principal announced a new school rule.", trans: "O diretor anunciou uma nova regra da escola." },
                        { term: "Campus", sent: "The university campus is huge and green.", trans: "O campus da universidade é enorme e verde." },
                        { term: "Library", sent: "I borrowed three books from the library.", trans: "Peguei três livros emprestados da biblioteca." },
                        { term: "Laboratory (lab)", sent: "We did chemistry experiments in the laboratory.", trans: "Fizemos experimentos de química no laboratório." },
                        { term: "Mathematics (Math)", sent: "Mathematics is all about numbers and logic.", trans: "A matemática é sobre números e lógica." },
                        { term: "Science", sent: "In science class, we study biology and physics.", trans: "Na aula de ciências, nós estudamos biologia e física." },
                        { term: "History", sent: "History teaches us about past events.", trans: "A história nos ensina sobre eventos passados." },
                        { term: "Geography", sent: "Geography helps us understand world maps.", trans: "A geografia nos ajuda a entender os mapas-múndi." },
                        { term: "Literature", sent: "I love reading classic books in literature.", trans: "Eu amo ler livros clássicos em literatura." },
                        { term: "Physical Education (P.E.)", sent: "We play sports in physical education.", trans: "Nós praticamos esportes em educação física." }
                    ]
                },
                {
                    title: "Academic Terms",
                    audio: "TTS: I am taking a very interesting online course. The semester ends in December. The teacher gave us a difficult assignment. I have to write a five-page essay by Friday. She gave a great presentation in front of the class. The final exam will cover all the chapters. I got a high grade on my math test. He received his bachelor's degree in engineering. She hung her high school diploma on the wall. He won a scholarship to pay for his studies. The university tuition fees increased this year. The professor gave a lecture on modern art.",
                    items:[
                        { term: "Course", sent: "I am taking a very interesting online course.", trans: "Estou fazendo um curso online muito interessante." },
                        { term: "Semester", sent: "The semester ends in December.", trans: "O semestre termina em dezembro." },
                        { term: "Assignment", sent: "The teacher gave us a difficult assignment.", trans: "O professor nos deu uma tarefa difícil." },
                        { term: "Essay", sent: "I have to write a five-page essay by Friday.", trans: "Eu tenho que escrever uma redação de cinco páginas até sexta-feira." },
                        { term: "Presentation", sent: "She gave a great presentation in front of the class.", trans: "Ela fez uma ótima apresentação na frente da turma." },
                        { term: "Exam", sent: "The final exam will cover all the chapters.", trans: "A prova final cobrirá todos os capítulos." },
                        { term: "Grade (mark)", sent: "I got a high grade on my math test.", trans: "Tirei uma nota alta no meu teste de matemática." },
                        { term: "Degree", sent: "He received his bachelor's degree in engineering.", trans: "Ele recebeu seu diploma de bacharel em engenharia." },
                        { term: "Diploma", sent: "She hung her high school diploma on the wall.", trans: "Ela pendurou o diploma do ensino médio na parede." },
                        { term: "Scholarship", sent: "He won a scholarship to pay for his studies.", trans: "Ele ganhou uma bolsa de estudos para pagar seus estudos." },
                        { term: "Tuition fees", sent: "The university tuition fees increased this year.", trans: "As mensalidades da universidade aumentaram este ano." },
                        { term: "Lecture", sent: "The professor gave a lecture on modern art.", trans: "O professor deu uma palestra sobre arte moderna." }
                    ]
                },
                {
                    title: "Verbs & Adjectives",
                    audio: "TTS: You need to study hard to succeed. My mother used to teach French. I have to attend class every morning. We should review our notes before the test. I studied a lot, so I hope to pass. If you don't do your homework, you might fail. She will graduate from university next year. I want to enroll in a photography course. Math can be very difficult for some students. The movie was so boring that I fell asleep. Math and English are compulsory subjects. Taking a second language is optional.",
                    items:[
                        { term: "To study", sent: "You need to study hard to succeed.", trans: "Você precisa estudar duro para ter sucesso." },
                        { term: "To teach", sent: "My mother used to teach French.", trans: "Minha mãe ensinava francês." },
                        { term: "To attend", sent: "I have to attend class every morning.", trans: "Eu tenho que frequentar a aula todas as manhãs." },
                        { term: "To review", sent: "We should review our notes before the test.", trans: "Nós devemos revisar nossas anotações antes do teste." },
                        { term: "To pass", sent: "I studied a lot, so I hope to pass.", trans: "Eu estudei muito, então espero passar." },
                        { term: "To fail", sent: "If you don't do your homework, you might fail.", trans: "Se você não fizer o dever de casa, pode reprovar." },
                        { term: "To graduate", sent: "She will graduate from university next year.", trans: "Ela vai se formar na universidade no ano que vem." },
                        { term: "To enroll", sent: "I want to enroll in a photography course.", trans: "Eu quero me matricular em um curso de fotografia." },
                        { term: "Difficult", sent: "Math can be very difficult for some students.", trans: "A matemática pode ser muito difícil para alguns alunos." },
                        { term: "Boring", sent: "The movie was so boring that I fell asleep.", trans: "O filme foi tão entediante que eu adormeci." },
                        { term: "Compulsory", sent: "Math and English are compulsory subjects.", trans: "Matemática e Inglês são matérias obrigatórias." },
                        { term: "Optional", sent: "Taking a second language is optional.", trans: "Fazer uma segunda língua é opcional." }
                    ]
                }
            ],

            // --- 2C: PRACTICE ---
            drillGroups:[
                {
                    title: "Places, People & Subjects",
                    drills:[
                        { q: "A teacher at a university is a ________.", options:[{t: "Principal", c: false}, {t: "Professor", c: true}, {t: "Classmate", c: false}, {t: "Library", c: false}], type: "mcq" },
                        { q: "A person who is in the same class as you is your ________.", options:[{t: "Classmate", c: true}, {t: "Professor", c: false}, {t: "Principal", c: false}, {t: "Campus", c: false}], type: "mcq" },
                        { q: "The person in charge of a school is the ________.", options:[{t: "Classmate", c: false}, {t: "Professor", c: false}, {t: "Principal", c: true}, {t: "Laboratory", c: false}], type: "mcq" },
                        { q: "The grounds and buildings of a university are called the ________.", options:[{t: "Library", c: false}, {t: "Campus", c: true}, {t: "Laboratory", c: false}, {t: "Literature", c: false}], type: "mcq" },
                        { q: "A place where you can borrow books is the ________.", options:[{t: "Library", c: true}, {t: "Laboratory", c: false}, {t: "Campus", c: false}, {t: "Principal", c: false}], type: "mcq" },
                        { q: "A room equipped for scientific experiments is a ________.", options:[{t: "Library", c: false}, {t: "Campus", c: false}, {t: "Laboratory (lab)", c: true}, {t: "Classmate", c: false}], type: "mcq" },
                        { q: "The study of numbers, shapes, and patterns is ________.", options:[{t: "History", c: false}, {t: "Mathematics (Math)", c: true}, {t: "Literature", c: false}, {t: "Geography", c: false}], type: "mcq" },
                        { q: "The study of the physical and natural world is ________.", options:[{t: "Geography", c: false}, {t: "Literature", c: false}, {t: "Science", c: true}, {t: "Mathematics", c: false}], type: "mcq" },
                        { q: "The study of past events is ________.", options:[{t: "History", c: true}, {t: "Science", c: false}, {t: "Mathematics", c: false}, {t: "Literature", c: false}], type: "mcq" },
                        { q: "The study of places and the relationships between people and their environments is ________.", options:[{t: "History", c: false}, {t: "Literature", c: false}, {t: "Geography", c: true}, {t: "Science", c: false}], type: "mcq" },
                        { q: "The study of written works, especially those considered of superior merit, is ________.", options:[{t: "Literature", c: true}, {t: "Geography", c: false}, {t: "History", c: false}, {t: "Mathematics", c: false}], type: "mcq" },
                        { q: "Classes focusing on sports and exercise are called ________.", options:[{t: "Physical Education (P.E.)", c: true}, {t: "Science", c: false}, {t: "History", c: false}, {t: "Literature", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Academic Terms",
                    drills:[
                        { q: "A series of lessons in a particular subject is a ________.", options:[{t: "Course", c: true}, {t: "Degree", c: false}, {t: "Scholarship", c: false}, {t: "Tuition fees", c: false}], type: "mcq" },
                        { q: "A half-year term in a school or college is a ________.", options:[{t: "Semester", c: true}, {t: "Lecture", c: false}, {t: "Assignment", c: false}, {t: "Diploma", c: false}], type: "mcq" },
                        { q: "A task or piece of work allocated to someone is an ________.", options:[{t: "Assignment", c: true}, {t: "Degree", c: false}, {t: "Semester", c: false}, {t: "Scholarship", c: false}], type: "mcq" },
                        { q: "A short piece of writing on a particular subject is an ________.", options:[{t: "Essay", c: true}, {t: "Lecture", c: false}, {t: "Grade", c: false}, {t: "Semester", c: false}], type: "mcq" },
                        { q: "A speech or talk given to an audience, often with visual aids, is a ________.", options:[{t: "Presentation", c: true}, {t: "Grade", c: false}, {t: "Diploma", c: false}, {t: "Semester", c: false}], type: "mcq" },
                        { q: "A formal test of a person's knowledge is an ________.", options:[{t: "Exam", c: true}, {t: "Assignment", c: false}, {t: "Scholarship", c: false}, {t: "Tuition fees", c: false}], type: "mcq" },
                        { q: "A mark indicating the quality of a student's work is a ________.", options:[{t: "Grade (mark)", c: true}, {t: "Lecture", c: false}, {t: "Course", c: false}, {t: "Semester", c: false}], type: "mcq" },
                        { q: "An academic rank conferred by a college or university is a ________.", options:[{t: "Degree", c: true}, {t: "Assignment", c: false}, {t: "Essay", c: false}, {t: "Grade", c: false}], type: "mcq" },
                        { q: "A certificate awarded by an educational establishment is a ________.", options:[{t: "Diploma", c: true}, {t: "Tuition fees", c: false}, {t: "Lecture", c: false}, {t: "Semester", c: false}], type: "mcq" },
                        { q: "Financial aid awarded to a student is a ________.", options:[{t: "Scholarship", c: true}, {t: "Grade", c: false}, {t: "Assignment", c: false}, {t: "Course", c: false}], type: "mcq" },
                        { q: "The money charged by a university or school for instruction is called ________.", options:[{t: "Tuition fees", c: true}, {t: "Degree", c: false}, {t: "Scholarship", c: false}, {t: "Diploma", c: false}], type: "mcq" },
                        { q: "An educational talk to an audience, especially to students, is a ________.", options:[{t: "Lecture", c: true}, {t: "Grade", c: false}, {t: "Assignment", c: false}, {t: "Tuition fees", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Verbs & Adjectives",
                    drills:[
                        { q: "The verb meaning 'to devote time to learning' is ________.", options:[{t: "To study", c: true}, {t: "To fail", c: false}, {t: "To teach", c: false}, {t: "To review", c: false}], type: "mcq" },
                        { q: "The verb meaning 'to impart knowledge' is ________.", options:[{t: "To study", c: false}, {t: "To teach", c: true}, {t: "To attend", c: false}, {t: "To fail", c: false}], type: "mcq" },
                        { q: "The verb meaning 'to be present at an event or class' is ________.", options:[{t: "To attend", c: true}, {t: "To fail", c: false}, {t: "To graduate", c: false}, {t: "To teach", c: false}], type: "mcq" },
                        { q: "The verb meaning 'to examine or assess something again' is ________.", options:[{t: "To review", c: true}, {t: "To fail", c: false}, {t: "To enroll", c: false}, {t: "To teach", c: false}], type: "mcq" },
                        { q: "To be successful in an exam is to ________.", options:[{t: "To fail", c: false}, {t: "To pass", c: true}, {t: "To attend", c: false}, {t: "To review", c: false}], type: "mcq" },
                        { q: "To be unsuccessful in an exam is to ________.", options:[{t: "To pass", c: false}, {t: "To fail", c: true}, {t: "To enroll", c: false}, {t: "To teach", c: false}], type: "mcq" },
                        { q: "To successfully complete a course of study and receive a degree is to ________.", options:[{t: "To graduate", c: true}, {t: "To fail", c: false}, {t: "To attend", c: false}, {t: "To review", c: false}], type: "mcq" },
                        { q: "To officially register as a member of an institution or student on a course is to ________.", options:[{t: "To enroll", c: true}, {t: "To pass", c: false}, {t: "To fail", c: false}, {t: "To teach", c: false}], type: "mcq" },
                        { q: "Something that is hard to do or understand is ________.", options:[{t: "Difficult", c: true}, {t: "Boring", c: false}, {t: "Optional", c: false}, {t: "Compulsory", c: false}], type: "mcq" },
                        { q: "Something that is not interesting is ________.", options:[{t: "Difficult", c: false}, {t: "Boring", c: true}, {t: "Compulsory", c: false}, {t: "Optional", c: false}], type: "mcq" },
                        { q: "Something that is required by law or a rule is ________.", options:[{t: "Optional", c: false}, {t: "Compulsory", c: true}, {t: "Boring", c: false}, {t: "Difficult", c: false}], type: "mcq" },
                        { q: "Something that is available to be chosen but not mandatory is ________.", options:[{t: "Compulsory", c: false}, {t: "Optional", c: true}, {t: "Boring", c: false}, {t: "Difficult", c: false}], type: "mcq" }
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
                    title: "Talking About School & Habits",
                    audio: "TTS: Go to school. Primary school. High school. My favorite subject is. To be good at. Do your homework.",
                    explanation: "Phrases used to discuss school stages, preferences, and basic academic responsibilities.<br><span style='color:var(--primary-blue); font-style:italic;'>(Frases usadas para discutir fases da escola, preferências e responsabilidades acadêmicas básicas.)</span>",
                    samples:[
                        { en: "I wake up early to <b>go to school</b>.", pt: "<span style='color:var(--primary-blue)'>(Eu acordo cedo para ir à escola.)</span>" },
                        { en: "Kids start learning reading in <b>primary/elementary school</b>.", pt: "<span style='color:var(--primary-blue)'>(As crianças começam a aprender a ler na escola primária/ensino fundamental.)</span>" },
                        { en: "Teenagers face many challenges in <b>secondary/high school</b>.", pt: "<span style='color:var(--primary-blue)'>(Adolescentes enfrentam muitos desafios no ensino médio.)</span>" },
                        { en: "<b>My favorite subject is</b> geography.", pt: "<span style='color:var(--primary-blue)'>(Minha matéria favorita é geografia.)</span>" },
                        { en: "She seems <b>to be good at</b> math.", pt: "<span style='color:var(--primary-blue)'>(Ela parece ser boa em matemática.)</span>" },
                        { en: "You must <b>do your homework</b> every day.", pt: "<span style='color:var(--primary-blue)'>(Você deve fazer seu dever de casa todos os dias.)</span>" }
                    ]
                },
                {
                    title: "Studying & Exams",
                    audio: "TTS: Study for a test. Take notes. Write an essay. Take an exam. Pass an exam. Get good grades.",
                    explanation: "Phrases commonly used during the preparation and execution of school evaluations.<br><span style='color:var(--primary-blue); font-style:italic;'>(Frases comumente usadas durante a preparação e execução de avaliações escolares.)</span>",
                    samples:[
                        { en: "I need to <b>study for a test</b> tonight.", pt: "<span style='color:var(--primary-blue)'>(Eu preciso estudar para um teste esta noite.)</span>" },
                        { en: "It helps to <b>take notes</b> during the lecture.", pt: "<span style='color:var(--primary-blue)'>(Ajuda fazer anotações durante a aula expositiva.)</span>" },
                        { en: "We have to <b>write an essay</b> about the revolution.", pt: "<span style='color:var(--primary-blue)'>(Temos que escrever uma redação sobre a revolução.)</span>" },
                        { en: "All students will <b>take an exam</b> on Friday.", pt: "<span style='color:var(--primary-blue)'>(Todos os alunos farão um exame na sexta-feira.)</span>" },
                        { en: "I hope I <b>pass an exam</b> this time.", pt: "<span style='color:var(--primary-blue)'>(Espero passar em um exame desta vez.)</span>" },
                        { en: "If you study hard, you will <b>get good grades</b>.", pt: "<span style='color:var(--primary-blue)'>(Se você estudar bastante, tirará boas notas.)</span>" }
                    ]
                },
                {
                    title: "Higher Education & Future",
                    audio: "TTS: Apply to a university. Major in. Get a degree. What do you want to be. Decide on a career path. Continue your studies.",
                    explanation: "Expressions for discussing college applications, university paths, and professional ambitions.<br><span style='color:var(--primary-blue); font-style:italic;'>(Expressões para discutir candidaturas a faculdades, caminhos universitários e ambições profissionais.)</span>",
                    samples:[
                        { en: "I will <b>apply to a university</b> in London.", pt: "<span style='color:var(--primary-blue)'>(Vou me candidatar a uma universidade em Londres.)</span>" },
                        { en: "I will <b>apply for a bachelor's degree in architecture</b> at a university in London.", pt: "<span style='color:var(--primary-blue)'>(Vou me candidatar para um diploma de bacharel em arquitetura em uma universidade em Londres.)</span>" },
                        { en: "I plan to <b>major in</b> computer science.", pt: "<span style='color:var(--primary-blue)'>(Pretendo me especializar/formar em ciência da computação.)</span>" },
                        { en: "It takes four years to <b>get a degree</b>.", pt: "<span style='color:var(--primary-blue)'>(Leva quatro anos para obter um diploma.)</span>" },
                        { en: "<b>What do you want to be</b> when you grow up?", pt: "<span style='color:var(--primary-blue)'>(O que você quer ser quando crescer?)</span>" },
                        { en: "It is hard to <b>decide on a career path</b>.", pt: "<span style='color:var(--primary-blue)'>(É difícil decidir sobre um plano de carreira.)</span>" },
                        { en: "I want to <b>continue your studies</b> and get a PhD.", pt: "<span style='color:var(--primary-blue)'>(Quero continuar seus estudos (meus estudos) e obter um doutorado.)</span>" }
                    ]
                }
            ],

            // --- 3B: DIALOGUES ---
            dialogueGroups:[
                {
                    title: "Dialogue 1: High School Memories",
                    audio: "TTS: Do you miss high school? Sometimes. My favorite subject is history, so I miss those classes. You must to be good at remembering dates! I am.",
                    lines:[
                        { speaker: "John", text: "Do you miss high school?", pt: "(Você sente falta do ensino médio?)" },
                        { speaker: "Anna", text: "Sometimes. My favorite subject is history, so I miss those classes. You must to be good at remembering dates! I am.", pt: "(Às vezes. Minha matéria favorita é história, então sinto falta daquelas aulas. Você deve ser boa em lembrar datas! Eu sou.)" }
                    ]
                },
                {
                    title: "Dialogue 2: College Life",
                    audio: "TTS: It is time to go to school. Can you help me with my homework? Wait, what do you major in again? I major in chemistry. Now let me do your homework in peace! It's my homework, not yours.",
                    lines:[
                        { speaker: "Leo", text: "It is time to go to school. Can you help me with my homework? Wait, what do you major in again?", pt: "(É hora de ir para a escola. Você pode me ajudar com o dever de casa? Espere, em que você se especializa mesmo?)" },
                        { speaker: "Sam", text: "I major in chemistry. Now let me do your homework in peace! It's my homework, not yours.", pt: "(Eu me formo em química. Agora me deixe fazer o seu dever de casa em paz! É meu dever de casa, não seu.)" }
                    ]
                },
                {
                    title: "Dialogue 3: Exam Preparation",
                    audio: "TTS: I have to study for a test tonight. Don't forget to take notes while reading. I also need to write an essay for tomorrow.",
                    lines:[
                        { speaker: "Mia", text: "I have to study for a test tonight. Don't forget to take notes while reading.", pt: "(Tenho que estudar para um teste hoje à noite. Não esqueça de fazer anotações enquanto lê.)" },
                        { speaker: "Jake", text: "I also need to write an essay for tomorrow.", pt: "(Eu também preciso escrever uma redação para amanhã.)" }
                    ]
                },
                {
                    title: "Dialogue 4: Test Results",
                    audio: "TTS: Did you take an exam this morning? Yes, I hope I pass that exam this semester. If you study, you will get good grades.",
                    lines:[
                        { speaker: "Emma", text: "Did you take an exam this morning?", pt: "(Você fez um exame esta manhã?)" },
                        { speaker: "Liam", text: "Yes, I hope I pass that exam this semester. If you study, you will get good grades.", pt: "(Sim, espero passar naquele exame neste semestre. Se você estudar, tirará boas notas.)" }
                    ]
                },
                {
                    title: "Dialogue 5: Applying to College",
                    audio: "TTS: I want to apply to a university soon. That's a big step! Did you decide on a career path? Because I haven't decided yet. It's much harder than in primary school.",
                    lines:[
                        { speaker: "Noah", text: "I want to apply to a university soon.", pt: "(Quero me candidatar a uma universidade em breve.)" },
                        { speaker: "Chloe", text: "That's a big step! Did you decide on a career path? Because I haven't decided yet. It's much harder than in primary school.", pt: "(Esse é um grande passo! Você decidiu sobre um plano de carreira? Porque eu ainda não decidi. É muito mais difícil do que na escola primária.)" }
                    ]
                },
                {
                    title: "Dialogue 6: Future Goals",
                    audio: "TTS: What do you want to be in the future? I want to get a degree in biology. Whoa! Will you work or continue your studies after that?",
                    lines:[
                        { speaker: "Oliver", text: "What do you want to be in the future? I want to get a degree in biology.", pt: "(O que você quer ser no futuro? Quero obter um diploma em biologia.)" },
                        { speaker: "Sophia", text: "Whoa! Will you work or continue your studies after that?", pt: "(Uau! Você vai trabalhar ou continuar seus estudos depois disso?)" }
                    ]
                }
            ],

            // --- 3C: PRACTICE ---
            grammarDrillGroups:[
                {
                    title: "Talking About School & Habits",
                    drills:[
                        { q: "I wake up at 7 AM to _____ to school.", options:[{t: "get", c: false}, {t: "go", c: true}, {t: "be", c: false}, {t: "do", c: false}], type: "mcq" },
                        { q: "Children learn basic math in _____ school.", options:[{t: "high", c: false}, {t: "primary", c: true}, {t: "college", c: false}, {t: "university", c: false}], type: "mcq" },
                        { q: "Teenagers aged 15 usually attend _____ school.", options:[{t: "primary", c: false}, {t: "high", c: true}, {t: "kindergarten", c: false}, {t: "degree", c: false}], type: "mcq" },
                        { q: "My favorite _____ is chemistry.", options:[{t: "object", c: false}, {t: "subject", c: true}, {t: "school", c: false}, {t: "grade", c: false}], type: "mcq" },
                        { q: "She practices every day to be _____ at playing piano.", options:[{t: "good", c: true}, {t: "bad", c: false}, {t: "great", c: false}, {t: "better", c: false}], type: "mcq" },
                        { q: "After class, remember to _____ your homework.", options:[{t: "make", c: false}, {t: "do", c: true}, {t: "write", c: false}, {t: "take", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Studying & Exams",
                    drills:[
                        { q: "I can't go out. I need to _____ for a test.", options:[{t: "read", c: false}, {t: "study", c: true}, {t: "write", c: false}, {t: "pass", c: false}], type: "mcq" },
                        { q: "It is important to _____ notes during the lecture.", options:[{t: "make", c: false}, {t: "take", c: true}, {t: "do", c: false}, {t: "write", c: false}], type: "mcq" },
                        { q: "The teacher asked us to _____ an essay on global warming.", options:[{t: "take", c: false}, {t: "do", c: false}, {t: "write", c: true}, {t: "pass", c: false}], type: "mcq" },
                        { q: "All students must _____ an exam at the end of the year.", options:[{t: "do", c: false}, {t: "make", c: false}, {t: "take", c: true}, {t: "write", c: false}], type: "mcq" },
                        { q: "If you study hard, you will _____ an exam easily.", options:[{t: "fail", c: false}, {t: "pass", c: true}, {t: "take", c: false}, {t: "do", c: false}], type: "mcq" },
                        { q: "My parents are happy when I _____ good grades.", options:[{t: "do", c: false}, {t: "take", c: false}, {t: "get", c: true}, {t: "pass", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Higher Education & Future",
                    drills:[
                        { q: "I will _____ to a university in my hometown for a degree in psychology.", options:[{t: "enroll", c: false}, {t: "apply", c: true}, {t: "major", c: false}, {t: "study", c: false}], type: "mcq" },
                        { q: "I decided to _____ in biology because I love science.", options:[{t: "degree", c: false}, {t: "major", c: true}, {t: "study", c: false}, {t: "graduate", c: false}], type: "mcq" },
                        { q: "After four years of college, you _____ a degree.", options:[{t: "pass", c: false}, {t: "take", c: false}, {t: "get", c: true}, {t: "major", c: false}], type: "mcq" },
                        { q: "_____ do you want to be when you finish school?", options:[{t: "Where", c: false}, {t: "When", c: false}, {t: "What", c: true}, {t: "Who", c: false}], type: "mcq" },
                        { q: "It is hard to _____ on a career path at age 18.", options:[{t: "decide", c: true}, {t: "think", c: false}, {t: "choose", c: false}, {t: "apply", c: false}], type: "mcq" },
                        { q: "After getting a Bachelor's, some people _____ their studies.", options:[{t: "start", c: false}, {t: "graduate", c: false}, {t: "continue", c: true}, {t: "pass", c: false}], type: "mcq" }
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
                { text: "I need to study for a test tonight. ↘", audio: "TTS: I need to study for a test tonight." },
                { text: "What is your favorite subject? ↘", audio: "TTS: What is your favorite subject?" },
                { text: "I want to apply to a university in Canada. ↘", audio: "TTS: I want to apply to a university in Canada." },
                { text: "Are you going to do your homework? ↗", audio: "TTS: Are you going to do your homework?" },
                { text: "She is majoring in computer science. ↘", audio: "TTS: She is majoring in computer science." },
                { text: "Did you pass the math exam? ↗", audio: "TTS: Did you pass the math exam?" },
                { text: "We have to hand in our essays by Friday. ↘", audio: "TTS: We have to hand in our essays by Friday." },
                { text: "What do you want to be in the future? ↘", audio: "TTS: What do you want to be in the future?" },
                { text: "It is hard to decide on a career path. ↘", audio: "TTS: It is hard to decide on a career path." },
                { text: "I hope to get good grades this semester. ↘", audio: "TTS: I hope to get good grades this semester." }
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
                    audio: "TTS: Ben: Did you study for the test? Lily: Yes, I read the book and took notes during the lecture. Ben: I need to do my homework first. Lily: Good luck with your grades!",
                    text: "Ben: Did you [study] for the test?<br>Lily: Yes, I read the book and took [notes] during the lecture.<br>Ben: I need to do my [homework] first.<br>Lily: Good luck with your [grades]!"
                },
                {
                    type: "dropdown",
                    instruction: "Listen to the dialogue about higher education.",
                    audio: "TTS: Mom: Did you apply to a university yet? Alex: Yes, I want to major in history. Mom: Will you get a scholarship? Alex: I hope so, the tuition fees are high.",
                    questions:[
                        { q: "Mom: Did you [apply* | enroll | graduate] to a university yet?", a: "apply" },
                        { q: "Alex: Yes, I want to[major* | pass | teach] in history.", a: "major" },
                        { q: "Mom: Will you get a[scholarship* | diploma | presentation]?", a: "scholarship" },
                        { q: "Alex: I hope so, the [tuition* | degree | course] fees are high.", a: "tuition" }
                    ]
                },
                {
                    type: "audio-choice",
                    instruction: "Listen to the student and professor. What does the professor tell the student to do?",
                    audio: "TTS: Student: Excuse me, Professor, I failed the math exam. What can I do to improve? Professor: You need to review your notes and attend every lecture. Do not miss any classes.",
                    options:[
                        { t: "Write a new essay.", c: false },
                        { t: "Change his major.", c: false },
                        { t: "Review notes and attend every lecture.", c: true },
                        { t: "Drop out of the university.", c: false }
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
                    title: "Dialogue - Planning for College",
                    audio: "TTS: Emma: I can't believe high school is almost over. Noah: Me neither! Are you going to apply to a university? Emma: Yes, I want to get a degree in Science. Noah: That's great. I am not sure yet. It's hard to decide on a career path. Emma: You are very good at literature. Maybe you could major in English? Noah: That is an interesting idea. I will think about it.",
                    body: "<b>Emma:</b> I can't believe [high school](tooltip:high-school) is almost over.<br><b>Noah:</b> Me neither! Are you going to [apply to a university](tooltip:apply-to-university)?<br><b>Emma:</b> Yes, I want to [get a degree](tooltip:get-degree) in [Science](tooltip:science).<br><b>Noah:</b> That's great. I am not sure yet. It's hard to [decide on a career path](tooltip:decide-career).<br><b>Emma:</b> You are very [good at](tooltip:good-at) [literature](tooltip:literature). Maybe you could [major in](tooltip:major-in) English?<br><b>Noah:</b> That is an interesting idea. I will think about it.",
                    questions:[
                        { q: "What does Emma want to get a degree in?", options:[{t: "Literature", c: false}, {t: "Science", c: true}, {t: "Mathematics", c: false}], type: "mcq" },
                        { q: "Why is Noah unsure about his future?", options:[{t: "He failed his exams.", c: false}, {t: "He doesn't want to go to school.", c: false}, {t: "It's hard to decide on a career path.", c: true}], type: "mcq" },
                        { q: "What subject is Noah good at?", options:[{t: "Science", c: false}, {t: "Literature", c: true}, {t: "Geography", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Dialogue - A Difficult Class",
                    audio: "TTS: Mia: I really don't like this history course. Jake: Why? I think the professor is very good. Mia: Yes, but the lectures are boring, and the assignments are difficult. Jake: We have a big essay to write for tomorrow. Did you start? Mia: No, I am going to the library now to take notes. Jake: Good luck! I hope you get good grades.",
                    body: "<b>Mia:</b> I really don't like this [History](tooltip:history) [course](tooltip:course).<br><b>Jake:</b> Why? I think the [professor](tooltip:professor) is very good.<br><b>Mia:</b> Yes, but the [lectures](tooltip:lecture) are [boring](tooltip:boring), and the [assignments](tooltip:assignment) are [difficult](tooltip:difficult).<br><b>Jake:</b> We have a big [essay](tooltip:essay) to write for tomorrow. Did you start?<br><b>Mia:</b> No, I am going to the [library](tooltip:library) now to [take notes](tooltip:take-notes).<br><b>Jake:</b> Good luck! I hope you [get good grades](tooltip:get-good-grades).",
                    questions:[
                        { q: "Why doesn't Mia like the history course?", options:[{t: "The professor is mean.", c: false}, {t: "The lectures are boring and the assignments are difficult.", c: true}, {t: "She hates history.", c: false}], type: "mcq" },
                        { q: "What do Mia and Jake have to do for tomorrow?", options:[{t: "Take an exam.", c: false}, {t: "Give a presentation.", c: false}, {t: "Write a big essay.", c: true}], type: "mcq" },
                        { q: "Where is Mia going to take notes?", options:[{t: "To the laboratory.", c: false}, {t: "To the library.", c: true}, {t: "To the campus café.", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Email - Studying Abroad",
                    audio: "TTS: Subject: My first semester! Hi Lisa, I am writing to you from my new campus! The university is amazing. This semester, I am taking five compulsory courses. My favorite subject is Geography. The tuition fees are expensive, but I got a scholarship! How are your studies going? Best, Carlos. Subject: Re: My first semester! Hi Carlos, That is wonderful news! I am so glad you got a scholarship. I am studying for a test right now. I want to pass an exam to get my diploma soon. Let's talk later! Lisa.",
                    body: "<b>From: Carlos</b><br><b>To: Lisa</b><br>Subject: My first [semester](tooltip:semester)!<br><br>Hi Lisa,<br>I am writing to you from my new [campus](tooltip:campus)! The university is amazing. This semester, I am taking five [compulsory](tooltip:compulsory) courses. [My favorite subject is](tooltip:my-favorite-subject) [Geography](tooltip:geography). The [tuition fees](tooltip:tuition-fees) are expensive, but I got a [scholarship](tooltip:scholarship)! How are your studies going?<br>Best, Carlos.<br><br><b>From: Lisa</b><br><b>To: Carlos</b><br>Subject: Re: My first semester!<br><br>Hi Carlos,<br>That is wonderful news! I am so glad you got a scholarship. I am [studying for a test](tooltip:study-for-test) right now. I want to [pass an exam](tooltip:pass-exam) to get my [diploma](tooltip:diploma) soon. Let's talk later!<br>Lisa.",
                    questions:[
                        { q: "How many compulsory courses is Carlos taking?", options:[{t: "Three.", c: false}, {t: "Five.", c: true}, {t: "None, they are all optional.", c: false}], type: "mcq" },
                        { q: "How is Carlos paying for his expensive tuition fees?", options:[{t: "He works full-time.", c: false}, {t: "His parents are paying.", c: false}, {t: "He got a scholarship.", c: true}], type: "mcq" },
                        { q: "What is Lisa doing right now?", options:[{t: "Studying for a test.", c: true}, {t: "Applying for a university.", c: false}, {t: "Writing an essay.", c: false}], type: "mcq" }
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
                { type: "matching", instruction: "Match the people to their roles/places.", pairs:[
                    { left: "Professor", right: "University teacher", val: "1" },
                    { left: "Classmate", right: "Fellow student", val: "2" },
                    { left: "Principal", right: "Head of a school", val: "3" },
                    { left: "Campus", right: "University grounds", val: "4" }
                ]},
                { type: "matching", instruction: "Match the terms to their definitions.", pairs:[
                    { left: "Scholarship", right: "Financial aid for students", val: "1" },
                    { left: "Tuition fees", right: "Money paid for instruction", val: "2" },
                    { left: "Degree", right: "Academic rank from college", val: "3" },
                    { left: "Semester", right: "Half-year academic term", val: "4" }
                ]},
                { type: "matching", instruction: "Match the school subjects.", pairs:[
                    { left: "Mathematics", right: "Numbers and logic", val: "1" },
                    { left: "History", right: "Past events", val: "2" },
                    { left: "Geography", right: "World maps and places", val: "3" },
                    { left: "Literature", right: "Classic books and reading", val: "4" }
                ]},
                { type: "matching", instruction: "Match the opposites.", pairs:[
                    { left: "To pass", right: "To fail", val: "1" },
                    { left: "Compulsory", right: "Optional", val: "2" },
                    { left: "Difficult", right: "Easy", val: "3" },
                    { left: "Boring", right: "Interesting", val: "4" }
                ]},

                // --- WORD ORDER (5-14) ---
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "school / to / go / I / morning / every / .", correct: "I go to school every morning ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "subject / is / favorite / My / science / .", correct: "My favorite subject is science ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "good / math / at / He / is / .", correct: "He is good at math ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "your / forget / do / to / homework / Don't / .", correct: "Don't forget to do your homework ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "for / test / study / must / We / a / .", correct: "We must study for a test ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "class / take / in / notes / I / always / .", correct: "I always take notes in class ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "exam / I / pass / an / to / want / .", correct: "I want to pass an exam ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "university / to / apply / a / will / She / .", correct: "She will apply to a university ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "major / history / to / in / decided / I / .", correct: "I decided to major in history ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "do / want / What / be / you / to / ?", correct: "What do you want to be ?" },

                // --- CLICKABLE ERROR (15-24) ---
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "I need to [take](error:do) my homework before dinner." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "She wants to [make](error:take) notes during the lecture." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "He is going to[apply](error:enroll) in a photography course next week." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "I hope to [fail](error:pass) the exam so I can graduate." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "My favorite [object](error:subject) in school is Geography." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "She is [majoring](error:good) at mathematics." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "I will apply [to](error:for) a university course next year." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "We must write an [essay](error:exam) about the book." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "It takes four years to [take](error:get) a degree." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "They study in the [library](error:laboratory) to do chemistry experiments." },

                // --- ODD ONE OUT (25-30) ---
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Places)", options:[{t: "Campus", c: false}, {t: "Library", c: false}, {t: "Laboratory", c: false}, {t: "Scholarship", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Subjects)", options:[{t: "Mathematics", c: false}, {t: "Science", c: false}, {t: "Classmate", c: true}, {t: "Geography", c: false}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Adjectives)", options:[{t: "Boring", c: false}, {t: "Difficult", c: false}, {t: "Optional", c: false}, {t: "Degree", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Academic Tasks)", options:[{t: "Assignment", c: false}, {t: "Essay", c: false}, {t: "Presentation", c: false}, {t: "Tuition fees", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Verbs)", options:[{t: "To pass", c: false}, {t: "To fail", c: false}, {t: "To graduate", c: false}, {t: "Principal", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Schools)", options:[{t: "Primary school", c: false}, {t: "High school", c: false}, {t: "University", c: false}, {t: "Semester", c: true}] },

                // --- TRUE / FALSE (31-35) ---
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "A 'scholarship' means you have to pay more money to the university.", correct: "false"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "If a class is 'compulsory', you must take it.", correct: "true"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "You usually 'take notes' to remember what the professor said.", correct: "true"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "To 'fail' an exam means you got a very high grade.", correct: "false"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "You 'major in' a subject when you specialize in it at university.", correct: "true"}] },

                // --- MCQ (36-39) ---
                { type: "mcq", instruction: "Choose the correct phrase.<br>After finishing all your university courses, you ________.", options:[{t: "fail", c: false}, {t: "enroll", c: false}, {t: "graduate", c: true}, {t: "attend", c: false}] },
                { type: "mcq", instruction: "Choose the correct word.<br>The money you pay to the university for your education is called ________.", options:[{t: "scholarship", c: false}, {t: "tuition fees", c: true}, {t: "degree", c: false}, {t: "diploma", c: false}] },
                { type: "mcq", instruction: "Choose the correct verb.<br>Before a big test, you should always ________ your notes.", options:[{t: "fail", c: false}, {t: "review", c: true}, {t: "teach", c: false}, {t: "graduate", c: false}] },
                { type: "mcq", instruction: "Choose the correct phrase.<br>I am not sure what I want to do in the future. It is hard to ________.", options:[{t: "decide on a career path", c: true}, {t: "do my homework", c: false}, {t: "take an exam", c: false}, {t: "go to primary school", c: false}] },

                // --- CATEGORIZE (40) ---
                { type: "categorize", instruction: "Sort the words into Subjects and Academic Terms.", 
                    categories:[{id: "subj", name: "Subjects"}, {id: "terms", name: "Academic Terms"}],
                    items:[
                        {text: "Mathematics", catId: "subj"}, 
                        {text: "History", catId: "subj"}, 
                        {text: "Literature", catId: "subj"}, 
                        {text: "Semester", catId: "terms"}, 
                        {text: "Assignment", catId: "terms"}, 
                        {text: "Scholarship", catId: "terms"}
                    ] 
                }
            ]
        },

        // ======================================================
        // STEP 8: WRITING PRACTICE
        // ======================================================
        {
            title: "Writing Practice",
            instruction: "Write a short paragraph (5-7 sentences) about your educational background or your current studies. Mention what school or university you go/went to, what your favorite subjects are, your study habits, and what you want to be in the future.",
            example: "I am currently a student at a university in my city. I am majoring in Science, and my favorite subject is Biology. My study habits are very good because I always take notes in class and do my homework on time. Next week, I have a difficult exam to pass. In the future, I want to be a doctor, so I need to continue my studies for many years.",
            prompts:[
                "State where you study or studied (e.g., I go to high school, I attend university).",
                "Mention your favorite subject or major.",
                "Describe how you prepare for exams or assignments.",
                "Explain your plans for your future career path."
            ]
        },

        // ======================================================
        // STEP 9: FLASHCARDS
        // ======================================================
        {
            title: "Flashcards",
            items:[
                // 2A Items (36 items)
                { term: "Professor", definition: "A university teacher.", defTrans: "Professor(a) universitário(a)", example: "The professor explained the theory clearly.", audioFront: "TTS: Professor", audioBack: "TTS: The professor explained the theory clearly." },
                { term: "Classmate", definition: "A fellow student in one's class.", defTrans: "Colega de classe", example: "My classmate helped me with the project.", audioFront: "TTS: Classmate", audioBack: "TTS: My classmate helped me with the project." },
                { term: "Principal", definition: "The head of a school.", defTrans: "Diretor(a) de escola", example: "The principal announced a new school rule.", audioFront: "TTS: Principal", audioBack: "TTS: The principal announced a new school rule." },
                { term: "Campus", definition: "The grounds and buildings of a university or college.", defTrans: "Campus", example: "The university campus is huge and green.", audioFront: "TTS: Campus", audioBack: "TTS: The university campus is huge and green." },
                { term: "Library", definition: "A building or room containing collections of books.", defTrans: "Biblioteca", example: "I borrowed three books from the library.", audioFront: "TTS: Library", audioBack: "TTS: I borrowed three books from the library." },
                { term: "Laboratory (lab)", definition: "A room equipped for scientific experiments.", defTrans: "Laboratório", example: "We did chemistry experiments in the laboratory.", audioFront: "TTS: Laboratory", audioBack: "TTS: We did chemistry experiments in the laboratory." },
                { term: "Mathematics (Math)", definition: "The abstract science of number, quantity, and space.", defTrans: "Matemática", example: "Mathematics is all about numbers and logic.", audioFront: "TTS: Mathematics", audioBack: "TTS: Mathematics is all about numbers and logic." },
                { term: "Science", definition: "The intellectual and practical activity encompassing the systematic study of the physical and natural world.", defTrans: "Ciência(s)", example: "In science class, we study biology and physics.", audioFront: "TTS: Science", audioBack: "TTS: In science class, we study biology and physics." },
                { term: "History", definition: "The study of past events.", defTrans: "História", example: "History teaches us about past events.", audioFront: "TTS: History", audioBack: "TTS: History teaches us about past events." },
                { term: "Geography", definition: "The study of the physical features of the earth and its atmosphere.", defTrans: "Geografia", example: "Geography helps us understand world maps.", audioFront: "TTS: Geography", audioBack: "TTS: Geography helps us understand world maps." },
                { term: "Literature", definition: "Written works, especially those considered of superior or lasting artistic merit.", defTrans: "Literatura", example: "I love reading classic books in literature.", audioFront: "TTS: Literature", audioBack: "TTS: I love reading classic books in literature." },
                { term: "Physical Education (P.E.)", definition: "Instruction in physical exercise and games.", defTrans: "Educação Física", example: "We play sports in physical education.", audioFront: "TTS: Physical Education", audioBack: "TTS: We play sports in physical education." },
                
                { term: "Course", definition: "A series of lectures or lessons in a particular subject.", defTrans: "Curso / Disciplina", example: "I am taking a very interesting online course.", audioFront: "TTS: Course", audioBack: "TTS: I am taking a very interesting online course." },
                { term: "Semester", definition: "A half-year term in a school or college.", defTrans: "Semestre", example: "The semester ends in December.", audioFront: "TTS: Semester", audioBack: "TTS: The semester ends in December." },
                { term: "Assignment", definition: "A task or piece of work allocated to someone as part of a course of study.", defTrans: "Tarefa / Trabalho", example: "The teacher gave us a difficult assignment.", audioFront: "TTS: Assignment", audioBack: "TTS: The teacher gave us a difficult assignment." },
                { term: "Essay", definition: "A short piece of writing on a particular subject.", defTrans: "Redação / Ensaio", example: "I have to write a five-page essay by Friday.", audioFront: "TTS: Essay", audioBack: "TTS: I have to write a five-page essay by Friday." },
                { term: "Presentation", definition: "A speech or talk in which a new product, idea, or piece of work is shown and explained.", defTrans: "Apresentação", example: "She gave a great presentation in front of the class.", audioFront: "TTS: Presentation", audioBack: "TTS: She gave a great presentation in front of the class." },
                { term: "Exam", definition: "A formal test of a person's knowledge or proficiency in a subject or skill.", defTrans: "Exame / Prova", example: "The final exam will cover all the chapters.", audioFront: "TTS: Exam", audioBack: "TTS: The final exam will cover all the chapters." },
                { term: "Grade (mark)", definition: "A mark indicating the quality of a student's work.", defTrans: "Nota", example: "I got a high grade on my math test.", audioFront: "TTS: Grade", audioBack: "TTS: I got a high grade on my math test." },
                { term: "Degree", definition: "An academic rank conferred by a college or university after examination or after completion of a course.", defTrans: "Grau acadêmico / Diploma universitário", example: "He received his bachelor's degree in engineering.", audioFront: "TTS: Degree", audioBack: "TTS: He received his bachelor's degree in engineering." },
                { term: "Diploma", definition: "A certificate awarded by an educational establishment to show that someone has successfully completed a course of study.", defTrans: "Diploma / Certificado", example: "She hung her high school diploma on the wall.", audioFront: "TTS: Diploma", audioBack: "TTS: She hung her high school diploma on the wall." },
                { term: "Scholarship", definition: "A grant or payment made to support a student's education.", defTrans: "Bolsa de estudos", example: "He won a scholarship to pay for his studies.", audioFront: "TTS: Scholarship", audioBack: "TTS: He won a scholarship to pay for his studies." },
                { term: "Tuition fees", definition: "Money charged by a university or school for teaching.", defTrans: "Mensalidades (taxas de ensino)", example: "The university tuition fees increased this year.", audioFront: "TTS: Tuition fees", audioBack: "TTS: The university tuition fees increased this year." },
                { term: "Lecture", definition: "An educational talk to an audience, especially to students in a university.", defTrans: "Aula expositiva / Palestra", example: "The professor gave a lecture on modern art.", audioFront: "TTS: Lecture", audioBack: "TTS: The professor gave a lecture on modern art." },
                
                { term: "To study", definition: "To devote time and attention to acquiring knowledge.", defTrans: "Estudar", example: "You need to study hard to succeed.", audioFront: "TTS: To study", audioBack: "TTS: You need to study hard to succeed." },
                { term: "To teach", definition: "To impart knowledge to or instruct someone.", defTrans: "Ensinar / Dar aula", example: "My mother used to teach French.", audioFront: "TTS: To teach", audioBack: "TTS: My mother used to teach French." },
                { term: "To attend", definition: "To be present at an event, meeting, or class.", defTrans: "Frequentar / Comparecer", example: "I have to attend class every morning.", audioFront: "TTS: To attend", audioBack: "TTS: I have to attend class every morning." },
                { term: "To review", definition: "To examine or assess something formally with the possibility or intention of instituting change if necessary.", defTrans: "Revisar", example: "We should review our notes before the test.", audioFront: "TTS: To review", audioBack: "TTS: We should review our notes before the test." },
                { term: "To pass", definition: "To be successful in an exam, course, or class.", defTrans: "Passar (ser aprovado)", example: "I studied a lot, so I hope to pass.", audioFront: "TTS: To pass", audioBack: "TTS: I studied a lot, so I hope to pass." },
                { term: "To fail", definition: "To be unsuccessful in an exam or test.", defTrans: "Reprovar / Falhar", example: "If you don't do your homework, you might fail.", audioFront: "TTS: To fail", audioBack: "TTS: If you don't do your homework, you might fail." },
                { term: "To graduate", definition: "To successfully complete an academic degree, course of training, or high school.", defTrans: "Formar-se", example: "She will graduate from university next year.", audioFront: "TTS: To graduate", audioBack: "TTS: She will graduate from university next year." },
                { term: "To enroll", definition: "To officially register as a member of an institution or a student on a course.", defTrans: "Matricular-se", example: "I want to enroll in a photography course.", audioFront: "TTS: To enroll", audioBack: "TTS: I want to enroll in a photography course." },
                { term: "Difficult", definition: "Needing much effort or skill to accomplish, deal with, or understand.", defTrans: "Difícil", example: "Math can be very difficult for some students.", audioFront: "TTS: Difficult", audioBack: "TTS: Math can be very difficult for some students." },
                { term: "Boring", definition: "Not interesting; tedious.", defTrans: "Entediante", example: "The movie was so boring that I fell asleep.", audioFront: "TTS: Boring", audioBack: "TTS: The movie was so boring that I fell asleep." },
                { term: "Compulsory", definition: "Required by law or a rule; obligatory.", defTrans: "Obrigatório", example: "Math and English are compulsory subjects.", audioFront: "TTS: Compulsory", audioBack: "TTS: Math and English are compulsory subjects." },
                { term: "Optional", definition: "Available to be chosen but not obligatory.", defTrans: "Opcional", example: "Taking a second language is optional.", audioFront: "TTS: Optional", audioBack: "TTS: Taking a second language is optional." },

                // 3A Items (18 items)
                { term: "Go to school", definition: "The action of attending an educational institution.", defTrans: "Ir para a escola", example: "I wake up early to go to school.", audioFront: "TTS: Go to school", audioBack: "TTS: I wake up early to go to school." },
                { term: "Primary school", definition: "A school for young children.", defTrans: "Escola primária / Ensino fundamental", example: "Kids start learning reading in primary school.", audioFront: "TTS: Primary school", audioBack: "TTS: Kids start learning reading in primary school." },
                { term: "High school", definition: "A school that typically comprises grades 9 through 12.", defTrans: "Ensino médio", example: "Teenagers face many challenges in high school.", audioFront: "TTS: High school", audioBack: "TTS: Teenagers face many challenges in high school." },
                { term: "My favorite subject is", definition: "Stating the academic topic you like the most.", defTrans: "Minha matéria favorita é", example: "My favorite subject is geography.", audioFront: "TTS: My favorite subject is", audioBack: "TTS: My favorite subject is geography." },
                { term: "To be good at", definition: "To possess skill or competence in an activity.", defTrans: "Ser bom em", example: "She seems to be good at math.", audioFront: "TTS: To be good at", audioBack: "TTS: She seems to be good at math." },
                { term: "Do your homework", definition: "Completing assignments given by teachers to be done at home.", defTrans: "Fazer o dever de casa", example: "You must do your homework every day.", audioFront: "TTS: Do your homework", audioBack: "TTS: You must do your homework every day." },
                { term: "Study for a test", definition: "To prepare academically for an examination.", defTrans: "Estudar para um teste", example: "I need to study for a test tonight.", audioFront: "TTS: Study for a test", audioBack: "TTS: I need to study for a test tonight." },
                { term: "Take notes", definition: "To write down important information during a class or lecture.", defTrans: "Fazer anotações", example: "It helps to take notes during the lecture.", audioFront: "TTS: Take notes", audioBack: "TTS: It helps to take notes during the lecture." },
                { term: "Write an essay", definition: "To compose a short text on a particular subject.", defTrans: "Escrever uma redação", example: "We have to write an essay about the revolution.", audioFront: "TTS: Write an essay", audioBack: "TTS: We have to write an essay about the revolution." },
                { term: "Take an exam", definition: "To undergo a formal test of knowledge.", defTrans: "Fazer uma prova / um exame", example: "All students will take an exam on Friday.", audioFront: "TTS: Take an exam", audioBack: "TTS: All students will take an exam on Friday." },
                { term: "Pass an exam", definition: "To be successful in a formal test.", defTrans: "Passar em uma prova", example: "I hope I pass an exam this time.", audioFront: "TTS: Pass an exam", audioBack: "TTS: I hope I pass an exam this time." },
                { term: "Get good grades", definition: "To receive high marks for academic work.", defTrans: "Tirar boas notas", example: "If you study hard, you will get good grades.", audioFront: "TTS: Get good grades", audioBack: "TTS: If you study hard, you will get good grades." },
                { term: "Apply to a university", definition: "To formally request admission to a college or university.", defTrans: "Candidatar-se a uma universidade", example: "I will apply to a university in London.", audioFront: "TTS: Apply to a university", audioBack: "TTS: I will apply to a university in London." },
                { term: "Apply for a course", definition: "To submit an application to enroll in a specific academic program.", defTrans: "Candidatar-se a um curso", example: "She wants to apply for an engineering course.", audioFront: "TTS: Apply for a course", audioBack: "TTS: She wants to apply for an engineering course." },
                { term: "Major in", definition: "To specialize in a particular subject at college or university.", defTrans: "Especializar-se / Formar-se em", example: "I plan to major in computer science.", audioFront: "TTS: Major in", audioBack: "TTS: I plan to major in computer science." },
                { term: "Get a degree", definition: "To successfully complete a university course and receive a qualification.", defTrans: "Obter um diploma universitário", example: "It takes four years to get a degree.", audioFront: "TTS: Get a degree", audioBack: "TTS: It takes four years to get a degree." },
                { term: "What do you want to be", definition: "Asking someone about their future career aspirations.", defTrans: "O que você quer ser", example: "What do you want to be when you grow up?", audioFront: "TTS: What do you want to be", audioBack: "TTS: What do you want to be when you grow up?" },
                { term: "Decide on a career path", definition: "To choose the profession one intends to pursue.", defTrans: "Decidir sobre um plano de carreira", example: "It is hard to decide on a career path.", audioFront: "TTS: Decide on a career path", audioBack: "TTS: It is hard to decide on a career path." },
                { term: "Continue your studies", definition: "To pursue further education after completing a certain level.", defTrans: "Continuar seus estudos", example: "I want to continue my studies and get a PhD.", audioFront: "TTS: Continue your studies", audioBack: "TTS: I want to continue my studies and get a PhD." }
            ]
        }
    ],

    // ======================================================
    // GLOSSARY (All 54 items + Context words)
    // ======================================================
    glossary:[
        // 2A: Places, People & Subjects
        { topic: "Education", term: "professor", definition: "A university teacher.", translation: "Professor(a) universitário(a)" },
        { topic: "Education", term: "classmate", definition: "A fellow student in one's class.", translation: "Colega de classe" },
        { topic: "Education", term: "principal", definition: "The head of a school.", translation: "Diretor(a) de escola" },
        { topic: "Education", term: "campus", definition: "The grounds and buildings of a university.", translation: "Campus" },
        { topic: "Education", term: "library", definition: "A building or room containing books.", translation: "Biblioteca" },
        { topic: "Education", term: "laboratory", definition: "A room equipped for scientific experiments.", translation: "Laboratório" },
        { topic: "Education", term: "mathematics", definition: "The science of numbers and logic.", translation: "Matemática" },
        { topic: "Education", term: "science", definition: "The study of the physical and natural world.", translation: "Ciência(s)" },
        { topic: "Education", term: "history", definition: "The study of past events.", translation: "História" },
        { topic: "Education", term: "geography", definition: "The study of the earth and its features.", translation: "Geografia" },
        { topic: "Education", term: "literature", definition: "Written works of artistic merit.", translation: "Literatura" },
        { topic: "Education", term: "physical-education", definition: "Instruction in physical exercise.", translation: "Educação Física" },

        // 2A: Academic Terms
        { topic: "Academic", term: "course", definition: "A series of lessons in a subject.", translation: "Curso / Disciplina" },
        { topic: "Academic", term: "semester", definition: "A half-year term in school.", translation: "Semestre" },
        { topic: "Academic", term: "assignment", definition: "A task allocated to someone as part of a study.", translation: "Tarefa / Trabalho" },
        { topic: "Academic", term: "essay", definition: "A short piece of writing on a subject.", translation: "Redação / Ensaio" },
        { topic: "Academic", term: "presentation", definition: "A speech to an audience to explain an idea.", translation: "Apresentação" },
        { topic: "Academic", term: "exam", definition: "A formal test of knowledge.", translation: "Exame / Prova" },
        { topic: "Academic", term: "grade", definition: "A mark indicating the quality of a student's work.", translation: "Nota" },
        { topic: "Academic", term: "degree", definition: "An academic rank conferred by a university.", translation: "Grau acadêmico" },
        { topic: "Academic", term: "diploma", definition: "A certificate of completed education.", translation: "Diploma" },
        { topic: "Academic", term: "scholarship", definition: "Financial aid for a student.", translation: "Bolsa de estudos" },
        { topic: "Academic", term: "tuition-fees", definition: "Money charged by a school for teaching.", translation: "Mensalidades" },
        { topic: "Academic", term: "lecture", definition: "An educational talk to an audience.", translation: "Aula expositiva / Palestra" },

        // 2A: Verbs & Adjectives
        { topic: "Verbs & Adjectives", term: "to-study", definition: "To devote time to learning.", translation: "Estudar" },
        { topic: "Verbs & Adjectives", term: "to-teach", definition: "To impart knowledge to someone.", translation: "Ensinar" },
        { topic: "Verbs & Adjectives", term: "to-attend", definition: "To be present at an event or class.", translation: "Frequentar" },
        { topic: "Verbs & Adjectives", term: "to-review", definition: "To examine or assess something again.", translation: "Revisar" },
        { topic: "Verbs & Adjectives", term: "to-pass", definition: "To be successful in an exam.", translation: "Passar" },
        { topic: "Verbs & Adjectives", term: "to-fail", definition: "To be unsuccessful in an exam.", translation: "Reprovar / Falhar" },
        { topic: "Verbs & Adjectives", term: "to-graduate", definition: "To complete an academic degree.", translation: "Formar-se" },
        { topic: "Verbs & Adjectives", term: "to-enroll", definition: "To officially register for a course.", translation: "Matricular-se" },
        { topic: "Verbs & Adjectives", term: "difficult", definition: "Needing much effort to understand.", translation: "Difícil" },
        { topic: "Verbs & Adjectives", term: "boring", definition: "Not interesting; tedious.", translation: "Entediante" },
        { topic: "Verbs & Adjectives", term: "compulsory", definition: "Required by law or a rule.", translation: "Obrigatório" },
        { topic: "Verbs & Adjectives", term: "optional", definition: "Available to be chosen but not mandatory.", translation: "Opcional" },

        // 3A: Expressions
        { topic: "Expressions", term: "go-to-school", definition: "The action of attending an educational institution.", translation: "Ir para a escola" },
        { topic: "Expressions", term: "primary-school", definition: "A school for young children.", translation: "Escola primária" },
        { topic: "Expressions", term: "high-school", definition: "A school that typically comprises grades 9 through 12.", translation: "Ensino médio" },
        { topic: "Expressions", term: "my-favorite-subject", definition: "Stating the academic topic you like the most.", translation: "Minha matéria favorita é" },
        { topic: "Expressions", term: "good-at", definition: "To possess skill or competence in an activity.", translation: "Ser bom em" },
        { topic: "Expressions", term: "do-homework", definition: "Completing assignments given by teachers.", translation: "Fazer o dever de casa" },
        { topic: "Expressions", term: "study-for-test", definition: "To prepare academically for an examination.", translation: "Estudar para um teste" },
        { topic: "Expressions", term: "take-notes", definition: "To write down important information during a class.", translation: "Fazer anotações" },
        { topic: "Expressions", term: "write-essay", definition: "To compose a short text on a particular subject.", translation: "Escrever uma redação" },
        { topic: "Expressions", term: "take-exam", definition: "To undergo a formal test of knowledge.", translation: "Fazer uma prova" },
        { topic: "Expressions", term: "pass-exam", definition: "To be successful in a formal test.", translation: "Passar em uma prova" },
        { topic: "Expressions", term: "get-good-grades", definition: "To receive high marks for academic work.", translation: "Tirar boas notas" },
        { topic: "Expressions", term: "apply-to-university", definition: "To formally request admission to a college.", translation: "Candidatar-se a uma universidade" },
        { topic: "Expressions", term: "apply-for-a-course", definition: "To formally request to join a specific course.", translation: "Candidatar-se a um curso" },
        { topic: "Expressions", term: "major-in", definition: "To specialize in a particular subject at college.", translation: "Formar-se em (Especializar-se)" },
        { topic: "Expressions", term: "get-degree", definition: "To complete a university course.", translation: "Obter um diploma" },
        { topic: "Expressions", term: "what-want-be", definition: "Asking someone about their future career aspirations.", translation: "O que você quer ser" },
        { topic: "Expressions", term: "decide-career", definition: "To choose the profession one intends to pursue.", translation: "Decidir sobre um plano de carreira" },
        { topic: "Expressions", term: "continue-studies", definition: "To pursue further education.", translation: "Continuar seus estudos" },

        // Additional Context Words
        { topic: "Context", term: "subject", definition: "A branch of knowledge studied or taught in a school.", translation: "Matéria / Disciplina" },
        { topic: "Context", term: "studying-habits", definition: "The regular practices a student uses to study.", translation: "Hábitos de estudo" },
        { topic: "Context", term: "higher-education", definition: "Education at universities or similar educational establishments.", translation: "Ensino superior" },
        { topic: "Context", term: "future-plans", definition: "Intentions or goals for the time ahead.", translation: "Planos para o futuro" },
        { topic: "Context", term: "masters-degree", definition: "An academic degree awarded by universities upon completion of a course of study demonstrating mastery.", translation: "Mestrado" }
    ]
});