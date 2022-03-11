import { User } from '@interfaces';
import { useNavigate } from 'react-router-dom';

interface NavbarProps {
  user: User | undefined;
  openReservesModal: () => void;
}

export function Navbar({ openReservesModal, user }: NavbarProps) {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate(`/`);
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
            <button
              onClick={openReservesModal}
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Reserved Bikes
            </button>
            <button
              onClick={handleLogout}
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Logout
            </button>
            <button className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">
              Welcome, {user?.username}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
