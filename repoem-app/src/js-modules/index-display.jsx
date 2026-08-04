"use strict";
import { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

// actual index content container stuff for index.html
const IndexContainer = () => {
    // #region beginning of loading poem API stuff-- using UseEffect, includes a thingy for data-loading
    const [poemsData, setPoemsData] = useState([]);
    const [dataIsLoaded, setDataIsLoaded] = useState(false);

    useEffect(() => {
            fetch('http://localhost:8080/data/poems')
            .then((res) => res.json())
            .then((json) => {
                setPoemsData(json);
                setDataIsLoaded(true);
            });
    }, []);

    if (!dataIsLoaded) {
        return (
            <div>
                <h1>Please wait...</h1>
            </div>
        );
    }

    poemsData.sort((a,b) => a.likes - b.likes);
    const topThree = poemsData.slice(Math.max(poemsData.length - 3, 0)).reverse();
    // #endregion ending of loading API stuff
    
    // #region setting up text format parsing using mapping, a bit more convoluted due to how this is set up
        const PoemText = (index) => {
        const ArrangedText = topThree[index].text.map((line) => {
            return <div>{line}</div>
        });
        return ArrangedText;
    };

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
                    {PoemText(0)}
                </section>
            </section>
            </article>

            {/* the next two poems in "engagement/views" */}
                <section className = "next-two-poems">
                    <article className = "featured-poem">
                        <a href = "display.html" className = "poem-link">{topThree[1].name}</a>
                        <p className = "poem-two-text-preview">{PoemText(1)}<em className = "etc"> ...</em></p> 
                    </article>
                    <article className = "featured-poem">
                        <a href = "display.html" className = "poem-link">{topThree[2].name}</a>
                        <p className = "poem-three-text-preview">{PoemText(2)}<em className = "etc"> ...</em></p>
                    </article>
                </section>
            </section>
    );
};

export default IndexContainer;