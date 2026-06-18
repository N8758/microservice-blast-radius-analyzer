export class GraphService {
  static buildGraph(dependencies: any[]) {
    const graph: Record<string, string[]> = {};

    for (const dependency of dependencies) {
      const serviceId = dependency.dependsOnId;
      const dependentId = dependency.serviceId;

      if (!graph[serviceId]) {
        graph[serviceId] = [];
      }

      graph[serviceId].push(dependentId);
    }

    return graph;
  }
}