import React from "react";
import styles from "./CharryMember.module.css"

interface CharryMemberProps {
    photo: string;
    name: string;
    title: string;
    email: string;
}

const CharryMember: React.FC<CharryMemberProps> = ({ photo, name, title, email }) => {
    return (
        <div className={styles.teamMember}>
            <img src={photo} className={styles.memberPhoto} alt={name} />
            <div className={styles.memberInfo}>
                <h3 className={styles.memberName}>{name}</h3>
                <p className={styles.memberTitle}>{title}</p>
                <p className={styles.memberEmail}>{email}</p>
            </div>
        </div>
    );
};

export default CharryMember