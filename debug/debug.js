const express = require('express');
const app = express();



app.get("/", (req, res) => {
    let name = "emerson";
    res.send(`Hello ${name} `);
});

// server
app.listen(3000, () => {  console.log("Server is up."); });