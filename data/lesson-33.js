/**
 * English Block Assembling - LESSON DATA: Topic 33
 * Topic: Money, Finance, and Budgeting
 * Level: Upper A2 ~ Lower B1
 */

window.initLesson({
    // --- METADATA ---
    lessonId: "lesson-33",
    block: "5",
    topicTitle: "Money, Finance, and Budgeting",

    steps:[
        // ======================================================
        // STEP 0: INTRO & CAN-DO
        // ======================================================
        {
            title: "Intro & Can-Do",
            objectives: "• Discuss personal [finances](tooltip:financial), [income](tooltip:income), and monthly [expenses](tooltip:expenses).<br>• Learn vocabulary to manage your [budget](tooltip:budget) and [save](tooltip:to-save) money.<br>• Talk about banking, [loans](tooltip:loan), and getting out of [debt](tooltip:debt).<br>• Describe spending habits using expressions like [cost an arm and a leg](tooltip:cost-arm-leg).",
            welcome: "Welcome to Lesson 33! Managing money is an important life skill. In this lesson, you will learn the vocabulary needed to talk about salaries, investments, and daily expenses. We will also explore idioms and phrases to describe your spending habits, whether you are trying to save up for a house or trying to get out of debt. Let's talk about finances!",
            audio: {
                objectives: "TTS: In this lesson, you will learn to: Discuss personal finances, income, and monthly expenses. Learn vocabulary to manage your budget and save money. Talk about banking, loans, and getting out of debt. Describe spending habits using expressions like cost an arm and a leg.",
                welcome: "TTS: Welcome to Lesson 33! Managing money is an important life skill. In this lesson, you will learn the vocabulary needed to talk about salaries, investments, and daily expenses. We will also explore idioms and phrases to describe your spending habits, whether you are trying to save up for a house or trying to get out of debt. Let's talk about finances!"
            }
        },

        // ======================================================
        // STEP 1: CONTEXT DIALOGUE
        // ======================================================
        {
            title: "Context Dialogue",
            context: "Emma and Mark are discussing their evening plans, but Emma is trying to be careful with her money.",
            contextAudio: "TTS: Mark: Do you want to go to that new expensive restaurant tonight? Emma: I'd love to, but I'm a bit short on cash right now. I need to cut back on my spending. Mark: Oh, are you saving up for something? Emma: Yes, I'm trying to save up for a down payment on an apartment, so I really need to stick to my budget. Mark: That's really responsible. How much do you currently pay in rent? Emma: Rent takes up about thirty percent of my income. It's tough to make ends meet sometimes. Mark: I understand. That restaurant would cost an arm and a leg anyway. Let's just cook something at home instead! Emma: That sounds like a much better value for money. Thanks, Mark!",
            dialogue:[
                { speaker: "Mark", text: "Do you want to go to that new [expensive](tooltip:expensive) restaurant tonight?" },
                { speaker: "Emma", text: "I'd love to, but I'm a bit [short on cash](tooltip:short-on-cash) right now. I need to [cut back on spending](tooltip:cut-back-spending)." },
                { speaker: "Mark", text: "Oh, are you saving up for something?" },
                { speaker: "Emma", text: "Yes, I'm trying to[save up for a house](tooltip:save-up-house) down payment, so I really need to [stick to a budget](tooltip:stick-budget)." },
                { speaker: "Mark", text: "That's really responsible. How much do you currently [pay in rent](tooltip:pay-in-rent)?" },
                { speaker: "Emma", text: "Rent takes up about 30% of my [income](tooltip:income). It's tough to [make ends meet](tooltip:make-ends-meet) sometimes." },
                { speaker: "Mark", text: "I understand. That restaurant would [cost an arm and a leg](tooltip:cost-arm-leg) anyway. Let's just cook something at home instead!" },
                { speaker: "Emma", text: "That sounds like a much better [value for money](tooltip:value-for-money). Thanks, Mark!" }
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
                    title: "Financial Nouns",
                    audio: "TTS: Budget. Income. Salary. Expenses. Savings. Debt. Loan. Mortgage. Interest. Tax. Investment. Wealth.",
                    items:[
                        { term: "Budget", trans: "Orçamento" },
                        { term: "Income", trans: "Renda / Faturamento" },
                        { term: "Salary", trans: "Salário" },
                        { term: "Expenses", trans: "Despesas / Gastos" },
                        { term: "Savings", trans: "Poupança / Economias" },
                        { term: "Debt", trans: "Dívida" },
                        { term: "Loan", trans: "Empréstimo" },
                        { term: "Mortgage", trans: "Hipoteca (empréstimo imobiliário)" },
                        { term: "Interest", trans: "Juros" },
                        { term: "Tax", trans: "Imposto" },
                        { term: "Investment", trans: "Investimento" },
                        { term: "Wealth", trans: "Riqueza / Patrimônio" }
                    ]
                },
                {
                    title: "Financial Verbs",
                    audio: "TTS: To earn. To spend. To save. To invest. To borrow. To lend. To owe. To afford. To waste. To deposit. To withdraw. To budget.",
                    items:[
                        { term: "To earn", trans: "Ganhar (dinheiro pelo trabalho)" },
                        { term: "To spend", trans: "Gastar" },
                        { term: "To save", trans: "Economizar / Guardar" },
                        { term: "To invest", trans: "Investir" },
                        { term: "To borrow", trans: "Pegar emprestado" },
                        { term: "To lend", trans: "Emprestar (para alguém)" },
                        { term: "To owe", trans: "Dever (dinheiro)" },
                        { term: "To afford", trans: "Ter condições de comprar / Pagar" },
                        { term: "To waste", trans: "Desperdiçar" },
                        { term: "To deposit", trans: "Depositar" },
                        { term: "To withdraw", trans: "Sacar" },
                        { term: "To budget", trans: "Fazer orçamento" }
                    ]
                },
                {
                    title: "Adjectives related to Money",
                    audio: "TTS: Rich. Wealthy. Well-off. Poor. Broke. Cheap. Affordable. Expensive. Financial. Thrifty. Generous. Frugal.",
                    items:[
                        { term: "Rich", trans: "Rico(a)" },
                        { term: "Wealthy", trans: "Rico(a) / Afluente" },
                        { term: "Well-off", trans: "Bem de vida" },
                        { term: "Poor", trans: "Pobre" },
                        { term: "Broke", trans: "Duro(a) / Sem dinheiro (informal)" },
                        { term: "Cheap", trans: "Barato(a)" },
                        { term: "Affordable", trans: "Acessível / Que cabe no bolso" },
                        { term: "Expensive", trans: "Caro(a)" },
                        { term: "Financial", trans: "Financeiro(a)" },
                        { term: "Thrifty", trans: "Econômico(a) / Poupador(a)" },
                        { term: "Generous", trans: "Generoso(a)" },
                        { term: "Frugal", trans: "Frugal / Econômico(a)" }
                    ]
                }
            ],

            // --- 2B: EXAMPLES ---
            exampleGroups:[
                {
                    title: "Financial Nouns",
                    audio: "TTS: We need to plan a monthly budget. His total income is very high. She receives a good salary from her company. Rent and food are my biggest expenses. I put some money into my savings every month. He is working hard to clear his debt. I asked the bank for a car loan. They pay a mortgage on their new house. The credit card has a high interest rate. The government increased the income tax. Real estate is usually a safe investment. He accumulated a lot of wealth over the years.",
                    items:[
                        { term: "Budget", sent: "We need to plan a monthly budget.", trans: "Nós precisamos planejar um orçamento mensal." },
                        { term: "Income", sent: "His total income is very high.", trans: "A renda total dele é muito alta." },
                        { term: "Salary", sent: "She receives a good salary from her company.", trans: "Ela recebe um bom salário da empresa dela." },
                        { term: "Expenses", sent: "Rent and food are my biggest expenses.", trans: "Aluguel e comida são minhas maiores despesas." },
                        { term: "Savings", sent: "I put some money into my savings every month.", trans: "Eu coloco algum dinheiro na minha poupança todo mês." },
                        { term: "Debt", sent: "He is working hard to clear his debt.", trans: "Ele está trabalhando duro para limpar sua dívida." },
                        { term: "Loan", sent: "I asked the bank for a car loan.", trans: "Eu pedi um empréstimo para carro ao banco." },
                        { term: "Mortgage", sent: "They pay a mortgage on their new house.", trans: "Eles pagam uma hipoteca da casa nova deles." },
                        { term: "Interest", sent: "The credit card has a high interest rate.", trans: "O cartão de crédito tem uma alta taxa de juros." },
                        { term: "Tax", sent: "The government increased the income tax.", trans: "O governo aumentou o imposto de renda." },
                        { term: "Investment", sent: "Real estate is usually a safe investment.", trans: "Imóveis geralmente são um investimento seguro." },
                        { term: "Wealth", sent: "He accumulated a lot of wealth over the years.", trans: "Ele acumulou muita riqueza ao longo dos anos." }
                    ]
                },
                {
                    title: "Financial Verbs",
                    audio: "TTS: Doctors usually earn a lot of money. I spend too much on coffee. You should save ten percent of your salary. It is smart to invest in the stock market. Can I borrow ten dollars from you? I will lend you my car for the weekend. I owe my brother fifty bucks. I cannot afford to buy a new phone. Don't waste your money on useless things. I need to deposit this check at the bank. I will withdraw some cash from the ATM. We need to budget our money carefully.",
                    items:[
                        { term: "To earn", sent: "Doctors usually earn a lot of money.", trans: "Médicos geralmente ganham muito dinheiro." },
                        { term: "To spend", sent: "I spend too much on coffee.", trans: "Eu gasto demais com café." },
                        { term: "To save", sent: "You should save 10% of your salary.", trans: "Você deveria economizar 10% do seu salário." },
                        { term: "To invest", sent: "It is smart to invest in the stock market.", trans: "É inteligente investir no mercado de ações." },
                        { term: "To borrow", sent: "Can I borrow ten dollars from you?", trans: "Posso pegar dez dólares emprestados de você?" },
                        { term: "To lend", sent: "I will lend you my car for the weekend.", trans: "Eu vou te emprestar meu carro no fim de semana." },
                        { term: "To owe", sent: "I owe my brother fifty bucks.", trans: "Eu devo cinquenta dólares (bucks) ao meu irmão." },
                        { term: "To afford", sent: "I cannot afford to buy a new phone.", trans: "Eu não tenho condições de comprar um telefone novo." },
                        { term: "To waste", sent: "Don't waste your money on useless things.", trans: "Não desperdice seu dinheiro em coisas inúteis." },
                        { term: "To deposit", sent: "I need to deposit this check at the bank.", trans: "Preciso depositar este cheque no banco." },
                        { term: "To withdraw", sent: "I will withdraw some cash from the ATM.", trans: "Vou sacar algum dinheiro no caixa eletrônico." },
                        { term: "To budget", sent: "We need to budget our money carefully.", trans: "Precisamos orçar (planejar) nosso dinheiro com cuidado." }
                    ]
                },
                {
                    title: "Adjectives related to Money",
                    audio: "TTS: He became very rich after selling his business. The wealthy family donated to the hospital. They live in a well-off neighborhood. The charity helps poor children get an education. I can't go to the cinema, I am totally broke. Fast food is usually very cheap. We are looking for an affordable apartment. Designer clothes are too expensive for me. She works as a financial advisor. My thrifty grandmother never throws anything away. It was very generous of you to pay for dinner. He lives a frugal lifestyle to save money.",
                    items:[
                        { term: "Rich", sent: "He became very rich after selling his business.", trans: "Ele ficou muito rico depois de vender seu negócio." },
                        { term: "Wealthy", sent: "The wealthy family donated to the hospital.", trans: "A família rica doou para o hospital." },
                        { term: "Well-off", sent: "They live in a well-off neighborhood.", trans: "Eles moram em um bairro bem de vida." },
                        { term: "Poor", sent: "The charity helps poor children get an education.", trans: "A instituição de caridade ajuda crianças pobres a obterem educação." },
                        { term: "Broke", sent: "I can't go to the cinema, I am totally broke.", trans: "Não posso ir ao cinema, estou totalmente duro (sem dinheiro)." },
                        { term: "Cheap", sent: "Fast food is usually very cheap.", trans: "Fast food é geralmente muito barato." },
                        { term: "Affordable", sent: "We are looking for an affordable apartment.", trans: "Estamos procurando um apartamento acessível (que caiba no orçamento)." },
                        { term: "Expensive", sent: "Designer clothes are too expensive for me.", trans: "Roupas de grife são muito caras para mim." },
                        { term: "Financial", sent: "She works as a financial advisor.", trans: "Ela trabalha como consultora financeira." },
                        { term: "Thrifty", sent: "My thrifty grandmother never throws anything away.", trans: "Minha avó econômica nunca joga nada fora." },
                        { term: "Generous", sent: "It was very generous of you to pay for dinner.", trans: "Foi muito generoso da sua parte pagar o jantar." },
                        { term: "Frugal", sent: "He lives a frugal lifestyle to save money.", trans: "Ele vive um estilo de vida frugal (econômico) para economizar dinheiro." }
                    ]
                }
            ],

            // --- 2C: PRACTICE ---
            drillGroups:[
                {
                    title: "Financial Nouns",
                    drills:[
                        { q: "An estimate of income and expenditure for a set period of time is a ________.", options:[{t: "Budget", c: true}, {t: "Tax", c: false}, {t: "Debt", c: false}, {t: "Loan", c: false}], type: "mcq" },
                        { q: "Money received, especially on a regular basis, for work or through investments is ________.", options:[{t: "Expenses", c: false}, {t: "Income", c: true}, {t: "Mortgage", c: false}, {t: "Interest", c: false}], type: "mcq" },
                        { q: "A fixed regular payment, typically paid on a monthly basis for professional work is a ________.", options:[{t: "Savings", c: false}, {t: "Salary", c: true}, {t: "Debt", c: false}, {t: "Wealth", c: false}], type: "mcq" },
                        { q: "The cost required for something; the money spent on something are ________.", options:[{t: "Income", c: false}, {t: "Expenses", c: true}, {t: "Investments", c: false}, {t: "Loans", c: false}], type: "mcq" },
                        { q: "The money one has saved, especially through a bank, is called ________.", options:[{t: "Savings", c: true}, {t: "Tax", c: false}, {t: "Mortgage", c: false}, {t: "Debt", c: false}], type: "mcq" },
                        { q: "Something, typically money, that is owed or due is a ________.", options:[{t: "Wealth", c: false}, {t: "Debt", c: true}, {t: "Budget", c: false}, {t: "Salary", c: false}], type: "mcq" },
                        { q: "A thing that is borrowed, especially a sum of money that is expected to be paid back, is a ________.", options:[{t: "Loan", c: true}, {t: "Tax", c: false}, {t: "Income", c: false}, {t: "Expense", c: false}], type: "mcq" },
                        { q: "A specific type of loan used to buy real estate or a house is a ________.", options:[{t: "Savings", c: false}, {t: "Investment", c: false}, {t: "Mortgage", c: true}, {t: "Budget", c: false}], type: "mcq" },
                        { q: "Money paid regularly at a particular rate for the use of money lent is ________.", options:[{t: "Interest", c: true}, {t: "Wealth", c: false}, {t: "Salary", c: false}, {t: "Tax", c: false}], type: "mcq" },
                        { q: "A compulsory contribution to state revenue, levied by the government on workers' income, is a ________.", options:[{t: "Tax", c: true}, {t: "Loan", c: false}, {t: "Expense", c: false}, {t: "Debt", c: false}], type: "mcq" },
                        { q: "The action or process of putting money into financial schemes, shares, or property to make a profit is an ________.", options:[{t: "Investment", c: true}, {t: "Budget", c: false}, {t: "Interest", c: false}, {t: "Mortgage", c: false}], type: "mcq" },
                        { q: "An abundance of valuable possessions or money is ________.", options:[{t: "Wealth", c: true}, {t: "Expense", c: false}, {t: "Debt", c: false}, {t: "Tax", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Financial Verbs",
                    drills:[
                        { q: "To obtain money in return for labor or services is ________.", options:[{t: "To earn", c: true}, {t: "To spend", c: false}, {t: "To borrow", c: false}, {t: "To deposit", c: false}], type: "mcq" },
                        { q: "To pay out money in buying or hiring goods or services is ________.", options:[{t: "To save", c: false}, {t: "To spend", c: true}, {t: "To lend", c: false}, {t: "To invest", c: false}], type: "mcq" },
                        { q: "To keep and store up money for future use is ________.", options:[{t: "To waste", c: false}, {t: "To save", c: true}, {t: "To afford", c: false}, {t: "To owe", c: false}], type: "mcq" },
                        { q: "To put money into financial schemes or property with the expectation of achieving a profit is ________.", options:[{t: "To invest", c: true}, {t: "To borrow", c: false}, {t: "To spend", c: false}, {t: "To withdraw", c: false}], type: "mcq" },
                        { q: "To take and use money belonging to someone else with the intention of returning it is ________.", options:[{t: "To lend", c: false}, {t: "To borrow", c: true}, {t: "To earn", c: false}, {t: "To budget", c: false}], type: "mcq" },
                        { q: "To grant someone the use of money on the understanding that it shall be returned is ________.", options:[{t: "To borrow", c: false}, {t: "To lend", c: true}, {t: "To waste", c: false}, {t: "To deposit", c: false}], type: "mcq" },
                        { q: "To have an obligation to pay or repay something, especially money, is ________.", options:[{t: "To owe", c: true}, {t: "To afford", c: false}, {t: "To save", c: false}, {t: "To invest", c: false}], type: "mcq" },
                        { q: "To have enough money to pay for something is ________.", options:[{t: "To afford", c: true}, {t: "To owe", c: false}, {t: "To borrow", c: false}, {t: "To waste", c: false}], type: "mcq" },
                        { q: "To use or expend carelessly, extravagantly, or to no purpose is ________.", options:[{t: "To waste", c: true}, {t: "To deposit", c: false}, {t: "To earn", c: false}, {t: "To save", c: false}], type: "mcq" },
                        { q: "To put or set down money in a bank account is ________.", options:[{t: "To withdraw", c: false}, {t: "To deposit", c: true}, {t: "To spend", c: false}, {t: "To lend", c: false}], type: "mcq" },
                        { q: "To remove or take away money from a bank account is ________.", options:[{t: "To deposit", c: false}, {t: "To withdraw", c: true}, {t: "To invest", c: false}, {t: "To budget", c: false}], type: "mcq" },
                        { q: "To plan the expenditure of money over a certain period is ________.", options:[{t: "To budget", c: true}, {t: "To afford", c: false}, {t: "To owe", c: false}, {t: "To waste", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Adjectives related to Money",
                    drills:[
                        { q: "Having a great deal of money or assets is ________.", options:[{t: "Rich", c: true}, {t: "Poor", c: false}, {t: "Broke", c: false}, {t: "Cheap", c: false}], type: "mcq" },
                        { q: "Another word for rich, indicating a plentiful supply of money, is ________.", options:[{t: "Wealthy", c: true}, {t: "Thrifty", c: false}, {t: "Affordable", c: false}, {t: "Frugal", c: false}], type: "mcq" },
                        { q: "Comfortably wealthy; having plenty of money is ________.", options:[{t: "Well-off", c: true}, {t: "Poor", c: false}, {t: "Broke", c: false}, {t: "Cheap", c: false}], type: "mcq" },
                        { q: "Lacking sufficient money to live at a standard considered comfortable or normal is ________.", options:[{t: "Poor", c: true}, {t: "Wealthy", c: false}, {t: "Generous", c: false}, {t: "Expensive", c: false}], type: "mcq" },
                        { q: "An informal word for having completely no money is ________.", options:[{t: "Broke", c: true}, {t: "Rich", c: false}, {t: "Thrifty", c: false}, {t: "Well-off", c: false}], type: "mcq" },
                        { q: "Low in price, especially in relation to similar items, is ________.", options:[{t: "Cheap", c: true}, {t: "Expensive", c: false}, {t: "Generous", c: false}, {t: "Financial", c: false}], type: "mcq" },
                        { q: "Reasonably priced; inexpensive enough for ordinary people to buy is ________.", options:[{t: "Affordable", c: true}, {t: "Expensive", c: false}, {t: "Broke", c: false}, {t: "Wealthy", c: false}], type: "mcq" },
                        { q: "Costing a lot of money is ________.", options:[{t: "Expensive", c: true}, {t: "Cheap", c: false}, {t: "Affordable", c: false}, {t: "Thrifty", c: false}], type: "mcq" },
                        { q: "Relating to finance or money matters is ________.", options:[{t: "Financial", c: true}, {t: "Generous", c: false}, {t: "Frugal", c: false}, {t: "Poor", c: false}], type: "mcq" },
                        { q: "Using money and other resources carefully and not wastefully is ________.", options:[{t: "Thrifty", c: true}, {t: "Expensive", c: false}, {t: "Rich", c: false}, {t: "Broke", c: false}], type: "mcq" },
                        { q: "Showing a readiness to give more of something (like money) than is strictly necessary is ________.", options:[{t: "Generous", c: true}, {t: "Cheap", c: false}, {t: "Frugal", c: false}, {t: "Poor", c: false}], type: "mcq" },
                        { q: "Sparing or economical with regard to money or food is ________.", options:[{t: "Frugal", c: true}, {t: "Expensive", c: false}, {t: "Generous", c: false}, {t: "Wealthy", c: false}], type: "mcq" }
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
                    title: "Managing Money",
                    audio: "TTS: Make a budget. Stick to a budget. Save up for a house. Live paycheck to paycheck. Cut back on spending. Make ends meet.",
                    explanation: "Phrases to talk about organizing your money, saving for the future, and dealing with tight finances.<br><span style='color:var(--primary-blue); font-style:italic;'>(Frases para falar sobre como organizar o seu dinheiro, economizar para o futuro e lidar com finanças apertadas.)</span>",
                    samples:[
                        { en: "To stop wasting money, you need to <b>make a budget</b>.", pt: "<span style='color:var(--primary-blue)'>(Para parar de desperdiçar dinheiro, você precisa fazer um orçamento.)</span>" },
                        { en: "It is hard to <b>stick to a budget</b> when shopping.", pt: "<span style='color:var(--primary-blue)'>(É difícil seguir/manter o orçamento ao fazer compras.)</span>" },
                        { en: "We are trying to <b>save up for a house</b>.", pt: "<span style='color:var(--primary-blue)'>(Estamos tentando juntar dinheiro para uma casa.)</span>" },
                        { en: "Many people <b>live paycheck to paycheck</b>.", pt: "<span style='color:var(--primary-blue)'>(Muitas pessoas vivem de salário em salário / sem reservas.)</span>" },
                        { en: "I want to <b>cut back on spending</b> this month.", pt: "<span style='color:var(--primary-blue)'>(Eu quero reduzir os gastos este mês.)</span>" },
                        { en: "With high inflation, it is hard to <b>make ends meet</b>.", pt: "<span style='color:var(--primary-blue)'>(Com a inflação alta, é difícil fechar as contas no fim do mês.)</span>" }
                    ]
                },
                {
                    title: "Banking and Debt",
                    audio: "TTS: Open a savings account. Pay off a loan. Pay off a credit card. Be in debt. Get out of debt. Pay interest.",
                    explanation: "Vocabulary for bank services and managing money that you owe to others.<br><span style='color:var(--primary-blue); font-style:italic;'>(Vocabulário para serviços bancários e para administrar o dinheiro que você deve a outros.)</span>",
                    samples:[
                        { en: "I went to the bank to <b>open a savings account</b>.", pt: "<span style='color:var(--primary-blue)'>(Fui ao banco abrir uma conta poupança.)</span>" },
                        { en: "It will take five years to <b>pay off a loan</b>.", pt: "<span style='color:var(--primary-blue)'>(Levará cinco anos para quitar um empréstimo.)</span>" },
                        { en: "You should <b>pay off a credit card</b> every month.", pt: "<span style='color:var(--primary-blue)'>(Você deve quitar o cartão de crédito todo mês.)</span>" },
                        { en: "I hate to <b>be in debt</b>.", pt: "<span style='color:var(--primary-blue)'>(Eu odeio estar em dívida / endividado.)</span>" },
                        { en: "My financial goal is to <b>get out of debt</b>.", pt: "<span style='color:var(--primary-blue)'>(Minha meta financeira é sair das dívidas.)</span>" },
                        { en: "If you borrow money, you have to <b>pay interest</b>.", pt: "<span style='color:var(--primary-blue)'>(Se você pegar dinheiro emprestado, tem que pagar juros.)</span>" }
                    ]
                },
                {
                    title: "Spending Habits & Costs",
                    audio: "TTS: Cost an arm and a leg. A waste of money. Value for money. Go on a shopping spree. Short on cash. Pay in rent.",
                    explanation: "Idioms and phrases to describe very expensive items, useless purchases, and evaluating costs.<br><span style='color:var(--primary-blue); font-style:italic;'>(Expressões idiomáticas e frases para descrever itens muito caros, compras inúteis e avaliação de custos.)</span>",
                    samples:[
                        { en: "That luxury car must <b>cost an arm and a leg</b>.", pt: "<span style='color:var(--primary-blue)'>(Aquele carro de luxo deve custar os olhos da cara.)</span>" },
                        { en: "Buying that broken phone was <b>a waste of money</b>.", pt: "<span style='color:var(--primary-blue)'>(Comprar aquele telefone quebrado foi um desperdício de dinheiro.)</span>" },
                        { en: "This laptop is very fast; it is great <b>value for money</b>.", pt: "<span style='color:var(--primary-blue)'>(Este notebook é muito rápido; tem um ótimo custo-benefício.)</span>" },
                        { en: "After she got paid, she decided to <b>go on a shopping spree</b>.", pt: "<span style='color:var(--primary-blue)'>(Depois que ela recebeu, decidiu fazer uma maratona de compras.)</span>" },
                        { en: "I can't go out tonight, I am <b>short on cash</b>.", pt: "<span style='color:var(--primary-blue)'>(Não posso sair hoje à noite, estou com pouco dinheiro.)</span>" },
                        { en: "How much do you <b>pay in rent</b>?", pt: "<span style='color:var(--primary-blue)'>(Quanto você paga de aluguel?)</span>" }
                    ]
                }
            ],

            // --- 3B: DIALOGUES ---
            dialogueGroups:[
                {
                    title: "Dialogue 1: Budgeting",
                    audio: "TTS: I am trying to cut back on spending. Me too. It is so hard to stick to a budget. I know. We want to save up for a house soon.",
                    lines:[
                        { speaker: "Anna", text: "I am trying to cut back on spending.", pt: "(Estou tentando reduzir os gastos.)" },
                        { speaker: "John", text: "Me too. It is so hard to stick to a budget.", pt: "(Eu também. É tão difícil seguir um orçamento.)" },
                        { speaker: "Anna", text: "I know. We want to save up for a house soon.", pt: "(Eu sei. Nós queremos economizar para uma casa em breve.)" }
                    ]
                },
                {
                    title: "Dialogue 2: Tight Finances",
                    audio: "TTS: I have to work two jobs just to make ends meet. That sounds exhausting. It is. I am tired of living paycheck to paycheck.",
                    lines:[
                        { speaker: "Mark", text: "I have to work two jobs just to make ends meet.", pt: "(Eu tenho que ter dois empregos só para fechar as contas no fim do mês.)" },
                        { speaker: "Lisa", text: "That sounds exhausting.", pt: "(Isso parece exaustivo.)" },
                        { speaker: "Mark", text: "It is. I am tired of living paycheck to paycheck.", pt: "(E é. Estou cansado de viver de salário em salário.)" }
                    ]
                },
                {
                    title: "Dialogue 3: Debt and Banking",
                    audio: "TTS: I finally paid off my student loan! Congratulations! It feels great to get out of debt. It really does. Now I can open a savings account.",
                    lines:[
                        { speaker: "Chloe", text: "I finally paid off my student loan!", pt: "(Finalmente quitei meu empréstimo estudantil!)" },
                        { speaker: "David", text: "Congratulations! It feels great to get out of debt.", pt: "(Parabéns! É ótimo sair das dívidas.)" },
                        { speaker: "Chloe", text: "It really does. Now I can open a savings account.", pt: "(É mesmo. Agora posso abrir uma conta poupança.)" }
                    ]
                },
                {
                    title: "Dialogue 4: Credit Cards",
                    audio: "TTS: Make sure you pay off a credit card every month. I try, but sometimes I am in debt. You have to be careful. You don't want to pay interest to the bank.",
                    lines:[
                        { speaker: "Advisor", text: "Make sure you pay off a credit card every month.", pt: "(Certifique-se de quitar o cartão de crédito todo mês.)" },
                        { speaker: "Client", text: "I try, but sometimes I am in debt.", pt: "(Eu tento, mas às vezes fico endividado.)" },
                        { speaker: "Advisor", text: "You have to be careful. You don't want to pay interest to the bank.", pt: "(Você tem que ter cuidado. Você não quer pagar juros ao banco.)" }
                    ]
                },
                {
                    title: "Dialogue 5: Expensive Tastes",
                    audio: "TTS: Wow, look at that jacket. It must cost an arm and a leg. Yeah, buying that would be a waste of money. I agree. I am a bit short on cash right now anyway.",
                    lines:[
                        { speaker: "Emma", text: "Wow, look at that jacket. It must cost an arm and a leg.", pt: "(Uau, olhe aquela jaqueta. Deve custar os olhos da cara.)" },
                        { speaker: "Leo", text: "Yeah, buying that would be a waste of money.", pt: "(Sim, comprar isso seria um desperdício de dinheiro.)" },
                        { speaker: "Emma", text: "I agree. I am a bit short on cash right now anyway.", pt: "(Eu concordo. Estou com pouco dinheiro agora de qualquer forma.)" }
                    ]
                },
                {
                    title: "Dialogue 6: Rent and Shopping",
                    audio: "TTS: How much do you pay in rent? I pay a lot, but the apartment is great value for money. That's good. Once I pay rent, I can't go on a shopping spree.",
                    lines:[
                        { speaker: "Tom", text: "How much do you pay in rent?", pt: "(Quanto você paga de aluguel?)" },
                        { speaker: "Sophie", text: "I pay a lot, but the apartment is great value for money.", pt: "(Eu pago muito, mas o apartamento tem um ótimo custo-benefício.)" },
                        { speaker: "Tom", text: "That's good. Once I pay rent, I can't go on a shopping spree.", pt: "(Isso é bom. Depois que pago o aluguel, não posso fazer uma maratona de compras.)" }
                    ]
                }
            ],

            // --- 3C: PRACTICE ---
            grammarDrillGroups:[
                {
                    title: "Managing Money",
                    drills:[
                        { q: "If you want to control your money, you must ________ a budget.", options:[{t: "make", c: true}, {t: "do", c: false}, {t: "save", c: false}, {t: "pay", c: false}], type: "mcq" },
                        { q: "It is difficult to ________ to a budget when you like shopping.", options:[{t: "stick", c: true}, {t: "stay", c: false}, {t: "hold", c: false}, {t: "keep", c: false}], type: "mcq" },
                        { q: "They are trying to save ________ for a house.", options:[{t: "in", c: false}, {t: "out", c: false}, {t: "up", c: true}, {t: "on", c: false}], type: "mcq" },
                        { q: "People with no savings live paycheck to ________.", options:[{t: "salary", c: false}, {t: "income", c: false}, {t: "paycheck", c: true}, {t: "wallet", c: false}], type: "mcq" },
                        { q: "To save money, I need to cut ________ on spending.", options:[{t: "back", c: true}, {t: "down", c: false}, {t: "out", c: false}, {t: "off", c: false}], type: "mcq" },
                        { q: "Prices are so high, it's hard to make ends ________.", options:[{t: "meet", c: true}, {t: "connect", c: false}, {t: "join", c: false}, {t: "touch", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Banking and Debt",
                    drills:[
                        { q: "I will go to the bank to open a ________ account.", options:[{t: "savings", c: true}, {t: "debt", c: false}, {t: "loan", c: false}, {t: "salary", c: false}], type: "mcq" },
                        { q: "It took ten years to pay ________ the loan.", options:[{t: "out", c: false}, {t: "down", c: false}, {t: "off", c: true}, {t: "away", c: false}], type: "mcq" },
                        { q: "You should pay off a credit ________ in full.", options:[{t: "paper", c: false}, {t: "card", c: true}, {t: "debt", c: false}, {t: "money", c: false}], type: "mcq" },
                        { q: "If you owe a lot of money, you are ________ debt.", options:[{t: "on", c: false}, {t: "in", c: true}, {t: "at", c: false}, {t: "with", c: false}], type: "mcq" },
                        { q: "My goal is to pay my loans and get ________ of debt.", options:[{t: "out", c: true}, {t: "off", c: false}, {t: "away", c: false}, {t: "free", c: false}], type: "mcq" },
                        { q: "When you borrow money, you have to pay ________.", options:[{t: "income", c: false}, {t: "salary", c: false}, {t: "interest", c: true}, {t: "budget", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Spending Habits & Costs",
                    drills:[
                        { q: "That designer bag must cost an arm and a ________.", options:[{t: "foot", c: false}, {t: "leg", c: true}, {t: "hand", c: false}, {t: "head", c: false}], type: "mcq" },
                        { q: "Buying that broken TV was a ________ of money.", options:[{t: "loss", c: false}, {t: "trash", c: false}, {t: "waste", c: true}, {t: "spend", c: false}], type: "mcq" },
                        { q: "This cheap computer works great. It's a good ________ for money.", options:[{t: "value", c: true}, {t: "price", c: false}, {t: "cost", c: false}, {t: "save", c: false}], type: "mcq" },
                        { q: "When I get paid, I want to go on a shopping ________.", options:[{t: "spree", c: true}, {t: "run", c: false}, {t: "trip", c: false}, {t: "time", c: false}], type: "mcq" },
                        { q: "I can't go to the restaurant. I'm short ________ cash.", options:[{t: "of", c: false}, {t: "in", c: false}, {t: "on", c: true}, {t: "with", c: false}], type: "mcq" },
                        { q: "How much do you pay in ________ for your apartment?", options:[{t: "mortgage", c: false}, {t: "rent", c: true}, {t: "bill", c: false}, {t: "tax", c: false}], type: "mcq" }
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
                { text: "I need to make a budget and stick to it. ↘", audio: "TTS: I need to make a budget and stick to it." },
                { text: "Are you saving up for a house? ↗", audio: "TTS: Are you saving up for a house?" },
                { text: "It is hard to make ends meet when expenses are high. ↘", audio: "TTS: It is hard to make ends meet when expenses are high." },
                { text: "I'd like to open a savings account, please. ↘", audio: "TTS: I'd like to open a savings account, please." },
                { text: "He is working hard to pay off a student loan. ↘", audio: "TTS: He is working hard to pay off a student loan." },
                { text: "I want to get out of debt as soon as possible. ↘", audio: "TTS: I want to get out of debt as soon as possible." },
                { text: "That designer bag must cost an arm and a leg! ↘", audio: "TTS: That designer bag must cost an arm and a leg!" },
                { text: "Buying that broken phone was a complete waste of money. ↘", audio: "TTS: Buying that broken phone was a complete waste of money." },
                { text: "I can't go to the restaurant because I'm short on cash. ↘", audio: "TTS: I can't go to the restaurant because I'm short on cash." },
                { text: "How much do you pay in rent? ↘", audio: "TTS: How much do you pay in rent?" }
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
                    instruction: "Listen to the conversation at the bank and type the missing words.",
                    audio: "TTS: Teller: Good morning. How can I help you today? Customer: Hi, I need to deposit this money into my savings account. Teller: Certainly. Do you also need to withdraw any cash? Customer: No, thank you. I am trying to save up for a car.",
                    text: "Teller: Good morning. How can I help you today?<br>Customer: Hi, I need to[deposit] this money into my [savings] account.<br>Teller: Certainly. Do you also need to [withdraw] any cash?<br>Customer: No, thank you. I am trying to [save] up for a car."
                },
                {
                    type: "dropdown",
                    instruction: "Listen to the dialogue about personal finances.",
                    audio: "TTS: Mark: I really need to make a budget. I spend too much every month. Lisa: That's a good idea. You don't want to live paycheck to paycheck. Mark: Exactly. I have to pay off a credit card. Lisa: You should cut back on spending so you can afford to pay it.",
                    questions:[
                        { q: "Mark: I really need to make a[budget* | loan | tax]. I spend too much every month.", a: "budget" },
                        { q: "Lisa: That's a good idea. You don't want to live[paycheck* | cash | income] to paycheck.", a: "paycheck" },
                        { q: "Mark: Exactly. I have to pay off a[credit* | debit | interest] card.", a: "credit" },
                        { q: "Lisa: You should cut back on [spending* | saving | investing] so you can afford to pay it.", a: "spending" }
                    ]
                },
                {
                    type: "audio-choice",
                    instruction: "Listen to the speaker. Why is she unhappy?",
                    audio: "TTS: Yesterday, I went on a shopping spree and bought a new designer coat. Now, I am completely broke. The coat cost an arm and a leg, and honestly, it was a waste of money because I already have three coats.",
                    options:[
                        { t: "She lost her wallet at the mall.", c: false },
                        { t: "She spent too much money on a coat and is now broke.", c: true },
                        { t: "She has to pay a high interest rate on her mortgage.", c: false },
                        { t: "She owes her friend a lot of money.", c: false }
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
                    title: "Dialogue - House Hunting",
                    audio: "TTS: Emma: How much do you pay in rent? Leo: I pay one thousand dollars a month. It takes up a lot of my income. Emma: I know, rent is so expensive here. It's hard to make ends meet. Leo: That's why I am trying to save up for a house. Emma: That's a great financial goal! But getting a mortgage is a big commitment. Leo: True. I need to get out of debt first and pay off a loan. Emma: You should make a budget and stick to it. Leo: I will. No more going out for dinner. I need to be frugal.",
                    body: "<b>Emma:</b>[How much do you pay in rent](tooltip:how-much-rent)?<br><b>Leo:</b> I pay one thousand dollars a month. It takes up a lot of my [income](tooltip:income).<br><b>Emma:</b> I know, rent is so [expensive](tooltip:expensive) here. It's hard to [make ends meet](tooltip:make-ends-meet).<br><b>Leo:</b> That's why I am trying to[save up for a house](tooltip:save-up-house).<br><b>Emma:</b> That's a great[financial](tooltip:financial) goal! But getting a [mortgage](tooltip:mortgage) is a big commitment.<br><b>Leo:</b> True. I need to [get out of debt](tooltip:get-out-debt) first and[pay off a loan](tooltip:pay-off-loan).<br><b>Emma:</b> You should [make a budget](tooltip:make-budget) and [stick to a budget](tooltip:stick-budget).<br><b>Leo:</b> I will. No more going out for dinner. I need to be[frugal](tooltip:frugal).",
                    questions:[
                        { q: "Why is Leo trying to save money?", options:[{t: "To buy a new car.", c: false}, {t: "To save up for a house.", c: true}, {t: "To go on a vacation.", c: false}], type: "mcq" },
                        { q: "What does Leo need to do before getting a mortgage?", options:[{t: "Get out of debt and pay off a loan.", c: true}, {t: "Go on a shopping spree.", c: false}, {t: "Ask his boss for a higher salary.", c: false}], type: "mcq" },
                        { q: "What advice does Emma give to Leo?", options:[{t: "To open a savings account.", c: false}, {t: "To make a budget and stick to it.", c: true}, {t: "To borrow money from the bank.", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Dialogue - At the Bank",
                    audio: "TTS: Client: Good morning. I'd like to open a savings account. Teller: Certainly. Would you like to deposit some cash today? Client: Yes, I want to deposit five hundred dollars. Teller: Great. By the way, our bank offers excellent interest rates for new accounts. Client: That's good to hear. I am trying to grow my wealth. Teller: If you want to invest, you can speak to our financial advisor. Client: Maybe later. Right now, I just want to make sure I don't waste my money.",
                    body: "<b>Client:</b> Good morning.[I'd like to open a savings account](tooltip:open-savings).<br><b>Teller:</b> Certainly. Would you like to [deposit](tooltip:to-deposit) some [cash](tooltip:cash) today?<br><b>Client:</b> Yes, I want to deposit five hundred dollars.<br><b>Teller:</b> Great. By the way, our bank offers excellent [interest](tooltip:interest) rates for new[accounts](tooltip:account).<br><b>Client:</b> That's good to hear. I am trying to grow my [wealth](tooltip:wealth).<br><b>Teller:</b> If you want to [invest](tooltip:to-invest), you can speak to our financial advisor.<br><b>Client:</b> Maybe later. Right now, I just want to make sure I don't [waste](tooltip:to-waste) my money.",
                    questions:[
                        { q: "What does the client want to do at the bank?", options:[{t: "Pay off a credit card.", c: false}, {t: "Open a savings account and deposit cash.", c: true}, {t: "Apply for a mortgage.", c: false}], type: "mcq" },
                        { q: "What does the bank offer for new accounts?", options:[{t: "Excellent interest rates.", c: true}, {t: "Free credit cards.", c: false}, {t: "High taxes.", c: false}], type: "mcq" },
                        { q: "Why doesn't the client want to speak to the financial advisor right now?", options:[{t: "Because he is totally broke.", c: false}, {t: "Because he just wants to make sure he doesn't waste his money for now.", c: true}, {t: "Because he wants to borrow money instead.", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Email - Shopping Regrets",
                    audio: "TTS: Subject: I spent too much! Hi Anna, I made a big mistake yesterday. I went on a shopping spree at the new mall. I bought shoes, clothes, and a designer bag. It cost an arm and a leg! Now, I am completely broke and short on cash for the rest of the month. It was such a waste of money because I don't even need these things. I am going to return the bag tomorrow to get a refund. I really need to cut back on spending and be more thrifty. Best, Sarah.",
                    body: "<b>From: Sarah</b><br><b>To: Anna</b><br>Subject: I [spent](tooltip:to-spend) too much!<br><br>Hi Anna,<br>I made a big mistake yesterday. I decided to [go on a shopping spree](tooltip:shopping-spree) at the new mall. I bought shoes, clothes, and a designer bag. It[cost an arm and a leg](tooltip:cost-arm-leg)! Now, I am completely [broke](tooltip:broke) and [short on cash](tooltip:short-on-cash) for the rest of the month. It was such [a waste of money](tooltip:waste-of-money) because I don't even need these things. I am going to return the bag tomorrow to get a refund. I really need to [cut back on spending](tooltip:cut-back-spending) and be more [thrifty](tooltip:thrifty).<br><br>Best, Sarah.",
                    questions:[
                        { q: "What mistake did Sarah make?", options:[{t: "She lost her job.", c: false}, {t: "She went on a shopping spree and spent too much money.", c: true}, {t: "She forgot to pay her rent.", c: false}], type: "mcq" },
                        { q: "How does Sarah describe the cost of the designer bag?", options:[{t: "It was cheap.", c: false}, {t: "It was affordable.", c: false}, {t: "It cost an arm and a leg.", c: true}], type: "mcq" },
                        { q: "What is Sarah going to do tomorrow?", options:[{t: "Return the bag to get a refund.", c: true}, {t: "Open a savings account.", c: false}, {t: "Ask Anna to lend her money.", c: false}], type: "mcq" }
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
                { type: "matching", instruction: "Match the financial nouns to their meanings.", pairs:[
                    { left: "Income", right: "Money you earn or receive", val: "1" },
                    { left: "Expenses", right: "Money you spend on things", val: "2" },
                    { left: "Debt", right: "Money you owe to others", val: "3" },
                    { left: "Mortgage", right: "A loan to buy a house", val: "4" }
                ]},
                { type: "matching", instruction: "Match the verbs with their opposites.", pairs:[
                    { left: "To spend", right: "To save", val: "1" },
                    { left: "To borrow", right: "To lend", val: "2" },
                    { left: "To deposit", right: "To withdraw", val: "3" },
                    { left: "To earn", right: "To waste", val: "4" } // Contextual opposite for money
                ]},
                { type: "matching", instruction: "Match the adjectives.", pairs:[
                    { left: "Rich", right: "Having a lot of money", val: "1" },
                    { left: "Broke", right: "Having no money at all", val: "2" },
                    { left: "Cheap", right: "Low in price", val: "3" },
                    { left: "Expensive", right: "Costing a lot of money", val: "4" }
                ]},
                { type: "matching", instruction: "Match the phrase halves.", pairs:[
                    { left: "Cost an arm", right: "and a leg", val: "1" },
                    { left: "Live paycheck", right: "to paycheck", val: "2" },
                    { left: "Make ends", right: "meet", val: "3" },
                    { left: "Value for", right: "money", val: "4" }
                ]},

                // --- WORD ORDER (5-14) ---
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "budget / to / need / make / I / a / .", correct: "I need to make a budget ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "budget / hard / stick / to / It's / to / a / .", correct: "It's hard to stick to a budget ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "house / up / saving / for / I'm / a / .", correct: "I'm saving up for a house ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "spending / cut / to / back / need / on / We / .", correct: "We need to cut back on spending ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "ends / to / hard / make / It's / meet / .", correct: "It's hard to make ends meet ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "savings / account / to / like / I'd / a / open / .", correct: "I'd like to open a savings account ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "loan / paid / finally / I / my / off / .", correct: "I finally paid off my loan ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "debt / hate / be / in / I / to / .", correct: "I hate to be in debt ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "an / leg / and / arm / a / cost / It / .", correct: "It cost an arm and a leg ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "cash / on / bit / I'm / short / a / .", correct: "I'm a bit short on cash ." },

                // --- CLICKABLE ERROR (15-24) ---
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "I need to [do](error:make) a budget." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "It's hard to [stay](error:stick) to a budget." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "I am saving [in](error:up) for a house." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "I live [salary](error:paycheck) to paycheck." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "I must cut [down](error:back) on spending." }, // "cut down on" is generally acceptable, but the target chunk is "cut back on spending". Let's use a clearer error.
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "I must cut [off](error:back) on spending." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "It's hard to make [finals](error:ends) meet." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "I want to open a [saving](error:savings) account." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "I need to pay [out](error:off) my loan." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "It cost an arm and a [foot](error:leg)." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "I am short [of](error:on) cash." },

                // --- ODD ONE OUT (25-30) ---
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Money coming in)", options:[{t: "Income", c: false}, {t: "Salary", c: false}, {t: "Wealth", c: false}, {t: "Debt", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Money going out)", options:[{t: "Expenses", c: false}, {t: "Tax", c: false}, {t: "Interest", c: false}, {t: "Savings", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Verbs for keeping money)", options:[{t: "To save", c: false}, {t: "To deposit", c: false}, {t: "To invest", c: false}, {t: "To waste", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Adjectives for rich)", options:[{t: "Wealthy", c: false}, {t: "Well-off", c: false}, {t: "Rich", c: false}, {t: "Broke", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Adjectives for careful spending)", options:[{t: "Thrifty", c: false}, {t: "Frugal", c: false}, {t: "Affordable", c: false}, {t: "Generous", c: true}] }, // Generous means giving away freely
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Banking)", options:[{t: "To withdraw", c: false}, {t: "To deposit", c: false}, {t: "Loan", c: false}, {t: "To afford", c: true}] },

                // --- TRUE / FALSE (31-35) ---
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "To 'live paycheck to paycheck' means you have a lot of savings in the bank.", correct: "false"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "If something 'costs an arm and a leg', it is very expensive.", correct: "true"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "To 'pay off a loan' means you finish returning the money you borrowed.", correct: "true"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "A 'thrifty' person likes to waste their money on useless things.", correct: "false"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "To 'make ends meet' means to earn just enough money to pay for basic living expenses.", correct: "true"}] },

                // --- MCQ (36-39) ---
                { type: "mcq", instruction: "Choose the correct phrase.<br>When you have no money left before your next salary, you are living ________.", options:[{t: "day by day", c: false}, {t: "paycheck to paycheck", c: true}, {t: "in debt", c: false}, {t: "off a loan", c: false}] },
                { type: "mcq", instruction: "Choose the correct word.<br>The money you pay extra to the bank for borrowing money is called ________.", options:[{t: "tax", c: false}, {t: "income", c: false}, {t: "interest", c: true}, {t: "mortgage", c: false}] },
                { type: "mcq", instruction: "Choose the correct phrase.<br>To stop buying things you don't need, you should ________ on spending.", options:[{t: "make ends meet", c: false}, {t: "cut back", c: true}, {t: "pay off", c: false}, {t: "save up", c: false}] },
                { type: "mcq", instruction: "Choose the correct phrase.<br>If you want to buy a new car but don't have money right now, you say: 'I am a bit ________.'", options:[{t: "short on cash", c: true}, {t: "waste of money", c: false}, {t: "value for money", c: false}, {t: "in debt", c: false}] },

                // --- CATEGORIZE (40) ---
                { type: "categorize", instruction: "Sort the adjectives into Having Money and Lacking Money.", 
                    categories:[{id: "rich", name: "Having Money"}, {id: "poor", name: "Lacking Money"}],
                    items:[
                        {text: "Wealthy", catId: "rich"}, 
                        {text: "Well-off", catId: "rich"}, 
                        {text: "Rich", catId: "rich"}, 
                        {text: "Poor", catId: "poor"}, 
                        {text: "Broke", catId: "poor"}, 
                        {text: "Short on cash", catId: "poor"} // Treated as adjective/state here
                    ] 
                }
            ]
        },

        // ======================================================
        // STEP 8: WRITING PRACTICE
        // ======================================================
        {
            title: "Writing Practice",
            instruction: "Write a short paragraph (5-7 sentences) describing your current financial goals. Mention if you are trying to save up for something, if you need to make a budget or cut back on spending, and use at least two financial adjectives (e.g., thrifty, broke, expensive).",
            example: "Right now, my main financial goal is to save up for a house. Rent is very expensive in my city, and it takes up a lot of my income. To achieve my goal, I decided to make a budget and stick to it. I really need to cut back on spending, especially on eating out. I am trying to be more thrifty so I don't end up broke at the end of the month. Hopefully, I can get out of debt soon and open a new savings account.",
            prompts:[
                "State what you are saving up for or trying to pay off.",
                "Mention making or sticking to a budget.",
                "Describe how you plan to cut back on spending.",
                "Use phrases like 'short on cash' or 'cost an arm and a leg'."
            ]
        },

        // ======================================================
        // STEP 9: FLASHCARDS
        // ======================================================
        {
            title: "Flashcards",
            items:[
                // 2A Items (36 items)
                { term: "Budget", definition: "An estimate of income and expenditure for a set period.", defTrans: "Orçamento", example: "We need to plan a monthly budget.", audioFront: "TTS: Budget", audioBack: "TTS: We need to plan a monthly budget." },
                { term: "Income", definition: "Money received, especially on a regular basis, for work or investments.", defTrans: "Renda", example: "His total income is very high.", audioFront: "TTS: Income", audioBack: "TTS: His total income is very high." },
                { term: "Salary", definition: "A fixed regular payment made by an employer.", defTrans: "Salário", example: "She receives a good salary from her company.", audioFront: "TTS: Salary", audioBack: "TTS: She receives a good salary from her company." },
                { term: "Expenses", definition: "The cost required for something; the money spent.", defTrans: "Despesas / Gastos", example: "Rent and food are my biggest expenses.", audioFront: "TTS: Expenses", audioBack: "TTS: Rent and food are my biggest expenses." },
                { term: "Savings", definition: "The money one has saved, especially in a bank.", defTrans: "Poupança / Economias", example: "I put some money into my savings every month.", audioFront: "TTS: Savings", audioBack: "TTS: I put some money into my savings every month." },
                { term: "Debt", definition: "A sum of money that is owed or due.", defTrans: "Dívida", example: "He is working hard to clear his debt.", audioFront: "TTS: Debt", audioBack: "TTS: He is working hard to clear his debt." },
                { term: "Loan", definition: "A thing that is borrowed, especially a sum of money.", defTrans: "Empréstimo", example: "I asked the bank for a car loan.", audioFront: "TTS: Loan", audioBack: "TTS: I asked the bank for a car loan." },
                { term: "Mortgage", definition: "A legal agreement by which a bank lends money to buy a house.", defTrans: "Hipoteca", example: "They pay a mortgage on their new house.", audioFront: "TTS: Mortgage", audioBack: "TTS: They pay a mortgage on their new house." },
                { term: "Interest", definition: "Money paid regularly at a particular rate for the use of money lent.", defTrans: "Juros", example: "The credit card has a high interest rate.", audioFront: "TTS: Interest", audioBack: "TTS: The credit card has a high interest rate." },
                { term: "Tax", definition: "A compulsory contribution to state revenue.", defTrans: "Imposto", example: "The government increased the income tax.", audioFront: "TTS: Tax", audioBack: "TTS: The government increased the income tax." },
                { term: "Investment", definition: "The action or process of investing money for profit.", defTrans: "Investimento", example: "Real estate is usually a safe investment.", audioFront: "TTS: Investment", audioBack: "TTS: Real estate is usually a safe investment." },
                { term: "Wealth", definition: "An abundance of valuable possessions or money.", defTrans: "Riqueza / Patrimônio", example: "He accumulated a lot of wealth over the years.", audioFront: "TTS: Wealth", audioBack: "TTS: He accumulated a lot of wealth over the years." },

                { term: "To earn", definition: "To obtain money in return for labor or services.", defTrans: "Ganhar (dinheiro)", example: "Doctors usually earn a lot of money.", audioFront: "TTS: To earn", audioBack: "TTS: Doctors usually earn a lot of money." },
                { term: "To spend", definition: "To pay out money in buying or hiring goods or services.", defTrans: "Gastar", example: "I spend too much on coffee.", audioFront: "TTS: To spend", audioBack: "TTS: I spend too much on coffee." },
                { term: "To save", definition: "To keep and store up money for future use.", defTrans: "Economizar / Guardar", example: "You should save 10% of your salary.", audioFront: "TTS: To save", audioBack: "TTS: You should save 10% of your salary." },
                { term: "To invest", definition: "To put money into financial schemes to achieve a profit.", defTrans: "Investir", example: "It is smart to invest in the stock market.", audioFront: "TTS: To invest", audioBack: "TTS: It is smart to invest in the stock market." },
                { term: "To borrow", definition: "To take and use money belonging to someone else temporarily.", defTrans: "Pegar emprestado", example: "Can I borrow ten dollars from you?", audioFront: "TTS: To borrow", audioBack: "TTS: Can I borrow ten dollars from you?" },
                { term: "To lend", definition: "To grant someone the use of money to be returned later.", defTrans: "Emprestar", example: "I will lend you my car for the weekend.", audioFront: "TTS: To lend", audioBack: "TTS: I will lend you my car for the weekend." },
                { term: "To owe", definition: "To have an obligation to pay or repay money.", defTrans: "Dever", example: "I owe my brother fifty bucks.", audioFront: "TTS: To owe", audioBack: "TTS: I owe my brother fifty bucks." },
                { term: "To afford", definition: "To have enough money to pay for something.", defTrans: "Ter condições de pagar", example: "I cannot afford to buy a new phone.", audioFront: "TTS: To afford", audioBack: "TTS: I cannot afford to buy a new phone." },
                { term: "To waste", definition: "To use or expend carelessly or extravagantly.", defTrans: "Desperdiçar", example: "Don't waste your money on useless things.", audioFront: "TTS: To waste", audioBack: "TTS: Don't waste your money on useless things." },
                { term: "To deposit", definition: "To put or set down money in a bank account.", defTrans: "Depositar", example: "I need to deposit this check at the bank.", audioFront: "TTS: To deposit", audioBack: "TTS: I need to deposit this check at the bank." },
                { term: "To withdraw", definition: "To remove or take away money from a bank account.", defTrans: "Sacar", example: "I will withdraw some cash from the ATM.", audioFront: "TTS: To withdraw", audioBack: "TTS: I will withdraw some cash from the ATM." },
                { term: "To budget", definition: "To plan the expenditure of money over a period.", defTrans: "Fazer orçamento", example: "We need to budget our money carefully.", audioFront: "TTS: To budget", audioBack: "TTS: We need to budget our money carefully." },

                { term: "Rich", definition: "Having a great deal of money or assets.", defTrans: "Rico(a)", example: "He became very rich after selling his business.", audioFront: "TTS: Rich", audioBack: "TTS: He became very rich after selling his business." },
                { term: "Wealthy", definition: "Having a great deal of money, resources, or assets.", defTrans: "Rico(a) / Afluente", example: "The wealthy family donated to the hospital.", audioFront: "TTS: Wealthy", audioBack: "TTS: The wealthy family donated to the hospital." },
                { term: "Well-off", definition: "Wealthy; in a favorable situation.", defTrans: "Bem de vida", example: "They live in a well-off neighborhood.", audioFront: "TTS: Well-off", audioBack: "TTS: They live in a well-off neighborhood." },
                { term: "Poor", definition: "Lacking sufficient money to live comfortably.", defTrans: "Pobre", example: "The charity helps poor children get an education.", audioFront: "TTS: Poor", audioBack: "TTS: The charity helps poor children get an education." },
                { term: "Broke", definition: "Having completely no money (informal).", defTrans: "Duro(a) / Sem dinheiro", example: "I can't go to the cinema, I am totally broke.", audioFront: "TTS: Broke", audioBack: "TTS: I can't go to the cinema, I am totally broke." },
                { term: "Cheap", definition: "Low in price.", defTrans: "Barato(a)", example: "Fast food is usually very cheap.", audioFront: "TTS: Cheap", audioBack: "TTS: Fast food is usually very cheap." },
                { term: "Affordable", definition: "Inexpensive; reasonably priced.", defTrans: "Acessível / Que cabe no bolso", example: "We are looking for an affordable apartment.", audioFront: "TTS: Affordable", audioBack: "TTS: We are looking for an affordable apartment." },
                { term: "Expensive", definition: "Costing a lot of money.", defTrans: "Caro(a)", example: "Designer clothes are too expensive for me.", audioFront: "TTS: Expensive", audioBack: "TTS: Designer clothes are too expensive for me." },
                { term: "Financial", definition: "Relating to finance or money matters.", defTrans: "Financeiro(a)", example: "She works as a financial advisor.", audioFront: "TTS: Financial", audioBack: "TTS: She works as a financial advisor." },
                { term: "Thrifty", definition: "Using money and resources carefully and not wastefully.", defTrans: "Econômico / Poupador", example: "My thrifty grandmother never throws anything away.", audioFront: "TTS: Thrifty", audioBack: "TTS: My thrifty grandmother never throws anything away." },
                { term: "Generous", definition: "Showing a readiness to give more of something than is strictly necessary.", defTrans: "Generoso(a)", example: "It was very generous of you to pay for dinner.", audioFront: "TTS: Generous", audioBack: "TTS: It was very generous of you to pay for dinner." },
                { term: "Frugal", definition: "Sparing or economical with regard to money.", defTrans: "Frugal / Econômico(a)", example: "He lives a frugal lifestyle to save money.", audioFront: "TTS: Frugal", audioBack: "TTS: He lives a frugal lifestyle to save money." },

                // 3A Items (18 items)
                { term: "Make a budget", definition: "To create a plan for spending and saving money.", defTrans: "Fazer um orçamento", example: "To stop wasting money, you need to make a budget.", audioFront: "TTS: Make a budget", audioBack: "TTS: To stop wasting money, you need to make a budget." },
                { term: "Stick to a budget", definition: "To follow the financial plan you created.", defTrans: "Seguir/manter o orçamento", example: "It is hard to stick to a budget when shopping.", audioFront: "TTS: Stick to a budget", audioBack: "TTS: It is hard to stick to a budget when shopping." },
                { term: "Save up for a house", definition: "To accumulate money over time to buy a home.", defTrans: "Juntar dinheiro para uma casa", example: "We are trying to save up for a house.", audioFront: "TTS: Save up for a house", audioBack: "TTS: We are trying to save up for a house." },
                { term: "Live paycheck to paycheck", definition: "To spend all of one's salary before the next one arrives.", defTrans: "Viver de salário em salário (sem reservas)", example: "Many people live paycheck to paycheck.", audioFront: "TTS: Live paycheck to paycheck", audioBack: "TTS: Many people live paycheck to paycheck." },
                { term: "Cut back on spending", definition: "To reduce the amount of money you spend.", defTrans: "Reduzir os gastos", example: "I want to cut back on spending this month.", audioFront: "TTS: Cut back on spending", audioBack: "TTS: I want to cut back on spending this month." },
                { term: "Make ends meet", definition: "To earn just enough money to pay for basic living expenses.", defTrans: "Fechar as contas / Sobreviver", example: "With high inflation, it is hard to make ends meet.", audioFront: "TTS: Make ends meet", audioBack: "TTS: With high inflation, it is hard to make ends meet." },
                
                { term: "Open a savings account", definition: "To start a bank account intended for storing money.", defTrans: "Abrir uma conta poupança", example: "I went to the bank to open a savings account.", audioFront: "TTS: Open a savings account", audioBack: "TTS: I went to the bank to open a savings account." },
                { term: "Pay off a loan", definition: "To return all the money you borrowed from the bank.", defTrans: "Quitar um empréstimo", example: "It will take five years to pay off a loan.", audioFront: "TTS: Pay off a loan", audioBack: "TTS: It will take five years to pay off a loan." },
                { term: "Pay off a credit card", definition: "To clear the debt balance on your card.", defTrans: "Quitar o cartão de crédito", example: "You should pay off a credit card every month.", audioFront: "TTS: Pay off a credit card", audioBack: "TTS: You should pay off a credit card every month." },
                { term: "Be in debt", definition: "The state of owing money to someone else.", defTrans: "Estar em dívida", example: "I hate to be in debt.", audioFront: "TTS: Be in debt", audioBack: "TTS: I hate to be in debt." },
                { term: "Get out of debt", definition: "To successfully pay back all the money you owe.", defTrans: "Sair das dívidas", example: "My financial goal is to get out of debt.", audioFront: "TTS: Get out of debt", audioBack: "TTS: My financial goal is to get out of debt." },
                { term: "Pay interest", definition: "To pay an extra fee to the bank for borrowing money.", defTrans: "Pagar juros", example: "If you borrow money, you have to pay interest.", audioFront: "TTS: Pay interest", audioBack: "TTS: If you borrow money, you have to pay interest." },
                
                { term: "Cost an arm and a leg", definition: "An idiom meaning something is extremely expensive.", defTrans: "Custar os olhos da cara (um braço e uma perna)", example: "That luxury car must cost an arm and a leg.", audioFront: "TTS: Cost an arm and a leg", audioBack: "TTS: That luxury car must cost an arm and a leg." },
                { term: "A waste of money", definition: "A bad use of funds.", defTrans: "Um desperdício de dinheiro", example: "Buying that broken phone was a waste of money.", audioFront: "TTS: A waste of money", audioBack: "TTS: Buying that broken phone was a waste of money." },
                { term: "Value for money", definition: "Worth the amount paid; a good deal.", defTrans: "Custo-benefício", example: "This laptop is very fast; it is great value for money.", audioFront: "TTS: Value for money", audioBack: "TTS: This laptop is very fast; it is great value for money." },
                { term: "Go on a shopping spree", definition: "To buy a lot of things in a short period of time.", defTrans: "Fazer uma maratona de compras", example: "After she got paid, she decided to go on a shopping spree.", audioFront: "TTS: Go on a shopping spree", audioBack: "TTS: After she got paid, she decided to go on a shopping spree." },
                { term: "Short on cash", definition: "Not having enough money at the moment.", defTrans: "Com pouco dinheiro", example: "I can't go out tonight, I am short on cash.", audioFront: "TTS: Short on cash", audioBack: "TTS: I can't go out tonight, I am short on cash." },
                { term: "Pay in rent", definition: "The amount of money given monthly to a landlord.", defTrans: "Pagar de aluguel", example: "How much do you pay in rent?", audioFront: "TTS: Pay in rent", audioBack: "TTS: How much do you pay in rent?" }
            ]
        }
    ],

    // ======================================================
    // GLOSSARY (All 54 items + Context words)
    // ======================================================
    glossary:[
        // 2A: Financial Nouns
        { topic: "Finance", term: "budget", definition: "An estimate of income and expenditure.", translation: "Orçamento" },
        { topic: "Finance", term: "income", definition: "Money received for work or investments.", translation: "Renda" },
        { topic: "Finance", term: "salary", definition: "A fixed regular payment by an employer.", translation: "Salário" },
        { topic: "Finance", term: "expenses", definition: "The money spent on something.", translation: "Despesas / Gastos" },
        { topic: "Finance", term: "savings", definition: "The money one has saved.", translation: "Poupança" },
        { topic: "Finance", term: "debt", definition: "A sum of money owed.", translation: "Dívida" },
        { topic: "Finance", term: "loan", definition: "Money borrowed.", translation: "Empréstimo" },
        { topic: "Finance", term: "mortgage", definition: "A loan to buy property.", translation: "Hipoteca" },
        { topic: "Finance", term: "interest", definition: "Money paid regularly at a rate for money lent.", translation: "Juros" },
        { topic: "Finance", term: "tax", definition: "A compulsory contribution to state revenue.", translation: "Imposto" },
        { topic: "Finance", term: "investment", definition: "Investing money for profit.", translation: "Investimento" },
        { topic: "Finance", term: "wealth", definition: "An abundance of valuable possessions.", translation: "Riqueza / Patrimônio" },

        // 2A: Financial Verbs
        { topic: "Verbs", term: "to-earn", definition: "To obtain money for labor.", translation: "Ganhar (dinheiro)" },
        { topic: "Verbs", term: "to-spend", definition: "To pay out money.", translation: "Gastar" },
        { topic: "Verbs", term: "to-save", definition: "To keep and store up money.", translation: "Economizar" },
        { topic: "Verbs", term: "to-invest", definition: "To put money into financial schemes.", translation: "Investir" },
        { topic: "Verbs", term: "to-borrow", definition: "To take and use money belonging to someone else.", translation: "Pegar emprestado" },
        { topic: "Verbs", term: "to-lend", definition: "To grant someone the use of money.", translation: "Emprestar" },
        { topic: "Verbs", term: "to-owe", definition: "To have an obligation to pay money.", translation: "Dever" },
        { topic: "Verbs", term: "to-afford", definition: "To have enough money to pay for.", translation: "Ter condições de pagar" },
        { topic: "Verbs", term: "to-waste", definition: "To expend carelessly.", translation: "Desperdiçar" },
        { topic: "Verbs", term: "to-deposit", definition: "To put money in a bank account.", translation: "Depositar" },
        { topic: "Verbs", term: "to-withdraw", definition: "To take money out of an account.", translation: "Sacar" },
        { topic: "Verbs", term: "to-budget", definition: "To plan the expenditure of money.", translation: "Fazer orçamento" },

        // 2A: Adjectives related to Money
        { topic: "Adjectives", term: "rich", definition: "Having a great deal of money.", translation: "Rico(a)" },
        { topic: "Adjectives", term: "wealthy", definition: "Having a great deal of money or assets.", translation: "Rico(a) / Afluente" },
        { topic: "Adjectives", term: "well-off", definition: "Comfortably wealthy.", translation: "Bem de vida" },
        { topic: "Adjectives", term: "poor", definition: "Lacking sufficient money.", translation: "Pobre" },
        { topic: "Adjectives", term: "broke", definition: "Having completely no money.", translation: "Duro / Sem dinheiro" },
        { topic: "Adjectives", term: "cheap", definition: "Low in price.", translation: "Barato(a)" },
        { topic: "Adjectives", term: "affordable", definition: "Reasonably priced.", translation: "Acessível (cabe no bolso)" },
        { topic: "Adjectives", term: "expensive", definition: "Costing a lot of money.", translation: "Caro(a)" },
        { topic: "Adjectives", term: "financial", definition: "Relating to finance.", translation: "Financeiro(a)" },
        { topic: "Adjectives", term: "thrifty", definition: "Using money carefully.", translation: "Econômico / Poupador" },
        { topic: "Adjectives", term: "generous", definition: "Readiness to give more.", translation: "Generoso(a)" },
        { topic: "Adjectives", term: "frugal", definition: "Sparing or economical with money.", translation: "Frugal" },

        // 3A: Expressions
        { topic: "Expressions", term: "make-budget", definition: "To create a plan for spending.", translation: "Fazer um orçamento" },
        { topic: "Expressions", term: "stick-budget", definition: "To follow the financial plan.", translation: "Seguir o orçamento" },
        { topic: "Expressions", term: "save-up-house", definition: "To accumulate money to buy a home.", translation: "Juntar dinheiro para uma casa" },
        { topic: "Expressions", term: "live-paycheck", definition: "To spend all salary before the next arrives.", translation: "Viver de salário em salário" },
        { topic: "Expressions", term: "cut-back-spending", definition: "To reduce money spent.", translation: "Reduzir os gastos" },
        { topic: "Expressions", term: "make-ends-meet", definition: "To earn just enough for basic expenses.", translation: "Fechar as contas / Sobreviver" },
        
        { topic: "Expressions", term: "open-savings", definition: "To start a bank account for storing money.", translation: "Abrir conta poupança" },
        { topic: "Expressions", term: "pay-off-loan", definition: "To return all borrowed money.", translation: "Quitar empréstimo" },
        { topic: "Expressions", term: "pay-off-card", definition: "To clear debt on a card.", translation: "Quitar o cartão de crédito" },
        { topic: "Expressions", term: "be-in-debt", definition: "The state of owing money.", translation: "Estar em dívida" },
        { topic: "Expressions", term: "get-out-debt", definition: "To successfully pay back all money owed.", translation: "Sair das dívidas" },
        { topic: "Expressions", term: "pay-interest", definition: "To pay an extra fee to the bank.", translation: "Pagar juros" },
        
        { topic: "Expressions", term: "cost-arm-leg", definition: "Extremely expensive.", translation: "Custar os olhos da cara" },
        { topic: "Expressions", term: "waste-of-money", definition: "A bad use of funds.", translation: "Desperdício de dinheiro" },
        { topic: "Expressions", term: "value-for-money", definition: "Worth the amount paid.", translation: "Custo-benefício" },
        { topic: "Expressions", term: "shopping-spree", definition: "Buying many things in a short time.", translation: "Maratona de compras" },
        { topic: "Expressions", term: "short-on-cash", definition: "Not having enough money currently.", translation: "Com pouco dinheiro" },
        { topic: "Expressions", term: "pay-in-rent", definition: "Amount given monthly to a landlord.", translation: "Pagar de aluguel" }
    ]
});