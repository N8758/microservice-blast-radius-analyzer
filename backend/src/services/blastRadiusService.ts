import { GraphService } from "./graphService";

export class BlastRadiusService {
  static calculateBlastRadius(
    failedServiceId: string,
    dependencies: any[]
  ) {
    const graph =
      GraphService.buildGraph(dependencies);

    const visited = new Set<string>();

    const impactedServices: string[] = [];

    const queue: string[] = [failedServiceId];

    visited.add(failedServiceId);

    while (queue.length > 0) {
      const current = queue.shift()!;

      const neighbors = graph[current] || [];

      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);

          impactedServices.push(neighbor);

          queue.push(neighbor);
        }
      }
    }

    return {
      blastRadius: impactedServices.length,
      impactedServices,
    };
  }
}