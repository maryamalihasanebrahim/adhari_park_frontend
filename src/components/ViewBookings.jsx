import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const ViewBookings = () => {
  const { id } = useParams()
  const [bookings, setBookings] = useState([])
  useEffect(() => {
    const onMount = async () => {
      const response = await axios.get(`http://localhost:3001/bookings`)
      setBookings(response.data)
    }
    onMount()
  }, [])

  const handleDelete = async () => {
    const response = await axios.delete(`http://localhost:3001/bookings`)
  }
  return (
    <ul>
      <Link to={`http://localhost:3001/bookings/${id}`}>
        {bookings &&
          bookings.map((booking) => <li key={booking.id}>{booking.date}</li>)}
        <button onClick={handleDelete}>Delete Booking</button>
      </Link>
    </ul>
  )
}
export default ViewBookings
