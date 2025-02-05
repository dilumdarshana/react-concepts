import { useContext } from 'react';
import SiteDataContext from '../../contexts/SiteData';
import { SiteDataContextType } from '../../@types/siteDataContext';

const Header = () => {
  const { title, description } = useContext(SiteDataContext) as SiteDataContextType;

  return (
    <div className="component-container header">
      <h2 className="title">Welcome! [Page Title: {title}]</h2>
      <pre className="description">{description}</pre>
    </div>
  );
};

export default Header;
