const socket = io();

// socket.on('connect', () => {
//     console.log("connected: ", socket.id);
// });

const searchParams = new URLSearchParams(window.location.search);
const username = searchParams.get("username");
const room = searchParams.get("room");
if (room)
{
    const roomName = document.getElementById("room-name");
    roomName.textContent = room;
}
if (username && room)
    socket.emit("joinRoom", {username, room})

const form = document.getElementById("chat-form")
const msg = document.getElementById("msg")
form.addEventListener('submit', (event) => {
    event.preventDefault();
    socket.emit("message", msg.value.trim());
})  

socket.on('chatMessage', (message) => {
    console.log("message i sent: " + message);
});
