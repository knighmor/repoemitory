"use strict";
import { useEffect, useState } from 'react';

// keeping just in case, but will eventually make defunct and delete
const [poemsData, setPoemsData] = useState([]);
const [dataIsLoaded, setDataIsLoaded] = useState(false);

const fetchPoemsData = () => {
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
}

export default fetchPoemsData;