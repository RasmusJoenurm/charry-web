import { useState } from "react"
import { useTranslation } from "react-i18next";

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

    const { t } = useTranslation()
    return (
        <div className={`${styles.cardContainer} ${isReversed ? styles.reversed : ""}`}>
            <img src={card} className={styles.cardImage} alt="" />
            <div className={styles.textContent}>
                <h2 className={styles.cardHeading}>{name}</h2>
                <p className={styles.cardDescription}>{description}</p>
                <button className={styles.downloadButton} onClick={openQRModal}>{t("cards.button")}</button>
            </div>
            <QRModal isOpen={isQRModalOpen} onClose={closeQRModal} />
        </div>
    );
}

export default Card