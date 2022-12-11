import React from "react";
import { Outlet, Link } from "react-router-dom";
import styles from '../styles/Layout.module.css'

export default function Layout() {

	return (
		<>
				
					<div className={styles['btn-container']}>
						<button className={styles['start-btn']}>
							<Link to='/categories'>Start</Link>
						</button>
					</div>
				
				<Outlet />
		</>
	)
}