import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'; 

const MapComponent = () => {
  useEffect(() => {

    const map = L.map('map').setView([10.921453666331004, 75.91479741690816], 14);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
    const customMarker = L.marker([10.921453666331004, 75.91479741690816]).addTo(map);
    customMarker.bindPopup('<b>Sacrosys IT Solutions, Kayalmadathil Arcade, Naduvilangadi, Tirur, Kerala 676107</b>').openPopup();
    return () => {
      map.remove(); 
    };
  }, []); 

  return <div id="map" style={{ height: '400px' }}></div>;
};

export default MapComponent;
