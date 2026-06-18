"use client";

import { useEffect, useState } from "react";
import ServiceForm from "../../components/services/ServiceForm";

const API = process.env.NEXT_PUBLIC_API_URL;

export default function ServicesPage() {
  const [services, setServices] = useState<any[]>([]);

  const loadServices = async () => {
    try {
      const res = await fetch(`${API}/api/services`);
      const data = await res.json();
      setServices(data.data || []);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadServices();
  }, []);

  return (
    <div className="page-container">
      <h1 className="page-title">
        Services Management
      </h1>

      <div className="card">
        <ServiceForm onSuccess={loadServices} />
      </div>

      <div className="table-card">
        <table className="custom-table">
          <thead>
            <tr>
              <th>Service Code</th>
              <th>Name</th>
              <th>Owner</th>
              <th>Status</th>
              <th>Criticality</th>
            </tr>
          </thead>

          <tbody>
            {services.map(
              (
                service: any,
                index: number
              ) => (
                <tr key={service.id}>
                  <td>
                    {`SRV${String(
                      index + 1
                    ).padStart(3, "0")}`}
                  </td>

                  <td>{service.name}</td>

                  <td>
                    {service.owner}
                  </td>

                  <td>
                    <span
                      className={`status-badge ${service.status?.toLowerCase()}`}
                    >
                      {service.status}
                    </span>
                  </td>

                  <td>
                    {service.criticality}
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}