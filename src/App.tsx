import { Routes, Route } from "react-router-dom";
import "./App.scss";


import RoutePgeOutlet from "./pages/user-app";
import Login from "./pages/user-login";
import Signup from "./pages/user-signup";
import UserHome from "./pages/user-home";

import ManagerLogin from "./pages/manager-login";
import ManagerHome from "./pages/manager-home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="app" element={<RoutePgeOutlet />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route index element={<UserHome />} />
        </Route>
        <Route path="manager" element={<RoutePgeOutlet />}>
          <Route path="login" element={<ManagerLogin />} />
          <Route index element={<ManagerHome />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
