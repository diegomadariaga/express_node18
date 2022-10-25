//@ts-check
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const v1Router = require("./v1/routes/workoutRoutes.js");
const helmet = require("helmet");

// response json
app.use(express.json());

app.use(helmet());
// Middleware for all routes
function enableXssProtection(req, res, next) {
    // set x-xss-protection 1; mode=block
    res.set("X-XSS-Protection", "1");
    next();
}
// use middleware for all routes
app.use(enableXssProtection);

app.get("/", (req, res) => {
    // set x-xss-protection 1; mode=block
    //res.set("X-XSS-Protection", "1; mode=block");
    // say hello
    res.send(`Hello World!`);
});

app.get("/diskStorage", (req, res) => {
    // execute command to get disk storage linux
    const { exec } = require("child_process");
    exec("df -h", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            res.send(`error: ${error.message}`);
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            res.send(`stderr: ${stderr}`);
        }
        console.log(`${stdout}`);
        // replace new line with <br>
        stdout = stdout.replace(/\n/g, "<br>");
        //replace % with tabular
        stdout = stdout.replace(/%/g, "\t");
        res.send(stdout);
    }
    );
});

app.use("/api/v1", v1Router);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
