// Rota Belli — Yıldız Puan Bileşeni

export default function Stars({ puan }) {
  return (
    <span role="img" aria-label={`${puan} üzerinden 5 yıldız`} style={{ color: '#ffd166', fontSize: '11px' }}>
      {'★'.repeat(Math.floor(puan))}{'☆'.repeat(5 - Math.floor(puan))} {puan}
    </span>
  );
}
