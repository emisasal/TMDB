import axios from "axios"

export const getFavMovies = async (usr, thunkAPI) => {
    const { user } = thunkAPI.getState()
    if (!user.id) throw new Error("You need to be logged in")
    try {
        const getMovies = await axios.get(`/api/movies/all/${user.id}`)
        return getMovies.data
    } catch(error) {
        throw error
    }
}

export const addMovieService = async (movie, thunkAPI) => {
    const { user } = thunkAPI.getState()
    const movieApi = ""+movie
    if (!user.id) throw new Error("You need to be logged in")
    try {
        const addMovie = await axios.post(`/api/movies/add`, { movieApi: movieApi, userId: user.id })
        return addMovie.data
    } catch(error) {
        throw error
    }
}

export const removeFavMovieService = async (movie, thunkAPI) => {
    const { user } = thunkAPI.getState()
    const movieApi = ""+movie.data
    if (!user.id) throw new Error("You need to be logged in")
    try {
        const removeMovie = await axios.delete(`/api/movies/remove`, { movieApi: movieApi, userId: user.id })
        return removeMovie.data
    } catch(error) {
        throw error
    }
}