"use client";

import { useEffect, useState } from "react";
import { getServices } from "../services/serviceApi";

export const useServices = () => {
  const [services, setServices] =
    useState<any[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState<string | null>(null);

  useEffect(() => {
    const fetchServices =
      async () => {
        try {
          const data =
            await getServices();

          setServices(
            data.data || []
          );
        } catch (err) {
          setError(
            "Failed to load services"
          );
        } finally {
          setLoading(false);
        }
      };

    fetchServices();
  }, []);

  return {
    services,
    loading,
    error,
  };
};