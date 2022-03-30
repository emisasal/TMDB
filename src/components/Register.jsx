import React from "react"
import axios from "axios"
import { useSelector, useDispatch } from "react-redux"
import useInput from "../hooks/useInputs"
import { sendLoginRequest } from "../store/user"
import { Link, useNavigate } from "react-router-dom"

const Register = () => {
  const name = useInput("name")
  const email = useInput("email")
  const password = useInput("password")
  const user = useSelector(state => state.user)

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const handleRegisterSubmit = e => {
    e.preventDefault()
    axios
      .post("/api/user/register", {
        name: name.value,
        email: email.value,
        password: password.value,
      })
      .then(() =>
        dispatch(
          sendLoginRequest({ email: email.value, password: password.value })
        )
      )
      .then(() => navigate("/"))
      .catch(err => console.log(`Failed login: ${err.message}`))
  }

  return (
    <>
      <form className="section" onSubmit={handleRegisterSubmit}>
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input
              {...name}
              aria-label="User name"
              className="input"
              type="text"
              required
              placeholder="Your name here"
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input
              {...email}
              aria-label="Email address"
              className="input"
              type="email"
              required
              placeholder="your@mail.com"
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Password</label>
          <div className="control">
            <input
              {...password}
              aria-label="Password"
              className="input"
              type="password"
              placeholder="Password"
            />
          </div>
        </div>

        <div className="field is-grouped">
          <div className="control">
            <button type="submit" className="button is-link">
              Register
            </button>
          </div>
          <div className="control">
            <Link to="/">
              <button className="button is-link is-light">Cancel</button>
            </Link>
          </div>
        </div>
      </form>
    </>
  )
}

export default Register
