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
    <div className="container">
      <h2>Todos - useQuery</h2>
      <button onClick={() => setPage((prev) => prev + 1)}>Get Next</button>
      <ul>
        {
          data?.map((item) => (
            <li key={item.id}>
              {item.name}
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default UseQueryWIthParams;
