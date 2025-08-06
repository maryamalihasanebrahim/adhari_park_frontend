import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import Form from "./Booking"
import "../styles/Rides.css"

const RideDetails = () => {
  const [chosenRide, setChosenRide] = useState("")
  let { id } = useParams()

  useEffect(() => {
    const onMount = async () => {
      const response = await axios.get(`http://localhost:3001/rides/${id}`)

      response ? setChosenRide(response.data) : console.log("loading...")
    }
    onMount()
  }, [])

  return (
    <>
      <div className="ride-details">
        <div className="ride-info">
          <h3>{chosenRide.name}</h3>
          <h4>{chosenRide.description}</h4>
          <p>price: BHD {chosenRide.price}</p>
          <p>thrill level: {chosenRide.thrill_level}</p>
          <p>{chosenRide.location}</p>
          <p>{chosenRide.max_persons} people maximum</p>
          <p>minimum height {chosenRide.min_height} cm</p>
        </div>
        <div id="bookingButton">
          <Link to={`/bookings/new/${id}`}>
            <button className="book-btn">book</button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default RideDetails
