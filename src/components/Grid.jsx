import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getFavMovies } from "../store/favMovies"
import { getFavShows } from "../store/favShows"
import Card from "../commons/Card"

const Grid = ({ dataList, type }) => {
  const { favMovies, favShows, user } = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(getFavMovies())
      dispatch(getFavShows())
  }, [dispatch])

  return (
    <div className="columns is-multiline layout">
      {dataList.map((elem, i) => (
        <div className="column" key={i}>
          <Card data={elem} type={type} movies={favMovies} shows={favShows} user={user} />
        </div>
      ))}
    </div>
  )
}

export default Grid
