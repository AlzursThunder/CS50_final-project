import React from "react";
import styles from '../styles/Welcome.module.css'
import Button from "./Button";

export default function Welcome({
	render
}) {

	return (
		<div className={styles['welcome--main']}>
			<h1>Quiz</h1>
			<div className={styles['description--container']}>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo rerum ducimus vero animi sint tempora sed minus reiciendis architecto odio!</p>
			</div>
			<div className={styles['btn-container']}>
				<Button 
					buttonText='Start' 
					handleClick={render}
				/>
			</div>
		</div>
	)
}