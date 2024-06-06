import axios from "axios";
import { SortByValues } from "../constants/tableSortbyOptions";
import { IPokemonData } from "../types/pokemonTypes";

const URL = "http://localhost:3000/api";

// fetch pokemons by isOwned flag, search value, and sortBy value
export const fetchPokemons = async ({
  isOwned,
  searchValue,
  sortBy,
}: {
  isOwned: boolean;
  searchValue: string;
  sortBy: SortByValues | "";
}): Promise<IPokemonData[]> => {
  try {
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
  } catch (error) {
    console.error("Error fetching pokemons:", error);
    throw new Error("Failed to fetch pokemons");
  }
};

// fetch pokemon by id
export const fetchPokemonById = async (id: number): Promise<IPokemonData> => {
  try {
    const response = await axios.get(`${URL}/pokemons/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching pokemon with ID ${id}:`, error);
    throw new Error("Failed to fetch pokemon by ID");
  }
};

// fetch random pokemon by isOwned flag
export const fetchRandomPokemon = async (
  isOwned: boolean
): Promise<IPokemonData> => {
  try {
    const response = await axios.get(`${URL}/random-pokemon`, {
      params: {
        isOwned,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching random pokemon:", error);
    throw new Error("Failed to fetch random pokemon");
  }
};

// fetch my pokemons
export const fetchMyPokemons = async (): Promise<IPokemonData[]> => {
  try {
    const response = await axios.get(`${URL}/pokemons/owned`);
    return response.data;
  } catch (error) {
    console.error("Error fetching my pokemons:", error);
    throw new Error("Failed to fetch my pokemons");
  }
};
