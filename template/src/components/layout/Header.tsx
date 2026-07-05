import { Link } from 'react-router';
import { useTheme } from '@/hooks/useTheme';

function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="border-b px-6 py-3 flex items-center gap-6">
      <Link to="/" className="font-bold text-lg">Template</Link>
      <nav className="flex gap-4 text-sm">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/counter" className="hover:underline">Counter</Link>
      </nav>
      <button
        onClick={toggleTheme}
        className="ml-auto text-sm capitalize border rounded px-2 py-0.5 hover:bg-gray-100"
      >
        {theme}
      </button>
    </header>
  );
}

export default Header;
