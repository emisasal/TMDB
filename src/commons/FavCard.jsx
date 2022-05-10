import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import axios from "axios"
import { FaStar, FaTimesCircle } from "react-icons/fa"
import { removeFavMovie, getFavMovies } from "../store/favMovies"
import { removeShow, getFavShows } from "../store/favShows"

const Card = ({ data, type, user, dataList }) => {
  const [apiData, setApiData] = useState({})
  const dispatch = useDispatch()
  let isFav = false

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_tmdbAPI}/${type}/${
          type === "movie" ? data.movieApi : data.showApi
        }${process.env.REACT_APP_API_KEY}`
      )
      .then(res => setApiData(res.data))
  }, [data, type])

  const handleRemoveFav = data => {
    if (type === "movie")
      return dispatch(removeFavMovie(data)).then(() => dispatch(getFavMovies()))
    if (type === "tv")
      return dispatch(removeShow(data)).then(() => dispatch(getFavShows()))
  }

  if (type === "movie" && dataList !== []) {
    dataList.forEach(e => {
      if (e.movieApi === "" + data.movieApi) return (isFav = true)
    })
  }
  if (type === "tv" && dataList !== []) {
    dataList.forEach(e => {
      if (e.showApi === "" + data.showApi) return (isFav = true)
    })
  }

  if (!data.id) return <div> </div>

  return (
    <>
      <div className="card card-custom">
        <Link to={`/${type}/${apiData.id}`}>
          <div className="card-image level-item">
            <figure className="image" id="img-s">
              <img
                src={`https://image.tmdb.org/t/p/w500${apiData.poster_path}`}
                alt={apiData.title || apiData.name}
              />
            </figure>
          </div>
        </Link>

        <div className="card-content level-item card-custombody">
          <div className="content">
            <p className="title is-6">{apiData.title || apiData.name} </p>
            <div></div>
            <p className="subtitle" id="txt-m">
              Rel. date: {`(${apiData.release_date || apiData.first_air_date})`}
            </p>
            <div className="card-bottom">
              <p className="subtitle is-6 cardsubt-custom">
                <FaStar style={{ color: "hsl(45, 83%, 56%)" }} />{" "}
                {apiData.vote_average * 10}%
              </p>
              {user.id ? (
                <div>
                  <p
                    className="trash"
                    onClick={() => handleRemoveFav(apiData.id)}
                  >
                    <FaTimesCircle data-hover="Remove from Favourites" />
                  </p>
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
