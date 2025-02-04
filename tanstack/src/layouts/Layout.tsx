import { Outlet } from 'react-router';
import LeftMenu from '../components/LeftMenu';

const Default = () => {
  return (
    <>
    <div className="layout-row">
      <div className="layout-left">
        <LeftMenu />
      </div>
      <div className="layout-right">
        <header>
          <h2>Header</h2>
        </header>
        <Outlet />
        <footer>
          <p>&copy; 2025 My Website. All rights reserved.</p>
        </footer>
      </div>
    </div>
    </>
  );
};

export default Default;
