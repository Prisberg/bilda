import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useQuizContext } from "../utils/Context";
import BadGate from "./BadGate";
import ErrorBoundary from "./ErrorBoundary";
import Navbar from "./Navbar";
import Quiz from "./Quiz";
import StartPage from './StartPage';


function App() {
  const { quizActive } = useQuizContext()

  return (
    <BrowserRouter>
      <Navbar />
      <ErrorBoundary>
        <Routes>
          <Route path="" element={<StartPage />} />
          <Route path="/quiz" element={quizActive ? <Quiz /> : <BadGate />} />
          <Route path="*" element={<BadGate />} />
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
