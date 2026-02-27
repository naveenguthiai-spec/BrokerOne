import React from 'react';
import { STATUS_CONFIG } from '../data/constants';
import { S } from '../styles';

const PipelineBar = ({ cases }) => {
  const statuses = Object.keys(STATUS_CONFIG);

  return (
    <div style={{ ...S.card, marginBottom: 28 }}>
      <div
        style={{
          fontSize: 14,
          fontWeight: 600,
          color: '#1e293b',
          marginBottom: 16,
          fontFamily: 'system-ui, sans-serif'
        }}
      >
        Pipeline Overview
      </div>
      <div style={{ display: 'flex', gap: 8, alignItems: 'flex-end', height: 80 }}>
        {statuses.map(s => {
          const count = cases.filter(c => c.status === s).length;
          const cfg = STATUS_CONFIG[s];
          const pct = cases.length ? (count / cases.length) * 100 : 0;
          return (
            <div key={s} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: cfg.color, fontFamily: 'system-ui, sans-serif' }}>{count}</div>
              <div
                style={{
                  width: '100%',
                  height: Math.max(pct * 0.5 + 4, 8),
                  background: cfg.bg,
                  border: `2px solid ${cfg.color}40`,
                  borderRadius: 4,
                  transition: 'height 0.5s'
                }}
              />
              <div style={{ fontSize: 10, color: '#94a3b8', fontFamily: 'system-ui, sans-serif', textAlign: 'center' }}>{s}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PipelineBar;
