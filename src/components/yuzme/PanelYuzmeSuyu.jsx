// Rota Belli — Yüzme Suyu Kalitesi Paneli
// Sağlık Bakanlığı ÇSBS API'sinden yüzme alanı su kalitesi verilerini gösterir

import { useState, useEffect, useCallback } from 'react';
import Panel from '../layout/Panel';
import PanelBaslik from '../layout/PanelBaslik';
import {
  getCityList,
  getTownList,
  getSwimmingAreaList,
  searchSwimmingAreas,
  getQualityLabel,
  getQualityColor,
} from '../../services/yuzmeSuyuApi';

export default function PanelYuzmeSuyu({ visible }) {
  const [cities, setCities] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [areas, setAreas] = useState([]);
  const [results, setResults] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedArea, setSelectedArea] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [expandedArea, setExpandedArea] = useState(null);

  // İl listesini yükle
  useEffect(() => {
    if (!visible) return;
    setLoading(true);
    getCityList()
      .then(data => {
        setCities(data || []);
        setError('');
      })
      .catch(() => {
        // API'den gelmezse Türkiye illeri
        setCities(TURKEY_CITIES);
      })
      .finally(() => setLoading(false));
  }, [visible]);

  // İl seçildiğinde ilçeleri yükle
  useEffect(() => {
    if (!selectedCity) {
      setDistricts([]);
      return;
    }
    setLoading(true);
    getTownList(selectedCity)
      .then(data => {
        setDistricts(data || []);
        setSelectedDistrict('');
        setAreas([]);
        setResults([]);
      })
      .catch(() => {
        setDistricts([]);
      })
      .finally(() => setLoading(false));
  }, [selectedCity]);

  // İlçe seçildiğinde yüzme alanlarını yükle
  useEffect(() => {
    if (!selectedDistrict) {
      setAreas([]);
      return;
    }
    setLoading(true);
    getSwimmingAreaList(selectedDistrict)
      .then(data => {
        setAreas(data || []);
        setSelectedArea('');
        setResults([]);
      })
      .catch(() => {
        setAreas([]);
      })
      .finally(() => setLoading(false));
  }, [selectedDistrict]);

  // Ara
  const handleSearch = useCallback(async () => {
    if (!selectedCity) return;
    setLoading(true);
    setError('');
    setResults([]);
    try {
      const data = await searchSwimmingAreas({
        cityId: parseInt(selectedCity),
        townId: selectedDistrict ? parseInt(selectedDistrict) : null,
        swimmingAreaId: selectedArea || null,
      });
      setResults(data?.items || data || []);
    } catch (e) {
      setError('Veri alınamadı. Lütfen tekrar deneyin.');
    } finally {
      setLoading(false);
    }
  }, [selectedCity, selectedDistrict, selectedArea]);

  return (
    <Panel visible={visible} aria-label="Yüzme suyu kalitesi paneli">
      <PanelBaslik
        icon="🏊"
        baslik="Yüzme Suyu Kalitesi"
        alt="Sağlık Bakanlığı ÇSBS · Türkiye geneli yüzme alanları"
      />

      {/* Filtreler */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '12px' }}>
        {/* İl seçimi */}
        <select
          value={selectedCity}
          onChange={e => setSelectedCity(e.target.value)}
          style={selectStyle}
        >
          <option value="">İl Seçin</option>
          {cities.map(c => (
            <option key={c.id || c.cityId || c.value} value={c.id || c.cityId || c.value}>
              {c.name || c.cityName || c.label || c}
            </option>
          ))}
        </select>

        {/* İlçe seçimi */}
        <select
          value={selectedDistrict}
          onChange={e => setSelectedDistrict(e.target.value)}
          disabled={!selectedCity}
          style={{ ...selectStyle, opacity: selectedCity ? 1 : 0.5 }}
        >
          <option value="">Tüm İlçeler</option>
          {districts.map(d => (
            <option key={d.id || d.townId || d.value} value={d.id || d.townId || d.value}>
              {d.name || d.townName || d.label || d}
            </option>
          ))}
        </select>

        {/* Yüzme alanı seçimi */}
        <select
          value={selectedArea}
          onChange={e => setSelectedArea(e.target.value)}
          disabled={areas.length === 0}
          style={{ ...selectStyle, opacity: areas.length > 0 ? 1 : 0.5 }}
        >
          <option value="">Tüm Yüzme Alanları</option>
          {areas.map(a => (
            <option key={a.id || a.swimmingAreaId || a.value} value={a.id || a.swimmingAreaId || a.value}>
              {a.name || a.swimmingAreaName || a.label || a}
            </option>
          ))}
        </select>

        {/* Ara butonu */}
        <button
          onClick={handleSearch}
          disabled={!selectedCity || loading}
          style={{
            background: selectedCity && !loading ? '#0096c7' : 'rgba(255,255,255,0.1)',
            color: '#fff',
            border: 'none',
            borderRadius: '10px',
            padding: '10px',
            fontSize: '13px',
            fontWeight: '700',
            cursor: selectedCity && !loading ? 'pointer' : 'not-allowed',
            transition: 'all 0.2s',
          }}
        >
          {loading ? '⏳ Aranıyor...' : '🔍 Ara'}
        </button>
      </div>

      {/* Hata */}
      {error && (
        <div style={{
          background: 'rgba(244,67,54,0.15)',
          border: '1px solid rgba(244,67,54,0.3)',
          borderRadius: '10px',
          padding: '10px',
          marginBottom: '10px',
          fontSize: '12px',
          color: '#ff6b6b',
        }}>
          ⚠️ {error}
        </div>
      )}

      {/* Sonuçlar */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {results.map((r, i) => (
          <AreaCard
            key={r.id || r.swimmingAreaId || i}
            area={r}
            expanded={expandedArea === (r.id || r.swimmingAreaId || i)}
            onToggle={() => setExpandedArea(
              expandedArea === (r.id || r.swimmingAreaId || i) ? null : (r.id || r.swimmingAreaId || i)
            )}
          />
        ))}

        {results.length === 0 && !loading && selectedCity && (
          <div style={{
            textAlign: 'center',
            color: 'rgba(255,255,255,0.4)',
            fontSize: '12px',
            padding: '20px',
          }}>
            Aramak için il seçin ve Ara butonuna tıklayın
          </div>
        )}
      </div>
    </Panel>
  );
}

