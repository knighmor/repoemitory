import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../css/display.css";

import NavBar from "../js-modules/nav-bar";
import RepoemHeader from "../js-modules/repoem-header";
import RepoemFooter from "../js-modules/repoem-footer";
import PoemDisplay from "../js-modules/poem-display";

const root = createRoot(document.getElementById("container"));
console.log(root);

root.render(
    <StrictMode>
        <RepoemHeader />
        <div id = "content-container">
            <div id = "desktop-nav">
                <NavBar />
            </div>
            <PoemDisplay />
        </div>
        <RepoemFooter />
    </StrictMode>
)