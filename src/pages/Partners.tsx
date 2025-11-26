import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"

import styles from "./Partners.module.css"
import { cards, categories } from "../data/cards"
import Card from "../components/Card"

import tervisSvg from "../assets/filterHealth.svg"
import loomadSvg from "../assets/filterAnimals.svg"
import lasteSvg from "../assets/filterChildren.svg"
import loodusSvg from "../assets/filterNature.svg"
import haridusSvg from "../assets/filterEducation.svg"
import uhiskondSvg from "../assets/filterSociety.svg"

function Partners() {

    const categoryIcons: Record<string, string> = {
        "Tervis": tervisSvg,
        "Loomade heaolu": loomadSvg,
        "Laste heaolu": lasteSvg,
        "Loodus ja keskkond": loodusSvg,
        "Haridus": haridusSvg,
        "Tugev ühiskond": uhiskondSvg
    };

    const getCategoryCount = (category: string) =>
        cards.filter(card => card.category === category).length;

    const scrollToCategory = (category: string) => {
        const element = document.getElementById(category);
        element?.scrollIntoView({ behavior: "smooth" });
    };

    const { t } = useTranslation();

    return (
        <>
            <div className={styles.friendsContainer}>
                <h2 className={styles.friendsHeading}>{t("partners.friends.title")}</h2>
                <div className={styles.textButtonContainer}>
                    <p className={styles.friendsText}>{t("partners.friends.titleText")}</p>
                    <Link to="/newPartners" className={styles.newPartnersButton}>{t("partners.friends.buttonText")}</Link>
                </div>
            </div>
            <div className={styles.filterSection}>
                <p className={styles.filterHeading}>Vali filter</p>
                <div className={styles.filterGrid}>
                    {categories.map((category) => (
                        <div
                            key={category}
                            className={styles.filterButton}
                            style={{ backgroundImage: `url(${categoryIcons[category]})` }}
                            onClick={() => scrollToCategory(category)}
                        >
                            <span className={styles.filterText}>
                                {category} ({getCategoryCount(category)})
                            </span>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.cardsContainer}>
                {(() => {
                    let globalIndex = 0;
                    return categories.map(category => {
                        const categoryCards = cards.filter(card => card.category === category);
                        return (
                            <div key={category} id={category}>
                                {categoryCards.map((card) => {
                                    const currentIndex = globalIndex++;
                                    return (
                                        <Card
                                            key={card.id}
                                            name={t(card.name)}
                                            card={card.card}
                                            description={t(card.description)}
                                            isReversed={currentIndex % 2 !== 0}
                                        />
                                    );
                                })}
                            </div>
                        );
                    });
                })()}
            </div>
        </>
    )
}

export default Partners