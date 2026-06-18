import { serviceRepository } from "../repositories/serviceRepository";

export const serviceService = {
  getServices: async () => {
    return serviceRepository.getAll();
  },

  getServiceById: async (id: string) => {
    return serviceRepository.getById(id);
  },

  createService: async (data: any) => {
    return serviceRepository.create(data);
  },

  updateService: async (id: string, data: any) => {
    return serviceRepository.update(id, data);
  },

  deleteService: async (id: string) => {
    return serviceRepository.delete(id);
  },
};