import { Link } from 'react-router-dom'
import '../styles/Nav.css'
const Navbar = ({ user, handleLogout }) => {
  let userOptions
  if (user) {
    userOptions = (
      <nav className="nav">
        <Link className="navDiv" to="/rides">
          Rides
        </Link>

        <Link className="navDiv" to="/Bookings">
          View Bookings
        </Link>

        <Link className="navDiv" onClick={handleLogout} to="/login">
          Logout
        </Link>
      </nav>
    )
  }
  const publicOptions = (
    <nav className="nav">
      <Link className="navDiv" to="/rides">
        Rides
      </Link>

      <Link to="/register" className="navDiv" >Register</Link>

      <Link to="/login" className="navDiv" >Login</Link>
    </nav>
  )
  return <header>{user ? userOptions : publicOptions}</header>
}
export default Navbar
