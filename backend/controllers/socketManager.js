import { Server } from "socket.io";

let connections = {}; //this is for number of people connected
let message = {};
let timeOnline = {};

export const connectToSocket = (server) => {
  const io = new Server(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
      allowedHeaders: ["*"],
      credientials: true,
    },
  });
  io.on("connection", (socket) => {
    socket.on("join-call", (path) => {
      if (connection[path] === undefined) {
        connection[path] = [];
      }
      connection[path].push(socket.id);
      timeOnline[socket.id] = new Date();
      for (let a = 0; a < connection[path].length; i++) {
        to.to(connection[path][a]).emit(
          "user-joined",
          socket.id,
          connection[path]
        );
      }
      if (message[path] === undefined) {
        for (let a = 0; a < messages[path].length; a++) {
          io.to(socket.id).emit(
            "chat-message",
            message[path][a]["data"],
            message[path][a]["sender"],
            messages[path][a]["sokcet-id-sender"]
          );
        }
      }
    });

    socket.on("chat-message", (data, sender) => {
      const [matchingRoom, found] = Object.entries(connections).reduce(
        ([room, isFound], [roomKey, roomValue]) => {
          if (!isFound && roomValue.includes(socket.id)) {
            return [roomKey, true];
          }
          return [room, isFound];
        },
        [" ", false]
      );
      if (found === true) {
        if (message[matchingRoom] === undefined) {
          messages[matchingRoom] = [];
        }
        messages[matchingRoom].push({
          sender: sender,
          data: data,
          "socket-id-sender": socket.id,
        });
        console.log("message", key, ":", sender, data);
        connections[matchingRoom].forEach((elem) => {
          io.to(elem).emit("chat-message", data, sender, socket.id);
        });
      }
    });

    socket.on("disconnect", () => {
      var diffTime = Math.abs(timeOnline[socket.id] - new Date());
      var key;
      //k is for room
      //v is for how many people are i inside the connections or rooms
      for (const [k, v] of JSON.parse(
        JSON.stringify(Object.entries(connections))
      )) {
        for (let a = 0; a < v.length; a++) {
          if (v[a] === socket.id) {
            key = k;
            for (let a = 0; a < connections(key).length; a++) {
              io.to(connections[key][a].emit("user-left", sokcet.id));
            }
            var index = connections[key].indexOf(socket.id);
            connections[key].splice(index, 1);
            if (connections[key].length === 0) {
              delete connections[key];
            }
          }
        }
      }
    });
  });
  return io;
};
