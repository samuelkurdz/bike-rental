import { users } from '../../../data';
import UsersTable from '../components/users-table';

function ManageUsers() {
  return (
    <div className="manages-users">
      <UsersTable users={users} />
    </div>
  );
}

export default ManageUsers;
