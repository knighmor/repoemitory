import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import "../css/home.css";

import NavBar from "../js-modules/nav-bar";
import RepoemHeader from "../js-modules/repoem-header";
import RepoemFooter from "../js-modules/repoem-footer";
import IndexContainer from "../js-modules/index-display";

const root = createRoot(document.getElementById("container"));

root.render(
    <StrictMode>
        <RepoemHeader />
        <div id = "content-container">
            <div id = "desktop-nav">
                <NavBar />
            </div>
                <IndexContainer /> 
        </div>
        <RepoemFooter />
    </StrictMode>
)