import { Link } from "react-router-dom";

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
        "tervis": tervisSvg,
        "loomade heaolu": loomadSvg,
        "laste heaolu": lasteSvg,
        "loodus ja keskkond": loodusSvg,
        "haridus": haridusSvg,
        "tugev ühiskond": uhiskondSvg
    };

    const getCategoryCount = (category: string) =>
        cards.filter(card => card.category === category).length;

    const scrollToCategory = (category: string) => {
        const element = document.getElementById(category);
        element?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <div className={styles.friendsContainer}>
                <h2 className={styles.friendsHeading}>Meie sõbrad</h2>
                <div className={styles.textButtonContainer}>
                    <p className={styles.friendsText}>Kui soovid, et sinu usaldusväärne ja hästi toimiv heategevusorganisatsioon oleks Charry platvormil, uuri rohkem.</p>
                    <Link to="/newPartners" className={styles.newPartnersButton}>Uued MTÜ-d</Link>
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
                {categories.map(category => {
                    const categoryCards = cards.filter(card => card.category === category);
                    return (
                        <div key={category} id={category} className={styles.categorySection}>
                            {categoryCards.map((card, index) => (
                                <Card
                                    key={card.id}
                                    name={card.name}
                                    card={card.card}
                                    description={card.description}
                                    isReversed={index % 2 !== 0}
                                />
                            ))}
                        </div>
                    );
                })}
            </div>
        </>
    )
}

export default Partners