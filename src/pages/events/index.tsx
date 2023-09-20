import ImageCarousel from "@/components/carousel/ImageCarousel";
import { Typography } from "@mui/material";
import styles from "@/styles/Home.module.css";
import StickyFooter from "@/components/footer/StickyFooter";

export default function Events() {
    return (
        <>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center",
                    minHeight: "100vh",
                    paddingBottom: "3rem",
                }}
            >
                <Typography variant="h1" component="h2">
                    Events
                </Typography>
                <ImageCarousel />
            </div>
            <StickyFooter />
        </>
    );
}
