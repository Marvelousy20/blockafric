import React from 'react'
import styles from './result.module.css'

function result() {
    return (
        <div className ={styles.container}>
            <div className= {styles.content}>
                <div className ={`mb-2 ${styles.name} ${styles.afya}`}>AFYA</div>
                <div className ={`mb-3 ${styles.amount}`}>143.00</div>
                <div className = {styles.unit}>Balance</div>
            </div>

            <div className= {styles.vertical}></div>

            <div className= {styles.content}>
                <div className = {`mb-2 ${styles.name} ${styles.zar}`}>ZAR</div>
                <div className = {`mb-3 ${styles.amount}`}>R21.00</div>
                <div className = {styles.unit}>Equivalent</div>
            </div>
        </div>
    )
}

export default result
