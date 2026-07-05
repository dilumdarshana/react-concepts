import { Outlet } from 'react-router';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

function Default() {
  return (
    <div className="min-h-dvh flex flex-col">
      <Header />
      <main className="flex-1 p-6">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Default;
