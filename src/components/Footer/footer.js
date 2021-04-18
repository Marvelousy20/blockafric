import React from 'react'
import styles from './footer.module.css'
import { MDBIcon } from 'mdbreact'
import { Link }from 'react-router-dom'
import { FooterItems } from './store'

function Footer() {
    const [state, setState] = React.useState({
        activeIndex: 0
    })

    const handleClick = index => {
        setState(() => {
            return {
                activeIndex: index
            }
        })
    }

    // Default styling of nav items
    const normalStyle = {
        color: '#FDA5B1'
    }

    // Styling for the active nav item
    const activeStyle = {
        color: '#FA314A',
        fontSize: '10px'
    }

    const { activeIndex } = state

    return (
        <div className = {styles.container}> 
           {FooterItems.map((item, index) => {
            const appliedStyle = activeIndex === index ? activeStyle : normalStyle
                return (
                    <div key = {index} className = {styles.content}>
                        {/* <Link to = {item.route} className = {styles.link} onClick = {() => handleClick(index)}> */}
                        <Link to = {item.route} style = {appliedStyle}  onClick = {() => handleClick(index)}>
                            <MDBIcon icon = {item.icon} className = {styles.icon} />
                            <div className = {`mt-1 ${styles.title}`}>{item.title}</div>
                        </Link>
                    </div>
                )
           })}            
        </div>
    )
}

export default Footer
