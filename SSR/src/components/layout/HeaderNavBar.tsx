import { NavLink } from 'react-router';

const HeaderNavBar = () => {
  return (
    <section className="header-nav-bar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </section>
  )
}

export default HeaderNavBar;
