import React from 'react'
import Navbar from './components/navbar/Navbar'
import {Route, Switch} from 'react-router-dom'
class App extends React.Component {

    render() {
        return (
        <div className="App">
            <Navbar />
            
        </div>
        )
    }
}

export default App