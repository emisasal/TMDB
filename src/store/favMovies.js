import { createReducer, createAsyncThunk } from "@reduxjs/toolkit"
import * as favMoviesService from "../services/favMoviesServices"

export const getFavMovies = createAsyncThunk(
  "GET_FAV_MOVIES", favMoviesService.getFavMovies)

export const postMovie = createAsyncThunk(
  "POST_MOVIE",
  favMoviesService.addMovieService
)

export const removeFavMovie = createAsyncThunk(
  "REMOVE_FAV_MOVIE",
  favMoviesService.removeFavMovieService
)

const favMoviesReducer = createReducer([], {
  [postMovie.fulfilled]: (state, action) => action.payload,
  [getFavMovies.fulfilled]: (state, action) => action.payload,
})

export default favMoviesReducer
