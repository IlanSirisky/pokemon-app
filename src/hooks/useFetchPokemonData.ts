import axios from "axios";
import { SortByValues } from "../constants/tableSortbyOptions";
import { IPokemonData } from "../types/pokemonTypes";

const URL = "http://localhost:3000/api/pokemons";

// fetch pokemons by isOwned flag, search value, and sortBy value
export const fetchPokemons = async ({
  isOwned,
  searchValue,
  sortBy = SortByValues.ID,
  page = 1,
  limit = 10,
}: {
  isOwned: boolean;
  searchValue: string;
  sortBy: SortByValues | "";
  page: number;
  limit: number;
}): Promise<{ pokemons: IPokemonData[]; totalCount: number }> => {
  try {
    const endpoint = isOwned
      ? "/search-pokemons?isOwned=true"
      : "/search-pokemons";
    const response = await axios.get(URL + endpoint, {
      params: {
        searchValue,
        sortBy,
        page,
        limit,
      },
    });

    return response.data.data;
  } catch (error) {
    console.error("Error fetching pokemons:", error);
    throw new Error("Failed to fetch pokemons");
  }
};

// fetch pokemon by id
export const fetchPokemonById = async (id: number): Promise<IPokemonData> => {
  try {
    const response = await axios.get(`${URL}/${id}`);
    return response.data.data;
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
    return response.data.data;
  } catch (error) {
    console.error("Error fetching random pokemon:", error);
    throw new Error("Failed to fetch random pokemon");
  }
};

// fetch my pokemons
export const fetchOwnedPokemons = async (): Promise<IPokemonData[]> => {
  try {
    const response = await axios.get(URL + "/search-pokemons?isOwned=true", {
      params: {
        page: 1,
        limit: 10000,
      },
    });
    return response.data.data.pokemons;
  } catch (error) {
    console.error("Error fetching pokemons:", error);
    throw new Error("Failed to fetch pokemons");
  }
};
