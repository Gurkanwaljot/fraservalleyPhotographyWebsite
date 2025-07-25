import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // import carousel styles
import { Carousel } from 'react-responsive-carousel'; // import Carousel component
import '../../styles/customCarousel.css'; // create this for additional styling
import ReactPlayer from 'react-player'; // Import ReactPlayer for videos

const CustomCarousel = ({ images, serviceName }) => {
    return (
        <div className="carousel-header-container">
            {/* The logo, service name, and carousel */}
            <div className="carousel-overlay-content">
                <h1 className="carousel-service-name">{serviceName}</h1>
            </div>
            <Carousel
                showThumbs={false}
                infiniteLoop={true}
                autoPlay={true}
                interval={3000}
                stopOnHover={true}
                showStatus={false}
            >
                {images.map((media, index) => (
                    <div key={index}>
                        {media.src.includes('.mp4') || media.src.includes('.webm') ? (
                            <div className="carousel-video-wrapper">
                                {/* ReactPlayer for video playback */}
                                <ReactPlayer
                                    url={media.src}
                                    controls={false}
                                    width="100%"
                                    height="100%"
                                    playing={true}
                                    loop={true}
                                    muted={true} // Set to true or false based on your preference
                                />
                            </div>
                        ) : (
                            <img src={media.src} alt={media.alt} className="carousel-img" />
                        )}
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default CustomCarousel;
