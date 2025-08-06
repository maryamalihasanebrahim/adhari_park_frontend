import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import BookingDetails from './BookingDetails'
import '../styles/Bookings.css'

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

  if (!bookings) return <div>loading...</div>

  return (
    <ul className='list'>
      <div className="allinfo">
        <h2>my bookings </h2> <br></br>
        {bookings &&
          bookings.map((booking) => (
            <BookingDetails key={booking.id} booking={booking} rides={rides} />
          ))}
      </div>
    </ul>
  )
}
export default ViewBookings
