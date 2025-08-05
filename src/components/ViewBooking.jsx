import axios from "axios"
import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"

const ViewBooking = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [booking, setBooking] = useState(null)

  useEffect(() => {
    const onMount = async () => {
      const response = await axios.get(`http://localhost:3001/bookings/${id}`)
      setBooking(response.data)
    }
    onMount()
  }, [id, navigate])

  const handleDelete = async () => {
    await axios.delete(`http://localhost:3001/bookings/${id}`)
    navigate("/bookings")
  }

  if (!booking) return <div>Loading...</div>

  return (
    <div>
      <h2>Booking Details</h2>
      <p>Date: {booking.date}</p>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={() => navigate("/bookings")}>Back</button>
    </div>
  )
}

export default ViewBooking
