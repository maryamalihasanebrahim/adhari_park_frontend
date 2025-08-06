import { useEffect, useState } from 'react'
import Form from './Booking'
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../styles/Rides.css'

const Rides = () => {
  const [rides, setRides] = useState([])
  useEffect(() => {
    const onMount = async () => {
      let response = await axios.get('http://localhost:3001/rides')
      response ? setRides(response.data) : console.log('loading...')
    }
    onMount()
  }, [])
  console.log(rides)
  return (
    <>
    <div className='title'>
    <img className="ribbon" src="src/images/Exclude.png" alt="" />
      <h3 className='featured'>featured rides</h3>
      </div>
      <div id="group">
        {rides.map((ride) => (
          <ul className={rides} key={ride._id}>
            <Link id="rideName" to={`${ride._id}`}>
              <div className="rides">
                {ride.name === 'Bubble Blaster' && (
                  <img
                    className="image-container"
                    src="src/images/ride_1.png"
                    alt=""
                  />
                )}
              </div>
              <div className="rides">
                {ride.name === 'BitCoaster X' && (
                  <img
                    className="image-container"
                    src="src/images/ride_2.png"
                    alt=""
                  />
                )}
              </div>
              <div className="rides">
                {ride.name === 'NeoLoop Eye' && (
                  <img
                    className="image-container"
                    src="src/images/ride_3.png"
                    alt=""
                  />
                )}
              </div>
              <li id="rideName">{ride.name.toLowerCase()}</li>
            </Link>
          </ul>
        ))}
      </div>
    </>
  )
}

export default Rides
