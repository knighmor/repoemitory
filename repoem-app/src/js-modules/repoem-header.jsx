"use strict";
import { useState } from 'react';
import { createRoot } from 'react-dom/client';
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import NavBar from "./nav-bar.jsx";
import book from "../img/rezafir7-book.png";

const RepoemHeader = () => {
    const [dropped, setDropped] = useState(true);
    const [width, setWidth] = useState("0px");
    const [display, setDisplay] = useState("none");

    const showNavMenu = () => {
        console.log('I have been clicked!');
        setDropped(!dropped);
        if (dropped === true) {
            setWidth("368px");
            setDisplay("block");
        }
        else {
            setWidth("0px");
            setDisplay("none");
        }
    }

    return (
        <header id = "repoem-header">
            <section id = "header-title">
                <img src={book} id="book-logo" />
                <strong><a href = "./index.html" id="home-link">repoemitory.</a></strong>
            </section>
            <div id = "mobile-nav" style={{width, display}}>
                <NavBar />
            </div> 
        {/* button to pull out navigation bar on mobile */}
            <button id = "poem-nav-button" onClick = {showNavMenu}>
                    ☰
            </button> 
        </header>
    ); 
};   
        
export default RepoemHeader;