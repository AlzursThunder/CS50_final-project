import React, {useState, useEffect} from "react";
import Button from "./Button";

import styles from '../styles/Options.module.css'
// API links
// https://opentdb.com
// https://opentdb.com/api_category.php - list of all categories
// https://opentdb.com/api.php?amount={questions number} - for any category, difficulty
// https://opentdb.com/api.php?amount=10&category={cat id} - for specific category
// https://opentdb.com/api.php?amount=10&difficulty={diff level} - for specific diff level

export default function Options({
	render
}) {
	const [categories, setCategories] = useState([])
	const [] = useState({
		questionNum: 5,
		categoryId: 0,
		difficultyLevel: ''
	})
	const categoriesOption = categories.map(category => {return (
		<option key={category.id} value={category.id}>{category.name}</option>
	)})
	// console.log(categoriesOption);
	const makeYourChoice = (
		<select className={styles['categories--select']}>
			<option value="">Choose category</option>
			{categoriesOption}
		</select>
	)
	// console.log(makeYourChoice);
	useEffect(() => {
		async function getApi(link, setState, text) {
			const res = await fetch(link)
			const data = await res.json()
			setState(() => data[text])
		}
		getApi('https://opentdb.com/api_category.php',setCategories, 'trivia_categories')
		// categories ? setCategories(categories.trivia_categories) : null
	}, [])

	return (
		<div className={styles['options--main']}>
			<h1>Categories</h1>
			<div className={styles.options}>
				{makeYourChoice}
			</div>
			<div className={styles['btns--container']}>
				<Button handleClick={render} buttonText="Let's start" />
				<Button handleClick={render} buttonText="I'm feeling lucky" />
			</div>
		</div>
	)
}