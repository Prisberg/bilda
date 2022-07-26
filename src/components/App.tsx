import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useQuizContext } from "../utils/Context";
import BadGate from "./BadGate";
import ChoiceQuiz from "./ChoiceQuiz";
import ErrorBoundary from "./ErrorBoundary";
import FlashQuiz from "./FlashQuiz";
import Navbar from "./Navbar";
import Result from "./Result";
import Settings from "./Settings";
import StartPage from './StartPage';


function App() {
  const { quizActive, username, possibleScore } = useQuizContext()

  return (
    <BrowserRouter>
      <Navbar />
      <ErrorBoundary>
        <Routes>
          <Route path="" element={<StartPage />} />
          <Route path="/flash-quiz" element={username && quizActive ? <FlashQuiz /> : <BadGate />} />
          <Route path="/choice-quiz" element={username && quizActive ? <ChoiceQuiz /> : <BadGate />} />
          <Route path="/choice-quiz/result" element={username && possibleScore ? <Result /> : <BadGate />} />
          <Route path="/flash-quiz/result" element={username && possibleScore ? <Result /> : <BadGate />} />
          <Route path="/settings" element={username ? <Settings /> : <BadGate />} />
          <Route path="*" element={<BadGate />} />
        </Routes>
      </ErrorBoundary>
    </BrowserRouter >
  );
}

export default App;
