// Todos slice — demonstrates async actions with loading/error/data pattern.
import { StateCreator } from 'zustand';

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface TodosSlice {
  todos: Todo[];
  isLoading: boolean;
  error: string | null;
  fetchTodos: () => Promise<void>;
}

export const createTodosSlice: StateCreator<TodosSlice, [["zustand/devtools", never]], []> = (set) => ({
  todos: [],
  isLoading: false,
  error: null,
  fetchTodos: async () => {
    set({ isLoading: true, error: null }, false, 'todos/fetchTodos/pending');
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
      if (!response.ok) throw new Error('Failed to fetch');
      const data: Todo[] = await response.json();
      set({ todos: data, isLoading: false }, false, 'todos/fetchTodos/fulfilled');
    } catch {
      set({ error: 'Failed to fetch todos', isLoading: false }, false, 'todos/fetchTodos/rejected');
    }
  },
});
