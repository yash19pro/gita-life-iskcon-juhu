import Image from "next/image";
import styles from "@/styles/Home.module.css";

export default function Navbar() {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                padding: "20px",
                fontFamily: "'Spectral', serif",
                background: "linear-gradient(to bottom, #888888, #ffffff);",
            }}
        >
            {/* Iskcon logo */}
            <Image
                className={`${styles.logo} header-logo`}
                src="/iskcon-juhu-logo.jpg"
                alt="ISKCON Juhu, Mumbai"
                width={100}
                height={100}
                style={{
                    borderRadius: "50%",
                    border: "0.5px solid black",
                    filter: "drop-shadow(0 0 0.75rem black)",
                }}
                priority
            />

            {/* Iskcon header */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    textAlign: "center",
                    filter: "drop-shadow(0 0 0.75rem black)",
                }}
            >
                <h2>ISKCON Juhu, Mumbai</h2>
                <h3>International Society for Krishna Consciousness</h3>
            </div>

            {/* Srila Prabhupada photo */}
            <Image
                className={`${styles.logo} header-logo`}
                src="/prabhupada.jpg"
                alt="Srila Prabhupada"
                width={100}
                height={100}
                style={{
                    borderRadius: "50%",
                    border: "0.5px solid black",
                    filter: "drop-shadow(0 0 0.75rem black)",
                }}
                priority
            />
        </div>
    );
}
