import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import  BikeTable from '../components/bike-table';
import  BikeTableFilter from '../components/bike-table-filter';
import  Navbar from '../components/user-navbar';
import { bikes } from '../data';

function UserHome() {
  let location = useLocation();
  let navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    console.log(loggedInUser);

    if (!loggedInUser) {
      navigate(`${location.pathname}/login`);
    }
  }, []);

  return (
    <div className="user-home">
      <Navbar />
      <BikeTableFilter />
      <BikeTable bikes={bikes.filter(bike => bike.isAvailable)} />
    </div>
  );
}

export default UserHome;
