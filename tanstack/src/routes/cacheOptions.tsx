import { useQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';

interface TodoType {
  id: string;
  title: string;
}

export const Route = createFileRoute('/cacheOptions')({
  component: CacheOptions,
});

const getTodos = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  return response.json();
};

function CacheOptions() {
  const { data, isPending, error, isFetching, refetch } = useQuery<TodoType[]>({
    queryKey: ['todos', 'cacheOptions'],
    queryFn: getTodos,
    // staleTime: how long data is considered fresh (no background refetch).
    staleTime: 30_000,
    // gcTime: how long unused data stays in the cache before being garbage collected.
    gcTime: 60_000,
    // retry: how many times to retry a failed fetch.
    retry: 3,
    // refetchOnWindowFocus: refetch when the window regains focus.
    refetchOnWindowFocus: true,
    // refetchInterval: poll the query automatically every N ms.
    refetchInterval: 15_000,
  });

  if (error) {
    return <p className="text-red-600 text-center">Error on fetching data</p>;
  }

  if (isPending) {
    return <p className="text-center text-blue-600">Loading...</p>
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold pb-3">Todos - cache options</h2>

      <div className="flex gap-4 mb-5">
        <span className="p-2 rounded-md bg-blue-100">
          isFetching: {isFetching ? 'Yes' : 'No'}
        </span>
        <button className="cursor-pointer bg-blue-300 border py-2 px-4 rounded-md" onClick={() => refetch()}>
          Refetch
        </button>
      </div>

      <ul>
        {
          data?.map((item) => (
            <li className="p-1 odd:bg-gray-200" key={item.id}>
              {item.title}
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default CacheOptions;