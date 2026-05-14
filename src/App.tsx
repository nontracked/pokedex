import {usePokemons} from "./hooks/usePokemons.ts";
import {useState} from "react";

import {PokemonList} from "./components/PokemonList";
import {SearchField} from "./components/SearchField";

function App() {

  const {data: pokemonItems, isError, error, isLoading} = usePokemons(150)
  const [searchQuery, setSearchQuery] = useState<string>('')  // Типизируем стейт.

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
      <PokemonList filteredPokemons={filteredPokemons} />
    </div>
  )
}

export default App
