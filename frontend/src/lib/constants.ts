export const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "http://localhost:5000";

export const SERVICE_STATUS = [
  "HEALTHY",
  "DEGRADED",
  "FAILED",
];

export const CRITICALITY = [
  "LOW",
  "MEDIUM",
  "HIGH",
  "CRITICAL",
];