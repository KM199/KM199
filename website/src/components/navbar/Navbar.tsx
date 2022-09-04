import { Link } from "react-router-dom";
import name from '../../styles/icons/name.svg'
import '../../styles/styles.css'
import React from 'react';

const Navbar = () =>{
    return(
        <div className="navbar">
            <div id="top">
                    <Link to='/'><img id="banner-logo" src={name}/></Link>
                    <div className="nav-container">
                        <Link to='/'>
                            <h1 className="link">Home</h1>
                        </Link>
                        <Link to='/features'>
                            <h1 className="link">Features</h1>
                        </Link>
                        <Link to='/litepaper'>
                            <h1 className="link">Litepaper</h1>
                        </Link>
                        <Link to='/contact'>
                            <h1 className="link">Contact</h1>
                        </Link>
                    </div>
                    <button className="install-button">
                        Add to Browser
                    </button>
                </div>
        </div>
    )
}

export default Navbar;