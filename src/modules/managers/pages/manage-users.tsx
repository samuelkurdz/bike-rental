import { useState } from "react";
import ManageUsersTable from "../components/manage-users-table";
import UserDetailsModal from "../components/user-details-modal";
import NewUser from "../components/new-user/new-user";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../redux/store";
import { removeUser } from "../../../redux/users-reducer";
import EditUser from "../components/edit-user/edit-user";
import { User } from '@interfaces';

function ManageUsers() {
  const [userDetail, toggleUserDetailState] = useState(false);
  const [user, setUser] = useState<User | undefined>(undefined);

  const [isEditModalOpen, toggelEditModal] = useState(false);
  const [userToEdit, SetUserToEdit] = useState<User | undefined>(undefined);

  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.users.data);

  const selectUser = (id: string) => {
    const selectedUser = users.find((user) => user.id === id);

    if (selectedUser) {
      setUser(selectedUser);
      toggleUserDetailState(true);
    }
  };

  const closeUserDetailsModal = () => {
    toggleUserDetailState(false);
    setUser(undefined);
  };

  const handleDeleteUser = (userId: string) => {
    dispatch(removeUser(userId));
  };

  const closeEditUserModal = () => {
    toggelEditModal(false);
    SetUserToEdit(undefined);
  };

  const handleEditUser = (userId: string) => {
    const selectedUser = users.find((user) => user.id === userId);

    if (selectedUser) {
      SetUserToEdit(selectedUser);
      toggelEditModal(true);
    }
  };

  return (
    <div className="manages-users">
      <NewUser />
      <ManageUsersTable
        users={users}
        selectUser={selectUser}
        handleEditUser={handleEditUser}
        handleDeleteUser={handleDeleteUser}
      />
      {userDetail ? (
        <UserDetailsModal
          open={userDetail}
          user={user}
          closeModal={closeUserDetailsModal}
        />
      ) : null}
      {userToEdit ? (
        <EditUser
          open={isEditModalOpen}
          user={userToEdit}
          closeModal={closeEditUserModal}
        />
      ) : null}
    </div>
  );
}

export default ManageUsers;
