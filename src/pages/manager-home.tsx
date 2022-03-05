import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";

function ManagerHome() {
  let location = useLocation();
  let navigate = useNavigate();

  useEffect(() => {
    const userSession = supabase.auth.session();
    if (!userSession) {
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
