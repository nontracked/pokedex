import './PokemonList.scss'
import {PokemonCard} from "../PokemonCard";
import type {PokemonListItem} from "../../types";

interface FilteredPokemons {
  filteredPokemons: PokemonListItem[],
  onPokemonClick: (name:string) => void;
}

export const PokemonList = ({filteredPokemons,onPokemonClick}: FilteredPokemons) => {
  return (
    <ul className="app-list">
      {filteredPokemons.map((pokemon) => (
        <li key={pokemon.name}>
          <PokemonCard  pokemon={pokemon} onClick={onPokemonClick} />
        </li>
      ))}
      {filteredPokemons.length === 0 && (
        <li>Покемон не найден :(</li>
      )}
    </ul>
  )
}