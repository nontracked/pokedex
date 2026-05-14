import './SearchField.scss'

interface SearchField {
  searchQuery: string,
  onSearchChange: (text: string) => void
}

export const SearchField = ({searchQuery, onSearchChange}: SearchField) => {
  return (
    <input
      type="text"
      placeholder="Поиск покемона..."
      value={searchQuery}
      onChange={(event) => onSearchChange(event.target.value)}
      className="search-input"
    />
  )
}