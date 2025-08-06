import { Link } from 'react-router-dom'
import '../styles/Nav.css'
const Navbar = ({ user, handleLogout }) => {
  let userOptions
  if (user) {
    userOptions = (
      <nav className="nav">
        <Link className="navDiv" to="/rides">
          rides
        </Link>

        <Link className="navDiv" to="/Bookings">
          my bookings
        </Link>

        <Link className="navDiv" onClick={handleLogout} to="/login">
          log out
        </Link>
      </nav>
    )
  }
  const publicOptions = (
    <nav className="nav">
      <Link className="navDiv" to="/rides">
        rides
      </Link>

      <Link to="/register" className="navDiv" >register</Link>

      <Link to="/login" className="navDiv" >login</Link>
    </nav>
  )
  return <header>{user ? userOptions : publicOptions}</header>
}
export default Navbar
