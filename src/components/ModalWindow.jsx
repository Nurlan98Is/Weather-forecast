import styles from '../css/ModalWindow.module.css';
export const ModalWindow = ({onClose, data}) => {
    const {cod, message} = data
    console.log(data,'data in modal')
    const capitalizeFirstLetter = (str) => {
        if (!str) return ''; // Проверка на пустую строку
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    return(
        <div className={styles.overlay}>
            <div className={styles.content}>
                <div className={styles.header}>
                    <h2 className={styles.title}>{cod}</h2>
                    <button className={styles.closeBtn} >&times;</button>
                </div>

                <div className={styles.body}>
                    {capitalizeFirstLetter(message)}
                </div>

                <div className={styles.footer}>
                    <button className={styles.okBtn} onClick={onClose}>OK</button>
                </div>
            </div>
        </div>
    )
}