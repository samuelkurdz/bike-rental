import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import  BikeTable from '../../common/bike-table';
import  BikeTableFilter from '../../common/bike-table-filter';
import  Navbar from '../components/user-navbar';
import { bikes } from '../../../data';

function UserHome() {
  let navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    console.log(loggedInUser);

    if (!loggedInUser) {
      navigate(`/login`);
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
