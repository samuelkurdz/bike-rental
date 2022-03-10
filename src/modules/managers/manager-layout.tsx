import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import ManagerNavbar from "./components/manager-navbar";

function ManagerOutlet() {
  let navigate = useNavigate();

  useEffect(() => {
    const loggedInManager = localStorage.getItem("manager");
    console.log(loggedInManager);

    if (!loggedInManager) {
      navigate(`/manager-login`);
    }
  }, []);
  return (
    <>
      <ManagerNavbar />
      <Outlet></Outlet>
    </>
  );
}

export default ManagerOutlet;
