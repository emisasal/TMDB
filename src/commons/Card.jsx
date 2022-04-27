import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { FaRegStar, FaHeart } from "react-icons/fa"

import { postMovie } from "../store/favMovies"

const Card = ({ data, type }) => {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  const handleFav = data => {
    if (type === "movie") return dispatch(postMovie(data))
  }

  if (!data.id) return <p>No data</p>

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
                  <FaRegStar style={{ color: "gray" }} />{" "}
                  {data.vote_average * 10}%
                </p>
                {user.id ? (
                  <div>
                    <p onClick={() => handleFav(data.id)}>
                      <FaHeart
                        className="heart"
                        data-hover="Add to Favourites"
                      />
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
