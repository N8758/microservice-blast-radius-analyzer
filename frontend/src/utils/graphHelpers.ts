export const buildGraph = (
  dependencies: any[]
) => {
  const graph: Record<
    string,
    string[]
  > = {};

  dependencies.forEach(
    (dependency) => {
      if (
        !graph[
          dependency.serviceId
        ]
      ) {
        graph[
          dependency.serviceId
        ] = [];
      }

      graph[
        dependency.serviceId
      ].push(
        dependency.dependsOnId
      );
    }
  );

  return graph;
};

export const getNeighbors = (
  graph: Record<
    string,
    string[]
  >,
  node: string
) => {
  return graph[node] || [];
};