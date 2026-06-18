"use client";

interface Props {
  simulations: any[];
}

export default function SeverityChart({
  simulations,
}: Props) {
  const averageSeverity =
    simulations.length > 0
      ? Math.round(
          simulations.reduce(
            (sum, item) =>
              sum +
              item.severityScore,
            0
          ) / simulations.length
        )
      : 0;

  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "20px",
        borderRadius: "8px",
      }}
    >
      <h2>
        Average Severity Score
      </h2>

      <h1>{averageSeverity}</h1>
    </div>
  );
}