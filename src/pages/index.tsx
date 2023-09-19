import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import StickyFooter from "@/components/footer/StickyFooter";
import ImageCarousel from "@/components/carousel/ImageCarousel";
import { Chip, Divider, Typography } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
            <Head>
                <title>Gita Life</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={`${styles.main} ${inter.className}`}>
                {/* About Srila Prabhupada */}
                <div
                    style={{
                        display: "flex",
                        // backgroundColor: "red",
                        width: "100%",
                        margin: "20px",
                    }}
                    className="info-card"
                >
                    <Image
                        className={`${styles.logo}`}
                        src="/prabhupada.jpg"
                        alt="Srila Prabhupada"
                        width={250}
                        height={250}
                        style={{
                            borderRadius: "50%",
                            border: "0.5px solid black",
                            filter: "drop-shadow(0 0 0.75rem black)",
                        }}
                        priority
                    />
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "start",
                            margin: "30px",
                            textAlign: "left",
                        }}
                    >
                        <Typography
                            style={{ textAlign: "left" }}
                            variant="h2"
                            component="h2"
                        >
                            Srila Prabhupada
                        </Typography>
                        <Typography
                            style={{ textAlign: "justify" }}
                            variant="body1"
                            component="p"
                        >
                            When His Divine Grace A.C. Bhaktivedanta Swami Srila
                            Prabhupada entered the port of New York City on
                            September 17, 1965 few Americans took notice — but
                            he was not merely another immigrant. He was on a
                            mission to introduce the ancient teachings of Vedic
                            India into mainstream America. Before Srila
                            Prabhupada passed away on November 14, 1977 at the
                            age of 81, his mission proved successful. He had
                            founded the International Society for Krishna
                            Consciousness (ISKCON) and saw it grow into a
                            worldwide confederation of more than 100 temples,
                            ashrams and cultural centers.
                        </Typography>
                    </div>
                </div>

                <Divider />

                {/* About Iskcon Juhu */}
                <div
                    style={{
                        display: "flex",
                        // backgroundColor: "red",
                        width: "100%",
                        margin: "20px",
                    }}
                    className="info-card iskcon-logo"
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "start",
                            margin: "30px",
                            textAlign: "left",
                        }}
                    >
                        <Typography
                            style={{ textAlign: "left" }}
                            variant="h2"
                            component="h2"
                        >
                            ISKCON Juhu, Mumbai
                        </Typography>
                        <Typography
                            style={{ textAlign: "justify" }}
                            variant="body1"
                            component="p"
                        >
                            When His Divine Grace A.C. Bhaktivedanta Swami Srila
                            Prabhupada entered the port of New York City on
                            September 17, 1965 few Americans took notice — but
                            he was not merely another immigrant. He was on a
                            mission to introduce the ancient teachings of Vedic
                            India into mainstream America. Before Srila
                            Prabhupada passed away on November 14, 1977 at the
                            age of 81, his mission proved successful. He had
                            founded the International Society for Krishna
                            Consciousness (ISKCON) and saw it grow into a
                            worldwide confederation of more than 100 temples,
                            ashrams and cultural centers.
                        </Typography>
                    </div>
                    <Image
                        className={styles.logo}
                        src="/iskcon-juhu-logo.jpg"
                        alt="ISKCON Juhu, Mumbai"
                        width={250}
                        height={250}
                        style={{
                            borderRadius: "50%",
                            border: "0.5px solid black",
                            filter: "drop-shadow(0 0 0.75rem black)",
                        }}
                        priority
                    />
                </div>

                <Divider variant="middle" style={{ color: "black" }} />

                {/* Gita Life Logo */}
                <div className={styles.center}>
                    <Image
                        className={styles.logo}
                        src="/gita-life-logo.jpeg"
                        alt="Next.js Logo"
                        width={350}
                        height={350}
                        style={{
                            borderRadius: "50%",
                            border: "5px solid crimson",
                            filter: "drop-shadow(0 0 0.75rem crimson)",
                        }}
                        priority
                    />
                </div>

                <hr />
                <Typography variant="h1" component="h2">
                    Events
                </Typography>
                <ImageCarousel />
            </main>
            <StickyFooter />
        </>
    );
}
