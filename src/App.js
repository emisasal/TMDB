import React, { useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"

import { persistUser } from "./store/user"

import Navbar from "./components/Navbar"
import Home from "./components/Home"
import SearchList from "./commons/SearchList"
import Movies from "./components/Movies"
import SelectById from "./commons/SelectById"
import TvShows from "./components/TvShows"
import Register from "./components/Register"
import LogIn from "./components/LogIn"
import User from "./components/User"

import "./App.css"

const App = () => {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(persistUser())
      .then(res => res.data)
      .catch((err) => {console.log(err)})
  }, [dispatch])

  return (
    <div className="has-navbar-fixed-top">
      <Navbar />
      <div className="container is-fluid">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="search" element={<SearchList />} />
          <Route path="movie" element={<Movies />} />
          <Route path="tv" element={<TvShows />} />
          <Route path=":type/:id" element={<SelectById />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<LogIn />} />
          <Route path="user" element={<User />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
