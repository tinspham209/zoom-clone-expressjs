const express = require("express");
const app = express();
const path = require("path");

const PORT = 5000;
const server = require("http").Server(app);
const morgan = require("morgan");
const io = require("socket.io")(server);

const { v4: uuidv4 } = require("uuid");
const { ExpressPeerServer } = require("peer");
const peerServer = ExpressPeerServer(server, {
	debug: true,
});

// HTTP logger
app.use(morgan("combined"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Set public folder
app.use(express.static(path.join(__dirname, "public")));

app.use("/peerjs", peerServer);
app.get("/", (req, res) => {
	res.redirect(`/${uuidv4()}`);
});

app.get("/:room", (req, res) => {
	res.render("room", { roomId: req.params.room });
});

io.on("connection", (socket) => {
	socket.on("join-room", (roomId, userId) => {
		socket.join(roomId);
		socket.to(roomId).broadcast.emit("user-connected", userId);
		socket.on("message", (message) => {
			io.to(roomId).emit("createMessage", message);
		});
	});
});

server.listen(PORT, () =>
	console.log(`Server Running on port: http://localhost:${PORT}`)
);
