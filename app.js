import express from 'express';

// Create a new express application instance
const app = express();

// The port the express app will listen on
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

// get endpoint
app.get("/", (req, res) => {
    res.send("Hello World!");
});