// Yüzme alanı kartı
function AreaCard({ area, expanded, onToggle }) {
  const quality = area.qualityClass || area.quality || area.kaliteSinifi || '—';
  const qualityColor = getQualityColor(quality);
  const qualityLabel = getQualityLabel(quality);
  const name = area.name || area.swimmingAreaName || area.isim || 'Bilinmeyen';
  const district = area.townName || area.districtName || area.ilce || '';
  const city = area.cityName || area.il || '';

  return (
    <div
      style={{
        background: 'linear-gradient(135deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))',
        border: `1px solid ${qualityColor}30`,
        borderRadius: '14px',
        overflow: 'hidden',
        cursor: 'pointer',
      }}
      onClick={onToggle}
      role="button"
      tabIndex={0}
      aria-expanded={expanded}
    >
      {/* Başlık */}
      <div style={{
        padding: '12px 14px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: '700', fontSize: '13px', color: '#e8f4f8', lineHeight: '1.3' }}>
            {name}
          </div>
          <div style={{ fontSize: '10px', color: '#90c4d0', marginTop: '2px' }}>
            {district}{city ? `, ${city}` : ''}
          </div>
        </div>
        <div style={{
          background: `${qualityColor}22`,
          color: qualityColor,
          borderRadius: '8px',
          padding: '4px 10px',
          fontSize: '10px',
          fontWeight: '700',
          whiteSpace: 'nowrap',
          marginLeft: '8px',
        }}>
          {qualityLabel}
        </div>
      </div>

      {/* Detay (açılır) */}
      {expanded && (
        <div style={{
          padding: '0 14px 12px',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          paddingTop: '10px',
        }}>
          {/* Kalite bilgisi */}
          <div style={{ marginBottom: '8px' }}>
            <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.5)', marginBottom: '4px' }}>
              Kalite Sınıfı
            </div>
            <div style={{
              display: 'flex',
              gap: '4px',
            }}>
              {['A', 'B', 'C', 'D'].map(q => (
                <div
                  key={q}
                  style={{
                    flex: 1,
                    textAlign: 'center',
                    padding: '4px',
                    borderRadius: '6px',
                    fontSize: '10px',
                    fontWeight: '700',
                    background: quality === q || quality === getQualityLabel(q)
                      ? `${getQualityColor(q)}33`
                      : 'rgba(255,255,255,0.03)',
                    color: quality === q || quality === getQualityLabel(q)
                      ? getQualityColor(q)
                      : 'rgba(255,255,255,0.3)',
                    border: `1px solid ${quality === q || quality === getQualityLabel(q) ? getQualityColor(q) + '55' : 'transparent'}`,
                  }}
                >
                  {getQualityLabel(q)}
                </div>
              ))}
            </div>
          </div>

          {/* Özellikler */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
            {area.maviBayrak && <FeatureBadge icon="🏅" label="Mavi Bayrak" />}
            {area.dus && <FeatureBadge icon="🚿" label="Duş" />}
            {area.otopark && <FeatureBadge icon="🅿️" label="Otopark" />}
            {area.cankurtaran && <FeatureBadge icon="🛟" label="Can Kurtaran" />}
            {area.engelliErisim && <FeatureBadge icon="♿" label="Engelli Erişimi" />}
          </div>

          {/* Son analiz */}
          {area.lastAnalysisDate && (
            <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.4)', marginTop: '6px' }}>
              Son analiz: {new Date(area.lastAnalysisDate).toLocaleDateString('tr-TR')}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function FeatureBadge({ icon, label }) {
  return (
    <div style={{
      background: 'rgba(255,255,255,0.06)',
      borderRadius: '6px',
      padding: '3px 8px',
      fontSize: '9px',
      color: '#90c4d0',
      display: 'flex',
      alignItems: 'center',
      gap: '3px',
    }}>
      <span>{icon}</span>
      <span>{label}</span>
    </div>
  );
}

const selectStyle = {
  background: 'rgba(255,255,255,0.06)',
  border: '1px solid rgba(255,255,255,0.12)',
  borderRadius: '10px',
  padding: '8px 12px',
  color: '#e8f4f8',
  fontSize: '12px',
  outline: 'none',
  cursor: 'pointer',
};

// Türkiye illeri (fallback)
const TURKEY_CITIES = [
  { id: 1, name: 'Adana' }, { id: 2, name: 'Adıyaman' }, { id: 3, name: 'Afyonkarahisar' },
  { id: 4, name: 'Ağrı' }, { id: 5, name: 'Amasya' }, { id: 6, name: 'Ankara' },
  { id: 7, name: 'Antalya' }, { id: 8, name: 'Artvin' }, { id: 9, name: 'Aydın' },
  { id: 10, name: 'Balıkesir' }, { id: 11, name: 'Bilecik' }, { id: 12, name: 'Bingöl' },
  { id: 13, name: 'Bitlis' }, { id: 14, name: 'Bolu' }, { id: 15, name: 'Burdur' },
  { id: 16, name: 'Bursa' }, { id: 17, name: 'Çanakkale' }, { id: 18, name: 'Çankırı' },
  { id: 19, name: 'Çorum' }, { id: 20, name: 'Denizli' }, { id: 21, name: 'Diyarbakır' },
  { id: 22, name: 'Edirne' }, { id: 23, name: 'Elazığ' }, { id: 24, name: 'Erzincan' },
  { id: 25, name: 'Erzurum' }, { id: 26, name: 'Eskişehir' }, { id: 27, name: 'Gaziantep' },
  { id: 28, name: 'Giresun' }, { id: 29, name: 'Gümüşhane' }, { id: 30, name: 'Hakkari' },
  { id: 31, name: 'Hatay' }, { id: 32, name: 'Isparta' }, { id: 33, name: 'Mersin' },
  { id: 34, name: 'İstanbul' }, { id: 35, name: 'İzmir' }, { id: 36, name: 'Kars' },
  { id: 37, name: 'Kastamonu' }, { id: 38, name: 'Kayseri' }, { id: 39, name: 'Kırklareli' },
  { id: 40, name: 'Kırşehir' }, { id: 41, name: 'Kocaeli' }, { id: 42, name: 'Konya' },
  { id: 43, name: 'Kütahya' }, { id: 44, name: 'Malatya' }, { id: 45, name: 'Manisa' },
  { id: 46, name: 'Kahramanmaraş' }, { id: 47, name: 'Mardin' }, { id: 48, name: 'Muğla' },
  { id: 49, name: 'Muş' }, { id: 50, name: 'Nevşehir' }, { id: 51, name: 'Niğde' },
  { id: 52, name: 'Ordu' }, { id: 53, name: 'Rize' }, { id: 54, name: 'Sakarya' },
  { id: 55, name: 'Samsun' }, { id: 56, name: 'Siirt' }, { id: 57, name: 'Sinop' },
  { id: 58, name: 'Sivas' }, { id: 59, name: 'Tekirdağ' }, { id: 60, name: 'Tokat' },
  { id: 61, name: 'Trabzon' }, { id: 62, name: 'Tunceli' }, { id: 63, name: 'Şanlıurfa' },
  { id: 64, name: 'Uşak' }, { id: 65, name: 'Van' }, { id: 66, name: 'Yozgat' },
  { id: 67, name: 'Zonguldak' }, { id: 68, name: 'Aksaray' }, { id: 69, name: 'Bayburt' },
  { id: 70, name: 'Karaman' }, { id: 71, name: 'Kırıkkale' }, { id: 72, name: 'Batman' },
  { id: 73, name: 'Şırnak' }, { id: 74, name: 'Bartın' }, { id: 75, name: 'Ardahan' },
  { id: 76, name: 'Iğdır' }, { id: 77, name: 'Yalova' }, { id: 78, name: 'Karabük' },
  { id: 79, name: 'Kilis' }, { id: 80, name: 'Osmaniye' }, { id: 81, name: 'Düzce' },
];
