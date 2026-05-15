import {usePokemons} from "./hooks/usePokemons.ts";
import {useState} from "react";

import {PokemonList} from "./components/PokemonList";
import {SearchField} from "./components/SearchField";
import {PokemonModals} from "./components/PokemonModals";

function App() {

  const {data: pokemonItems, isError, error, isLoading} = usePokemons(150)
  const [searchQuery, setSearchQuery] = useState<string>('')  // Типизируем стейт.
  const [selectedPokemon,setSelectedPokemon] = useState<string | null>(null)
  const filteredPokemons = pokemonItems?.results.filter(({name}) =>
    name.includes(searchQuery)) || [] // фильтруем список, если данных еще нет, берем пустой массив

  if (isLoading) return <div>Загрузка данных</div>
  if (isError) {
    console.log(error.message)
    return (
      <div>Произошла ошибка при загрузке покемонов</div>
    )
  }
  return (
    <div className="app">
      <h1>Pokedex</h1>
      <SearchField searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <PokemonList  onPokemonClick={(pokemonName)=> setSelectedPokemon(pokemonName)} filteredPokemons={filteredPokemons} />
      {selectedPokemon && (
        <PokemonModals pokemonName={selectedPokemon} onClose={()=> setSelectedPokemon(null)}/>
      )}
    </div>
  )
}

export default App
