"use client";

interface ServiceCardProps {
  service: {
    id: string;
    name: string;
    owner?: string;
    status: string;
    criticality: string;
  };
}

export default function ServiceCard({
  service,
}: ServiceCardProps) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "16px",
      }}
    >
      <h3>{service.name}</h3>

      <p>
        <strong>Owner:</strong>{" "}
        {service.owner || "N/A"}
      </p>

      <p>
        <strong>Status:</strong>{" "}
        {service.status}
      </p>

      <p>
        <strong>Criticality:</strong>{" "}
        {service.criticality}
      </p>
    </div>
  );
}