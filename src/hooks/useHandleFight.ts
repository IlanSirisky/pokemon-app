import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { IPokemonData } from "../types/pokemonTypes";

const URL = import.meta.env.VITE_FIGHT_URL;

interface IFightState {
  message: string;
  data: {
    playerPokemon: IPokemonData;
    opponentPokemon: IPokemonData;
    playerCurrentHp: number;
    opponentCurrentHp: number;
  };
}

interface CatchResponse {
  message: string;
  data: { message: string; caught: boolean; pokemon?: IPokemonData };
}

export const startFight = async ({
  playerPokemonId,
  opponentPokemonId,
}: {
  playerPokemonId: number;
  opponentPokemonId: number;
}): Promise<IFightState> => {
  const response = await axios.post<IFightState>(`${URL}/start-fight`, {
    playerPokemonId,
    opponentPokemonId,
  });
  return response.data;
};

export const playerAttack = async (): Promise<IFightState> => {
  const response = await axios.get<IFightState>(`${URL}/player-attack`);
  return response.data;
};

export const opponentAttack = async (): Promise<IFightState> => {
  const response = await axios.get<IFightState>(`${URL}/opponent-attack`);
  return response.data;
};

export const useHandleFight = () => {
  const startFightMutation = useMutation({
    mutationFn: startFight,
    onError: (error) => {
      console.error("Error starting fight:", error);
    },
  });

  const playerAttackMutation = useMutation({
    mutationFn: playerAttack,
    onError: (error) => {
      console.error("Error performing player attack:", error);
    },
  });

  const opponentAttackMutation = useMutation({
    mutationFn: opponentAttack,
    onError: (error) => {
      console.error("Error performing opponent attack:", error);
    },
  });

  return {
    startFightMutation,
    playerAttackMutation,
    opponentAttackMutation,
  };
};

const catchPokemon = async (): Promise<CatchResponse> => {
  const response = await axios.get<CatchResponse>(`${URL}/catch`);
  return response.data;
};

export const useCatchPokemon = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: catchPokemon,
    onSuccess: (data) => {
      if (data.data.caught) {
        // Invalidate and refetch queries that could be affected by this mutation
        setTimeout(() => {
          queryClient.invalidateQueries({ queryKey: ["myPokemons"] });
          queryClient.invalidateQueries({ queryKey: ["randomPokemon"] });
          queryClient.invalidateQueries({ queryKey: ["pokemons"] });
        }, 2500);
      }
    },
    onError: (error) => {
      console.error("Error catching Pokemon:", error);
    },
  });
};
