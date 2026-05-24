window.exData = {
    grade: "A1 Beginner",
    bimester: 1,
    chapter: 1,
    lessonNames: {
        "ex-SAMPLE": "A1 - Simple Present Routines"
    },
    
    // ALL EXERCISES ARE NOW IN THE GRANULAR POOL (1 to 15)
    simplePool: {
        
        // 1. Block Harvesting
        1: [
            { source_media: [{text: "I wake up", is_target: true}, {text: "wake wake", is_target: false}, {text: "at 7 AM", is_target: true}] },
            { source_media: [{text: "She goes", is_target: true}, {text: "she go", is_target: false}, {text: "to school", is_target: true}] },
            { source_media: [{text: "They play", is_target: true}, {text: "play they", is_target: false}, {text: "football", is_target: true}, {text: "on Sundays.", is_target: true}] },
            { source_media: [{text: "We eat", is_target: true}, {text: "eating", is_target: false}, {text: "breakfast", is_target: true}, {text: "together.", is_target: true}] },
            { source_media: [{text: "He watches", is_target: true}, {text: "watch", is_target: false}, {text: "TV", is_target: true}, {text: "every night.", is_target: true}] },
            { source_media: [{text: "My dog", is_target: true}, {text: "sleeps", is_target: true}, {text: "sleep sleep", is_target: false}, {text: "on the sofa.", is_target: true}] },
            { source_media: [{text: "I do not", is_target: true}, {text: "I no", is_target: false}, {text: "like", is_target: true}, {text: "mushrooms.", is_target: true}] },
            { source_media: [{text: "Does she", is_target: true}, {text: "Do she", is_target: false}, {text: "work", is_target: true}, {text: "in an office?", is_target: true}] },
            { source_media: [{text: "The train", is_target: true}, {text: "leaves", is_target: true}, {text: "leave", is_target: false}, {text: "at noon.", is_target: true}] },
            { source_media: [{text: "You read", is_target: true}, {text: "books", is_target: true}, {text: "in the evening.", is_target: true}, {text: "book read", is_target: false}] }
        ],

        // 2. Mechanic Identification (Added corrected_sentence)
        2: [
            { broken_sentence: "He play tennis.", block_segments: [ {text_segment: "He", is_error: false}, {text_segment: "play", is_error: true}, {text_segment: "tennis.", is_error: false} ], corrected_sentence: "He plays tennis." },
            { broken_sentence: "They doesn't like pizza.", block_segments: [ {text_segment: "They", is_error: false}, {text_segment: "doesn't like", is_error: true}, {text_segment: "pizza.", is_error: false} ], corrected_sentence: "They don't like pizza." },
            { broken_sentence: "She go to the gym.", block_segments: [ {text_segment: "She", is_error: false}, {text_segment: "go", is_error: true}, {text_segment: "to the gym.", is_error: false} ], corrected_sentence: "She goes to the gym." },
            { broken_sentence: "I watches movies.", block_segments: [ {text_segment: "I", is_error: false}, {text_segment: "watches", is_error: true}, {text_segment: "movies.", is_error: false} ], corrected_sentence: "I watch movies." },
            { broken_sentence: "Does you speak English?", block_segments: [ {text_segment: "Does you", is_error: true}, {text_segment: "speak", is_error: false}, {text_segment: "English?", is_error: false} ], corrected_sentence: "Do you speak English?" },
            { broken_sentence: "My cat sleep all day.", block_segments: [ {text_segment: "My cat", is_error: false}, {text_segment: "sleep", is_error: true}, {text_segment: "all day.", is_error: false} ], corrected_sentence: "My cat sleeps all day." },
            { broken_sentence: "We studies Spanish.", block_segments: [ {text_segment: "We", is_error: false}, {text_segment: "studies", is_error: true}, {text_segment: "Spanish.", is_error: false} ], corrected_sentence: "We study Spanish." },
            { broken_sentence: "Do he live in London?", block_segments: [ {text_segment: "Do he", is_error: true}, {text_segment: "live", is_error: false}, {text_segment: "in London?", is_error: false} ], corrected_sentence: "Does he live in London?" },
            { broken_sentence: "The bus arrive late.", block_segments: [ {text_segment: "The bus", is_error: false}, {text_segment: "arrive", is_error: true}, {text_segment: "late.", is_error: false} ], corrected_sentence: "The bus arrives late." },
            { broken_sentence: "I isn't know.", block_segments: [ {text_segment: "I", is_error: false}, {text_segment: "isn't know", is_error: true}, {text_segment: "the answer.", is_error: false} ], corrected_sentence: "I don't know the answer." }
        ],

        // 3. Categorization Sort (Mapped words to targets)
        3: [
            { categories: ["Actors", "Actions", "Details"], word_pool: [{w: "I", c: "Actors"}, {w: "eat", c: "Actions"}, {w: "an apple", c: "Details"}] },
            { categories: ["Actors", "Actions", "Details"], word_pool: [{w: "They", c: "Actors"}, {w: "study", c: "Actions"}, {w: "at home", c: "Details"}] },
            { categories: ["Actors", "Actions", "Details"], word_pool: [{w: "We", c: "Actors"}, {w: "drink", c: "Actions"}, {w: "water", c: "Details"}] },
            { categories: ["Actors", "Actions", "Details"], word_pool: [{w: "You", c: "Actors"}, {w: "drive", c: "Actions"}, {w: "a car", c: "Details"}] },
            { categories: ["Actors", "Actions", "Details"], word_pool: [{w: "My brother", c: "Actors"}, {w: "plays", c: "Actions"}, {w: "games", c: "Details"}] },
            { categories: ["Actors", "Actions", "Details"], word_pool: [{w: "She", c: "Actors"}, {w: "washes", c: "Actions"}, {w: "the dishes", c: "Details"}] },
            { categories: ["Actors", "Actions", "Details"], word_pool: [{w: "He", c: "Actors"}, {w: "cooks", c: "Actions"}, {w: "dinner", c: "Details"}] },
            { categories: ["Actors", "Actions", "Details"], word_pool: [{w: "I", c: "Actors"}, {w: "buy", c: "Actions"}, {w: "groceries", c: "Details"}] },
            { categories: ["Actors", "Actions", "Details"], word_pool: [{w: "You", c: "Actors"}, {w: "call", c: "Actions"}, {w: "your friend", c: "Details"}] },
            { categories: ["Actors", "Actions", "Details"], word_pool: [{w: "We", c: "Actors"}, {w: "start", c: "Actions"}, {w: "work", c: "Details"}] }
        ],

        // 4. The Deconstruction Drill
        4: [
            { complex_sentence: [ {text_chunk: "Every morning, ", deletable: true}, {text_chunk: "I", deletable: false}, {text_chunk: "drink", deletable: false}, {text_chunk: " hot coffee.", deletable: true} ] },
            { complex_sentence: [ {text_chunk: "Usually, ", deletable: true}, {text_chunk: "she", deletable: false}, {text_chunk: "works", deletable: false}, {text_chunk: " from 9 to 5.", deletable: true} ] },
            { complex_sentence: [ {text_chunk: "Because he is tired, ", deletable: true}, {text_chunk: "he", deletable: false}, {text_chunk: "sleeps", deletable: false}, {text_chunk: " on the couch.", deletable: true} ] },
            { complex_sentence: [ {text_chunk: "On weekends, ", deletable: true}, {text_chunk: "they", deletable: false}, {text_chunk: "play", deletable: false}, {text_chunk: " football.", deletable: true} ] },
            { complex_sentence: [ {text_chunk: "In the evening, ", deletable: true}, {text_chunk: "we", deletable: false}, {text_chunk: "watch", deletable: false}, {text_chunk: " TV together.", deletable: true} ] },
            { complex_sentence: [ {text_chunk: "After school, ", deletable: true}, {text_chunk: "the children", deletable: false}, {text_chunk: "do", deletable: false}, {text_chunk: " their homework.", deletable: true} ] },
            { complex_sentence: [ {text_chunk: "Before breakfast, ", deletable: true}, {text_chunk: "I", deletable: false}, {text_chunk: "run", deletable: false}, {text_chunk: " for 30 minutes.", deletable: true} ] },
            { complex_sentence: [ {text_chunk: "Without a doubt, ", deletable: true}, {text_chunk: "the sun", deletable: false}, {text_chunk: "rises", deletable: false}, {text_chunk: " in the east.", deletable: true} ] },
            { complex_sentence: [ {text_chunk: "Every winter, ", deletable: true}, {text_chunk: "it", deletable: false}, {text_chunk: "snows", deletable: false}, {text_chunk: " a lot here.", deletable: true} ] },
            { complex_sentence: [ {text_chunk: "At exactly noon, ", deletable: true}, {text_chunk: "the bell", deletable: false}, {text_chunk: "rings", deletable: false}, {text_chunk: " loudly.", deletable: true} ] }
        ],

        // 5. The Block Detective
        5: [
            { masked_sentence: "He always [glips] a book before going to sleep.", multiple_choice_options: [ {text: "reads", is_correct: true}, {text: "eats", is_correct: false}, {text: "quickly", is_correct: false} ] },
            { masked_sentence: "She [zorks] her teeth twice a day.", multiple_choice_options: [ {text: "brushes", is_correct: true}, {text: "water", is_correct: false}, {text: "sleeps", is_correct: false} ] },
            { masked_sentence: "They [flarp] tennis every Saturday morning.", multiple_choice_options: [ {text: "play", is_correct: true}, {text: "under", is_correct: false}, {text: "listen", is_correct: false} ] },
            { masked_sentence: "I [blip] to music when I clean.", multiple_choice_options: [ {text: "listen", is_correct: true}, {text: "look", is_correct: false}, {text: "apple", is_correct: false} ] },
            { masked_sentence: "The dog [borks] loudly at strangers.", multiple_choice_options: [ {text: "barks", is_correct: true}, {text: "happy", is_correct: false}, {text: "cat", is_correct: false} ] },
            { masked_sentence: "We usually [plom] breakfast at 8 AM.", multiple_choice_options: [ {text: "eat", is_correct: true}, {text: "run", is_correct: false}, {text: "blue", is_correct: false} ] },
            { masked_sentence: "The teacher [trelps] on the whiteboard.", multiple_choice_options: [ {text: "writes", is_correct: true}, {text: "drinks", is_correct: false}, {text: "books", is_correct: false} ] },
            { masked_sentence: "My mother [sploms] dinner in the kitchen.", multiple_choice_options: [ {text: "cooks", is_correct: true}, {text: "goes", is_correct: false}, {text: "very", is_correct: false} ] },
            { masked_sentence: "He [klimps] to work by bus.", multiple_choice_options: [ {text: "travels", is_correct: true}, {text: "eats", is_correct: false}, {text: "happy", is_correct: false} ] },
            { masked_sentence: "You [vlop] nice clothes today.", multiple_choice_options: [ {text: "wear", is_correct: true}, {text: "speak", is_correct: false}, {text: "often", is_correct: false} ] }
        ],

        // 6. Contextual Assembly
        6: [
            { context_cue: "Describe what you do on Sunday mornings.", available_blocks: ["I", "wake up", "late", "and", "drink", "coffee"], correct_sequence: ["I", "wake up", "late", "and", "drink", "coffee"] },
            { context_cue: "Say where your friend works.", available_blocks: ["My friend", "works", "at", "the", "bank"], correct_sequence: ["My friend", "works", "at", "the", "bank"] },
            { context_cue: "Explain that you do not like winter.", available_blocks: ["I", "do not", "like", "the", "cold", "weather"], correct_sequence: ["I", "do not", "like", "the", "cold", "weather"] },
            { context_cue: "Ask if someone speaks Spanish.", available_blocks: ["Do", "you", "speak", "Spanish", "well"], correct_sequence: ["Do", "you", "speak", "Spanish", "well"] },
            { context_cue: "Describe a cat's habit.", available_blocks: ["The cat", "sleeps", "on", "the", "sofa"], correct_sequence: ["The cat", "sleeps", "on", "the", "sofa"] },
            { context_cue: "Talk about your brother's hobby.", available_blocks: ["He", "plays", "video games", "every", "night"], correct_sequence: ["He", "plays", "video games", "every", "night"] },
            { context_cue: "State what time school starts.", available_blocks: ["The class", "starts", "at", "9", "AM"], correct_sequence: ["The class", "starts", "at", "9", "AM"] },
            { context_cue: "Say how you travel to work.", available_blocks: ["I", "take", "the bus", "to", "work"], correct_sequence: ["I", "take", "the bus", "to", "work"] },
            { context_cue: "Ask where someone lives.", available_blocks: ["Where", "do", "you", "live", "now"], correct_sequence: ["Where", "do", "you", "live", "now"] },
            { context_cue: "Describe a healthy habit.", available_blocks: ["She", "drinks", "water", "every", "day"], correct_sequence: ["She", "drinks", "water", "every", "day"] }
        ],

        // 7. Block Swapping (5-step Sequence)
        7: [
            { base_sentence: "I drink coffee every morning.", swaps: [ {cue: "tea", expected: "I drink tea every morning."}, {cue: "evening", expected: "I drink tea every evening."}, {cue: "He", expected: "He drinks tea every evening."}, {cue: "milk", expected: "He drinks milk every evening."}, {cue: "?", expected: "Does he drink milk every evening?"} ] },
            { base_sentence: "They play tennis on Saturdays.", swaps: [ {cue: "football", expected: "They play football on Saturdays."}, {cue: "We", expected: "We play football on Saturdays."}, {cue: "Sundays", expected: "We play football on Sundays."}, {cue: "watch", expected: "We watch football on Sundays."}, {cue: "never", expected: "We never watch football on Sundays."} ] },
            { base_sentence: "She eats lunch at noon.", swaps: [ {cue: "dinner", expected: "She eats dinner at noon."}, {cue: "night", expected: "She eats dinner at night."}, {cue: "I", expected: "I eat dinner at night."}, {cue: "cook", expected: "I cook dinner at night."}, {cue: "not", expected: "I do not cook dinner at night."} ] },
            { base_sentence: "The train leaves at 9 AM.", swaps: [ {cue: "bus", expected: "The bus leaves at 9 AM."}, {cue: "arrives", expected: "The bus arrives at 9 AM."}, {cue: "10 AM", expected: "The bus arrives at 10 AM."}, {cue: "They", expected: "They arrive at 10 AM."}, {cue: "?", expected: "Do they arrive at 10 AM?"} ] },
            { base_sentence: "I read books in the evening.", swaps: [ {cue: "magazines", expected: "I read magazines in the evening."}, {cue: "morning", expected: "I read magazines in the morning."}, {cue: "buy", expected: "I buy magazines in the morning."}, {cue: "She", expected: "She buys magazines in the morning."}, {cue: "?", expected: "Does she buy magazines in the morning?"} ] },
            { base_sentence: "My brother works in a bank.", swaps: [ {cue: "hospital", expected: "My brother works in a hospital."}, {cue: "sister", expected: "My sister works in a hospital."}, {cue: "studies", expected: "My sister studies in a hospital."}, {cue: "school", expected: "My sister studies in a school."}, {cue: "not", expected: "My sister doesn't study in a school."} ] },
            { base_sentence: "We study English at school.", swaps: [ {cue: "French", expected: "We study French at school."}, {cue: "home", expected: "We study French at home."}, {cue: "speak", expected: "We speak French at home."}, {cue: "He", expected: "He speaks French at home."}, {cue: "never", expected: "He never speaks French at home."} ] },
            { base_sentence: "I do not like spicy food.", swaps: [ {cue: "sweet", expected: "I do not like sweet food."}, {cue: "drink", expected: "I do not drink sweet food."}, {cue: "tea", expected: "I do not drink sweet tea."}, {cue: "She", expected: "She does not drink sweet tea."}, {cue: "?", expected: "Does she drink sweet tea?"} ] },
            { base_sentence: "Does she live in London?", swaps: [ {cue: "Paris", expected: "Does she live in Paris?"}, {cue: "he", expected: "Does he live in Paris?"}, {cue: "work", expected: "Does he work in Paris?"}, {cue: "+", expected: "He works in Paris."}, {cue: "Rome", expected: "He works in Rome."} ] },
            { base_sentence: "The dog barks loudly at night.", swaps: [ {cue: "cat", expected: "The cat barks loudly at night."}, {cue: "meows", expected: "The cat meows loudly at night."}, {cue: "morning", expected: "The cat meows loudly at morning."}, {cue: "quietly", expected: "The cat meows quietly at morning."}, {cue: "sleeps", expected: "The cat sleeps quietly at morning."} ] }
        ],

        // 8. The Expansion Drill (Sequential)
        8: [
            { stages: [ {incoming_block: "I eat", expected: "I eat"}, {incoming_block: "breakfast", expected: "I eat breakfast"}, {incoming_block: "at 8 AM", expected: "I eat breakfast at 8 AM"} ] },
            { stages: [ {incoming_block: "She works", expected: "She works"}, {incoming_block: "hard", expected: "She works hard"}, {incoming_block: "every day", expected: "She works hard every day"} ] },
            { stages: [ {incoming_block: "We play", expected: "We play"}, {incoming_block: "football", expected: "We play football"}, {incoming_block: "in the park", expected: "We play football in the park"} ] },
            { stages: [ {incoming_block: "He watches", expected: "He watches"}, {incoming_block: "movies", expected: "He watches movies"}, {incoming_block: "on weekends", expected: "He watches movies on weekends"} ] },
            { stages: [ {incoming_block: "They go", expected: "They go"}, {incoming_block: "to the gym", expected: "They go to the gym"}, {incoming_block: "after work", expected: "They go to the gym after work"} ] },
            { stages: [ {incoming_block: "The train", expected: "The train"}, {incoming_block: "leaves", expected: "The train leaves"}, {incoming_block: "early", expected: "The train leaves early"} ] },
            { stages: [ {incoming_block: "I listen", expected: "I listen"}, {incoming_block: "to music", expected: "I listen to music"}, {incoming_block: "while cooking", expected: "I listen to music while cooking"} ] },
            { stages: [ {incoming_block: "She reads", expected: "She reads"}, {incoming_block: "a book", expected: "She reads a book"}, {incoming_block: "before bed", expected: "She reads a book before bed"} ] },
            { stages: [ {incoming_block: "My dog", expected: "My dog"}, {incoming_block: "sleeps", expected: "My dog sleeps"}, {incoming_block: "on the rug", expected: "My dog sleeps on the rug"} ] },
            { stages: [ {incoming_block: "We study", expected: "We study"}, {incoming_block: "English", expected: "We study English"}, {incoming_block: "online", expected: "We study English online"} ] }
        ],

        // 9. The Connector Bridge
        9: [
            { clause_A: "I like apples,", clause_B: "I don't like bananas.", connector_pool: ["and", "but", "because", "so"], correct_connector: "but" },
            { clause_A: "He is tired,", clause_B: "he works a lot.", connector_pool: ["and", "but", "because", "so"], correct_connector: "because" },
            { clause_A: "She studies hard,", clause_B: "she gets good grades.", connector_pool: ["and", "but", "because", "so"], correct_connector: "so" },
            { clause_A: "We have coffee", clause_B: "we have toast for breakfast.", connector_pool: ["and", "but", "because", "so"], correct_connector: "and" },
            { clause_A: "I want to go out,", clause_B: "it is raining.", connector_pool: ["and", "but", "because", "so"], correct_connector: "but" },
            { clause_A: "They live in Paris,", clause_B: "they speak French.", connector_pool: ["and", "but", "because", "so"], correct_connector: "so" },
            { clause_A: "He doesn't eat meat,", clause_B: "he is a vegetarian.", connector_pool: ["and", "but", "because", "so"], correct_connector: "because" },
            { clause_A: "I wash the dishes", clause_B: "my brother cleans the floor.", connector_pool: ["and", "but", "because", "so"], correct_connector: "and" },
            { clause_A: "The movie is long,", clause_B: "it is very interesting.", connector_pool: ["and", "but", "because", "so"], correct_connector: "but" },
            { clause_A: "I need money,", clause_B: "I work every day.", connector_pool: ["and", "but", "because", "so"], correct_connector: "so" }
        ],

        // 10. The Block Jumble (Updated to evaluate string match to fix the randomizer bug)
        10: [
            { shattered_blocks: ["every day", "I", "coffee", "drink"], expected_sentence: "I drink coffee every day" },
            { shattered_blocks: ["works", "She", "a bank", "in"], expected_sentence: "She works in a bank" },
            { shattered_blocks: ["play", "We", "on Sundays", "tennis"], expected_sentence: "We play tennis on Sundays" },
            { shattered_blocks: ["like", "doesn't", "He", "vegetables"], expected_sentence: "He doesn't like vegetables" },
            { shattered_blocks: ["live", "Where", "do", "you"], expected_sentence: "Where do you live" },
            { shattered_blocks: ["at 8 AM", "start", "Classes"], expected_sentence: "Classes start at 8 AM" },
            { shattered_blocks: ["barks", "The dog", "loudly"], expected_sentence: "The dog barks loudly" },
            { shattered_blocks: ["don't", "I", "know"], expected_sentence: "I don't know" },
            { shattered_blocks: ["bus", "take", "the", "They"], expected_sentence: "They take the bus" },
            { shattered_blocks: ["TV", "watches", "often", "She"], expected_sentence: "She often watches TV" }
        ],

        // 11. The Echo-Shadow (Now has 10 items to allow 3-per-page)
        11: [
            { transcript_text: "I wake up at seven.", waveform_data: [1, 4, 8, 12, 15, 12, 8, 4, 1] },
            { transcript_text: "She works in an office.", waveform_data: [2, 5, 10, 14, 10, 5, 2] },
            { transcript_text: "Do you like coffee?", waveform_data: [3, 6, 9, 12, 9, 6, 3] },
            { transcript_text: "We eat dinner at eight.", waveform_data: [1, 5, 10, 15, 10, 5, 1] },
            { transcript_text: "He doesn't have a car.", waveform_data: [4, 8, 12, 16, 12, 8, 4] },
            { transcript_text: "They play tennis on weekends.", waveform_data: [2, 6, 11, 15, 11, 6, 2] },
            { transcript_text: "Where do you live?", waveform_data: [3, 7, 10, 14, 10, 7, 3] },
            { transcript_text: "The bus arrives late.", waveform_data: [1, 4, 9, 13, 9, 4, 1] },
            { transcript_text: "I read books every night.", waveform_data: [2, 5, 10, 14, 10, 5, 2] },
            { transcript_text: "She speaks three languages.", waveform_data: [3, 6, 11, 15, 11, 6, 3] }
        ],

        // 12. Backchaining
        12: [
            { phonetic_chunks: ["...at seven.", "...wake up at seven.", "I wake up at seven."] },
            { phonetic_chunks: ["...an office.", "...works in an office.", "She works in an office."] },
            { phonetic_chunks: ["...like coffee?", "...you like coffee?", "Do you like coffee?"] },
            { phonetic_chunks: ["...at eight.", "...eat dinner at eight.", "We eat dinner at eight."] },
            { phonetic_chunks: ["...a car.", "...have a car.", "He doesn't have a car."] },
            { phonetic_chunks: ["...on weekends.", "...tennis on weekends.", "They play tennis on weekends."] },
            { phonetic_chunks: ["...live?", "...do you live?", "Where do you live?"] },
            { phonetic_chunks: ["...late.", "...arrives late.", "The bus arrives late."] },
            { phonetic_chunks: ["...every night.", "...books every night.", "I read books every night."] },
            { phonetic_chunks: ["...three languages.", "...speaks three languages.", "She speaks three languages."] }
        ],

        // 13. The Rhythmic Pulse
        13: [
            { base_bpm: 80, cue_pool: ["Wake up", "Brush teeth", "Eat breakfast"] },
            { base_bpm: 80, cue_pool: ["Go to work", "Start computer", "Check email"] },
            { base_bpm: 80, cue_pool: ["Take a break", "Drink water", "Return to desk"] },
            { base_bpm: 80, cue_pool: ["Finish work", "Leave office", "Catch the bus"] },
            { base_bpm: 80, cue_pool: ["Arrive home", "Unlock door", "Pet the dog"] },
            { base_bpm: 80, cue_pool: ["Cook dinner", "Set the table", "Eat food"] },
            { base_bpm: 80, cue_pool: ["Wash dishes", "Clean kitchen", "Take out trash"] },
            { base_bpm: 80, cue_pool: ["Watch TV", "Read a book", "Relax"] },
            { base_bpm: 80, cue_pool: ["Take a shower", "Brush hair", "Put on pajamas"] },
            { base_bpm: 80, cue_pool: ["Turn off lights", "Get in bed", "Go to sleep"] }
        ],

        // 14. The Free Build
        14: [
            { scenario_prompt: "Say what you drink every morning.", mastered_inventory: ["I", "drink", "coffee", "tea", "every", "morning"], validation_regex: "^I drink (coffee|tea) every morning" },
            { scenario_prompt: "Tell someone where you live.", mastered_inventory: ["I", "live", "in", "London", "New York", "a house"], validation_regex: "^I live in (London|New York|a house)" },
            { scenario_prompt: "Describe your weekend hobby.", mastered_inventory: ["I", "play", "tennis", "games", "on", "weekends"], validation_regex: "^I play (tennis|games) on weekends" },
            { scenario_prompt: "Say what time you usually wake up.", mastered_inventory: ["I", "wake up", "at", "7 AM", "8 AM"], validation_regex: "^I wake up at (7 AM|8 AM)" },
            { scenario_prompt: "Explain how you go to work.", mastered_inventory: ["I", "take", "the bus", "the train", "to work"], validation_regex: "^I take the (bus|train) to work" },
            { scenario_prompt: "Say what your friend does.", mastered_inventory: ["My friend", "works", "studies", "hard"], validation_regex: "^My friend (works|studies) hard" },
            { scenario_prompt: "State something you do not like.", mastered_inventory: ["I", "do not", "like", "spicy food", "cold weather"], validation_regex: "^I do not like (spicy food|cold weather)" },
            { scenario_prompt: "Ask someone if they speak a language.", mastered_inventory: ["Do", "you", "speak", "English", "Spanish"], validation_regex: "^Do you speak (English|Spanish)\\??" },
            { scenario_prompt: "Tell someone what time the class starts.", mastered_inventory: ["The class", "starts", "at", "9 AM", "10 AM"], validation_regex: "^The class starts at (9 AM|10 AM)" },
            { scenario_prompt: "Describe your pet.", mastered_inventory: ["My dog", "sleeps", "barks", "a lot"], validation_regex: "^My dog (sleeps|barks) a lot" }
        ],

        // 15. The Next Chapter
        15: [
            { current_narrative: "It is 7:00 AM. The alarm rings loudly.", prompt_question: "What does he do next?", branching_starters: ["He wakes up and...", "He hits snooze and..."] },
            { current_narrative: "She finishes work at 5:00 PM and walks outside.", prompt_question: "What does she do next?", branching_starters: ["She takes the bus to...", "She meets a friend for..."] },
            { current_narrative: "The family sits at the dining table. The food is ready.", prompt_question: "What happens next?", branching_starters: ["They eat dinner and...", "They talk about..."] },
            { current_narrative: "He arrives at the gym. He has his water bottle.", prompt_question: "What does he do?", branching_starters: ["He runs on the...", "He lifts weights for..."] },
            { current_narrative: "It is raining outside. She looks out the window.", prompt_question: "What does she decide?", branching_starters: ["She stays home and...", "She takes an umbrella and..."] },
            { current_narrative: "The teacher walks into the classroom. The students are quiet.", prompt_question: "What does the teacher do?", branching_starters: ["She says hello and...", "She writes on the..."] },
            { current_narrative: "He opens the refrigerator. He is very hungry.", prompt_question: "What does he do?", branching_starters: ["He makes a sandwich because...", "He drinks some juice and..."] },
            { current_narrative: "It is late at night. The TV is still on.", prompt_question: "What happens next?", branching_starters: ["He turns off the TV and...", "He falls asleep on the..."] },
            { current_narrative: "She goes to the supermarket to buy groceries.", prompt_question: "What does she buy?", branching_starters: ["She buys fresh fruit and...", "She needs milk, so..."] },
            { current_narrative: "The dog stands by the front door with a leash.", prompt_question: "What does the owner do?", branching_starters: ["He takes the dog for...", "He opens the door and..."] }
        ]
    }
};

window.initExercise(window.exData);