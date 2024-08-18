import styles from '../Modal/Modal.module.css'
export function Modal({ isModalOpen }) {
	return isModalOpen ? (
		<div className={`${styles.modalBody} ${styles.fireworks}`}>
			<div className={styles.before}></div>
			<div className={styles.after}></div>
			<p className={styles.modalTitle}>You did it!</p>
			<p className={styles.modalText}>You are a memory master!</p>
		</div>
	) : null
}
