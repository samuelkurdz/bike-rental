import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { supabase } from "../../supabaseClient";
import ManagerNavbar from "./components/manager-navbar";

function ManagerOutlet() {
  let navigate = useNavigate();

  useEffect(() => {
    const loggedInManager = localStorage.getItem("manager");
    console.log(loggedInManager);

    if (!loggedInManager) {
      navigate(`/manager-login`);
    }

    // supabase
    //   .from("users")
    //   .select()
    //   .then((data) => {
    //     console.log(data);
    //   }).then((res) => console.log(res));
  }, []);
  return (
    <>
      <ManagerNavbar />
      <Outlet></Outlet>
    </>
  );
}

export default ManagerOutlet;
