import { useState, useEffect } from 'react'

import styles from './styles/App.module.css'
import './styles/global.css'

import Welcome from './utils/Welcome'
import Options from './utils/Options'
import Playground from './utils/Playground'
import { click, getApi } from './functions/functions'

function App() {
	const [renderOptions, setRenderOptions] = useState(false)
	const [renderPlayground, setRenderPlayground] = useState(false)
	// const click = (state) => state(prev => !prev)

	const [categories, setCategories] = useState([])
	const [options, setOptions] = useState({
		questionNum: 5,
		categoryId: 0,
		difficultyLevel: ''
	})
	const [questions, setQuestions] = useState([])
	
	useEffect(() => {
		// getApi('https://opentdb.com/api.php?amount=5', setQuestions, 'results')
		getApi('https://opentdb.com/api_category.php',setCategories, 'trivia_categories')
	}, [])

	useEffect(() => {
		console.log(options);
	}, [options])

	function handleChanges(event) {
		setOptions(prevOptions => ({
			...prevOptions, 
			[event.target.name]: event.target.value
		}))
	}
	
	return (
		<>
			{!renderOptions ? 
				<Welcome render={() => click(setRenderOptions)} /> : 
				null}
			{renderOptions && !renderPlayground ? 
				<Options 
					options={options} 
					handleChange={handleChanges} 
					render={() => click(setRenderPlayground)} 
					categories={categories}
				/> : 
				null}
			{renderPlayground ? <Playground /> : null}
		</>	
	)
}

export default App
