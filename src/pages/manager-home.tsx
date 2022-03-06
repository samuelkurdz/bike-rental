import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";

function ManagerHome() {
  let location = useLocation();
  let navigate = useNavigate();

  useEffect(() => {
    const loggedInManager = localStorage.getItem('manager');
    console.log(loggedInManager);

    if (!loggedInManager) {
      navigate(`${location.pathname}/login`);
    }
  }, []);

  return (
    <div className="manager-home">
      <p>manager home</p>
    </div>
  );
}

export default ManagerHome;
