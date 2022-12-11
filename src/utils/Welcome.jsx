import React from "react";
import styles from '../styles/Welcome.module.css'
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Categories from "./Categories";

export default function Main() {

	return (
		<div className={styles.main}>
			<h1>Quiz</h1>
			<div className={styles['description--container']}>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo rerum ducimus vero animi sint tempora sed minus reiciendis architecto odio!</p>
			</div>
			
			{/* <button className={styles['start-btn']}>Start</button> */}
		</div>
	)
}