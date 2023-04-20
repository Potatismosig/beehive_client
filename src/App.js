import './App.css';
import {Auth} from './pages/index';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
