import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function UserHome() {
  let location = useLocation();
  let navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    console.log(loggedInUser);

    if (!loggedInUser) {
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