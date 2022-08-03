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
        description: `Which is a synonym for the following word: Despotism`,
        alternatives: ['Tyranny', 'Government', 'Discouragement'],
        correctAlternativeIndex: 0
    },
    {
        category: 'Matematik',
        image: '',
        description: ``,
        alternatives: [``, ``, ``],
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
        description: `Namnet för stora bröstmuskeln på Latin?`,
        alternatives: ['Deltoideus', 'Sternocleidomastoid', 'pectoralis major'],
        correctAlternativeIndex: 2
    },
    {
        category: 'Mytologi',
        image: '',
        description: `Hur skapades jorden enligt Asatron?`,
        alternatives: ['Jorden fanns redan där innan gudarna tillkom.', 'Oden dödade jätten Ymer och skapade jorden från hans kadaver.', 'Jorden var frukten från världsträdet Yggdrasil.'],
        correctAlternativeIndex: 1
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
        description: 'Vilken partikel har negativ laddning?',
        alternatives: ['Neutron', 'Proton', 'Butanol'],
        correctAlternativeIndex: 2
    },
    {
        category: 'Teknik',
        image: '',
        description: 'Hur många kromosomer har en människa normalt?',
        alternatives: ['32', '46', '63'],
        correctAlternativeIndex: 1
    },
    {
        category: 'Teknik',
        image: '',
        description: 'Vad är namnet på den kemiska komponenten i sprit som gör en berusad?',
        alternatives: ['Etanol', 'Metanol', 'Butanol'],
        correctAlternativeIndex: 0
    },
    {
        category: 'Teknik',
        image: '',
        description: 'Vad är en legering?',
        alternatives: ['En ädelmetal med som inte är elektriskt ledande.', 'Kemiska avlagringar', 'En blandning av kemiska element varav minst en är en metall.'],
        correctAlternativeIndex: 2
    },
    {
        category: 'Trafik',
        image: '',
        description: 'Vilka/vems anvisngar har störst tyngd i trafiken',
        alternatives: ['Trafikpolis', 'Vägskyltar', 'Ljussignaler'],
        correctAlternativeIndex: 0
    },
    {
        category: 'Juridik',
        image: '',
        description: `Vad krävs för att en civil person på svensk mark ska ha lagstöd i att utföra ett envarsgripande?`,
        alternatives: ['Endast om brottet är av typen misshandel samt att man har tagit gärningsmannen på bar gärning.', 'Brottet ger böter och det finns tydlig risk att gärningsmannen kommer upprepa brottet. Gripande får även ske om gärningsmannen är efterlyst', 'Brottet kan ge fängelsestraff, man har tagit personen på bar gärning eller på flyende fot från brottsplatsen. Gripande får även ske om gärningsmannen är efterlyst.'],
        correctAlternativeIndex: 2
    },
    {
        category: 'Livräddning',
        image: '',
        description: ``,
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
]

console.log(questions[0].description)
