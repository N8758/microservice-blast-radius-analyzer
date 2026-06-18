import { dependencyRepository } from "../repositories/dependencyRepository";

export const dependencyService = {
  getDependencies: async () => {
    return dependencyRepository.getAll();
  },

  getDependencyById: async (id: string) => {
    return dependencyRepository.getById(id);
  },

  createDependency: async (
    serviceId: string,
    dependsOnId: string
  ) => {
    return dependencyRepository.create(
      serviceId,
      dependsOnId
    );
  },

  deleteDependency: async (id: string) => {
    return dependencyRepository.delete(id);
  },
};