import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Form = () => {
  let { id } = useParams()
  const intialState = {
    date: '',
    time: '',
    persons: ''
  }

  const [ride, setRide] = useState(null)
  const [formState, setFormState] = useState(intialState)

  const handleChange = async (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const response = await axios.post(
      'http://localhost:3000/bookings/new',
      formState
    )
    console.log(response)
  }

  useEffect(() => {
    const onMount = async () => {
      let response = await axios.get(`http://localhost:3000/rides/${id}`)
      response ? setRide(response.data.name) : console.log('loading...')
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
        <input type="number" name="number" min={1} onChange={handleChange} />
        <br />
        <br />
        <button type="submit">book</button>
      </form>
    </>
  )
}

export default Form
