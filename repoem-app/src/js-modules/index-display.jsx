"use strict";
import { useState } from 'react';
import { createRoot } from 'react-dom/client';

const IndexContainer = () => {
    return (
        <section className = "index-container">
            {/* the featured-featured poem, will be the "most viewed" */}
            <article className = "featured-poem" id = "featured-poem-prime">
                <a href = "display.html" className = "poem-link-featured" id = "prime-poem-title">
                    <strong>Featured Poem Example One</strong>
                </a>
            <section className = "featured-poem-container">
                <iframe src="https://www.youtube.com/embed/Sbb1X33KOmU?si=ZQeLVBmB7YQspx9Z" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" className="featured-poem-video" allowFullScreen></iframe>
                <section className = "featured-poem-content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat.</p>
                    <p>In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.</p>
                </section>
            </section>
            </article>

            {/* the next two poems in "engagement/views" */}
                <section className = "next-two-poems">
                    <article className = "featured-poem">
                        <a href = "display.html" className = "poem-link">Featured Poem Example Two</a>
                        <p className = "poem-two-text-preview">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<em className = "etc"> ...</em></p> 
                        <p className = "poem-two-text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </article>
                    <article className = "featured-poem">
                        <a href = "display.html" className = "poem-link">Featured Poem Example Three</a>
                        <p className = "poem-three-text-preview">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<em className = "etc"> ...</em></p> 
                        <p className = "poem-three-text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </article>      
                </section>
            </section>
    );
};

export default IndexContainer;