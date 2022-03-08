import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BikeTable from "../../common/bike-table";
import BikeTableFilter from "../../common/bike-table-filter";
import Navbar from "../components/user-navbar";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { Bike, TypeInterface, User } from "@interfaces";
import ReserveBikeModal from "../components/reserve-bike/reserve-bike-modal";
import UserReservesDetailsModal from "../components/user-reserves-details";

function UserHome() {
  const navigate = useNavigate();
  const [loggedInUser, SetLoggedInUser] = useState<User | undefined>(undefined);
  const bikes = useSelector((state: RootState) => state.bikes.data);
  const [filteredBikes, SetFilteredBikes] = useState<Bike[]>(bikes);
  const [filterByValue, SetFilterByValue] = useState("");
  const [filterByType, SetFilterByType] = useState<TypeInterface>({
    name: "rating",
  });

  const [isNewReserveModalOpen, toggelNewReserveModal] = useState(false);
  const [bikeToReserveId, SetBikeToReserveId] = useState("");

  const [shouldOpenReservesModal, SetShouldOpenReservesModal] = useState(false);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    // console.log(loggedInUser);

    if (!loggedInUser) {
      navigate(`/login`);
      return;
    }
    SetLoggedInUser(JSON.parse(loggedInUser));
  }, []);

  const getFilterByValue = (value: string) => {
    SetFilterByValue(value);
    if (!value.trim()) {
      SetFilteredBikes(bikes);
      return;
    }
    handleFilter(filterByType, value);
  };

  const getFilterByType = (value: TypeInterface) => {
    SetFilterByType(value);
    if (!filterByValue.trim()) {
      SetFilteredBikes(bikes);
      return;
    }

    handleFilter(value, filterByValue);
  };

  const handleFilter = (filterByType: TypeInterface, filterValue: string) => {
    let newFilteredBikes: Bike[] = [];
    const filterType = filterByType.name;

    if (filterType === "rating") {
      newFilteredBikes = bikes.filter(
        (bike) => bike[filterType] == +filterValue
      );
    } else {
      newFilteredBikes = bikes.filter((bike) =>
        bike[filterType].toLowerCase().includes(filterValue.toLowerCase())
      );
    }
    SetFilteredBikes(newFilteredBikes);
  };

  const closeNewReserveModal = () => {
    toggelNewReserveModal(false);
    SetBikeToReserveId("");
  };

  const openNewReserveModal = (bikeId: string) => {
    toggelNewReserveModal(true);
    SetBikeToReserveId(bikeId);
  };

  const openReservesModal = () => {
    SetShouldOpenReservesModal(true);
  };
  const closeReservesModal = () => {
    SetShouldOpenReservesModal(false);
  };

  return (
    <div>
      <Navbar openReservesModal={openReservesModal} />
      <BikeTableFilter
        getFilterByValue={getFilterByValue}
        getFilterByType={getFilterByType}
      />
      <BikeTable
        bikes={filteredBikes}
        openNewReserveModal={openNewReserveModal}
      />
      {bikeToReserveId.trim() && loggedInUser?.id ? (
        <ReserveBikeModal
          userId={loggedInUser?.id}
          bikeToReserveId={bikeToReserveId}
          open={isNewReserveModalOpen}
          closeModal={closeNewReserveModal}
        />
      ) : null}
      {shouldOpenReservesModal && loggedInUser ? (
        <UserReservesDetailsModal
          user={loggedInUser}
          open={shouldOpenReservesModal}
          closeModal={closeReservesModal}
        />
      ) : null}
    </div>
  );
}

export default UserHome;
