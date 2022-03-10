import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ManagersTable from "../components/manage-admin-tables";
import NewManager from "../components/new-manager/new-manager";
import { RootState } from "../../../redux/store";
import { removeManager } from "../../../redux/managers-reducer";
import EditManager from '../components/edit-manager/edit-manager';
import { Manager } from "../../../interfaces";

function ManageAdmin() {
  const dispatch = useDispatch();
  const managers = useSelector((state: RootState) => state.managers.data);

  const [isEditModalOpen, toggelEditModal] = useState(false);
  const [managerToEdit, SetManagerToEdit] = useState<Manager | undefined>(
    undefined
  );

  const handleDeleteManager = (managerId: string) => {
    dispatch(removeManager(managerId));
  };

  const closeEditManagerModal = () => {
    toggelEditModal(false);
    SetManagerToEdit(undefined);
  };
  const handleEditManager = (managerId: string) => {
    const selectedUser = managers.find((manager) => manager.id === managerId);

    if (selectedUser) {
      SetManagerToEdit(selectedUser);
      toggelEditModal(true);
    }
  };
  return (
    <div className="manages-admins">
      <NewManager />
      <ManagersTable
        managers={managers}
        handleEditManager={handleEditManager}
        handleDeleteManager={handleDeleteManager}
      />
      {managerToEdit ? (
        <EditManager
          open={isEditModalOpen}
          manager={managerToEdit}
          closeModal={closeEditManagerModal}
        />
      ) : null}
    </div>
  );
}

export default ManageAdmin;
