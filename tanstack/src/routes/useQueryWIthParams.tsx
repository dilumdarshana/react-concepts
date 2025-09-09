import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';
import createCommentsQueryOptions from '../queryOptions/createCommentsQueryOptions';

interface ResponseType {
  id: string;
  name: string;
}

export const Route = createFileRoute('/useQueryWIthParams')({
  component: UseQueryWIthParams,
});

function UseQueryWIthParams() {
  const [page, setPage] = useState(1);
  const { data, isPending, error } = useQuery<ResponseType[]>({
    ...createCommentsQueryOptions(page),
    enabled: true, // can fetch data conditionally. False stop calling the query
  });

  if (error) {
    return <p className="text-red-600 text-center">Error on fetching data</p>;
  }

  if (isPending) {
    return <p className="text-center text-blue-600">Loading...</p>
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold pb-3">Todos - useQuery with params</h2>
      <button className="cursor-pointer bg-blue-300 border py-2 px-4 rounded-md mb-5" onClick={() => setPage((prev) => prev + 1)}>Get Next</button>
      <ul>
        {
          data?.map((item) => (
            <li className="p-1 odd:bg-gray-200" key={item.id}>
              {item.name}
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default UseQueryWIthParams;
