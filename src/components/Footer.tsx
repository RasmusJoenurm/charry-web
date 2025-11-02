import React from "react"

import styles from "./Footer.module.css"
import logo from "../assets/birdCircular.svg"
import insta from "../assets/insta_icon.svg"
import tiktok from "../assets/tiktok_icon.svg"
import facebook from "../assets/facebook_icon.svg"
import linkedin from "../assets/linkedin_icon.svg"

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.logoContainer}>
                <img src={logo} alt="Charry logo" className={styles.logo} />
                <div className={styles.logoText}>
                    <div className={styles.logoTitle}>Charry</div>
                    <div className={styles.logoSubTitle}>annetusäpp</div>
                </div>
            </div>

            <div className={styles.social}>
                <a href="https://www.instagram.com/charry.rakendus/">
                    <img src={insta} alt="Instagram logo" className={styles.socialLogo} />
                </a>

                <a href="https://www.instagram.com/charry.rakendus/">
                    <img src={tiktok} alt="Tiktok logo" className={styles.socialLogo} />
                </a>

                <a href="https://www.instagram.com/charry.rakendus/">
                    <img src={facebook} alt="Facebook logo" className={styles.socialLogo} />
                </a>

                <a href="https://www.linkedin.com/company/charry-app/">
                    <img src={linkedin} alt="Linkedin logo" className={styles.socialLogo} />
                </a>
            </div>


        </footer>
    )
}

export default Footer