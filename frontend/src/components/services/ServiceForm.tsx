"use client";

import { useState } from "react";

const API =
  process.env.NEXT_PUBLIC_API_URL;

interface ServiceFormProps {
  onSuccess?: () => void;
}

export default function ServiceForm({
  onSuccess,
}: ServiceFormProps) {
  const [formData, setFormData] =
    useState({
      name: "",
      description: "",
      owner: "",
      criticality: "MEDIUM",
      status: "HEALTHY",
    });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `${API}/api/services`,
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify(
            formData
          ),
        }
      );

      if (!res.ok) {
        alert(
          "Failed to create service"
        );
        return;
      }

      setFormData({
        name: "",
        description: "",
        owner: "",
        criticality: "MEDIUM",
        status: "HEALTHY",
      });

      if (onSuccess) {
        onSuccess();
      }

      alert("Service Created");
    } catch (error) {
      console.error(error);
      alert("Server Error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
      }}
    >
      <input
        name="name"
        placeholder="Service Name"
        value={formData.name}
        onChange={handleChange}
      />

      <input
        name="description"
        placeholder="Description"
        value={
          formData.description
        }
        onChange={handleChange}
      />

      <input
        name="owner"
        placeholder="Owner"
        value={formData.owner}
        onChange={handleChange}
      />

      <select
        name="criticality"
        value={
          formData.criticality
        }
        onChange={handleChange}
      >
        <option value="LOW">
          LOW
        </option>
        <option value="MEDIUM">
          MEDIUM
        </option>
        <option value="HIGH">
          HIGH
        </option>
      </select>

      <select
        name="status"
        value={formData.status}
        onChange={handleChange}
      >
        <option value="HEALTHY">
          HEALTHY
        </option>
        <option value="FAILED">
          FAILED
        </option>
        <option value="DEGRADED">
          DEGRADED
        </option>
      </select>

      <button type="submit">
        Create Service
      </button>
    </form>
  );
}