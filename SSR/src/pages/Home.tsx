import { JSX, useState } from 'react';

const Home = (): JSX.Element => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Home</h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </>
  )
}

export default Home;
