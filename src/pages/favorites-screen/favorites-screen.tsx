import { Helmet } from 'react-helmet-async';
import FavoritesFooter from '../../components/favorites-footer/favotires-footer';
import Header from '../../components/header/header';
import { OfferType } from '../../utils/types';
import { Link } from 'react-router-dom';
import CardItem from '../../components/card-item/card-item';

type FavoritesScreenProps = {
  offers: OfferType[];
}

function FavoritesScreen(favoriteOffers: FavoritesScreenProps): JSX.Element {
  const { offers } = favoriteOffers;

  const offersGroupedByCity = offers.reduce<Record<string, OfferType[]>>((groupedOffers, offer) => {
    const city = offer.city.name;
    groupedOffers[city] ??= [];
    groupedOffers[city].push(offer);

    return groupedOffers;
  }, {});


  return (
    <div className="page">
      <Header />
      <Helmet>
        <title>Favorites offers</title>
      </Helmet>

      <main className='page__main page__main--favorites'>
        <div className='page__favorites-container container'>
          <section className='favorites'>
            <h1 className='favorites__title'>Saved listing</h1>
            <ul className='favorites__list'>
              {Object.entries(offersGroupedByCity).map(([city, cityOffers]) => (
                <li key={city} className='favorites__locations-items'>
                  <div className='favorites__locations locations locations--current'>
                    <div className='locations__item'>
                      <Link className='locations__item-link' to='/'>
                        <span>{city}</span>
                      </Link>
                    </div>
                  </div>
                  <div className='favorites__places'>
                    {cityOffers.map((offer) => (
                      <CardItem
                        key={offer.id}
                        pageType='favorites'
                        offer={offer}
                      />
                    ))}
                  </div>
                </li>
              ))}

            </ul>
          </section>
        </div>
      </main>
      <FavoritesFooter />
    </div>
  );
}

export default FavoritesScreen;
