import "./App.css"
import Register from "./components/Register"
import Login from "./components/Login"
import { CheckSession } from "./services/Auth"
import { useState, useEffect } from "react"

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
      {user ? (
        <div>
          <p>Welcome, {user.email}</p>
          <button onClick={handleLogOut}>Log Out</button>
        </div>
      ) : (
        <>
          <Register setUser={setUser} />
          <Login setUser={setUser} />
        </>
      )}
    </>
  )
}

export default App
