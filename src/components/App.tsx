import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";
import StartPage from './StartPage';


function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Routes>
          <Route path="" element={<StartPage />} />
          {/* <Route path="" element={ } />
        <Route path="" element={ } /> */}
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
