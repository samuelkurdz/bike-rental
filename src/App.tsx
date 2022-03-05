import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";

import UserApp from "./pages/user-app";
import Login from "./pages/login";
import Signup from "./pages/signup";
import UserHome from "./pages/user-home";

import ManagerLogin from "./pages/manager-login";
import ManagerHome from "./pages/manager-home";

function App() {
  // let {  } = useMatch();

  return (
    <div className="App">
      <Routes>
        <Route path="app" element={<UserApp />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route index element={<UserHome />} />
        </Route>
        <Route path="manager" element={<UserApp />}>
          <Route path="signup" element={<ManagerLogin />} />
          <Route index element={<ManagerHome />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
