import type { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getDashboardStats = async (
_req: Request,
res: Response
) => {
try {
const totalServices = await prisma.service.count();

const healthyServices = await prisma.service.count({
  where: {
    status: "HEALTHY",
  },
});

const failedServices = await prisma.service.count({
  where: {
    status: "FAILED",
  },
});

const degradedServices = await prisma.service.count({
  where: {
    status: "DEGRADED",
  },
});

const totalDependencies = await prisma.dependency.count();

const totalSimulations = await prisma.simulation.count();

const latestSimulation = await prisma.simulation.findFirst({
  orderBy: {
    createdAt: "desc",
  },
});

res.status(200).json({
  success: true,
  data: {
    totalServices,
    healthyServices,
    failedServices,
    degradedServices,
    totalDependencies,
    totalSimulations,
    latestSimulation,
  },
});

} catch (error) {
console.error(error);

res.status(500).json({
  success: false,
  message: "Failed to load dashboard",
});

}
};

export const getHealthSummary = async (
_req: Request,
res: Response
) => {
try {
const services = await prisma.service.findMany({
select: {
id: true,
name: true,
status: true,
criticality: true,
},
});

res.status(200).json({
  success: true,
  data: services,
});

} catch (error) {
console.error(error);

res.status(500).json({
  success: false,
  message: "Failed to load health summary",
});

}
};

export const getSimulationHistory = async (
_req: Request,
res: Response
) => {
try {
const simulations = await prisma.simulation.findMany({
orderBy: {
createdAt: "desc",
},
});

res.status(200).json({
  success: true,
  data: simulations,
});

} catch (error) {
console.error(error);

res.status(500).json({
  success: false,
  message: "Failed to load simulation history",
});

}
};