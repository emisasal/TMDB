import axios from "axios"
import { useEffect, useState } from "react"

import { API_KEY, tmdbAPI } from "../utils/apiValues"
import Grid from "./Grid"

const TvShowsToday = () => {
  const [dataList, setDataList] = useState([])

  useEffect(() => {
    axios
      .get(`${tmdbAPI}/tv/airing_today${API_KEY}`)
      .then(res => res.data.results)
      .then(tvList => setDataList(tvList))
  }, [])

  return (
    <>
    <div className="container">
      <br />
      <h2 className="title is-5 title-custom">Shows Airing Today</h2>
      <Grid dataList={dataList} type={"tv"} />
      <hr></hr>
      </div>
    </>
  )
}

export default TvShowsToday
