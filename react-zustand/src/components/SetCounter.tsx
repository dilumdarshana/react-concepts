// Demonstrates useShallow — destructure multiple values without
// subscribing to the entire store. Only re-renders when one of the
// selected values changes (by reference).
import { useEffect } from 'react';
import { useShallow } from 'zustand/react/shallow';
import useStore from '../store/useStore';
import '../App.css';

const SetCounter = () => {
  // useShallow performs a shallow comparison of the selected object
  // so destructuring doesn't cause re-renders on unrelated state changes
  const { increment, decrement, toggleTheme } = useStore(
    useShallow((s) => ({
      increment: s.increment,
      decrement: s.decrement,
      toggleTheme: s.toggleTheme,
    }))
  );

  // Reading state outside a component via store.getState()
  const getCount = () => {
    const count = useStore.getState().count;
    console.log('[getState] count:', count);
  };

  useEffect(() => {
    getCount();
  }, []);

  // Writing state outside a component via store.setState()
  const setCount = () => {
    useStore.setState({ count: 100 }, false, 'manual/setCount');
  };

  return (
    <div className="component">
      <h2>Set Counter (useShallow)</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={setCount}>Set Count</button>
      <button onClick={getCount}>Get Count</button>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default SetCounter;
