import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

import { FaRegStar } from "react-icons/fa"

import Favorite from "./Favourite"

const Card = ({ data, type }) => {
  const user = useSelector(state => state.user)

  if (!data.id) return <p>No data</p>

  return (
    <>
      <div className="card">
        <Link to={`/${type || data.media_type}/${data.id}`}>
          <div className="card-image level-item">
            <figure className="image" id="img-s">
              <img
                src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                alt={data.title || data.name}
              />
            </figure>
          </div>

          <div className="card-content level-item">
            <div className="content">
              <p className="title is-6">{data.title || data.name} </p>
              <div></div>
              <p className="subtitle" id="txt-m">
                Release date: {`(${data.release_date || data.first_air_date})`}
              </p>
              <p className="subtitle is-6"><FaRegStar style={{ color: "black" }}/> {data.vote_average * 10}%</p>
            </div>
          </div>
        </Link>

        {user.id ? (
          <footer className="card-footer level-item">
            <div className="card-footer-item" >
              <Favorite />
            </div>
            <div className="card-footer-item">
              <p className="content" id="txt-s">
                add / remove favourites
              </p>
            </div>
          </footer>
        ) : null}
      </div>
    </>
  )
}

export default Card
