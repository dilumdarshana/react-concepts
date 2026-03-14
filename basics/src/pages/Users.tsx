import { Suspense, useContext, useEffect, useState } from 'react';
import { UserType } from '../@types/common';
import { UseFetchOptionTypes } from '../@types/useFetch';
import useFetch from '../hooks/useFetch';
import SiteDataContext from '../contexts/SiteData';
import { SiteDataContextType } from '../@types/siteDataContext';

const Users = () => {
  const { setPageTitle, setPageDescription } = useContext(SiteDataContext) as SiteDataContextType;
  const [users, setUsers] = useState<UserType[]>([]);
  const options: UseFetchOptionTypes = {
    url: 'https://63fed78dc5c800a7238698ea.mockapi.io/api/v1/users',
    method: 'GET',
  };

  const { data, loading, error, retry } = useFetch<UserType[]>(options);

  useEffect(() => {
    setPageTitle('Users');
    setPageDescription(`
      useState,
      useEffetct: trigger after screen get printed,
      useFetch: (custom hook) to retrieve users fro API
    `);
  });

  useEffect(() => {
    if (!loading && data) {
      // const userList: UserListType[] = [data as UserResponseType];
      setUsers(data);
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
          error ? (<tr>
            <td colSpan={3}>
              <button onClick={retry}>Retry</button>
            </td>
          </tr>) :
          users && users.map((user) => (
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
