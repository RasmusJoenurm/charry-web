import styles from "./Home.module.css"

function Home() {
    return (
        <>
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