"use strict";
import { useEffect, useState} from 'react';

// keeping just in case, but will eventually make defunct and delete

const fetchPoemsData = () => {
    const [poemsData, setPoemsData] = useState([]);

    useEffect(() => {
            fetch('http://localhost:8080/data/poems')
            .then(response => response.json())
            .then(data => setPoemsData(data));
    }, []);

    return poemsData;
}

export default fetchPoemsData;