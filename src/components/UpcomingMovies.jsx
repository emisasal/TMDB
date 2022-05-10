import axios from "axios"
import { useEffect, useState } from "react"
import Grid from "./Grid"

const UpcomingMovies = () => {
  const [dataList, setDataList] = useState([])

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_tmdbAPI}/movie/upcoming${process.env.REACT_APP_API_KEY}`
      )
      .then(res => res.data.results)
      .then(list => setDataList(list))
  }, [])

  return (
    <>
      <div className="container">
        <br />
        <h2 className="title is-5 title-custom">Upcoming Movies</h2>
        <Grid dataList={dataList} type={"movie"} />
        <hr></hr>
      </div>
    </>
  )
}

export default UpcomingMovies
