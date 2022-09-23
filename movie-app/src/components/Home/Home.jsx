import React from 'react'
import './Home.css'
import request from '../../Request'
import { useState } from 'react'
import { useEffect } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom'
import Card from '../Card/Card'
import MovieDetail from '../MovieDetail/MovieDetail'


const Home = () => {
    const [slider, setSlider] = useState([])
    useEffect(() => {
        fetch(request.requestPopular)
            .then(res => res.json())
            .then(data => setSlider(data.results))
    }, [])
    // console.log(slider);


    return (
        <>
            <Carousel
                showThumbs={false}
                autoPlay={true}
                transitionTime={2}
                infiniteLoop={true}
                showStatus={false}
            >
                {slider.map((item) => (
                    <Link to={`/movie/${item.id}`}>
                        <div className="slider_container">
                            <div className="slider" key={item.id}>
                                <div className="slider_img">
                                    <img className='backdrop_img' src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`} alt="" />
                                </div>
                                <div className="slider_overlay">
                                    <h2 className='title'>{item?.original_title}</h2>
                                    <div className="slider_button">
                                        <Link className='fbutton' to='/'>Play</Link>
                                        <Link className='sbutton' to='/'>Watch List</Link>
                                    </div>
                                    <p className="des">{item?.overview.slice(0, 168) + '....'}</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}

            </Carousel>
            <Card rowID='1' title="Top_Rated" fetchURL={request.requestTopRated} />
            <Card rowID='2' title="Popular" fetchURL={request.requestPopular} />
            <Card rowID='3' title="Now_Playing" fetchURL={request.requestNowPlaying} />
            <Card rowID='4' title="Upcoming" fetchURL={request.requestUpComing} />

        </>
    )
}

export default Home