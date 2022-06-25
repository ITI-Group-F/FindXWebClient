import MapBoxGeocoder from '@mapbox/mapbox-gl-geocoder';
import { useControl } from 'react-map-gl';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

const Geocoder = () => {
  let token = 'pk.eyJ1IjoiYWJkdWxsYWhlbHpheWF0MjMiLCJhIjoiY2w0c3BvMGY1MTY2cTNkczJkZTFvN2dhcSJ9.cE8ksDiEMcrDI7x9mN7vqA'
  const ctrl = new MapBoxGeocoder({
    accessToken: process.env.REACT_APP_MAP_TOKEN || token,
    marker: false,
    collapsed: true,
  });
  useControl(() => ctrl);
  ctrl.on('result', (e) => {
    const coords = e.result.geometry.coordinates;
    console.log( "lng: " + coords[0], "lat: " + e.lngLat.lat)           

  });
  return null;
};

export default Geocoder;