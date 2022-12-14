import { useState, useEffect } from 'react'

import styles from './styles/App.module.css'
import './styles/global.css'

import Welcome from './utils/Welcome'
import Options from './utils/Options'
import Playground from './utils/Playground'

function App() {
	const [renderOptions, setRenderOptions] = useState(false)
	const [renderPlayground, setRenderPlayground] = useState(false)
	const click = (state) => state(prev => !prev)

	const [categories, setCategories] = useState([])
	const [options, setoptions] = useState({
		questionNum: 5,
		categoryId: 0,
		difficultyLevel: ''
	})

	useEffect(() => {
		async function getApi(link, setState, text) {
			const res = await fetch(link)
			const data = await res.json()
			setState(() => data[text])
		}
		getApi('https://opentdb.com/api_category.php',setCategories, 'trivia_categories')
	}, [])
	return (
		<>
			{!renderOptions ? <Welcome render={() => click(setRenderOptions)} /> : null}
			{renderOptions && !renderPlayground ? <Options render={() => click(setRenderPlayground)} categories={categories} /> : null}
			{renderPlayground ? <Playground /> : null}
		</>	
	)
}

export default App
