import React, { Component } from 'react';
//import { connect } from 'react-redux';
// import { fetch } from '.../src/actions/fetchNewUser';

class UserForm extends Component {
    state = {
        username: "",
        password: "",
        curl_pattern: "2a",
        curl_type: "wavy",
        porosity: "low",
        density: "thin",
        width: "thin"
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

                <label>Password Confirm</label>
                <input 
                type="password" 
                placeholder="Confirm Password" id="confirm_password" 
                required/><br/>

                <label>Curl Pattern</label>
                <select name="curl_pattern"
                value={this.state.curl_pattern}
                onChange={this.handleChange}>
                    <option value="2a">2A</option>
                    <option value="2b">2B</option>
                    <option value="2c">2C</option>
                    <option value="3a">3A</option>
                    <option value="3b">3B</option>
                    <option value="3c">3C</option>
                    <option value="4a">4A</option>
                    <option value="4b">4B</option>
                    <option value="4c">4C</option>
                </select>
                <br/>

                <label>Curl Type</label>
                <select name="curl_type"
                value={this.state.curl_type}
                onChange={this.handleChange}>
                    <option value="wavy">Wavy</option>
                    <option value="curly">Curly</option>
                    <option value="oily">Oily</option>
                </select>
                <br/>

                <label>Porosity</label>
                <select name="porosity"
                value={this.state.porosity}
                onChange={this.handleChange}>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
                <br/>

                <label>Density</label>
                <select name="density"
                value={this.state.density}
                onChange={this.handleChange}>
                    <option value="thin">Thin</option>
                    <option value="medium">Medium</option>
                    <option value="thick">Thick</option>
                </select>
                <br/>

                <label>Width</label>
                <select name="width"
                value={this.state.width}
                onChange={this.handleChange}>
                    <option value="thin">Thin</option>
                    <option value="medium">Medium</option>
                    <option value="thick">Thick</option>
                </select>
                <br/>

                <input type='submit'/>
            </form>
        )
    }
}

// const mapDispatchToProps = dispatch => ({
//     fetchNewUser: userInfo => dispatch(fetchNewUser(userInfo))
//   })
  
  export default UserForm;