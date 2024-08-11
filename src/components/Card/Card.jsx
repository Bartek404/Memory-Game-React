import styles from '../Card/Card.module.css'

export function Card({ isFlipped, handleCardClick, cardId, cardName, children }) {
	function handleClick(e) {
		if (!isFlipped) {
			handleCardClick(e.target)
		}
	}

	return (
		<div onClick={handleClick} className={styles.card}>
			<div className={`${styles.cardInner} ${isFlipped ? styles.cardActive : ''}`}>
				<div id={cardId} name={cardName} className={styles.cardFront}></div>
				<div className={styles.cardBack}>{children}</div>
			</div>
		</div>
	)
}
