import { INavBarOptions } from "../components/NavBar/types";
import pokeball from "../assets/icons/pokeball.svg";
import Avatar from "../components/Avatar/Avatar";

export enum PagePaths {
  HOME = "/",
  ALL_POKEMONS = "/all-pokemons",
  MY_POKEMONS = "/my-pokemons",
  FIGHT = "/fight",
  REST = "*",
  LOGIN = "/login",
}

export const navBarOptions: INavBarOptions[] = [
  {
    label: "All Pokemons",
    path: PagePaths.ALL_POKEMONS,
  },
  {
    label: "My Pokemons",
    path: PagePaths.MY_POKEMONS,
    icon: (
      <Avatar
        image={pokeball}
        alt="Pokeball icon"
        avatarSize={15}
        wrapperSize={15}
      />
    ),
  },
];

export const endButton: INavBarOptions = {
  label: "Start a Fight",
  path: PagePaths.FIGHT,
};
