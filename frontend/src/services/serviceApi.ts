import axios from "../lib/axios";

export const getServices = async () => {
  const response = await axios.get("/api/services");
  return response.data;
};

export const getServiceById = async (
  id: string
) => {
  const response = await axios.get(
    `/api/services/${id}`
  );

  return response.data;
};

export const createService = async (
  data: any
) => {
  const response = await axios.post(
    "/api/services",
    data
  );

  return response.data;
};

export const updateService = async (
  id: string,
  data: any
) => {
  const response = await axios.put(
    `/api/services/${id}`,
    data
  );

  return response.data;
};

export const deleteService = async (
  id: string
) => {
  const response = await axios.delete(
    `/api/services/${id}`
  );

  return response.data;
};