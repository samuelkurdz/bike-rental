import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";

import Login from './pages/login';
import Signup from './pages/signup';
import ManagerHome from './pages/manager-home';
import UserHome from './pages/user-home';

function App() {
  // let {  } = useMatch();

  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="manager" element={<ManagerHome />} />
        <Route path="user" element={<UserHome />} />
      </Routes>
    </div>
  );
}

export default App;
