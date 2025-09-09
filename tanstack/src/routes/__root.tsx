import { createRootRoute, Outlet } from '@tanstack/react-router';
import LeftMenu from '../components/LeftMenu';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

const RootLayout = () => (
  <div className="grid grid-cols-12 gap-4 p-4 min-h-screen">
    <div className="col-span-4 md:col-span-3 gb-gray-800 rounded-lg shadow-md">
      <LeftMenu />
    </div>
    <div className="col-span-8 md:col-span-9 p-6 rounded-lg shadow-md">
      <header className="bg-blue-100 p-3">
        <h2 className="text-2xl font-bold">TanStack</h2>
      </header>
      <main className="pt-2">
        <Outlet />
      </main>
      <footer className="bg-gray-200 p-3 mt-5 mb-4">
        <p>&copy; 2025 My Website. All rights reserved.</p>
      </footer>
    </div>
    <TanStackRouterDevtools />
  </div>
);

export const Route = createRootRoute({ component: RootLayout });
