import axios from "../lib/axios";

export const getDashboardStats =
  async () => {
    const response =
      await axios.get(
        "/api/dashboard"
      );

    return response.data;
  };

export const getHealthSummary =
  async () => {
    const response =
      await axios.get(
        "/api/dashboard/health"
      );

    return response.data;
  };

export const getSimulationHistory =
  async () => {
    const response =
      await axios.get(
        "/api/dashboard/history"
      );

    return response.data;
  };