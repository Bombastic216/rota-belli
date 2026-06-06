// Rota Belli — Yüzme Suyu Kalitesi API Servisi
// Sağlık Bakanlığı ÇSBS API'sini CORS proxy ile çağırır

// Sağlık Bakanlığı ÇSBS API'si — Vite proxy üzerinden çağrılır
// CORS engelini aşmak için /api/csbs path'i kullanılır
const API_BASE = '/api/csbs';

// Tüm fetch isteklerini proxy'le
async function proxyFetch(path, options = {}) {
  const url = `${API_BASE}${path}`;
  const res = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      ...options.headers,
    },
  });
  if (!res.ok) throw new Error(`API hatası: ${res.status}`);
  return res.json();
}

// İl listesi
export async function getCityList() {
  return proxyFetch('/api/app/portal-public/city-list?portalTypeId=1');
}

// İlçe listesi
export async function getTownList(cityId) {
  return proxyFetch(`/api/app/portal-public/town-list?cityId=${cityId}&portalTypeId=1`);
}

// Yüzme alanı listesi
export async function getSwimmingAreaList(townId) {
  return proxyFetch(`/api/app/portal-public/swimming-area-list?townId=${townId}`);
}

// Yüzme alanı ara
export async function searchSwimmingAreas({ cityId, townId, swimmingAreaId, filters = {} }) {
  return proxyFetch('/api/app/portal-public/search-swimming-areas', {
    method: 'POST',
    body: JSON.stringify({
      cityId,
      townId,
      swimmingAreaId,
      qualityA: filters.qualityA || false,
      qualityB: filters.qualityB || false,
      qualityC: filters.qualityC || false,
      qualityD: filters.qualityD || false,
      qualityNew: filters.qualityNew || false,
      maviBayrak: filters.maviBayrak || false,
      dus: filters.dus || false,
      otopark: filters.otopark || false,
      cankurtaran: filters.cankurtaran || false,
      engelliErisim: filters.engelliErisim || false,
      havaDurumuGunesli: false,
      havaDurumuBulutlu: false,
      havaDurumuYagmurlu: false,
      yakindanUzaga: false,
      uzaktanYakina: false,
      seaFloorStructureIds: null,
      beachFloorStructureIds: null,
      skipCount: 0,
      maxResultCount: 50,
      includeGeoJson: false,
    }),
  });
}

// Deniz zemini türleri
export async function getSeaFloorStructures() {
  return proxyFetch('/api/app/portal-public/sea-floor-structure-list');
}

// Plaj zemini türleri
export async function getBeachFloorStructures() {
  return proxyFetch('/api/app/portal-public/beach-floor-structure-list');
}

// Kalite sınıfı yardımcıları
export const QUALITY_LABELS = {
  A: 'Mükemmel',
  B: 'İyi',
  C: 'Yeterli',
  D: 'Zayıf',
  EXCELLENT: 'Mükemmel',
  GOOD: 'İyi',
  SUFFICIENT: 'Yeterli',
  WEAK: 'Zayıf',
  POOR: 'Zayıf',
  INSUFFICIENT_SAMPLE: 'Yetersiz Numune',
};

export const QUALITY_COLORS = {
  A: '#00bcd4',
  B: '#4caf50',
  C: '#ff9800',
  D: '#f44336',
  EXCELLENT: '#00bcd4',
  GOOD: '#4caf50',
  SUFFICIENT: '#ff9800',
  WEAK: '#f44336',
  POOR: '#f44336',
  INSUFFICIENT_SAMPLE: '#9e9e9e',
};

export function getQualityLabel(code) {
  if (!code) return 'Bilinmiyor';
  const key = code.toUpperCase().trim();
  return QUALITY_LABELS[key] || code;
}

export function getQualityColor(code) {
  if (!code) return '#9e9e9e';
  const key = code.toUpperCase().trim();
  return QUALITY_COLORS[key] || '#9e9e9e';
}
