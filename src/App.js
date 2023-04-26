import './App.css';
import {Auth, Home, AllUsers} from './pages/index';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/allUsers" element={<AllUsers />} />

        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
