import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Paper } from "@mui/material";
import Image from "next/image";

const images = [
    {
        src: "/carousel-images/sharad-purnima.jpeg",
        alt: "Sharad Purnima",
    },
    {
        src: "/carousel-images/kartik-maas.jpeg",
        alt: "Kartik Maas",
    },
    {
        src: "/carousel-images/radhaashtami-1.jpeg",
        alt: "Radha Ashtami Celebration",
    },
    {
        src: "/carousel-images/harinaam-week-1.jpeg",
        alt: "Harinaam Week",
    },
    {
        src: "/carousel-images/harinaam-week-2.jpeg",
        alt: "Harinaam Week",
    },
    {
        src: "/carousel-images/harinaam-week-3.jpeg",
        alt: "Harinaam Week",
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
                {images.map((image, index) => (
                    <div key={index}>
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
