import { SelectOptionsType } from "../types/optionsTypes";

export enum SortByValues {
  ID = "id",
  AZ = "az",
  ZA = "za",
  POWER_HIGH_TO_LOW = "powerHighToLow",
  POWER_LOW_TO_HIGH = "powerLowToHigh",
  HP_HIGH_TO_LOW = "hpHighToLow",
  HP_LOW_TO_HIGH = "hpLowToHigh",
}

export const tableSortByOptions: SelectOptionsType[] = [
  { value: SortByValues.ID, label: "ID" },
  { value: SortByValues.AZ, label: "Alphabetical A-Z" },
  { value: SortByValues.ZA, label: "Alphabetical Z-A" },
  { value: SortByValues.POWER_HIGH_TO_LOW, label: "Power (High to low)" },
  { value: SortByValues.POWER_LOW_TO_HIGH, label: "Power (Low to high)" },
  { value: SortByValues.HP_HIGH_TO_LOW, label: "HP (High to low)" },
  { value: SortByValues.HP_LOW_TO_HIGH, label: "HP (Low to high)" },
];
