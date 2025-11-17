import { useState } from "react"

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
    return (
        <>
            <div className={styles.headingContainer}>
                <h1 className={styles.headingTop}>Ettevõtete väljakutsed</h1>
            </div>
            <div className={styles.challengesMainContent}>
                <div className={styles.textMainContent}>
                    <div className={styles.introSection}>
                        <p className={styles.introText}>Kutsume kõiki ettevõtteid kaasa lööma Eesti heategevuskultuuri arendamisel ning esitama Charry anneteajatele heategevusliku väljakutse.</p>
                    </div>
                    <div className={styles.heartDivider}>
                        <img src={divider} className={styles.heartDividerImage}></img>
                    </div>

                    <div className={styles.bulletPointContainer}>
                        <div className={styles.bulletPoint}>
                            <img src={bulletIcon} className={styles.bulletIcon} alt="" />
                            <p className={styles.bulletText}>Väljakutse täitmise eest premeerib ettevõte annetajad oma toodete või teenustega</p>
                        </div>
                        <div className={styles.bulletPoint}>
                            <img src={bulletIcon} className={styles.bulletIcon} alt="" />
                            <p className={styles.bulletText}>Väljakutse esitamine on suurepärane viis näidata oma sotsiaalset vastutust ja pälvida tähelepanu oma ettevõtte tegevustele.</p>
                        </div>
                        <div className={styles.bulletPoint}>
                            <img src={bulletIcon} className={styles.bulletIcon} alt="" />
                            <p className={styles.bulletText}>Väljakutse eesmärk on innustada inimesi annetama.</p>
                        </div>
                        <div className={styles.bulletPoint}>
                            <img src={bulletIcon} className={styles.bulletIcon} alt="" />
                            <p className={styles.bulletText}>Charry meeskond tagab, et auhindade lunastamine on aus ja turvaline.</p>
                        </div>
                    </div>
                    <button className={styles.challengeButton} onClick={openChallengeModal}>Väljakutse näide</button>

                </div>
                <img src={rightSideImage} className={styles.sideImage} alt="" />
            </div>
            <ChallengeModal isOpen={isChallengeModalOpen} onClose={closeChallengeModal} />
        </>
    )
}

export default Challenges