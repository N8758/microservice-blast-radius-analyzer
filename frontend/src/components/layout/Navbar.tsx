"use client";

export default function Navbar() {
  return (
    <header
      style={{
        height: "70px",
        borderBottom: "1px solid #ddd",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 20px",
      }}
    >
      <h2>
        Dependency Blast Radius Simulator
      </h2>

      <div>
        System Health Dashboard
      </div>
    </header>
  );
}