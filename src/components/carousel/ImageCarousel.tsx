import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Paper } from "@mui/material";
import Image from "next/image";

const images = [
    {
        src: "/carousel-images/lord-vishnu-and-durga-devi-navaratri.jpg",
        alt: "Lord Vishnu and Durga Devi",
    },
    {
        src: "/carousel-images/harinaam-week-1.jpeg",
        alt: "Harinaam",
    },
    {
        src: "/carousel-images/harinaam-week-2.jpeg",
        alt: "Harinaam",
    },
    {
        src: "/carousel-images/harinaam-week-3.jpeg",
        alt: "Harinaam",
    },
    {
        src: "/carousel-images/talasari-3.jpeg",
        alt: "Talasari Camp",
    },
    {
        src: "/carousel-images/talasari-4.jpeg",
        alt: "Talasari Camp",
    },
    {
        src: "/carousel-images/radhaashtami-1.jpeg",
        alt: "Radha Ashtami",
    },
    {
        src: "/carousel-images/radhaashtami-2.jpeg",
        alt: "Radha Ashtami",
    },

    {
        src: "/carousel-images/radhaashtami-3.jpeg",
        alt: "Radha Ashtami",
    },
    {
        src: "/carousel-images/radhaashtami-4.jpeg",
        alt: "Radha Ashtami",
    },
    {
        src: "/carousel-images/radhaashtami-6.jpeg",
        alt: "Radha Ashtami",
    },
    {
        src: "/carousel-images/radhaashtami-7.jpeg",
        alt: "Radha Ashtami",
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
