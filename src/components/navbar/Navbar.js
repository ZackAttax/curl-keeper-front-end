import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { MenuItems } from "./MenuItems"
import './Navbar.css';

class Navbar extends Component {
 //state= { clicked: false }
    
    //handleClick = () => {
     //   this.setState({ clicked: !this.state.clicked})
    //}

    render() {
        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Curl Keeper</h1>
                <ul className='nav-menu'>
                    {MenuItems.map((item, index) => {
                        return (
                           <li key={index}>
                               <NavLink to={item.url}  className={item.cName}>
                                   {item.title}
                                </NavLink>
                               </li> 
                        )
                    })}
                </ul>
            </nav>
        )
    }
}
export default Navbar