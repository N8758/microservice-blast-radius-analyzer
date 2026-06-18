import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const serviceRepository = {
  getAll: async () => {
    return prisma.service.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
  },

  getById: async (id: string) => {
    return prisma.service.findUnique({
      where: { id },
    });
  },

  create: async (data: {
    name: string;
    description?: string;
    owner?: string;
    criticality?: string;
    status?: string;
  }) => {
    return prisma.service.create({
      data,
    });
  },

  update: async (id: string, data: any) => {
    return prisma.service.update({
      where: { id },
      data,
    });
  },

  delete: async (id: string) => {
    return prisma.service.delete({
      where: { id },
    });
  },
};