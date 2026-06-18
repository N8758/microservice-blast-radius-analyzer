import type { Request, Response } from "express";
import { dependencyService } from "../services/dependency";

export const getDependencies = async (
  _req: Request,
  res: Response
): Promise<void> => {
  try {
    const dependencies =
      await dependencyService.getDependencies();

    res.status(200).json({
      success: true,
      data: dependencies,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch dependencies",
    });
  }
};

export const createDependency = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { serviceId, dependsOnId } = req.body;

    const dependency =
      await dependencyService.createDependency(
        serviceId,
        dependsOnId
      );

    res.status(201).json({
      success: true,
      message: "Dependency created successfully",
      data: dependency,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create dependency",
    });
  }
};

export const deleteDependency = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = req.params.id as string;

    await dependencyService.deleteDependency(id);

    res.status(200).json({
      success: true,
      message: "Dependency deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete dependency",
    });
  }
};