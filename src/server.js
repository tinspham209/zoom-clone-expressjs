const express = require("express");
const app = express();
const morgan = require("morgan");
const server = require("http").Server(app);
const PORT = 5000;

// HTTP logger
app.use(morgan("combined"));

app.get("/", (req, res) => {
	res.status(200).send("Hello world");
});

server.listen(PORT, () =>
	console.log(`Server Running on port: http://localhost:${PORT}`)
);
