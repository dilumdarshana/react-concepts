import { Suspense, useContext, useEffect, useState } from 'react';
import { UserListType, UserResponseType } from '../@types/common';
import { UseFetchOptionTypes } from '../@types/useFetch';
import useFetch from '../hooks/useFetch';
import SiteDataContext from '../contexts/SiteData';
import { SiteDataContextType } from '../@types/siteDataContext';

const Users = () => {
  const { setPageTitle } = useContext(SiteDataContext) as SiteDataContextType;
  const [users, setUsers] = useState<UserListType[]>([]);
  const options: UseFetchOptionTypes = {
    url: 'https://reqres.in/api/users',
    method: 'GET',
  };

  const { data, loading } = useFetch<UserResponseType>(options);

  useEffect(() => {
    setPageTitle('Users');
    
    if (!loading && data) {
      const userList: UserListType[] = (data as UserResponseType)?.data;
      setUsers(userList)
    }
  }, [loading, data]);

  return (
    <div className="component-container">
      <p><strong>Users</strong></p>
      <table className="users">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
        <Suspense fallback="Loading...">
        {
          users.map((user) => (
            <tr key={user.id}>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
            </tr>
          ))
        }
        </Suspense>
        </tbody>
      </table>
    </div>
  );
};

export default Users;
