import { SortByValues } from "../constants/tableSortbyOptions";
import { IPokemonData, PokemonTypesCount } from "../types/pokemonTypes";
import axiosInstance from "../configs/axiosConfig";

const ENDPOINT = import.meta.env.VITE_POKEMONS_ENDPOINT;

// fetch pokemons by isOwned flag, search value, and sortBy value
export const fetchPokemons = async ({
  isOwned,
  searchValue,
  sortBy = SortByValues.ID,
  page = 1,
  limit = 10,
}: {
  isOwned: boolean | undefined;
  searchValue: string;
  sortBy: SortByValues | "";
  page: number;
  limit: number;
}): Promise<{ pokemons: IPokemonData[]; totalCount: number }> => {
  try {
    const response = await axiosInstance.get(ENDPOINT + "/search-pokemons", {
      params: {
        isOwned,
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
    const response = await axiosInstance.get(ENDPOINT + `/${id}`);
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
    const response = await axiosInstance.get(ENDPOINT + "/random-pokemon", {
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
    const response = await axiosInstance.get(ENDPOINT + "/search-pokemons", {
      params: {
        isOwned: true,
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

export const fetchPokemonTypesCount = async (): Promise<PokemonTypesCount> => {
  try {
    const response = await axiosInstance.get(ENDPOINT + "/pokemon-types-count");
    return response.data.data;
  } catch (error) {
    console.error("Error fetching pokemon types count:", error);
    throw new Error("Failed to fetch pokemon types count");
  }
};
