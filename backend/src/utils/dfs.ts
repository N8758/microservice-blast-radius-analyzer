export const dfs = (
graph: Record<string, string[]>,
startNode: string
) => {
const visited = new Set();

const result: string[] = [];

const traverse = (node: string) => {
if (visited.has(node)) {
return;
}

visited.add(node);

result.push(node);

const neighbors = graph[node] || [];

for (const neighbor of neighbors) {
  traverse(neighbor);
}

};

traverse(startNode);

return result;
};