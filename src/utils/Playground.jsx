import React, { useEffect, useState } from "react";

import styles from '../styles/Playground.module.css'

import { nanoid } from "nanoid";
import { decode } from "he";
import { shuffleArr } from "../functions/functions";

import Button from "./Button";

export default function Playground({
	questions
}) {
	// console.log(questions);
	// const tmp = questions.map(question => {
	// 	const arr = []
	// 	arr.push(<div className={styles.answer}>{question.correct_answer}</div>)
	// 	question.incorrect_answers.map(wrong => {
	// 		arr.push(<div key={nanoid()} className={styles.answer}>{wrong}</div>)
	// 	})
	// 	return arr
	// })
	// console.log(questions);
	const [finished, setFinished] = useState(false)
	
	useEffect(() => {

	}, [finished])

	// console.log(tmp);
	const renderQuestions = questions.map(question => {
		const answers = []
		answers.push(<div key={nanoid()} className={styles.answer}>R|{decode(question.correct_answer)}</div>)
		question.incorrect_answers.map(wrong => {
			answers.push(<div key={nanoid()} className={styles.answer}>{decode(wrong)}</div>)
		})
		// console.log(answers);
		shuffleArr(answers)
		return (
		<div key={nanoid()} className={styles.question}>
			<h4>{decode(question.question)}</h4>
			<div className={styles['answers--container']}>
				{answers}
				{/* {tmp} */}
			</div>
			<hr />
		</div>
	)})

	return (
		<>
			<div className={styles['questions--container']}>
				{renderQuestions}
			</div>
			<div className={styles['btn--container']}>
				<Button 
					buttonText='Submit'
					handleClick=''
				/>
			</div>
		</>
	)
}