# Zoom Clone

A Zoom-like video conferencing application built using **Node.js**, **Express**, **Socket.IO**, **MongoDB**, and **WebRTC**.  
This project supports real-time video calls, room creation, WebRTC streaming, and real-time chat.

---

## Features

- Real-time video and audio calls (WebRTC)
- Create or join unique meeting rooms
- Real-time chat messaging
- WebRTC signaling using Socket.IO
- User connect/disconnect notifications
- MongoDB for data storage
- Express REST API

---

## Tech Stack

- **Backend:** Node.js, Express.js
- **Real-Time Communication:** Socket.IO
- **Database:** MongoDB, Mongoose
- **Media:** WebRTC API
- **Environment:** dotenv
- **Security:** cors

Create a `.env` file inside the `server` folder:

```
PORT=3000
MONGO_URL=your-mongodb-url
```

Start the backend:

```bash
npm run dev
```

---

## Frontend Setup

```bash
cd client
npm install
npm run dev
```

Frontend default URL:

```
http://localhost:3000
```

---

## How It Works

1. A user creates or joins a meeting room using a unique room ID.
2. The browser requests microphone and camera permissions.
3. WebRTC handles peer-to-peer video/audio streaming.
4. Socket.IO is used for:
   - Sending WebRTC offers and answers
   - Exchanging ICE candidates
   - Managing rooms
   - Sending chat messages
5. Streams are displayed in HTML `<video>` elements.

---

## API Endpoints

### `GET /`

Returns a simple test message from the backend.

---

## Socket.IO Events

- `connection`
- `disconnect`
- `join-room`
- `offer`
- `send-message`

---

## License

This project is created for educational and learning purposes.
