import axios from "../lib/axios";

export const getDependencies =
  async () => {
    const response =
      await axios.get(
        "/api/dependencies"
      );

    return response.data;
  };

export const getDependencyById =
  async (id: string) => {
    const response =
      await axios.get(
        `/api/dependencies/${id}`
      );

    return response.data;
  };

export const createDependency =
  async (
    serviceId: string,
    dependsOnId: string
  ) => {
    const response =
      await axios.post(
        "/api/dependencies",
        {
          serviceId,
          dependsOnId,
        }
      );

    return response.data;
  };

export const deleteDependency =
  async (id: string) => {
    const response =
      await axios.delete(
        `/api/dependencies/${id}`
      );

    return response.data;
  };