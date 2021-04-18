import React from 'react'
import styles from './choice.module.css'

function Choice() {
    const [state, setState] = React.useState({
        value: 0.00000001
    })

    const getValue = (e) => {
        const value = e.target.value

        setState({value: value})
    }

    return (
        <div className = 'mt-4'>
            <div className = {styles.currency}>Select Currency: </div>

            <div className = {styles.content}>
                <div className = {styles.dropdown}>
                    {/* <select className = {styles.select} name="currency" id="currency">
                        <option value="ayfa">AFYA</option>
                        <option value="zar">ZAR</option>
                    </select> */}
                    <select className = {styles.select} name="currency" id="currency" onClick = {getValue}>
                        <option value="0.00000001">AFYA</option>
                        <option value="0.00000002">ZAR</option>
                    </select>
                    {/* <input value = '0.00000001' disabled/> */}
                    <input value = {state.value} />
                </div>

                <div className = {styles.container}>
                    <div>
                        <button>SEND</button>
                    </div>

                    <div>
                        <button>RECEIVE</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Choice
