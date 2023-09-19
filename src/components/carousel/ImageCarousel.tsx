import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Paper } from "@mui/material";
import Image from "next/image";

const images = [
    {
        id: 1,
        src: "/carousel-images/1.jpeg",
        alt: "Image 1",
    },
    {
        id: 2,
        src: "/carousel-images/2.jpeg",
        alt: "Image 2",
    },
    {
        id: 3,
        src: "/carousel-images/3.jpeg",
        alt: "Image 3",
    },
];

const ImageCarousel = () => {
    return (
        <div className="card carousel-container">
            <Carousel
                showArrows={true}
                showThumbs={false}
                infiniteLoop={true}
                autoPlay={true}
                interval={5000} // Auto-advance every 5 seconds
                transitionTime={500} // Animation duration
            >
                {images.map((image) => (
                    <div key={image.id} style={{ minWidth: "500px" }}>
                        <Paper elevation={3} className="carousel-image">
                            <Image
                                src={image.src}
                                alt={image.alt}
                                width={50}
                                height={50}
                            />
                        </Paper>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default ImageCarousel;
