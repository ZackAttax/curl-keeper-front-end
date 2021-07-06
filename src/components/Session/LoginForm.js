import React, { Component } from "react";
import { connect } from 'react-redux';
import { createSession } from "../../actions/createSession";
import { Link } from 'react-router-dom';


class LoginForm extends Component {
    state = {
        username: "",
        password: ""
    }
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
     handleSubmit = event => {
         
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
                <input type='submit'/><br/>
                <Link className='links' to='/user/new'>Sign up</Link>
            </form>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    createSession: userInfo => dispatch(createSession(userInfo))
  })

//   const msp = (state) => ({
//     user: state.user, loggedIn: state.loggedIn
// })
export default connect(null, mapDispatchToProps)(LoginForm);