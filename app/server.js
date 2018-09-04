const http = require("http");
const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();

app.use(cors());
app.use(express.static(path.join(process.cwd(), "/public")));

const server = http.createServer(app);

module.exports = { 
    app,
    server
};

