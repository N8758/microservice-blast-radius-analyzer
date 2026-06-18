import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Dependency Blast Radius Simulator",
  description: "System Dependency Visualization Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav
          style={{
            padding: "16px",
            borderBottom: "1px solid #ddd",
            display: "flex",
            gap: "20px",
          }}
        >
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/dependencies">Dependencies</Link>
          <Link href="/simulations">Simulations</Link>
          <Link href="/dashboard">Dashboard</Link>
        </nav>

        <main
          style={{
            padding: "20px",
          }}
        >
          {children}
        </main>
      </body>
    </html>
  );
}