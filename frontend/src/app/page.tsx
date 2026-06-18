"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Dependency Blast Radius Simulator</h1>

      <p>
        Simulate service failures and analyze
        dependency impact across distributed
        systems.
      </p>

      <div
        style={{
          display: "flex",
          gap: "16px",
          marginTop: "20px",
          flexWrap: "wrap",
        }}
      >
        <Link href="/services">
          <button>Manage Services</button>
        </Link>

        <Link href="/dependencies">
          <button>Manage Dependencies</button>
        </Link>

        <Link href="/simulations">
          <button>Run Simulations</button>
        </Link>

        <Link href="/dashboard">
          <button>View Dashboard</button>
        </Link>
      </div>
    </div>
  );
}