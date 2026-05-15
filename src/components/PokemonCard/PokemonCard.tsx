import './PokemonCard.scss'
import type {PokemonListItem} from "../../types";

// пишем интерфейс тут а не глобально потому что будет использоваться только внутри этого компонента
interface PokemonCardProps {
  pokemon: PokemonListItem
  onClick: (name: string) => void;
}

export const PokemonCard = ({pokemon, onClick}: PokemonCardProps) => {
  // Достаем ID покемона из его URL (например, из "https://pokeapi.co/api/v2/pokemon/25/" достанем "25")
  const pokemonId = pokemon.url.split('/').filter(Boolean).pop() // отдаст последний элемент
  const imageURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;
  return (
    <div className="pokemon-card" onClick={()=> onClick(pokemon.name)} style={{cursor: 'pointer'}}>
      <span>{pokemonId}</span>
      <img className="pokemon-card__img" src={imageURL} alt={pokemon.name} />
      <h4 className="pokemon-card__name">{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h4>
    </div>
  )
}