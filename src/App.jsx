import "./App.css"
import Register from "./components/Register"
import Login from "./components/Login"
import { CheckSession } from "./services/Auth"
import { useState, useEffect } from "react"
import Rides from "./components/Rides"
import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router-dom"
Routes
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
        </Routes>
      </main>
    </>
  )
}

export default App
