import { Outlet } from 'react-router-dom'; 
import Header from '../components/common/header';
import Footer from '../components/common/footer';

const Default = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Default;
