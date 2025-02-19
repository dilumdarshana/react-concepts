import { keepPreviousData } from '@tanstack/react-query';

interface OptionsType {
  pageIndex: number;
  pageSize: number;
}

export default function createTodoQueryOptions(options: OptionsType) {
  return {
    queryKey: ['todos', options], // cache key. Mandatory to define here
    queryFn: () => getTodos(options), // a fetichng function
    placeholderData: keepPreviousData, // to stop UI blinking
  };
}

/**
 * Here we have a simulation of API. Actual API should return rows, rowCount and
 * pageCount from the backend itself.
 */
const getTodos = async (options: OptionsType) => {
  // real API call here
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await response.json();

  return {
    rows: data.slice(options.pageIndex * options.pageSize, (options.pageIndex + 1) * options.pageSize),
    rowCount: data.length,
    pageCount: Math.ceil(data.length / options.pageSize),
  }
};
