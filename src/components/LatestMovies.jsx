import axios from "axios"
import { useEffect, useState } from "react"

import { API_KEY, tmdbAPI } from "../utils/apiValues"
import Grid from "./Grid"

const LatestMovies = () => {
  const [dataList, setDataList] = useState([])

  useEffect(() => {
    axios
      .get(`${tmdbAPI}/movie/now_playing${API_KEY}`)
      .then(res => res.data.results)
      .then(list => setDataList(list))
  }, [])

  return (
    <>
      <div className="container">
        <br />
        <h2 className="title is-5 title-custom">Latest Movie Releases</h2>
        <Grid dataList={dataList} type={"movie"} />
        <hr></hr>
      </div>
    </>
  )
}

export default LatestMovies
