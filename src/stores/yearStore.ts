import { create } from 'zustand';

type YearState = {
  year: number;
  setYear: (y: number) => void;
};

export const useYearStore = create<YearState>((set) => ({
  year: 2025, // Default year
  setYear: (y) => set({ year: y }),
}));
