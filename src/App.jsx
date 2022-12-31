import { useState, useEffect } from 'react'

import './styles/global.css'

import Welcome from './utils/Welcome'
import Options from './utils/Options'
import Playground from './utils/Playground'

import {
	click, 
	getApi, 
	randNum, 
	handleChanges,
	validateOptions
} from './other/functions'

function App() {
	const [renderOptions, setRenderOptions] = useState(false)
	const [renderPlayground, setRenderPlayground] = useState(false)
	const [validOptions, setValidOptions] = useState('')

	const [categories, setCategories] = useState([])
	const [options, setOptions] = useState({
		questionNum: '',
		categoryId: '',
		difficultyLevel: ''
	})
	const [questions, setQuestions] = useState([])
	
	useEffect(() => {
		getApi('https://opentdb.com/api_category.php',setCategories, 'trivia_categories')
	}, [])
	
	useEffect(() => {
		const link = `https://opentdb.com/api.php?amount=${options.questionNum}&category=${options.categoryId}&difficulty=${options.difficultyLevel}`
		getApi(link, setQuestions, 'results')
	}, [options])
	
	// useEffect(() => {
	// 	luck()
	// 	const link = `https://opentdb.com/api.php?amount=${randomOptions.questionNum}&category=${randomOptions.categoryId}&difficulty=${randomOptions.difficultyLevel}`
	// 	getApi(link, setRandomQuestions, 'results')
	// }, [questions])

	function luck() {
		setOptions(() => {
			const tmp = ['', 'easy', 'medium', 'hard']
			const category = randNum(0, (categories.length + 1))
			const difficulty = tmp[randNum(0,4)]
			return {
				questionNum: randNum(5, 11),
				categoryId: category === categories.length ? '' : categories[category].id,
				difficultyLevel: difficulty
			}
		})
	}

	return (
		<>
			{!renderOptions ? 
				<Welcome render={() => click(setRenderOptions)} /> : 
				null
			}
			{renderOptions && !renderPlayground ? 
				<Options
					options={options} 
					handleChange={event => handleChanges(event, setOptions)} 
					render={() => {
						validateOptions(5, 10, options.questionNum, setValidOptions, () => click(setRenderPlayground))
					}}
					luckyShot={() => {
						luck()
						setValidOptions(true)
						click(setRenderPlayground)
					}}
					categories={categories}
					validOptions={validOptions}
				/> : 
				null
			}
			{renderPlayground && validOptions === true && 
				<Playground 
					questions={questions} 
					showOptions={() => {
						setOptions({
							questionNum: '',
							categoryId: '',
							difficultyLevel: ''
						})
						
						click(setRenderPlayground)
					}}
				/> 
			}
		</>	
	)
}

export default App
