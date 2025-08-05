import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import BookingDetails from './BookingDetails'

const ViewBookings = () => {
  const [bookings, setBookings] = useState([])
  const [rides, setRides] = useState([])

  useEffect(() => {
    const onMount = async () => {
      const response = await axios.get(`http://localhost:3001/bookings`)
      setBookings(response.data)

      const theRides = await axios.get(`http://localhost:3001/rides`)
      setRides(theRides.data)
    }

    onMount()
  }, [])

  if (!bookings) return <div>Loading...</div>

  return (
    <ul>
      <h2>All bookings:</h2> <br></br>
      {bookings &&
        bookings.map((booking) => (
          <BookingDetails key={booking.id} booking={booking} rides={rides} />
        ))}
    </ul>
  )
}
export default ViewBookings
