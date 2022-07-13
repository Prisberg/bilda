import { createContext, useContext, useState } from "react"

interface ContextInterface {}

const QuizContext = createContext<ContextInterface>({})

export default function QuizProvider(props: any) {}

export const useSockets = () => useContext(QuizContext)