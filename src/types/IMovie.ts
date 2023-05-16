export interface IMovie {
    id?: number
    title?: string,
    results?: string
    poster_path?: string
    backdrop_path?: string
    page?: number
    release_date?: number
    vote_average?: number
    overview?: string
}

export interface ISearch {
    id: number
    title: string,
    results: string
}

