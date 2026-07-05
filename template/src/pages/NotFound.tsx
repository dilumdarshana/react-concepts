import { Link } from 'react-router';

function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-20">
      <h1 className="text-6xl font-bold text-gray-300">404</h1>
      <p className="text-gray-500">Page not found</p>
      <Link to="/" className="text-sm text-blue-600 hover:underline">
        Go home
      </Link>
    </section>
  );
}

export default NotFound;
