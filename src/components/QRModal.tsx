import styles from "./QRModal.module.css"
import qrCode from "../assets/qrCode.svg"

interface QRModalProps {
    isOpen: boolean;
    onClose: () => void;
}

function QRModal({ isOpen, onClose }: QRModalProps) {
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
                <img src={qrCode} alt="QR Code" className={styles.qrCode} />
            </div>
        </div>
    );
}

export default QRModal