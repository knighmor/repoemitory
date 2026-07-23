"use strict";
import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import NavButton from './nav-button.jsx';

const RepoemHeader = () => {
    return (
        <header className = "repoem-header">
            <section className = "header-title">
                <strong><a href = "./index.html">repoemitory.</a></strong>
            </section>
        {/* button to pull out navigation bar on mobile */}
            <NavButton />
        </header>
    ); 
};   
        
export default RepoemHeader;