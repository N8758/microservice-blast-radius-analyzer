"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  {
    name: "Dashboard",
    path: "/dashboard",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Dependencies",
    path: "/dependencies",
  },
  {
    name: "Simulations",
    path: "/simulations",
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside
      style={{
        width: "250px",
        height: "100vh",
        borderRight: "1px solid #ddd",
        padding: "20px",
      }}
    >
      <h2>
        Blast Radius
      </h2>

      <nav>
        {menuItems.map((item) => (
          <div
            key={item.path}
            style={{
              marginBottom: "12px",
            }}
          >
            <Link
              href={item.path}
              style={{
                fontWeight:
                  pathname === item.path
                    ? "bold"
                    : "normal",
              }}
            >
              {item.name}
            </Link>
          </div>
        ))}
      </nav>
    </aside>
  );
}