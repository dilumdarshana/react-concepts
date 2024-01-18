import { useContext } from 'react';
import CounterContext from '../../contexts/counter';
import { CounterContextType } from '../../@types/counterContext.td';

const Footer = () => {
    const { counter } = useContext(CounterContext) as CounterContextType;
    return (
        <div className="app-separator">
            <p>My Counter {counter}</p>
            <h2>[Footer]</h2>
        </div>
    )
}

export default Footer;
