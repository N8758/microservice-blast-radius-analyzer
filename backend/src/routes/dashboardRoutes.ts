import { Router } from "express";

import {
getDashboardStats,
getHealthSummary,
getSimulationHistory,
} from "../controllers/dashboardController";

const router = Router();

router.get("/", getDashboardStats);

router.get("/health", getHealthSummary);

router.get("/history", getSimulationHistory);

export default router;
