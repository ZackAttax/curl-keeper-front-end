import React, { Component } from 'react'
import { MenuItems } from "./MenuItems"

class Navbar extends Component {

    render() {
        return (
            <nav className="NavbarItems">
                <h1 classname="navbar-logo">Curly Keeper</h1>
                <div className="menu-icon">

                </div>
                <ul>
                    <li><a className={item.cName}></a></li>
                </ul>
            </nav>
        )
    }
}
export default Navbar