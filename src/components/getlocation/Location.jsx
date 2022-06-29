import { Box } from "@mui/material";
import ReactMapGL, {
  GeolocateControl,
  Marker,
  NavigationControl,
} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useEffect, useRef, useState } from "react";
import Geocoder from "./Geocoder";
export default function Location() {
  let [lng, setLng] = useState(31.235712);
  let [lat, setLat] = useState(30.04442);

  const mapRef = useRef();
  let token =
    "pk.eyJ1IjoiYWJkdWxsYWhlbHpheWF0MjMiLCJhIjoiY2w0c3BvMGY1MTY2cTNkczJkZTFvN2dhcSJ9.cE8ksDiEMcrDI7x9mN7vqA";
  useEffect(() => {
    if (!lng && !lat) {
      fetch("https://ipapi.co/json")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          mapRef.current.flyTo({
            center: [data.longitude, data.latitude],
          });
          setLat(data.latitude);
          setLng(data.longitude);
        });
    }
  }, []);
  return (
    <Box
      sx={{
        height: 400,
        position: "relative",
      }}
    >
      <h6>
        longitude :{lng} latitude: {lat}
      </h6>
      <ReactMapGL
        ref={mapRef}
        mapboxAccessToken={process.env.REACT_APP_MAP_TOKEN || token}
        initialViewState={{
          longitude: lng,
          latitude: lat,
          zoom: 6,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onClick={(e) => {
          setLat(e.lngLat.lat);
          setLng(e.lngLat.lng);
        }}
      >
        <Marker
          latitude={lat}
          longitude={lng}
          draggable
          onDragEnd={(e) => {
            setLat(e.lngLat.lat);
            setLng(e.lngLat.lng);
          }}
        />
        <NavigationControl position="bottom-right" />
        <GeolocateControl
          position="top-left"
          trackUserLocation
          onGeolocate={(e) => {
            setLat(e.coords.latitude);
            setLng(e.coords.longitude);
          }}
        />
        <Geocoder on />
      </ReactMapGL>
    </Box>
  );
}
