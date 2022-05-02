import axios from "axios"
import { useEffect, useState } from "react"

import { API_KEY, tmdbAPI } from "../utils/apiValues"
import Grid from "./Grid"

const PopularMovies = () => {
  const [dataList, setDataList] = useState([])

  useEffect(() => {
    axios
      .get(`${tmdbAPI}/movie/popular${API_KEY}`)
      .then(res => res.data.results)
      .then(list => setDataList(list))
  }, [])

  return (
    <>
      <div className="container">
        <br />
        <h2 className="title is-5 title-custom">Popular Movies</h2>
        <Grid dataList={dataList} type={"movie"} />
        <hr></hr>
      </div>
    </>
  )
}

export default PopularMovies
