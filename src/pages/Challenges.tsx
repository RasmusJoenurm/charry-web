import { useState } from "react"
import { useTranslation } from "react-i18next"

import styles from "./Challenges.module.css"
import bulletIcon from "../assets/birdBulletPoint.svg"
import ChallengeModal from "../components/ChallengeModal"
import rightSideImage from "../assets/challengesMobile.svg"
import divider from "../assets/heartDivider.svg"

function Challenges() {
    const [isChallengeModalOpen, setIsChallengeModalOpen] = useState(false);

    const openChallengeModal = () => {
        setIsChallengeModalOpen(true);
    }

    const closeChallengeModal = () => {
        setIsChallengeModalOpen(false);
    }

    const { t } = useTranslation();

    return (
        <>
            <div className={styles.headingContainer}>
                <h1 className={styles.headingTop}>{t("challenges.main.title")}</h1>
            </div>
            <div className={styles.challengesMainContent}>
                <div className={styles.textMainContent}>
                    <div className={styles.introSection}>
                        <p className={styles.introText}>{t("challenges.main.titleText")}</p>
                    </div>
                    <div className={styles.heartDivider}>
                        <img src={divider} className={styles.heartDividerImage}></img>
                    </div>

                    <div className={styles.bulletPointContainer}>
                        <div className={styles.bulletPoint}>
                            <img src={bulletIcon} className={styles.bulletIcon} alt="" />
                            <p className={styles.bulletText}>{t("challenges.main.bulletpoint1")}</p>
                        </div>
                        <div className={styles.bulletPoint}>
                            <img src={bulletIcon} className={styles.bulletIcon} alt="" />
                            <p className={styles.bulletText}>{t("challenges.main.bulletpoint2")}</p>
                        </div>
                        <div className={styles.bulletPoint}>
                            <img src={bulletIcon} className={styles.bulletIcon} alt="" />
                            <p className={styles.bulletText}>{t("challenges.main.bulletpoint3")}</p>
                        </div>
                        <div className={styles.bulletPoint}>
                            <img src={bulletIcon} className={styles.bulletIcon} alt="" />
                            <p className={styles.bulletText}>{t("challenges.main.bulletpoint4")}</p>
                        </div>
                    </div>
                    <button className={styles.challengeButton} onClick={openChallengeModal}>{t("challenges.main.buttonText")}</button>
                </div>
                <img src={rightSideImage} className={styles.sideImage} alt="" />
            </div>
            <div className={styles.futureContainer}>
                <h2 className={styles.futureHeading}>{t("challenges.future.title")}</h2>
                <div className={styles.textButtonContainer}>
                    <p className={styles.futureText}>{t("challenges.future.titleText")}</p>
                    <a href="mailto:robert@charry.ee?subject?Contact%20Request" className={styles.contactButton}>{t("challenges.future.buttonText")}</a>
                </div>
            </div>
            <ChallengeModal isOpen={isChallengeModalOpen} onClose={closeChallengeModal} />
        </>
    )
}

export default Challenges