import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="app-separator">
            <h2>WELCOME</h2>
            <nav className="navigation">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/users">Users</Link>
                    </li>
                    <li>
                        <Link to="/form">Hooks</Link>
                    </li>
                    <li>
                        <Link to="/play">Play</Link>
                    </li>
                    <li>
                        <Link to="/transition">Transition</Link>
                    </li>
                    <li>
                        <Link to="/debounce">Debounce</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;
