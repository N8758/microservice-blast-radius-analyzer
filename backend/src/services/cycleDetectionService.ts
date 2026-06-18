export class CycleDetectionService {
  static hasCycle(
    graph: Record<string, string[]>
  ): boolean {
    const visited = new Set<string>();

    const recursionStack = new Set<string>();

    const dfs = (node: string): boolean => {
      if (recursionStack.has(node)) {
        return true;
      }

      if (visited.has(node)) {
        return false;
      }

      visited.add(node);

      recursionStack.add(node);

      const neighbors = graph[node] || [];

      for (const neighbor of neighbors) {
        if (dfs(neighbor)) {
          return true;
        }
      }

      recursionStack.delete(node);

      return false;
    };

    for (const node in graph) {
      if (dfs(node)) {
        return true;
      }
    }

    return false;
  }
}