import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Paper } from "@mui/material";
import Image from "next/image";

const images = [
    {
        id: 7,
        src: "/carousel-images/talasari-7.jpeg",
        alt: "Talasari Camp",
    },
    {
        id: 1,
        src: "/carousel-images/talasari-1.jpeg",
        alt: "Talasari Camp",
    },
    {
        id: 2,
        src: "/carousel-images/talasari-2.jpeg",
        alt: "Talasari Camp",
    },
    {
        id: 3,
        src: "/carousel-images/talasari-3.jpeg",
        alt: "Talasari Camp",
    },
    {
        id: 4,
        src: "/carousel-images/talasari-4.jpeg",
        alt: "Talasari Camp",
    },
    {
        id: 5,
        src: "/carousel-images/talasari-5.jpeg",
        alt: "Talasari Camp",
    },
    {
        id: 6,
        src: "/carousel-images/talasari-6.jpeg",
        alt: "Talasari Camp",
    },
    {
        id: 8,
        src: "/carousel-images/radhaashtami-1.jpeg",
        alt: "Radha Ashtami",
    },
    {
        id: 9,
        src: "/carousel-images/radhaashtami-2.jpeg",
        alt: "Radha Ashtami",
    },
    {
        id: 10,
        src: "/carousel-images/radhaashtami-3.jpeg",
        alt: "Radha Ashtami",
    },
    {
        id: 11,
        src: "/carousel-images/radhaashtami-4.jpeg",
        alt: "Radha Ashtami",
    },
    {
        id: 12,
        src: "/carousel-images/radhaashtami-5.jpeg",
        alt: "Radha Ashtami",
    },
    {
        id: 13,
        src: "/carousel-images/radhaashtami-6.jpeg",
        alt: "Radha Ashtami",
    },
    {
        id: 14,
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
