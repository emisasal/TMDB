import { configureStore } from "@reduxjs/toolkit"
import logger from "redux-logger"

import userReducer from "./user"
import favMoviesReducer from "./favMovies"

const store = configureStore({
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
  reducer: {
    user: userReducer,
    favMovies: favMoviesReducer,
  },
})

export default store
