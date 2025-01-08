import { useContext } from 'react';
import CounterContext from '../../contexts/Counter';
import { ConterContextType } from '../../@types/conterContext.td';

const Footer = () => {
  const { counter } = useContext(CounterContext) as ConterContextType;
  return (
    <div className="component-container">
      <p>My Counter {counter}</p>
      <h2>[Footer]</h2>
    </div>
  );
};

export default Footer;
