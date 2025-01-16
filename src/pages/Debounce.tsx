/**
 * 
 */
import { Suspense, useContext, useEffect, useState } from 'react';
import SiteDataContext from '../contexts/SiteData';
import { SiteDataContextType } from '../@types/siteDataContext';
import List from '../components/List';

const Debounce = () => {
  const { setPageTitle, setPageDescription } = useContext(SiteDataContext) as SiteDataContextType;
  const [input, setInput] = useState('');

  useEffect(() => {
    setPageTitle('Debounce');
    setPageDescription(`useDeferredValue hook. This will stop being frozen component from 
      CPU extensive works (make low priority). This basically, allow other processes to run smoothly,
      while executing expensive operations.`);
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <div className="component-container">
      <input type="text" value={input} onChange={handleChange} placeholder="Type Something..." />
      <Suspense fallback={<p>Loading...</p>}>
        <div><List input={input} /></div>
      </Suspense>
    </div>
  )
};

export default Debounce;
