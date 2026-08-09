import { useInfiniteQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';

interface ResponseType {
  id: string;
  title: string;
}

interface PageType {
  rows: ResponseType[];
  nextPage: number | undefined;
}

export const Route = createFileRoute('/useInfiniteQuery')({
  component: UseInfiniteQuery,
});

const getTodosPage = async (pageParam: number): Promise<PageType> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos?_page=${pageParam}&_limit=10`
  );
  const data = await response.json();
  return {
    rows: data,
    nextPage: pageParam < 20 ? pageParam + 1 : undefined,
  };
};

function UseInfiniteQuery() {
  const {
    data,
    isPending,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['todos', 'infinite'],
    queryFn: ({ pageParam }) => getTodosPage(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });

  if (error) {
    return <p className="text-red-600 text-center">Error on fetching data</p>;
  }

  if (isPending) {
    return <p className="text-center text-blue-600">Loading...</p>
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold pb-3">Todos - useInfiniteQuery</h2>
      <ul>
        {
          data?.pages.map((page) =>
            page.rows.map((item) => (
              <li className="p-1 odd:bg-gray-200" key={item.id}>
                {item.title}
              </li>
            ))
          )
        }
      </ul>
      <button
        className="cursor-pointer bg-blue-300 border py-2 px-4 rounded-md mt-5 disabled:opacity-50"
        disabled={!hasNextPage || isFetchingNextPage}
        onClick={() => fetchNextPage()}
      >
        {isFetchingNextPage
          ? 'Loading more...'
          : hasNextPage
            ? 'Load More'
            : 'Nothing more to load'}
      </button>
    </div>
  )
}

export default UseInfiniteQuery;