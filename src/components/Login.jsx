import { use, useState } from "react"
import { useNavigate } from "react-router-dom"
import { SignInUser } from "../services/Auth"

const Login = ({ setUser }) => {
  let navigate = useNavigate()

  const initialState = { email: "", password: "" }

  const [formValues, setFormValues] = useState(initialState)

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await SignInUser(formValues)
    setFormValues(initialState)
    setUser(payload)
    navigate("/rides")
  }

  return (
    <div className="col signin">
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="email">Email</label>
          <input
            onChange={handleChange}
            id="email"
            type="email"
            placeholder="example@example.com"
            value={formValues.email}
            required
            autoComplete="email"
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            onChange={handleChange}
            type="password"
            id="password"
            value={formValues.password}
            required
          />
        </div>
        <button disabled={!formValues.email || !formValues.password}>
          Sign In
        </button>
      </form>
    </div>
  )
}

export default Login
