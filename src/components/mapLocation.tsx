import { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

interface MapProps {
  open: boolean;
}

export function Map({ open }: MapProps) {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
        version: 'weekly',
      });

      try {
        const google = await loader.load();
        const { Map, Marker } = google.maps;

        const position = {
          lat: -22.024181365966797,
          lng: -47.8944091796875,
        };

        const mapOptions: google.maps.MapOptions = {
          center: position,
          zoom: 19,
          mapId: 'c313721f5fce1646',
        };

        const map = new Map(mapRef.current as HTMLDivElement, mapOptions);

        new Marker({
          map: map,
          position: position,
        });
      } catch (error) {
        console.error('Erro ao carregar o mapa:', error);
      }
    };

    if (open) {
      loadMap();
    }
  }, [open]);

  return <div style={{ height: '300px', width: '300px' }} ref={mapRef} />;
}
