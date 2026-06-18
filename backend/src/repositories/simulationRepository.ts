import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const simulationRepository = {
  getAll: async () => {
    return prisma.simulation.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
  },

  getById: async (id: string) => {
    return prisma.simulation.findUnique({
      where: {
        id,
      },
    });
  },

  create: async (data: {
  failedServiceId: string;
  failedServiceName?: string;
  blastRadius: number;
  severityScore: number;
  impactedCount: number;
}) => {
    return prisma.simulation.create({
      data,
    });
  },

  delete: async (id: string) => {
    return prisma.simulation.delete({
      where: {
        id,
      },
    });
  },
};