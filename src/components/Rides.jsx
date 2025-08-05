import { useEffect, useState } from 'react'
import Form from './Booking'
import { Link } from 'react-router-dom'
import axios from 'axios'

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
      {rides.map((ride) => (
        <ul key={ride._id}>
          <Link to={`${ride._id}`}>
            <li>{ride.name}</li>
          </Link>
        </ul>
      ))}
    </>
  )
}

export default Rides
