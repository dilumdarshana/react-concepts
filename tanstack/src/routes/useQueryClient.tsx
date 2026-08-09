import { useQuery, useQueryClient } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';
import createTodoQueryOptions from '../queryOptions/createTodoQueryOptions';

interface TodoType {
  id: string;
  title: string;
}

export const Route = createFileRoute('/useQueryClient')({
  component: UseQueryClient,
});

function UseQueryClient() {
  const queryClient = useQueryClient();

  const { data, isPending, error } = useQuery<TodoType[]>({
    ...createTodoQueryOptions(),
    enabled: true,
  });

  // prefetchQuery: fetch a query into the cache before it is needed.
  const prefetch = async () => {
    await queryClient.prefetchQuery(createTodoQueryOptions());
  };

  // setQueryData: write directly into the cache without a network request.
  const addLocalTodo = () => {
    queryClient.setQueryData<TodoType[]>(['todos'], (old) => [
      { id: `local-${Date.now()}`, title: 'Local todo (not from server)' },
      ...(old ?? []),
    ]);
  };

  // removeQueries: drop a query (and its data) from the cache entirely.
  const removeTodos = () => {
    queryClient.removeQueries({ queryKey: ['todos'] });
  };

  if (error) {
    return <p className="text-red-600 text-center">Error on fetching data</p>;
  }

  if (isPending) {
    return <p className="text-center text-blue-600">Loading...</p>
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold pb-3">Todos - useQueryClient</h2>
      <div className="flex gap-2 mb-5">
        <button className="cursor-pointer bg-blue-300 border py-2 px-4 rounded-md" onClick={prefetch}>
          Prefetch Query
        </button>
        <button className="cursor-pointer bg-green-300 border py-2 px-4 rounded-md" onClick={addLocalTodo}>
          Add Local Todo
        </button>
        <button className="cursor-pointer bg-red-300 border py-2 px-4 rounded-md" onClick={removeTodos}>
          Remove Todos
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

export default UseQueryClient;