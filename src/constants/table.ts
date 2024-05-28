import { IColumnLabels } from "../components/Table/types";

export const pokemonTableColumnLabels: IColumnLabels[] = [
  {
    value: "title",
    label: "Pokemon name",
    padding: "0 0 0 70px",
    width: "30%",
  },
  { value: "id", label: "ID", padding: "0 40px 0 0", width: "10%" },
  {
    value: "description",
    label: "Description",
    padding: "0 118px 0 0",
    width: "40%",
  },
  { value: "powerLevel", label: "Power level", padding: "0", width: "10%" },
  { value: "hp", label: "HP level", padding: "0", width: "10%" },
];
