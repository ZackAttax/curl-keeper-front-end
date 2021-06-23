import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Welcome from './components/Welcome/Welcome'
import NewUser from './components/User/NewUser'
import LoginForm from './components/Session/LoginForm'
import User from './components/User/User'
import DayCards from './containers/DayCards'
import { connect } from 'react-redux'
import { setDays } from './actions/setDays'

class App extends Component {

    componentDidMount() {
        this.props.setDays()
    }

    render() {
        return (
        <div className="App">
            <Navbar />
            <Switch>
                <Route path='/home' component={User} />
                <Route path='/days' component={DayCards} />
                <Route path='/user/new' component={NewUser} />
                <Route path='/login' component={LoginForm} />
                <Route path='/' component={Welcome} />
            </Switch>
            
        </div>
        )
    }
}

export default connect(null , { setDays })(App);