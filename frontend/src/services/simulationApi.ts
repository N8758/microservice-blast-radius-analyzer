import axios from "../lib/axios";

export const getSimulations =
  async () => {
    const response =
      await axios.get(
        "/api/simulations"
      );

    return response.data;
  };

export const getSimulationById =
  async (id: string) => {
    const response =
      await axios.get(
        `/api/simulations/${id}`
      );

    return response.data;
  };

export const createSimulation =
  async (data: {
    failedServiceId: string;
    blastRadius: number;
    severityScore: number;
    impactedCount: number;
  }) => {
    const response =
      await axios.post(
        "/api/simulations",
        data
      );

    return response.data;
  };

export const deleteSimulation =
  async (id: string) => {
    const response =
      await axios.delete(
        `/api/simulations/${id}`
      );

    return response.data;
  };