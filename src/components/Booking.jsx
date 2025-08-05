import { useState, useEffect } from "react"
import axios from "axios"
import { useParams, useNavigate } from "react-router-dom"

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
      <h3>booking</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="rideChosen">
          ride: <p>{ride}</p>
        </label>
        <label htmlFor="time">select time</label>
        <br />
        <input type="time" name="time" onChange={handleChange} />
        <br />
        <br />
        <label htmlFor="date">date</label>
        <br />
        <input type="date" name="date" onChange={handleChange} />
        <br />
        <br />
        <label htmlFor="persons">persons</label>
        <br />
        <input type="number" name="persons" onChange={handleChange} />
        <br />
        <br />
        <button type="submit">book</button>
      </form>
    </>
  )
}

export default Form
