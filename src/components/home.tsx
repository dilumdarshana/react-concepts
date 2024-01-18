import { useCallback, useReducer, useContext, useEffect } from 'react';
import SiteDataContext from '../contexts/siteData';
import { SiteDataContextType } from '../@types/siteDataContext.td';
import { CounterContextType } from '../@types/counterContext.td';
import CounterContext from '../contexts/counter';

const reducer = (state: { count: number }, action: { type: string }) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 }
        case 'decrement':
            return { count: state.count - 1 }
        default:
            return state;
    }
}

const Home = () => {
    const [state, dispatch] = useReducer(reducer, { count: 10 });
    const { setPageTitle } = useContext(SiteDataContext) as SiteDataContextType;
    const { setCounter } = useContext(CounterContext) as CounterContextType;

    useEffect(() => {
        setPageTitle('Home');
    }, [setPageTitle]);

    const clickMe = useCallback(() => {
        setCounter(state.count)
    }, [state.count]);

    return (
        <div className="app-separator home-wrap">
            <p>
                My count is {state.count}
                <button onClick={() => dispatch({ type: 'increment' })}>+</button>
                <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
            </p>
            <button className="btn-update-footer" onClick={clickMe}>
                Update Footer
            </button>
        </div>
    )
}

export default Home;
