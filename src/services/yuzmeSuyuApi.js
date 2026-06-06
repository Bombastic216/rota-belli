// Rota Belli — Yüzme Suyu Kalitesi API Servisi
// Sağlık Bakanlığı ÇSBS API'sini Vite proxy üzerinden çağırır

// Vite dev server proxy: /api/csbs → https://csbsapi.saglik.gov.tr
// Production'da CORS proxy veya doğrudan çağrı gerekebilir
const isDev = import.meta.env.DEV;
const API_BASE = isDev ? '/api/csbs' : 'https://csbsapi.saglik.gov.tr';

async function apiFetch(path, options = {}) {
  const url = `${API_BASE}${path}`;
  const res = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      ...options.headers,
    },
    credentials: 'include',
  });
  
  if (res.status === 401) {
    throw new Error('API yetkilendirme hatası — resmi site üzerinden erişim gerekli');
  }
  if (!res.ok) {
    throw new Error(`API hatası: ${res.status}`);
  }
  
  const text = await res.text();
  if (!text) return null;
  try {
    return JSON.parse(text);
  } catch {
    // JSON parse hatası — HTML dönmüş olabilir
    console.warn('API JSON döndümedi:', text.substring(0, 100));
    return null;
  }
}

// İl listesi
export async function getCityList() {
  return apiFetch('/api/app/portal-public/city-list/1');
}

// İlçe listesi
export async function getTownList(cityId) {
  return apiFetch(`/api/app/portal-public/town-list?cityId=${cityId}&portalTypeId=1`);
}

// Yüzme alanı listesi (ilçe bazlı)
export async function getSwimmingAreaList(townId) {
  return apiFetch(`/api/app/portal-public/swimming-area-list?townId=${townId}`);
}

// Yüzme alanı listesi (il bazlı)
export async function getSwimmingAreasByCity(cityId) {
  return apiFetch(`/api/app/portal-public/swimming-area-list?cityId=${cityId}`);
}

// Yüzme alanı ara (filtreli)
export async function searchSwimmingAreas({ cityId, townId, swimmingAreaId, filters = {} }) {
  return apiFetch('/api/app/portal-public/search-swimming-areas', {
    method: 'POST',
    body: JSON.stringify({
      cityId,
      townId: townId || null,
      swimmingAreaId: swimmingAreaId || null,
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
      includeGeoJson: true,
    }),
  });
}

// Deniz zemini türleri
export async function getSeaFloorStructures() {
  return apiFetch('/api/app/portal-public/sea-floor-structure-list');
}

// Plaj zemini türleri
export async function getBeachFloorStructures() {
  return apiFetch('/api/app/portal-public/beach-floor-structure-list');
}

// Kalite sınıfı yardımcıları
export const QUALITY_LABELS = {
  A: 'Mükemmel', EXCELLENT: 'Mükemmel', MUKEMMEL: 'Mükemmel',
  B: 'İyi', GOOD: 'İyi', IYI: 'İyi',
  C: 'Yeterli', SUFFICIENT: 'Yeterli', YETERLI: 'Yeterli',
  D: 'Zayıf', WEAK: 'Zayıf', POOR: 'Zayıf', ZAYIF: 'Zayıf',
  INSUFFICIENT_SAMPLE: 'Yetersiz Numune', YETERSIZ_NUMUNE: 'Yetersiz Numune',
};

export const QUALITY_COLORS = {
  A: '#00bcd4', EXCELLENT: '#00bcd4', MUKEMMEL: '#00bcd4',
  B: '#4caf50', GOOD: '#4caf50', IYI: '#4caf50',
  C: '#ff9800', SUFFICIENT: '#ff9800', YETERLI: '#ff9800',
  D: '#f44336', WEAK: '#f44336', POOR: '#f44336', ZAYIF: '#f44336',
  INSUFFICIENT_SAMPLE: '#9e9e9e', YETERSIZ_NUMUNE: '#9e9e9e',
};

export function getQualityLabel(code) {
  if (!code) return 'Bilinmiyor';
  const key = String(code).toUpperCase().trim();
  return QUALITY_LABELS[key] || String(code);
}

export function getQualityColor(code) {
  if (!code) return '#9e9e9e';
  const key = String(code).toUpperCase().trim();
  return QUALITY_COLORS[key] || '#9e9e9e';
}
