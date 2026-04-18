/**
 * English Block Assembling - LESSON DATA: Topic 18
 * Topic: Public Services
 * Level: Upper A2 ~ Lower B1
 */

window.initLesson({
    // --- METADATA ---
    lessonId: "lesson-18",
    block: "3",
    topicTitle: "Public Services",

    steps:[
        // ======================================================
        // STEP 0: INTRO & CAN-DO
        // ======================================================
        {
            title: "Intro & Can-Do",
            objectives: "• Interact confidently at the [post office](tooltip:post-office) and the [bank](tooltip:bank).<br>• Request services at government offices to [renew](tooltip:renew) documents.<br>• Handle administrative tasks like filling out [forms](tooltip:form) and showing [ID](tooltip:id-form).<br>• Call for help and report issues during an [emergency](tooltip:emergency).",
            welcome: "Welcome to Lesson 18! Dealing with bureaucracy in a foreign language can be intimidating, but it doesn't have to be. In this lesson, you will learn the practical vocabulary needed to mail packages, open bank accounts, and renew your passport. We will also cover crucial phrases for emergency situations so you always know exactly what to say to get help quickly.",
            audio: {
                objectives: "TTS: In this lesson, you will learn to: Interact confidently at the post office and the bank. Request services at government offices to renew documents. Handle administrative tasks like filling out forms and showing ID. Call for help and report issues during an emergency.",
                welcome: "TTS: Welcome to Lesson 18! Dealing with bureaucracy in a foreign language can be intimidating, but it doesn't have to be. In this lesson, you will learn the practical vocabulary needed to mail packages, open bank accounts, and renew your passport. We will also cover crucial phrases for emergency situations so you always know exactly what to say to get help quickly."
            }
        },

        // ======================================================
        // STEP 1: CONTEXT DIALOGUE
        // ======================================================
        {
            title: "Context Dialogue",
            context: "Mark is running errands around town. First, he stops by the local post office to talk to the clerk.",
            contextAudio: "TTS: Clerk: Next in line! How can I help you today? Mark: Hi. I'd like to send this package to London. Clerk: Sure. Would you like to send it by airmail or surface mail? Mark: Airmail, please. I also want to track it. Clerk: Okay. Do you need a tracking number? Mark: Yes, please. Clerk: You need a customs declaration form for international shipping. Fill out this form, please. Mark: No problem. Do you have a form of ID requirement for this? Clerk: Just your driver's license is fine. Mark: Thanks. After this, I need to go to the bank. What's the exchange rate today? Clerk: I'm not sure. You will have to take a number and wait when you get to the bank to ask the teller.",
            dialogue:[
                { speaker: "Clerk", text: "Next in line! How can I help you today?" },
                { speaker: "Mark", text: "Hi. [I'd like to send this package](tooltip:send-package) to London." },
                { speaker: "Clerk", text: "Sure. Would you like to send it[by airmail or surface mail](tooltip:airmail-surface)?" },
                { speaker: "Mark", text: "Airmail, please. I also want to track it." },
                { speaker: "Clerk", text: "Okay. [Do you need a tracking number](tooltip:need-tracking)?" },
                { speaker: "Mark", text: "Yes, please." },
                { speaker: "Clerk", text: "[You need a customs declaration form](tooltip:customs-form) for international shipping. [Fill out this form](tooltip:fill-out-form), please." },
                { speaker: "Mark", text: "No problem.[Do you have a form of ID](tooltip:have-form-id) requirement for this?" },
                { speaker: "Clerk", text: "Just your driver's license is fine." },
                { speaker: "Mark", text: "Thanks. After this, I need to go to the bank.[What's the exchange rate today](tooltip:exchange-rate)?" },
                { speaker: "Clerk", text: "I'm not sure. You will have to [take a number and wait](tooltip:take-number) when you get to the bank to ask the teller." }
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
                    title: "Public Places & People",
                    audio: "TTS: Post office. Bank. Embassy. Town hall. Clerk. Bank teller. Police officer. Firefighter. Paramedic. Operator. Mail carrier. Financial advisor.",
                    items:[
                        { term: "Post office", trans: "Correios" },
                        { term: "Bank", trans: "Banco" },
                        { term: "Embassy", trans: "Embaixada" },
                        { term: "Town hall", trans: "Prefeitura" },
                        { term: "Clerk", trans: "Atendente / Balconista" },
                        { term: "Bank teller", trans: "Caixa de banco (pessoa)" },
                        { term: "Police officer", trans: "Policial" },
                        { term: "Firefighter", trans: "Bombeiro" },
                        { term: "Paramedic", trans: "Paramédico" },
                        { term: "Operator", trans: "Operador / Atendente de emergência" },
                        { term: "Mail carrier", trans: "Carteiro" },
                        { term: "Financial advisor", trans: "Consultor financeiro" }
                    ]
                },
                {
                    title: "Documents & Items",
                    audio: "TTS: Package. Stamp. Envelope. Account. Currency. Loan. Mortgage. Form. Passport. Driver's license. Tax. PIN.",
                    items:[
                        { term: "Package", trans: "Pacote / Encomenda" },
                        { term: "Stamp", trans: "Selo" },
                        { term: "Envelope", trans: "Envelope" },
                        { term: "Account", trans: "Conta bancária" },
                        { term: "Currency", trans: "Moeda corrente" },
                        { term: "Loan", trans: "Empréstimo" },
                        { term: "Mortgage", trans: "Hipoteca" },
                        { term: "Form", trans: "Formulário" },
                        { term: "Passport", trans: "Passaporte" },
                        { term: "Driver's license", trans: "Carteira de motorista" },
                        { term: "Tax", trans: "Imposto" },
                        { term: "PIN", trans: "Senha pessoal numérica" }
                    ]
                },
                {
                    title: "Verbs & Adjectives",
                    audio: "TTS: To send. To deliver. To deposit. To withdraw. To exchange. To fill out. To renew. To report. To rescue. Public. Official. Urgent.",
                    items:[
                        { term: "To send", trans: "Enviar" },
                        { term: "To deliver", trans: "Entregar" },
                        { term: "To deposit", trans: "Depositar" },
                        { term: "To withdraw", trans: "Sacar (dinheiro)" },
                        { term: "To exchange", trans: "Trocar / Fazer câmbio" },
                        { term: "To fill out", trans: "Preencher" },
                        { term: "To renew", trans: "Renovar" },
                        { term: "To report", trans: "Relatar / Denunciar" },
                        { term: "To rescue", trans: "Resgatar / Salvar" },
                        { term: "Public", trans: "Público(a)" },
                        { term: "Official", trans: "Oficial" },
                        { term: "Urgent", trans: "Urgente" }
                    ]
                }
            ],

            // --- 2B: EXAMPLES ---
            exampleGroups:[
                {
                    title: "Public Places & People",
                    audio: "TTS: I need to mail this letter at the post office. She went to the bank to deposit her paycheck. You must go to the embassy to get a visa. The mayor works at the town hall. The clerk behind the desk helped me with my forms. The bank teller gave me fifty dollars in cash. The police officer gave him a speeding ticket. The brave firefighter ran into the burning building. The paramedic treated the injured driver. The emergency operator answered the 911 call. The mail carrier delivers letters every morning. I spoke to a financial advisor about my investments.",
                    items:[
                        { term: "Post office", sent: "I need to mail this letter at the post office.", trans: "Preciso enviar esta carta nos correios." },
                        { term: "Bank", sent: "She went to the bank to deposit her paycheck.", trans: "Ela foi ao banco depositar seu salário." },
                        { term: "Embassy", sent: "You must go to the embassy to get a visa.", trans: "Você deve ir à embaixada para obter um visto." },
                        { term: "Town hall", sent: "The mayor works at the town hall.", trans: "O prefeito trabalha na prefeitura." },
                        { term: "Clerk", sent: "The clerk behind the desk helped me with my forms.", trans: "O atendente atrás da mesa me ajudou com meus formulários." },
                        { term: "Bank teller", sent: "The bank teller gave me fifty dollars in cash.", trans: "O caixa do banco me deu cinquenta dólares em dinheiro." },
                        { term: "Police officer", sent: "The police officer gave him a speeding ticket.", trans: "O policial deu a ele uma multa por excesso de velocidade." },
                        { term: "Firefighter", sent: "The brave firefighter ran into the burning building.", trans: "O corajoso bombeiro correu para o prédio em chamas." },
                        { term: "Paramedic", sent: "The paramedic treated the injured driver.", trans: "O paramédico tratou o motorista ferido." },
                        { term: "Operator", sent: "The emergency operator answered the 911 call.", trans: "A operadora de emergência atendeu a chamada do 190 (911)." },
                        { term: "Mail carrier", sent: "The mail carrier delivers letters every morning.", trans: "O carteiro entrega cartas todas as manhãs." },
                        { term: "Financial advisor", sent: "I spoke to a financial advisor about my investments.", trans: "Eu conversei com um consultor financeiro sobre meus investimentos." }
                    ]
                },
                {
                    title: "Documents & Items",
                    audio: "TTS: I am expecting a heavy package from China. You need to put a stamp on the envelope before mailing it. He sealed the letter inside the envelope. I opened a new savings account at the bank. The euro is the official currency in France. I took out a loan to buy a new car. We pay our mortgage every month to the bank. Please write your name on this application form. You must show your passport at the border. I passed my test and got my driver's license. The government increased the income tax. Never share your debit card PIN with anyone.",
                    items:[
                        { term: "Package", sent: "I am expecting a heavy package from China.", trans: "Estou esperando um pacote pesado da China." },
                        { term: "Stamp", sent: "You need to put a stamp on the envelope before mailing it.", trans: "Você precisa colocar um selo no envelope antes de enviá-lo." },
                        { term: "Envelope", sent: "He sealed the letter inside the envelope.", trans: "Ele selou a carta dentro do envelope." },
                        { term: "Account", sent: "I opened a new savings account at the bank.", trans: "Abri uma nova conta poupança no banco." },
                        { term: "Currency", sent: "The euro is the official currency in France.", trans: "O euro é a moeda oficial na França." },
                        { term: "Loan", sent: "I took out a loan to buy a new car.", trans: "Fiz um empréstimo para comprar um carro novo." },
                        { term: "Mortgage", sent: "We pay our mortgage every month to the bank.", trans: "Nós pagamos nossa hipoteca todo mês para o banco." },
                        { term: "Form", sent: "Please write your name on this application form.", trans: "Por favor, escreva seu nome neste formulário de inscrição." },
                        { term: "Passport", sent: "You must show your passport at the border.", trans: "Você deve mostrar seu passaporte na fronteira." },
                        { term: "Driver's license", sent: "I passed my test and got my driver's license.", trans: "Eu passei no teste e peguei minha carteira de motorista." },
                        { term: "Tax", sent: "The government increased the income tax.", trans: "O governo aumentou o imposto de renda." },
                        { term: "PIN", sent: "Never share your debit card PIN with anyone.", trans: "Nunca compartilhe a senha (PIN) do seu cartão de débito com ninguém." }
                    ]
                },
                {
                    title: "Verbs & Adjectives",
                    audio: "TTS: I will send the documents by express mail. The courier will deliver the box tomorrow. I need to deposit this check into my account. He used the ATM to withdraw some cash. I want to exchange dollars for euros. You must fill out the form with a black pen. I went to the DMV to renew my license. She called 911 to report a robbery. The firefighters had to rescue a cat from the tree. The park is a public space for everyone. You need an official stamp on this document. Call an ambulance, it is an urgent medical situation.",
                    items:[
                        { term: "To send", sent: "I will send the documents by express mail.", trans: "Eu vou enviar os documentos por correio expresso." },
                        { term: "To deliver", sent: "The courier will deliver the box tomorrow.", trans: "O entregador vai entregar a caixa amanhã." },
                        { term: "To deposit", sent: "I need to deposit this check into my account.", trans: "Eu preciso depositar este cheque na minha conta." },
                        { term: "To withdraw", sent: "He used the ATM to withdraw some cash.", trans: "Ele usou o caixa eletrônico para sacar dinheiro em espécie." },
                        { term: "To exchange", sent: "I want to exchange dollars for euros.", trans: "Eu quero trocar (fazer câmbio de) dólares por euros." },
                        { term: "To fill out", sent: "You must fill out the form with a black pen.", trans: "Você deve preencher o formulário com uma caneta preta." },
                        { term: "To renew", sent: "I went to the DMV to renew my license.", trans: "Fui ao Detran (DMV) para renovar minha carteira." },
                        { term: "To report", sent: "She called 911 to report a robbery.", trans: "Ela ligou para o 190 (911) para denunciar um assalto." },
                        { term: "To rescue", sent: "The firefighters had to rescue a cat from the tree.", trans: "Os bombeiros tiveram que resgatar um gato da árvore." },
                        { term: "Public", sent: "The park is a public space for everyone.", trans: "O parque é um espaço público para todos." },
                        { term: "Official", sent: "You need an official stamp on this document.", trans: "Você precisa de um carimbo oficial neste documento." },
                        { term: "Urgent", sent: "Call an ambulance, it is an urgent medical situation.", trans: "Chame uma ambulância, é uma situação médica urgente." }
                    ]
                }
            ],

            // --- 2C: PRACTICE ---
            drillGroups:[
                {
                    title: "Public Places & People",
                    drills:[
                        { q: "A place where you go to mail letters and buy stamps is the ________.", options:[{t: "Post office", c: true}, {t: "Bank", c: false}, {t: "Town hall", c: false}, {t: "Embassy", c: false}], type: "mcq" },
                        { q: "A financial institution where you deposit and withdraw money is a ________.", options:[{t: "Embassy", c: false}, {t: "Town hall", c: false}, {t: "Bank", c: true}, {t: "Post office", c: false}], type: "mcq" },
                        { q: "The official residence or offices of an ambassador in a foreign country is an ________.", options:[{t: "Embassy", c: true}, {t: "Bank", c: false}, {t: "Town hall", c: false}, {t: "Post office", c: false}], type: "mcq" },
                        { q: "The building that houses the local government offices is the ________.", options:[{t: "Town hall", c: true}, {t: "Bank", c: false}, {t: "Embassy", c: false}, {t: "Post office", c: false}], type: "mcq" },
                        { q: "A person employed in an office or bank to keep records or assist customers is a ________.", options:[{t: "Clerk", c: true}, {t: "Paramedic", c: false}, {t: "Firefighter", c: false}, {t: "Mail carrier", c: false}], type: "mcq" },
                        { q: "An employee of a bank who deals directly with customers is a ________.", options:[{t: "Paramedic", c: false}, {t: "Bank teller", c: true}, {t: "Mail carrier", c: false}, {t: "Firefighter", c: false}], type: "mcq" },
                        { q: "A person whose job is to enforce laws and prevent crime is a ________.", options:[{t: "Police officer", c: true}, {t: "Financial advisor", c: false}, {t: "Clerk", c: false}, {t: "Mail carrier", c: false}], type: "mcq" },
                        { q: "A person whose job is to extinguish fires is a ________.", options:[{t: "Firefighter", c: true}, {t: "Bank teller", c: false}, {t: "Operator", c: false}, {t: "Clerk", c: false}], type: "mcq" },
                        { q: "A person trained to give emergency medical care is a ________.", options:[{t: "Paramedic", c: true}, {t: "Operator", c: false}, {t: "Mail carrier", c: false}, {t: "Financial advisor", c: false}], type: "mcq" },
                        { q: "A person who answers emergency phone calls is an ________.", options:[{t: "Operator", c: true}, {t: "Clerk", c: false}, {t: "Paramedic", c: false}, {t: "Police officer", c: false}], type: "mcq" },
                        { q: "A person who delivers mail to your house is a ________.", options:[{t: "Mail carrier", c: true}, {t: "Bank teller", c: false}, {t: "Firefighter", c: false}, {t: "Operator", c: false}], type: "mcq" },
                        { q: "A professional who provides advice on money and investments is a ________.", options:[{t: "Financial advisor", c: true}, {t: "Clerk", c: false}, {t: "Police officer", c: false}, {t: "Paramedic", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Documents & Items",
                    drills:[
                        { q: "An object or group of objects wrapped in paper or packed in a box to be sent by mail is a ________.", options:[{t: "Package", c: true}, {t: "Account", c: false}, {t: "Currency", c: false}, {t: "Tax", c: false}], type: "mcq" },
                        { q: "A small piece of paper stuck to a letter to show that postage has been paid is a ________.", options:[{t: "Stamp", c: true}, {t: "PIN", c: false}, {t: "Loan", c: false}, {t: "Mortgage", c: false}], type: "mcq" },
                        { q: "A flat paper container used to enclose a letter is an ________.", options:[{t: "Envelope", c: true}, {t: "Account", c: false}, {t: "Form", c: false}, {t: "Passport", c: false}], type: "mcq" },
                        { q: "A record or statement of financial expenditure or receipts at a bank is an ________.", options:[{t: "Account", c: true}, {t: "Envelope", c: false}, {t: "Driver's license", c: false}, {t: "Stamp", c: false}], type: "mcq" },
                        { q: "A system of money in general use in a particular country is its ________.", options:[{t: "Currency", c: true}, {t: "Tax", c: false}, {t: "PIN", c: false}, {t: "Loan", c: false}], type: "mcq" },
                        { q: "A thing that is borrowed, especially a sum of money that is expected to be paid back with interest is a ________.", options:[{t: "Loan", c: true}, {t: "Stamp", c: false}, {t: "Envelope", c: false}, {t: "Account", c: false}], type: "mcq" },
                        { q: "A legal agreement by which a bank lends money in exchange for taking title of the debtor's property is a ________.", options:[{t: "Mortgage", c: true}, {t: "Currency", c: false}, {t: "Tax", c: false}, {t: "Passport", c: false}], type: "mcq" },
                        { q: "A printed document with blank spaces for information to be inserted is a ________.", options:[{t: "Form", c: true}, {t: "Package", c: false}, {t: "Loan", c: false}, {t: "PIN", c: false}], type: "mcq" },
                        { q: "An official document issued by a government, certifying the holder's identity and citizenship is a ________.", options:[{t: "Passport", c: true}, {t: "Stamp", c: false}, {t: "Account", c: false}, {t: "Mortgage", c: false}], type: "mcq" },
                        { q: "A document permitting a person to drive a motor vehicle is a ________.", options:[{t: "Driver's license", c: true}, {t: "Form", c: false}, {t: "Tax", c: false}, {t: "Currency", c: false}], type: "mcq" },
                        { q: "A compulsory contribution to state revenue, levied by the government is a ________.", options:[{t: "Tax", c: true}, {t: "Loan", c: false}, {t: "PIN", c: false}, {t: "Stamp", c: false}], type: "mcq" },
                        { q: "A personal identification number used for bank cards is a ________.", options:[{t: "PIN", c: true}, {t: "Form", c: false}, {t: "Envelope", c: false}, {t: "Package", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Verbs & Adjectives",
                    drills:[
                        { q: "To cause an object or letter to go to a destination is ________.", options:[{t: "To send", c: true}, {t: "To rescue", c: false}, {t: "To report", c: false}, {t: "To renew", c: false}], type: "mcq" },
                        { q: "To bring and hand over a letter or goods to the proper recipient is ________.", options:[{t: "To deliver", c: true}, {t: "To exchange", c: false}, {t: "To withdraw", c: false}, {t: "To deposit", c: false}], type: "mcq" },
                        { q: "To put money into a bank account is ________.", options:[{t: "To deposit", c: true}, {t: "To withdraw", c: false}, {t: "To rescue", c: false}, {t: "To report", c: false}], type: "mcq" },
                        { q: "To remove money from a bank account is ________.", options:[{t: "To withdraw", c: true}, {t: "To deposit", c: false}, {t: "To deliver", c: false}, {t: "To send", c: false}], type: "mcq" },
                        { q: "To give one currency and receive another in return is ________.", options:[{t: "To exchange", c: true}, {t: "To fill out", c: false}, {t: "To renew", c: false}, {t: "To rescue", c: false}], type: "mcq" },
                        { q: "To complete a form by providing the required information is ________.", options:[{t: "To fill out", c: true}, {t: "To send", c: false}, {t: "To deposit", c: false}, {t: "To withdraw", c: false}], type: "mcq" },
                        { q: "To extend the period of validity of a license or document is ________.", options:[{t: "To renew", c: true}, {t: "To report", c: false}, {t: "To deliver", c: false}, {t: "To exchange", c: false}], type: "mcq" },
                        { q: "To give a spoken or written account of something that has happened is ________.", options:[{t: "To report", c: true}, {t: "To rescue", c: false}, {t: "To fill out", c: false}, {t: "To renew", c: false}], type: "mcq" },
                        { q: "To save someone from a dangerous or difficult situation is ________.", options:[{t: "To rescue", c: true}, {t: "To send", c: false}, {t: "To deposit", c: false}, {t: "To withdraw", c: false}], type: "mcq" },
                        { q: "Relating to or available for people in general means it is ________.", options:[{t: "Public", c: true}, {t: "Official", c: false}, {t: "Urgent", c: false}, {t: "To exchange", c: false}], type: "mcq" },
                        { q: "Relating to an authority or public body and its duties means it is ________.", options:[{t: "Official", c: true}, {t: "Urgent", c: false}, {t: "Public", c: false}, {t: "To report", c: false}], type: "mcq" },
                        { q: "Requiring immediate action or attention means it is ________.", options:[{t: "Urgent", c: true}, {t: "Public", c: false}, {t: "Official", c: false}, {t: "To rescue", c: false}], type: "mcq" }
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
                    title: "At the Post Office & Bank",
                    audio: "TTS: I'd like to send this package. How much is a stamp? By airmail or surface mail? Do you need a tracking number? I'd like to open a bank account. What's the exchange rate today?",
                    explanation: "Essential phrases to mail items globally and manage money in a bank.<br><span style='color:var(--primary-blue); font-style:italic;'>(Frases essenciais para enviar itens globalmente e administrar dinheiro em um banco.)</span>",
                    samples:[
                        { en: "Hello, <b>I'd like to send this package</b> to Paris.", pt: "<span style='color:var(--primary-blue)'>(Olá, eu gostaria de enviar este pacote para Paris.)</span>" },
                        { en: "<b>How much is a stamp</b> for this letter?", pt: "<span style='color:var(--primary-blue)'>(Quanto custa um selo para esta carta?)</span>" },
                        { en: "Do you want to send it <b>by airmail or surface mail?</b>", pt: "<span style='color:var(--primary-blue)'>(Você quer enviar por correio aéreo ou terrestre?)</span>" },
                        { en: "<b>Do you need a tracking number?</b>", pt: "<span style='color:var(--primary-blue)'>(Você precisa de um número de rastreamento?)</span>" },
                        { en: "Good morning, <b>I'd like to open a bank account.</b>", pt: "<span style='color:var(--primary-blue)'>(Bom dia, eu gostaria de abrir uma conta bancária.)</span>" },
                        { en: "<b>What's the exchange rate today?</b>", pt: "<span style='color:var(--primary-blue)'>(Qual é a taxa de câmbio hoje?)</span>" }
                    ]
                },
                {
                    title: "Government Offices",
                    audio: "TTS: I need to renew my passport. Fill out this form. Do you have a form of ID? Take a number and wait. You need a customs declaration form. Can I buy a book of stamps?",
                    explanation: "Phrases needed when processing paperwork, showing identification, and dealing with clerks.<br><span style='color:var(--primary-blue); font-style:italic;'>(Frases necessárias ao processar documentação, mostrar identificação e lidar com atendentes.)</span>",
                    samples:[
                        { en: "<b>I need to renew my passport</b> before my trip.", pt: "<span style='color:var(--primary-blue)'>(Preciso renovar meu passaporte antes da minha viagem.)</span>" },
                        { en: "Please <b>fill out this form</b> completely.", pt: "<span style='color:var(--primary-blue)'>(Por favor, preencha este formulário completamente.)</span>" },
                        { en: "<b>Do you have a form of ID?</b>", pt: "<span style='color:var(--primary-blue)'>(Você tem um documento de identidade?)</span>" },
                        { en: "Please <b>take a number and wait</b> for your turn.", pt: "<span style='color:var(--primary-blue)'>(Por favor, pegue uma senha e espere a sua vez.)</span>" },
                        { en: "<b>You need a customs declaration form</b> for this box.", pt: "<span style='color:var(--primary-blue)'>(Você precisa de um formulário de declaração alfandegária para esta caixa.)</span>" },
                        { en: "<b>Can I buy a book of stamps?</b>", pt: "<span style='color:var(--primary-blue)'>(Posso comprar um talão de selos?)</span>" }
                    ]
                },
                {
                    title: "Emergencies",
                    audio: "TTS: Call for help! Call an ambulance. There's been an accident. I'd like to report a crime. What's your emergency? Please evacuate the building.",
                    explanation: "Critical phrases for communicating dangerous situations, requesting medical aid, and talking to dispatchers.<br><span style='color:var(--primary-blue); font-style:italic;'>(Frases críticas para comunicar situações perigosas, solicitar ajuda médica e falar com atendentes de emergência.)</span>",
                    samples:[
                        { en: "Hurry, <b>call for help!</b>", pt: "<span style='color:var(--primary-blue)'>(Rápido, peça ajuda!)</span>" },
                        { en: "He is hurt, <b>call an ambulance!</b>", pt: "<span style='color:var(--primary-blue)'>(Ele está machucado, chame uma ambulância!)</span>" },
                        { en: "<b>There's been an accident</b> on the highway.", pt: "<span style='color:var(--primary-blue)'>(Houve um acidente na rodovia.)</span>" },
                        { en: "<b>I'd like to report a crime.</b> My bag was stolen.", pt: "<span style='color:var(--primary-blue)'>(Gostaria de relatar um crime. Minha bolsa foi roubada.)</span>" },
                        { en: "911, <b>what's your emergency?</b>", pt: "<span style='color:var(--primary-blue)'>(911/190, qual é a sua emergência?)</span>" },
                        { en: "There is a fire, <b>please evacuate the building.</b>", pt: "<span style='color:var(--primary-blue)'>(Há um incêndio, por favor, evacuem o prédio.)</span>" }
                    ]
                }
            ],

            // --- 3B: DIALOGUES ---
            dialogueGroups:[
                {
                    title: "Dialogue 1: Shipping a Package",
                    audio: "TTS: I'd like to send this package to Canada. Okay. By airmail or surface mail? Airmail, please. Do you need a tracking number? Yes, I do.",
                    lines:[
                        { speaker: "Mark", text: "I'd like to send this package to Canada.", pt: "(Eu gostaria de enviar este pacote para o Canadá.)" },
                        { speaker: "Clerk", text: "Okay. By airmail or surface mail?", pt: "(Ok. Por correio aéreo ou terrestre?)" },
                        { speaker: "Mark", text: "Airmail, please.", pt: "(Correio aéreo, por favor.)" },
                        { speaker: "Clerk", text: "Do you need a tracking number?", pt: "(Você precisa de um número de rastreamento?)" },
                        { speaker: "Mark", text: "Yes, I do.", pt: "(Sim, preciso.)" }
                    ]
                },
                {
                    title: "Dialogue 2: Stamps and Forms",
                    audio: "TTS: Can I buy a book of stamps? Yes, you can. Also, how much is a stamp for this letter? It's one dollar. By the way, you need a customs declaration form for that large box.",
                    lines:[
                        { speaker: "Mark", text: "Can I buy a book of stamps? Also, how much is a stamp for this letter?", pt: "(Posso comprar um talão de selos? Além disso, quanto custa um selo para esta carta?)" },
                        { speaker: "Clerk", text: "It's one dollar. By the way, you need a customs declaration form for that large box.", pt: "(Custa um dólar. A propósito, você precisa de um formulário de declaração alfandegária para aquela caixa grande.)" }
                    ]
                },
                {
                    title: "Dialogue 3: At the Bank",
                    audio: "TTS: Hello, I'd like to open a bank account. And what's the exchange rate today? Welcome. The rate is excellent today. Do you have a form of ID? Yes, here is my driver's license.",
                    lines:[
                        { speaker: "Lisa", text: "Hello, I'd like to open a bank account. And what's the exchange rate today?", pt: "(Olá, eu gostaria de abrir uma conta bancária. E qual é a taxa de câmbio hoje?)" },
                        { speaker: "Teller", text: "Welcome. The rate is excellent today. Do you have a form of ID?", pt: "(Bem-vinda. A taxa está excelente hoje. Você tem um documento de identidade?)" },
                        { speaker: "Lisa", text: "Yes, here is my driver's license.", pt: "(Sim, aqui está minha carteira de motorista.)" }
                    ]
                },
                {
                    title: "Dialogue 4: Bureaucracy",
                    audio: "TTS: I need to renew my passport. It expires next month. Please take a number and wait for your turn. I already did. Good. Now, fill out this form completely.",
                    lines:[
                        { speaker: "Tom", text: "I need to renew my passport. It expires next month.", pt: "(Preciso renovar meu passaporte. Ele expira no mês que vem.)" },
                        { speaker: "Official", text: "Please take a number and wait for your turn.", pt: "(Por favor, pegue uma senha e espere a sua vez.)" },
                        { speaker: "Tom", text: "I already did.", pt: "(Eu já peguei.)" },
                        { speaker: "Official", text: "Good. Now, fill out this form completely.", pt: "(Bom. Agora, preencha este formulário completamente.)" }
                    ]
                },
                {
                    title: "Dialogue 5: Reporting a Crime",
                    audio: "TTS: Call for help! There's been an accident. Nine one one, what's your emergency? Two cars crashed! I'd like to report a crime, too. The driver ran away. Stay calm, we are sending the police.",
                    lines:[
                        { speaker: "Caller", text: "Call for help! There's been an accident.", pt: "(Peça ajuda! Houve um acidente.)" },
                        { speaker: "Operator", text: "911, what's your emergency?", pt: "(911/190, qual é a sua emergência?)" },
                        { speaker: "Caller", text: "Two cars crashed! I'd like to report a crime, too. The driver ran away.", pt: "(Dois carros bateram! Gostaria de relatar um crime também. O motorista fugiu.)" },
                        { speaker: "Operator", text: "Stay calm, we are sending the police.", pt: "(Fique calmo, estamos enviando a polícia.)" }
                    ]
                },
                {
                    title: "Dialogue 6: A Fire Emergency",
                    audio: "TTS: Call an ambulance immediately! We are on it. Is there a fire as well? Yes! Smoke is everywhere. Please evacuate the building right now!",
                    lines:[
                        { speaker: "Caller", text: "Call an ambulance immediately!", pt: "(Chame uma ambulância imediatamente!)" },
                        { speaker: "Operator", text: "We are on it. Is there a fire as well?", pt: "(Já estamos providenciando. Há um incêndio também?)" },
                        { speaker: "Caller", text: "Yes! Smoke is everywhere.", pt: "(Sim! Há fumaça por toda parte.)" },
                        { speaker: "Operator", text: "Please evacuate the building right now!", pt: "(Por favor, evacuem o prédio agora mesmo!)" }
                    ]
                }
            ],

            // --- 3C: PRACTICE ---
            grammarDrillGroups:[
                {
                    title: "At the Post Office & Bank",
                    drills:[
                        { q: "I'd like to ________ this package.", options:[{t: "send", c: true}, {t: "buy", c: false}, {t: "open", c: false}, {t: "renew", c: false}], type: "mcq" },
                        { q: "How much is a ________?", options:[{t: "account", c: false}, {t: "stamp", c: true}, {t: "tracking", c: false}, {t: "wait", c: false}], type: "mcq" },
                        { q: "By airmail or ________ mail?", options:[{t: "ground", c: false}, {t: "surface", c: true}, {t: "sea", c: false}, {t: "water", c: false}], type: "mcq" },
                        { q: "Do you need a ________ number?", options:[{t: "sending", c: false}, {t: "tracking", c: true}, {t: "calling", c: false}, {t: "waiting", c: false}], type: "mcq" },
                        { q: "I'd like to ________ a bank account.", options:[{t: "send", c: false}, {t: "buy", c: false}, {t: "open", c: true}, {t: "fill", c: false}], type: "mcq" },
                        { q: "What's the exchange ________ today?", options:[{t: "price", c: false}, {t: "rate", c: true}, {t: "cost", c: false}, {t: "money", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Government Offices",
                    drills:[
                        { q: "I need to ________ my passport.", options:[{t: "send", c: false}, {t: "renew", c: true}, {t: "buy", c: false}, {t: "evacuate", c: false}], type: "mcq" },
                        { q: "________ out this form.", options:[{t: "Fill", c: true}, {t: "Make", c: false}, {t: "Do", c: false}, {t: "Write", c: false}], type: "mcq" },
                        { q: "Do you have a form of ________?", options:[{t: "money", c: false}, {t: "address", c: false}, {t: "ID", c: true}, {t: "bank", c: false}], type: "mcq" },
                        { q: "Take a number and ________.", options:[{t: "wait", c: true}, {t: "run", c: false}, {t: "call", c: false}, {t: "send", c: false}], type: "mcq" },
                        { q: "You need a customs ________ form.", options:[{t: "mail", c: false}, {t: "declaration", c: true}, {t: "account", c: false}, {t: "stamp", c: false}], type: "mcq" },
                        { q: "Can I buy a ________ of stamps?", options:[{t: "box", c: false}, {t: "book", c: true}, {t: "form", c: false}, {t: "envelope", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Emergencies",
                    drills:[
                        { q: "Call for ________!", options:[{t: "form", c: false}, {t: "help", c: true}, {t: "number", c: false}, {t: "rate", c: false}], type: "mcq" },
                        { q: "Call an ________!", options:[{t: "stamp", c: false}, {t: "ambulance", c: true}, {t: "bank", c: false}, {t: "passport", c: false}], type: "mcq" },
                        { q: "There's been an ________.", options:[{t: "accident", c: true}, {t: "help", c: false}, {t: "ambulance", c: false}, {t: "building", c: false}], type: "mcq" },
                        { q: "I'd like to report a ________.", options:[{t: "accident", c: false}, {t: "crime", c: true}, {t: "emergency", c: false}, {t: "passport", c: false}], type: "mcq" },
                        { q: "What's your ________?", options:[{t: "number", c: false}, {t: "emergency", c: true}, {t: "help", c: false}, {t: "accident", c: false}], type: "mcq" },
                        { q: "Please ________ the building.", options:[{t: "enter", c: false}, {t: "evacuate", c: true}, {t: "send", c: false}, {t: "renew", c: false}], type: "mcq" }
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
                { text: "I'd like to send this package to London. ↘", audio: "TTS: I'd like to send this package to London." },
                { text: "How much is a stamp for this letter? ↘", audio: "TTS: How much is a stamp for this letter?" },
                { text: "Do you need a tracking number? ↗", audio: "TTS: Do you need a tracking number?" },
                { text: "I need to renew my passport before my trip. ↘", audio: "TTS: I need to renew my passport before my trip." },
                { text: "Please take a number and wait for your turn. ↘", audio: "TTS: Please take a number and wait for your turn." },
                { text: "I'd like to open a bank account, please. ↘", audio: "TTS: I'd like to open a bank account, please." },
                { text: "What's the exchange rate today? ↘", audio: "TTS: What's the exchange rate today?" },
                { text: "Call an ambulance, there's been an accident! ↘", audio: "TTS: Call an ambulance, there's been an accident!" },
                { text: "I'd like to report a crime to the police. ↘", audio: "TTS: I'd like to report a crime to the police." },
                { text: "Please evacuate the building immediately! ↘", audio: "TTS: Please evacuate the building immediately!" }
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
                    instruction: "Listen to the conversation at the post office and type the missing words.",
                    audio: "TTS: Customer: I'd like to send this package. Do I need an envelope? Clerk: No, but you need to buy a stamp. Customer: Can I get a tracking number? Clerk: Yes, just fill out this form.",
                    text: "Customer: I'd like to send this [package]. Do I need an [envelope]?<br>Clerk: No, but you need to buy a [stamp].<br>Customer: Can I get a tracking [number]?<br>Clerk: Yes, just [fill] out this form."
                },
                {
                    type: "dropdown",
                    instruction: "Listen to the dialogue at the bank.",
                    audio: "TTS: Teller: Next in line! How can I help you? Client: I'd like to withdraw some money from my account. Teller: Do you have a form of ID? Client: Yes, here is my driver's license.",
                    questions:[
                        { q: "Teller: Next in line! How can I help you?", a: "" },
                        { q: "Client: I'd like to[withdraw* | deposit | renew] some money from my [account* | form | tax].", a: "withdraw" },
                        { q: "Teller: Do you have a form of [ID* | PIN | currency]?", a: "ID" },
                        { q: "Client: Yes, here is my driver's [license* | stamp | passport].", a: "license" }
                    ]
                },
                {
                    type: "audio-choice",
                    instruction: "Listen to the emergency call. What is happening?",
                    audio: "TTS: Operator: 911, what's your emergency? Caller: There's been an accident on Main Street! Two cars crashed and a driver is hurt. Please call an ambulance and send a paramedic!",
                    options:[
                        { t: "There is a fire in a building.", c: false },
                        { t: "The caller is reporting a bank robbery.", c: false },
                        { t: "There's been a car accident and someone needs a paramedic.", c: true },
                        { t: "The caller needs to renew their driver's license.", c: false }
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
                    title: "Dialogue - Mailing a Gift",
                    audio: "TTS: Customer: Hello. I'd like to send this package to Spain. Clerk: Certainly. Would you like to send it by airmail or surface mail? Customer: Airmail, please. It is urgent. Clerk: You need a customs declaration form. Fill out this form, please. Customer: Okay. Do you need a tracking number? Wait, I mean, can I get one? Clerk: Yes, it is included. That will be forty dollars.",
                    body: "<b>Customer:</b> Hello. [I'd like to send this package](tooltip:send-package) to Spain.<br><b>[Clerk](tooltip:clerk):</b> Certainly. Would you like to send it[by airmail or surface mail](tooltip:airmail-surface)?<br><b>Customer:</b> Airmail, please. It is[urgent](tooltip:urgent).<br><b>Clerk:</b> [You need a customs declaration form](tooltip:customs-form). [Fill out this form](tooltip:fill-out-form), please.<br><b>Customer:</b> Okay. [Do you need a tracking number](tooltip:need-tracking)? Wait, I mean, can I get one?<br><b>Clerk:</b> Yes, it is included. That will be forty dollars.",
                    questions:[
                        { q: "Where is the customer sending the package?", options:[{t: "To the bank.", c: false}, {t: "To Spain.", c: true}, {t: "To the town hall.", c: false}], type: "mcq" },
                        { q: "Why did the customer choose airmail?", options:[{t: "Because it is cheap.", c: false}, {t: "Because it is urgent.", c: true}, {t: "Because it is an official letter.", c: false}], type: "mcq" },
                        { q: "What does the clerk ask the customer to do?", options:[{t: "Pay a tax.", c: false}, {t: "Fill out a customs form.", c: true}, {t: "Show a passport.", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Dialogue - Opening an Account",
                    audio: "TTS: Client: Good morning. I'd like to open a bank account, please. Teller: Good morning. Please take a number and wait. Client: Oh, I already have number four. Teller: Perfect. Do you have a form of ID? Client: Yes, here is my passport. Teller: Thank you. You will also need to create a PIN for your debit card. Client: Okay. What's the exchange rate today? I also want to exchange euros for dollars. Teller: The rate is on the board behind me.",
                    body: "<b>Client:</b> Good morning. [I'd like to open a bank account](tooltip:open-account), please.<br><b>[Bank teller](tooltip:bank-teller):</b> Good morning. Please[take a number and wait](tooltip:take-number).<br><b>Client:</b> Oh, I already have number four.<br><b>Teller:</b> Perfect.[Do you have a form of ID](tooltip:have-form-id)?<br><b>Client:</b> Yes, here is my [passport](tooltip:passport).<br><b>Teller:</b> Thank you. You will also need to create a [PIN](tooltip:pin) for your debit card.<br><b>Client:</b> Okay. [What's the exchange rate today](tooltip:exchange-rate)? I also want to [exchange](tooltip:exchange) euros for dollars.<br><b>Teller:</b> The rate is on the board behind me.",
                    questions:[
                        { q: "What does the client want to do first?", options:[{t: "Open a bank account.", c: true}, {t: "Withdraw money.", c: false}, {t: "Renew a passport.", c: false}], type: "mcq" },
                        { q: "What form of ID does the client show?", options:[{t: "A driver's license.", c: false}, {t: "A passport.", c: true}, {t: "A receipt.", c: false}], type: "mcq" },
                        { q: "What else does the client want to do?", options:[{t: "Pay a mortgage.", c: false}, {t: "Ask for a loan.", c: false}, {t: "Exchange euros for dollars.", c: true}], type: "mcq" }
                    ]
                },
                {
                    title: "Dialogue - The 911 Call",
                    audio: "TTS: Operator: 911, what's your emergency? Caller: Call for help! There's a huge fire in the town hall! Operator: Are people inside the building? Caller: Yes! Please send a firefighter and a paramedic quickly! Operator: We are dispatching units now. Please evacuate the building and stay safe. Caller: Okay, we are running out now. Please hurry!",
                    body: "<b>[Operator](tooltip:operator):</b> 911,[what's your emergency](tooltip:whats-emergency)?<br><b>Caller:</b> [Call for help](tooltip:call-for-help)! There's a huge fire in the [town hall](tooltip:town-hall)!<br><b>Operator:</b> Are people inside the building?<br><b>Caller:</b> Yes! Please send a [firefighter](tooltip:firefighter) and a [paramedic](tooltip:paramedic) quickly!<br><b>Operator:</b> We are dispatching units now. [Please evacuate the building](tooltip:evacuate-building) and stay safe.<br><b>Caller:</b> Okay, we are running out now. Please hurry!",
                    questions:[
                        { q: "What is the emergency?", options:[{t: "A car accident.", c: false}, {t: "A robbery.", c: false}, {t: "A fire in the town hall.", c: true}], type: "mcq" },
                        { q: "Who is the caller asking for?", options:[{t: "A firefighter and a paramedic.", c: true}, {t: "A police officer and a clerk.", c: false}, {t: "A mail carrier.", c: false}], type: "mcq" },
                        { q: "What does the operator tell the caller to do?", options:[{t: "Take a number and wait.", c: false}, {t: "Evacuate the building.", c: true}, {t: "Report the crime.", c: false}], type: "mcq" }
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
                { type: "matching", instruction: "Match the public places to their functions.", pairs:[
                    { left: "Post office", right: "Mailing packages", val: "1" },
                    { left: "Bank", right: "Depositing money", val: "2" },
                    { left: "Embassy", right: "Getting a visa", val: "3" },
                    { left: "Town hall", right: "Local government", val: "4" }
                ]},
                { type: "matching", instruction: "Match the emergency workers to their jobs.", pairs:[
                    { left: "Police officer", right: "Stops crime", val: "1" },
                    { left: "Firefighter", right: "Puts out fires", val: "2" },
                    { left: "Paramedic", right: "Gives medical aid", val: "3" },
                    { left: "Operator", right: "Answers 911 calls", val: "4" }
                ]},
                { type: "matching", instruction: "Match the bank terms to their meanings.", pairs:[
                    { left: "Account", right: "Where you keep your money", val: "1" },
                    { left: "Loan", right: "Borrowed money", val: "2" },
                    { left: "Mortgage", right: "Loan for a house", val: "3" },
                    { left: "PIN", right: "Secret number for a card", val: "4" }
                ]},
                { type: "matching", instruction: "Match the verbs with the appropriate nouns.", pairs:[
                    { left: "Send", right: "a package", val: "1" },
                    { left: "Renew", right: "a passport", val: "2" },
                    { left: "Report", right: "a crime", val: "3" },
                    { left: "Evacuate", right: "the building", val: "4" }
                ]},

                // --- WORD ORDER (5-14) ---
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "to / send / package / I'd / this / like / .", correct: "I'd like to send this package ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "stamp / a / How / is / much / ?", correct: "How much is a stamp ?" },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "number / tracking / need / a / you / Do / ?", correct: "Do you need a tracking number ?" },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "form / out / this / Please / fill / .", correct: "Please fill out this form ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "form / ID / Do / a / you / have / of / ?", correct: "Do you have a form of ID ?" },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "a / wait / number / Take / and / .", correct: "Take a number and wait ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "open / to / I'd / bank / like / account / a / .", correct: "I'd like to open a bank account ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "for / Call / help / !", correct: "Call for help !" },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "accident / There's / an / been / .", correct: "There's been an accident ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "emergency / your / What's / ?", correct: "What's your emergency ?" },

                // --- CLICKABLE ERROR (15-24) ---
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "I want to send this package by [flying](error:airmail)." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "You need a [client](error:customs) declaration form." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "Can I buy a [box](error:book) of stamps?" },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "I need to [remake](error:renew) my passport." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "What's the exchange [value](error:rate) today?" },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "Take a number and [seat](error:wait)." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "Please [empty](error:evacuate) the building immediately." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "I'd like to [tell](error:report) a crime." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "Call an [hospital](error:ambulance), he is hurt!" },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "Please [do](error:fill) out this form." },

                // --- ODD ONE OUT (25-30) ---
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Bank terms)", options:[{t: "Mortgage", c: false}, {t: "Loan", c: false}, {t: "Account", c: false}, {t: "Airmail", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Emergency workers)", options:[{t: "Firefighter", c: false}, {t: "Paramedic", c: false}, {t: "Police officer", c: false}, {t: "Clerk", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Documents)", options:[{t: "Passport", c: false}, {t: "Driver's license", c: false}, {t: "Form", c: false}, {t: "Currency", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Verbs)", options:[{t: "To deposit", c: false}, {t: "To withdraw", c: false}, {t: "To exchange", c: false}, {t: "Urgent", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Places)", options:[{t: "Embassy", c: false}, {t: "Town hall", c: false}, {t: "Bank", c: false}, {t: "Stamp", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Emergencies)", options:[{t: "Accident", c: false}, {t: "Crime", c: false}, {t: "Rescue", c: false}, {t: "Tax", c: true}] },

                // --- TRUE / FALSE (31-35) ---
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "You go to a bank to withdraw or deposit money.", correct: "true"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "A 'mortgage' is a type of loan specifically used to buy a house or property.", correct: "true"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "If you need a tracking number, you should ask a firefighter.", correct: "false"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "To 'evacuate' a building means to safely leave it during an emergency.", correct: "true"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "Airmail is usually much slower than surface mail.", correct: "false"}] },

                // --- MCQ (36-39) ---
                { type: "mcq", instruction: "Choose the correct phrase.<br>When you are at the post office and want to know the price of a stamp, you ask: '________?'", options:[{t: "Do you have a form of ID", c: false}, {t: "How much is a stamp", c: true}, {t: "What's the exchange rate", c: false}, {t: "Can I open an account", c: false}] },
                { type: "mcq", instruction: "Choose the correct word.<br>The person who delivers mail to your home is the ________.", options:[{t: "clerk", c: false}, {t: "mail carrier", c: true}, {t: "paramedic", c: false}, {t: "operator", c: false}] },
                { type: "mcq", instruction: "Choose the correct verb.<br>If your passport is expiring soon, you need to go to the embassy to ________ it.", options:[{t: "renew", c: true}, {t: "withdraw", c: false}, {t: "report", c: false}, {t: "deposit", c: false}] },
                { type: "mcq", instruction: "Choose the correct phrase.<br>When you call 911, the operator will usually ask: '________?'", options:[{t: "What's your emergency", c: true}, {t: "What's the exchange rate", c: false}, {t: "Do you need a tracking number", c: false}, {t: "By airmail or surface mail", c: false}] },

                // --- CATEGORIZE (40) ---
                { type: "categorize", instruction: "Sort the words into Post Office/Bank and Emergency.", 
                    categories:[{id: "bank", name: "Post/Bank"}, {id: "emerg", name: "Emergency"}],
                    items:[
                        {text: "Currency", catId: "bank"}, 
                        {text: "Stamp", catId: "bank"}, 
                        {text: "Mortgage", catId: "bank"}, 
                        {text: "Paramedic", catId: "emerg"}, 
                        {text: "To rescue", catId: "emerg"}, 
                        {text: "Ambulance", catId: "emerg"}
                    ] 
                }
            ]
        },

        // ======================================================
        // STEP 8: WRITING PRACTICE
        // ======================================================
        {
            title: "Writing Practice",
            instruction: "Write a message to a friend (5-7 sentences) about a busy and stressful day. Describe going to the bank or post office to complete a task, and then mention an emergency you witnessed on the street (like an accident or a fire).",
            example: "Hi Mark, I had such a stressful day today! First, I went to the post office because I wanted to send a package to my mom. The clerk asked me to fill out a long customs declaration form. After that, I went to the bank to open an account, but I forgot my driver's license! On my way home, there was an accident on the highway. A police officer and an ambulance were there. It was a very urgent situation, but thankfully the paramedic rescued the driver.",
            prompts:[
                "Mention the places you visited (post office, bank, etc.).",
                "Describe the tasks you did (fill out a form, send a package).",
                "Describe the emergency situation (accident, fire) and the emergency workers involved.",
                "Use past tense verbs to tell your story."
            ]
        },

        // ======================================================
        // STEP 9: FLASHCARDS
        // ======================================================
        {
            title: "Flashcards",
            items:[
                // 2A Items (36 items)
                { term: "Post office", definition: "The public department responsible for mail services.", defTrans: "Correios", example: "I need to mail this letter at the post office.", audioFront: "TTS: Post office", audioBack: "TTS: I need to mail this letter at the post office." },
                { term: "Bank", definition: "A financial institution where people deposit and withdraw money.", defTrans: "Banco", example: "She went to the bank to deposit her paycheck.", audioFront: "TTS: Bank", audioBack: "TTS: She went to the bank to deposit her paycheck." },
                { term: "Embassy", definition: "The official residence or offices of an ambassador.", defTrans: "Embaixada", example: "You must go to the embassy to get a visa.", audioFront: "TTS: Embassy", audioBack: "TTS: You must go to the embassy to get a visa." },
                { term: "Town hall", definition: "The building that houses local government offices.", defTrans: "Prefeitura", example: "The mayor works at the town hall.", audioFront: "TTS: Town hall", audioBack: "TTS: The mayor works at the town hall." },
                { term: "Clerk", definition: "A person employed in an office or bank to assist customers.", defTrans: "Atendente / Balconista", example: "The clerk behind the desk helped me with my forms.", audioFront: "TTS: Clerk", audioBack: "TTS: The clerk behind the desk helped me with my forms." },
                { term: "Bank teller", definition: "An employee of a bank who deals directly with customers.", defTrans: "Caixa de banco", example: "The bank teller gave me fifty dollars in cash.", audioFront: "TTS: Bank teller", audioBack: "TTS: The bank teller gave me fifty dollars in cash." },
                { term: "Police officer", definition: "A member of a police force.", defTrans: "Policial", example: "The police officer gave him a speeding ticket.", audioFront: "TTS: Police officer", audioBack: "TTS: The police officer gave him a speeding ticket." },
                { term: "Firefighter", definition: "A person whose job is to extinguish fires.", defTrans: "Bombeiro", example: "The brave firefighter ran into the burning building.", audioFront: "TTS: Firefighter", audioBack: "TTS: The brave firefighter ran into the burning building." },
                { term: "Paramedic", definition: "A person trained to give emergency medical care.", defTrans: "Paramédico", example: "The paramedic treated the injured driver.", audioFront: "TTS: Paramedic", audioBack: "TTS: The paramedic treated the injured driver." },
                { term: "Operator", definition: "A person who answers emergency phone calls.", defTrans: "Operador de emergência", example: "The emergency operator answered the 911 call.", audioFront: "TTS: Operator", audioBack: "TTS: The emergency operator answered the 911 call." },
                { term: "Mail carrier", definition: "A person employed to deliver mail.", defTrans: "Carteiro", example: "The mail carrier delivers letters every morning.", audioFront: "TTS: Mail carrier", audioBack: "TTS: The mail carrier delivers letters every morning." },
                { term: "Financial advisor", definition: "A professional who provides financial services and advice.", defTrans: "Consultor financeiro", example: "I spoke to a financial advisor about my investments.", audioFront: "TTS: Financial advisor", audioBack: "TTS: I spoke to a financial advisor about my investments." },
                
                { term: "Package", definition: "An object wrapped in paper or packed in a box to be sent.", defTrans: "Pacote / Encomenda", example: "I am expecting a heavy package from China.", audioFront: "TTS: Package", audioBack: "TTS: I am expecting a heavy package from China." },
                { term: "Stamp", definition: "A small piece of paper stuck to a letter to pay for postage.", defTrans: "Selo", example: "You need to put a stamp on the envelope before mailing it.", audioFront: "TTS: Stamp", audioBack: "TTS: You need to put a stamp on the envelope before mailing it." },
                { term: "Envelope", definition: "A flat paper container with a sealable flap, used to enclose a letter.", defTrans: "Envelope", example: "He sealed the letter inside the envelope.", audioFront: "TTS: Envelope", audioBack: "TTS: He sealed the letter inside the envelope." },
                { term: "Account", definition: "A record of financial expenditure and receipts at a bank.", defTrans: "Conta bancária", example: "I opened a new savings account at the bank.", audioFront: "TTS: Account", audioBack: "TTS: I opened a new savings account at the bank." },
                { term: "Currency", definition: "A system of money in general use in a particular country.", defTrans: "Moeda corrente", example: "The euro is the official currency in France.", audioFront: "TTS: Currency", audioBack: "TTS: The euro is the official currency in France." },
                { term: "Loan", definition: "A sum of money that is borrowed and expected to be paid back with interest.", defTrans: "Empréstimo", example: "I took out a loan to buy a new car.", audioFront: "TTS: Loan", audioBack: "TTS: I took out a loan to buy a new car." },
                { term: "Mortgage", definition: "A legal agreement to borrow money to buy a house.", defTrans: "Hipoteca", example: "We pay our mortgage every month to the bank.", audioFront: "TTS: Mortgage", audioBack: "TTS: We pay our mortgage every month to the bank." },
                { term: "Form", definition: "A printed document with blank spaces for information to be inserted.", defTrans: "Formulário", example: "Please write your name on this application form.", audioFront: "TTS: Form", audioBack: "TTS: Please write your name on this application form." },
                { term: "Passport", definition: "An official document certifying identity and citizenship for travel.", defTrans: "Passaporte", example: "You must show your passport at the border.", audioFront: "TTS: Passport", audioBack: "TTS: You must show your passport at the border." },
                { term: "Driver's license", definition: "A document permitting a person to drive a motor vehicle.", defTrans: "Carteira de motorista", example: "I passed my test and got my driver's license.", audioFront: "TTS: Driver's license", audioBack: "TTS: I passed my test and got my driver's license." },
                { term: "Tax", definition: "A compulsory contribution to state revenue.", defTrans: "Imposto", example: "The government increased the income tax.", audioFront: "TTS: Tax", audioBack: "TTS: The government increased the income tax." },
                { term: "PIN", definition: "A personal identification number.", defTrans: "Senha (PIN)", example: "Never share your debit card PIN with anyone.", audioFront: "TTS: PIN", audioBack: "TTS: Never share your debit card PIN with anyone." },

                { term: "To send", definition: "To cause an object or letter to go to a destination.", defTrans: "Enviar", example: "I will send the documents by express mail.", audioFront: "TTS: To send", audioBack: "TTS: I will send the documents by express mail." },
                { term: "To deliver", definition: "To bring and hand over a letter or goods to the proper recipient.", defTrans: "Entregar", example: "The courier will deliver the box tomorrow.", audioFront: "TTS: To deliver", audioBack: "TTS: The courier will deliver the box tomorrow." },
                { term: "To deposit", definition: "To put money into a bank account.", defTrans: "Depositar", example: "I need to deposit this check into my account.", audioFront: "TTS: To deposit", audioBack: "TTS: I need to deposit this check into my account." },
                { term: "To withdraw", definition: "To remove money from a bank account.", defTrans: "Sacar (dinheiro)", example: "He used the ATM to withdraw some cash.", audioFront: "TTS: To withdraw", audioBack: "TTS: He used the ATM to withdraw some cash." },
                { term: "To exchange", definition: "To give one currency and receive another in return.", defTrans: "Trocar / Fazer câmbio", example: "I want to exchange dollars for euros.", audioFront: "TTS: To exchange", audioBack: "TTS: I want to exchange dollars for euros." },
                { term: "To fill out", definition: "To complete a form by providing the required information.", defTrans: "Preencher", example: "You must fill out the form with a black pen.", audioFront: "TTS: To fill out", audioBack: "TTS: You must fill out the form with a black pen." },
                { term: "To renew", definition: "To extend the period of validity of a license or document.", defTrans: "Renovar", example: "I went to the DMV to renew my license.", audioFront: "TTS: To renew", audioBack: "TTS: I went to the DMV to renew my license." },
                { term: "To report", definition: "To give a spoken or written account of something that has happened.", defTrans: "Relatar / Denunciar", example: "She called 911 to report a robbery.", audioFront: "TTS: To report", audioBack: "TTS: She called 911 to report a robbery." },
                { term: "To rescue", definition: "To save someone from a dangerous or difficult situation.", defTrans: "Resgatar", example: "The firefighters had to rescue a cat from the tree.", audioFront: "TTS: To rescue", audioBack: "TTS: The firefighters had to rescue a cat from the tree." },
                { term: "Public", definition: "Relating to or available for people in general.", defTrans: "Público(a)", example: "The park is a public space for everyone.", audioFront: "TTS: Public", audioBack: "TTS: The park is a public space for everyone." },
                { term: "Official", definition: "Relating to an authority or public body and its duties.", defTrans: "Oficial", example: "You need an official stamp on this document.", audioFront: "TTS: Official", audioBack: "TTS: You need an official stamp on this document." },
                { term: "Urgent", definition: "Requiring immediate action or attention.", defTrans: "Urgente", example: "Call an ambulance, it is an urgent medical situation.", audioFront: "TTS: Urgent", audioBack: "TTS: Call an ambulance, it is an urgent medical situation." },

                // 3A Items (18 items)
                { term: "I'd like to send this package", definition: "Requesting to mail a box to a destination.", defTrans: "Gostaria de enviar este pacote", example: "I'd like to send this package to Paris.", audioFront: "TTS: I'd like to send this package", audioBack: "TTS: I'd like to send this package to Paris." },
                { term: "How much is a stamp?", definition: "Asking for the price of postage.", defTrans: "Quanto custa um selo?", example: "How much is a stamp for this letter?", audioFront: "TTS: How much is a stamp?", audioBack: "TTS: How much is a stamp for this letter?" },
                { term: "By airmail or surface mail?", definition: "Asking the method of shipping.", defTrans: "Por correio aéreo ou terrestre?", example: "Do you want to send it by airmail or surface mail?", audioFront: "TTS: By airmail or surface mail?", audioBack: "TTS: Do you want to send it by airmail or surface mail?" },
                { term: "Do you need a tracking number?", definition: "Asking if you want to monitor the shipment.", defTrans: "Você precisa de um número de rastreamento?", example: "Do you need a tracking number?", audioFront: "TTS: Do you need a tracking number?", audioBack: "TTS: Do you need a tracking number?" },
                { term: "I'd like to open a bank account", definition: "Requesting to start a new financial account.", defTrans: "Gostaria de abrir uma conta bancária", example: "Good morning, I'd like to open a bank account.", audioFront: "TTS: I'd like to open a bank account", audioBack: "TTS: Good morning, I'd like to open a bank account." },
                { term: "What's the exchange rate today?", definition: "Asking the value of one currency against another.", defTrans: "Qual é a taxa de câmbio hoje?", example: "What's the exchange rate today?", audioFront: "TTS: What's the exchange rate today?", audioBack: "TTS: What's the exchange rate today?" },
                
                { term: "I need to renew my passport", definition: "Stating that your passport needs to be updated.", defTrans: "Preciso renovar meu passaporte", example: "I need to renew my passport before my trip.", audioFront: "TTS: I need to renew my passport", audioBack: "TTS: I need to renew my passport before my trip." },
                { term: "Fill out this form", definition: "Instruction to complete a document.", defTrans: "Preencha este formulário", example: "Please fill out this form completely.", audioFront: "TTS: Fill out this form", audioBack: "TTS: Please fill out this form completely." },
                { term: "Do you have a form of ID?", definition: "Asking for identification.", defTrans: "Você tem um documento de identidade?", example: "Do you have a form of ID?", audioFront: "TTS: Do you have a form of ID?", audioBack: "TTS: Do you have a form of ID?" },
                { term: "Take a number and wait", definition: "Instruction to join a queue system.", defTrans: "Pegue uma senha e espere", example: "Please take a number and wait for your turn.", audioFront: "TTS: Take a number and wait", audioBack: "TTS: Please take a number and wait for your turn." },
                { term: "You need a customs declaration form", definition: "Stating a requirement for international shipping.", defTrans: "Você precisa de um formulário de declaração alfandegária", example: "You need a customs declaration form for this box.", audioFront: "TTS: You need a customs declaration form", audioBack: "TTS: You need a customs declaration form for this box." },
                { term: "Can I buy a book of stamps?", definition: "Requesting to purchase multiple stamps at once.", defTrans: "Posso comprar um talão de selos?", example: "Can I buy a book of stamps?", audioFront: "TTS: Can I buy a book of stamps?", audioBack: "TTS: Can I buy a book of stamps?" },
                
                { term: "Call for help!", definition: "An urgent cry to contact emergency services.", defTrans: "Peça ajuda!", example: "Hurry, call for help!", audioFront: "TTS: Call for help!", audioBack: "TTS: Hurry, call for help!" },
                { term: "Call an ambulance", definition: "An instruction to request medical transport.", defTrans: "Chame uma ambulância", example: "He is hurt, call an ambulance!", audioFront: "TTS: Call an ambulance", audioBack: "TTS: He is hurt, call an ambulance!" },
                { term: "There's been an accident", definition: "Reporting a collision or disaster.", defTrans: "Houve um acidente", example: "There's been an accident on the highway.", audioFront: "TTS: There's been an accident", audioBack: "TTS: There's been an accident on the highway." },
                { term: "I'd like to report a crime", definition: "Stating the intent to tell the police about illegal activity.", defTrans: "Gostaria de relatar um crime", example: "I'd like to report a crime. My bag was stolen.", audioFront: "TTS: I'd like to report a crime", audioBack: "TTS: I'd like to report a crime. My bag was stolen." },
                { term: "What's your emergency?", definition: "The standard greeting from a 911 operator.", defTrans: "Qual é a sua emergência?", example: "911, what's your emergency?", audioFront: "TTS: What's your emergency?", audioBack: "TTS: 911, what's your emergency?" },
                { term: "Please evacuate the building", definition: "An instruction to leave a structure due to danger.", defTrans: "Por favor, evacuem o prédio", example: "There is a fire, please evacuate the building.", audioFront: "TTS: Please evacuate the building", audioBack: "TTS: There is a fire, please evacuate the building." }
            ]
        }
    ],

    // ======================================================
    // GLOSSARY (All 54 items + Context words)
    // ======================================================
    glossary:[
        // 2A: Public Places & People
        { topic: "Places", term: "post-office", definition: "The public department responsible for mail services.", translation: "Correios" },
        { topic: "Places", term: "bank", definition: "A financial institution to deposit and withdraw money.", translation: "Banco" },
        { topic: "Places", term: "embassy", definition: "The official residence or offices of an ambassador.", translation: "Embaixada" },
        { topic: "Places", term: "town-hall", definition: "The building housing local government offices.", translation: "Prefeitura" },
        { topic: "People", term: "clerk", definition: "A person employed to assist customers.", translation: "Atendente" },
        { topic: "People", term: "bank-teller", definition: "An employee of a bank who deals with customers.", translation: "Caixa de banco" },
        { topic: "People", term: "police-officer", definition: "A member of a police force.", translation: "Policial" },
        { topic: "People", term: "firefighter", definition: "A person whose job is to extinguish fires.", translation: "Bombeiro" },
        { topic: "People", term: "paramedic", definition: "A person trained to give emergency medical care.", translation: "Paramédico" },
        { topic: "People", term: "operator", definition: "A person who answers emergency phone calls.", translation: "Operador de emergência" },
        { topic: "People", term: "mail-carrier", definition: "A person employed to deliver mail.", translation: "Carteiro" },
        { topic: "People", term: "financial-advisor", definition: "A professional who provides financial advice.", translation: "Consultor financeiro" },

        // 2A: Documents & Items
        { topic: "Items", term: "package", definition: "An object wrapped in paper to be sent.", translation: "Pacote / Encomenda" },
        { topic: "Items", term: "stamp", definition: "A small paper stuck to a letter to pay postage.", translation: "Selo" },
        { topic: "Items", term: "envelope", definition: "A paper container used to enclose a letter.", translation: "Envelope" },
        { topic: "Finance", term: "account", definition: "A record of financial transactions at a bank.", translation: "Conta bancária" },
        { topic: "Finance", term: "currency", definition: "A system of money in use in a country.", translation: "Moeda corrente" },
        { topic: "Finance", term: "loan", definition: "A sum of money borrowed.", translation: "Empréstimo" },
        { topic: "Finance", term: "mortgage", definition: "A loan specifically to buy a house.", translation: "Hipoteca" },
        { topic: "Documents", term: "form", definition: "A printed document with blank spaces for info.", translation: "Formulário" },
        { topic: "Documents", term: "passport", definition: "An official document certifying identity for travel.", translation: "Passaporte" },
        { topic: "Documents", term: "drivers-license", definition: "A document permitting a person to drive.", translation: "Carteira de motorista" },
        { topic: "Finance", term: "tax", definition: "A compulsory contribution to state revenue.", translation: "Imposto" },
        { topic: "Finance", term: "pin", definition: "A personal identification number.", translation: "Senha (PIN)" },

        // 2A: Verbs & Adjectives
        { topic: "Verbs", term: "to-send", definition: "To cause an object to go to a destination.", translation: "Enviar" },
        { topic: "Verbs", term: "to-deliver", definition: "To hand over goods to the proper recipient.", translation: "Entregar" },
        { topic: "Verbs", term: "to-deposit", definition: "To put money into a bank account.", translation: "Depositar" },
        { topic: "Verbs", term: "to-withdraw", definition: "To remove money from a bank account.", translation: "Sacar" },
        { topic: "Verbs", term: "to-exchange", definition: "To give one currency and receive another.", translation: "Fazer câmbio / Trocar" },
        { topic: "Verbs", term: "to-fill-out", definition: "To complete a form.", translation: "Preencher" },
        { topic: "Verbs", term: "to-renew", definition: "To extend the period of validity of a document.", translation: "Renovar" },
        { topic: "Verbs", term: "to-report", definition: "To give an account of something that happened.", translation: "Relatar / Denunciar" },
        { topic: "Verbs", term: "to-rescue", definition: "To save someone from a dangerous situation.", translation: "Resgatar" },
        { topic: "Adjectives", term: "public", definition: "Available for people in general.", translation: "Público(a)" },
        { topic: "Adjectives", term: "official", definition: "Relating to an authority and its duties.", translation: "Oficial" },
        { topic: "Adjectives", term: "urgent", definition: "Requiring immediate action.", translation: "Urgente" },

        // 3A: Expressions
        { topic: "Expressions", term: "send-package", definition: "Requesting to mail a box to a destination.", translation: "Gostaria de enviar este pacote" },
        { topic: "Expressions", term: "how-much-stamp", definition: "Asking for the price of postage.", translation: "Quanto custa um selo?" },
        { topic: "Expressions", term: "airmail-surface", definition: "Asking the method of shipping.", translation: "Correio aéreo ou terrestre?" },
        { topic: "Expressions", term: "need-tracking", definition: "Asking if you want to monitor the shipment.", translation: "Você precisa de um número de rastreamento?" },
        { topic: "Expressions", term: "open-account", definition: "Requesting to start a new financial account.", translation: "Gostaria de abrir uma conta bancária" },
        { topic: "Expressions", term: "exchange-rate", definition: "Asking the value of one currency against another.", translation: "Qual é a taxa de câmbio?" },
        
        { topic: "Expressions", term: "renew-passport", definition: "Stating that your passport needs updating.", translation: "Preciso renovar meu passaporte" },
        { topic: "Expressions", term: "fill-out-form", definition: "Instruction to complete a document.", translation: "Preencha este formulário" },
        { topic: "Expressions", term: "have-form-id", definition: "Asking for identification.", translation: "Você tem um documento de identidade?" },
        { topic: "Expressions", term: "take-number", definition: "Instruction to join a queue system.", translation: "Pegue uma senha e espere" },
        { topic: "Expressions", term: "customs-form", definition: "A requirement for international shipping.", translation: "Você precisa de um formulário de alfândega" },
        { topic: "Expressions", term: "book-of-stamps", definition: "Requesting to purchase multiple stamps.", translation: "Posso comprar um talão de selos?" },
        
        { topic: "Expressions", term: "call-for-help", definition: "An urgent cry to contact emergency services.", translation: "Peça ajuda!" },
        { topic: "Expressions", term: "call-ambulance", definition: "Instruction to request medical transport.", translation: "Chame uma ambulância" },
        { topic: "Expressions", term: "accident", definition: "Reporting a collision or disaster.", translation: "Houve um acidente" },
        { topic: "Expressions", term: "report-crime", definition: "Telling the police about illegal activity.", translation: "Gostaria de relatar um crime" },
        { topic: "Expressions", term: "whats-emergency", definition: "The standard greeting from a 911 operator.", translation: "Qual é a sua emergência?" },
        { topic: "Expressions", term: "evacuate-building", definition: "Instruction to leave a structure due to danger.", translation: "Evacuem o prédio" },

        // Additional Context Words
        { topic: "Context", term: "renew", definition: "To extend the period of validity of a license or document.", translation: "Renovar" },
        { topic: "Context", term: "id-form", definition: "A document that proves who you are (e.g., driver's license).", translation: "Documento de identidade" },
        { topic: "Context", term: "emergency", definition: "A serious, unexpected, and often dangerous situation requiring immediate action.", translation: "Emergência" }
    ]
});