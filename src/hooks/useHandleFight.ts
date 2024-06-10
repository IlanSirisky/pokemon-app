import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { IPokemonData } from "../types/pokemonTypes";

const URL = "http://localhost:3000/api/battle";

interface StartFightResponse {
  playerPokemon: IPokemonData;
  opponentPokemon: IPokemonData;
  playerCurrentHp: number;
  opponentCurrentHp: number;
}

interface AttackResponse {
  playerCurrentHp: number;
  opponentCurrentHp: number;
}

export const startFight = async ({
  playerPokemonId,
  opponentPokemonId,
}: {
  playerPokemonId: number;
  opponentPokemonId: number;
}): Promise<StartFightResponse> => {
  const response = await axios.post<StartFightResponse>(
    `${URL}/start-fight`,
    {
      playerPokemonId,
      opponentPokemonId,
    }
  );
  return response.data;
};

export const playerAttack = async (): Promise<AttackResponse> => {
  const response = await axios.post<AttackResponse>(
    `${URL}/player-attack`
  );
  return response.data;
};

export const opponentAttack = async (): Promise<AttackResponse> => {
  const response = await axios.post<AttackResponse>(
    `${URL}/opponent-attack`
  );
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

const catchPokemon = async (
  currentHp: number,
  maxHp: number
): Promise<{ message: string; caught: boolean; pokemon?: IPokemonData }> => {
  const response = await axios.post(`${URL}/catch`, {
    currentHp,
    maxHp,
  });
  return response.data;
};

export const useCatchPokemon = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ currentHp, maxHp }: { currentHp: number; maxHp: number }) =>
      catchPokemon(currentHp, maxHp),
    onSuccess: (data) => {
      if (data.caught) {
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
