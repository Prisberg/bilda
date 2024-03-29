import { createContext, useContext, useEffect, useState } from "react";
import { QuestionInterface, questions } from "./QuestionData";

interface ContextInterface {
    username: string;
    setUsername: Function;
    selectedCategories: string[],
    setSelectedCategories: Function,
    amountOfQuestions: number,
    setAmountOfQuestions: Function,
    getName: Function;
    quizActive: boolean,
    setQuizActive: Function,
    categories: string[],
    setCategories: Function
    selectedQuestions: QuestionInterface[],
    setSelectedQuestions: Function,
    extractQuestions: Function,
    score: number,
    setScore: Function,
    possibleScore: number,
    setPossibleScore: Function,
}

export const QuizContext = createContext<ContextInterface>({
    username: '',
    setUsername: () => false,
    selectedCategories: [],
    setSelectedCategories: () => false,
    amountOfQuestions: 20,
    setAmountOfQuestions: () => false,
    getName: () => false,
    quizActive: false,
    setQuizActive: () => false,
    categories: [],
    setCategories: () => false,
    selectedQuestions: [],
    setSelectedQuestions: () => false,
    extractQuestions: () => false,
    score: 0,
    setScore: () => false,
    possibleScore: 0,
    setPossibleScore: () => false,
})

export default function QuizProvider(props: any) {
    const [username, setUsername] = useState('');
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [amountOfQuestions, setAmountOfQuestions] = useState(20);
    const [quizActive, setQuizActive] = useState(false);
    const [categories, setCategories] = useState<string[]>([])
    const [selectedQuestions, setSelectedQuestions] = useState<QuestionInterface[]>([])
    const [score, setScore] = useState(0);
    const [possibleScore, setPossibleScore] = useState(0);


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

    function extractQuestions() {
        questions.forEach((item) => {
            if (selectedCategories.includes(item.category) && selectedQuestions.length < amountOfQuestions) {
                selectedQuestions.push(item)
                setSelectedQuestions(selectedQuestions.sort(() => Math.random() - .5))
                setPossibleScore(selectedQuestions.length)
            } else { return }
        })
    }

    useEffect(() => {
        getName()
        extractCategories()
    }, [])

    //reset selected questions after exiting, potential to store finished quiz and result?
    useEffect(() => {
        if (!quizActive) {
            setSelectedQuestions([])
        } else {
            setScore(0)
        }
    }, [quizActive])

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
                selectedQuestions,
                extractQuestions,
                score,
                setScore,
                possibleScore,
                setPossibleScore,
            }}
            {...props}
        />
    )
}

export const useQuizContext = () => useContext(QuizContext)