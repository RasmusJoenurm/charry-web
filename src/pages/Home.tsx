import styles from "./Home.module.css"
import huggingBird from "../assets/birdHugging.svg"
import wavingBird from "../assets/birdWaving.svg"

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

            <div style={{ height: '300vh', padding: '2rem' }}>
                <h1 style={{ color: 'white' }}>Welcome to Charry</h1>
                <p style={{ color: 'white' }}>This pushes content down...</p>
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