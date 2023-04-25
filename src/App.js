import './App.css';
import { Auth } from './pages/index';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogInUserProfile from './pages/logInUserProfile';

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/user" element={<LogInUserProfile />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
