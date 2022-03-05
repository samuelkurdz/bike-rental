import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";

function UserHome() {
  let location = useLocation();
  let navigate = useNavigate();

  useEffect(() => {
    const userSession = supabase.auth.session();
    // supabase.auth.signOut();
    if (!userSession) {
      navigate(`${location.pathname}/login`);
    }
  }, []);

  return (
    <div className="user-home">
      <p>user home</p>
    </div>
  );
}

export default UserHome;