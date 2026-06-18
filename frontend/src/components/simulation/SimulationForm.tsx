"use client";

import { useEffect, useState } from "react";

const API = process.env.NEXT_PUBLIC_API_URL;

interface SimulationFormProps {
  onSuccess?: () => void;
}

export default function SimulationForm({
  onSuccess,
}: SimulationFormProps) {
  const [services, setServices] =
    useState<any[]>([]);

  const [failedServiceId,
    setFailedServiceId] =
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

    if (!failedServiceId) {
      alert(
        "Please select a service"
      );
      return;
    }

    try {
      const res = await fetch(
        `${API}/api/simulations`,
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            failedServiceId,
          }),
        }
      );

      const data =
        await res.json();

      console.log(data);

      if (res.ok) {
        setFailedServiceId("");

        if (onSuccess) {
          onSuccess();
        }

        alert(
          "Simulation Created"
        );
      } else {
        alert(
          data.message ||
            "Failed to create simulation"
        );
      }
    } catch (error) {
      console.error(error);
      alert("Server Error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="simulation-form"
    >
      <select
        className="form-select"
        value={failedServiceId}
        onChange={(e) =>
          setFailedServiceId(
            e.target.value
          )
        }
      >
        <option value="">
          Select Failed Service
        </option>

        {services.map(
          (service) => (
            <option
              key={service.id}
              value={service.id}
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
        Run Simulation
      </button>
    </form>
  );
}