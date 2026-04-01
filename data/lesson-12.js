/**
 * English Block Assembling - LESSON DATA: Topic 12
 * Topic: Work and Occupations
 * Level: Upper A2 ~ Lower B1
 */

window.initLesson({
    // --- METADATA ---
    lessonId: "lesson-12",
    block: "2",
    topicTitle: "12 - Work and Occupations",

    steps:[
        // ======================================================
        // STEP 0: INTRO & CAN-DO
        // ======================================================
        {
            title: "Intro & Can-Do",
            objectives: "• Talk about your [job](tooltip:job) and describe your daily [responsibilities](tooltip:responsibilities).<br>• Understand vocabulary related to the [work environment](tooltip:work-environment).<br>• Learn phrases for [applying for a position](tooltip:apply-for) and going to an [interview](tooltip:interview).<br>• Discuss working hours, [salaries](tooltip:salary), and career progression.",
            welcome: "Welcome to Lesson 12! Work is a major part of our lives. In this lesson, you will learn the essential vocabulary to talk about your profession, your colleagues, and your daily tasks. We will also cover the language you need when looking for a new job, sending your resume, and attending a job interview. Let's get to work!",
            audio: {
                objectives: "TTS: In this lesson, you will learn to: Talk about your job and describe your daily responsibilities. Understand vocabulary related to the work environment. Learn phrases for applying for a position and going to an interview. Discuss working hours, salaries, and career progression.",
                welcome: "TTS: Welcome to Lesson 12! Work is a major part of our lives. In this lesson, you will learn the essential vocabulary to talk about your profession, your colleagues, and your daily tasks. We will also cover the language you need when looking for a new job, sending your resume, and attending a job interview. Let's get to work!"
            }
        },

        // ======================================================
        // STEP 1: CONTEXT DIALOGUE
        // ======================================================
        {
            title: "Context Dialogue",
            context: "Liam is attending a job interview with Emma, the manager of a design agency.",
            contextAudio: "TTS: Emma: Good morning, Liam. Thank you for coming to the interview. Liam: Good morning! It's a pleasure to meet you. Emma: I see from your resume that you have a lot of experience. What do you do for a living currently? Liam: I work as a graphic designer for a small tech company. Emma: What are your main responsibilities there? Liam: I am in charge of creating marketing materials, and my job involves updating the website. Emma: Why are you looking for a job right now? Liam: I want a full-time position that is more challenging. I also hope to get promoted in the future. Emma: We offer a great salary and a very rewarding environment. We will call you if you get the job offer!",
            dialogue:[
                { speaker: "Emma", text: "Good morning, Liam. Thank you for coming to the [interview](tooltip:interview)." },
                { speaker: "Liam", text: "Good morning! It's a pleasure to meet you." },
                { speaker: "Emma", text: "I see from your [resume](tooltip:resume) that you have a lot of [experience](tooltip:experience). What do you do for a living currently?" },
                { speaker: "Liam", text: "I [work as](tooltip:work-as) a graphic designer for a small tech [company](tooltip:company)." },
                { speaker: "Emma", text: "What are your main [responsibilities](tooltip:responsibilities) there?" },
                { speaker: "Liam", text: "I am [in charge of](tooltip:in-charge-of) creating marketing materials, and my job [involves](tooltip:involve) updating the website." },
                { speaker: "Emma", text: "Why are you [looking for a job](tooltip:look-for-job) right now?" },
                { speaker: "Liam", text: "I want a [full-time](tooltip:full-time) position that is more [challenging](tooltip:challenging). I also hope to [get promoted](tooltip:get-promoted) in the future." },
                { speaker: "Emma", text: "We offer a great [salary](tooltip:salary) and a very [rewarding](tooltip:rewarding) environment. We will call you if you get the [job offer](tooltip:job-offer)!" }
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
                    title: "People & Jobs",
                    audio: "TTS: Employee. Employer. Colleague. Staff. Boss. Manager. Candidate. Applicant. Interviewer. Accountant. Designer. Assistant.",
                    items:[
                        { term: "Employee", trans: "Funcionário / Empregado" },
                        { term: "Employer", trans: "Empregador / Patrão" },
                        { term: "Colleague (co-worker)", trans: "Colega de trabalho" },
                        { term: "Staff", trans: "Equipe / Quadro de funcionários" },
                        { term: "Boss", trans: "Chefe" },
                        { term: "Manager", trans: "Gerente" },
                        { term: "Candidate", trans: "Candidato" },
                        { term: "Applicant", trans: "Requerente / Candidato (a uma vaga)" },
                        { term: "Interviewer", trans: "Entrevistador" },
                        { term: "Accountant", trans: "Contador" },
                        { term: "Designer", trans: "Designer" },
                        { term: "Assistant", trans: "Assistente" }
                    ]
                },
                {
                    title: "Job Seeking & Work",
                    audio: "TTS: Career. Company. Salary. Wage. Income. Resume. Cover letter. Interview. Contract. Promotion. Experience. Skills.",
                    items:[
                        { term: "Career", trans: "Carreira" },
                        { term: "Company", trans: "Empresa" },
                        { term: "Salary", trans: "Salário (mensal/anual fixo)" },
                        { term: "Wage", trans: "Salário (pago por hora/dia/semana)" },
                        { term: "Income", trans: "Renda (ganhos totais)" },
                        { term: "Resume (CV)", trans: "Currículo" },
                        { term: "Cover letter", trans: "Carta de apresentação" },
                        { term: "Interview", trans: "Entrevista" },
                        { term: "Contract", trans: "Contrato" },
                        { term: "Promotion", trans: "Promoção" },
                        { term: "Experience", trans: "Experiência" },
                        { term: "Skills", trans: "Habilidades" }
                    ]
                },
                {
                    title: "Verbs & Adjectives",
                    audio: "TTS: To hire. To employ. To fire. To quit. To resign. To earn. To manage. Full-time. Part-time. Unemployed. Rewarding. Demanding.",
                    items:[
                        { term: "To hire", trans: "Contratar" },
                        { term: "To employ", trans: "Empregar" },
                        { term: "To fire", trans: "Demitir (mandar embora)" },
                        { term: "To quit", trans: "Sair (do emprego) / Desistir" },
                        { term: "To resign", trans: "Renunciar / Pedir demissão (formal)" },
                        { term: "To earn", trans: "Ganhar (dinheiro pelo trabalho)" },
                        { term: "To manage", trans: "Gerenciar / Administrar" },
                        { term: "Full-time", trans: "Tempo integral" },
                        { term: "Part-time", trans: "Meio período" },
                        { term: "Unemployed", trans: "Desempregado" },
                        { term: "Rewarding", trans: "Gratificante / Recompensador" },
                        { term: "Demanding", trans: "Exigente" }
                    ]
                }
            ],

            // --- 2B: EXAMPLES ---
            exampleGroups:[
                {
                    title: "People & Jobs",
                    audio: "TTS: The company has over fifty employees. A good employer respects their workers. I usually eat lunch with my colleague. The hospital staff is very helpful. My boss told me to finish the report today. The store manager handles all customer complaints. Only one candidate will get the job. Every applicant must submit a resume. The interviewer asked me some difficult questions. The accountant calculates the company taxes. A graphic designer created our new logo. The assistant organizes the manager's schedule.",
                    items:[
                        { term: "Employee", sent: "The company has over fifty employees.", trans: "A empresa tem mais de cinquenta funcionários." },
                        { term: "Employer", sent: "A good employer respects their workers.", trans: "Um bom empregador respeita seus trabalhadores." },
                        { term: "Colleague (co-worker)", sent: "I usually eat lunch with my colleague.", trans: "Eu geralmente almoço com meu colega de trabalho." },
                        { term: "Staff", sent: "The hospital staff is very helpful.", trans: "A equipe do hospital é muito prestativa." },
                        { term: "Boss", sent: "My boss told me to finish the report today.", trans: "Meu chefe me disse para terminar o relatório hoje." },
                        { term: "Manager", sent: "The store manager handles all customer complaints.", trans: "O gerente da loja lida com todas as reclamações de clientes." },
                        { term: "Candidate", sent: "Only one candidate will get the job.", trans: "Apenas um candidato vai conseguir o emprego." },
                        { term: "Applicant", sent: "Every applicant must submit a resume.", trans: "Todo requerente deve enviar um currículo." },
                        { term: "Interviewer", sent: "The interviewer asked me some difficult questions.", trans: "O entrevistador me fez algumas perguntas difíceis." },
                        { term: "Accountant", sent: "The accountant calculates the company taxes.", trans: "O contador calcula os impostos da empresa." },
                        { term: "Designer", sent: "A graphic designer created our new logo.", trans: "Um designer gráfico criou nosso novo logotipo." },
                        { term: "Assistant", sent: "The assistant organizes the manager's schedule.", trans: "O assistente organiza a agenda do gerente." }
                    ]
                },
                {
                    title: "Job Seeking & Work",
                    audio: "TTS: She wants a career in medicine. He works for a big tech company. They offered me a very high salary. The minimum wage increased this year. His monthly income allows him to save money. I updated my resume before applying. You should attach a cover letter to your application. I am nervous about my job interview tomorrow. Please sign the contract on the last page. She worked hard and finally got a promotion. He has ten years of experience in sales. Communication and leadership are important skills.",
                    items:[
                        { term: "Career", sent: "She wants a career in medicine.", trans: "Ela quer uma carreira na medicina." },
                        { term: "Company", sent: "He works for a big tech company.", trans: "Ele trabalha para uma grande empresa de tecnologia." },
                        { term: "Salary", sent: "They offered me a very high salary.", trans: "Eles me ofereceram um salário muito alto." },
                        { term: "Wage", sent: "The minimum wage increased this year.", trans: "O salário mínimo aumentou este ano." },
                        { term: "Income", sent: "His monthly income allows him to save money.", trans: "A renda mensal dele o permite economizar dinheiro." },
                        { term: "Resume (CV)", sent: "I updated my resume before applying.", trans: "Eu atualizei meu currículo antes de me candidatar." },
                        { term: "Cover letter", sent: "You should attach a cover letter to your application.", trans: "Você deve anexar uma carta de apresentação à sua candidatura." },
                        { term: "Interview", sent: "I am nervous about my job interview tomorrow.", trans: "Estou nervoso(a) com a minha entrevista de emprego amanhã." },
                        { term: "Contract", sent: "Please sign the contract on the last page.", trans: "Por favor, assine o contrato na última página." },
                        { term: "Promotion", sent: "She worked hard and finally got a promotion.", trans: "Ela trabalhou duro e finalmente conseguiu uma promoção." },
                        { term: "Experience", sent: "He has ten years of experience in sales.", trans: "Ele tem dez anos de experiência em vendas." },
                        { term: "Skills", sent: "Communication and leadership are important skills.", trans: "Comunicação e liderança são habilidades importantes." }
                    ]
                },
                {
                    title: "Verbs & Adjectives",
                    audio: "TTS: We need to hire three new developers. They employ hundreds of people in this town. The boss had to fire him for being late. I want to quit my job and travel the world. The manager will resign due to health problems. How much do you earn per month? She has to manage a team of ten people. I am looking for a full-time job. Students usually work part-time. It is hard to pay bills when you are unemployed. Teaching children can be a very rewarding job. Being a doctor is a demanding profession.",
                    items:[
                        { term: "To hire", sent: "We need to hire three new developers.", trans: "Nós precisamos contratar três novos desenvolvedores." },
                        { term: "To employ", sent: "They employ hundreds of people in this town.", trans: "Eles empregam centenas de pessoas nesta cidade." },
                        { term: "To fire", sent: "The boss had to fire him for being late.", trans: "O chefe teve que demiti-lo por chegar atrasado." },
                        { term: "To quit", sent: "I want to quit my job and travel the world.", trans: "Eu quero sair do meu emprego e viajar pelo mundo." },
                        { term: "To resign", sent: "The manager will resign due to health problems.", trans: "O gerente vai pedir demissão devido a problemas de saúde." },
                        { term: "To earn", sent: "How much do you earn per month?", trans: "Quanto você ganha por mês?" },
                        { term: "To manage", sent: "She has to manage a team of ten people.", trans: "Ela tem que gerenciar uma equipe de dez pessoas." },
                        { term: "Full-time", sent: "I am looking for a full-time job.", trans: "Estou procurando um emprego em tempo integral." },
                        { term: "Part-time", sent: "Students usually work part-time.", trans: "Estudantes geralmente trabalham meio período." },
                        { term: "Unemployed", sent: "It is hard to pay bills when you are unemployed.", trans: "É difícil pagar as contas quando você está desempregado." },
                        { term: "Rewarding", sent: "Teaching children can be a very rewarding job.", trans: "Ensinar crianças pode ser um trabalho muito gratificante." },
                        { term: "Demanding", sent: "Being a doctor is a demanding profession.", trans: "Ser médico é uma profissão exigente." }
                    ]
                }
            ],

            // --- 2C: PRACTICE ---
            drillGroups:[
                {
                    title: "People & Jobs",
                    drills:[
                        { q: "A person who works for a company is an ________.", options:[{t: "Employer", c: false}, {t: "Employee", c: true}, {t: "Interviewer", c: false}, {t: "Applicant", c: false}], type: "mcq" },
                        { q: "The person or company that hires people is the ________.", options:[{t: "Employee", c: false}, {t: "Employer", c: true}, {t: "Assistant", c: false}, {t: "Colleague", c: false}], type: "mcq" },
                        { q: "Someone you work with in the same office is your ________.", options:[{t: "Candidate", c: false}, {t: "Boss", c: false}, {t: "Colleague", c: true}, {t: "Accountant", c: false}], type: "mcq" },
                        { q: "The group of people who work for an organization is the ________.", options:[{t: "Staff", c: true}, {t: "Manager", c: false}, {t: "Interviewer", c: false}, {t: "Designer", c: false}], type: "mcq" },
                        { q: "The person who tells you what to do at work is your ________.", options:[{t: "Applicant", c: false}, {t: "Boss", c: true}, {t: "Colleague", c: false}, {t: "Employee", c: false}], type: "mcq" },
                        { q: "A person responsible for running a department or business is the ________.", options:[{t: "Assistant", c: false}, {t: "Candidate", c: false}, {t: "Manager", c: true}, {t: "Accountant", c: false}], type: "mcq" },
                        { q: "A person who is competing to get a job is a ________.", options:[{t: "Candidate", c: true}, {t: "Boss", c: false}, {t: "Manager", c: false}, {t: "Employer", c: false}], type: "mcq" },
                        { q: "Another word for a person who applies for a job is an ________.", options:[{t: "Applicant", c: true}, {t: "Employee", c: false}, {t: "Interviewer", c: false}, {t: "Employer", c: false}], type: "mcq" },
                        { q: "The person who asks questions during a job interview is the ________.", options:[{t: "Interviewer", c: true}, {t: "Applicant", c: false}, {t: "Candidate", c: false}, {t: "Assistant", c: false}], type: "mcq" },
                        { q: "A professional who keeps and inspects financial accounts is an ________.", options:[{t: "Designer", c: false}, {t: "Accountant", c: true}, {t: "Assistant", c: false}, {t: "Employee", c: false}], type: "mcq" },
                        { q: "A person who plans the look or workings of something before it is built is a ________.", options:[{t: "Accountant", c: false}, {t: "Manager", c: false}, {t: "Designer", c: true}, {t: "Boss", c: false}], type: "mcq" },
                        { q: "A person who helps someone in a more senior position is an ________.", options:[{t: "Employer", c: false}, {t: "Assistant", c: true}, {t: "Interviewer", c: false}, {t: "Candidate", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Job Seeking & Work",
                    drills:[
                        { q: "An occupation undertaken for a significant period of a person's life is a ________.", options:[{t: "Salary", c: false}, {t: "Career", c: true}, {t: "Wage", c: false}, {t: "Interview", c: false}], type: "mcq" },
                        { q: "A commercial business is called a ________.", options:[{t: "Resume", c: false}, {t: "Company", c: true}, {t: "Promotion", c: false}, {t: "Contract", c: false}], type: "mcq" },
                        { q: "A fixed regular payment, typically paid monthly, is a ________.", options:[{t: "Wage", c: false}, {t: "Salary", c: true}, {t: "Skill", c: false}, {t: "Experience", c: false}], type: "mcq" },
                        { q: "A regular payment, usually paid on a daily or hourly basis, is a ________.", options:[{t: "Salary", c: false}, {t: "Income", c: false}, {t: "Wage", c: true}, {t: "Resume", c: false}], type: "mcq" },
                        { q: "Money received on a regular basis for work or through investments is your ________.", options:[{t: "Income", c: true}, {t: "Interview", c: false}, {t: "Company", c: false}, {t: "Contract", c: false}], type: "mcq" },
                        { q: "A document detailing your education and work history is a ________.", options:[{t: "Cover letter", c: false}, {t: "Promotion", c: false}, {t: "Resume (CV)", c: true}, {t: "Income", c: false}], type: "mcq" },
                        { q: "A letter sent with a resume to introduce yourself is a ________.", options:[{t: "Cover letter", c: true}, {t: "Contract", c: false}, {t: "Salary", c: false}, {t: "Career", c: false}], type: "mcq" },
                        { q: "A formal meeting to evaluate an applicant for a job is an ________.", options:[{t: "Interview", c: true}, {t: "Income", c: false}, {t: "Company", c: false}, {t: "Experience", c: false}], type: "mcq" },
                        { q: "A legally binding agreement between employer and employee is a ________.", options:[{t: "Contract", c: true}, {t: "Resume", c: false}, {t: "Skill", c: false}, {t: "Wage", c: false}], type: "mcq" },
                        { q: "When you are moved to a higher-level position at work, you get a ________.", options:[{t: "Promotion", c: true}, {t: "Salary", c: false}, {t: "Company", c: false}, {t: "Cover letter", c: false}], type: "mcq" },
                        { q: "The knowledge or skill acquired by working over time is ________.", options:[{t: "Interview", c: false}, {t: "Experience", c: true}, {t: "Contract", c: false}, {t: "Income", c: false}], type: "mcq" },
                        { q: "The abilities you have to do a job well are your ________.", options:[{t: "Skills", c: true}, {t: "Wages", c: false}, {t: "Companies", c: false}, {t: "Resumes", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Verbs & Adjectives",
                    drills:[
                        { q: "The verb meaning 'to give someone a job' is ________.", options:[{t: "To fire", c: false}, {t: "To quit", c: false}, {t: "To hire", c: true}, {t: "To earn", c: false}], type: "mcq" },
                        { q: "Another verb meaning 'to hire' or give work to someone is ________.", options:[{t: "To manage", c: false}, {t: "To resign", c: false}, {t: "To employ", c: true}, {t: "To earn", c: false}], type: "mcq" },
                        { q: "The verb meaning 'to tell someone they no longer have a job' is ________.", options:[{t: "To hire", c: false}, {t: "To employ", c: false}, {t: "To fire", c: true}, {t: "To manage", c: false}], type: "mcq" },
                        { q: "If you decide to leave your job voluntarily, you ________.", options:[{t: "To quit", c: true}, {t: "To fire", c: false}, {t: "To hire", c: false}, {t: "To employ", c: false}], type: "mcq" },
                        { q: "A more formal word for 'to quit' is ________.", options:[{t: "To earn", c: false}, {t: "To resign", c: true}, {t: "To hire", c: false}, {t: "To manage", c: false}], type: "mcq" },
                        { q: "To receive money for your work is ________.", options:[{t: "To earn", c: true}, {t: "To fire", c: false}, {t: "To resign", c: false}, {t: "To quit", c: false}], type: "mcq" },
                        { q: "To be in charge of a team or a business is ________.", options:[{t: "To manage", c: true}, {t: "To hire", c: false}, {t: "To fire", c: false}, {t: "To quit", c: false}], type: "mcq" },
                        { q: "A job that requires you to work 40 hours a week is ________.", options:[{t: "Part-time", c: false}, {t: "Unemployed", c: false}, {t: "Full-time", c: true}, {t: "Demanding", c: false}], type: "mcq" },
                        { q: "A job that requires fewer hours than a standard work week is ________.", options:[{t: "Full-time", c: false}, {t: "Part-time", c: true}, {t: "Rewarding", c: false}, {t: "Demanding", c: false}], type: "mcq" },
                        { q: "If someone does not have a job, they are ________.", options:[{t: "Employed", c: false}, {t: "Rewarding", c: false}, {t: "Unemployed", c: true}, {t: "Part-time", c: false}], type: "mcq" },
                        { q: "A job that gives you a lot of satisfaction is ________.", options:[{t: "Rewarding", c: true}, {t: "Unemployed", c: false}, {t: "Part-time", c: false}, {t: "Demanding", c: false}], type: "mcq" },
                        { q: "A job that requires a lot of effort and energy is ________.", options:[{t: "Part-time", c: false}, {t: "Demanding", c: true}, {t: "Unemployed", c: false}, {t: "Rewarding", c: false}], type: "mcq" }
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
                    title: "Describing Your Job",
                    audio: "TTS: Work as a. Work for a. Work in a. I am responsible for. I am in charge of. My job involves.",
                    explanation: "Phrases used to explain your job title, who you work for, and what tasks you do.<br><span style='color:var(--primary-blue); font-style:italic;'>(Frases usadas para explicar o cargo do seu trabalho, para quem você trabalha e quais tarefas você realiza.)</span>",
                    samples:[
                        { en: "<b>Work as a</b> graphic designer.", pt: "<span style='color:var(--primary-blue)'>(Trabalhar como designer gráfico.)</span>" },
                        { en: "<b>Work for a</b> tech company.", pt: "<span style='color:var(--primary-blue)'>(Trabalhar para uma empresa de tecnologia.)</span>" },
                        { en: "<b>Work in a</b> marketing department.", pt: "<span style='color:var(--primary-blue)'>(Trabalhar em um departamento de marketing.)</span>" },
                        { en: "<b>I'm responsible for</b> customer service.", pt: "<span style='color:var(--primary-blue)'>(Eu sou responsável pelo atendimento ao cliente.)</span>" },
                        { en: "<b>I'm in charge of</b> the sales team.", pt: "<span style='color:var(--primary-blue)'>(Eu sou encarregado da equipe de vendas.)</span>" },
                        { en: "<b>My job involves</b> writing reports.", pt: "<span style='color:var(--primary-blue)'>(Meu trabalho envolve escrever relatórios.)</span>" }
                    ]
                },
                {
                    title: "The Work Environment & Hours",
                    audio: "TTS: Work from home. A nine-to-five job. What do you do for a living? Where do you work? What are your working hours?",
                    explanation: "Phrases to talk about your schedule and workplace, and questions to ask others about theirs.<br><span style='color:var(--primary-blue); font-style:italic;'>(Frases para falar sobre o seu horário e local de trabalho, e perguntas para fazer aos outros sobre os deles.)</span>",
                    samples:[
                        { en: "I <b>work from home</b> on Fridays.", pt: "<span style='color:var(--primary-blue)'>(Eu trabalho de casa nas sextas-feiras.)</span>" },
                        { en: "She has <b>a nine-to-five job</b>.", pt: "<span style='color:var(--primary-blue)'>(Ela tem um trabalho das 9 às 5.)</span>" },
                        { en: "<b>What do you do for a living?</b>", pt: "<span style='color:var(--primary-blue)'>(O que você faz da vida?)</span>" },
                        { en: "<b>Where do you work?</b>", pt: "<span style='color:var(--primary-blue)'>(Onde você trabalha?)</span>" },
                        { en: "<b>What are your working hours?</b>", pt: "<span style='color:var(--primary-blue)'>(Quais são as suas horas de trabalho?)</span>" }
                    ]
                },
                {
                    title: "Applying & Interviewing",
                    audio: "TTS: Look for a job. Apply for a position. Go to a job interview. Get a job offer. Sign a contract.",
                    explanation: "Collocations related to the process of finding and securing employment.<br><span style='color:var(--primary-blue); font-style:italic;'>(Combinações de palavras relacionadas ao processo de encontrar e garantir um emprego.)</span>",
                    samples:[
                        { en: "I need to <b>look for a job</b>.", pt: "<span style='color:var(--primary-blue)'>(Eu preciso procurar um emprego.)</span>" },
                        { en: "I want to <b>apply for a position</b>.", pt: "<span style='color:var(--primary-blue)'>(Eu quero me candidatar a uma vaga.)</span>" },
                        { en: "I have to <b>go to a job interview</b>.", pt: "<span style='color:var(--primary-blue)'>(Eu tenho que ir a uma entrevista de emprego.)</span>" },
                        { en: "I hope to <b>get a job offer</b>.", pt: "<span style='color:var(--primary-blue)'>(Eu espero receber uma oferta de emprego.)</span>" },
                        { en: "Tomorrow, I will <b>sign a contract</b>.", pt: "<span style='color:var(--primary-blue)'>(Amanhã, eu vou assinar um contrato.)</span>" }
                    ]
                }
            ],

            // --- 3B: DIALOGUES ---
            dialogueGroups:[
                {
                    title: "Dialogue 1: Discussing Careers",
                    audio: "TTS: What do you do for a living? I work as an accountant. I work for a large bank.",
                    lines:[
                        { speaker: "Sarah", text: "What do you do for a living?", pt: "(O que você faz da vida?)" },
                        { speaker: "John", text: "I work as an accountant. I work for a large bank.", pt: "(Eu trabalho como contador. Eu trabalho para um grande banco.)" }
                    ]
                },
                {
                    title: "Dialogue 2: Daily Tasks",
                    audio: "TTS: Where do you work, Paul? I work in a busy hospital. I'm responsible for patient care.",
                    lines:[
                        { speaker: "Lisa", text: "Where do you work, Paul?", pt: "(Onde você trabalha, Paul?)" },
                        { speaker: "Paul", text: "I work in a busy hospital. I'm responsible for patient care.", pt: "(Eu trabalho num hospital movimentado. Sou responsável pelo cuidado aos pacientes.)" }
                    ]
                },
                {
                    title: "Dialogue 3: Schedules",
                    audio: "TTS: What are your working hours? I have a nine-to-five job, but I also work from home on Mondays.",
                    lines:[
                        { speaker: "Mike", text: "What are your working hours?", pt: "(Quais são os seus horários de trabalho?)" },
                        { speaker: "Emma", text: "I have a nine-to-five job, but I also work from home on Mondays.", pt: "(Tenho um trabalho das 9 às 5, mas também trabalho de casa às segundas-feiras.)" }
                    ]
                },
                {
                    title: "Dialogue 4: Job Hunting",
                    audio: "TTS: Why did you quit your last job? I decided to look for a job with a better salary. Did you apply for a position yet?",
                    lines:[
                        { speaker: "David", text: "Why did you quit your last job?", pt: "(Por que você saiu do seu último emprego?)" },
                        { speaker: "Anna", text: "I decided to look for a job with a better salary. Did you apply for a position yet?", pt: "(Eu decidi procurar um emprego com um salário melhor. Você já se candidatou a uma vaga?)" }
                    ]
                },
                {
                    title: "Dialogue 5: The Interview",
                    audio: "TTS: I am nervous. I have to go to a job interview today. You will do great! Tell them your job involves managing projects.",
                    lines:[
                        { speaker: "Chris", text: "I am nervous. I have to go to a job interview today.", pt: "(Estou nervoso. Tenho que ir a uma entrevista de emprego hoje.)" },
                        { speaker: "Kelly", text: "You will do great! Tell them your job involves managing projects.", pt: "(Você vai se sair muito bem! Diga a eles que seu trabalho envolve gerenciar projetos.)" }
                    ]
                },
                {
                    title: "Dialogue 6: Success!",
                    audio: "TTS: Did you get a job offer? Yes! I am in charge of the sales team now. Tomorrow, I will sign a contract.",
                    lines:[
                        { speaker: "Tom", text: "Did you get a job offer?", pt: "(Você recebeu uma oferta de emprego?)" },
                        { speaker: "Julia", text: "Yes! I am in charge of the sales team now. Tomorrow, I will sign a contract.", pt: "(Sim! Eu estou encarregada da equipe de vendas agora. Amanhã, vou assinar um contrato.)" }
                    ]
                }
            ],

            // --- 3C: PRACTICE ---
            grammarDrillGroups:[
                {
                    title: "Describing Your Job",
                    drills:[
                        { q: "I work _____ a teacher.", options:[{t: "in", c: false}, {t: "as", c: true}, {t: "for", c: false}, {t: "to", c: false}], type: "mcq" },
                        { q: "She works _____ a marketing agency.", options:[{t: "for", c: true}, {t: "as", c: false}, {t: "in a", c: false}, {t: "to", c: false}], type: "mcq" },
                        { q: "He works _____ a factory.", options:[{t: "for", c: false}, {t: "in a", c: true}, {t: "as", c: false}, {t: "to", c: false}], type: "mcq" },
                        { q: "I am responsible _____ training new staff.", options:[{t: "of", c: false}, {t: "for", c: true}, {t: "in", c: false}, {t: "to", c: false}], type: "mcq" },
                        { q: "The manager is in charge _____ the entire department.", options:[{t: "of", c: true}, {t: "for", c: false}, {t: "in", c: false}, {t: "with", c: false}], type: "mcq" },
                        { q: "My job _____ answering emails and taking calls.", options:[{t: "involves", c: true}, {t: "works", c: false}, {t: "responsible", c: false}, {t: "charge", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "The Work Environment & Hours",
                    drills:[
                        { q: "Because of the internet, many people now work _____ home.", options:[{t: "in", c: false}, {t: "from", c: true}, {t: "at", c: false}, {t: "to", c: false}], type: "mcq" },
                        { q: "A standard office schedule is called a _____-to-five job.", options:[{t: "eight", c: false}, {t: "nine", c: true}, {t: "ten", c: false}, {t: "seven", c: false}], type: "mcq" },
                        { q: "What do you do for a _____?", options:[{t: "working", c: false}, {t: "living", c: true}, {t: "money", c: false}, {t: "salary", c: false}], type: "mcq" },
                        { q: "_____ do you work?", options:[{t: "Who", c: false}, {t: "Where", c: true}, {t: "What", c: false}, {t: "When", c: false}], type: "mcq" },
                        { q: "What are your working _____?", options:[{t: "times", c: false}, {t: "hours", c: true}, {t: "clocks", c: false}, {t: "days", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Applying & Interviewing",
                    drills:[
                        { q: "If you are unemployed, you need to look _____ a job.", options:[{t: "at", c: false}, {t: "to", c: false}, {t: "for", c: true}, {t: "in", c: false}], type: "mcq" },
                        { q: "You should send your CV to apply _____ a position.", options:[{t: "to", c: false}, {t: "in", c: false}, {t: "for", c: true}, {t: "at", c: false}], type: "mcq" },
                        { q: "If they like your resume, you will go to a job _____.", options:[{t: "contract", c: false}, {t: "interview", c: true}, {t: "offer", c: false}, {t: "living", c: false}], type: "mcq" },
                        { q: "If the interview goes well, you will get a job _____.", options:[{t: "offer", c: true}, {t: "contract", c: false}, {t: "interview", c: false}, {t: "living", c: false}], type: "mcq" },
                        { q: "Before you start working, you must _____ a contract.", options:[{t: "apply", c: false}, {t: "look", c: false}, {t: "sign", c: true}, {t: "interview", c: false}], type: "mcq" }
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
                { text: "I work as an accountant for a large company. ↘", audio: "TTS: I work as an accountant for a large company." },
                { text: "What do you do for a living? ↘", audio: "TTS: What do you do for a living?" },
                { text: "I am responsible for managing the sales team. ↘", audio: "TTS: I am responsible for managing the sales team." },
                { text: "Are you looking for a full-time or part-time job? ↗", audio: "TTS: Are you looking for a full-time or part-time job?" },
                { text: "My working hours are from nine to five. ↘", audio: "TTS: My working hours are from nine to five." },
                { text: "Did you apply for the new position? ↗", audio: "TTS: Did you apply for the new position?" },
                { text: "I have a job interview tomorrow morning. ↘", audio: "TTS: I have a job interview tomorrow morning." },
                { text: "She decided to quit her job and look for a new career. ↘", audio: "TTS: She decided to quit her job and look for a new career." },
                { text: "You should update your resume and write a cover letter. ↘", audio: "TTS: You should update your resume and write a cover letter." },
                { text: "We will call you if you get the job offer! ↘", audio: "TTS: We will call you if you get the job offer!" }
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
                    audio: "TTS: Emma: Hello, is this John? John: Yes, speaking. Emma: We loved your resume and want to invite you for an interview. John: Thank you! I am very excited.",
                    text: "Emma: Hello, is this John?<br>John: Yes, speaking.<br>Emma: We loved your [resume] and want to invite you for an [interview].<br>John: Thank you! I am very [excited]."
                },
                {
                    type: "dropdown",
                    instruction: "Listen to the conversation between two colleagues.",
                    audio: "TTS: Tom: I want to apply for a promotion. Sarah: That's great! You have a lot of experience. Tom: I hope the boss agrees. Sarah: I am sure you will get a better salary.",
                    questions:[
                        { q: "Tom: I want to[apply* | quit | fire] for a promotion.", a: "apply" },
                        { q: "Sarah: That's great! You have a lot of [experience* | employers | contracts].", a: "experience" },
                        { q: "Tom: I hope the [boss* | applicant | assistant] agrees.", a: "boss" },
                        { q: "Sarah: I am sure you will get a better [salary* | resume | interview].", a: "salary" }
                    ]
                },
                {
                    type: "audio-choice",
                    instruction: "Listen to the interview. Why does the candidate want the job?",
                    audio: "TTS: Interviewer: Why do you want this job? Candidate: I want a full-time position. My last job was only part-time, and it wasn't very rewarding.",
                    options:[
                        { t: "Because he wants a part-time job.", c: false },
                        { t: "Because he wants a full-time, rewarding position.", c: true },
                        { t: "Because he was fired from his last job.", c: false },
                        { t: "Because he wants to be the boss.", c: false }
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
                    title: "Dialogue - The Interview",
                    audio: "TTS: Mr. Smith: Welcome! Please, have a seat. I have your resume right here. Alice: Thank you, Mr. Smith. I am very happy to be here. Mr. Smith: You have great skills. Your previous job involved customer service, right? Alice: Yes, I was in charge of a team of five assistants. Mr. Smith: Excellent. This is a demanding full-time position, but the salary is very good. Alice: That sounds perfect. I am ready for a new career challenge.",
                    body: "<b>Mr. Smith:</b> Welcome! Please, have a seat. I have your [resume (CV)](tooltip:resume) right here.<br><b>Alice:</b> Thank you, Mr. Smith. I am very happy to be here.<br><b>Mr. Smith:</b> You have great [skills](tooltip:skills). Your previous job [involved](tooltip:involve) customer service, right?<br><b>Alice:</b> Yes, I was [in charge of](tooltip:in-charge-of) a team of five [assistants](tooltip:assistant).<br><b>Mr. Smith:</b> Excellent. This is a [demanding](tooltip:demanding) [full-time](tooltip:full-time) position, but the [salary](tooltip:salary) is very good.<br><b>Alice:</b> That sounds perfect. I am ready for a new [career](tooltip:career) challenge.",
                    questions:[
                        { q: "What did Alice's previous job involve?", options:[{t: "Designing websites.", c: false}, {t: "Customer service.", c: true}, {t: "Accounting.", c: false}], type: "mcq" },
                        { q: "How many assistants did Alice manage?", options:[{t: "Five.", c: true}, {t: "Ten.", c: false}, {t: "None.", c: false}], type: "mcq" },
                        { q: "What kind of position is Mr. Smith offering?", options:[{t: "A part-time position.", c: false}, {t: "An unemployed position.", c: false}, {t: "A demanding full-time position.", c: true}], type: "mcq" }
                    ]
                },
                {
                    title: "Dialogue - Office Gossip",
                    audio: "TTS: Ben: Did you hear about Mark? He decided to quit! Lisa: Really? Why did he resign? He had a great salary. Ben: He said the manager was too demanding, and the work was not rewarding. Lisa: Wow. So now the company has to hire a new accountant. Ben: Exactly. They are already looking for candidates. Lisa: Maybe I should apply for the position! I want a promotion.",
                    body: "<b>Ben:</b> Did you hear about Mark? He decided to [quit](tooltip:quit)!<br><b>Lisa:</b> Really? Why did he [resign](tooltip:resign)? He had a great salary.<br><b>Ben:</b> He said the [manager](tooltip:manager) was too demanding, and the work was not [rewarding](tooltip:rewarding).<br><b>Lisa:</b> Wow. So now the [company](tooltip:company) has to [hire](tooltip:hire) a new [accountant](tooltip:accountant).<br><b>Ben:</b> Exactly. They are already looking for [candidates](tooltip:candidate).<br><b>Lisa:</b> Maybe I should [apply for a position](tooltip:apply-for)! I want a [promotion](tooltip:promotion).",
                    questions:[
                        { q: "Why did Mark quit his job?", options:[{t: "Because the salary was low.", c: false}, {t: "Because he was fired.", c: false}, {t: "Because the manager was demanding.", c: true}], type: "mcq" },
                        { q: "What is Mark's profession?", options:[{t: "Designer", c: false}, {t: "Accountant", c: true}, {t: "Interviewer", c: false}], type: "mcq" },
                        { q: "What does Lisa want to do?", options:[{t: "She wants to apply for Mark's position.", c: true}, {t: "She wants to quit too.", c: false}, {t: "She wants to fire Ben.", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Chat Messages - The Good News",
                    audio: "TTS: David: Hey Leo! Guess what? I got a job offer! Leo: That's amazing, David! Congratulations! Did you sign the contract yet? David: Not yet, I will sign it tomorrow. I will work as a designer. Leo: Do you have to work in an office? David: No, the best part is that I can work from home! Leo: That is so cool. I am so happy for you.",
                    body: "<b>David:</b> Hey Leo! Guess what? I [got a job offer](tooltip:job-offer)!<br><b>Leo:</b> That's amazing, David! Congratulations! Did you [sign a contract](tooltip:sign-contract) yet?<br><b>David:</b> Not yet, I will sign it tomorrow. I will [work as a](tooltip:work-as) [designer](tooltip:designer).<br><b>Leo:</b> Do you have to work in an office?<br><b>David:</b> No, the best part is that I can [work from home](tooltip:work-from-home)!<br><b>Leo:</b> That is so cool. I am so happy for you.",
                    questions:[
                        { q: "What good news does David have?", options:[{t: "He bought a new house.", c: false}, {t: "He got a job offer.", c: true}, {t: "He fired his boss.", c: false}], type: "mcq" },
                        { q: "When will David sign the contract?", options:[{t: "He already signed it.", c: false}, {t: "He will sign it tomorrow.", c: true}, {t: "He won't sign it.", c: false}], type: "mcq" },
                        { q: "Where will David work?", options:[{t: "In a busy hospital.", c: false}, {t: "In a big office.", c: false}, {t: "From home.", c: true}], type: "mcq" }
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
                { type: "matching", instruction: "Match the person with their role.", pairs:[
                    { left: "Employer", right: "Hires workers", val: "1" },
                    { left: "Employee", right: "Works for the company", val: "2" },
                    { left: "Colleague", right: "Works with you", val: "3" },
                    { left: "Applicant", right: "Asks for a job", val: "4" }
                ]},
                { type: "matching", instruction: "Match the word to its definition.", pairs:[
                    { left: "Resume", right: "Document of your experience", val: "1" },
                    { left: "Salary", right: "Fixed monthly money", val: "2" },
                    { left: "Wage", right: "Money paid by the hour", val: "3" },
                    { left: "Contract", right: "Legal work agreement", val: "4" }
                ]},
                { type: "matching", instruction: "Match the opposite verbs.", pairs:[
                    { left: "To hire", right: "To fire", val: "1" },
                    { left: "To employ", right: "To dismiss", val: "2" }, // Conceptual opposite
                    { left: "To resign", right: "To stay in a job", val: "3" },
                    { left: "Full-time", right: "Part-time", val: "4" }
                ]},
                { type: "matching", instruction: "Match the job expression.", pairs:[
                    { left: "Work as", right: "a designer", val: "1" },
                    { left: "Work for", right: "a company", val: "2" },
                    { left: "In charge", right: "of a team", val: "3" },
                    { left: "Look for", right: "a job", val: "4" }
                ]},

                // --- WORD ORDER (5-14) ---
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "work / a / as / I / designer / graphic / .", correct: "I work as a graphic designer ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "works / a / company / tech / He / for / .", correct: "He works for a tech company ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "responsible / I / for / am / service / customer / .", correct: "I am responsible for customer service ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "charge / of / the / in / is / She / team / .", correct: "She is in charge of the team ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "involves / My / job / reports / writing / .", correct: "My job involves writing reports ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "home / work / Fridays / I / from / on / .", correct: "I work from home on Fridays ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "for / living / do / What / do / you / a / ?", correct: "What do you do for a living ?" },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "your / What / working / hours / are / ?", correct: "What are your working hours ?" },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "to / for / apply / want / a / I / position / .", correct: "I want to apply for a position ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "job / get / a / hope / to / I / offer / .", correct: "I hope to get a job offer ." },

                // --- CLICKABLE ERROR (15-24) ---
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "I work [like](error:as) an accountant." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "She works [to](error:for) a large hospital." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "I am responsible [of](error:for) managing the staff." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "He is in charge [for](error:of) the new project." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "My job [involve](error:involves) calling clients." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "I usually work [at](error:from) home on Mondays." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "Did you apply [to](error:for) the new position?" },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "I hope to [take](error:get) a job offer soon." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "What do you do for a [life](error:living) ?" },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "I have to [make](error:sign) a contract tomorrow." },

                // --- ODD ONE OUT (25-30) ---
                { type: "odd-one-out", instruction: "Which word does NOT belong? (People)", options:[{t: "Employer", c: false}, {t: "Boss", c: false}, {t: "Manager", c: false}, {t: "Salary", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Action Verbs)", options:[{t: "To hire", c: false}, {t: "To fire", c: false}, {t: "To resign", c: false}, {t: "Full-time", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Adjectives)", options:[{t: "Rewarding", c: false}, {t: "Demanding", c: false}, {t: "Unemployed", c: false}, {t: "Contract", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Documents)", options:[{t: "Resume", c: false}, {t: "Cover letter", c: false}, {t: "Contract", c: false}, {t: "Colleague", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Professions)", options:[{t: "Accountant", c: false}, {t: "Designer", c: false}, {t: "Assistant", c: false}, {t: "Promotion", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Money)", options:[{t: "Salary", c: false}, {t: "Wage", c: false}, {t: "Income", c: false}, {t: "Experience", c: true}] },

                // --- TRUE / FALSE (31-35) ---
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "A full-time job usually requires about 40 hours of work per week.", correct: "true"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "If you resign, it means the boss fired you.", correct: "false"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "A 'colleague' is someone you work with.", correct: "true"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "An 'applicant' is the person who conducts the interview.", correct: "false"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "A 'rewarding' job gives you a lot of personal satisfaction.", correct: "true"}] },

                // --- MCQ (36-39) ---
                { type: "mcq", instruction: "Choose the correct phrase.<br>When you want to leave your job permanently, you ________.", options:[{t: "hire", c: false}, {t: "resign", c: true}, {t: "employ", c: false}, {t: "manage", c: false}] },
                { type: "mcq", instruction: "Choose the correct phrase.<br>The document that lists your education and experience is a ________.", options:[{t: "contract", c: false}, {t: "resume", c: true}, {t: "wage", c: false}, {t: "promotion", c: false}] },
                { type: "mcq", instruction: "Choose the correct phrase.<br>When a company gives you a better position, you get a ________.", options:[{t: "promotion", c: true}, {t: "cover letter", c: false}, {t: "colleague", c: false}, {t: "candidate", c: false}] },
                { type: "mcq", instruction: "Choose the correct phrase.<br>A job that is very difficult and requires a lot of effort is ________.", options:[{t: "rewarding", c: false}, {t: "part-time", c: false}, {t: "unemployed", c: false}, {t: "demanding", c: true}] },

                // --- CATEGORIZE (40) ---
                { type: "categorize", instruction: "Sort the words into People and Verbs.", 
                    categories:[{id: "people", name: "People"}, {id: "verbs", name: "Verbs"}],
                    items:[
                        {text: "Manager", catId: "people"}, 
                        {text: "Applicant", catId: "people"}, 
                        {text: "Colleague", catId: "people"}, 
                        {text: "To hire", catId: "verbs"}, 
                        {text: "To quit", catId: "verbs"}, 
                        {text: "To manage", catId: "verbs"}
                    ] 
                }
            ]
        },

        // ======================================================
        // STEP 8: WRITING PRACTICE
        // ======================================================
        {
            title: "Writing Practice",
            instruction: "Write an email to a friend (5-7 sentences) about a recent job interview. Mention what position you applied for, what your responsibilities would be, and how the interview went.",
            example: "Hi Mark! Guess what? I went to a job interview today. I applied for a position as a graphic designer. It is a full-time job for a big tech company. If I get the job, I will be responsible for creating marketing materials. The interviewer was very nice, and the salary is great. I hope I get a job offer soon! Best, Liam.",
            prompts:[
                "State what position you applied for (e.g., I applied for a position as a...).",
                "Mention if it is full-time or part-time.",
                "Describe at least one responsibility (e.g., I would be in charge of...).",
                "Say how you feel about the interview."
            ]
        },

        // ======================================================
        // STEP 9: FLASHCARDS
        // ======================================================
        {
            title: "Flashcards",
            items:[
                // 2A Items (36 items)
                { term: "Employee", definition: "A person employed for wages or salary.", defTrans: "Funcionário / Empregado", example: "The company has over fifty employees.", audioFront: "TTS: Employee", audioBack: "TTS: The company has over fifty employees." },
                { term: "Employer", definition: "A person or organization that employs people.", defTrans: "Empregador / Patrão", example: "A good employer respects their workers.", audioFront: "TTS: Employer", audioBack: "TTS: A good employer respects their workers." },
                { term: "Colleague", definition: "A person with whom one works in a profession or business.", defTrans: "Colega de trabalho", example: "I usually eat lunch with my colleague.", audioFront: "TTS: Colleague", audioBack: "TTS: I usually eat lunch with my colleague." },
                { term: "Staff", definition: "All the people employed by a particular organization.", defTrans: "Equipe / Funcionários", example: "The hospital staff is very helpful.", audioFront: "TTS: Staff", audioBack: "TTS: The hospital staff is very helpful." },
                { term: "Boss", definition: "A person in charge of a worker or organization.", defTrans: "Chefe", example: "My boss told me to finish the report today.", audioFront: "TTS: Boss", audioBack: "TTS: My boss told me to finish the report today." },
                { term: "Manager", definition: "A person responsible for controlling or administering an organization or group of staff.", defTrans: "Gerente", example: "The store manager handles all customer complaints.", audioFront: "TTS: Manager", audioBack: "TTS: The store manager handles all customer complaints." },
                { term: "Candidate", definition: "A person who applies for a job or is nominated for election.", defTrans: "Candidato", example: "Only one candidate will get the job.", audioFront: "TTS: Candidate", audioBack: "TTS: Only one candidate will get the job." },
                { term: "Applicant", definition: "A person who makes a formal application for something, especially a job.", defTrans: "Requerente", example: "Every applicant must submit a resume.", audioFront: "TTS: Applicant", audioBack: "TTS: Every applicant must submit a resume." },
                { term: "Interviewer", definition: "A person who conducts an interview.", defTrans: "Entrevistador", example: "The interviewer asked me some difficult questions.", audioFront: "TTS: Interviewer", audioBack: "TTS: The interviewer asked me some difficult questions." },
                { term: "Accountant", definition: "A person whose job is to keep or inspect financial accounts.", defTrans: "Contador", example: "The accountant calculates the company taxes.", audioFront: "TTS: Accountant", audioBack: "TTS: The accountant calculates the company taxes." },
                { term: "Designer", definition: "A person who plans the form, look, or workings of something.", defTrans: "Designer", example: "A graphic designer created our new logo.", audioFront: "TTS: Designer", audioBack: "TTS: A graphic designer created our new logo." },
                { term: "Assistant", definition: "A person who ranks below a senior person.", defTrans: "Assistente", example: "The assistant organizes the manager's schedule.", audioFront: "TTS: Assistant", audioBack: "TTS: The assistant organizes the manager's schedule." },
                
                { term: "Career", definition: "An occupation undertaken for a significant period of a person's life.", defTrans: "Carreira", example: "She wants a career in medicine.", audioFront: "TTS: Career", audioBack: "TTS: She wants a career in medicine." },
                { term: "Company", definition: "A commercial business.", defTrans: "Empresa", example: "He works for a big tech company.", audioFront: "TTS: Company", audioBack: "TTS: He works for a big tech company." },
                { term: "Salary", definition: "A fixed regular payment, typically paid on a monthly basis.", defTrans: "Salário (fixo)", example: "They offered me a very high salary.", audioFront: "TTS: Salary", audioBack: "TTS: They offered me a very high salary." },
                { term: "Wage", definition: "A fixed regular payment earned for work or services, typically paid on a daily or weekly basis.", defTrans: "Salário (por hora/dia)", example: "The minimum wage increased this year.", audioFront: "TTS: Wage", audioBack: "TTS: The minimum wage increased this year." },
                { term: "Income", definition: "Money received, especially on a regular basis, for work or through investments.", defTrans: "Renda", example: "His monthly income allows him to save money.", audioFront: "TTS: Income", audioBack: "TTS: His monthly income allows him to save money." },
                { term: "Resume (CV)", definition: "A brief account of a person's education, qualifications, and previous experience.", defTrans: "Currículo", example: "I updated my resume before applying.", audioFront: "TTS: Resume", audioBack: "TTS: I updated my resume before applying." },
                { term: "Cover letter", definition: "A letter sent with, and explaining the contents of, another document or a parcel of goods.", defTrans: "Carta de apresentação", example: "You should attach a cover letter to your application.", audioFront: "TTS: Cover letter", audioBack: "TTS: You should attach a cover letter to your application." },
                { term: "Interview", definition: "A formal meeting in which one or more persons question, consult, or evaluate another person.", defTrans: "Entrevista", example: "I am nervous about my job interview tomorrow.", audioFront: "TTS: Interview", audioBack: "TTS: I am nervous about my job interview tomorrow." },
                { term: "Contract", definition: "A written or spoken agreement, especially one concerning employment.", defTrans: "Contrato", example: "Please sign the contract on the last page.", audioFront: "TTS: Contract", audioBack: "TTS: Please sign the contract on the last page." },
                { term: "Promotion", definition: "The action of promoting someone to a higher position or rank.", defTrans: "Promoção", example: "She worked hard and finally got a promotion.", audioFront: "TTS: Promotion", audioBack: "TTS: She worked hard and finally got a promotion." },
                { term: "Experience", definition: "Practical contact with and observation of facts or events.", defTrans: "Experiência", example: "He has ten years of experience in sales.", audioFront: "TTS: Experience", audioBack: "TTS: He has ten years of experience in sales." },
                { term: "Skills", definition: "The ability to do something well; expertise.", defTrans: "Habilidades", example: "Communication and leadership are important skills.", audioFront: "TTS: Skills", audioBack: "TTS: Communication and leadership are important skills." },
                
                { term: "To hire", definition: "To employ someone for wages.", defTrans: "Contratar", example: "We need to hire three new developers.", audioFront: "TTS: To hire", audioBack: "TTS: We need to hire three new developers." },
                { term: "To employ", definition: "To give work to someone and pay them for it.", defTrans: "Empregar", example: "They employ hundreds of people in this town.", audioFront: "TTS: To employ", audioBack: "TTS: They employ hundreds of people in this town." },
                { term: "To fire", definition: "To dismiss an employee from a job.", defTrans: "Demitir", example: "The boss had to fire him for being late.", audioFront: "TTS: To fire", audioBack: "TTS: The boss had to fire him for being late." },
                { term: "To quit", definition: "To resign from a job.", defTrans: "Sair / Desistir", example: "I want to quit my job and travel the world.", audioFront: "TTS: To quit", audioBack: "TTS: I want to quit my job and travel the world." },
                { term: "To resign", definition: "To voluntarily leave a job or other position.", defTrans: "Renunciar / Pedir demissão", example: "The manager will resign due to health problems.", audioFront: "TTS: To resign", audioBack: "TTS: The manager will resign due to health problems." },
                { term: "To earn", definition: "To obtain money in return for labor or services.", defTrans: "Ganhar (dinheiro)", example: "How much do you earn per month?", audioFront: "TTS: To earn", audioBack: "TTS: How much do you earn per month?" },
                { term: "To manage", definition: "To be in charge of a company, establishment, or undertaking.", defTrans: "Gerenciar", example: "She has to manage a team of ten people.", audioFront: "TTS: To manage", audioBack: "TTS: She has to manage a team of ten people." },
                { term: "Full-time", definition: "Occupying or using the whole of someone's available working time.", defTrans: "Tempo integral", example: "I am looking for a full-time job.", audioFront: "TTS: Full-time", audioBack: "TTS: I am looking for a full-time job." },
                { term: "Part-time", definition: "For only part of the usual working day or week.", defTrans: "Meio período", example: "Students usually work part-time.", audioFront: "TTS: Part-time", audioBack: "TTS: Students usually work part-time." },
                { term: "Unemployed", definition: "Without a paid job but available to work.", defTrans: "Desempregado", example: "It is hard to pay bills when you are unemployed.", audioFront: "TTS: Unemployed", audioBack: "TTS: It is hard to pay bills when you are unemployed." },
                { term: "Rewarding", definition: "Providing satisfaction; gratifying.", defTrans: "Gratificante", example: "Teaching children can be a very rewarding job.", audioFront: "TTS: Rewarding", audioBack: "TTS: Teaching children can be a very rewarding job." },
                { term: "Demanding", definition: "Requiring much skill or effort.", defTrans: "Exigente", example: "Being a doctor is a demanding profession.", audioFront: "TTS: Demanding", audioBack: "TTS: Being a doctor is a demanding profession." },

                // 3A Items (16 items)
                { term: "Work as a", definition: "Used to state your specific job title.", defTrans: "Trabalhar como", example: "I work as a graphic designer.", audioFront: "TTS: Work as a", audioBack: "TTS: I work as a graphic designer." },
                { term: "Work for a", definition: "Used to state the company or person you are employed by.", defTrans: "Trabalhar para", example: "I work for a tech company.", audioFront: "TTS: Work for a", audioBack: "TTS: I work for a tech company." },
                { term: "Work in a", definition: "Used to state the department or field you are in.", defTrans: "Trabalhar em", example: "I work in a marketing department.", audioFront: "TTS: Work in a", audioBack: "TTS: I work in a marketing department." },
                { term: "I'm responsible for", definition: "Stating what your duties are.", defTrans: "Eu sou responsável por", example: "I'm responsible for customer service.", audioFront: "TTS: I'm responsible for", audioBack: "TTS: I'm responsible for customer service." },
                { term: "I'm in charge of", definition: "Stating what you manage or control.", defTrans: "Eu sou encarregado de", example: "I'm in charge of the sales team.", audioFront: "TTS: I'm in charge of", audioBack: "TTS: I'm in charge of the sales team." },
                { term: "My job involves", definition: "Describing the tasks your job requires.", defTrans: "Meu trabalho envolve", example: "My job involves writing reports.", audioFront: "TTS: My job involves", audioBack: "TTS: My job involves writing reports." },
                { term: "Work from home", definition: "Doing your job from your residence instead of an office.", defTrans: "Trabalhar de casa", example: "I work from home on Fridays.", audioFront: "TTS: Work from home", audioBack: "TTS: I work from home on Fridays." },
                { term: "A nine-to-five job", definition: "A standard daytime work schedule.", defTrans: "Trabalho em horário comercial", example: "She has a nine-to-five job.", audioFront: "TTS: A nine-to-five job", audioBack: "TTS: She has a nine-to-five job." },
                { term: "What do you do for a living?", definition: "Asking someone what their profession is.", defTrans: "O que você faz da vida?", example: "What do you do for a living?", audioFront: "TTS: What do you do for a living?", audioBack: "TTS: What do you do for a living?" },
                { term: "Where do you work?", definition: "Asking where someone's workplace is.", defTrans: "Onde você trabalha?", example: "Where do you work?", audioFront: "TTS: Where do you work?", audioBack: "TTS: Where do you work?" },
                { term: "What are your working hours?", definition: "Asking about someone's work schedule.", defTrans: "Quais são as suas horas de trabalho?", example: "What are your working hours?", audioFront: "TTS: What are your working hours?", audioBack: "TTS: What are your working hours?" },
                { term: "Look for a job", definition: "To search for employment.", defTrans: "Procurar emprego", example: "I need to look for a job.", audioFront: "TTS: Look for a job", audioBack: "TTS: I need to look for a job." },
                { term: "Apply for a position", definition: "To formally request a specific job.", defTrans: "Candidatar-se a uma vaga", example: "I want to apply for a position.", audioFront: "TTS: Apply for a position", audioBack: "TTS: I want to apply for a position." },
                { term: "Go to a job interview", definition: "To attend a formal meeting to be evaluated for a job.", defTrans: "Ir a uma entrevista de emprego", example: "I have to go to a job interview.", audioFront: "TTS: Go to a job interview", audioBack: "TTS: I have to go to a job interview." },
                { term: "Get a job offer", definition: "To receive a formal invitation to accept a job.", defTrans: "Receber uma oferta de emprego", example: "I hope to get a job offer.", audioFront: "TTS: Get a job offer", audioBack: "TTS: I hope to get a job offer." },
                { term: "Sign a contract", definition: "To formally agree to the terms of employment.", defTrans: "Assinar um contrato", example: "Tomorrow, I will sign a contract.", audioFront: "TTS: Sign a contract", audioBack: "TTS: Tomorrow, I will sign a contract." }
            ]
        }
    ],

    // ======================================================
    // GLOSSARY (All 52 items + Context words)
    // ======================================================
    glossary:[
        // 2A: People & Jobs
        { topic: "People & Jobs", term: "employee", definition: "A person employed for wages or salary.", translation: "Funcionário / Empregado" },
        { topic: "People & Jobs", term: "employer", definition: "A person or organization that employs people.", translation: "Empregador / Patrão" },
        { topic: "People & Jobs", term: "colleague", definition: "A person with whom one works.", translation: "Colega de trabalho" },
        { topic: "People & Jobs", term: "staff", definition: "All the people employed by a particular organization.", translation: "Equipe / Funcionários" },
        { topic: "People & Jobs", term: "boss", definition: "A person in charge of a worker or organization.", translation: "Chefe" },
        { topic: "People & Jobs", term: "manager", definition: "A person responsible for administering an organization.", translation: "Gerente" },
        { topic: "People & Jobs", term: "candidate", definition: "A person who applies for a job.", translation: "Candidato" },
        { topic: "People & Jobs", term: "applicant", definition: "A person who makes a formal application for a job.", translation: "Requerente" },
        { topic: "People & Jobs", term: "interviewer", definition: "A person who conducts an interview.", translation: "Entrevistador" },
        { topic: "People & Jobs", term: "accountant", definition: "A person whose job is to keep financial accounts.", translation: "Contador" },
        { topic: "People & Jobs", term: "designer", definition: "A person who plans the look or workings of something.", translation: "Designer" },
        { topic: "People & Jobs", term: "assistant", definition: "A person who ranks below a senior person.", translation: "Assistente" },

        // 2A: Job Seeking & Work
        { topic: "Job Seeking", term: "career", definition: "An occupation undertaken for a significant period.", translation: "Carreira" },
        { topic: "Job Seeking", term: "company", definition: "A commercial business.", translation: "Empresa" },
        { topic: "Job Seeking", term: "salary", definition: "A fixed regular payment (monthly/yearly).", translation: "Salário (fixo)" },
        { topic: "Job Seeking", term: "wage", definition: "A fixed regular payment (hourly/daily).", translation: "Salário (por hora/dia)" },
        { topic: "Job Seeking", term: "income", definition: "Money received, especially on a regular basis.", translation: "Renda" },
        { topic: "Job Seeking", term: "resume", definition: "A brief account of a person's experience.", translation: "Currículo" },
        { topic: "Job Seeking", term: "cover-letter", definition: "A letter sent with a resume to introduce yourself.", translation: "Carta de apresentação" },
        { topic: "Job Seeking", term: "interview", definition: "A formal meeting to evaluate an applicant.", translation: "Entrevista" },
        { topic: "Job Seeking", term: "contract", definition: "A legally binding agreement.", translation: "Contrato" },
        { topic: "Job Seeking", term: "promotion", definition: "The action of promoting someone to a higher position.", translation: "Promoção" },
        { topic: "Job Seeking", term: "experience", definition: "Practical contact with and observation of facts.", translation: "Experiência" },
        { topic: "Job Seeking", term: "skills", definition: "The ability to do something well.", translation: "Habilidades" },

        // 2A: Verbs & Adjectives
        { topic: "Verbs & Adjectives", term: "hire", definition: "To employ someone for wages.", translation: "Contratar" },
        { topic: "Verbs & Adjectives", term: "employ", definition: "To give work to someone and pay them for it.", translation: "Empregar" },
        { topic: "Verbs & Adjectives", term: "fire", definition: "To dismiss an employee from a job.", translation: "Demitir" },
        { topic: "Verbs & Adjectives", term: "quit", definition: "To resign from a job.", translation: "Sair / Desistir" },
        { topic: "Verbs & Adjectives", term: "resign", definition: "To voluntarily leave a job (formal).", translation: "Renunciar / Pedir demissão" },
        { topic: "Verbs & Adjectives", term: "earn", definition: "To obtain money in return for labor.", translation: "Ganhar (dinheiro)" },
        { topic: "Verbs & Adjectives", term: "manage", definition: "To be in charge of a company or team.", translation: "Gerenciar" },
        { topic: "Verbs & Adjectives", term: "full-time", definition: "Occupying the whole of someone's available working time.", translation: "Tempo integral" },
        { topic: "Verbs & Adjectives", term: "part-time", definition: "For only part of the usual working week.", translation: "Meio período" },
        { topic: "Verbs & Adjectives", term: "unemployed", definition: "Without a paid job.", translation: "Desempregado" },
        { topic: "Verbs & Adjectives", term: "rewarding", definition: "Providing satisfaction.", translation: "Gratificante" },
        { topic: "Verbs & Adjectives", term: "demanding", definition: "Requiring much skill or effort.", translation: "Exigente" },

        // 3A: Expressions
        { topic: "Expressions", term: "work-as", definition: "Used to state your specific job title.", translation: "Trabalhar como" },
        { topic: "Expressions", term: "work-for", definition: "Used to state the company you are employed by.", translation: "Trabalhar para" },
        { topic: "Expressions", term: "work-in", definition: "Used to state the department or field you are in.", translation: "Trabalhar em" },
        { topic: "Expressions", term: "responsible-for", definition: "Stating what your duties are.", translation: "Ser responsável por" },
        { topic: "Expressions", term: "in-charge-of", definition: "Stating what you manage or control.", translation: "Ser encarregado de" },
        { topic: "Expressions", term: "involve", definition: "Describing the tasks your job requires.", translation: "Envolver" },
        { topic: "Expressions", term: "work-from-home", definition: "Doing your job from your residence.", translation: "Trabalhar de casa" },
        { topic: "Expressions", term: "nine-to-five", definition: "A standard daytime work schedule.", translation: "Trabalho em horário comercial" },
        { topic: "Expressions", term: "what-do-living", definition: "Asking someone what their profession is.", translation: "O que você faz da vida?" },
        { topic: "Expressions", term: "where-work", definition: "Asking where someone's workplace is.", translation: "Onde você trabalha?" },
        { topic: "Expressions", term: "working-hours", definition: "Asking about someone's work schedule.", translation: "Quais são as suas horas de trabalho?" },
        { topic: "Expressions", term: "look-for-job", definition: "To search for employment.", translation: "Procurar emprego" },
        { topic: "Expressions", term: "apply-for", definition: "To formally request a specific job.", translation: "Candidatar-se a uma vaga" },
        { topic: "Expressions", term: "go-interview", definition: "To attend a formal meeting to be evaluated for a job.", translation: "Ir a uma entrevista" },
        { topic: "Expressions", term: "job-offer", definition: "To receive a formal invitation to accept a job.", translation: "Receber uma oferta de emprego" },
        { topic: "Expressions", term: "sign-contract", definition: "To formally agree to the terms of employment.", translation: "Assinar um contrato" },

        // Additional Context Words Used in Texts/Intros
        { topic: "Context", term: "job", definition: "A paid position of regular employment.", translation: "Trabalho / Emprego" },
        { topic: "Context", term: "responsibilities", definition: "Things that one is required to do as part of a job.", translation: "Responsabilidades" },
        { topic: "Context", term: "work-environment", definition: "The setting, social features, and physical conditions in which you work.", translation: "Ambiente de trabalho" },
        { topic: "Context", term: "challenging", definition: "Testing one's abilities; demanding.", translation: "Desafiador" },
        { topic: "Context", term: "get-promoted", definition: "To be raised to a higher position or rank.", translation: "Ser promovido" }
    ]
});