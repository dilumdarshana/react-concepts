// Hooks and utilities from TanStack libraries
// - useQuery: performs and caches server/stateful async data fetching
// - createFileRoute: simple file-based route registration helper for the router
import { useQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';
// Local helper that returns the options for the todo query (fetch function, keys, staleTime, etc.)
import createTodoQueryOptions from '../queryOptions/createTodoQueryOptions';

// Shape of a single todo item returned by the API / data source
interface ResponseType {
  id: string;
  title: string;
}

// Register this component as a route. The router uses the file route helper
// to wire the path '/useQuery' to the `UseQuery` component.
export const Route = createFileRoute('/useQuery')({
  component: UseQuery,
});

function UseQuery() {
  // useQuery returns an object with the data and status flags.
  // We provide a typed generic ResponseType[] so `data` is inferred as an array of todos.
  // The options are composed from a local helper so we keep fetch logic reusable.
  const { data, isPending, error } = useQuery<ResponseType[]>({
    ...createTodoQueryOptions(),
    // `enabled` controls whether the query should automatically run.
    // Set to `true` here so the query runs immediately. Set to `false` to delay/exclude the fetch.
    enabled: true,
  });

  // Basic error handling and loading state rendering.
  // `error` will be truthy when the fetch threw or returned an error response.
  if (error) {
    return <p>Error on fetching data</p>;
  }

  // `isPending` is used for the loading UI while the query is in flight.
  if (isPending) {
    return <p>Loading...</p>
  }

  return (
    <div className="">
      <h2 className="text-2xl font-semibold pb-3">Todos - useQuery</h2>
      {/* Render the list of todos. `data` is optional while loading, so use optional chaining. */}
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

export default UseQuery;
