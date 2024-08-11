import { CardsBox } from '../CardsBox/CardsBox'
import styles from '../GamePanel/GamePanel.module.css'
export function GamePanel() {
	return (
		<div className={styles.panel}>
			<h1 className={styles.title}>Memory Game</h1>
			<p className={styles.description}>
				Memory is a card-matching game where players flip pairs of face-down cards to find matches. The goal is to match
				all pairs with the fewest turns.
			</p>
			<hr />
			<CardsBox />
		</div>
	)
}
