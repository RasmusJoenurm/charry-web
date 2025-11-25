import { useTranslation } from "react-i18next"

import styles from "./NewPartners.module.css"
import bulletIcon from "../assets/heartBulletPoint.svg"
import rightSideImage from "../assets/newPartnersMobile.svg"
import divider from "../assets/heartDivider.svg"

function NewPartners() {

    const { t } = useTranslation();

    return (
        <>
            <div className={styles.headingContainer}>
                <h1 className={styles.headingTop}>{t("newPartners.main.title")}</h1>
            </div>
            <div className={styles.challengesMainContent}>
                <div className={styles.textMainContent}>
                    <div className={styles.introSection}>
                        <p className={styles.introText}>{t("newPartners.main.titleText1")}<br /> <br /> {t("newPartners.main.titleText2")}</p>
                    </div>
                    <div className={styles.heartDivider}>
                        <img src={divider} className={styles.heartDividerImage}></img>
                    </div>

                    <div className={styles.bulletPointContainer}>
                        <div className={styles.bulletPoint}>
                            <img src={bulletIcon} className={styles.bulletIcon} alt="" />
                            <p className={styles.bulletText}>{t("newPartners.main.bulletpoint1")}</p>
                        </div>
                        <div className={styles.bulletPoint}>
                            <img src={bulletIcon} className={styles.bulletIcon} alt="" />
                            <p className={styles.bulletText}>{t("newPartners.main.bulletpoint2")}</p>
                        </div>
                        <div className={styles.bulletPoint}>
                            <img src={bulletIcon} className={styles.bulletIcon} alt="" />
                            <div className={styles.textWrapper}>
                                <p className={styles.bulletText}>{t("newPartners.main.bulletpoint3")}</p>
                                <p className={styles.bulletTextSmall}>{t("newPartners.main.smallText")}</p>
                            </div>
                        </div>
                        <div className={styles.bulletPoint}>
                            <img src={bulletIcon} className={styles.bulletIcon} alt="" />
                            <p className={styles.bulletText}>{t("newPartners.main.bulletpoint4")}</p>
                        </div>
                    </div>
                </div>
                <img src={rightSideImage} className={styles.sideImage} alt="" />
            </div>
            <div className={styles.joinContainer}>
                <h2 className={styles.joinHeading}>{t("newPartners.join.title")}</h2>
                <div className={styles.textButtonContainer}>
                    <p className={styles.joinText}>{t("newPartners.join.titleText")}</p>
                    <a href="mailto:robert@charry.ee?subject?Contact%20Request" className={styles.contactButton}>{t("newPartners.join.buttonText")}</a>
                </div>
            </div>
        </>
    )
}

export default NewPartners