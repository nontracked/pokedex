import './PokemonList.scss'
import {PokemonCard} from "../PokemonCard";
import type {PokemonListItem} from "../../types";

interface FilteredPokemons {
  filteredPokemons: PokemonListItem[]
}

export const PokemonList = ({filteredPokemons}: FilteredPokemons) => {
  return (
    <ul className="app-list">
      {filteredPokemons.map((pokemon) => (
        <li key={pokemon.name}>
          <PokemonCard pokemon={pokemon} />
        </li>
      ))}
      {filteredPokemons.length === 0 && (
        <li>Покемон не найден :(</li>
      )}
    </ul>
  )
}