import { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';
import createTodoQueryOptions from '../queryOptions/createTodoQueryOptions';

interface TodoType {
  id: string;
  title: string;
}

export const Route = createFileRoute('/useMutation')({
  component: UseMutation,
});

function UseMutation() {
  const queryClient = useQueryClient();
  const [newTitle, setNewTitle] = useState('');

  const { data, isPending, error } = useQuery<TodoType[]>({
    ...createTodoQueryOptions(),
    enabled: true,
  });

  // addTodo: performs a POST and then invalidates the 'todos' query so it refetches.
  const addTodo = useMutation({
    mutationFn: async (title: string) => {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        body: JSON.stringify({ title, completed: false }),
        headers: { 'Content-Type': 'application/json' },
      });
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });

  // deleteTodo: optimistic update - remove the todo from the cache immediately,
  // then roll back if the request fails.
  const deleteTodo = useMutation({
    mutationFn: async (id: string) => {
      await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: 'DELETE',
      });
    },
    onMutate: async (id: string) => {
      await queryClient.cancelQueries({ queryKey: ['todos'] });
      const previousTodos = queryClient.getQueryData<TodoType[]>(['todos']);
      queryClient.setQueryData<TodoType[]>(['todos'], (old) =>
        old?.filter((todo) => todo.id !== id) ?? []
      );
      return { previousTodos };
    },
    onError: (_err, _id, context) => {
      if (context?.previousTodos) {
        queryClient.setQueryData(['todos'], context.previousTodos);
      }
    },
    onSettled: () => {
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
      <h2 className="text-2xl font-semibold pb-3">Todos - useMutation</h2>

      <div className="flex gap-2 mb-5">
        <input
          className="border border-gray-300 rounded-md p-2 flex-1"
          placeholder="New todo title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <button
          className="cursor-pointer bg-blue-300 border py-2 px-4 rounded-md disabled:opacity-50"
          disabled={addTodo.isPending || !newTitle.trim()}
          onClick={() => {
            addTodo.mutate(newTitle.trim());
            setNewTitle('');
          }}
        >
          {addTodo.isPending ? 'Adding...' : 'Add Todo'}
        </button>
      </div>

      <ul>
        {
          data?.map((item) => (
            <li className="p-1 odd:bg-gray-200 flex justify-between items-center" key={item.id}>
              <span>{item.title}</span>
              <button
                className="cursor-pointer bg-red-300 border py-1 px-3 rounded-md disabled:opacity-50"
                disabled={deleteTodo.isPending}
                onClick={() => deleteTodo.mutate(item.id)}
              >
                Delete
              </button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default UseMutation;