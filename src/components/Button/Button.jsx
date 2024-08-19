import styles from '../Button/Button.module.css'

export function Button({ onClick, children }) {
	return (
		<button onClick={onClick} className={styles.button}>
			{children}
		</button>
	)
}
