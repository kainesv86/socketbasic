const http = require("http");
const socketio = require("socket.io");

const server = http.createServer((req, res) => {
        res.end("I am connected!");
});

const io = socketio(server);

io.on("connection", (socket, req) => {
        socket.emit("welcome", "Welcome to the websocket server!!");

        socket.on("message", (msg) => {
                console.log(msg);
        });
});

const PORT = 8000;

server.listen(PORT, () => {
        console.log(`Listening on ${PORT}`);
});
