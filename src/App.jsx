import { useState, useEffect } from 'react'

import styles from './styles/App.module.css'
import './styles/global.css'

import Welcome from './utils/Welcome'
import Categories from './utils/Categories'
import Playground from './utils/Playground'

function App() {
	
	return (
		<>
			<Welcome />
			<Categories />
			{/* <BrowserRouter>
				<Routes>
				<Route path="/" element={<Layout />}>
				<Route index element={<Welcome />}/>
				<Route path="categories" element={<Categories />} />
				</Route>
				</Routes>
			</BrowserRouter> */}
			{/* <Playground /> */}
		</>	
	)
}

export default App
