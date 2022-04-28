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
      <div className="container is-max-desktop">
        <br />
        <h1 className="title is-5">Welcome {user.name}!</h1>
        <div></div>
        <p className="subtitle is-6">
          You have {favMovies.length}{" "}
          {favMovies.length === 1 ? "movie" : "movies"} and {favShows.length}{" "}
          {favShows.length === 1 ? "tv show" : "tv shows"} in your favourites
          list.
        </p>
        <hr/>
        <FavGrid dataList={favMovies} type={"movie"} user={user} />
        <br />
        <hr/>
        <FavGrid dataList={favShows} type={"tv"} user={user} />
      </div>
      <br />
    </>
  )
}

export default User
