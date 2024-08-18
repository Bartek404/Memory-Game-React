import styles from '../CounterBox/CounterBox.module.css'
export function CounterBox({ title, children, flexStart }) {
	return (
		<div className={`${styles.counterBox} ${flexStart ? `${styles.flexStart}` : ''} `}>
			<div>{title}</div>
			<div>{children}</div>
		</div>
	)
}
