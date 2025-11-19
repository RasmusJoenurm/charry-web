import styles from "./Us.module.css"
import bossImage from "../assets/bossCharry.svg"

function Us() {
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
        </>
    )
}

export default Us