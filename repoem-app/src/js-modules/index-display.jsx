"use strict";
import { useState } from 'react';
import { createRoot } from 'react-dom/client';

import fetchPoemsData from "../js-modules/data-retrieval";

let poemsData = await fetchPoemsData();
poemsData.sort((a,b) => a.likes - b.likes);
console.log(poemsData);
const topThree = poemsData.slice(Math.max(poemsData.length - 3, 0)).reverse();
console.log(topThree);

const IndexContainer = () => {

    return (
        <section className = "index-container">
            {/* the featured-featured poem, will be the "most viewed" */}
            <article className = "featured-poem" id = "featured-poem-prime">
                <a href = "display.html" className = "poem-link-featured" id = "prime-poem-title">
                    <strong>{topThree[0].name}</strong>
                </a>
            <section className = "featured-poem-container">
                <iframe src={topThree[0].embed} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" className="featured-poem-video" allowFullScreen></iframe>
                <section className = "featured-poem-content">
                    {topThree[0].text}
                </section>
            </section>
            </article>

            {/* the next two poems in "engagement/views" */}
                <section className = "next-two-poems">
                    <article className = "featured-poem">
                        <a href = "display.html" className = "poem-link">{topThree[1].name}</a>
                        <p className = "poem-two-text-preview">{topThree[1].text}<em className = "etc"> ...</em></p> 
                    </article>
                    <article className = "featured-poem">
                        <a href = "display.html" className = "poem-link">{topThree[2].name}</a>
                        <p className = "poem-three-text-preview">{topThree[2].text}<em className = "etc"> ...</em></p>
                    </article>
                </section>
            </section>
    );
};

export default IndexContainer;