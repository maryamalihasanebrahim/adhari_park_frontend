import axios from 'axios'
import { useEffect, useState } from 'react'

const ViewBookings = () => {
  const [bookings, setBookings] = useState([])
  useEffect(() => {
    const onMount = async () => {
      const response = await axios.get(`http://localhost:3001/bookings`)
      setBookings(response.data)
    }
    onMount()
  }, [])

  return (
    <ul>
      {bookings &&
        bookings.map((booking) => <li key={booking.id}>{booking.date}</li>)}
    </ul>
  )
}
export default ViewBookings
