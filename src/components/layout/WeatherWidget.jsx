// Rota Belli — Hava Durumu Widget'ı
// Open-Meteo API (ücretsiz, API key gerektirmez)

import { useWeather } from '../../hooks/useData';

const weatherLabels = {
  0: 'Açık', 1: 'Çoğunlukla açık', 2: 'Parçalı bulutlu', 3: 'Bulutlu',
  45: 'Sisli', 48: 'Sisli', 51: 'Hafif çisenti', 53: 'Çisenti', 55: 'Yoğun çisenti',
  61: 'Hafif yağmur', 63: 'Yağmur', 65: 'Yoğun yağmur', 71: 'Hafif kar', 73: 'Kar', 75: 'Yoğun kar',
  80: 'Sağanak', 81: 'Sağanak', 82: 'Yoğun sağanak', 95: 'Gök gürültülü',
  96: 'Gök gürültülü + dolu', 99: 'Gök gürültülü + yoğun dolu',
};

export default function WeatherWidget({ lat, lon }) {
  const { weather, loading } = useWeather(lat, lon);

  if (loading) {
    return (
      <div aria-busy="true" aria-label="Hava durumu yükleniyor" style={{
        background: 'rgba(255,255,255,0.04)', borderRadius: '12px', padding: '12px',
        marginBottom: '12px', fontSize: '11px', color: '#7ecfdf', textAlign: 'center',
      }}>
        🌤 Hava durumu yükleniyor...
      </div>
    );
  }

  if (!weather) return null;

  return (
    <div aria-label={`Hava durumu: ${weatherLabels[weather.code] || 'Bilinmeyen'}, ${weather.temp}°C`} style={{
      background: 'linear-gradient(135deg, rgba(0,150,199,0.12), rgba(82,183,136,0.08))',
      border: '1px solid rgba(0,150,199,0.2)', borderRadius: '12px', padding: '12px',
      marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px',
    }}>
      <span style={{ fontSize: '24px' }}>🌤</span>
      <div>
        <div style={{ fontSize: '13px', fontWeight: '700', color: '#caf0f8' }}>
          {weather.temp}°C · {weatherLabels[weather.code] || '—'}
        </div>
        <div style={{ fontSize: '10px', color: '#7ecfdf' }}>
          Nem: {weather.humidity}% · Rüzgar: {weather.wind} km/s
        </div>
      </div>
    </div>
  );
}
