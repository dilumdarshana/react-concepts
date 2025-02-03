import { useQuery } from '@tanstack/react-query';

interface ResponseType {
  title: string
}

function App() {
  const { data, isLoading, isPending, error } = useQuery({
    queryKey: ['todos'],
    queryFn: getTodos,
  });

  if (error) {
    return <p>Error on fetching data</p>;
  }

  return (
    <div className="container">
      <ul>
        {
          data.map((item: ResponseType) => {
            <li>
              {item.title}
            </li>
          })
        }
      </ul>
    </div>
  )
}

const getTodos = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  return response.json();
};

export default App;
