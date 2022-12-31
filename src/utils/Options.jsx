import React, {useState, useEffect} from "react";
import Button from "./Button";
import Warning from "./Warning";

import styles from '../styles/Options.module.css'
import { validateOptions } from "../other/functions";
import { questionsNumber } from "../other/messages";
// API links
// https://opentdb.com
// https://opentdb.com/api_category.php - list of all categories
// https://opentdb.com/api.php?amount={questions number} - for any category, difficulty
// https://opentdb.com/api.php?amount=10&category={cat id} - for specific category
// https://opentdb.com/api.php?amount=10&difficulty={diff level} - for specific diff level

export default function Options({
	render,
	categories,
	handleChange,
	options,
	luckyShot,
	// renderInvalidAlert,
	validOptions
}) {
	const categoriesOption = categories.map(category => (
		<option key={category.id} value={category.id}>{category.name}</option>
	))

	const chooseCategory = (
		<>
			<select 
				onChange={handleChange} 
				name="categoryId" 
				className={`form-select`}
				value={options.categoryId}
			>
				<option value="">Mixed categories</option>
				{categoriesOption}
			</select>
		</>
	)

	return (
		<div className={styles['options--main']}>
			<h1>Categories</h1>
			<div className={`md-3 ${styles['options--container']}`}>
				<div className={styles['num--container']}>
					<label>
						<p>Questions number (min 5, max 10)</p>
						<input
							value={options.questionNum} 
							onChange={handleChange} 
							type="number" 
							name="questionNum"
							className="form-control"
						/>
					</label>
				</div>
				<div className={styles['select--container']}>
					<p>Choose category</p>
					{chooseCategory}
				</div>
				<div className={styles['radio--container']}>
					<div className='form-check'>
						<label>
							<input
								className='form-check-input'
								onChange={handleChange} 
								type="radio" 
								name="difficultyLevel" 
								value=''
								checked={options.difficultyLevel === ''}
								/> Mixed difficulties
						</label>
					</div>
					<div className='form-check'>
						<label>
							<input 
								className='form-check-input'
								onChange={handleChange} 
								type="radio" 
								name="difficultyLevel" 
								value='easy' 
								checked={options.difficultyLevel === 'easy'}
								/> Easy
						</label>
					</div>
					<div className='form-check'>
						<label>
							<input 
								className='form-check-input'
								onChange={handleChange} 
								type="radio" 
								name="difficultyLevel" 
								value='medium' 
								checked={options.difficultyLevel === 'medium'}
								/> Medium
						</label>
					</div>
					<div className='form-check'>
						<label>
							<input 
								className='form-check-input'
								onChange={handleChange} 
								type="radio" 
								name="difficultyLevel" 
								value='hard'
								checked={options.difficultyLevel === 'hard'}
								/> Hard
						</label>
					</div>
				</div>
			</div>
			{validOptions === false && <Warning message={() => questionsNumber(5, 10)} />}
			<div className={styles['btns--container']}>
				<Button handleClick={render} buttonText="Let's start" />
				<Button handleClick={luckyShot} buttonText="I'm feeling lucky" />
			</div>
		</div>
	)
}

// return (
// 	<div className={styles['options--main']}>
// 		<h1>Categories</h1>
// 		<div className="md-3">
// 			<div className={styles['num--container']}>
// 				<label>
// 					<input 
// 						value={options.questionNum} 
// 						onChange={handleChange} 
// 						type="number" 
// 						name="questionNum"
// 						className="form-control"
// 					/>
// 					How much questions do you want (type number beetwen 5 - 10):
// 				</label>
// 			</div>
// 			<div className={styles['select--container']}>
// 				{chooseCategory}
// 				<p>Leave empty if want to face questions from every category</p>
// 			</div>
// 			<div className={styles['radio--container']}>
// 				<label>
// 					<input
// 						className='form-check-input'
// 						onChange={handleChange} 
// 						type="radio" 
// 						name="difficultyLevel" 
// 						value=''
// 						checked={options.difficultyLevel === ''}
// 						/> Mixed difficulties
// 				</label>
// 				<label>
// 					<input 
// 						className='form-check-input'
// 						onChange={handleChange} 
// 						type="radio" 
// 						name="difficultyLevel" 
// 						value='easy' 
// 						checked={options.difficultyLevel === 'easy'}
// 						/> Easy
// 				</label>
// 				<label>
// 					<input 
// 						className='form-check-input'
// 						onChange={handleChange} 
// 						type="radio" 
// 						name="difficultyLevel" 
// 						value='medium' 
// 						checked={options.difficultyLevel === 'medium'}
// 						/> Medium
// 				</label>
// 				<label>
// 					<input 
// 						className='form-check-input'
// 						onChange={handleChange} 
// 						type="radio" 
// 						name="difficultyLevel" 
// 						value='hard'
// 						checked={options.difficultyLevel === 'hard'}
// 						/> Hard
// 				</label>
// 			</div>
// 		</div>
// 		<div className={styles['options--container']}>
// 		</div>
// 		<div className={styles['btns--container']}>
// 			<Button handleClick={render} buttonText="Let's start" />
// 			<Button handleClick={luckyShot} buttonText="I'm feeling lucky" />
// 		</div>
// 	</div>
// )