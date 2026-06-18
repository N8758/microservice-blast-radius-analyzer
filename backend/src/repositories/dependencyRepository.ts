import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const dependencyRepository = {
  getAll: async () => {
    return prisma.dependency.findMany({
      include: {
        service: true,
        dependsOn: true,
      },
    });
  },

  getById: async (id: string) => {
    return prisma.dependency.findUnique({
      where: { id },
      include: {
        service: true,
        dependsOn: true,
      },
    });
  },

  create: async (serviceId: string, dependsOnId: string) => {
    return prisma.dependency.create({
      data: {
        serviceId,
        dependsOnId,
      },
    });
  },

  delete: async (id: string) => {
    return prisma.dependency.delete({
      where: { id },
    });
  },
};