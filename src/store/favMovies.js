import axios from "axios"
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit"

export const postFavMovie = createAsyncThunk(
  "POST_FAV_MOVIE",
  ({movieId, movieName}, thunkAPI) => {
    const { user } = thunkAPI.getState()
    if (!user.id) throw new Error("You need to be logged in")
    return axios
      .post(`/api/favourites/movie?userId=${user.id}&movieId=${movieId}&movieName=${movieName}`)
      .then(r => r.data)
  }
)

export const getFavMovies = createAsyncThunk("GET_FAV_MOVIES", (userId, thunkAPI) => {
  const { user } = thunkAPI.getState()
  if (!user.id) throw new Error("You need to be logged in")
  return axios.get(`/api/favourites/movie/allMovies?userId=${user.id}`)
  .then(r => r.data)
})

export const removeFavMovie = createAsyncThunk("REMOVE_FAV_MOVIE", (movieId, thunkAPI) => {
    const { user } = thunkAPI.getState()
    if (!user.id) throw new Error("You need to be logged in")
    return axios.delete(`/api/favourites/movie?userId=${user.id}&movieId=${movieId}`)
    .then(r => r.data)
  })

const favMoviesReducer = createReducer([], {
  [postFavMovie.fulfilled]: (state, action) => action.payload,
  [getFavMovies.fulfilled]: (state, action) => action.payload,
  // Hacer que actualice estado removeFavMovie!
  [removeFavMovie.fulfilled]: (state, action) => {
    state.favMovies = state.favMovies.filter(
      (fav) => fav.id !== action.payload.id
    );
  },
})

export default favMoviesReducer
