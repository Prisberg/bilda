import { createContext, useContext, useEffect, useState } from "react"

interface ContextInterface {
    username: string;
    setUsername: Function;
    getName: Function;
}

export const QuizContext = createContext<ContextInterface>({
    username: '',
    setUsername: () => false,
    getName: () => false
})

export default function QuizProvider(props: any) {
    const [username, setUsername] = useState('');

    function getName() {
        const data = localStorage.getItem('name');

        if(typeof data === 'string')
        setUsername(data)
    }
    
    useEffect(() => {
        getName()
    }, [])

    return (
        <QuizContext.Provider
            value={{ username, setUsername, getName }} {...props} />
    )
}

export const useQuizContext = () => useContext(QuizContext)