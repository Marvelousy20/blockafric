import React from 'react'
import styles from './activity.module.css'

function activity() {
    return (
        <div className = {styles.container}>
            <div className= {styles.recent}>Recent Activity</div>

            <div>
                <div className = {`mt-2 ${styles.content}`}>
                    <div><i className="fas fa-ribbon fa-2x"></i></div>
                    <div>HIV Blood Draw Text</div>
                    <div>A100</div>
                </div>

                <hr />

                <div className = {styles.content}>
                    <div><i className={`fas fa-lungs fa-2x ${styles.blue}`}></i></div>
                    <div>TB Radiology XRAY</div>
                    <div>A30</div>
                </div>

                <hr />

                <div className = {styles.content}>
                    <div><i className='fas fa-x-ray fa-2x'></i></div>
                    <div>Blood Pressure Check</div>
                    <div>A10</div>
                </div>

                <hr />

                <div className = {styles.empty}></div>
            </div>
        </div>
    )
}

export default activity
