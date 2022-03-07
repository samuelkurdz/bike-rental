
import { useState } from "react";
import { bikes } from "../../../data";
import { Bike } from "../../../interfaces";
import ManageBikesTable from "../components/manage-bikes-table";
import BikeDetailsModal from "../components/bike-details-modal";

function ManageBikes() {
  const [bike, setBike] = useState<Bike| undefined>(undefined);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const selectBike = (id: string) => {
    const selectedBike = bikes.find(bike => bike.id === id);

    if (selectedBike) {
      setBike(selectedBike);
      setIsModalOpen(true);
    }
  }

  const closeUserDetailsModal = () => {
    setIsModalOpen(false);
    // setBike(undefined);
  }
  return (
    <div className="manages-bikes">
      <ManageBikesTable bikes={bikes} selectedBike={selectBike} />
      <BikeDetailsModal open={isModalOpen} bike={bike} closeModal={closeUserDetailsModal} />
    </div>
  );
}

export default ManageBikes;
