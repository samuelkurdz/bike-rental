import { useState } from "react";
import { Bike } from "../../../interfaces";
import ManageBikesTable from "../components/manage-bikes-table";
import BikeDetailsModal from "../components/bike-details-modal";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../redux/store";
import { removeBike } from "../../../redux/bikes-reducer";

function ManageBikes() {
  const [bike, setBike] = useState<Bike | undefined>(undefined);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();
  const bikes = useSelector((state: RootState) => state.bikes.data);

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
    dispatch(removeBike(bikeId));
  };

  return (
    <div className="manages-bikes">
      <ManageBikesTable bikes={bikes} selectBike={selectBike} handleDeleteBike={handleDeleteBike} />
      {bike ? (
        <BikeDetailsModal
          open={isModalOpen}
          bike={bike}
          closeModal={closeUserDetailsModal}
        />
      ) : null}
    </div>
  );
}

export default ManageBikes;
