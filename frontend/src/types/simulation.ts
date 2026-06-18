export interface Simulation {
  id: string;
  failedServiceId: string;
  blastRadius: number;
  severityScore: number;
  impactedCount: number;
  createdAt: string;
}