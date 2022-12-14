import React from "react";
import styles from '../styles/Button.module.css'

export default function Button({
	buttonText
}) {

	return (
		<>
			<button className={styles['start-btn']}>
				{buttonText}
			</button>
		</>
	)
}