import { useState, useEffect } from "react"
import axios from "axios"
import { useParams, useNavigate } from "react-router-dom"
import "../styles/bookingForm.css"

const Form = ({ user }) => {
  const navigate = useNavigate()
  let { id } = useParams()
  const intialState = {
    date: "",
    time: "",
    persons: 0,
  }

  console.log("FORM", user)

  const [ride, setRide] = useState(null)
  const [formState, setFormState] = useState(intialState)

  const handleChange = async (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log({
      ...formState,
      rideId: id,
      userId: user.id,
    })
    const response = await axios.post("http://localhost:3001/bookings/new", {
      ...formState,
      rideId: id,
      userId: user.id,
    })
    navigate("/bookings")

    console.log(response)
  }

  useEffect(() => {
    const onMount = async () => {
      let response = await axios.get(`http://localhost:3001/rides/${id}`)
      response ? setRide(response.data.name) : console.log("loading...")
    }
    onMount()
  }, [])

  return (
    <>
      <div className="form">
        <h3>Book A Ride!</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="rideChosen">
            Ride: <p>{ride}</p>
          </label>
          <label htmlFor="time">Select time</label>
          <input type="time" name="time" onChange={handleChange} />

          <label htmlFor="date">Date</label>
          <input type="date" name="date" onChange={handleChange} />
          <label htmlFor="persons">Persons</label>
          <input type="number" name="persons" onChange={handleChange} />

          <button type="submit">Book</button>
        </form>
      </div>
    </>
  )
}

export default Form
