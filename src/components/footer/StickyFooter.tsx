import React from "react";
import styles from "@/styles/Home.module.css";

const StickyFooter = () => {
    return (
        <footer className="sticky-footer" style={{ width: "100%" }}>
            <div className="footer-content">
                <div className="social-media">
                    <a
                        href="https://www.youtube.com/channel/UC_ns-V-ywky8XglGIG9g5qQ"
                        className={styles.card}
                        style={{ padding: "10px", margin: "7.5px" }}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        YouTube
                    </a>
                    <a
                        href="https://www.instagram.com/iskcon.gitalife/"
                        className={styles.card}
                        style={{ padding: "10px", margin: "7.5px" }}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Instagram
                    </a>
                    <a
                        href="https://medium.com/@gitalife.iskconjuhu"
                        className={styles.card}
                        style={{ padding: "10px", margin: "7.5px" }}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Medium
                    </a>
                </div>
                {/* <div className="footer-links">
                    <span>About Us</span>
                    <span>Contact</span>
                </div> */}
                <div className="contact-info">
                    <p>Email: gitalife.iskconjuhu@gmail.com</p>
                    <p>
                        Phone: 8767469043 / 8108008218 / 8766685081 / 9619788321
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default StickyFooter;
