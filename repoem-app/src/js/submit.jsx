import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../css/submit.css";

import NavBar from "../js-modules/nav-bar";
import RepoemHeader from "../js-modules/repoem-header";
import RepoemFooter from "../js-modules/repoem-footer";
import SubmissionForm from "../js-modules/submit-form";

const root = createRoot(document.getElementById("container"));
console.log(root);

root.render(
    <StrictMode>
        <RepoemHeader />
        <div id = "content-container">
            <div id = "desktop-nav">
                <NavBar />
            </div>
                <SubmissionForm />
        </div>
        <RepoemFooter />
    </StrictMode>
)