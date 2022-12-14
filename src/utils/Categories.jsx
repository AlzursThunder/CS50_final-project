import React, {useState, useEffect} from "react";
import Button from "./Button";

import styles from '../styles/Categories.module.css'
// API links
// https://opentdb.com
// https://opentdb.com/api_category.php - list of all categories
// https://opentdb.com/api.php?amount={questions number} - for any category, difficulty
// https://opentdb.com/api.php?amount=10&category={cat id} - for specific category
// https://opentdb.com/api.php?amount=10&difficulty={diff level} - for specific diff level

export default function Categories() {
	const [categories, setCategories] = useState([])
	const makeYourChoice = () => {
		return (
			<div className={styles['option-container']}>

			</div>
		)
	}
	useEffect(() => {
		async function getApi(link, setState) {
			const res = await fetch(link)
			const data = await res.json()
			setState(() => data.trivia_categories)
		}
		getApi('https://opentdb.com/api_category.php',setCategories)
	}, [])

	return (
		<div className={styles['categories--main']}>
			<h1>Categories</h1>
			<div className={styles['btns--container']}>
				<Button buttonText="Let's start" />
				<Button buttonText="I'm feeling lucky" />
			</div>
		</div>
	)
}