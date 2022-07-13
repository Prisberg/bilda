import { createContext, useContext, useState } from "react"

interface ContextInterface {
    username: string;
    setUsername: Function;
}

export const QuizContext = createContext<ContextInterface>({
    username: '',
    setUsername: () => false,
})

export default function QuizProvider(props: any) {
    const [username, setUsername] = useState('');

    window.addEventListener('storage', userData);

    function userData() {
        const data = localStorage.getItem('name')

        if(typeof data === 'string')
        setUsername(data)
    }

    return (
        <QuizContext.Provider
            value={{ username, setUsername }} {...props} />
    )
}

export const useQuizContext = () => useContext(QuizContext)