import { IColumnLabels } from "../components/Table/types";
import PokemonAvatarTableCell from "../features/listView/TableCell/PokemonAvatarTableCell";
import PokemonDescTableCell from "../features/listView/TableCell/PokemonDescTableCell";
import PokemonIdTableCell from "../features/listView/TableCell/PokemonIdTableCell";
import PokemonTypeTableCell from "../features/listView/TableCell/PokemonTypeTabelCell";
import { cssSpacings } from "../styles/stylingValues";
import { IPokemonData } from "../types/pokemonTypes";

export const pokemonTableColumnLabels: IColumnLabels[] = [
  {
    value: "title",
    label: "Pokemon name",
    padding: `0 0 0 ${cssSpacings.s85}`,
    width: "30%",
    component: (row: IPokemonData) => <PokemonAvatarTableCell row={row} />,
  },
  {
    value: "id",
    label: "ID",
    padding: "0",
    width: "5%",
    component: (row: IPokemonData) => <PokemonIdTableCell row={row} />,
  },
  {
    value: "description",
    label: "Description",
    padding: `0 ${cssSpacings.s120} 0 0`,
    width: "35%",
    component: (row: IPokemonData) => <PokemonDescTableCell row={row} />,
  },
  {
    value: "profile.types",
    label: "Types",
    padding: "0",
    width: "15%",
    component: (row: IPokemonData) => <PokemonTypeTableCell row={row} />,
  },
  {
    value: "baseStats.power_level",
    label: "Power level",
    padding: "0",
    width: "10%",
  },
  { value: "baseStats.hp", label: "HP", padding: "0", width: "5%" },
];
