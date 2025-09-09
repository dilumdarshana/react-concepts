import { Link } from '@tanstack/react-router'

const LeftMenu = () => {
  return (
    <nav className="w-64 bg-gray-500 text-white p-4 rounded-md">
      <ul className="space-y-2">
        <li className="text-lg hover:bg-gray-700 rounded cursor-pointer">
          <Link to="/useQuery">useQuery</Link>
        </li>
        <li className="text-lg hover:bg-gray-700 rounded cursor-pointer">
          <Link to="/useSuspenseQuery">useSuspenseQuery</Link>
        </li>
        <li className="text-lg hover:bg-gray-700 rounded cursor-pointer">
          <Link to="/useQueriesAsync">Multiple useQueries Async</Link>
        </li>
        <li className="text-lg hover:bg-gray-700 rounded cursor-pointer">
          <Link to="/useQueriesSync">Multiple useQueries Sync</Link>
        </li>
        <li className="text-lg hover:bg-gray-700 rounded cursor-pointer">
          <Link to="/useQueryWIthParams">useQuery with parameters</Link>
        </li>
        <li className="text-lg hover:bg-gray-700 rounded cursor-pointer">
          <Link to="/tanStackTable">TanStack Table</Link>
        </li>
        <li className="text-lg hover:bg-gray-700 rounded cursor-pointer">
          <Link to="/tanStackTableDynamic">TanStack Table Dynamic</Link>
        </li>
      </ul>
    </nav>
  )
}

export default LeftMenu;
