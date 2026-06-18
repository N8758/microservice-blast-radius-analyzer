"use client";

import { useEffect, useState } from "react";

const API =
  process.env.NEXT_PUBLIC_API_URL;

interface DependencyFormProps {
  onSuccess?: () => void;
}

export default function DependencyForm({
  onSuccess,
}: DependencyFormProps) {
  const [services, setServices] =
    useState<any[]>([]);

  const [serviceId, setServiceId] =
    useState("");

  const [dependsOnId, setDependsOnId] =
    useState("");

  useEffect(() => {
    loadServices();
  }, []);

  const loadServices =
    async () => {
      try {
        const res = await fetch(
          `${API}/api/services`
        );

        const data =
          await res.json();

        setServices(
          data.data || []
        );
      } catch (error) {
        console.error(error);
      }
    };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    if (
      !serviceId ||
      !dependsOnId
    ) {
      alert(
        "Please select both services"
      );
      return;
    }

    if (
      serviceId ===
      dependsOnId
    ) {
      alert(
        "A service cannot depend on itself"
      );
      return;
    }

    try {
      const res = await fetch(
        `${API}/api/dependencies`,
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            serviceId,
            dependsOnId,
          }),
        }
      );

      if (!res.ok) {
        alert(
          "Failed to add dependency"
        );
        return;
      }

      setServiceId("");
      setDependsOnId("");

      if (onSuccess) {
        onSuccess();
      }

      alert(
        "Dependency Added"
      );
    } catch (error) {
      console.error(error);
      alert("Server Error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="dependency-form"
    >
      <select
        className="form-select"
        value={serviceId}
        onChange={(e) =>
          setServiceId(
            e.target.value
          )
        }
      >
        <option value="">
          Select Service
        </option>

        {services.map(
          (service) => (
            <option
              key={service.id}
              value={
                service.id
              }
            >
              {service.name}
            </option>
          )
        )}
      </select>

      <select
        className="form-select"
        value={dependsOnId}
        onChange={(e) =>
          setDependsOnId(
            e.target.value
          )
        }
      >
        <option value="">
          Depends On
        </option>

        {services.map(
          (service) => (
            <option
              key={service.id}
              value={
                service.id
              }
            >
              {service.name}
            </option>
          )
        )}
      </select>

      <button
        type="submit"
        className="primary-btn"
      >
        Add Dependency
      </button>
    </form>
  );
}