import React from 'react';
import largeBanner from '../../assets/lgbanner.webp'
import largeBanner2 from '../../assets/labanner2.webp'
import mobileBanner from '../../assets/smallbanner.webp'
import mobileBanner2 from '../../assets/smallbanner2.webp'


const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={mobileBanner} className="w-full lg:hidden" />
                <img src={largeBanner} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={mobileBanner2} className="w-full lg:hidden" />
                <img src={largeBanner2} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;