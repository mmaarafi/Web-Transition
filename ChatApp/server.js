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
            console.log("message received on the server" + message);
            // message emited to the room the client is currently on
            // but i dont know how to handle it message emited to the room
            io.to(socket.data.room).emit("message", message);
            socket.emit('chatMessage', message);
        }
    });
});


app.use(express.static('public'))

server.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 