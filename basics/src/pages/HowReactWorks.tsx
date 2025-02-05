import { useContext, useEffect } from 'react';
import SiteDataContext from '../contexts/SiteData';
import { SiteDataContextType } from '../@types/siteDataContext';

const HowReactWorks = () => {
  const { setPageTitle, setPageDescription } = useContext(SiteDataContext) as SiteDataContextType;
  
  useEffect(() => {
    setPageTitle('How React Works');
    setPageDescription('');
  });

  return (
    <div className="component-container">
      TBD
    </div>
  )
}

export default HowReactWorks;
