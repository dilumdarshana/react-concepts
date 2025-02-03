import { useEffect } from 'react';
import useStore from '../store/useStore';

const SetCounter = () => {
  const { increment, decrement} = useStore();

  useEffect(() => {
    getCount();
  }, []);

  // sate can use outside of the component this way
  const getCount = () => {
    const count = useStore.getState().count;
    console.log('count', count);
  };

  // set outside of the component
  const setCount= () => {
    useStore.setState({ count: 100 });
  };

  return (
    <div className="component">
      <h2>Set Counter</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={setCount}>Set Count</button>
      <button onClick={getCount}>Get Count</button>
    </div>
  );
};

export default SetCounter;
