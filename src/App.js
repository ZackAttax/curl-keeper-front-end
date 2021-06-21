import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Welcome from './components/Welcome/Welcome'
import NewUser from './components/User/NewUser'
class App extends React.Component {

    render() {
        return (
        <div className="App">
            <Navbar />
            <Switch>
                <Route path='/user/new' component={NewUser} />
                <Route path='/' component={Welcome} />
            </Switch>
            
        </div>
        )
    }
}

export default App