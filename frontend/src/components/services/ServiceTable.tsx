"use client";

interface Props {
  services: any[];
}

export default function ServiceTable({
  services,
}: Props) {
  return (
    <table
      border={1}
      cellPadding={10}
      width="100%"
    >
      <thead>
        <tr>
          <th>Name</th>
          <th>Owner</th>
          <th>Status</th>
          <th>Criticality</th>
        </tr>
      </thead>

      <tbody>
        {services.map((service) => (
          <tr key={service.id}>
            <td>{service.name}</td>
            <td>{service.owner || "N/A"}</td>
            <td>{service.status}</td>
            <td>
  <span className="criticality-badge">
    {service.criticality}
  </span>
</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}