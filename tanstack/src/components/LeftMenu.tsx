import { Link } from 'react-router';

const LeftMenu = () => {
  return (
    <div className="component-container">
      <nav className="left-navigation">
        <ul>
          <li>
            <Link to="/">useQuery</Link>
          </li>
          <li>
            <Link to="/use-suspense">useSuspenseQuery</Link>
          </li>
          <li>
            <Link to="/use-query-multiple">Multiple useQueries Async</Link>
          </li>
          <li>
            <Link to="/use-query-multiple-sync">Multiple useQueries Sync</Link>
          </li>
          <li>
            <Link to="/usequery-params">useQuery with parameters</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default LeftMenu;
