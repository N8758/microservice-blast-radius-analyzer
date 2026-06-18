"use client";

interface Props {
  path: string[];
}

export default function DependencyPath({
  path,
}: Props) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "16px",
        borderRadius: "8px",
      }}
    >
      <h3>Dependency Path</h3>

      <p>
        {path.join(" → ")}
      </p>
    </div>
  );
}