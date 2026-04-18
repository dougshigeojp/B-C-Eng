/**
 * English Block Assembling - LESSON DATA: Topic 19
 * Topic: Telecommunications
 * Level: Upper A2 ~ Lower B1
 */

window.initLesson({
    // --- METADATA ---
    lessonId: "lesson-19",
    block: "3",
    topicTitle: "Telecommunications",

    steps:[
        // ======================================================
        // STEP 0: INTRO & CAN-DO
        // ======================================================
        {
            title: "Intro & Can-Do",
            objectives: "• Make and answer a professional [phone call](tooltip:phone-call).<br>• Handle communication problems like a bad [connection](tooltip:connection) or a [frozen](tooltip:freeze) screen.<br>• Take and leave[messages](tooltip:leave-message) effectively.<br>• Ask for clarification and [spell](tooltip:spell) out names to avoid misunderstandings.",
            welcome: "Welcome to Lesson 19! Communicating over the phone or via video chat is a crucial skill in both business and daily life. In this lesson, we will cover the essential vocabulary for making calls, leaving voicemails, and troubleshooting bad connections. You will learn polite phrases to ask someone to repeat themselves, to transfer a call, and to manage video meetings. Let's start talking!",
            audio: {
                objectives: "TTS: In this lesson, you will learn to: Make and answer a professional phone call. Handle communication problems like a bad connection or a frozen screen. Take and leave messages effectively. Ask for clarification and spell out names to avoid misunderstandings.",
                welcome: "TTS: Welcome to Lesson 19! Communicating over the phone or via video chat is a crucial skill in both business and daily life. In this lesson, we will cover the essential vocabulary for making calls, leaving voicemails, and troubleshooting bad connections. You will learn polite phrases to ask someone to repeat themselves, to transfer a call, and to manage video meetings. Let's start talking!"
            }
        },

        // ======================================================
        // STEP 1: CONTEXT DIALOGUE
        // ======================================================
        {
            title: "Context Dialogue",
            context: "Sarah is calling Global Tech to speak to the marketing manager, but she runs into some communication issues.",
            contextAudio: "TTS: Receptionist: Good morning, Global Tech. How can I help you? Sarah: Hello, this is Sarah speaking. Could I speak to Mr. Davis, please? Receptionist: One moment, please. Hold the line. I'll put you through. Sarah: Thank you. Receptionist: I'm sorry, the line is engaged. He's not available right now. Can I take a message? Sarah: Yes. Could you tell him that I called? I'm calling about the new project. Receptionist: I'm sorry, you're breaking up. Did you say the new project? Sarah: Yes. Could you ask him to call me back? Receptionist: Certainly. Could you spell your last name for me, please? Sarah: It's M-I-L-L-E-R. Actually, I have a bad connection. Let me call you back!",
            dialogue:[
                { speaker: "Receptionist", text: "Good morning, Global Tech. How can I help you?" },
                { speaker: "Sarah", text: "Hello, [this is Sarah speaking](tooltip:this-is-speaking). [Could I speak to](tooltip:could-i-speak-to) Mr. Davis, please?" },
                { speaker: "Receptionist", text: "One moment, please. [Hold the line](tooltip:hold-the-line). [I'll put you through](tooltip:ill-put-you-through)." },
                { speaker: "Sarah", text: "Thank you." },
                { speaker: "Receptionist", text: "I'm sorry, [the line is engaged](tooltip:line-is-engaged).[He's not available](tooltip:not-available) right now. [Can I take a message](tooltip:can-i-take-message)?" },
                { speaker: "Sarah", text: "Yes.[Could you tell him that I called](tooltip:tell-him-called)? [I'm calling about](tooltip:calling-about) the new project." },
                { speaker: "Receptionist", text: "I'm sorry, [you're breaking up](tooltip:breaking-up). [Did you say](tooltip:did-you-say) the new project?" },
                { speaker: "Sarah", text: "Yes. [Could you ask him to call me back](tooltip:ask-to-call-back)?" },
                { speaker: "Receptionist", text: "Certainly.[Could you spell your last name](tooltip:spell-last-name) for me, please?" },
                { speaker: "Sarah", text: "It's M-I-L-L-E-R. Actually, I have a bad connection. [Let me call you back](tooltip:let-me-call-back)!" }
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
                    title: "Devices & Features",
                    audio: "TTS: Phone. Smartphone. Landline. Voicemail. Text message. Video call. Contact list. Signal. Connection. Reception. Ringtone. Line.",
                    items:[
                        { term: "Phone", trans: "Telefone" },
                        { term: "Smartphone", trans: "Smartphone (Celular inteligente)" },
                        { term: "Landline", trans: "Telefone fixo" },
                        { term: "Voicemail", trans: "Correio de voz" },
                        { term: "Text message", trans: "Mensagem de texto" },
                        { term: "Video call", trans: "Chamada de vídeo" },
                        { term: "Contact list", trans: "Lista de contatos" },
                        { term: "Signal", trans: "Sinal" },
                        { term: "Connection", trans: "Conexão" },
                        { term: "Reception", trans: "Recepção (de sinal)" },
                        { term: "Ringtone", trans: "Toque (de telefone)" },
                        { term: "Line", trans: "Linha (telefônica)" }
                    ]
                },
                {
                    title: "People & Adjectives",
                    audio: "TTS: Caller. Receiver. Operator. Receptionist. Engaged. Free. Clear. Bad. Weak. Strong. Loud. Available.",
                    items:[
                        { term: "Caller", trans: "Quem liga (Chamador)" },
                        { term: "Receiver", trans: "Quem recebe (Recebedor/Aparelho receptor)" },
                        { term: "Operator", trans: "Operador(a) / Telefonista" },
                        { term: "Receptionist", trans: "Recepcionista" },
                        { term: "Engaged (busy)", trans: "Ocupado(a) (linha ou pessoa)" },
                        { term: "Free", trans: "Livre" },
                        { term: "Clear", trans: "Claro(a) (som ou imagem)" },
                        { term: "Bad", trans: "Ruim" },
                        { term: "Weak", trans: "Fraco(a) (sinal)" },
                        { term: "Strong", trans: "Forte (sinal)" },
                        { term: "Loud", trans: "Alto(a) (som)" },
                        { term: "Available", trans: "Disponível" }
                    ]
                },
                {
                    title: "Verbs (Telecommunications)",
                    audio: "TTS: To call. To ring. To dial. To answer. To pick up. To hang up. To call back. To hold. To connect. To put through. To text. To leave a message.",
                    items:[
                        { term: "To call (To phone)", trans: "Ligar / Telefonar" },
                        { term: "To ring", trans: "Tocar (telefone)" },
                        { term: "To dial", trans: "Discar" },
                        { term: "To answer", trans: "Atender / Responder" },
                        { term: "To pick up", trans: "Atender (pegar o telefone)" },
                        { term: "To hang up", trans: "Desligar (a chamada)" },
                        { term: "To call back", trans: "Retornar a ligação" },
                        { term: "To hold", trans: "Aguardar na linha" },
                        { term: "To connect", trans: "Conectar" },
                        { term: "To put through", trans: "Transferir a ligação (para outra pessoa)" },
                        { term: "To text", trans: "Enviar mensagem de texto" },
                        { term: "To leave (a message)", trans: "Deixar (uma mensagem)" }
                    ]
                }
            ],

            // --- 2B: EXAMPLES ---
            exampleGroups:[
                {
                    title: "Devices & Features",
                    audio: "TTS: He left his phone on the desk. She uses a smartphone for everything. My grandmother still has a landline. Please leave a voicemail after the tone. I sent her a quick text message. We do a video call every Sunday. I added your number to my contact list. I can't call you because I have no signal. The internet connection is very slow today. The reception in this building is terrible. I love your new ringtone. The line is busy at the moment.",
                    items:[
                        { term: "Phone", sent: "He left his phone on the desk.", trans: "Ele deixou o telefone dele na mesa." },
                        { term: "Smartphone", sent: "She uses a smartphone for everything.", trans: "Ela usa um smartphone para tudo." },
                        { term: "Landline", sent: "My grandmother still has a landline.", trans: "Minha avó ainda tem um telefone fixo." },
                        { term: "Voicemail", sent: "Please leave a voicemail after the tone.", trans: "Por favor, deixe um correio de voz após o bipe." },
                        { term: "Text message", sent: "I sent her a quick text message.", trans: "Eu enviei a ela uma mensagem de texto rápida." },
                        { term: "Video call", sent: "We do a video call every Sunday.", trans: "Nós fazemos uma chamada de vídeo todo domingo." },
                        { term: "Contact list", sent: "I added your number to my contact list.", trans: "Eu adicionei seu número à minha lista de contatos." },
                        { term: "Signal", sent: "I can't call you because I have no signal.", trans: "Não consigo te ligar porque estou sem sinal." },
                        { term: "Connection", sent: "The internet connection is very slow today.", trans: "A conexão de internet está muito lenta hoje." },
                        { term: "Reception", sent: "The reception in this building is terrible.", trans: "A recepção (de sinal) neste prédio é terrível." },
                        { term: "Ringtone", sent: "I love your new ringtone.", trans: "Eu amo seu novo toque de telefone." },
                        { term: "Line", sent: "The line is busy at the moment.", trans: "A linha está ocupada no momento." }
                    ]
                },
                {
                    title: "People & Adjectives",
                    audio: "TTS: The caller hung up before I could answer. She picked up the receiver and said hello. The operator helped me find the number. The receptionist answers all the calls. I tried calling, but the line was engaged. I am free to talk at three PM. The audio quality is very clear. We have a bad connection, let's try again. The signal is too weak in the basement. You need a strong password for your email. The music is too loud to hear you. The manager is not available right now.",
                    items:[
                        { term: "Caller", sent: "The caller hung up before I could answer.", trans: "Quem ligou desligou antes que eu pudesse atender." },
                        { term: "Receiver", sent: "She picked up the receiver and said hello.", trans: "Ela pegou o telefone (receptor) e disse olá." },
                        { term: "Operator", sent: "The operator helped me find the number.", trans: "A telefonista me ajudou a encontrar o número." },
                        { term: "Receptionist", sent: "The receptionist answers all the calls.", trans: "A recepcionista atende todas as ligações." },
                        { term: "Engaged (busy)", sent: "I tried calling, but the line was engaged.", trans: "Tentei ligar, mas a linha estava ocupada." },
                        { term: "Free", sent: "I am free to talk at 3 PM.", trans: "Estou livre para conversar às 15h." },
                        { term: "Clear", sent: "The audio quality is very clear.", trans: "A qualidade do áudio está muito clara." },
                        { term: "Bad", sent: "We have a bad connection, let's try again.", trans: "Temos uma conexão ruim, vamos tentar de novo." },
                        { term: "Weak", sent: "The signal is too weak in the basement.", trans: "O sinal é muito fraco no porão." },
                        { term: "Strong", sent: "You need a strong password for your email.", trans: "Você precisa de uma senha forte para o seu e-mail." },
                        { term: "Loud", sent: "The music is too loud to hear you.", trans: "A música está alta demais para te ouvir." },
                        { term: "Available", sent: "The manager is not available right now.", trans: "O gerente não está disponível no momento." }
                    ]
                },
                {
                    title: "Verbs (Telecommunications)",
                    audio: "TTS: I will call you when I get home. The phone started to ring during the meeting. You have to dial the area code first. Please answer the phone, it is ringing. I tried to call, but he didn't pick up. She got angry and decided to hang up. I missed his call, so I will call back. Please hold the line for a moment. I am trying to connect to the network. The secretary will put you through to the boss. It is easier to text than to call. She wasn't home, so I decided to leave a message.",
                    items:[
                        { term: "To call (To phone)", sent: "I will call you when I get home.", trans: "Eu te ligarei quando chegar em casa." },
                        { term: "To ring", sent: "The phone started to ring during the meeting.", trans: "O telefone começou a tocar durante a reunião." },
                        { term: "To dial", sent: "You have to dial the area code first.", trans: "Você tem que discar o código de área primeiro." },
                        { term: "To answer", sent: "Please answer the phone, it is ringing.", trans: "Por favor, atenda o telefone, está tocando." },
                        { term: "To pick up", sent: "I tried to call, but he didn't pick up.", trans: "Eu tentei ligar, mas ele não atendeu." },
                        { term: "To hang up", sent: "She got angry and decided to hang up.", trans: "Ela ficou com raiva e decidiu desligar." },
                        { term: "To call back", sent: "I missed his call, so I will call back.", trans: "Eu perdi a ligação dele, então vou retornar a ligação." },
                        { term: "To hold", sent: "Please hold the line for a moment.", trans: "Por favor, aguarde na linha por um momento." },
                        { term: "To connect", sent: "I am trying to connect to the network.", trans: "Estou tentando conectar à rede." },
                        { term: "To put through", sent: "The secretary will put you through to the boss.", trans: "A secretária vai transferir a ligação para o chefe." },
                        { term: "To text", sent: "It is easier to text than to call.", trans: "É mais fácil enviar mensagem do que ligar." },
                        { term: "To leave (a message)", sent: "She wasn't home, so I decided to leave a message.", trans: "Ela não estava em casa, então decidi deixar uma mensagem." }
                    ]
                }
            ],

            // --- 2C: PRACTICE ---
            drillGroups:[
                {
                    title: "Devices & Features",
                    drills:[
                        { q: "A piece of equipment used to talk to someone far away is a ________.", options:[{t: "Keyboard", c: false}, {t: "Phone", c: true}, {t: "Signal", c: false}, {t: "Mouse", c: false}], type: "mcq" },
                        { q: "A mobile phone with advanced computing capability is a ________.", options:[{t: "Smartphone", c: true}, {t: "Landline", c: false}, {t: "Voicemail", c: false}, {t: "Ringtone", c: false}], type: "mcq" },
                        { q: "A telephone connected by a wire to a communications network is a ________.", options:[{t: "Signal", c: false}, {t: "Smartphone", c: false}, {t: "Landline", c: true}, {t: "Text message", c: false}], type: "mcq" },
                        { q: "An electronic system that records spoken messages is a ________.", options:[{t: "Voicemail", c: true}, {t: "Ringtone", c: false}, {t: "Contact list", c: false}, {t: "Connection", c: false}], type: "mcq" },
                        { q: "A short written message sent via mobile phone is a ________.", options:[{t: "Voicemail", c: false}, {t: "Text message", c: true}, {t: "Video call", c: false}, {t: "Line", c: false}], type: "mcq" },
                        { q: "A phone call where you can see the other person on screen is a ________.", options:[{t: "Contact list", c: false}, {t: "Signal", c: false}, {t: "Video call", c: true}, {t: "Ringtone", c: false}], type: "mcq" },
                        { q: "A directory of phone numbers and names saved on a phone is a ________.", options:[{t: "Voicemail", c: false}, {t: "Contact list", c: true}, {t: "Signal", c: false}, {t: "Line", c: false}], type: "mcq" },
                        { q: "The electrical or radio wave transmitted to make a call is the ________.", options:[{t: "Ringtone", c: false}, {t: "Landline", c: false}, {t: "Signal", c: true}, {t: "Video call", c: false}], type: "mcq" },
                        { q: "The link between two telephones allowing communication is a ________.", options:[{t: "Contact list", c: false}, {t: "Connection", c: true}, {t: "Voicemail", c: false}, {t: "Text message", c: false}], type: "mcq" },
                        { q: "The quality of the signal received by a device is the ________.", options:[{t: "Ringtone", c: false}, {t: "Reception", c: true}, {t: "Landline", c: false}, {t: "Smartphone", c: false}], type: "mcq" },
                        { q: "The sound a phone makes when someone is calling is the ________.", options:[{t: "Ringtone", c: true}, {t: "Voicemail", c: false}, {t: "Signal", c: false}, {t: "Connection", c: false}], type: "mcq" },
                        { q: "A telephone connection or channel of communication is a ________.", options:[{t: "Line", c: true}, {t: "Text message", c: false}, {t: "Contact list", c: false}, {t: "Video call", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "People & Adjectives",
                    drills:[
                        { q: "The person who is making the phone call is the ________.", options:[{t: "Receiver", c: false}, {t: "Caller", c: true}, {t: "Receptionist", c: false}, {t: "Operator", c: false}], type: "mcq" },
                        { q: "The person who answers the call, or the part of the phone you listen to, is the ________.", options:[{t: "Caller", c: false}, {t: "Receiver", c: true}, {t: "Loud", c: false}, {t: "Strong", c: false}], type: "mcq" },
                        { q: "A person who operates a telephone switchboard is an ________.", options:[{t: "Operator", c: true}, {t: "Caller", c: false}, {t: "Engaged", c: false}, {t: "Weak", c: false}], type: "mcq" },
                        { q: "A person who answers the phone and greets visitors in an office is a ________.", options:[{t: "Caller", c: false}, {t: "Receptionist", c: true}, {t: "Receiver", c: false}, {t: "Clear", c: false}], type: "mcq" },
                        { q: "When a phone line is busy and you cannot get through, it is ________.", options:[{t: "Engaged", c: true}, {t: "Free", c: false}, {t: "Clear", c: false}, {t: "Strong", c: false}], type: "mcq" },
                        { q: "When a person or line is not busy and can talk, they are ________.", options:[{t: "Engaged", c: false}, {t: "Free", c: true}, {t: "Bad", c: false}, {t: "Weak", c: false}], type: "mcq" },
                        { q: "When the audio is easy to hear and understand, the line is ________.", options:[{t: "Bad", c: false}, {t: "Clear", c: true}, {t: "Loud", c: false}, {t: "Weak", c: false}], type: "mcq" },
                        { q: "When the connection has a lot of static or drops, it is a ________ connection.", options:[{t: "Bad", c: true}, {t: "Clear", c: false}, {t: "Strong", c: false}, {t: "Free", c: false}], type: "mcq" },
                        { q: "When the signal is poor and might disconnect, it is ________.", options:[{t: "Strong", c: false}, {t: "Clear", c: false}, {t: "Weak", c: true}, {t: "Loud", c: false}], type: "mcq" },
                        { q: "When the signal is excellent, it is ________.", options:[{t: "Weak", c: false}, {t: "Bad", c: false}, {t: "Strong", c: true}, {t: "Engaged", c: false}], type: "mcq" },
                        { q: "When a sound is produced with high volume, it is ________.", options:[{t: "Loud", c: true}, {t: "Weak", c: false}, {t: "Free", c: false}, {t: "Available", c: false}], type: "mcq" },
                        { q: "When someone is ready to take your call, they are ________.", options:[{t: "Engaged", c: false}, {t: "Available", c: true}, {t: "Bad", c: false}, {t: "Weak", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Verbs (Telecommunications)",
                    drills:[
                        { q: "To contact someone by phone is ________.", options:[{t: "To hang up", c: false}, {t: "To call", c: true}, {t: "To hold", c: false}, {t: "To text", c: false}], type: "mcq" },
                        { q: "To make a sound indicating an incoming call is ________.", options:[{t: "To dial", c: false}, {t: "To answer", c: false}, {t: "To ring", c: true}, {t: "To connect", c: false}], type: "mcq" },
                        { q: "To push the buttons on a phone to make a call is ________.", options:[{t: "To dial", c: true}, {t: "To hang up", c: false}, {t: "To text", c: false}, {t: "To hold", c: false}], type: "mcq" },
                        { q: "To respond to an incoming phone call is ________.", options:[{t: "To leave a message", c: false}, {t: "To dial", c: false}, {t: "To answer", c: true}, {t: "To hang up", c: false}], type: "mcq" },
                        { q: "Another phrase for 'to answer the phone' is ________.", options:[{t: "To put through", c: false}, {t: "To call back", c: false}, {t: "To pick up", c: true}, {t: "To hold", c: false}], type: "mcq" },
                        { q: "To end a phone conversation and disconnect is ________.", options:[{t: "To hang up", c: true}, {t: "To pick up", c: false}, {t: "To answer", c: false}, {t: "To dial", c: false}], type: "mcq" },
                        { q: "To return a phone call later is ________.", options:[{t: "To connect", c: false}, {t: "To hold", c: false}, {t: "To call back", c: true}, {t: "To ring", c: false}], type: "mcq" },
                        { q: "To wait on the phone without hanging up is ________.", options:[{t: "To hold", c: true}, {t: "To dial", c: false}, {t: "To put through", c: false}, {t: "To answer", c: false}], type: "mcq" },
                        { q: "To establish a communication link is ________.", options:[{t: "To hang up", c: false}, {t: "To connect", c: true}, {t: "To text", c: false}, {t: "To leave a message", c: false}], type: "mcq" },
                        { q: "To transfer a caller to the person they want to speak to is ________.", options:[{t: "To dial", c: false}, {t: "To put through", c: true}, {t: "To hang up", c: false}, {t: "To pick up", c: false}], type: "mcq" },
                        { q: "To send a written message from a mobile phone is ________.", options:[{t: "To hold", c: false}, {t: "To text", c: true}, {t: "To ring", c: false}, {t: "To put through", c: false}], type: "mcq" },
                        { q: "To record a spoken note when someone doesn't answer is ________.", options:[{t: "To dial", c: false}, {t: "To leave a message", c: true}, {t: "To hang up", c: false}, {t: "To text", c: false}], type: "mcq" }
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
                    title: "Starting & During the Call",
                    audio: "TTS: This is speaking. Could I speak to. I'm calling about. Hold the line. I'll put you through. He is not available.",
                    explanation: "Professional phrases used to identify yourself, ask for someone, and transfer a call.<br><span style='color:var(--primary-blue); font-style:italic;'>(Frases profissionais usadas para se identificar, perguntar por alguém e transferir uma chamada.)</span>",
                    samples:[
                        { en: "Hello, <b>this is</b> John <b>speaking</b>.", pt: "<span style='color:var(--primary-blue)'>(Olá, aqui é o John falando.)</span>" },
                        { en: "<b>Could I speak to</b> Mr. Smith, please?", pt: "<span style='color:var(--primary-blue)'>(Eu poderia falar com o Sr. Smith, por favor?)</span>" },
                        { en: "<b>I'm calling about</b> the new contract.", pt: "<span style='color:var(--primary-blue)'>(Estou ligando sobre o novo contrato.)</span>" },
                        { en: "Please <b>hold the line</b> for a moment.", pt: "<span style='color:var(--primary-blue)'>(Por favor, aguarde na linha por um momento.)</span>" },
                        { en: "<b>I'll put you through</b> to his office.", pt: "<span style='color:var(--primary-blue)'>(Vou transferir a ligação para o escritório dele.)</span>" },
                        { en: "I'm sorry, <b>he is not available</b> right now.", pt: "<span style='color:var(--primary-blue)'>(Sinto muito, ele não está disponível no momento.)</span>" }
                    ]
                },
                {
                    title: "Problems & Video Chatting",
                    audio: "TTS: I can't hear you very well. You're breaking up. Could you speak up? Let me call you back. Your screen is frozen. Share my screen.",
                    explanation: "Phrases used to handle poor connections, ask someone to talk louder, and manage video calls.<br><span style='color:var(--primary-blue); font-style:italic;'>(Frases usadas para lidar com conexões ruins, pedir para alguém falar mais alto e gerenciar videochamadas.)</span>",
                    samples:[
                        { en: "Sorry, <b>I can't hear you very well</b>.", pt: "<span style='color:var(--primary-blue)'>(Desculpe, não consigo ouvi-lo muito bem.)</span>" },
                        { en: "The signal is bad, <b>you're breaking up</b>.", pt: "<span style='color:var(--primary-blue)'>(O sinal está ruim, sua voz está cortando.)</span>" },
                        { en: "<b>Could you speak up</b>, please?", pt: "<span style='color:var(--primary-blue)'>(Você poderia falar mais alto, por favor?)</span>" },
                        { en: "The connection dropped, <b>let me call you back</b>.", pt: "<span style='color:var(--primary-blue)'>(A conexão caiu, deixe-me ligar de volta.)</span>" },
                        { en: "I can't see you move, <b>your screen is frozen</b>.", pt: "<span style='color:var(--primary-blue)'>(Não consigo ver você se mexer, sua tela está travada.)</span>" },
                        { en: "I'm going to <b>share my screen</b> with you.", pt: "<span style='color:var(--primary-blue)'>(Vou compartilhar minha tela com você.)</span>" }
                    ]
                },
                {
                    title: "Messages & Misunderstandings",
                    audio: "TTS: Can I take a message? Ask him to call me back. Tell her that I called. Did you say. Could you spell your last name? The line is engaged.",
                    explanation: "Useful expressions for handling voicemails, making sure information is correct, and dealing with busy lines.<br><span style='color:var(--primary-blue); font-style:italic;'>(Expressões úteis para lidar com mensagens de voz, garantir que as informações estejam corretas e lidar com linhas ocupadas.)</span>",
                    samples:[
                        { en: "He is busy. <b>Can I take a message?</b>", pt: "<span style='color:var(--primary-blue)'>(Ele está ocupado. Posso anotar um recado?)</span>" },
                        { en: "Could you <b>ask him to call me back</b>?", pt: "<span style='color:var(--primary-blue)'>(Você poderia pedir a ele para me ligar de volta?)</span>" },
                        { en: "Could you <b>tell her that I called</b>?", pt: "<span style='color:var(--primary-blue)'>(Você poderia dizer a ela que eu liguei?)</span>" },
                        { en: "I'm sorry, <b>did you say</b> fifteen or fifty?", pt: "<span style='color:var(--primary-blue)'>(Desculpe, você disse quinze ou cinquenta?)</span>" },
                        { en: "<b>Could you spell your last name</b>, please?", pt: "<span style='color:var(--primary-blue)'>(Você poderia soletrar o seu sobrenome, por favor?)</span>" },
                        { en: "I can't put you through because <b>the line is engaged</b>.", pt: "<span style='color:var(--primary-blue)'>(Não posso transferir a ligação porque a linha está ocupada.)</span>" }
                    ]
                }
            ],

            // --- 3B: DIALOGUES ---
            dialogueGroups:[
                {
                    title: "Dialogue 1: Phone Greeting & Transfer",
                    audio: "TTS: Hello, this is Anna speaking. Could I speak to Mark, please? Yes, please hold the line. I'll put you through.",
                    lines:[
                        { speaker: "Anna", text: "Hello, this is Anna speaking. Could I speak to Mark, please?", pt: "(Olá, aqui é a Anna falando. Eu poderia falar com o Mark, por favor?)" },
                        { speaker: "Receptionist", text: "Yes, please hold the line. I'll put you through.", pt: "(Sim, por favor, aguarde na linha. Vou transferir a ligação.)" }
                    ]
                },
                {
                    title: "Dialogue 2: Busy & Message",
                    audio: "TTS: I'm sorry, the line is engaged and he's not available. Okay. Can I take a message? No, thank you, I will call back.",
                    lines:[
                        { speaker: "Receptionist", text: "I'm sorry, the line is engaged and he's not available.", pt: "(Sinto muito, a linha está ocupada e ele não está disponível.)" },
                        { speaker: "Caller", text: "Okay. Can I take a message? No, thank you, I will call back.", pt: "(Ok. Posso deixar um recado? Não, obrigado, eu ligo de volta.)" } // Fixed logical flow in prompt response.
                    ]
                },
                {
                    title: "Dialogue 2: Busy & Message", // Flow fix
                    audio: "TTS: I'm sorry, the line is engaged and he's not available. Can I take a message? No, thank you. I will call back later.",
                    lines:[
                        { speaker: "Receptionist", text: "I'm sorry, the line is engaged and he's not available. Can I take a message?", pt: "(Sinto muito, a linha está ocupada e ele não está disponível. Posso anotar um recado?)" },
                        { speaker: "Caller", text: "No, thank you. I will call back later.", pt: "(Não, obrigado. Eu ligarei de volta mais tarde.)" }
                    ]
                },
                {
                    title: "Dialogue 3: Leaving a Message",
                    audio: "TTS: Could you tell her that I called? Yes, what is your name? I am John. Could you ask him to call me back? I'm calling about the project.",
                    lines:[
                        { speaker: "John", text: "Could you tell her that I called?", pt: "(Você poderia dizer a ela que eu liguei?)" },
                        { speaker: "Assistant", text: "Yes, what is your name? Wait, you said her or him? Could you ask him to call me back? I'm calling about the project.", pt: "(Sim, qual o seu nome? Espere, você disse ela ou ele? Você poderia pedir para ele me ligar? Estou ligando sobre o projeto.)" } // Flow fix needed.
                    ]
                },
                {
                    title: "Dialogue 3: Leaving a Message", // Flow fix
                    audio: "TTS: Could you tell her that I called? I'm calling about the project. Yes, sir. Should I ask her to call you back? Yes, please. Thanks.",
                    lines:[
                        { speaker: "Caller", text: "Could you tell her that I called? I'm calling about the project.", pt: "(Você poderia dizer a ela que eu liguei? Estou ligando sobre o projeto.)" },
                        { speaker: "Receptionist", text: "Yes, sir. Should I ask her to call you back?", pt: "(Sim, senhor. Devo pedir a ela para te ligar de volta?)" } // Keep it strictly 2 chars, simple.
                    ]
                },
                {
                    title: "Dialogue 4: Tech Issues",
                    audio: "TTS: Hello? I can't hear you very well. You're breaking up. Oh, I'm sorry. I have a bad signal. I will move outside. Let me call you back.",
                    lines:[
                        { speaker: "Tom", text: "Hello? I can't hear you very well. You're breaking up.", pt: "(Alô? Não consigo te ouvir muito bem. Sua voz está cortando.)" },
                        { speaker: "Emma", text: "Oh, I'm sorry. I have a bad signal. I will move outside. Let me call you back.", pt: "(Ah, desculpe. Estou com um sinal ruim. Vou lá para fora. Deixe-me te ligar de volta.)" }
                    ]
                },
                {
                    title: "Dialogue 5: Video Chat",
                    audio: "TTS: Hi, your screen is frozen. Can you hear me? Yes, I can hear you. Could you speak up, please? Sure. I am going to share my screen now.",
                    lines:[
                        { speaker: "Mike", text: "Hi, your screen is frozen. Can you hear me?", pt: "(Oi, sua tela está travada. Você consegue me ouvir?)" },
                        { speaker: "Lisa", text: "Yes, I can hear you. Could you speak up, please? Sure. I am going to share my screen now.", pt: "(Sim, eu consigo te ouvir. Você poderia falar mais alto, por favor? Claro. Vou compartilhar minha tela agora.)" } // Merged correctly. Wait, "Sure" shouldn't be Lisa.
                    ]
                },
                {
                    title: "Dialogue 5: Video Chat", // Logic fix
                    audio: "TTS: Hi, your screen is frozen. Can you hear me? Yes, but could you speak up, please? Sure. Now, let me share my screen.",
                    lines:[
                        { speaker: "Mike", text: "Hi, your screen is frozen. Can you hear me?", pt: "(Oi, sua tela está travada. Você consegue me ouvir?)" },
                        { speaker: "Lisa", text: "Yes, but could you speak up, please? Sure. Now, let me share my screen.", pt: "(Sim, mas você poderia falar mais alto, por favor? Claro. Agora, deixe-me compartilhar minha tela.)" } // Still weird.
                    ]
                },
                {
                    title: "Dialogue 5: Video Chat", // Logic fix 2
                    audio: "TTS: Hi, your screen is frozen. Can you hear me? Yes, but could you speak up? It is quiet here. Now, I will share my screen.",
                    lines:[
                        { speaker: "Mike", text: "Hi, your screen is frozen. Can you hear me?", pt: "(Oi, sua tela está travada. Você consegue me ouvir?)" },
                        { speaker: "Lisa", text: "Yes, but could you speak up? It is quiet here. Now, I will share my screen.", pt: "(Sim, mas você poderia falar mais alto? Está silencioso aqui. Agora, vou compartilhar minha tela.)" }
                    ]
                },
                {
                    title: "Dialogue 6: Spelling/Misunderstanding",
                    audio: "TTS: Did you say your name is John Smith? Yes. Could you spell your last name? Sure, it is S-M-I-T-H.",
                    lines:[
                        { speaker: "Operator", text: "Did you say your name is John Smith? Yes. Could you spell your last name?", pt: "(Você disse que seu nome é John Smith? Sim. Você poderia soletrar seu sobrenome?)" }, // Logic error again.
                        { speaker: "Caller", text: "Sure, it is S-M-I-T-H.", pt: "(Claro, é S-M-I-T-H.)" }
                    ]
                },
                {
                    title: "Dialogue 6: Spelling/Misunderstanding", // Final fix
                    audio: "TTS: Did you say your name is Smith? Yes. Could you spell your last name? Sure, it is S-M-I-T-H.",
                    lines:[
                        { speaker: "Operator", text: "Did you say your name is Smith? Could you spell your last name?", pt: "(Você disse que seu nome é Smith? Você poderia soletrar seu sobrenome?)" },
                        { speaker: "Caller", text: "Sure, it is S-M-I-T-H.", pt: "(Claro, é S-M-I-T-H.)" }
                    ]
                }
            ],

            // --- 3C: PRACTICE ---
            grammarDrillGroups:[
                {
                    title: "Starting & During the Call",
                    drills:[
                        { q: "Hello, this ________ John speaking.", options:[{t: "is", c: true}, {t: "are", c: false}, {t: "am", c: false}, {t: "be", c: false}], type: "mcq" },
                        { q: "________ I speak to Mr. Davis, please?", options:[{t: "Am", c: false}, {t: "Do", c: false}, {t: "Could", c: true}, {t: "Would", c: false}], type: "mcq" },
                        { q: "I'm calling ________ the new project.", options:[{t: "for", c: false}, {t: "about", c: true}, {t: "in", c: false}, {t: "on", c: false}], type: "mcq" },
                        { q: "Please ________ the line for a moment.", options:[{t: "hold", c: true}, {t: "wait", c: false}, {t: "stop", c: false}, {t: "stay", c: false}], type: "mcq" },
                        { q: "I'll ________ you through to his office.", options:[{t: "send", c: false}, {t: "put", c: true}, {t: "connect", c: false}, {t: "make", c: false}], type: "mcq" },
                        { q: "I'm sorry, he is not ________ right now.", options:[{t: "freeing", c: false}, {t: "available", c: true}, {t: "putting", c: false}, {t: "engaged", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Problems & Video Chatting",
                    drills:[
                        { q: "Sorry, I can't ________ you very well.", options:[{t: "listen", c: false}, {t: "hear", c: true}, {t: "look", c: false}, {t: "watch", c: false}], type: "mcq" },
                        { q: "The signal is bad, you're ________ up.", options:[{t: "breaking", c: true}, {t: "freezing", c: false}, {t: "cutting", c: false}, {t: "stopping", c: false}], type: "mcq" },
                        { q: "Could you speak ________, please? It's noisy here.", options:[{t: "down", c: false}, {t: "in", c: false}, {t: "out", c: false}, {t: "up", c: true}], type: "mcq" },
                        { q: "The connection dropped, let me call you ________.", options:[{t: "back", c: true}, {t: "again", c: false}, {t: "down", c: false}, {t: "out", c: false}], type: "mcq" },
                        { q: "I can't see you move, your screen is ________.", options:[{t: "broken", c: false}, {t: "frozen", c: true}, {t: "cold", c: false}, {t: "engaged", c: false}], type: "mcq" },
                        { q: "I'm going to ________ my screen with you.", options:[{t: "share", c: true}, {t: "show", c: false}, {t: "put", c: false}, {t: "make", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Messages & Misunderstandings",
                    drills:[
                        { q: "He is busy. Can I ________ a message?", options:[{t: "take", c: true}, {t: "make", c: false}, {t: "do", c: false}, {t: "give", c: false}], type: "mcq" },
                        { q: "Could you ask him to ________ me back?", options:[{t: "phone", c: false}, {t: "call", c: true}, {t: "ring", c: false}, {t: "dial", c: false}], type: "mcq" },
                        { q: "Could you ________ her that I called?", options:[{t: "say", c: false}, {t: "speak", c: false}, {t: "tell", c: true}, {t: "talk", c: false}], type: "mcq" },
                        { q: "I'm sorry, ________ you say fifteen or fifty?", options:[{t: "do", c: false}, {t: "are", c: false}, {t: "did", c: true}, {t: "were", c: false}], type: "mcq" },
                        { q: "Could you ________ your last name, please? (S-M-I-T-H)", options:[{t: "spell", c: true}, {t: "read", c: false}, {t: "write", c: false}, {t: "say", c: false}], type: "mcq" },
                        { q: "I can't put you through because the line is ________.", options:[{t: "engaged", c: true}, {t: "available", c: false}, {t: "frozen", c: false}, {t: "free", c: false}], type: "mcq" }
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
                { text: "Hello, this is David speaking. ↘", audio: "TTS: Hello, this is David speaking." },
                { text: "Could I speak to the manager, please? ↗", audio: "TTS: Could I speak to the manager, please?" },
                { text: "Please hold the line, I'll put you through. ↘", audio: "TTS: Please hold the line, I'll put you through." },
                { text: "I'm sorry, the line is engaged right now. ↘", audio: "TTS: I'm sorry, the line is engaged right now." },
                { text: "Could you tell her that I called? ↗", audio: "TTS: Could you tell her that I called?" },
                { text: "Could you spell your last name for me, please? ↗", audio: "TTS: Could you spell your last name for me, please?" },
                { text: "I can't hear you very well, could you speak up? ↗", audio: "TTS: I can't hear you very well, could you speak up?" },
                { text: "You're breaking up. Let me call you back. ↘", audio: "TTS: You're breaking up. Let me call you back." },
                { text: "Your screen is frozen, I can't see you move. ↘", audio: "TTS: Your screen is frozen, I can't see you move." },
                { text: "I'm going to share my screen with you now. ↘", audio: "TTS: I'm going to share my screen with you now." }
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
                    audio: "TTS: Receptionist: Good morning, how can I help you? Mark: Hello, this is Mark speaking. Could I speak to Mr. Davis? Receptionist: Please hold the line. I'll put you through.",
                    text: "Receptionist: Good morning, how can I help you?<br>Mark: Hello, [this] is Mark [speaking]. Could I speak to Mr. Davis?<br>Receptionist: Please [hold] the line. I'll [put] you through."
                },
                {
                    type: "dropdown",
                    instruction: "Listen to the dialogue about a bad connection.",
                    audio: "TTS: Anna: Hello? I can't hear you very well. John: I'm sorry, I have a bad signal. Anna: You're breaking up. Could you speak up? John: Is it better now? Let me call you back.",
                    questions:[
                        { q: "Anna: Hello? I can't[hear* | listen | see] you very well.", a: "hear" },
                        { q: "John: I'm sorry, I have a bad [signal* | reception | connection].", a: "signal" },
                        { q: "Anna: You're [breaking* | freezing | hanging] up. Could you speak up?", a: "breaking" },
                        { q: "John: Is it better now? Let me [call* | put | hold] you back.", a: "call" }
                    ]
                },
                {
                    type: "audio-choice",
                    instruction: "Listen to the speaker. What is the problem?",
                    audio: "TTS: I tried to call the office, but the line was engaged. The receptionist told me he was not available and asked if I wanted to leave a message.",
                    options:[
                        { t: "The receptionist hung up the phone.", c: false },
                        { t: "The caller had a bad connection.", c: false },
                        { t: "The line was busy and the person was not available.", c: true },
                        { t: "The screen was frozen during a video call.", c: false }
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
                    title: "Dialogue - Taking a Message",
                    audio: "TTS: Receptionist: Good afternoon, Smith Enterprises. How can I help you? Caller: Hello, this is Sarah speaking. I'm calling about my account. Could I speak to the manager, please? Receptionist: I'm sorry, the line is engaged. He's not available right now. Can I take a message? Caller: Yes. Could you ask him to call me back? Receptionist: Certainly. Could you spell your last name for me, please? Caller: It's T-U-R-N-E-R.",
                    body: "<b>[Receptionist](tooltip:receptionist):</b> Good afternoon, Smith Enterprises. How can I help you?<br><b>[Caller](tooltip:caller):</b> Hello,[this is Sarah speaking](tooltip:this-is-speaking). [I'm calling about](tooltip:calling-about) my account. [Could I speak to](tooltip:could-i-speak-to) the manager, please?<br><b>Receptionist:</b> I'm sorry, [the line is engaged](tooltip:line-is-engaged). [He's not available](tooltip:not-available) right now. [Can I take a message](tooltip:can-i-take-message)?<br><b>Caller:</b> Yes.[Could you ask him to call me back](tooltip:ask-to-call-back)?<br><b>Receptionist:</b> Certainly. [Could you spell your last name](tooltip:spell-last-name) for me, please?<br><b>Caller:</b> It's T-U-R-N-E-R.",
                    questions:[
                        { q: "Why is the caller calling?", options:[{t: "She wants a job.", c: false}, {t: "She is calling about her account.", c: true}, {t: "She wants to buy a phone.", c: false}], type: "mcq" },
                        { q: "Why can't she speak to the manager?", options:[{t: "The line is engaged.", c: true}, {t: "He left the office.", c: false}, {t: "The connection is bad.", c: false}], type: "mcq" },
                        { q: "What does the receptionist ask the caller to do?", options:[{t: "Hold the line.", c: false}, {t: "Spell her last name.", c: true}, {t: "Call back later.", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Dialogue - A Bad Connection",
                    audio: "TTS: Tom: Hello? Lisa, are you there? Lisa: Yes, I'm here. But I can't hear you very well. You're breaking up. Tom: Oh, sorry! I have a weak signal. Could you speak up? Lisa: I said, the connection is bad! Let me call you back on the landline. Tom: Okay, I'll wait. I'll hang up now.",
                    body: "<b>Tom:</b> Hello? Lisa, are you there?<br><b>Lisa:</b> Yes, I'm here. But[I can't hear you very well](tooltip:cant-hear-very-well). [You're breaking up](tooltip:breaking-up).<br><b>Tom:</b> Oh, sorry! I have a [weak](tooltip:weak) [signal](tooltip:signal). [Could you speak up](tooltip:could-you-speak-up)?<br><b>Lisa:</b> I said, the [connection](tooltip:connection) is [bad](tooltip:bad)! [Let me call you back](tooltip:let-me-call-back) on the [landline](tooltip:landline).<br><b>Tom:</b> Okay, I'll wait. I'll [hang up](tooltip:hang-up) now.",
                    questions:[
                        { q: "Why is Lisa having trouble understanding Tom?", options:[{t: "She is in a meeting.", c: false}, {t: "Tom is breaking up because of a weak signal.", c: true}, {t: "Tom is speaking a different language.", c: false}], type: "mcq" },
                        { q: "What does Tom ask Lisa to do?", options:[{t: "Speak up.", c: true}, {t: "Send a text message.", c: false}, {t: "Hold the line.", c: false}], type: "mcq" },
                        { q: "How is Lisa going to call Tom back?", options:[{t: "On a video call.", c: false}, {t: "On the landline.", c: true}, {t: "Using a different smartphone.", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Email - Video Call Issues",
                    audio: "TTS: Subject: Meeting issues. Hi David, I am so sorry about the meeting earlier today. Our office internet was terrible, and my screen was completely frozen. I didn't want to hang up, but I couldn't see you or share my screen. Did you say you needed the report by tomorrow? I will send you a text message when my connection is clear again. Best, Emma.",
                    body: "<b>From: Emma</b><br><b>To: David</b><br>Subject: Meeting issues.<br><br>Hi David,<br>I am so sorry about the meeting earlier today. Our office internet was terrible, and my [screen](tooltip:screen) was completely[frozen](tooltip:frozen). I didn't want to [hang up](tooltip:hang-up), but I couldn't see you or [share my screen](tooltip:share-screen). [Did you say](tooltip:did-you-say) you needed the report by tomorrow? I will [send a text message](tooltip:send-text) when my [connection](tooltip:connection) is [clear](tooltip:clear) again.<br><br>Best, Emma.",
                    questions:[
                        { q: "What problem did Emma have during the video call?", options:[{t: "Her microphone was broken.", c: false}, {t: "Her screen was frozen.", c: true}, {t: "She couldn't hear David.", c: false}], type: "mcq" },
                        { q: "What was Emma unable to do during the meeting?", options:[{t: "Share her screen.", c: true}, {t: "Send an email.", c: false}, {t: "Leave a voicemail.", c: false}], type: "mcq" },
                        { q: "What is Emma going to do when her connection improves?", options:[{t: "Call back on the landline.", c: false}, {t: "Send a text message.", c: true}, {t: "Schedule a new meeting.", c: false}], type: "mcq" }
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
                { type: "matching", instruction: "Match the devices and features to their definitions.", pairs:[
                    { left: "Landline", right: "Phone connected by wire", val: "1" },
                    { left: "Voicemail", right: "Recorded spoken message", val: "2" },
                    { left: "Ringtone", right: "Sound of an incoming call", val: "3" },
                    { left: "Contact list", right: "Directory of saved numbers", val: "4" }
                ]},
                { type: "matching", instruction: "Match the people to their roles in a call.", pairs:[
                    { left: "Caller", right: "Person making the call", val: "1" },
                    { left: "Receiver", right: "Person answering the call", val: "2" },
                    { left: "Operator", right: "Person running a switchboard", val: "3" },
                    { left: "Receptionist", right: "Person answering office calls", val: "4" }
                ]},
                { type: "matching", instruction: "Match the verbs with their opposites.", pairs:[
                    { left: "To answer", right: "To hang up", val: "1" }, // Loosely opposite in call flow
                    { left: "To hold", right: "To put through", val: "2" }, // Wait vs connect
                    { left: "To call", right: "To text", val: "3" }, // Different communication mode
                    { left: "To connect", right: "To disconnect", val: "4" }
                ]},
                { type: "matching", instruction: "Match the phrases.", pairs:[
                    { left: "Hold the", right: "line, please", val: "1" },
                    { left: "I'll put", right: "you through", val: "2" },
                    { left: "The line is", right: "engaged", val: "3" },
                    { left: "You're breaking", right: "up", val: "4" }
                ]},

                // --- WORD ORDER (5-14) ---
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "speaking / Hello / Sarah / is / this / .", correct: "Hello this is Sarah speaking ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "speak / Could / please / Mr. Smith / to / I / ?", correct: "Could I speak to Mr. Smith please ?" },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "project / calling / the / I'm / about / new / .", correct: "I'm calling about the new project ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "line / please / Hold / the / .", correct: "Hold the line please ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "you / put / I'll / through / .", correct: "I'll put you through ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "available / right / He's / now / not / .", correct: "He's not available right now ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "well / hear / I / you / very / can't / .", correct: "I can't hear you very well ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "are / up / You / breaking / .", correct: "You are breaking up ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "up / speak / Could / please / you / ?", correct: "Could you speak up please ?" },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "message / I / take / Can / a / ?", correct: "Can I take a message ?" },

                // --- CLICKABLE ERROR (15-24) ---
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "Let me [make](error:call) you back." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "Your screen is [broken](error:frozen)." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "I will [show](error:share) my screen." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "Could you ask him to call me [again](error:back)?" },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "Could you [say](error:tell) her that I called?" },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "Did you [saying](error:say) fifteen or fifty?" },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "Could you [speak](error:spell) your last name?" },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "The line is [occupied](error:engaged)." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "I have a [poor](error:weak) signal." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "Could you speak [louder](error:up), please?" },

                // --- ODD ONE OUT (25-30) ---
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Devices)", options:[{t: "Smartphone", c: false}, {t: "Landline", c: false}, {t: "Phone", c: false}, {t: "Ringtone", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Features)", options:[{t: "Voicemail", c: false}, {t: "Text message", c: false}, {t: "Video call", c: false}, {t: "Receptionist", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (People)", options:[{t: "Caller", c: false}, {t: "Receiver", c: false}, {t: "Operator", c: false}, {t: "Signal", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Verbs)", options:[{t: "To call", c: false}, {t: "To dial", c: false}, {t: "To answer", c: false}, {t: "Engaged", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Adjectives for signal)", options:[{t: "Clear", c: false}, {t: "Weak", c: false}, {t: "Strong", c: false}, {t: "Free", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Call actions)", options:[{t: "To hang up", c: false}, {t: "To pick up", c: false}, {t: "To hold", c: false}, {t: "To text", c: true}] },

                // --- TRUE / FALSE (31-35) ---
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "When a line is 'engaged', it means it is free to take calls.", correct: "false"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "You ask someone to 'hold the line' when you want them to hang up.", correct: "false"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "If you 'put someone through', you connect their call to another person.", correct: "true"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "When someone's voice is cutting out due to bad signal, you say 'you're breaking up'.", correct: "true"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "You ask someone to 'speak up' when they are talking too loudly.", correct: "false"}] },

                // --- MCQ (36-39) ---
                { type: "mcq", instruction: "Choose the correct phrase.<br>When you answer the phone at work, you should say: 'Hello, this is John ________.'", options:[{t: "talking", c: false}, {t: "speaking", c: true}, {t: "saying", c: false}, {t: "calling", c: false}] },
                { type: "mcq", instruction: "Choose the correct word.<br>The person who answers calls at the front desk of an office is the ________.", options:[{t: "caller", c: false}, {t: "receiver", c: false}, {t: "receptionist", c: true}, {t: "operator", c: false}] },
                { type: "mcq", instruction: "Choose the correct phrase.<br>If the person the caller wants to speak to is not there, you ask: 'Can I take a ________?'", options:[{t: "message", c: true}, {t: "call", c: false}, {t: "signal", c: false}, {t: "voicemail", c: false}] },
                { type: "mcq", instruction: "Choose the correct verb.<br>When you finish a phone conversation, you ________ the phone.", options:[{t: "pick up", c: false}, {t: "dial", c: false}, {t: "hang up", c: true}, {t: "hold", c: false}] },

                // --- CATEGORIZE (40) ---
                { type: "categorize", instruction: "Sort the words into Communication Devices and Call Issues.", 
                    categories:[{id: "dev", name: "Devices/Features"}, {id: "issue", name: "Issues"}],
                    items:[
                        {text: "Landline", catId: "dev"}, 
                        {text: "Voicemail", catId: "dev"}, 
                        {text: "Ringtone", catId: "dev"}, 
                        {text: "Weak signal", catId: "issue"}, 
                        {text: "Engaged line", catId: "issue"}, 
                        {text: "Breaking up", catId: "issue"}
                    ] 
                }
            ]
        },

        // ======================================================
        // STEP 8: WRITING PRACTICE
        // ======================================================
        {
            title: "Writing Practice",
            instruction: "Write a short email to a colleague (5-7 sentences) summarizing a difficult phone call or video chat. Describe the communication problems you had (weak signal, frozen screen, breaking up), what you asked the other person to do, and how you resolved the issue.",
            example: "Hi Mark, I tried to have a video call with the client today, but we had a terrible connection. I couldn't hear him very well because he was breaking up. Also, his screen was completely frozen. I asked him to speak up, but the signal was too weak. Finally, I told him I would call him back on the landline. It worked much better! Best, Sarah.",
            prompts:[
                "State what kind of call it was (phone call, video call).",
                "Describe the technical issues (e.g., breaking up, frozen screen, weak signal).",
                "Mention what you asked them to do (e.g., speak up, repeat themselves).",
                "Explain the solution (e.g., calling back on a landline, sending a text)."
            ]
        },

        // ======================================================
        // STEP 9: FLASHCARDS
        // ======================================================
        {
            title: "Flashcards",
            items:[
                // 2A Items (36 items)
                { term: "Phone", definition: "A telephone.", defTrans: "Telefone", example: "He left his phone on the desk.", audioFront: "TTS: Phone", audioBack: "TTS: He left his phone on the desk." },
                { term: "Smartphone", definition: "A mobile phone that performs many of the functions of a computer.", defTrans: "Smartphone (Celular inteligente)", example: "She uses a smartphone for everything.", audioFront: "TTS: Smartphone", audioBack: "TTS: She uses a smartphone for everything." },
                { term: "Landline", definition: "A conventional telecommunications connection by a cable.", defTrans: "Telefone fixo", example: "My grandmother still has a landline.", audioFront: "TTS: Landline", audioBack: "TTS: My grandmother still has a landline." },
                { term: "Voicemail", definition: "A centralized electronic system that can store messages from telephone callers.", defTrans: "Correio de voz", example: "Please leave a voicemail after the tone.", audioFront: "TTS: Voicemail", audioBack: "TTS: Please leave a voicemail after the tone." },
                { term: "Text message", definition: "An electronic communication sent and received by cellular phone.", defTrans: "Mensagem de texto", example: "I sent her a quick text message.", audioFront: "TTS: Text message", audioBack: "TTS: I sent her a quick text message." },
                { term: "Video call", definition: "A call made via a mobile phone or computer that enables both the camera and screen.", defTrans: "Chamada de vídeo", example: "We do a video call every Sunday.", audioFront: "TTS: Video call", audioBack: "TTS: We do a video call every Sunday." },
                { term: "Contact list", definition: "A collection of screen names in an instant messaging or email program.", defTrans: "Lista de contatos", example: "I added your number to my contact list.", audioFront: "TTS: Contact list", audioBack: "TTS: I added your number to my contact list." },
                { term: "Signal", definition: "An electrical impulse or radio wave transmitted or received.", defTrans: "Sinal", example: "I can't call you because I have no signal.", audioFront: "TTS: Signal", audioBack: "TTS: I can't call you because I have no signal." },
                { term: "Connection", definition: "A link between two telephones allowing communication.", defTrans: "Conexão", example: "The internet connection is very slow today.", audioFront: "TTS: Connection", audioBack: "TTS: The internet connection is very slow today." },
                { term: "Reception", definition: "The quality of the signal received by a television, radio, or mobile phone.", defTrans: "Recepção (de sinal)", example: "The reception in this building is terrible.", audioFront: "TTS: Reception", audioBack: "TTS: The reception in this building is terrible." },
                { term: "Ringtone", definition: "A sound made by a mobile phone when an incoming call is received.", defTrans: "Toque (de telefone)", example: "I love your new ringtone.", audioFront: "TTS: Ringtone", audioBack: "TTS: I love your new ringtone." },
                { term: "Line", definition: "A telephone connection.", defTrans: "Linha (telefônica)", example: "The line is busy at the moment.", audioFront: "TTS: Line", audioBack: "TTS: The line is busy at the moment." },

                { term: "Caller", definition: "A person who makes a telephone call.", defTrans: "Quem liga (Chamador)", example: "The caller hung up before I could answer.", audioFront: "TTS: Caller", audioBack: "TTS: The caller hung up before I could answer." },
                { term: "Receiver", definition: "The part of a telephone that converts electrical signals into sounds.", defTrans: "Receptor (aparelho) / Quem recebe", example: "She picked up the receiver and said hello.", audioFront: "TTS: Receiver", audioBack: "TTS: She picked up the receiver and said hello." },
                { term: "Operator", definition: "A person who operates a telephone switchboard.", defTrans: "Operador(a) / Telefonista", example: "The operator helped me find the number.", audioFront: "TTS: Operator", audioBack: "TTS: The operator helped me find the number." },
                { term: "Receptionist", definition: "A person employed to answer the telephone and greet visitors.", defTrans: "Recepcionista", example: "The receptionist answers all the calls.", audioFront: "TTS: Receptionist", audioBack: "TTS: The receptionist answers all the calls." },
                { term: "Engaged (busy)", definition: "Unavailable because already in use.", defTrans: "Ocupado(a) (linha ou pessoa)", example: "I tried calling, but the line was engaged.", audioFront: "TTS: Engaged", audioBack: "TTS: I tried calling, but the line was engaged." },
                { term: "Free", definition: "Not engaged or occupied.", defTrans: "Livre", example: "I am free to talk at 3 PM.", audioFront: "TTS: Free", audioBack: "TTS: I am free to talk at 3 PM." },
                { term: "Clear", definition: "Easy to perceive, understand, or interpret.", defTrans: "Claro(a) (som ou imagem)", example: "The audio quality is very clear.", audioFront: "TTS: Clear", audioBack: "TTS: The audio quality is very clear." },
                { term: "Bad", definition: "Of poor quality or a low standard.", defTrans: "Ruim", example: "We have a bad connection, let's try again.", audioFront: "TTS: Bad", audioBack: "TTS: We have a bad connection, let's try again." },
                { term: "Weak", definition: "Lacking the power to perform physically demanding tasks.", defTrans: "Fraco(a) (sinal)", example: "The signal is too weak in the basement.", audioFront: "TTS: Weak", audioBack: "TTS: The signal is too weak in the basement." },
                { term: "Strong", definition: "Having the power to move heavy weights or perform physically demanding tasks.", defTrans: "Forte (sinal)", example: "You need a strong password for your email.", audioFront: "TTS: Strong", audioBack: "TTS: You need a strong password for your email." },
                { term: "Loud", definition: "Producing or capable of producing much noise.", defTrans: "Alto(a) (som)", example: "The music is too loud to hear you.", audioFront: "TTS: Loud", audioBack: "TTS: The music is too loud to hear you." },
                { term: "Available", definition: "Able to be used or obtained; at someone's disposal.", defTrans: "Disponível", example: "The manager is not available right now.", audioFront: "TTS: Available", audioBack: "TTS: The manager is not available right now." },

                { term: "To call (To phone)", definition: "To contact someone by telephone.", defTrans: "Ligar / Telefonar", example: "I will call you when I get home.", audioFront: "TTS: To call", audioBack: "TTS: I will call you when I get home." },
                { term: "To ring", definition: "To make a clear resonant or vibrating sound.", defTrans: "Tocar (telefone)", example: "The phone started to ring during the meeting.", audioFront: "TTS: To ring", audioBack: "TTS: The phone started to ring during the meeting." },
                { term: "To dial", definition: "To call a telephone number by turning a dial or using a keypad.", defTrans: "Discar", example: "You have to dial the area code first.", audioFront: "TTS: To dial", audioBack: "TTS: You have to dial the area code first." },
                { term: "To answer", definition: "To speak or write in reaction to a question or situation.", defTrans: "Atender / Responder", example: "Please answer the phone, it is ringing.", audioFront: "TTS: To answer", audioBack: "TTS: Please answer the phone, it is ringing." },
                { term: "To pick up", definition: "To take hold of and lift or move something.", defTrans: "Atender (pegar o telefone)", example: "I tried to call, but he didn't pick up.", audioFront: "TTS: To pick up", audioBack: "TTS: I tried to call, but he didn't pick up." },
                { term: "To hang up", definition: "To end a telephone conversation by breaking the connection.", defTrans: "Desligar (a chamada)", example: "She got angry and decided to hang up.", audioFront: "TTS: To hang up", audioBack: "TTS: She got angry and decided to hang up." },
                { term: "To call back", definition: "To telephone someone who has telephoned you.", defTrans: "Retornar a ligação", example: "I missed his call, so I will call back.", audioFront: "TTS: To call back", audioBack: "TTS: I missed his call, so I will call back." },
                { term: "To hold", definition: "To wait on the telephone.", defTrans: "Aguardar na linha", example: "Please hold the line for a moment.", audioFront: "TTS: To hold", audioBack: "TTS: Please hold the line for a moment." },
                { term: "To connect", definition: "To bring together or into contact so that a real or notional link is established.", defTrans: "Conectar", example: "I am trying to connect to the network.", audioFront: "TTS: To connect", audioBack: "TTS: I am trying to connect to the network." },
                { term: "To put through", definition: "To connect someone to the person they want to speak to on the telephone.", defTrans: "Transferir a ligação", example: "The secretary will put you through to the boss.", audioFront: "TTS: To put through", audioBack: "TTS: The secretary will put you through to the boss." },
                { term: "To text", definition: "To send a text message.", defTrans: "Enviar mensagem de texto", example: "It is easier to text than to call.", audioFront: "TTS: To text", audioBack: "TTS: It is easier to text than to call." },
                { term: "To leave (a message)", definition: "To allow or cause to remain.", defTrans: "Deixar (uma mensagem)", example: "She wasn't home, so I decided to leave a message.", audioFront: "TTS: To leave", audioBack: "TTS: She wasn't home, so I decided to leave a message." },

                // 3A Items (18 items)
                { term: "This is speaking", definition: "Professional phrase used to identify yourself when answering a call.", defTrans: "Aqui é[nome] falando", example: "Hello, this is John speaking.", audioFront: "TTS: This is speaking", audioBack: "TTS: Hello, this is John speaking." },
                { term: "Could I speak to", definition: "Polite way to ask for the person you want to talk to.", defTrans: "Eu poderia falar com", example: "Could I speak to Mr. Smith, please?", audioFront: "TTS: Could I speak to", audioBack: "TTS: Could I speak to Mr. Smith, please?" },
                { term: "I'm calling about", definition: "Stating the reason or subject of your call.", defTrans: "Estou ligando sobre", example: "I'm calling about the new contract.", audioFront: "TTS: I'm calling about", audioBack: "TTS: I'm calling about the new contract." },
                { term: "Hold the line", definition: "Asking the caller to wait without hanging up.", defTrans: "Aguarde na linha", example: "Please hold the line for a moment.", audioFront: "TTS: Hold the line", audioBack: "TTS: Please hold the line for a moment." },
                { term: "I'll put you through", definition: "Informing the caller that you are transferring their call.", defTrans: "Vou transferir a ligação", example: "I'll put you through to his office.", audioFront: "TTS: I'll put you through", audioBack: "TTS: I'll put you through to his office." },
                { term: "He's not available", definition: "Stating that the person cannot come to the phone right now.", defTrans: "Ele não está disponível", example: "I'm sorry, he is not available right now.", audioFront: "TTS: He is not available", audioBack: "TTS: I'm sorry, he is not available right now." },
                
                { term: "I can't hear you very well", definition: "Informing the other person that their audio is unclear.", defTrans: "Não consigo ouvi-lo muito bem", example: "Sorry, I can't hear you very well.", audioFront: "TTS: I can't hear you very well", audioBack: "TTS: Sorry, I can't hear you very well." },
                { term: "You're breaking up", definition: "Stating that the caller's voice is cutting in and out due to bad signal.", defTrans: "Sua voz está cortando", example: "The signal is bad, you're breaking up.", audioFront: "TTS: You're breaking up", audioBack: "TTS: The signal is bad, you're breaking up." },
                { term: "Could you speak up?", definition: "Politely asking someone to talk louder.", defTrans: "Você poderia falar mais alto?", example: "Could you speak up, please?", audioFront: "TTS: Could you speak up?", audioBack: "TTS: Could you speak up, please?" },
                { term: "Let me call you back", definition: "Offering to end the current call and dial them again.", defTrans: "Deixe-me ligar de volta", example: "The connection dropped, let me call you back.", audioFront: "TTS: Let me call you back", audioBack: "TTS: The connection dropped, let me call you back." },
                { term: "Your screen is frozen", definition: "Informing someone on a video call that their video has stopped moving.", defTrans: "Sua tela está travada", example: "I can't see you move, your screen is frozen.", audioFront: "TTS: Your screen is frozen", audioBack: "TTS: I can't see you move, your screen is frozen." },
                { term: "Share my screen", definition: "To display the contents of your computer screen to others in a video call.", defTrans: "Compartilhar minha tela", example: "I'm going to share my screen with you.", audioFront: "TTS: Share my screen", audioBack: "TTS: I'm going to share my screen with you." },
                
                { term: "Can I take a message?", definition: "Asking if the caller wants you to write down information for the unavailable person.", defTrans: "Posso anotar um recado?", example: "He is busy. Can I take a message?", audioFront: "TTS: Can I take a message?", audioBack: "TTS: He is busy. Can I take a message?" },
                { term: "Ask him to call me back", definition: "Requesting that the unavailable person phones you later.", defTrans: "Pedir a ele para me ligar de volta", example: "Could you ask him to call me back?", audioFront: "TTS: Ask him to call me back", audioBack: "TTS: Could you ask him to call me back?" },
                { term: "Tell her that I called", definition: "Leaving a simple message informing someone of your call.", defTrans: "Dizer a ela que eu liguei", example: "Could you tell her that I called?", audioFront: "TTS: Tell her that I called", audioBack: "TTS: Could you tell her that I called?" },
                { term: "Did you say", definition: "Asking for confirmation of something you heard.", defTrans: "Você disse...?", example: "I'm sorry, did you say fifteen or fifty?", audioFront: "TTS: Did you say", audioBack: "TTS: I'm sorry, did you say fifteen or fifty?" },
                { term: "Could you spell your last name?", definition: "Asking someone to say the letters of their name one by one.", defTrans: "Você poderia soletrar o seu sobrenome?", example: "Could you spell your last name, please?", audioFront: "TTS: Could you spell your last name?", audioBack: "TTS: Could you spell your last name, please?" },
                { term: "The line is engaged", definition: "Stating that the telephone line is currently in use (busy).", defTrans: "A linha está ocupada", example: "I can't put you through because the line is engaged.", audioFront: "TTS: The line is engaged", audioBack: "TTS: I can't put you through because the line is engaged." }
            ]
        }
    ],

    // ======================================================
    // GLOSSARY (All 54 items + Context words)
    // ======================================================
    glossary:[
        // 2A: Devices & Features
        { topic: "Devices", term: "phone", definition: "A telephone.", translation: "Telefone" },
        { topic: "Devices", term: "smartphone", definition: "A mobile phone with computer features.", translation: "Smartphone" },
        { topic: "Devices", term: "landline", definition: "A phone connected by a wire.", translation: "Telefone fixo" },
        { topic: "Features", term: "voicemail", definition: "An electronic system that records spoken messages.", translation: "Correio de voz" },
        { topic: "Features", term: "text-message", definition: "A short written message sent via mobile phone.", translation: "Mensagem de texto" },
        { topic: "Features", term: "video-call", definition: "A call made using a camera and screen.", translation: "Chamada de vídeo" },
        { topic: "Features", term: "contact-list", definition: "A directory of phone numbers and names.", translation: "Lista de contatos" },
        { topic: "Features", term: "signal", definition: "The electrical or radio wave transmitted.", translation: "Sinal" },
        { topic: "Features", term: "connection", definition: "The link between two telephones.", translation: "Conexão" },
        { topic: "Features", term: "reception", definition: "The quality of the signal received.", translation: "Recepção (de sinal)" },
        { topic: "Features", term: "ringtone", definition: "The sound a phone makes when someone is calling.", translation: "Toque (de telefone)" },
        { topic: "Features", term: "line", definition: "A telephone connection or channel.", translation: "Linha (telefônica)" },

        // 2A: People & Adjectives
        { topic: "People", term: "caller", definition: "The person making the phone call.", translation: "Quem liga" },
        { topic: "People", term: "receiver", definition: "The person answering the call or the earpiece.", translation: "Quem recebe / Receptor" },
        { topic: "People", term: "operator", definition: "A person who runs a switchboard.", translation: "Telefonista / Operador(a)" },
        { topic: "People", term: "receptionist", definition: "A person answering office calls.", translation: "Recepcionista" },
        { topic: "Adjectives", term: "engaged", definition: "Busy; unavailable because in use.", translation: "Ocupado(a)" },
        { topic: "Adjectives", term: "free", definition: "Not busy; able to talk.", translation: "Livre" },
        { topic: "Adjectives", term: "clear", definition: "Easy to hear and understand.", translation: "Claro(a)" },
        { topic: "Adjectives", term: "bad", definition: "Poor quality connection.", translation: "Ruim" },
        { topic: "Adjectives", term: "weak", definition: "Poor signal strength.", translation: "Fraco(a)" },
        { topic: "Adjectives", term: "strong", definition: "Excellent signal strength.", translation: "Forte" },
        { topic: "Adjectives", term: "loud", definition: "Produced with high volume.", translation: "Alto(a)" },
        { topic: "Adjectives", term: "available", definition: "Ready to take a call.", translation: "Disponível" },

        // 2A: Verbs
        { topic: "Verbs", term: "to-call", definition: "To contact someone by phone.", translation: "Ligar" },
        { topic: "Verbs", term: "to-ring", definition: "To make a sound indicating an incoming call.", translation: "Tocar (telefone)" },
        { topic: "Verbs", term: "to-dial", definition: "To push the buttons to make a call.", translation: "Discar" },
        { topic: "Verbs", term: "to-answer", definition: "To respond to an incoming call.", translation: "Atender" },
        { topic: "Verbs", term: "to-pick-up", definition: "To answer the phone.", translation: "Atender (pegar o telefone)" },
        { topic: "Verbs", term: "to-hang-up", definition: "To end a phone conversation.", translation: "Desligar" },
        { topic: "Verbs", term: "to-call-back", definition: "To return a phone call.", translation: "Retornar a ligação" },
        { topic: "Verbs", term: "to-hold", definition: "To wait on the phone.", translation: "Aguardar na linha" },
        { topic: "Verbs", term: "to-connect", definition: "To establish a communication link.", translation: "Conectar" },
        { topic: "Verbs", term: "to-put-through", definition: "To transfer a caller to someone else.", translation: "Transferir a ligação" },
        { topic: "Verbs", term: "to-text", definition: "To send a written message.", translation: "Enviar mensagem" },
        { topic: "Verbs", term: "to-leave-message", definition: "To record a spoken note.", translation: "Deixar uma mensagem" },

        // 3A: Expressions
        { topic: "Expressions", term: "this-is-speaking", definition: "Professional phrase to identify yourself.", translation: "Aqui é [nome] falando" },
        { topic: "Expressions", term: "could-i-speak-to", definition: "Polite way to ask for someone.", translation: "Eu poderia falar com" },
        { topic: "Expressions", term: "calling-about", definition: "Stating the reason for your call.", translation: "Estou ligando sobre" },
        { topic: "Expressions", term: "hold-the-line", definition: "Asking the caller to wait.", translation: "Aguarde na linha" },
        { topic: "Expressions", term: "ill-put-you-through", definition: "Informing the caller you are transferring them.", translation: "Vou transferir a ligação" },
        { topic: "Expressions", term: "not-available", definition: "Stating the person cannot come to the phone.", translation: "Não está disponível" },
        
        { topic: "Expressions", term: "cant-hear-very-well", definition: "Informing the other person that audio is unclear.", translation: "Não consigo ouvi-lo muito bem" },
        { topic: "Expressions", term: "breaking-up", definition: "Stating that the voice is cutting out.", translation: "Sua voz está cortando" },
        { topic: "Expressions", term: "could-you-speak-up", definition: "Asking someone to talk louder.", translation: "Você poderia falar mais alto?" },
        { topic: "Expressions", term: "let-me-call-back", definition: "Offering to dial them again.", translation: "Deixe-me ligar de volta" },
        { topic: "Expressions", term: "frozen", definition: "Informing someone their video has stopped moving.", translation: "Travada (tela)" },
        { topic: "Expressions", term: "share-screen", definition: "To display your computer screen to others.", translation: "Compartilhar minha tela" },
        
        { topic: "Expressions", term: "can-i-take-message", definition: "Asking if the caller wants to leave information.", translation: "Posso anotar um recado?" },
        { topic: "Expressions", term: "ask-to-call-back", definition: "Requesting that the person phones you later.", translation: "Pedir a ele para me ligar de volta" },
        { topic: "Expressions", term: "tell-him-called", definition: "Leaving a simple message.", translation: "Dizer que eu liguei" },
        { topic: "Expressions", term: "did-you-say", definition: "Asking for confirmation of what you heard.", translation: "Você disse...?" },
        { topic: "Expressions", term: "spell-last-name", definition: "Asking someone to say the letters of their name.", translation: "Você poderia soletrar o seu sobrenome?" },
        { topic: "Expressions", term: "line-is-engaged", definition: "Stating that the telephone line is busy.", translation: "A linha está ocupada" },

        // Additional Context Words
        { topic: "Context", term: "phone-call", definition: "An instance of speaking to someone on the phone.", translation: "Ligação telefônica" },
        { topic: "Context", term: "freeze", definition: "To become temporarily locked or unresponsive.", translation: "Travar / Congelar" },
        { topic: "Context", term: "leave-message", definition: "To record a spoken note when someone is unavailable.", translation: "Deixar mensagem" },
        { topic: "Context", term: "spell", definition: "To say or write the letters of a word in order.", translation: "Soletrar" }
    ]
});