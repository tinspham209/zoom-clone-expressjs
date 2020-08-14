const express = require("express");
const app = express();
const morgan = require("morgan");
const path = require("path");
const server = require("http").Server(app);
const PORT = 5000;

// HTTP logger
app.use(morgan("combined"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
	res.render("room");
});

server.listen(PORT, () =>
	console.log(`Server Running on port: http://localhost:${PORT}`)
);
