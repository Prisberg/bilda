export interface QuestionInterface {
    category: string;
    image: string;
    description: string;
    alternatives: string[];
    correctAlternativeIndex: number;
}

export const questions: QuestionInterface[] = [
    {
        category: 'Historia',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
         Duis 
         aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
        alternatives: ['one', 'two', 'three'],
        correctAlternativeIndex: 0
    },
    {
        category: 'Historia',
        image: '',
        description: `Vad står M, D och X för i romerska siffror?`,
        alternatives: [`M= 10, D= 20, X= 100`, `M= 1000, D= 500, X= 10`, `M= 1000, D= 100, X= 50`],
        correctAlternativeIndex: 1
    },
    {
        category: 'Geografi',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png',
        description: 'Geografi',
        alternatives: [`Lorem ipsum dolor sit amet, consectetur adipiscing elit, se
        d do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru
        d exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in volupt
        ate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`, 'two', 'three'],
        correctAlternativeIndex: 0
    },
    {
        category: 'Svenska',
        image: '',
        description: 'Svenska',
        alternatives: ['one', 'two', 'three'],
        correctAlternativeIndex: 0
    },
    {
        category: 'Engelska',
        image: '',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        alternatives: ['one', 'two', 'three'],
        correctAlternativeIndex: 0
    },
    {
        category: 'Matematik',
        image: '',
        description: '',
        alternatives: ['one', 'two', 'three'],
        correctAlternativeIndex: 0
    },
    {
        category: 'Biologi',
        image: '',
        description: '',
        alternatives: ['one', 'two', 'three'],
        correctAlternativeIndex: 0
    },
    {
        category: 'Anatomi',
        image: '',
        description: '',
        alternatives: ['one', 'two', 'three'],
        correctAlternativeIndex: 0
    },
    {
        category: 'Mytologi',
        image: '',
        description: '',
        alternatives: ['one', 'two', 'three'],
        correctAlternativeIndex: 0
    },
    {
        category: 'Religion',
        image: '',
        description: '',
        alternatives: ['one', 'two', 'three'],
        correctAlternativeIndex: 0
    },
    {
        category: 'Kemi',
        image: '',
        description: '',
        alternatives: ['one', 'two', 'three'],
        correctAlternativeIndex: 0
    },
    {
        category: 'Teknik',
        image: '',
        description: '',
        alternatives: ['one', 'two', 'three'],
        correctAlternativeIndex: 0
    },
    {
        category: 'Trafik',
        image: '',
        description: '',
        alternatives: ['one', 'two', 'three'],
        correctAlternativeIndex: 0
    },
    {
        category: 'Juridik',
        image: '',
        description: '',
        alternatives: ['one', 'two', 'three'],
        correctAlternativeIndex: 0
    },
    {
        category: 'Livräddning',
        image: '',
        description: '',
        alternatives: ['one', 'two', 'three'],
        correctAlternativeIndex: 0
    },
    {
        category: 'Överlevnad',
        image: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Tusensk%C3%B6na_04.jpg',
        description: `Tusensköna, ätbar eller inte?`,
        alternatives: [`Inte ätbar`, `Ätbar`],
        correctAlternativeIndex: 1
    },
    {
        category: 'Överlevnad',
        image: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Mj%C3%B6lk%C3%B6rt.JPG',
        description: `Mjölkört, ätbar eller inte?`,
        alternatives: [`Ätbar`, `Inte ätbar`],
        correctAlternativeIndex: 0
    },
    {
        category: 'Överlevnad',
        image: 'https://cdn.britannica.com/92/183192-050-1741C2F9/Belladonna-nightshade-leaves-berries-alkaloids-humans.jpg',
        description: `Belladonna, ätbar eller inte?`,
        alternatives: [`Ätbar`, `Inte ätbar`],
        correctAlternativeIndex: 1
    },
    {
        category: 'Överlevnad',
        image: 'https://www.publicdomainpictures.net/pictures/400000/nahled/blumen-veilchen-stiefmutterchen-1622789200KpR.jpg',
        description: `Violer, ätbar eller inte?`,
        alternatives: [`Ätbar`, `Inte ätbar`],
        correctAlternativeIndex: 0
    },
    {
        category: 'Överlevnad',
        image: 'https://upload.wikimedia.org/wikipedia/commons/9/9f/Heracleum_mantegazzianum_2015-06-16_040.jpg',
        description: `Jätteloka, ätbar eller inte?`,
        alternatives: [`Ätbar`, `Inte ätbar`],
        correctAlternativeIndex: 1
    },
    {
        category: 'Personliga frågor',
        image: '',
        description: '',
        alternatives: ['one', 'two', 'three'],
        correctAlternativeIndex: 0
    },
    {
        category: 'Externt hämtade frågor (Api)',
        image: '',
        description: '',
        alternatives: ['one', 'two', 'three'],
        correctAlternativeIndex: 0
    },
]

console.log(questions[0].description)
