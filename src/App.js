import './App.css';
import {Auth, Home} from './pages/index';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
