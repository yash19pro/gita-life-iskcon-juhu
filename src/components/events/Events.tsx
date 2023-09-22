import ImageCarousel from "@/components/carousel/ImageCarousel";

export default function Events() {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                minHeight: "100vh",
                paddingBottom: "3rem",
                paddingTop: "3rem",
            }}
        >
            {/* <Typography variant="h1" component="h2">
                Events
            </Typography> */}
            <ImageCarousel />
        </div>
    );
}
