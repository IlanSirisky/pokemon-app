import axios from "axios";

export const fetchPokemons = async ({
  isOwned,
  searchValue,
  sortBy,
}: {
  isOwned: boolean;
  searchValue: string;
  sortBy: string;
}) => {
  const URL = "http://localhost:3000";
  const endpoint = isOwned
    ? "/api/search-pokemons?isOwned=true"
    : "/api/search-pokemons";
  const response = await axios.get(URL + endpoint, {
    params: {
      q: searchValue,
      sortBy,
    },
  });
  return response.data;
};
