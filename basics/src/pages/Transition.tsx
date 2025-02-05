/**
 * useTransition - stop freezing the broswer for cpu extensive works (make low priority). This basically,
 * allow other processes to run smoothly, while executing expensive operations
 */
import { useContext, useEffect, useState, useTransition } from 'react';
import SiteDataContext from '../contexts/SiteData';
import { SiteDataContextType } from '../@types/siteDataContext';

const Transition = () => {
  const { setPageTitle, setPageDescription } = useContext(SiteDataContext) as SiteDataContextType;
  const [input, setInput] = useState('');
  const [list, setList] = useState<string[]>([]);
  const [isPending, startTransition] = useTransition();

  const LIST_SIZE = 20000;

  useEffect(() => {
    setPageTitle('Transition');
    setPageDescription(`
      useTransition: (hook) stop freezing the broswer for cpu extensive works (make low priority). This basically, allow other processes to run smoothly, while executing expensive operations
    `);
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);

    startTransition(() => { // low priority peice
      const l = [];
      for (let i = 0; i < LIST_SIZE; i++) {
        l.push(e.target.value);
      }
      setList(l);
    });
  };

  return (
    <div className="component-container">
      <input type="text" value={input} onChange={handleChange} placeholder="Start Typing..." />
      {
        isPending ? 'Pending...' :
        list.map((item, index) => {
          return <div key={index}>{item}</div>  
        })
      }
    </div>
  );
};

export default Transition;
