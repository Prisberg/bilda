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
        description: 'string',
        alternatives: ['one', 'two', 'three'],
        correctAlternativeIndex: 0
    },
    {
        category: 'Geografi',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png',
        description: 'string',
        alternatives: ['one', 'two', 'three'],
        correctAlternativeIndex: 0
    },
    {
        category: 'Svenska',
        image: 'string',
        description: 'string',
        alternatives: ['one', 'two', 'three'],
        correctAlternativeIndex: 0
    },
    {
        category: 'Engelska',
        image: 'string',
        description: 'string',
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

