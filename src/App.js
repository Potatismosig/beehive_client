import './App.css';
import {Auth, Home, AllUsers, FriendsProfile} from './pages/index';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LogInUserProfile from './pages/logInUserProfile';


function App() {
  return (
    <main>
      <BrowserRouter>
          <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/user" element={<LogInUserProfile />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/allUsers" element={<AllUsers />} />
          <Route path="/friend/:friendUsername" element={<FriendsProfile />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
