import http from "http";
import { Server } from "socket.io";

import app from "./app";
import { initializeSocket } from "./sockets/simulationSocket";

const PORT = process.env.PORT || 5000;

const httpServer = http.createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
  },
});

initializeSocket(io);

httpServer.listen(PORT, () => {
  console.log(
    `🚀 Server running on http://localhost:${PORT}`
  );
});