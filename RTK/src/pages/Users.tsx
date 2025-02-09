import { useState } from 'react';
import UserForm from '@/features/users/UserForm';
import UsersList from '@/features/users/UsersList';

function Users() {
  const [isOpen, setIsOpen] = useState(false);

  const handleAddNewUser = () => {
    setIsOpen(true)
  }
  return (
    <div className="p-0">
      <UserForm
        user={null}
        open={isOpen}
        action={'add'}
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
      <UsersList />
    </div>
  )
}

export default Users;
