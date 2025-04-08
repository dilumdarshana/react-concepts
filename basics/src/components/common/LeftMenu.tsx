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
            <Link to="/how-react-works">How React Works</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/form">Form</Link>
          </li>
          <li>
            <Link to="/react-hook-form">React Hook Form</Link>
          </li>
          <li>
            <Link to="/transition">Transition</Link>
          </li>
          <li>
            <Link to="/debounce">Debounce</Link>
          </li>
          <li>
            <Link to="/useref">UseRef</Link>
          </li>
          <li>
            <Link to="/use-layout-effect">UseLayoutEffect</Link>
          </li>
          <li>
            <Link to="/use">Use</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default LeftMenu;
