import MainScreen from '../../pages/main-screen/main-screen';

type AppProps = {
  countOffers: number;
}

function App({countOffers}: AppProps): JSX.Element {
  return (
    <MainScreen countOffers={countOffers}/>
  );
}

export default App;
