import { Outlet } from 'react-router';
import LeftMenu from '@/components/LeftMenu';

const Default = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">Simple Boilerplate</h1>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-grow container mx-auto pt-4">
        <div className="flex">
          {/* Left Menu */}
          <div className="w-64 bg-gray-100 p-4 border-r border-gray-200">
            <LeftMenu />
          </div>
          {/* Main Content */}
          <div className="flex-grow bg-white p-4">
            <Outlet />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 mt-auto">
        <div className="container mx-auto">
          <p className="text-center">&copy; 2025 xxxx.com. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Default;
