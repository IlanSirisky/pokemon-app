import { IColumnLabels } from "../components/Table/types";
import PokemonAvatarTableCell from "../features/listView/TableCell/PokemonAvatarTableCell";
import PokemonIdTableCell from "../features/listView/TableCell/PokemonIdTableCell";
import { IPokemonData } from "../types/pokemonTypes";

export const pokemonTableColumnLabels: IColumnLabels[] = [
  {
    value: "title",
    label: "Pokemon name",
    padding: "0 0 0 70px",
    width: "30%",
    component: (row: IPokemonData) => <PokemonAvatarTableCell row={row} />,
  },
  {
    value: "id",
    label: "ID",
    padding: "0 40px 0 0",
    width: "10%",
    component: (row: IPokemonData) => <PokemonIdTableCell row={row} />,
  },
  {
    value: "description",
    label: "Description",
    padding: "0 120px 0 0",
    width: "40%",
  },
  { value: "powerLevel", label: "Power level", padding: "0", width: "10%" },
  { value: "hp", label: "HP level", padding: "0", width: "10%" },
];
