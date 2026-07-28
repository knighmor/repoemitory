"use strict";
async function fetchPoemsData() {
    let res = await fetch('http://localhost:8080/data/poems');
    let data = await res.json();
    return data;
}

export default fetchPoemsData;