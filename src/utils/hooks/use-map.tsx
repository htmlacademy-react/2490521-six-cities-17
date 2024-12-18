import {useEffect, useState, MutableRefObject, useRef} from 'react';
import {Map, TileLayer} from 'leaflet';
import { LocationType } from '../types';
import { MapLayer } from '../const';

function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  cityWithLocation: LocationType
): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: cityWithLocation.latitude,
          lng: cityWithLocation.longitude
        },
        zoom: cityWithLocation.zoom
      });

      const layer = new TileLayer(
        MapLayer.Url,
        {
          attribution:
            MapLayer.Attribution
        }
      );

      instance.addLayer(layer);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, cityWithLocation]);

  return map;
}

export default useMap;
