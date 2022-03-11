import { Manager } from '@interfaces';
import { Link, useNavigate } from 'react-router-dom';

interface NavProps {
  manager: Manager | undefined;
}

export function ManagerNavbar({ manager }: NavProps) {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('manager');
    navigate(`/manager-login`);
  };
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <img
                className=" h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                alt="Workflow"
              />
            </div>
          </div>
          <div className="flex space-x-4">
            <Link
              to="/manager/users"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Users
            </Link>
            <Link
              to="/manager/bikes"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Bikes
            </Link>
            <Link
              to="/manager/admins"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Managers
            </Link>
            <button
              onClick={handleLogout}
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Logout
            </button>
            <Link
              to="/manager"
              className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Welcome, {manager?.username}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
