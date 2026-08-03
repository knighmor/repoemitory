"use strict";
import { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

const PoemDisplay = () => {
// #region inserting the repoemAPI fetch requestion into here
    const [poemsData, setPoemsData] = useState([]);
    const [dataIsLoaded, setDataIsLoaded] = useState(false);
    const [poemId, setPoemId] = useState(0);

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
// #endregion

// #region setting up moving between entries in the poemsData rah rah
    // this will increment the poemId by 1
    const handleClickAdd = () => {
        if (poemId === poemsData.length - 1) {
            console.log(poemId);
            return;
        }
        setPoemId(poemId + 1);
        console.log(poemId);
    }
    // this will decrement the poemId by 1
    const handleClickRemove = () => {
        if (poemId === 0) {
            console.log(poemId);
            return;
        }
        setPoemId(poemId - 1);
        console.log(poemId);
    }
// #endregion

return (
    <section className = "display-container">
        <nav className = "id-navigation">
            <button className = "id-nav" id = "back-button" onClick = {handleClickRemove}></button>
            <button className ="id-nav" onClick = {handleClickAdd}></button>
        </nav>
        <div className = "poem-container">
            <div className = "poem-title">
               {poemsData[poemId].name} by {poemsData[poemId].author}
            </div>
            <div className = "poem-text">
                {poemsData[poemId].text}
            </div>
        </div>
        <div className = "poem-video-and-definitions">
            <iframe src={poemsData[poemId].embed} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" className="featured-poem-video" allowFullScreen></iframe>
            <div className ="word-define-box">e</div>
        </div>
    </section>
)
    
}

export default PoemDisplay;