import LatestMovies from "./LatestMovies"
import NewestTvShows from "./NewestTvShows"
import SearchBar from "../commons/SearchBar"

const Home = () => {
  return (
    <>
      <noscript>Home</noscript>
      <SearchBar />
      <div>
        <LatestMovies />
      </div>
      <div>
        <NewestTvShows />
      </div>
    </>
  )
}

export default Home
