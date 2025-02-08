import UsersList from "@/features/users/UsersList";

function Users() {
  return (
    <div className="p-0">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Users</h1>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-sm hover:bg-blue-600">
          Add New
        </button>
      </div>
      <UsersList />
    </div>
  )
}

export default Users;
