import type { Request, Response } from "express";
import { simulationService } from "../services/simulationService";

export const getSimulations = async (
  _req: Request,
  res: Response
): Promise<void> => {
  try {
    const simulations =
      await simulationService.getSimulations();

    res.status(200).json({
      success: true,
      data: simulations,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch simulations",
    });
  }
};

export const getSimulationById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = req.params.id as string;

    const simulation =
      await simulationService.getSimulationById(id);

    if (!simulation) {
      res.status(404).json({
        success: false,
        message: "Simulation not found",
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: simulation,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch simulation",
    });
  }
};

export const createSimulation = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { failedServiceId } = req.body;

    const simulation =
      await simulationService.createSimulation(
        failedServiceId
      );

    res.status(201).json({
      success: true,
      message: "Simulation created successfully",
      data: simulation,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to create simulation",
    });
  }
};
export const deleteSimulation = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = req.params.id as string;

    await simulationService.deleteSimulation(id);

    res.status(200).json({
      success: true,
      message: "Simulation deleted successfully",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to delete simulation",
    });
  }
};