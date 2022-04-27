import axios from "axios"

export const userRegisterService = async ({ name, email, password }) => {
  try {
    const registerUser = await axios.post("/api/user/register", {
      name,
      email,
      password,
    })
    return registerUser.data
  } catch (error) {
    throw error
  }
}

export const userLoginService = async ({ email, password }) => {
    try {
      const loginUser = await axios.post("/api/user/login", {
        email,
        password,
      })
      return loginUser.data
    } catch (error) {
      throw error
    }
  }

  export const userLogoutService = async () => {
      try {
          const logoutUser = await axios.post("/api/user/logout")
          return logoutUser.data
      } catch(error) {
          throw error
      }
  }