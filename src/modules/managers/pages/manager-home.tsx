import { RootState } from '@store';
import { useSelector } from 'react-redux';

export function ManagerHome() {
  const bikes = useSelector((state: RootState) => state.bikes.data);
  const managers = useSelector((state: RootState) => state.managers.data);
  const users = useSelector((state: RootState) => state.users.data);
  const reserves = useSelector((state: RootState) => state.reserves.data);
  return (
    <div className="py-20 px-10 text-center">
      <h1 className="inline-block text-2xl font-bold text-slate-900 tracking-tight mb-10">
        Statistics
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-6">
        <div className="shadow-md min-w-[250px] p-4">
          <h3 className="inline-block text-xl font-bold text-slate-900 tracking-tight">
            Managers
          </h3>
          <p className="mt-2 text-lg text-slate-700">{managers.length}</p>
        </div>
        <div className="shadow-md min-w-[250px] p-4">
          <h3 className="inline-block text-xl font-bold text-slate-900 tracking-tight">
            Users
          </h3>
          <p className="mt-2 text-lg text-slate-700">{users.length}</p>
        </div>
        <div className="shadow-md min-w-[250px] p-4">
          <h3 className="inline-block text-xl font-bold text-slate-900 tracking-tight">
            Bikes
          </h3>
          <p className="mt-2 text-lg text-slate-700">{bikes.length}</p>
        </div>
        <div className="shadow-md min-w-[250px] p-4">
          <h3 className="inline-block text-xl font-bold text-slate-900 tracking-tight">
            Reservations
          </h3>
          <p className="mt-2 text-lg text-slate-700">{reserves.length}</p>
        </div>
      </div>
    </div>
  );
}
