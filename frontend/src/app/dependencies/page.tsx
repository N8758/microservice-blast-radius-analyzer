"use client";

import { useEffect, useState } from "react";
import DependencyForm from "../../components/dependency/DependencyForm";

const API = process.env.NEXT_PUBLIC_API_URL;

export default function DependenciesPage() {
  const [dependencies, setDependencies] =
    useState<any[]>([]);

  const loadDependencies =
    async () => {
      try {
        const res = await fetch(
          `${API}/api/dependencies`
        );

        const data =
          await res.json();

        setDependencies(
          data.data || []
        );
      } catch (error) {
        console.error(error);
      }
    };

  useEffect(() => {
    loadDependencies();
  }, []);

  return (
    <div className="page-container">
      <h1 className="page-title">
        Dependencies
      </h1>

      <div className="card">
        <DependencyForm
          onSuccess={
            loadDependencies
          }
        />
      </div>

      <div className="table-card">
        <table className="custom-table">
          <thead>
            <tr>
              <th>Service</th>
              <th>Depends On</th>
            </tr>
          </thead>

          <tbody>
            {dependencies.length >
            0 ? (
              dependencies.map(
                (item) => (
                  <tr
                    key={item.id}
                  >
                    <td>
                      {
                        item
                          .service
                          ?.name
                      }
                    </td>

                    <td>
                      {
                        item
                          .dependsOn
                          ?.name
                      }
                    </td>
                  </tr>
                )
              )
            ) : (
              <tr>
                <td
                  colSpan={2}
                  style={{
                    textAlign:
                      "center",
                  }}
                >
                  No Dependencies
                  Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}