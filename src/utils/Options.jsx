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
	render,
	categories
}) {
	const categoriesOption = categories.map(category => (
		<option key={category.id} value={category.id}>{category.name}</option>
	))

	const chooseCategory = (
		<>
			<select className={styles['categories--select']}>
				<option value="">Choose category</option>
				{categoriesOption}
			</select>
		</>
	)

	return (
		<div className={styles['options--main']}>
			<h1>Categories</h1>
			<div className={styles['options-container']}>
				<div className={styles['select-container']}>
					{chooseCategory}
					<p>Leave empty if want to face questions from every category</p>
				</div>
				<div className={styles['radio--container']}>
					<p></p>
					<label>
						<input type="radio" name="level" id="" /> Easy
					</label>
					<label>
						<input type="radio" name="level" id="" /> Medium
					</label>
					<label>
						<input type="radio" name="level" id="" /> Hard
					</label>
				</div>
			</div>
			<div className={styles['btns--container']}>
				<Button handleClick={render} buttonText="Let's start" />
				<Button handleClick={render} buttonText="I'm feeling lucky" />
			</div>
		</div>
	)
}