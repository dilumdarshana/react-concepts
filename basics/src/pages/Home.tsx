import { useContext, useEffect, useReducer } from 'react';
import CounterContext from '../contexts/Counter';
import { ConterContextType } from '../@types/conterContext';
import counterReducer from '../reducers/couter';
import { INCREMENT, DECREMENT } from '../constants/action_types/counter';
import SiteDataContext from '../contexts/SiteData';
import { SiteDataContextType } from '../@types/siteDataContext';
import usePrevious from '../hooks/usePrevious';

const Home = () => {
  const { setCounter } = useContext(CounterContext) as ConterContextType;
  const { setPageTitle, setPageDescription } = useContext(SiteDataContext) as SiteDataContextType;
  const [state, dispatch] = useReducer(counterReducer, { count: 1});

  useEffect(() => {
    setPageTitle('Home');
    setPageDescription(`
      useEffect: (hook) Asynchronous. This get executed after the render is painted to the screen. 
      useReducer
      useContext hooks with dispatch
    `);
  });

  // demonstrate the custom hook
  const previousCount = usePrevious<number>(state.count);

  const updateFooter = () => {
    setCounter(state.count);
  };

  return (
    <div className="component-container home-component">
      <h2>[Home]</h2>
      <p>
        My current count is {state.count}, previous count is {previousCount}
        <button onClick={() => dispatch({ type: INCREMENT })}>+</button>
        <button onClick={() => dispatch({ type: DECREMENT })}>-</button>
      </p>
      <button className="update-btn" onClick={() => updateFooter()}>Update Footer</button>
    </div>
  );
}

export default Home;
