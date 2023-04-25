import './App.css';
import {Auth} from './pages/index';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/pageComponents/header';
function App() {
  return (
    <main>
      <BrowserRouter>
    <Header />
        <Routes>
          <Route path="/" element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
