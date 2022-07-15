import { createContext, useContext, useEffect, useState } from "react"

interface ContextInterface {
    username: string;
    setUsername: Function;
    selectedCategories: string[],
    setSelectedCategories: Function,
    amountOfQuestions: string,
    setAmountOfQuestions: Function,
    getName: Function;
    quizActive: boolean, 
    setQuizActive:Function
}

export const QuizContext = createContext<ContextInterface>({
    username: '',
    setUsername: () => false,
    selectedCategories: [],
    setSelectedCategories: () => false,
    amountOfQuestions: '20',
    setAmountOfQuestions: () => false,
    getName: () => false,
    quizActive: false, 
    setQuizActive: () => false
})

export default function QuizProvider(props: any) {
    const [username, setUsername] = useState('');
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [amountOfQuestions, setAmountOfQuestions] = useState('20');
    const [quizActive, setQuizActive] = useState(false);


    function getName() {
        const data = localStorage.getItem('name');

        if (typeof data === 'string')
            setUsername(data.replaceAll('"', ''))
    }

    useEffect(() => {
        getName()
    }, [])

    return (
        <QuizContext.Provider
            value={{
                username,
                setUsername,
                selectedCategories,
                setSelectedCategories,
                amountOfQuestions,
                setAmountOfQuestions,
                getName,
                quizActive,
                setQuizActive
            }}
            {...props}
        />
    )
}

export const useQuizContext = () => useContext(QuizContext)