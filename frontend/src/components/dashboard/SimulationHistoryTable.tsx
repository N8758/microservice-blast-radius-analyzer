"use client";

interface Props {
  simulations: any[];
}

export default function SimulationHistoryTable({
  simulations,
}: Props) {
  return (
    <table
      border={1}
      cellPadding={10}
      width="100%"
    >
      <thead>
        <tr>
          <th>Service</th>
          <th>Blast Radius</th>
          <th>Severity</th>
          <th>Impacted</th>
          <th>Created</th>
        </tr>
      </thead>

      <tbody>
        {simulations.map(
          (simulation) => (
            <tr
              key={simulation.id}
            >
              <td>
                {
                  simulation.failedServiceId
                }
              </td>

              <td>
                {
                  simulation.blastRadius
                }
              </td>

              <td>
                {
                  simulation.severityScore
                }
              </td>

              <td>
                {
                  simulation.impactedCount
                }
              </td>

              <td>
                {new Date(
                  simulation.createdAt
                ).toLocaleString()}
              </td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
}