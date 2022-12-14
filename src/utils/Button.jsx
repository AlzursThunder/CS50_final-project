import React from "react";
import styles from '../styles/Button.module.css'

export default function Button({
	buttonText,
	handleClick
}) {

	return (
		<>
			<button className={styles['start-btn']} onClick={handleClick}>
				{buttonText}
			</button>
		</>
	)
}