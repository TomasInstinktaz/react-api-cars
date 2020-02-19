import React from 'react';
import {NavLink} from "react-router-dom";

/*
    Routes:
    1 task - Static
    2 task - Dynamic
    3 task - Card
    4 task - Carousel
 */
const Navbar = () => {
    return (
        <nav>
            <div>
                <NavLink to="/static">Static</NavLink>
            </div>
            <div>
                <NavLink to="/dynamic">Dynamic</NavLink>
            </div>
            <div>
                <NavLink to="/card">Card</NavLink>
            </div>
            <div>
                <NavLink to="/carousel">Carousel</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;
