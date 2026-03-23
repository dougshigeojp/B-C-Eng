/**
 * English Block Assembling - HOME DASHBOARD DATA
 * Defines the course structure, blocks, and topic titles.
 */

window.initLesson({
    isHome: true,
    courseTitle: "English Block Assembling",
    description: "Select a Block to begin building your skills.",
    
    // THE COURSE MAP
    // 5 Blocks, 7 Topics per Block (Total 35 Lessons)
    blocks: {
        1: {
            title: "Starters - Daily Life",
            description: "Essential vocabulary and grammar for everyday interactions.",
            topics: [
                { id: "lesson-01", title: "1 - Introductions & Greetings" },
                { id: "lesson-02", title: "2 - Daily Routines" },
                { id: "lesson-03", title: "3 - Family and Friends" },
                { id: "lesson-04", title: "4 - Food and Drink" },
                { id: "lesson-05", title: "5 - Shopping" },
                { id: "lesson-06", title: "6 - Weather & Seasons" },
                { id: "lesson-07", title: "7 - Time & Dates" }
            ]
        },
        2: {
            title: "First Steps - City & Travel",
            description: "Navigating the city, traveling, and taking care of yourself.",
            topics: [
                { id: "lesson-08", title: "8 - Hobbies & Interests" },
                { id: "lesson-09", title: "9 - Health & Wellbeing" },
                { id: "lesson-10", title: "10 - Travel & Transportation" }, // <-- Matches your Lesson 10
                { id: "lesson-11", title: "11 - Home & Living" },
                { id: "lesson-12", title: "12 - Work & Occupations" },
                { id: "lesson-13", title: "13 - Education & Learning" },
                { id: "lesson-14", title: "14 - Technology & Gadgets" }
            ]
        },
        3: {
            title: "Communicating - Everyday Situations",
            description: "Talking about the past, telling stories, and expressing feelings.",
            topics: [
                { id: "lesson-15", title: "15 - Leisure Activities" },
                { id: "lesson-16", title: "16 - Feelings & Emotions" },
                { id: "lesson-17", title: "17 - Shopping for Clothes" },
                { id: "lesson-18", title: "18 - Public Services" },
                { id: "lesson-19", title: "19 - Telecommunications" },
                { id: "lesson-20", title: "20 - Events & Celebrations" },
                { id: "lesson-21", title: "21 - Transportation & Directions" }
            ]
        },
        4: {
            title: "Environment & Society",
            description: "Complex topics regarding modern life and technology.",
            topics: [
                { id: "lesson-22", title: "22 - Nature & Environment" },
                { id: "lesson-23", title: "23 - Health & Fitness" },
                { id: "lesson-24", title: "24 - Food & Cooking" },
                { id: "lesson-25", title: "25 - Travel Experiences" },
                { id: "lesson-26", title: "26 - Community & Neighborhood" },
                { id: "lesson-27", title: "27 - Emergency Situations" },
                { id: "lesson-28", title: "28 - Cultural Differences" }
            ]
        },
        5: {
            title: "Handling Complexity - Abstract & Business",
            description: "Abstract concepts, business English, and debate.",
            topics: [
                { id: "lesson-29", title: "29 - Social Media & Online Communication" },
                { id: "lesson-30", title: "30 - Pets & Animals" },
                { id: "lesson-31", title: "31 - Personal Development" },
                { id: "lesson-32", title: "32 - Art & Creativity" },
                { id: "lesson-33", title: "33 - Transportation & Commuting" },
                { id: "lesson-34", title: "34 - Weather & Disasters" },
                { id: "lesson-35", title: "35 - Friendship & Social Life" }
            ]
        }
    }
});