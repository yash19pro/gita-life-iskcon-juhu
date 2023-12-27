import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Paper } from "@mui/material";
import Image from "next/image";
import GitaQuizImages from "../data/gitaQuizImages";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import GitaQuizYouTubeLinks from "../data/gitaQuizYouTubeLinks";

const GitaContestCarousel = () => {
    return (
        <div className="carousels">
            <Paper elevation={24} className="card carousel-container-image">
                <Carousel
                    className="image-carousel"
                    showArrows={true}
                    showThumbs={false}
                    infiniteLoop={true}
                    interval={60000} // Auto-advance every 5 seconds
                    transitionTime={500} // Animation duration
                >
                    {GitaQuizImages.map((image, index) => (
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
            <Carousel showThumbs={false}>
                {GitaQuizYouTubeLinks.map((video, index) => (
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
                                paddingTop: "40px",
                            }}
                        />
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default GitaContestCarousel;
