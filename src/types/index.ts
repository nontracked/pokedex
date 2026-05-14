
export interface PokemonListItem {  // Описываем, как выглядит ОДИН покемон в списке
  name: string;
  url: string;
}

export interface PokemonListResponse {
  count: number;
  next: string | null; // тут будет либо строка, либо пустота
  previous: string | null;
  result: PokemonListItem[]; // будет находиться массив из покемон айтемов
}