import React from 'react'
import Result from '../Result/result'
import Choice from '../Choice/choice'
import Activity from '../Activities/activity'
import styles from './Css/pages.module.css'

function Home() {
    return (
        <div className = {styles.container}>
            <Result />
            <Choice />
            <Activity />
        </div>
    )
}

export default Home
