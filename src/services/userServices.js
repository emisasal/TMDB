import axios from "axios"

export const userRegisterService = async ({ name, email, password, alertRegister, navigate }) => {
  try {
    const registerUser = await axios.post("/api/user/register", {
      name,
      email,
      password,
    })
    alertRegister()
    navigate("/")
    return registerUser.data
  } catch (error) {
    throw error
  }
}

export const userLoginService = async ({
  email,
  password,
  alertLogin,
  navigate,
  alertNoUser,
}) => {
  try {
    const loginUser = await axios.post("/api/user/login", {
      email,
      password,
    })
    alertLogin()
    navigate("/")
    return loginUser.data
  } catch (error) {
    alertNoUser()
    navigate("/register")
    throw error
  }
}

export const userLogoutService = async ({ alertLogout, navigate }) => {
  try {
    const logoutUser = await axios.post("/api/user/logout")
    alertLogout()
    navigate("/")
    return logoutUser.data
  } catch (error) {
    throw error
  }
}
