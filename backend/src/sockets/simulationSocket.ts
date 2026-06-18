import { Server, Socket } from "socket.io";

let io: Server;

export const initializeSocket = (socketServer: Server) => {
  io = socketServer;

  io.on("connection", (socket: Socket) => {
    console.log(`Client connected: ${socket.id}`);

    socket.on("join-simulation", (simulationId: string) => {
      socket.join(simulationId);

      console.log(
        `Socket ${socket.id} joined simulation ${simulationId}`
      );
    });

    socket.on("leave-simulation", (simulationId: string) => {
      socket.leave(simulationId);

      console.log(
        `Socket ${socket.id} left simulation ${simulationId}`
      );
    });

    socket.on("disconnect", () => {
      console.log(`Client disconnected: ${socket.id}`);
    });
  });
};

export const emitSimulationStarted = (
  simulationId: string,
  data: any
) => {
  if (!io) return;

  io.to(simulationId).emit(
    "simulation-started",
    data
  );
};

export const emitSimulationProgress = (
  simulationId: string,
  data: any
) => {
  if (!io) return;

  io.to(simulationId).emit(
    "simulation-progress",
    data
  );
};

export const emitSimulationCompleted = (
  simulationId: string,
  data: any
) => {
  if (!io) return;

  io.to(simulationId).emit(
    "simulation-completed",
    data
  );
};

export const emitSimulationFailed = (
  simulationId: string,
  error: any
) => {
  if (!io) return;

  io.to(simulationId).emit(
    "simulation-failed",
    error
  );
};