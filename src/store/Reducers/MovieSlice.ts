import {IMovie} from "../../types/IMovie";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";


interface IMovieSlice {
    movies: IMovie[];
    favorites: IMovie[];
    loading: boolean;
    error: string;
    language: string;
}

const initialState: IMovieSlice = {
    movies: [],
    favorites: [],
    loading: false,
    error: "",
    language: "en-US"
}

export const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        movieFetching(state) {
            state.loading = true
        },
        movieFetchingSuccess(state, action: PayloadAction<IMovie[]>) {
            state.loading = false
            state.movies = action.payload
            state.error = ""
        },
        movieFetchingError(state, action: PayloadAction<string>) {
            state.loading = false
            state.error = action.payload
        },
        languageRec(state, action: PayloadAction<string>) {
            state.loading = false
            state.language = action.payload
        },
        addToFavorites(state, action) {
            const foundProduct = state.favorites.find(el => el.id === action.payload.id)
            if (foundProduct) {
                state.favorites = state.favorites.filter(el => el.id !== action.payload.id)
            } else {
                state.favorites = [...state.favorites, {...action.payload}]
            }
        },
    }
})


export const {movieFetching, movieFetchingError, movieFetchingSuccess, languageRec, addToFavorites} = movieSlice.actions
export default movieSlice.reducer