import express from "express";
import http from "node:http";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app)
const io = new Server(server);
const PORT = process.env.PORT || 5000;

io.on('connection', socket => {
    socket.on("joinRoom", ({username, room}) => {
        const rooms = ["JavaScript", "Python", "PHP", "C#", "Ruby", "Java"];
        if (username && room && rooms.includes(room))
        {
            socket.data.username = username;
            socket.data.room = room;
            socket.join(room);
        }
    });
    socket.on("message", (message) => {
        if (message)
        {
            io.to(socket.data.room).emit("roomBroadcast", {
                message,
                username: socket.data.username
            });
        }
    });
});


app.use(express.static('public'))

server.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 