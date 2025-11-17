import styles from "./NewPartners.module.css"
import bulletIcon from "../assets/heartBulletPoint.svg"
import rightSideImage from "../assets/newPartnersMobile.svg"
import divider from "../assets/heartDivider.svg"

function NewPartners() {
    return (
        <>
            <div className={styles.headingContainer}>
                <h1 className={styles.headingTop}>Ettevõtete väljakutsed</h1>
            </div>
            <div className={styles.challengesMainContent}>
                <div className={styles.textMainContent}>
                    <div className={styles.introSection}>
                        <p className={styles.introText}>Annetajate usaldus on meie peamine prioriteet. Seetõttu veendume enne platvormile lisamist, et heategevusorganisatsioon on usaldusväärne ja tõhusalt toimiv. <br /> <br /> Meie jaoks on olulised nii korras olevad dokumendid kui ka säravad silmad ja siiras soov ühiskonda aidata.</p>
                    </div>
                    <div className={styles.heartDivider}>
                        <img src={divider} className={styles.heartDividerImage}></img>
                    </div>

                    <div className={styles.bulletPointContainer}>
                        <div className={styles.bulletPoint}>
                            <img src={bulletIcon} className={styles.bulletIcon} alt="" />
                            <p className={styles.bulletText}>Charry meeskond tagab, et kõik platvormiga seotud protsessid oleksid heategevusorganisatsiooni jaoks võimalikult mugavad ja sujuvalt toimivad.</p>
                        </div>
                        <div className={styles.bulletPoint}>
                            <img src={bulletIcon} className={styles.bulletIcon} alt="" />
                            <p className={styles.bulletText}>Kõik platvormil tehtud annetused suunatakse koheselt otse heategevusorganisatsioonidele.</p>
                        </div>
                        <div className={styles.bulletPoint}>
                            <img src={bulletIcon} className={styles.bulletIcon} alt="" />
                            <div className={styles.textWrapper}>
                                <p className={styles.bulletText}>Charry platvormil saavad heategevusorganisatsioonid mugavalt jagada oma annetajatele (visuaalset) tagasisidet. </p>
                                <p className={styles.bulletTextSmall}>* Charry meeskond on alati valmis aitama tagasiside sisu loomisel, näiteks fotode ja videote tegemisel.</p>
                            </div>
                        </div>
                        <div className={styles.bulletPoint}>
                            <img src={bulletIcon} className={styles.bulletIcon} alt="" />
                            <p className={styles.bulletText}>Platvormiga liitumiseks peab heategevusorganisatsioon olema kantud tulumaksusoodustusega ühingute nimekirja.</p>
                        </div>
                    </div>
                </div>
                <img src={rightSideImage} className={styles.sideImage} alt="" />
            </div>
            <div className={styles.joinContainer}>
                <h2 className={styles.joinHeading}>Ole üks meie MTÜ-dest</h2>
                <div className={styles.textButtonContainer}>
                    <p className={styles.joinText}>Järgnevate sammude arutamiseks võta meiega ühendust.</p>
                    <a href="mailto:robert@charry.ee?subject?Contact%20Request" className={styles.contactButton}>Võta ühendust</a>
                </div>
            </div>
        </>
    )
}

export default NewPartners