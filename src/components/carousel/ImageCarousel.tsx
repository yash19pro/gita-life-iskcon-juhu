import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Paper } from "@mui/material";
import Image from "next/image";

const images = [
    {
        src: "/carousel-images/kartik-maas.jpeg",
        alt: "Kartik Maas",
    },
    {
        src: "/carousel-images/sharad-purnima-1.jpeg",
        alt: "Sharad Purnima",
    },
    {
        src: "/carousel-images/sharad-purnima-2.jpeg",
        alt: "Sharad Purnima",
    },
    {
        src: "/carousel-images/sharad-purnima-3.jpeg",
        alt: "Sharad Purnima",
    },
    {
        src: "/carousel-images/sharad-purnima-4.jpeg",
        alt: "Sharad Purnima",
    },
    {
        src: "/carousel-images/sharad-purnima-5.jpeg",
        alt: "Sharad Purnima",
    },
    {
        src: "/carousel-images/gev-1.jpeg",
        alt: "GEV camp",
    },
    {
        src: "/carousel-images/gev-2.jpeg",
        alt: "GEV camp",
    },
    {
        src: "/carousel-images/gev-3.jpeg",
        alt: "GEV camp",
    },
    {
        src: "/carousel-images/gev-4.jpeg",
        alt: "GEV camp",
    },
    {
        src: "/carousel-images/gev-5.jpeg",
        alt: "GEV camp",
    },
    {
        src: "/carousel-images/gev-6.jpeg",
        alt: "GEV camp",
    },
    {
        src: "/carousel-images/talasari-1.jpeg",
        alt: "Talasari camp",
    },
    {
        src: "/carousel-images/talasari-2.jpeg",
        alt: "Talasari camp",
    },
    {
        src: "/carousel-images/talasari-3.jpeg",
        alt: "Talasari camp",
    },
    {
        src: "/carousel-images/talasari-4.jpeg",
        alt: "Talasari camp",
    },
    {
        src: "/carousel-images/talasari-5.jpeg",
        alt: "Talasari camp",
    },
    {
        src: "/carousel-images/talasari-6.jpeg",
        alt: "Talasari camp",
    },
    {
        src: "/carousel-images/talasari-7.jpeg",
        alt: "Talasari camp",
    },
    {
        src: "/carousel-images/talasari-8.jpeg",
        alt: "Talasari camp",
    },
    {
        src: "/carousel-images/talasari-9.jpeg",
        alt: "Talasari camp",
    },
    {
        src: "/carousel-images/talasari-10.jpeg",
        alt: "Talasari camp",
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
