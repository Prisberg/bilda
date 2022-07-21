import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useQuizContext } from "../utils/Context";
import BadGate from "./BadGate";
import ErrorBoundary from "./ErrorBoundary";
import Navbar from "./Navbar";
import Quiz from "./Quiz";
import Result from "./Result";
import Settings from "./Settings";
import StartPage from './StartPage';


function App() {
  const { quizActive, username } = useQuizContext()

  return (
    <BrowserRouter>
      <Navbar />
      <ErrorBoundary>
        <Routes>
          <Route path="" element={<StartPage />} />
          <Route path="/quiz" element={quizActive && username ? <Quiz /> : <BadGate />} />
          <Route path="/quiz/result" element={username ? <Result /> : <BadGate />} />
          <Route path="/settings" element={username ? <Settings /> : <BadGate />} />
          <Route path="*" element={<BadGate />} />
        </Routes>
      </ErrorBoundary>
    </BrowserRouter >
  );
}

export default App;
