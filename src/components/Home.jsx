import { useNavigate } from "react-router-dom"
import { FaSearch } from "react-icons/fa"
import useInput from "../hooks/useInputs"

import LatestMovies from "./LatestMovies"
import NewestTvShows from "./NewestTvShows"

const Home = () => {
  const navigate = useNavigate()
  const search = useInput()

  const handleSubmit = e => {
    e.preventDefault()
    navigate("/search", { state: { query: search.value } })
  }

  return (
    <>
      <noscript>Home</noscript>
      <br />
      <div className="container is-max-desktop has-icons-right">
        <form onSubmit={handleSubmit}>
          <p className="control has-icons-right">
            <input
              {...search}
              className="input is-medium"
              type="text"
              placeholder="Search for a movie or tv show..."
            ></input>
            <span className="icon is-small is-right">
              <FaSearch />
            </span>
          </p>
        </form>
      </div>
      <br />
      <div className="carousel-custom">
        <LatestMovies />
      </div>
      <div className="carousel-custom">
        <NewestTvShows />
      </div>
    </>
  )
}

export default Home
