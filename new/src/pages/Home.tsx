import { useContext, useEffect, useReducer } from 'react';
import CounterContext from '../contexts/Counter';
import { ConterContextType } from '../@types/conterContext';
import counterReducer from '../reducers/couter';
import { INCREMENT, DECREMENT } from '../constants/action_types/counter';
import SiteDataContext from '../contexts/SiteData';
import { SiteDataContextType } from '../@types/siteDataContext';

const Home = () => {
  const { setCounter } = useContext(CounterContext) as ConterContextType;
  const { setPageTitle } = useContext(SiteDataContext) as SiteDataContextType;
  const [state, dispatch] = useReducer(counterReducer, { count: 1});

  useEffect(() => {
    setPageTitle('Home');
  }, []);

  const updateFooter = () => {
    setCounter(state.count);
  };

  return (
    <div className="component-container home-component">
      <h2>[Home]</h2>
      <p>
        My count is {state.count}
        <button onClick={() => dispatch({ type: INCREMENT })}>+</button>
        <button onClick={() => dispatch({ type: DECREMENT })}>-</button>
      </p>
      <button className="update-btn" onClick={() => updateFooter()}>Update Footer</button>
    </div>
  );
}

export default Home;
