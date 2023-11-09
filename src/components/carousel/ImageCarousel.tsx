import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Paper } from "@mui/material";
import Image from "next/image";
import images from "../data/images";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import videos from "../data/videos";

const ImageCarousel = () => {
    return (
        <div className="carousels">
            <Paper elevation={24} className="card carousel-container-image">
                <Carousel
                    className="image-carousel"
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
            <Paper elevation={24} className="carousel-container-video">
                <Carousel showThumbs={false}>
                    {videos.map((video, index) => (
                        <div key={index}>
                            <iframe
                                width="600"
                                height="500"
                                src={video.url}
                                title={video.title}
                                scrolling="no"
                                frameBorder="0"
                                allowFullScreen
                                style={{
                                    marginBottom: "0",
                                    border: "none",
                                    display: "block",
                                }}
                            />
                        </div>
                    ))}
                </Carousel>
            </Paper>
        </div>
    );
};

export default ImageCarousel;

{
    /* <Paper
    elevation={24}
    className="card carousel-container-video"
    style={{ margin: "20px" }}
>
    <Carousel showThumbs={false}>
        {videos.map((video, index) => (
            <div key={index}>
                <iframe
                    width="700"
                    height="460"
                    src={video.url}
                    title={video.title}
                    frameBorder="0"
                    allowFullScreen
                />
            </div>
        ))}
    </Carousel>
</Paper> */
}
