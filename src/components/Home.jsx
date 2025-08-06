import { useNavigate } from "react-router-dom"

const Home = () => {
  const navigate = useNavigate()
  return (
    <>
      <p> home page</p>
      <button onClick={() => navigate("/login")}>Login!</button>
    </>
  )
}

export default Home
