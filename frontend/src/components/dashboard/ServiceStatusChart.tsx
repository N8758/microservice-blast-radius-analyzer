"use client";

interface Props {
  healthy: number;
  failed: number;
  degraded: number;
}

export default function ServiceStatusChart({
  healthy,
  failed,
  degraded,
}: Props) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "20px",
        borderRadius: "8px",
      }}
    >
      <h2>Service Status</h2>

      <p>
        Healthy: {healthy}
      </p>

      <p>
        Failed: {failed}
      </p>

      <p>
        Degraded: {degraded}
      </p>
    </div>
  );
}