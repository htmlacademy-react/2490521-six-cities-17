import { useRef, useEffect } from 'react';
import { Icon, LayerGroup, Marker, layerGroup } from 'leaflet';
import useMap from '../../utils/hooks/use-map';
import { OfferType } from '../../utils/types';
import { MapURLMarker } from '../../utils/const';
import 'leaflet/dist/leaflet.css';
import { Locations } from '../../utils/const';
import { LocationType } from '../../utils/types';

type MapProps = {
  offers: OfferType[];
  activeOffer: string | null;
  activeCity: string | null;
};

const defaultCustomIcon = new Icon({
  iconUrl: MapURLMarker.Default,
  iconSize: [30, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = new Icon({
  iconUrl: MapURLMarker.Current,
  iconSize: [30, 40],
  iconAnchor: [20, 40],
});

function Map({ offers, activeOffer, activeCity }: MapProps): JSX.Element {
  const cityWithLocation: LocationType | undefined = Locations[activeCity!];
  const mapRef = useRef(null);
  const map = useMap(mapRef, cityWithLocation);
  const markerLayer = useRef<LayerGroup>(layerGroup());

  const filteredOffers = offers.filter((offer) => offer.city.name === activeCity);

  useEffect(() => {
    if (map) {
      map.setView([cityWithLocation.latitude, cityWithLocation.longitude], cityWithLocation.zoom);
    }
  }, [cityWithLocation, map]);

  useEffect(() => {
    if (map) {
      markerLayer.current.clearLayers();

      filteredOffers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });

        marker
          .setIcon(
            activeOffer === offer.id ? currentCustomIcon : defaultCustomIcon
          )
          .addTo(markerLayer.current);
      });

      markerLayer.current.addTo(map);
    }
  }, [map, filteredOffers, activeOffer]);

  return <div style={{ height: '500px' }} ref={mapRef}></div>;
}

export default Map;
