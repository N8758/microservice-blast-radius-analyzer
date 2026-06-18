import { create } from "zustand";

interface SimulationState {
  simulation: any;
  setSimulation: (data: any) => void;
}

export const useSimulationStore =
  create<SimulationState>((set) => ({
    simulation: null,

    setSimulation: (data) =>
      set({
        simulation: data,
      }),
  }));