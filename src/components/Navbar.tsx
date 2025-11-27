import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import styles from "./Navbar.module.css";
import logo from "../assets/birdCircular.svg"
import arrowIcon from "../assets/arrowIcon.svg"
import hamburgerMenu from "../assets/hamburgerMenu.svg"
import closeMenu from "../assets/closeMenu.svg"

const Navbar: React.FC = () => {
    const location = useLocation();
    const [isLanguageOpen, setIsLanguageOpen] = useState(false);
    const [currentLanguage, setCurrentLanguage] = useState("Est");
    const { t, i18n } = useTranslation();

    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleLanguageChange = (newLang: string) => {
        const langCode = newLang === "Est" ? "et" : "en";
        i18n.changeLanguage(langCode);
        setCurrentLanguage(newLang);
        setIsLanguageOpen(false);
    }

    const otherLanguage = currentLanguage === "Est" ? "Eng" : "Est";

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const mobileMenuRef = useRef<HTMLDivElement>(null);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

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

    useEffect(() => {
        const handleClickOutside = (event: TouchEvent) => {
            const target = event.target as Element;
            const mobileButton = target.closest(".mobileMenuButton") || target.closest("[class*=mobileMenuButton]");

            if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node) && !mobileButton) {
                setIsMobileMenuOpen(false);
            }
        };
        if (isMobileMenuOpen) {
            document.addEventListener("touchstart", handleClickOutside);
        }
        return () => {
            document.removeEventListener("touchstart", handleClickOutside)
        };
    }, [isMobileMenuOpen]);

    return (
        <>
            <nav className={`${styles.navbar} ${isVisible ? styles.visible : styles.hidden} ${location.pathname === "/" ? styles.homeBorder : ""}`}>
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
                    <Link to="/partners" data-text={t("nav.partners")} className={` ${styles.navButton} ${location.pathname === "/partners" || location.pathname === "/newPartners" ? styles.active : ""}`}>{t("nav.partners")}</Link>
                    <Link to="/challenges" data-text={t("nav.challenges")} className={` ${styles.navButton} ${location.pathname === "/challenges" ? styles.active : ""}`}>{t("nav.challenges")}</Link>
                    <Link to="/us" data-text={t("nav.us")} className={` ${styles.navButton} ${location.pathname === "/us" ? styles.active : ""}`}>{t("nav.us")}</Link>

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
                    <button className={styles.mobileMenuButton} onClick={toggleMobileMenu}>
                        <img src={isMobileMenuOpen ? closeMenu : hamburgerMenu} />
                    </button>
                </div>
            </nav>
            {isMobileMenuOpen && (
                <div className={styles.mobileMenu} ref={mobileMenuRef}>
                    <div className={styles.mobileMenuContent}>
                        <Link to="/partners" className={`${styles.mobileNavButton} ${location.pathname === "/partners" || location.pathname === "/newPartners" ? styles.active : ""}`} onClick={() => setIsMobileMenuOpen(false)}>{t("nav.partners")}</Link>
                        <Link to="/challenges" className={`${styles.mobileNavButton} ${location.pathname === "/challenges" ? styles.active : ""}`} onClick={() => setIsMobileMenuOpen(false)}>{t("nav.challenges")}</Link>
                        <Link to="/us" className={`${styles.mobileNavButton} ${location.pathname === "/us" ? styles.active : ""}`} onClick={() => setIsMobileMenuOpen(false)}>{t("nav.us")}</Link>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar