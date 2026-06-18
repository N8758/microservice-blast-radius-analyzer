"use client";

import SeverityBadge from "./SeverityBadge";
import ImpactedServices from "./ImpactedServices";

interface Props {
  result: {
    blastRadius: number;
    severityScore: number;
    impactedCount: number;
    impactedServices: string[];
  };
}

export default function BlastRadiusResult({
  result,
}: Props) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "20px",
        borderRadius: "8px",
      }}
    >
      <h2>Simulation Result</h2>

      <p>
        Blast Radius:
        {" "}
        {result.blastRadius}
      </p>

      <p>
        Impacted Count:
        {" "}
        {result.impactedCount}
      </p>

      <SeverityBadge
        score={result.severityScore}
      />

      <br />
      <br />

      <ImpactedServices
        services={
          result.impactedServices
        }
      />
    </div>
  );
}