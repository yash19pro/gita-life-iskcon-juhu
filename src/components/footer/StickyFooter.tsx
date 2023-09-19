import React from "react";
import styles from "@/styles/Home.module.css";

const StickyFooter = () => {
    return (
        <footer className="sticky-footer" style={{ width: "100%" }}>
            <div className="footer-content">
                <div className="social-media">
                    <a
                        href="#"
                        className={styles.card}
                        style={{ padding: "10px", margin: "7.5px" }}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        YouTube
                    </a>
                    <a
                        href="#"
                        className={styles.card}
                        style={{ padding: "10px", margin: "7.5px" }}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Instagram
                    </a>
                    <a
                        href="#"
                        className={styles.card}
                        style={{ padding: "10px", margin: "7.5px" }}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Blogger
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
