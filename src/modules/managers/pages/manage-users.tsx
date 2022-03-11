import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, removeUser, removeReserve } from "@store";
import { User } from "@interfaces";
import {
  UserDetailsModal,
  ManageUsersTable,
  NewUser,
  EditUser
} from "@manager-components";

export function ManageUsers() {
  const [userDetail, toggleUserDetailState] = useState(false);
  const [user, setUser] = useState<User | undefined>(undefined);

  const [isEditModalOpen, toggelEditModal] = useState(false);
  const [userToEdit, SetUserToEdit] = useState<User | undefined>(undefined);

  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.users.data);
  const reserves = useSelector((state: RootState) => state.reserves.data);

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
    reserves
      .filter((res) => res.userId === userId)
      .map((userRes) => dispatch(removeReserve(userRes.id)));
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
        reserves={reserves}
        selectUser={selectUser}
        handleEditUser={handleEditUser}
        handleDeleteUser={handleDeleteUser}
      />
      {userDetail ? (
        <UserDetailsModal
          user={user}
          open={userDetail}
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
