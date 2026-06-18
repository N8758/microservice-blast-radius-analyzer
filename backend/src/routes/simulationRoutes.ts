import { Router } from "express";
import {
  getSimulations,
  getSimulationById,
  createSimulation,
  deleteSimulation,
} from "../controllers/simulationController";

const router = Router();

router.get("/", getSimulations);

router.get("/:id", getSimulationById);

router.post("/", createSimulation);

router.delete("/:id", deleteSimulation);

export default router;