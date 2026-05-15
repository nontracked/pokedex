import './PokemonModals.scss'
import {usePokemonDetails} from "../../hooks/usePokemonDetails.ts";

interface PokemonModalsProps {
  pokemonName: string;
  onClose: () => void; // Функция для закрытия модалки
}

export const PokemonModals = ({pokemonName, onClose}: PokemonModalsProps) => {
  const {data, isLoading, isError} = usePokemonDetails(pokemonName) // вызываем хук. Он сам поймет, когда начать загрузку, благодаря имени
  if (isLoading) {
    return (
      <div style={overlayStyle}>
        <div style={modalStyle}>Загрузка секретных данных...</div>
      </div>
    );
  }
  if (isError || !data) {
    return (
      <div style={overlayStyle}>
        <div style={modalStyle}>
          <p>ошибка загрузки!</p>
          <button onClick={onClose}>Закрыть</button>
        </div>
      </div>
    )
  }
  return (
    <div style={overlayStyle} onClick={onClose}>
      {/* e.stopPropagation() нужен, чтобы клик по самому белому окну не закрывал его */}
      <div style={modalStyle} onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} style={{ float: 'right', cursor: 'pointer' }}>✖</button>
        <h2>{data.name.toUpperCase()}</h2>
        {/* Берем картинку по ID, так же как в карточке */}
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`}
          alt={data.name}
          style={{ width: '150px' }}
        />
        <div style={{ display: 'flex', justifyContent: 'space-around', margin: '20px 0' }}>
          <p><b>Рост:</b> {data.height * 10} см</p>
          <p><b>Вес:</b> {data.weight / 10} кг</p>
        </div>

        <h3>Типы:</h3>
        <ul style={{ display: 'flex', gap: '10px', listStyle: 'none', padding: 0 }}>
          {/* Магия TS в действии: автокомплит для data.types[].type.name */}
          {data.types.map((t) => (
            <li key={t.type.name} style={{ background: '#eee', padding: '5px 10px', borderRadius: '15px' }}>
              {t.type.name}
            </li>
          ))}
        </ul>
        <h3>Характеристики:</h3>
        <ul style={{ paddingLeft: '20px' }}>
          {data.stats.map((s) => (
            <li key={s.stat.name}>
              <b>{s.stat.name}:</b> {s.base_stat}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const overlayStyle: React.CSSProperties = {
  position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.7)', // Полупрозрачный черный фон
  display: 'flex', justifyContent: 'center', alignItems: 'center',
  zIndex: 1000 // Чтобы было поверх всего остального
};

const modalStyle: React.CSSProperties = {
  backgroundColor: 'white',
  padding: '30px',
  borderRadius: '12px',
  minWidth: '350px',
  maxWidth: '500px',
  color: 'black'
};