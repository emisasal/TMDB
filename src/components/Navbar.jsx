import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"

import { FaFilm } from "react-icons/fa"

import { sendLogoutRequest } from "../store/user"
import { alertLogout } from "../utils/alerts"

const Navbar = () => {
  const user = useSelector(state => state.user)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  // Funionalidad navbar burger
  document.addEventListener("DOMContentLoaded", () => {
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll(".navbar-burger"),
      0
    )
    if ($navbarBurgers.length > 0) {
      $navbarBurgers.forEach(el => {
        el.addEventListener("click", () => {
          const target = el.dataset.target
          const $target = document.getElementById(target)
          el.classList.toggle("is-active")
          $target.classList.toggle("is-active")
        })
      })
    }
  })

  const logoutClick = () => {
    dispatch(sendLogoutRequest())
    .then(res => {
      alertLogout()
      navigate("/")
    })
  }

  return (
    <section className="section">
      <nav className="navbar mb-4 is-spaced is-fixed-top has-background-dark">
        <div className="navbar-brand">
          <Link to="/">
          <h3 className="navbar-item has-text-primary-light" id="title">
            <FaFilm  />
            TMDB
          </h3>
          </Link>

          <button
            className="navbar-burger has-text-primary-light"
            aria-label="menu"
            aria-expanded="false"
            data-target="navMenu"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>

        {/* "navbar-menu" Oculta los items en movile - los muestra con "is-active"*/}
        <div className="navbar-menu has-background-dark" id="navMenu">
          <div className="navbar-start">
            <Link to="movie">
              <button className="navbar-item button is-ghost has-text-link-light">Movies</button>
            </Link>
            <Link to="tv">
              <button className="navbar-item button is-ghost has-text-link-light">TV Series</button>
            </Link>
            {/* <Link to="/">
              <button className="navbar-item button is-ghost has-text-link-light">Search</button>
            </Link> */}
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">

            {user.id ? (
              <Link to="user">
              <button className="button is-small is-responsive is-rounded is-black">{user.name}</button>
              </Link>
            ) : (
              <Link to="register">
                <button className="button is-small is-responsive is-rounded is-light">
                  <strong>Register</strong>
                </button>
              </Link>
            )}

            {user.id ? (
              <span>              
                <button className="button is-small is-responsive is-rounded is-danger" onClick={logoutClick}>
                  Logout
                </button>
              </span>
            ) : (
              <Link to="login">
                <button className="button is-small is-responsive is-rounded is-success">
                  Login
                </button>
              </Link>
            )}

          </div>
        </div>
      </nav>
    </section>
  )
}

export default Navbar
