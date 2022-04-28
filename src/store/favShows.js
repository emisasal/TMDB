import { createReducer, createAsyncThunk } from "@reduxjs/toolkit"
import * as favShowsServices from "../services/favShowsServices"

export const getFavShows = createAsyncThunk("GET_SHOWS", favShowsServices.getShowsService)

export const postShow = createAsyncThunk("POST_SHOW", favShowsServices.addShowService)

export const removeShow = createAsyncThunk("REMOVE_SHOW", favShowsServices.removeShowService)

const favShowsReducer = createReducer([], {
    [getFavShows.fulfilled]: (state, action) => action.payload,
    [postShow.fulfilled]: (state, action) => [...state, action.payload],
    [removeShow.fulfilled]: (state, action) => [...state.filter(e => e !== action.payload)]
  })
  
  export default favShowsReducer