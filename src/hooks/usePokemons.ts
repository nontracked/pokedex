import {useQuery} from "@tanstack/react-query";
import {fetchPokemon} from "../api/pokemonApi.ts";


export const usePokemons = (limit = 20) => {
  return useQuery({
    queryKey: ['pokemons', limit],
    queryFn: () => fetchPokemon(limit)
  })
}