"use strict";
import { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

const PoemDisplay = () => {
// #region inserting the repoemAPI fetch request into here, along with variables
    const [poemsData, setPoemsData] = useState([]);
    const [dataIsLoaded, setDataIsLoaded] = useState(false);
    const [poemId, setPoemId] = useState(0);
    const [word, setWord] = useState("");
    const [backDisplay, setBackDisplay] = useState("none");
    const [forwardDisplay, setForwardDisplay] = useState("block");

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

// #region integrating DictionaryAPI fetch request along with the definition box into here!
    const DefinitionBox = () => {
        const [wordData, setWordData] = useState([]);
        const [wordIsLoaded, setWordIsLoaded] = useState(false);

        useEffect(() => {
            fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
            .then((res) => res.json())
            .then((json) => {
                setWordData(json);
                setWordIsLoaded(true);
                });
        }, []);

        if (!wordIsLoaded) {
            return (
                <div>
                    <strong>No word selected.</strong>
                </div>
            )
        }

        return (
            <section>
                <a href = {wordData[0].sourceUrls[0]}>{wordData[0].word}</a>
            </section>
        )
    }
// #endregion

// #region setting up word selection to set up for Definition Box using the window selection method
    const clickForWord = () => {
        const sel = window.getSelection();
        const text = sel.anchorNode.textContent;
        const lmatch = text.substr(0, sel.anchorOffset).match(/[\s\S]*\s/);
        const offset = (lmatch ? lmatch[0].length : 0);
        const match = text.substr(offset).match(/\w+/);

        console.log(match && match[0]);
        setWord(match);
    }
// #endregion

// #region setting up function to toggle videos based on if there's a link in the json - a simple if-else equation
    const YoutubeVideo = () => {
        if (poemsData[poemId].embed === null) {
            return;
        }
        return (
            <iframe src={poemsData[poemId].embed} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" className="featured-poem-video" allowFullScreen></iframe>
        )
    }
// #endregion

// #region setting up moving between entries in the poemsData rah rah
    // this will increment the poemId by 1
    const handleClickAdd = () => {
        if (poemId === poemsData.length - 1) {
            setForwardDisplay("none");
            console.log(poemId);
            return;
        }
        setPoemId(poemId + 1);
        setBackDisplay("block");
        console.log(poemId);
    }
    // this will decrement the poemId by 1
    const handleClickRemove = () => {
        if (poemId === 0) {
            setBackDisplay("none");
            console.log(poemId);
            return;
        }
        setPoemId(poemId - 1);
        setForwardDisplay("block");
        console.log(poemId);
    }
// #endregion

// #region setting up way to hopefully set up some formatting for poem text using array mapping
    const PoemText = () => {
        const ArrangedText = poemsData[poemId].text.map((line) => {
            return <div>{line}</div>
        });
        return ArrangedText;
    };
// #endregion

return (
    <section className = "display-container">
        <nav className = "id-navigation">
            <button className = "id-nav" id = "back-button" onClick = {handleClickRemove} style = {{display: backDisplay}}>Back.</button>
            {/* style = {{display: "backDisplay"}} */}
            <button className ="id-nav" id = "forward-button" onClick = {handleClickAdd} style = {{display: forwardDisplay}}>Next.</button>
            {/* style = {{display: {forwardDisplay}}} */}
        </nav>
        <section className = "poem-content">
            <div className = "poem-container">
                <div className = "poem-title">
                <strong>{poemsData[poemId].name} by {poemsData[poemId].author}</strong>
                </div>
                <div className = "poem-text" onClick = {clickForWord}>
                    <PoemText />
                </div>
            </div>
            <div className = "poem-video-and-definitions">
                <YoutubeVideo />
                <div className ="word-define-box">
                    <DefinitionBox />
                </div>
            </div>
        </section>      
    </section>
)
    
}

export default PoemDisplay;