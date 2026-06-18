"use client";

import { useEffect, useState } from "react";
import SimulationForm from "../../components/simulation/SimulationForm";

const API =
  process.env.NEXT_PUBLIC_API_URL;

export default function SimulationsPage() {
  const [simulations, setSimulations] =
    useState<any[]>([]);

  const loadSimulations =
    async () => {
      const res = await fetch(
        `${API}/api/simulations`
      );

      const data =
        await res.json();

      setSimulations(
        data.data || []
      );
    };

  useEffect(() => {
    loadSimulations();
  }, []);

  return (
    <div
      style={{
        padding: "20px",
      }}
    >
      <h1>
        Simulation History
      </h1>

     <SimulationForm
  onSuccess={
    loadSimulations
  }
/>

      <br />

      <table className="custom-table">
        <thead>
          <tr>
            <th>
              Failed Service
            </th>
            <th>
              Blast Radius
            </th>
            <th>
              Severity
            </th>
            <th>
              Impacted
            </th>
          </tr>
        </thead>

        <tbody>
          {simulations.map(
            (item) => (
              <tr key={item.id}>
                <td>
  {item.failedServiceName || item.failedServiceId}
</td>

                <td>
                  {
                    item.blastRadius
                  }
                </td>

                <td>
                  {
                    item.severityScore
                  }
                </td>

                <td>
                  {
                    item.impactedCount
                  }
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}