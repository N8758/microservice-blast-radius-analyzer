"use client";

import { useEffect, useState } from "react";

const API =
  process.env.NEXT_PUBLIC_API_URL;

export default function DashboardPage() {
  const [stats, setStats] =
    useState<any>(null);

  useEffect(() => {
    fetch(`${API}/api/dashboard`)
      .then((res) => res.json())
      .then((data) =>
        setStats(data.data)
      )
      .catch((err) =>
        console.error(err)
      );
  }, []);

  if (!stats) {
    return (
      <div className="dashboard-loading">
        <div className="loader"></div>
        <h2>Loading Dashboard...</h2>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">
        Dependency Blast Radius Dashboard
      </h1>

      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h3>Total Services</h3>
          <h2>
            {stats.totalServices}
          </h2>
        </div>

        <div className="dashboard-card healthy">
          <h3>Healthy Services</h3>
          <h2>
            {stats.healthyServices}
          </h2>
        </div>

        <div className="dashboard-card failed">
          <h3>Failed Services</h3>
          <h2>
            {stats.failedServices}
          </h2>
        </div>

        <div className="dashboard-card degraded">
          <h3>Degraded Services</h3>
          <h2>
            {stats.degradedServices}
          </h2>
        </div>

        <div className="dashboard-card">
          <h3>Total Dependencies</h3>
          <h2>
            {stats.totalDependencies}
          </h2>
        </div>

        <div className="dashboard-card">
          <h3>Total Simulations</h3>
          <h2>
            {stats.totalSimulations}
          </h2>
        </div>
      </div>
    </div>
  );
}