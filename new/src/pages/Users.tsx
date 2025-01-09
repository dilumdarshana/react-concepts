import { Suspense, useContext, useEffect } from 'react';
import { UserListType, UserResponseType } from '../@types/common.td';
import { UseFetchOptionTypes } from '../@types/useFetch.td';
import useFetch from '../hooks/useFetch';
import SiteDataContext from '../contexts/SiteData';

const Users = () => {
  const { setPageTitle }  = useContext(SiteDataContext);
  let userList: UserListType[] = [];
  const options: UseFetchOptionTypes = {
    url: 'https://reqres.in/api/users',
    method: 'GET',
  };

  useEffect(() => {
    setPageTitle('Users');
    const { data, loading } = useFetch<UserResponseType>(options);

    if (!loading && data) {
      userList = (data as UserResponseType)?.data;
    }
  }, []);

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
          userList.map((user) => (
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
