# Socket.IO connection flow

```text
Browser                         Node server
   |                                 |
   |--- GET /chat.html ------------>|
   |<-- HTML served by Express ------|
   |                                 |
   |--- GET /socket.io/socket.io.js>|
   |<-- Socket.IO client script -----|
   |                                 |
   |  main.js calls io()             |
   |--- Socket.IO connection ------->|
   |                      io's "connection" handler runs
   |<------ connection established --|
   |  client's "connect" handler runs|
   |                                 |
   |<== Persistent two-way channel ==>|
   |     events/messages can flow    |
   |        in either direction      |
```

## What each part does

1. The browser requests `chat.html` over HTTP. Express serves it from the
   `public` directory.
2. The browser loads `/socket.io/socket.io.js`. Socket.IO serves its browser
   client script; it does not need to be copied into `public`.
3. After that script loads, `main.js` can call `io()`. The call creates a
   Socket.IO client and starts connecting to the server that served the page.
4. On the Node.js side, `io.on('connection', ...)` runs for each newly
   connected browser tab. Its `socket` argument represents that connection.
5. In the browser, `socket.on('connect', ...)` runs when the client has
   connected successfully.
6. Once connected, the client and server can send named events to each other.
   Socket.IO commonly starts with HTTP long-polling and may upgrade to
   WebSocket; Socket.IO manages the transport and event layer.

The HTTP server must be shared: create it from the Express app, attach Socket.IO
to that server, and call `server.listen(...)`. This lets Express serve pages
and Socket.IO handle real-time connections on the same port.
