export const calculateSeverity =
  (
    blastRadius: number,
    impactedCount: number
  ) => {
    const score =
      blastRadius * 2 +
      impactedCount;

    if (score >= 20) {
      return "CRITICAL";
    }

    if (score >= 10) {
      return "HIGH";
    }

    if (score >= 5) {
      return "MEDIUM";
    }

    return "LOW";
  };