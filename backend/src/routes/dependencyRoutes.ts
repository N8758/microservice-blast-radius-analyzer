import { Router } from "express";

import {
  getDependencies,
  createDependency,
  deleteDependency,
} from "../controllers/dependencyController";

const router = Router();

router.get("/", getDependencies);

router.post("/", createDependency);

router.delete("/:id", deleteDependency);

export default router;