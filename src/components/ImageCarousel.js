import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import bannerImg5 from "../images/headerImages/banner-img-5.jpg";
import preTipsImage from "../images/prepTipsImg/prepTips.webp";
import { Link as ScrollLink } from "react-scroll";
import '../styles/carousel.css';

const carouselImgs = [
    {src: bannerImg5, alt: 'first carousel'},

]

const prepTipsImage = [
    {src: preTipsImage, alt: 'Preparation Tips Image'},
]

function CheckImage(name){
    if(name.name.id === "home"){
        return (
            <div className="background-carousel h-screen">
                {carouselImgs.map((image, index) => (
                    <div key={index} className="carousel-slide h-screen">
                        <div
                        className="carousel-background h-screen"
                        style={{ backgroundImage: `url(${image.src})` }}
                        >
                        </div>
                        <CheckPage  name={name.name.id }/>
                    </div>
                ))}
            </div>
        )
    } else if(name.name.id === "prepTips"){
        return (
            <div className="background-carousel h-screen">
                {prepTipsImage.map((image, index) => (
                    <div key={index} className="carousel-slide h-screen">
                        <div
                        className="carousel-background h-screen"
                        style={{ backgroundImage: `url(${image.src})` }}
                        >
                        </div>
                        <CheckPage  name={name.name.id }/>
                    </div>
                ))}
            </div>
        )
    }
}

function CheckPage (name){
    if(name.name=== "home"){
        return (
            <div className="text-over-image">
                <h1 className="title-over-image">Elevate, Enhance, Sell: Photography That Brings Your Listings to Life.</h1>
                <p className="para-over-image">Bring your listings to life</p>
                
                
                <ScrollLink to="contacts">
                <button className='btn-over-image'>Schedule Appointment Now</button>
                </ScrollLink>
            </div>
        )
    } else if (name.name=== "prepTips"){
        return (<div className="text-over-image">
                <h1 className="title-over-image">PREPARATION TIPS</h1>
            </div>
        )
    }
}

function ImageCarousel (id){
    return (
        <CheckImage name={id} />
    )
}

export default ImageCarousel;