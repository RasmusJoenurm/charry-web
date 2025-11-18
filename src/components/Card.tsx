import { useState } from "react"

import styles from "./Card.module.css"
import QRModal from "./QRModal";

interface CardProps {
    name: string;
    card: string;
    description: string;
    isReversed: boolean;
}

function Card({ name, card, description, isReversed }: CardProps) {
    const [isQRModalOpen, setIsQRModalOpen] = useState(false);

    const openQRModal = () => {
        setIsQRModalOpen(true);
    }

    const closeQRModal = () => {
        setIsQRModalOpen(false);
    }
    return (
        <div className={`${styles.cardContainer} ${isReversed ? styles.reversed : ""}`}>
            <img src={card} className={styles.cardImage} alt="" />
            <div className={styles.textContent}>
                <h2 className={styles.cardHeading}>{name}</h2>
                <p className={styles.cardDescription}>{description}</p>
                <button className={styles.downloadButton} onClick={openQRModal}>Toeta</button>
            </div>
            <QRModal isOpen={isQRModalOpen} onClose={closeQRModal} />
        </div>
    );
}

export default Card