import { Routes, Route, Navigate } from "react-router-dom";
import "./App.scss";

import RoutePgeOutlet from "./pages/outlet";
import Login from "./modules/users/pages/user-login";
import Signup from "./modules/users/pages/user-signup";
import UserHome from "./modules/users/pages/user-home";

import ManagerLogin from "./modules/managers/pages/manager-login";
import ManagerHome from "./modules/managers/pages/manager-home";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* handle wild cards and '/' routes*/}
        {/* <Route path="*" element={<Navigate to="/app" />} /> */}

        <Route path="manager-login" element={<ManagerLogin />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />

        <Route path="app" element={<RoutePgeOutlet />}>
          <Route index element={<UserHome />} />
        </Route>

        <Route path="manager" element={<RoutePgeOutlet />}>
          <Route index element={<ManagerHome />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
