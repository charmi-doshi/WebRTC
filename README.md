```markdown
# Video Call and Peer-to-Peer Communication Project

This project demonstrates basic video calling functionality using `getUserMedia` and peer-to-peer communication using WebSockets and WebRTC.  It includes the ability to acquire a user's video stream, display it locally, and establish a peer-to-peer connection for video sharing.

## Key Features

*   **Video Stream Acquisition:**  Uses `getUserMedia` to request and display a user's video stream from their webcam.
*   **Local Video Display:** Displays the acquired video stream in a local video element.
*   **WebSocket Communication:** Employs WebSockets for signaling between clients (using `socket.io`).
*   **WebRTC Peer-to-Peer Connection:** Establishes a peer-to-peer video connection using WebRTC.
*   **STUN Server Configuration:** Includes a STUN server configuration (Google's STUN server) for NAT traversal.
*   **Basic Error Handling:** Provides basic error handling for media stream acquisition.

## Installation Instructions

1.  **Clone the repository:**

    ```bash
    git clone <repository_url>
    cd <repository_directory>
    ```

2.  **Install dependencies:**  This project requires `socket.io` on the server-side. You'll need a Node.js environment.

    *   **Server-side:**  (Assuming you have a server.js or similar file - not included in the provided snippet, but implied by the `socket.io` usage)

        ```bash
        npm install socket.io
        ```

    *   **No specific client-side dependencies need installation.** The client-side code uses standard JavaScript and browser APIs.

3.  **Set up a WebSocket server:**  (This is a high-level instruction because server-side code is missing from the snippets.)

    You'll need to create a Node.js server that uses `socket.io` to handle WebSocket connections.  Here's a basic example of how the server might be set up:

    ```javascript
    // server.js (example - not part of the original snippets)
    const express = require('express');
    const http = require('http');
    const { Server } = require("socket.io");

    const app = express();
    const server = http.createServer(app);
    const io = new Server(server, {
      cors: {
        origin: "http://localhost:8080", // Replace with your client's origin if different
        methods: ["GET", "POST"]
      }
    });

    io.on("connection", (socket) => {
      console.log(`User connected: ${socket.id}`);

      socket.on('message', (text) => {
        io.emit('message', text); // Broadcast to all clients
      });

      socket.on("disconnect", () => {
        console.log(`User disconnected: ${socket.id}`);
      });
    });


    server.listen(8080, () => {
      console.log('Server listening on port 8080');
    });
    ```

    Make sure the port in `app.js` matches the port the server is listening on.

4.  **Open the HTML file(s) in your browser:**  Open the HTML file(s) that load `VideoCall.js`, `app.js`, and `peer2peercall.js`.  You will likely need to serve these files via a web server (e.g., using `npx serve` or a similar tool) to avoid CORS issues.

## Usage Examples

1.  **Acquire and display local video:**

    *   Click the "Show Video" button (associated with `VideoCall.js`).
    *   Grant the browser permission to access your camera.
    *   Your video should be displayed in the local video element.

2.  **Send messages via WebSockets:**

    *   Enter text in the input field and click the button (associated with `app.js`).
    *   The message will be broadcast to all connected clients and displayed in the unordered list.

3.  **Establish a Peer-to-Peer connection (using `peer2peercall.js`):**

    *   Click the "Call PC1" button to acquire and display your local video.
    *   Click the "Call PC2" button to initiate the WebRTC peer connection. (Note: This example is incomplete and the full WebRTC signaling implementation is missing, as indicated by the `... (truncated)` in the original code.) To complete this, you would need to implement the offer/answer exchange and ICE candidate gathering/transmission using the WebSocket connection.

## Project Structure Overview

```
/
├── VideoCall.js         # Handles video stream acquisition and display.
├── app.js               # Handles WebSocket communication (sending and receiving messages).
├── peer2peercall.js     # Handles WebRTC peer connection setup (incomplete in this example).
└── README.md            # This file.
```

## Dependencies

*   **Client-side:**
    *   Standard JavaScript and browser APIs (getUserMedia, WebRTC).
    *   socket.io client library loaded via CDN, as no explicit import/require statement exists in provided client side code.

*   **Server-side:** (Implied, but not provided in the code snippets)
    *   Node.js
    *   socket.io

## Contributing Guidelines

Contributions are welcome!  Please follow these guidelines:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with clear, descriptive commit messages.
4.  Submit a pull request.

Please ensure that your code adheres to any established coding style and includes appropriate tests.
```