import { Outlet, Link } from 'react-router';

function Default() {
  return (
    <div className="min-h-dvh flex flex-col">
      <header className="border-b px-6 py-3 flex items-center gap-6">
        <Link to="/" className="font-bold text-lg">Template</Link>
        <nav className="flex gap-4 text-sm">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About</Link>
        </nav>
      </header>
      <main className="flex-1 p-6">
        <Outlet />
      </main>
      <footer className="border-t px-6 py-3 text-sm text-center text-gray-500">
        React Template &copy; {new Date().getFullYear()}
      </footer>
    </div>
  );
}

export default Default;
