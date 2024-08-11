import { useState } from 'react'
import { Card } from '../Card/Card'
import { cards } from '../../utils/cards'
import styles from '../CardsBox/CardsBox.module.css'

// Poprawic reset, aby po resecie karty zostawaly na nowo wyrenderowane

export function CardsBox() {
	const [firstPick, setFirstPick] = useState(null)
	const [secondPick, setSecondPick] = useState(null)
	const [flippedCards, setFlippedCards] = useState([])
	const [isThrottled, setIsThrottled] = useState(false)

	const [cardClicks, setCardClicks] = useState(0)
	const [matchedPairs, setMatchedPairs] = useState(0)

	function handleCardClick(card) {
		setCardClicks(cardClicks + 1)

		if (isThrottled || flippedCards.includes(parseFloat(card.attributes.id.value))) {
			return
		}

		setFlippedCards(prev => [...prev, parseFloat(card.attributes.id.value)])

		if (firstPick === null) {
			setFirstPick(card.attributes)
		} else if (secondPick === null) {
			setSecondPick(card.attributes)

			setIsThrottled(true)
			// Porównujemy karty po obu kliknięciach, poprawic obsluge
			if (firstPick.name.value === card.attributes.name.value) {
				setMatchedPairs(matchedPairs + 1)
				resetPicks() // Jeśli karty są takie same, resetujemy stany (ale karty zostają odsłonięte)
				setIsThrottled(false)
			} else {
				setTimeout(() => {
					setFlippedCards(prev => prev.filter(id => id != firstPick.id.value && id != card.attributes.id.value))
					resetPicks()
					setIsThrottled(false)
				}, 750)
			}
		}
	}

	function resetPicks() {
		setFirstPick(null)
		setSecondPick(null)
	}

	return (
		<>
			<div className={styles.infoBox}>
				{/* <div>Time: mm:ss</div> */}
				<div>Clicks: {cardClicks}</div>
				<div>Matched pairs: {matchedPairs}</div>
			</div>
			<div className={styles.cardsBox}>
				{cards.map(card => (
					<Card
						isFlipped={flippedCards.includes(card.id)}
						handleCardClick={e => handleCardClick(e)}
						cardId={card.id}
						cardName={card.name}
						key={card.id}>
						{card.icon}
					</Card>
				))}
			</div>
		</>
	)
}
