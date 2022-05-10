import axios from "axios"
import { useEffect, useState } from "react"
import Grid from "./Grid"

const TvShowsToday = () => {
  const [dataList, setDataList] = useState([])

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_tmdbAPI}/tv/airing_today${process.env.REACT_APP_API_KEY}`
      )
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
