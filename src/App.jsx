import "./App.css"
import Register from "./components/Register"
import Login from "./components/Login"
import { CheckSession } from "./services/Auth"
import { useState, useEffect } from "react"
import Rides from "./components/Rides"
import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router-dom"
import Form from "./components/Booking"
import RideDetails from "./components/RideDetails"
import ViewBookings from "./components/ViewBookings"
import ViewBooking from "./components/ViewBooking"

function App() {
  const [user, setUser] = useState(null)

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
  }
  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      checkToken()
    }
  }, [])

  const handleLogOut = () => {
    setUser(null)
    localStorage.clear()
  }

  return (
    <>
      <Navbar user={user} handleLogout={handleLogOut} />
      <main>
        <Routes>
          <Route path="/rides" element={<Rides />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/register" element={<Register setUser={setUser} />} />
          <Route path="/rides/:id" element={<RideDetails />} />
          <Route path="/bookings/new/:id" element={<Form user={user} />} />
          <Route path="/bookings" element={<ViewBookings />} />
          <Route path="/bookings/:id" element={<ViewBooking />} />
        </Routes>
      </main>
    </>
  )
}

export default App
