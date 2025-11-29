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
                <h1 className={styles.missionHeading}>{t("us.mission.title")}</h1>
                <p className={styles.missionText}>{t("us.mission.titleText")}</p>
            </div>
            <div className={styles.familyContainer}>
                <h2 className={styles.familyHeading}>{t("us.family.title")}</h2>
                <div className={styles.textButtonContainer}>
                    <p className={styles.familyText}>{t("us.family.titleText")}</p>
                    <a href="mailto:robert@charry.ee?subject?Contact%20Request" className={styles.contactButton}>{t("us.family.buttonText")}</a>
                </div>
            </div>
            <div className={styles.bossContainer}>
                <h3 className={styles.bossHeadingMobile}>{t("us.boss.title")}</h3>
                <img src={bossImage} className={styles.bossImage} alt="" />
                <div className={styles.textContainer}>
                    <h3 className={styles.bossHeading}>{t("us.boss.title")}</h3>
                    <p className={styles.bossText}>{t("us.boss.titleText1")}<br /> <br />{t("us.boss.titleText2")}</p>
                </div>
            </div>
            <div className={styles.teamContainer}>
                <img src={robert} className={styles.rowImage} alt="" />
                <img src={aleksandr} className={styles.rowImage} alt="" />
                <img src={johanna} className={styles.rowImage} alt="" />
            </div>
            <div className={styles.findUs}>
                <h2 className={styles.findUsHeading}>{t("us.social.title")}</h2>
                <div className={styles.textButtonsContainer}>
                    <p className={styles.findUsText}>{t("us.social.titleText")}</p>
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