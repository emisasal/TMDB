import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"
import { Director, Creator, Credits } from "../components/Director"
import { timeConvert, yearOnly } from "../utils/functions"

const SelectById = () => {
  const { type, id } = useParams()
  const [data, setData] = useState({})
  const [credits, setCredits] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_tmdbAPI}/${type}/${id}${process.env.REACT_APP_API_KEY}`
      )
      .then(res => res.data)
      .then(selectId => setData(selectId))
    axios
      .get(
        `${process.env.REACT_APP_tmdbAPI}/${type}/${id}/credits${process.env.REACT_APP_API_KEY}`
      )
      .then(res => res.data)
      .then(cred => setCredits(cred))
  }, [type, id])

  if (!data.id || !credits.id) return <div> </div>

  return (
    <>
      <div className="column">
        <div className="container fix-height">
          <div className="columns is-desktop box single-custom">
            <div className="column is-4">
              <img
                id="img-l"
                src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                alt={data.title || data.name}
              ></img>
            </div>

            <div className="column is-8">
              <div>
                <h1 className="title">{data.title || data.name}</h1>
                <h1 className="subtitle">{`(${yearOnly(
                  data.release_date || data.first_air_date
                )})`}</h1>
                <h1>{data.tagline}</h1>
                <br />
              </div>
              <p>User Score: {data.vote_average * 10}%</p>
              <div>
                <br />
                <p className="is-size-7 has-text-weight-bold">Genres:</p>
                {data.genres.map((gen, i) => (
                  <p className="is-size-7" key={i}>
                    {gen.name}
                  </p>
                ))}
                <br />
                <p className="is-size-7 ">
                  Duration: {timeConvert(data.runtime || data.episode_run_time)}
                </p>
              </div>
              <br />
              {data.overview ? (
                <p className="is-size-7 ">
                  Overview: <br />
                  {data.overview}
                </p>
              ) : null}
              <br />
              <p className="is-size-7 ">
                {type === "movie" ? Director(credits) : Creator(data)}
              </p>
              <br />
              <p className="is-size-7">
                {credits.cast[0] ? Credits(credits.cast) : null}
              </p>
              <br />

              <button
                className="button is-dark is-responsive"
                onClick={() => navigate(-1)}
              >
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="column"></div>
    </>
  )
}

export default SelectById
