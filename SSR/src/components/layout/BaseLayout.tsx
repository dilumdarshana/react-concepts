import { useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import HeaderNavBar from './HeaderNavBar';

const BaseLayout = () => {
  // const [hydrated, setHydrated] = useState(false);

  // useEffect(() => {
  //   setHydrated(true);
  // }, []);


  // if (!hydrated) return null;

  return (
    <>
      <HeaderNavBar />
      <section className="pages">
        <Outlet />
      </section>
    </>
  )
};

export default BaseLayout;
