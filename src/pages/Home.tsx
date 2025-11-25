import { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"

import styles from "./Home.module.css"
import huggingBird from "../assets/birdHugging.svg"
import wavingBird from "../assets/birdWaving.svg"
import mobilePhones from "../assets/mobilePhones.svg"

import QRModal from "../components/QRModal"

function Home() {
    const [isQRModalOpen, setIsQRModalOpen] = useState(false);

    const openQRModal = () => {
        setIsQRModalOpen(true);
    }

    const closeQRModal = () => {
        setIsQRModalOpen(false);
    }

    const [userCount, setUserCount] = useState<number>(100);

    const { t } = useTranslation()

    useEffect(() => {
        fetch("https://backend-impact-203432700423.europe-west1.run.app/user/currentNumberOfUsers")
            .then(response => response.json())
            .then(data => setUserCount(data))
            .catch(() => setUserCount(100));
    }, []);

    return (
        <>
            <div className={styles.yellowContainer}>
                <div className={styles.textWithBirds}>
                    <h1 className={styles.yellowHeading}>{t("home.yellow.titleLine1")}<br /> {t("home.yellow.titleLine2")}</h1>
                    <p className={styles.yellowSubHeading}>{t("home.yellow.subLine1")}<br /> {t("home.yellow.subLine2")}<br /> {t("home.yellow.subLine3")}</p>

                    <img src={huggingBird} alt="hugging bird" className={styles.huggingBird} />
                    <img src={wavingBird} alt="waving bird" className={styles.wavingBird} />
                </div>
            </div>

            <div className={styles.mainContent}>
                <div className={styles.textSection}>
                    <div className={styles.mainTextColumn}>
                        <h1 className={styles.textHeading}>{t("home.main.titleLine1")}<br /> {t("home.main.titleLine2")}</h1>
                        <p className={styles.upperText}>{t("home.main.subLine1")}<br /> <br /> {t("home.main.subLine2")}</p>
                        <p className={styles.smallerText}>{t("home.main.smallLine1")}<br /> {t("home.main.smallLine2")}</p>
                    </div>
                    <div className={styles.buttonContainer}>
                        <h3 className={styles.buttonHeading}>{t("home.main.downloadTitle")}</h3>
                        <p className={styles.buttonText}>{t("home.main.downloadText")}</p>
                        <button className={styles.downloadButton} onClick={openQRModal}>{t("home.main.downloadButton")}</button>
                    </div>
                </div>
                <div className={styles.imageColumn}>
                    <img src={mobilePhones} alt="phone" className={styles.mobilePhone} />
                </div>
            </div>

            <div className={styles.bottomContainer}>
                <div className={styles.textContainer}>
                    <p className={styles.line1}>{t("home.bottom.usersCount", { count: userCount })}</p>
                    <p className={styles.line2}>{t("home.bottom.usersText")}</p>
                </div>
            </div>
            <QRModal isOpen={isQRModalOpen} onClose={closeQRModal} />
        </>
    )
}

export default Home