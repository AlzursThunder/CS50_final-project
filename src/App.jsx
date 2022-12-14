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

	return (
		<>
			{!renderOptions ? <Welcome render={() => click(setRenderOptions)} /> : null}
			{renderOptions && !renderPlayground ? <Options render={() => click(setRenderPlayground)} /> : null}
			{renderPlayground ? <Playground /> : null}
		</>	
	)
}

export default App
