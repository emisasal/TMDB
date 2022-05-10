import React from "react"
import { useDispatch } from "react-redux"
import { useNavigate, Link } from "react-router-dom"
import { sendLoginRequest } from "../store/user"
import useInput from "../hooks/useInputs"
import { alertLogin, alertNoUser } from "../utils/alerts"

const LogIn = () => {
  const dispatch = useDispatch()
  const email = useInput("email")
  const password = useInput("password")
  const navigate = useNavigate()

  const handleLoginSubmit = async e => {
    e.preventDefault()
    await dispatch(
      sendLoginRequest({
        email: email.value,
        password: password.value,
        alertLogin,
        navigate,
        alertNoUser,
      })
    )
  }

  return (
    <>
      <div className="is-fullheight-login">
        <div className="box column is-half is-offset-one-quarter form-custom">
          <form className="section" onSubmit={handleLoginSubmit}>
            <h1 className="title title-customreg">Login</h1>
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
        </div>
      </div>
      <div className="column"></div>
    </>
  )
}

export default LogIn
