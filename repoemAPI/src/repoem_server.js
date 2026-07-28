"use strict";

//#region server boot-up bologna-- using express. might change the port with project turn-in.
const express = require ("express");
const app = express();
const cors = require("cors");
const corsOptions = {
    origin: ["http://localhost:5173"],
};

const port = 8080;


app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors(corsOptions));

app.get("/data/poems", (req, res) => {
    var poems = require ("./data/poems.json");
    res.json(poems);
});

app.listen(port, () => {
    console.log(`Server is running http://localhost:${port}`);
    console.log("Press Ctrl+C to end this process.");
})
// #endregion