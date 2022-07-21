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
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        alternatives: ['one', 'two', 'three'],
        correctAlternativeIndex: 0
    },
    {
        category: 'Geografi',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png',
        description: 'Geografi',
        alternatives: ['one', 'two', 'three'],
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
        image: 'string',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        alternatives: ['one', 'two', 'three'],
        correctAlternativeIndex: 0
    },
    {
        category: 'Matematik',
        image: 'string',
        description: 'string',
        alternatives: ['one', 'two', 'three'],
        correctAlternativeIndex: 0
    },
    {
        category: 'Biologi',
        image: 'string',
        description: 'string',
        alternatives: ['one', 'two', 'three'],
        correctAlternativeIndex: 0
    },
    {
        category: 'Anatomi',
        image: 'string',
        description: 'string',
        alternatives: ['one', 'two', 'three'],
        correctAlternativeIndex: 0
    },
    {
        category: 'Mytologi',
        image: 'string',
        description: 'string',
        alternatives: ['one', 'two', 'three'],
        correctAlternativeIndex: 0
    },
    {
        category: 'Religion',
        image: 'string',
        description: 'string',
        alternatives: ['one', 'two', 'three'],
        correctAlternativeIndex: 0
    },
    {
        category: 'Kemi',
        image: 'string',
        description: 'string',
        alternatives: ['one', 'two', 'three'],
        correctAlternativeIndex: 0
    },
    {
        category: 'Teknik',
        image: 'string',
        description: 'string',
        alternatives: ['one', 'two', 'three'],
        correctAlternativeIndex: 0
    },
    {
        category: 'Trafik',
        image: 'string',
        description: 'string',
        alternatives: ['one', 'two', 'three'],
        correctAlternativeIndex: 0
    },
    {
        category: 'Juridik',
        image: 'string',
        description: 'string',
        alternatives: ['one', 'two', 'three'],
        correctAlternativeIndex: 0
    },
    {
        category: 'Livräddning',
        image: 'string',
        description: 'string',
        alternatives: ['one', 'two', 'three'],
        correctAlternativeIndex: 0
    },
    {
        category: 'Överlevnad',
        image: 'string',
        description: 'string',
        alternatives: ['one', 'two', 'three'],
        correctAlternativeIndex: 0
    },
    {
        category: 'Personliga frågor',
        image: 'string',
        description: 'string',
        alternatives: ['one', 'two', 'three'],
        correctAlternativeIndex: 0
    },
    {
        category: 'Externt hämtade frågor (Api)',
        image: 'string',
        description: 'string',
        alternatives: ['one', 'two', 'three'],
        correctAlternativeIndex: 0
    },
]

