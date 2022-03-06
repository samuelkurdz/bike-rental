import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ManagerNavbar from '../components/manager-navbar';

function ManagerHome() {
  let location = useLocation();
  let navigate = useNavigate();

  useEffect(() => {
    const loggedInManager = localStorage.getItem('manager');
    console.log(loggedInManager);

    if (!loggedInManager) {
      navigate(`/manager-login`);
    }
  }, []);

  return (
    <div className="manager-home">
      <ManagerNavbar />
    </div>
  );
}

export default ManagerHome;
