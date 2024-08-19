import { useState, useEffect } from 'react'
import { Card } from '../Card/Card'
import { Button } from '../Button/Button'
import { CounterBox } from '../CounterBox/CounterBox'
import { Modal } from '../Modal/Modal'
import { cards as cards, shuffle } from '../../utils/cards'
import styles from '../CardsBox/CardsBox.module.css'

export function CardsBox() {
	const [firstPick, setFirstPick] = useState(null)
	const [secondPick, setSecondPick] = useState(null)
	const [flippedCards, setFlippedCards] = useState([])
	const [isThrottled, setIsThrottled] = useState(false)
	const [cardClicks, setCardClicks] = useState(0)
	const [matchedPairs, setMatchedPairs] = useState(0)
	const [stopwatchTime, setStopwatchTime] = useState(0)
	const [stopwatchIsRunning, setStopwatchIsRunning] = useState(false)
	const [isModalOpen, setIsModalOpen] = useState(false)

	const minutes = Math.floor((stopwatchTime % 360000) / 6000)
	const seconds = Math.floor((stopwatchTime % 6000) / 100)
	const milliseconds = stopwatchTime % 100

	useEffect(() => {
		let interval
		if (stopwatchIsRunning) {
			interval = setInterval(() => {
				setStopwatchTime(stopwatchTime + 1)
			}, 10)
		}
		return () => clearInterval(interval)
	}, [stopwatchIsRunning, stopwatchTime])

	useEffect(() => {
		if (flippedCards.length === 24 && matchedPairs === 12) {
			startAndStopStopwatch()
			setIsModalOpen(true)
		} // eslint-disable-next-line
	}, [flippedCards, matchedPairs])

	function startAndStopStopwatch() {
		setStopwatchIsRunning(!stopwatchIsRunning)
	}

	function resetStopwatch() {
		setStopwatchTime(0)
		setStopwatchIsRunning(false)
	}

	function handleResetButton() {
		resetPicks()
		setFlippedCards([])
		setIsThrottled(false)
		setCardClicks(0)
		setMatchedPairs(0)
		resetStopwatch()
		setIsModalOpen(false)
		shuffle(cards)
	}

	function resetPicks() {
		setFirstPick(null)
		setSecondPick(null)
	}

	function handleCardClick(card) {
		if (!stopwatchIsRunning) {
			startAndStopStopwatch()
		}

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
			if (firstPick.name.value === card.attributes.name.value) {
				setMatchedPairs(matchedPairs + 1)
				resetPicks()
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

	return (
		<>
			<div className={styles.infoBox}>
				<CounterBox title='Clicks:'>{cardClicks}</CounterBox>
				<CounterBox title='Time:' flexStart={true}>
					{minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}:
					{milliseconds.toString().padStart(2, '0')}
				</CounterBox>
				<CounterBox title='Pairs:'>{matchedPairs}</CounterBox>
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
			<Button onClick={handleResetButton}>Reset</Button>
			<Modal isModalOpen={isModalOpen}></Modal>
		</>
	)
}
