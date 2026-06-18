export const bfs = (
graph: Record<string, string[]>,
startNode: string
) => {
const visited = new Set();

const result: string[] = [];

const queue: string[] = [startNode];

visited.add(startNode);

while (queue.length > 0) {
const current = queue.shift()!;

result.push(current);

const neighbors = graph[current] || [];

for (const neighbor of neighbors) {
  if (!visited.has(neighbor)) {
    visited.add(neighbor);

    queue.push(neighbor);
  }
}

}

return result;
};