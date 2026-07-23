import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../css/styles.css";

import NavBar from "../js-modules/nav-bar";
import IndexContainer from "../js-modules/index-display";
import RepoemHeader from "../js-modules/repoem-header";
import RepoemFooter from "../js-modules/repoem-footer";

const root = createRoot(document.getElementById("container"));

root.render(
    <StrictMode>
        <RepoemHeader />
        <div id = "content-container">
            <NavBar />
            <IndexContainer />  
        </div>
        <RepoemFooter />
    </StrictMode>
)