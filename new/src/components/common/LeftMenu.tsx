import { Link } from 'react-router';

const LeftMenu = () => {
  return (
    <div className="component-container">
      <nav className="left-navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/form">Form</Link>
          </li>
          <li>
            <Link to="/hooks">Hooks</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default LeftMenu;
