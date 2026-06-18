"use client";

interface Props {
  stats: {
    totalServices: number;
    healthyServices: number;
    failedServices: number;
    degradedServices: number;
  };
}

export default function HealthCards({
  stats,
}: Props) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns:
          "repeat(auto-fit,minmax(220px,1fr))",
        gap: "20px",
      }}
    >
      <div>
        <h3>Total Services</h3>
        <h1>{stats.totalServices}</h1>
      </div>

      <div>
        <h3>Healthy</h3>
        <h1>{stats.healthyServices}</h1>
      </div>

      <div>
        <h3>Failed</h3>
        <h1>{stats.failedServices}</h1>
      </div>

      <div>
        <h3>Degraded</h3>
        <h1>{stats.degradedServices}</h1>
      </div>
    </div>
  );
}