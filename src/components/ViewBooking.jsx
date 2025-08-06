import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import '../styles/ViewBooking.css'
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

  if (!booking) return <div>loading...</div>

  return (
    <div className="viewbooking">
      {rideName === 'Bubble Blaster' && (
        <img src="\src\images\ride_1.png" alt="Bubble Blaster" className="imageOfRide" />
      )}
      {rideName === 'BitCoaster' && (
        <img src="src/images/ride_2.png" alt="Bit Coaster" className="imageOfRide" />
      )}
      {rideName === 'NeoLoop Eye' && (
        <img src="src/images/ride_3.png" alt="NeoLoop Eye" className="imageOfRide" />
      )}
      <div className="bookinginfo">
        <h2>booking details</h2>
        <p>ride: {rideName}</p>
        <p>date: {booking.date.toString().substring(0, 10)}</p>
        <p>time: {booking.time}</p>
        <p>booking for {booking.persons} person(s)</p>
        <div className='cancelbtn'>
        <button onClick={handleDelete}>cancel</button>
        </div>
        <div className='backbtn'>
        <button onClick={() => navigate('/bookings')}>back</button>
        </div>
      </div>
    </div>
  )
}

export default ViewBooking
