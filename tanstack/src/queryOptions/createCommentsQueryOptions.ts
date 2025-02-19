
export default function createCommentsQueryOptions(id: number) {
  return {
    queryKey: ['comments', id], // cache key. Mandatory to define here
    queryFn: () => getComments(id), // a fetichng function
  }
}

const getComments = async (id: number) => {
  // temp waiting to simulate letency
  await new Promise((resolve) => setTimeout(resolve, 1000));
  // real API call here
  const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
  return response.json();
};
