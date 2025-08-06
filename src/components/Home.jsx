import { useNavigate } from "react-router-dom"

const Home = () => {
  const navigate = useNavigate()
  return (
    <>
      <p> home page</p>
      <button onClick={() => navigate("/login")}>login!</button>
    </>
  )
}

export default Home
