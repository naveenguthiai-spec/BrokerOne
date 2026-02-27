import type { CSSProperties } from 'react';

// Shared style objects used across components.
// Each entry is explicitly cast to CSSProperties so TypeScript accepts
// string literals like 'uppercase', 'column', 'fixed', etc. in style props.
export const S = {
  app: {
    display: 'flex',
    height: '100vh',
    fontFamily: "'Crimson Pro', 'Georgia', serif",
    background: '#f8f9fc',
    color: '#1e293b',
    overflow: 'hidden'
  } as CSSProperties,

  sidebar: {
    width: 240,
    background: '#0f172a',
    color: '#e2e8f0',
    display: 'flex',
    flexDirection: 'column' as const,
    flexShrink: 0
  } as CSSProperties,

  sidebarLogo: {
    padding: '28px 24px 20px',
    borderBottom: '1px solid #1e293b'
  } as CSSProperties,

  sidebarLogoTitle: {
    fontSize: 18,
    fontWeight: 700,
    color: '#f8fafc',
    letterSpacing: '-0.5px',
    fontFamily: "'Crimson Pro', Georgia, serif"
  } as CSSProperties,

  sidebarLogoSub: {
    fontSize: 11,
    color: '#64748b',
    marginTop: 2,
    fontFamily: 'system-ui, sans-serif',
    letterSpacing: '0.5px',
    textTransform: 'uppercase' as const
  } as CSSProperties,

  sidebarNav: { flex: 1, padding: '16px 12px' } as CSSProperties,

  navItem: (active?: boolean): CSSProperties => ({
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    padding: '10px 12px',
    borderRadius: 8,
    cursor: 'pointer',
    marginBottom: 2,
    background: active ? '#1e3a5f' : 'transparent',
    color: active ? '#93c5fd' : '#94a3b8',
    fontSize: 14,
    fontFamily: 'system-ui, sans-serif',
    fontWeight: active ? 600 : 400,
    transition: 'all 0.15s'
  }),

  sidebarFooter: {
    padding: '16px 12px',
    borderTop: '1px solid #1e293b'
  } as CSSProperties,

  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column' as const,
    overflow: 'hidden'
  } as CSSProperties,

  topbar: {
    background: '#fff',
    borderBottom: '1px solid #e2e8f0',
    padding: '0 32px',
    height: 64,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexShrink: 0
  } as CSSProperties,

  content: { flex: 1, overflow: 'auto', padding: '32px' } as CSSProperties,

  card: {
    background: '#fff',
    borderRadius: 12,
    border: '1px solid #e2e8f0',
    padding: 24
  } as CSSProperties,

  kpiGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: 16,
    marginBottom: 28
  } as CSSProperties,

  kpiCard: {
    background: '#fff',
    borderRadius: 12,
    border: '1px solid #e2e8f0',
    padding: '20px 24px'
  } as CSSProperties,

  kpiValue: {
    fontSize: 32,
    fontWeight: 700,
    color: '#0f172a',
    letterSpacing: '-1px',
    fontFamily: "'Crimson Pro', Georgia, serif"
  } as CSSProperties,

  kpiLabel: {
    fontSize: 12,
    color: '#64748b',
    marginTop: 4,
    fontFamily: 'system-ui, sans-serif',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.5px'
  } as CSSProperties,

  table: { width: '100%', borderCollapse: 'collapse' as const } as CSSProperties,

  th: {
    textAlign: 'left' as const,
    padding: '12px 16px',
    fontSize: 11,
    fontWeight: 700,
    color: '#64748b',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.5px',
    borderBottom: '1px solid #e2e8f0',
    fontFamily: 'system-ui, sans-serif'
  } as CSSProperties,

  td: {
    padding: '14px 16px',
    fontSize: 14,
    borderBottom: '1px solid #f1f5f9',
    fontFamily: 'system-ui, sans-serif'
  } as CSSProperties,

  btn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    padding: '10px 20px',
    borderRadius: 8,
    border: 'none',
    cursor: 'pointer',
    fontSize: 14,
    fontWeight: 600,
    fontFamily: 'system-ui, sans-serif'
  } as CSSProperties,

  btnPrimary: { background: '#1e3a5f', color: '#fff' } as CSSProperties,

  btnSecondary: { background: '#f1f5f9', color: '#475569' } as CSSProperties,

  input: {
    width: '100%',
    padding: '10px 14px',
    borderRadius: 8,
    border: '1px solid #e2e8f0',
    fontSize: 14,
    fontFamily: 'system-ui, sans-serif',
    background: '#fff',
    color: '#1e293b',
    outline: 'none',
    boxSizing: 'border-box' as const
  } as CSSProperties,

  label: {
    fontSize: 12,
    fontWeight: 600,
    color: '#475569',
    marginBottom: 6,
    display: 'block',
    fontFamily: 'system-ui, sans-serif',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.4px'
  } as CSSProperties,

  modal: {
    position: 'fixed' as const,
    inset: 0,
    background: 'rgba(15,23,42,0.6)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
    backdropFilter: 'blur(4px)'
  } as CSSProperties,

  modalBox: {
    background: '#fff',
    borderRadius: 16,
    padding: 40,
    width: '90%',
    maxWidth: 780,
    maxHeight: '90vh',
    overflow: 'auto',
    boxShadow: '0 25px 60px rgba(0,0,0,0.2)'
  } as CSSProperties,

  tag: {
    display: 'inline-flex',
    alignItems: 'center',
    background: '#eff6ff',
    color: '#3b82f6',
    padding: '2px 10px',
    borderRadius: 20,
    fontSize: 12,
    fontFamily: 'system-ui, sans-serif',
    fontWeight: 500,
    marginRight: 4,
    marginBottom: 4
  } as CSSProperties,

  sectionTitle: {
    fontSize: 22,
    fontWeight: 700,
    color: '#0f172a',
    letterSpacing: '-0.5px',
    marginBottom: 4,
    fontFamily: "'Crimson Pro', Georgia, serif"
  } as CSSProperties,

  sectionSub: {
    fontSize: 13,
    color: '#64748b',
    marginBottom: 24,
    fontFamily: 'system-ui, sans-serif'
  } as CSSProperties
};
