import { useQuery } from '@tanstack/react-query';
import createTodoQueryOptions from '../queryOptions/createTodoQueryOptions';
import createUserQueryOptions from '../queryOptions/createUserQueryOptions';

interface UserResponseType {
  id: string;
  email: string;
}

interface TodoResponseType {
  id: string;
  title: string;
}

function UseQueriesSync() {
  // no dependency on the first query
  const { data: users, isPending: isUsersPending } = useQuery<UserResponseType[]>(createUserQueryOptions());
  
  // the second call depends on the first query result
  const { data: todos = [], isPending: IsTodosPending } = useQuery<TodoResponseType[]>({
    ...createTodoQueryOptions(),
    enabled: users && users.length > 0 ? true : false, // only fetch data when there are users
  });

  if (isUsersPending) {
    return (<p>Loading users....</p>);
  }

  return (
    <div className="container">
      <h2>Users - useQuery (Sync)</h2>
      <ul>
        {
          users?.map((item) => (
            <li key={item.id}>
              {item.email}
            </li>
          ))
        }
      </ul>
     
      <h2>Todos - useQueries</h2>
      { IsTodosPending ? (<p>Loading Todos...</p>)
      : (
        <ul>
          {
            todos?.map((item) => (
              <li key={item.id}>
                {item.title}
              </li>
            ))
          }
        </ul>
        )
      }
  </div>
  )
}

export default UseQueriesSync;
