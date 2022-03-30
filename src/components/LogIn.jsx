import React from "react"
import { useDispatch } from "react-redux"
import { useNavigate, Link } from "react-router-dom"

import { sendLoginRequest } from "../store/user"
import useInput from "../hooks/useInputs"

const LogIn = () => {
  const dispatch = useDispatch()
  const email = useInput("email")
  const password = useInput("password")

  const navigate = useNavigate()

  const handleLoginSubmit = e => {
    e.preventDefault()
    dispatch(sendLoginRequest({ email: email.value, password: password.value }))
      .then(res => navigate("/"))
      .catch(err => console.log(`Failed login: ${err.message}`))
  }

  return (
    <>
      <form className="section" onSubmit={handleLoginSubmit}>
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
              Login
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

export default LogIn
