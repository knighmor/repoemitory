"use strict";

async function fetchPoemsData() {
    let response = await fetch('http://localhost:8080/data/poems');
    let data = await response.json();
    console.log(data);
}

fetchPoemsData();