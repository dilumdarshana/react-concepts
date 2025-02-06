import { Outlet } from 'react-router';

const Simple = () => {
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
        <Outlet />
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

export default Simple;
