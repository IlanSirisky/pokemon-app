import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { IPokemonData } from "../types/pokemonTypes";

const URL = "http://localhost:3000/api";

const catchPokemon = async (id: number): Promise<IPokemonData> => {
  const response = await axios.put(`${URL}/pokemons/${id}/catch`);
  return response.data;
};

export const useCatchPokemon = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => catchPokemon(id),
    onSuccess: () => {
      // Invalidate and refetch queries that could be affected by this mutation
      queryClient.invalidateQueries({ queryKey: ["myPokemons"] });
      queryClient.invalidateQueries({ queryKey: ["randomPokemon"] });
      queryClient.invalidateQueries({ queryKey: ["pokemons"] });
    },
    onError: (error) => {
      console.error("Error catching Pokemon:", error);
    },
  });
};
