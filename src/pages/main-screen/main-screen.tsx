import { Helmet } from 'react-helmet-async';
import CardItem from '../../components/card-item/card-item';
import CitiesList from '../../components/cities-list/cities-list';
import Header from '../../components/header/header';
import SortForm from '../../components/sort-form/sort-form';

type MainScreenProps = {
  countOffers: number;
}

function MainScreen({countOffers}: MainScreenProps): JSX.Element {
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
                {[...Array<number>(countOffers)].map(()=> <CardItem key={Math.random()}/>)}
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
