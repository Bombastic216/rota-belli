// Rota Belli — Harita Paneli
// Interaktif harita + lokasyon listesi

import { useState } from 'react';
import Panel from '../layout/Panel';
import PanelBaslik from '../layout/PanelBaslik';
import Stars from '../layout/Stars';
import RotaMap from '../map/RotaMap';
import { LOKASYONLAR } from '../../data/locations';

export default function PanelHarita({ visible }) {
  const [selectedLoc, setSelectedLoc] = useState(null);

  return (
    <Panel visible={visible} aria-label="Harita paneli">
      <PanelBaslik icon="🗺️" baslik="Harita" alt="Tüm lokasyonlar · Tıkla, keşfet" />

      {/* Harita */}
      <RotaMap
        locations={LOKASYONLAR}
        selectedLoc={selectedLoc}
        onSelectLocation={setSelectedLoc}
      />

      {/* Lokasyon listesi */}
      <div style={{ fontSize: '10px', color: '#7ecfdf', letterSpacing: '2px', fontFamily: 'monospace', marginBottom: '8px' }}>
        LOKASYONLAR ({LOKASYONLAR.length})
      </div>
      <div role="listbox" aria-label="Lokasyon listesi" style={{ display: 'flex', flexDirection: 'column', gap: '6px', maxHeight: '180px', overflowY: 'auto', scrollbarWidth: 'thin' }}>
        {LOKASYONLAR.map(lok => (
          <button
            key={lok.id}
            role="option"
            aria-selected={selectedLoc?.id === lok.id}
            onClick={() => setSelectedLoc(lok)}
            style={{
              display: 'flex', alignItems: 'center', gap: '10px',
              background: selectedLoc?.id === lok.id ? `${lok.renk}22` : 'rgba(255,255,255,0.04)',
              border: `1px solid ${selectedLoc?.id === lok.id ? lok.renk + '60' : 'rgba(255,255,255,0.08)'}`,
              borderRadius: '12px', padding: '10px 12px', cursor: 'pointer',
              textAlign: 'left', transition: 'all 0.2s',
            }}
          >
            <span aria-hidden="true" style={{ fontSize: '18px', flexShrink: 0 }}>{lok.emoji}</span>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontWeight: '700', fontSize: '12px', color: '#e8f4f8', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {lok.isim}
              </div>
              <div style={{ fontSize: '10px', color: lok.renk, fontWeight: '600' }}>
                {lok.tip} · {lok.mesafe}
              </div>
            </div>
            <div style={{
              flexShrink: 0, width: '20px', height: '20px', borderRadius: '50%',
              background: lok.renk + '30', display: 'flex', alignItems: 'center',
              justifyContent: 'center', fontSize: '10px', fontWeight: '700', color: lok.renk,
            }}>
              →
            </div>
          </button>
        ))}
      </div>
    </Panel>
  );
}
