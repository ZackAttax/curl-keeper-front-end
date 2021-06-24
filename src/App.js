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
import NewDayForm from './components/NewDayForm'



const GuestView = (props) =>{
   return (
       <div className="App">
           <Switch>
               <Route path='/user/new' component={NewUser} />
               <Route path='/login' component={LoginForm} />
               <Route path='/' component={Welcome} />
           </Switch>
       </div>
   )
}
const UserView = (props) => {
   return (
       <div className="App">
           <Navbar />
           <Switch>
               <Route path='/day/new' component={NewDayForm} />
               <Route path='/home' component={User} />
               <Route path='/days' component={DayCards} />
           </Switch>
       </div>
       )
}


class App extends Component {
    
    componentDidMount() {
        this.props.setDays()
    }

    render() {
        if(this.props.loggedIn){
            return <UserView/>
        }else{
            return <GuestView />
        }
    }
}
const mapStateToProps = (state) => ({
    user: state.user.user,
    loggedIn: state.user.loggedIn
})
export default connect(mapStateToProps , { setDays })(App);