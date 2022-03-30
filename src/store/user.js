import axios from "axios"
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit"

// Login user
export const sendLoginRequest = createAsyncThunk("LOGIN", val => {
  return axios
    .post("/api/user/login", { email: val.email, password: val.password })
    .then(r => r.data)
})

// Logout user
export const sendLogoutRequest = createAsyncThunk("LOGOUT", () => {
  return axios.post("/api/user/logout").then(r => r.data)
})

// Persist user
export const persistUser = createAsyncThunk("PERSIST", () => {
  return axios.get("/api/user/me").then(r => r.data)
})

const userReducer = createReducer(
  {},
  {
    [sendLoginRequest.fulfilled]: (state, action) => action.payload,
    [sendLogoutRequest.fulfilled]: (state, action) => action.payload,
    [persistUser.fulfilled]: (state, action) => action.payload,
  }
)

export default userReducer
