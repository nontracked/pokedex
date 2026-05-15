import {useQuery} from "@tanstack/react-query";
import {fetchPokemonDetails} from "../api/pokemonApi.ts";

export const usePokemonDetails = (pokemonName:string | null) => {
  return useQuery({
    queryKey:['pokemon',pokemonName],
    // (pokemonName!) говорит Тайпскрипту: "Я клянусь, что на момент вызова тут точно будет строка, а не null"
    queryFn:()=> fetchPokemonDetails(pokemonName!),
    // Самая важная настройка: enabled
    // !!pokemonName превращает строку в true, а null в false.
    // Если передать false, хук вообще не будет делать запрос на сервер.
    enabled: !!pokemonName,
  })
}