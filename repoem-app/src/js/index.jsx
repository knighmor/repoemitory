import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../css/styles.css";

import NavBar from "../js-modules/nav-bar";
import IndexContainer from "../js-modules/index-display"

const root = createRoot(document.getElementById("content-container"));
console.log(root);

root.render(
    <StrictMode>
        <NavBar />
        <IndexContainer />
    </StrictMode>
)