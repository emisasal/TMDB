import React from "react"
import { useDispatch } from "react-redux"
import useInput from "../hooks/useInputs"
import { sendRegisterRequest, sendLoginRequest } from "../store/user"
import { Link, useNavigate } from "react-router-dom"
import { alertRegister } from "../utils/alerts"

const Register = () => {
  const name = useInput("name")
  const email = useInput("email")
  const password = useInput("password")

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleRegisterSubmit = e => {
    e.preventDefault()
    dispatch(
      sendRegisterRequest({
        name: name.value,
        email: email.value,
        password: password.value,
      })
    ).then(() =>
      dispatch(
        sendLoginRequest({ email: email.value, password: password.value })
      )
    )
    alertRegister()
    navigate("/")
  }

  return (
    <>
      <div className="is-fullheight-reg">
        <div className="box column is-half is-offset-one-quarter form-custom">
          <form className="section " onSubmit={handleRegisterSubmit}>
            <h1 className="title title-customreg">Create Account</h1>
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
        </div>
        <div className="column"></div>
      </div>
    </>
  )
}

export default Register
