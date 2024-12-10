import { Helmet } from 'react-helmet-async';
import CitiesList from '../../components/cities-list/cities-list';
import Header from '../../components/header/header';
import SortForm from '../../components/sort-form/sort-form';
import { OfferType } from '../../utils/types';
import CardList from '../../components/card-list/card-list';
import { useState } from 'react';

type MainScreenProps = {
  offers: OfferType[];
}

function MainScreen({offers}: MainScreenProps): JSX.Element {
  const [isActiveOffer, setIsActiveOffer] = useState<string | null>(null);
  // eslint-disable-next-line no-console
  console.log(isActiveOffer);
  const handleActiveOfferChange = (id: string | null) => {
    setIsActiveOffer(id);
  };

  return(
    <div className="page page--gray page--main">
      <Header />
      <Helmet>
        <title>Six Cities</title>
      </Helmet>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CitiesList />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">312 places to stay in Amsterdam</b>
              <SortForm />
              <div className="cities__places-list places__list tabs__content">
                <CardList onHandleActiveOfferChange={handleActiveOfferChange} offers={offers}/>
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map"></section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
