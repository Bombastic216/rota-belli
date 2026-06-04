// Rota Belli — Keşfet Paneli
// Lokasyon kartları, filtreler, hava durumu

import { useState } from 'react';
import Panel from '../layout/Panel';
import PanelBaslik from '../layout/PanelBaslik';
import Stars from '../layout/Stars';
import WeatherWidget from '../layout/WeatherWidget';
import { LOKASYONLAR } from '../../data/locations';

const TIPLER = ['Tümü', 'Mavi Bayrak', 'Kamp', 'Göl', 'Su Sporları', 'Tarihi Yer'];

export default function PanelKesif({ visible }) {
  const [filtre, setFiltre] = useState('Tümü');
  const [selectedLoc, setSelectedLoc] = useState(null);
  const liste = filtre === 'Tümü' ? LOKASYONLAR : LOKASYONLAR.filter(l => l.tip === filtre);

  return (
    <Panel visible={visible} aria-label="Keşfet paneli">
      <PanelBaslik icon="🧭" baslik="Keşfet" alt="Türkiye geneli · Doğa & tarihi yerler · 2025 sezonu" />

      {/* Hava durumu — seçili lokasyon varsa */}
      {selectedLoc && (
        <WeatherWidget lat={selectedLoc.lat} lon={selectedLoc.lon} />
      )}

      {/* Filtre butonları */}
      <div role="tablist" aria-label="Lokasyon türü filtreleri" style={{ display: 'flex', gap: '6px', overflowX: 'auto', scrollbarWidth: 'none', paddingBottom: '4px', marginBottom: '12px' }}>
        {TIPLER.map(t => (
          <button
            key={t}
            role="tab"
            aria-selected={filtre === t}
            onClick={() => setFiltre(t)}
            style={{
              flexShrink: 0,
              background: filtre === t ? '#0096c7' : 'rgba(255,255,255,0.06)',
              border: filtre === t ? 'none' : '1px solid rgba(255,255,255,0.12)',
              borderRadius: '20px',
              padding: '5px 14px',
              color: filtre === t ? '#fff' : '#7ecfdf',
              fontSize: '11px',
              fontWeight: filtre === t ? '700' : '400',
              cursor: 'pointer',
            }}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Lokasyon kartları */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {liste.map(lok => (
          <div
            key={lok.id}
            role="article"
            aria-label={`${lok.isim}, ${lok.tip}, ${lok.mesafe}`}
            onClick={() => setSelectedLoc(lok)}
            style={{
              background: 'linear-gradient(135deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))',
              border: `1px solid ${lok.renk}30`,
              borderRadius: '14px',
              padding: '14px',
              borderLeft: `3px solid ${lok.renk}`,
              cursor: 'pointer',
              transition: 'transform 0.15s',
              outline: 'none',
            }}
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setSelectedLoc(lok); }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(3px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px' }}>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '3px' }}>
                  <span aria-hidden="true" style={{ fontSize: '15px' }}>{lok.emoji}</span>
                  <span style={{ background: `${lok.renk}22`, color: lok.renk, borderRadius: '6px', padding: '1px 7px', fontSize: '9px', fontWeight: '700' }}>{lok.tip}</span>
                </div>
                <div style={{ fontWeight: '700', fontSize: '13px', color: '#e8f4f8', lineHeight: '1.3' }}>{lok.isim}</div>
              </div>
              <div style={{ flexShrink: 0, marginLeft: '10px', textAlign: 'right' }}>
                {lok.mesafe !== '—' && (
                  <div style={{ fontSize: '11px', color: '#7ecfdf', fontWeight: '600' }}>{lok.mesafe}</div>
                )}
              </div>
            </div>
            <div style={{ fontSize: '11px', color: '#90c4d0', marginBottom: '6px' }}>{lok.etiket}</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Stars puan={lok.puan} />
              <button
                aria-label={`${lok.isim} için rota oluştur`}
                style={{ background: `${lok.renk}22`, color: lok.renk, border: `1px solid ${lok.renk}40`, borderRadius: '8px', padding: '4px 12px', fontSize: '10px', fontWeight: '700', cursor: 'pointer' }}
              >
                Rota →
              </button>
            </div>
          </div>
        ))}
      </div>
    </Panel>
  );
}
