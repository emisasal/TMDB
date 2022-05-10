import axios from "axios"
import { useEffect, useState } from "react"
import Grid from "./Grid"

const NewestTvShows = () => {
  const [dataList, setDataList] = useState([])

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_tmdbAPI}/tv/popular${process.env.REACT_APP_API_KEY}`
      )
      .then(res => res.data.results)
      .then(tvList => setDataList(tvList))
  }, [])

  return (
    <>
      <div className="container">
        <br />
        <h2 className="title is-5 title-custom">Newest Tv Shows</h2>
        <Grid dataList={dataList} type={"tv"} />
        <hr></hr>
      </div>
    </>
  )
}

export default NewestTvShows
