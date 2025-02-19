import { keepPreviousData } from '@tanstack/react-query';

export default function createTodoQueryOptions() {
  return {
    queryKey: ['todos'], // cache key. Mandatory to define here
    queryFn: getTodos, // a fetichng function
    placeholderData: keepPreviousData, // to stop UI blinking
  }
}

const getTodos = async () => {
  // temp waiting to simulate letency
  await new Promise((resolve) => setTimeout(resolve, 2000));
  // real API call here
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  return response.json();
};
