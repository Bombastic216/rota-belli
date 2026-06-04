// Rota Belli — Profil Paneli
// Kullanıcı kartı, rozetler, kütüphane

import { useState } from 'react';
import Panel from '../layout/Panel';
import { ROZETLER, KATEGORILER, SEVIYELER, MAKALELER } from '../../data/locations';

export default function PanelProfil({ visible }) {
  const [kategoriFiltre, setKategoriFiltre] = useState('Tümü');
  const [seviyeFiltre, setSeviyeFiltre] = useState('Tümü');
  const [sadeceBookmark, setSadeceBookmark] = useState(false);
  const [acikMakale, setAcikMakale] = useState(null);

  let liste = MAKALELER;
  if (kategoriFiltre !== 'Tümü') liste = liste.filter(m => m.kategori === kategoriFiltre);
  if (seviyeFiltre !== 'Tümü') liste = liste.filter(m => m.seviye === seviyeFiltre);
  if (sadeceBookmark) liste = liste.filter(m => m.bookmark);

  const seviyeRenk = { 'Başlangıç': '#52b788', 'Orta': '#ffd166', 'İleri': '#e76f51' };
  const kategoriRenk = { Rehber: '#0096c7', Ekipman: '#e76f51', Güvenlik: '#f4a261', Fotoğrafçılık: '#a8dadc', Navigasyon: '#4cc9f0' };

  return (
    <Panel visible={visible} aria-label="Profil ve kütüphane paneli">

      {/* Profil kartı */}
      <div style={{
        background: 'linear-gradient(135deg,rgba(0,150,199,0.2),rgba(0,119,182,0.1))',
        border: '1px solid rgba(0,180,216,0.3)', borderRadius: '18px', padding: '18px', marginBottom: '16px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px' }}>
          <div aria-hidden="true" style={{
            width: '54px', height: '54px',
            background: 'linear-gradient(135deg,#0096c7,#0077b6)', borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '26px',
            boxShadow: '0 0 20px rgba(0,150,199,0.4)',
          }}>🧭</div>
          <div>
            <div style={{ fontWeight: '800', fontSize: '16px', color: '#caf0f8' }}>Gezgin</div>
            <div style={{ fontSize: '11px', color: '#7ecfdf' }}>@rotabelli · İstanbul</div>
          </div>
          <div style={{ marginLeft: 'auto', textAlign: 'center' }}>
            <div style={{ fontSize: '22px', fontWeight: '800', color: '#ffd166' }}>2.840</div>
            <div style={{ fontSize: '9px', color: '#a8dadc', letterSpacing: '0.5px' }}>KEŞİF PUANI</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '6px' }}>
          {[['14', 'Check-in'], ['6', 'Rota'], ['3', 'Rozet']].map(([v, l]) => (
            <div key={l} style={{ flex: 1, background: 'rgba(0,0,0,0.2)', borderRadius: '10px', padding: '8px', textAlign: 'center' }}>
              <div style={{ fontSize: '16px', fontWeight: '800', color: '#90e0ef' }}>{v}</div>
              <div style={{ fontSize: '9px', color: '#7ecfdf' }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Rozetler */}
      <div style={{ marginBottom: '16px' }}>
        <div style={{ fontSize: '11px', letterSpacing: '3px', color: '#0096c7', fontFamily: 'monospace', marginBottom: '10px' }}>ROZETLER</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
          {ROZETLER.map((r, i) => (
            <div
              key={i}
              role="img"
              aria-label={`${r.isim}: ${r.tamamlandi ? 'Tamamlandı' : 'Henüz tamamlanmadı'} — ${r.aciklama}`}
              style={{
                background: r.tamamlandi ? 'rgba(201,168,76,0.12)' : 'rgba(255,255,255,0.04)',
                border: `1px solid ${r.tamamlandi ? 'rgba(201,168,76,0.4)' : 'rgba(255,255,255,0.1)'}`,
                borderRadius: '12px', padding: '10px',
                opacity: r.tamamlandi ? 1 : 0.6,
              }}
            >
              <div style={{ fontSize: '20px', marginBottom: '4px' }}>{r.tamamlandi ? r.icon : '🔒'}</div>
              <div style={{ fontSize: '11px', fontWeight: '700', color: r.tamamlandi ? '#f0d98c' : '#7ecfdf', marginBottom: '2px' }}>{r.isim}</div>
              <div style={{ fontSize: '9.5px', color: '#7ecfdf' }}>{r.aciklama}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Gezi Paradigması */}
      <div style={{
        background: 'linear-gradient(135deg,rgba(82,183,136,0.12),rgba(52,78,65,0.2))',
        border: '1px solid rgba(82,183,136,0.3)', borderRadius: '16px', padding: '16px',
        marginBottom: '14px', position: 'relative', overflow: 'hidden',
      }}>
        <div aria-hidden="true" style={{ position: 'absolute', bottom: '-12px', right: '-8px', fontSize: '60px', opacity: 0.06, userSelect: 'none' }}>🧭</div>
        <div style={{ fontSize: '10px', letterSpacing: '3px', color: '#52b788', fontFamily: 'monospace', marginBottom: '8px' }}>GEZİ PARADİGMASI</div>
        <blockquote style={{ margin: 0, fontSize: '12px', color: '#c8ead8', lineHeight: '1.8', fontStyle: 'italic' }}>
          "İnsanların dini inancı, iç huzuru nerede buldukları ve bunu paylaşıp paylaşmayacağı kendi kararlarıdır.
          Hiç kimse herkesi sevmesi gerektiği zaruriyeti yoktur.
          İnsan sevmek için bahane aramak, saygılı olmak ilkesini benimsemek en büyük erdemlerdendir."
        </blockquote>
      </div>

      {/* ══════════════════════════ KÜTÜPHANE ══════════════════════════ */}
      <div style={{ marginTop: '20px', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '18px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
          <span aria-hidden="true" style={{ fontSize: '20px' }}>📚</span>
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: '800', color: '#caf0f8', margin: 0 }}>Kitap Kütüphanesi</h3>
            <div style={{ fontSize: '10px', color: '#7ecfdf', letterSpacing: '0.5px' }}>Doğa & aktivite rehberleri · Paylaşılan kitaplar</div>
          </div>
        </div>

        {/* Kategori filtreleri */}
        <div role="tablist" aria-label="Kategori filtreleri" style={{ display: 'flex', gap: '6px', overflowX: 'auto', scrollbarWidth: 'none', paddingBottom: '4px', marginBottom: '8px' }}>
          {KATEGORILER.map(k => {
            const kr = kategoriRenk[k] || '#0096c7';
            return (
              <button
                key={k}
                role="tab"
                aria-selected={kategoriFiltre === k}
                onClick={() => setKategoriFiltre(k)}
                style={{
                  flexShrink: 0,
                  background: kategoriFiltre === k ? kr + '30' : 'rgba(255,255,255,0.05)',
                  border: `1px solid ${kategoriFiltre === k ? kr + '80' : 'rgba(255,255,255,0.08)'}`,
                  borderRadius: '20px', padding: '5px 12px',
                  color: kategoriFiltre === k ? '#fff' : '#7ecfdf',
                  fontSize: '9px', fontWeight: kategoriFiltre === k ? '700' : '400',
                  cursor: 'pointer',
                }}
              >
                {k}
              </button>
            );
          })}
        </div>

        {/* Seviye filtreleri */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '10px' }}>
          <div style={{ display: 'flex', gap: '4px', flex: 1 }}>
            {SEVIYELER.map(s => {
              const sr = seviyeRenk[s] || '#7ecfdf';
              return (
                <button
                  key={s}
                  aria-selected={seviyeFiltre === s}
                  onClick={() => setSeviyeFiltre(s)}
                  style={{
                    flex: 1, textAlign: 'center',
                    background: seviyeFiltre === s ? sr + '25' : 'rgba(255,255,255,0.04)',
                    border: `1px solid ${seviyeFiltre === s ? sr + '60' : 'rgba(255,255,255,0.08)'}`,
                    borderRadius: '8px', padding: '4px 2px',
                    color: seviyeFiltre === s ? sr : '#7ecfdf',
                    fontSize: '8px', fontWeight: seviyeFiltre === s ? '700' : '400',
                    cursor: 'pointer',
                  }}
                >
                  {s}
                </button>
              );
            })}
          </div>
          <button
            aria-pressed={sadeceBookmark}
            aria-label="Sadece kaydedilenleri göster"
            onClick={() => setSadeceBookmark(!sadeceBookmark)}
            style={{
              flexShrink: 0,
              background: sadeceBookmark ? 'rgba(255,209,102,0.2)' : 'rgba(255,255,255,0.04)',
              border: `1px solid ${sadeceBookmark ? 'rgba(255,209,102,0.5)' : 'rgba(255,255,255,0.08)'}`,
              borderRadius: '8px', padding: '5px 10px',
              fontSize: '11px', cursor: 'pointer', transition: 'all 0.2s',
            }}
          >
            {sadeceBookmark ? '★' : '☆'}
          </button>
        </div>

        <div style={{ fontSize: '9px', color: '#7ecfdf', letterSpacing: '1.5px', fontFamily: 'monospace', marginBottom: '8px' }}>
          {liste.length} KİTAP
        </div>

        {/* Makale listesi */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', maxHeight: '340px', overflowY: 'auto', scrollbarWidth: 'thin' }}>
          {liste.length === 0 && (
            <div style={{ textAlign: 'center', padding: '24px 16px', color: '#7ecfdf', fontSize: '11px', fontStyle: 'italic' }}>
              🔍 Kriterlere uygun kitap bulunamadı
            </div>
          )}
          {liste.map(m => {
            const ac = acikMakale === m.id;
            const kr = kategoriRenk[m.kategori] || '#0096c7';
            return (
              <div
                key={m.id}
                style={{
                  background: ac ? `${kr}10` : 'rgba(255,255,255,0.04)',
                  border: `1px solid ${ac ? kr + '50' : 'rgba(255,255,255,0.08)'}`,
                  borderRadius: '12px', overflow: 'hidden', transition: 'all 0.2s',
                }}
              >
                <div
                  role="button"
                  aria-expanded={ac}
                  aria-controls={`makale-${m.id}`}
                  tabIndex={0}
                  style={{ padding: '10px 12px', cursor: 'pointer' }}
                  onClick={() => setAcikMakale(ac ? null : m.id)}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setAcikMakale(ac ? null : m.id); }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div style={{ display: 'flex', gap: '8px', flex: 1 }}>
                      <div aria-hidden="true" style={{
                        width: '36px', height: '36px', background: `${kr}25`,
                        borderRadius: '10px', display: 'flex', alignItems: 'center',
                        justifyContent: 'center', fontSize: '18px', flexShrink: 0,
                      }}>{m.simge}</div>
                      <div style={{ minWidth: 0 }}>
                        <div style={{ fontWeight: '700', fontSize: '11px', color: '#e8f4f8', lineHeight: '1.3', marginBottom: '2px' }}>{m.isim}</div>
                        <div style={{ display: 'flex', gap: '3px', flexWrap: 'wrap', alignItems: 'center' }}>
                          <span style={{ background: `${kr}22`, color: kr, borderRadius: '4px', padding: '1px 5px', fontSize: '8px', fontWeight: '700' }}>{m.kategori}</span>
                          <span style={{ background: `${(seviyeRenk[m.seviye] || '#7ecfdf')}22`, color: seviyeRenk[m.seviye] || '#7ecfdf', borderRadius: '4px', padding: '1px 5px', fontSize: '8px', fontWeight: '700' }}>{m.seviye}</span>
                          <span style={{ fontSize: '8px', color: '#7ecfdf' }}>⏱ {m.sure}</span>
                          <span style={{ fontSize: '8px', color: 'rgba(255,255,255,0.3)' }}>📦 {m.boyut}</span>
                        </div>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px', flexShrink: 0, marginLeft: '6px' }}>
                      {m.bookmark && <span aria-label="Kaydedilmiş" style={{ fontSize: '11px', color: '#ffd166' }}>★</span>}
                      <div style={{
                        width: '18px', height: '18px',
                        background: ac ? `${kr}30` : 'rgba(255,255,255,0.05)',
                        borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '11px', color: ac ? kr : '#7ecfdf',
                        transform: ac ? 'rotate(45deg)' : 'none', transition: 'all 0.25s',
                      }}>+</div>
                    </div>
                  </div>
                </div>
                {ac && (
                  <div id={`makale-${m.id}`} style={{ padding: '0 12px 12px' }}>
                    <div style={{ height: '1px', background: `${kr}30`, marginBottom: '8px' }} />
                    <p style={{ margin: '0 0 10px', fontSize: '10px', color: '#a8dadc', lineHeight: '1.6' }}>{m.aciklama}</p>
                    <div style={{ display: 'flex', gap: '5px' }}>
                      <button style={{
                        flex: 1, background: `linear-gradient(135deg,${kr},${kr}cc)`,
                        border: 'none', borderRadius: '8px', padding: '7px',
                        color: '#fff', fontSize: '10px', fontWeight: '700', cursor: 'pointer',
                      }}>📖 Oku</button>
                      <button style={{
                        flex: 1, background: 'rgba(255,255,255,0.06)',
                        border: `1px solid ${kr}30`, borderRadius: '8px', padding: '7px',
                        color: kr, fontSize: '10px', fontWeight: '700', cursor: 'pointer',
                      }}>
                        {m.bookmark ? '★ Kaydedildi' : '☆ Kaydet'}
                      </button>
                      <button aria-label="Paylaş" style={{
                        width: '36px', background: 'rgba(255,255,255,0.06)',
                        border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px',
                        fontSize: '12px', cursor: 'pointer',
                      }}>🔗</button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </Panel>
  );
}
