//import React from 'react';
import { STATUS_CONFIG } from '../data/constants';

export const fmtDollar = n => (n ? `$${(n / 1000).toFixed(0)}K` : '---');

export const fmtDate = d => (d ? new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : '---');

export const StatusBadge = ({ status }) => {
  const cfg = STATUS_CONFIG[status] || STATUS_CONFIG.Draft;
  return cfg.label;
};
