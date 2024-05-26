import { SelectOptionsType } from "../types/optionsTypes";

export const tableSortByOptions: SelectOptionsType[] = [
  { value: "az", label: "Alphabetical A-Z" },
  { value: "za", label: "Alphabetical Z-A" },
  { value: "powerHighToLow", label: "Power (High to low)" },
  { value: "powerLowToHigh", label: "Power (Low to high)" },
  { value: "hpHighToLow", label: "HP (High to low)" },
  { value: "hpLowToHigh", label: "HP (Low to high)" },
];
