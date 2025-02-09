import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDeleteUserMutation, useGetUsersQuery } from '@/services/userApi';
import ConfirmDialog from '@/components/ConfirmDialog';
import Loading from '@/components/Loading';
import { RootState } from '@/store';

interface User {
  id: number;
  name: string;
  email: string;
}

function UsersList() {
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<User | null>(null);
  const { refetch, data, error, isLoading } = useGetUsersQuery();
  const [ deleteUser, { isLoading: deleteUserLoading }] = useDeleteUserMutation();
  const userUpdated = useSelector((state: RootState) => state.users.userUpdated);

  useEffect(() => {
    if (userUpdated) refetch();
  }, [userUpdated]);

  if (error) {
    return <p>Error fetching users:</p>;
  }

  if (isLoading || deleteUserLoading) {
    return <Loading />;
  }

  const handleDeleteClick = (user: User) => {
    setItemToDelete(user);
    setShowDeleteDialog(true);
  }

  const handleDlete = async () => {
    setShowDeleteDialog(false);

    // delete from server
    try {
      if (itemToDelete) {
        await deleteUser(itemToDelete.id).unwrap();
      }
      refetch();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  }

  const handleCancel = () => {
    setShowDeleteDialog(false);
  }

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 shadow-md rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Name</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Email</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((user, index) => (
              <tr key={index} className="border-t border-gray-200 hover:bg-gray-50">
                <td className="px-6 py-3 text-gray-800">{user.name}</td>
                <td className="px-6 py-3 text-gray-600">{user.email}</td>
                <td className="px-6 py-3">
                  <button className="text-blue-600 hover:underline mr-3">Edit</button>
                  <button className="text-red-600 hover:underline" onClick={() => handleDeleteClick(user)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ConfirmDialog showDeleteDialog={showDeleteDialog} handleCancel={handleCancel} handleDelete={handleDlete} />
    </div>
  )
}

export default UsersList;
