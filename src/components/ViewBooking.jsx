import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const ViewBooking = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [booking, setBooking] = useState(null)
  const [rideName, setRideName] = useState('')

  useEffect(() => {
    const onMount = async () => {
      const response = await axios.get(`http://localhost:3001/bookings/${id}`)
      setBooking(response.data)

      const ride = await axios.get(
        `http://localhost:3001/rides/${response.data.rideId}`
      )
      setRideName(ride.data.name)
    }
    onMount()
  }, [id, navigate])

  const handleDelete = async () => {
    await axios.delete(`http://localhost:3001/bookings/${id}`)
    navigate('/bookings')
  }

  if (!booking) return <div>Loading...</div>

  return (
    <div>
      <h2>Booking Details</h2>
      <p>Ride: {rideName}</p>
      <p>Date: {booking.date.toString().substring(0, 10)}</p>
      <p>Time: {booking.time}</p>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={() => navigate('/bookings')}>Back</button>
    </div>
  )
}

export default ViewBooking
