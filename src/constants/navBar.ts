import { INavBarOptions } from "../components/NavBar/types";

export enum PagePaths {
  HOME = "/",
  ALL_POKEMONS = "/all-pokemons",
  MY_POKEMONS = "/my-pokemons",
  FIGHT = "/fight",
  REST = "*",
}

export const navBarOptions: INavBarOptions[] = [
  {
    label: "All Pokemons",
    path: PagePaths.ALL_POKEMONS,
  },
  {
    label: "My Pokemons",
    path: PagePaths.MY_POKEMONS,
  },
];

export const endButton: INavBarOptions = {
  label: "Start a Fight",
  path: PagePaths.FIGHT,
};
