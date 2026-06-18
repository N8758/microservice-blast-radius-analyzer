"use client";

import { useState } from "react";
import BlastRadiusResult from "./BlastRadiusResult";

const API =
  process.env.NEXT_PUBLIC_API_URL;

export default function SimulationPanel() {
  const [failedServiceId, setFailedServiceId] =
    useState("");

  const [result, setResult] =
    useState<any>(null);

  const runSimulation = async () => {
    const response = await fetch(
      `${API}/api/simulations`,
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify({
          failedServiceId,
          blastRadius: 0,
          severityScore: 0,
          impactedCount: 0,
        }),
      }
    );

    const data =
      await response.json();

    setResult({
      blastRadius:
        data.data?.blastRadius || 0,
      severityScore:
        data.data?.severityScore || 0,
      impactedCount:
        data.data?.impactedCount || 0,
      impactedServices: [],
    });
  };

  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "20px",
        borderRadius: "8px",
      }}
    >
      <h2>
        Run Failure Simulation
      </h2>

      <input
        placeholder="Failed Service ID"
        value={failedServiceId}
        onChange={(e) =>
          setFailedServiceId(
            e.target.value
          )
        }
      />

      <button
        onClick={runSimulation}
      >
        Run Simulation
      </button>

      {result && (
        <>
          <br />
          <br />
          <BlastRadiusResult
            result={result}
          />
        </>
      )}
    </div>
  );
}