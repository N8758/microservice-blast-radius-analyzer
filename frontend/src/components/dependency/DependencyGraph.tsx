"use client";

interface Props {
  dependencies: any[];
}

export default function DependencyGraph({
  dependencies,
}: Props) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "20px",
        borderRadius: "8px",
      }}
    >
      <h2>Dependency Graph</h2>

      {dependencies.map((dep) => (
        <div key={dep.id}>
          {dep.service?.name} →{" "}
          {dep.dependsOn?.name}
        </div>
      ))}
    </div>
  );
}