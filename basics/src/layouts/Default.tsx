import { Outlet } from 'react-router';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import LeftMenu from '../components/common/LeftMenu';

const Default = () => {
  return (
    <>
    <div className="layout-row">
      <div className="layout-left">
        <LeftMenu />
      </div>
      <div className="layout-right">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
    </>
  );
};

export default Default;
