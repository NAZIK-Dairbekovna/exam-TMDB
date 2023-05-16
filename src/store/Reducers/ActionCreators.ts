import axios from "axios";
import {addToFavorites, languageRec, movieFetching, movieFetchingError, movieFetchingSuccess} from "./MovieSlice";
import {AppDispatch} from "../store";
import {APIKEY} from "../lib/ApiKey";


export const LanguageContext = (lan: string) => (dispatch: AppDispatch) => {
    dispatch(languageRec(lan))
}

export const setToFavorite = (el: any) => (dispatch: AppDispatch) => {
    dispatch(addToFavorites(el))
}

export const fetchingPopular = () => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(movieFetching())
            const response = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=en-US&page=1`)
            const {data} = await response
            dispatch(movieFetchingSuccess(data.results))
        } catch (e: any) {
            dispatch(movieFetchingError(e.message))
        }
    }
}


export const fetchingNowPlaying = () => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(movieFetching())
            const response = await axios(`https://api.themoviedb.org/3/movie/now_playing?api_key=${APIKEY}&language=en-US&page=1`)
            const {data} = await response
            dispatch(movieFetchingSuccess(data.results))
        } catch (e: any) {
            dispatch(movieFetchingError(e.message))
        }
    }
}
