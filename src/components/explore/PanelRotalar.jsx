// Rota Belli — Rotalar Paneli
// Doğa aktiviteleri + Tarihi gezi rotaları

import { useState } from 'react';
import Panel from '../layout/Panel';
import PanelBaslik from '../layout/PanelBaslik';
import { AKTIVITELER, TARIHI_ROTLAR } from '../../data/locations';

export default function PanelRotalar({ visible }) {
  const [aktifAktivite, setAktifAktivite] = useState(null);
  const [aktifRota, setAktifRota] = useState(null);

  return (
    <Panel visible={visible} aria-label="Rotalar paneli">

      {/* ── Doğa Aktiviteleri ── */}
      <PanelBaslik icon="🏕️" baslik="Aktivite Rotaları" alt="6 aktivite kategorisi · Tüm seviyelere uygun" />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
        {AKTIVITELER.map(a => {
          const ac = aktifAktivite === a.id;
          return (
            <div
              key={a.id}
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: `1px solid ${ac ? a.color : 'rgba(255,255,255,0.1)'}`,
                borderRadius: '14px',
                overflow: 'hidden',
                boxShadow: ac ? `0 0 20px ${a.color}25` : 'none',
                transition: 'all 0.25s',
              }}
            >
              <button
                aria-expanded={ac}
                aria-controls={`aktivite-detay-${a.id}`}
                onClick={() => setAktifAktivite(ac ? null : a.id)}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  background: ac ? `linear-gradient(135deg,${a.color}22,transparent)` : 'transparent',
                  border: 'none',
                  padding: '13px 14px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{
                    width: '38px', height: '38px',
                    background: ac ? `${a.color}30` : 'rgba(255,255,255,0.07)',
                    borderRadius: '10px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '20px', transition: 'all 0.2s',
                  }}>
                    <span aria-hidden="true">{a.icon}</span>
                  </div>
                  <div>
                    <div style={{ fontWeight: '700', fontSize: '13px', color: ac ? a.color : '#caf0f8' }}>{a.label}</div>
                    <div style={{ fontSize: '10px', color: '#7ecfdf', marginTop: '1px' }}>{a.km}</div>
                  </div>
                </div>
                <div style={{
                  width: '22px', height: '22px',
                  background: ac ? `${a.color}30` : 'rgba(255,255,255,0.07)',
                  borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: ac ? a.color : '#7ecfdf',
                  fontSize: '14px', fontWeight: 'bold', flexShrink: 0,
                  transform: ac ? 'rotate(45deg)' : 'none',
                  transition: 'all 0.2s',
                }}>
                  +
                </div>
              </button>

              {ac && (
                <div id={`aktivite-detay-${a.id}`} role="region" aria-label={`${a.label} detayları`} style={{ padding: '0 14px 14px' }}>
                  <div style={{ height: '1px', background: `${a.color}30`, marginBottom: '12px' }} />
                  <div style={{ fontSize: '11.5px', color: '#a8dadc', marginBottom: '8px', lineHeight: '1.6', borderLeft: `2px solid ${a.color}50`, paddingLeft: '10px' }}>
                    📍 {a.rota}
                  </div>
                  <div style={{ fontSize: '11px', color: '#7ecfdf', lineHeight: '1.6', marginBottom: '12px' }}>{a.detay}</div>
                  <button
                    aria-label={`${a.label} rotasını görüntüle`}
                    style={{
                      background: `linear-gradient(135deg,${a.color},${a.color}cc)`,
                      border: 'none', borderRadius: '10px',
                      padding: '8px 18px', color: '#fff',
                      fontSize: '11px', fontWeight: '700', cursor: 'pointer',
                    }}
                  >
                    Rotayı Gör →
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* ── Tarihi Gezi Rotaları ── */}
      <div style={{ marginTop: '8px', marginBottom: '6px' }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: '8px',
          padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.08)', marginBottom: '14px',
        }}>
          <span style={{ fontSize: '20px' }}>🏛️</span>
          <div>
            <div style={{ fontWeight: '800', fontSize: '15px', color: '#f4a261' }}>Tarihi Gezi Rotaları</div>
            <div style={{ fontSize: '10px', color: '#d4a373', marginTop: '1px' }}>Türkiye genelindeki UNESCO ve tarihi yerler · 7 tema rotası</div>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {TARIHI_ROTLAR.map(r => {
          const ac = aktifRota === r.id;
          return (
            <div
              key={r.id}
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: `1px solid ${ac ? r.color : 'rgba(255,255,255,0.1)'}`,
                borderRadius: '14px',
                overflow: 'hidden',
                boxShadow: ac ? `0 0 20px ${r.color}25` : 'none',
                transition: 'all 0.25s',
              }}
            >
              <button
                aria-expanded={ac}
                aria-controls={`tarihi-rota-${r.id}`}
                onClick={() => setAktifRota(ac ? null : r.id)}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  background: ac ? `linear-gradient(135deg,${r.color}22,transparent)` : 'transparent',
                  border: 'none',
                  padding: '13px 14px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{
                    width: '38px', height: '38px',
                    background: ac ? `${r.color}30` : 'rgba(255,255,255,0.07)',
                    borderRadius: '10px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '20px', transition: 'all 0.2s',
                  }}>
                    <span aria-hidden="true">{r.icon}</span>
                  </div>
                  <div>
                    <div style={{ fontWeight: '700', fontSize: '13px', color: ac ? r.color : '#caf0f8' }}>{r.label}</div>
                    <div style={{ fontSize: '10px', color: '#7ecfdf', marginTop: '1px' }}>
                      {r.konum} · {r.sure} · {r.mesafe}
                    </div>
                  </div>
                </div>
                <div style={{
                  width: '22px', height: '22px',
                  background: ac ? `${r.color}30` : 'rgba(255,255,255,0.07)',
                  borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: ac ? r.color : '#7ecfdf',
                  fontSize: '14px', fontWeight: 'bold', flexShrink: 0,
                  transform: ac ? 'rotate(45deg)' : 'none',
                  transition: 'all 0.2s',
                }}>
                  +
                </div>
              </button>

              {ac && (
                <div id={`tarihi-rota-${r.id}`} role="region" aria-label={`${r.label} detayları`} style={{ padding: '0 14px 14px' }}>
                  <div style={{ height: '1px', background: `${r.color}30`, marginBottom: '12px' }} />

                  {/* Rota özeti */}
                  <div style={{ fontSize: '11.5px', color: '#a8dadc', marginBottom: '10px', lineHeight: '1.6', fontStyle: 'italic' }}>
                    {r.aciklama}
                  </div>

                  {/* Bilgi etiketleri */}
                  <div style={{ display: 'flex', gap: '6px', marginBottom: '12px', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '10px', padding: '3px 8px', borderRadius: '6px', background: `${r.color}20`, color: r.color, fontWeight: '600' }}>
                      📍 {r.konum}
                    </span>
                    <span style={{ fontSize: '10px', padding: '3px 8px', borderRadius: '6px', background: `${r.color}20`, color: r.color, fontWeight: '600' }}>
                      ⏱ {r.sure}
                    </span>
                    <span style={{ fontSize: '10px', padding: '3px 8px', borderRadius: '6px', background: `${r.color}20`, color: r.color, fontWeight: '600' }}>
                      🚗 {r.mesafe}
                    </span>
                    <span style={{ fontSize: '10px', padding: '3px 8px', borderRadius: '6px', background: `${r.color}20`, color: r.color, fontWeight: '600' }}>
                      📊 {r.seviye}
                    </span>
                  </div>

                  {/* Duraklar listesi */}
                  <div style={{ marginBottom: '12px' }}>
                    <div style={{ fontSize: '11px', fontWeight: '700', color: r.color, marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      Rota Durakları
                    </div>
                    {r.duraklar.map(d => (
                      <div key={d.sira} style={{
                        display: 'flex', gap: '8px', padding: '6px 0',
                        borderBottom: '1px solid rgba(255,255,255,0.04)',
                      }}>
                        <div style={{
                          width: '22px', height: '22px', borderRadius: '50%',
                          background: `${r.color}30`, color: r.color,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          fontSize: '10px', fontWeight: '800', flexShrink: 0,
                        }}>
                          {d.sira}
                        </div>
                        <div>
                          <div style={{ fontSize: '11.5px', fontWeight: '700', color: '#caf0f8' }}>{d.isim}</div>
                          <div style={{ fontSize: '10px', color: '#7ecfdf' }}>📍 {d.il}</div>
                          <div style={{ fontSize: '10px', color: '#a8dadc', marginTop: '2px', lineHeight: '1.4' }}>{d.detay}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <button
                    aria-label={`${r.label} rotasını haritada görüntüle`}
                    style={{
                      background: `linear-gradient(135deg,${r.color},${r.color}cc)`,
                      border: 'none', borderRadius: '10px',
                      padding: '8px 18px', color: '#fff',
                      fontSize: '11px', fontWeight: '700', cursor: 'pointer',
                    }}
                  >
                    Rotayı Haritada Gör →
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Panel>
  );
}
