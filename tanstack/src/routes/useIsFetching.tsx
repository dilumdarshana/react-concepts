import { useIsFetching, useIsMutating, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';
import createTodoQueryOptions from '../queryOptions/createTodoQueryOptions';

interface TodoType {
  id: string;
  title: string;
}

export const Route = createFileRoute('/useIsFetching')({
  component: UseIsFetching,
});

function UseIsFetching() {
  const queryClient = useQueryClient();

  // useIsFetching: number of queries currently fetching in the cache.
  const isFetching = useIsFetching();
  // useIsMutating: number of mutations currently running.
  const isMutating = useIsMutating();

  const { data, isPending, error } = useQuery<TodoType[]>({
    ...createTodoQueryOptions(),
    enabled: true,
  });

  const addTodo = useMutation({
    mutationFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      return { id: 'new', title: 'New todo' };
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });

  if (error) {
    return <p className="text-red-600 text-center">Error on fetching data</p>;
  }

  if (isPending) {
    return <p className="text-center text-blue-600">Loading...</p>
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold pb-3">Todos - useIsFetching / useIsMutating</h2>

      <div className="flex gap-4 mb-5">
        <span className="p-2 rounded-md bg-blue-100">
          Fetching: {isFetching > 0 ? 'Yes' : 'No'}
        </span>
        <span className="p-2 rounded-md bg-orange-100">
          Mutating: {isMutating > 0 ? 'Yes' : 'No'}
        </span>
      </div>

      <button
        className="cursor-pointer bg-blue-300 border py-2 px-4 rounded-md mb-5 disabled:opacity-50"
        disabled={addTodo.isPending}
        onClick={() => addTodo.mutate()}
      >
        {addTodo.isPending ? 'Mutating...' : 'Run Mutation'}
      </button>

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

export default UseIsFetching;