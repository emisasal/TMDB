import { createReducer, createAsyncThunk } from "@reduxjs/toolkit"
import * as favMoviesService from "../services/favMoviesServices"

export const getFavMovies = createAsyncThunk(
  "GET_MOVIES", favMoviesService.getFavMovies)

export const postMovie = createAsyncThunk(
  "POST_MOVIE",
  favMoviesService.addMovieService
)

export const removeFavMovie = createAsyncThunk(
  "REMOVE_MOVIE",
  favMoviesService.removeFavMovieService
 )

const favMoviesReducer = createReducer([], {
  [getFavMovies.fulfilled]: (state, action) => action.payload,
  [postMovie.fulfilled]: (state, action) => [...state, action.payload],
  [removeFavMovie.fulfilled]: (state, action) => [...state.filter(e => e !== action.payload)]
})

export default favMoviesReducer
