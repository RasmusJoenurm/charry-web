import styles from "./NewPartners.module.css"

function NewPartners() {
    return (
        <>
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