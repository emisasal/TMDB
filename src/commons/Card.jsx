import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { FaStar, FaHeart, FaTimesCircle } from "react-icons/fa"
import { postMovie, removeFavMovie, getFavMovies } from "../store/favMovies"
import { postShow, removeShow, getFavShows } from "../store/favShows"

const Card = ({ data, type, movies, shows, user }) => {
  const dispatch = useDispatch()
  let isFav = false

  const handleAddFav = data => {
    if (type === "movie")
      return dispatch(postMovie(data)).then(() => dispatch(getFavMovies()))
    if (type === "tv")
      return dispatch(postShow(data)).then(() => dispatch(getFavShows()))
  }

  const handleRemoveFav = data => {
    if (type === "movie")
      return dispatch(removeFavMovie(data)).then(() => dispatch(getFavMovies()))
    if (type === "tv")
      return dispatch(removeShow(data)).then(() => dispatch(getFavShows()))
  }

  if (type === "movie" && movies !== []) {
    movies.forEach(e => {
      if (e.movieApi === "" + data.id) return (isFav = true)
    })
  }
  if (type === "tv" && shows !== []) {
    shows.forEach(e => {
      if (e.showApi === "" + data.id) return (isFav = true)
    })
  }

  if (!data.id) return <div></div>

  return (
    <>
      <div className="card card-custom">
        <Link to={`/${type || data.media_type}/${data.id}`}>
          <div className="card-image level-item">
            <figure className="image" id="img-s">
              <img
                src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                alt={data.title || data.name}
              />
            </figure>
          </div>
        </Link>

        <div className="card-content level-item card-custombody">
          <div className="content">
            <p className="title is-6">{data.title || data.name} </p>
            <div></div>
            <p className="subtitle" id="txt-m">
              Rel. date: {`(${data.release_date || data.first_air_date})`}
            </p>
            <div className="card-bottom">
              <p className="subtitle is-6 cardsubt-custom">
                <FaStar style={{ color: "hsl(45, 83%, 56%)" }} />{" "}
                {data.vote_average * 10}%
              </p>
              {user.id ? (
                <div>
                  {!isFav ? (
                    <p
                      className="heart tooltip"
                      onClick={() => handleAddFav(data.id)}
                    >
                      <FaHeart data-hover="Add to Favourites" />
                    </p>
                  ) : (
                    <p
                      className="trash"
                      onClick={() => handleRemoveFav(data.id)}
                    >
                      <FaTimesCircle data-hover="Remove from Favourites" />
                    </p>
                  )}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
