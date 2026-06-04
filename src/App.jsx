// Rota Belli — Ana Uygulama Bileşeni
// Modüler yapı: bileşenler/ altında ayrı dosyalar

import { useState, useEffect } from 'react';
import PanelKesif from './components/explore/PanelKesif';
import PanelRotalar from './components/explore/PanelRotalar';
import PanelHarita from './components/map/PanelHarita';
import PanelProfil from './components/profile/PanelProfil';

// Navigasyon tanımı — Rezervasyon kaldırıldı (sonra eklenecek)
const NAV = [
  { id: 'kesif',   icon: '🧭', label: 'Keşfet',  color: '#0096c7' },
  { id: 'rotalar', icon: '🥾', label: 'Rotalar',  color: '#52b788' },
  { id: 'harita',  icon: '🗺️', label: 'Harita',   color: '#52b788' },
  { id: 'profil',  icon: '👤', label: 'Profil',   color: '#f72585' },
];

export default function App() {
  const [aktif, setAktif] = useState('kesif');
  const [splash, setSplash] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setSplash(false), 1800);
    return () => clearTimeout(t);
  }, []);

  const navColor = NAV.find(n => n.id === aktif)?.color || '#0096c7';

  return (
    <div
      role="application"
      aria-label="Rota Belli — Doğa aktiviteleri rota uygulaması"
      style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        minHeight: '100vh',
        background: 'linear-gradient(160deg,#06101d 0%,#0a1825 60%,#061420 100%)',
        fontFamily: 'Georgia,serif',
        padding: '20px 12px',
      }}
    >
      <div
        style={{
          width: '100%', maxWidth: '390px', height: '780px',
          background: '#08121e', borderRadius: '40px',
          boxShadow: `0 40px 100px rgba(0,0,0,0.7),0 0 0 1px rgba(255,255,255,0.08),0 0 60px ${navColor}18`,
          overflow: 'hidden', position: 'relative',
          display: 'flex', flexDirection: 'column',
          transition: 'box-shadow 0.4s',
        }}
      >
        {/* Splash Screen */}
        {splash && (
          <div
            style={{
              position: 'absolute', inset: 0, zIndex: 100,
              background: 'linear-gradient(160deg,#06101d,#0a1825)',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center', gap: '12px',
              animation: 'fadeOut 0.5s ease 1.4s forwards',
            }}
            aria-hidden="true"
          >
            <style>{`@keyframes fadeOut{to{opacity:0;pointer-events:none}}`}</style>
            <div style={{ fontSize: '52px' }}>🧭</div>
            <div style={{
              fontSize: '30px', fontWeight: '900', letterSpacing: '-1px',
              background: 'linear-gradient(135deg,#caf0f8,#0096c7)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>ROTA BELLİ</div>
            <div style={{ fontSize: '11px', color: '#7ecfdf', letterSpacing: '3px' }}>DOĞA · TOPLULUK · KEŞİF</div>
          </div>
        )}

        {/* Status Bar */}
        <div style={{ padding: '12px 24px 8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexShrink: 0 }}>
          <time aria-label="Saat 9:41" style={{ fontSize: '13px', fontWeight: '700', color: '#e8f4f8' }}>9:41</time>
          <div aria-hidden="true" style={{ width: '100px', height: '6px', background: '#0a192f', borderRadius: '3px' }} />
          <div aria-hidden="true" style={{ fontSize: '12px', color: '#7ecfdf' }}>●●● ▲ ⬛</div>
        </div>

        {/* İçerik Alanı */}
        <main style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
          <PanelKesif visible={aktif === 'kesif'} />
          <PanelRotalar visible={aktif === 'rotalar'} />
          <PanelHarita visible={aktif === 'harita'} />
          <PanelProfil visible={aktif === 'profil'} />
        </main>

        {/* Alt Navigasyon */}
        <nav role="navigation" aria-label="Ana navigasyon" style={{
          display: 'flex', background: 'rgba(6,16,29,0.95)',
          borderTop: '1px solid rgba(255,255,255,0.08)',
          backdropFilter: 'blur(20px)',
          padding: '8px 4px 20px', flexShrink: 0,
        }}>
          {NAV.map(n => {
            const isA = aktif === n.id;
            return (
              <button
                key={n.id}
                aria-current={isA ? 'page' : undefined}
                aria-label={n.label}
                onClick={() => setAktif(n.id)}
                style={{
                  flex: 1, display: 'flex', flexDirection: 'column',
                  alignItems: 'center', justifyContent: 'center', gap: '4px',
                  background: 'none', border: 'none',
                  padding: '6px 4px', cursor: 'pointer', position: 'relative',
                }}
              >
                {isA && (
                  <div style={{
                    position: 'absolute', top: '-1px', left: '50%',
                    transform: 'translateX(-50%)',
                    width: '30px', height: '2px', background: n.color,
                    borderRadius: '0 0 3px 3px',
                    boxShadow: `0 0 8px ${n.color}`,
                  }} />
                )}
                <div style={{
                  width: '38px', height: '38px',
                  background: isA ? `${n.color}22` : 'transparent',
                  borderRadius: '12px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '20px', transition: 'all 0.25s',
                  transform: isA ? 'scale(1.05)' : 'scale(1)',
                }}>
                  <span aria-hidden="true">{n.icon}</span>
                </div>
                <div style={{
                  fontSize: '9px', letterSpacing: '0.3px',
                  color: isA ? n.color : 'rgba(255,255,255,0.35)',
                  fontWeight: isA ? '700' : '400',
                  transition: 'color 0.2s',
                }}>
                  {n.label}
                </div>
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
