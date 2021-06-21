import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Welcome extends Component {

    render() {
        return (
            <div>
                <Link className='links' to='/user/new'>Sign up</Link><br/>
                
                <Link className='links' to='/login'>Login</Link>
            </div>
        )
    }
}
export default Welcome