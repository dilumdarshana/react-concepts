import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import createCommentsQueryOptions from '../queryOptions/createCommentsQueryOptions';

interface ResponseType {
  id: string;
  name: string;
}

function UseQueryWIthParams() {
  const [page, setPage] = useState(1);
  const { data, isPending, error } = useQuery<ResponseType[]>({
    ...createCommentsQueryOptions(page),
    enabled: true, // can fetch data conditionally. False stop calling the query
  });

  if (error) {
    return <p>Error on fetching data</p>;
  }

  if (isPending) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold pb-3">Todos - useQuery</h2>
      <button className="hover:bg-blue-500 border py-2 px-4 rounded-md" onClick={() => setPage((prev) => prev + 1)}>Get Next</button>
      <ul>
        {
          data?.map((item) => (
            <li className="p-1" key={item.id}>
              {item.name}
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default UseQueryWIthParams;
