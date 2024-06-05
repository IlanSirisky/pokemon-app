import axios from "axios";
import { SortByValues } from "../constants/tableSortbyOptions";

const URL = "http://localhost:3000/api";

export const fetchPokemons = async ({
  isOwned,
  searchValue,
  sortBy,
}: {
  isOwned: boolean;
  searchValue: string;
  sortBy: SortByValues | "";
}) => {
  const endpoint = isOwned
    ? "/search-pokemons?isOwned=true"
    : "/search-pokemons";
  const response = await axios.get(URL + endpoint, {
    params: {
      q: searchValue,
      sortBy,
    },
  });
  return response.data;
};

export const fetchPokemonById = async (id: number) => {
  const response = await axios.get(`${URL}/pokemons/${id}`);
  return response.data;
};
