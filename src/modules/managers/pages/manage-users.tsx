import { users } from '../../../data';
import UsersTable from '../components/users-table';
import Modal from '../components/modal';

function ManageUsers() {
  return (
    <div className="manages-users">
      <UsersTable users={users} />
      <Modal />
    </div>
  );
}

export default ManageUsers;
