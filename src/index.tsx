import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { NUMBER_OF_OFFERS } from './utils/const';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App countOffers = {NUMBER_OF_OFFERS}/>
  </React.StrictMode>
);
