import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Manager } from "@interfaces";
import { ManagerNavbar } from "@manager-components";

export function ManagerOutlet() {
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
