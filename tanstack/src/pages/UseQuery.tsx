import { useQuery } from '@tanstack/react-query';
import createTodoQueryOptions from '../queryOptions/createTodoQueryOptions';

interface ResponseType {
  id: string;
  title: string;
}

function UseQuery() {
  const { data, isPending, error } = useQuery<ResponseType[]>({
    ...createTodoQueryOptions(),
    enabled: true, // can fetch data conditionally. False stop calling the query
  });

  if (error) {
    return <p>Error on fetching data</p>;
  }

  if (isPending) {
    return <p>Loading...</p>
  }

  return (
    <div className="">
      <h2 className="text-2xl font-semibold pb-3">Todos - useQuery</h2>
      <ul>
        {
          data?.map((item) => (
            <li className="p-1" key={item.id}>
              {item.title}
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default UseQuery;
