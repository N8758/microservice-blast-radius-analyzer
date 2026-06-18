"use client";

interface Props {
  detected: boolean;
  services?: string[];
}

export default function CircularDependencyAlert({
  detected,
  services = [],
}: Props) {
  if (!detected) {
    return null;
  }

  return (
    <div
      style={{
        background: "#ffe5e5",
        border: "1px solid red",
        padding: "16px",
        borderRadius: "8px",
        marginBottom: "16px",
      }}
    >
      <h3>
        Circular Dependency Detected
      </h3>

      <p>
        Cycle:
        {" "}
        {services.join(" → ")}
      </p>
    </div>
  );
}