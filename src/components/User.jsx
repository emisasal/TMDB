import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getFavMovies } from "../store/favMovies"
import { getFavShows } from "../store/favShows"
import FavGrid from "./FavGrid"

const User = () => {
  const { user, favMovies, favShows } = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getFavMovies())
    dispatch(getFavShows())
  }, [dispatch])

  if (!favMovies[0] || !favShows[0]) return <div></div>

  return (
    <>
      <div className="container">
        <br />
        <h1 className="title is-5">Welcome {user.name}!</h1>
        <div></div>
        <p className="subtitle is-6">
          You have {favMovies.length}{" "}
          {favMovies.length === 1 ? "movie" : "movies"} and {favShows.length}{" "}
          {favShows.length === 1 ? "tv show" : "tv shows"} in your favourites
          list.
        </p>
        <hr />
        <h2 className="title is-5 title-custom">Movies</h2>
        <br />
        <FavGrid dataList={favMovies} type={"movie"} user={user} />
        <br />
        <hr />
        <h2 className="title is-5 title-custom">Tv Shows</h2>
        <br />
        <FavGrid dataList={favShows} type={"tv"} user={user} />
      <br />
      </div>
    </>
  )
}

export default User
