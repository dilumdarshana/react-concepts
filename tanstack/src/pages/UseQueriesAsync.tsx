import { useQueries } from '@tanstack/react-query';
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

function UseQueriesAsync() {
  const [{ data: todos }, { data: users }] = useQueries({
    queries: [
      createTodoQueryOptions(),
      createUserQueryOptions(),
    ],
  }) as [ // type assertion
      { data: TodoResponseType[] },
      { data: UserResponseType[] }
    ];

  return (
    <div>
      <h2 className="text-2xl font-semibold pb-3">Users - useQueries</h2>
      <ul>
        {
          users?.map((item) => (
            <li className="p-1 odd:bg-gray-200" key={item.id}>
              {item.email}
            </li>
          ))
        }
      </ul>
      <h2 className="text-2xl font-semibold pb-3 mt-2">Todos - useQueries</h2>
      <ul>
        {
          todos?.map((item) => (
            <li className="p-1 odd:bg-gray-200" key={item.id}>
              {item.title}
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default UseQueriesAsync;
