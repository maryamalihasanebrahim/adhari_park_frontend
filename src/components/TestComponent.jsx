import { Link } from "react-router-dom"

const TestComponent = ({ booking, rides }) => {
  return (
    <>
      <li >
        {rides.map((ride) => {
          if (ride._id == booking.rideId){
          return ride.name
          }
        })}
        <br />
        {booking.date.toString().substring(0, 10)}
        <Link to={`/Bookings/${booking._id}`}>
          <p> more details...</p>
        </Link>
      </li>
    </>
  )
}
export default TestComponent
