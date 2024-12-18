import { LocationType } from './types';

const NUMBER_OF_OFFERS = 5;
const MIN_LENGTH_OF_REVIEW = 50;
const MAX_LENGTH_OF_REVIEW = 300;
const CITIES_LIST = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export enum AppRoute{
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  Other = '*'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export enum MapURLMarker {
  Default = 'img/pin.svg',
  Current = 'img/pin-active.svg'
}

export enum MapLayer {
  Url = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
  Attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
}

export const Locations: Record<string, LocationType> = {
  'Paris': {
    latitude: 48.85661,
    longitude: 2.351499,
    zoom: 13,
  },
  'Cologne': {
    latitude: 50.938361,
    longitude: 6.959974,
    zoom: 13,
  },
  'Brussels': {
    latitude: 50.846557,
    longitude: 4.351697,
    zoom: 13,
  },
  'Amsterdam': {
    latitude: 52.37454,
    longitude: 4.897976,
    zoom: 13,
  },
  'Hamburg': {
    latitude: 53.550341,
    longitude: 10.000654,
    zoom: 13,
  },
  'Dusseldorf': {
    latitude: 51.225402,
    longitude: 6.776314,
    zoom: 13,
  }
};


export {NUMBER_OF_OFFERS, MIN_LENGTH_OF_REVIEW, MAX_LENGTH_OF_REVIEW, CITIES_LIST};
