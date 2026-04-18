/**
 * English Block Assembling - LESSON DATA: Topic 14
 * Topic: Technology and Gadgets
 * Level: Upper A2 ~ Lower B1
 */

window.initLesson({
    // --- METADATA ---
    lessonId: "lesson-14",
    block: "2",
    topicTitle: "Technology and Gadgets",

    steps:[
        // ======================================================
        // STEP 0: INTRO & CAN-DO
        // ======================================================
        {
            title: "Intro & Can-Do",
            objectives: "• Talk about common electronic [devices](tooltip:device) and hardware.<br>• Understand vocabulary for navigating the [internet](tooltip:internet) and using [software](tooltip:software).<br>• Ask for help with basic technical problems and [troubleshoot](tooltip:troubleshoot) issues.<br>• Describe actions like [downloading](tooltip:download), [saving](tooltip:save), and connecting to [Wi-Fi](tooltip:wifi).",
            welcome: "Welcome to Lesson 14! Today, we live in a digital world. In this lesson, you will learn the essential vocabulary to talk about your smartphone, computer, and the internet. You will also practice phrases for communicating online, dealing with a low battery, and troubleshooting when your devices freeze or crash. Let's get connected!",
            audio: {
                objectives: "TTS: In this lesson, you will learn to: Talk about common electronic devices and hardware. Understand vocabulary for navigating the internet and using software. Ask for help with basic technical problems and troubleshoot issues. Describe actions like downloading, saving, and connecting to Wi-Fi.",
                welcome: "TTS: Welcome to Lesson 14! Today, we live in a digital world. In this lesson, you will learn the essential vocabulary to talk about your smartphone, computer, and the internet. You will also practice phrases for communicating online, dealing with a low battery, and troubleshooting when your devices freeze or crash. Let's get connected!"
            }
        },

        // ======================================================
        // STEP 1: CONTEXT DIALOGUE
        // ======================================================
        {
            title: "Context Dialogue",
            context: "Tom is trying to finish some work at a café, but he is having trouble with his laptop and asks Lisa for help.",
            contextAudio: "TTS: Tom: Excuse me, can you help me with my laptop? It is running very slowly, and I can't connect to the Wi-Fi. Lisa: Oh, let me see. Did you select the correct network name? Tom: Yes, I clicked on 'CafeGuest', but when I enter the password, it's not working. Lisa: Ah, they changed it yesterday. The new password is 'Coffee2026'. Tom: Thank you! Let me type that in. Okay, the internet is working now. Lisa: Great! You should save your document before the computer freezes again. Tom: Good idea. But wait, my battery is low. I need to plug it in. Lisa: There is an outlet right behind your chair. Tom: Perfect. I can finally send this email with the attachment. Thanks again!",
            dialogue:[
                { speaker: "Tom", text: "Excuse me, [can you help me with my laptop](tooltip:can-you-help-laptop)? It is running very slowly, and I can't [connect to the Wi-Fi](tooltip:connect-wifi)." },
                { speaker: "Lisa", text: "Oh, let me see. Did you select the correct network name?" },
                { speaker: "Tom", text: "Yes, I [clicked](tooltip:click) on 'CafeGuest', but when I[enter the password](tooltip:enter-password), [it's not working](tooltip:not-working)." },
                { speaker: "Lisa", text: "Ah, they changed it yesterday. The new [password](tooltip:password) is 'Coffee2026'." },
                { speaker: "Tom", text: "Thank you! Let me [type](tooltip:type) that in. Okay, the internet is working now." },
                { speaker: "Lisa", text: "Great! You should [save](tooltip:save) your [document](tooltip:document) before the computer [freezes](tooltip:freeze) again." },
                { speaker: "Tom", text: "Good idea. But wait,[my battery is low](tooltip:battery-low). I need to [plug it in](tooltip:plug-in)." },
                { speaker: "Lisa", text: "There is an outlet right behind your chair." },
                { speaker: "Tom", text: "Perfect. I can finally [send an email](tooltip:send-email) with the [attachment](tooltip:attachment). Thanks again!" }
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
                    title: "Devices & Hardware",
                    audio: "TTS: Computer. Laptop. Smartphone. Tablet. Screen. Keyboard. Mouse. Charger. Cable. Headphones. Printer. Speaker.",
                    items:[
                        { term: "Computer (PC)", trans: "Computador (PC)" },
                        { term: "Laptop", trans: "Notebook / Laptop" },
                        { term: "Smartphone (Mobile phone)", trans: "Smartphone / Celular" },
                        { term: "Tablet", trans: "Tablet" },
                        { term: "Screen", trans: "Tela / Monitor" },
                        { term: "Keyboard", trans: "Teclado" },
                        { term: "Mouse", trans: "Mouse" },
                        { term: "Charger", trans: "Carregador" },
                        { term: "Cable", trans: "Cabo" },
                        { term: "Headphones", trans: "Fones de ouvido" },
                        { term: "Printer", trans: "Impressora" },
                        { term: "Speaker", trans: "Alto-falante / Caixa de som" }
                    ]
                },
                {
                    title: "Software & Digital",
                    audio: "TTS: Internet. Wi-Fi. Signal. Email. Attachment. Website. Link. Password. App. File. Folder. Social media.",
                    items:[
                        { term: "Internet", trans: "Internet" },
                        { term: "Wi-Fi", trans: "Wi-Fi" },
                        { term: "Signal", trans: "Sinal" },
                        { term: "Email", trans: "E-mail / Correio eletrônico" },
                        { term: "Attachment", trans: "Anexo" },
                        { term: "Website", trans: "Site / Página da web" },
                        { term: "Link", trans: "Link (ligação/atalho na web)" },
                        { term: "Password", trans: "Senha" },
                        { term: "App (Application)", trans: "Aplicativo (App)" },
                        { term: "File", trans: "Arquivo" },
                        { term: "Folder", trans: "Pasta (diretório)" },
                        { term: "Social media", trans: "Redes sociais" }
                    ]
                },
                {
                    title: "Verbs & Adjectives",
                    audio: "TTS: To click. To type. To download. To upload. To save. To delete. To crash. To freeze. Online. Offline. Wireless. Broken.",
                    items:[
                        { term: "To click", trans: "Clicar" },
                        { term: "To type", trans: "Digitar" },
                        { term: "To download", trans: "Baixar (fazer download)" },
                        { term: "To upload", trans: "Enviar (fazer upload)" },
                        { term: "To save", trans: "Salvar" },
                        { term: "To delete", trans: "Deletar / Apagar" },
                        { term: "To crash", trans: "Pifar / Fechar inesperadamente" },
                        { term: "To freeze", trans: "Travar / Congelar (a tela)" },
                        { term: "Online", trans: "Online / Conectado" },
                        { term: "Offline", trans: "Offline / Desconectado" },
                        { term: "Wireless", trans: "Sem fio" },
                        { term: "Broken", trans: "Quebrado" }
                    ]
                }
            ],

            // --- 2B: EXAMPLES ---
            exampleGroups:[
                {
                    title: "Devices & Hardware",
                    audio: "TTS: I use a desktop computer at the office. I take my laptop to the coffee shop. She is always looking at her smartphone. A tablet is great for reading books. The screen on this phone is very bright. I need to buy a new wireless keyboard. Move the mouse to click the button. Did you bring your phone charger? The USB cable is too short. I put on my headphones to listen to music. The printer is out of paper. The sound from this speaker is very loud.",
                    items:[
                        { term: "Computer (PC)", sent: "I use a desktop computer at the office.", trans: "Eu uso um computador de mesa no escritório." },
                        { term: "Laptop", sent: "I take my laptop to the coffee shop.", trans: "Eu levo meu notebook para o café." },
                        { term: "Smartphone (Mobile phone)", sent: "She is always looking at her smartphone.", trans: "Ela está sempre olhando para o smartphone dela." },
                        { term: "Tablet", sent: "A tablet is great for reading books.", trans: "Um tablet é ótimo para ler livros." },
                        { term: "Screen", sent: "The screen on this phone is very bright.", trans: "A tela deste telefone é muito brilhante." },
                        { term: "Keyboard", sent: "I need to buy a new wireless keyboard.", trans: "Eu preciso comprar um teclado sem fio novo." },
                        { term: "Mouse", sent: "Move the mouse to click the button.", trans: "Mova o mouse para clicar no botão." },
                        { term: "Charger", sent: "Did you bring your phone charger?", trans: "Você trouxe o carregador do seu telefone?" },
                        { term: "Cable", sent: "The USB cable is too short.", trans: "O cabo USB é curto demais." },
                        { term: "Headphones", sent: "I put on my headphones to listen to music.", trans: "Eu coloco meus fones de ouvido para ouvir música." },
                        { term: "Printer", sent: "The printer is out of paper.", trans: "A impressora está sem papel." },
                        { term: "Speaker", sent: "The sound from this speaker is very loud.", trans: "O som desta caixa de som é muito alto." }
                    ]
                },
                {
                    title: "Software & Digital",
                    audio: "TTS: You need the internet to search for information. What is the Wi-Fi password here? I can't call you because I have no signal. I sent an email to my boss this morning. Please open the PDF attachment. This website has a lot of interesting articles. Click the link in the description. Never share your password with anyone. I installed a new language app. I can't find the file on my desktop. Put these documents in the project folder. She posts a lot of photos on social media.",
                    items:[
                        { term: "Internet", sent: "You need the internet to search for information.", trans: "Você precisa da internet para procurar informações." },
                        { term: "Wi-Fi", sent: "What is the Wi-Fi password here?", trans: "Qual é a senha do Wi-Fi aqui?" },
                        { term: "Signal", sent: "I can't call you because I have no signal.", trans: "Não consigo te ligar porque estou sem sinal." },
                        { term: "Email", sent: "I sent an email to my boss this morning.", trans: "Enviei um e-mail para o meu chefe esta manhã." },
                        { term: "Attachment", sent: "Please open the PDF attachment.", trans: "Por favor, abra o anexo em PDF." },
                        { term: "Website", sent: "This website has a lot of interesting articles.", trans: "Este site tem muitos artigos interessantes." },
                        { term: "Link", sent: "Click the link in the description.", trans: "Clique no link na descrição." },
                        { term: "Password", sent: "Never share your password with anyone.", trans: "Nunca compartilhe sua senha com ninguém." },
                        { term: "App (Application)", sent: "I installed a new language app.", trans: "Eu instalei um novo aplicativo de idiomas." },
                        { term: "File", sent: "I can't find the file on my desktop.", trans: "Não consigo encontrar o arquivo na minha área de trabalho." },
                        { term: "Folder", sent: "Put these documents in the project folder.", trans: "Coloque esses documentos na pasta do projeto." },
                        { term: "Social media", sent: "She posts a lot of photos on social media.", trans: "Ela posta muitas fotos nas redes sociais." }
                    ]
                },
                {
                    title: "Verbs & Adjectives",
                    audio: "TTS: Click the button to confirm. I can type very fast on this keyboard. It takes five minutes to download the movie. I want to upload a video to YouTube. Don't forget to save your work. If you delete that file, it will be gone forever. My browser had an error and crashed. The screen is completely frozen; nothing moves. I prefer to play games online. You can read this document offline. We have a wireless network at home. My phone fell, and now the screen is broken.",
                    items:[
                        { term: "To click", sent: "Click the button to confirm.", trans: "Clique no botão para confirmar." },
                        { term: "To type", sent: "I can type very fast on this keyboard.", trans: "Eu consigo digitar muito rápido neste teclado." },
                        { term: "To download", sent: "It takes five minutes to download the movie.", trans: "Leva cinco minutos para baixar o filme." },
                        { term: "To upload", sent: "I want to upload a video to YouTube.", trans: "Eu quero enviar um vídeo para o YouTube." },
                        { term: "To save", sent: "Don't forget to save your work.", trans: "Não esqueça de salvar o seu trabalho." },
                        { term: "To delete", sent: "If you delete that file, it will be gone forever.", trans: "Se você apagar esse arquivo, ele vai sumir para sempre." },
                        { term: "To crash", sent: "My browser had an error and crashed.", trans: "Meu navegador deu um erro e fechou inesperadamente." },
                        { term: "To freeze", sent: "The screen is completely frozen; nothing moves.", trans: "A tela está completamente travada; nada se move." },
                        { term: "Online", sent: "I prefer to play games online.", trans: "Eu prefiro jogar jogos online." },
                        { term: "Offline", sent: "You can read this document offline.", trans: "Você pode ler este documento offline." },
                        { term: "Wireless", sent: "We have a wireless network at home.", trans: "Nós temos uma rede sem fio em casa." },
                        { term: "Broken", sent: "My phone fell, and now the screen is broken.", trans: "Meu celular caiu, e agora a tela está quebrada." }
                    ]
                }
            ],

            // --- 2C: PRACTICE ---
            drillGroups:[
                {
                    title: "Devices & Hardware",
                    drills:[
                        { q: "An electronic device for storing and processing data is a ________.", options:[{t: "Computer (PC)", c: true}, {t: "Charger", c: false}, {t: "Printer", c: false}, {t: "Keyboard", c: false}], type: "mcq" },
                        { q: "A portable computer small enough to use on your lap is a ________.", options:[{t: "Speaker", c: false}, {t: "Screen", c: false}, {t: "Laptop", c: true}, {t: "Mouse", c: false}], type: "mcq" },
                        { q: "A mobile phone that performs many of the functions of a computer is a ________.", options:[{t: "Smartphone", c: true}, {t: "Laptop", c: false}, {t: "Printer", c: false}, {t: "Cable", c: false}], type: "mcq" },
                        { q: "A wireless, portable personal computer with a touchscreen is a ________.", options:[{t: "Keyboard", c: false}, {t: "Tablet", c: true}, {t: "Mouse", c: false}, {t: "Charger", c: false}], type: "mcq" },
                        { q: "The flat surface of a device where images and text are displayed is the ________.", options:[{t: "Screen", c: true}, {t: "Keyboard", c: false}, {t: "Mouse", c: false}, {t: "Cable", c: false}], type: "mcq" },
                        { q: "A panel of keys used to type on a computer is a ________.", options:[{t: "Screen", c: false}, {t: "Mouse", c: false}, {t: "Keyboard", c: true}, {t: "Speaker", c: false}], type: "mcq" },
                        { q: "A small device moved by hand to control the cursor on a screen is a ________.", options:[{t: "Mouse", c: true}, {t: "Charger", c: false}, {t: "Cable", c: false}, {t: "Printer", c: false}], type: "mcq" },
                        { q: "A device for charging a battery is a ________.", options:[{t: "Speaker", c: false}, {t: "Keyboard", c: false}, {t: "Charger", c: true}, {t: "Screen", c: false}], type: "mcq" },
                        { q: "A thick wire covered with plastic, used for conducting electricity, is a ________.", options:[{t: "Cable", c: true}, {t: "Mouse", c: false}, {t: "Headphones", c: false}, {t: "Tablet", c: false}], type: "mcq" },
                        { q: "A pair of small speakers worn over the ears is called ________.", options:[{t: "Headphones", c: true}, {t: "Charger", c: false}, {t: "Printer", c: false}, {t: "Screen", c: false}], type: "mcq" },
                        { q: "A machine for printing text or pictures onto paper is a ________.", options:[{t: "Printer", c: true}, {t: "Mouse", c: false}, {t: "Speaker", c: false}, {t: "Laptop", c: false}], type: "mcq" },
                        { q: "A piece of equipment that converts electrical impulses into sound is a ________.", options:[{t: "Keyboard", c: false}, {t: "Speaker", c: true}, {t: "Cable", c: false}, {t: "Tablet", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Software & Digital",
                    drills:[
                        { q: "The global computer network providing information and communication is the ________.", options:[{t: "Wi-Fi", c: false}, {t: "Internet", c: true}, {t: "Password", c: false}, {t: "Folder", c: false}], type: "mcq" },
                        { q: "A facility allowing devices to connect to the internet wirelessly is ________.", options:[{t: "Wi-Fi", c: true}, {t: "Email", c: false}, {t: "Link", c: false}, {t: "File", c: false}], type: "mcq" },
                        { q: "An electrical impulse or radio wave transmitted or received is a ________.", options:[{t: "Website", c: false}, {t: "Signal", c: true}, {t: "App", c: false}, {t: "Password", c: false}], type: "mcq" },
                        { q: "Messages distributed by electronic means over a network is ________.", options:[{t: "Email", c: true}, {t: "Folder", c: false}, {t: "Wi-Fi", c: false}, {t: "Signal", c: false}], type: "mcq" },
                        { q: "A computer file sent along with an email message is an ________.", options:[{t: "App", c: false}, {t: "Attachment", c: true}, {t: "Internet", c: false}, {t: "Password", c: false}], type: "mcq" },
                        { q: "A set of related web pages located under a single domain name is a ________.", options:[{t: "File", c: false}, {t: "Link", c: false}, {t: "Website", c: true}, {t: "Folder", c: false}], type: "mcq" },
                        { q: "A reference to data that the user can follow by clicking or tapping is a ________.", options:[{t: "Link", c: true}, {t: "Signal", c: false}, {t: "Email", c: false}, {t: "App", c: false}], type: "mcq" },
                        { q: "A secret word or phrase that must be used to gain admission to something is a ________.", options:[{t: "Password", c: true}, {t: "Website", c: false}, {t: "Attachment", c: false}, {t: "Wi-Fi", c: false}], type: "mcq" },
                        { q: "A software program that you can download to your phone or computer is an ________.", options:[{t: "App", c: true}, {t: "Signal", c: false}, {t: "Folder", c: false}, {t: "Link", c: false}], type: "mcq" },
                        { q: "A digital document, image, or video stored on a computer is a ________.", options:[{t: "Wi-Fi", c: false}, {t: "Internet", c: false}, {t: "File", c: true}, {t: "Password", c: false}], type: "mcq" },
                        { q: "A virtual directory on a computer used for storing files is a ________.", options:[{t: "Folder", c: true}, {t: "Link", c: false}, {t: "App", c: false}, {t: "Website", c: false}], type: "mcq" },
                        { platforms: "Websites and applications like Facebook and Instagram are called ________.", options:[{t: "Social media", c: true}, {t: "Email", c: false}, {t: "Signal", c: false}, {t: "Attachment", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Verbs & Adjectives",
                    drills:[
                        { q: "To press a mouse button to perform an action is ________.", options:[{t: "To type", c: false}, {t: "To click", c: true}, {t: "To download", c: false}, {t: "To save", c: false}], type: "mcq" },
                        { q: "To write text on a computer using a keyboard is ________.", options:[{t: "To delete", c: false}, {t: "To type", c: true}, {t: "To upload", c: false}, {t: "To freeze", c: false}], type: "mcq" },
                        { q: "To copy data from the internet to your own device is ________.", options:[{t: "To upload", c: false}, {t: "To save", c: false}, {t: "To download", c: true}, {t: "To crash", c: false}], type: "mcq" },
                        { q: "To transfer data from your device to the internet is ________.", options:[{t: "To upload", c: true}, {t: "To delete", c: false}, {t: "To click", c: false}, {t: "To type", c: false}], type: "mcq" },
                        { q: "To keep data or a document on your computer so it is not lost is ________.", options:[{t: "To freeze", c: false}, {t: "To save", c: true}, {t: "To download", c: false}, {t: "To crash", c: false}], type: "mcq" },
                        { q: "To remove or erase a file or text is ________.", options:[{t: "To delete", c: true}, {t: "To save", c: false}, {t: "To click", c: false}, {t: "To upload", c: false}], type: "mcq" },
                        { q: "When a computer program or system suddenly stops working and closes, it is said ________.", options:[{t: "To crash", c: true}, {t: "To freeze", c: false}, {t: "To type", c: false}, {t: "To delete", c: false}], type: "mcq" },
                        { q: "When a computer screen becomes unresponsive and you cannot click anything, it is said ________.", options:[{t: "To freeze", c: true}, {t: "To crash", c: false}, {t: "To save", c: false}, {t: "To download", c: false}], type: "mcq" },
                        { q: "Controlled by or connected to a computer network (especially the internet) is ________.", options:[{t: "Offline", c: false}, {t: "Wireless", c: false}, {t: "Online", c: true}, {t: "Broken", c: false}], type: "mcq" },
                        { q: "Not controlled by or connected to a computer network is ________.", options:[{t: "Online", c: false}, {t: "Offline", c: true}, {t: "Wireless", c: false}, {t: "Broken", c: false}], type: "mcq" },
                        { q: "Using radio, microwaves, etc. to transmit signals without wires is ________.", options:[{t: "Offline", c: false}, {t: "Online", c: false}, {t: "Wireless", c: true}, {t: "Broken", c: false}], type: "mcq" },
                        { q: "Having been fractured or damaged and no longer in one piece or in working order is ________.", options:[{t: "Wireless", c: false}, {t: "Offline", c: false}, {t: "Broken", c: true}, {t: "Online", c: false}], type: "mcq" }
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
                    title: "Using Devices",
                    audio: "TTS: Turn on the computer. Turn off the computer. Charge my phone. My battery is low. Connect to the Wi-Fi. Enter the password. Plug it in.",
                    explanation: "Basic instructions and statements regarding device power and connections.<br><span style='color:var(--primary-blue); font-style:italic;'>(Instruções básicas e afirmações sobre energia e conexões de dispositivos.)</span>",
                    samples:[
                        { en: "Please <b>turn on the computer</b> to start.", pt: "<span style='color:var(--primary-blue)'>(Por favor, ligue o computador para começar.)</span>" },
                        { en: "Always <b>turn off the computer</b> when you leave.", pt: "<span style='color:var(--primary-blue)'>(Sempre desligue o computador quando você sair.)</span>" },
                        { en: "I need to <b>charge my phone</b>.", pt: "<span style='color:var(--primary-blue)'>(Eu preciso carregar meu telefone.)</span>" },
                        { en: "I can't talk right now, <b>my battery is low</b>.", pt: "<span style='color:var(--primary-blue)'>(Não posso falar agora, minha bateria está fraca.)</span>" },
                        { en: "How do I <b>connect to the Wi-Fi</b> here?", pt: "<span style='color:var(--primary-blue)'>(Como eu me conecto ao Wi-Fi aqui?)</span>" },
                        { en: "You have to <b>enter the password</b> to login.", pt: "<span style='color:var(--primary-blue)'>(Você tem que digitar a senha para fazer login.)</span>" },
                        { en: "Your laptop is dead. You should <b>plug it in</b>.", pt: "<span style='color:var(--primary-blue)'>(Seu notebook está sem bateria. Você deveria colocá-lo na tomada.)</span>" }
                    ]
                },
                {
                    title: "Online Communication",
                    audio: "TTS: Browse the internet. Send an email. Post a photo. Make a video call. Send a text message.",
                    explanation: "Phrases used to describe common activities done online or with a smartphone.<br><span style='color:var(--primary-blue); font-style:italic;'>(Frases usadas para descrever atividades comuns feitas online ou com um smartphone.)</span>",
                    samples:[
                        { en: "I like to <b>browse the internet</b> for news.", pt: "<span style='color:var(--primary-blue)'>(Eu gosto de navegar na internet em busca de notícias.)</span>" },
                        { en: "I will <b>send an email</b> to the manager.", pt: "<span style='color:var(--primary-blue)'>(Eu vou enviar um e-mail para o gerente.)</span>" },
                        { en: "She decided to <b>post a photo</b> on Instagram.", pt: "<span style='color:var(--primary-blue)'>(Ela decidiu postar uma foto no Instagram.)</span>" },
                        { en: "Let's <b>make a video call</b> so I can see you.", pt: "<span style='color:var(--primary-blue)'>(Vamos fazer uma chamada de vídeo para que eu possa te ver.)</span>" },
                        { en: "Just <b>send a text message</b> when you arrive.", pt: "<span style='color:var(--primary-blue)'>(Basta enviar uma mensagem de texto quando você chegar.)</span>" }
                    ]
                },
                {
                    title: "Troubleshooting",
                    audio: "TTS: It's not working. The internet is down. I have a weak signal. Have you tried turning it off and on again? Restart the computer. Can you help me with my laptop?",
                    explanation: "Phrases used when technology fails and how to ask for or suggest a solution.<br><span style='color:var(--primary-blue); font-style:italic;'>(Frases usadas quando a tecnologia falha e como pedir ou sugerir uma solução.)</span>",
                    samples:[
                        { en: "I pressed the button, but <b>it's not working</b>.", pt: "<span style='color:var(--primary-blue)'>(Eu apertei o botão, mas não está funcionando.)</span>" },
                        { en: "We can't work today because <b>the internet is down</b>.", pt: "<span style='color:var(--primary-blue)'>(Não podemos trabalhar hoje porque a internet caiu.)</span>" },
                        { en: "I can't hear you clearly, <b>I have a weak signal</b>.", pt: "<span style='color:var(--primary-blue)'>(Não consigo te ouvir claramente, estou com sinal fraco.)</span>" },
                        { en: "<b>Have you tried turning it off and on again?</b>", pt: "<span style='color:var(--primary-blue)'>(Você já tentou desligar e ligar de novo?)</span>" },
                        { en: "If it freezes, you should <b>restart the computer</b>.", pt: "<span style='color:var(--primary-blue)'>(Se travar, você deve reiniciar o computador.)</span>" },
                        { en: "Excuse me, <b>can you help me with my laptop?</b>", pt: "<span style='color:var(--primary-blue)'>(Com licença, você pode me ajudar com o meu notebook?)</span>" }
                    ]
                }
            ],

            // --- 3B: DIALOGUES ---
            dialogueGroups:[
                {
                    title: "Dialogue 1: Powering Up",
                    audio: "TTS: Good morning. Turn on the computer and connect to the Wi-Fi. I can't. It asks me to enter the password.",
                    lines:[
                        { speaker: "Boss", text: "Good morning. Turn on the computer and connect to the Wi-Fi.", pt: "(Bom dia. Ligue o computador e conecte-se ao Wi-Fi.)" },
                        { speaker: "Employee", text: "I can't. It asks me to enter the password.", pt: "(Não consigo. Está pedindo para eu digitar a senha.)" }
                    ]
                },
                {
                    title: "Dialogue 2: Dying Battery",
                    audio: "TTS: Oh no, my battery is low. Can I borrow your cable? Sure, you can charge your phone over there. Thanks, I will plug it in now.",
                    lines:[
                        { speaker: "Alice", text: "Oh no, my battery is low. Can I borrow your cable?", pt: "(Oh não, minha bateria está fraca. Posso emprestar seu cabo?)" },
                        { speaker: "Bob", text: "Sure, you can charge your phone over there. Thanks, I will plug it in now.", pt: "(Claro, você pode carregar seu telefone ali. Obrigado, vou colocá-lo na tomada agora.)" } // Adjusted to 2 speakers
                    ]
                },
                {
                    title: "Dialogue 2: Dying Battery", // Fixed
                    audio: "TTS: Oh no, my battery is low. Can I charge my phone here? Sure, there is an outlet. Just plug it in.",
                    lines:[
                        { speaker: "Alice", text: "Oh no, my battery is low. Can I charge my phone here?", pt: "(Oh não, minha bateria está fraca. Posso carregar meu telefone aqui?)" },
                        { speaker: "Bob", text: "Sure, there is an outlet. Just plug it in.", pt: "(Claro, há uma tomada. Basta conectá-lo na tomada.)" }
                    ]
                },
                {
                    title: "Dialogue 3: Online Actions",
                    audio: "TTS: Did you send an email to the client? Not yet. I was using my tablet to browse the internet. Don't forget to post a photo on our business page later.",
                    lines:[
                        { speaker: "Manager", text: "Did you send an email to the client?", pt: "(Você enviou um e-mail para o cliente?)" },
                        { speaker: "Assistant", text: "Not yet. I was using my tablet to browse the internet. Don't forget to post a photo on our business page later.", pt: "(Ainda não. Eu estava usando meu tablet para navegar na internet. Não se esqueça de postar uma foto na nossa página de negócios mais tarde.)" } // Fixed flow
                    ]
                },
                {
                    title: "Dialogue 3: Online Actions", // Fixed Flow
                    audio: "TTS: Did you send an email to the client? Not yet. I was using my tablet to browse the internet.",
                    lines:[
                        { speaker: "Manager", text: "Did you send an email to the client?", pt: "(Você enviou um e-mail para o cliente?)" },
                        { speaker: "Assistant", text: "Not yet. I was using my tablet to browse the internet.", pt: "(Ainda não. Eu estava usando meu tablet para navegar na internet.)" }
                    ]
                },
                {
                    title: "Dialogue 4: Communication",
                    audio: "TTS: I want to make a video call with my parents. Just send a text message first to see if they are awake. Good idea. After that, I will turn off the computer.",
                    lines:[
                        { speaker: "John", text: "I want to make a video call with my parents.", pt: "(Eu quero fazer uma videochamada com meus pais.)" },
                        { speaker: "Mary", text: "Just send a text message first to see if they are awake. Good idea. After that, I will turn off the computer.", pt: "(Basta enviar uma mensagem de texto primeiro para ver se eles estão acordados. Boa ideia. Depois disso, vou desligar o computador.)" } // Fixed flow
                    ]
                },
                {
                    title: "Dialogue 4: Communication", // Fixed Flow
                    audio: "TTS: I want to make a video call with my parents. Just send a text message first to see if they are awake. Good idea.",
                    lines:[
                        { speaker: "John", text: "I want to make a video call with my parents.", pt: "(Eu quero fazer uma videochamada com meus pais.)" },
                        { speaker: "Mary", text: "Just send a text message first to see if they are awake.", pt: "(Basta enviar uma mensagem de texto primeiro para ver se eles estão acordados.)" }
                    ]
                },
                {
                    title: "Dialogue 5: Glitches",
                    audio: "TTS: Can you help me with my laptop? The mouse is stuck. It's not working because the internet is down. Oh, I see. What should I do? Post a photo to complain! Just kidding, wait a few minutes.",
                    lines:[
                        { speaker: "Tom", text: "Can you help me with my laptop? The mouse is stuck.", pt: "(Você pode me ajudar com meu notebook? O mouse está travado.)" },
                        { speaker: "Lisa", text: "It's not working because the internet is down.", pt: "(Não está funcionando porque a internet caiu.)" }
                    ]
                },
                {
                    title: "Dialogue 6: The Ultimate Fix",
                    audio: "TTS: My call dropped. I have a weak signal here. Have you tried turning it off and on again? Yes, I will restart the computer now.",
                    lines:[
                        { speaker: "Customer", text: "My call dropped. I have a weak signal here.", pt: "(Minha ligação caiu. Tenho um sinal fraco aqui.)" },
                        { speaker: "Tech Support", text: "Have you tried turning it off and on again? Yes, I will restart the computer now.", pt: "(Você já tentou desligar e ligar de novo? Sim, vou reiniciar o computador agora.)" } // Fixed flow
                    ]
                },
                {
                    title: "Dialogue 6: The Ultimate Fix", // Fixed flow
                    audio: "TTS: My call dropped. I have a weak signal here. Have you tried turning it off and on again?",
                    lines:[
                        { speaker: "Customer", text: "My call dropped. I have a weak signal here.", pt: "(Minha ligação caiu. Tenho um sinal fraco aqui.)" },
                        { speaker: "Tech Support", text: "Have you tried turning it off and on again?", pt: "(Você já tentou desligar e ligar de novo?)" }
                    ]
                },
                {
                    title: "Dialogue 7: Wrapping up tasks", // Added to ensure all 18 expressions are covered properly
                    audio: "TTS: I need to post a photo for the campaign, but my PC is slow. You should restart the computer. And don't forget to turn off the computer before you leave.",
                    lines:[
                        { speaker: "Worker A", text: "I need to post a photo for the campaign, but my PC is slow.", pt: "(Preciso postar uma foto para a campanha, mas meu PC está lento.)" },
                        { speaker: "Worker B", text: "You should restart the computer. And don't forget to turn off the computer before you leave.", pt: "(Você deveria reiniciar o computador. E não se esqueça de desligar o computador antes de ir embora.)" }
                    ]
                }
            ],

            // --- 3C: PRACTICE ---
            grammarDrillGroups:[
                {
                    title: "Using Devices",
                    drills:[
                        { q: "Please ________ on the computer so we can work.", options:[{t: "turn", c: true}, {t: "make", c: false}, {t: "do", c: false}, {t: "plug", c: false}], type: "mcq" },
                        { q: "Don't forget to turn ________ the computer when you finish.", options:[{t: "on", c: false}, {t: "in", c: false}, {t: "off", c: true}, {t: "out", c: false}], type: "mcq" },
                        { q: "My phone is at 1%. I need to ________ my phone.", options:[{t: "connect", c: false}, {t: "charge", c: true}, {t: "browse", c: false}, {t: "freeze", c: false}], type: "mcq" },
                        { q: "I can't talk long, my battery is ________.", options:[{t: "high", c: false}, {t: "full", c: false}, {t: "broken", c: false}, {t: "low", c: true}], type: "mcq" },
                        { q: "I have no data. How do I connect to the ________?", options:[{t: "Wi-Fi", c: true}, {t: "mouse", c: false}, {t: "keyboard", c: false}, {t: "battery", c: false}], type: "mcq" },
                        { q: "It asks me to ________ the password to login.", options:[{t: "make", c: false}, {t: "enter", c: true}, {t: "click", c: false}, {t: "save", c: false}], type: "mcq" },
                        { q: "The laptop has no power. You should plug it ________.", options:[{t: "on", c: false}, {t: "off", c: false}, {t: "in", c: true}, {t: "out", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Online Communication",
                    drills:[
                        { q: "I use Google Chrome to ________ the internet.", options:[{t: "browse", c: true}, {t: "download", c: false}, {t: "delete", c: false}, {t: "crash", c: false}], type: "mcq" },
                        { q: "I need to send an ________ to my teacher with my homework attached.", options:[{t: "signal", c: false}, {t: "email", c: true}, {t: "Wi-Fi", c: false}, {t: "password", c: false}], type: "mcq" },
                        { q: "She loves to post a ________ on Instagram every day.", options:[{t: "text", c: false}, {t: "call", c: false}, {t: "photo", c: true}, {t: "cable", c: false}], type: "mcq" },
                        { q: "Since we are far away, let's make a ________ call on Zoom.", options:[{t: "video", c: true}, {t: "text", c: false}, {t: "photo", c: false}, {t: "internet", c: false}], type: "mcq" },
                        { q: "If I don't answer the phone, just send a ________ message.", options:[{t: "video", c: false}, {t: "text", c: true}, {t: "photo", c: false}, {t: "computer", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Troubleshooting",
                    drills:[
                        { q: "I pressed print, but it's not ________.", options:[{t: "working", c: true}, {t: "playing", c: false}, {t: "typing", c: false}, {t: "crashing", c: false}], type: "mcq" },
                        { q: "We have no connection. The internet is ________.", options:[{t: "up", c: false}, {t: "working", c: false}, {t: "down", c: true}, {t: "frozen", c: false}], type: "mcq" },
                        { q: "The call is dropping because I have a ________ signal.", options:[{t: "strong", c: false}, {t: "weak", c: true}, {t: "loud", c: false}, {t: "fast", c: false}], type: "mcq" },
                        { q: "Have you tried turning it off and ________ again?", options:[{t: "up", c: false}, {t: "in", c: false}, {t: "on", c: true}, {t: "down", c: false}], type: "mcq" },
                        { q: "If the screen freezes, ________ the computer.", options:[{t: "delete", c: false}, {t: "restart", c: true}, {t: "download", c: false}, {t: "browse", c: false}], type: "mcq" },
                        { q: "Excuse me, can you ________ me with my laptop?", options:[{t: "save", c: false}, {t: "crash", c: false}, {t: "help", c: true}, {t: "type", c: false}], type: "mcq" }
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
                { text: "Excuse me, can you help me with my laptop? ↗", audio: "TTS: Excuse me, can you help me with my laptop?" },
                { text: "My battery is low, so I need to plug it in. ↘", audio: "TTS: My battery is low, so I need to plug it in." },
                { text: "I can't connect to the Wi-Fi. ↘", audio: "TTS: I can't connect to the Wi-Fi." },
                { text: "Have you tried turning it off and on again? ↗", audio: "TTS: Have you tried turning it off and on again?" },
                { text: "I will send an email with the attachment. ↘", audio: "TTS: I will send an email with the attachment." },
                { text: "You need to enter the password to go online. ↘", audio: "TTS: You need to enter the password to go online." },
                { text: "Don't forget to save your file before you close it. ↘", audio: "TTS: Don't forget to save your file before you close it." },
                { text: "The internet is down, so it's not working. ↘", audio: "TTS: The internet is down, so it's not working." },
                { text: "Let's make a video call tomorrow. ↘", audio: "TTS: Let's make a video call tomorrow." },
                { text: "I like to browse the internet in the evening. ↘", audio: "TTS: I like to browse the internet in the evening." }
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
                    audio: "TTS: Mike: Hey Sarah, did you get my email? Sarah: No, I didn't. The internet is down here. Mike: Oh, I see. Can you check your smartphone? Sarah: My battery is low, but I will try to open the app.",
                    text: "Mike: Hey Sarah, did you get my[email]?<br>Sarah: No, I didn't. The [internet] is down here.<br>Mike: Oh, I see. Can you check your [smartphone]?<br>Sarah: My [battery] is low, but I will try to open the [app]."
                },
                {
                    type: "dropdown",
                    instruction: "Listen to the conversation about a computer problem.",
                    audio: "TTS: Tom: My computer is completely frozen! I can't click anything. Lisa: That happened to me yesterday. You should restart the computer. Tom: Good idea. But I didn't save my document. Lisa: Oh no, if it crashes, the file will be deleted.",
                    questions:[
                        { q: "Tom: My computer is completely [frozen* | broken | wireless]! I can't click anything.", a: "frozen" },
                        { q: "Lisa: That happened to me yesterday. You should [restart* | delete | download] the computer.", a: "restart" },
                        { q: "Tom: Good idea. But I didn't [save* | type | plug] my document.", a: "save" },
                        { q: "Lisa: Oh no, if it [crashes* | shines | posts], the file will be deleted.", a: "crashes" }
                    ]
                },
                {
                    type: "audio-choice",
                    instruction: "Listen to the speaker. What is the issue?",
                    audio: "TTS: I am trying to make a video call with my manager, but I have a weak signal. The screen keeps freezing, and I can't hear her very well. I think I need to use a different network.",
                    options:[
                        { t: "He forgot his password.", c: false },
                        { t: "His laptop battery is dead.", c: false },
                        { t: "He has a weak Wi-Fi signal causing the video call to freeze.", c: true },
                        { t: "He broke his computer screen.", c: false }
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
                    title: "Dialogue - Coffee Shop Wi-Fi",
                    audio: "TTS: Anna: Excuse me, can you help me with my laptop? I want to browse the internet. Barista: Sure. You need to connect to the Wi-Fi network first. Anna: I tried, but it asks me to enter the password. What is it? Barista: The password is 'Latte2026'. Make sure you type it with a capital L. Anna: Let me try. Okay, it's connected now! Thank you. Barista: No problem. Enjoy your coffee!",
                    body: "<b>Anna:</b> Excuse me, [can you help me with my laptop](tooltip:can-you-help-laptop)? I want to [browse the internet](tooltip:browse-internet).<br><b>Barista:</b> Sure. You need to [connect to the Wi-Fi](tooltip:connect-wifi) network first.<br><b>Anna:</b> I tried, but it asks me to [enter the password](tooltip:enter-password). What is it?<br><b>Barista:</b> The [password](tooltip:password) is 'Latte2026'. Make sure you [type](tooltip:type) it with a capital L.<br><b>Anna:</b> Let me try. Okay, it's [online](tooltip:online) now! Thank you.<br><b>Barista:</b> No problem. Enjoy your coffee!",
                    questions:[
                        { q: "What does Anna want to do?", options:[{t: "She wants to charge her phone.", c: false}, {t: "She wants to browse the internet.", c: true}, {t: "She wants to print a document.", c: false}], type: "mcq" },
                        { q: "What is required to connect to the Wi-Fi?", options:[{t: "A special app.", c: false}, {t: "A wireless mouse.", c: false}, {t: "A password.", c: true}], type: "mcq" },
                        { q: "What does the Barista tell Anna about typing the password?", options:[{t: "She must use a capital L.", c: true}, {t: "She needs to download a file first.", c: false}, {t: "She shouldn't share it on social media.", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Dialogue - Hardware Troubles",
                    audio: "TTS: John: Hey Mark, my mouse is not working. Do you have an extra one? Mark: Let me see. Have you tried turning it off and on again? It is a wireless mouse, right? John: Yes, it is. Wait, my battery is low! I just need to plug it in with a cable. Mark: That makes sense. Your screen is very dirty, too. You should clean it. John: I know, I know. At least the computer didn't crash. Mark: Yeah, it's awful when the system freezes.",
                    body: "<b>John:</b> Hey Mark, my [mouse](tooltip:mouse) [is not working](tooltip:not-working). Do you have an extra one?<br><b>Mark:</b> Let me see. [Have you tried turning it off and on again](tooltip:tried-turning-off-on)? It is a [wireless](tooltip:wireless) mouse, right?<br><b>John:</b> Yes, it is. Wait, [my battery is low](tooltip:battery-low)! I just need to[plug it in](tooltip:plug-in) with a [cable](tooltip:cable).<br><b>Mark:</b> That makes sense. Your [screen](tooltip:screen) is very dirty, too. You should clean it.<br><b>John:</b> I know, I know. At least the [computer](tooltip:computer) didn't [crash](tooltip:crash).<br><b>Mark:</b> Yeah, it's awful when the system [freezes](tooltip:freeze).",
                    questions:[
                        { q: "Why is John's mouse not working?", options:[{t: "It has a virus.", c: false}, {t: "The battery is low.", c: true}, {t: "The internet is down.", c: false}], type: "mcq" },
                        { q: "What type of mouse does John have?", options:[{t: "A wireless mouse.", c: true}, {t: "A broken mouse.", c: false}, {t: "An old mouse.", c: false}], type: "mcq" },
                        { q: "What does Mark notice about John's computer?", options:[{t: "The screen is very dirty.", c: true}, {t: "The keyboard is missing keys.", c: false}, {t: "The speakers are too loud.", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Email - Working Offline",
                    audio: "TTS: Subject: Missing file. Hi team, I have a big problem. My laptop crashed this morning, and the internet is down at my house. I have a very weak signal on my smartphone, so I cannot upload the files to our shared folder. I will try to restart the computer in a few minutes. I hope the document didn't delete itself because I forgot to save it! I will send a text message when I am back online. Thanks, Chloe.",
                    body: "<b>From: Chloe</b><br><b>To: Team</b><br>Subject: Missing [file](tooltip:file).<br><br>Hi team,<br>I have a big problem. My[laptop](tooltip:laptop) [crashed](tooltip:crash) this morning, and [the internet is down](tooltip:internet-down) at my house. [I have a weak signal](tooltip:weak-signal) on my [smartphone](tooltip:smartphone), so I cannot [upload](tooltip:upload) the files to our shared [folder](tooltip:folder). I will try to[restart the computer](tooltip:restart-computer) in a few minutes. I hope the document didn't[delete](tooltip:delete) itself because I forgot to [save](tooltip:save) it! I will[send a text message](tooltip:send-text) when I am back [online](tooltip:online).<br><br>Thanks, Chloe.",
                    questions:[
                        { q: "What is Chloe's main problem?", options:[{t: "Her laptop crashed and the internet is down.", c: true}, {t: "She lost her phone charger.", c: false}, {t: "She forgot her password.", c: false}], type: "mcq" },
                        { q: "Why can't she upload files using her smartphone?", options:[{t: "Her smartphone is broken.", c: false}, {t: "She has a weak signal.", c: true}, {t: "She doesn't know how to use the app.", c: false}], type: "mcq" },
                        { q: "What is Chloe worried about?", options:[{t: "That she sent an email to the wrong person.", c: false}, {t: "That the document was deleted because she forgot to save it.", c: true}, {t: "That her laptop was stolen.", c: false}], type: "mcq" }
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
                { type: "matching", instruction: "Match the hardware device to its function.", pairs:[
                    { left: "Keyboard", right: "Used to type letters", val: "1" },
                    { left: "Screen", right: "Displays the images", val: "2" },
                    { left: "Printer", right: "Puts documents on paper", val: "3" },
                    { left: "Headphones", right: "Used to listen to audio privately", val: "4" }
                ]},
                { type: "matching", instruction: "Match the digital terms.", pairs:[
                    { left: "Password", right: "Secret word for access", val: "1" },
                    { left: "Folder", right: "Place to organize files", val: "2" },
                    { left: "App", right: "Software on a smartphone", val: "3" },
                    { left: "Link", right: "Clickable text for a website", val: "4" }
                ]},
                { type: "matching", instruction: "Match the opposites.", pairs:[
                    { left: "Download", right: "Upload", val: "1" },
                    { left: "Online", right: "Offline", val: "2" },
                    { left: "Turn on", right: "Turn off", val: "3" },
                    { left: "Save", right: "Delete", val: "4" }
                ]},
                { type: "matching", instruction: "Match the troubleshooting phrases.", pairs:[
                    { left: "The internet", right: "is down", val: "1" },
                    { left: "My battery", right: "is low", val: "2" },
                    { left: "I have a weak", right: "signal", val: "3" },
                    { left: "Restart", right: "the computer", val: "4" }
                ]},

                // --- WORD ORDER (5-14) ---
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "the / on / Turn / computer / .", correct: "Turn on the computer ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "phone / my / to / need / charge / I / .", correct: "I need to charge my phone ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "Wi-Fi / to / the / Connect / .", correct: "Connect to the Wi-Fi ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "the / password / Enter / please / .", correct: "Enter the password please ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "internet / browse / I / the / .", correct: "I browse the internet ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "email / an / Send / the / to / boss / .", correct: "Send an email to the boss ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "call / a / Let's / video / make / .", correct: "Let's make a video call ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "working / It / not / is / .", correct: "It is not working ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "is / internet / down / The / .", correct: "The internet is down ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "signal / have / weak / a / I / .", correct: "I have a weak signal ." },

                // --- CLICKABLE ERROR (15-24) ---
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "I need to plug [on](error:in) my laptop." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "My battery is [short](error:low)." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "I will [post](error:send) you a text message." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "Did you [do](error:turn) it off and on again?" },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "I attached the [paper](error:attachment) to the email." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "Can you help me [about](error:with) my laptop?" },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "I need to [refresh](error:restart) the computer." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "Please [type](error:enter) the password." }, // Type is acceptable, but 'enter' is the targeted phrase "Enter the password"
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "I like to [look](error:browse) the internet." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "Don't forget to [safe](error:save) your file." },

                // --- ODD ONE OUT (25-30) ---
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Hardware)", options:[{t: "Laptop", c: false}, {t: "Tablet", c: false}, {t: "Keyboard", c: false}, {t: "Website", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Software/Digital)", options:[{t: "App", c: false}, {t: "Folder", c: false}, {t: "Password", c: false}, {t: "Charger", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Verbs)", options:[{t: "To download", c: false}, {t: "To click", c: false}, {t: "To type", c: false}, {t: "Broken", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Issues)", options:[{t: "Crash", c: false}, {t: "Freeze", c: false}, {t: "Broken", c: false}, {t: "Upload", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Connections)", options:[{t: "Wireless", c: false}, {t: "Wi-Fi", c: false}, {t: "Signal", c: false}, {t: "Printer", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Communication)", options:[{t: "Email", c: false}, {t: "Social media", c: false}, {t: "Video call", c: false}, {t: "Cable", c: true}] },

                // --- TRUE / FALSE (31-35) ---
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "You use a 'mouse' to click on things on the screen.", correct: "true"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "To 'download' means to send a file from your computer to the internet.", correct: "false"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "If a system 'freezes', it means it is working very fast.", correct: "false"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "You use a 'charger' when your battery is low.", correct: "true"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "A 'folder' is used to organize multiple files on your computer.", correct: "true"}] },

                // --- MCQ (36-39) ---
                { type: "mcq", instruction: "Choose the correct phrase.<br>When your smartphone has only 2% battery, you say: 'My battery is ________!'", options:[{t: "down", c: false}, {t: "broken", c: false}, {t: "low", c: true}, {t: "frozen", c: false}] },
                { type: "mcq", instruction: "Choose the correct word.<br>A document or image sent along with an email is called an ________.", options:[{t: "attachment", c: true}, {t: "app", c: false}, {t: "password", c: false}, {t: "signal", c: false}] },
                { type: "mcq", instruction: "Choose the correct verb.<br>If you want to keep a document so you don't lose it, you must ________ it.", options:[{t: "delete", c: false}, {t: "click", c: false}, {t: "save", c: true}, {t: "crash", c: false}] },
                { type: "mcq", instruction: "Choose the correct phrase.<br>When you can't connect to a webpage because the service is offline, you say: 'The internet is ________.'", options:[{t: "low", c: false}, {t: "down", c: true}, {t: "wireless", c: false}, {t: "up", c: false}] },

                // --- CATEGORIZE (40) ---
                { type: "categorize", instruction: "Sort the words into Hardware and Digital/Software.", 
                    categories:[{id: "hard", name: "Hardware"}, {id: "soft", name: "Digital"}],
                    items:[
                        {text: "Keyboard", catId: "hard"}, 
                        {text: "Screen", catId: "hard"}, 
                        {text: "Printer", catId: "hard"}, 
                        {text: "Password", catId: "soft"}, 
                        {text: "Website", catId: "soft"}, 
                        {text: "Folder", catId: "soft"}
                    ] 
                }
            ]
        },

        // ======================================================
        // STEP 8: WRITING PRACTICE
        // ======================================================
        {
            title: "Writing Practice",
            instruction: "Write an email to a tech support agent (5-7 sentences) explaining a problem with your computer or smartphone. Describe what is not working, what you were trying to do (e.g., browse the internet, download a file), and ask for help to fix it.",
            example: "Hi Tech Support, I need some help with my laptop. The internet is down, and I have a very weak Wi-Fi signal. I was trying to download an important file for work, but the screen froze completely. It is not working at all now. I tried turning it off and on again, but it didn't fix the problem. My battery is not low, so it is plugged in. Can you help me?",
            prompts:[
                "State the device you are using (laptop, smartphone, computer).",
                "Describe the problem using phrases like 'it's not working', 'it froze', or 'it crashed'.",
                "Mention what you tried to do (e.g., I tried restarting the computer).",
                "Ask for help directly."
            ]
        },

        // ======================================================
        // STEP 9: FLASHCARDS
        // ======================================================
        {
            title: "Flashcards",
            items:[
                // 2A Items (36 items)
                { term: "Computer (PC)", definition: "An electronic device for storing and processing data.", defTrans: "Computador (PC)", example: "I use a desktop computer at the office.", audioFront: "TTS: Computer", audioBack: "TTS: I use a desktop computer at the office." },
                { term: "Laptop", definition: "A portable computer.", defTrans: "Notebook / Laptop", example: "I take my laptop to the coffee shop.", audioFront: "TTS: Laptop", audioBack: "TTS: I take my laptop to the coffee shop." },
                { term: "Smartphone", definition: "A mobile phone that performs many computer functions.", defTrans: "Smartphone / Celular", example: "She is always looking at her smartphone.", audioFront: "TTS: Smartphone", audioBack: "TTS: She is always looking at her smartphone." },
                { term: "Tablet", definition: "A wireless, portable personal computer with a touchscreen.", defTrans: "Tablet", example: "A tablet is great for reading books.", audioFront: "TTS: Tablet", audioBack: "TTS: A tablet is great for reading books." },
                { term: "Screen", definition: "The flat surface on a device where images are displayed.", defTrans: "Tela / Monitor", example: "The screen on this phone is very bright.", audioFront: "TTS: Screen", audioBack: "TTS: The screen on this phone is very bright." },
                { term: "Keyboard", definition: "A panel of keys used to type on a computer.", defTrans: "Teclado", example: "I need to buy a new wireless keyboard.", audioFront: "TTS: Keyboard", audioBack: "TTS: I need to buy a new wireless keyboard." },
                { term: "Mouse", definition: "A small device moved by hand to control the cursor.", defTrans: "Mouse", example: "Move the mouse to click the button.", audioFront: "TTS: Mouse", audioBack: "TTS: Move the mouse to click the button." },
                { term: "Charger", definition: "A device for charging a battery.", defTrans: "Carregador", example: "Did you bring your phone charger?", audioFront: "TTS: Charger", audioBack: "TTS: Did you bring your phone charger?" },
                { term: "Cable", definition: "A thick wire covered with plastic used to conduct electricity.", defTrans: "Cabo", example: "The USB cable is too short.", audioFront: "TTS: Cable", audioBack: "TTS: The USB cable is too short." },
                { term: "Headphones", definition: "A pair of small speakers worn over the ears.", defTrans: "Fones de ouvido", example: "I put on my headphones to listen to music.", audioFront: "TTS: Headphones", audioBack: "TTS: I put on my headphones to listen to music." },
                { term: "Printer", definition: "A machine for printing text or pictures onto paper.", defTrans: "Impressora", example: "The printer is out of paper.", audioFront: "TTS: Printer", audioBack: "TTS: The printer is out of paper." },
                { term: "Speaker", definition: "A piece of equipment that converts electrical impulses into sound.", defTrans: "Alto-falante", example: "The sound from this speaker is very loud.", audioFront: "TTS: Speaker", audioBack: "TTS: The sound from this speaker is very loud." },
                
                { term: "Internet", definition: "The global computer network providing information.", defTrans: "Internet", example: "You need the internet to search for information.", audioFront: "TTS: Internet", audioBack: "TTS: You need the internet to search for information." },
                { term: "Wi-Fi", definition: "A facility allowing devices to connect to the internet wirelessly.", defTrans: "Wi-Fi", example: "What is the Wi-Fi password here?", audioFront: "TTS: Wi-Fi", audioBack: "TTS: What is the Wi-Fi password here?" },
                { term: "Signal", definition: "An electrical impulse or radio wave transmitted or received.", defTrans: "Sinal", example: "I can't call you because I have no signal.", audioFront: "TTS: Signal", audioBack: "TTS: I can't call you because I have no signal." },
                { term: "Email", definition: "Messages distributed by electronic means.", defTrans: "E-mail", example: "I sent an email to my boss this morning.", audioFront: "TTS: Email", audioBack: "TTS: I sent an email to my boss this morning." },
                { term: "Attachment", definition: "A computer file sent along with an email.", defTrans: "Anexo", example: "Please open the PDF attachment.", audioFront: "TTS: Attachment", audioBack: "TTS: Please open the PDF attachment." },
                { term: "Website", definition: "A set of related web pages located under a single domain name.", defTrans: "Site / Página", example: "This website has a lot of interesting articles.", audioFront: "TTS: Website", audioBack: "TTS: This website has a lot of interesting articles." },
                { term: "Link", definition: "A reference to data that the user can follow by clicking.", defTrans: "Link (atalho)", example: "Click the link in the description.", audioFront: "TTS: Link", audioBack: "TTS: Click the link in the description." },
                { term: "Password", definition: "A secret word or phrase used to gain admission to something.", defTrans: "Senha", example: "Never share your password with anyone.", audioFront: "TTS: Password", audioBack: "TTS: Never share your password with anyone." },
                { term: "App", definition: "A software program downloaded to a phone or computer.", defTrans: "Aplicativo", example: "I installed a new language app.", audioFront: "TTS: App", audioBack: "TTS: I installed a new language app." },
                { term: "File", definition: "A digital document, image, or video stored on a computer.", defTrans: "Arquivo", example: "I can't find the file on my desktop.", audioFront: "TTS: File", audioBack: "TTS: I can't find the file on my desktop." },
                { term: "Folder", definition: "A virtual directory used for storing files.", defTrans: "Pasta", example: "Put these documents in the project folder.", audioFront: "TTS: Folder", audioBack: "TTS: Put these documents in the project folder." },
                { term: "Social media", definition: "Websites and applications used for networking.", defTrans: "Redes sociais", example: "She posts a lot of photos on social media.", audioFront: "TTS: Social media", audioBack: "TTS: She posts a lot of photos on social media." },

                { term: "To click", definition: "To press a mouse button to perform an action.", defTrans: "Clicar", example: "Click the button to confirm.", audioFront: "TTS: To click", audioBack: "TTS: Click the button to confirm." },
                { term: "To type", definition: "To write text on a computer using a keyboard.", defTrans: "Digitar", example: "I can type very fast on this keyboard.", audioFront: "TTS: To type", audioBack: "TTS: I can type very fast on this keyboard." },
                { term: "To download", definition: "To copy data from the internet to your device.", defTrans: "Baixar", example: "It takes five minutes to download the movie.", audioFront: "TTS: To download", audioBack: "TTS: It takes five minutes to download the movie." },
                { term: "To upload", definition: "To transfer data from your device to the internet.", defTrans: "Enviar / Fazer upload", example: "I want to upload a video to YouTube.", audioFront: "TTS: To upload", audioBack: "TTS: I want to upload a video to YouTube." },
                { term: "To save", definition: "To keep data on your computer so it is not lost.", defTrans: "Salvar", example: "Don't forget to save your work.", audioFront: "TTS: To save", audioBack: "TTS: Don't forget to save your work." },
                { term: "To delete", definition: "To remove or erase a file.", defTrans: "Deletar / Apagar", example: "If you delete that file, it will be gone forever.", audioFront: "TTS: To delete", audioBack: "TTS: If you delete that file, it will be gone forever." },
                { term: "To crash", definition: "When a computer program suddenly stops working and closes.", defTrans: "Pifar / Fechar", example: "My browser had an error and crashed.", audioFront: "TTS: To crash", audioBack: "TTS: My browser had an error and crashed." },
                { term: "To freeze", definition: "When a screen becomes unresponsive and you cannot click.", defTrans: "Travar / Congelar", example: "The screen is completely frozen.", audioFront: "TTS: To freeze", audioBack: "TTS: The screen is completely frozen." },
                { term: "Online", definition: "Connected to a computer network.", defTrans: "Online", example: "I prefer to play games online.", audioFront: "TTS: Online", audioBack: "TTS: I prefer to play games online." },
                { term: "Offline", definition: "Not connected to a computer network.", defTrans: "Offline", example: "You can read this document offline.", audioFront: "TTS: Offline", audioBack: "TTS: You can read this document offline." },
                { term: "Wireless", definition: "Using radio or microwaves to transmit signals without wires.", defTrans: "Sem fio", example: "We have a wireless network at home.", audioFront: "TTS: Wireless", audioBack: "TTS: We have a wireless network at home." },
                { term: "Broken", definition: "Damaged and no longer in working order.", defTrans: "Quebrado", example: "My phone fell, and now the screen is broken.", audioFront: "TTS: Broken", audioBack: "TTS: My phone fell, and now the screen is broken." },

                // 3A Items (18 items)
                { term: "Turn on the computer", definition: "To start the power of the PC.", defTrans: "Ligar o computador", example: "Please turn on the computer to start.", audioFront: "TTS: Turn on the computer", audioBack: "TTS: Please turn on the computer to start." },
                { term: "Turn off the computer", definition: "To shut down the power of the PC.", defTrans: "Desligar o computador", example: "Always turn off the computer when you leave.", audioFront: "TTS: Turn off the computer", audioBack: "TTS: Always turn off the computer when you leave." },
                { term: "Charge my phone", definition: "To connect the phone to electricity to refill the battery.", defTrans: "Carregar meu celular", example: "I need to charge my phone.", audioFront: "TTS: Charge my phone", audioBack: "TTS: I need to charge my phone." },
                { term: "My battery is low", definition: "Stating that your device is almost out of power.", defTrans: "Minha bateria está fraca", example: "I can't talk right now, my battery is low.", audioFront: "TTS: My battery is low", audioBack: "TTS: I can't talk right now, my battery is low." },
                { term: "Connect to the Wi-Fi", definition: "To join a wireless internet network.", defTrans: "Conectar-se ao Wi-Fi", example: "How do I connect to the Wi-Fi here?", audioFront: "TTS: Connect to the Wi-Fi", audioBack: "TTS: How do I connect to the Wi-Fi here?" },
                { term: "Enter the password", definition: "To type a secret code to gain access.", defTrans: "Digitar a senha", example: "You have to enter the password to login.", audioFront: "TTS: Enter the password", audioBack: "TTS: You have to enter the password to login." },
                { term: "Plug it in", definition: "To push a plug into an electrical outlet.", defTrans: "Colocar na tomada", example: "Your laptop is dead. You should plug it in.", audioFront: "TTS: Plug it in", audioBack: "TTS: Your laptop is dead. You should plug it in." },
                { term: "Browse the internet", definition: "To look at information on the web.", defTrans: "Navegar na internet", example: "I like to browse the internet for news.", audioFront: "TTS: Browse the internet", audioBack: "TTS: I like to browse the internet for news." },
                { term: "Send an email", definition: "To transmit an electronic message.", defTrans: "Enviar um e-mail", example: "I will send an email to the manager.", audioFront: "TTS: Send an email", audioBack: "TTS: I will send an email to the manager." },
                { term: "Post a photo", definition: "To upload a picture to social media.", defTrans: "Postar uma foto", example: "She decided to post a photo on Instagram.", audioFront: "TTS: Post a photo", audioBack: "TTS: She decided to post a photo on Instagram." },
                { term: "Make a video call", definition: "To call someone using internet video.", defTrans: "Fazer uma chamada de vídeo", example: "Let's make a video call so I can see you.", audioFront: "TTS: Make a video call", audioBack: "TTS: Let's make a video call so I can see you." },
                { term: "Send a text message", definition: "To send a written message via mobile phone.", defTrans: "Enviar uma mensagem de texto", example: "Just send a text message when you arrive.", audioFront: "TTS: Send a text message", audioBack: "TTS: Just send a text message when you arrive." },
                { term: "It's not working", definition: "Stating that a device or function is failing.", defTrans: "Não está funcionando", example: "I pressed the button, but it's not working.", audioFront: "TTS: It's not working", audioBack: "TTS: I pressed the button, but it's not working." },
                { term: "The internet is down", definition: "Stating that the network connection is unavailable.", defTrans: "A internet caiu", example: "We can't work today because the internet is down.", audioFront: "TTS: The internet is down", audioBack: "TTS: We can't work today because the internet is down." },
                { term: "I have a weak signal", definition: "Stating that the network reception is poor.", defTrans: "Estou com sinal fraco", example: "I can't hear you clearly, I have a weak signal.", audioFront: "TTS: I have a weak signal", audioBack: "TTS: I can't hear you clearly, I have a weak signal." },
                { term: "Have you tried turning it off and on again?", definition: "A common troubleshooting suggestion to reboot a device.", defTrans: "Você já tentou desligar e ligar de novo?", example: "Have you tried turning it off and on again?", audioFront: "TTS: Have you tried turning it off and on again?", audioBack: "TTS: Have you tried turning it off and on again?" },
                { term: "Restart the computer", definition: "To reboot the PC.", defTrans: "Reiniciar o computador", example: "If it freezes, you should restart the computer.", audioFront: "TTS: Restart the computer", audioBack: "TTS: If it freezes, you should restart the computer." },
                { term: "Can you help me with my laptop?", definition: "A polite request for technical assistance.", defTrans: "Você pode me ajudar com meu notebook?", example: "Excuse me, can you help me with my laptop?", audioFront: "TTS: Can you help me with my laptop?", audioBack: "TTS: Excuse me, can you help me with my laptop?" }
            ]
        }
    ],

    // ======================================================
    // GLOSSARY (All 54 items + Context words)
    // ======================================================
    glossary:[
        // 2A: Devices & Hardware
        { topic: "Hardware", term: "computer", definition: "An electronic device for storing and processing data.", translation: "Computador" },
        { topic: "Hardware", term: "laptop", definition: "A portable computer.", translation: "Notebook" },
        { topic: "Hardware", term: "smartphone", definition: "A mobile phone with computer functions.", translation: "Smartphone" },
        { topic: "Hardware", term: "tablet", definition: "A wireless, portable computer with a touchscreen.", translation: "Tablet" },
        { topic: "Hardware", term: "screen", definition: "The flat surface where images are displayed.", translation: "Tela" },
        { topic: "Hardware", term: "keyboard", definition: "A panel of keys used to type.", translation: "Teclado" },
        { topic: "Hardware", term: "mouse", definition: "A small device to control the cursor.", translation: "Mouse" },
        { topic: "Hardware", term: "charger", definition: "A device for charging a battery.", translation: "Carregador" },
        { topic: "Hardware", term: "cable", definition: "A wire used to conduct electricity or data.", translation: "Cabo" },
        { topic: "Hardware", term: "headphones", definition: "A pair of small speakers worn over the ears.", translation: "Fones de ouvido" },
        { topic: "Hardware", term: "printer", definition: "A machine for printing text or pictures.", translation: "Impressora" },
        { topic: "Hardware", term: "speaker", definition: "Equipment that converts electrical impulses into sound.", translation: "Alto-falante" },

        // 2A: Software & Digital
        { topic: "Software", term: "internet", definition: "The global computer network.", translation: "Internet" },
        { topic: "Software", term: "wifi", definition: "Facility allowing wireless internet connection.", translation: "Wi-Fi" },
        { topic: "Software", term: "signal", definition: "Radio wave transmitted or received.", translation: "Sinal" },
        { topic: "Software", term: "email", definition: "Electronic messages.", translation: "E-mail" },
        { topic: "Software", term: "attachment", definition: "A computer file sent with an email.", translation: "Anexo" },
        { topic: "Software", term: "website", definition: "A set of related web pages.", translation: "Site / Página" },
        { topic: "Software", term: "link", definition: "A reference to data to follow by clicking.", translation: "Link" },
        { topic: "Software", term: "password", definition: "A secret word to gain access.", translation: "Senha" },
        { topic: "Software", term: "app", definition: "A software program downloaded to a phone.", translation: "Aplicativo" },
        { topic: "Software", term: "file", definition: "A digital document stored on a computer.", translation: "Arquivo" },
        { topic: "Software", term: "folder", definition: "A virtual directory for storing files.", translation: "Pasta" },
        { topic: "Software", term: "social-media", definition: "Websites used for networking.", translation: "Redes sociais" },

        // 2A: Verbs & Adjectives
        { topic: "Verbs", term: "click", definition: "To press a mouse button.", translation: "Clicar" },
        { topic: "Verbs", term: "type", definition: "To write text using a keyboard.", translation: "Digitar" },
        { topic: "Verbs", term: "download", definition: "To copy data from the internet.", translation: "Baixar" },
        { topic: "Verbs", term: "upload", definition: "To transfer data to the internet.", translation: "Enviar / Upload" },
        { topic: "Verbs", term: "save", definition: "To keep data on a computer.", translation: "Salvar" },
        { topic: "Verbs", term: "delete", definition: "To remove a file.", translation: "Deletar / Apagar" },
        { topic: "Verbs", term: "crash", definition: "When a program suddenly closes.", translation: "Pifar / Fechar" },
        { topic: "Verbs", term: "freeze", definition: "When a screen becomes unresponsive.", translation: "Travar / Congelar" },
        { topic: "Adjectives", term: "online", definition: "Connected to a network.", translation: "Online" },
        { topic: "Adjectives", term: "offline", definition: "Not connected to a network.", translation: "Offline" },
        { topic: "Adjectives", term: "wireless", definition: "Transmitting signals without wires.", translation: "Sem fio" },
        { topic: "Adjectives", term: "broken", definition: "Damaged and not working.", translation: "Quebrado" },

        // 3A: Expressions
        { topic: "Expressions", term: "turn-on", definition: "To start the power.", translation: "Ligar" },
        { topic: "Expressions", term: "turn-off", definition: "To shut down the power.", translation: "Desligar" },
        { topic: "Expressions", term: "charge-phone", definition: "To refill the battery.", translation: "Carregar o celular" },
        { topic: "Expressions", term: "battery-low", definition: "Device is almost out of power.", translation: "Bateria está fraca" },
        { topic: "Expressions", term: "connect-wifi", definition: "To join a wireless network.", translation: "Conectar-se ao Wi-Fi" },
        { topic: "Expressions", term: "enter-password", definition: "To type a secret code.", translation: "Digitar a senha" },
        { topic: "Expressions", term: "plug-in", definition: "To push a plug into an outlet.", translation: "Colocar na tomada" },
        { topic: "Expressions", term: "browse-internet", definition: "To look at info on the web.", translation: "Navegar na internet" },
        { topic: "Expressions", term: "send-email", definition: "To transmit an electronic message.", translation: "Enviar um e-mail" },
        { topic: "Expressions", term: "post-photo", definition: "To upload a picture to social media.", translation: "Postar uma foto" },
        { topic: "Expressions", term: "video-call", definition: "To call using internet video.", translation: "Fazer uma chamada de vídeo" },
        { topic: "Expressions", term: "send-text", definition: "To send a written message via mobile.", translation: "Enviar mensagem de texto" },
        { topic: "Expressions", term: "not-working", definition: "Device or function is failing.", translation: "Não está funcionando" },
        { topic: "Expressions", term: "internet-down", definition: "Network connection is unavailable.", translation: "A internet caiu" },
        { topic: "Expressions", term: "weak-signal", definition: "Network reception is poor.", translation: "Sinal fraco" },
        { topic: "Expressions", term: "tried-turning-off-on", definition: "Troubleshooting suggestion to reboot.", translation: "Tentou desligar e ligar de novo?" },
        { topic: "Expressions", term: "restart-computer", definition: "To reboot the PC.", translation: "Reiniciar o computador" },
        { topic: "Expressions", term: "can-you-help-laptop", definition: "Polite request for tech assistance.", translation: "Você pode me ajudar com meu notebook?" },

        // Additional Context Words
        { topic: "Context", term: "device", definition: "A piece of mechanical or electronic equipment.", translation: "Dispositivo" },
        { topic: "Context", term: "software", definition: "The programs and other operating information used by a computer.", translation: "Software" },
        { topic: "Context", term: "troubleshoot", definition: "Trace and correct faults in a mechanical or electronic system.", translation: "Solucionar problemas" },
        { topic: "Context", term: "document", definition: "A piece of written, printed, or electronic matter.", translation: "Documento" }
    ]
});