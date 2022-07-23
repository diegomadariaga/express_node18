//@ts-check
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const v1Router = require("./v1/routes");

app.get("/", (req, res) => {
    // say hello
    res.send(`Hello World!`);
});

app.use("/api/v1", v1Router);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
