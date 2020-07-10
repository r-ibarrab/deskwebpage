import React from 'react';
import { Link } from 'react-router-dom'
import './styles/nav.css'

const navbar = ()=>{
    const gotohome = ()=>{
        document.getElementById("contact-button").classList.remove('deactive');
        document.getElementById("products-button").classList.remove('deactive');
    }
    
    return(
        <nav className="nav-bar">
            <Link to="/" onClick={()=>{gotohome()}}>
            <div className="logo">
                
                <img src="/resources/logo.svg" className="logo-image"alt="hola"/>
                <h1>buydesks</h1>
            </div>
            </Link>
            <ul className="nav-list">
                <li className="nav-list-element"><Link to="/products"><h2 className="nav-list-option" id="products-button">Products</h2></Link></li>
                <li className="nav-list-element right"><Link to="/contact"><h2 className="nav-list-option" id="contact-button">Contact</h2></Link></li>
            </ul>

           
        </nav>
    )

}

export default navbar;