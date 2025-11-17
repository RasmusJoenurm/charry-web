import styles from "./ChallengeModal.module.css"
import examples from "../assets/challengeExamples.svg"

interface ChallengesModalProps {
    isOpen: boolean;
    onClose: () => void;
}

function ChallengeModal({ isOpen, onClose }: ChallengesModalProps) {
    if (!isOpen) return null;

    const handleOverlayClick = () => {
        onClose();
    }

    const handleContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    return (
        <div className={styles.modalOverlay} onClick={handleOverlayClick}>
            <div className={styles.modalContent} onClick={handleContentClick}>
                <img src={examples} alt="Challenge examples" className={styles.challenges} />
            </div>
        </div>
    );
}

export default ChallengeModal