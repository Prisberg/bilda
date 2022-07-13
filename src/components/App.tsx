import { BrowserRouter, Route, Routes } from "react-router-dom";
import StartPage from './StartPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<StartPage/>} />
        {/* <Route path="" element={ } />
        <Route path="" element={ } /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
