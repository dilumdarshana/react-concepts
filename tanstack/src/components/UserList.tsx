import { useSuspenseQuery } from '@tanstack/react-query';
import createUserQueryOptions from '../queryOptions/createUserQueryOptions';

interface ResponseType {
  id: string;
  email: string;
}

function UserList() {
   // useSuspense allways guranteed to return a response
  const { data, error } = useSuspenseQuery<ResponseType[]>({
    ...createUserQueryOptions(),
  });

  if (error) {
    return <p>Error on fetching data</p>;
  }

  return (
    <div className="container">
      <h2>Users - useSuspenseQuery</h2>
      <ul>
        {
          data.map((item) => (
            <li key={item.id}>
              {item.email}
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default UserList;
