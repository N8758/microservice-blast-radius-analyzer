"use client";

import { useEffect, useState } from "react";
import { getDependencies } from "../services/dependencyApi";

export const useDependencies = () => {
  const [dependencies, setDependencies] =
    useState<any[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState<string | null>(null);

  useEffect(() => {
    const fetchDependencies =
      async () => {
        try {
          const data =
            await getDependencies();

          setDependencies(
            data.data || []
          );
        } catch (err) {
          setError(
            "Failed to load dependencies"
          );
        } finally {
          setLoading(false);
        }
      };

    fetchDependencies();
  }, []);

  return {
    dependencies,
    loading,
    error,
  };
};