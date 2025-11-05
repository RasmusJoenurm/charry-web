import styles from "./Home.module.css"
import huggingBird from "../assets/birdHugging.svg"
import wavingBird from "../assets/birdWaving.svg"
import mobilePhones from "../assets/mobilePhones.svg"

function Home() {
    return (
        <>
            <div className={styles.yellowContainer}>
                <div className={styles.textWithBirds}>
                    <h1 className={styles.yellowHeading}>Muuda Eesti paremaks,<br />üks väike heategu korraga</h1>
                    <p className={styles.yellowSubHeading}>Charry annetusäpp on eesti kaasaegseim<br />annetusplatvorm, millega saad teha head igas<br />kohas ja igal ajal</p>

                    <img src={huggingBird} alt="hugging bird" className={styles.huggingBird} />
                    <img src={wavingBird} alt="waving bird" className={styles.wavingBird} />
                </div>
            </div>

            <div className={styles.mainContent}>
                <div className={styles.textSection}>
                    <div className={styles.mainTextColumn}>
                        <h1 className={styles.textHeading}>Annetamine on lihtne<br /> ja nauditav tegevus</h1>
                        <p className={styles.upperText}>Charryga on annetus ainult paari kliki kaugusel.<br /> <br /> Toeta Eesti usaldusväärsemaid MTÜsid, saa visuaalset tagasisidet ning teeni oma heategudega silma- ja hingekosutavaid medaleid.</p>
                        <p className={styles.smallerText}>* Annetada saab anonüümselt ja 100% annetustest<br /> läheb otse abivajajatele.</p>
                    </div>
                    <div className={styles.buttonContainer}>
                        <h3 className={styles.buttonHeading}>Laadi alla Charry annetusäpp</h3>
                        <p className={styles.buttonText}>Saadaval iOS ja Android seadmetel.</p>
                        <button className={styles.downloadButton}>Laadi alla</button>
                    </div>
                </div>
                <div className={styles.imageColumn}>
                    <img src={mobilePhones} alt="phone" className={styles.mobilePhone} />
                </div>
            </div>

            <div className={styles.bottomContainer}>
                <div className={styles.textContainer}>
                    <p className={styles.line1}>100+ annetajat</p>
                    <p className={styles.line2}>Koos loome suure mõju!</p>
                </div>
            </div>
        </>
    )
}

export default Home