import { CITIES_LIST } from '../../utils/const';

type CitiesListProps = {
  onHandleCityChange: (id: string | null) => void;
  activeCity: string | null;
}

function CitiesList({onHandleCityChange, activeCity}: CitiesListProps): JSX.Element {
  return(
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {CITIES_LIST.map((city) => (
          <li className="locations__item" key={city}>
            <a
              className={`locations__item-link tabs__item ${
                activeCity === city ? 'tabs__item--active' : ''
              }`}
              href="#"
              onClick={() => onHandleCityChange(city)}
            >
              <span>{city}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CitiesList;
