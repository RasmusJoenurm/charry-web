import { Link } from "react-router-dom";

import styles from "./Partners.module.css"
import { cards } from "../data/cards"
import Card from "../components/Card"

function Partners() {
    return (
        <>
            <div className={styles.friendsContainer}>
                <h2 className={styles.friendsHeading}>Meie sõbrad</h2>
                <div className={styles.textButtonContainer}>
                    <p className={styles.friendsText}>Kui soovid, et sinu usaldusväärne ja hästi toimiv heategevusorganisatsioon oleks Charry platvormil, uuri rohkem.</p>
                    <Link to="/newPartners" className={styles.newPartnersButton}>Uued MTÜ-d</Link>
                </div>
            </div>
            <div className={styles.cardsContainer}>
                {cards.map((card, index) => (
                    <Card
                        key={card.id}
                        name={card.name}
                        card={card.card}
                        description={card.description}
                        isReversed={index % 2 !== 0}
                    />
                ))}
            </div>
        </>
    )
}

export default Partners