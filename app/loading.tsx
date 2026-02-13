export default function Loading() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '50vh',
        gap: '0.75rem',
      }}
    >
      <div
        className="loading-spinner"
        style={{
          width: 40,
          height: 40,
          border: '3px solid #e5e7eb',
          borderTopColor: '#16a34a',
          borderRadius: '50%',
        }}
      />
      <p style={{ color: '#6b7280', fontSize: '0.9rem', margin: 0 }}>Đang tải...</p>
    </div>
  );
}
