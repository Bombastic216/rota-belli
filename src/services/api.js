// Rota Belli — API Servis Katmanı
// Canlı veri entegrasyonu için servis fonksiyonları
// Backend API hazır olduğunda bu dosyada endpoint'ler güncellenir

const API_BASE = import.meta.env.VITE_API_BASE_URL || '';

// ---- Lokasyon Servisleri ----

export async function fetchLocations(filters = {}) {
  // TODO: Backend hazır olduğunda aktif et
  // const params = new URLSearchParams(filters);
  // const res = await fetch(`${API_BASE}/api/locations?${params}`);
  // if (!res.ok) throw new Error('Lokasyonlar yüklenemedi');
  // return res.json();

  // Şimdilik statik veri dönüyor
  const { LOKASYONLAR } = await import('../data/locations.js');
  return LOKASYONLAR;
}

export async function fetchLocationById(id) {
  // TODO: const res = await fetch(`${API_BASE}/api/locations/${id}`);
  const { LOKASYONLAR } = await import('../data/locations.js');
  return LOKASYONLAR.find(l => l.id === id);
}

// ---- Hava Durumu (Open-Meteo — ücretsiz, API key yok) ----

export async function fetchWeather(lat, lon) {
  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code&timezone=Europe/Istanbul`;
    const res = await fetch(url);
    if (!res.ok) return null;
    const data = await res.json();
    return {
      temp: data.current.temperature_2m,
      humidity: data.current.relative_humidity_2m,
      wind: data.current.wind_speed_10m,
      code: data.current.weather_code,
    };
  } catch {
    return null;
  }
}

// ---- Aktiviteler ----

export async function fetchActivities() {
  // TODO: const res = await fetch(`${API_BASE}/api/activities`);
  const { AKTIVITELER } = await import('../data/locations.js');
  return AKTIVITELER;
}

// ---- Makaleler / Kütüphane ----

export async function fetchArticles(filters = {}) {
  // TODO: const res = await fetch(`${API_BASE}/api/articles?${params}`);
  const { MAKALELER } = await import('../data/locations.js');
  let liste = MAKALELER;
  if (filters.kategori && filters.kategori !== 'Tümü') {
    liste = liste.filter(m => m.kategori === filters.kategori);
  }
  if (filters.seviye && filters.seviye !== 'Tümü') {
    liste = liste.filter(m => m.seviye === filters.seviye);
  }
  if (filters.bookmark) {
    liste = liste.filter(m => m.bookmark);
  }
  return liste;
}

// ---- Kullanıcı Profili ----

export async function fetchUserProfile() {
  // TODO: const res = await fetch(`${API_BASE}/api/user/profile`);
  return {
    isim: 'Gezgin',
    username: '@rotabelli',
    sehir: 'İstanbul',
    kesifPuani: 2840,
    checkIn: 14,
    rota: 6,
    rozet: 3,
  };
}

export async function fetchBadges() {
  const { ROZETLER } = await import('../data/locations.js');
  return ROZETLER;
}
