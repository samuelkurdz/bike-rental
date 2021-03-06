import { Bike, TypeInterface, User } from '@interfaces';
import { RootState } from '@store';
import {
  BikeTable,
  BikeTableFilter,
  Navbar,
  ReserveBikeModal,
  UserReservesDetailsModal,
} from '@user-components';
import { isDateWithInRange } from '@utils';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function UserHome() {
  const navigate = useNavigate();
  const [loggedInUser, SetLoggedInUser] = useState<User | undefined>(undefined);
  const bikes = useSelector((state: RootState) => state.bikes.data);
  const reserves = useSelector((state: RootState) => state.reserves.data);

  const [filteredBikes, SetFilteredBikes] = useState<Bike[]>(bikes);
  const [filterByValue, SetFilterByValue] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [filterByAvailableDate, SetFilterByAvailableDate] = useState('');
  const [filterByType, SetFilterByType] = useState<TypeInterface>({
    name: 'rating',
  });

  const [isNewReserveModalOpen, toggelNewReserveModal] = useState(false);
  const [bikeToReserveId, SetBikeToReserveId] = useState('');

  const [shouldOpenReservesModal, SetShouldOpenReservesModal] = useState(false);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');

    if (!loggedInUser) {
      navigate(`/login`);
      return;
    }
    SetLoggedInUser(JSON.parse(loggedInUser));
  }, []);

  const getFilterByAvailableDate = (value: string) => {
    if (!value.trim()) {
      SetFilteredBikes(bikes);
    }
    SetFilterByAvailableDate(value);
    const nonAvailableBikes = bikes.filter((bike) =>
      reserves
        .filter((reserve) => reserve.bikeId === bike.id)
        .some((resBike) =>
          isDateWithInRange(resBike.fromPeriod, resBike.toPeriod, value),
        ),
    );
    const availableBikes = bikes.filter((bike) => !nonAvailableBikes.includes(bike));
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

    if (filterType === 'rating') {
      newFilteredBikes = bikes.filter(
        (bike) =>
          +filterValue ===
          reserves
            .filter((reserve) => reserve.bikeId === bike.id)
            .reduce((sum, reserve) => sum + reserve.rating, 0) /
            reserves.filter((reserve) => reserve.bikeId === bike.id).length,
      );
    } else {
      newFilteredBikes = bikes.filter((bike) =>
        bike[filterType].toLowerCase().includes(filterValue.toLowerCase()),
      );
    }
    SetFilteredBikes(newFilteredBikes);
  };

  const closeNewReserveModal = () => {
    toggelNewReserveModal(false);
    SetBikeToReserveId('');
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
      <Navbar user={loggedInUser} openReservesModal={openReservesModal} />
      <BikeTableFilter
        getFilterByType={getFilterByType}
        getFilterByValue={getFilterByValue}
        getFilterByAvailableDate={getFilterByAvailableDate}
      />
      <BikeTable bikes={filteredBikes} openNewReserveModal={openNewReserveModal} />
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
