import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
    return (
        <div style = {{textAlign: 'center'}} className = 'mt-5'>
            <h3 style = {{fontWeight: '700'}}>Ooops! You've hit a wrong path!
             Return <Link to='/'>home</Link>
            </h3>
        </div>
    )
}

export default Error
