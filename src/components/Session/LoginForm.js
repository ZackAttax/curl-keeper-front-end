import React, { Component } from "react";
import { connect } from 'react-redux'
import { createSession } from "../../actions/createSession";


class LoginForm extends Component {
    state = {
        username: "",
        password: "",
    }
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
     handleSubmit = event => {
         console.log(event)
         event.preventDefault()
         this.props.createSession(this.state)
     }

     render() {
        return (
            <form className='LoginForm' onSubmit={this.handleSubmit}>

                <h1>Login</h1>
                <label>Username</label>
                <input name='username' id="username"
                placeholder='Username'
                value={this.state.username}
                onChange={this.handleChange}
                required/><br/>

                <label>Password</label>
                <input
                type='password'
                name='password' id='password'
                placeholder='Password'
                value={this.state.password}
                onChange={this.handleChange}
                required/><br/>
                <input type='submit'/>
            </form>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    createSession: userInfo => dispatch(createSession(userInfo))
  })
export default connect(null, mapDispatchToProps)(LoginForm);