import { Link } from 'react-router';

const LeftMenu = () => {
  return (
    <nav className="w-64 bg-gray-500 text-white p-4 rounded-md">
      <ul className="space-y-2">
        <li className="text-lg hover:bg-gray-700 rounded cursor-pointer">
          <Link to="/">useQuery</Link>
        </li>
        <li className="text-lg hover:bg-gray-700 rounded cursor-pointer">
          <Link to="/use-suspense">useSuspenseQuery</Link>
        </li>
        <li className="text-lg hover:bg-gray-700 rounded cursor-pointer">
          <Link to="/use-query-multiple-async">Multiple useQueries Async</Link>
        </li>
        <li className="text-lg hover:bg-gray-700 rounded cursor-pointer">
          <Link to="/use-query-multiple-sync">Multiple useQueries Sync</Link>
        </li>
        <li className="text-lg hover:bg-gray-700 rounded cursor-pointer">
          <Link to="/usequery-params">useQuery with parameters</Link>
        </li>
      </ul>
    </nav>
  )
}

export default LeftMenu;
