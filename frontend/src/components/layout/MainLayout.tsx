"use client";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({
  children,
}: MainLayoutProps) {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <Sidebar />

      <div
        style={{
          flex: 1,
        }}
      >
        <Navbar />

        <main
          style={{
            padding: "20px",
          }}
        >
          {children}
        </main>
      </div>
    </div>
  );
}