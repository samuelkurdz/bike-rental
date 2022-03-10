import { Routes, Route, Navigate } from "react-router-dom";

import UserLayout from "./modules/users/user-layout";
import ManagerOutlet from './modules/managers/manager-layout';

import Login from "./modules/users/pages/user-login";
import Signup from "./modules/users/pages/user-signup";
import ManagerLogin from "./modules/managers/pages/manager-login";

import UserHome from "./modules/users/pages/user-home";
import ManagerHome from "./modules/managers/pages/manager-home";
import ManageBikes from './modules/managers/pages/manage-bikes';
import ManageUsers from './modules/managers/pages/manage-users';
import ManageAdmins from './modules/managers/pages/manage-admins';

function App() {
  return (
    <div className="min-h-screen overflow-hidden max-w-[100vw]">
      <Routes>
        {/* handle wild cards and '/' routes*/}
        <Route path="*" element={<Navigate to="/app" />} />

        <Route path="manager-login" element={<ManagerLogin />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />

        <Route path="app" element={<UserLayout />}>
          <Route index element={<UserHome />} />
        </Route>

        <Route path="manager" element={<ManagerOutlet />}>
          <Route index element={<ManagerHome />} />
          <Route path="users" element={<ManageUsers />} />
          <Route path="bikes" element={<ManageBikes />} />
          <Route path="admins" element={<ManageAdmins />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
