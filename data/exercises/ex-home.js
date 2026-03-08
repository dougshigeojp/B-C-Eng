/**
 * ENGLISH BLOCK ASSEMBLING - EXERCISES DASHBOARD
 */
window.initExercise({
    isDashboard: true,
    title: "Practice Portal",
    
    // A simple dictionary to map IDs to Names
    lessonNames: {
        // BLOCK 1: Foundation & Daily Life
        "1-1": "1 - Introductions & Greetings",
        "1-2": "2 - Family & Relationships",
        "1-3": "3 - My House & Furniture",
        "1-4": "4 - Daily Routines & Time",
        "1-5": "5 - Jobs & Occupations",
        "1-6": "6 - Hobbies & Free Time",
        "1-7": "7 - Food & Drink",

        // BLOCK 2: Community & The World
        "2-8": "8 - Places in the City",
        "2-9": "9 - Shopping & Money",
        "2-10": "10 - Travel & Transportation",
        "2-11": "11 - Health & The Body",
        "2-12": "12 - Clothes & Fashion",
        "2-13": "13 - Weather & Seasons",
        "2-14": "14 - Review: Block 2",

        // BLOCK 3: Narratives & Experiences
        "3-15": "15 - Past Events & Memories",
        "3-16": "16 - Future Plans & Dreams",
        "3-17": "17 - Childhood Stories",
        "3-18": "18 - Entertainment & Media",
        "3-19": "19 - Feelings & Emotions",
        "3-20": "20 - Giving Opinions",
        "3-21": "21 - Nature & Animals",

        // BLOCK 4: Society & Innovation
        "4-22": "22 - Technology & Social Media",
        "4-23": "23 - Education & Learning",
        "4-24": "24 - The Environment",
        "4-25": "25 - Crime & Law",
        "4-26": "26 - Social Issues",
        "4-27": "27 - Art & Culture",
        "4-28": "28 - Review: Block 4",

        // BLOCK 5: Advanced Communication
        "5-29": "29 - Business English",
        "5-30": "30 - Global Politics",
        "5-31": "31 - Psychology & Mind",
        "5-32": "32 - Literature & Books",
        "5-33": "33 - Debating & Arguments",
        "5-34": "34 - Abstract Concepts",
        "5-35": "35 - Final Course Review"
    },

    blocks: {
        1: { title: "Foundation & Daily Life", topics: ["1-1", "1-2", "1-3", "1-4", "1-5", "1-6", "1-7"] },
        2: { title: "Community & The World", topics: ["2-8", "2-9", "2-10", "2-11", "2-12", "2-13", "2-14"] },
        3: { title: "Narratives & Experiences", topics: ["3-15", "3-16", "3-17", "3-18", "3-19", "3-20", "3-21"] },
        4: { title: "Society & Innovation", topics: ["4-22", "4-23", "4-24", "4-25", "4-26", "4-27", "4-28"] },
        5: { title: "Advanced Communication", topics: ["5-29", "5-30", "5-31", "5-32", "5-33", "5-34", "5-35"] }
    }
});