// Rota Belli — Harita Bileşenleri
// Leaflet + React Leaflet tabanlı interaktif harita

import React, { useEffect, useRef, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { LOKASYONLAR } from '../../data/locations';

// Leaflet varsayılan ikon sorunu çözümü — SVG pin
const pinSvg = (renk) => `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 36" width="32" height="44">
    <defs>
      <filter id="shadow" x="-20%" y="-10%" width="140%" height="140%">
        <feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="#000" flood-opacity="0.45"/>
      </filter>
    </defs>
    <path d="M12 0C5.4 0 0 5.4 0 12c0 9 12 24 12 24s12-15 12-24C24 5.4 18.6 0 12 0z"
      fill="${renk}" filter="url(#shadow)"/>
    <circle cx="12" cy="11" r="5" fill="#fff"/>
    <circle cx="12" cy="11" r="3.2" fill="${renk}"/>
  </svg>`;

const createIcon = (renk) =>
  L.divIcon({
    html: pinSvg(renk),
    className: '',
    iconSize: [32, 44],
    iconAnchor: [16, 44],
    popupAnchor: [0, -44],
  });

// Haritaya uçma efekti
export function FlyToLocation({ location, onClickedId }) {
  const map = useMap();
  const prevLoc = useRef(null);

  useEffect(() => {
    if (location && location !== prevLoc.current && location.lat && location.lon) {
      map.flyTo([location.lat, location.lon], 13, { duration: 1.2 });
      prevLoc.current = location;
    }
  }, [location, map]);

  useEffect(() => {
    if (onClickedId) {
      const lok = LOKASYONLAR.find(l => l.id === onClickedId);
      if (lok) map.flyTo([lok.lat, lok.lon], 13, { duration: 1.2 });
    }
  }, [onClickedId, map]);

  return null;
}

// Ana harita bileşeni
export default function RotaMap({ locations = LOKASYONLAR, onSelectLocation, selectedLoc }) {
  const [clickedId, setClickedId] = useState(null);

  const handlePinClick = (lok) => {
    setClickedId(lok.id);
    if (onSelectLocation) onSelectLocation(lok);
  };

  return (
    <div
      style={{ width: '100%', height: '420px', borderRadius: '18px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', marginBottom: '14px' }}
      role="application"
      aria-label="Türkiye tarihi yerler ve doğa lokasyonları haritası"
    >
      <MapContainer
        center={[39.0, 35.0]}
        zoom={6}
        style={{ width: '100%', height: '100%' }}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <FlyToLocation onClickedId={clickedId} location={selectedLoc} />
        {locations.map(lok => (
          <Marker
            key={lok.id}
            position={[lok.lat, lok.lon]}
            icon={createIcon(lok.renk)}
            eventHandlers={{ click: () => handlePinClick(lok) }}
          >
            <Popup>
              <div style={{ fontFamily: 'Georgia,serif', minWidth: '160px' }}>
                <div style={{ fontWeight: '800', fontSize: '13px', color: '#06101d', marginBottom: '4px' }}>
                  {lok.emoji} {lok.isim}
                </div>
                <div style={{ fontSize: '10px', color: lok.renk, fontWeight: '700', marginBottom: '4px' }}>
                  {lok.tip} · {lok.mesafe}
                </div>
                <div style={{ fontSize: '11px', color: '#555', lineHeight: '1.5', marginBottom: '6px' }}>
                  {lok.etiket}
                </div>
                <span style={{ color: '#ffd166', fontSize: '11px' }}>
                  {'★'.repeat(Math.floor(lok.puan))}{'☆'.repeat(5 - Math.floor(lok.puan))} {lok.puan}
                </span>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
