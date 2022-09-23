import React from 'react'
import "./Card.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useState } from 'react';
import { useEffect } from 'react';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md'
import { Link } from 'react-router-dom';

const Card = ({ title, fetchURL, rowID }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(fetchURL)
            .then(res => res.json())
            .then(data => setMovies(data.results))
    }, [fetchURL])

    const leftSlide = () => {
        var slide = document.getElementById('slide' + rowID)
        slide.scrollLeft = slide.scrollLeft - 290
    }
    const rightSlide = () => {
        var slide = document.getElementById('slide' + rowID)
        slide.scrollLeft = slide.scrollLeft + 290
    }

    return (
        <div className='wrapper'>
            <div className="card_section">
                <h2>{title}</h2>
            </div>

            <MdArrowBackIosNew size={40} className='arrow1' onClick={leftSlide} />
            <div className="card" id={'slide' + rowID}>
                <div className="card_img" id='slide'>
                    {movies.map((item, id) => {
                        return (
                            <Link to={`/movie/${item.id}`}>
                                <div>
                                    <img src={`https://image.tmdb.org/t/p/original/${item?.poster_path}`} alt="" />
                                    <div className="card_info">
                                        <p className="card_title">{item?.original_title}</p>
                                        {/* <p className="rating">{item?.vote_average}</p> */}
                                    </div>
                                    <p className="card_des">
                                        <span>Overview:</span><br /><br />
                                        {item?.overview.slice(0, 198) + '...'}
                                    </p>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
            <MdArrowForwardIos size={40} className='arrow2' onClick={rightSlide} />





        </div>
    )
}

export default Card