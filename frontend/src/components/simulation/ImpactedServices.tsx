"use client";

interface Props {
  services: string[];
}

export default function ImpactedServices({
  services,
}: Props) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "16px",
        borderRadius: "8px",
      }}
    >
      <h3>Impacted Services</h3>

      <ul>
        {services.map((service) => (
          <li key={service}>
            {service}
          </li>
        ))}
      </ul>
    </div>
  );
}