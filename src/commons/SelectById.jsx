import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

import { API_KEY, tmdbAPI } from "../utils/apiValues"
import { Director, Creator, Credits } from "../components/Director"

import { timeConvert, yearOnly } from "../utils/functions"

const SelectById = () => {
  const { type, id } = useParams()
  const [data, setData] = useState({})
  const [credits, setCredits] = useState([])

  useEffect(() => {
    axios
      .get(`${tmdbAPI}/${type}/${id}${API_KEY}`)
      .then(res => res.data)
      .then(selectId => setData(selectId))
    axios
      .get(`${tmdbAPI}/${type}/${id}/credits${API_KEY}`)
      .then(res => res.data)
      .then(cred => setCredits(cred))
  }, [type, id])

  if (!data.id || !credits.id) return <p>No data</p>

  return (
    <div className="column is-centered">
      <img
        id="img-l"
        src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
        alt={data.title || data.name}
      ></img>
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
        <p>Genres:</p>
        {data.genres.map((gen, i) => (
          <p key={i}>{gen.name}</p>
        ))}
        <p>Duration: {timeConvert(data.runtime || data.episode_run_time)}</p>
      </div>
      <br />
      {data.overview ? (
        <p>
          Overview: <br />
          {data.overview}
        </p>
      ) : null}
      <br />

      {type === "movie" ? Director(credits) : Creator(data)}

      <br />
      {credits.cast[0] ? Credits(credits.cast) : null}
      <br />
    </div>
  )
}

export default SelectById
