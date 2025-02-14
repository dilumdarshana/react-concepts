import { useState } from 'react';
import UserForm from '@/features/users/UserForm';
import UsersList from 'features/users/UsersList';

interface User {
  id: number;
  name: string;
  email: string;
}

function Users() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [action, setAction] = useState<'add' | 'edit'>('add');

  const handleAddNewUser = () => {
    setIsOpen(true);
    setAction('add');
  }

  const handleEditUser = (user: User) => {
    setIsOpen(true);
    setAction('edit');
    setUser(user);
  };

  return (
    <div className="p-0">
      <UserForm
        user={user}
        open={isOpen}
        action={action}
        onOpenChange={setIsOpen}
      />
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Users</h1>
        <button
        onClick={handleAddNewUser}
          className="px-4 py-2 bg-blue-500 text-white rounded-sm hover:bg-blue-600"
        >
          Add New
        </button>
      </div>
      <UsersList onEditUser={handleEditUser} />
    </div>
  )
}

export default Users;
