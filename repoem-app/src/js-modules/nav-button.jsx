"use strict";
import { useState } from 'react';
import { createRoot } from 'react-dom/client';

const NavButton = () => {
    const [dropped, setDropped] = useState(true);
    const [display, setDisplay] = useState("none");
    const [width, setWidth] = useState("0px");

    const showNavMenu = () => {
        console.log('I have been clicked!');
        setDropped(!dropped);
        if (dropped === true) {
            setDisplay("relative");
            setWidth("300px");
        }
        else {
            setDisplay("none");
            setWidth("0px");
        }
    }

    return (
        <button className = "poem-nav-button" onClick = {showNavMenu}>
                ☰
        </button>
    )
}

export default NavButton;
