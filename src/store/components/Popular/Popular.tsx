import React, {useEffect} from 'react';
import {fetchingPopular, setToFavorite} from "../../Reducers/ActionCreators";
import {useSelector} from "react-redux";
import {rootState} from "../../store";
import Slider from 'react-slick'
import {useAppDispatch} from "../../hooks/useAppDispatch";


const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

const Popular = () => {
    const {movies} = useSelector((state: rootState) => state.movieSlice)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchingPopular())
    }, [])

    return (
        <div className='bg-white-300'>
            <div className="container">
                <Slider {...settings}>
                    <div className="flex wrap">
                        {
                            movies.map(el => (
                                <div>
                                    <div className="max-w-sm bg-white border border-white-200
                                rounded-lg shadow dark:bg-white-800 dark:border-white-700">
                                        <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${el.poster_path}`} alt=""/>
                                        <h1>{el.title}</h1>
                                        <h2>{el.release_date}</h2>
                                        <button    onClick={() => dispatch(setToFavorite(el))}
                                            className='bg-green-300 py-1 px-3 rounded-2xl'>
                                            favorite
                                        </button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                </Slider>
            </div>
        </div>
    );
};

export default Popular;