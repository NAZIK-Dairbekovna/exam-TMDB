import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import {rootState} from "../../store";
import {fetchingNowPlaying, fetchingPopular, setToFavorite} from "../../Reducers/ActionCreators";
import {NavLink, useNavigate} from "react-router-dom";
import {BsSearch} from "react-icons/bs";
import {useAppDispatch} from "../../hooks/useAppDispatch";

const Home = () => {
    const {movies,favorites} = useSelector((state: rootState) => state.movieSlice)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchingNowPlaying())
        dispatch(fetchingPopular())
    }, [])
    const navigate = useNavigate()
    const handleNav = () => {
        navigate("/favorites")
    }

    return (
        <>
            <div>
                <nav className="bg-white border-gray-200 dark:bg-gray-900">
                    <div className="container">
                        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                            <a href="https://flowbite.com/" className="flex items-center">
                        <span
                            className="self-start text-2xl font-bold whitespace-nowrap dark:text-white">TMDB</span>
                            </a>
                            <div className="flex md:order-2">
                                <button data-collapse-toggle="navbar-cta" type="button"
                                        className="inline-flex items-center p-2 text-sm text-gray-500
                                        rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2
                                         focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700
                                         dark:focus:ring-gray-600"
                                        aria-controls="navbar-cta" aria-expanded="false">
                                    <span className="sr-only">Open main menu</span>
                                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd"
                                              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1
                                              0 01-1-1zM3 10a1 1 0 011-1h12a1
                                               1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1
                                                1 0 110 2H4a1 1 0 01-1-1z"
                                              clipRule="evenodd"></path>
                                    </svg>
                                </button>
                            </div>
                            <div className="justify-items-center justify-between hidden w-full
                             md:flex md:w-auto md:order-1"
                                 id="navbar-cta">
                                <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100
                                 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white
                                 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                    <li>
                                        <a href="#"
                                           className="block py-2 pl-3 pr-4 text-white bg-green-700
                                           rounded md:bg-transparent md:text-green-700 md:p-0
                                           md:dark:text-green-500"
                                           aria-current="page">Home</a>
                                    </li>
                                    <li>
                                        <a href="#"
                                           className="block py-2 pl-3 pr-4 text-gray-900 rounded
                                    hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700
                                     md:p-0 md:dark:hover:text-green-500 dark:text-white dark:hover:bg-gray-700
                                     dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                            Popular</a>
                                    </li>
                                    <li>
                                        <a href="#"
                                           className="block py-2 pl-3 pr-4 text-gray-900 rounded
                                   hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700
                                    md:p-0 md:dark:hover:text-green-500 dark:text-white dark:hover:bg-gray-700
                                     dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                            Now Playing</a>
                                    </li>
                                    <li>
                                        <button onClick={handleNav}
                                                type="button"
                                                className="text-white bg-gradient-to-r relative
                                        from-green-400 via-green-500 to-green-600
                                        hover:bg-gradient-to-br focus:ring-4
                                         focus:outline-none focus:ring-green-300
                                         dark:focus:ring-green-800 font-medium rounded-lg
                                          text-sm px-5 py-2.5 text-center mr-2 mb-2">Favorite
                                            <span className='absolute top-[-16px]  rounded-[50%] bg-amber-400 px-2 py-1 right-[-8px] text-white'>{favorites.length}</span>
                                        </button>

                                    </li>

                                    <li>
                                        <input type="text" id="search-navbar"
                                               className="block w-full p-2 pl-10 text-sm
                                       text-gray-900 border border-gray-300 rounded-full
                                        bg-gray-50 focus:ring-green-500 focus:border-green-500
                                         dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                                         dark:text-white dark:focus:ring-blue-500 dark:focus:border-green-500"
                                               placeholder="Search..."/>
                                    </li>
                                    <li>
                                        <BsSearch style={{color: 'green'}}/>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="container">
                    <div className="home-content">

                        <div>
                            <input type="text" id="search-navbar"
                                   className="block w-full p-2 pl-10 text-sm
                                       text-gray-900 border border-gray-300 rounded-full
                                        bg-gray-50 focus:ring-blue-500 focus:border-blue-500
                                         dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                                         dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                   placeholder="Search for a movie, tv show..."/>
                        </div>

                        <div className="tabs">

                            <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                                <li className="mr-2">
                                    <NavLink to={`/nowPlaying`} className="inline-block px-4 py-3
                            text-white bg-green-600 rounded-full active"
                                    >Now Playing</NavLink>
                                </li>
                                <li className="mr-2">
                                    <NavLink to={`/popular`}
                                             className="inline-block px-4 py-3
                               rounded-full hover:text-gray-900 hover:bg-gray-100
                                dark:hover:bg-gray-800 dark:hover:text-white"
                                    >Popular
                                    </NavLink>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;