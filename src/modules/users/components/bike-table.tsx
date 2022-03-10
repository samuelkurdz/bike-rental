import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { Bike } from "../../../interfaces";

interface BikeTableProps {
  bikes: Bike[];
  openNewReserveModal: (bikeId: string) => void;
}

const basicTableheader = ["model", "color", "location", "rating"];

function BikeTable({ bikes, openNewReserveModal }: BikeTableProps) {
  const reserves = useSelector((state: RootState) => state.reserves.data);
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {basicTableheader.map((header) => (
                    <th
                      key={header}
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {header}
                    </th>
                  ))}
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Make Reservation</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {bikes.map(({ model, color, location, id, isAvailable }) => (
                  <tr key={id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{model}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{color}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {location}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {reserves.filter((reserve) => reserve.bikeId === id)
                        .length
                        ? reserves
                            .filter((reserve) => reserve.bikeId === id)
                            .reduce((sum, reserve) => sum + reserve.rating, 0) /
                          reserves.filter((reserve) => reserve.bikeId === id)
                            .length
                        : 0}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        onClick={() => openNewReserveModal(id)}
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        Reserve
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BikeTable;
