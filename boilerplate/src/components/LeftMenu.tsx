import { Link } from 'react-router';

const LeftMenu = () => {
  return (
    <div className="w-64 bg-gray-50 p-4 border-r border-gray-200 shadow-sm">
      <h2 className="text-lg font-semibold mb-4 text-gray-700">Menu</h2>
      <nav>
        <ul className="space-y-2">
          <li>
            <Link className="block p-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition duration-200" to="/">Home</Link>
          </li>
          <li>
            <Link className="block p-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition duration-200" to="/sample">Sample</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default LeftMenu;
