import { Link } from 'react-router';

const Header = () => {
  return (
    <div className="component-container">
      <h2>Welcome</h2>
      <nav className="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Users</Link>
          </li>
          <li>
            <Link to="/">Form</Link>
          </li>
          <li>
            <Link to="/">Hooks</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
