import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import styles from "./Navbar.module.css";
import logo from "../assets/birdCircular.svg"
import arrowIcon from "../assets/arrowIcon.svg"

const Navbar: React.FC = () => {
    const location = useLocation();
    const [isLanguageOpen, setIsLanguageOpen] = useState(false);
    const [currentLanguage, setCurrentLanguage] = useState("Est");

    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleLanguageChange = (newLang: string) => {
        setCurrentLanguage(newLang);
        setIsLanguageOpen(false);
    }

    const otherLanguage = currentLanguage === "Est" ? "Eng" : "Est";

    useEffect(() => {
        const handleScroll = () => {
            const currentSrcrollY = window.scrollY;

            if (currentSrcrollY === 0) {
                setIsVisible(true);
            } else if (currentSrcrollY > lastScrollY && currentSrcrollY > 100) {
                setIsVisible(false);
            } else if (currentSrcrollY < lastScrollY) {
                setIsVisible(true);
            }
            setLastScrollY(currentSrcrollY)
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <nav className={`${styles.navbar} ${isVisible ? styles.visible : styles.hidden}`}>
            <div className={styles.logoContainer}>
                <Link to="/" className={styles.logoLink}>
                    <img src={logo} alt="Charry logo" className={styles.logo} />
                    <div className={styles.logoText}>
                        <div className={styles.logoTitle}>Charry</div>
                        <div className={styles.logoSubTitle}>annetusäpp</div>
                    </div>
                </Link>
            </div>

            <div className={styles.navButtons}>
                <Link to="/partners" data-text="MTÜ-d" className={` ${styles.navButton} ${location.pathname === "/partners" ? styles.active : ""}`}>MTÜ-d</Link>
                <Link to="/challenges" data-text="Väljakutsed" className={` ${styles.navButton} ${location.pathname === "/challenges" ? styles.active : ""}`}>Väljakutsed</Link>
                <Link to="/us" data-text="Meie" className={` ${styles.navButton} ${location.pathname === "/us" ? styles.active : ""}`}>Meie</Link>

                <div className={styles.languageSelector}>
                    <button className={styles.languageButton} onClick={() =>
                        setIsLanguageOpen(!isLanguageOpen)}>{currentLanguage}<img src={arrowIcon} alt="" className={styles.arrow} />
                    </button>
                    {isLanguageOpen && (
                        <div className={styles.dropdown}>
                            <div className={styles.option} onClick={() => handleLanguageChange(otherLanguage)}>{otherLanguage}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar