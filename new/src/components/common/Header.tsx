import { useContext } from 'react';
import { Link } from 'react-router';
import SiteDataContext from '../../contexts/SiteData';
import { SiteDataContextType } from '../../@types/siteDataContext.td';

const Header = () => {
  const { title } = useContext(SiteDataContext) as SiteDataContextType;

  return (
    <div className="component-container">
      <h2>Welcome! [Page Title: {title}]</h2>
    </div>
  );
};

export default Header;
