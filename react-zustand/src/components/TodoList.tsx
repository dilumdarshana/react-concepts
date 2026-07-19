// Demonstrates:
//   1. Async actions — fetching data in a Zustand action
//   2. Loading / error / data state pattern
//   3. Subscriptions outside React via store.subscribe()
import { useEffect } from 'react';
import useStore from '../store/useStore';
import '../App.css';

const TodoList = () => {
  // Multiple selectors — each component uses fine-grained selections
  const todos = useStore((s) => s.todos);
  const isLoading = useStore((s) => s.isLoading);
  const error = useStore((s) => s.error);
  const fetchTodos = useStore((s) => s.fetchTodos);

  // Subscribe to store changes outside the React render cycle
  useEffect(() => {
    const unsub = useStore.subscribe((state) => {
      console.log('[subscribe] Todos updated — count:', state.todos.length);
    });

    fetchTodos();

    return () => {
      unsub();
    };
  }, [fetchTodos]);

  if (isLoading) return <div className="component">Loading todos...</div>;
  if (error) return <div className="component">Error: {error}</div>;

  return (
    <div className="component">
      <h2>Async Todos</h2>
      <button onClick={fetchTodos}>Refresh</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.completed ? '✓' : '○'}</span>{' '}
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
