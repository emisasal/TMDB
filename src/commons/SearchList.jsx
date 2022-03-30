import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import axios from "axios"

import { API_KEY, tmdbAPI } from "../utils/apiValues"
import Grid from "../components/Grid"

const SearchList = () => {
  const { state } = useLocation()
  const [searched, setSearched] = useState([])

  useEffect(() => {
    axios
      .get(`${tmdbAPI}/search/multi${API_KEY}&query=${state.query}`)
      .then(res => res.data)
      .then(match => setSearched(match))
  }, [state.query])

  if (!searched.page) return <p> </p>

  return (
    <>
      <br />
      <h2>Search Results:</h2>
      <br />
      <Grid dataList={searched.results} />
    </>
  )
}

export default SearchList
