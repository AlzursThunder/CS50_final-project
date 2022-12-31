import React from "react";
import styles from '../styles/Warning.module.css'

function Warning({message}) {
    
    return (
        <>
            <div className={`alert alert-danger ${styles.message}`} role="alert">
                <img className={styles['danger-icon']} src="/danger-icon.png" alt="stop right there" />
                <div>
                    {message()}
                </div>
            </div>
        </>
    )
}

export default Warning