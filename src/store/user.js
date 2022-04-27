import { createReducer, createAsyncThunk } from "@reduxjs/toolkit"
import * as usersService from "../services/userServices";

export const sendRegisterRequest = createAsyncThunk("REGISTER", usersService.userRegisterService)

export const sendLoginRequest = createAsyncThunk("LOGIN", usersService.userLoginService)

export const sendLogoutRequest = createAsyncThunk("LOGOUT", usersService.userLogoutService)

const userReducer = createReducer(
  {},
  {
    [sendRegisterRequest.fulfilled]: (state, action) => action.payload,
    [sendLoginRequest.fulfilled]: (state, action) => action.payload,
    [sendLogoutRequest.fulfilled]: (state, action) => action.payload,
  }
)

export default userReducer
