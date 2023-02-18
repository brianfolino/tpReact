import "./navbar.css";
import React from 'react';
import CartWidget from "../CartWidget";
import { NavLink } from "react-router-dom";
export const NavBar = () => {
    return (

        <div className='container'>
            <nav className="nav">
                <div className="nav_brand">
                    <NavLink className="nav__link" to='/'>LOGO</NavLink>
                </div>
                <ul className='nav__list'>
                    <li>
                        <NavLink className='nav__link' to='categoria/films'>Peliculas</NavLink>
                    </li>
                    <li>
                        <NavLink className='nav__link' to='categoria/series'>Series</NavLink>
                    </li>
                    <li>
                        <NavLink className='nav__link' to='cart'><CartWidget /></NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;