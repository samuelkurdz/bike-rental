import { Manager } from "@interfaces";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import ManagerNavbar from "./components/manager-navbar";

function ManagerOutlet() {
  const [loggedInManager, SetLoggedInManager] = useState<Manager | undefined>(undefined);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInManagerData = localStorage.getItem("manager");

    if (!loggedInManagerData) {
      navigate(`/manager-login`);
      return;
    }
    SetLoggedInManager(JSON.parse(loggedInManagerData));
  }, []);
  return (
    <>
      <ManagerNavbar manager={loggedInManager} />
      <Outlet></Outlet>
    </>
  );
}

export default ManagerOutlet;
