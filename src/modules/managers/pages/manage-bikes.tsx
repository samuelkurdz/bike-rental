import { Bike } from '@interfaces';
import {
  BikeDetailsModal,
  EditBike,
  ManageBikesTable,
  NewBike,
} from '@manager-components';
import { removeBike, removeReserve, RootState } from '@store';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export function ManageBikes() {
  const [bike, setBike] = useState<Bike | undefined>(undefined);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isEditModalOpen, toggelEditModal] = useState(false);
  const [bikeToEdit, SetBikeToEdit] = useState<Bike | undefined>(undefined);

  const dispatch = useDispatch();
  const bikes = useSelector((state: RootState) => state.bikes.data);
  const reserves = useSelector((state: RootState) => state.reserves.data);

  const selectBike = (id: string) => {
    const selectedBike = bikes.find((bike) => bike.id === id);

    if (selectedBike) {
      setBike(selectedBike);
      setIsModalOpen(true);
    }
  };

  const closeUserDetailsModal = () => {
    setIsModalOpen(false);
    setBike(undefined);
  };

  const handleDeleteBike = (bikeId: string) => {
    reserves
      .filter((res) => res.bikeId === bikeId)
      .map((bikeRes) => dispatch(removeReserve(bikeRes.id)));
    dispatch(removeBike(bikeId));
  };

  const closeEditBikeModal = () => {
    toggelEditModal(false);
    SetBikeToEdit(undefined);
  };

  const handleEditBike = (bikeId: string) => {
    const selectedBike = bikes.find((bike) => bike.id === bikeId);

    if (selectedBike) {
      SetBikeToEdit(selectedBike);
      toggelEditModal(true);
    }
  };

  return (
    <div className="manages-bikes">
      <NewBike />
      <ManageBikesTable
        bikes={bikes}
        reserves={reserves}
        selectBike={selectBike}
        handleEditBike={handleEditBike}
        handleDeleteBike={handleDeleteBike}
      />
      {bike ? (
        <BikeDetailsModal
          open={isModalOpen}
          bike={bike}
          closeModal={closeUserDetailsModal}
        />
      ) : null}
      {bikeToEdit ? (
        <EditBike
          open={isEditModalOpen}
          bike={bikeToEdit}
          closeModal={closeEditBikeModal}
        />
      ) : null}
    </div>
  );
}
