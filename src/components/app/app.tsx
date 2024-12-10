import MainScreen from '../../pages/main-screen/main-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import ErrorScreen from '../../pages/error-screen/error-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../utils/const';
import PrivateRoute from '../private-route/private-route';
import { HelmetProvider } from 'react-helmet-async';
import { OfferType } from '../../utils/types';

type AppProps = {
  offers: OfferType[];
}

function App({offers}: AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Main} element={<MainScreen offers={offers}/>} />
          <Route path={AppRoute.Login} element={<LoginScreen />}/>
          <Route path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                <FavoritesScreen offers={offers}/>
              </PrivateRoute>
            }
          />
          <Route path={AppRoute.Offer} element={<OfferScreen />}/>
          <Route path={AppRoute.Other} element={<ErrorScreen />}/>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
