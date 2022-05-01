import axios from "axios"
import { useEffect, useState } from "react"

import { API_KEY, tmdbAPI } from "../utils/apiValues"
import Grid from "./Grid"

const TvShows = () => {
  const [dataList, setDataList] = useState([])

  useEffect(() => {
    axios
      .get(`${tmdbAPI}/tv/popular${API_KEY}`)
      .then(res => res.data.results)
      .then(tvList => setDataList(tvList))
  }, [])

  return (
    <>
      <br />
      <h2 className="title is-5">Newest Tv Shows</h2>
      <Grid dataList={dataList} type={"tv"} />
      <hr></hr>
    </>
  )
}

export default TvShows
