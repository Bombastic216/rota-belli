// Rota Belli — Panel Bileşeni
// Tüm paneller için ortak konteyner

export default function Panel({ visible, children, role = 'region', 'aria-label': ariaLabel }) {
  return (
    <div
      role={role}
      aria-label={ariaLabel}
      aria-hidden={!visible}
      style={{
        position: 'absolute',
        inset: 0,
        overflowY: 'auto',
        scrollbarWidth: 'none',
        padding: '20px 16px 100px',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(12px)',
        transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
        pointerEvents: visible ? 'auto' : 'none',
      }}
    >
      {children}
    </div>
  );
}
