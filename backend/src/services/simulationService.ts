import { PrismaClient } from "@prisma/client";
import { simulationRepository } from "../repositories/simulationRepository";
import { dependencyRepository } from "../repositories/dependencyRepository";
import { calculateSeverity } from "../utils/graphHelpers";

const prisma = new PrismaClient();

export const simulationService = {
  getSimulations: async () => {
    return simulationRepository.getAll();
  },

  getSimulationById: async (id: string) => {
    return simulationRepository.getById(id);
  },

  createSimulation: async (
    failedServiceId: string
  ) => {

    const service =
      await prisma.service.findUnique({
        where: {
          id: failedServiceId,
        },
      });

      console.log(
  "SERVICE FOUND:",
  service
);

    const dependencies =
      await dependencyRepository.getAll();

    const impactedServices =
      dependencies.filter(
        (dependency) =>
          dependency.dependsOnId ===
          failedServiceId
      );

    const blastRadius =
      impactedServices.length;

    const impactedCount =
      impactedServices.length;

    const severityScore =
      calculateSeverity(
        blastRadius
      );

    return simulationRepository.create({
      failedServiceId,
      failedServiceName:
        service?.name || "Unknown",
      blastRadius,
      severityScore,
      impactedCount,
    });
  },

  deleteSimulation: async (id: string) => {
    return simulationRepository.delete(id);
  },
};