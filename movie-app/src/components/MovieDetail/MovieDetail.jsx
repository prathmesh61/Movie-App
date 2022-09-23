import React from 'react'
import './MovieDetail.css'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

const MovieDetail = () => {

    const [detail, setDetail] = useState([])
    const { id } = useParams()

    useEffect(() => {
        getdata()
        window.scroll(0, 0)
    }, [])
    const getdata = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=6f0a51047d1a5047327fe89cc3ffa5d3&language=en-US`)
            .then(res => res.json())
            .then(data => setDetail(data))
    }

    console.log(detail);

    return (
        <div className='movie_detail-wrapper' key={detail.id}>
            <div className="movie_detail-backdropImg">
                <img src={`https://image.tmdb.org/t/p/original/${detail?.backdrop_path}`} alt="" />
            </div>
            <div className="movie_detail-container">


                <div className="movie_deatil-overlay">
                    <div className="movie_detail-title">
                        {detail?.original_title}
                    </div>
                    <div className="movie_detail-info">
                        <p className="release">Release: {detail?.release_date}</p>
                        <p className="rating">Rating: {detail?.vote_average}</p>

                    </div>
                    <div className="movie_detail-tagline">
                        Tagline: {detail?.tagline}
                    </div>
                    <div className="movie_detail-genres">
                        {
                            detail && detail.genres
                                ?
                                detail.genres.map(genre => (
                                    <><span className="movie__genre" id={genre.id}>{genre.name},</span></>
                                ))
                                :
                                ""
                        }
                    </div>
                    <div className="movie_detail-des">
                        <span>Movie Description:</span> {detail?.overview}
                    </div>

                </div>
                <div className="movie_detail-poster">
                    <img src={`https://image.tmdb.org/t/p/original/${detail?.poster_path}`} alt="" />
                </div>
            </div>

        </div>
    )
}

export default MovieDetail