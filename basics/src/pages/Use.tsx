import { Suspense, use, useContext, useEffect } from 'react';
import SiteDataContext from '../contexts/SiteData';
import { SiteDataContextType } from '../@types/siteDataContext';
import { UserResponseType } from '../@types/common';

const fetchUsers = async (): Promise<UserResponseType> => {
  try {
    const response = await fetch('https://reqres.in/api/users');

    return response.json();
  } catch (error) {
    throw new Error(`Error on fetching user data: ${error}`);
  }
}

const fetchUserPromise = fetchUsers();

const Use = () => {
  const { setPageTitle, setPageDescription } = use(SiteDataContext) as SiteDataContextType;
  const { data } = use(fetchUserPromise);

  useEffect(() => {
    setPageTitle('use');
    setPageDescription(`
      use: 
      - React API that lets you read the value of a resource like a Promise or context. 
      - Can be called within loops and conditional statements like if
      - Can be called instead of useContext
    `);
  });

  return (
    <div className="component-container">
      <p><strong>Use</strong></p>
      <table>
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
              data.map((user, index) => (
                <tr key={index}>
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
  )
};

export default Use;
