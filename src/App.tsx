import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";

import Login from './pages/login';
import ManagerHome from './pages/manager-home';

function App() {
  // let {  } = useMatch();

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="users/*" element={<ManagerHome />} />
      </Routes>
    </div>
  );
}

export default App;
