import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Welcome from './components/Welcome/Welcome'
import NewUser from './components/User/NewUser'
import LoginForm from './components/Session/LoginForm'
import User from './components/User/User'
import DayCards from './containers/DayCards'
import { connect } from 'react-redux'
//import { getAllTheData } from './actions/getAllTheData'
import { setDays } from './actions/setDays'
import NewDayForm from './components/NewDayForm'
import FilterByHairType from './components/FilterByHairType/FilterByHairType'

const GuestView = () =>{
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
const UserView = () => {
   return (
       <div className="App">
           <Navbar />
           <Switch>
               <Route path='/day/new' component={NewDayForm} />
               <Route path='/pinned_days' component={FilterByHairType} />
               <Route path='/days' component={DayCards} />
               <Route path='/home' component={User} />
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
    loggedIn: state.user.loggedIn,
    users: state.users.users
})
export default connect(mapStateToProps , { setDays })(App);