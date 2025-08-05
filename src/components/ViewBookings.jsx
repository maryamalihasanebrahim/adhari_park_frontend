import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const ViewBookings = () => {
  const [bookings, setBookings] = useState([])
  const [rides, setRides] = useState([])

  useEffect(() => {
    const onMount = async () => {
      const response = await axios.get(`http://localhost:3001/bookings`)
      setBookings(response.data)
    }

    onMount()
  }, [])

  if (!bookings) return <div>Loading...</div>

  return (
    <ul>
      <h2>All bookings:</h2> <br></br>
      {bookings &&
        bookings.map((booking) => (
          <li key={booking.id}>
            {booking.date.toString().substring(0, 10)}
            <Link to={`/Bookings/${booking._id}`}>
              <p> more Details...</p>
            </Link>
          </li>
        ))}
    </ul>
  )
}
export default ViewBookings
