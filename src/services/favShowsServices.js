import axios from "axios"

export const getShowsService = async (usr, thunkAPI) => {
    const { user } = thunkAPI.getState()
    if (!user.id) throw new Error("You need to be logged in")
    try {
        const getShows = await axios.get(`/api/shows/all/${user.id}`)
        return getShows.data
    } catch(error) {
        throw error
    }
}

export const addShowService = async (show, thunkAPI) => {
    const { user } = thunkAPI.getState()
    const showApi = ""+show
    if (!user.id) throw new Error("You need to be logged in")
    try {
        const addShow = await axios.post(`/api/shows/add`, { showApi: showApi, userId: user.id })
        return addShow.data
    } catch(error) {
        throw error
    }
}

export const removeShowService = async (show, thunkAPI) => {
    const { user } = thunkAPI.getState()
    const showApi = ""+show
    try {
        const removeShow = await axios.post(`/api/shows/remove`, { showApi: showApi, userId: user.id })
        return removeShow.data
    } catch(error) {
        throw error
    }
}