import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slides from '../../data/home-slides';
import './Slider.css';

function HomeSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slideToShow: 3,
        slideToScroll: 3
    };

    return (
        <Slider {...settings}>
            {slides.map((slide, index) => (
                <div key={index} class="slide-container">
                    <div className="slide-content">
                        <h2 class="heading1">{slide.heading1}</h2>
                        <h2 class="heading2">{slide.heading2}</h2>
                        <p>{slide.text}</p>
                        <button class="button1">{slide.button1}</button>
                        <button class="button2">{slide.button2}</button>
                    </div>
                    <div className="slide-image">
                        <img src={`/images/${slide.image}`} alt="Coffee splash" />
                    </div>
                </div>
            ))}
        </Slider>
    );
}

export default HomeSlider;