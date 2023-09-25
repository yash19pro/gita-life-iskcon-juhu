import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Paper } from "@mui/material";
import Image from "next/image";

const images = [
    {
        id: 1,
        src: "/carousel-images/ekadashi.jpeg",
        alt: "Ekadashi",
    },
];

const ImageCarousel = () => {
    return (
        <Paper elevation={24} className="card carousel-container">
            <Carousel
                showArrows={true}
                showThumbs={false}
                infiniteLoop={true}
                autoPlay={true}
                interval={5000} // Auto-advance every 5 seconds
                transitionTime={500} // Animation duration
            >
                {images.map((image) => (
                    <div key={image.id}>
                        <Paper elevation={3} className="carousel-image">
                            <Image
                                src={image.src}
                                alt={image.alt}
                                width={500}
                                height={500}
                            />
                        </Paper>
                    </div>
                ))}
            </Carousel>
        </Paper>
    );
};

export default ImageCarousel;
