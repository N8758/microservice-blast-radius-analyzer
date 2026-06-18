export class SeverityService {
  static calculateSeverity(
    impactedCount: number,
    depth: number
  ) {
    const score = impactedCount * depth;

    let level = "LOW";

    if (score >= 5) {
      level = "MEDIUM";
    }

    if (score >= 15) {
      level = "HIGH";
    }

    if (score >= 25) {
      level = "CRITICAL";
    }

    return {
      score,
      level,
    };
  }
}