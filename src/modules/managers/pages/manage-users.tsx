import { useState } from 'react';
import { users } from '../../../data';
import { User } from '../../../interfaces';
import ManageUsersTable from '../components/manage-users-table';
import UserDetailsModal from '../components/user-details-modal';
import NewUser from '../components/new-user/new-user';

function ManageUsers() {
  const [user, setUser] = useState<User| undefined>(undefined);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  return (
    <div className="manages-users">
      <NewUser />
      <ManageUsersTable users={users} selectUser={selectUser} />
      <UserDetailsModal open={isModalOpen} user={user} closeModal={closeUserDetailsModal} />
    </div>
  );
}

export default ManageUsers;
