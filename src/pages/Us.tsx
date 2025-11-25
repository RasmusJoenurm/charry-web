import { useState } from "react"
import { useTranslation } from "react-i18next"

import styles from "./Us.module.css"

import bossImage from "../assets/bossCharry.svg"
import robert from "../assets/robert.svg"
import aleksandr from "../assets/aleksandr.svg"
import johanna from "../assets/johanna.svg"

import leftArrow from "../assets/arrowLeft.svg"
import rightArrow from "../assets/arrowRight.svg"

const galleryModules = import.meta.glob("../assets/gallery/*.{png,jpg,jpeg,svg}", { eager: true });

function Us() {

    const galleryImages = Object.values(galleryModules).map((module) => (module as { default: string }).default);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1);
    }
    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1);
    }

    const { t } = useTranslation();

    return (
        <>
            <div className={styles.missionContainer}>
                <h1 className={styles.missionHeading}>Missioon</h1>
                <p className={styles.missionText}>Soovime muuta annetamise uueks ühiskondlikuks normiks. Töötame selle nimel, et teha annetamine võimalikult lihtsaks ja nauditavaks, mida soovid korrata veel ja veel. Üheskoos saame muuta Eesti eeskujuks ka heategevusvaldkonnas.</p>
            </div>
            <div className={styles.familyContainer}>
                <h2 className={styles.familyHeading}>Charry pere</h2>
                <div className={styles.textButtonContainer}>
                    <p className={styles.familyText}>Oleme avatud uuteks tutvusteks. Kui tunned, et saad Charryle väärtust lisada, võta ühendust.</p>
                    <a href="mailto:robert@charry.ee?subject?Contact%20Request" className={styles.contactButton}>Võta ühendust</a>
                </div>
            </div>
            <div className={styles.bossContainer}>
                <img src={bossImage} className={styles.bossImage} alt="" />
                <div className={styles.textContainer}>
                    <h3 className={styles.bossHeading}>Suur Boss</h3>
                    <p className={styles.bossText}>Charry on meie maskott. Nägus linnuke, kes igapäevaselt suunab ja inspireerib meid.<br /> <br />Kui te küsite, siis jah — ta on valge ronk. Mitte tibu, varblane, tuvi ega öökull.</p>
                </div>
            </div>
            <div className={styles.teamContainer}>
                <img src={robert} className={styles.rowImage} alt="" />
                <img src={aleksandr} className={styles.rowImage} alt="" />
                <img src={johanna} className={styles.rowImage} alt="" />
            </div>
            <div className={styles.findUs}>
                <h2 className={styles.findUsHeading}>Leia meid sotsiaalmeediast</h2>
                <div className={styles.textButtonsContainer}>
                    <p className={styles.findUsText}>Jälgi Charry elu ja tegemisi lähemalt meie sotsiaalmeedias.</p>
                    <div className={styles.buttonStack}>
                        <a href="https://www.instagram.com/charry.rakendus/" className={styles.socialButton}>Instagram</a>
                        <a href="https://www.tiktok.com/@charry.app/" className={styles.socialButton}>TikTok</a>
                    </div>
                </div>
            </div>
            <div className={styles.photoGallery}>
                <button className={`${styles.arrowButton} ${styles.leftArrow}`} onClick={prevImage}>
                    <img src={leftArrow} alt="previous" />
                </button>
                <img src={galleryImages[currentImageIndex]} className={styles.galleryImage} alt={`Gallery ${currentImageIndex + 1}`} />
                <button className={`${styles.arrowButton} ${styles.rightArrow}`} onClick={nextImage}>
                    <img src={rightArrow} alt="previous" />
                </button>
            </div>
        </>
    )
}

export default Us