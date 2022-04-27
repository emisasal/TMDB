import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"

import { getFavMovies, removeFavMovie } from "../store/favMovies"
import { FaFilm, FaRegTrashAlt } from "react-icons/fa"

const User = () => {
  const user = useSelector(state => state.user)
  const favMovies = useSelector(state => state.favMovies)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getFavMovies())
  }, [dispatch])

  const handleDelete = async movieId => {
    await dispatch(removeFavMovie(movieId))
    dispatch(getFavMovies())
  }

  if (!favMovies[0]) return <p>No data</p>

  console.log("FAV_MOVIES", favMovies)

  return (
    <>
      <div className="container is-max-desktop">
        <br />
        <h1 className="title is-5">Welcome {user.name}!</h1>
      </div>
      <br />
      <div>
        <p className="subtitle is-6">
          You have {favMovies.length} movies in your favourites list.
        </p>
      </div>
      <br />

      <div className="table-container">
      <table className="table is-fullwidth is-striped is-hoverable">
        <thead>
          <tr>
            <th>Movie</th>
            <th>
              <abbr title="Details">Details</abbr>
            </th>
            <th>
              <abbr title="Remove">Remove</abbr>
            </th>
          </tr>
        </thead>

        <tbody>
          {favMovies.map((movie, i) => (
            <tr key={i}>
              <td>{movie.name}</td>
              <td>
                {
                  <Link to={`/movie/${movie.movie}`}>
                    <FaFilm style={{ cursor: "pointer" }} />
                  </Link>
                }
              </td>
              <td>
                {
                  <FaRegTrashAlt
                    style={{ cursor: "pointer" }}
                    onClick={() => handleDelete(movie.id)}
                  />
                }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </>
  )
}

export default User
