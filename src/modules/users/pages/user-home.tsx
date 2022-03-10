import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BikeTable from "../components/bike-table";
import BikeTableFilter from "../components/bike-table-filter";
import Navbar from "../components/user-navbar";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { Bike, TypeInterface, User } from "@interfaces";
import ReserveBikeModal from "../components/reserve-bike/reserve-bike-modal";
import UserReservesDetailsModal from "../components/user-reserves-details";
import { isDateWithInRange } from "../../../utils/isDateWithInRange";

function UserHome() {
  const navigate = useNavigate();
  const [loggedInUser, SetLoggedInUser] = useState<User | undefined>(undefined);
  const bikes = useSelector((state: RootState) => state.bikes.data);
  const reserves = useSelector((state: RootState) => state.reserves.data);
  const [filteredBikes, SetFilteredBikes] = useState<Bike[]>(bikes);
  const [filterByValue, SetFilterByValue] = useState("");
  const [filterByAvailableDate, SetFilterByAvailableDate] = useState("");
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

  const getFilterByAvailableDate = (value: string) => {
    SetFilterByAvailableDate(value);

    const nonAvailableBikes = bikes.filter((bike) =>
      reserves
        .filter((reserve) => reserve.bikeId === bike.id)
        .some((resBike) =>
          isDateWithInRange(resBike.fromPeriod, resBike.toPeriod, value)
        )
    );
    const availableBikes = bikes.filter(
      (bike) => !nonAvailableBikes.includes(bike)
    );
    SetFilteredBikes(availableBikes);
  };

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
        (bike) =>
          +filterValue ===
          reserves
            .filter((reserve) => reserve.bikeId === bike.id)
            .reduce((sum, reserve) => sum + reserve.rating, 0) /
            reserves.filter((reserve) => reserve.bikeId === bike.id).length
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
        getFilterByType={getFilterByType}
        getFilterByValue={getFilterByValue}
        getFilterByAvailableDate={getFilterByAvailableDate}
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
