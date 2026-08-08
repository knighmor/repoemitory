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
            .then((res) => {
                if (!res.ok) {throw new error(res.status)}
                else {return res.json()}})
            .then((json) => {
                console.log(json);
                setWordData(json);
                setWordIsLoaded(true);
                })
            .catch((e) => {
                setWordIsLoaded(false);
                console.error("Error retrieving Word Data.")})
        }, []);

        const Synonyms = () => {
            const ArrangedText = wordData[0].meanings[0].synonyms.map((word) => {
                return <sec>{word}, </sec>
            });
            return ArrangedText;
        };

        const Definition = () => {
            if (word == "blood") {
                 return (
                  <p>{wordData[0].meanings[1].definitions[0].definition}</p>  
                        )}
                else { 
                    return (
                        <p>{wordData[0].meanings[0].definitions[0].definition}</p> 
                            )}
            }

        if (!wordIsLoaded) {
            console.log("No word selected.");
            return (
                <div>
                    <strong>No word selected.</strong>
                </div>
            )
        }
        return (
            <section>
                <strong><a href = {wordData[0].sourceUrls[0]}>{wordData[0].word}</a></strong>
                <em><p><strong>Synonyms-</strong> <Synonyms /></p></em>
                <Definition /><br />
                <p><em>Disclaimer: these definitions and synonyms are pulled from another source and have multiple variants. If they do not seem accurate, please use the link provided for further information.</em></p>
            </section>
        );
    }
// #endregion

// #region setting up word selection to set up for Definition Box using the window selection method -- ask about how to get apostrophes and dashes including in word selection
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
        setPoemId(poemId + 1);
        console.log(poemId);
    }
    // this will proc the forward button whenever poemId is below max
    const ForwardButton = () => {
        if (poemId < poemsData.length - 1) {
            return (
                    <button className ="id-nav" id = "forward-button" onClick = {handleClickAdd}>Next.</button>
            )
        }
    }
    // this will decrement the poemId by 1
    const handleClickRemove = () => {
        setPoemId(poemId - 1);
        console.log(poemId);
    }
    // this will proc the back button whenever poemId is above min
    const BackButton = () => {
        if (poemId > 0) {
            return (
                <button className = "id-nav" id = "back-button" onClick = {handleClickRemove}>Back.</button>       
            )
        }
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
            <BackButton />
            <ForwardButton />
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