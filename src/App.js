import React from "react"
import { Route, Routes } from "react-router-dom"

import Navbar from "./components/Navbar"
import Home from "./components/Home"
import SearchList from "./commons/SearchList"
import Movies from "./components/Movies"
import SelectById from "./commons/SelectById"
import TvShows from "./components/TvShows"
import Register from "./components/Register"
import LogIn from "./components/LogIn"
import User from "./components/User"
import NotFound from "./commons/NotFoud"

import "./App.css"

const App = () => {

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
          <Route path="*" element={<NotFound replace to="/" />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
