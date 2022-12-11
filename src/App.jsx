import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import styles from './styles/App.module.css'
import './styles/global.css'

import Welcome from './utils/Welcome'
import Categories from './utils/Categories'
import Playground from './utils/Playground'
import Layout from './utils/Layout';
function App() {

return (
	<>
		{/* <Welcome /> */}
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Welcome />}/>
					<Route path="categories" element={<Categories />} />
				</Route>
			</Routes>
		</BrowserRouter>
		{/* <Categories /> */}
	</>
)
}

export default App
