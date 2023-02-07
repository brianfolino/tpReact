import "./navbar.css";
import React from 'react';
import CartWidget from "../CartWidget";

export const NavBar = () =>{
    return (
        
<div className='Navbar'>
<nav className="nav">
<div className="nav_brand">
    <a className ="nav__link" href="">LOGO</a>
</div>
<ul className='nav__list'>
    <li>
        <a className='nav__link' href="">SEMILLAS</a>
    </li>
    <li>
        <a className='nav__link' href="">PLANTAS</a>
    </li>
    <li>
        <a className='nav__link' href=""><CartWidget/></a>
    </li>
</ul>
</nav>
</div>
    ); 
}
    
export default NavBar;