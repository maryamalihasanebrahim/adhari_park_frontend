import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="navbar">
      <h4>may waterpark</h4>
      <div>
        <NavLink to="/log out">log out</NavLink>
        <br />
        <NavLink to="/rides">rides</NavLink>
        <br />
      </div>
    </nav>
  )
}

export default Nav