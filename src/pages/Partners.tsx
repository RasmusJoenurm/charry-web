import { Link } from "react-router-dom";

import styles from "./Partners.module.css"

function Partners() {
    return (
        <>
            <div className={styles.friendsContainer}>
                <h2 className={styles.friendsHeading}>Meie sõbrad</h2>
                <div className={styles.textButtonContainer}>
                    <p className={styles.friendsText}>Kui soovid, et sinu usaldusväärne ja hästi toimiv heategevusorganisatsioon oleks Charry platvormil, uuri rohkem.</p>
                    <Link to="/NewPartners" className={styles.newPartnersButton}>Uued MTÜ-d</Link>
                </div>
            </div>
        </>
    )
}

export default Partners