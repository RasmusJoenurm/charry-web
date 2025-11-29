import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"
import { useState, useEffect } from "react";

import styles from "./Partners.module.css"
import { cards, categories } from "../data/cards"
import Card from "../components/Card"

import tervisSvg from "../assets/filterHealth.svg"
import loomadSvg from "../assets/filterAnimals.svg"
import lasteSvg from "../assets/filterChildren.svg"
import loodusSvg from "../assets/filterNature.svg"
import haridusSvg from "../assets/filterEducation.svg"
import uhiskondSvg from "../assets/filterSociety.svg"

import tervisSvgMobile from "../assets/filterHealthMobile.svg"
import loomadSvgMobile from "../assets/filterAnimalsMobile.svg"
import lasteSvgMobile from "../assets/filterChildrenMobile.svg"
import loodusSvgMobile from "../assets/filterNatureMobile.svg"
import haridusSvgMobile from "../assets/filterEducationMobile.svg"
import uhiskondSvgMobile from "../assets/filterSocietyMobile.svg"

const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(window.innerWidth <= 480);
        const handleResize = () => setIsMobile(window.innerWidth <= 480);
        window.addEventListener("resize", handleResize);

        return () =>
            window.removeEventListener("resize", handleResize);
    }, []);
    return isMobile;
}

function Partners() {

    const isMobile = useIsMobile();

    const categoryIcons: Record<string, string> = {
        "Tervis": isMobile ? tervisSvgMobile : tervisSvg,
        "Loomade heaolu": isMobile ? loomadSvgMobile : loomadSvg,
        "Laste heaolu": isMobile ? lasteSvgMobile : lasteSvg,
        "Loodus ja keskkond": isMobile ? loodusSvgMobile : loodusSvg,
        "Haridus": isMobile ? haridusSvgMobile : haridusSvg,
        "Tugev ühiskond": isMobile ? uhiskondSvgMobile : uhiskondSvg
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
            <div className={styles.mainContent}>
                <div className={styles.friendsContainer}>
                    <h2 className={styles.friendsHeading}>{t("partners.friends.title")}</h2>
                    <div className={styles.textButtonContainer}>
                        <p className={styles.friendsText}>{t("partners.friends.titleText")}</p>
                        <Link to="/newPartners" className={styles.newPartnersButton}>{t("partners.friends.buttonText")}</Link>
                    </div>
                </div>
                <div className={styles.filterSection}>
                    <p className={styles.filterHeading}>{t("partners.filterLabel")}</p>
                    <div className={styles.filterGrid}>
                        {categories.map((category) => (
                            <div
                                key={category}
                                className={styles.filterButton}
                                style={{ backgroundImage: `url(${categoryIcons[category]})` }}
                                onClick={() => scrollToCategory(category)}
                            >
                                <span className={styles.filterText}>
                                    {t(`categories.${category}`)} ({getCategoryCount(category)})
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
            </div>
        </>
    )
}

export default Partners