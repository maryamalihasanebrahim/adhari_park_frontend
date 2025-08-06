import { useNavigate } from 'react-router-dom'
import '../styles/home.css'
const Home = () => {
  const navigate = useNavigate()
  return (
    <>
      <div id="home">
        <h1>WELCOME TO AMY!</h1>
        <p className="quote">
          born from the sparkle of Alya, the heart of Maryam, and the joy of
          Yara
        </p>
        <button id="loginButton" onClick={() => navigate('/login')}>
          <img src="./src/images/ticket.png" alt="" width="300px" />
        </button>
      </div>
    </>
  )
}

export default Home
