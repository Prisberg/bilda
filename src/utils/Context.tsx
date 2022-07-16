import { createContext, useContext, useEffect, useState } from "react"
import { questions } from "./QuestionData";

interface ContextInterface {
    username: string;
    setUsername: Function;
    selectedCategories: string[],
    setSelectedCategories: Function,
    amountOfQuestions: string,
    setAmountOfQuestions: Function,
    getName: Function;
    quizActive: boolean,
    setQuizActive: Function,
    categories: string[],
    setCategories: Function
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
    setQuizActive: () => false,
    categories: [],
    setCategories: () => false,
})

export default function QuizProvider(props: any) {
    const [username, setUsername] = useState('');
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [amountOfQuestions, setAmountOfQuestions] = useState('20');
    const [quizActive, setQuizActive] = useState(false);
    const [categories, setCategories] = useState<string[]>([])


    function getName() {
        const data = localStorage.getItem('name');

        if (typeof data === 'string')
            setUsername(data.replaceAll('"', ''))
    }


    function extractCategories() {
        questions.forEach((item) => {
            if (categories.includes(item.category)) {
                return
            } else {
                categories.push(item.category)
                setCategories(categories)
            }
        })
    }

    useEffect(() => {
        getName()
        extractCategories()
        console.log('useEffect runs')
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
                setQuizActive,
                categories,
            }}
            {...props}
        />
    )
}

export const useQuizContext = () => useContext(QuizContext)