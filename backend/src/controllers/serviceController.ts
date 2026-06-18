import type { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getServices = async (
  _req: Request,
  res: Response
): Promise<void> => {
  try {
    const services = await prisma.service.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    res.status(200).json({
      success: true,
      data: services,
    });
  } catch (error) {
    console.error("Get Services Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch services",
    });
  }
};

export const getServiceById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = req.params.id as string;

    const service = await prisma.service.findUnique({
      where: {
        id,
      },
    });

    if (!service) {
      res.status(404).json({
        success: false,
        message: "Service not found",
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: service,
    });
  } catch (error) {
    console.error("Get Service Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch service",
    });
  }
};

export const createService = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, description, owner, criticality, status } = req.body;

    const service = await prisma.service.create({
      data: {
        name,
        description,
        owner,
        criticality,
        status,
      },
    });

    res.status(201).json({
      success: true,
      message: "Service created successfully",
      data: service,
    });
  } catch (error) {
    console.error("Create Service Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to create service",
    });
  }
};

export const updateService = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = req.params.id as string;

    const existingService = await prisma.service.findUnique({
      where: {
        id,
      },
    });

    if (!existingService) {
      res.status(404).json({
        success: false,
        message: "Service not found",
      });
      return;
    }

    const updatedService = await prisma.service.update({
      where: {
        id,
      },
      data: {
        name: req.body.name,
        description: req.body.description,
        owner: req.body.owner,
        criticality: req.body.criticality,
        status: req.body.status,
      },
    });

    res.status(200).json({
      success: true,
      message: "Service updated successfully",
      data: updatedService,
    });
  } catch (error) {
    console.error("Update Service Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to update service",
    });
  }
};

export const deleteService = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = req.params.id as string;

    const existingService = await prisma.service.findUnique({
      where: {
        id,
      },
    });

    if (!existingService) {
      res.status(404).json({
        success: false,
        message: "Service not found",
      });
      return;
    }

    await prisma.service.delete({
      where: {
        id,
      },
    });

    res.status(200).json({
      success: true,
      message: "Service deleted successfully",
    });
  } catch (error) {
    console.error("Delete Service Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to delete service",
    });
  }
};