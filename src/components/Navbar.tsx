import React from "react";
import { Link, useLocation } from "react-router-dom";

import styles from "./Navbar.module.css";
import logo from "../assets/BirdCircular.svg"

const Navbar: React.FC = () => {
    const location = useLocation();
    return (
        <nav className={styles.navbar}>
            <div className={styles.logoContainer}>
                <img src={logo} alt="Charry logo" className={styles.logo} />
                <div className={styles.logoText}>
                    <div className={styles.logoTitle}>Charry</div>
                    <div className={styles.logoSubTitle}>annetusäpp</div>
                </div>
            </div>

            <div className={styles.navButtons}>
                <Link to="/partners" data-text="MTÜ-d" className={` ${styles.navButton} ${location.pathname === "/partners" ? styles.active : ""}`}>MTÜ-d</Link>
                <Link to="/challenges" data-text="Väljakutsed" className={` ${styles.navButton} ${location.pathname === "/challenges" ? styles.active : ""}`}>Väljakutsed</Link>
                <Link to="/us" data-text="Meie" className={` ${styles.navButton} ${location.pathname === "/us" ? styles.active : ""}`}>Meie</Link>
            </div>
        </nav>
    );
};

export default Navbar