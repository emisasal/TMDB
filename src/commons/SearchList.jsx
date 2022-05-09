import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import axios from "axios"

import { API_KEY, tmdbAPI } from "../utils/apiValues"
import SearchGrid from "../components/SearchGrid"

const SearchList = () => {
  const { state } = useLocation()
  const [searched, setSearched] = useState([])

  useEffect(() => {
    axios
      .get(`${tmdbAPI}/search/multi${API_KEY}&query=${state.query}`)
      .then(res => res.data)
      .then(match => setSearched(match))
  }, [state.query])

  if (!searched.page) return <div> </div>

  return (
    <>
      <br />
      <h2 className="title is-5">Search Results:</h2>
      <br />
      <SearchGrid dataList={searched.results} />
    </>
  )
}

export default SearchList
