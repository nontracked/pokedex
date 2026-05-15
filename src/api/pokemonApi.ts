import type {PokemonDetails, PokemonListResponse} from "../types";

const baseURL: string = 'https://pokeapi.co/api/v2/pokemon'

export const fetchPokemon = async (limit = 10): Promise<PokemonListResponse> => {
  const response = await fetch(`${baseURL}?limit=${limit}`)
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  return response.json()
}

// функция для получения деталей ОДНОГО покемона
export const fetchPokemonDetails = async (pokemonName: string): Promise<PokemonDetails> => {
  const response  = await fetch(`${baseURL}/${pokemonName}`)
  if (!response.ok) {
    throw new Error('Failed to load Pokemon data')
  }
  return response.json()
}