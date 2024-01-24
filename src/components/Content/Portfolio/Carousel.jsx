import React, { useState } from 'react'
import blackKitch from '../../img/works/blackKitchen.jpg'
import brounKitch from '../../img/works/brounKitchen.jpg'
import closet from '../../img/works/closet.jpg'
import grinKitch from '../../img/works/grinKitchen.jpg'
import kitch from '../../img/works/kitchen.jpg'
import redKitch from '../../img/works/redKitchen.jpg'
import rivera from '../../img/works/rivera.jpg'
import tv from '../../img/works/tv.jpg'
import whiteKitch from '../../img/works/whiteKitchen.jpg'
import css from '../Portfolio/Carousel.module.css'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const handleNext = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1))
    }
    const handleprev = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1))
    }

    const images = [blackKitch, brounKitch, closet, grinKitch, kitch, redKitch, rivera, tv, whiteKitch]
    return (
        <div className={css.carouselContainer}>
            <button onClick={handleprev} className={css.btnCarousel}><FaArrowLeft /></button>
            <img src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} className={css.carouselImg} />
            <button onClick={handleNext} className={css.btnCarousel}><FaArrowRight /></button>
        </div>
    )
}

export default Carousel
