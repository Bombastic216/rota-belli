// Rota Belli — Panel Başlık Bileşeni

export default function PanelBaslik({ icon, baslik, alt }) {
  return (
    <div style={{ marginBottom: '16px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span role="img" aria-hidden="true" style={{ fontSize: '22px' }}>{icon}</span>
        <div>
          <h2 style={{ margin: 0, fontSize: '20px', fontWeight: '900', color: '#caf0f8', letterSpacing: '-0.5px' }}>{baslik}</h2>
          <div style={{ fontSize: '11px', color: '#7ecfdf', letterSpacing: '0.5px' }}>{alt}</div>
        </div>
      </div>
    </div>
  );
}
