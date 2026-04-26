/**
 * English Block Assembling - LESSON DATA: Topic 30
 * Topic: Pets and Animals
 * Level: Upper A2 ~ Lower B1
 */

window.initLesson({
    // --- METADATA ---
    lessonId: "lesson-30",
    block: "5",
    topicTitle: "Pets and Animals",

    steps:[
        // ======================================================
        // STEP 0: INTRO & CAN-DO
        // ======================================================
        {
            title: "Intro & Can-Do",
            objectives: "• Describe different types of animals, including [domestic](tooltip:domestic) and [wild](tooltip:wild) species.<br>• Talk about [pet](tooltip:pet) care and daily routines like feeding and walking.<br>• Identify animal body parts such as [paws](tooltip:paw), [claws](tooltip:claw), and [fur](tooltip:fur).<br>• Share personal experiences, preferences, and [fears](tooltip:fear) regarding animals.",
            welcome: "Welcome to Lesson 30! Animals are a fascinating part of our world, whether they live in our homes or in the wild. In this lesson, you will learn the vocabulary to talk about your pets, describe farm and wild animals, and discuss the responsibilities of taking care of them. You will also learn how to express your favorite animal species or explain your allergies. Let's get started!",
            audio: {
                objectives: "TTS: In this lesson, you will learn to: Describe different types of animals, including domestic and wild species. Talk about pet care and daily routines like feeding and walking. Identify animal body parts such as paws, claws, and fur. Share personal experiences, preferences, and fears regarding animals.",
                welcome: "TTS: Welcome to Lesson 30! Animals are a fascinating part of our world, whether they live in our homes or in the wild. In this lesson, you will learn the vocabulary to talk about your pets, describe farm and wild animals, and discuss the responsibilities of taking care of them. You will also learn how to express your favorite animal species or explain your allergies. Let's get started!"
            }
        },

        // ======================================================
        // STEP 1: CONTEXT DIALOGUE
        // ======================================================
        {
            title: "Context Dialogue",
            context: "Emma and Liam are talking about their pets and favorite animals during a coffee break.",
            contextAudio: "TTS: Emma: Do you have any pets, Liam? Liam: Yes, I have a dog. His name is Max. Emma: That's so cute! Is he a purebred? Liam: No, he is a mixed breed. I adopted him from a shelter. He is very loyal. Emma: I love dogs. Taking care of a pet is a big responsibility, though. Liam: It really is. I have to walk the dog every morning and feed him twice a day. What about you? Emma: I have a kitten. She is covered in fur and loves to sleep all day. Liam: Are you a cat person? Emma: Definitely! I'm actually afraid of big dogs. What's your favorite animal in the wild? Liam: I think wolves are amazing. Have you ever seen an animal in the wild? Emma: Only birds and some deer. I would love to see a whale in the ocean one day.",
            dialogue:[
                { speaker: "Emma", text: "[Do you have any pets](tooltip:do-you-have-pets), Liam?" },
                { speaker: "Liam", text: "Yes, I have a [dog](tooltip:dog). His name is Max." },
                { speaker: "Emma", text: "That's so cute! Is he a [purebred](tooltip:purebred)?" },
                { speaker: "Liam", text: "No, he is a [mixed breed](tooltip:mixed-breed). I [adopted](tooltip:to-adopt) him from a shelter. He is very [loyal](tooltip:loyal)." },
                { speaker: "Emma", text: "I love dogs. Taking care of a pet is[a big responsibility](tooltip:big-responsibility), though." },
                { speaker: "Liam", text: "It really is. I have to [walk the dog](tooltip:walk-the-dog) every morning and[feed](tooltip:to-feed) him twice a day. What about you?" },
                { speaker: "Emma", text: "I have a [kitten](tooltip:kitten). She is [covered in fur](tooltip:covered-in-fur) and loves to sleep all day." },
                { speaker: "Liam", text: "Are you [a dog person](tooltip:dog-person) or a cat person?" },
                { speaker: "Emma", text: "Definitely cat! I'm actually[afraid of](tooltip:afraid-of) big dogs. [What's your favorite animal](tooltip:favorite-animal) in the wild?" },
                { speaker: "Liam", text: "I think wolves are amazing. Have you ever [seen an animal in the wild](tooltip:see-animal-wild)?" },
                { speaker: "Emma", text: "Only birds and some deer. I would love to see a [whale](tooltip:whale) in the ocean one day." }
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
                    title: "Types of Animals",
                    audio: "TTS: Dog. Cat. Puppy. Kitten. Rabbit. Cow. Pig. Horse. Lion. Bear. Monkey. Whale.",
                    items:[
                        { term: "Dog", trans: "Cachorro" },
                        { term: "Cat", trans: "Gato" },
                        { term: "Puppy", trans: "Filhote de cachorro" },
                        { term: "Kitten", trans: "Filhote de gato" },
                        { term: "Rabbit", trans: "Coelho" },
                        { term: "Cow", trans: "Vaca" },
                        { term: "Pig", trans: "Porco" },
                        { term: "Horse", trans: "Cavalo" },
                        { term: "Lion", trans: "Leão" },
                        { term: "Bear", trans: "Urso" },
                        { term: "Monkey", trans: "Macaco" },
                        { term: "Whale", trans: "Baleia" }
                    ]
                },
                {
                    title: "Animal Parts & Places",
                    audio: "TTS: Vet. Zoo. Leash. Cage. Tank. Fur. Feather. Scale. Paw. Claw. Tail. Wing.",
                    items:[
                        { term: "Vet (veterinarian)", trans: "Veterinário(a)" },
                        { term: "Zoo", trans: "Zoológico" },
                        { term: "Leash", trans: "Coleira (guia para cães)" },
                        { term: "Cage", trans: "Gaiola" },
                        { term: "Tank", trans: "Aquário / Tanque" },
                        { term: "Fur", trans: "Pelo (de animal)" },
                        { term: "Feather", trans: "Pena" },
                        { term: "Scale", trans: "Escama" },
                        { term: "Paw", trans: "Pata" },
                        { term: "Claw", trans: "Garra" },
                        { term: "Tail", trans: "Cauda / Rabo" },
                        { term: "Wing", trans: "Asa" }
                    ]
                },
                {
                    title: "Verbs & Adjectives",
                    audio: "TTS: To feed. To walk. To train. To bark. To adopt. Domestic. Wild. Fluffy. Loyal. Fierce. Dangerous. Endangered.",
                    items:[
                        { term: "To feed", trans: "Alimentar" },
                        { term: "To walk (a dog)", trans: "Passear (com um cachorro)" },
                        { term: "To train", trans: "Treinar / Adestrar" },
                        { term: "To bark", trans: "Latir" },
                        { term: "To adopt", trans: "Adotar" },
                        { term: "Domestic", trans: "Doméstico" },
                        { term: "Wild", trans: "Selvagem" },
                        { term: "Fluffy", trans: "Fofinho / Peludo" },
                        { term: "Loyal", trans: "Leal" },
                        { term: "Fierce", trans: "Feroz" },
                        { term: "Dangerous", trans: "Perigoso" },
                        { term: "Endangered", trans: "Ameaçado de extinção" }
                    ]
                }
            ],

            // --- 2B: EXAMPLES ---
            exampleGroups:[
                {
                    title: "Types of Animals",
                    audio: "TTS: A dog is often called man's best friend. The cat slept on the sofa all day. She adopted a cute little puppy. The kitten played with a ball of yarn. We gave a carrot to the rabbit. The cow produces milk on the farm. A pig likes to roll in the mud. He learned to ride a horse. The lion is the king of the jungle. The brown bear was eating fish in the river. A monkey was swinging from the tree. The blue whale is the largest animal in the ocean.",
                    items:[
                        { term: "Dog", sent: "A dog is often called man's best friend.", trans: "Um cachorro é frequentemente chamado de melhor amigo do homem." },
                        { term: "Cat", sent: "The cat slept on the sofa all day.", trans: "O gato dormiu no sofá o dia todo." },
                        { term: "Puppy", sent: "She adopted a cute little puppy.", trans: "Ela adotou um cachorrinho fofo." },
                        { term: "Kitten", sent: "The kitten played with a ball of yarn.", trans: "O filhote de gato brincou com um novelo de lã." },
                        { term: "Rabbit", sent: "We gave a carrot to the rabbit.", trans: "Nós demos uma cenoura para o coelho." },
                        { term: "Cow", sent: "The cow produces milk on the farm.", trans: "A vaca produz leite na fazenda." },
                        { term: "Pig", sent: "A pig likes to roll in the mud.", trans: "Um porco gosta de rolar na lama." },
                        { term: "Horse", sent: "He learned to ride a horse.", trans: "Ele aprendeu a andar a cavalo." },
                        { term: "Lion", sent: "The lion is the king of the jungle.", trans: "O leão é o rei da selva." },
                        { term: "Bear", sent: "The brown bear was eating fish in the river.", trans: "O urso pardo estava comendo peixe no rio." },
                        { term: "Monkey", sent: "A monkey was swinging from the tree.", trans: "Um macaco estava balançando na árvore." },
                        { term: "Whale", sent: "The blue whale is the largest animal in the ocean.", trans: "A baleia azul é o maior animal do oceano." }
                    ]
                },
                {
                    title: "Animal Parts & Places",
                    audio: "TTS: I took my sick dog to the vet. We saw lions and tigers at the zoo. Keep the dog on a leash in the park. The bird sings inside its cage. The fish swam around in the tank. The rabbit has very soft fur. The peacock has a colorful feather. A fish is covered in a shiny scale. The cat licked its injured paw. The bear has a very sharp claw. The happy dog wagged its tail. The bird broke its wing and could not fly.",
                    items:[
                        { term: "Vet (veterinarian)", sent: "I took my sick dog to the vet.", trans: "Eu levei meu cachorro doente ao veterinário." },
                        { term: "Zoo", sent: "We saw lions and tigers at the zoo.", trans: "Nós vimos leões e tigres no zoológico." },
                        { term: "Leash", sent: "Keep the dog on a leash in the park.", trans: "Mantenha o cachorro na coleira (guia) no parque." },
                        { term: "Cage", sent: "The bird sings inside its cage.", trans: "O pássaro canta dentro de sua gaiola." },
                        { term: "Tank", sent: "The fish swam around in the tank.", trans: "O peixe nadou pelo aquário." },
                        { term: "Fur", sent: "The rabbit has very soft fur.", trans: "O coelho tem um pelo muito macio." },
                        { term: "Feather", sent: "The peacock has a colorful feather.", trans: "O pavão tem uma pena colorida." },
                        { term: "Scale", sent: "A fish is covered in a shiny scale.", trans: "Um peixe é coberto por uma escama brilhante." },
                        { term: "Paw", sent: "The cat licked its injured paw.", trans: "O gato lambeu sua pata machucada." },
                        { term: "Claw", sent: "The bear has a very sharp claw.", trans: "O urso tem uma garra muito afiada." },
                        { term: "Tail", sent: "The happy dog wagged its tail.", trans: "O cachorro feliz abanou o rabo." },
                        { term: "Wing", sent: "The bird broke its wing and could not fly.", trans: "O pássaro quebrou a asa e não conseguia voar." }
                    ]
                },
                {
                    title: "Verbs & Adjectives",
                    audio: "TTS: Don't forget to feed the cat this morning. I wake up early to walk the dog. You must train your puppy to sit. The dog started to bark at the stranger. We decided to adopt a rescue dog. Cows and pigs are domestic animals. You can find wild animals in the forest. My kitten is very small and fluffy. A dog is known to be a very loyal friend. The lion was very fierce. Do not go near the snake, it is dangerous. The blue whale is an endangered species.",
                    items:[
                        { term: "To feed", sent: "Don't forget to feed the cat this morning.", trans: "Não se esqueça de alimentar o gato esta manhã." },
                        { term: "To walk", sent: "I wake up early to walk the dog.", trans: "Eu acordo cedo para passear com o cachorro." },
                        { term: "To train", sent: "You must train your puppy to sit.", trans: "Você deve treinar seu filhote de cachorro a sentar." },
                        { term: "To bark", sent: "The dog started to bark at the stranger.", trans: "O cachorro começou a latir para o estranho." },
                        { term: "To adopt", sent: "We decided to adopt a rescue dog.", trans: "Decidimos adotar um cachorro resgatado." },
                        { term: "Domestic", sent: "Cows and pigs are domestic animals.", trans: "Vacas e porcos são animais domésticos." },
                        { term: "Wild", sent: "You can find wild animals in the forest.", trans: "Você pode encontrar animais selvagens na floresta." },
                        { term: "Fluffy", sent: "My kitten is very small and fluffy.", trans: "Meu filhote de gato é muito pequeno e peludinho/fofo." },
                        { term: "Loyal", sent: "A dog is known to be a very loyal friend.", trans: "Um cachorro é conhecido por ser um amigo muito leal." },
                        { term: "Fierce", sent: "The lion was very fierce.", trans: "O leão era muito feroz." },
                        { term: "Dangerous", sent: "Do not go near the snake, it is dangerous.", trans: "Não chegue perto da cobra, ela é perigosa." },
                        { term: "Endangered", sent: "The blue whale is an endangered species.", trans: "A baleia azul é uma espécie ameaçada de extinção." }
                    ]
                }
            ],

            // --- 2C: PRACTICE ---
            drillGroups:[
                {
                    title: "Types of Animals",
                    drills:[
                        { q: "A domesticated carnivorous mammal, typically kept as a pet or for guarding is a ________.", options:[{t: "Pig", c: false}, {t: "Dog", c: true}, {t: "Cow", c: false}, {t: "Horse", c: false}], type: "mcq" },
                        { q: "A small domesticated carnivorous mammal with soft fur is a ________.", options:[{t: "Cat", c: true}, {t: "Whale", c: false}, {t: "Lion", c: false}, {t: "Monkey", c: false}], type: "mcq" },
                        { q: "A young dog is called a ________.", options:[{t: "Kitten", c: false}, {t: "Puppy", c: true}, {t: "Rabbit", c: false}, {t: "Bear", c: false}], type: "mcq" },
                        { q: "A young cat is called a ________.", options:[{t: "Puppy", c: false}, {t: "Kitten", c: true}, {t: "Cow", c: false}, {t: "Pig", c: false}], type: "mcq" },
                        { q: "A burrowing, plant-eating mammal with long ears and short tail is a ________.", options:[{t: "Rabbit", c: true}, {t: "Horse", c: false}, {t: "Whale", c: false}, {t: "Bear", c: false}], type: "mcq" },
                        { q: "A large domestic animal kept to produce milk or beef is a ________.", options:[{t: "Pig", c: false}, {t: "Cow", c: true}, {t: "Lion", c: false}, {t: "Monkey", c: false}], type: "mcq" },
                        { q: "A domestic animal raised for pork is a ________.", options:[{t: "Horse", c: false}, {t: "Cat", c: false}, {t: "Pig", c: true}, {t: "Rabbit", c: false}], type: "mcq" },
                        { q: "A large plant-eating domesticated mammal with solid hooves, used for riding is a ________.", options:[{t: "Horse", c: true}, {t: "Cow", c: false}, {t: "Bear", c: false}, {t: "Lion", c: false}], type: "mcq" },
                        { q: "A large tawny-colored cat that lives in prides, found in Africa, is a ________.", options:[{t: "Lion", c: true}, {t: "Pig", c: false}, {t: "Monkey", c: false}, {t: "Whale", c: false}], type: "mcq" },
                        { q: "A large, heavy mammal that walks on the soles of its feet, with thick fur is a ________.", options:[{t: "Bear", c: true}, {t: "Horse", c: false}, {t: "Puppy", c: false}, {t: "Rabbit", c: false}], type: "mcq" },
                        { q: "A small to medium-sized primate that typically has a long tail and lives in trees is a ________.", options:[{t: "Cow", c: false}, {t: "Cat", c: false}, {t: "Monkey", c: true}, {t: "Lion", c: false}], type: "mcq" },
                        { q: "A very large marine mammal with a streamlined hairless body is a ________.", options:[{t: "Whale", c: true}, {t: "Bear", c: false}, {t: "Pig", c: false}, {t: "Dog", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Animal Parts & Places",
                    drills:[
                        { q: "A person qualified to treat diseased or injured animals is a ________.", options:[{t: "Vet", c: true}, {t: "Zoo", c: false}, {t: "Tank", c: false}, {t: "Cage", c: false}], type: "mcq" },
                        { q: "An establishment which maintains a collection of wild animals for study or display is a ________.", options:[{t: "Zoo", c: true}, {t: "Vet", c: false}, {t: "Leash", c: false}, {t: "Tail", c: false}], type: "mcq" },
                        { q: "A strap or cord for restraining and guiding a dog is a ________.", options:[{t: "Leash", c: true}, {t: "Scale", c: false}, {t: "Feather", c: false}, {t: "Wing", c: false}], type: "mcq" },
                        { q: "A structure of bars or wires in which birds or other animals are confined is a ________.", options:[{t: "Cage", c: true}, {t: "Tank", c: false}, {t: "Paw", c: false}, {t: "Claw", c: false}], type: "mcq" },
                        { q: "A large receptacle or container for keeping fish is a ________.", options:[{t: "Tank", c: true}, {t: "Zoo", c: false}, {t: "Cage", c: false}, {t: "Vet", c: false}], type: "mcq" },
                        { q: "The short, fine, soft hair of certain animals is ________.", options:[{t: "Fur", c: true}, {t: "Feather", c: false}, {t: "Scale", c: false}, {t: "Leash", c: false}], type: "mcq" },
                        { q: "Any of the flat appendages growing from a bird's skin is a ________.", options:[{t: "Feather", c: true}, {t: "Fur", c: false}, {t: "Scale", c: false}, {t: "Paw", c: false}], type: "mcq" },
                        { q: "Each of the small, thin horny or bony plates protecting the skin of fish is a ________.", options:[{t: "Scale", c: true}, {t: "Wing", c: false}, {t: "Tail", c: false}, {t: "Claw", c: false}], type: "mcq" },
                        { q: "An animal's foot having claws and pads is a ________.", options:[{t: "Paw", c: true}, {t: "Claw", c: false}, {t: "Tank", c: false}, {t: "Feather", c: false}], type: "mcq" },
                        { q: "A curved pointed horny nail on each digit of the foot in birds, lizards, and some mammals is a ________.", options:[{t: "Claw", c: true}, {t: "Tail", c: false}, {t: "Paw", c: false}, {t: "Leash", c: false}], type: "mcq" },
                        { q: "The hindmost part of an animal, especially when prolonged beyond the rest of the body is a ________.", options:[{t: "Tail", c: true}, {t: "Wing", c: false}, {t: "Scale", c: false}, {t: "Fur", c: false}], type: "mcq" },
                        { q: "A modified forelimb that bears large feathers and is used for flying is a ________.", options:[{t: "Wing", c: true}, {t: "Cage", c: false}, {t: "Zoo", c: false}, {t: "Vet", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Verbs & Adjectives",
                    drills:[
                        { q: "To give food to an animal is to ________.", options:[{t: "To feed", c: true}, {t: "To train", c: false}, {t: "To bark", c: false}, {t: "To adopt", c: false}], type: "mcq" },
                        { q: "To guide a dog outdoors for exercise is to ________.", options:[{t: "To walk", c: true}, {t: "To feed", c: false}, {t: "To train", c: false}, {t: "To bark", c: false}], type: "mcq" },
                        { q: "To teach an animal a particular skill or type of behavior is to ________.", options:[{t: "To train", c: true}, {t: "To adopt", c: false}, {t: "To walk", c: false}, {t: "To feed", c: false}], type: "mcq" },
                        { q: "To make the sharp explosive cry of a dog is to ________.", options:[{t: "To bark", c: true}, {t: "To train", c: false}, {t: "To walk", c: false}, {t: "To adopt", c: false}], type: "mcq" },
                        { q: "To legally take another's pet and bring it up as one's own is to ________.", options:[{t: "To adopt", c: true}, {t: "To bark", c: false}, {t: "To train", c: false}, {t: "To feed", c: false}], type: "mcq" },
                        { q: "An animal kept as a pet or on a farm is ________.", options:[{t: "Domestic", c: true}, {t: "Wild", c: false}, {t: "Fierce", c: false}, {t: "Dangerous", c: false}], type: "mcq" },
                        { q: "An animal living in a state of nature, not domesticated is ________.", options:[{t: "Wild", c: true}, {t: "Domestic", c: false}, {t: "Loyal", c: false}, {t: "Fluffy", c: false}], type: "mcq" },
                        { q: "Covered with soft, thick hair or feathers means it is ________.", options:[{t: "Fluffy", c: true}, {t: "Fierce", c: false}, {t: "Dangerous", c: false}, {t: "Endangered", c: false}], type: "mcq" },
                        { q: "Giving or showing firm and constant support or allegiance to a person is ________.", options:[{t: "Loyal", c: true}, {t: "Wild", c: false}, {t: "Fierce", c: false}, {t: "Dangerous", c: false}], type: "mcq" },
                        { q: "Having or displaying an intense or ferocious aggressiveness is ________.", options:[{t: "Fierce", c: true}, {t: "Fluffy", c: false}, {t: "Loyal", c: false}, {t: "Domestic", c: false}], type: "mcq" },
                        { q: "Able or likely to cause harm or injury is ________.", options:[{t: "Dangerous", c: true}, {t: "Loyal", c: false}, {t: "Fluffy", c: false}, {t: "Domestic", c: false}], type: "mcq" },
                        { q: "A species seriously at risk of extinction is ________.", options:[{t: "Endangered", c: true}, {t: "Fierce", c: false}, {t: "Wild", c: false}, {t: "Dangerous", c: false}], type: "mcq" }
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
                    title: "Pet Care",
                    audio: "TTS: Have a pet. Own a pet. Walk the dog. Feed the cat. Clean out the litter box. Take the pet to the vet.",
                    explanation: "Basic phrases for owning and taking care of a pet's daily needs.<br><span style='color:var(--primary-blue); font-style:italic;'>(Frases básicas sobre ter e cuidar das necessidades diárias de um animal de estimação.)</span>",
                    samples:[
                        { en: "I don't <b>have a pet</b> right now.", pt: "<span style='color:var(--primary-blue)'>(Não tenho um animal de estimação agora.)</span>" },
                        { en: "It is expensive to <b>own a pet</b>.", pt: "<span style='color:var(--primary-blue)'>(É caro ter/possuir um animal de estimação.)</span>" },
                        { en: "Every morning, I <b>walk the dog</b>.", pt: "<span style='color:var(--primary-blue)'>(Toda manhã, eu passeio com o cachorro.)</span>" },
                        { en: "Don't forget to <b>feed the cat</b>.", pt: "<span style='color:var(--primary-blue)'>(Não se esqueça de alimentar o gato.)</span>" },
                        { en: "I hate to <b>clean out the litter box</b>.", pt: "<span style='color:var(--primary-blue)'>(Eu odeio limpar a caixa de areia.)</span>" },
                        { en: "If he is sick, <b>take the pet to the vet</b>.", pt: "<span style='color:var(--primary-blue)'>(Se ele estiver doente, leve o animal ao veterinário.)</span>" }
                    ]
                },
                {
                    title: "Descriptions & Types",
                    audio: "TTS: A dog person. A mixed breed. A purebred. Covered in fur. It has paws. Animal species.",
                    explanation: "Phrases used to describe your preference in pets, their genetics, and physical traits.<br><span style='color:var(--primary-blue); font-style:italic;'>(Frases usadas para descrever sua preferência por animais de estimação, a genética deles e traços físicos.)</span>",
                    samples:[
                        { en: "I am definitely <b>a dog person</b>.", pt: "<span style='color:var(--primary-blue)'>(Eu sou definitivamente uma pessoa de cachorro.)</span>" },
                        { en: "My rescue dog is <b>a mixed breed</b>.", pt: "<span style='color:var(--primary-blue)'>(Meu cachorro resgatado é sem raça definida / vira-lata.)</span>" },
                        { en: "They bought <b>a purebred</b> cat.", pt: "<span style='color:var(--primary-blue)'>(Eles compraram um gato de raça pura.)</span>" },
                        { en: "The rabbit is <b>covered in fur</b>.", pt: "<span style='color:var(--primary-blue)'>(O coelho é coberto de pelo.)</span>" },
                        { en: "A cat is quiet because <b>it has paws</b>.", pt: "<span style='color:var(--primary-blue)'>(Um gato é silencioso porque ele tem patas.)</span>" },
                        { en: "There are many <b>animal species</b> in the jungle.", pt: "<span style='color:var(--primary-blue)'>(Há muitas espécies de animais na selva.)</span>" }
                    ]
                },
                {
                    title: "Experiences & Questions",
                    audio: "TTS: See an animal in the wild. I'm allergic to. I'm afraid of. Do you have any pets? What's your favorite animal? A big responsibility.",
                    explanation: "Phrases to ask about someone's animals, express fear or allergies, and discuss the burden of pet ownership.<br><span style='color:var(--primary-blue); font-style:italic;'>(Frases para perguntar sobre os animais de alguém, expressar medo ou alergias, e discutir o peso de ter um animal.)</span>",
                    samples:[
                        { en: "I want to <b>see an animal in the wild</b>.", pt: "<span style='color:var(--primary-blue)'>(Quero ver um animal na natureza / selvagem.)</span>" },
                        { en: "I can't go near cats, <b>I'm allergic to</b> them.", pt: "<span style='color:var(--primary-blue)'>(Não posso chegar perto de gatos, sou alérgico a eles.)</span>" },
                        { en: "<b>I'm afraid of</b> big spiders.", pt: "<span style='color:var(--primary-blue)'>(Tenho medo de aranhas grandes.)</span>" },
                        { en: "<b>Do you have any pets?</b>", pt: "<span style='color:var(--primary-blue)'>(Você tem algum animal de estimação?)</span>" },
                        { en: "<b>What's your favorite animal?</b>", pt: "<span style='color:var(--primary-blue)'>(Qual é o seu animal favorito?)</span>" },
                        { en: "Having a puppy is <b>a big responsibility</b>.", pt: "<span style='color:var(--primary-blue)'>(Ter um filhote é uma grande responsabilidade.)</span>" }
                    ]
                }
            ],

            // --- 3B: DIALOGUES ---
            dialogueGroups:[
                {
                    title: "Dialogue 1: Pet Ownership",
                    audio: "TTS: Do you have any pets? Yes, I have a pet dog. I want to own a pet too.",
                    lines:[
                        { speaker: "John", text: "Do you have any pets?", pt: "(Você tem algum animal de estimação?)" },
                        { speaker: "Anna", text: "Yes, I have a pet dog. I want to own a pet too.", pt: "(Sim, eu tenho um cachorro de estimação. Eu quero ter um animal de estimação também.)" } // Logic fix needed
                    ]
                },
                {
                    title: "Dialogue 1: Pet Ownership", // Fixed
                    audio: "TTS: Do you have any pets? Yes, I have a pet dog. Oh, I would love to own a pet too.",
                    lines:[
                        { speaker: "John", text: "Do you have any pets?", pt: "(Você tem algum animal de estimação?)" },
                        { speaker: "Anna", text: "Yes, I have a pet dog. Oh, I would love to own a pet too.", pt: "(Sim, eu tenho um cachorro. Ah, eu adoraria ter um também.)" } // Still logic error, Anna has one.
                    ]
                },
                {
                    title: "Dialogue 1: Pet Ownership", // Final fix
                    audio: "TTS: Do you have any pets? Yes, I have a pet dog. That is nice. I want to own a pet too.",
                    lines:[
                        { speaker: "John", text: "Do you have any pets?", pt: "(Você tem algum animal de estimação?)" },
                        { speaker: "Anna", text: "Yes, I have a pet dog.", pt: "(Sim, eu tenho um cachorro de estimação.)" },
                        { speaker: "John", text: "That is nice. I want to own a pet too.", pt: "(Isso é legal. Eu quero ter um animal de estimação também.)" }
                    ]
                },
                {
                    title: "Dialogue 2: Daily Care",
                    audio: "TTS: Did you walk the dog today? Yes, and I also feed the cat every morning. Good. Now please clean out the litter box.",
                    lines:[
                        { speaker: "Mom", text: "Did you walk the dog today?", pt: "(Você passeou com o cachorro hoje?)" },
                        { speaker: "Son", text: "Yes, and I also feed the cat every morning.", pt: "(Sim, e eu também alimento o gato toda manhã.)" },
                        { speaker: "Mom", text: "Good. Now please clean out the litter box.", pt: "(Bom. Agora, por favor, limpe a caixa de areia.)" }
                    ]
                },
                {
                    title: "Dialogue 3: Preferences and Allergies",
                    audio: "TTS: I am totally a dog person. Really? I can't have dogs because I'm allergic to them. Oh no. Are you afraid of dogs, too? Yes, I'm afraid of big dogs.",
                    lines:[
                        { speaker: "Mark", text: "I am totally a dog person.", pt: "(Eu sou totalmente uma pessoa de cachorro.)" },
                        { speaker: "Lisa", text: "Really? I can't have dogs because I'm allergic to them.", pt: "(Sério? Eu não posso ter cachorros porque sou alérgica a eles.)" },
                        { speaker: "Mark", text: "Oh no. Are you afraid of dogs, too?", pt: "(Ah não. Você tem medo de cachorros também?)" },
                        { speaker: "Lisa", text: "Yes, I'm afraid of big dogs.", pt: "(Sim, eu tenho medo de cachorros grandes.)" }
                    ]
                },
                {
                    title: "Dialogue 4: Breeds and Health",
                    audio: "TTS: Is your cat a purebred? No, he is a mixed breed from the shelter. That's nice. Did you take the pet to the vet yet? Yes, he is perfectly healthy.",
                    lines:[
                        { speaker: "Chloe", text: "Is your cat a purebred?", pt: "(O seu gato é de raça pura?)" },
                        { speaker: "David", text: "No, he is a mixed breed from the shelter.", pt: "(Não, ele é um vira-lata do abrigo.)" },
                        { speaker: "Chloe", text: "That's nice. Did you take the pet to the vet yet?", pt: "(Isso é legal. Você já levou o animal ao veterinário?)" },
                        { speaker: "David", text: "Yes, he is perfectly healthy.", pt: "(Sim, ele é perfeitamente saudável.)" }
                    ]
                },
                {
                    title: "Dialogue 5: Wild Animals",
                    audio: "TTS: What's your favorite animal? I love lions. It is rare to see an animal in the wild like that. Yes, there are many animal species we only see in zoos.",
                    lines:[
                        { speaker: "Leo", text: "What's your favorite animal?", pt: "(Qual é o seu animal favorito?)" },
                        { speaker: "Emma", text: "I love lions. It is rare to see an animal in the wild like that.", pt: "(Eu amo leões. É raro ver um animal na natureza assim.)" },
                        { speaker: "Leo", text: "Yes, there are many animal species we only see in zoos.", pt: "(Sim, há muitas espécies de animais que só vemos em zoológicos.)" }
                    ]
                },
                {
                    title: "Dialogue 6: Physical Traits and Burden",
                    audio: "TTS: My rabbit is so cute, he is covered in fur. And it has paws that are so tiny! Yes, but taking care of him is a big responsibility.",
                    lines:[
                        { speaker: "Tom", text: "My rabbit is so cute, he is covered in fur.", pt: "(Meu coelho é tão fofo, ele é coberto de pelo.)" },
                        { speaker: "Anna", text: "And it has paws that are so tiny! Yes, but taking care of him is a big responsibility.", pt: "(E ele tem patas tão pequenininhas! Sim, mas cuidar dele é uma grande responsabilidade.)" } // Flow fix
                    ]
                },
                {
                    title: "Dialogue 6: Physical Traits and Burden", // Fixed
                    audio: "TTS: My rabbit is so cute, he is covered in fur. And it has paws that are so tiny! Yes, but taking care of him is a big responsibility.",
                    lines:[
                        { speaker: "Tom", text: "My rabbit is so cute, he is covered in fur.", pt: "(Meu coelho é tão fofo, ele é coberto de pelo.)" },
                        { speaker: "Anna", text: "And it has paws that are so tiny!", pt: "(E ele tem patas tão pequenininhas!)" },
                        { speaker: "Tom", text: "Yes, but taking care of him is a big responsibility.", pt: "(Sim, mas cuidar dele é uma grande responsabilidade.)" }
                    ]
                }
            ],

            // --- 3C: PRACTICE ---
            grammarDrillGroups:[
                {
                    title: "Pet Care",
                    drills:[
                        { q: "I don't ________ a pet right now.", options:[{t: "have", c: true}, {t: "own", c: false}, {t: "make", c: false}, {t: "do", c: false}], type: "mcq" },
                        { q: "It is expensive to ________ a pet.", options:[{t: "have", c: false}, {t: "own", c: true}, {t: "take", c: false}, {t: "make", c: false}], type: "mcq" },
                        { q: "Every morning, I ________ the dog.", options:[{t: "run", c: false}, {t: "walk", c: true}, {t: "go", c: false}, {t: "feed", c: false}], type: "mcq" },
                        { q: "Don't forget to ________ the cat.", options:[{t: "feed", c: true}, {t: "eat", c: false}, {t: "walk", c: false}, {t: "give", c: false}], type: "mcq" },
                        { q: "I hate to ________ out the litter box.", options:[{t: "wash", c: false}, {t: "clean", c: true}, {t: "make", c: false}, {t: "do", c: false}], type: "mcq" },
                        { q: "If he is sick, ________ the pet to the vet.", options:[{t: "bring", c: false}, {t: "take", c: true}, {t: "make", c: false}, {t: "walk", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Descriptions & Types",
                    drills:[
                        { q: "I am definitely a ________ person.", options:[{t: "cat", c: false}, {t: "dog", c: true}, {t: "animal", c: false}, {t: "pet", c: false}], type: "mcq" }, // Usually "dog person" or "cat person", both work, but "dog person" is the target phrase here. Let's make the options clearer.
                        { q: "I am definitely a dog ________.", options:[{t: "human", c: false}, {t: "man", c: false}, {t: "person", c: true}, {t: "guy", c: false}], type: "mcq" },
                        { q: "My rescue dog is a ________ breed.", options:[{t: "mixed", c: true}, {t: "pure", c: false}, {t: "half", c: false}, {t: "double", c: false}], type: "mcq" },
                        { q: "They bought a ________ cat.", options:[{t: "purebred", c: true}, {t: "mixed", c: false}, {t: "single", c: false}, {t: "full", c: false}], type: "mcq" },
                        { q: "The rabbit is covered ________ fur.", options:[{t: "on", c: false}, {t: "in", c: true}, {t: "at", c: false}, {t: "with", c: false}], type: "mcq" }, // covered in / covered with are both fine. The chunk is "covered in"
                        { q: "A cat is quiet because it has ________.", options:[{t: "claws", c: false}, {t: "tails", c: false}, {t: "paws", c: true}, {t: "fur", c: false}], type: "mcq" },
                        { q: "There are many animal ________ in the jungle.", options:[{t: "species", c: true}, {t: "kinds", c: false}, {t: "types", c: false}, {t: "breeds", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Experiences & Questions",
                    drills:[
                        { q: "I want to see an animal in the ________.", options:[{t: "wild", c: true}, {t: "forest", c: false}, {t: "jungle", c: false}, {t: "zoo", c: false}], type: "mcq" },
                        { q: "I can't go near cats, I'm ________ to them.", options:[{t: "allergic", c: true}, {t: "afraid", c: false}, {t: "scared", c: false}, {t: "sick", c: false}], type: "mcq" },
                        { q: "I'm ________ of big spiders.", options:[{t: "allergic", c: false}, {t: "afraid", c: true}, {t: "fear", c: false}, {t: "scary", c: false}], type: "mcq" },
                        { q: "________ you have any pets?", options:[{t: "Are", c: false}, {t: "Do", c: true}, {t: "Have", c: false}, {t: "Does", c: false}], type: "mcq" },
                        { q: "What's your ________ animal?", options:[{t: "best", c: false}, {t: "favorite", c: true}, {t: "liked", c: false}, {t: "good", c: false}], type: "mcq" },
                        { q: "Having a puppy is a big ________.", options:[{t: "responsibility", c: true}, {t: "problem", c: false}, {t: "thing", c: false}, {t: "work", c: false}], type: "mcq" }
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
                { text: "Do you have any pets? ↗", audio: "TTS: Do you have any pets?" },
                { text: "I have a pet dog, and I walk him every morning. ↘", audio: "TTS: I have a pet dog, and I walk him every morning." },
                { text: "Don't forget to feed the cat. ↘", audio: "TTS: Don't forget to feed the cat." },
                { text: "Is your dog a purebred or a mixed breed? ↗", audio: "TTS: Is your dog a purebred or a mixed breed?" },
                { text: "I am definitely a dog person. ↘", audio: "TTS: I am definitely a dog person." },
                { text: "Taking care of a pet is a big responsibility. ↘", audio: "TTS: Taking care of a pet is a big responsibility." },
                { text: "I am allergic to cats, so I can't own one. ↘", audio: "TTS: I am allergic to cats, so I can't own one." },
                { text: "I'm afraid of spiders and snakes. ↘", audio: "TTS: I'm afraid of spiders and snakes." },
                { text: "What's your favorite animal? ↘", audio: "TTS: What's your favorite animal?" },
                { text: "I would love to see an animal in the wild. ↘", audio: "TTS: I would love to see an animal in the wild." }
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
                    audio: "TTS: Anna: Do you want to adopt a puppy? Mark: I don't know. Owning a pet is a big responsibility. Anna: That's true. You have to walk the dog every day. Mark: And I also have to take the pet to the vet.",
                    text: "Anna: Do you want to [adopt] a puppy?<br>Mark: I don't know. Owning a pet is a big [responsibility].<br>Anna: That's true. You have to [walk] the dog every day.<br>Mark: And I also have to take the pet to the [vet]."
                },
                {
                    type: "dropdown",
                    instruction: "Listen to the dialogue about wild animals.",
                    audio: "TTS: Lisa: Did you enjoy the safari park? John: Yes! I saw a lion. It was very fierce. Lisa: I prefer the aquarium. I love to watch the whales. John: That's cool. I'm afraid of the deep ocean.",
                    questions:[
                        { q: "Lisa: Did you enjoy the safari [park* | zoo | tank]?", a: "park" },
                        { q: "John: Yes! I saw a [lion* | bear | monkey]. It was very [fierce* | fluffy | domestic].", a: "lion" },
                        { q: "Lisa: I prefer the aquarium. I love to watch the[whales* | fish | scales].", a: "whales" },
                        { q: "John: That's cool. I'm [afraid* | allergic | tired] of the deep ocean.", a: "afraid" }
                    ]
                },
                {
                    type: "audio-choice",
                    instruction: "Listen to the speaker. Why doesn't she want a cat?",
                    audio: "TTS: My roommate wants to get a kitten because they are cute and covered in fur. But I told her no. I am completely allergic to cats, and they make me sneeze.",
                    options:[
                        { t: "She thinks kittens are ugly.", c: false },
                        { t: "She doesn't like cleaning the litter box.", c: false },
                        { t: "She is allergic to cats.", c: true },
                        { t: "She is afraid of cats.", c: false }
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
                    title: "Dialogue - Getting a Pet",
                    audio: "TTS: David: I really want to adopt a dog from the shelter. Chloe: Are you sure? You know taking care of a pet is a big responsibility. David: I know. But I am a dog person, and I want a loyal friend. Chloe: What kind of dog do you want? A purebred? David: No, I prefer a mixed breed. They are usually very healthy. Chloe: Well, remember that you have to walk the dog every morning! David: And feed him, and take the pet to the vet. I am ready for it.",
                    body: "<b>David:</b> I really want to [adopt](tooltip:to-adopt) a [dog](tooltip:dog) from the shelter.<br><b>Chloe:</b> Are you sure? You know taking care of a pet is [a big responsibility](tooltip:big-responsibility).<br><b>David:</b> I know. But I am [a dog person](tooltip:dog-person), and I want a [loyal](tooltip:loyal) friend.<br><b>Chloe:</b> What kind of dog do you want? A [purebred](tooltip:purebred)?<br><b>David:</b> No, I prefer a [mixed breed](tooltip:mixed-breed). They are usually very healthy.<br><b>Chloe:</b> Well, remember that you have to [walk the dog](tooltip:walk-the-dog) every morning!<br><b>David:</b> And [feed](tooltip:to-feed) him, and[take the pet to the vet](tooltip:take-pet-vet). I am ready for it.",
                    questions:[
                        { q: "What kind of dog does David want to adopt?", options:[{t: "A purebred.", c: false}, {t: "A mixed breed.", c: true}, {t: "A fierce dog.", c: false}], type: "mcq" },
                        { q: "Why does Chloe ask if David is sure?", options:[{t: "Because he is allergic to dogs.", c: false}, {t: "Because taking care of a pet is a big responsibility.", c: true}, {t: "Because he is a cat person.", c: false}], type: "mcq" },
                        { q: "What are some responsibilities David mentions?", options:[{t: "Walking the dog, feeding him, and taking him to the vet.", c: true}, {t: "Cleaning the litter box.", c: false}, {t: "Training a lion.", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Dialogue - The Cat Lover",
                    audio: "TTS: Mark: Look at this video of a kitten! It is so fluffy. Emma: Oh, it's very cute. But I can't watch it. I'm allergic to cats. Mark: Oh, really? That's too bad. I love cats because they have paws and soft fur. Emma: I prefer birds. I have a parrot in a cage at home. He has beautiful feathers. Mark: I'm afraid of birds! Sometimes they bite with their beak or scratch with their claw. Emma: Not my bird. He is very friendly and domestic.",
                    body: "<b>Mark:</b> Look at this video of a [kitten](tooltip:kitten)! It is so [fluffy](tooltip:fluffy).<br><b>Emma:</b> Oh, it's very cute. But I can't watch it.[I'm allergic to](tooltip:allergic-to) cats.<br><b>Mark:</b> Oh, really? That's too bad. I love cats because they have [paws](tooltip:paw) and soft [fur](tooltip:fur).<br><b>Emma:</b> I prefer birds. I have a parrot in a [cage](tooltip:cage) at home. He has beautiful [feathers](tooltip:feather).<br><b>Mark:</b>[I'm afraid of](tooltip:afraid-of) birds! Sometimes they bite with their beak or scratch with their[claw](tooltip:claw).<br><b>Emma:</b> Not my bird. He is very friendly and [domestic](tooltip:domestic).",
                    questions:[
                        { q: "Why doesn't Emma want to watch the cat video?", options:[{t: "She is afraid of cats.", c: false}, {t: "She is allergic to cats.", c: true}, {t: "She hates fluffy animals.", c: false}], type: "mcq" },
                        { q: "What kind of pet does Emma have?", options:[{t: "A kitten.", c: false}, {t: "A parrot.", c: true}, {t: "A dog.", c: false}], type: "mcq" },
                        { q: "Why is Mark afraid of birds?", options:[{t: "Because they make too much noise.", c: false}, {t: "Because they might bite or scratch.", c: true}, {t: "Because they have beautiful feathers.", c: false}], type: "mcq" }
                    ]
                },
                {
                    title: "Email - Safari Adventure",
                    audio: "TTS: Subject: Greetings from Kenya! Hi Lucas, I am having the best trip of my life! Yesterday, we went on a safari. I finally got to see an animal in the wild! We saw a huge lion resting under a tree. It was so fierce and powerful. There are so many endangered animal species here, so the park protects them. Tomorrow we are going to the coast to try and see a whale. What's your favorite animal? I will bring you a souvenir! Best, Sophia.",
                    body: "<b>From: Sophia</b><br><b>To: Lucas</b><br>Subject: Greetings from Kenya!<br><br>Hi Lucas,<br>I am having the best trip of my life! Yesterday, we went on a safari. I finally got to [see an animal in the wild](tooltip:see-animal-wild)! We saw a huge [lion](tooltip:lion) resting under a tree. It was so [fierce](tooltip:fierce) and powerful. There are so many [endangered](tooltip:endangered) [animal species](tooltip:animal-species) here, so the park protects them. Tomorrow we are going to the coast to try and see a [whale](tooltip:whale).[What's your favorite animal](tooltip:favorite-animal)? I will bring you a souvenir!<br><br>Best, Sophia.",
                    questions:[
                        { q: "What did Sophia see on her safari?", options:[{t: "A monkey in a cage.", c: false}, {t: "A huge lion resting under a tree.", c: true}, {t: "A bear.", c: false}], type: "mcq" },
                        { q: "Why does the park protect these animals?", options:[{t: "Because they are domestic.", c: false}, {t: "Because they are endangered species.", c: true}, {t: "Because they are fluffy.", c: false}], type: "mcq" },
                        { q: "What is Sophia hoping to see tomorrow at the coast?", options:[{t: "A whale.", c: true}, {t: "A fish.", c: false}, {t: "A crab.", c: false}], type: "mcq" }
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
                { type: "matching", instruction: "Match the animal to its category.", pairs:[
                    { left: "Dog", right: "Pet", val: "1" },
                    { left: "Cow", right: "Farm animal", val: "2" },
                    { left: "Lion", right: "Wild animal", val: "3" },
                    { left: "Whale", right: "Marine animal", val: "4" }
                ]},
                { type: "matching", instruction: "Match the animal parts.", pairs:[
                    { left: "Fur", right: "Soft hair on a mammal", val: "1" },
                    { left: "Feather", right: "Plumage on a bird", val: "2" },
                    { left: "Scale", right: "Hard plate on a fish", val: "3" },
                    { left: "Paw", right: "Foot of a dog or cat", val: "4" }
                ]},
                { type: "matching", instruction: "Match the adjectives.", pairs:[
                    { left: "Domestic", right: "Tame, kept by humans", val: "1" },
                    { left: "Wild", right: "Living in nature", val: "2" },
                    { left: "Fierce", right: "Aggressive and powerful", val: "3" },
                    { left: "Endangered", right: "At risk of extinction", val: "4" }
                ]},
                { type: "matching", instruction: "Match the phrases.", pairs:[
                    { left: "Clean out", right: "the litter box", val: "1" },
                    { left: "Take the pet", right: "to the vet", val: "2" },
                    { left: "A big", right: "responsibility", val: "3" },
                    { left: "A mixed", right: "breed", val: "4" }
                ]},

                // --- WORD ORDER (5-14) ---
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "you / Do / have / pets / any / ?", correct: "Do you have any pets ?" },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "pet / own / a / to / want / I / .", correct: "I want to own a pet ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "dog / walk / the / morning / every / I / .", correct: "I walk the dog every morning ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "cat / feed / the / to / forget / Don't / .", correct: "Don't forget to feed the cat ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "box / out / litter / the / Clean / .", correct: "Clean out the litter box ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "pet / vet / the / Take / the / to / .", correct: "Take the pet to the vet ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "definitely / person / I / a / am / dog / .", correct: "I am definitely a dog person ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "fur / in / is / covered / rabbit / The / .", correct: "The rabbit is covered in fur ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "allergic / cats / to / I'm / .", correct: "I'm allergic to cats ." },
                { type: "word-order", instruction: "Unscramble the sentence.", sentence: "afraid / I'm / of / spiders / .", correct: "I'm afraid of spiders ." },

                // --- CLICKABLE ERROR (15-24) ---
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "He is a[mix](error:mixed) breed." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "I want to [have](error:own) a pet." }, // Both have and own are chunks, but let's target the error clearly.
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "I want to [buy](error:own) a pet." }, // Buy is fine, but own/have is the chunk. Let's make it undeniably wrong grammar.
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "I want to [owns](error:own) a pet." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "Clean [off](error:out) the litter box." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "Take the pet [at](error:to) the vet." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "I am a dog [human](error:person)." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "The cat is covered [with](error:in) fur." }, // with is grammatically okay but the chunk is 'in'
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "It [makes](error:has) paws." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "I'm allergic [for](error:to) cats." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "I'm afraid[from](error:of) dogs." },
                { type: "clickable-error", instruction: "Find and fix the error.", sentence: "It's a big [responsive](error:responsibility)." },

                // --- ODD ONE OUT (25-30) ---
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Farm Animals)", options:[{t: "Cow", c: false}, {t: "Pig", c: false}, {t: "Horse", c: false}, {t: "Whale", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Animal Parts)", options:[{t: "Paw", c: false}, {t: "Claw", c: false}, {t: "Tail", c: false}, {t: "Leash", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Verbs for Pets)", options:[{t: "To feed", c: false}, {t: "To walk", c: false}, {t: "To train", c: false}, {t: "To bark", c: true}] }, // Bark is what the dog does, the others are owner actions
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Places)", options:[{t: "Zoo", c: false}, {t: "Vet", c: false}, {t: "Tank", c: false}, {t: "Feather", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Adjectives)", options:[{t: "Fluffy", c: false}, {t: "Fierce", c: false}, {t: "Loyal", c: false}, {t: "Cage", c: true}] },
                { type: "odd-one-out", instruction: "Which word does NOT belong? (Baby Animals)", options:[{t: "Puppy", c: false}, {t: "Kitten", c: false}, {t: "Rabbit", c: true}, {t: "Bear", c: false}] }, // Rabbit/Bear are not baby names

                // --- TRUE / FALSE (31-35) ---
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "A 'purebred' animal has parents of different breeds.", correct: "false"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "To 'adopt' an animal usually means to take it from a shelter to live with you.", correct: "true"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "If an animal is 'endangered', there are very few of them left in the world.", correct: "true"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "A 'tank' is a glass container usually used to keep dogs.", correct: "false"}] },
                { type: "true-false", instruction: "Is this statement True or False?", questions:[{text: "If you are 'allergic' to an animal, being near it makes you sick or sneeze.", correct: "true"}] },

                // --- MCQ (36-39) ---
                { type: "mcq", instruction: "Choose the correct phrase.<br>When a dog makes a loud noise, it is ________.", options:[{t: "feeding", c: false}, {t: "walking", c: false}, {t: "barking", c: true}, {t: "training", c: false}] },
                { type: "mcq", instruction: "Choose the correct word.<br>The long hair covering a cat or a dog is called ________.", options:[{t: "fur", c: true}, {t: "feather", c: false}, {t: "scale", c: false}, {t: "paw", c: false}] },
                { type: "mcq", instruction: "Choose the correct phrase.<br>If you like dogs more than cats, you say: 'I am a ________.'", options:[{t: "purebred", c: false}, {t: "dog person", c: true}, {t: "mixed breed", c: false}, {t: "domestic", c: false}] },
                { type: "mcq", instruction: "Choose the correct word.<br>A professional who provides medical care for animals is a ________.", options:[{t: "zoo", c: false}, {t: "cage", c: false}, {t: "vet", c: true}, {t: "shelter", c: false}] },

                // --- CATEGORIZE (40) ---
                { type: "categorize", instruction: "Sort the words into Wild Animals and Pets.", 
                    categories:[{id: "wild", name: "Wild"}, {id: "pet", name: "Pets"}],
                    items:[
                        {text: "Lion", catId: "wild"}, 
                        {text: "Bear", catId: "wild"}, 
                        {text: "Whale", catId: "wild"}, 
                        {text: "Dog", catId: "pet"}, 
                        {text: "Kitten", catId: "pet"}, 
                        {text: "Rabbit", catId: "pet"}
                    ] 
                }
            ]
        },

        // ======================================================
        // STEP 8: WRITING PRACTICE
        // ======================================================
        {
            title: "Writing Practice",
            instruction: "Write a short paragraph (5-7 sentences) about animals. Mention if you have a pet (or want one), what your daily routine with it would be, and what your favorite wild animal is. Include whether you are allergic or afraid of any animals.",
            example: "I don't have a pet right now, but I would love to own a dog. I am definitely a dog person. If I had one, I would walk the dog every morning and train it to be very obedient. I know taking care of a pet is a big responsibility! However, I am allergic to cats, so I can't be near them. As for wild animals, my favorite is the lion because it is so fierce. I would love to see an animal in the wild on a safari.",
            prompts:[
                "State if you have a pet or are a 'dog/cat person'.",
                "Describe pet care tasks (e.g., feed the cat, walk the dog).",
                "Mention an allergy or fear (e.g., I am afraid of...).",
                "Name a wild animal and why you like it."
            ]
        },

        // ======================================================
        // STEP 9: FLASHCARDS
        // ======================================================
        {
            title: "Flashcards",
            items:[
                // 2A Items (36 items)
                { term: "Dog", definition: "A domesticated carnivorous mammal, often kept as a pet.", defTrans: "Cachorro", example: "A dog is often called man's best friend.", audioFront: "TTS: Dog", audioBack: "TTS: A dog is often called man's best friend." },
                { term: "Cat", definition: "A small domesticated carnivorous mammal with soft fur.", defTrans: "Gato", example: "The cat slept on the sofa all day.", audioFront: "TTS: Cat", audioBack: "TTS: The cat slept on the sofa all day." },
                { term: "Puppy", definition: "A young dog.", defTrans: "Filhote de cachorro", example: "She adopted a cute little puppy.", audioFront: "TTS: Puppy", audioBack: "TTS: She adopted a cute little puppy." },
                { term: "Kitten", definition: "A young cat.", defTrans: "Filhote de gato", example: "The kitten played with a ball of yarn.", audioFront: "TTS: Kitten", audioBack: "TTS: The kitten played with a ball of yarn." },
                { term: "Rabbit", definition: "A burrowing, plant-eating mammal with long ears.", defTrans: "Coelho", example: "We gave a carrot to the rabbit.", audioFront: "TTS: Rabbit", audioBack: "TTS: We gave a carrot to the rabbit." },
                { term: "Cow", definition: "A large domestic animal kept to produce milk or beef.", defTrans: "Vaca", example: "The cow produces milk on the farm.", audioFront: "TTS: Cow", audioBack: "TTS: The cow produces milk on the farm." },
                { term: "Pig", definition: "A domestic animal raised for pork.", defTrans: "Porco", example: "A pig likes to roll in the mud.", audioFront: "TTS: Pig", audioBack: "TTS: A pig likes to roll in the mud." },
                { term: "Horse", definition: "A large plant-eating domesticated mammal with solid hooves.", defTrans: "Cavalo", example: "He learned to ride a horse.", audioFront: "TTS: Horse", audioBack: "TTS: He learned to ride a horse." },
                { term: "Lion", definition: "A large tawny-colored cat that lives in prides.", defTrans: "Leão", example: "The lion is the king of the jungle.", audioFront: "TTS: Lion", audioBack: "TTS: The lion is the king of the jungle." },
                { term: "Bear", definition: "A large, heavy mammal that walks on the soles of its feet.", defTrans: "Urso", example: "The brown bear was eating fish in the river.", audioFront: "TTS: Bear", audioBack: "TTS: The brown bear was eating fish in the river." },
                { term: "Monkey", definition: "A small to medium-sized primate.", defTrans: "Macaco", example: "A monkey was swinging from the tree.", audioFront: "TTS: Monkey", audioBack: "TTS: A monkey was swinging from the tree." },
                { term: "Whale", definition: "A very large marine mammal.", defTrans: "Baleia", example: "The blue whale is the largest animal in the ocean.", audioFront: "TTS: Whale", audioBack: "TTS: The blue whale is the largest animal in the ocean." },

                { term: "Vet (veterinarian)", definition: "A person qualified to treat diseased or injured animals.", defTrans: "Veterinário(a)", example: "I took my sick dog to the vet.", audioFront: "TTS: Vet", audioBack: "TTS: I took my sick dog to the vet." },
                { term: "Zoo", definition: "An establishment which maintains a collection of wild animals.", defTrans: "Zoológico", example: "We saw lions and tigers at the zoo.", audioFront: "TTS: Zoo", audioBack: "TTS: We saw lions and tigers at the zoo." },
                { term: "Leash", definition: "A strap or cord for restraining and guiding a dog.", defTrans: "Coleira (guia)", example: "Keep the dog on a leash in the park.", audioFront: "TTS: Leash", audioBack: "TTS: Keep the dog on a leash in the park." },
                { term: "Cage", definition: "A structure of bars or wires in which birds or animals are confined.", defTrans: "Gaiola", example: "The bird sings inside its cage.", audioFront: "TTS: Cage", audioBack: "TTS: The bird sings inside its cage." },
                { term: "Tank", definition: "A large receptacle or container for keeping fish.", defTrans: "Aquário / Tanque", example: "The fish swam around in the tank.", audioFront: "TTS: Tank", audioBack: "TTS: The fish swam around in the tank." },
                { term: "Fur", definition: "The short, fine, soft hair of certain animals.", defTrans: "Pelo (de animal)", example: "The rabbit has very soft fur.", audioFront: "TTS: Fur", audioBack: "TTS: The rabbit has very soft fur." },
                { term: "Feather", definition: "Any of the flat appendages growing from a bird's skin.", defTrans: "Pena", example: "The peacock has a colorful feather.", audioFront: "TTS: Feather", audioBack: "TTS: The peacock has a colorful feather." },
                { term: "Scale", definition: "Each of the small, thin horny or bony plates protecting the skin of fish.", defTrans: "Escama", example: "A fish is covered in a shiny scale.", audioFront: "TTS: Scale", audioBack: "TTS: A fish is covered in a shiny scale." },
                { term: "Paw", definition: "An animal's foot having claws and pads.", defTrans: "Pata", example: "The cat licked its injured paw.", audioFront: "TTS: Paw", audioBack: "TTS: The cat licked its injured paw." },
                { term: "Claw", definition: "A curved pointed horny nail on each digit of the foot.", defTrans: "Garra", example: "The bear has a very sharp claw.", audioFront: "TTS: Claw", audioBack: "TTS: The bear has a very sharp claw." },
                { term: "Tail", definition: "The hindmost part of an animal.", defTrans: "Cauda / Rabo", example: "The happy dog wagged its tail.", audioFront: "TTS: Tail", audioBack: "TTS: The happy dog wagged its tail." },
                { term: "Wing", definition: "A modified forelimb that bears large feathers and is used for flying.", defTrans: "Asa", example: "The bird broke its wing and could not fly.", audioFront: "TTS: Wing", audioBack: "TTS: The bird broke its wing and could not fly." },

                { term: "To feed", definition: "To give food to an animal.", defTrans: "Alimentar", example: "Don't forget to feed the cat this morning.", audioFront: "TTS: To feed", audioBack: "TTS: Don't forget to feed the cat this morning." },
                { term: "To walk", definition: "To guide a dog outdoors for exercise.", defTrans: "Passear (com cão)", example: "I wake up early to walk the dog.", audioFront: "TTS: To walk", audioBack: "TTS: I wake up early to walk the dog." },
                { term: "To train", definition: "To teach an animal a particular skill or behavior.", defTrans: "Treinar / Adestrar", example: "You must train your puppy to sit.", audioFront: "TTS: To train", audioBack: "TTS: You must train your puppy to sit." },
                { term: "To bark", definition: "To make the sharp explosive cry of a dog.", defTrans: "Latir", example: "The dog started to bark at the stranger.", audioFront: "TTS: To bark", audioBack: "TTS: The dog started to bark at the stranger." },
                { term: "To adopt", definition: "To legally take another's pet and bring it up as one's own.", defTrans: "Adotar", example: "We decided to adopt a rescue dog.", audioFront: "TTS: To adopt", audioBack: "TTS: We decided to adopt a rescue dog." },
                { term: "Domestic", definition: "An animal kept as a pet or on a farm.", defTrans: "Doméstico", example: "Cows and pigs are domestic animals.", audioFront: "TTS: Domestic", audioBack: "TTS: Cows and pigs are domestic animals." },
                { term: "Wild", definition: "An animal living in a state of nature, not domesticated.", defTrans: "Selvagem", example: "You can find wild animals in the forest.", audioFront: "TTS: Wild", audioBack: "TTS: You can find wild animals in the forest." },
                { term: "Fluffy", definition: "Covered with soft, thick hair or feathers.", defTrans: "Fofinho / Peludo", example: "My kitten is very small and fluffy.", audioFront: "TTS: Fluffy", audioBack: "TTS: My kitten is very small and fluffy." },
                { term: "Loyal", definition: "Giving or showing firm and constant support or allegiance.", defTrans: "Leal", example: "A dog is known to be a very loyal friend.", audioFront: "TTS: Loyal", audioBack: "TTS: A dog is known to be a very loyal friend." },
                { term: "Fierce", definition: "Having or displaying an intense or ferocious aggressiveness.", defTrans: "Feroz", example: "The lion was very fierce.", audioFront: "TTS: Fierce", audioBack: "TTS: The lion was very fierce." },
                { term: "Dangerous", definition: "Able or likely to cause harm or injury.", defTrans: "Perigoso", example: "Do not go near the snake, it is dangerous.", audioFront: "TTS: Dangerous", audioBack: "TTS: Do not go near the snake, it is dangerous." },
                { term: "Endangered", definition: "A species seriously at risk of extinction.", defTrans: "Ameaçado de extinção", example: "The blue whale is an endangered species.", audioFront: "TTS: Endangered", audioBack: "TTS: The blue whale is an endangered species." },

                // 3A Items (18 items)
                { term: "Have a pet", definition: "To keep an animal for companionship.", defTrans: "Ter um animal de estimação", example: "I don't have a pet right now.", audioFront: "TTS: Have a pet", audioBack: "TTS: I don't have a pet right now." },
                { term: "Own a pet", definition: "To possess an animal.", defTrans: "Possuir um animal de estimação", example: "It is expensive to own a pet.", audioFront: "TTS: Own a pet", audioBack: "TTS: It is expensive to own a pet." },
                { term: "Walk the dog", definition: "To take a dog out for exercise.", defTrans: "Passear com o cachorro", example: "Every morning, I walk the dog.", audioFront: "TTS: Walk the dog", audioBack: "TTS: Every morning, I walk the dog." },
                { term: "Feed the cat", definition: "To give food to a feline.", defTrans: "Alimentar o gato", example: "Don't forget to feed the cat.", audioFront: "TTS: Feed the cat", audioBack: "TTS: Don't forget to feed the cat." },
                { term: "Clean out the litter box", definition: "To remove waste from a cat's toilet area.", defTrans: "Limpar a caixa de areia", example: "I hate to clean out the litter box.", audioFront: "TTS: Clean out the litter box", audioBack: "TTS: I hate to clean out the litter box." },
                { term: "Take the pet to the vet", definition: "To bring an animal to the doctor.", defTrans: "Levar o animal ao veterinário", example: "If he is sick, take the pet to the vet.", audioFront: "TTS: Take the pet to the vet", audioBack: "TTS: If he is sick, take the pet to the vet." },
                
                { term: "A dog person", definition: "Someone who prefers dogs over cats.", defTrans: "Uma pessoa de cachorro", example: "I am definitely a dog person.", audioFront: "TTS: A dog person", audioBack: "TTS: I am definitely a dog person." },
                { term: "A mixed breed", definition: "An animal with parents of different breeds.", defTrans: "Sem raça definida (vira-lata)", example: "My rescue dog is a mixed breed.", audioFront: "TTS: A mixed breed", audioBack: "TTS: My rescue dog is a mixed breed." },
                { term: "A purebred", definition: "An animal with parents of the same breed.", defTrans: "De raça pura", example: "They bought a purebred cat.", audioFront: "TTS: A purebred", audioBack: "TTS: They bought a purebred cat." },
                { term: "Covered in fur", definition: "Having thick hair all over the body.", defTrans: "Coberto de pelo", example: "The rabbit is covered in fur.", audioFront: "TTS: Covered in fur", audioBack: "TTS: The rabbit is covered in fur." },
                { term: "It has paws", definition: "Stating an animal has soft padded feet.", defTrans: "Tem patas", example: "A cat is quiet because it has paws.", audioFront: "TTS: It has paws", audioBack: "TTS: A cat is quiet because it has paws." },
                { term: "Animal species", definition: "A group of living organisms consisting of similar individuals.", defTrans: "Espécie animal", example: "There are many animal species in the jungle.", audioFront: "TTS: Animal species", audioBack: "TTS: There are many animal species in the jungle." },
                
                { term: "See an animal in the wild", definition: "To observe creatures in their natural habitat.", defTrans: "Ver um animal na natureza", example: "I want to see an animal in the wild.", audioFront: "TTS: See an animal in the wild", audioBack: "TTS: I want to see an animal in the wild." },
                { term: "I'm allergic to", definition: "Having an immune response to something.", defTrans: "Sou alérgico(a) a", example: "I can't go near cats, I'm allergic to them.", audioFront: "TTS: I'm allergic to", audioBack: "TTS: I can't go near cats, I'm allergic to them." },
                { term: "I'm afraid of", definition: "Feeling fear or anxiety about something.", defTrans: "Tenho medo de", example: "I'm afraid of big spiders.", audioFront: "TTS: I'm afraid of", audioBack: "TTS: I'm afraid of big spiders." },
                { term: "Do you have any pets?", definition: "Asking if someone owns domestic animals.", defTrans: "Você tem animais de estimação?", example: "Do you have any pets?", audioFront: "TTS: Do you have any pets?", audioBack: "TTS: Do you have any pets?" },
                { term: "What's your favorite animal?", definition: "Asking about someone's preferred creature.", defTrans: "Qual é o seu animal favorito?", example: "What's your favorite animal?", audioFront: "TTS: What's your favorite animal?", audioBack: "TTS: What's your favorite animal?" },
                { term: "A big responsibility", definition: "A heavy duty or obligation.", defTrans: "Uma grande responsabilidade", example: "Having a puppy is a big responsibility.", audioFront: "TTS: A big responsibility", audioBack: "TTS: Having a puppy is a big responsibility." }
            ]
        }
    ],

    // ======================================================
    // GLOSSARY (All 54 items + Context words)
    // ======================================================
    glossary:[
        // 2A: Types of Animals
        { topic: "Animals", term: "dog", definition: "A domesticated carnivorous mammal.", translation: "Cachorro" },
        { topic: "Animals", term: "cat", definition: "A small domesticated carnivorous mammal.", translation: "Gato" },
        { topic: "Animals", term: "puppy", definition: "A young dog.", translation: "Filhote de cachorro" },
        { topic: "Animals", term: "kitten", definition: "A young cat.", translation: "Filhote de gato" },
        { topic: "Animals", term: "rabbit", definition: "A burrowing, plant-eating mammal.", translation: "Coelho" },
        { topic: "Animals", term: "cow", definition: "A large domestic animal kept for milk/beef.", translation: "Vaca" },
        { topic: "Animals", term: "pig", definition: "A domestic animal raised for pork.", translation: "Porco" },
        { topic: "Animals", term: "horse", definition: "A large plant-eating domesticated mammal.", translation: "Cavalo" },
        { topic: "Animals", term: "lion", definition: "A large tawny-colored cat.", translation: "Leão" },
        { topic: "Animals", term: "bear", definition: "A large, heavy mammal with thick fur.", translation: "Urso" },
        { topic: "Animals", term: "monkey", definition: "A small to medium-sized primate.", translation: "Macaco" },
        { topic: "Animals", term: "whale", definition: "A very large marine mammal.", translation: "Baleia" },

        // 2A: Animal Parts & Places
        { topic: "Places/People", term: "vet", definition: "A person qualified to treat animals.", translation: "Veterinário(a)" },
        { topic: "Places", term: "zoo", definition: "An establishment maintaining wild animals.", translation: "Zoológico" },
        { topic: "Items", term: "leash", definition: "A strap for restraining a dog.", translation: "Coleira (guia)" },
        { topic: "Items", term: "cage", definition: "A structure in which animals are confined.", translation: "Gaiola" },
        { topic: "Items", term: "tank", definition: "A receptacle for keeping fish.", translation: "Aquário / Tanque" },
        { topic: "Parts", term: "fur", definition: "The short, soft hair of certain animals.", translation: "Pelo" },
        { topic: "Parts", term: "feather", definition: "Appendages growing from a bird's skin.", translation: "Pena" },
        { topic: "Parts", term: "scale", definition: "Plates protecting the skin of fish.", translation: "Escama" },
        { topic: "Parts", term: "paw", definition: "An animal's foot having claws and pads.", translation: "Pata" },
        { topic: "Parts", term: "claw", definition: "A curved pointed nail on the foot.", translation: "Garra" },
        { topic: "Parts", term: "tail", definition: "The hindmost part of an animal.", translation: "Rabo / Cauda" },
        { topic: "Parts", term: "wing", definition: "A forelimb used for flying.", translation: "Asa" },

        // 2A: Verbs & Adjectives
        { topic: "Verbs", term: "to-feed", definition: "To give food to an animal.", translation: "Alimentar" },
        { topic: "Verbs", term: "to-walk", definition: "To guide a dog outdoors.", translation: "Passear (com cão)" },
        { topic: "Verbs", term: "to-train", definition: "To teach an animal a skill.", translation: "Treinar / Adestrar" },
        { topic: "Verbs", term: "to-bark", definition: "To make the cry of a dog.", translation: "Latir" },
        { topic: "Verbs", term: "to-adopt", definition: "To take a pet as one's own.", translation: "Adotar" },
        { topic: "Adjectives", term: "domestic", definition: "Kept as a pet or on a farm.", translation: "Doméstico" },
        { topic: "Adjectives", term: "wild", definition: "Living in a state of nature.", translation: "Selvagem" },
        { topic: "Adjectives", term: "fluffy", definition: "Covered with soft, thick hair.", translation: "Fofinho / Peludo" },
        { topic: "Adjectives", term: "loyal", definition: "Giving firm and constant support.", translation: "Leal" },
        { topic: "Adjectives", term: "fierce", definition: "Displaying intense aggressiveness.", translation: "Feroz" },
        { topic: "Adjectives", term: "dangerous", definition: "Likely to cause harm.", translation: "Perigoso" },
        { topic: "Adjectives", term: "endangered", definition: "At risk of extinction.", translation: "Ameaçado de extinção" },

        // 3A: Expressions
        { topic: "Expressions", term: "have-pet", definition: "To keep an animal for companionship.", translation: "Ter um animal de estimação" },
        { topic: "Expressions", term: "own-pet", definition: "To possess an animal.", translation: "Possuir um animal de estimação" },
        { topic: "Expressions", term: "walk-the-dog", definition: "To take a dog out for exercise.", translation: "Passear com o cachorro" },
        { topic: "Expressions", term: "feed-cat", definition: "To give food to a feline.", translation: "Alimentar o gato" },
        { topic: "Expressions", term: "clean-litter-box", definition: "To remove waste from a cat's toilet.", translation: "Limpar a caixa de areia" },
        { topic: "Expressions", term: "take-pet-vet", definition: "To bring an animal to the doctor.", translation: "Levar o animal ao veterinário" },
        
        { topic: "Expressions", term: "dog-person", definition: "Someone who prefers dogs over cats.", translation: "Pessoa de cachorro" },
        { topic: "Expressions", term: "mixed-breed", definition: "An animal with parents of different breeds.", translation: "Sem raça definida (vira-lata)" },
        { topic: "Expressions", term: "purebred", definition: "An animal with parents of the same breed.", translation: "De raça pura" },
        { topic: "Expressions", term: "covered-in-fur", definition: "Having thick hair all over the body.", translation: "Coberto de pelo" },
        { topic: "Expressions", term: "has-paws", definition: "Stating an animal has soft padded feet.", translation: "Tem patas" },
        { topic: "Expressions", term: "animal-species", definition: "A group of living organisms.", translation: "Espécie animal" },
        
        { topic: "Expressions", term: "see-animal-wild", definition: "To observe creatures in their habitat.", translation: "Ver um animal na natureza" },
        { topic: "Expressions", term: "allergic-to", definition: "Having an immune response to something.", translation: "Alérgico a" },
        { topic: "Expressions", term: "afraid-of", definition: "Feeling fear about something.", translation: "Com medo de" },
        { topic: "Expressions", term: "do-you-have-pets", definition: "Asking if someone owns domestic animals.", translation: "Você tem animais de estimação?" },
        { topic: "Expressions", term: "favorite-animal", definition: "Asking about someone's preferred creature.", translation: "Animal favorito" },
        { topic: "Expressions", term: "big-responsibility", definition: "A heavy duty or obligation.", translation: "Uma grande responsabilidade" },

        // Additional Context Words
        { topic: "Context", term: "pet", definition: "A domestic or tamed animal kept for companionship.", translation: "Animal de estimação" },
        { topic: "Context", term: "shelter", definition: "A place giving temporary protection to animals.", translation: "Abrigo" },
        { topic: "Context", term: "fear", definition: "An unpleasant emotion caused by the belief that someone or something is dangerous.", translation: "Medo" }
    ]
});