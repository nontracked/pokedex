
export interface PokemonListItem {  // Описываем, как выглядит ОДИН покемон в списке
  name: string;
  url: string;
}

export interface PokemonListResponse {
  count: number;
  next: string | null; // тут будет либо строка, либо пустота
  previous: string | null;
  results: PokemonListItem[]; // будет находиться массив из покемон айтемов
}

export interface PokemonType { // Описываем структуру типа покемона (например, "electric" или "fire")
  type: {
    name: string
  }
}

export interface PokemonStat {
  base_stat: number,
  stat:{
    name:string
  }
}

export interface PokemonDetails {
  id:number,
  name:string,
  height: number,
  weight:number,
  types: PokemonType[],
  stats: PokemonStat[],
}

