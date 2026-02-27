import React from 'react';
import { fmtDollar } from '../utils/helpers';
import { S } from '../styles';

const KpiCards = ({ cases }) => {
  const total = cases.length;
  const active = cases.filter(c => ['Submitted', 'Under Review', 'Quoted'].includes(c.status)).length;
  const bound = cases.filter(c => c.status === 'Bound').length;
  const totalPremium = cases.filter(c => c.premium).reduce((a, c) => a + c.premium, 0);

  const kpis = [
    { label: 'Total Cases', value: total, color: '#3b82f6' },
    { label: 'Active Pipeline', value: active, color: '#8b5cf6' },
    { label: 'Bound Cases', value: bound, color: '#10b981' },
    { label: 'Bound Premium', value: fmtDollar(totalPremium), color: '#f59e0b' }
  ];

  return (
    <div style={S.kpiGrid}>
      {kpis.map(k => (
        <div key={k.label} style={S.kpiCard}>
          <div style={{ width: 4, height: 32, background: k.color, borderRadius: 2, marginBottom: 12 }} />
          <div style={{ ...S.kpiValue, color: k.color }}>{k.value}</div>
          <div style={S.kpiLabel}>{k.label}</div>
        </div>
      ))}
    </div>
  );
};

export default KpiCards;
