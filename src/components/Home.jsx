import { useNavigate } from "react-router-dom"
import useInput from "../hooks/useInputs"

import Movies from "./Movies"
import TvShows from "./TvShows"

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
      <div>
        <form onSubmit={handleSubmit}>
          <input
            {...search}
            className="input is-medium"
            type="text"
            placeholder="Search for a movie or tv show..."
          ></input>
        </form>
      </div>
      <br />
      <Movies />
      <TvShows />
    </>
  )
}

export default Home
