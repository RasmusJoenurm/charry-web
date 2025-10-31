import React from "react";
import styles from "./Navbar.module.css";
import logo from "../assets/BirdCircular.png"

const Navbar: React.FC = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logoContainer}>
                <img src={logo} alt="Charry logo" className={styles.logo} />
                <div className={styles.logoText}>
                    <div className={styles.logoTitle}>Charry</div>
                    <div className={styles.logoSubTitle}>annetusäpp</div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar