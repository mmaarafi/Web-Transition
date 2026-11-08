const socket = io();

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
    msg.value = '';
})

const messages = document.querySelector('.chat-messages');

socket.on('roomBroadcast', ({ message, username }) => {
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('message');

  const meta = document.createElement('p');
  meta.classList.add('meta');
  meta.textContent = username;

  const time = document.createElement('span');
  time.textContent = new Date().toLocaleTimeString([], {
    hour: 'numeric',
    minute: '2-digit'
  });
  meta.append(' ', time);

  const text = document.createElement('p');
  text.classList.add('text');
  text.textContent = message;

  messageDiv.append(meta, text);
  messages.append(messageDiv);
});
