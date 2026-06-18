"use client";

interface Props {
  score: number;
}

export default function SeverityBadge({
  score,
}: Props) {
  let label = "LOW";

  if (score >= 70) {
    label = "HIGH";
  } else if (score >= 40) {
    label = "MEDIUM";
  }

  return (
    <span
      style={{
        padding: "6px 12px",
        borderRadius: "6px",
        border: "1px solid #ccc",
      }}
    >
      {label} ({score})
    </span>
  );
}