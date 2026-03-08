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
            title: "Foundation & Daily Life",
            description: "Essential vocabulary and grammar for everyday interactions.",
            topics: [
                { id: "lesson-1", title: "1 - Introductions & Greetings" },
                { id: "lesson-2", title: "2 - Family & Relationships" },
                { id: "lesson-3", title: "3 - My House & Furniture" },
                { id: "lesson-4", title: "4 - Daily Routines & Time" },
                { id: "lesson-5", title: "5 - Jobs & Occupations" },
                { id: "lesson-6", title: "6 - Hobbies & Free Time" },
                { id: "lesson-7", title: "7 - Food & Drink" }
            ]
        },
        2: {
            title: "Community & The World",
            description: "Navigating the city, traveling, and taking care of yourself.",
            topics: [
                { id: "lesson-8", title: "8 - Places in the City" },
                { id: "lesson-9", title: "9 - Shopping & Money" },
                { id: "lesson-10", title: "10 - Travel & Transportation" }, // <-- Matches your Lesson 10
                { id: "lesson-11", title: "11 - Health & The Body" },
                { id: "lesson-12", title: "12 - Clothes & Fashion" },
                { id: "lesson-13", title: "13 - Weather & Seasons" },
                { id: "lesson-14", title: "14 - Review: Block 2" }
            ]
        },
        3: {
            title: "Narratives & Experiences",
            description: "Talking about the past, telling stories, and expressing feelings.",
            topics: [
                { id: "lesson-15", title: "15 - Past Events & Memories" },
                { id: "lesson-16", title: "16 - Future Plans & Dreams" },
                { id: "lesson-17", title: "17 - Childhood Stories" },
                { id: "lesson-18", title: "18 - Entertainment & Media" },
                { id: "lesson-19", title: "19 - Feelings & Emotions" },
                { id: "lesson-20", title: "20 - Giving Opinions" },
                { id: "lesson-21", title: "21 - Nature & Animals" }
            ]
        },
        4: {
            title: "Society & Innovation",
            description: "Complex topics regarding modern life and technology.",
            topics: [
                { id: "lesson-22", title: "22 - Technology & Social Media" },
                { id: "lesson-23", title: "23 - Education & Learning" },
                { id: "lesson-24", title: "24 - The Environment" },
                { id: "lesson-25", title: "25 - Crime & Law" },
                { id: "lesson-26", title: "26 - Social Issues" },
                { id: "lesson-27", title: "27 - Art & Culture" },
                { id: "lesson-28", title: "28 - Review: Block 4" }
            ]
        },
        5: {
            title: "Advanced Communication",
            description: "Abstract concepts, business English, and debate.",
            topics: [
                { id: "lesson-29", title: "29 - Business English" },
                { id: "lesson-30", title: "30 - Global Politics" },
                { id: "lesson-31", title: "31 - Psychology & Mind" },
                { id: "lesson-32", title: "32 - Literature & Books" },
                { id: "lesson-33", title: "33 - Debating & Arguments" },
                { id: "lesson-34", title: "34 - Abstract Concepts" },
                { id: "lesson-35", title: "35 - Final Course Review" }
            ]
        }
    }
});