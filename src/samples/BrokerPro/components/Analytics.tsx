import React from 'react';
import KpiCards from './KpiCards';
import { BROKERS, STATUS_CONFIG } from '../data/constants';
import { S } from '../styles';

const Analytics = ({ cases }) => {
  const byStatus = Object.keys(STATUS_CONFIG).map(s => ({
    status: s,
    count: cases.filter(c => c.status === s).length,
    cfg: STATUS_CONFIG[s]
  }));

  const byBroker = BROKERS.map(b => ({
    broker: b,
    count: cases.filter(c => c.broker === b).length,
    bound: cases.filter(c => c.broker === b && c.status === 'Bound').length
  }));

  const total = cases.length;
  const bound = cases.filter(c => c.status === 'Bound').length;

  return (
    <div>
      <div style={S.sectionTitle}>Analytics & Reporting</div>
      <div style={S.sectionSub}>Book of business performance – current period</div>

      <KpiCards cases={cases} />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
        {/* Cases by Status */}
        <div style={S.card}>
          <div style={{ fontSize: 14, fontWeight: 700, fontFamily: 'system-ui, sans-serif', marginBottom: 20 }}>Cases by Status</div>
          {byStatus.map(s => (
            <div key={s.status} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
              <div style={{ fontSize: 13, fontFamily: 'system-ui, sans-serif', width: 100, color: '#475569' }}>{s.status}</div>
              <div style={{ flex: 1, height: 10, background: '#f1f5f9', borderRadius: 10, overflow: 'hidden' }}>
                <div
                  style={{
                    width: total ? `${(s.count / total) * 100}%` : '0%',
                    height: '100%',
                    background: s.cfg.color,
                    borderRadius: 10,
                    transition: 'width 0.8s ease'
                  }}
                />
              </div>
              <div style={{ fontSize: 13, fontWeight: 700, fontFamily: 'system-ui, sans-serif', width: 20, color: s.cfg.color }}>{s.count}</div>
            </div>
          ))}
        </div>

        {/* Broker Performance */}
        <div style={S.card}>
          <div style={{ fontSize: 14, fontWeight: 700, fontFamily: 'system-ui, sans-serif', marginBottom: 20 }}>Broker Performance</div>
          {byBroker
            .filter(b => b.count > 0)
            .map(b => (
              <div key={b.broker} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    background: '#eff6ff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 14,
                    fontWeight: 700,
                    color: '#3b82f6',
                    flexShrink: 0
                  }}
                >
                  {b.broker
                    .split(' ')
                    .map(n => n[0])
                    .join('')}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 600, fontFamily: 'system-ui, sans-serif' }}>{b.broker}</div>
                  <div style={{ fontSize: 11, color: '#94a3b8', fontFamily: 'system-ui, sans-serif' }}>
                    {b.count} cases · {b.bound} bound
                  </div>
                </div>
                <div style={{ fontSize: 14, fontWeight: 700, color: '#10b981', fontFamily: 'system-ui, sans-serif' }}>
                  {b.count ? Math.round((b.bound / b.count) * 100) : 0}% win
                </div>
              </div>
            ))}
        </div>

        {/* Win Rate Summary */}
        <div style={{ ...S.card, gridColumn: '1/-1' }}>
          <div style={{ fontSize: 14, fontWeight: 700, fontFamily: 'system-ui, sans-serif', marginBottom: 16 }}>Win Rate Summary</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
            <div style={{ fontSize: 64, fontWeight: 700, color: '#10b981', letterSpacing: '-2px', fontFamily: "'Crimson Pro', Georgia, serif" }}>
              {total ? Math.round((bound / total) * 100) : 0}%
            </div>
            <div>
              <div style={{ fontSize: 14, fontFamily: 'system-ui, sans-serif', color: '#64748b' }}>Overall win rate across all brokers</div>
              <div style={{ fontSize: 13, fontFamily: 'system-ui, sans-serif', color: '#94a3b8', marginTop: 4 }}>
                {bound} won · {cases.filter(c => c.status === 'Lost').length} lost · {cases.filter(c => !['Bound', 'Lost'].includes(c.status)).length}{' '}
                in progress
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
