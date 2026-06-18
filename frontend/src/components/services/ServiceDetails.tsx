"use client";

interface Props {
  service: {
    id: string;
    name: string;
    description?: string;
    owner?: string;
    status: string;
    criticality: string;
    createdAt?: string;
  };
}

export default function ServiceDetails({
  service,
}: Props) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "20px",
        borderRadius: "8px",
      }}
    >
      <h2>{service.name}</h2>

      <p>
        <strong>Description:</strong>{" "}
        {service.description}
      </p>

      <p>
        <strong>Owner:</strong>{" "}
        {service.owner}
      </p>

      <p>
        <strong>Status:</strong>{" "}
        {service.status}
      </p>

      <p>
        <strong>Criticality:</strong>{" "}
        {service.criticality}
      </p>

      <p>
        <strong>ID:</strong>{" "}
        {service.id}
      </p>

      <p>
        <strong>Created:</strong>{" "}
        {service.createdAt}
      </p>
    </div>
  );
}