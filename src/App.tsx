import {
  ManageAdmins,
  ManageBikes,
  ManagerHome,
  ManagerLogin,
  ManagerOutlet,
  ManageUsers,
} from '@managers';
import { Login, SignUp, UserLayout } from '@users';
import { Navigate, Route, Routes } from 'react-router-dom';

import UserHome from './modules/users/pages/user-home';

function App() {
  return (
    <div className="min-h-screen overflow-hidden max-w-[100vw]">
      <Routes>
        {/* handle wild cards and '/' routes*/}
        <Route path="*" element={<Navigate to="/app" />} />

        <Route path="manager-login" element={<ManagerLogin />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />

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
