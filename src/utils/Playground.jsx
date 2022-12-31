import React, { useEffect, useState } from "react";

import styles from '../styles/Playground.module.css'

import { nanoid } from "nanoid";
import { decode } from "he";
import { shuffleArr } from "../other/functions";
import { allAnswers } from "../other/messages";

import Button from "./Button";
import Warning from "./Warning";

export default function Playground({
	questions,
	showOptions
}) {
	const [choosenAnswers, setChoosenAnswers] = useState([])

	const [finished, setFinished] = useState('')
	const [points, setPoints] = useState(() => ({
		answered: 0,
		correct: 0,
		overall: 0
	}))
	
	const endGame = () => setFinished(points.answered === points.overall ? true : false)
	
	
	const [renderQuestions, setRenderQuestions] = useState('')
	
	useEffect(() => {
		setRenderQuestions(() => {
			let divId = 0  // it's used to add id to question elements so it's easier to check if answer is correct
			return questions.map(question => {
				let answerId = 0
				const answers = []
				answers.push(<div key={nanoid()} id={answerId++} onClick={makeYourChoice} className={styles.answer}>{decode(question.correct_answer)}</div>)
				question.incorrect_answers.map(wrong => {
					answers.push(<div key={nanoid()} id={answerId++} onClick={makeYourChoice} className={styles.answer}>{decode(wrong)}</div>)
				})
				shuffleArr(answers)
				return (
					<div key={nanoid()} id={divId++} className={styles.question}>
						<h4>{decode(question.question)}</h4>
						<div className={styles['answers--container']}>
							{answers}
						</div>
						<hr />
					</div>
				)
			})
		})

		setPoints(prevPoints => ({
			...prevPoints,
			overall: (questions.length)
		}))
	}, [questions])

	function makeYourChoice(event) {
		if (!finished) {
			
			const currentContainerId = event.target.parentElement.parentElement.id
			const choosenOne = event.target
			const correctAnswer = questions[currentContainerId].correct_answer
			// DONE
			setChoosenAnswers(prevAnswers => {
				let tmp = {
					answer: (choosenOne.textContent),
					isCorrect: (choosenOne.textContent) === correctAnswer ? true : false,
					answerId: (choosenOne.id)
				}
				prevAnswers[currentContainerId] = tmp
				return prevAnswers
			})
			// DONE
			setPoints(prevPoints => {
				return {
					...prevPoints,
					answered: choosenAnswers.filter(() => true).length,
					correct: choosenAnswers.filter(tmp => {
						return tmp.isCorrect
					}).length
				}
			})
			// DONE
			choosenOne.parentElement.childNodes.forEach(child => {
				if (choosenOne.id === child.id) {
					child.classList.add(styles['higlighted-answer'])
				} else {
					child.classList.remove(styles['higlighted-answer'])
				}
			})
		}
		return 1
	}

	function stylingTime() {
		const questionBlocks = document.getElementsByClassName(styles.question)
		const questionBlocksValues = Object.values(questionBlocks)

		questionBlocksValues.forEach(block => {
			const answerId = choosenAnswers[block.id].answerId
			const answersBlock = block.childNodes[1].childNodes
			const answersBlockValues = Object.values(answersBlock)

			answersBlockValues.forEach(answer => {
				if (answer.textContent === decode(questions[block.id].correct_answer)) {
					answer.classList.add(styles['correct-answer'])
				} 
				if (answer.id === answerId) {
					const correctClass = !choosenAnswers[block.id].isCorrect ? styles['incorrect-answer'] : null
					answer.classList.add(correctClass)
				}
			})
		})
	}
	
	return (
		<>
			<div className={styles['questions--container']}>
				{renderQuestions}
			</div>
			{finished === false ? <Warning message={allAnswers} /> : null}
			{finished && <h1>Your score: {points.correct} / {points.overall}</h1>}
			<div className={styles['btn--container']}>
				{!finished ? 
				<Button 
					buttonText='Check'
					handleClick={() => {
						endGame()
					}}
				/> : stylingTime()}
				{finished &&
					<Button
						buttonText='Play again'
						handleClick={() => {
							showOptions()
							setFinished('')
						}}
					/>
				}
			</div>
		</>
	)
}