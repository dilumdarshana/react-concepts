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
                </ul>
            </nav>
        </div>
    )
}

export default Header;
