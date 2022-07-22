import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export default function Home() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
  const center = useMemo(() => ({ lat: 13.03688005254433, lng: 77.612708078648 }), []);

  var boundaryCoordinates = [
    { lat: 13.03688005254433, lng: 77.612708078648 },
    { lat: 12.03688005254433, lng: 76.612708078648 },
    { lat: 11.03688005254433, lng: 75.612708078648 }
  ];

  var polygon = new google.maps.Polygon({
    paths: boundaryCoordinates,
    strokeColor: '#FF0000',
    strokeOpacity:0.8,
    strokeWeight: 3,
    fillColor: '#FF0000',
    fillOpacity: 0.35
  });

  // polygon.setMap(Map) figure out how to use this line (https://www.youtube.com/watch?v=nVFOFT20K-c&ab_channel=OurCodeWorld)

  return (
    <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
      {/* <Marker position={center} /> */}
    </GoogleMap>
  );
}
