import axios from "axios"
import { useEffect, useState } from "react"
import Grid from "./Grid"

const TvShowsTopRated = () => {
  const [dataList, setDataList] = useState([])

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_tmdbAPI}/tv/top_rated${process.env.REACT_APP_API_KEY}`
      )
      .then(res => res.data.results)
      .then(tvList => setDataList(tvList))
  }, [])

  return (
    <>
      <div className="container">
        <br />
        <h2 className="title is-5 title-custom">Top Rated Shows</h2>
        <Grid dataList={dataList} type={"tv"} />
        <hr></hr>
      </div>
    </>
  )
}

export default TvShowsTopRated
