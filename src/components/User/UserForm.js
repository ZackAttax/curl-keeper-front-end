import React, { Component } from 'react';
//import { connect } from 'react-redux';
// import { fetch } from '.../src/actions/fetchNewUser';

class UserForm extends Component {
    state = {
        username: "",
        password: "",
        curl_pattern: "",
        curl_type: "",
        porosity: "",
        density: "",
        width: ""
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
     handleSubmit = event => {
         console.log(event)
    //     event.preventDefault()
    //     this.props.fetchNewUser(this.state)
     }

    render() {
        return (
            <form className='UserForm' onSubmit={this.handleSubmit}>

                <h1>Sign up</h1>
                <label>Username</label>
                <input name='username'
                placeholder='Username'
                value={this.state.username}
                onChange={this.handleChange}
                /><br/>

                <label>Password</label>
                <input
                type='password'
                name='password'
                placeholder='Password'
                value={this.state.password}
                onChange={this.handleChange}
                /><br/>

                <label>Curl Pattern</label>
                <input name='curl_pattern'
                placeholder='Curl pattern'
                value={this.state.curl_pattern}
                onChange={this.handleChange}
                /><br/>

                <label>Curl Type</label>
                <input name='curl_type'
                placeholder='Curl type'
                value={this.state.curl_type}
                onChange={this.handleChange}
                /><br/>

                <label>Porosity</label>
                <input name='porosity'
                placeholder='Porosity'
                value={this.state.porosity}
                onChange={this.handleChange}
                /><br/>

                <label>Density</label>
                <input name='density'
                placeholder='Density'
                value={this.state.density}
                onChange={this.handleChange}
                /><br/>

                <label>Width</label>
                <input name='width'
                placeholder='Width'
                value={this.state.width}
                onChange={this.handleChange}
                /><br/>

                <input type='submit'/>
            </form>
        )
    }
}

// const mapDispatchToProps = dispatch => ({
//     fetchNewUser: userInfo => dispatch(fetchNewUser(userInfo))
//   })
  
  export default UserForm;