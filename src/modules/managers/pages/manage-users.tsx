import { useState } from 'react';
import { User } from '../../../interfaces';
import ManageUsersTable from '../components/manage-users-table';
import UserDetailsModal from '../components/user-details-modal';
import NewUser from '../components/new-user/new-user';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../redux/store';
import { removeUser } from '../../../redux/users-reducer';


function ManageUsers() {
  const [user, setUser] = useState<User| undefined>(undefined);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const users = useSelector((state: RootState) => state.users.data);
  const dispatch = useDispatch();

  const selectUser = (id: string) => {
    const selectedUser = users.find(user => user.id === id);

    if (selectedUser) {
      setUser(selectedUser);
      setIsModalOpen(true);
    }
  }

  const closeUserDetailsModal = () => {
    setIsModalOpen(false);
    // setUser(undefined);
  }

  const handleDeleteUser = (userId: string) => {
    dispatch(removeUser(userId));
  }

  return (
    <div className="manages-users">
      <NewUser />
      <ManageUsersTable users={users} selectUser={selectUser} handleDeleteUser={handleDeleteUser} />
      <UserDetailsModal open={isModalOpen} user={user} closeModal={closeUserDetailsModal} />
    </div>
  );
}

export default ManageUsers;
