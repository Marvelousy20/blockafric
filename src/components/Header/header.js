import React from 'react'
import { MDBIcon } from 'mdbreact'
import styles from './header.module.css'

export default function header() {
    return (
        <div className = {styles.header}>
            <div>
                <MDBIcon icon="arrows-alt" className = {`mr-1 ${styles.ico}`} />
                <b className ={styles.logo}>ribbon</b>
            </div>
            <div className = {styles.spacer}></div>
            <div>
                <MDBIcon icon="user-circle" className = {`${styles.icon} ${styles.user}`}/>
                <MDBIcon icon="bell" className = {`ml-3 ${styles.iconbell}`}/>
            </div>    
        </div>
    )
}
