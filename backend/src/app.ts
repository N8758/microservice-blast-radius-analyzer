import express from "express";
import cors from "cors";

import serviceRoutes from "./routes/serviceRoutes";
import dependencyRoutes from "./routes/dependencyRoutes";
import simulationRoutes from "./routes/simulationRoutes";
import dashboardRoutes from "./routes/dashboardRoutes";

import { notFound } from "./middleware/notFound";
import { errorHandler } from "./middleware/errorHandler";

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "Dependency Blast Radius Simulator API",
  });
});

app.use("/api/services", serviceRoutes);

app.use("/api/dependencies", dependencyRoutes);

app.use("/api/simulations", simulationRoutes);

app.use("/api/dashboard", dashboardRoutes);

app.use(notFound);

app.use(errorHandler);

export default app;