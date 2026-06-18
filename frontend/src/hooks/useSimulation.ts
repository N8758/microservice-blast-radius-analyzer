"use client";

import { useState } from "react";
import { createSimulation } from "../services/simulationApi";

export const useSimulation = () => {
  const [loading, setLoading] =
    useState(false);

  const [result, setResult] =
    useState<any>(null);

  const runSimulation = async (
    payload: {
      failedServiceId: string;
      blastRadius: number;
      severityScore: number;
      impactedCount: number;
    }
  ) => {
    try {
      setLoading(true);

      const response =
        await createSimulation(
          payload
        );

      setResult(
        response.data
      );

      return response;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    result,
    runSimulation,
  };
};