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

app.get("/api", (req, res) => {
    res.json({
        "poem" : {
            "name": `BATTY`,
            "author": `Shel Silverstein`,
            "poem-text": `The baby bat Screamed out in fright, "Turn on the dark, I'm afraid of the light."`
        },
    });
});

app.listen(port, () => {
    console.log(`Server is running http://localhost:${port}`);
    console.log("Press Ctrl+C to end this process.");
})
// #endregion