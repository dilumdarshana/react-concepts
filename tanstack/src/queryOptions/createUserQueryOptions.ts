
export default function createUserQueryOptions () {
  return {
    queryKey: ['users'], // cache key. Mandatory to define here
    queryFn: getUsers, // a fetichng function
  }
}

const getUsers = async () => {
  // temp waiting to simulate letency
  await new Promise((resolve) => setTimeout(resolve, 1000));
  // real API call here
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  return response.json();
};
