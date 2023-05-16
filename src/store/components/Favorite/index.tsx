import React from 'react';
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {useAppSelector} from "../../hooks/useAppSelector";

const Favorites = () => {
    const dispatch = useAppDispatch()
    const {favorites} = useAppSelector(state => state.movieSlice)
    console.log(favorites)
    return (
        <div>
            <div className="container">
                <div className="flex wrap">
                    {
                        favorites.map(el => (
                            <div>
                                <div className="max-w-sm bg-white border border-white-200
                                rounded-lg shadow dark:bg-white-800 dark:border-white-700">
                                    <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${el.poster_path}`}
                                         alt=""/>
                                    <h1>{el.title}</h1>
                                    <h2>{el.release_date}</h2>
                                    <button className='bg-green-300 py-1 px-3 rounded-2xl'>
                                        favorite
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Favorites;