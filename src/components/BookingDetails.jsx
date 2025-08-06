import { Link } from 'react-router-dom'
import '../styles/Bookings.css'

const BookingDetails = ({ booking, rides }) => {
  return (
    <>
      <li>
        <div className="booking-card">
          {rides.map((ride) => (
            <div className="rides-box">
              <div className='ridePic'>
              <img
                src="https://lumiere-a.akamaihd.net/v1/images/c94eed56a5e84479a2939c9172434567c0147d4f.jpeg?region=0,0,600,600"
                alt="anyhting"
                className="img"
              />
              </div>
              <div className="name"><p>{ride._id === booking.rideId && ride.name.toLowerCase()}</p></div>
          <br />
          <div className="date">{booking.date.toString().substring(0, 10)}</div>
          <Link to={`/Bookings/${booking._id}`}>
            <div className="moredetails">
              <p> more details...</p>
            </div>
          </Link>
          </div>
          ))}
        </div>
      </li>
    </>
  )
}
export default BookingDetails
