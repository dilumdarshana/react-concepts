import { useSuspenseQuery } from '@tanstack/react-query';
import createTodoQueryOptions from '../queryOptions/createTodoQueryOptions';

interface ResponseType {
  id: string;
  title: string;
}

function TodoList() {
   // useSuspense allways guranteed to return a response
  const { data, error } = useSuspenseQuery<ResponseType[]>({
    ...createTodoQueryOptions(),
  });

  if (error) {
    return <p>Error on fetching data</p>;
  }

  // can manage this loading from react Suspense itself
  // if (isPending) {
  //   return <p>Loading...</p>
  // }

  return (
    <div className="container">
      <h2>Todos - useQuery</h2>
      <ul>
        {
          data?.map((item) => (
            <li key={item.id}>
              {item.title}
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default TodoList;
