import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, removeManager } from "@store";
import { Manager } from "@interfaces";
import { ManagersTable, NewManager, EditManager } from "@manager-components";

export function ManageAdmins() {
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
