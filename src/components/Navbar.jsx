import { Link } from "react-router-dom"

const Navbar = ({ user, handleLogout }) => {
  let userOptions
  if (user) {
    userOptions = (
      <nav>
        <Link to="/rides">Rides</Link>

        <Link to="/rides"></Link>
        <Link onClick={handleLogout} to="/login">
          Logout
        </Link>
      </nav>
    )
  }
  const publicOptions = (
    <nav>
      <Link to="/rides">Rides</Link>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
    </nav>
  )
  return <header>{user ? userOptions : publicOptions}</header>
}
export default Navbar
