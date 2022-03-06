import { bikes } from "../../../data";
import ManageBikesTable from "../components/manage-bikes-table";

function ManageBikes() {
  return (
    <div className="manages-bikes">
      <ManageBikesTable bikes={bikes} />
    </div>
  );
}

export default ManageBikes;
