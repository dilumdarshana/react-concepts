import { useContext, useEffect, useLayoutEffect, useState } from 'react';
import SiteDataContext from '../contexts/SiteData';
import { SiteDataContextType } from '../@types/siteDataContext';

const UseLayoutEffect = () => {
  const { setPageTitle, setPageDescription } = useContext(SiteDataContext) as SiteDataContextType;
  const [textContent, setTextContent] = useState('Initial Text');

  useEffect(() => {
    setPageTitle('useLayoutEffect');
    setPageDescription(`
      useLayoutEffect: (hook) Synchronous. This will fire, after the DOM update happens, but, before the sreen in printed`);
  });

  // useLayoutEffect is used to manipulate the DOM before it's painted. Not line useEffect
  useLayoutEffect(() => {
    setTextContent('Text updated before screen get printed. User will not see the Initial Text');
  }, []);

  return (
    <div className="component-container">
      {textContent}
    </div>
  )
}

export default UseLayoutEffect;
